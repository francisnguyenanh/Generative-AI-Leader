# Generative AI Leader – Checklist theo Exam Guide chính thức

- **Nguồn đối chiếu (đã tải và đọc đầy đủ):**
  - Exam guide: https://services.google.com/fh/files/misc/generative_ai_leader_exam_guide_english.pdf
  - Study guide: https://services.google.com/fh/files/misc/generative_ai_leader_study_guide_english.pdf
  - Trang chứng chỉ: https://cloud.google.com/learn/certification/generative-ai-leader
- **Cách dùng:** mỗi mục tiêu thi (objective) bên dưới ghi rõ file markdown nào đã có nội dung. Mục "Bổ sung" là kiến thức exam guide/study guide nhắc tới nhưng 5 module + bonus guide chưa có hoặc chỉ nhắc rất mỏng.
- Ký hiệu nguồn: **[Guide]** = lấy từ exam guide/study guide chính thức; **[Claude]** = kiến thức bổ sung của Claude, nên đối chiếu thêm.

## 0. Thông tin kỳ thi (theo trang chính thức, kiểm tra lại trước khi đặt lịch)

| Mục | Nội dung |
|---|---|
| Thời lượng | 90 phút |
| Số câu | 50–60 câu trắc nghiệm |
| Phí | 99 USD (chưa gồm thuế) |
| Ngôn ngữ | Anh, Nhật, Tây Ban Nha, Bồ Đào Nha |
| Hình thức | Thi online (có giám sát) hoặc tại trung tâm |
| Hiệu lực | 3 năm |
| Điều kiện | Không có |
| Đối tượng | Mọi vai trò, không cần kinh nghiệm kỹ thuật. Trọng tâm là lãnh đạo chiến lược và ảnh hưởng, **không phải triển khai kỹ thuật** (chỉ cần hiểu khái niệm). |

Trọng số: Section 1 ~30%, Section 2 ~35%, Section 3 ~20%, Section 4 ~15%.

## Tên sản phẩm hiện hành (xác nhận từ guide chính thức)

Guide chính thức hiện dùng các tên sau, trùng với tên trong các deck PDF (không phải lỗi OCR):

| Tên trong guide | Ghi chú |
|---|---|
| **Gemini Enterprise Agent Platform / "Agent Platform"** | Nền tảng ML hợp nhất của Google Cloud (trước đây gọi là Vertex AI). Chứa Model Garden, Agent Search, AutoML, Feature Store, Pipelines, Model Registry, Model Monitoring. |
| **Agent Search** (trên Agent Platform) | Giải pháp tìm kiếm và gợi ý cho doanh nghiệp, kèm RAG dựng sẵn. |
| **Agent Studio** | Xây dựng và triển khai ứng dụng AI **cấp production, quy mô lớn**. |
| **Google AI Studio** | Miễn phí, dùng để **prototype nhanh** với Gemini API. |
| **Gemini Enterprise** | Tìm kiếm tùy biến và agent hội thoại truy cập dữ liệu nội bộ. Guide nêu ví dụ: Gemini Notebook API, multimodal search, custom agents. |
| **Gemini Notebook** | Trợ lý nghiên cứu dựa trên nguồn do người dùng upload (trước đây là NotebookLM). |
| **Gemini Enterprise for Customer Experience** | Gồm Customer Experience Agent Studio (chatbot CX), Agent Assist, Customer Experience Insights, CCaaS. Trong exam guide mục 2.3 gọi là "Customer Engagement Suite" (Conversational Agents, Agent Assist, Conversational Insights, CCaaS). |

## Section 1: Fundamentals of gen AI (~30%)

### 1.1 Khái niệm cốt lõi và use case
| Mục tiêu | Đã có trong | Trạng thái |
|---|---|---|
| Định nghĩa AI, NLP, ML, gen AI, foundation model, multimodal FM, diffusion model, **prompt tuning**, prompt engineering, LLM | module1–2, bonus | Thiếu: **prompt tuning**; diffusion chỉ nhắc ít |
| 3 cách học ML (supervised, unsupervised, reinforcement) | module2, bonus | Đủ |
| 5 giai đoạn ML lifecycle + công cụ Google Cloud | module2 (slide ~29), module3 | Đủ |
| Cách chọn foundation model (modality, context window, security, availability/reliability, cost, performance, fine-tuning, customization) | module3, module2 | Đủ |
| Use case create / summarize / discover / automate | module1 | Đủ |

