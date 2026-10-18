import os
import re
import json
import glob
from pathlib import Path
import openpyxl

def parse_options(options_raw):
    """
    Tách chuỗi các lựa chọn (A) ..., B) ...) thành danh sách dictionary {key, text}.
    """
    if not options_raw:
        return []
    
    lines = [line.strip() for line in str(options_raw).split('\n') if line.strip()]
    options = []
    
    current_key = None
    current_text = []

    for line in lines:
        match = re.match(r'^([A-E])\)\s*(.*)', line)
        if match:
            if current_key:
                options.append({
                    "key": current_key,
                    "text": " ".join(current_text).strip()
                })
            current_key = match.group(1)
            current_text = [match.group(2)]
        else:
            if current_key:
                current_text.append(line)
            else:
                current_text.append(line)

    if current_key:
        options.append({
            "key": current_key,
            "text": " ".join(current_text).strip()
        })
        
    return options

def parse_answers(ans_raw):
    """
    Chuẩn hóa đáp án thành danh sách các chữ cái viết hoa (VD: 'A, C' -> ['A', 'C']).
    """
    if not ans_raw:
        return []
    return [ans.strip().upper() for ans in re.split(r'[,;\s]+', str(ans_raw).strip()) if ans.strip()]

def convert_single_excel(excel_path):
    wb = openpyxl.load_workbook(excel_path, data_only=True)
    sheet = wb.active

    questions = []
    for r in range(2, sheet.max_row + 1):
        topic = sheet.cell(row=r, column=1).value
        question_text = sheet.cell(row=r, column=2).value
        options_raw = sheet.cell(row=r, column=3).value
        ans_raw = sheet.cell(row=r, column=4).value
        
        if not question_text or not str(question_text).strip():
            continue
            
        topic = str(topic).strip() if topic else "General"
        question_text = str(question_text).strip()
        
        parsed_options = parse_options(options_raw)
        parsed_answers = parse_answers(ans_raw)
        q_type = "multiple" if len(parsed_answers) > 1 else "single"
        
        questions.append({
            "id": len(questions) + 1,
            "topic": topic,
            "question": question_text,
            "type": q_type,
            "options": parsed_options,
            "answer": parsed_answers,
            "explanation": ""
        })
    return questions

def extract_set_num(fname):
    """
    Trích xuất số thứ tự của bộ đề (VD: '1.xlsx' -> 1, 'Generative_AI_Leader_Full_Exam_60Q_Set10.xlsx' -> 10).
    """
    m = re.search(r'(?:Set|set|SET)[_\s]?(\d+)', fname)
    if m:
        return int(m.group(1))
    m2 = re.match(r'^(\d+)', fname)
    if m2:
        return int(m2.group(1))
    return None

def run_conversion():
    base_dir = Path(__file__).resolve().parent
    input_dir = base_dir / "input"
    output_dir = base_dir / "Quiz_data"
    os.makedirs(output_dir, exist_ok=True)
    
    excel_files = sorted(glob.glob(str(input_dir / "*.xlsx")))
    manifest_sets = []
    
    TOTAL_SETS = 10
    detected_sets = {}
    
    for fpath in excel_files:
        fname = Path(fpath).stem
        set_num = extract_set_num(fname)
        
        questions = convert_single_excel(fpath)
        set_id = f"set_{set_num}" if set_num else f"set_{fname}"
        
        # Ghi file json
        json_file = output_dir / f"{set_id}.json"
        with open(json_file, "w", encoding="utf-8") as f:
            json.dump(questions, f, ensure_ascii=False, indent=2)
            
        # Ghi file js (hỗ trợ offline và direct file://)
        js_file = output_dir / f"{set_id}.js"
        with open(js_file, "w", encoding="utf-8") as f:
            f.write(f"window.QUIZ_DATA_{set_id.upper()} = ")
            json.dump(questions, f, ensure_ascii=False, indent=2)
            f.write(";\n")
            
        detected_sets[set_num if set_num else fname] = {
            "id": set_id,
            "count": len(questions),
            "file": Path(fpath).name
        }
        print(f"✅ Đã xuất {set_id} ({len(questions)} câu hỏi) từ {Path(fpath).name}")

    # Tạo manifest cho 10 bộ đề
    for i in range(1, TOTAL_SETS + 1):
        if i in detected_sets:
            info = detected_sets[i]
            manifest_sets.append({
                "id": info["id"],
                "setNumber": i,
                "title": f"Bộ đề thi số {i}",
                "description": f"Bộ đề thực hành Generative AI Leader - {info['count']} câu hỏi trắc nghiệm chuẩn.",
                "questionCount": info["count"],
                "durationMinutes": 90,
                "isAvailable": True,
                "dataFile": f"{info['id']}.json",
                "jsFile": f"{info['id']}.js",
                "jsVar": f"QUIZ_DATA_{info['id'].upper()}"
            })
        else:
            manifest_sets.append({
                "id": f"set_{i}",
                "setNumber": i,
                "title": f"Bộ đề thi số {i}",
                "description": f"Đang chuẩn bị câu hỏi. Thêm file đề Set {i} vào input/ để kích hoạt.",
                "questionCount": 0,
                "durationMinutes": 90,
                "isAvailable": False,
                "dataFile": f"set_{i}.json",
                "jsFile": f"set_{i}.js",
                "jsVar": f"QUIZ_DATA_SET_{i}"
            })
            
    # Ghi manifest
    manifest_json = output_dir / "manifest.json"
    with open(manifest_json, "w", encoding="utf-8") as f:
        json.dump(manifest_sets, f, ensure_ascii=False, indent=2)

    manifest_js = output_dir / "manifest.js"
    with open(manifest_js, "w", encoding="utf-8") as f:
        f.write("window.QUIZ_MANIFEST = ")
        json.dump(manifest_sets, f, ensure_ascii=False, indent=2)
        f.write(";\n")
        
    # Đồng bộ questions.json mặc định trỏ về set_1
    if 1 in detected_sets:
        with open(output_dir / "questions.json", "w", encoding="utf-8") as f:
            with open(output_dir / "set_1.json", "r", encoding="utf-8") as src:
                f.write(src.read())

    print(f"\n🎉 HOÀN THÀNH CHUYỂN ĐỔI:")
    available_nums = [i for i in range(1, TOTAL_SETS + 1) if i in detected_sets]
    missing_nums = [i for i in range(1, TOTAL_SETS + 1) if i not in detected_sets]
    print(f"👉 Các đề đã sẵn sàng: {available_nums}")
    if missing_nums:
        print(f"👉 Các đề còn thiếu file trong input/: {missing_nums}")

if __name__ == "__main__":
    run_conversion()
