import os
import re
import io
import glob
from pathlib import Path
import pymupdf
import pytesseract
from PIL import Image

def is_cjk(char):
    if not char:
        return False
    cp = ord(char)
    return (
        (0x4E00 <= cp <= 0x9FFF) or   # CJK Unified Ideographs
        (0x3040 <= cp <= 0x309F) or   # Hiragana
        (0x30A0 <= cp <= 0x30FF) or   # Katakana
        (0x3000 <= cp <= 0x303F) or   # CJK Symbols and Punctuation
        (0xFF00 <= cp <= 0xFFEF)      # Halfwidth and Fullwidth Forms
    )

def merge_cjk_line_pair(prev, curr):
    if not prev:
        return curr
    if not curr:
        return prev
    if is_cjk(prev[-1]) or is_cjk(curr[0]):
        return prev + curr
    return prev + " " + curr

def merge_cjk_lines(lines):
    if not lines:
        return ""
    res = lines[0]
    for l in lines[1:]:
        res = merge_cjk_line_pair(res, l)
    return res

def format_bullet_line(line):
    line = line.strip()
    if not line:
        return ""
    if line.startswith('○') or line.startswith('◇') or line.startswith('▷'):
        return "  - " + line[1:].strip()
    if line.startswith(('●', '■', '・', '★', '◆', '▶', 'ー')):
        return "- " + line[1:].strip()
    return line

def process_text_page(page, page_num):
    w = page.rect.width
    h = page.rect.height

    # Extract hyperlinks on this page
    links = page.get_links()
    valid_links = []
    for l in links:
        uri = l.get('uri')
        rect = l.get('from')
        if uri and rect:
            valid_links.append({'rect': rect, 'uri': uri})

    # Detect green highlighted rects (correct answer in quiz slides)
    green_rects = []
    for d in page.get_drawings():
        if d.get('fill'):
            fill = d['fill']
            if len(fill) >= 3:
                r, g, b = fill[0], fill[1], fill[2]
                if g > 0.88 and r < 0.94 and (g > r) and (g > b):
                    green_rects.append(d['rect'])

    blocks = page.get_text('blocks')
    cleaned_blocks = []
    for b in blocks:
        raw_text = b[4]
        # Remove material/font icons (Unicode Private Use Area)
        raw_text = re.sub(r'[\ue000-\uf8ff]', '', raw_text)
        raw_lines = [l.strip() for l in raw_text.split('\n') if l.strip()]
        lines = [l for l in raw_lines if l not in ['機密 / 専有情報', 'Proprietary + Confidential', 'Proprietary + Conﬁdential', '言語切替']]
        if not lines:
            continue
        cleaned_blocks.append({
            'bbox': b[:4],
            'x0': b[0], 'y0': b[1], 'x1': b[2], 'y1': b[3],
            'lines': lines
        })

    if not cleaned_blocks:
        return f"## Slide {page_num}\n\n*(Trang trống hoặc chỉ chứa hình ảnh)*\n\n"

    # Match hyperlinks to text lines
    for b in cleaned_blocks:
        b_rect = pymupdf.Rect(b['bbox'])
        for vl in valid_links:
            if b_rect.intersects(vl['rect']):
                # If text already contains the exact URL, don't duplicate
                new_lines = []
                for l in b['lines']:
                    if l.startswith('http'):
                        new_lines.append(l)
                    elif not re.search(r'\[.*?\]\(.*?\)', l) and l in ['ヘルプページはこちら', '公式サイト', '登録画面はこちら']:
                        new_lines.append(f"[{l}]({vl['uri']})")
                    else:
                        new_lines.append(l)
                b['lines'] = new_lines

    # Pair standalone number badges (01, 02...) with their content block
    number_blocks = [b for b in cleaned_blocks if re.match(r'^\d{1,2}$', merge_cjk_lines(b['lines']))]
    other_blocks = [b for b in cleaned_blocks if b not in number_blocks]

    for num in number_blocks:
        num_val = int(merge_cjk_lines(num['lines']))
        # find matching content block to the right
        candidates = [b for b in other_blocks if b['x0'] > num['x0'] - 20 and abs(b['y0'] - num['y0']) < 35]
        if candidates:
            target = min(candidates, key=lambda b: abs(b['y0'] - num['y0']))
            # Prefix target first line with number
            target['lines'][0] = f"{num_val}. " + target['lines'][0]
        else:
            other_blocks.append(num)

    cleaned_blocks = other_blocks

    # Separate slide title
    title = ""
    top_candidates = [b for b in cleaned_blocks if b['y0'] < h * 0.22]
    body_blocks = [b for b in cleaned_blocks if b['y0'] >= h * 0.22]

    # Check for title
    if len(cleaned_blocks) <= 3 and not any(b['lines'][0].startswith(('●', '○', 'A.', 'B.', '1.')) for b in cleaned_blocks):
        # Section title slide
        title_parts = [merge_cjk_lines(b['lines']) for b in sorted(cleaned_blocks, key=lambda x: (x['y0'], x['x0']))]
        title = " - ".join(title_parts)
        return f"## Slide {page_num}: {title}\n\n"

    slide_title_parts = []
    for b in top_candidates:
        first_line = b['lines'][0]
        if not first_line.startswith(('●', '○', '■', '・', 'A.', 'B.', 'C.', 'D.', '1.', '2.', '3.', '4.', '5.')):
            slide_title_parts.append(merge_cjk_lines(b['lines']))
        else:
            body_blocks.append(b)

    if slide_title_parts:
        title = " - ".join(slide_title_parts)

    # Detect multi-column layout in body
    left_col = [b for b in body_blocks if b['x1'] <= w * 0.52]
    right_col = [b for b in body_blocks if b['x0'] >= w * 0.46]
    spanning = [b for b in body_blocks if b not in left_col and b not in right_col]

    ordered_body = []
    if len(left_col) > 0 and len(right_col) > 0 and len(spanning) == 0:
        left_col.sort(key=lambda b: (b['y0'], b['x0']))
        right_col.sort(key=lambda b: (b['y0'], b['x0']))
        ordered_body = left_col + right_col
    else:
        body_blocks.sort(key=lambda b: (round(b['y0'] / 22) * 22, b['x0']))
        ordered_body = body_blocks

    md_output = []
    if title:
        md_output.append(f"## Slide {page_num}: {title}\n")
    else:
        md_output.append(f"## Slide {page_num}\n")

    for b in ordered_body:
        b_rect = pymupdf.Rect(b['bbox'])
        is_highlighted = any(b_rect.intersects(gr) for gr in green_rects)

        current_item = []
        for l in b['lines']:
            if l.startswith(('●', '○', '■', '・', '★', 'A.', 'B.', 'C.', 'D.', 'E.')) or re.match(r'^\d+\.\s', l):
                if current_item:
                    merged = merge_cjk_lines(current_item)
                    if is_highlighted and re.match(r'^[A-E]\.', merged):
                        md_output.append(f"✅ **{merged}**")
                    else:
                        md_output.append(format_bullet_line(merged))
                    current_item = []
                current_item.append(l)
            else:
                current_item.append(l)

        if current_item:
            merged = merge_cjk_lines(current_item)
            if is_highlighted and re.match(r'^[A-E]\.', merged):
                md_output.append(f"✅ **{merged}**")
            else:
                md_output.append(format_bullet_line(merged))

    return "\n".join(md_output) + "\n\n"