### 1.2 Dữ liệu
| Mục tiêu | Đã có trong | Trạng thái |
|---|---|---|
| Chất lượng và khả năng tiếp cận dữ liệu (completeness, consistency, relevance, availability, cost, format) | module2 | Đủ |
| Structured và unstructured | module2 | Đủ (đã sửa lỗi hoán đổi ở slide 19–20) |
| Labeled và unlabeled | module2, bonus | Đủ |

### 1.3 5 tầng hệ sinh thái gen AI
Infrastructure, Models, Platforms, Agents, Applications. Đã có đầy đủ trong module3 và bonus.

### 1.4 Foundation model của Google
Gemini, Gemma, Imagen, Veo. Có trong module1–3, bonus.

**Bổ sung [Guide]:**
- **Gemini:** đa phương thức, hội thoại nâng cao, tạo nội dung, hỏi đáp.
- **Gemma:** mô hình nhẹ, tùy biến, hợp triển khai **local** và ứng dụng chuyên biệt (open model).
- **Imagen:** diffusion model **text → ảnh**.
- **Veo:** tạo **video** từ văn bản hoặc ảnh tĩnh.
- **Prompt tuning [Claude]:** điều chỉnh mô hình bằng cách học một lớp prompt/embedding mềm thay vì cập nhật toàn bộ trọng số. Nhẹ hơn fine-tuning đầy đủ. Hay bị nhầm với prompt engineering, vốn chỉ là viết prompt tốt và không thay đổi mô hình.

## Section 2: Google Cloud's gen AI offerings (~35%)

### 2.1 Thế mạnh của Google Cloud
| Ý trong guide | Trạng thái |
|---|---|
| AI-first, đổi mới liên tục | Có (module3, bonus) |
| Nền tảng enterprise-ready: responsible, secure, private, reliable, scalable | Có |
| Hệ sinh thái toàn diện: gen AI tích hợp khắp sản phẩm Google | Có |
| Cách tiếp cận mở (open approach) | Có, nhưng mỏng (module3, bonus) |
| Hạ tầng tối ưu AI: **AI Hypercomputer**, **TPU**, GPU, data center | TPU có nhiều, **Hypercomputer chỉ nhắc 1–2 lần** |
| Kiểm soát dữ liệu: security, privacy, governance, model first-party hàng đầu và mở, giải pháp dựng sẵn/tùy biến, agent | Có |
| Dân chủ hóa phát triển AI: low-code/no-code, pre-trained models, APIs | Có |

**Bổ sung [Guide]:** AI Hypercomputer = hạ tầng để **train, tune và serve** workload AI (gồm TPU, GPU, mạng, phần mềm). Đây là phần "hạ tầng" của 5 tầng gen AI.

### 2.2 Offering dựng sẵn cho công việc
| Mục | Chức năng chính | Trạng thái |
|---|---|---|
| **Gemini app / Gemini Advanced** | Chatbot gen AI của Google (viết, tóm tắt, dịch, tạo ảnh). Gemini Advanced: thêm tính năng và bảo vệ cấp doanh nghiệp. **Gems** = trợ lý AI cá nhân hóa (dùng như template prompt). | Gems chỉ có trong bonus, nên đọc thêm |
| **Gemini Enterprise** | Tìm kiếm tùy biến, agent hội thoại truy cập dữ liệu nội bộ, multimodal search, Gemini Notebook API | Có (module1, module5) |
| **Gemini for Google Workspace** | Tích hợp trong Gmail (soạn mail), Slides (tạo ảnh), Meet (tóm tắt) | Có |
| **Gemini for Google Cloud** | Trợ lý cho dev và vận hành: viết/debug code, tối ưu cloud app, phân tích dữ liệu trong BigQuery, tăng cường bảo mật | Có (module4) |
| **Gemini Notebook** | Upload tài liệu, tóm tắt, hỏi đáp, ý tưởng, **luôn bám nguồn đã upload** | Có |

### 2.3 Cải thiện trải nghiệm khách hàng
| Mục | Trạng thái |
|---|---|
| External search: **Agent Search** trên Agent Platform, Google Search | Có (module4–5) |
| Customer Engagement Suite: **Conversational Agents**, **Agent Assist**, **Conversational Insights**, **CCaaS** | Agent Assist và CCaaS có. **Conversational Insights chỉ nhắc ở bonus**. |

