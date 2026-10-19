# AI Certification Exam Practice Portal 🚀

Nền tảng thi thử chứng chỉ AI hàng đầu với hệ thống bộ đề chuẩn hóa, hỗ trợ song ngữ Anh - Việt, chế độ bấm giờ thi 90 phút, phân tích điểm chuyên sâu theo từng lĩnh vực và xem lại chi tiết từng câu hỏi.

Hỗ trợ 2 kỳ thi chứng chỉ chính:
1. **Google Cloud Generative AI Leader**: 10 bộ đề thi (600 câu hỏi trắc nghiệm) • 4 Lĩnh vực trọng tâm.
2. **Claude Certified Architect (CCAR-P)**: 10 bộ đề thi (630 câu hỏi tình huống thực tế) • 7 Lĩnh vực năng lực cốt lõi.

---

## 🌟 Tính Năng Nổi Bật

- **Đa dạng kỳ thi (Multi-Certification Support)**: Dễ dàng chuyển đổi trực tiếp giữa kỳ thi **Google Cloud Generative AI Leader** và **Claude Certified Architect (CCAR-P)**.
- **Hệ thống 20 bộ đề thi hoàn chỉnh (1.230 câu hỏi)**:
  - 10 bộ đề thi Google Cloud Generative AI Leader (60 câu/đề).
  - 10 bộ đề thi Claude Certified Architect CCAR-P (63 câu/đề).
- **Hỗ trợ Song ngữ Anh - Việt (Bilingual Display)**:
  - Hiển thị bản dịch tiếng Việt ngay dưới tiếng Anh ở câu hỏi, các đáp án lựa chọn và phần giải thích cho **cả 2 kỳ thi**.
  - Tích hợp nút bật/tắt bản dịch tiếng Việt (`🇻🇳 Dịch TV: Bật/Tắt`) trên thanh điều hướng để linh hoạt luyện thi theo nhu cầu.
- **Đồng hồ đếm ngược 90 phút**: Có cơ chế cảnh báo màu sắc khi sắp hết giờ và tự động nộp bài khi hết thời gian.
- **Phân loại câu hỏi thông minh**:
  - Tự động nhận diện câu hỏi chọn 1 đáp án (Radio) và câu hỏi chọn nhiều đáp án (Checkbox).
  - Đánh dấu xem lại (Flag / Cờ) cho các câu phân vân.
- **Bảng ma trận câu hỏi (Question Matrix)**: Giúp thí sinh dễ dàng theo dõi tiến độ câu đã làm, chưa làm và chuyển câu nhanh chóng.
- **Phân tích kết quả linh hoạt theo từng kỳ thi**:
  - Tự động phân tích theo 4 lĩnh vực đối với kỳ thi Google Cloud GenAI Leader.
  - Tự động phân tích theo 7 lĩnh vực năng lực đối với kỳ thi Claude CCAR-P.
- **Xem lại đáp án chi tiết**: Hiển thị lựa chọn của thí sinh so với đáp án chính xác, phân loại trực quan câu đúng/sai kèm bộ lọc tiện lợi.
- **Giao diện hiện đại (Light & Dark Theme)**: Màu sắc tương phản cao theo chuẩn tiếp cận WCAG, mượt mà trên cả Desktop lẫn Thiết bị di động (Mobile).
- **Thuần tĩnh (Vanilla Static Web)**: Tải trang siêu tốc, không phụ thuộc framework nặng, sẵn sàng chạy ngay trên **GitHub Pages** hoặc mở trực tiếp offline (`file://`).

---

## 📋 Cấu Trúc Định Dạng Dữ Liệu Quiz (Data Format)

Hệ thống hỗ trợ cấu trúc dữ liệu JSON/JS song ngữ với các trường dịch nghĩa tiếng Việt linh hoạt:

```json
[
  {
    "id": 1,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "What is the primary function of an encoder in a traditional Transformer model?",
    "question_vi": "Chức năng chính của bộ mã hóa (encoder) trong mô hình Transformer truyền thống là gì?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "To process the input sequence and create a contextualized representation.",
        "text_vi": "Xử lý chuỗi đầu vào và tạo ra biểu diễn theo ngữ cảnh."
      },
      {
        "key": "B",
        "text": "To convert text into images.",
        "text_vi": "Chuyển đổi văn bản thành hình ảnh."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Correct: To process the input sequence and create a contextualized representation.",
    "explanation_vi": "Chính xác: Xử lý chuỗi đầu vào và tạo ra biểu diễn theo ngữ cảnh."
  }
]
```

### Chuyển Đổi Đề Thi Từ Excel (`convert.py`)
File `convert.py` hỗ trợ tự động nhận diện các cột sau từ file `.xlsx` đặt trong thư mục `input/`:
1. `Topic` / `Chủ đề`
2. `Question` / `Câu hỏi (EN)`
3. `Options` / `Lựa chọn (EN)`
4. `Answer` / `Đáp án`
5. `Explanation` / `Giải thích (EN)`
6. `Question_VI` / `Dịch câu hỏi (VI)` (Tùy chọn)
7. `Options_VI` / `Dịch lựa chọn (VI)` (Tùy chọn)
8. `Explanation_VI` / `Dịch giải thích (VI)` (Tùy chọn)

---

## 🚀 Hướng Dẫn Sử Dụng & Deploy Lên GitHub Pages

### Cách 1: Chạy trực tiếp trên máy
Bạn chỉ cần mở trực tiếp file `index.html` bằng bất kỳ trình duyệt nào (Chrome, Safari, Edge, Firefox).

### Cách 2: Kích hoạt GitHub Pages
1. Vào repository trên GitHub > **Settings** > **Pages**.
2. Tại mục **Build and deployment**:
   - **Source**: Chọn `Deploy from a branch`.
   - **Branch**: Chọn `main` và thư mục `/(root)`.
   - Nhấn **Save**.
3. Trang web sẽ được xuất bản tại: `https://<tên-user-github>.github.io/<tên-repo>/`.

---

## 🛠️ Công Nghệ Sử Dụng

- **HTML5 Semantic & CSS3 Modern** (CSS Variables, Flexbox, Grid, Dark/Light mode).
- **Vanilla JavaScript (ES6+)**.
- **Python (openpyxl)**: Dùng để trích xuất và chuyển đổi các file đề thi từ Excel sang định dạng JSON/JS hỗ trợ song ngữ.
