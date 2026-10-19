window.QUIZ_DATA_CCARP_QUESTIONS = [
  {
    "id": 1,
    "topic": "Solution Design & Architecture (17%)",
    "question": "At a Japanese manufacturing group, an AI pilot processes quality-inspection records from the factory MES; mandatory operator sign-off is a non-negotiable requirement. The workload is assessed in rollout cohort 1 with 13 representative test cases. A product team is choosing between RAG and fine-tuning for rapidly changing policy text. Which approach best matches the freshness requirement?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Put all historical versions in the system prompt permanently",
        "text_vi": "Đặt vĩnh viễn tất cả các phiên bản lịch sử vào system prompt"
      },
      {
        "key": "B",
        "text": "Fine-tune a model every morning as the only source of truth",
        "text_vi": "tinh chỉnh (fine-tuning) mô hình mỗi sáng như nguồn thông tin chuẩn duy nhất (single source of truth)"
      },
      {
        "key": "C",
        "text": "Retrieval of current, access-controlled policy documents with grounded responses",
        "text_vi": "Truy xuất các tài liệu chính sách hiện tại, được kiểm soát quyền truy cập với các câu trả lời có đối chiếu căn cứ (grounded responses)"
      },
      {
        "key": "D",
        "text": "Increase temperature to account for new policies",
        "text_vi": "Tăng nhiệt độ để đáp ứng các chính sách mới"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Current knowledge is more effectively supplied via retrieval than embedded through frequent retraining.",
    "question_vi": "Tại một nhóm sản xuất Nhật Bản, một dự án thí điểm AI (AI pilot) xử lý hồ sơ kiểm tra chất lượng từ MES của nhà máy; việc ký duyệt (sign-off) bắt buộc của nhà điều hành là một yêu cầu không thể thương lượng. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 13 trường hợp thử nghiệm đại diện. Nhóm sản phẩm đang lựa chọn giữa RAG và tinh chỉnh (fine-tuning) để văn bản chính sách thay đổi nhanh chóng. Cách tiếp cận nào phù hợp nhất với yêu cầu về tính cập nhật mới nhất (freshness)?",
    "explanation_vi": "Kiến thức hiện tại được cung cấp thông qua việc truy hồi hiệu quả hơn là được đưa vào thông qua đào tạo lại thường xuyên."
  },
  {
    "id": 2,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "question": "A senior architect advising a public university considers a Claude workflow around student service inquiries and campus management platform with strict student data access. The workload is assessed in rollout cohort 1 with 13 representative test cases. A procurement leader wants a fixed completion date despite unknown document quality. What is the best response?",
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
    "question_vi": "Một kiến ​​trúc sư cấp cao tư vấn cho một trường đại học công lập đang xem xét quy trình làm việc của Claude xoay quanh các yêu cầu về dịch vụ sinh viên và nền tảng quản lý khuôn viên trường với quyền truy cập dữ liệu sinh viên nghiêm ngặt. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 13 trường hợp thử nghiệm đại diện. Người lãnh đạo thu mua muốn có ngày hoàn thành cố định mặc dù chất lượng tài liệu không rõ. Phản ứng tốt nhất là gì?",
    "explanation_vi": "Việc lập kế hoạch cho các mốc quan trọng minh bạch giúp cho sự không chắc chắn và sự phụ thuộc có thể thực hiện được."
  },
  {
    "id": 3,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "question": "A cross-functional team at an international retail chain plans to modernize ERP using store-level inventory updates, while maintaining subsecond checkout availability. The workload is assessed in rollout cohort 1 with 19 representative test cases. An executive asks for an AI system without a clear success definition. What is the architect's first step?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Promise full automation without a pilot",
        "text_vi": "Hứa hẹn tự động hóa hoàn toàn mà không cần thí điểm (pilot)"
      },
      {
        "key": "B",
        "text": "Choose the largest Claude model immediately",
        "text_vi": "Chọn ngay mẫu Claude lớn nhất"
      },
      {
        "key": "C",
        "text": "Run structured discovery to define users, decisions, baseline metrics, constraints, and ownership",
        "text_vi": "Chạy khám phá có cấu trúc để xác định người dùng, quyết định, số liệu cơ bản, ràng buộc và quyền sở hữu"
      },
      {
        "key": "D",
        "text": "Build the dashboard before interviewing operators",
        "text_vi": "Xây dựng bảng điều khiển trước khi phỏng vấn người vận hành"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Discovery should tie the solution to a measurable business problem and known constraints.",
    "question_vi": "Một nhóm đa chức năng tại một chuỗi bán lẻ quốc tế có kế hoạch hiện đại hóa ERP bằng cách sử dụng các bản cập nhật hàng tồn kho ở cấp độ cửa hàng, trong khi vẫn duy trì khả năng thanh toán dưới giây. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 19 trường hợp thử nghiệm đại diện. Một giám đốc điều hành yêu cầu một hệ thống AI mà không có định nghĩa thành công rõ ràng. Bước đầu tiên của kiến ​​trúc sư là gì?",
    "explanation_vi": "Việc khám phá phải gắn giải pháp với một vấn đề kinh doanh có thể đo lường được và những hạn chế đã biết."
  },
  {
    "id": 4,
    "topic": "Integration (19%)",
    "question": "A senior architect advising a public university considers a Claude workflow around student service inquiries and campus management platform with strict student data access. The workload is assessed in rollout cohort 1 with 16 representative test cases. Which TWO controls are most important for secure and accountable operation of this workflow? (Choose TWO.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "Assume suggested commands are safe because they are code",
        "text_vi": "Giả sử các lệnh được đề xuất là an toàn vì chúng là mã"
      },
      {
        "key": "B",
        "text": "Record correlated, redacted audit evidence for every external action",
        "text_vi": "Ghi lại bằng chứng kiểm toán tương quan, được biên tập lại cho mọi hành động bên ngoài"
      },
      {
        "key": "C",
        "text": "Run all commands as root for reliability",
        "text_vi": "Chạy tất cả các lệnh dưới quyền root để đảm bảo độ tin cậy"
      },
      {
        "key": "D",
        "text": "Enforce least-privilege authorization in the tool-execution service",
        "text_vi": "Thực thi ủy quyền có đặc quyền tối thiểu trong dịch vụ thực thi công cụ"
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "explanation": "Both controls are necessary: enforce least-privilege authorization in the tool-execution service; and record correlated, redacted audit evidence for every external action. Model instructions alone do not substitute for enforceable controls.",
    "question_vi": "Một kiến ​​trúc sư cấp cao tư vấn cho một trường đại học công lập đang xem xét quy trình làm việc của Claude xoay quanh các yêu cầu về dịch vụ sinh viên và nền tảng quản lý khuôn viên trường với quyền truy cập dữ liệu sinh viên nghiêm ngặt. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 16 trường hợp thử nghiệm đại diện. HAI biện pháp kiểm soát nào là quan trọng nhất để vận hành quy trình công việc này một cách an toàn và có trách nhiệm? (Chọn HAI.)",
    "explanation_vi": "Cả hai biện pháp kiểm soát đều cần thiết: thực thi ủy quyền có đặc quyền tối thiểu trong dịch vụ thực thi công cụ; và ghi lại bằng chứng kiểm toán tương quan, được biên tập lại cho mọi hành động bên ngoài. Chỉ hướng dẫn mô hình không thể thay thế cho các biện pháp kiểm soát có thể thực thi được."
  },
  {
    "id": 5,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "question": "For the next release, a multinational bank will connect Claude to core banking platform to work with corporate credit applications under auditable financial controls. The workload is assessed in rollout cohort 1 with 15 representative test cases. An application must quote exact legal clauses with page references. Which context representation is preferable?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Retrieve bounded source passages with stable document and page identifiers",
        "text_vi": "Truy xuất các đoạn nguồn bị giới hạn với số nhận dạng trang và tài liệu ổn định"
      },
      {
        "key": "B",
        "text": "Ask the model to invent line numbers for convenience",
        "text_vi": "Yêu cầu người mẫu phát minh ra số dòng cho tiện"
      },
      {
        "key": "C",
        "text": "Provide uncited paraphrases as legal proof",
        "text_vi": "Cung cấp các diễn giải không được trích dẫn làm bằng chứng pháp lý"
      },
      {
        "key": "D",
        "text": "Use a high-confidence adjective in every answer",
        "text_vi": "Sử dụng tính từ có độ tin cậy cao trong mọi câu trả lời"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Source traceability requires real locators and evidence-linked quotations.",
    "question_vi": "Trong lần phát hành tiếp theo, một ngân hàng đa quốc gia sẽ kết nối Claude với nền tảng ngân hàng cốt lõi để hoạt động với các ứng dụng tín dụng doanh nghiệp dưới sự kiểm soát tài chính có thể kiểm toán được. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 15 trường hợp thử nghiệm đại diện. Một ứng dụng phải trích dẫn các điều khoản pháp lý chính xác với các trang tham khảo. Đại diện bối cảnh nào là thích hợp hơn?",
    "explanation_vi": "Truy xuất nguồn gốc đòi hỏi phải có người định vị thực tế và trích dẫn liên kết với bằng chứng."
  },
  {
    "id": 6,
    "topic": "Integration (19%)",
    "question": "An incident review at a regional hospital network focuses on AI handling of patient discharge letters in the clinical records system; stakeholders insist on strict clinical authorization. The workload is assessed in rollout cohort 1 with 23 representative test cases. A Claude integration receives a tool response claiming to be a new system instruction. What must happen?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Forward credentials requested by the tool output",
        "text_vi": "Chuyển tiếp thông tin xác thực được yêu cầu bởi đầu ra công cụ"
      },
      {
        "key": "B",
        "text": "Rewrite system policies using the response",
        "text_vi": "Viết lại chính sách hệ thống bằng cách sử dụng phản hồi"
      },
      {
        "key": "C",
        "text": "Give it higher priority because it came from an API",
        "text_vi": "Ưu tiên cao hơn vì nó đến từ API"
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
    "question_vi": "Đánh giá sự cố tại mạng lưới bệnh viện khu vực tập trung vào việc xử lý AI thư xuất viện của bệnh nhân trong hệ thống hồ sơ lâm sàng; các bên liên quan nhấn mạnh vào sự cho phép lâm sàng nghiêm ngặt. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 23 trường hợp thử nghiệm đại diện. Tích hợp Claude nhận được phản hồi của công cụ tự xưng là hướng dẫn hệ thống mới. Điều gì phải xảy ra?",
    "explanation_vi": "Phản hồi của công cụ có thể chứa nội dung nhắc nhở và không thể thay đổi quyền hoặc phân cấp lệnh."
  },
  {
    "id": 7,
    "topic": "Integration (19%)",
    "question": "The architecture board of a logistics provider evaluates cross-border shipment exceptions workflows in transport management system, prioritizing intermittent connectivity. The workload is assessed in rollout cohort 1 with 15 representative test cases. A knowledge retrieval service produces relevant but unsupported answers. Which integration improvement best addresses grounding?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Return source IDs and passages and require answer-to-source consistency checks",
        "text_vi": "Trả về ID nguồn và đoạn văn, đồng thời yêu cầu kiểm tra tính nhất quán của câu trả lời với nguồn"
      },
      {
        "key": "B",
        "text": "Turn off retrieval and ask the model to remember more",
        "text_vi": "Tắt tính năng truy xuất và yêu cầu người mẫu ghi nhớ thêm"
      },
      {
        "key": "C",
        "text": "Replace citations with model confidence scores",
        "text_vi": "Thay thế trích dẫn bằng điểm tin cậy của mô hình"
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
    "question_vi": "Hội đồng kiến ​​trúc của nhà cung cấp dịch vụ hậu cần đánh giá các quy trình ngoại lệ đối với lô hàng xuyên biên giới trong hệ thống quản lý vận tải, ưu tiên kết nối không liên tục. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 15 trường hợp thử nghiệm đại diện. Dịch vụ truy xuất kiến ​​thức tạo ra các câu trả lời có liên quan nhưng không được hỗ trợ. Cải tiến tích hợp nào giải quyết tốt nhất vấn đề nối đất?",
    "explanation_vi": "Việc nối đất đòi hỏi bằng chứng và xác nhận có thể theo dõi được, không chỉ liên quan đến ngữ nghĩa."
  },
  {
    "id": 8,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "question": "The architecture board of a logistics provider evaluates cross-border shipment exceptions workflows in transport management system, prioritizing intermittent connectivity. The workload is assessed in rollout cohort 1 with 14 representative test cases. An incident is rare but severe and missing from evaluation data. Which method best improves coverage?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Use only random sampling from common requests",
        "text_vi": "Chỉ sử dụng mẫu ngẫu nhiên từ các yêu cầu phổ biến"
      },
      {
        "key": "B",
        "text": "Wait for enough production incidents without a plan",
        "text_vi": "Chờ đủ sự cố sản xuất mà không có kế hoạch"
      },
      {
        "key": "C",
        "text": "Delete incident records to avoid bias",
        "text_vi": "Xóa hồ sơ sự cố để tránh sai lệch"
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
    "question_vi": "Hội đồng kiến ​​trúc của nhà cung cấp dịch vụ hậu cần đánh giá các quy trình ngoại lệ đối với lô hàng xuyên biên giới trong hệ thống quản lý vận tải, ưu tiên kết nối không liên tục. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 14 trường hợp thử nghiệm đại diện. Một sự cố tuy hiếm gặp nhưng nghiêm trọng và không có trong dữ liệu đánh giá. Phương pháp nào cải thiện phạm vi bảo hiểm tốt nhất?",
    "explanation_vi": "Việc tạo thử nghiệm dựa trên rủi ro là cần thiết đối với những lỗi hiếm gặp, có tác động lớn."
  },
  {
    "id": 9,
    "topic": "Developer Productivity & Operational Enablement (7%)",
    "question": "During a production-readiness review at a government procurement office, the architects examine purchase approval records connected to the procurement workflow, with formal reviewer approval. The workload is assessed in rollout cohort 1 with 16 representative test cases. Which TWO controls are most important for secure and accountable operation of this workflow? (Choose TWO.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "Require reviewed code changes and repeatable automated tests",
        "text_vi": "Yêu cầu thay đổi mã được xem xét và kiểm tra tự động lặp lại"
      },
      {
        "key": "B",
        "text": "Constrain coding-agent credentials and use protected deployment gates",
        "text_vi": "Hạn chế thông tin xác thực tác nhân mã hóa và sử dụng các cổng triển khai được bảo vệ"
      },
      {
        "key": "C",
        "text": "Execute every suggested command immediately",
        "text_vi": "Thực hiện mọi lệnh được đề xuất ngay lập tức"
      },
      {
        "key": "D",
        "text": "Treat the agent as the incident commander",
        "text_vi": "Đối xử với người đại diện như người chỉ huy sự cố"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "explanation": "Both controls are necessary: require reviewed code changes and repeatable automated tests; and constrain coding-agent credentials and use protected deployment gates. Model instructions alone do not substitute for enforceable controls.",
    "question_vi": "Trong quá trình đánh giá mức độ sẵn sàng sản xuất tại văn phòng mua sắm của chính phủ, các kiến ​​trúc sư kiểm tra hồ sơ phê duyệt mua hàng được kết nối với quy trình mua sắm với sự chấp thuận của người đánh giá chính thức. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 16 trường hợp thử nghiệm đại diện. HAI biện pháp kiểm soát nào là quan trọng nhất để vận hành quy trình công việc này một cách an toàn và có trách nhiệm? (Chọn HAI.)",
    "explanation_vi": "Cả hai biện pháp kiểm soát đều cần thiết: yêu cầu xem xét các thay đổi mã và kiểm tra tự động lặp lại; và hạn chế thông tin xác thực tác nhân mã hóa cũng như sử dụng các cổng triển khai được bảo vệ. Chỉ hướng dẫn mô hình không thể thay thế cho các biện pháp kiểm soát có thể thực thi được."
  },
  {
    "id": 10,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "question": "An incident review at a regional hospital network focuses on AI handling of patient discharge letters in the clinical records system; stakeholders insist on strict clinical authorization. The workload is assessed in rollout cohort 1 with 14 representative test cases. A team adds a long example that conflicts with an explicit output schema. What should be fixed first?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Turn off schema validation",
        "text_vi": "Tắt xác thực lược đồ"
      },
      {
        "key": "B",
        "text": "Align examples and instructions to a single unambiguous contract",
        "text_vi": "Căn chỉnh các ví dụ và hướng dẫn cho một hợp đồng rõ ràng"
      },
      {
        "key": "C",
        "text": "Increase model temperature to reconcile instructions",
        "text_vi": "Tăng nhiệt độ mô hình để điều chỉnh hướng dẫn"
      },
      {
        "key": "D",
        "text": "Add more contradictory examples",
        "text_vi": "Thêm nhiều ví dụ trái ngược nhau"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Contradictory prompts induce unreliable outputs; a consistent contract is a prerequisite.",
    "question_vi": "Đánh giá sự cố tại mạng lưới bệnh viện khu vực tập trung vào việc xử lý AI thư xuất viện của bệnh nhân trong hệ thống hồ sơ lâm sàng; các bên liên quan nhấn mạnh vào sự cho phép lâm sàng nghiêm ngặt. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 14 trường hợp thử nghiệm đại diện. Một nhóm thêm một ví dụ dài xung đột với lược đồ đầu ra rõ ràng. Điều gì cần sửa trước tiên?",
    "explanation_vi": "Những prompt trái ngược nhau tạo ra kết quả đầu ra không đáng tin cậy; một hợp đồng nhất quán là điều kiện tiên quyết."
  },
  {
    "id": 11,
    "topic": "Solution Design & Architecture (17%)",
    "question": "The architecture board of a logistics provider evaluates cross-border shipment exceptions workflows in transport management system, prioritizing intermittent connectivity. The workload is assessed in rollout cohort 1 with 17 representative test cases. An assistant must offer decisions to humans only when it lacks evidence. What is a robust way to route uncertainty?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Use a lower temperature as a substitute for evidence",
        "text_vi": "Sử dụng nhiệt độ thấp hơn để thay thế bằng chứng"
      },
      {
        "key": "B",
        "text": "Suppress citations to make the answer concise",
        "text_vi": "Loại bỏ các trích dẫn để làm cho câu trả lời ngắn gọn"
      },
      {
        "key": "C",
        "text": "Define evidence sufficiency checks and send unresolved cases to a human queue",
        "text_vi": "Xác định việc kiểm tra tính đầy đủ bằng chứng và gửi các trường hợp chưa được giải quyết đến hàng đợi của con người"
      },
      {
        "key": "D",
        "text": "Treat fluent wording as proof that evidence exists",
        "text_vi": "Coi cách diễn đạt trôi chảy như bằng chứng cho thấy bằng chứng tồn tại"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Escalation should be based on validated evidence and risk, not fluency.",
    "question_vi": "Hội đồng kiến ​​trúc của nhà cung cấp dịch vụ hậu cần đánh giá các quy trình ngoại lệ đối với lô hàng xuyên biên giới trong hệ thống quản lý vận tải, ưu tiên kết nối không liên tục. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 17 trường hợp thử nghiệm đại diện. Trợ lý chỉ được phép đưa ra quyết định cho con người khi thiếu bằng chứng. Một cách mạnh mẽ để định tuyến sự không chắc chắn là gì?",
    "explanation_vi": "Việc báo cáo lên cấp trên phải dựa trên bằng chứng đã được xác thực và rủi ro, chứ không phải sự trôi chảy."
  },
  {
    "id": 12,
    "topic": "Governance, Safety & Risk Management (14%)",
    "question": "A senior architect advising a public university considers a Claude workflow around student service inquiries and campus management platform with strict student data access. The workload is assessed in rollout cohort 1 with 14 representative test cases. An autonomous agent is allowed to delete cloud resources. What reduces the blast radius?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Use least-privilege roles, isolated environments, explicit approvals, and recoverability controls",
        "text_vi": "Sử dụng các vai trò có ít đặc quyền nhất, môi trường biệt lập, phê duyệt rõ ràng và kiểm soát khả năng phục hồi"
      },
      {
        "key": "B",
        "text": "Rely on a system prompt saying 'do not delete important resources'",
        "text_vi": "Dựa vào prompt của hệ thống với nội dung 'không xóa các tài nguyên quan trọng'"
      },
      {
        "key": "C",
        "text": "Disable all operation logs",
        "text_vi": "Vô hiệu hóa tất cả nhật ký hoạt động"
      },
      {
        "key": "D",
        "text": "Give it organization-owner credentials",
        "text_vi": "Cung cấp thông tin xác thực của chủ sở hữu tổ chức"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Destructive capabilities need both permission limits and recovery strategies.",
    "question_vi": "Một kiến ​​trúc sư cấp cao tư vấn cho một trường đại học công lập đang xem xét quy trình làm việc của Claude xoay quanh các yêu cầu về dịch vụ sinh viên và nền tảng quản lý khuôn viên trường với quyền truy cập dữ liệu sinh viên nghiêm ngặt. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 14 trường hợp thử nghiệm đại diện. Một tác nhân tự trị được phép xóa tài nguyên đám mây. Điều gì làm giảm bán kính vụ nổ?",
    "explanation_vi": "Khả năng phá hủy cần cả giới hạn cấp phép và chiến lược phục hồi."
  },
  {
    "id": 13,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "question": "An incident review at a regional hospital network focuses on AI handling of patient discharge letters in the clinical records system; stakeholders insist on strict clinical authorization. The workload is assessed in rollout cohort 1 with 20 representative test cases. A sales team promises 100% factual correctness from the assistant. What should the architect communicate?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Repeat the promise to avoid conflict",
        "text_vi": "Lặp lại lời hứa để tránh xung đột"
      },
      {
        "key": "B",
        "text": "Guarantee that citations eliminate every error",
        "text_vi": "Đảm bảo rằng trích dẫn loại bỏ mọi lỗi"
      },
      {
        "key": "C",
        "text": "Explain measurable quality targets, residual risk, review controls, and an escalation path",
        "text_vi": "Giải thích các mục tiêu chất lượng có thể đo lường được, rủi ro tồn tại, các biện pháp kiểm soát xem xét và lộ trình leo thang"
      },
      {
        "key": "D",
        "text": "Exclude hard cases from all reports without disclosure",
        "text_vi": "Loại trừ các trường hợp khó khỏi tất cả các báo cáo mà không tiết lộ"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "LLM systems need explicit acceptance thresholds and honest risk communication.",
    "question_vi": "Đánh giá sự cố tại mạng lưới bệnh viện khu vực tập trung vào việc xử lý AI thư xuất viện của bệnh nhân trong hệ thống hồ sơ lâm sàng; các bên liên quan nhấn mạnh vào sự cho phép lâm sàng nghiêm ngặt. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 20 trường hợp thử nghiệm đại diện. Đội ngũ bán hàng hứa hẹn trợ lý sẽ cung cấp thông tin chính xác 100% về thực tế. Kiến trúc sư nên truyền đạt điều gì?",
    "explanation_vi": "Hệ thống LLM cần ngưỡng chấp nhận rõ ràng và truyền đạt rủi ro trung thực."
  },
  {
    "id": 14,
    "topic": "Integration (19%)",
    "question": "At a Japanese manufacturing group, an AI pilot processes quality-inspection records from the factory MES; mandatory operator sign-off is a non-negotiable requirement. The workload is assessed in rollout cohort 1 with 21 representative test cases. Which TWO controls are most important for secure and accountable operation of this workflow? (Choose TWO.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "Ask users to type their role into the prompt",
        "text_vi": "Yêu cầu người dùng nhập vai trò của họ vào prompt"
      },
      {
        "key": "B",
        "text": "Give the model a shared HR administrator token",
        "text_vi": "Cung cấp cho mô hình mã thông báo quản trị viên nhân sự được chia sẻ"
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
    "question_vi": "Tại một nhóm sản xuất Nhật Bản, một dự án thí điểm AI (AI pilot) xử lý hồ sơ kiểm tra chất lượng từ MES của nhà máy; việc ký duyệt (sign-off) bắt buộc của nhà điều hành là một yêu cầu không thể thương lượng. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 21 trường hợp thử nghiệm đại diện. HAI biện pháp kiểm soát nào là quan trọng nhất để vận hành quy trình công việc này một cách an toàn và có trách nhiệm? (Chọn HAI.)",
    "explanation_vi": "Cả hai biện pháp kiểm soát đều cần thiết: thực thi ủy quyền có đặc quyền tối thiểu trong dịch vụ thực thi công cụ; và ghi lại bằng chứng kiểm toán tương quan, được biên tập lại cho mọi hành động bên ngoài. Chỉ hướng dẫn mô hình không thể thay thế cho các biện pháp kiểm soát có thể thực thi được."
  },
  {
    "id": 15,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "question": "The architecture board of a logistics provider evaluates cross-border shipment exceptions workflows in transport management system, prioritizing intermittent connectivity. The workload is assessed in rollout cohort 1 with 16 representative test cases. For a repetitive support task, prompt caching shows almost no hits. What is the first thing to inspect?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Whether stable cached prefixes are actually identical and eligible across requests",
        "text_vi": "Liệu các tiền tố được lưu trong bộ nhớ đệm ổn định có thực sự giống nhau và đủ điều kiện trong các yêu cầu hay không"
      },
      {
        "key": "B",
        "text": "Whether the customer uses mobile browsers",
        "text_vi": "Liệu khách hàng có sử dụng trình duyệt di động hay không"
      },
      {
        "key": "C",
        "text": "Whether the model seems friendly",
        "text_vi": "Liệu người mẫu có vẻ thân thiện hay không"
      },
      {
        "key": "D",
        "text": "Whether tool results are always different even when not part of the prefix",
        "text_vi": "Liệu kết quả của công cụ có luôn khác nhau ngay cả khi không phải là một phần của tiền tố"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Cache effectiveness depends on eligible repeated content and request construction.",
    "question_vi": "Hội đồng kiến ​​trúc của nhà cung cấp dịch vụ hậu cần đánh giá các quy trình ngoại lệ đối với lô hàng xuyên biên giới trong hệ thống quản lý vận tải, ưu tiên kết nối không liên tục. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 16 trường hợp thử nghiệm đại diện. Đối với tác vụ hỗ trợ lặp đi lặp lại, bộ nhớ đệm nhanh chóng hầu như không hiển thị lần truy cập nào. Điều đầu tiên cần kiểm tra là gì?",
    "explanation_vi": "Hiệu quả của bộ đệm phụ thuộc vào nội dung lặp lại đủ điều kiện và yêu cầu xây dựng."
  },
  {
    "id": 16,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "question": "A regulated delivery team at an insurance carrier is integrating policy and claim files into claims processing platform; its operational mandate includes regulated evidence retention. The workload is assessed in rollout cohort 1 with 16 representative test cases. Which TWO controls are most important for secure and accountable operation of this workflow? (Choose TWO.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "Mean latency of successful model requests only",
        "text_vi": "Độ trễ trung bình chỉ của các yêu cầu mô hình thành công"
      },
      {
        "key": "B",
        "text": "Track operational guardrails such as high-severity failures and tail latency",
        "text_vi": "Theo dõi các biện pháp bảo vệ vận hành như lỗi ở mức độ nghiêm trọng cao và độ trễ ở đuôi"
      },
      {
        "key": "C",
        "text": "Evaluate task correctness using representative held-out scenarios",
        "text_vi": "Đánh giá tính chính xác của nhiệm vụ bằng cách sử dụng các kịch bản được tổ chức đại diện"
      },
      {
        "key": "D",
        "text": "Fastest observed completion time",
        "text_vi": "Thời gian hoàn thành được quan sát nhanh nhất"
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "explanation": "Both controls are necessary: evaluate task correctness using representative held-out scenarios; and track operational guardrails such as high-severity failures and tail latency. Model instructions alone do not substitute for enforceable controls.",
    "question_vi": "Nhóm phân phối được quản lý tại một hãng bảo hiểm đang tích hợp các hồ sơ chính sách và yêu cầu bồi thường vào nền tảng xử lý yêu cầu bồi thường; nhiệm vụ hoạt động của nó bao gồm việc lưu giữ bằng chứng theo quy định. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 16 trường hợp thử nghiệm đại diện. HAI biện pháp kiểm soát nào là quan trọng nhất để vận hành quy trình công việc này một cách an toàn và có trách nhiệm? (Chọn HAI.)",
    "explanation_vi": "Cả hai biện pháp kiểm soát đều cần thiết: đánh giá tính chính xác của nhiệm vụ bằng cách sử dụng các kịch bản được đưa ra mang tính đại diện; và theo dõi các rào cản vận hành như lỗi ở mức độ nghiêm trọng cao và độ trễ ở đuôi. Chỉ hướng dẫn mô hình không thể thay thế cho các biện pháp kiểm soát có thể thực thi được."
  },
  {
    "id": 17,
    "topic": "Integration (19%)",
    "question": "A regulated delivery team at an insurance carrier is integrating policy and claim files into claims processing platform; its operational mandate includes regulated evidence retention. The workload is assessed in rollout cohort 1 with 17 representative test cases. An external service is intermittently unavailable and agent jobs must survive restarts. Which pattern is best?",
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
        "text": "Rely on the UI tab staying open",
        "text_vi": "Dựa vào tab UI luôn mở"
      },
      {
        "key": "D",
        "text": "Store job state only in an in-memory conversation",
        "text_vi": "Chỉ lưu trữ trạng thái công việc trong cuộc trò chuyện trong bộ nhớ"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Durable execution avoids work loss and supports bounded recovery.",
    "question_vi": "Nhóm phân phối được quản lý tại một hãng bảo hiểm đang tích hợp các hồ sơ chính sách và yêu cầu bồi thường vào nền tảng xử lý yêu cầu bồi thường; nhiệm vụ hoạt động của nó bao gồm việc lưu giữ bằng chứng theo quy định. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 17 trường hợp thử nghiệm đại diện. Dịch vụ bên ngoài không liên tục khả dụng và công việc của nhân viên phải tiếp tục được khởi động lại. Mẫu nào tốt nhất?",
    "explanation_vi": "Việc thực thi bền vững tránh mất việc và hỗ trợ khả năng phục hồi có giới hạn."
  },
  {
    "id": 18,
    "topic": "Integration (19%)",
    "question": "A pilot retrospective at an energy utility identifies concerns in asset operations platform processing maintenance incident reports, where high operational safety impact applies. The workload is assessed in rollout cohort 1 with 18 representative test cases. A customer asks the assistant to update a record and show proof. What should the integration return?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Only a friendly acknowledgment generated by the model",
        "text_vi": "Chỉ có sự thừa nhận thân thiện được tạo ra bởi mô hình"
      },
      {
        "key": "B",
        "text": "A durable record ID, committed version, and verified operation status",
        "text_vi": "ID bản ghi lâu bền, phiên bản đã cam kết và trạng thái hoạt động đã được xác minh"
      },
      {
        "key": "C",
        "text": "The model's internal certainty",
        "text_vi": "Sự chắc chắn bên trong của mô hình"
      },
      {
        "key": "D",
        "text": "An unverified guess of the new record value",
        "text_vi": "Một dự đoán chưa được xác minh về giá trị bản ghi mới"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Use authoritative tool results as proof of state change.",
    "question_vi": "Một cuộc hồi cứu thí điểm tại một công ty năng lượng xác định các mối lo ngại trong nền tảng vận hành tài sản xử lý các báo cáo sự cố bảo trì, trong đó áp dụng tác động an toàn vận hành cao. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 18 trường hợp thử nghiệm đại diện. Một khách hàng yêu cầu trợ lý cập nhật hồ sơ và đưa ra bằng chứng. Sự tích hợp sẽ trở lại là gì?",
    "explanation_vi": "Sử dụng kết quả của công cụ có thẩm quyền làm bằng chứng về sự thay đổi trạng thái."
  },
  {
    "id": 19,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "question": "At a Japanese manufacturing group, an AI pilot processes quality-inspection records from the factory MES; mandatory operator sign-off is a non-negotiable requirement. The workload is assessed in rollout cohort 1 with 18 representative test cases. A vendor integration has unknown future pricing. How should architecture communicate that risk?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Suppress vendor cost from business cases",
        "text_vi": "Giảm chi phí của nhà cung cấp từ các trường hợp kinh doanh"
      },
      {
        "key": "B",
        "text": "Promise zero ongoing operating expense",
        "text_vi": "Hứa hẹn không có chi phí hoạt động liên tục"
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
    "question_vi": "Tại một nhóm sản xuất Nhật Bản, một dự án thí điểm AI (AI pilot) xử lý hồ sơ kiểm tra chất lượng từ MES của nhà máy; việc ký duyệt (sign-off) bắt buộc của nhà điều hành là một yêu cầu không thể thương lượng. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 18 trường hợp thử nghiệm đại diện. Việc tích hợp nhà cung cấp không xác định được mức giá trong tương lai. Kiến trúc nên truyền đạt rủi ro đó như thế nào?",
    "explanation_vi": "Sự không chắc chắn về chi phí sẽ được thể hiện rõ trong việc lập kế hoạch vòng đời."
  },
  {
    "id": 20,
    "topic": "Integration (19%)",
    "question": "A cross-functional team at an international retail chain plans to modernize ERP using store-level inventory updates, while maintaining subsecond checkout availability. The workload is assessed in rollout cohort 1 with 22 representative test cases. A tool call times out after creating a ticket, and the agent retries. What prevents duplicate tickets?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Disable all retries permanently",
        "text_vi": "Vô hiệu hóa vĩnh viễn tất cả các lần thử lại"
      },
      {
        "key": "B",
        "text": "Tell Claude to avoid duplicates in its system prompt",
        "text_vi": "Nói với Claude để tránh trùng lặp trong system prompt của nó"
      },
      {
        "key": "C",
        "text": "Create a second ticket and later ask the agent to compare",
        "text_vi": "Tạo một vé thứ hai và sau đó yêu cầu đại lý so sánh"
      },
      {
        "key": "D",
        "text": "Use an idempotency key and persist operation outcomes for safe retries",
        "text_vi": "Sử dụng khóa tạm thời và duy trì kết quả hoạt động để thử lại an toàn"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Idempotency and durable operation tracking handle uncertain outcomes safely.",
    "question_vi": "Một nhóm đa chức năng tại một chuỗi bán lẻ quốc tế có kế hoạch hiện đại hóa ERP bằng cách sử dụng các bản cập nhật hàng tồn kho ở cấp độ cửa hàng, trong khi vẫn duy trì khả năng thanh toán dưới giây. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 22 trường hợp thử nghiệm đại diện. Cuộc gọi công cụ hết thời gian chờ sau khi tạo phiếu và tổng đài viên sẽ thử lại. Điều gì ngăn ngừa vé trùng lặp?",
    "explanation_vi": "Tính bình thường và theo dõi hoạt động lâu dài xử lý các kết quả không chắc chắn một cách an toàn."
  },
  {
    "id": 21,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "question": "A pilot retrospective at an energy utility identifies concerns in asset operations platform processing maintenance incident reports, where high operational safety impact applies. The workload is assessed in rollout cohort 1 with 17 representative test cases. An extraction system outputs syntactically valid JSON but incorrect invoice amounts. What should the evaluator measure?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Only the format of keys",
        "text_vi": "Chỉ định dạng của khóa"
      },
      {
        "key": "B",
        "text": "Only generated response length",
        "text_vi": "Chỉ có độ dài phản hồi được tạo"
      },
      {
        "key": "C",
        "text": "Field-level semantic accuracy and critical numeric validation in addition to schema validity",
        "text_vi": "Độ chính xác về ngữ nghĩa ở cấp độ trường và xác thực số quan trọng bên cạnh tính hợp lệ của lược đồ"
      },
      {
        "key": "D",
        "text": "Only JSON parse success",
        "text_vi": "Chỉ phân tích cú pháp JSON thành công"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Syntactic validity does not establish factual correctness.",
    "question_vi": "Một cuộc hồi cứu thí điểm tại một công ty năng lượng xác định các mối lo ngại trong nền tảng vận hành tài sản xử lý các báo cáo sự cố bảo trì, trong đó áp dụng tác động an toàn vận hành cao. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 17 trường hợp thử nghiệm đại diện. Hệ thống trích xuất xuất ra JSON hợp lệ về mặt cú pháp nhưng số lượng hóa đơn không chính xác. Người đánh giá nên đo lường những gì?",
    "explanation_vi": "Hiệu lực cú pháp không thiết lập tính đúng đắn về mặt thực tế."
  },
  {
    "id": 22,
    "topic": "Governance, Safety & Risk Management (14%)",
    "question": "An incident review at a regional hospital network focuses on AI handling of patient discharge letters in the clinical records system; stakeholders insist on strict clinical authorization. The workload is assessed in rollout cohort 1 with 21 representative test cases. Which TWO controls are most important for secure and accountable operation of this workflow? (Choose TWO.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "A prompt stating 'we comply with regulations'",
        "text_vi": "prompt nêu rõ 'chúng tôi tuân thủ các quy định'"
      },
      {
        "key": "B",
        "text": "Only a screenshot of the assistant",
        "text_vi": "Chỉ có một ảnh chụp màn hình của trợ lý"
      },
      {
        "key": "C",
        "text": "Enforce access-control and data-handling policies independently of model prompts",
        "text_vi": "Thực thi các chính sách kiểm soát truy cập và xử lý dữ liệu độc lập với prompt mô hình"
      },
      {
        "key": "D",
        "text": "Retain auditable evidence of reviews, exceptions, and privileged actions",
        "text_vi": "Giữ lại bằng chứng có thể kiểm tra được về các đánh giá, ngoại lệ và hành động đặc quyền"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "explanation": "Both controls are necessary: enforce access-control and data-handling policies independently of model prompts; and retain auditable evidence of reviews, exceptions, and privileged actions. Model instructions alone do not substitute for enforceable controls.",
    "question_vi": "Đánh giá sự cố tại mạng lưới bệnh viện khu vực tập trung vào việc xử lý AI thư xuất viện của bệnh nhân trong hệ thống hồ sơ lâm sàng; các bên liên quan nhấn mạnh vào sự cho phép lâm sàng nghiêm ngặt. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 21 trường hợp thử nghiệm đại diện. HAI biện pháp kiểm soát nào là quan trọng nhất để vận hành quy trình công việc này một cách an toàn và có trách nhiệm? (Chọn HAI.)",
    "explanation_vi": "Cả hai biện pháp kiểm soát đều cần thiết: thực thi các chính sách kiểm soát truy cập và xử lý dữ liệu một cách độc lập với prompt của mô hình; và lưu giữ bằng chứng có thể kiểm tra được về các đánh giá, ngoại lệ và hành động đặc quyền. Chỉ hướng dẫn mô hình không thể thay thế cho các biện pháp kiểm soát có thể thực thi được."
  },
  {
    "id": 23,
    "topic": "Governance, Safety & Risk Management (14%)",
    "question": "A regulated delivery team at an insurance carrier is integrating policy and claim files into claims processing platform; its operational mandate includes regulated evidence retention. The workload is assessed in rollout cohort 1 with 15 representative test cases. A multinational deployment has different data residency obligations. What should architecture decide?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Use one global endpoint without checking allowed data flows",
        "text_vi": "Sử dụng một điểm cuối toàn cầu mà không kiểm tra các luồng dữ liệu được phép"
      },
      {
        "key": "B",
        "text": "Assume the model provider stores data in the user's region automatically",
        "text_vi": "Giả sử nhà cung cấp mô hình tự động lưu trữ dữ liệu trong khu vực của người dùng"
      },
      {
        "key": "C",
        "text": "Ignore logging and backup locations",
        "text_vi": "Bỏ qua các vị trí ghi nhật ký và sao lưu"
      },
      {
        "key": "D",
        "text": "Map data categories and processing locations to contractual and jurisdictional requirements before routing",
        "text_vi": "Ánh xạ các danh mục dữ liệu và vị trí xử lý theo các yêu cầu hợp đồng và quyền tài phán trước khi định tuyến"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Residency analysis must include storage, processing, logs, and third parties.",
    "question_vi": "Nhóm phân phối được quản lý tại một hãng bảo hiểm đang tích hợp các hồ sơ chính sách và yêu cầu bồi thường vào nền tảng xử lý yêu cầu bồi thường; nhiệm vụ hoạt động của nó bao gồm việc lưu giữ bằng chứng theo quy định. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 15 trường hợp thử nghiệm đại diện. Việc triển khai đa quốc gia có các nghĩa vụ về nơi lưu trữ dữ liệu khác nhau. Kiến trúc nên quyết định điều gì?",
    "explanation_vi": "Phân tích nơi cư trú phải bao gồm lưu trữ, xử lý, nhật ký và bên thứ ba."
  },
  {
    "id": 24,
    "topic": "Solution Design & Architecture (17%)",
    "question": "At scale, a B2B software vendor expects Claude to support customer support platform users working with support and incident tickets, without compromising multi-tenant isolation. The workload is assessed in rollout cohort 1 with 21 representative test cases. Which TWO controls are most important for secure and accountable operation of this workflow? (Choose TWO.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "Define the authoritative decision and approval boundary outside the model",
        "text_vi": "Xác định ranh giới quyết định và phê duyệt có thẩm quyền ngoài mô hình"
      },
      {
        "key": "B",
        "text": "Keep a durable evidence trail linking inputs, proposed outcomes, and applied versions",
        "text_vi": "Lưu giữ dấu vết bằng chứng lâu dài liên kết đầu vào, kết quả đề xuất và các phiên bản áp dụng"
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
      "A",
      "B"
    ],
    "explanation": "Both controls are necessary: define the authoritative decision and approval boundary outside the model; and keep a durable evidence trail linking inputs, proposed outcomes, and applied versions. Model instructions alone do not substitute for enforceable controls.",
    "question_vi": "Ở quy mô lớn, một nhà cung cấp phần mềm B2B kỳ vọng Claude sẽ hỗ trợ người dùng nền tảng hỗ trợ khách hàng làm việc với các phiếu hỗ trợ và sự cố mà không ảnh hưởng đến sự cô lập của nhiều bên thuê. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 21 trường hợp thử nghiệm đại diện. HAI biện pháp kiểm soát nào là quan trọng nhất để vận hành quy trình công việc này một cách an toàn và có trách nhiệm? (Chọn HAI.)",
    "explanation_vi": "Cả hai biện pháp kiểm soát đều cần thiết: xác định ranh giới phê duyệt và quyết định có thẩm quyền bên ngoài mô hình; và lưu giữ dấu vết bằng chứng lâu dài liên kết các đầu vào, kết quả được đề xuất và các phiên bản được áp dụng. Chỉ hướng dẫn mô hình không thể thay thế cho các biện pháp kiểm soát có thể thực thi được."
  },
  {
    "id": 25,
    "topic": "Integration (19%)",
    "question": "For the next release, a multinational bank will connect Claude to core banking platform to work with corporate credit applications under auditable financial controls. The workload is assessed in rollout cohort 1 with 24 representative test cases. A payment action has high financial impact. Which tool schema and runtime control are most important?",
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
        "text": "A prompt asking the model to confirm it is certain",
        "text_vi": "prompt yêu cầu mô hình xác nhận rằng nó chắc chắn"
      },
      {
        "key": "D",
        "text": "Giving the tool access to all accounts for convenience",
        "text_vi": "Cấp cho công cụ quyền truy cập vào tất cả các tài khoản để thuận tiện"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Strong contracts and external authorization are required for state-changing tools.",
    "question_vi": "Trong lần phát hành tiếp theo, một ngân hàng đa quốc gia sẽ kết nối Claude với nền tảng ngân hàng cốt lõi để hoạt động với các ứng dụng tín dụng doanh nghiệp dưới sự kiểm soát tài chính có thể kiểm toán được. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 24 trường hợp thử nghiệm đại diện. Một hành động thanh toán có tác động tài chính cao. Lược đồ công cụ và kiểm soát thời gian chạy nào là quan trọng nhất?",
    "explanation_vi": "Cần có hợp đồng mạnh mẽ và sự cho phép bên ngoài để sử dụng các công cụ thay đổi trạng thái."
  },
  {
    "id": 26,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "question": "A regulated delivery team at an insurance carrier is integrating policy and claim files into claims processing platform; its operational mandate includes regulated evidence retention. The workload is assessed in rollout cohort 1 with 18 representative test cases. A Claude-powered product includes a long tool catalog but most tasks use only two tools. What is a defensible token optimization?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Expose task-relevant tool descriptions while keeping authorization checks server-side",
        "text_vi": "Hiển thị các mô tả công cụ liên quan đến nhiệm vụ trong khi vẫn kiểm tra ủy quyền phía máy chủ"
      },
      {
        "key": "B",
        "text": "Remove all tool descriptions but retain tool calling",
        "text_vi": "Xóa tất cả các mô tả công cụ nhưng vẫn giữ lại cách gọi công cụ"
      },
      {
        "key": "C",
        "text": "Let the model invent tool signatures",
        "text_vi": "Hãy để mô hình phát minh ra chữ ký công cụ"
      },
      {
        "key": "D",
        "text": "Grant every tool to every user to avoid routing cost",
        "text_vi": "Cấp mọi công cụ cho mọi người dùng để tránh chi phí định tuyến"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Reducing irrelevant context can improve efficiency without weakening permissions.",
    "question_vi": "Nhóm phân phối được quản lý tại một hãng bảo hiểm đang tích hợp các hồ sơ chính sách và yêu cầu bồi thường vào nền tảng xử lý yêu cầu bồi thường; nhiệm vụ hoạt động của nó bao gồm việc lưu giữ bằng chứng theo quy định. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 18 trường hợp thử nghiệm đại diện. Sản phẩm do Claude cung cấp bao gồm một danh mục công cụ dài nhưng hầu hết các tác vụ chỉ sử dụng hai công cụ. Tối ưu hóa mã thông báo có thể bảo vệ là gì?",
    "explanation_vi": "Giảm bối cảnh không liên quan có thể cải thiện hiệu quả mà không làm suy yếu quyền."
  },
  {
    "id": 27,
    "topic": "Solution Design & Architecture (17%)",
    "question": "A pilot retrospective at an energy utility identifies concerns in asset operations platform processing maintenance incident reports, where high operational safety impact applies. The workload is assessed in rollout cohort 1 with 20 representative test cases. A support assistant must answer a fixed sequence of eligibility checks with auditable branches. Which architecture is most appropriate?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "An autonomous agent authorized to invent new branches",
        "text_vi": "Một đại lý tự trị được ủy quyền để phát minh ra các chi nhánh mới"
      },
      {
        "key": "B",
        "text": "A multi-agent debate for every eligibility check",
        "text_vi": "Một cuộc tranh luận giữa nhiều tác nhân cho mỗi lần kiểm tra tính đủ điều kiện"
      },
      {
        "key": "C",
        "text": "An unconstrained chatbot with no business rules",
        "text_vi": "Một chatbot không bị ràng buộc không có quy tắc kinh doanh"
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
    "question_vi": "Một cuộc hồi cứu thí điểm tại một công ty năng lượng xác định các mối lo ngại trong nền tảng vận hành tài sản xử lý các báo cáo sự cố bảo trì, trong đó áp dụng tác động an toàn vận hành cao. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 20 trường hợp thử nghiệm đại diện. Trợ lý hỗ trợ phải trả lời một chuỗi kiểm tra tính đủ điều kiện cố định với các chi nhánh có thể kiểm tra được. Kiến trúc nào phù hợp nhất?",
    "explanation_vi": "Các quyết định kinh doanh cố định thuộc về mã xác định; Claude có thể giải thích ngôn ngữ của người dùng mà không cần có quyền quyết định."
  },
  {
    "id": 28,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "question": "At a Japanese manufacturing group, an AI pilot processes quality-inspection records from the factory MES; mandatory operator sign-off is a non-negotiable requirement. The workload is assessed in rollout cohort 1 with 20 representative test cases. A pilot reports 95% accuracy on easy examples, but production users complain about complex cases. What should evaluation change?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Use only the easy examples because they are reproducible",
        "text_vi": "Chỉ sử dụng những ví dụ dễ dàng vì chúng có thể tái sử dụng được"
      },
      {
        "key": "B",
        "text": "Build a representative stratified test set including edge cases and critical failure modes",
        "text_vi": "Xây dựng bộ thử nghiệm phân tầng đại diện bao gồm các trường hợp đặc biệt và các dạng lỗi nghiêm trọng"
      },
      {
        "key": "C",
        "text": "Track only tokens per second",
        "text_vi": "Chỉ theo dõi mã thông báo mỗi giây"
      },
      {
        "key": "D",
        "text": "Replace evaluation with one executive demo",
        "text_vi": "Thay thế đánh giá bằng một bản demo điều hành"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Representative, risk-weighted evaluation prevents misleading averages.",
    "question_vi": "Tại một nhóm sản xuất Nhật Bản, một dự án thí điểm AI (AI pilot) xử lý hồ sơ kiểm tra chất lượng từ MES của nhà máy; việc ký duyệt (sign-off) bắt buộc của nhà điều hành là một yêu cầu không thể thương lượng. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 20 trường hợp thử nghiệm đại diện. Một thí điểm (pilot) báo cáo độ chính xác 95% đối với các ví dụ dễ dàng, nhưng người dùng sản xuất lại phàn nàn về các trường hợp phức tạp. Đánh giá nên thay đổi điều gì?",
    "explanation_vi": "Đánh giá mang tính đại diện, theo trọng số rủi ro sẽ ngăn ngừa việc lấy giá trị trung bình sai lệch."
  },
  {
    "id": 29,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "question": "A cross-functional team at an international retail chain plans to modernize ERP using store-level inventory updates, while maintaining subsecond checkout availability. The workload is assessed in rollout cohort 1 with 21 representative test cases. Which TWO controls are most important for secure and accountable operation of this workflow? (Choose TWO.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "Only whether the response is fluent",
        "text_vi": "Chỉ liệu câu trả lời có trôi chảy hay không"
      },
      {
        "key": "B",
        "text": "Evaluate task correctness using representative held-out scenarios",
        "text_vi": "Đánh giá tính chính xác của nhiệm vụ bằng cách sử dụng các kịch bản được tổ chức đại diện"
      },
      {
        "key": "C",
        "text": "Track operational guardrails such as high-severity failures and tail latency",
        "text_vi": "Theo dõi các biện pháp bảo vệ vận hành như lỗi ở mức độ nghiêm trọng cao và độ trễ ở đuôi"
      },
      {
        "key": "D",
        "text": "Only output length",
        "text_vi": "Chỉ có chiều dài đầu ra"
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "explanation": "Both controls are necessary: evaluate task correctness using representative held-out scenarios; and track operational guardrails such as high-severity failures and tail latency. Model instructions alone do not substitute for enforceable controls.",
    "question_vi": "Một nhóm đa chức năng tại một chuỗi bán lẻ quốc tế có kế hoạch hiện đại hóa ERP bằng cách sử dụng các bản cập nhật hàng tồn kho ở cấp độ cửa hàng, trong khi vẫn duy trì khả năng thanh toán dưới giây. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 21 trường hợp thử nghiệm đại diện. HAI biện pháp kiểm soát nào là quan trọng nhất để vận hành quy trình công việc này một cách an toàn và có trách nhiệm? (Chọn HAI.)",
    "explanation_vi": "Cả hai biện pháp kiểm soát đều cần thiết: đánh giá tính chính xác của nhiệm vụ bằng cách sử dụng các kịch bản được đưa ra mang tính đại diện; và theo dõi các rào cản vận hành như lỗi ở mức độ nghiêm trọng cao và độ trễ ở đuôi. Chỉ hướng dẫn mô hình không thể thay thế cho các biện pháp kiểm soát có thể thực thi được."
  },
  {
    "id": 30,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "question": "An incident review at a regional hospital network focuses on AI handling of patient discharge letters in the clinical records system; stakeholders insist on strict clinical authorization. The workload is assessed in rollout cohort 1 with 22 representative test cases. A team compares two prompts and wants to identify which performs better. What experimental design is strongest?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Use a fixed evaluation set, defined scoring rubric, and paired comparison before rollout",
        "text_vi": "Sử dụng bộ đánh giá cố định, phiếu tự đánh giá được xác định và so sánh theo cặp trước khi triển khai"
      },
      {
        "key": "B",
        "text": "Choose based on a single successful example",
        "text_vi": "Chọn dựa trên một ví dụ thành công duy nhất"
      },
      {
        "key": "C",
        "text": "Change prompts and models at the same time with no control",
        "text_vi": "Thay đổi prompt và mô hình cùng lúc mà không cần kiểm soát"
      },
      {
        "key": "D",
        "text": "Ask the developers which prompt they like",
        "text_vi": "Hỏi các nhà phát triển xem họ thích prompt nào"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Controlled paired evaluations isolate prompt effects from dataset variation.",
    "question_vi": "Đánh giá sự cố tại mạng lưới bệnh viện khu vực tập trung vào việc xử lý AI thư xuất viện của bệnh nhân trong hệ thống hồ sơ lâm sàng; các bên liên quan nhấn mạnh vào sự cho phép lâm sàng nghiêm ngặt. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 22 trường hợp thử nghiệm đại diện. Một nhóm so sánh hai prompt và muốn xác định prompt nào hoạt động tốt hơn. Thiết kế thử nghiệm nào là mạnh nhất?",
    "explanation_vi": "Các đánh giá được ghép nối có kiểm soát sẽ tách biệt các hiệu ứng kịp thời khỏi biến thể của tập dữ liệu."
  },
  {
    "id": 31,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "question": "During a production-readiness review at a government procurement office, the architects examine purchase approval records connected to the procurement workflow, with formal reviewer approval. The workload is assessed in rollout cohort 1 with 17 representative test cases. A board needs to approve an architecture with significant residual privacy risk. What must be made explicit?",
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
        "text": "A statement that the model is ethical",
        "text_vi": "Tuyên bố rằng mô hình này có tính đạo đức"
      },
      {
        "key": "D",
        "text": "Only the technology diagram",
        "text_vi": "Chỉ có sơ đồ công nghệ"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Decision makers need an accurate account of trade-offs and accepted risk.",
    "question_vi": "Trong quá trình đánh giá mức độ sẵn sàng sản xuất tại văn phòng mua sắm của chính phủ, các kiến ​​trúc sư kiểm tra hồ sơ phê duyệt mua hàng được kết nối với quy trình mua sắm với sự chấp thuận của người đánh giá chính thức. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 17 trường hợp thử nghiệm đại diện. Hội đồng quản trị cần phê duyệt một kiến ​​trúc có rủi ro đáng kể về quyền riêng tư còn sót lại. Cần phải làm rõ điều gì?",
    "explanation_vi": "Người ra quyết định cần có sự tính toán chính xác về sự đánh đổi và rủi ro được chấp nhận."
  },
  {
    "id": 32,
    "topic": "Governance, Safety & Risk Management (14%)",
    "question": "At scale, a B2B software vendor expects Claude to support customer support platform users working with support and incident tickets, without compromising multi-tenant isolation. The workload is assessed in rollout cohort 1 with 17 representative test cases. A company wants to let the assistant publish policy updates. What control best prevents silent drift?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Assume no drift if the generated text is syntactically valid",
        "text_vi": "Giả sử không có sự trôi dạt nếu văn bản được tạo có giá trị về mặt cú pháp"
      },
      {
        "key": "B",
        "text": "Require versioned policy review and approval, with post-apply verification and rollback plan",
        "text_vi": "Yêu cầu xem xét và phê duyệt chính sách theo phiên bản, cùng với kế hoạch khôi phục và xác minh sau áp dụng"
      },
      {
        "key": "C",
        "text": "Replace approval with a model self-assessment",
        "text_vi": "Thay thế phê duyệt bằng tự đánh giá mô hình"
      },
      {
        "key": "D",
        "text": "Let every agent publish independently",
        "text_vi": "Hãy để mọi đại lý xuất bản độc lập"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Sensitive policy changes need review, verification, and recovery.",
    "question_vi": "Ở quy mô lớn, một nhà cung cấp phần mềm B2B kỳ vọng Claude sẽ hỗ trợ người dùng nền tảng hỗ trợ khách hàng làm việc với các phiếu hỗ trợ và sự cố mà không ảnh hưởng đến sự cô lập của nhiều bên thuê. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 17 trường hợp thử nghiệm đại diện. Một công ty muốn cho phép trợ lý xuất bản các cập nhật chính sách. Kiểm soát nào tốt nhất ngăn chặn sự trôi dạt im lặng?",
    "explanation_vi": "Những thay đổi chính sách nhạy cảm cần được xem xét, xác minh và phục hồi."
  },
  {
    "id": 33,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "question": "A senior architect advising a public university considers a Claude workflow around student service inquiries and campus management platform with strict student data access. The workload is assessed in rollout cohort 1 with 17 representative test cases. An AI workflow must handle multilingual requests with stable internal category labels. What should the design enforce?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Trust natural-language synonyms as valid database enum values",
        "text_vi": "Tin tưởng các từ đồng nghĩa trong ngôn ngữ tự nhiên làm giá trị enum cơ sở dữ liệu hợp lệ"
      },
      {
        "key": "B",
        "text": "Translate customer identifiers and treat them as new keys",
        "text_vi": "Dịch mã định danh khách hàng và coi chúng là khóa mới"
      },
      {
        "key": "C",
        "text": "Separate language-specific interpretation from a canonical validated category schema",
        "text_vi": "Tách cách diễn giải theo ngôn ngữ cụ thể khỏi lược đồ danh mục được xác thực chuẩn"
      },
      {
        "key": "D",
        "text": "Create different arbitrary output fields for each language",
        "text_vi": "Tạo các trường đầu ra tùy ý khác nhau cho từng ngôn ngữ"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Canonical schemas allow multilingual interactions without corrupting downstream contracts.",
    "question_vi": "Một kiến ​​trúc sư cấp cao tư vấn cho một trường đại học công lập đang xem xét quy trình làm việc của Claude xoay quanh các yêu cầu về dịch vụ sinh viên và nền tảng quản lý khuôn viên trường với quyền truy cập dữ liệu sinh viên nghiêm ngặt. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 17 trường hợp thử nghiệm đại diện. Quy trình làm việc AI phải xử lý các yêu cầu đa ngôn ngữ với nhãn danh mục nội bộ ổn định. Thiết kế nên thực thi những gì?",
    "explanation_vi": "Các lược đồ chuẩn cho phép tương tác đa ngôn ngữ mà không làm hỏng các hợp đồng ở hạ nguồn."
  },
  {
    "id": 34,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "question": "At scale, a B2B software vendor expects Claude to support customer support platform users working with support and incident tickets, without compromising multi-tenant isolation. The workload is assessed in rollout cohort 1 with 16 representative test cases. Which TWO controls are most important for secure and accountable operation of this workflow? (Choose TWO.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "An output-only token budget",
        "text_vi": "Ngân sách mã thông báo chỉ dành cho đầu ra"
      },
      {
        "key": "B",
        "text": "Define documented acceptance criteria and named decision owners",
        "text_vi": "Xác định tiêu chí chấp nhận được ghi lại và chủ sở hữu quyết định được đặt tên"
      },
      {
        "key": "C",
        "text": "One ambiguous KPI copied across departments",
        "text_vi": "Một KPI không rõ ràng được sao chép giữa các phòng ban"
      },
      {
        "key": "D",
        "text": "Agree on a monitoring and escalation plan for post-launch failures",
        "text_vi": "Thống nhất về kế hoạch giám sát và báo cáo đối với các lỗi sau khi ra mắt"
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "explanation": "Both controls are necessary: define documented acceptance criteria and named decision owners; and agree on a monitoring and escalation plan for post-launch failures. Model instructions alone do not substitute for enforceable controls.",
    "question_vi": "Ở quy mô lớn, một nhà cung cấp phần mềm B2B kỳ vọng Claude sẽ hỗ trợ người dùng nền tảng hỗ trợ khách hàng làm việc với các phiếu hỗ trợ và sự cố mà không ảnh hưởng đến sự cô lập của nhiều bên thuê. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 16 trường hợp thử nghiệm đại diện. HAI biện pháp kiểm soát nào là quan trọng nhất để vận hành quy trình công việc này một cách an toàn và có trách nhiệm? (Chọn HAI.)",
    "explanation_vi": "Cả hai biện pháp kiểm soát đều cần thiết: xác định các tiêu chí chấp nhận được ghi lại bằng văn bản và nêu tên các chủ sở hữu quyết định; và thống nhất về kế hoạch giám sát và báo cáo đối với các lỗi sau khi phóng. Chỉ hướng dẫn mô hình không thể thay thế cho các biện pháp kiểm soát có thể thực thi được."
  },
  {
    "id": 35,
    "topic": "Integration (19%)",
    "question": "For the next release, a multinational bank will connect Claude to core banking platform to work with corporate credit applications under auditable financial controls. The workload is assessed in rollout cohort 1 with 14 representative test cases. Two agents write to the same customer record. What preserves consistency?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Increase model context length",
        "text_vi": "Tăng độ dài bối cảnh mô hình"
      },
      {
        "key": "B",
        "text": "Allow both writes with no concurrency control",
        "text_vi": "Cho phép cả hai ghi mà không có kiểm soát đồng thời"
      },
      {
        "key": "C",
        "text": "Use transactional updates or version preconditions and define conflict handling",
        "text_vi": "Sử dụng các bản cập nhật giao dịch hoặc điều kiện tiên quyết của phiên bản và xác định cách xử lý xung đột"
      },
      {
        "key": "D",
        "text": "Use the last text response as the official record",
        "text_vi": "Sử dụng phản hồi văn bản cuối cùng làm bản ghi chính thức"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Concurrent updates need optimistic locking or transactions, not conversational coordination alone.",
    "question_vi": "Trong lần phát hành tiếp theo, một ngân hàng đa quốc gia sẽ kết nối Claude với nền tảng ngân hàng cốt lõi để hoạt động với các ứng dụng tín dụng doanh nghiệp dưới sự kiểm soát tài chính có thể kiểm toán được. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 14 trường hợp thử nghiệm đại diện. Hai đại lý viết vào cùng một hồ sơ khách hàng. Điều gì bảo tồn tính nhất quán?",
    "explanation_vi": "Các bản cập nhật đồng thời cần khóa hoặc giao dịch lạc quan chứ không chỉ phối hợp đàm thoại."
  },
  {
    "id": 36,
    "topic": "Solution Design & Architecture (17%)",
    "question": "During a production-readiness review at a government procurement office, the architects examine purchase approval records connected to the procurement workflow, with formal reviewer approval. The workload is assessed in rollout cohort 1 with 22 representative test cases. A review pipeline must classify, extract fields, and then route each document. The stages and routing rules are stable. What should the architect select?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "An orchestrated pipeline of specialized deterministic stages and targeted Claude calls",
        "text_vi": "Một hệ thống được sắp xếp gồm các giai đoạn xác định chuyên biệt và các cuộc gọi Claude có mục tiêu"
      },
      {
        "key": "B",
        "text": "An unrestricted loop that continues until it feels complete",
        "text_vi": "Một vòng lặp không hạn chế tiếp tục cho đến khi cảm thấy hoàn thành"
      },
      {
        "key": "C",
        "text": "Independent agents that negotiate an answer without a shared state",
        "text_vi": "Các đại lý độc lập đàm phán câu trả lời mà không có trạng thái chung"
      },
      {
        "key": "D",
        "text": "One long prompt that also directly writes to all downstream systems",
        "text_vi": "Một prompt dài cũng ghi trực tiếp vào tất cả các hệ thống hạ nguồn"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Stable stages benefit from explicit orchestration, testability, and controlled model use.",
    "question_vi": "Trong quá trình đánh giá mức độ sẵn sàng sản xuất tại văn phòng mua sắm của chính phủ, các kiến ​​trúc sư kiểm tra hồ sơ phê duyệt mua hàng được kết nối với quy trình mua sắm với sự chấp thuận của người đánh giá chính thức. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 22 trường hợp thử nghiệm đại diện. Quy trình đánh giá phải phân loại, trích xuất các trường rồi định tuyến từng tài liệu. Các giai đoạn và quy tắc định tuyến ổn định. Kiến trúc sư nên chọn gì?",
    "explanation_vi": "Các giai đoạn ổn định được hưởng lợi từ việc phối hợp rõ ràng, khả năng kiểm tra và sử dụng mô hình được kiểm soát."
  },
  {
    "id": 37,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "question": "A pilot retrospective at an energy utility identifies concerns in asset operations platform processing maintenance incident reports, where high operational safety impact applies. The workload is assessed in rollout cohort 1 with 19 representative test cases. A prompt update improves average quality but hurts a critical small subgroup. What should the release decision be?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Increase tokens without retesting",
        "text_vi": "Tăng mã thông báo mà không cần kiểm tra lại"
      },
      {
        "key": "B",
        "text": "Ship because aggregate accuracy improved",
        "text_vi": "Giao hàng vì độ chính xác tổng hợp được cải thiện"
      },
      {
        "key": "C",
        "text": "Ignore the subgroup because it is small",
        "text_vi": "Bỏ qua nhóm con vì nó nhỏ"
      },
      {
        "key": "D",
        "text": "Block release until subgroup regression is understood and guardrails pass",
        "text_vi": "Chặn phát hành cho đến khi hiểu được hồi quy nhóm con và vượt qua các rào cản"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Prompt changes must meet risk-sensitive acceptance thresholds, not only averages.",
    "question_vi": "Một cuộc hồi cứu thí điểm tại một công ty năng lượng xác định các mối lo ngại trong nền tảng vận hành tài sản xử lý các báo cáo sự cố bảo trì, trong đó áp dụng tác động an toàn vận hành cao. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 19 trường hợp thử nghiệm đại diện. Một bản cập nhật kịp thời sẽ cải thiện chất lượng trung bình nhưng lại gây tổn hại cho một nhóm nhỏ quan trọng. Quyết định phát hành nên như thế nào?",
    "explanation_vi": "Những thay đổi kịp thời phải đáp ứng các ngưỡng chấp nhận nhạy cảm với rủi ro chứ không chỉ ở mức trung bình."
  },
  {
    "id": 38,
    "topic": "Solution Design & Architecture (17%)",
    "question": "At a Japanese manufacturing group, an AI pilot processes quality-inspection records from the factory MES; mandatory operator sign-off is a non-negotiable requirement. The workload is assessed in rollout cohort 1 with 23 representative test cases. An AI assistant drafts contract changes but only lawyers may authorize binding language. Where should authority sit?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "In the system prompt stating that the model should be careful",
        "text_vi": "Trong system prompt nêu rõ rằng mô hình nên cẩn thận"
      },
      {
        "key": "B",
        "text": "In an approval service that validates the exact draft version before publishing",
        "text_vi": "Trong dịch vụ phê duyệt xác thực phiên bản dự thảo chính xác trước khi xuất bản"
      },
      {
        "key": "C",
        "text": "In a post-hoc notification after publication",
        "text_vi": "Trong một thông báo hậu kỳ sau khi xuất bản"
      },
      {
        "key": "D",
        "text": "In the model's self-reported confidence score",
        "text_vi": "Trong điểm tự tin tự báo cáo của người mẫu"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "The authorization boundary must be external to model-generated text and tied to the reviewed artifact.",
    "question_vi": "Tại một nhóm sản xuất Nhật Bản, một dự án thí điểm AI (AI pilot) xử lý hồ sơ kiểm tra chất lượng từ MES của nhà máy; việc ký duyệt (sign-off) bắt buộc của nhà điều hành là một yêu cầu không thể thương lượng. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 23 trường hợp thử nghiệm đại diện. Trợ lý AI soạn thảo các thay đổi trong hợp đồng nhưng chỉ luật sư mới có thể ủy quyền cho ngôn ngữ ràng buộc. Quyền lực nên ngồi ở đâu?",
    "explanation_vi": "Ranh giới ủy quyền phải nằm ngoài văn bản do mô hình tạo và gắn với tạo phẩm được xem xét."
  },
  {
    "id": 39,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "question": "A senior architect advising a public university considers a Claude workflow around student service inquiries and campus management platform with strict student data access. The workload is assessed in rollout cohort 1 with 15 representative test cases. A retrieval team claims improvement based on top-k recall, but answer quality is unchanged. What should be examined?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Increase chunk count without checking relevance",
        "text_vi": "Tăng số lượng đoạn mà không kiểm tra mức độ liên quan"
      },
      {
        "key": "B",
        "text": "Declare success based on retrieval metric alone",
        "text_vi": "Tuyên bố thành công chỉ dựa trên số liệu truy xuất"
      },
      {
        "key": "C",
        "text": "Evaluate downstream grounded answer quality and whether the retrieved passages are usable",
        "text_vi": "Đánh giá chất lượng câu trả lời có căn cứ ở phía dưới và liệu các đoạn được truy xuất có thể sử dụng được hay không"
      },
      {
        "key": "D",
        "text": "Remove citations from generated answers",
        "text_vi": "Xóa trích dẫn khỏi câu trả lời được tạo"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Retrieval metrics are intermediate proxies, not substitutes for end-task quality.",
    "question_vi": "Một kiến ​​trúc sư cấp cao tư vấn cho một trường đại học công lập đang xem xét quy trình làm việc của Claude xoay quanh các yêu cầu về dịch vụ sinh viên và nền tảng quản lý khuôn viên trường với quyền truy cập dữ liệu sinh viên nghiêm ngặt. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 15 trường hợp thử nghiệm đại diện. Nhóm truy xuất tuyên bố cải thiện dựa trên việc thu hồi top-k, nhưng chất lượng câu trả lời không thay đổi. Cần kiểm tra những gì?",
    "explanation_vi": "Số liệu truy xuất là proxy trung gian, không thay thế cho chất lượng nhiệm vụ cuối."
  },
  {
    "id": 40,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "question": "A cross-functional team at an international retail chain plans to modernize ERP using store-level inventory updates, while maintaining subsecond checkout availability. The workload is assessed in rollout cohort 1 with 13 representative test cases. Two Claude models differ in latency and context handling. What is the right production selection method?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Choose randomly per deployment",
        "text_vi": "Chọn ngẫu nhiên cho mỗi lần triển khai"
      },
      {
        "key": "B",
        "text": "Choose by parameter count alone",
        "text_vi": "Chọn chỉ theo số tham số"
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
    "question_vi": "Một nhóm đa chức năng tại một chuỗi bán lẻ quốc tế có kế hoạch hiện đại hóa ERP bằng cách sử dụng các bản cập nhật hàng tồn kho ở cấp độ cửa hàng, trong khi vẫn duy trì khả năng thanh toán dưới giây. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 13 trường hợp thử nghiệm đại diện. Hai mô hình Claude khác nhau về độ trễ và cách xử lý ngữ cảnh. Phương pháp lựa chọn sản xuất phù hợp là gì?",
    "explanation_vi": "Đánh giá khối lượng công việc thực tế là cần thiết để lựa chọn mô hình và cấu hình."
  },
  {
    "id": 41,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "question": "For the next release, a multinational bank will connect Claude to core banking platform to work with corporate credit applications under auditable financial controls. The workload is assessed in rollout cohort 1 with 21 representative test cases. Which TWO controls are most important for secure and accountable operation of this workflow? (Choose TWO.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "An undocumented personal preference",
        "text_vi": "Sở thích cá nhân không có giấy tờ"
      },
      {
        "key": "B",
        "text": "A model leaderboard alone",
        "text_vi": "Chỉ có một bảng xếp hạng kiểu mẫu"
      },
      {
        "key": "C",
        "text": "Define documented acceptance criteria and named decision owners",
        "text_vi": "Xác định tiêu chí chấp nhận được ghi lại và chủ sở hữu quyết định được đặt tên"
      },
      {
        "key": "D",
        "text": "Agree on a monitoring and escalation plan for post-launch failures",
        "text_vi": "Thống nhất về kế hoạch giám sát và báo cáo đối với các lỗi sau khi ra mắt"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "explanation": "Both controls are necessary: define documented acceptance criteria and named decision owners; and agree on a monitoring and escalation plan for post-launch failures. Model instructions alone do not substitute for enforceable controls.",
    "question_vi": "Trong lần phát hành tiếp theo, một ngân hàng đa quốc gia sẽ kết nối Claude với nền tảng ngân hàng cốt lõi để hoạt động với các ứng dụng tín dụng doanh nghiệp dưới sự kiểm soát tài chính có thể kiểm toán được. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 21 trường hợp thử nghiệm đại diện. HAI biện pháp kiểm soát nào là quan trọng nhất để vận hành quy trình công việc này một cách an toàn và có trách nhiệm? (Chọn HAI.)",
    "explanation_vi": "Cả hai biện pháp kiểm soát đều cần thiết: xác định các tiêu chí chấp nhận được ghi lại bằng văn bản và nêu tên các chủ sở hữu quyết định; và thống nhất về kế hoạch giám sát và báo cáo đối với các lỗi sau khi phóng. Chỉ hướng dẫn mô hình không thể thay thế cho các biện pháp kiểm soát có thể thực thi được."
  },
  {
    "id": 42,
    "topic": "Governance, Safety & Risk Management (14%)",
    "question": "The architecture board of a logistics provider evaluates cross-border shipment exceptions workflows in transport management system, prioritizing intermittent connectivity. The workload is assessed in rollout cohort 1 with 13 representative test cases. A team wants to use customer prompts to improve its product. What is the appropriate first governance question?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "How many tokens can be collected at maximum?",
        "text_vi": "Có thể thu thập tối đa bao nhiêu token?"
      },
      {
        "key": "B",
        "text": "Whether users prefer longer answers",
        "text_vi": "Người dùng có thích câu trả lời dài hơn không"
      },
      {
        "key": "C",
        "text": "Whether marketing wants the examples",
        "text_vi": "Liệu bộ phận tiếp thị có muốn các ví dụ hay không"
      },
      {
        "key": "D",
        "text": "What consent, purpose limitation, data classification, and retention rules apply?",
        "text_vi": "Những quy tắc chấp thuận, giới hạn mục đích, phân loại dữ liệu và lưu giữ nào được áp dụng?"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Data reuse should follow approved legal and privacy constraints.",
    "question_vi": "Hội đồng kiến ​​trúc của nhà cung cấp dịch vụ hậu cần đánh giá các quy trình ngoại lệ đối với lô hàng xuyên biên giới trong hệ thống quản lý vận tải, ưu tiên kết nối không liên tục. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 13 trường hợp thử nghiệm đại diện. Một nhóm muốn sử dụng prompt của khách hàng để cải thiện sản phẩm của mình. Câu hỏi quản trị đầu tiên thích hợp là gì?",
    "explanation_vi": "Việc tái sử dụng dữ liệu phải tuân theo các ràng buộc về quyền riêng tư và pháp lý đã được phê duyệt."
  },
  {
    "id": 43,
    "topic": "Integration (19%)",
    "question": "During a production-readiness review at a government procurement office, the architects examine purchase approval records connected to the procurement workflow, with formal reviewer approval. The workload is assessed in rollout cohort 1 with 20 representative test cases. A workflow invokes read tools and write tools. How should tooling permissions be organized?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Separate read and write capabilities with least privilege and stricter gates for writes",
        "text_vi": "Tách biệt khả năng đọc và ghi với ít đặc quyền nhất và cổng ghi chặt chẽ hơn"
      },
      {
        "key": "B",
        "text": "Ask Claude to infer permissions from tool names",
        "text_vi": "Yêu cầu Claude suy ra quyền từ tên công cụ"
      },
      {
        "key": "C",
        "text": "Grant identical broad permissions to all tools",
        "text_vi": "Cấp quyền rộng rãi giống hệt nhau cho tất cả các công cụ"
      },
      {
        "key": "D",
        "text": "Use a single unlogged superuser token",
        "text_vi": "Sử dụng một mã thông báo siêu người dùng chưa được đăng nhập"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Capability separation limits blast radius and enables differentiated approval policies.",
    "question_vi": "Trong quá trình đánh giá mức độ sẵn sàng sản xuất tại văn phòng mua sắm của chính phủ, các kiến ​​trúc sư kiểm tra hồ sơ phê duyệt mua hàng được kết nối với quy trình mua sắm với sự chấp thuận của người đánh giá chính thức. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 20 trường hợp thử nghiệm đại diện. Một quy trình làm việc gọi các công cụ đọc và công cụ viết. Quyền sử dụng công cụ nên được tổ chức như thế nào?",
    "explanation_vi": "Khả năng phân tách giới hạn bán kính vụ nổ và cho phép các chính sách phê duyệt khác biệt."
  },
  {
    "id": 44,
    "topic": "Developer Productivity & Operational Enablement (7%)",
    "question": "At scale, a B2B software vendor expects Claude to support customer support platform users working with support and incident tickets, without compromising multi-tenant isolation. The workload is assessed in rollout cohort 1 with 15 representative test cases. A CI pipeline invokes Claude to propose code changes. What is the strongest merge gate?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "An AI-generated statement that tests passed",
        "text_vi": "Một tuyên bố do AI tạo ra rằng các bài kiểm tra đã vượt qua"
      },
      {
        "key": "B",
        "text": "A verified test suite, code-owner review, dependency checks, and protected branches",
        "text_vi": "Bộ kiểm tra đã được xác minh, đánh giá của chủ sở hữu mã, kiểm tra phụ thuộc và các nhánh được bảo vệ"
      },
      {
        "key": "C",
        "text": "Skipping CI when diffs are small",
        "text_vi": "Bỏ qua CI khi chênh lệch nhỏ"
      },
      {
        "key": "D",
        "text": "A green text badge produced by the same model",
        "text_vi": "Huy hiệu văn bản màu xanh lá cây được sản xuất bởi cùng một mẫu"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Automated assistance should feed existing verified software controls.",
    "question_vi": "Ở quy mô lớn, một nhà cung cấp phần mềm B2B kỳ vọng Claude sẽ hỗ trợ người dùng nền tảng hỗ trợ khách hàng làm việc với các phiếu hỗ trợ và sự cố mà không ảnh hưởng đến sự cô lập của nhiều bên thuê. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 15 trường hợp thử nghiệm đại diện. Quy trình CI gọi Claude để đề xuất thay đổi mã. Cổng hợp nhất mạnh nhất là gì?",
    "explanation_vi": "Hỗ trợ tự động sẽ cung cấp các điều khiển phần mềm đã được xác minh hiện có."
  },
  {
    "id": 45,
    "topic": "Governance, Safety & Risk Management (14%)",
    "question": "A pilot retrospective at an energy utility identifies concerns in asset operations platform processing maintenance incident reports, where high operational safety impact applies. The workload is assessed in rollout cohort 1 with 16 representative test cases. Which TWO controls are most important for secure and accountable operation of this workflow? (Choose TWO.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "Enforce access-control and data-handling policies independently of model prompts",
        "text_vi": "Thực thi các chính sách kiểm soát truy cập và xử lý dữ liệu độc lập với prompt mô hình"
      },
      {
        "key": "B",
        "text": "Remove subgroup labels from evaluation and declare fairness",
        "text_vi": "Xóa nhãn nhóm con khỏi đánh giá và tuyên bố tính công bằng"
      },
      {
        "key": "C",
        "text": "Retain auditable evidence of reviews, exceptions, and privileged actions",
        "text_vi": "Giữ lại bằng chứng có thể kiểm tra được về các đánh giá, ngoại lệ và hành động đặc quyền"
      },
      {
        "key": "D",
        "text": "Focus only on overall accuracy",
        "text_vi": "Chỉ tập trung vào độ chính xác tổng thể"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "Both controls are necessary: enforce access-control and data-handling policies independently of model prompts; and retain auditable evidence of reviews, exceptions, and privileged actions. Model instructions alone do not substitute for enforceable controls.",
    "question_vi": "Một cuộc hồi cứu thí điểm tại một công ty năng lượng xác định các mối lo ngại trong nền tảng vận hành tài sản xử lý các báo cáo sự cố bảo trì, trong đó áp dụng tác động an toàn vận hành cao. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 16 trường hợp thử nghiệm đại diện. HAI biện pháp kiểm soát nào là quan trọng nhất để vận hành quy trình công việc này một cách an toàn và có trách nhiệm? (Chọn HAI.)",
    "explanation_vi": "Cả hai biện pháp kiểm soát đều cần thiết: thực thi các chính sách kiểm soát truy cập và xử lý dữ liệu một cách độc lập với prompt của mô hình; và lưu giữ bằng chứng có thể kiểm tra được về các đánh giá, ngoại lệ và hành động đặc quyền. Chỉ hướng dẫn mô hình không thể thay thế cho các biện pháp kiểm soát có thể thực thi được."
  },
  {
    "id": 46,
    "topic": "Solution Design & Architecture (17%)",
    "question": "A regulated delivery team at an insurance carrier is integrating policy and claim files into claims processing platform; its operational mandate includes regulated evidence retention. The workload is assessed in rollout cohort 1 with 19 representative test cases. A product owner proposes automated approvals for a high-impact workflow. Which business metric belongs in the architecture decision?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Net time saved including review effort, error remediation, and operational cost",
        "text_vi": "Tiết kiệm thời gian thực bao gồm nỗ lực đánh giá, sửa lỗi và chi phí vận hành"
      },
      {
        "key": "B",
        "text": "Only the number of generated tokens",
        "text_vi": "Chỉ số lượng mã thông báo được tạo"
      },
      {
        "key": "C",
        "text": "Only the number of agents spawned",
        "text_vi": "Chỉ có số lượng đại lý sinh ra"
      },
      {
        "key": "D",
        "text": "Model benchmark performance without operational context",
        "text_vi": "Hiệu suất điểm chuẩn của mô hình không có bối cảnh hoạt động"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Business value must include throughput, review cost, corrections, and risk exposure.",
    "question_vi": "Nhóm phân phối được quản lý tại một hãng bảo hiểm đang tích hợp các hồ sơ chính sách và yêu cầu bồi thường vào nền tảng xử lý yêu cầu bồi thường; nhiệm vụ hoạt động của nó bao gồm việc lưu giữ bằng chứng theo quy định. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 19 trường hợp thử nghiệm đại diện. Chủ sở hữu sản phẩm đề xuất phê duyệt tự động cho quy trình làm việc có tác động cao. Số liệu kinh doanh nào thuộc về quyết định kiến ​​trúc?",
    "explanation_vi": "Giá trị doanh nghiệp phải bao gồm thông lượng, chi phí xem xét, sửa chữa và rủi ro."
  },
  {
    "id": 47,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "question": "At scale, a B2B software vendor expects Claude to support customer support platform users working with support and incident tickets, without compromising multi-tenant isolation. The workload is assessed in rollout cohort 1 with 18 representative test cases. A deployment uses shadow traffic to compare a candidate model. What is the key safety boundary?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Treat shadow suggestions as executed transactions",
        "text_vi": "Coi các đề xuất bóng như các giao dịch được thực hiện"
      },
      {
        "key": "B",
        "text": "Prevent shadow outputs from mutating live systems and compare quality on matching inputs",
        "text_vi": "Ngăn chặn đầu ra bóng làm thay đổi hệ thống trực tiếp và so sánh chất lượng trên các đầu vào phù hợp"
      },
      {
        "key": "C",
        "text": "Switch all traffic before collecting results",
        "text_vi": "Chuyển đổi tất cả lưu lượng truy cập trước khi thu thập kết quả"
      },
      {
        "key": "D",
        "text": "Let shadow model send duplicate customer notifications",
        "text_vi": "Để mô hình bóng gửi thông báo trùng lặp cho khách hàng"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Shadow testing isolates candidate behavior without real-world side effects.",
    "question_vi": "Ở quy mô lớn, một nhà cung cấp phần mềm B2B kỳ vọng Claude sẽ hỗ trợ người dùng nền tảng hỗ trợ khách hàng làm việc với các phiếu hỗ trợ và sự cố mà không ảnh hưởng đến sự cô lập của nhiều bên thuê. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 18 trường hợp thử nghiệm đại diện. Quá trình triển khai sử dụng lưu lượng truy cập tối để so sánh mô hình ứng viên. Ranh giới an toàn chính là gì?",
    "explanation_vi": "Kiểm tra bóng giúp cô lập hành vi của ứng viên mà không có tác dụng phụ trong thế giới thực."
  },
  {
    "id": 48,
    "topic": "Developer Productivity & Operational Enablement (7%)",
    "question": "A pilot retrospective at an energy utility identifies concerns in asset operations platform processing maintenance incident reports, where high operational safety impact applies. The workload is assessed in rollout cohort 1 with 14 representative test cases. A team wants to standardize developer agent tool permissions. What should be documented?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Only tool icons",
        "text_vi": "Chỉ có biểu tượng công cụ"
      },
      {
        "key": "B",
        "text": "Only the agent's preferred writing style",
        "text_vi": "Chỉ phong cách viết ưa thích của đại lý"
      },
      {
        "key": "C",
        "text": "Only the number of installed extensions",
        "text_vi": "Chỉ số lượng tiện ích mở rộng được cài đặt"
      },
      {
        "key": "D",
        "text": "Allowed tools, environments, approval boundaries, secrets handling, and exception process",
        "text_vi": "Các công cụ, môi trường, ranh giới phê duyệt, xử lý bí mật và quy trình ngoại lệ được phép"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Tool policy must be explicit and enforced by environment controls.",
    "question_vi": "Một cuộc hồi cứu thí điểm tại một công ty năng lượng xác định các mối lo ngại trong nền tảng vận hành tài sản xử lý các báo cáo sự cố bảo trì, trong đó áp dụng tác động an toàn vận hành cao. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 14 trường hợp thử nghiệm đại diện. Một nhóm muốn chuẩn hóa các quyền đối với công cụ tác nhân dành cho nhà phát triển. Những gì cần được ghi lại?",
    "explanation_vi": "Chính sách công cụ phải rõ ràng và được thực thi bởi các biện pháp kiểm soát môi trường."
  },
  {
    "id": 49,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "question": "During a production-readiness review at a government procurement office, the architects examine purchase approval records connected to the procurement workflow, with formal reviewer approval. The workload is assessed in rollout cohort 1 with 19 representative test cases. A team considers reducing generated tokens to improve cost. What evidence should guide the change?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Assume shorter responses are always better",
        "text_vi": "Giả sử phản hồi ngắn hơn luôn tốt hơn"
      },
      {
        "key": "B",
        "text": "Delete required caveats without testing",
        "text_vi": "Xóa các cảnh báo cần thiết mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Optimize only the longest prompts in the test set",
        "text_vi": "Chỉ tối ưu hóa các prompt dài nhất trong bộ thử nghiệm"
      },
      {
        "key": "D",
        "text": "Measure task success and user satisfaction against cost and latency across representative tasks",
        "text_vi": "Đo lường mức độ thành công của nhiệm vụ và sự hài lòng của người dùng so với chi phí và độ trễ trên các nhiệm vụ đại diện"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Efficiency improvements must preserve required quality and task completion.",
    "question_vi": "Trong quá trình đánh giá mức độ sẵn sàng sản xuất tại văn phòng mua sắm của chính phủ, các kiến ​​trúc sư kiểm tra hồ sơ phê duyệt mua hàng được kết nối với quy trình mua sắm với sự chấp thuận của người đánh giá chính thức. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 19 trường hợp thử nghiệm đại diện. Một nhóm xem xét việc giảm số lượng token được tạo ra để cải thiện chi phí. Bằng chứng nào sẽ hướng dẫn sự thay đổi?",
    "explanation_vi": "Cải tiến hiệu quả phải duy trì chất lượng cần thiết và hoàn thành nhiệm vụ."
  },
  {
    "id": 50,
    "topic": "Integration (19%)",
    "question": "An incident review at a regional hospital network focuses on AI handling of patient discharge letters in the clinical records system; stakeholders insist on strict clinical authorization. The workload is assessed in rollout cohort 1 with 13 representative test cases. A user revokes document access mid-session. What must an RAG service do?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Keep using an old embedding because embeddings are not documents",
        "text_vi": "Tiếp tục sử dụng nội dung nhúng cũ vì nội dung nhúng không phải là tài liệu"
      },
      {
        "key": "B",
        "text": "Assume a previous login grants permanent access",
        "text_vi": "Giả sử đăng nhập trước đó cấp quyền truy cập vĩnh viễn"
      },
      {
        "key": "C",
        "text": "Recheck permissions on subsequent retrieval and prevent serving revoked cached data",
        "text_vi": "Kiểm tra lại quyền trong lần truy xuất tiếp theo và ngăn việc cung cấp dữ liệu đã lưu trong bộ nhớ đệm đã bị thu hồi"
      },
      {
        "key": "D",
        "text": "Let Claude decide whether the revocation matters",
        "text_vi": "Hãy để Claude quyết định xem việc thu hồi có quan trọng không"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Authorization and cache invalidation must reflect current entitlements.",
    "question_vi": "Đánh giá sự cố tại mạng lưới bệnh viện khu vực tập trung vào việc xử lý AI thư xuất viện của bệnh nhân trong hệ thống hồ sơ lâm sàng; các bên liên quan nhấn mạnh vào sự cho phép lâm sàng nghiêm ngặt. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 13 trường hợp thử nghiệm đại diện. Người dùng thu hồi quyền truy cập tài liệu vào giữa phiên. Dịch vụ RAG phải làm gì?",
    "explanation_vi": "Việc ủy quyền và vô hiệu hóa bộ đệm phải phản ánh các quyền hiện tại."
  },
  {
    "id": 51,
    "topic": "Developer Productivity & Operational Enablement (7%)",
    "question": "A regulated delivery team at an insurance carrier is integrating policy and claim files into claims processing platform; its operational mandate includes regulated evidence retention. The workload is assessed in rollout cohort 1 with 13 representative test cases. An engineer uses an agent to refactor a security-sensitive module. What is a safe review pattern?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Merge without inspecting dependency changes",
        "text_vi": "Hợp nhất mà không kiểm tra các thay đổi phụ thuộc"
      },
      {
        "key": "B",
        "text": "Constrain file scope, require tests, inspect diffs, and obtain independent security review",
        "text_vi": "Giới hạn phạm vi tệp, yêu cầu kiểm tra, kiểm tra sự khác biệt và nhận được đánh giá bảo mật độc lập"
      },
      {
        "key": "C",
        "text": "Approve because the patch has many lines",
        "text_vi": "Phê duyệt vì bản vá có nhiều dòng"
      },
      {
        "key": "D",
        "text": "Give the agent unrestricted credentials",
        "text_vi": "Cung cấp cho đại lý thông tin xác thực không hạn chế"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Coding agents accelerate edits but do not transfer accountability for secure changes.",
    "question_vi": "Nhóm phân phối được quản lý tại một hãng bảo hiểm đang tích hợp các hồ sơ chính sách và yêu cầu bồi thường vào nền tảng xử lý yêu cầu bồi thường; nhiệm vụ hoạt động của nó bao gồm việc lưu giữ bằng chứng theo quy định. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 13 trường hợp thử nghiệm đại diện. Một kỹ sư sử dụng tác nhân để cấu trúc lại mô-đun nhạy cảm về bảo mật. Mô hình đánh giá an toàn là gì?",
    "explanation_vi": "Tác nhân mã hóa tăng tốc chỉnh sửa nhưng không chuyển giao trách nhiệm giải trình cho những thay đổi an toàn."
  },
  {
    "id": 52,
    "topic": "Governance, Safety & Risk Management (14%)",
    "question": "At a Japanese manufacturing group, an AI pilot processes quality-inspection records from the factory MES; mandatory operator sign-off is a non-negotiable requirement. The workload is assessed in rollout cohort 1 with 19 representative test cases. A retrieved policy document tells an agent to email confidential data to an outside address. What should the system do?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Send data because the instruction came from a document",
        "text_vi": "Gửi dữ liệu vì hướng dẫn đến từ một tài liệu"
      },
      {
        "key": "B",
        "text": "Treat the instruction as prompt injection and block unauthorized egress",
        "text_vi": "Hãy coi hướng dẫn là tiêm nhắc và chặn lối ra trái phép"
      },
      {
        "key": "C",
        "text": "Ask Claude to determine whether the recipient seems friendly",
        "text_vi": "Yêu cầu Claude xác định xem người nhận có thân thiện không"
      },
      {
        "key": "D",
        "text": "Remove audit logs and continue",
        "text_vi": "Xóa nhật ký kiểm tra và tiếp tục"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Retrieved content is untrusted; independent authorization must prevent exfiltration.",
    "question_vi": "Tại một nhóm sản xuất Nhật Bản, một dự án thí điểm AI (AI pilot) xử lý hồ sơ kiểm tra chất lượng từ MES của nhà máy; việc ký duyệt (sign-off) bắt buộc của nhà điều hành là một yêu cầu không thể thương lượng. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 19 trường hợp thử nghiệm đại diện. Một tài liệu chính sách được truy xuất sẽ yêu cầu một đại lý gửi dữ liệu bí mật qua email đến một địa chỉ bên ngoài. Hệ thống nên làm gì?",
    "explanation_vi": "Nội dung được truy xuất không đáng tin cậy; ủy quyền độc lập phải ngăn chặn việc rò rỉ."
  },
  {
    "id": 53,
    "topic": "Governance, Safety & Risk Management (14%)",
    "question": "During a production-readiness review at a government procurement office, the architects examine purchase approval records connected to the procurement workflow, with formal reviewer approval. The workload is assessed in rollout cohort 1 with 18 representative test cases. A third-party tool processes regulated documents. What is necessary before enabling it?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Enable it first, then ask legal after an incident",
        "text_vi": "Kích hoạt nó trước, sau đó hỏi pháp luật sau khi xảy ra sự cố"
      },
      {
        "key": "B",
        "text": "Confirm the tool has a memorable brand",
        "text_vi": "Xác nhận công cụ có thương hiệu đáng nhớ"
      },
      {
        "key": "C",
        "text": "Trust any service that speaks MCP",
        "text_vi": "Tin tưởng bất kỳ dịch vụ nào nói MCP"
      },
      {
        "key": "D",
        "text": "Assess vendor terms, data flows, security controls, and contractual restrictions",
        "text_vi": "Đánh giá các điều khoản của nhà cung cấp, luồng dữ liệu, kiểm soát bảo mật và các hạn chế trong hợp đồng"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Third-party integrations extend the governance boundary and require review.",
    "question_vi": "Trong quá trình đánh giá mức độ sẵn sàng sản xuất tại văn phòng mua sắm của chính phủ, các kiến ​​trúc sư kiểm tra hồ sơ phê duyệt mua hàng được kết nối với quy trình mua sắm với sự chấp thuận của người đánh giá chính thức. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 18 trường hợp thử nghiệm đại diện. Công cụ của bên thứ ba xử lý các tài liệu được quy định. Điều gì là cần thiết trước khi kích hoạt nó?",
    "explanation_vi": "Tích hợp của bên thứ ba mở rộng ranh giới quản trị và yêu cầu xem xét."
  },
  {
    "id": 54,
    "topic": "Solution Design & Architecture (17%)",
    "question": "A cross-functional team at an international retail chain plans to modernize ERP using store-level inventory updates, while maintaining subsecond checkout availability. The workload is assessed in rollout cohort 1 with 14 representative test cases. A service must meet an end-to-end p95 latency target while calling three external systems. How should the target influence architecture?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Measure only average model latency",
        "text_vi": "Chỉ đo độ trễ trung bình của mô hình"
      },
      {
        "key": "B",
        "text": "Allocate latency budgets per stage and design timeouts, concurrency, and degradation paths",
        "text_vi": "Phân bổ ngân sách độ trễ cho mỗi giai đoạn và thiết kế thời gian chờ, đồng thời và đường dẫn xuống cấp"
      },
      {
        "key": "C",
        "text": "Disable tracing to save all overhead",
        "text_vi": "Vô hiệu hóa theo dõi để tiết kiệm tất cả chi phí"
      },
      {
        "key": "D",
        "text": "Assume tool calls have zero variance",
        "text_vi": "Giả sử các lệnh gọi công cụ không có phương sai"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "The end-to-end SLO includes model, retrieval, tool, and network latency, especially at the tail.",
    "question_vi": "Một nhóm đa chức năng tại một chuỗi bán lẻ quốc tế có kế hoạch hiện đại hóa ERP bằng cách sử dụng các bản cập nhật hàng tồn kho ở cấp độ cửa hàng, trong khi vẫn duy trì khả năng thanh toán dưới giây. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 14 trường hợp thử nghiệm đại diện. Một dịch vụ phải đáp ứng mục tiêu độ trễ p95 từ đầu đến cuối trong khi gọi ba hệ thống bên ngoài. Mục tiêu nên ảnh hưởng đến kiến ​​trúc như thế nào?",
    "explanation_vi": "SLO đầu cuối bao gồm mô hình, truy xuất, công cụ và độ trễ mạng, đặc biệt là ở phần cuối."
  },
  {
    "id": 55,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "question": "At scale, a B2B software vendor expects Claude to support customer support platform users working with support and incident tickets, without compromising multi-tenant isolation. The workload is assessed in rollout cohort 1 with 20 representative test cases. A chat assistant has many simple requests but occasional complex investigations. How should models be selected?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Switch models randomly to balance traffic",
        "text_vi": "Chuyển đổi mô hình ngẫu nhiên để cân bằng lưu lượng"
      },
      {
        "key": "B",
        "text": "Route tasks using quality and latency tests, using a faster model for routine work and a stronger model when needed",
        "text_vi": "Định tuyến các nhiệm vụ bằng cách sử dụng các bài kiểm tra chất lượng và độ trễ, sử dụng mô hình nhanh hơn cho công việc thường ngày và mô hình mạnh hơn khi cần"
      },
      {
        "key": "C",
        "text": "Always use the largest model for every request",
        "text_vi": "Luôn sử dụng mô hình lớn nhất cho mọi yêu cầu"
      },
      {
        "key": "D",
        "text": "Always use the cheapest model without testing",
        "text_vi": "Luôn sử dụng mẫu rẻ nhất mà không cần thử nghiệm"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Model choice is a measured trade-off among quality, latency, cost, and task complexity.",
    "question_vi": "Ở quy mô lớn, một nhà cung cấp phần mềm B2B kỳ vọng Claude sẽ hỗ trợ người dùng nền tảng hỗ trợ khách hàng làm việc với các phiếu hỗ trợ và sự cố mà không ảnh hưởng đến sự cô lập của nhiều bên thuê. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 20 trường hợp thử nghiệm đại diện. Trợ lý trò chuyện có nhiều yêu cầu đơn giản nhưng đôi khi lại có những cuộc điều tra phức tạp. Nên lựa chọn mô hình như thế nào?",
    "explanation_vi": "Lựa chọn mô hình là sự đánh đổi được đo lường giữa chất lượng, độ trễ, chi phí và độ phức tạp của nhiệm vụ."
  },
  {
    "id": 56,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "question": "A regulated delivery team at an insurance carrier is integrating policy and claim files into claims processing platform; its operational mandate includes regulated evidence retention. The workload is assessed in rollout cohort 1 with 14 representative test cases. An AI capability has a valuable but costly human approval step. How should leadership decide whether to automate it?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Assume all reviewers add no value",
        "text_vi": "Giả sử tất cả người đánh giá đều không có giá trị gì"
      },
      {
        "key": "B",
        "text": "Remove approvals solely to improve average latency",
        "text_vi": "Chỉ xóa phê duyệt để cải thiện độ trễ trung bình"
      },
      {
        "key": "C",
        "text": "Use model confidence as the only threshold",
        "text_vi": "Sử dụng độ tin cậy của mô hình làm ngưỡng duy nhất"
      },
      {
        "key": "D",
        "text": "Quantify risk, review burden, exception rate, and control effectiveness before changing authority",
        "text_vi": "Định lượng rủi ro, gánh nặng xem xét, tỷ lệ ngoại lệ và hiệu quả kiểm soát trước khi thay đổi thẩm quyền"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Automation decisions require measurable risk-adjusted trade-offs.",
    "question_vi": "Nhóm phân phối được quản lý tại một hãng bảo hiểm đang tích hợp các hồ sơ chính sách và yêu cầu bồi thường vào nền tảng xử lý yêu cầu bồi thường; nhiệm vụ hoạt động của nó bao gồm việc lưu giữ bằng chứng theo quy định. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 14 trường hợp thử nghiệm đại diện. Khả năng AI có bước phê duyệt có giá trị nhưng tốn kém của con người. Lãnh đạo nên quyết định có nên tự động hóa nó hay không?",
    "explanation_vi": "Các quyết định tự động hóa đòi hỏi sự đánh đổi điều chỉnh rủi ro có thể đo lường được."
  },
  {
    "id": 57,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "question": "For the next release, a multinational bank will connect Claude to core banking platform to work with corporate credit applications under auditable financial controls. The workload is assessed in rollout cohort 1 with 13 representative test cases. A team uses an LLM judge to score factual answers. What should the evaluation plan include?",
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
        "text": "Always use the same model as generator and judge with no checks",
        "text_vi": "Luôn sử dụng cùng một mô hình như trình tạo và đánh giá mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Human-calibrated rubrics, bias checks, and periodic adjudication of judge disagreements",
        "text_vi": "Thang đánh giá do con người hiệu chỉnh, kiểm tra thiên vị và xét xử định kỳ những bất đồng của thẩm phán"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "LLM judges are useful but need calibration and independent checks.",
    "question_vi": "Trong lần phát hành tiếp theo, một ngân hàng đa quốc gia sẽ kết nối Claude với nền tảng ngân hàng cốt lõi để hoạt động với các ứng dụng tín dụng doanh nghiệp dưới sự kiểm soát tài chính có thể kiểm toán được. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 13 trường hợp thử nghiệm đại diện. Một nhóm sử dụng giám khảo LLM để chấm điểm các câu trả lời thực tế. Kế hoạch đánh giá nên bao gồm những gì?",
    "explanation_vi": "Thẩm phán LLM rất hữu ích nhưng cần hiệu chuẩn và kiểm tra độc lập."
  },
  {
    "id": 58,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "question": "A pilot retrospective at an energy utility identifies concerns in asset operations platform processing maintenance incident reports, where high operational safety impact applies. The workload is assessed in rollout cohort 1 with 15 representative test cases. A customer complains that the solution failed even though offline tests passed. What feedback loop is missing?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "More synthetic examples without production monitoring",
        "text_vi": "Nhiều ví dụ tổng hợp hơn mà không cần giám sát sản xuất"
      },
      {
        "key": "B",
        "text": "Instrument real-world failures, user feedback, root-cause review, and prioritized improvements",
        "text_vi": "Kiểm tra các lỗi trong thế giới thực, phản hồi của người dùng, đánh giá nguyên nhân cốt lõi và các cải tiến được ưu tiên"
      },
      {
        "key": "C",
        "text": "A new logo for the application",
        "text_vi": "Logo mới cho ứng dụng"
      },
      {
        "key": "D",
        "text": "A larger internal slide deck",
        "text_vi": "Sàn trượt bên trong lớn hơn"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Lifecycle improvement joins field telemetry with evaluation and stakeholder feedback.",
    "question_vi": "Một cuộc hồi cứu thí điểm tại một công ty năng lượng xác định các mối lo ngại trong nền tảng vận hành tài sản xử lý các báo cáo sự cố bảo trì, trong đó áp dụng tác động an toàn vận hành cao. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 15 trường hợp thử nghiệm đại diện. Một khách hàng phàn nàn rằng giải pháp không thành công mặc dù các thử nghiệm ngoại tuyến đã vượt qua. Vòng phản hồi nào bị thiếu?",
    "explanation_vi": "Cải tiến vòng đời kết hợp đo lường từ xa tại hiện trường với đánh giá và phản hồi của các bên liên quan."
  },
  {
    "id": 59,
    "topic": "Solution Design & Architecture (17%)",
    "question": "An incident review at a regional hospital network focuses on AI handling of patient discharge letters in the clinical records system; stakeholders insist on strict clinical authorization. The workload is assessed in rollout cohort 1 with 15 representative test cases. A team proposes five cooperating agents for a simple FAQ assistant. What is the strongest architecture review response?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Approve multi-agent architecture because more agents always improve quality",
        "text_vi": "Phê duyệt kiến trúc đa tác nhân vì nhiều tác nhân luôn cải thiện chất lượng"
      },
      {
        "key": "B",
        "text": "Make the five agents share administrator credentials",
        "text_vi": "Làm cho năm đại lý chia sẻ thông tin đăng nhập của quản trị viên"
      },
      {
        "key": "C",
        "text": "Request evidence that a simpler retrieval-augmented single-agent design cannot meet the requirements",
        "text_vi": "Yêu cầu bằng chứng cho thấy thiết kế tác nhân đơn tăng cường truy xuất đơn giản hơn không thể đáp ứng các yêu cầu"
      },
      {
        "key": "D",
        "text": "Reject retrieval because it is not autonomous",
        "text_vi": "Từ chối truy xuất vì nó không tự chủ"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Architecture choice should be driven by measured requirements, not perceived sophistication.",
    "question_vi": "Đánh giá sự cố tại mạng lưới bệnh viện khu vực tập trung vào việc xử lý AI thư xuất viện của bệnh nhân trong hệ thống hồ sơ lâm sàng; các bên liên quan nhấn mạnh vào sự cho phép lâm sàng nghiêm ngặt. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 15 trường hợp thử nghiệm đại diện. Một nhóm đề xuất năm tác nhân hợp tác cho một trợ lý Câu hỏi thường gặp đơn giản. Phản hồi đánh giá kiến ​​trúc mạnh mẽ nhất là gì?",
    "explanation_vi": "Sự lựa chọn kiến trúc nên được thúc đẩy bởi các yêu cầu được đo lường, chứ không phải sự phức tạp được cảm nhận."
  },
  {
    "id": 60,
    "topic": "Integration (19%)",
    "question": "At scale, a B2B software vendor expects Claude to support customer support platform users working with support and incident tickets, without compromising multi-tenant isolation. The workload is assessed in rollout cohort 1 with 19 representative test cases. A service uses embeddings but keyword queries with product codes often fail. What is a sound retrieval enhancement?",
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
        "text": "Delete product codes from documents",
        "text_vi": "Xóa mã sản phẩm khỏi tài liệu"
      },
      {
        "key": "D",
        "text": "Increase temperature for all queries",
        "text_vi": "Tăng nhiệt độ cho tất cả các truy vấn"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Exact tokens and semantic matching have different strengths, so hybrid search can improve recall.",
    "question_vi": "Ở quy mô lớn, một nhà cung cấp phần mềm B2B kỳ vọng Claude sẽ hỗ trợ người dùng nền tảng hỗ trợ khách hàng làm việc với các phiếu hỗ trợ và sự cố mà không ảnh hưởng đến sự cô lập của nhiều bên thuê. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 19 trường hợp thử nghiệm đại diện. Một dịch vụ sử dụng phần nhúng nhưng các truy vấn từ khóa có mã sản phẩm thường không thành công. Tăng cường truy xuất âm thanh là gì?",
    "explanation_vi": "Mã thông báo chính xác và kết hợp ngữ nghĩa có những điểm mạnh khác nhau, vì vậy tìm kiếm kết hợp có thể cải thiện khả năng ghi nhớ."
  },
  {
    "id": 61,
    "topic": "Governance, Safety & Risk Management (14%)",
    "question": "A cross-functional team at an international retail chain plans to modernize ERP using store-level inventory updates, while maintaining subsecond checkout availability. The workload is assessed in rollout cohort 1 with 20 representative test cases. A clinical summarizer assists clinicians but must not autonomously change treatments. Which control fits?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Require licensed human review before any clinical order is committed",
        "text_vi": "Yêu cầu đánh giá của con người được cấp phép trước khi thực hiện bất kỳ lệnh lâm sàng nào"
      },
      {
        "key": "B",
        "text": "Permit treatment changes when Claude reports high confidence",
        "text_vi": "Cho phép thay đổi cách điều trị khi Claude báo cáo mức độ tin cậy cao"
      },
      {
        "key": "C",
        "text": "Hide uncertainty to preserve clinician trust",
        "text_vi": "Che giấu sự không chắc chắn để duy trì niềm tin của bác sĩ lâm sàng"
      },
      {
        "key": "D",
        "text": "Allow a patient prompt to override clinical authorization",
        "text_vi": "Cho phép prompt của bệnh nhân ghi đè ủy quyền lâm sàng"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "High-impact decisions require accountable human review and clear decision authority.",
    "question_vi": "Một nhóm đa chức năng tại một chuỗi bán lẻ quốc tế có kế hoạch hiện đại hóa ERP bằng cách sử dụng các bản cập nhật hàng tồn kho ở cấp độ cửa hàng, trong khi vẫn duy trì khả năng thanh toán dưới giây. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 20 trường hợp thử nghiệm đại diện. Trình tóm tắt lâm sàng hỗ trợ các bác sĩ lâm sàng nhưng không được tự động thay đổi phương pháp điều trị. Điều khiển nào phù hợp?",
    "explanation_vi": "Các quyết định có tác động cao đòi hỏi sự xem xét có trách nhiệm của con người và thẩm quyền quyết định rõ ràng."
  },
  {
    "id": 62,
    "topic": "Solution Design & Architecture (17%)",
    "question": "A senior architect advising a public university considers a Claude workflow around student service inquiries and campus management platform with strict student data access. The workload is assessed in rollout cohort 1 with 18 representative test cases. A company has several tenants sharing an AI service. What is the central data-plane design principle?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Rely exclusively on UI hiding to prevent cross-tenant access",
        "text_vi": "Chỉ dựa vào tính năng ẩn giao diện người dùng để ngăn chặn quyền truy cập của nhiều người thuê"
      },
      {
        "key": "B",
        "text": "Use one shared unrestricted vector index and rely on the model to filter",
        "text_vi": "Sử dụng một chỉ mục vectơ không hạn chế được chia sẻ và dựa vào mô hình để lọc"
      },
      {
        "key": "C",
        "text": "Trust the tenant name written by a user in their question",
        "text_vi": "Tin tưởng vào tên đối tượng thuê do người dùng viết trong câu hỏi của họ"
      },
      {
        "key": "D",
        "text": "Enforce tenant scope in identity, retrieval, storage, and tool execution independently of prompts",
        "text_vi": "Thực thi phạm vi đối tượng thuê trong nhận dạng, truy xuất, lưu trữ và thực thi công cụ một cách độc lập với prompt"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Tenant isolation must be enforced by infrastructure and authorization at each data access point.",
    "question_vi": "Một kiến ​​trúc sư cấp cao tư vấn cho một trường đại học công lập đang xem xét quy trình làm việc của Claude xoay quanh các yêu cầu về dịch vụ sinh viên và nền tảng quản lý khuôn viên trường với quyền truy cập dữ liệu sinh viên nghiêm ngặt. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 18 trường hợp thử nghiệm đại diện. Một công ty có nhiều người thuê dùng chung dịch vụ AI. Nguyên tắc thiết kế mặt phẳng dữ liệu trung tâm là gì?",
    "explanation_vi": "Việc cách ly đối tượng thuê phải được thực thi bằng cơ sở hạ tầng và ủy quyền tại mỗi điểm truy cập dữ liệu."
  },
  {
    "id": 63,
    "topic": "Solution Design & Architecture (17%)",
    "question": "For the next release, a multinational bank will connect Claude to core banking platform to work with corporate credit applications under auditable financial controls. The workload is assessed in rollout cohort 1 with 16 representative test cases. Which TWO controls are most important for secure and accountable operation of this workflow? (Choose TWO.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "Keep a durable evidence trail linking inputs, proposed outcomes, and applied versions",
        "text_vi": "Lưu giữ dấu vết bằng chứng lâu dài liên kết đầu vào, kết quả đề xuất và các phiên bản áp dụng"
      },
      {
        "key": "B",
        "text": "Define the authoritative decision and approval boundary outside the model",
        "text_vi": "Xác định ranh giới quyết định và phê duyệt có thẩm quyền ngoài mô hình"
      },
      {
        "key": "C",
        "text": "Have the model self-assign unbounded workers",
        "text_vi": "Có mô hình tự phân công công nhân không giới hạn"
      },
      {
        "key": "D",
        "text": "Keep one interactive conversation alive for every form",
        "text_vi": "Duy trì một cuộc trò chuyện mang tính tương tác cho mọi hình thức"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "explanation": "Both controls are necessary: define the authoritative decision and approval boundary outside the model; and keep a durable evidence trail linking inputs, proposed outcomes, and applied versions. Model instructions alone do not substitute for enforceable controls.",
    "question_vi": "Trong lần phát hành tiếp theo, một ngân hàng đa quốc gia sẽ kết nối Claude với nền tảng ngân hàng cốt lõi để hoạt động với các ứng dụng tín dụng doanh nghiệp dưới sự kiểm soát tài chính có thể kiểm toán được. Khối lượng công việc được đánh giá trong nhóm triển khai 1 với 16 trường hợp thử nghiệm đại diện. HAI biện pháp kiểm soát nào là quan trọng nhất để vận hành quy trình công việc này một cách an toàn và có trách nhiệm? (Chọn HAI.)",
    "explanation_vi": "Cả hai biện pháp kiểm soát đều cần thiết: xác định ranh giới phê duyệt và quyết định có thẩm quyền bên ngoài mô hình; và lưu giữ dấu vết bằng chứng lâu dài liên kết các đầu vào, kết quả được đề xuất và các phiên bản được áp dụng. Chỉ hướng dẫn mô hình không thể thay thế cho các biện pháp kiểm soát có thể thực thi được."
  }
];