**Bổ sung [Guide]:**
- **Conversational Agents / CX Agent Studio:** chatbot/agent phục vụ khách hàng.
- **Agent Assist:** hỗ trợ nhân viên contact center **đang trực tiếp** nói chuyện với khách.
- **Conversational Insights / Customer Experience Insights:** phân tích toàn bộ giao tiếp với khách hàng để rút insight.
- **CCaaS (Contact Center as a Service):** giải pháp contact center cloud-native cấp doanh nghiệp. Các công cụ CX ở trên được xây trên nền này.

### 2.4 Hỗ trợ developer
| Mục | Trạng thái |
|---|---|
| Agent Platform: Model Garden, Agent Search, **AutoML** | Model Garden có. **Model Builder** (train/dùng model riêng) chưa có ở đâu. |
| RAG offerings: Agent Search RAG dựng sẵn, **RAG APIs** | RAG có, nhưng **"RAG APIs" chỉ nhắc ở bonus** |
| Dùng Agent Platform xây custom agent | Có (module5) |

**Bổ sung [Guide]:**
- Trên Agent Platform, xử lý model theo 2 hướng: **Model Garden** (chọn model Google, bên thứ ba, open-source có sẵn) và **Model Builder** (train/dùng model riêng: hoàn toàn tùy biến bằng ML framework, hoặc **AutoML** với ít kiến thức kỹ thuật).
- **Agent Platform MLOps tools** giúp đội AI cộng tác, giám sát và cải thiện model.
- Truy cập **Gemini API** qua: công cụ dev Google Cloud (Cloud Run functions, Cloud Run) và low-code/no-code (**Apps Script**, **AppSheet**).

### 2.5 Công cụ cho gen AI agent
| Mục | Trạng thái |
|---|---|
| 4 loại tooling: **Extensions** (nối dịch vụ ngoài qua API), **Functions** (hành động/tác vụ cụ thể), **Data stores** (truy cập thông tin), **Plugins** (thêm kỹ năng/tích hợp) | Có (module5) |
| Dịch vụ và API dựng sẵn: Cloud Storage, databases, Cloud Functions, Cloud Run, Agent Platform, **Speech-to-Text, Text-to-Speech, Translation, Document Translation, Document AI, Cloud Vision, Cloud Video Intelligence, Natural Language, Google Cloud API Library** | **Thiếu nhiều**: Document Translation chưa có, Video Intelligence và Natural Language chỉ nhắc 1 lần |
| Khi nào dùng Agent Studio và khi nào dùng Google AI Studio | Có (module5) |

**Bổ sung [Guide] – bảng API dựng sẵn (hay ra thi dạng "chọn API phù hợp"):**

| API | Làm gì | Từ khóa nhận diện |
|---|---|---|
| Speech-to-Text | Chuyển giọng nói thành văn bản, phiên âm audio/video | phiên âm, transcribe |
| Text-to-Speech | Văn bản thành giọng nói tự nhiên, giao diện giọng nói | voice UI |
| Translation API | Dịch văn bản, tài liệu, website, audio/video | dịch |
| Document Translation | Dịch tài liệu có định dạng, **giữ nguyên layout** | giữ layout |
| Document AI | Trích xuất dữ liệu từ tài liệu nhiều định dạng, tự động hóa xử lý tài liệu, tóm tắt | hóa đơn, form |
| Cloud Vision | Phân tích ảnh: gắn tag theo vật thể/chữ, nhận diện khuôn mặt/địa danh; kiểm duyệt nội dung, tìm kiếm trực quan | ảnh |
| Cloud Video Intelligence | Phân tích video, trích xuất thông tin; gợi ý nội dung, tìm video, phân tích media | video |
| Natural Language API | Rút insight từ văn bản phi cấu trúc: **sentiment**, phân loại nội dung, trích xuất entity | cảm xúc, entity |

**Phân biệt agent [Guide]:** Deterministic (đường đi định sẵn), Generative (định nghĩa bằng ngôn ngữ tự nhiên qua LLM), **Hybrid** (kết hợp cả hai, rất mạnh). Thành phần agent: **Model + Tools + Reasoning loop**.

