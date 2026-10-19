window.QUIZ_DATA_CCARP_SET_6 = [
  {
    "id": 1,
    "topic": "Governance, Safety & Risk Management (14%)",
    "question": "A senior architect advising a public university considers a Claude workflow around student service inquiries and campus management platform with strict student data access. The workload is assessed in rollout cohort 6 with 34 representative test cases. A retrieved policy document tells an agent to email confidential data to an outside address. What should the system do?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Treat the instruction as prompt injection and block unauthorized egress",
        "text_vi": "Hãy coi hướng dẫn là tiêm nhắc và chặn lối ra trái phép"
      },
      {
        "key": "B",
        "text": "Remove audit logs and continue",
        "text_vi": "Xóa nhật ký kiểm tra và tiếp tục"
      },
      {
        "key": "C",
        "text": "Ask Claude to determine whether the recipient seems friendly",
        "text_vi": "Yêu cầu Claude xác định xem người nhận có thân thiện không"
      },
      {
        "key": "D",
        "text": "Send data because the instruction came from a document",
        "text_vi": "Gửi dữ liệu vì hướng dẫn đến từ một tài liệu"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Retrieved content is untrusted; independent authorization must prevent exfiltration.",
    "question_vi": "Một kiến ​​trúc sư cấp cao tư vấn cho một trường đại học công lập đang xem xét quy trình làm việc của Claude xoay quanh các yêu cầu về dịch vụ sinh viên và nền tảng quản lý khuôn viên trường với quyền truy cập dữ liệu sinh viên nghiêm ngặt. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 34 trường hợp thử nghiệm đại diện. Một tài liệu chính sách được truy xuất sẽ yêu cầu một đại lý gửi dữ liệu bí mật qua email đến một địa chỉ bên ngoài. Hệ thống nên làm gì?",
    "explanation_vi": "Nội dung được truy xuất không đáng tin cậy; ủy quyền độc lập phải ngăn chặn việc rò rỉ."
  },
  {
    "id": 2,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "question": "A regulated delivery team at an insurance carrier is integrating policy and claim files into claims processing platform; its operational mandate includes regulated evidence retention. The workload is assessed in rollout cohort 6 with 28 representative test cases. A 200-page handbook crowds out recent conversation context. What should context engineering do?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Remove the user's current question to save space",
        "text_vi": "Xóa câu hỏi hiện tại của người dùng để tiết kiệm dung lượng"
      },
      {
        "key": "B",
        "text": "Insert the handbook multiple times for stronger recall",
        "text_vi": "Chèn sổ tay nhiều lần để nhớ lại mạnh mẽ hơn"
      },
      {
        "key": "C",
        "text": "Force maximum output tokens regardless of input quality",
        "text_vi": "Buộc mã thông báo đầu ra tối đa bất kể chất lượng đầu vào"
      },
      {
        "key": "D",
        "text": "Retrieve only relevant passages with provenance and reserve budget for task instructions and output",
        "text_vi": "Chỉ truy xuất các đoạn có liên quan với nguồn gốc xuất xứ và ngân sách dự trữ cho hướng dẫn nhiệm vụ và đầu ra"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Curating relevant grounded context is safer than filling the window indiscriminately.",
    "question_vi": "Nhóm phân phối được quản lý tại một hãng bảo hiểm đang tích hợp các hồ sơ chính sách và yêu cầu bồi thường vào nền tảng xử lý yêu cầu bồi thường; nhiệm vụ hoạt động của nó bao gồm việc lưu giữ bằng chứng theo quy định. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 28 trường hợp thử nghiệm đại diện. Cuốn sổ tay dày 200 trang giới thiệu bối cảnh cuộc trò chuyện gần đây. Kỹ thuật bối cảnh nên làm gì?",
    "explanation_vi": "Việc quản lý bối cảnh có căn cứ có liên quan sẽ an toàn hơn việc lấp đầy cửa sổ một cách bừa bãi."
  },
  {
    "id": 3,
    "topic": "Developer Productivity & Operational Enablement (7%)",
    "question": "A cross-functional team at an international retail chain plans to modernize ERP using store-level inventory updates, while maintaining subsecond checkout availability. The workload is assessed in rollout cohort 6 with 28 representative test cases. A team repeatedly ignores repository conventions when using Claude Code. What artifact most directly helps?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "An unrelated marketing roadmap",
        "text_vi": "Lộ trình tiếp thị không liên quan"
      },
      {
        "key": "B",
        "text": "A maintained CLAUDE.md describing project rules, commands, and boundaries",
        "text_vi": "CLAUDE.md được duy trì mô tả các quy tắc, lệnh và ranh giới của dự án"
      },
      {
        "key": "C",
        "text": "An undocumented tribal checklist",
        "text_vi": "Danh sách kiểm tra bộ lạc không có giấy tờ"
      },
      {
        "key": "D",
        "text": "A user prompt copied manually with no version control",
        "text_vi": "prompt của người dùng được sao chép thủ công mà không có kiểm soát phiên bản"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Repository guidance provides reusable development context; it does not replace code review or permissions.",
    "question_vi": "Một nhóm đa chức năng tại một chuỗi bán lẻ quốc tế có kế hoạch hiện đại hóa ERP bằng cách sử dụng các bản cập nhật hàng tồn kho ở cấp độ cửa hàng, trong khi vẫn duy trì khả năng thanh toán dưới giây. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 28 trường hợp thử nghiệm đại diện. Một nhóm liên tục bỏ qua các quy ước về kho lưu trữ khi sử dụng Mã Claude. Hiện vật nào giúp ích trực tiếp nhất?",
    "explanation_vi": "Hướng dẫn kho lưu trữ cung cấp bối cảnh phát triển có thể tái sử dụng; nó không thay thế việc xem xét mã hoặc quyền."
  },
  {
    "id": 4,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "question": "A senior architect advising a public university considers a Claude workflow around student service inquiries and campus management platform with strict student data access. The workload is assessed in rollout cohort 6 with 33 representative test cases. A vendor integration has unknown future pricing. How should architecture communicate that risk?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Promise zero ongoing operating expense",
        "text_vi": "Hứa hẹn không có chi phí hoạt động liên tục"
      },
      {
        "key": "B",
        "text": "Suppress vendor cost from business cases",
        "text_vi": "Giảm chi phí của nhà cung cấp từ các trường hợp kinh doanh"
      },
      {
        "key": "C",
        "text": "Assume current prices remain permanent",
        "text_vi": "Giả sử giá hiện tại không thay đổi"
      },
      {
        "key": "D",
        "text": "Present sensitivity scenarios, budget guardrails, and measurable cost triggers",
        "text_vi": "Trình bày các kịch bản nhạy cảm, rào cản ngân sách và các yếu tố kích hoạt chi phí có thể đo lường được"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Cost uncertainties should be visible in lifecycle planning.",
    "question_vi": "Một kiến ​​trúc sư cấp cao tư vấn cho một trường đại học công lập đang xem xét quy trình làm việc của Claude xoay quanh các yêu cầu về dịch vụ sinh viên và nền tảng quản lý khuôn viên trường với quyền truy cập dữ liệu sinh viên nghiêm ngặt. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 33 trường hợp thử nghiệm đại diện. Việc tích hợp nhà cung cấp không xác định được mức giá trong tương lai. Kiến trúc nên truyền đạt rủi ro đó như thế nào?",
    "explanation_vi": "Sự không chắc chắn về chi phí sẽ được thể hiện rõ trong việc lập kế hoạch vòng đời."
  },
  {
    "id": 5,
    "topic": "Governance, Safety & Risk Management (14%)",
    "question": "A regulated delivery team at an insurance carrier is integrating policy and claim files into claims processing platform; its operational mandate includes regulated evidence retention. The workload is assessed in rollout cohort 6 with 35 representative test cases. A clinical summarizer assists clinicians but must not autonomously change treatments. Which control fits?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Hide uncertainty to preserve clinician trust",
        "text_vi": "Che giấu sự không chắc chắn để duy trì niềm tin của bác sĩ lâm sàng"
      },
      {
        "key": "B",
        "text": "Allow a patient prompt to override clinical authorization",
        "text_vi": "Cho phép prompt của bệnh nhân ghi đè ủy quyền lâm sàng"
      },
      {
        "key": "C",
        "text": "Require licensed human review before any clinical order is committed",
        "text_vi": "Yêu cầu đánh giá của con người được cấp phép trước khi thực hiện bất kỳ lệnh lâm sàng nào"
      },
      {
        "key": "D",
        "text": "Permit treatment changes when Claude reports high confidence",
        "text_vi": "Cho phép thay đổi cách điều trị khi Claude báo cáo mức độ tin cậy cao"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "High-impact decisions require accountable human review and clear decision authority.",
    "question_vi": "Nhóm phân phối được quản lý tại một hãng bảo hiểm đang tích hợp các hồ sơ chính sách và yêu cầu bồi thường vào nền tảng xử lý yêu cầu bồi thường; nhiệm vụ hoạt động của nó bao gồm việc lưu giữ bằng chứng theo quy định. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 35 trường hợp thử nghiệm đại diện. Trình tóm tắt lâm sàng hỗ trợ các bác sĩ lâm sàng nhưng không được tự động thay đổi phương pháp điều trị. Điều khiển nào phù hợp?",
    "explanation_vi": "Các quyết định có tác động cao đòi hỏi sự xem xét có trách nhiệm của con người và thẩm quyền quyết định rõ ràng."
  },
  {
    "id": 6,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "question": "A cross-functional team at an international retail chain plans to modernize ERP using store-level inventory updates, while maintaining subsecond checkout availability. The workload is assessed in rollout cohort 6 with 33 representative test cases. Two Claude models differ in latency and context handling. What is the right production selection method?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Choose by parameter count alone",
        "text_vi": "Chọn chỉ theo số tham số"
      },
      {
        "key": "B",
        "text": "Choose randomly per deployment",
        "text_vi": "Chọn ngẫu nhiên cho mỗi lần triển khai"
      },
      {
        "key": "C",
        "text": "Choose the model whose marketing page has the longest feature list",
        "text_vi": "Chọn mô hình có trang tiếp thị có danh sách tính năng dài nhất"
      },
      {
        "key": "D",
        "text": "Benchmark representative tasks with quality, tail latency, cost, and failure scenarios",
        "text_vi": "Điểm chuẩn các nhiệm vụ đại diện với các tình huống chất lượng, độ trễ đuôi, chi phí và lỗi"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Real workload evaluations are necessary for model and configuration selection.",
    "question_vi": "Một nhóm đa chức năng tại một chuỗi bán lẻ quốc tế có kế hoạch hiện đại hóa ERP bằng cách sử dụng các bản cập nhật hàng tồn kho ở cấp độ cửa hàng, trong khi vẫn duy trì khả năng thanh toán dưới giây. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 33 trường hợp thử nghiệm đại diện. Hai mô hình Claude khác nhau về độ trễ và cách xử lý ngữ cảnh. Phương pháp lựa chọn sản xuất phù hợp là gì?",
    "explanation_vi": "Đánh giá khối lượng công việc thực tế là cần thiết để lựa chọn mô hình và cấu hình."
  },
  {
    "id": 7,
    "topic": "Governance, Safety & Risk Management (14%)",
    "question": "A pilot retrospective at an energy utility identifies concerns in asset operations platform processing maintenance incident reports, where high operational safety impact applies. The workload is assessed in rollout cohort 6 with 36 representative test cases. Which TWO controls are most important for secure and accountable operation of this workflow? (Choose TWO.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "A prompt stating 'we comply with regulations'",
        "text_vi": "prompt nêu rõ 'chúng tôi tuân thủ các quy định'"
      },
      {
        "key": "B",
        "text": "Enforce access-control and data-handling policies independently of model prompts",
        "text_vi": "Thực thi các chính sách kiểm soát truy cập và xử lý dữ liệu độc lập với prompt mô hình"
      },
      {
        "key": "C",
        "text": "Retain auditable evidence of reviews, exceptions, and privileged actions",
        "text_vi": "Giữ lại bằng chứng có thể kiểm tra được về các đánh giá, ngoại lệ và hành động đặc quyền"
      },
      {
        "key": "D",
        "text": "Only a screenshot of the assistant",
        "text_vi": "Chỉ có một ảnh chụp màn hình của trợ lý"
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "explanation": "Both controls are necessary: enforce access-control and data-handling policies independently of model prompts; and retain auditable evidence of reviews, exceptions, and privileged actions. Model instructions alone do not substitute for enforceable controls.",
    "question_vi": "Một cuộc hồi cứu thí điểm tại một công ty năng lượng xác định các mối lo ngại trong nền tảng vận hành tài sản xử lý các báo cáo sự cố bảo trì, trong đó áp dụng tác động an toàn vận hành cao. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 36 trường hợp thử nghiệm đại diện. HAI biện pháp kiểm soát nào là quan trọng nhất để vận hành quy trình công việc này một cách an toàn và có trách nhiệm? (Chọn HAI.)",
    "explanation_vi": "Cả hai biện pháp kiểm soát đều cần thiết: thực thi các chính sách kiểm soát truy cập và xử lý dữ liệu một cách độc lập với prompt của mô hình; và lưu giữ bằng chứng có thể kiểm tra được về các đánh giá, ngoại lệ và hành động đặc quyền. Chỉ hướng dẫn mô hình không thể thay thế cho các biện pháp kiểm soát có thể thực thi được."
  },
  {
    "id": 8,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "question": "A regulated delivery team at an insurance carrier is integrating policy and claim files into claims processing platform; its operational mandate includes regulated evidence retention. The workload is assessed in rollout cohort 6 with 34 representative test cases. An executive asks for an AI system without a clear success definition. What is the architect's first step?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Choose the largest Claude model immediately",
        "text_vi": "Chọn ngay mẫu Claude lớn nhất"
      },
      {
        "key": "B",
        "text": "Run structured discovery to define users, decisions, baseline metrics, constraints, and ownership",
        "text_vi": "Chạy khám phá có cấu trúc để xác định người dùng, quyết định, số liệu cơ bản, ràng buộc và quyền sở hữu"
      },
      {
        "key": "C",
        "text": "Promise full automation without a pilot",
        "text_vi": "Hứa hẹn tự động hóa hoàn toàn mà không cần thí điểm (pilot)"
      },
      {
        "key": "D",
        "text": "Build the dashboard before interviewing operators",
        "text_vi": "Xây dựng bảng điều khiển trước khi phỏng vấn người vận hành"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Discovery should tie the solution to a measurable business problem and known constraints.",
    "question_vi": "Nhóm phân phối được quản lý tại một hãng bảo hiểm đang tích hợp các hồ sơ chính sách và yêu cầu bồi thường vào nền tảng xử lý yêu cầu bồi thường; nhiệm vụ hoạt động của nó bao gồm việc lưu giữ bằng chứng theo quy định. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 34 trường hợp thử nghiệm đại diện. Một giám đốc điều hành yêu cầu một hệ thống AI mà không có định nghĩa thành công rõ ràng. Bước đầu tiên của kiến ​​trúc sư là gì?",
    "explanation_vi": "Việc khám phá phải gắn giải pháp với một vấn đề kinh doanh có thể đo lường được và những hạn chế đã biết."
  },
  {
    "id": 9,
    "topic": "Developer Productivity & Operational Enablement (7%)",
    "question": "An incident review at a regional hospital network focuses on AI handling of patient discharge letters in the clinical records system; stakeholders insist on strict clinical authorization. The workload is assessed in rollout cohort 6 with 29 representative test cases. An AI coding assistant proposes a migration that passes unit tests but breaks production integration. What should the workflow add?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "An instruction to avoid bugs with no verification",
        "text_vi": "Hướng dẫn tránh lỗi khi không xác minh"
      },
      {
        "key": "B",
        "text": "A higher sampling temperature",
        "text_vi": "Nhiệt độ lấy mẫu cao hơn"
      },
      {
        "key": "C",
        "text": "Automatic production release on any successful unit test",
        "text_vi": "Tự động phát hành sản phẩm trên bất kỳ thử nghiệm đơn vị thành công nào"
      },
      {
        "key": "D",
        "text": "Staged integration tests, reviewed diffs, and deployment rollback controls",
        "text_vi": "Kiểm tra tích hợp theo giai đoạn, xem xét khác biệt và kiểm soát khôi phục triển khai"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "AI-generated changes require the same validation and release controls as human changes.",
    "question_vi": "Đánh giá sự cố tại mạng lưới bệnh viện khu vực tập trung vào việc xử lý AI thư xuất viện của bệnh nhân trong hệ thống hồ sơ lâm sàng; các bên liên quan nhấn mạnh vào sự cho phép lâm sàng nghiêm ngặt. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 29 trường hợp thử nghiệm đại diện. Trợ lý mã hóa AI đề xuất quá trình di chuyển vượt qua các bài kiểm tra đơn vị nhưng lại phá vỡ quá trình tích hợp sản xuất. Quy trình làm việc nên thêm gì?",
    "explanation_vi": "Những thay đổi do AI tạo ra yêu cầu các biện pháp kiểm soát xác thực và phát hành giống như những thay đổi của con người."
  },
  {
    "id": 10,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "question": "For the next release, a multinational bank will connect Claude to core banking platform to work with corporate credit applications under auditable financial controls. The workload is assessed in rollout cohort 6 with 33 representative test cases. An extraction system outputs syntactically valid JSON but incorrect invoice amounts. What should the evaluator measure?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Field-level semantic accuracy and critical numeric validation in addition to schema validity",
        "text_vi": "Độ chính xác về ngữ nghĩa ở cấp độ trường và xác thực số quan trọng bên cạnh tính hợp lệ của lược đồ"
      },
      {
        "key": "B",
        "text": "Only generated response length",
        "text_vi": "Chỉ có độ dài phản hồi được tạo"
      },
      {
        "key": "C",
        "text": "Only JSON parse success",
        "text_vi": "Chỉ phân tích cú pháp JSON thành công"
      },
      {
        "key": "D",
        "text": "Only the format of keys",
        "text_vi": "Chỉ định dạng của khóa"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Syntactic validity does not establish factual correctness.",
    "question_vi": "Trong lần phát hành tiếp theo, một ngân hàng đa quốc gia sẽ kết nối Claude với nền tảng ngân hàng cốt lõi để hoạt động với các ứng dụng tín dụng doanh nghiệp dưới sự kiểm soát tài chính có thể kiểm toán được. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 33 trường hợp thử nghiệm đại diện. Hệ thống trích xuất xuất ra JSON hợp lệ về mặt cú pháp nhưng số lượng hóa đơn không chính xác. Người đánh giá nên đo lường những gì?",
    "explanation_vi": "Hiệu lực cú pháp không thiết lập tính đúng đắn về mặt thực tế."
  },
  {
    "id": 11,
    "topic": "Integration (19%)",
    "question": "At scale, a B2B software vendor expects Claude to support customer support platform users working with support and incident tickets, without compromising multi-tenant isolation. The workload is assessed in rollout cohort 6 with 29 representative test cases. Two agents write to the same customer record. What preserves consistency?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Allow both writes with no concurrency control",
        "text_vi": "Cho phép cả hai ghi mà không có kiểm soát đồng thời"
      },
      {
        "key": "B",
        "text": "Use transactional updates or version preconditions and define conflict handling",
        "text_vi": "Sử dụng các bản cập nhật giao dịch hoặc điều kiện tiên quyết của phiên bản và xác định cách xử lý xung đột"
      },
      {
        "key": "C",
        "text": "Use the last text response as the official record",
        "text_vi": "Sử dụng phản hồi văn bản cuối cùng làm bản ghi chính thức"
      },
      {
        "key": "D",
        "text": "Increase model context length",
        "text_vi": "Tăng độ dài bối cảnh mô hình"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Concurrent updates need optimistic locking or transactions, not conversational coordination alone.",
    "question_vi": "Ở quy mô lớn, một nhà cung cấp phần mềm B2B kỳ vọng Claude sẽ hỗ trợ người dùng nền tảng hỗ trợ khách hàng làm việc với các phiếu hỗ trợ và sự cố mà không ảnh hưởng đến sự cô lập của nhiều bên thuê. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 29 trường hợp thử nghiệm đại diện. Hai đại lý viết vào cùng một hồ sơ khách hàng. Điều gì bảo tồn tính nhất quán?",
    "explanation_vi": "Các bản cập nhật đồng thời cần khóa hoặc giao dịch lạc quan chứ không chỉ phối hợp đàm thoại."
  },
  {
    "id": 12,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "question": "During a production-readiness review at a government procurement office, the architects examine purchase approval records connected to the procurement workflow, with formal reviewer approval. The workload is assessed in rollout cohort 6 with 31 representative test cases. A team uses long conversation histories and costs rise. What is a safe summarization strategy?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Remove tool results but keep unsupported model inferences",
        "text_vi": "Xóa kết quả của công cụ nhưng giữ lại các suy luận mô hình không được hỗ trợ"
      },
      {
        "key": "B",
        "text": "Discard all prior user constraints",
        "text_vi": "Loại bỏ tất cả các ràng buộc của người dùng trước đó"
      },
      {
        "key": "C",
        "text": "Summarize older interactions while preserving decisions, constraints, and exact pointers to authoritative sources",
        "text_vi": "Tóm tắt các tương tác cũ hơn trong khi vẫn giữ nguyên các quyết định, ràng buộc và gợi ý chính xác đến các nguồn đáng tin cậy"
      },
      {
        "key": "D",
        "text": "Treat compressed summaries as immutable truth without validation",
        "text_vi": "Hãy coi các bản tóm tắt nén như một sự thật bất di bất dịch mà không cần xác nhận"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Compaction should preserve task-critical state and re-fetch source-of-truth details when needed.",
    "question_vi": "Trong quá trình đánh giá mức độ sẵn sàng sản xuất tại văn phòng mua sắm của chính phủ, các kiến ​​trúc sư kiểm tra hồ sơ phê duyệt mua hàng được kết nối với quy trình mua sắm với sự chấp thuận của người đánh giá chính thức. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 31 trường hợp thử nghiệm đại diện. Một nhóm sử dụng lịch sử hội thoại dài và chi phí sẽ tăng lên. Chiến lược tóm tắt an toàn là gì?",
    "explanation_vi": "Việc nén phải duy trì trạng thái quan trọng của nhiệm vụ và tìm nạp lại các chi tiết nguồn xác thực khi cần."
  },
  {
    "id": 13,
    "topic": "Integration (19%)",
    "question": "A pilot retrospective at an energy utility identifies concerns in asset operations platform processing maintenance incident reports, where high operational safety impact applies. The workload is assessed in rollout cohort 6 with 38 representative test cases. A Claude integration receives a tool response claiming to be a new system instruction. What must happen?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Forward credentials requested by the tool output",
        "text_vi": "Chuyển tiếp thông tin xác thực được yêu cầu bởi đầu ra công cụ"
      },
      {
        "key": "B",
        "text": "Give it higher priority because it came from an API",
        "text_vi": "Ưu tiên cao hơn vì nó đến từ API"
      },
      {
        "key": "C",
        "text": "Rewrite system policies using the response",
        "text_vi": "Viết lại chính sách hệ thống bằng cách sử dụng phản hồi"
      },
      {
        "key": "D",
        "text": "Treat it as untrusted tool data and ignore attempted privilege escalation",
        "text_vi": "Hãy coi nó như dữ liệu công cụ không đáng tin cậy và bỏ qua nỗ lực leo thang đặc quyền"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Tool responses can contain prompt injection and cannot alter instruction hierarchy or permissions.",
    "question_vi": "Một cuộc hồi cứu thí điểm tại một công ty năng lượng xác định các mối lo ngại trong nền tảng vận hành tài sản xử lý các báo cáo sự cố bảo trì, trong đó áp dụng tác động an toàn vận hành cao. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 38 trường hợp thử nghiệm đại diện. Tích hợp Claude nhận được phản hồi của công cụ tự xưng là hướng dẫn hệ thống mới. Điều gì phải xảy ra?",
    "explanation_vi": "Phản hồi của công cụ có thể chứa nội dung nhắc nhở và không thể thay đổi quyền hoặc phân cấp lệnh."
  },
  {
    "id": 14,
    "topic": "Solution Design & Architecture (17%)",
    "question": "At a Japanese manufacturing group, an AI pilot processes quality-inspection records from the factory MES; mandatory operator sign-off is a non-negotiable requirement. The workload is assessed in rollout cohort 6 with 33 representative test cases. A product owner proposes automated approvals for a high-impact workflow. Which business metric belongs in the architecture decision?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Net time saved including review effort, error remediation, and operational cost",
        "text_vi": "Tiết kiệm thời gian thực bao gồm nỗ lực đánh giá, sửa lỗi và chi phí vận hành"
      },
      {
        "key": "B",
        "text": "Model benchmark performance without operational context",
        "text_vi": "Hiệu suất điểm chuẩn của mô hình không có bối cảnh hoạt động"
      },
      {
        "key": "C",
        "text": "Only the number of agents spawned",
        "text_vi": "Chỉ có số lượng đại lý sinh ra"
      },
      {
        "key": "D",
        "text": "Only the number of generated tokens",
        "text_vi": "Chỉ số lượng mã thông báo được tạo"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Business value must include throughput, review cost, corrections, and risk exposure.",
    "question_vi": "Tại một nhóm sản xuất Nhật Bản, một dự án thí điểm AI (AI pilot) xử lý hồ sơ kiểm tra chất lượng từ MES của nhà máy; việc ký duyệt (sign-off) bắt buộc của nhà điều hành là một yêu cầu không thể thương lượng. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 33 trường hợp thử nghiệm đại diện. Chủ sở hữu sản phẩm đề xuất phê duyệt tự động cho quy trình làm việc có tác động cao. Số liệu kinh doanh nào thuộc về quyết định kiến ​​trúc?",
    "explanation_vi": "Giá trị doanh nghiệp phải bao gồm thông lượng, chi phí xem xét, sửa chữa và rủi ro."
  },
  {
    "id": 15,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "question": "For the next release, a multinational bank will connect Claude to core banking platform to work with corporate credit applications under auditable financial controls. The workload is assessed in rollout cohort 6 with 31 representative test cases. Which TWO controls are most important for secure and accountable operation of this workflow? (Choose TWO.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "One ambiguous KPI copied across departments",
        "text_vi": "Một KPI không rõ ràng được sao chép giữa các phòng ban"
      },
      {
        "key": "B",
        "text": "Agree on a monitoring and escalation plan for post-launch failures",
        "text_vi": "Thống nhất về kế hoạch giám sát và báo cáo đối với các lỗi sau khi ra mắt"
      },
      {
        "key": "C",
        "text": "Define documented acceptance criteria and named decision owners",
        "text_vi": "Xác định tiêu chí chấp nhận được ghi lại và chủ sở hữu quyết định được đặt tên"
      },
      {
        "key": "D",
        "text": "An output-only token budget",
        "text_vi": "Ngân sách mã thông báo chỉ dành cho đầu ra"
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "explanation": "Both controls are necessary: define documented acceptance criteria and named decision owners; and agree on a monitoring and escalation plan for post-launch failures. Model instructions alone do not substitute for enforceable controls.",
    "question_vi": "Trong lần phát hành tiếp theo, một ngân hàng đa quốc gia sẽ kết nối Claude với nền tảng ngân hàng cốt lõi để hoạt động với các ứng dụng tín dụng doanh nghiệp dưới sự kiểm soát tài chính có thể kiểm toán được. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 31 trường hợp thử nghiệm đại diện. HAI biện pháp kiểm soát nào là quan trọng nhất để vận hành quy trình công việc này một cách an toàn và có trách nhiệm? (Chọn HAI.)",
    "explanation_vi": "Cả hai biện pháp kiểm soát đều cần thiết: xác định các tiêu chí chấp nhận được ghi lại bằng văn bản và nêu tên các chủ sở hữu quyết định; và thống nhất về kế hoạch giám sát và báo cáo đối với các lỗi sau khi phóng. Chỉ hướng dẫn mô hình không thể thay thế cho các biện pháp kiểm soát có thể thực thi được."
  },
  {
    "id": 16,
    "topic": "Solution Design & Architecture (17%)",
    "question": "A regulated delivery team at an insurance carrier is integrating policy and claim files into claims processing platform; its operational mandate includes regulated evidence retention. The workload is assessed in rollout cohort 6 with 29 representative test cases. A team proposes five cooperating agents for a simple FAQ assistant. What is the strongest architecture review response?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Request evidence that a simpler retrieval-augmented single-agent design cannot meet the requirements",
        "text_vi": "Yêu cầu bằng chứng cho thấy thiết kế tác nhân đơn tăng cường truy xuất đơn giản hơn không thể đáp ứng các yêu cầu"
      },
      {
        "key": "B",
        "text": "Reject retrieval because it is not autonomous",
        "text_vi": "Từ chối truy xuất vì nó không tự chủ"
      },
      {
        "key": "C",
        "text": "Make the five agents share administrator credentials",
        "text_vi": "Làm cho năm đại lý chia sẻ thông tin đăng nhập của quản trị viên"
      },
      {
        "key": "D",
        "text": "Approve multi-agent architecture because more agents always improve quality",
        "text_vi": "Phê duyệt kiến trúc đa tác nhân vì nhiều tác nhân luôn cải thiện chất lượng"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Architecture choice should be driven by measured requirements, not perceived sophistication.",
    "question_vi": "Nhóm phân phối được quản lý tại một hãng bảo hiểm đang tích hợp các hồ sơ chính sách và yêu cầu bồi thường vào nền tảng xử lý yêu cầu bồi thường; nhiệm vụ hoạt động của nó bao gồm việc lưu giữ bằng chứng theo quy định. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 29 trường hợp thử nghiệm đại diện. Một nhóm đề xuất năm tác nhân hợp tác cho một trợ lý Câu hỏi thường gặp đơn giản. Phản hồi đánh giá kiến ​​trúc mạnh mẽ nhất là gì?",
    "explanation_vi": "Sự lựa chọn kiến trúc nên được thúc đẩy bởi các yêu cầu được đo lường, chứ không phải sự phức tạp được cảm nhận."
  },
  {
    "id": 17,
    "topic": "Solution Design & Architecture (17%)",
    "question": "A senior architect advising a public university considers a Claude workflow around student service inquiries and campus management platform with strict student data access. The workload is assessed in rollout cohort 6 with 38 representative test cases. A company wants research and report-writing assistants to collaborate, but debugging is difficult. What is the first architectural simplification?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Remove all traces to reduce noise",
        "text_vi": "Xóa tất cả dấu vết để giảm tiếng ồn"
      },
      {
        "key": "B",
        "text": "Define separate tool contracts, an orchestrator, and observable handoffs only where role specialization adds value",
        "text_vi": "Chỉ xác định các hợp đồng công cụ riêng biệt, người điều phối và chuyển giao có thể quan sát được khi việc chuyên môn hóa vai trò tăng thêm giá trị"
      },
      {
        "key": "C",
        "text": "Add agents until each has fewer than ten prompt lines",
        "text_vi": "Thêm nhân viên hỗ trợ cho đến khi mỗi nhân viên có ít hơn 10 dòng nhắc nhở"
      },
      {
        "key": "D",
        "text": "Allow agents to pass unrestricted free-form commands",
        "text_vi": "Cho phép các tác nhân truyền các lệnh dạng tự do không hạn chế"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Multi-agent complexity is justified only when responsibilities and handoffs are explicit and measurable.",
    "question_vi": "Một kiến ​​trúc sư cấp cao tư vấn cho một trường đại học công lập đang xem xét quy trình làm việc của Claude xoay quanh các yêu cầu về dịch vụ sinh viên và nền tảng quản lý khuôn viên trường với quyền truy cập dữ liệu sinh viên nghiêm ngặt. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 38 trường hợp thử nghiệm đại diện. Một công ty muốn các trợ lý nghiên cứu và viết báo cáo cộng tác nhưng việc gỡ lỗi rất khó khăn. Sự đơn giản hóa kiến ​​trúc đầu tiên là gì?",
    "explanation_vi": "Độ phức tạp đa tác nhân chỉ được chứng minh khi trách nhiệm và sự chuyển giao rõ ràng và có thể đo lường được."
  },
  {
    "id": 18,
    "topic": "Governance, Safety & Risk Management (14%)",
    "question": "A cross-functional team at an international retail chain plans to modernize ERP using store-level inventory updates, while maintaining subsecond checkout availability. The workload is assessed in rollout cohort 6 with 30 representative test cases. A multinational deployment has different data residency obligations. What should architecture decide?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Map data categories and processing locations to contractual and jurisdictional requirements before routing",
        "text_vi": "Ánh xạ các danh mục dữ liệu và vị trí xử lý theo các yêu cầu hợp đồng và quyền tài phán trước khi định tuyến"
      },
      {
        "key": "B",
        "text": "Assume the model provider stores data in the user's region automatically",
        "text_vi": "Giả sử nhà cung cấp mô hình tự động lưu trữ dữ liệu trong khu vực của người dùng"
      },
      {
        "key": "C",
        "text": "Use one global endpoint without checking allowed data flows",
        "text_vi": "Sử dụng một điểm cuối toàn cầu mà không kiểm tra các luồng dữ liệu được phép"
      },
      {
        "key": "D",
        "text": "Ignore logging and backup locations",
        "text_vi": "Bỏ qua các vị trí ghi nhật ký và sao lưu"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Residency analysis must include storage, processing, logs, and third parties.",
    "question_vi": "Một nhóm đa chức năng tại một chuỗi bán lẻ quốc tế có kế hoạch hiện đại hóa ERP bằng cách sử dụng các bản cập nhật hàng tồn kho ở cấp độ cửa hàng, trong khi vẫn duy trì khả năng thanh toán dưới giây. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 30 trường hợp thử nghiệm đại diện. Việc triển khai đa quốc gia có các nghĩa vụ về nơi lưu trữ dữ liệu khác nhau. Kiến trúc nên quyết định điều gì?",
    "explanation_vi": "Phân tích nơi cư trú phải bao gồm lưu trữ, xử lý, nhật ký và bên thứ ba."
  },
  {
    "id": 19,
    "topic": "Solution Design & Architecture (17%)",
    "question": "A cross-functional team at an international retail chain plans to modernize ERP using store-level inventory updates, while maintaining subsecond checkout availability. The workload is assessed in rollout cohort 6 with 34 representative test cases. A support assistant must answer a fixed sequence of eligibility checks with auditable branches. Which architecture is most appropriate?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "An autonomous agent authorized to invent new branches",
        "text_vi": "Một đại lý tự trị được ủy quyền để phát minh ra các chi nhánh mới"
      },
      {
        "key": "B",
        "text": "An unconstrained chatbot with no business rules",
        "text_vi": "Một chatbot không bị ràng buộc không có quy tắc kinh doanh"
      },
      {
        "key": "C",
        "text": "A multi-agent debate for every eligibility check",
        "text_vi": "Một cuộc tranh luận giữa nhiều tác nhân cho mỗi lần kiểm tra tính đủ điều kiện"
      },
      {
        "key": "D",
        "text": "A deterministic workflow for eligibility decisions, using Claude only for language interpretation",
        "text_vi": "Quy trình làm việc mang tính xác định cho các quyết định về tính đủ điều kiện, chỉ sử dụng Claude để thông dịch ngôn ngữ"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Fixed business decisions belong in deterministic code; Claude can interpret user language without owning the decision.",
    "question_vi": "Một nhóm đa chức năng tại một chuỗi bán lẻ quốc tế có kế hoạch hiện đại hóa ERP bằng cách sử dụng các bản cập nhật hàng tồn kho ở cấp độ cửa hàng, trong khi vẫn duy trì khả năng thanh toán dưới giây. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 34 trường hợp thử nghiệm đại diện. Trợ lý hỗ trợ phải trả lời một chuỗi kiểm tra tính đủ điều kiện cố định với các chi nhánh có thể kiểm tra được. Kiến trúc nào phù hợp nhất?",
    "explanation_vi": "Các quyết định kinh doanh cố định thuộc về mã xác định; Claude có thể giải thích ngôn ngữ của người dùng mà không cần có quyền quyết định."
  },
  {
    "id": 20,
    "topic": "Integration (19%)",
    "question": "A senior architect advising a public university considers a Claude workflow around student service inquiries and campus management platform with strict student data access. The workload is assessed in rollout cohort 6 with 36 representative test cases. Which TWO controls are most important for secure and accountable operation of this workflow? (Choose TWO.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "Ask users to type their role into the prompt",
        "text_vi": "Yêu cầu người dùng nhập vai trò của họ vào prompt"
      },
      {
        "key": "B",
        "text": "Record correlated, redacted audit evidence for every external action",
        "text_vi": "Ghi lại bằng chứng kiểm toán tương quan, được biên tập lại cho mọi hành động bên ngoài"
      },
      {
        "key": "C",
        "text": "Enforce least-privilege authorization in the tool-execution service",
        "text_vi": "Thực thi ủy quyền có đặc quyền tối thiểu trong dịch vụ thực thi công cụ"
      },
      {
        "key": "D",
        "text": "Give the model a shared HR administrator token",
        "text_vi": "Cung cấp cho mô hình mã thông báo quản trị viên nhân sự được chia sẻ"
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "explanation": "Both controls are necessary: enforce least-privilege authorization in the tool-execution service; and record correlated, redacted audit evidence for every external action. Model instructions alone do not substitute for enforceable controls.",
    "question_vi": "Một kiến ​​trúc sư cấp cao tư vấn cho một trường đại học công lập đang xem xét quy trình làm việc của Claude xoay quanh các yêu cầu về dịch vụ sinh viên và nền tảng quản lý khuôn viên trường với quyền truy cập dữ liệu sinh viên nghiêm ngặt. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 36 trường hợp thử nghiệm đại diện. HAI biện pháp kiểm soát nào là quan trọng nhất để vận hành quy trình công việc này một cách an toàn và có trách nhiệm? (Chọn HAI.)",
    "explanation_vi": "Cả hai biện pháp kiểm soát đều cần thiết: thực thi ủy quyền có đặc quyền tối thiểu trong dịch vụ thực thi công cụ; và ghi lại bằng chứng kiểm toán tương quan, được biên tập lại cho mọi hành động bên ngoài. Chỉ hướng dẫn mô hình không thể thay thế cho các biện pháp kiểm soát có thể thực thi được."
  },
  {
    "id": 21,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "question": "An incident review at a regional hospital network focuses on AI handling of patient discharge letters in the clinical records system; stakeholders insist on strict clinical authorization. The workload is assessed in rollout cohort 6 with 34 representative test cases. A team adds a long example that conflicts with an explicit output schema. What should be fixed first?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Add more contradictory examples",
        "text_vi": "Thêm nhiều ví dụ trái ngược nhau"
      },
      {
        "key": "B",
        "text": "Align examples and instructions to a single unambiguous contract",
        "text_vi": "Căn chỉnh các ví dụ và hướng dẫn cho một hợp đồng rõ ràng"
      },
      {
        "key": "C",
        "text": "Turn off schema validation",
        "text_vi": "Tắt xác thực lược đồ"
      },
      {
        "key": "D",
        "text": "Increase model temperature to reconcile instructions",
        "text_vi": "Tăng nhiệt độ mô hình để điều chỉnh hướng dẫn"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Contradictory prompts induce unreliable outputs; a consistent contract is a prerequisite.",
    "question_vi": "Đánh giá sự cố tại mạng lưới bệnh viện khu vực tập trung vào việc xử lý AI thư xuất viện của bệnh nhân trong hệ thống hồ sơ lâm sàng; các bên liên quan nhấn mạnh vào sự cho phép lâm sàng nghiêm ngặt. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 34 trường hợp thử nghiệm đại diện. Một nhóm thêm một ví dụ dài xung đột với lược đồ đầu ra rõ ràng. Điều gì cần sửa trước tiên?",
    "explanation_vi": "Những prompt trái ngược nhau tạo ra kết quả đầu ra không đáng tin cậy; một hợp đồng nhất quán là điều kiện tiên quyết."
  },
  {
    "id": 22,
    "topic": "Solution Design & Architecture (17%)",
    "question": "During a production-readiness review at a government procurement office, the architects examine purchase approval records connected to the procurement workflow, with formal reviewer approval. The workload is assessed in rollout cohort 6 with 32 representative test cases. A company has several tenants sharing an AI service. What is the central data-plane design principle?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Trust the tenant name written by a user in their question",
        "text_vi": "Tin tưởng vào tên đối tượng thuê do người dùng viết trong câu hỏi của họ"
      },
      {
        "key": "B",
        "text": "Use one shared unrestricted vector index and rely on the model to filter",
        "text_vi": "Sử dụng một chỉ mục vectơ không hạn chế được chia sẻ và dựa vào mô hình để lọc"
      },
      {
        "key": "C",
        "text": "Enforce tenant scope in identity, retrieval, storage, and tool execution independently of prompts",
        "text_vi": "Thực thi phạm vi đối tượng thuê trong nhận dạng, truy xuất, lưu trữ và thực thi công cụ một cách độc lập với prompt"
      },
      {
        "key": "D",
        "text": "Rely exclusively on UI hiding to prevent cross-tenant access",
        "text_vi": "Chỉ dựa vào tính năng ẩn giao diện người dùng để ngăn chặn quyền truy cập của nhiều người thuê"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Tenant isolation must be enforced by infrastructure and authorization at each data access point.",
    "question_vi": "Trong quá trình đánh giá mức độ sẵn sàng sản xuất tại văn phòng mua sắm của chính phủ, các kiến ​​trúc sư kiểm tra hồ sơ phê duyệt mua hàng được kết nối với quy trình mua sắm với sự chấp thuận của người đánh giá chính thức. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 32 trường hợp thử nghiệm đại diện. Một công ty có nhiều người thuê dùng chung dịch vụ AI. Nguyên tắc thiết kế mặt phẳng dữ liệu trung tâm là gì?",
    "explanation_vi": "Việc cách ly đối tượng thuê phải được thực thi bằng cơ sở hạ tầng và ủy quyền tại mỗi điểm truy cập dữ liệu."
  },
  {
    "id": 23,
    "topic": "Governance, Safety & Risk Management (14%)",
    "question": "During a production-readiness review at a government procurement office, the architects examine purchase approval records connected to the procurement workflow, with formal reviewer approval. The workload is assessed in rollout cohort 6 with 28 representative test cases. A team wants to use customer prompts to improve its product. What is the appropriate first governance question?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "What consent, purpose limitation, data classification, and retention rules apply?",
        "text_vi": "Những quy tắc chấp thuận, giới hạn mục đích, phân loại dữ liệu và lưu giữ nào được áp dụng?"
      },
      {
        "key": "B",
        "text": "How many tokens can be collected at maximum?",
        "text_vi": "Có thể thu thập tối đa bao nhiêu token?"
      },
      {
        "key": "C",
        "text": "Whether users prefer longer answers",
        "text_vi": "Người dùng có thích câu trả lời dài hơn không"
      },
      {
        "key": "D",
        "text": "Whether marketing wants the examples",
        "text_vi": "Liệu bộ phận tiếp thị có muốn các ví dụ hay không"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Data reuse should follow approved legal and privacy constraints.",
    "question_vi": "Trong quá trình đánh giá mức độ sẵn sàng sản xuất tại văn phòng mua sắm của chính phủ, các kiến ​​trúc sư kiểm tra hồ sơ phê duyệt mua hàng được kết nối với quy trình mua sắm với sự chấp thuận của người đánh giá chính thức. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 28 trường hợp thử nghiệm đại diện. Một nhóm muốn sử dụng prompt của khách hàng để cải thiện sản phẩm của mình. Câu hỏi quản trị đầu tiên thích hợp là gì?",
    "explanation_vi": "Việc tái sử dụng dữ liệu phải tuân theo các ràng buộc về quyền riêng tư và pháp lý đã được phê duyệt."
  },
  {
    "id": 24,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "question": "At scale, a B2B software vendor expects Claude to support customer support platform users working with support and incident tickets, without compromising multi-tenant isolation. The workload is assessed in rollout cohort 6 with 28 representative test cases. A system experiences an accuracy drop after a document ingestion change. Which debugging method is best?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Measure only customer sentiment",
        "text_vi": "Chỉ đo lường tình cảm của khách hàng"
      },
      {
        "key": "B",
        "text": "Change all prompts and tools simultaneously",
        "text_vi": "Thay đổi đồng thời tất cả prompt và công cụ"
      },
      {
        "key": "C",
        "text": "Rebuild the entire service without logging",
        "text_vi": "Xây dựng lại toàn bộ dịch vụ mà không cần đăng nhập"
      },
      {
        "key": "D",
        "text": "Inspect retrieval versions, intermediate results, traces, and a before/after error slice",
        "text_vi": "Kiểm tra các phiên bản truy xuất, kết quả trung gian, dấu vết và lát lỗi trước/sau"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Versioned evidence and error slicing isolate the stage responsible for regressions.",
    "question_vi": "Ở quy mô lớn, một nhà cung cấp phần mềm B2B kỳ vọng Claude sẽ hỗ trợ người dùng nền tảng hỗ trợ khách hàng làm việc với các phiếu hỗ trợ và sự cố mà không ảnh hưởng đến sự cô lập của nhiều bên thuê. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 28 trường hợp thử nghiệm đại diện. Hệ thống bị giảm độ chính xác sau khi thay đổi việc nhập tài liệu. Phương pháp gỡ lỗi nào là tốt nhất?",
    "explanation_vi": "Bằng chứng được phiên bản và việc cắt lỗi sẽ tách biệt giai đoạn chịu trách nhiệm cho các hồi quy."
  },
  {
    "id": 25,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "question": "At a Japanese manufacturing group, an AI pilot processes quality-inspection records from the factory MES; mandatory operator sign-off is a non-negotiable requirement. The workload is assessed in rollout cohort 6 with 32 representative test cases. An analyst asks Claude to reveal hidden reasoning verbatim for auditing. What should the system provide instead?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "A guarantee to expose all private internal reasoning",
        "text_vi": "Bảo đảm phơi bày mọi suy luận nội bộ riêng tư"
      },
      {
        "key": "B",
        "text": "An unreviewed claim that no reasoning occurred",
        "text_vi": "Một tuyên bố chưa được xem xét rằng không có lý do nào xảy ra"
      },
      {
        "key": "C",
        "text": "Only the model's confidence percentage",
        "text_vi": "Chỉ phần trăm độ tin cậy của mô hình"
      },
      {
        "key": "D",
        "text": "A concise decision rationale with cited evidence and auditable external actions",
        "text_vi": "Cơ sở đưa ra quyết định ngắn gọn với bằng chứng được trích dẫn và các hành động bên ngoài có thể kiểm tra được"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Auditability is best supported by observable evidence, inputs, outputs, checks, and concise rationales.",
    "question_vi": "Tại một nhóm sản xuất Nhật Bản, một dự án thí điểm AI (AI pilot) xử lý hồ sơ kiểm tra chất lượng từ MES của nhà máy; việc ký duyệt (sign-off) bắt buộc của nhà điều hành là một yêu cầu không thể thương lượng. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 32 trường hợp thử nghiệm đại diện. Một nhà phân tích yêu cầu Claude tiết lộ nguyên văn lý do ẩn giấu cho cuộc kiểm toán. Thay vào đó, hệ thống nên cung cấp những gì?",
    "explanation_vi": "Khả năng kiểm toán được hỗ trợ tốt nhất bởi bằng chứng có thể quan sát được, đầu vào, đầu ra, kiểm tra và cơ sở lý luận ngắn gọn."
  },
  {
    "id": 26,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "question": "The architecture board of a logistics provider evaluates cross-border shipment exceptions workflows in transport management system, prioritizing intermittent connectivity. The workload is assessed in rollout cohort 6 with 34 representative test cases. A deployment uses shadow traffic to compare a candidate model. What is the key safety boundary?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Let shadow model send duplicate customer notifications",
        "text_vi": "Để mô hình bóng gửi thông báo trùng lặp cho khách hàng"
      },
      {
        "key": "B",
        "text": "Switch all traffic before collecting results",
        "text_vi": "Chuyển đổi tất cả lưu lượng truy cập trước khi thu thập kết quả"
      },
      {
        "key": "C",
        "text": "Treat shadow suggestions as executed transactions",
        "text_vi": "Coi các đề xuất bóng như các giao dịch được thực hiện"
      },
      {
        "key": "D",
        "text": "Prevent shadow outputs from mutating live systems and compare quality on matching inputs",
        "text_vi": "Ngăn chặn đầu ra bóng làm thay đổi hệ thống trực tiếp và so sánh chất lượng trên các đầu vào phù hợp"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Shadow testing isolates candidate behavior without real-world side effects.",
    "question_vi": "Hội đồng kiến ​​trúc của nhà cung cấp dịch vụ hậu cần đánh giá các quy trình ngoại lệ đối với lô hàng xuyên biên giới trong hệ thống quản lý vận tải, ưu tiên kết nối không liên tục. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 34 trường hợp thử nghiệm đại diện. Quá trình triển khai sử dụng lưu lượng truy cập tối để so sánh mô hình ứng viên. Ranh giới an toàn chính là gì?",
    "explanation_vi": "Kiểm tra bóng giúp cô lập hành vi của ứng viên mà không có tác dụng phụ trong thế giới thực."
  },
  {
    "id": 27,
    "topic": "Governance, Safety & Risk Management (14%)",
    "question": "An incident review at a regional hospital network focuses on AI handling of patient discharge letters in the clinical records system; stakeholders insist on strict clinical authorization. The workload is assessed in rollout cohort 6 with 31 representative test cases. Which TWO controls are most important for secure and accountable operation of this workflow? (Choose TWO.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "Focus only on overall accuracy",
        "text_vi": "Chỉ tập trung vào độ chính xác tổng thể"
      },
      {
        "key": "B",
        "text": "Enforce access-control and data-handling policies independently of model prompts",
        "text_vi": "Thực thi các chính sách kiểm soát truy cập và xử lý dữ liệu độc lập với prompt mô hình"
      },
      {
        "key": "C",
        "text": "Retain auditable evidence of reviews, exceptions, and privileged actions",
        "text_vi": "Giữ lại bằng chứng có thể kiểm tra được về các đánh giá, ngoại lệ và hành động đặc quyền"
      },
      {
        "key": "D",
        "text": "Remove subgroup labels from evaluation and declare fairness",
        "text_vi": "Xóa nhãn nhóm con khỏi đánh giá và tuyên bố tính công bằng"
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "explanation": "Both controls are necessary: enforce access-control and data-handling policies independently of model prompts; and retain auditable evidence of reviews, exceptions, and privileged actions. Model instructions alone do not substitute for enforceable controls.",
    "question_vi": "Đánh giá sự cố tại mạng lưới bệnh viện khu vực tập trung vào việc xử lý AI thư xuất viện của bệnh nhân trong hệ thống hồ sơ lâm sàng; các bên liên quan nhấn mạnh vào sự cho phép lâm sàng nghiêm ngặt. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 31 trường hợp thử nghiệm đại diện. HAI biện pháp kiểm soát nào là quan trọng nhất để vận hành quy trình công việc này một cách an toàn và có trách nhiệm? (Chọn HAI.)",
    "explanation_vi": "Cả hai biện pháp kiểm soát đều cần thiết: thực thi các chính sách kiểm soát truy cập và xử lý dữ liệu một cách độc lập với prompt của mô hình; và lưu giữ bằng chứng có thể kiểm tra được về các đánh giá, ngoại lệ và hành động đặc quyền. Chỉ hướng dẫn mô hình không thể thay thế cho các biện pháp kiểm soát có thể thực thi được."
  },
  {
    "id": 28,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "question": "A cross-functional team at an international retail chain plans to modernize ERP using store-level inventory updates, while maintaining subsecond checkout availability. The workload is assessed in rollout cohort 6 with 31 representative test cases. Which TWO controls are most important for secure and accountable operation of this workflow? (Choose TWO.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "Declare success based on retrieval metric alone",
        "text_vi": "Tuyên bố thành công chỉ dựa trên số liệu truy xuất"
      },
      {
        "key": "B",
        "text": "Evaluate task correctness using representative held-out scenarios",
        "text_vi": "Đánh giá tính chính xác của nhiệm vụ bằng cách sử dụng các kịch bản được tổ chức đại diện"
      },
      {
        "key": "C",
        "text": "Increase chunk count without checking relevance",
        "text_vi": "Tăng số lượng đoạn mà không kiểm tra mức độ liên quan"
      },
      {
        "key": "D",
        "text": "Track operational guardrails such as high-severity failures and tail latency",
        "text_vi": "Theo dõi các biện pháp bảo vệ vận hành như lỗi ở mức độ nghiêm trọng cao và độ trễ ở đuôi"
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "explanation": "Both controls are necessary: evaluate task correctness using representative held-out scenarios; and track operational guardrails such as high-severity failures and tail latency. Model instructions alone do not substitute for enforceable controls.",
    "question_vi": "Một nhóm đa chức năng tại một chuỗi bán lẻ quốc tế có kế hoạch hiện đại hóa ERP bằng cách sử dụng các bản cập nhật hàng tồn kho ở cấp độ cửa hàng, trong khi vẫn duy trì khả năng thanh toán dưới giây. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 31 trường hợp thử nghiệm đại diện. HAI biện pháp kiểm soát nào là quan trọng nhất để vận hành quy trình công việc này một cách an toàn và có trách nhiệm? (Chọn HAI.)",
    "explanation_vi": "Cả hai biện pháp kiểm soát đều cần thiết: đánh giá tính chính xác của nhiệm vụ bằng cách sử dụng các kịch bản được đưa ra mang tính đại diện; và theo dõi các rào cản vận hành như lỗi ở mức độ nghiêm trọng cao và độ trễ ở đuôi. Chỉ hướng dẫn mô hình không thể thay thế cho các biện pháp kiểm soát có thể thực thi được."
  },
  {
    "id": 29,
    "topic": "Developer Productivity & Operational Enablement (7%)",
    "question": "For the next release, a multinational bank will connect Claude to core banking platform to work with corporate credit applications under auditable financial controls. The workload is assessed in rollout cohort 6 with 30 representative test cases. Several developers use coding agents on the same project and results differ. What improves consistency?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Disable CI to reduce variability",
        "text_vi": "Vô hiệu hóa CI để giảm sự thay đổi"
      },
      {
        "key": "B",
        "text": "Let each agent invent coding standards",
        "text_vi": "Hãy để mỗi đại lý phát minh ra các tiêu chuẩn mã hóa"
      },
      {
        "key": "C",
        "text": "Force all developers to share the same interactive chat",
        "text_vi": "Buộc tất cả các nhà phát triển chia sẻ cùng một cuộc trò chuyện tương tác"
      },
      {
        "key": "D",
        "text": "Version controlled project instructions, tool configuration, repeatable test commands, and review gates",
        "text_vi": "Hướng dẫn dự án được kiểm soát theo phiên bản, cấu hình công cụ, lệnh kiểm tra có thể lặp lại và cổng đánh giá"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Shared guardrails and repeatable tests reduce environmental and instruction drift.",
    "question_vi": "Trong lần phát hành tiếp theo, một ngân hàng đa quốc gia sẽ kết nối Claude với nền tảng ngân hàng cốt lõi để hoạt động với các ứng dụng tín dụng doanh nghiệp dưới sự kiểm soát tài chính có thể kiểm toán được. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 30 trường hợp thử nghiệm đại diện. Một số nhà phát triển sử dụng tác nhân mã hóa trên cùng một dự án và kết quả là khác nhau. Điều gì cải thiện tính nhất quán?",
    "explanation_vi": "Các rào chắn chung và các thử nghiệm lặp lại làm giảm sự sai lệch về môi trường và hướng dẫn."
  },
  {
    "id": 30,
    "topic": "Solution Design & Architecture (17%)",
    "question": "For the next release, a multinational bank will connect Claude to core banking platform to work with corporate credit applications under auditable financial controls. The workload is assessed in rollout cohort 6 with 36 representative test cases. Which TWO controls are most important for secure and accountable operation of this workflow? (Choose TWO.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "Independent agents that negotiate an answer without a shared state",
        "text_vi": "Các đại lý độc lập đàm phán câu trả lời mà không có trạng thái chung"
      },
      {
        "key": "B",
        "text": "One long prompt that also directly writes to all downstream systems",
        "text_vi": "Một prompt dài cũng ghi trực tiếp vào tất cả các hệ thống hạ nguồn"
      },
      {
        "key": "C",
        "text": "Keep a durable evidence trail linking inputs, proposed outcomes, and applied versions",
        "text_vi": "Lưu giữ dấu vết bằng chứng lâu dài liên kết đầu vào, kết quả đề xuất và các phiên bản áp dụng"
      },
      {
        "key": "D",
        "text": "Define the authoritative decision and approval boundary outside the model",
        "text_vi": "Xác định ranh giới quyết định và phê duyệt có thẩm quyền ngoài mô hình"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "explanation": "Both controls are necessary: define the authoritative decision and approval boundary outside the model; and keep a durable evidence trail linking inputs, proposed outcomes, and applied versions. Model instructions alone do not substitute for enforceable controls.",
    "question_vi": "Trong lần phát hành tiếp theo, một ngân hàng đa quốc gia sẽ kết nối Claude với nền tảng ngân hàng cốt lõi để hoạt động với các ứng dụng tín dụng doanh nghiệp dưới sự kiểm soát tài chính có thể kiểm toán được. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 36 trường hợp thử nghiệm đại diện. HAI biện pháp kiểm soát nào là quan trọng nhất để vận hành quy trình công việc này một cách an toàn và có trách nhiệm? (Chọn HAI.)",
    "explanation_vi": "Cả hai biện pháp kiểm soát đều cần thiết: xác định ranh giới phê duyệt và quyết định có thẩm quyền bên ngoài mô hình; và lưu giữ dấu vết bằng chứng lâu dài liên kết các đầu vào, kết quả được đề xuất và các phiên bản được áp dụng. Chỉ hướng dẫn mô hình không thể thay thế cho các biện pháp kiểm soát có thể thực thi được."
  },
  {
    "id": 31,
    "topic": "Integration (19%)",
    "question": "A cross-functional team at an international retail chain plans to modernize ERP using store-level inventory updates, while maintaining subsecond checkout availability. The workload is assessed in rollout cohort 6 with 32 representative test cases. An external service is intermittently unavailable and agent jobs must survive restarts. Which pattern is best?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Persist workflow state and use a durable queue with retry and dead-letter handling",
        "text_vi": "Duy trì trạng thái quy trình làm việc và sử dụng hàng đợi lâu bền với tính năng thử lại và xử lý thư chết"
      },
      {
        "key": "B",
        "text": "Reissue the whole task blindly from the beginning",
        "text_vi": "Phát hành lại toàn bộ nhiệm vụ một cách mù quáng ngay từ đầu"
      },
      {
        "key": "C",
        "text": "Store job state only in an in-memory conversation",
        "text_vi": "Chỉ lưu trữ trạng thái công việc trong cuộc trò chuyện trong bộ nhớ"
      },
      {
        "key": "D",
        "text": "Rely on the UI tab staying open",
        "text_vi": "Dựa vào tab UI luôn mở"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Durable execution avoids work loss and supports bounded recovery.",
    "question_vi": "Một nhóm đa chức năng tại một chuỗi bán lẻ quốc tế có kế hoạch hiện đại hóa ERP bằng cách sử dụng các bản cập nhật hàng tồn kho ở cấp độ cửa hàng, trong khi vẫn duy trì khả năng thanh toán dưới giây. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 32 trường hợp thử nghiệm đại diện. Dịch vụ bên ngoài không liên tục khả dụng và công việc của nhân viên phải tiếp tục được khởi động lại. Mẫu nào tốt nhất?",
    "explanation_vi": "Việc thực thi bền vững tránh mất việc và hỗ trợ khả năng phục hồi có giới hạn."
  },
  {
    "id": 32,
    "topic": "Integration (19%)",
    "question": "An incident review at a regional hospital network focuses on AI handling of patient discharge letters in the clinical records system; stakeholders insist on strict clinical authorization. The workload is assessed in rollout cohort 6 with 33 representative test cases. A customer asks the assistant to update a record and show proof. What should the integration return?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "An unverified guess of the new record value",
        "text_vi": "Một dự đoán chưa được xác minh về giá trị bản ghi mới"
      },
      {
        "key": "B",
        "text": "A durable record ID, committed version, and verified operation status",
        "text_vi": "ID bản ghi lâu bền, phiên bản đã cam kết và trạng thái hoạt động đã được xác minh"
      },
      {
        "key": "C",
        "text": "Only a friendly acknowledgment generated by the model",
        "text_vi": "Chỉ có sự thừa nhận thân thiện được tạo ra bởi mô hình"
      },
      {
        "key": "D",
        "text": "The model's internal certainty",
        "text_vi": "Sự chắc chắn bên trong của mô hình"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Use authoritative tool results as proof of state change.",
    "question_vi": "Đánh giá sự cố tại mạng lưới bệnh viện khu vực tập trung vào việc xử lý AI thư xuất viện của bệnh nhân trong hệ thống hồ sơ lâm sàng; các bên liên quan nhấn mạnh vào sự cho phép lâm sàng nghiêm ngặt. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 33 trường hợp thử nghiệm đại diện. Một khách hàng yêu cầu trợ lý cập nhật hồ sơ và đưa ra bằng chứng. Sự tích hợp sẽ trở lại là gì?",
    "explanation_vi": "Sử dụng kết quả của công cụ có thẩm quyền làm bằng chứng về sự thay đổi trạng thái."
  },
  {
    "id": 33,
    "topic": "Integration (19%)",
    "question": "A pilot retrospective at an energy utility identifies concerns in asset operations platform processing maintenance incident reports, where high operational safety impact applies. The workload is assessed in rollout cohort 6 with 28 representative test cases. A user revokes document access mid-session. What must an RAG service do?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Let Claude decide whether the revocation matters",
        "text_vi": "Hãy để Claude quyết định xem việc thu hồi có quan trọng không"
      },
      {
        "key": "B",
        "text": "Keep using an old embedding because embeddings are not documents",
        "text_vi": "Tiếp tục sử dụng nội dung nhúng cũ vì nội dung nhúng không phải là tài liệu"
      },
      {
        "key": "C",
        "text": "Recheck permissions on subsequent retrieval and prevent serving revoked cached data",
        "text_vi": "Kiểm tra lại quyền trong lần truy xuất tiếp theo và ngăn việc cung cấp dữ liệu đã lưu trong bộ nhớ đệm đã bị thu hồi"
      },
      {
        "key": "D",
        "text": "Assume a previous login grants permanent access",
        "text_vi": "Giả sử đăng nhập trước đó cấp quyền truy cập vĩnh viễn"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Authorization and cache invalidation must reflect current entitlements.",
    "question_vi": "Một cuộc hồi cứu thí điểm tại một công ty năng lượng xác định các mối lo ngại trong nền tảng vận hành tài sản xử lý các báo cáo sự cố bảo trì, trong đó áp dụng tác động an toàn vận hành cao. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 28 trường hợp thử nghiệm đại diện. Người dùng thu hồi quyền truy cập tài liệu vào giữa phiên. Dịch vụ RAG phải làm gì?",
    "explanation_vi": "Việc ủy quyền và vô hiệu hóa bộ đệm phải phản ánh các quyền hiện tại."
  },
  {
    "id": 34,
    "topic": "Integration (19%)",
    "question": "At a Japanese manufacturing group, an AI pilot processes quality-inspection records from the factory MES; mandatory operator sign-off is a non-negotiable requirement. The workload is assessed in rollout cohort 6 with 31 representative test cases. Which TWO controls are most important for secure and accountable operation of this workflow? (Choose TWO.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "Assume suggested commands are safe because they are code",
        "text_vi": "Giả sử các lệnh được đề xuất là an toàn vì chúng là mã"
      },
      {
        "key": "B",
        "text": "Run all commands as root for reliability",
        "text_vi": "Chạy tất cả các lệnh dưới quyền root để đảm bảo độ tin cậy"
      },
      {
        "key": "C",
        "text": "Record correlated, redacted audit evidence for every external action",
        "text_vi": "Ghi lại bằng chứng kiểm toán tương quan, được biên tập lại cho mọi hành động bên ngoài"
      },
      {
        "key": "D",
        "text": "Enforce least-privilege authorization in the tool-execution service",
        "text_vi": "Thực thi ủy quyền có đặc quyền tối thiểu trong dịch vụ thực thi công cụ"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "explanation": "Both controls are necessary: enforce least-privilege authorization in the tool-execution service; and record correlated, redacted audit evidence for every external action. Model instructions alone do not substitute for enforceable controls.",
    "question_vi": "Tại một nhóm sản xuất Nhật Bản, một dự án thí điểm AI (AI pilot) xử lý hồ sơ kiểm tra chất lượng từ MES của nhà máy; việc ký duyệt (sign-off) bắt buộc của nhà điều hành là một yêu cầu không thể thương lượng. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 31 trường hợp thử nghiệm đại diện. HAI biện pháp kiểm soát nào là quan trọng nhất để vận hành quy trình công việc này một cách an toàn và có trách nhiệm? (Chọn HAI.)",
    "explanation_vi": "Cả hai biện pháp kiểm soát đều cần thiết: thực thi ủy quyền có đặc quyền tối thiểu trong dịch vụ thực thi công cụ; và ghi lại bằng chứng kiểm toán tương quan, được biên tập lại cho mọi hành động bên ngoài. Chỉ hướng dẫn mô hình không thể thay thế cho các biện pháp kiểm soát có thể thực thi được."
  },
  {
    "id": 35,
    "topic": "Governance, Safety & Risk Management (14%)",
    "question": "The architecture board of a logistics provider evaluates cross-border shipment exceptions workflows in transport management system, prioritizing intermittent connectivity. The workload is assessed in rollout cohort 6 with 33 representative test cases. A third-party tool processes regulated documents. What is necessary before enabling it?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Assess vendor terms, data flows, security controls, and contractual restrictions",
        "text_vi": "Đánh giá các điều khoản của nhà cung cấp, luồng dữ liệu, kiểm soát bảo mật và các hạn chế trong hợp đồng"
      },
      {
        "key": "B",
        "text": "Enable it first, then ask legal after an incident",
        "text_vi": "Kích hoạt nó trước, sau đó hỏi pháp luật sau khi xảy ra sự cố"
      },
      {
        "key": "C",
        "text": "Trust any service that speaks MCP",
        "text_vi": "Tin tưởng bất kỳ dịch vụ nào nói MCP"
      },
      {
        "key": "D",
        "text": "Confirm the tool has a memorable brand",
        "text_vi": "Xác nhận công cụ có thương hiệu đáng nhớ"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Third-party integrations extend the governance boundary and require review.",
    "question_vi": "Hội đồng kiến ​​trúc của nhà cung cấp dịch vụ hậu cần đánh giá các quy trình ngoại lệ đối với lô hàng xuyên biên giới trong hệ thống quản lý vận tải, ưu tiên kết nối không liên tục. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 33 trường hợp thử nghiệm đại diện. Công cụ của bên thứ ba xử lý các tài liệu được quy định. Điều gì là cần thiết trước khi kích hoạt nó?",
    "explanation_vi": "Tích hợp của bên thứ ba mở rộng ranh giới quản trị và yêu cầu xem xét."
  },
  {
    "id": 36,
    "topic": "Solution Design & Architecture (17%)",
    "question": "A pilot retrospective at an energy utility identifies concerns in asset operations platform processing maintenance incident reports, where high operational safety impact applies. The workload is assessed in rollout cohort 6 with 30 representative test cases. An intake agent must process 20,000 independent forms overnight. Which design best separates scale from correctness?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Let the model decide whether duplicate form submissions should be ignored",
        "text_vi": "Hãy để mô hình quyết định xem có nên bỏ qua việc gửi biểu mẫu trùng lặp hay không"
      },
      {
        "key": "B",
        "text": "Have the model self-assign unbounded workers",
        "text_vi": "Có mô hình tự phân công công nhân không giới hạn"
      },
      {
        "key": "C",
        "text": "Keep one interactive conversation alive for every form",
        "text_vi": "Duy trì một cuộc trò chuyện mang tính tương tác cho mọi hình thức"
      },
      {
        "key": "D",
        "text": "Queue independent jobs, process with bounded concurrency, and validate outputs before committing",
        "text_vi": "Xếp hàng các công việc độc lập, xử lý đồng thời có giới hạn và xác thực kết quả đầu ra trước khi cam kết"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Durable queues and idempotent commits make batch processing recoverable and scalable.",
    "question_vi": "Một cuộc hồi cứu thí điểm tại một công ty năng lượng xác định các mối lo ngại trong nền tảng vận hành tài sản xử lý các báo cáo sự cố bảo trì, trong đó áp dụng tác động an toàn vận hành cao. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 30 trường hợp thử nghiệm đại diện. Một đại lý tiếp nhận phải xử lý 20.000 biểu mẫu độc lập chỉ trong một đêm. Thiết kế nào tách biệt tốt nhất giữa quy mô và tính chính xác?",
    "explanation_vi": "Hàng đợi lâu bền và các cam kết bình thường giúp quá trình xử lý hàng loạt có thể phục hồi và mở rộng được."
  },
  {
    "id": 37,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "question": "For the next release, a multinational bank will connect Claude to core banking platform to work with corporate credit applications under auditable financial controls. The workload is assessed in rollout cohort 6 with 35 representative test cases. An application must quote exact legal clauses with page references. Which context representation is preferable?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Provide uncited paraphrases as legal proof",
        "text_vi": "Cung cấp các diễn giải không được trích dẫn làm bằng chứng pháp lý"
      },
      {
        "key": "B",
        "text": "Use a high-confidence adjective in every answer",
        "text_vi": "Sử dụng tính từ có độ tin cậy cao trong mọi câu trả lời"
      },
      {
        "key": "C",
        "text": "Retrieve bounded source passages with stable document and page identifiers",
        "text_vi": "Truy xuất các đoạn nguồn bị giới hạn với số nhận dạng trang và tài liệu ổn định"
      },
      {
        "key": "D",
        "text": "Ask the model to invent line numbers for convenience",
        "text_vi": "Yêu cầu người mẫu phát minh ra số dòng cho tiện"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Source traceability requires real locators and evidence-linked quotations.",
    "question_vi": "Trong lần phát hành tiếp theo, một ngân hàng đa quốc gia sẽ kết nối Claude với nền tảng ngân hàng cốt lõi để hoạt động với các ứng dụng tín dụng doanh nghiệp dưới sự kiểm soát tài chính có thể kiểm toán được. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 35 trường hợp thử nghiệm đại diện. Một ứng dụng phải trích dẫn các điều khoản pháp lý chính xác với các trang tham khảo. Đại diện bối cảnh nào là thích hợp hơn?",
    "explanation_vi": "Truy xuất nguồn gốc đòi hỏi phải có người định vị thực tế và trích dẫn liên kết với bằng chứng."
  },
  {
    "id": 38,
    "topic": "Integration (19%)",
    "question": "The architecture board of a logistics provider evaluates cross-border shipment exceptions workflows in transport management system, prioritizing intermittent connectivity. The workload is assessed in rollout cohort 6 with 35 representative test cases. A workflow invokes read tools and write tools. How should tooling permissions be organized?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Grant identical broad permissions to all tools",
        "text_vi": "Cấp quyền rộng rãi giống hệt nhau cho tất cả các công cụ"
      },
      {
        "key": "B",
        "text": "Use a single unlogged superuser token",
        "text_vi": "Sử dụng một mã thông báo siêu người dùng chưa được đăng nhập"
      },
      {
        "key": "C",
        "text": "Ask Claude to infer permissions from tool names",
        "text_vi": "Yêu cầu Claude suy ra quyền từ tên công cụ"
      },
      {
        "key": "D",
        "text": "Separate read and write capabilities with least privilege and stricter gates for writes",
        "text_vi": "Tách biệt khả năng đọc và ghi với ít đặc quyền nhất và cổng ghi chặt chẽ hơn"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Capability separation limits blast radius and enables differentiated approval policies.",
    "question_vi": "Hội đồng kiến ​​trúc của nhà cung cấp dịch vụ hậu cần đánh giá các quy trình ngoại lệ đối với lô hàng xuyên biên giới trong hệ thống quản lý vận tải, ưu tiên kết nối không liên tục. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 35 trường hợp thử nghiệm đại diện. Một quy trình làm việc gọi các công cụ đọc và công cụ viết. Quyền sử dụng công cụ nên được tổ chức như thế nào?",
    "explanation_vi": "Khả năng phân tách giới hạn bán kính vụ nổ và cho phép các chính sách phê duyệt khác biệt."
  },
  {
    "id": 39,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "question": "A regulated delivery team at an insurance carrier is integrating policy and claim files into claims processing platform; its operational mandate includes regulated evidence retention. The workload is assessed in rollout cohort 6 with 36 representative test cases. Which TWO controls are most important for secure and accountable operation of this workflow? (Choose TWO.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "Replace evaluation with one executive demo",
        "text_vi": "Thay thế đánh giá bằng một bản demo điều hành"
      },
      {
        "key": "B",
        "text": "Use only the easy examples because they are reproducible",
        "text_vi": "Chỉ sử dụng những ví dụ dễ dàng vì chúng có thể tái sử dụng được"
      },
      {
        "key": "C",
        "text": "Track operational guardrails such as high-severity failures and tail latency",
        "text_vi": "Theo dõi các biện pháp bảo vệ vận hành như lỗi ở mức độ nghiêm trọng cao và độ trễ ở đuôi"
      },
      {
        "key": "D",
        "text": "Evaluate task correctness using representative held-out scenarios",
        "text_vi": "Đánh giá tính chính xác của nhiệm vụ bằng cách sử dụng các kịch bản được tổ chức đại diện"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "explanation": "Both controls are necessary: evaluate task correctness using representative held-out scenarios; and track operational guardrails such as high-severity failures and tail latency. Model instructions alone do not substitute for enforceable controls.",
    "question_vi": "Nhóm phân phối được quản lý tại một hãng bảo hiểm đang tích hợp các hồ sơ chính sách và yêu cầu bồi thường vào nền tảng xử lý yêu cầu bồi thường; nhiệm vụ hoạt động của nó bao gồm việc lưu giữ bằng chứng theo quy định. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 36 trường hợp thử nghiệm đại diện. HAI biện pháp kiểm soát nào là quan trọng nhất để vận hành quy trình công việc này một cách an toàn và có trách nhiệm? (Chọn HAI.)",
    "explanation_vi": "Cả hai biện pháp kiểm soát đều cần thiết: đánh giá tính chính xác của nhiệm vụ bằng cách sử dụng các kịch bản được đưa ra mang tính đại diện; và theo dõi các rào cản vận hành như lỗi ở mức độ nghiêm trọng cao và độ trễ ở đuôi. Chỉ hướng dẫn mô hình không thể thay thế cho các biện pháp kiểm soát có thể thực thi được."
  },
  {
    "id": 40,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "question": "An incident review at a regional hospital network focuses on AI handling of patient discharge letters in the clinical records system; stakeholders insist on strict clinical authorization. The workload is assessed in rollout cohort 6 with 32 representative test cases. A service has a strict 99th-percentile latency target. Which statistic must be tracked?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Only the token count of the system prompt",
        "text_vi": "Chỉ số lượng mã thông báo của system prompt"
      },
      {
        "key": "B",
        "text": "Mean latency of successful model requests only",
        "text_vi": "Độ trễ trung bình chỉ của các yêu cầu mô hình thành công"
      },
      {
        "key": "C",
        "text": "Fastest observed completion time",
        "text_vi": "Thời gian hoàn thành được quan sát nhanh nhất"
      },
      {
        "key": "D",
        "text": "p99 end-to-end latency under realistic load, including tool calls",
        "text_vi": "độ trễ từ đầu đến cuối p99 dưới tải thực tế, bao gồm cả các lệnh gọi công cụ"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Tail-latency SLOs require percentile measurement on real end-to-end journeys.",
    "question_vi": "Đánh giá sự cố tại mạng lưới bệnh viện khu vực tập trung vào việc xử lý AI thư xuất viện của bệnh nhân trong hệ thống hồ sơ lâm sàng; các bên liên quan nhấn mạnh vào sự cho phép lâm sàng nghiêm ngặt. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 32 trường hợp thử nghiệm đại diện. Một dịch vụ có mục tiêu độ trễ ở phân vị thứ 99 nghiêm ngặt. Thống kê nào phải được theo dõi?",
    "explanation_vi": "SLO có độ trễ cuối yêu cầu đo lường phần trăm trên các hành trình từ đầu đến cuối thực tế."
  },
  {
    "id": 41,
    "topic": "Solution Design & Architecture (17%)",
    "question": "An incident review at a regional hospital network focuses on AI handling of patient discharge letters in the clinical records system; stakeholders insist on strict clinical authorization. The workload is assessed in rollout cohort 6 with 35 representative test cases. A claims platform must handle changing exceptions and unpredictable research across multiple tools. Which design best fits?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "An agent with unrestricted production database access",
        "text_vi": "Một đại lý có quyền truy cập cơ sở dữ liệu sản xuất không hạn chế"
      },
      {
        "key": "B",
        "text": "A bounded tool-using agent with explicit permissions, checkpoints, and a stopping condition",
        "text_vi": "Tác nhân sử dụng công cụ bị giới hạn có quyền, điểm kiểm tra và điều kiện dừng rõ ràng"
      },
      {
        "key": "C",
        "text": "A scripted response for every possible exception",
        "text_vi": "Phản hồi theo kịch bản cho mọi ngoại lệ có thể xảy ra"
      },
      {
        "key": "D",
        "text": "A single static prompt with no tools",
        "text_vi": "Một prompt tĩnh duy nhất không có công cụ"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Open-ended research can justify an agent, but its permissions and termination must remain bounded.",
    "question_vi": "Đánh giá sự cố tại mạng lưới bệnh viện khu vực tập trung vào việc xử lý AI thư xuất viện của bệnh nhân trong hệ thống hồ sơ lâm sàng; các bên liên quan nhấn mạnh vào sự cho phép lâm sàng nghiêm ngặt. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 35 trường hợp thử nghiệm đại diện. Nền tảng xác nhận quyền sở hữu phải xử lý các trường hợp ngoại lệ luôn thay đổi và nghiên cứu không thể đoán trước trên nhiều công cụ. Thiết kế nào phù hợp nhất?",
    "explanation_vi": "Nghiên cứu kết thúc mở có thể biện minh cho một tác nhân, nhưng các quyền và việc chấm dứt nó phải vẫn bị giới hạn."
  },
  {
    "id": 42,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "question": "A pilot retrospective at an energy utility identifies concerns in asset operations platform processing maintenance incident reports, where high operational safety impact applies. The workload is assessed in rollout cohort 6 with 35 representative test cases. A sales team promises 100% factual correctness from the assistant. What should the architect communicate?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Explain measurable quality targets, residual risk, review controls, and an escalation path",
        "text_vi": "Giải thích các mục tiêu chất lượng có thể đo lường được, rủi ro tồn tại, các biện pháp kiểm soát xem xét và lộ trình leo thang"
      },
      {
        "key": "B",
        "text": "Exclude hard cases from all reports without disclosure",
        "text_vi": "Loại trừ các trường hợp khó khỏi tất cả các báo cáo mà không tiết lộ"
      },
      {
        "key": "C",
        "text": "Repeat the promise to avoid conflict",
        "text_vi": "Lặp lại lời hứa để tránh xung đột"
      },
      {
        "key": "D",
        "text": "Guarantee that citations eliminate every error",
        "text_vi": "Đảm bảo rằng trích dẫn loại bỏ mọi lỗi"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "LLM systems need explicit acceptance thresholds and honest risk communication.",
    "question_vi": "Một cuộc hồi cứu thí điểm tại một công ty năng lượng xác định các mối lo ngại trong nền tảng vận hành tài sản xử lý các báo cáo sự cố bảo trì, trong đó áp dụng tác động an toàn vận hành cao. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 35 trường hợp thử nghiệm đại diện. Đội ngũ bán hàng hứa hẹn trợ lý sẽ cung cấp thông tin chính xác 100% về thực tế. Kiến trúc sư nên truyền đạt điều gì?",
    "explanation_vi": "Hệ thống LLM cần ngưỡng chấp nhận rõ ràng và truyền đạt rủi ro trung thực."
  },
  {
    "id": 43,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "question": "A pilot retrospective at an energy utility identifies concerns in asset operations platform processing maintenance incident reports, where high operational safety impact applies. The workload is assessed in rollout cohort 6 with 29 representative test cases. A prompt follows a user-uploaded document containing 'ignore all previous instructions'. What is the right trust treatment?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Promote document instructions to system priority",
        "text_vi": "Đưa các hướng dẫn tài liệu lên mức độ ưu tiên của hệ thống"
      },
      {
        "key": "B",
        "text": "Treat document text as lower-trust data and keep tool policies outside its control",
        "text_vi": "Coi văn bản tài liệu là dữ liệu có độ tin cậy thấp hơn và giữ các chính sách công cụ nằm ngoài tầm kiểm soát của nó"
      },
      {
        "key": "C",
        "text": "Execute its instructions if formatted as XML",
        "text_vi": "Thực thi các hướng dẫn của nó nếu được định dạng là XML"
      },
      {
        "key": "D",
        "text": "Assume a document is trusted because retrieval found it",
        "text_vi": "Giả sử một tài liệu được tin cậy vì việc truy xuất đã tìm thấy nó"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "External content must not override trusted instructions or tool authorization.",
    "question_vi": "Một cuộc hồi cứu thí điểm tại một công ty năng lượng xác định các mối lo ngại trong nền tảng vận hành tài sản xử lý các báo cáo sự cố bảo trì, trong đó áp dụng tác động an toàn vận hành cao. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 29 trường hợp thử nghiệm đại diện. prompt theo sau tài liệu do người dùng tải lên có chứa 'bỏ qua tất cả các hướng dẫn trước đó'. Điều trị niềm tin đúng đắn là gì?",
    "explanation_vi": "Nội dung bên ngoài không được ghi đè các hướng dẫn đáng tin cậy hoặc ủy quyền công cụ."
  },
  {
    "id": 44,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "question": "An incident review at a regional hospital network focuses on AI handling of patient discharge letters in the clinical records system; stakeholders insist on strict clinical authorization. The workload is assessed in rollout cohort 6 with 30 representative test cases. A customer complains that the solution failed even though offline tests passed. What feedback loop is missing?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Instrument real-world failures, user feedback, root-cause review, and prioritized improvements",
        "text_vi": "Kiểm tra các lỗi trong thế giới thực, phản hồi của người dùng, đánh giá nguyên nhân cốt lõi và các cải tiến được ưu tiên"
      },
      {
        "key": "B",
        "text": "A larger internal slide deck",
        "text_vi": "Sàn trượt bên trong lớn hơn"
      },
      {
        "key": "C",
        "text": "More synthetic examples without production monitoring",
        "text_vi": "Nhiều ví dụ tổng hợp hơn mà không cần giám sát sản xuất"
      },
      {
        "key": "D",
        "text": "A new logo for the application",
        "text_vi": "Logo mới cho ứng dụng"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Lifecycle improvement joins field telemetry with evaluation and stakeholder feedback.",
    "question_vi": "Đánh giá sự cố tại mạng lưới bệnh viện khu vực tập trung vào việc xử lý AI thư xuất viện của bệnh nhân trong hệ thống hồ sơ lâm sàng; các bên liên quan nhấn mạnh vào sự cho phép lâm sàng nghiêm ngặt. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 30 trường hợp thử nghiệm đại diện. Một khách hàng phàn nàn rằng giải pháp không thành công mặc dù các thử nghiệm ngoại tuyến đã vượt qua. Vòng phản hồi nào bị thiếu?",
    "explanation_vi": "Cải tiến vòng đời kết hợp đo lường từ xa tại hiện trường với đánh giá và phản hồi của các bên liên quan."
  },
  {
    "id": 45,
    "topic": "Developer Productivity & Operational Enablement (7%)",
    "question": "The architecture board of a logistics provider evaluates cross-border shipment exceptions workflows in transport management system, prioritizing intermittent connectivity. The workload is assessed in rollout cohort 6 with 31 representative test cases. Which TWO controls are most important for secure and accountable operation of this workflow? (Choose TWO.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "Only the user-facing success message",
        "text_vi": "Chỉ có thông báo thành công hướng tới người dùng"
      },
      {
        "key": "B",
        "text": "Constrain coding-agent credentials and use protected deployment gates",
        "text_vi": "Hạn chế thông tin xác thực tác nhân mã hóa và sử dụng các cổng triển khai được bảo vệ"
      },
      {
        "key": "C",
        "text": "Raw credentials in a debugging log",
        "text_vi": "Thông tin xác thực thô trong nhật ký gỡ lỗi"
      },
      {
        "key": "D",
        "text": "Require reviewed code changes and repeatable automated tests",
        "text_vi": "Yêu cầu thay đổi mã được xem xét và kiểm tra tự động lặp lại"
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "explanation": "Both controls are necessary: require reviewed code changes and repeatable automated tests; and constrain coding-agent credentials and use protected deployment gates. Model instructions alone do not substitute for enforceable controls.",
    "question_vi": "Hội đồng kiến ​​trúc của nhà cung cấp dịch vụ hậu cần đánh giá các quy trình ngoại lệ đối với lô hàng xuyên biên giới trong hệ thống quản lý vận tải, ưu tiên kết nối không liên tục. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 31 trường hợp thử nghiệm đại diện. HAI biện pháp kiểm soát nào là quan trọng nhất để vận hành quy trình công việc này một cách an toàn và có trách nhiệm? (Chọn HAI.)",
    "explanation_vi": "Cả hai biện pháp kiểm soát đều cần thiết: yêu cầu xem xét các thay đổi mã và kiểm tra tự động lặp lại; và hạn chế thông tin xác thực tác nhân mã hóa cũng như sử dụng các cổng triển khai được bảo vệ. Chỉ hướng dẫn mô hình không thể thay thế cho các biện pháp kiểm soát có thể thực thi được."
  },
  {
    "id": 46,
    "topic": "Governance, Safety & Risk Management (14%)",
    "question": "For the next release, a multinational bank will connect Claude to core banking platform to work with corporate credit applications under auditable financial controls. The workload is assessed in rollout cohort 6 with 32 representative test cases. A company wants to let the assistant publish policy updates. What control best prevents silent drift?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Assume no drift if the generated text is syntactically valid",
        "text_vi": "Giả sử không có sự trôi dạt nếu văn bản được tạo có giá trị về mặt cú pháp"
      },
      {
        "key": "B",
        "text": "Let every agent publish independently",
        "text_vi": "Hãy để mọi đại lý xuất bản độc lập"
      },
      {
        "key": "C",
        "text": "Require versioned policy review and approval, with post-apply verification and rollback plan",
        "text_vi": "Yêu cầu xem xét và phê duyệt chính sách theo phiên bản, cùng với kế hoạch khôi phục và xác minh sau áp dụng"
      },
      {
        "key": "D",
        "text": "Replace approval with a model self-assessment",
        "text_vi": "Thay thế phê duyệt bằng tự đánh giá mô hình"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Sensitive policy changes need review, verification, and recovery.",
    "question_vi": "Trong lần phát hành tiếp theo, một ngân hàng đa quốc gia sẽ kết nối Claude với nền tảng ngân hàng cốt lõi để hoạt động với các ứng dụng tín dụng doanh nghiệp dưới sự kiểm soát tài chính có thể kiểm toán được. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 32 trường hợp thử nghiệm đại diện. Một công ty muốn cho phép trợ lý xuất bản các cập nhật chính sách. Kiểm soát nào tốt nhất ngăn chặn sự trôi dạt im lặng?",
    "explanation_vi": "Những thay đổi chính sách nhạy cảm cần được xem xét, xác minh và phục hồi."
  },
  {
    "id": 47,
    "topic": "Solution Design & Architecture (17%)",
    "question": "A senior architect advising a public university considers a Claude workflow around student service inquiries and campus management platform with strict student data access. The workload is assessed in rollout cohort 6 with 28 representative test cases. A service must meet an end-to-end p95 latency target while calling three external systems. How should the target influence architecture?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Measure only average model latency",
        "text_vi": "Chỉ đo độ trễ trung bình của mô hình"
      },
      {
        "key": "B",
        "text": "Disable tracing to save all overhead",
        "text_vi": "Vô hiệu hóa theo dõi để tiết kiệm tất cả chi phí"
      },
      {
        "key": "C",
        "text": "Assume tool calls have zero variance",
        "text_vi": "Giả sử các lệnh gọi công cụ không có phương sai"
      },
      {
        "key": "D",
        "text": "Allocate latency budgets per stage and design timeouts, concurrency, and degradation paths",
        "text_vi": "Phân bổ ngân sách độ trễ cho mỗi giai đoạn và thiết kế thời gian chờ, đồng thời và đường dẫn xuống cấp"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "The end-to-end SLO includes model, retrieval, tool, and network latency, especially at the tail.",
    "question_vi": "Một kiến ​​trúc sư cấp cao tư vấn cho một trường đại học công lập đang xem xét quy trình làm việc của Claude xoay quanh các yêu cầu về dịch vụ sinh viên và nền tảng quản lý khuôn viên trường với quyền truy cập dữ liệu sinh viên nghiêm ngặt. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 28 trường hợp thử nghiệm đại diện. Một dịch vụ phải đáp ứng mục tiêu độ trễ p95 từ đầu đến cuối trong khi gọi ba hệ thống bên ngoài. Mục tiêu nên ảnh hưởng đến kiến ​​trúc như thế nào?",
    "explanation_vi": "SLO đầu cuối bao gồm mô hình, truy xuất, công cụ và độ trễ mạng, đặc biệt là ở phần cuối."
  },
  {
    "id": 48,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "question": "The architecture board of a logistics provider evaluates cross-border shipment exceptions workflows in transport management system, prioritizing intermittent connectivity. The workload is assessed in rollout cohort 6 with 32 representative test cases. A board needs to approve an architecture with significant residual privacy risk. What must be made explicit?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "An unquantified guarantee of safety",
        "text_vi": "Một sự đảm bảo an toàn không thể định lượng"
      },
      {
        "key": "B",
        "text": "Risk owner, mitigation options, residual exposure, alternatives, and approval decision",
        "text_vi": "Chủ sở hữu rủi ro, các phương án giảm thiểu, rủi ro tồn dư, các giải pháp thay thế và quyết định phê duyệt"
      },
      {
        "key": "C",
        "text": "Only the technology diagram",
        "text_vi": "Chỉ có sơ đồ công nghệ"
      },
      {
        "key": "D",
        "text": "A statement that the model is ethical",
        "text_vi": "Tuyên bố rằng mô hình này có tính đạo đức"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Decision makers need an accurate account of trade-offs and accepted risk.",
    "question_vi": "Hội đồng kiến ​​trúc của nhà cung cấp dịch vụ hậu cần đánh giá các quy trình ngoại lệ đối với lô hàng xuyên biên giới trong hệ thống quản lý vận tải, ưu tiên kết nối không liên tục. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 32 trường hợp thử nghiệm đại diện. Hội đồng quản trị cần phê duyệt một kiến ​​trúc có rủi ro đáng kể về quyền riêng tư còn sót lại. Cần phải làm rõ điều gì?",
    "explanation_vi": "Người ra quyết định cần có sự tính toán chính xác về sự đánh đổi và rủi ro được chấp nhận."
  },
  {
    "id": 49,
    "topic": "Integration (19%)",
    "question": "A regulated delivery team at an insurance carrier is integrating policy and claim files into claims processing platform; its operational mandate includes regulated evidence retention. The workload is assessed in rollout cohort 6 with 37 representative test cases. A tool call times out after creating a ticket, and the agent retries. What prevents duplicate tickets?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Tell Claude to avoid duplicates in its system prompt",
        "text_vi": "Nói với Claude để tránh trùng lặp trong system prompt của nó"
      },
      {
        "key": "B",
        "text": "Create a second ticket and later ask the agent to compare",
        "text_vi": "Tạo một vé thứ hai và sau đó yêu cầu đại lý so sánh"
      },
      {
        "key": "C",
        "text": "Use an idempotency key and persist operation outcomes for safe retries",
        "text_vi": "Sử dụng khóa tạm thời và duy trì kết quả hoạt động để thử lại an toàn"
      },
      {
        "key": "D",
        "text": "Disable all retries permanently",
        "text_vi": "Vô hiệu hóa vĩnh viễn tất cả các lần thử lại"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Idempotency and durable operation tracking handle uncertain outcomes safely.",
    "question_vi": "Nhóm phân phối được quản lý tại một hãng bảo hiểm đang tích hợp các hồ sơ chính sách và yêu cầu bồi thường vào nền tảng xử lý yêu cầu bồi thường; nhiệm vụ hoạt động của nó bao gồm việc lưu giữ bằng chứng theo quy định. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 37 trường hợp thử nghiệm đại diện. Cuộc gọi công cụ hết thời gian chờ sau khi tạo phiếu và tổng đài viên sẽ thử lại. Điều gì ngăn ngừa vé trùng lặp?",
    "explanation_vi": "Tính bình thường và theo dõi hoạt động lâu dài xử lý các kết quả không chắc chắn một cách an toàn."
  },
  {
    "id": 50,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "question": "At scale, a B2B software vendor expects Claude to support customer support platform users working with support and incident tickets, without compromising multi-tenant isolation. The workload is assessed in rollout cohort 6 with 30 representative test cases. A classification task fails on unusual category boundaries. Which first iteration is most defensible?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Remove ambiguous categories from the output without stakeholder approval",
        "text_vi": "Xóa các danh mục mơ hồ khỏi đầu ra mà không có sự chấp thuận của các bên liên quan"
      },
      {
        "key": "B",
        "text": "Add representative labeled examples and evaluate on a held-out edge-case set",
        "text_vi": "Thêm các ví dụ được gắn nhãn đại diện và đánh giá trên tập hợp trường hợp cạnh được giữ lại"
      },
      {
        "key": "C",
        "text": "Increase temperature until accuracy improves on one example",
        "text_vi": "Tăng nhiệt độ cho đến khi độ chính xác được cải thiện trên một ví dụ"
      },
      {
        "key": "D",
        "text": "Change the system prompt every request at random",
        "text_vi": "Thay đổi system prompt một cách ngẫu nhiên theo mọi yêu cầu"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Few-shot examples and regression tests can clarify boundaries while detecting unintended changes.",
    "question_vi": "Ở quy mô lớn, một nhà cung cấp phần mềm B2B kỳ vọng Claude sẽ hỗ trợ người dùng nền tảng hỗ trợ khách hàng làm việc với các phiếu hỗ trợ và sự cố mà không ảnh hưởng đến sự cô lập của nhiều bên thuê. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 30 trường hợp thử nghiệm đại diện. Nhiệm vụ phân loại không thành công trên ranh giới danh mục bất thường. Lần lặp đầu tiên nào có thể phòng thủ tốt nhất?",
    "explanation_vi": "Các ví dụ ngắn gọn và kiểm tra hồi quy có thể làm rõ ranh giới đồng thời phát hiện những thay đổi ngoài ý muốn."
  },
  {
    "id": 51,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "question": "During a production-readiness review at a government procurement office, the architects examine purchase approval records connected to the procurement workflow, with formal reviewer approval. The workload is assessed in rollout cohort 6 with 29 representative test cases. A team uses an LLM judge to score factual answers. What should the evaluation plan include?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Score solely on response verbosity",
        "text_vi": "Chỉ tính điểm dựa trên mức độ dài dòng của câu trả lời"
      },
      {
        "key": "B",
        "text": "Treat the judge as infallible",
        "text_vi": "Hãy coi thẩm phán là người không thể sai lầm"
      },
      {
        "key": "C",
        "text": "Human-calibrated rubrics, bias checks, and periodic adjudication of judge disagreements",
        "text_vi": "Thang đánh giá do con người hiệu chỉnh, kiểm tra thiên vị và xét xử định kỳ những bất đồng của thẩm phán"
      },
      {
        "key": "D",
        "text": "Always use the same model as generator and judge with no checks",
        "text_vi": "Luôn sử dụng cùng một mô hình như trình tạo và đánh giá mà không cần kiểm tra"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "LLM judges are useful but need calibration and independent checks.",
    "question_vi": "Trong quá trình đánh giá mức độ sẵn sàng sản xuất tại văn phòng mua sắm của chính phủ, các kiến ​​trúc sư kiểm tra hồ sơ phê duyệt mua hàng được kết nối với quy trình mua sắm với sự chấp thuận của người đánh giá chính thức. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 29 trường hợp thử nghiệm đại diện. Một nhóm sử dụng giám khảo LLM để chấm điểm các câu trả lời thực tế. Kế hoạch đánh giá nên bao gồm những gì?",
    "explanation_vi": "Thẩm phán LLM rất hữu ích nhưng cần hiệu chuẩn và kiểm tra độc lập."
  },
  {
    "id": 52,
    "topic": "Governance, Safety & Risk Management (14%)",
    "question": "At a Japanese manufacturing group, an AI pilot processes quality-inspection records from the factory MES; mandatory operator sign-off is a non-negotiable requirement. The workload is assessed in rollout cohort 6 with 29 representative test cases. An autonomous agent is allowed to delete cloud resources. What reduces the blast radius?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Use least-privilege roles, isolated environments, explicit approvals, and recoverability controls",
        "text_vi": "Sử dụng các vai trò có ít đặc quyền nhất, môi trường biệt lập, phê duyệt rõ ràng và kiểm soát khả năng phục hồi"
      },
      {
        "key": "B",
        "text": "Give it organization-owner credentials",
        "text_vi": "Cung cấp thông tin xác thực của chủ sở hữu tổ chức"
      },
      {
        "key": "C",
        "text": "Disable all operation logs",
        "text_vi": "Vô hiệu hóa tất cả nhật ký hoạt động"
      },
      {
        "key": "D",
        "text": "Rely on a system prompt saying 'do not delete important resources'",
        "text_vi": "Dựa vào prompt của hệ thống với nội dung 'không xóa các tài nguyên quan trọng'"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Destructive capabilities need both permission limits and recovery strategies.",
    "question_vi": "Tại một nhóm sản xuất Nhật Bản, một dự án thí điểm AI (AI pilot) xử lý hồ sơ kiểm tra chất lượng từ MES của nhà máy; việc ký duyệt (sign-off) bắt buộc của nhà điều hành là một yêu cầu không thể thương lượng. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 29 trường hợp thử nghiệm đại diện. Một tác nhân tự trị được phép xóa tài nguyên đám mây. Điều gì làm giảm bán kính vụ nổ?",
    "explanation_vi": "Khả năng phá hủy cần cả giới hạn cấp phép và chiến lược phục hồi."
  },
  {
    "id": 53,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "question": "A senior architect advising a public university considers a Claude workflow around student service inquiries and campus management platform with strict student data access. The workload is assessed in rollout cohort 6 with 35 representative test cases. A team considers reducing generated tokens to improve cost. What evidence should guide the change?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Measure task success and user satisfaction against cost and latency across representative tasks",
        "text_vi": "Đo lường mức độ thành công của nhiệm vụ và sự hài lòng của người dùng so với chi phí và độ trễ trên các nhiệm vụ đại diện"
      },
      {
        "key": "B",
        "text": "Assume shorter responses are always better",
        "text_vi": "Giả sử phản hồi ngắn hơn luôn tốt hơn"
      },
      {
        "key": "C",
        "text": "Delete required caveats without testing",
        "text_vi": "Xóa các cảnh báo cần thiết mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Optimize only the longest prompts in the test set",
        "text_vi": "Chỉ tối ưu hóa các prompt dài nhất trong bộ thử nghiệm"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Efficiency improvements must preserve required quality and task completion.",
    "question_vi": "Một kiến ​​trúc sư cấp cao tư vấn cho một trường đại học công lập đang xem xét quy trình làm việc của Claude xoay quanh các yêu cầu về dịch vụ sinh viên và nền tảng quản lý khuôn viên trường với quyền truy cập dữ liệu sinh viên nghiêm ngặt. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 35 trường hợp thử nghiệm đại diện. Một nhóm xem xét việc giảm số lượng token được tạo ra để cải thiện chi phí. Bằng chứng nào sẽ hướng dẫn sự thay đổi?",
    "explanation_vi": "Cải tiến hiệu quả phải duy trì chất lượng cần thiết và hoàn thành nhiệm vụ."
  },
  {
    "id": 54,
    "topic": "Integration (19%)",
    "question": "During a production-readiness review at a government procurement office, the architects examine purchase approval records connected to the procurement workflow, with formal reviewer approval. The workload is assessed in rollout cohort 6 with 30 representative test cases. A knowledge retrieval service produces relevant but unsupported answers. Which integration improvement best addresses grounding?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Return source IDs and passages and require answer-to-source consistency checks",
        "text_vi": "Trả về ID nguồn và đoạn văn, đồng thời yêu cầu kiểm tra tính nhất quán của câu trả lời với nguồn"
      },
      {
        "key": "B",
        "text": "Replace citations with model confidence scores",
        "text_vi": "Thay thế trích dẫn bằng điểm tin cậy của mô hình"
      },
      {
        "key": "C",
        "text": "Turn off retrieval and ask the model to remember more",
        "text_vi": "Tắt tính năng truy xuất và yêu cầu người mẫu ghi nhớ thêm"
      },
      {
        "key": "D",
        "text": "Increase context with unrelated documents",
        "text_vi": "Tăng ngữ cảnh với các tài liệu không liên quan"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Grounding requires traceable evidence and validation, not solely semantic relevance.",
    "question_vi": "Trong quá trình đánh giá mức độ sẵn sàng sản xuất tại văn phòng mua sắm của chính phủ, các kiến ​​trúc sư kiểm tra hồ sơ phê duyệt mua hàng được kết nối với quy trình mua sắm với sự chấp thuận của người đánh giá chính thức. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 30 trường hợp thử nghiệm đại diện. Dịch vụ truy xuất kiến ​​thức tạo ra các câu trả lời có liên quan nhưng không được hỗ trợ. Cải tiến tích hợp nào giải quyết tốt nhất vấn đề nối đất?",
    "explanation_vi": "Việc nối đất đòi hỏi bằng chứng và xác nhận có thể theo dõi được, không chỉ liên quan đến ngữ nghĩa."
  },
  {
    "id": 55,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "question": "At a Japanese manufacturing group, an AI pilot processes quality-inspection records from the factory MES; mandatory operator sign-off is a non-negotiable requirement. The workload is assessed in rollout cohort 6 with 30 representative test cases. An incident is rare but severe and missing from evaluation data. Which method best improves coverage?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Delete incident records to avoid bias",
        "text_vi": "Xóa hồ sơ sự cố để tránh sai lệch"
      },
      {
        "key": "B",
        "text": "Use only random sampling from common requests",
        "text_vi": "Chỉ sử dụng mẫu ngẫu nhiên từ các yêu cầu phổ biến"
      },
      {
        "key": "C",
        "text": "Wait for enough production incidents without a plan",
        "text_vi": "Chờ đủ sự cố sản xuất mà không có kế hoạch"
      },
      {
        "key": "D",
        "text": "Construct targeted adversarial and edge-case tests derived from the failure mode",
        "text_vi": "Xây dựng các thử nghiệm đối nghịch và trường hợp cạnh có mục tiêu bắt nguồn từ chế độ lỗi"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Risk-driven test generation is necessary for rare, high-impact failures.",
    "question_vi": "Tại một nhóm sản xuất Nhật Bản, một dự án thí điểm AI (AI pilot) xử lý hồ sơ kiểm tra chất lượng từ MES của nhà máy; việc ký duyệt (sign-off) bắt buộc của nhà điều hành là một yêu cầu không thể thương lượng. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 30 trường hợp thử nghiệm đại diện. Một sự cố tuy hiếm gặp nhưng nghiêm trọng và không có trong dữ liệu đánh giá. Phương pháp nào cải thiện phạm vi bảo hiểm tốt nhất?",
    "explanation_vi": "Việc tạo thử nghiệm dựa trên rủi ro là cần thiết đối với những lỗi hiếm gặp, có tác động lớn."
  },
  {
    "id": 56,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "question": "At a Japanese manufacturing group, an AI pilot processes quality-inspection records from the factory MES; mandatory operator sign-off is a non-negotiable requirement. The workload is assessed in rollout cohort 6 with 28 representative test cases. A procurement leader wants a fixed completion date despite unknown document quality. What is the best response?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Guarantee timing without inspecting inputs",
        "text_vi": "Đảm bảo thời gian mà không cần kiểm tra đầu vào"
      },
      {
        "key": "B",
        "text": "Remove testing to fit the schedule",
        "text_vi": "Loại bỏ kiểm tra để phù hợp với lịch trình"
      },
      {
        "key": "C",
        "text": "Propose staged milestones with discovery findings, pilot criteria, assumptions, and contingency triggers",
        "text_vi": "Đề xuất các mốc quan trọng theo giai đoạn với các phát hiện khám phá, tiêu chí thí điểm, giả định và các yếu tố kích hoạt dự phòng"
      },
      {
        "key": "D",
        "text": "Hide dependencies from the project plan",
        "text_vi": "Ẩn các phần phụ thuộc khỏi kế hoạch dự án"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Transparent milestone planning makes uncertainty and dependencies actionable.",
    "question_vi": "Tại một nhóm sản xuất Nhật Bản, một dự án thí điểm AI (AI pilot) xử lý hồ sơ kiểm tra chất lượng từ MES của nhà máy; việc ký duyệt (sign-off) bắt buộc của nhà điều hành là một yêu cầu không thể thương lượng. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 28 trường hợp thử nghiệm đại diện. Người lãnh đạo thu mua muốn có ngày hoàn thành cố định mặc dù chất lượng tài liệu không rõ. Phản ứng tốt nhất là gì?",
    "explanation_vi": "Việc lập kế hoạch cho các mốc quan trọng minh bạch giúp cho sự không chắc chắn và sự phụ thuộc có thể thực hiện được."
  },
  {
    "id": 57,
    "topic": "Integration (19%)",
    "question": "For the next release, a multinational bank will connect Claude to core banking platform to work with corporate credit applications under auditable financial controls. The workload is assessed in rollout cohort 6 with 34 representative test cases. A service uses embeddings but keyword queries with product codes often fail. What is a sound retrieval enhancement?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Use only semantic search regardless of exact identifiers",
        "text_vi": "Chỉ sử dụng tìm kiếm ngữ nghĩa bất kể số nhận dạng chính xác"
      },
      {
        "key": "B",
        "text": "Evaluate hybrid keyword-plus-vector search with reranking on representative queries",
        "text_vi": "Đánh giá tìm kiếm từ khóa kết hợp với vectơ cộng với xếp hạng lại trên các truy vấn đại diện"
      },
      {
        "key": "C",
        "text": "Increase temperature for all queries",
        "text_vi": "Tăng nhiệt độ cho tất cả các truy vấn"
      },
      {
        "key": "D",
        "text": "Delete product codes from documents",
        "text_vi": "Xóa mã sản phẩm khỏi tài liệu"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Exact tokens and semantic matching have different strengths, so hybrid search can improve recall.",
    "question_vi": "Trong lần phát hành tiếp theo, một ngân hàng đa quốc gia sẽ kết nối Claude với nền tảng ngân hàng cốt lõi để hoạt động với các ứng dụng tín dụng doanh nghiệp dưới sự kiểm soát tài chính có thể kiểm toán được. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 34 trường hợp thử nghiệm đại diện. Một dịch vụ sử dụng phần nhúng nhưng các truy vấn từ khóa có mã sản phẩm thường không thành công. Tăng cường truy xuất âm thanh là gì?",
    "explanation_vi": "Mã thông báo chính xác và kết hợp ngữ nghĩa có những điểm mạnh khác nhau, vì vậy tìm kiếm kết hợp có thể cải thiện khả năng ghi nhớ."
  },
  {
    "id": 58,
    "topic": "Solution Design & Architecture (17%)",
    "question": "The architecture board of a logistics provider evaluates cross-border shipment exceptions workflows in transport management system, prioritizing intermittent connectivity. The workload is assessed in rollout cohort 6 with 37 representative test cases. An AI assistant drafts contract changes but only lawyers may authorize binding language. Where should authority sit?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "In an approval service that validates the exact draft version before publishing",
        "text_vi": "Trong dịch vụ phê duyệt xác thực phiên bản dự thảo chính xác trước khi xuất bản"
      },
      {
        "key": "B",
        "text": "In a post-hoc notification after publication",
        "text_vi": "Trong một thông báo hậu kỳ sau khi xuất bản"
      },
      {
        "key": "C",
        "text": "In the model's self-reported confidence score",
        "text_vi": "Trong điểm tự tin tự báo cáo của người mẫu"
      },
      {
        "key": "D",
        "text": "In the system prompt stating that the model should be careful",
        "text_vi": "Trong system prompt nêu rõ rằng mô hình nên cẩn thận"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "The authorization boundary must be external to model-generated text and tied to the reviewed artifact.",
    "question_vi": "Hội đồng kiến ​​trúc của nhà cung cấp dịch vụ hậu cần đánh giá các quy trình ngoại lệ đối với lô hàng xuyên biên giới trong hệ thống quản lý vận tải, ưu tiên kết nối không liên tục. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 37 trường hợp thử nghiệm đại diện. Trợ lý AI soạn thảo các thay đổi trong hợp đồng nhưng chỉ luật sư mới có thể ủy quyền cho ngôn ngữ ràng buộc. Quyền lực nên ngồi ở đâu?",
    "explanation_vi": "Ranh giới ủy quyền phải nằm ngoài văn bản do mô hình tạo và gắn với tạo phẩm được xem xét."
  },
  {
    "id": 59,
    "topic": "Integration (19%)",
    "question": "At scale, a B2B software vendor expects Claude to support customer support platform users working with support and incident tickets, without compromising multi-tenant isolation. The workload is assessed in rollout cohort 6 with 39 representative test cases. A payment action has high financial impact. Which tool schema and runtime control are most important?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Explicit typed arguments plus server-side amount limits, policy checks, and human approval",
        "text_vi": "Đối số được nhập rõ ràng cộng với giới hạn số lượng phía máy chủ, kiểm tra chính sách và phê duyệt của con người"
      },
      {
        "key": "B",
        "text": "One free-text field that the model interprets as the transaction",
        "text_vi": "Một trường văn bản tự do mà mô hình hiểu là giao dịch"
      },
      {
        "key": "C",
        "text": "Giving the tool access to all accounts for convenience",
        "text_vi": "Cấp cho công cụ quyền truy cập vào tất cả các tài khoản để thuận tiện"
      },
      {
        "key": "D",
        "text": "A prompt asking the model to confirm it is certain",
        "text_vi": "prompt yêu cầu mô hình xác nhận rằng nó chắc chắn"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Strong contracts and external authorization are required for state-changing tools.",
    "question_vi": "Ở quy mô lớn, một nhà cung cấp phần mềm B2B kỳ vọng Claude sẽ hỗ trợ người dùng nền tảng hỗ trợ khách hàng làm việc với các phiếu hỗ trợ và sự cố mà không ảnh hưởng đến sự cô lập của nhiều bên thuê. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 39 trường hợp thử nghiệm đại diện. Một hành động thanh toán có tác động tài chính cao. Lược đồ công cụ và kiểm soát thời gian chạy nào là quan trọng nhất?",
    "explanation_vi": "Cần có hợp đồng mạnh mẽ và sự cho phép bên ngoài để sử dụng các công cụ thay đổi trạng thái."
  },
  {
    "id": 60,
    "topic": "Solution Design & Architecture (17%)",
    "question": "At scale, a B2B software vendor expects Claude to support customer support platform users working with support and incident tickets, without compromising multi-tenant isolation. The workload is assessed in rollout cohort 6 with 31 representative test cases. Which TWO controls are most important for secure and accountable operation of this workflow? (Choose TWO.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "Keep a durable evidence trail linking inputs, proposed outcomes, and applied versions",
        "text_vi": "Lưu giữ dấu vết bằng chứng lâu dài liên kết đầu vào, kết quả đề xuất và các phiên bản áp dụng"
      },
      {
        "key": "B",
        "text": "Treat fluent wording as proof that evidence exists",
        "text_vi": "Coi cách diễn đạt trôi chảy như bằng chứng cho thấy bằng chứng tồn tại"
      },
      {
        "key": "C",
        "text": "Use a lower temperature as a substitute for evidence",
        "text_vi": "Sử dụng nhiệt độ thấp hơn để thay thế bằng chứng"
      },
      {
        "key": "D",
        "text": "Define the authoritative decision and approval boundary outside the model",
        "text_vi": "Xác định ranh giới quyết định và phê duyệt có thẩm quyền ngoài mô hình"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "explanation": "Both controls are necessary: define the authoritative decision and approval boundary outside the model; and keep a durable evidence trail linking inputs, proposed outcomes, and applied versions. Model instructions alone do not substitute for enforceable controls.",
    "question_vi": "Ở quy mô lớn, một nhà cung cấp phần mềm B2B kỳ vọng Claude sẽ hỗ trợ người dùng nền tảng hỗ trợ khách hàng làm việc với các phiếu hỗ trợ và sự cố mà không ảnh hưởng đến sự cô lập của nhiều bên thuê. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 31 trường hợp thử nghiệm đại diện. HAI biện pháp kiểm soát nào là quan trọng nhất để vận hành quy trình công việc này một cách an toàn và có trách nhiệm? (Chọn HAI.)",
    "explanation_vi": "Cả hai biện pháp kiểm soát đều cần thiết: xác định ranh giới phê duyệt và quyết định có thẩm quyền bên ngoài mô hình; và lưu giữ dấu vết bằng chứng lâu dài liên kết các đầu vào, kết quả được đề xuất và các phiên bản được áp dụng. Chỉ hướng dẫn mô hình không thể thay thế cho các biện pháp kiểm soát có thể thực thi được."
  },
  {
    "id": 61,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "question": "At scale, a B2B software vendor expects Claude to support customer support platform users working with support and incident tickets, without compromising multi-tenant isolation. The workload is assessed in rollout cohort 6 with 36 representative test cases. Which TWO controls are most important for secure and accountable operation of this workflow? (Choose TWO.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "Agree on a monitoring and escalation plan for post-launch failures",
        "text_vi": "Thống nhất về kế hoạch giám sát và báo cáo đối với các lỗi sau khi ra mắt"
      },
      {
        "key": "B",
        "text": "Define documented acceptance criteria and named decision owners",
        "text_vi": "Xác định tiêu chí chấp nhận được ghi lại và chủ sở hữu quyết định được đặt tên"
      },
      {
        "key": "C",
        "text": "An undocumented personal preference",
        "text_vi": "Sở thích cá nhân không có giấy tờ"
      },
      {
        "key": "D",
        "text": "A model leaderboard alone",
        "text_vi": "Chỉ có một bảng xếp hạng kiểu mẫu"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "explanation": "Both controls are necessary: define documented acceptance criteria and named decision owners; and agree on a monitoring and escalation plan for post-launch failures. Model instructions alone do not substitute for enforceable controls.",
    "question_vi": "Ở quy mô lớn, một nhà cung cấp phần mềm B2B kỳ vọng Claude sẽ hỗ trợ người dùng nền tảng hỗ trợ khách hàng làm việc với các phiếu hỗ trợ và sự cố mà không ảnh hưởng đến sự cô lập của nhiều bên thuê. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 36 trường hợp thử nghiệm đại diện. HAI biện pháp kiểm soát nào là quan trọng nhất để vận hành quy trình công việc này một cách an toàn và có trách nhiệm? (Chọn HAI.)",
    "explanation_vi": "Cả hai biện pháp kiểm soát đều cần thiết: xác định các tiêu chí chấp nhận được ghi lại bằng văn bản và nêu tên các chủ sở hữu quyết định; và thống nhất về kế hoạch giám sát và báo cáo đối với các lỗi sau khi phóng. Chỉ hướng dẫn mô hình không thể thay thế cho các biện pháp kiểm soát có thể thực thi được."
  },
  {
    "id": 62,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "question": "A pilot retrospective at an energy utility identifies concerns in asset operations platform processing maintenance incident reports, where high operational safety impact applies. The workload is assessed in rollout cohort 6 with 37 representative test cases. A RAG assistant cites sources that do not support its claims. What metric should be evaluated?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Only similarity between the user prompt and query embedding",
        "text_vi": "Chỉ có sự giống nhau giữa prompt của người dùng và việc nhúng truy vấn"
      },
      {
        "key": "B",
        "text": "Only whether the response is fluent",
        "text_vi": "Chỉ liệu câu trả lời có trôi chảy hay không"
      },
      {
        "key": "C",
        "text": "Only output length",
        "text_vi": "Chỉ có chiều dài đầu ra"
      },
      {
        "key": "D",
        "text": "Claim-level groundedness against retrieved evidence",
        "text_vi": "Căn cứ ở cấp độ yêu cầu bồi thường đối với bằng chứng được truy xuất"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Citations are meaningful only when the cited passages support the claims.",
    "question_vi": "Một cuộc hồi cứu thí điểm tại một công ty năng lượng xác định các mối lo ngại trong nền tảng vận hành tài sản xử lý các báo cáo sự cố bảo trì, trong đó áp dụng tác động an toàn vận hành cao. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 37 trường hợp thử nghiệm đại diện. Trợ lý của RAG trích dẫn các nguồn không hỗ trợ cho tuyên bố của mình. Số liệu nào cần được đánh giá?",
    "explanation_vi": "Các trích dẫn chỉ có ý nghĩa khi các đoạn trích dẫn hỗ trợ cho các tuyên bố."
  },
  {
    "id": 63,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "question": "A cross-functional team at an international retail chain plans to modernize ERP using store-level inventory updates, while maintaining subsecond checkout availability. The workload is assessed in rollout cohort 6 with 29 representative test cases. An AI capability has a valuable but costly human approval step. How should leadership decide whether to automate it?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Use model confidence as the only threshold",
        "text_vi": "Sử dụng độ tin cậy của mô hình làm ngưỡng duy nhất"
      },
      {
        "key": "B",
        "text": "Quantify risk, review burden, exception rate, and control effectiveness before changing authority",
        "text_vi": "Định lượng rủi ro, gánh nặng xem xét, tỷ lệ ngoại lệ và hiệu quả kiểm soát trước khi thay đổi thẩm quyền"
      },
      {
        "key": "C",
        "text": "Assume all reviewers add no value",
        "text_vi": "Giả sử tất cả người đánh giá đều không có giá trị gì"
      },
      {
        "key": "D",
        "text": "Remove approvals solely to improve average latency",
        "text_vi": "Chỉ xóa phê duyệt để cải thiện độ trễ trung bình"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Automation decisions require measurable risk-adjusted trade-offs.",
    "question_vi": "Một nhóm đa chức năng tại một chuỗi bán lẻ quốc tế có kế hoạch hiện đại hóa ERP bằng cách sử dụng các bản cập nhật hàng tồn kho ở cấp độ cửa hàng, trong khi vẫn duy trì khả năng thanh toán dưới giây. Khối lượng công việc được đánh giá trong nhóm triển khai 6 với 29 trường hợp thử nghiệm đại diện. Khả năng AI có bước phê duyệt có giá trị nhưng tốn kém của con người. Lãnh đạo nên quyết định có nên tự động hóa nó hay không?",
    "explanation_vi": "Các quyết định tự động hóa đòi hỏi sự đánh đổi điều chỉnh rủi ro có thể đo lường được."
  }
];