def process_ocr_page(page, page_num):
    pix = page.get_pixmap(dpi=150)
    img = Image.open(io.BytesIO(pix.tobytes('png')))
    txt = pytesseract.image_to_string(img, lang='jpn+eng')
    raw_lines = [l.strip() for l in txt.split('\n') if l.strip()]
    lines = [l for l in raw_lines if l not in ['機密 / 専有情報', 'Proprietary + Confidential', '言語切替']]

    title = ""
    body_lines = []
    for i, l in enumerate(lines):
        if i == 0 and len(l) < 50:
            title = l
        else:
            if l.startswith(('●', '■', '・', '★', '◆', '▶', 'ー')):
                body_lines.append("- " + l[1:].strip())
            elif l.startswith(('○', '◇', '▷')):
                body_lines.append("  - " + l[1:].strip())
            else:
                body_lines.append(l)

    md = []
    if title:
        md.append(f"## Slide {page_num}: {title}\n")
    else:
        md.append(f"## Slide {page_num}\n")
    md.append("\n".join(body_lines))
    return "\n".join(md) + "\n\n"

def convert_pdf(pdf_path, output_dir):
    pdf_name = Path(pdf_path).name
    md_name = Path(pdf_path).stem + ".md"
    out_path = Path(output_dir) / md_name

    print(f"Bắt đầu chuyển đổi: {pdf_name}...")
    doc = pymupdf.open(pdf_path)
    total_pages = len(doc)

    # Check if doc has text
    sample_text = "".join(doc[i].get_text('text').strip() for i in range(min(5, total_pages)))
    needs_ocr = len(sample_text) < 20

    header_title = Path(pdf_path).stem.replace('-', ' ').title()
    content = [
        f"# {header_title}\n\n",
        f"- **Tài liệu nguồn:** `{pdf_name}`\n",
        f"- **Tổng số slide:** {total_pages}\n",
        f"- **Chứng chỉ:** Google Cloud Generative AI Leader\n\n",
        "---\n\n"
    ]

    for p_idx in range(total_pages):
        page = doc[p_idx]
        p_num = p_idx + 1
        if needs_ocr:
            slide_md = process_ocr_page(page, p_num)
        else:
            slide_md = process_text_page(page, p_num)
        content.append(slide_md)
        content.append("---\n\n")

    with open(out_path, 'w', encoding='utf-8') as f:
        f.write("".join(content))

    print(f"-> Hoàn tất: {out_path} ({os.path.getsize(out_path)} bytes)")

def main():
    target_dir = Path("/Users/eikitomobe/Documents/3. Học tập/Lập trình/VS code/Generative-AI-Leader/input-Generative-AI-Leader")
    pdf_files = sorted(glob.glob(str(target_dir / "*.pdf")))

    print(f"Tìm thấy {len(pdf_files)} file PDF cần chuyển đổi:")
    for f in pdf_files:
        print(f" - {Path(f).name}")

    for pdf in pdf_files:
        convert_pdf(pdf, target_dir)

    print("\nĐã chuyển đổi thành công tất cả các file sang Markdown!")

if __name__ == "__main__":
    main()