**Edge AI [Guide]:** chạy AI trên thiết bị/server gần nơi phát sinh dữ liệu. **LiteRT** giúp triển khai model lên edge device. **Gemini Nano** là model gọn nhẹ nhất của Google, thiết kế để chạy trên thiết bị.

## Section 3: Techniques to improve gen AI model output (~20%)

### 3.1 Vượt qua giới hạn của foundation model
| Mục | Trạng thái |
|---|---|
| Giới hạn: data dependency, knowledge cutoff, bias, fairness, hallucination, edge cases | Có (module2, module4) |
| Cách khắc phục: grounding, RAG, prompt engineering, fine-tuning, HITL | Có |
| Giám sát và đánh giá liên tục (auto model upgrade, KPI, security patch, versioning, performance tracking, drift monitoring, **Feature Store**) | Có nhưng rải rác (module3) |

**Bổ sung [Guide] – công cụ quản lý vòng đời model trên Agent Platform:**

| Việc cần làm | Công cụ |
|---|---|
| Versioning | **Model Registry** |
| Performance tracking | xem metric của model |
| Drift monitoring (theo dõi độ chính xác giảm dần theo thời gian) | **Model Monitoring** |
| Quản lý feature/dữ liệu | **Feature Store** |
| Lưu trữ, tổ chức model một chỗ | **Model Garden** |
| Tự động hóa tác vụ ML | **Pipelines** |

**HITL [Guide]:** các tình huống dùng gồm content moderation, ứng dụng nhạy cảm (y tế, tài chính), quyết định rủi ro cao, **pre-generation review** (chuyên gia duyệt trước khi triển khai) và **post-generation review** (duyệt liên tục sau triển khai).

### 3.2 Prompt engineering
| Kỹ thuật | Trạng thái |
|---|---|
| Zero-shot, one-shot, few-shot, role, prompt chaining | Có (module4) |
| CoT, ReAct | Có (module5) |
| **Metaprompting** | **Chưa có ở đâu** |

**Bổ sung [Guide]:**
- **Metaprompting:** dùng prompt để hướng dẫn AI **tạo, sửa hoặc diễn giải các prompt khác**.
- **CoT:** dẫn dắt LLM giải quyết vấn đề bằng ví dụ có các bước suy luận trung gian.
- **ReAct (reason + act):** cho LLM vừa suy luận vừa hành động trên truy vấn của người dùng.
- **Prompt chaining** theo study guide: trao đổi qua lại nhiều lượt trong cùng cuộc hội thoại để giữ ngữ cảnh.
- Tối ưu quy trình prompt: tái dùng prompt (template), prompt chaining, lưu thông tin trong Gemini, **Gems**.

### 3.3 Grounding và tham số sampling
| Mục | Trạng thái |
|---|---|
| Grounding với dữ liệu doanh nghiệp (first-party), dữ liệu bên thứ ba, dữ liệu thế giới | Có (module4), chưa rõ 3 loại |
| RAG ảnh hưởng đầu ra thế nào | Có |
| Offering: Pre-built RAG với Agent Search, **RAG APIs**, **Grounding with Google Search** | Có rải rác, RAG APIs mỏng |
| Tham số sampling: token count, temperature, top-p, safety settings, output length | Có (module5, bonus) |

**Bổ sung [Guide]:**
- 3 nguồn grounding: **first-party enterprise data** (dữ liệu nội bộ), **third-party data**, **world data** (Google Search).
- RAG 4 bước: **Retrieval → Augmentation → Generation → Iteration (tùy chọn)**.
- Tham số: **Temperature** cao = sáng tạo/ngẫu nhiên hơn. **Top-p** = ngưỡng xác suất tích lũy của token được xét (cũng điều khiển độ ngẫu nhiên). **Token count** = số "mảnh" văn bản. **Output length** = độ dài tối đa. **Safety settings** = lọc nội dung có hại.
- **Context window:** lượng văn bản model có thể xét; cửa sổ lớn hơn thì chi phí tính toán cao hơn.
- **Fine-tuning:** tăng hiệu năng của model cho tác vụ/lĩnh vực cụ thể.

## Section 4: Business strategies (~15%)

### 4.1 Các bước triển khai gen AI
| Mục | Trạng thái |
|---|---|
| Loại giải pháp, yếu tố ảnh hưởng nhu cầu, chọn giải pháp phù hợp, các bước tích hợp, đo tác động | Có (module1, module5) |

