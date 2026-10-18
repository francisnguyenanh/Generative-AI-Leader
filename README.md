# Generative AI Leader Exam Practice Portal 🚀

Nền tảng thi thử chứng chỉ **Google Cloud Generative AI Leader** với 10 bộ đề thi chuẩn hóa (tổng cộng 600 câu hỏi trắc nghiệm), hỗ trợ chế độ làm bài có bấm giờ 90 phút, chấm điểm phân tích theo 4 lĩnh vực và xem lại chi tiết từng câu hỏi.

---

## 🌟 Tính Năng Nổi Bật

- **10 Bộ đề thi hoàn chỉnh (600 câu hỏi)**: Bám sát nội dung và phân bổ phần trăm của chứng chỉ.
- **Đồng hồ đếm ngược 90 phút**: Có cơ chế cảnh báo màu sắc khi sắp hết giờ và tự động nộp bài khi hết thời gian.
- **Phân loại câu hỏi thông minh**:
  - Tự động nhận diện câu hỏi chọn 1 đáp án (Radio) và câu hỏi chọn nhiều đáp án (Checkbox).
  - Đánh dấu xem lại (Flag / Cờ) cho các câu phân vân.
- **Bảng ma trận câu hỏi (Question Matrix)**: Giúp thí sinh dễ dàng theo dõi tiến độ câu đã làm, chưa làm và chuyển câu nhanh chóng.
- **Phân tích kết quả theo 4 lĩnh vực thi**:
  1. *Generative AI Fundamentals (30%)*
  2. *Google Cloud Gen AI Solutions (35%)*
  3. *Improving Gen AI Model Output (20%)*
  4. *Business Strategy for Gen AI (15%)*
- **Xem lại đáp án chi tiết**: Hiển thị lựa chọn của thí sinh so với đáp án chính xác, phân loại trực quan câu đúng/sai kèm bộ lọc tiện lợi.
- **Giao diện hiện đại (Light & Dark Theme)**: Màu sắc tương phản cao theo chuẩn tiếp cận WCAG, mượt mà trên cả Desktop lẫn Thiết bị di động (Mobile).
- **Thuần tĩnh (Vanilla Static Web)**: Tải trang siêu tốc, không phụ thuộc framework nặng, sẵn sàng chạy ngay trên **GitHub Pages**.

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
- **Python (openpyxl)**: Dùng để trích xuất và chuyển đổi các file đề thi từ Excel sang định dạng JSON/JS.