**Bổ sung [Guide] – câu hỏi cần cân nhắc trước dự án:**
- **Needs:** Scale (bao nhiêu user?), Customization (chuyên biệt đến đâu?), User interaction (user tương tác thế nào?), Privacy (dữ liệu nhạy cảm đến đâu?), Latency (thời gian phản hồi chấp nhận được?), Connectivity (kết nối mạng ra sao?).
- **Resources:** People (có chuyên gia AI không?), Money (ngân sách?), Time (tiến độ?).
- **Chiến lược gen AI:** kết hợp **top-down** (lãnh đạo đặt tầm nhìn) và **bottom-up** (nhân viên tìm ứng dụng thực tế, phản hồi). Các trụ: Strategic focus, Exploration, Responsible AI, Resourcing, Impact, Continuous improvement.
- **Kế hoạch:** vision rõ ràng → ưu tiên use case → đầu tư năng lực → quản lý thay đổi → đo giá trị → thúc đẩy responsible AI.

### 4.2 Secure AI
| Mục | Trạng thái |
|---|---|
| Bảo mật xuyên suốt ML lifecycle | Có (module2) |
| **SAIF** (Secure AI Framework) | Có (module2, bonus) |
| Công cụ: secure-by-design infrastructure, **IAM**, **Security Command Center**, workload monitoring | Có |

**Nhắc lại [Guide]:** IAM kiểm soát quyền truy cập tài nguyên. Security Command Center cho thấy tư thế bảo mật (security posture). Workload monitoring giúp xây dựng và duy trì hệ thống AI an toàn. SAIF giúp tổ chức quản lý rủi ro mô hình AI/ML.

### 4.3 Responsible AI
| Mục | Trạng thái |
|---|---|
| Tầm quan trọng và tính minh bạch | Có |
| Quyền riêng tư: rủi ro, **anonymization và pseudonymization** | Có, mỏng (module2, bonus) |
| Chất lượng dữ liệu, bias, fairness | Có |
| **Accountability** và **explainability** | Có (module4) |

**Bổ sung [Claude]:**
- **Anonymization (ẩn danh hóa):** loại bỏ/biến đổi dữ liệu để **không thể** truy ngược về cá nhân.
- **Pseudonymization (giả danh hóa):** thay định danh bằng mã/biệt danh. Nếu có thông tin bổ sung (khóa ánh xạ) thì **vẫn có thể** truy ngược, nên vẫn là dữ liệu cá nhân cần bảo vệ. Hay ra thi dạng phân biệt hai khái niệm này.
- Responsible AI phải được xét **suốt vòng đời**: chuẩn bị dữ liệu, huấn luyện, triển khai, giám sát liên tục.

## Câu hỏi tự kiểm tra nhanh (tổng hợp theo exam guide) [Claude]

1. Doanh nghiệp cần phiên âm cuộc gọi của contact center thành văn bản. API nào? → **Speech-to-Text**.
2. Cần dịch hợp đồng PDF mà vẫn giữ nguyên bố cục. → **Document Translation API**.
3. Cần phát hiện cảm xúc trong review của khách. → **Natural Language API** (sentiment).
4. Nhân viên đang nói chuyện trực tiếp với khách cần gợi ý theo thời gian thực. → **Agent Assist**.
5. Muốn thử prototype nhanh miễn phí với Gemini; sau đó triển khai production quy mô lớn dùng gì? → **Google AI Studio** để prototype, **Agent Studio** cho production.
6. Phát hiện độ chính xác model giảm dần theo thời gian dùng gì? → **Model Monitoring** (drift monitoring). Theo dõi phiên bản → **Model Registry**.
7. Tổ chức muốn model trả lời dựa trên dữ liệu nội bộ cập nhật, không phải huấn luyện lại. → **Grounding / RAG** (Agent Search hoặc RAG APIs).
8. Khác biệt chính giữa anonymization và pseudonymization? → Anonymization không thể truy ngược. Pseudonymization có thể truy ngược nếu có khóa ánh xạ.
9. Tạo "template prompt" dùng lại trong Gemini app? → **Gems**.
10. Agent kết hợp đường đi định sẵn với hội thoại tự nhiên? → **Hybrid agent**.
