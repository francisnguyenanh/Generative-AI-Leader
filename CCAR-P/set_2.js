window.QUIZ_DATA_CCARP_SET_2 = [
  {
    "id": 1,
    "topic": "Integration (19%)",
    "question": "The architecture board of a logistics provider evaluates cross-border shipment exceptions workflows in transport management system, prioritizing intermittent connectivity. The workload is assessed in rollout cohort 2 with 17 representative test cases. A search index contains documents for several customers. How should retrieval enforce boundaries?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Hide unauthorized citations after generation",
        "text_vi": "Ẩn các trích dẫn trái phép sau khi tạo"
      },
      {
        "key": "B",
        "text": "Retrieve everything then ask Claude not to mention unauthorized content",
        "text_vi": "Lấy lại mọi thứ sau đó yêu cầu Claude không đề cập đến nội dung trái phép"
      },
      {
        "key": "C",
        "text": "Use semantic similarity as a permission check",
        "text_vi": "Sử dụng sự tương đồng về ngữ nghĩa làm kiểm tra quyền"
      },
      {
        "key": "D",
        "text": "Apply tenant and document ACL filters before results enter model context",
        "text_vi": "Áp dụng các bộ lọc ACL của đối tượng thuê và tài liệu trước khi kết quả đi vào ngữ cảnh mô hình"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Authorization must precede retrieval exposure and be enforced by trusted search infrastructure.",
    "question_vi": "Hội đồng kiến ​​trúc của nhà cung cấp dịch vụ hậu cần đánh giá các quy trình ngoại lệ đối với lô hàng xuyên biên giới trong hệ thống quản lý vận tải, ưu tiên kết nối không liên tục. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 17 trường hợp thử nghiệm đại diện. Chỉ mục tìm kiếm chứa tài liệu cho một số khách hàng. Việc truy xuất nên thực thi ranh giới như thế nào?",
    "explanation_vi": "Việc ủy quyền phải diễn ra trước khi truy xuất và được thực thi bởi cơ sở hạ tầng tìm kiếm đáng tin cậy."
  },
  {
    "id": 2,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "question": "For the next release, a multinational bank will connect Claude to core banking platform to work with corporate credit applications under auditable financial controls. The workload is assessed in rollout cohort 2 with 17 representative test cases. A team needs structured invoice extraction and downstream software rejects malformed fields. What is the best prompting-plus-validation pattern?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Rely on temperature zero instead of validation",
        "text_vi": "Dựa vào nhiệt độ bằng 0 thay vì xác nhận"
      },
      {
        "key": "B",
        "text": "Provide a precise schema and examples, then validate types and business constraints server-side",
        "text_vi": "Cung cấp lược đồ và ví dụ chính xác, sau đó xác thực các loại và ràng buộc kinh doanh phía máy chủ"
      },
      {
        "key": "C",
        "text": "Trust any valid-looking JSON as financially correct",
        "text_vi": "Tin tưởng mọi JSON có vẻ hợp lệ đều chính xác về mặt tài chính"
      },
      {
        "key": "D",
        "text": "Ask for attractive prose and parse it with assumptions",
        "text_vi": "Yêu cầu văn xuôi hấp dẫn và phân tích nó bằng các giả định"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Schema-oriented generation and server-side validation address different failure modes.",
    "question_vi": "Trong lần phát hành tiếp theo, một ngân hàng đa quốc gia sẽ kết nối Claude với nền tảng ngân hàng cốt lõi để hoạt động với các ứng dụng tín dụng doanh nghiệp dưới sự kiểm soát tài chính có thể kiểm toán được. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 17 trường hợp thử nghiệm đại diện. Một nhóm cần trích xuất hóa đơn có cấu trúc và phần mềm tiếp theo sẽ từ chối các trường không đúng định dạng. Mẫu xác thực nhắc nhở cộng thêm tốt nhất là gì?",
    "explanation_vi": "Việc tạo theo định hướng lược đồ và xác thực phía máy chủ giải quyết các chế độ lỗi khác nhau."
  },
  {
    "id": 3,
    "topic": "Governance, Safety & Risk Management (14%)",
    "question": "A regulated delivery team at an insurance carrier is integrating policy and claim files into claims processing platform; its operational mandate includes regulated evidence retention. The workload is assessed in rollout cohort 2 with 17 representative test cases. A model's output contains sensitive identifiers in logs. What is the strongest preventive control?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Use a longer retention period for sensitive fields",
        "text_vi": "Sử dụng thời gian lưu giữ lâu hơn cho các trường nhạy cảm"
      },
      {
        "key": "B",
        "text": "Store all content indefinitely for debugging",
        "text_vi": "Lưu trữ tất cả nội dung vô thời hạn để gỡ lỗi"
      },
      {
        "key": "C",
        "text": "Classify and redact sensitive fields before telemetry capture and restrict log access",
        "text_vi": "Phân loại và sắp xếp lại các trường nhạy cảm trước khi thu thập dữ liệu đo từ xa và hạn chế quyền truy cập nhật ký"
      },
      {
        "key": "D",
        "text": "Ask the model not to notice identifiers",
        "text_vi": "Yêu cầu người mẫu không để ý đến số nhận dạng"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Privacy-safe observability minimizes data collection and limits access.",
    "question_vi": "Nhóm phân phối được quản lý tại một hãng bảo hiểm đang tích hợp các hồ sơ chính sách và yêu cầu bồi thường vào nền tảng xử lý yêu cầu bồi thường; nhiệm vụ hoạt động của nó bao gồm việc lưu giữ bằng chứng theo quy định. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 17 trường hợp thử nghiệm đại diện. Đầu ra của mô hình chứa các mã định danh nhạy cảm trong nhật ký. Kiểm soát phòng ngừa mạnh nhất là gì?",
    "explanation_vi": "Khả năng quan sát an toàn về quyền riêng tư giúp giảm thiểu việc thu thập dữ liệu và hạn chế quyền truy cập."
  },
  {
    "id": 4,
    "topic": "Developer Productivity & Operational Enablement (7%)",
    "question": "During a production-readiness review at a government procurement office, the architects examine purchase approval records connected to the procurement workflow, with formal reviewer approval. The workload is assessed in rollout cohort 2 with 18 representative test cases. Several developers use coding agents on the same project and results differ. What improves consistency?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Version controlled project instructions, tool configuration, repeatable test commands, and review gates",
        "text_vi": "Hướng dẫn dự án được kiểm soát theo phiên bản, cấu hình công cụ, lệnh kiểm tra có thể lặp lại và cổng đánh giá"
      },
      {
        "key": "B",
        "text": "Force all developers to share the same interactive chat",
        "text_vi": "Buộc tất cả các nhà phát triển chia sẻ cùng một cuộc trò chuyện tương tác"
      },
      {
        "key": "C",
        "text": "Let each agent invent coding standards",
        "text_vi": "Hãy để mỗi đại lý phát minh ra các tiêu chuẩn mã hóa"
      },
      {
        "key": "D",
        "text": "Disable CI to reduce variability",
        "text_vi": "Vô hiệu hóa CI để giảm sự thay đổi"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Shared guardrails and repeatable tests reduce environmental and instruction drift.",
    "question_vi": "Trong quá trình đánh giá mức độ sẵn sàng sản xuất tại văn phòng mua sắm của chính phủ, các kiến ​​trúc sư kiểm tra hồ sơ phê duyệt mua hàng được kết nối với quy trình mua sắm với sự chấp thuận của người đánh giá chính thức. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 18 trường hợp thử nghiệm đại diện. Một số nhà phát triển sử dụng tác nhân mã hóa trên cùng một dự án và kết quả là khác nhau. Điều gì cải thiện tính nhất quán?",
    "explanation_vi": "Các rào chắn chung và các thử nghiệm lặp lại làm giảm sự sai lệch về môi trường và hướng dẫn."
  },
  {
    "id": 5,
    "topic": "Integration (19%)",
    "question": "A senior architect advising a public university considers a Claude workflow around student service inquiries and campus management platform with strict student data access. The workload is assessed in rollout cohort 2 with 18 representative test cases. An agent invokes a slow external CRM and users experience stalled requests. What is the best integration design?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Increase output temperature",
        "text_vi": "Tăng nhiệt độ đầu ra"
      },
      {
        "key": "B",
        "text": "Remove all trace IDs to save latency",
        "text_vi": "Xóa tất cả ID theo dõi để tiết kiệm độ trễ"
      },
      {
        "key": "C",
        "text": "Retry indefinitely without a deadline",
        "text_vi": "Thử lại vô thời hạn mà không có thời hạn"
      },
      {
        "key": "D",
        "text": "Use deadlines, bounded retries with backoff, and a visible fallback or async continuation",
        "text_vi": "Sử dụng thời hạn, số lần thử có giới hạn với thời gian chờ và dự phòng rõ ràng hoặc tiếp tục không đồng bộ"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "External dependencies require timeouts, retry limits, and explicit degradation behavior.",
    "question_vi": "Một kiến ​​trúc sư cấp cao tư vấn cho một trường đại học công lập đang xem xét quy trình làm việc của Claude xoay quanh các yêu cầu về dịch vụ sinh viên và nền tảng quản lý khuôn viên trường với quyền truy cập dữ liệu sinh viên nghiêm ngặt. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 18 trường hợp thử nghiệm đại diện. Một tác nhân gọi CRM bên ngoài chậm và người dùng gặp phải tình trạng yêu cầu bị đình trệ. Thiết kế tích hợp tốt nhất là gì?",
    "explanation_vi": "Các phần phụ thuộc bên ngoài yêu cầu hết thời gian chờ, giới hạn thử lại và hành vi xuống cấp rõ ràng."
  },
  {
    "id": 6,
    "topic": "Solution Design & Architecture (17%)",
    "question": "A cross-functional team at an international retail chain plans to modernize ERP using store-level inventory updates, while maintaining subsecond checkout availability. The workload is assessed in rollout cohort 2 with 16 representative test cases. A company wants research and report-writing assistants to collaborate, but debugging is difficult. What is the first architectural simplification?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Add agents until each has fewer than ten prompt lines",
        "text_vi": "Thêm nhân viên hỗ trợ cho đến khi mỗi nhân viên có ít hơn 10 dòng nhắc nhở"
      },
      {
        "key": "B",
        "text": "Remove all traces to reduce noise",
        "text_vi": "Xóa tất cả dấu vết để giảm tiếng ồn"
      },
      {
        "key": "C",
        "text": "Define separate tool contracts, an orchestrator, and observable handoffs only where role specialization adds value",
        "text_vi": "Chỉ xác định các hợp đồng công cụ riêng biệt, người điều phối và chuyển giao có thể quan sát được khi việc chuyên môn hóa vai trò tăng thêm giá trị"
      },
      {
        "key": "D",
        "text": "Allow agents to pass unrestricted free-form commands",
        "text_vi": "Cho phép các tác nhân truyền các lệnh dạng tự do không hạn chế"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Multi-agent complexity is justified only when responsibilities and handoffs are explicit and measurable.",
    "question_vi": "Một nhóm đa chức năng tại một chuỗi bán lẻ quốc tế có kế hoạch hiện đại hóa ERP bằng cách sử dụng các bản cập nhật hàng tồn kho ở cấp độ cửa hàng, trong khi vẫn duy trì khả năng thanh toán dưới giây. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 16 trường hợp thử nghiệm đại diện. Một công ty muốn các trợ lý nghiên cứu và viết báo cáo cộng tác nhưng việc gỡ lỗi rất khó khăn. Sự đơn giản hóa kiến ​​trúc đầu tiên là gì?",
    "explanation_vi": "Độ phức tạp đa tác nhân chỉ được chứng minh khi trách nhiệm và sự chuyển giao rõ ràng và có thể đo lường được."
  },
  {
    "id": 7,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "question": "The architecture board of a logistics provider evaluates cross-border shipment exceptions workflows in transport management system, prioritizing intermittent connectivity. The workload is assessed in rollout cohort 2 with 18 representative test cases. A 200-page handbook crowds out recent conversation context. What should context engineering do?",
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
    "question_vi": "Hội đồng kiến ​​trúc của nhà cung cấp dịch vụ hậu cần đánh giá các quy trình ngoại lệ đối với lô hàng xuyên biên giới trong hệ thống quản lý vận tải, ưu tiên kết nối không liên tục. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 18 trường hợp thử nghiệm đại diện. Cuốn sổ tay dày 200 trang giới thiệu bối cảnh cuộc trò chuyện gần đây. Kỹ thuật bối cảnh nên làm gì?",
    "explanation_vi": "Việc quản lý bối cảnh có căn cứ có liên quan sẽ an toàn hơn việc lấp đầy cửa sổ một cách bừa bãi."
  },
  {
    "id": 8,
    "topic": "Governance, Safety & Risk Management (14%)",
    "question": "At a Japanese manufacturing group, an AI pilot processes quality-inspection records from the factory MES; mandatory operator sign-off is a non-negotiable requirement. The workload is assessed in rollout cohort 2 with 21 representative test cases. A model provides an answer with a fabricated citation. What should the app do before sharing regulated advice?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Add a footnote saying 'AI generated' and assume that is sufficient",
        "text_vi": "Thêm chú thích có nội dung 'AI được tạo' và cho rằng thế là đủ"
      },
      {
        "key": "B",
        "text": "Suppress the answer's uncertainty score and send it",
        "text_vi": "Loại bỏ điểm không chắc chắn của câu trả lời và gửi nó"
      },
      {
        "key": "C",
        "text": "Accept citations that look plausible",
        "text_vi": "Chấp nhận các trích dẫn có vẻ hợp lý"
      },
      {
        "key": "D",
        "text": "Validate citation identifiers and support against pinned source passages",
        "text_vi": "Xác thực số nhận dạng trích dẫn và hỗ trợ đối với các đoạn nguồn được ghim"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Citation integrity is a verifiable application responsibility.",
    "question_vi": "Tại một nhóm sản xuất Nhật Bản, một dự án thí điểm AI (AI pilot) xử lý hồ sơ kiểm tra chất lượng từ MES của nhà máy; việc ký duyệt (sign-off) bắt buộc của nhà điều hành là một yêu cầu không thể thương lượng. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 21 trường hợp thử nghiệm đại diện. Một mô hình đưa ra câu trả lời bằng một trích dẫn bịa đặt. Ứng dụng nên làm gì trước khi chia sẻ lời khuyên được quản lý?",
    "explanation_vi": "Tính toàn vẹn của trích dẫn là trách nhiệm của ứng dụng có thể kiểm chứng được."
  },
  {
    "id": 9,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "question": "A regulated delivery team at an insurance carrier is integrating policy and claim files into claims processing platform; its operational mandate includes regulated evidence retention. The workload is assessed in rollout cohort 2 with 20 representative test cases. A classification task fails on unusual category boundaries. Which first iteration is most defensible?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Change the system prompt every request at random",
        "text_vi": "Thay đổi system prompt một cách ngẫu nhiên theo mọi yêu cầu"
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
        "text": "Remove ambiguous categories from the output without stakeholder approval",
        "text_vi": "Xóa các danh mục mơ hồ khỏi đầu ra mà không có sự chấp thuận của các bên liên quan"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Few-shot examples and regression tests can clarify boundaries while detecting unintended changes.",
    "question_vi": "Nhóm phân phối được quản lý tại một hãng bảo hiểm đang tích hợp các hồ sơ chính sách và yêu cầu bồi thường vào nền tảng xử lý yêu cầu bồi thường; nhiệm vụ hoạt động của nó bao gồm việc lưu giữ bằng chứng theo quy định. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 20 trường hợp thử nghiệm đại diện. Nhiệm vụ phân loại không thành công trên ranh giới danh mục bất thường. Lần lặp đầu tiên nào có thể phòng thủ tốt nhất?",
    "explanation_vi": "Các ví dụ ngắn gọn và kiểm tra hồi quy có thể làm rõ ranh giới đồng thời phát hiện những thay đổi ngoài ý muốn."
  },
  {
    "id": 10,
    "topic": "Governance, Safety & Risk Management (14%)",
    "question": "At scale, a B2B software vendor expects Claude to support customer support platform users working with support and incident tickets, without compromising multi-tenant isolation. The workload is assessed in rollout cohort 2 with 19 representative test cases. Which TWO controls are most important for secure and accountable operation of this workflow? (Choose TWO.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "Retain auditable evidence of reviews, exceptions, and privileged actions",
        "text_vi": "Giữ lại bằng chứng có thể kiểm tra được về các đánh giá, ngoại lệ và hành động đặc quyền"
      },
      {
        "key": "B",
        "text": "Only a numeric confidence score",
        "text_vi": "Chỉ có điểm tin cậy bằng số"
      },
      {
        "key": "C",
        "text": "Enforce access-control and data-handling policies independently of model prompts",
        "text_vi": "Thực thi các chính sách kiểm soát truy cập và xử lý dữ liệu độc lập với prompt mô hình"
      },
      {
        "key": "D",
        "text": "Only the prompt title",
        "text_vi": "Chỉ có tiêu đề gợi ý"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "Both controls are necessary: enforce access-control and data-handling policies independently of model prompts; and retain auditable evidence of reviews, exceptions, and privileged actions. Model instructions alone do not substitute for enforceable controls.",
    "question_vi": "Ở quy mô lớn, một nhà cung cấp phần mềm B2B kỳ vọng Claude sẽ hỗ trợ người dùng nền tảng hỗ trợ khách hàng làm việc với các phiếu hỗ trợ và sự cố mà không ảnh hưởng đến sự cô lập của nhiều bên thuê. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 19 trường hợp thử nghiệm đại diện. HAI biện pháp kiểm soát nào là quan trọng nhất để vận hành quy trình công việc này một cách an toàn và có trách nhiệm? (Chọn HAI.)",
    "explanation_vi": "Cả hai biện pháp kiểm soát đều cần thiết: thực thi các chính sách kiểm soát truy cập và xử lý dữ liệu một cách độc lập với prompt của mô hình; và lưu giữ bằng chứng có thể kiểm tra được về các đánh giá, ngoại lệ và hành động đặc quyền. Chỉ hướng dẫn mô hình không thể thay thế cho các biện pháp kiểm soát có thể thực thi được."
  },
  {
    "id": 11,
    "topic": "Solution Design & Architecture (17%)",
    "question": "At a Japanese manufacturing group, an AI pilot processes quality-inspection records from the factory MES; mandatory operator sign-off is a non-negotiable requirement. The workload is assessed in rollout cohort 2 with 25 representative test cases. A team proposes five cooperating agents for a simple FAQ assistant. What is the strongest architecture review response?",
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
        "text": "Approve multi-agent architecture because more agents always improve quality",
        "text_vi": "Phê duyệt kiến trúc đa tác nhân vì nhiều tác nhân luôn cải thiện chất lượng"
      },
      {
        "key": "D",
        "text": "Make the five agents share administrator credentials",
        "text_vi": "Làm cho năm đại lý chia sẻ thông tin đăng nhập của quản trị viên"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Architecture choice should be driven by measured requirements, not perceived sophistication.",
    "question_vi": "Tại một nhóm sản xuất Nhật Bản, một dự án thí điểm AI (AI pilot) xử lý hồ sơ kiểm tra chất lượng từ MES của nhà máy; việc ký duyệt (sign-off) bắt buộc của nhà điều hành là một yêu cầu không thể thương lượng. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 25 trường hợp thử nghiệm đại diện. Một nhóm đề xuất năm tác nhân hợp tác cho một trợ lý Câu hỏi thường gặp đơn giản. Phản hồi đánh giá kiến ​​trúc mạnh mẽ nhất là gì?",
    "explanation_vi": "Sự lựa chọn kiến trúc nên được thúc đẩy bởi các yêu cầu được đo lường, chứ không phải sự phức tạp được cảm nhận."
  },
  {
    "id": 12,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "question": "During a production-readiness review at a government procurement office, the architects examine purchase approval records connected to the procurement workflow, with formal reviewer approval. The workload is assessed in rollout cohort 2 with 23 representative test cases. Two Claude models differ in latency and context handling. What is the right production selection method?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Choose the model whose marketing page has the longest feature list",
        "text_vi": "Chọn mô hình có trang tiếp thị có danh sách tính năng dài nhất"
      },
      {
        "key": "B",
        "text": "Choose by parameter count alone",
        "text_vi": "Chọn chỉ theo số tham số"
      },
      {
        "key": "C",
        "text": "Choose randomly per deployment",
        "text_vi": "Chọn ngẫu nhiên cho mỗi lần triển khai"
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
    "question_vi": "Trong quá trình đánh giá mức độ sẵn sàng sản xuất tại văn phòng mua sắm của chính phủ, các kiến ​​trúc sư kiểm tra hồ sơ phê duyệt mua hàng được kết nối với quy trình mua sắm với sự chấp thuận của người đánh giá chính thức. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 23 trường hợp thử nghiệm đại diện. Hai mô hình Claude khác nhau về độ trễ và cách xử lý ngữ cảnh. Phương pháp lựa chọn sản xuất phù hợp là gì?",
    "explanation_vi": "Đánh giá khối lượng công việc thực tế là cần thiết để lựa chọn mô hình và cấu hình."
  },
  {
    "id": 13,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "question": "A cross-functional team at an international retail chain plans to modernize ERP using store-level inventory updates, while maintaining subsecond checkout availability. The workload is assessed in rollout cohort 2 with 21 representative test cases. An AI solution is moving from proof of concept to live operations. What should the gate review include?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Only approval from the model itself",
        "text_vi": "Chỉ có sự chấp thuận từ chính mô hình"
      },
      {
        "key": "B",
        "text": "Acceptance metrics, monitoring, security, ownership, rollback, and documented risks",
        "text_vi": "Số liệu chấp nhận, giám sát, bảo mật, quyền sở hữu, khôi phục và rủi ro được ghi lại"
      },
      {
        "key": "C",
        "text": "Only a successful demo recording",
        "text_vi": "Chỉ ghi bản demo thành công"
      },
      {
        "key": "D",
        "text": "Only the number of API calls made",
        "text_vi": "Chỉ số lượng lệnh gọi API được thực hiện"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Production handoff needs measured readiness and accountable controls.",
    "question_vi": "Một nhóm đa chức năng tại một chuỗi bán lẻ quốc tế có kế hoạch hiện đại hóa ERP bằng cách sử dụng các bản cập nhật hàng tồn kho ở cấp độ cửa hàng, trong khi vẫn duy trì khả năng thanh toán dưới giây. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 21 trường hợp thử nghiệm đại diện. Một giải pháp AI đang chuyển từ bằng chứng về khái niệm sang hoạt động trực tiếp. Việc xem xét cổng nên bao gồm những gì?",
    "explanation_vi": "Việc bàn giao sản xuất cần có sự sẵn sàng được đo lường và các biện pháp kiểm soát có trách nhiệm."
  },
  {
    "id": 14,
    "topic": "Governance, Safety & Risk Management (14%)",
    "question": "During a production-readiness review at a government procurement office, the architects examine purchase approval records connected to the procurement workflow, with formal reviewer approval. The workload is assessed in rollout cohort 2 with 20 representative test cases. A team tests an agent against malicious documents. What would make the red-team exercise meaningful?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Test cross-boundary instruction attacks and verify that enforced policies block privileged actions",
        "text_vi": "Kiểm tra các cuộc tấn công hướng dẫn xuyên biên giới và xác minh rằng các chính sách được thực thi sẽ chặn các hành động đặc quyền"
      },
      {
        "key": "B",
        "text": "Evaluate only grammatical correctness",
        "text_vi": "Chỉ đánh giá tính đúng ngữ pháp"
      },
      {
        "key": "C",
        "text": "Exclude realistic tool and credential access from tests",
        "text_vi": "Loại trừ công cụ thực tế và quyền truy cập thông tin xác thực khỏi các bài kiểm tra"
      },
      {
        "key": "D",
        "text": "Ask the agent whether it would be safe",
        "text_vi": "Hỏi đại lý xem nó có an toàn không"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Threat-informed tests must exercise actual trust boundaries and enforcement mechanisms.",
    "question_vi": "Trong quá trình đánh giá mức độ sẵn sàng sản xuất tại văn phòng mua sắm của chính phủ, các kiến ​​trúc sư kiểm tra hồ sơ phê duyệt mua hàng được kết nối với quy trình mua sắm với sự chấp thuận của người đánh giá chính thức. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 20 trường hợp thử nghiệm đại diện. Một nhóm kiểm tra một tác nhân trước các tài liệu độc hại. Điều gì làm cho cuộc tập trận của đội đỏ có ý nghĩa?",
    "explanation_vi": "Các thử nghiệm nhận biết mối đe dọa phải thực hiện các ranh giới tin cậy thực tế và cơ chế thực thi."
  },
  {
    "id": 15,
    "topic": "Solution Design & Architecture (17%)",
    "question": "The architecture board of a logistics provider evaluates cross-border shipment exceptions workflows in transport management system, prioritizing intermittent connectivity. The workload is assessed in rollout cohort 2 with 19 representative test cases. Which TWO controls are most important for secure and accountable operation of this workflow? (Choose TWO.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "A prompt that asks Claude to remember all prior decisions",
        "text_vi": "prompt yêu cầu Claude ghi nhớ tất cả các quyết định trước đó"
      },
      {
        "key": "B",
        "text": "A dashboard showing only aggregate token usage",
        "text_vi": "Trang tổng quan chỉ hiển thị mức sử dụng mã thông báo tổng hợp"
      },
      {
        "key": "C",
        "text": "Define the authoritative decision and approval boundary outside the model",
        "text_vi": "Xác định ranh giới quyết định và phê duyệt có thẩm quyền ngoài mô hình"
      },
      {
        "key": "D",
        "text": "Keep a durable evidence trail linking inputs, proposed outcomes, and applied versions",
        "text_vi": "Lưu giữ dấu vết bằng chứng lâu dài liên kết đầu vào, kết quả đề xuất và các phiên bản áp dụng"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "explanation": "Both controls are necessary: define the authoritative decision and approval boundary outside the model; and keep a durable evidence trail linking inputs, proposed outcomes, and applied versions. Model instructions alone do not substitute for enforceable controls.",
    "question_vi": "Hội đồng kiến ​​trúc của nhà cung cấp dịch vụ hậu cần đánh giá các quy trình ngoại lệ đối với lô hàng xuyên biên giới trong hệ thống quản lý vận tải, ưu tiên kết nối không liên tục. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 19 trường hợp thử nghiệm đại diện. HAI biện pháp kiểm soát nào là quan trọng nhất để vận hành quy trình công việc này một cách an toàn và có trách nhiệm? (Chọn HAI.)",
    "explanation_vi": "Cả hai biện pháp kiểm soát đều cần thiết: xác định ranh giới phê duyệt và quyết định có thẩm quyền bên ngoài mô hình; và lưu giữ dấu vết bằng chứng lâu dài liên kết các đầu vào, kết quả được đề xuất và các phiên bản được áp dụng. Chỉ hướng dẫn mô hình không thể thay thế cho các biện pháp kiểm soát có thể thực thi được."
  },
  {
    "id": 16,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "question": "A pilot retrospective at an energy utility identifies concerns in asset operations platform processing maintenance incident reports, where high operational safety impact applies. The workload is assessed in rollout cohort 2 with 21 representative test cases. A team uses long conversation histories and costs rise. What is a safe summarization strategy?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Remove tool results but keep unsupported model inferences",
        "text_vi": "Xóa kết quả của công cụ nhưng giữ lại các suy luận mô hình không được hỗ trợ"
      },
      {
        "key": "B",
        "text": "Treat compressed summaries as immutable truth without validation",
        "text_vi": "Hãy coi các bản tóm tắt nén như một sự thật bất di bất dịch mà không cần xác nhận"
      },
      {
        "key": "C",
        "text": "Discard all prior user constraints",
        "text_vi": "Loại bỏ tất cả các ràng buộc của người dùng trước đó"
      },
      {
        "key": "D",
        "text": "Summarize older interactions while preserving decisions, constraints, and exact pointers to authoritative sources",
        "text_vi": "Tóm tắt các tương tác cũ hơn trong khi vẫn giữ nguyên các quyết định, ràng buộc và gợi ý chính xác đến các nguồn đáng tin cậy"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Compaction should preserve task-critical state and re-fetch source-of-truth details when needed.",
    "question_vi": "Một cuộc hồi cứu thí điểm tại một công ty năng lượng xác định các mối lo ngại trong nền tảng vận hành tài sản xử lý các báo cáo sự cố bảo trì, trong đó áp dụng tác động an toàn vận hành cao. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 21 trường hợp thử nghiệm đại diện. Một nhóm sử dụng lịch sử hội thoại dài và chi phí sẽ tăng lên. Chiến lược tóm tắt an toàn là gì?",
    "explanation_vi": "Việc nén phải duy trì trạng thái quan trọng của nhiệm vụ và tìm nạp lại các chi tiết nguồn xác thực khi cần."
  },
  {
    "id": 17,
    "topic": "Solution Design & Architecture (17%)",
    "question": "A regulated delivery team at an insurance carrier is integrating policy and claim files into claims processing platform; its operational mandate includes regulated evidence retention. The workload is assessed in rollout cohort 2 with 21 representative test cases. A logistics assistant must choose between a fixed route optimizer and an LLM for shortest-path calculations. What is best?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Ask Claude to mentally calculate every shortest path",
        "text_vi": "Yêu cầu Claude tính nhẩm mọi con đường ngắn nhất"
      },
      {
        "key": "B",
        "text": "Train a language model on route names instead of using an optimizer",
        "text_vi": "Huấn luyện mô hình ngôn ngữ về tên tuyến đường thay vì sử dụng trình tối ưu hóa"
      },
      {
        "key": "C",
        "text": "Use prompt temperature zero as proof of optimality",
        "text_vi": "Sử dụng nhiệt độ 0 ngay lập tức làm bằng chứng về sự tối ưu"
      },
      {
        "key": "D",
        "text": "Use a deterministic optimization engine for route computation and Claude for user-facing interpretation",
        "text_vi": "Sử dụng công cụ tối ưu hóa xác định để tính toán tuyến đường và Claude để diễn giải hướng tới người dùng"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Numerical optimization needs an algorithm with explicit constraints; language generation is a separate responsibility.",
    "question_vi": "Nhóm phân phối được quản lý tại một hãng bảo hiểm đang tích hợp các hồ sơ chính sách và yêu cầu bồi thường vào nền tảng xử lý yêu cầu bồi thường; nhiệm vụ hoạt động của nó bao gồm việc lưu giữ bằng chứng theo quy định. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 21 trường hợp thử nghiệm đại diện. Trợ lý hậu cần phải chọn giữa trình tối ưu hóa tuyến đường cố định và LLM để tính toán đường đi ngắn nhất. Điều gì là tốt nhất?",
    "explanation_vi": "Tối ưu hóa số cần một thuật toán có ràng buộc rõ ràng; việc tạo ra ngôn ngữ là một trách nhiệm riêng biệt."
  },
  {
    "id": 18,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "question": "During a production-readiness review at a government procurement office, the architects examine purchase approval records connected to the procurement workflow, with formal reviewer approval. The workload is assessed in rollout cohort 2 with 21 representative test cases. An online A/B test shows higher conversion but also more unapproved external actions. What should leadership do?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Treat unsafe-action rate as a release guardrail and halt or roll back the experiment",
        "text_vi": "Coi tỷ lệ hành động không an toàn như một rào cản giải phóng và tạm dừng hoặc lùi thử nghiệm"
      },
      {
        "key": "B",
        "text": "Ship because conversion increased",
        "text_vi": "Giao hàng vì chuyển đổi tăng lên"
      },
      {
        "key": "C",
        "text": "Evaluate only the most recent ten requests",
        "text_vi": "Chỉ đánh giá mười yêu cầu gần đây nhất"
      },
      {
        "key": "D",
        "text": "Ignore unapproved actions if no complaint was filed",
        "text_vi": "Bỏ qua các hành động không được chấp thuận nếu không có khiếu nại nào được gửi"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Safety and authorization guardrails constrain business metric optimization.",
    "question_vi": "Trong quá trình đánh giá mức độ sẵn sàng sản xuất tại văn phòng mua sắm của chính phủ, các kiến ​​trúc sư kiểm tra hồ sơ phê duyệt mua hàng được kết nối với quy trình mua sắm với sự chấp thuận của người đánh giá chính thức. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 21 trường hợp thử nghiệm đại diện. Thử nghiệm A/B trực tuyến cho thấy tỷ lệ chuyển đổi cao hơn nhưng cũng có nhiều hành động bên ngoài không được phê duyệt hơn. Lãnh đạo nên làm gì?",
    "explanation_vi": "Các biện pháp bảo vệ an toàn và ủy quyền hạn chế việc tối ưu hóa số liệu kinh doanh."
  },
  {
    "id": 19,
    "topic": "Integration (19%)",
    "question": "At scale, a B2B software vendor expects Claude to support customer support platform users working with support and incident tickets, without compromising multi-tenant isolation. The workload is assessed in rollout cohort 2 with 21 representative test cases. An enterprise API has a per-minute quota. How should the assistant workload respond to spikes?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Create unlimited concurrent calls until the API rejects them",
        "text_vi": "Tạo các cuộc gọi đồng thời không giới hạn cho đến khi API từ chối chúng"
      },
      {
        "key": "B",
        "text": "Use rate limiting, queues, backpressure, and bounded concurrency",
        "text_vi": "Sử dụng giới hạn tốc độ, hàng đợi, áp suất ngược và đồng thời giới hạn"
      },
      {
        "key": "C",
        "text": "Ask the model to use fewer words and ignore request rate",
        "text_vi": "Yêu cầu người mẫu sử dụng ít từ hơn và bỏ qua tỷ lệ yêu cầu"
      },
      {
        "key": "D",
        "text": "Retry every rejected call instantly without jitter",
        "text_vi": "Thử lại mọi cuộc gọi bị từ chối ngay lập tức mà không bị giật hình"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Quotas require explicit traffic shaping and safe retry policies.",
    "question_vi": "Ở quy mô lớn, một nhà cung cấp phần mềm B2B kỳ vọng Claude sẽ hỗ trợ người dùng nền tảng hỗ trợ khách hàng làm việc với các phiếu hỗ trợ và sự cố mà không ảnh hưởng đến sự cô lập của nhiều bên thuê. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 21 trường hợp thử nghiệm đại diện. API doanh nghiệp có hạn ngạch mỗi phút. Khối lượng công việc của trợ lý sẽ phản ứng như thế nào khi có mức tăng đột biến?",
    "explanation_vi": "Hạn ngạch yêu cầu định hình lưu lượng truy cập rõ ràng và chính sách thử lại an toàn."
  },
  {
    "id": 20,
    "topic": "Integration (19%)",
    "question": "At a Japanese manufacturing group, an AI pilot processes quality-inspection records from the factory MES; mandatory operator sign-off is a non-negotiable requirement. The workload is assessed in rollout cohort 2 with 23 representative test cases. An outbound tool receives a URL chosen from an untrusted document. What should the executor enforce?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Grant model access to private network metadata endpoints",
        "text_vi": "Cấp quyền truy cập mô hình vào các điểm cuối siêu dữ liệu mạng riêng"
      },
      {
        "key": "B",
        "text": "Allowlisted destinations and network egress controls to reduce SSRF and exfiltration risk",
        "text_vi": "Các đích đến trong danh sách được phép và các biện pháp kiểm soát lối ra mạng để giảm thiểu rủi ro SSRF và đánh cắp"
      },
      {
        "key": "C",
        "text": "Fetch every URL if it is inside a PDF",
        "text_vi": "Tìm nạp mọi URL nếu nó nằm trong tệp PDF"
      },
      {
        "key": "D",
        "text": "Use a longer tool description instead of network policies",
        "text_vi": "Sử dụng mô tả công cụ dài hơn thay vì chính sách mạng"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Untrusted URLs must pass destination validation and egress policy.",
    "question_vi": "Tại một nhóm sản xuất Nhật Bản, một dự án thí điểm AI (AI pilot) xử lý hồ sơ kiểm tra chất lượng từ MES của nhà máy; việc ký duyệt (sign-off) bắt buộc của nhà điều hành là một yêu cầu không thể thương lượng. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 23 trường hợp thử nghiệm đại diện. Công cụ gửi đi sẽ nhận được URL được chọn từ một tài liệu không đáng tin cậy. Người thi hành nên thi hành những gì?",
    "explanation_vi": "Các URL không đáng tin cậy phải vượt qua chính sách xác thực đích và đầu ra."
  },
  {
    "id": 21,
    "topic": "Governance, Safety & Risk Management (14%)",
    "question": "An incident review at a regional hospital network focuses on AI handling of patient discharge letters in the clinical records system; stakeholders insist on strict clinical authorization. The workload is assessed in rollout cohort 2 with 23 representative test cases. An autonomous agent is allowed to delete cloud resources. What reduces the blast radius?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Use least-privilege roles, isolated environments, explicit approvals, and recoverability controls",
        "text_vi": "Sử dụng các vai trò có ít đặc quyền nhất, môi trường biệt lập, phê duyệt rõ ràng và kiểm soát khả năng phục hồi"
      },
      {
        "key": "B",
        "text": "Disable all operation logs",
        "text_vi": "Vô hiệu hóa tất cả nhật ký hoạt động"
      },
      {
        "key": "C",
        "text": "Rely on a system prompt saying 'do not delete important resources'",
        "text_vi": "Dựa vào prompt của hệ thống với nội dung 'không xóa các tài nguyên quan trọng'"
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
    "question_vi": "Đánh giá sự cố tại mạng lưới bệnh viện khu vực tập trung vào việc xử lý AI thư xuất viện của bệnh nhân trong hệ thống hồ sơ lâm sàng; các bên liên quan nhấn mạnh vào sự cho phép lâm sàng nghiêm ngặt. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 23 trường hợp thử nghiệm đại diện. Một tác nhân tự trị được phép xóa tài nguyên đám mây. Điều gì làm giảm bán kính vụ nổ?",
    "explanation_vi": "Khả năng phá hủy cần cả giới hạn cấp phép và chiến lược phục hồi."
  },
  {
    "id": 22,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "question": "At scale, a B2B software vendor expects Claude to support customer support platform users working with support and incident tickets, without compromising multi-tenant isolation. The workload is assessed in rollout cohort 2 with 18 representative test cases. An architecture review board asks why the team chose RAG instead of fine-tuning. What is the best explanation?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Say RAG is always superior to all alternatives",
        "text_vi": "Nói RAG luôn vượt trội hơn tất cả các lựa chọn thay thế"
      },
      {
        "key": "B",
        "text": "Show only a prompt screenshot",
        "text_vi": "Chỉ hiển thị ảnh chụp màn hình nhanh chóng"
      },
      {
        "key": "C",
        "text": "State that fine-tuning cannot ever work",
        "text_vi": "Nói rõ rằng việc tinh chỉnh (fine-tuning) không bao giờ có thể hoạt động được"
      },
      {
        "key": "D",
        "text": "Compare freshness, provenance, maintenance, cost, security, and measured task quality",
        "text_vi": "So sánh độ mới, xuất xứ, bảo trì, chi phí, bảo mật và chất lượng nhiệm vụ được đo lường"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Stakeholder decisions require a contextual evaluation of alternatives.",
    "question_vi": "Ở quy mô lớn, một nhà cung cấp phần mềm B2B kỳ vọng Claude sẽ hỗ trợ người dùng nền tảng hỗ trợ khách hàng làm việc với các phiếu hỗ trợ và sự cố mà không ảnh hưởng đến sự cô lập của nhiều bên thuê. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 18 trường hợp thử nghiệm đại diện. Hội đồng đánh giá kiến ​​trúc hỏi tại sao nhóm lại chọn RAG thay vì tinh chỉnh (fine-tuning). Giải thích tốt nhất là gì?",
    "explanation_vi": "Các quyết định của các bên liên quan đòi hỏi phải đánh giá theo ngữ cảnh của các lựa chọn thay thế."
  },
  {
    "id": 23,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "question": "An incident review at a regional hospital network focuses on AI handling of patient discharge letters in the clinical records system; stakeholders insist on strict clinical authorization. The workload is assessed in rollout cohort 2 with 22 representative test cases. A procurement leader wants a fixed completion date despite unknown document quality. What is the best response?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Hide dependencies from the project plan",
        "text_vi": "Ẩn các phần phụ thuộc khỏi kế hoạch dự án"
      },
      {
        "key": "B",
        "text": "Propose staged milestones with discovery findings, pilot criteria, assumptions, and contingency triggers",
        "text_vi": "Đề xuất các mốc quan trọng theo giai đoạn với các phát hiện khám phá, tiêu chí thí điểm, giả định và các yếu tố kích hoạt dự phòng"
      },
      {
        "key": "C",
        "text": "Remove testing to fit the schedule",
        "text_vi": "Loại bỏ kiểm tra để phù hợp với lịch trình"
      },
      {
        "key": "D",
        "text": "Guarantee timing without inspecting inputs",
        "text_vi": "Đảm bảo thời gian mà không cần kiểm tra đầu vào"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Transparent milestone planning makes uncertainty and dependencies actionable.",
    "question_vi": "Đánh giá sự cố tại mạng lưới bệnh viện khu vực tập trung vào việc xử lý AI thư xuất viện của bệnh nhân trong hệ thống hồ sơ lâm sàng; các bên liên quan nhấn mạnh vào sự cho phép lâm sàng nghiêm ngặt. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 22 trường hợp thử nghiệm đại diện. Người lãnh đạo thu mua muốn có ngày hoàn thành cố định mặc dù chất lượng tài liệu không rõ. Phản ứng tốt nhất là gì?",
    "explanation_vi": "Việc lập kế hoạch cho các mốc quan trọng minh bạch giúp cho sự không chắc chắn và sự phụ thuộc có thể thực hiện được."
  },
  {
    "id": 24,
    "topic": "Integration (19%)",
    "question": "A regulated delivery team at an insurance carrier is integrating policy and claim files into claims processing platform; its operational mandate includes regulated evidence retention. The workload is assessed in rollout cohort 2 with 19 representative test cases. Which TWO controls are most important for secure and accountable operation of this workflow? (Choose TWO.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "Enforce least-privilege authorization in the tool-execution service",
        "text_vi": "Thực thi ủy quyền có đặc quyền tối thiểu trong dịch vụ thực thi công cụ"
      },
      {
        "key": "B",
        "text": "Displaying a pending action state",
        "text_vi": "Hiển thị trạng thái hành động đang chờ xử lý"
      },
      {
        "key": "C",
        "text": "Showing incremental non-binding text",
        "text_vi": "Hiển thị văn bản không ràng buộc gia tăng"
      },
      {
        "key": "D",
        "text": "Record correlated, redacted audit evidence for every external action",
        "text_vi": "Ghi lại bằng chứng kiểm toán tương quan, được biên tập lại cho mọi hành động bên ngoài"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "explanation": "Both controls are necessary: enforce least-privilege authorization in the tool-execution service; and record correlated, redacted audit evidence for every external action. Model instructions alone do not substitute for enforceable controls.",
    "question_vi": "Nhóm phân phối được quản lý tại một hãng bảo hiểm đang tích hợp các hồ sơ chính sách và yêu cầu bồi thường vào nền tảng xử lý yêu cầu bồi thường; nhiệm vụ hoạt động của nó bao gồm việc lưu giữ bằng chứng theo quy định. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 19 trường hợp thử nghiệm đại diện. HAI biện pháp kiểm soát nào là quan trọng nhất để vận hành quy trình công việc này một cách an toàn và có trách nhiệm? (Chọn HAI.)",
    "explanation_vi": "Cả hai biện pháp kiểm soát đều cần thiết: thực thi ủy quyền có đặc quyền tối thiểu trong dịch vụ thực thi công cụ; và ghi lại bằng chứng kiểm toán tương quan, được biên tập lại cho mọi hành động bên ngoài. Chỉ hướng dẫn mô hình không thể thay thế cho các biện pháp kiểm soát có thể thực thi được."
  },
  {
    "id": 25,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "question": "For the next release, a multinational bank will connect Claude to core banking platform to work with corporate credit applications under auditable financial controls. The workload is assessed in rollout cohort 2 with 25 representative test cases. A retrieval team claims improvement based on top-k recall, but answer quality is unchanged. What should be examined?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Declare success based on retrieval metric alone",
        "text_vi": "Tuyên bố thành công chỉ dựa trên số liệu truy xuất"
      },
      {
        "key": "B",
        "text": "Remove citations from generated answers",
        "text_vi": "Xóa trích dẫn khỏi câu trả lời được tạo"
      },
      {
        "key": "C",
        "text": "Increase chunk count without checking relevance",
        "text_vi": "Tăng số lượng đoạn mà không kiểm tra mức độ liên quan"
      },
      {
        "key": "D",
        "text": "Evaluate downstream grounded answer quality and whether the retrieved passages are usable",
        "text_vi": "Đánh giá chất lượng câu trả lời có căn cứ ở phía dưới và liệu các đoạn được truy xuất có thể sử dụng được hay không"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Retrieval metrics are intermediate proxies, not substitutes for end-task quality.",
    "question_vi": "Trong lần phát hành tiếp theo, một ngân hàng đa quốc gia sẽ kết nối Claude với nền tảng ngân hàng cốt lõi để hoạt động với các ứng dụng tín dụng doanh nghiệp dưới sự kiểm soát tài chính có thể kiểm toán được. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 25 trường hợp thử nghiệm đại diện. Nhóm truy xuất tuyên bố cải thiện dựa trên việc thu hồi top-k, nhưng chất lượng câu trả lời không thay đổi. Cần kiểm tra những gì?",
    "explanation_vi": "Số liệu truy xuất là proxy trung gian, không thay thế cho chất lượng nhiệm vụ cuối."
  },
  {
    "id": 26,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "question": "For the next release, a multinational bank will connect Claude to core banking platform to work with corporate credit applications under auditable financial controls. The workload is assessed in rollout cohort 2 with 23 representative test cases. An AI capability has a valuable but costly human approval step. How should leadership decide whether to automate it?",
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
        "text": "Quantify risk, review burden, exception rate, and control effectiveness before changing authority",
        "text_vi": "Định lượng rủi ro, gánh nặng xem xét, tỷ lệ ngoại lệ và hiệu quả kiểm soát trước khi thay đổi thẩm quyền"
      },
      {
        "key": "D",
        "text": "Use model confidence as the only threshold",
        "text_vi": "Sử dụng độ tin cậy của mô hình làm ngưỡng duy nhất"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Automation decisions require measurable risk-adjusted trade-offs.",
    "question_vi": "Trong lần phát hành tiếp theo, một ngân hàng đa quốc gia sẽ kết nối Claude với nền tảng ngân hàng cốt lõi để hoạt động với các ứng dụng tín dụng doanh nghiệp dưới sự kiểm soát tài chính có thể kiểm toán được. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 23 trường hợp thử nghiệm đại diện. Khả năng AI có bước phê duyệt có giá trị nhưng tốn kém của con người. Lãnh đạo nên quyết định có nên tự động hóa nó hay không?",
    "explanation_vi": "Các quyết định tự động hóa đòi hỏi sự đánh đổi điều chỉnh rủi ro có thể đo lường được."
  },
  {
    "id": 27,
    "topic": "Integration (19%)",
    "question": "A pilot retrospective at an energy utility identifies concerns in asset operations platform processing maintenance incident reports, where high operational safety impact applies. The workload is assessed in rollout cohort 2 with 20 representative test cases. A production workflow spans queue, model, search, and tool services. What enables incident diagnosis?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Record only final user-visible responses",
        "text_vi": "Chỉ ghi lại phản hồi cuối cùng mà người dùng có thể nhìn thấy"
      },
      {
        "key": "B",
        "text": "Disable failure logs to reduce storage",
        "text_vi": "Vô hiệu hóa nhật ký lỗi để giảm dung lượng lưu trữ"
      },
      {
        "key": "C",
        "text": "Give every service a unique uncorrelated log format",
        "text_vi": "Cung cấp cho mỗi dịch vụ một định dạng nhật ký không tương quan duy nhất"
      },
      {
        "key": "D",
        "text": "Propagate trace and correlation identifiers across each stage with redacted telemetry",
        "text_vi": "Truyền bá các mã định danh theo dõi và tương quan qua từng giai đoạn bằng phép đo từ xa được sắp xếp lại"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "End-to-end correlation allows latency and failure attribution without collecting unnecessary secrets.",
    "question_vi": "Một cuộc hồi cứu thí điểm tại một công ty năng lượng xác định các mối lo ngại trong nền tảng vận hành tài sản xử lý các báo cáo sự cố bảo trì, trong đó áp dụng tác động an toàn vận hành cao. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 20 trường hợp thử nghiệm đại diện. Quy trình sản xuất bao gồm các dịch vụ hàng đợi, mô hình, tìm kiếm và công cụ. Điều gì cho phép chẩn đoán sự cố?",
    "explanation_vi": "Mối tương quan từ đầu đến cuối cho phép phân bổ độ trễ và lỗi mà không thu thập các bí mật không cần thiết."
  },
  {
    "id": 28,
    "topic": "Integration (19%)",
    "question": "For the next release, a multinational bank will connect Claude to core banking platform to work with corporate credit applications under auditable financial controls. The workload is assessed in rollout cohort 2 with 16 representative test cases. An MCP tool server is hosted by a third party. What must architects review before enabling it?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Only the number of available tool names",
        "text_vi": "Chỉ số lượng tên công cụ có sẵn"
      },
      {
        "key": "B",
        "text": "Trust boundary, authentication, permissions, data egress, and tool behavior",
        "text_vi": "Ranh giới tin cậy, xác thực, quyền, đầu ra dữ liệu và hành vi của công cụ"
      },
      {
        "key": "C",
        "text": "Whether the service name contains AI",
        "text_vi": "Tên dịch vụ có chứa AI hay không"
      },
      {
        "key": "D",
        "text": "Only the UI screenshot",
        "text_vi": "Chỉ ảnh chụp màn hình giao diện người dùng"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "MCP standardizes tool connectivity, not trust, authorization, or vendor risk.",
    "question_vi": "Trong lần phát hành tiếp theo, một ngân hàng đa quốc gia sẽ kết nối Claude với nền tảng ngân hàng cốt lõi để hoạt động với các ứng dụng tín dụng doanh nghiệp dưới sự kiểm soát tài chính có thể kiểm toán được. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 16 trường hợp thử nghiệm đại diện. Máy chủ công cụ MCP được lưu trữ bởi bên thứ ba. Kiến trúc sư phải xem xét những gì trước khi kích hoạt nó?",
    "explanation_vi": "MCP tiêu chuẩn hóa khả năng kết nối của công cụ, không phải sự tin cậy, ủy quyền hoặc rủi ro của nhà cung cấp."
  },
  {
    "id": 29,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "question": "A regulated delivery team at an insurance carrier is integrating policy and claim files into claims processing platform; its operational mandate includes regulated evidence retention. The workload is assessed in rollout cohort 2 with 16 representative test cases. The pilot works but support staff cannot operate the system. What is missing from the handoff?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Runbooks, alert ownership, escalation, rollback steps, and operational training",
        "text_vi": "Sổ tay chạy, quyền sở hữu cảnh báo, leo thang, các bước khôi phục và đào tạo vận hành"
      },
      {
        "key": "B",
        "text": "An email saying development is complete",
        "text_vi": "Một email cho biết quá trình phát triển đã hoàn tất"
      },
      {
        "key": "C",
        "text": "A list of prompt adjectives",
        "text_vi": "Danh sách các tính từ gợi ý"
      },
      {
        "key": "D",
        "text": "Additional decorative slides",
        "text_vi": "Các slide trang trí bổ sung"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Production readiness includes operations, ownership, and recovery.",
    "question_vi": "Nhóm phân phối được quản lý tại một hãng bảo hiểm đang tích hợp các hồ sơ chính sách và yêu cầu bồi thường vào nền tảng xử lý yêu cầu bồi thường; nhiệm vụ hoạt động của nó bao gồm việc lưu giữ bằng chứng theo quy định. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 16 trường hợp thử nghiệm đại diện. thí điểm (pilot) hoạt động nhưng nhân viên hỗ trợ không thể vận hành hệ thống. Điều gì còn thiếu trong quá trình bàn giao?",
    "explanation_vi": "Sự sẵn sàng sản xuất bao gồm hoạt động, quyền sở hữu và phục hồi."
  },
  {
    "id": 30,
    "topic": "Integration (19%)",
    "question": "A cross-functional team at an international retail chain plans to modernize ERP using store-level inventory updates, while maintaining subsecond checkout availability. The workload is assessed in rollout cohort 2 with 24 representative test cases. Which TWO controls are most important for secure and accountable operation of this workflow? (Choose TWO.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "Enforce least-privilege authorization in the tool-execution service",
        "text_vi": "Thực thi ủy quyền có đặc quyền tối thiểu trong dịch vụ thực thi công cụ"
      },
      {
        "key": "B",
        "text": "Assume a previous login grants permanent access",
        "text_vi": "Giả sử đăng nhập trước đó cấp quyền truy cập vĩnh viễn"
      },
      {
        "key": "C",
        "text": "Record correlated, redacted audit evidence for every external action",
        "text_vi": "Ghi lại bằng chứng kiểm toán tương quan, được biên tập lại cho mọi hành động bên ngoài"
      },
      {
        "key": "D",
        "text": "Keep using an old embedding because embeddings are not documents",
        "text_vi": "Tiếp tục sử dụng nội dung nhúng cũ vì nội dung nhúng không phải là tài liệu"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "Both controls are necessary: enforce least-privilege authorization in the tool-execution service; and record correlated, redacted audit evidence for every external action. Model instructions alone do not substitute for enforceable controls.",
    "question_vi": "Một nhóm đa chức năng tại một chuỗi bán lẻ quốc tế có kế hoạch hiện đại hóa ERP bằng cách sử dụng các bản cập nhật hàng tồn kho ở cấp độ cửa hàng, trong khi vẫn duy trì khả năng thanh toán dưới giây. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 24 trường hợp thử nghiệm đại diện. HAI biện pháp kiểm soát nào là quan trọng nhất để vận hành quy trình công việc này một cách an toàn và có trách nhiệm? (Chọn HAI.)",
    "explanation_vi": "Cả hai biện pháp kiểm soát đều cần thiết: thực thi ủy quyền có đặc quyền tối thiểu trong dịch vụ thực thi công cụ; và ghi lại bằng chứng kiểm toán tương quan, được biên tập lại cho mọi hành động bên ngoài. Chỉ hướng dẫn mô hình không thể thay thế cho các biện pháp kiểm soát có thể thực thi được."
  },
  {
    "id": 31,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "question": "A cross-functional team at an international retail chain plans to modernize ERP using store-level inventory updates, while maintaining subsecond checkout availability. The workload is assessed in rollout cohort 2 with 23 representative test cases. A team uses an LLM judge to score factual answers. What should the evaluation plan include?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Human-calibrated rubrics, bias checks, and periodic adjudication of judge disagreements",
        "text_vi": "Thang đánh giá do con người hiệu chỉnh, kiểm tra thiên vị và xét xử định kỳ những bất đồng của thẩm phán"
      },
      {
        "key": "B",
        "text": "Score solely on response verbosity",
        "text_vi": "Chỉ tính điểm dựa trên mức độ dài dòng của câu trả lời"
      },
      {
        "key": "C",
        "text": "Treat the judge as infallible",
        "text_vi": "Hãy coi thẩm phán là người không thể sai lầm"
      },
      {
        "key": "D",
        "text": "Always use the same model as generator and judge with no checks",
        "text_vi": "Luôn sử dụng cùng một mô hình như trình tạo và đánh giá mà không cần kiểm tra"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "LLM judges are useful but need calibration and independent checks.",
    "question_vi": "Một nhóm đa chức năng tại một chuỗi bán lẻ quốc tế có kế hoạch hiện đại hóa ERP bằng cách sử dụng các bản cập nhật hàng tồn kho ở cấp độ cửa hàng, trong khi vẫn duy trì khả năng thanh toán dưới giây. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 23 trường hợp thử nghiệm đại diện. Một nhóm sử dụng giám khảo LLM để chấm điểm các câu trả lời thực tế. Kế hoạch đánh giá nên bao gồm những gì?",
    "explanation_vi": "Thẩm phán LLM rất hữu ích nhưng cần hiệu chuẩn và kiểm tra độc lập."
  },
  {
    "id": 32,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "question": "An incident review at a regional hospital network focuses on AI handling of patient discharge letters in the clinical records system; stakeholders insist on strict clinical authorization. The workload is assessed in rollout cohort 2 with 16 representative test cases. A reusable system prompt contains stable policies and a large reference handbook used across many sessions. Which optimization is appropriate?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Shuffle handbook sections on every request",
        "text_vi": "Xáo trộn các phần sổ tay theo mọi yêu cầu"
      },
      {
        "key": "B",
        "text": "Place reusable stable content in a cache-eligible prompt prefix and monitor cache hits",
        "text_vi": "Đặt nội dung ổn định có thể sử dụng lại vào tiền tố prompt đủ điều kiện vào bộ đệm và theo dõi các lần truy cập bộ đệm"
      },
      {
        "key": "C",
        "text": "Repeat the whole handbook in every user message with random ordering",
        "text_vi": "Lặp lại toàn bộ sổ tay trong mỗi tin nhắn của người dùng với thứ tự ngẫu nhiên"
      },
      {
        "key": "D",
        "text": "Drop safety rules to reduce token count",
        "text_vi": "Bỏ các quy tắc an toàn để giảm số lượng mã thông báo"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Prompt caching helps when eligible prefix content is reused consistently.",
    "question_vi": "Đánh giá sự cố tại mạng lưới bệnh viện khu vực tập trung vào việc xử lý AI thư xuất viện của bệnh nhân trong hệ thống hồ sơ lâm sàng; các bên liên quan nhấn mạnh vào sự cho phép lâm sàng nghiêm ngặt. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 16 trường hợp thử nghiệm đại diện. system prompt có thể tái sử dụng chứa các chính sách ổn định và sổ tay tham khảo lớn được sử dụng trong nhiều phiên. Tối ưu hóa nào là phù hợp?",
    "explanation_vi": "Bộ nhớ đệm nhắc nhở sẽ hữu ích khi nội dung tiền tố đủ điều kiện được sử dụng lại một cách nhất quán."
  },
  {
    "id": 33,
    "topic": "Governance, Safety & Risk Management (14%)",
    "question": "A pilot retrospective at an energy utility identifies concerns in asset operations platform processing maintenance incident reports, where high operational safety impact applies. The workload is assessed in rollout cohort 2 with 18 representative test cases. An internal policy update removes an employee's access to procurement files. What must remain authoritative?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Identity and data-access policy evaluated at tool and retrieval boundaries",
        "text_vi": "Chính sách nhận dạng và truy cập dữ liệu được đánh giá ở ranh giới công cụ và truy xuất"
      },
      {
        "key": "B",
        "text": "The model's previous conversation memory",
        "text_vi": "Bộ nhớ cuộc trò chuyện trước đó của mô hình"
      },
      {
        "key": "C",
        "text": "The employee's claim that access was once approved",
        "text_vi": "Tuyên bố của nhân viên rằng quyền truy cập đã được phê duyệt"
      },
      {
        "key": "D",
        "text": "A stale retrieved copy of the access list",
        "text_vi": "Một bản sao được lấy ra cũ của danh sách truy cập"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Revocation must be enforced by trusted, up-to-date access-control systems.",
    "question_vi": "Một cuộc hồi cứu thí điểm tại một công ty năng lượng xác định các mối lo ngại trong nền tảng vận hành tài sản xử lý các báo cáo sự cố bảo trì, trong đó áp dụng tác động an toàn vận hành cao. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 18 trường hợp thử nghiệm đại diện. Bản cập nhật chính sách nội bộ sẽ loại bỏ quyền truy cập của nhân viên vào các tệp mua sắm. Điều gì phải có thẩm quyền?",
    "explanation_vi": "Việc thu hồi phải được thực thi bởi các hệ thống kiểm soát truy cập cập nhật, đáng tin cậy."
  },
  {
    "id": 34,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "question": "During a production-readiness review at a government procurement office, the architects examine purchase approval records connected to the procurement workflow, with formal reviewer approval. The workload is assessed in rollout cohort 2 with 19 representative test cases. Which TWO controls are most important for secure and accountable operation of this workflow? (Choose TWO.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "A new name for the assistant",
        "text_vi": "Tên mới cho trợ lý"
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
        "text": "A larger context window",
        "text_vi": "cửa sổ ngữ cảnh (context window) lớn hơn"
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "explanation": "Both controls are necessary: define documented acceptance criteria and named decision owners; and agree on a monitoring and escalation plan for post-launch failures. Model instructions alone do not substitute for enforceable controls.",
    "question_vi": "Trong quá trình đánh giá mức độ sẵn sàng sản xuất tại văn phòng mua sắm của chính phủ, các kiến ​​trúc sư kiểm tra hồ sơ phê duyệt mua hàng được kết nối với quy trình mua sắm với sự chấp thuận của người đánh giá chính thức. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 19 trường hợp thử nghiệm đại diện. HAI biện pháp kiểm soát nào là quan trọng nhất để vận hành quy trình công việc này một cách an toàn và có trách nhiệm? (Chọn HAI.)",
    "explanation_vi": "Cả hai biện pháp kiểm soát đều cần thiết: xác định các tiêu chí chấp nhận được ghi lại bằng văn bản và nêu tên các chủ sở hữu quyết định; và thống nhất về kế hoạch giám sát và báo cáo đối với các lỗi sau khi phóng. Chỉ hướng dẫn mô hình không thể thay thế cho các biện pháp kiểm soát có thể thực thi được."
  },
  {
    "id": 35,
    "topic": "Integration (19%)",
    "question": "During a production-readiness review at a government procurement office, the architects examine purchase approval records connected to the procurement workflow, with formal reviewer approval. The workload is assessed in rollout cohort 2 with 22 representative test cases. A customer asks a knowledge assistant to cite only current product manuals. Which retrieval pipeline helps?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Ask Claude to recall manual page numbers from memory",
        "text_vi": "Yêu cầu Claude nhớ lại số trang trong sách hướng dẫn sử dụng"
      },
      {
        "key": "B",
        "text": "Use only high-temperature generation",
        "text_vi": "Chỉ sử dụng thế hệ nhiệt độ cao"
      },
      {
        "key": "C",
        "text": "Index versioned approved manuals with metadata filters and source citations",
        "text_vi": "Hướng dẫn sử dụng được phê duyệt theo phiên bản được lập chỉ mục với các bộ lọc siêu dữ liệu và trích dẫn nguồn"
      },
      {
        "key": "D",
        "text": "Mix outdated drafts and current manuals in one untagged collection",
        "text_vi": "Trộn các bản nháp lỗi thời và hướng dẫn sử dụng hiện tại trong một bộ sưu tập không được gắn thẻ"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Version-aware retrieval and provenance reduce stale and ungrounded answers.",
    "question_vi": "Trong quá trình đánh giá mức độ sẵn sàng sản xuất tại văn phòng mua sắm của chính phủ, các kiến ​​trúc sư kiểm tra hồ sơ phê duyệt mua hàng được kết nối với quy trình mua sắm với sự chấp thuận của người đánh giá chính thức. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 22 trường hợp thử nghiệm đại diện. Một khách hàng yêu cầu trợ lý kiến ​​thức chỉ trích dẫn các hướng dẫn sử dụng sản phẩm hiện tại. Đường dẫn truy xuất nào giúp ích?",
    "explanation_vi": "Việc truy xuất và xuất xứ nhận biết phiên bản làm giảm các câu trả lời cũ và không có căn cứ."
  },
  {
    "id": 36,
    "topic": "Solution Design & Architecture (17%)",
    "question": "At scale, a B2B software vendor expects Claude to support customer support platform users working with support and incident tickets, without compromising multi-tenant isolation. The workload is assessed in rollout cohort 2 with 23 representative test cases. A product team is choosing between RAG and fine-tuning for rapidly changing policy text. Which approach best matches the freshness requirement?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Put all historical versions in the system prompt permanently",
        "text_vi": "Đặt vĩnh viễn tất cả các phiên bản lịch sử vào system prompt"
      },
      {
        "key": "B",
        "text": "Increase temperature to account for new policies",
        "text_vi": "Tăng nhiệt độ để đáp ứng các chính sách mới"
      },
      {
        "key": "C",
        "text": "Fine-tune a model every morning as the only source of truth",
        "text_vi": "tinh chỉnh (fine-tuning) mô hình mỗi sáng như nguồn thông tin chuẩn duy nhất (single source of truth)"
      },
      {
        "key": "D",
        "text": "Retrieval of current, access-controlled policy documents with grounded responses",
        "text_vi": "Truy xuất các tài liệu chính sách hiện tại, được kiểm soát quyền truy cập với các câu trả lời có đối chiếu căn cứ (grounded responses)"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Current knowledge is more effectively supplied via retrieval than embedded through frequent retraining.",
    "question_vi": "Ở quy mô lớn, một nhà cung cấp phần mềm B2B kỳ vọng Claude sẽ hỗ trợ người dùng nền tảng hỗ trợ khách hàng làm việc với các phiếu hỗ trợ và sự cố mà không ảnh hưởng đến sự cô lập của nhiều bên thuê. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 23 trường hợp thử nghiệm đại diện. Nhóm sản phẩm đang lựa chọn giữa RAG và tinh chỉnh (fine-tuning) để văn bản chính sách thay đổi nhanh chóng. Cách tiếp cận nào phù hợp nhất với yêu cầu về tính cập nhật mới nhất (freshness)?",
    "explanation_vi": "Kiến thức hiện tại được cung cấp thông qua việc truy hồi hiệu quả hơn là được đưa vào thông qua đào tạo lại thường xuyên."
  },
  {
    "id": 37,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "question": "A senior architect advising a public university considers a Claude workflow around student service inquiries and campus management platform with strict student data access. The workload is assessed in rollout cohort 2 with 19 representative test cases. A prompt follows a user-uploaded document containing 'ignore all previous instructions'. What is the right trust treatment?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Treat document text as lower-trust data and keep tool policies outside its control",
        "text_vi": "Coi văn bản tài liệu là dữ liệu có độ tin cậy thấp hơn và giữ các chính sách công cụ nằm ngoài tầm kiểm soát của nó"
      },
      {
        "key": "B",
        "text": "Promote document instructions to system priority",
        "text_vi": "Đưa các hướng dẫn tài liệu lên mức độ ưu tiên của hệ thống"
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
      "A"
    ],
    "explanation": "External content must not override trusted instructions or tool authorization.",
    "question_vi": "Một kiến ​​trúc sư cấp cao tư vấn cho một trường đại học công lập đang xem xét quy trình làm việc của Claude xoay quanh các yêu cầu về dịch vụ sinh viên và nền tảng quản lý khuôn viên trường với quyền truy cập dữ liệu sinh viên nghiêm ngặt. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 19 trường hợp thử nghiệm đại diện. prompt theo sau tài liệu do người dùng tải lên có chứa 'bỏ qua tất cả các hướng dẫn trước đó'. Điều trị niềm tin đúng đắn là gì?",
    "explanation_vi": "Nội dung bên ngoài không được ghi đè các hướng dẫn đáng tin cậy hoặc ủy quyền công cụ."
  },
  {
    "id": 38,
    "topic": "Developer Productivity & Operational Enablement (7%)",
    "question": "At a Japanese manufacturing group, an AI pilot processes quality-inspection records from the factory MES; mandatory operator sign-off is a non-negotiable requirement. The workload is assessed in rollout cohort 2 with 19 representative test cases. Which TWO controls are most important for secure and accountable operation of this workflow? (Choose TWO.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "Only the user-facing success message",
        "text_vi": "Chỉ có thông báo thành công hướng tới người dùng"
      },
      {
        "key": "B",
        "text": "Raw credentials in a debugging log",
        "text_vi": "Thông tin xác thực thô trong nhật ký gỡ lỗi"
      },
      {
        "key": "C",
        "text": "Require reviewed code changes and repeatable automated tests",
        "text_vi": "Yêu cầu thay đổi mã được xem xét và kiểm tra tự động lặp lại"
      },
      {
        "key": "D",
        "text": "Constrain coding-agent credentials and use protected deployment gates",
        "text_vi": "Hạn chế thông tin xác thực tác nhân mã hóa và sử dụng các cổng triển khai được bảo vệ"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "explanation": "Both controls are necessary: require reviewed code changes and repeatable automated tests; and constrain coding-agent credentials and use protected deployment gates. Model instructions alone do not substitute for enforceable controls.",
    "question_vi": "Tại một nhóm sản xuất Nhật Bản, một dự án thí điểm AI (AI pilot) xử lý hồ sơ kiểm tra chất lượng từ MES của nhà máy; việc ký duyệt (sign-off) bắt buộc của nhà điều hành là một yêu cầu không thể thương lượng. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 19 trường hợp thử nghiệm đại diện. HAI biện pháp kiểm soát nào là quan trọng nhất để vận hành quy trình công việc này một cách an toàn và có trách nhiệm? (Chọn HAI.)",
    "explanation_vi": "Cả hai biện pháp kiểm soát đều cần thiết: yêu cầu xem xét các thay đổi mã và kiểm tra tự động lặp lại; và hạn chế thông tin xác thực tác nhân mã hóa cũng như sử dụng các cổng triển khai được bảo vệ. Chỉ hướng dẫn mô hình không thể thay thế cho các biện pháp kiểm soát có thể thực thi được."
  },
  {
    "id": 39,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "question": "The architecture board of a logistics provider evaluates cross-border shipment exceptions workflows in transport management system, prioritizing intermittent connectivity. The workload is assessed in rollout cohort 2 with 24 representative test cases. Which TWO controls are most important for secure and accountable operation of this workflow? (Choose TWO.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "A larger internal slide deck",
        "text_vi": "Sàn trượt bên trong lớn hơn"
      },
      {
        "key": "B",
        "text": "More synthetic examples without production monitoring",
        "text_vi": "Nhiều ví dụ tổng hợp hơn mà không cần giám sát sản xuất"
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
    "question_vi": "Hội đồng kiến ​​trúc của nhà cung cấp dịch vụ hậu cần đánh giá các quy trình ngoại lệ đối với lô hàng xuyên biên giới trong hệ thống quản lý vận tải, ưu tiên kết nối không liên tục. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 24 trường hợp thử nghiệm đại diện. HAI biện pháp kiểm soát nào là quan trọng nhất để vận hành quy trình công việc này một cách an toàn và có trách nhiệm? (Chọn HAI.)",
    "explanation_vi": "Cả hai biện pháp kiểm soát đều cần thiết: xác định các tiêu chí chấp nhận được ghi lại bằng văn bản và nêu tên các chủ sở hữu quyết định; và thống nhất về kế hoạch giám sát và báo cáo đối với các lỗi sau khi phóng. Chỉ hướng dẫn mô hình không thể thay thế cho các biện pháp kiểm soát có thể thực thi được."
  },
  {
    "id": 40,
    "topic": "Solution Design & Architecture (17%)",
    "question": "A senior architect advising a public university considers a Claude workflow around student service inquiries and campus management platform with strict student data access. The workload is assessed in rollout cohort 2 with 20 representative test cases. A customer journey has independent extraction and translation tasks after an upload. Which orchestration reduces latency without losing control?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Let two agents modify the same record concurrently without locking",
        "text_vi": "Cho phép hai tác nhân sửa đổi cùng một bản ghi mà không cần khóa"
      },
      {
        "key": "B",
        "text": "Run independent stages in parallel, then join validated outputs before dependent steps",
        "text_vi": "Chạy song song các giai đoạn độc lập, sau đó nối các đầu ra đã được xác thực trước các bước phụ thuộc"
      },
      {
        "key": "C",
        "text": "Run every task serially even when independent",
        "text_vi": "Chạy mọi tác vụ một cách tuần tự ngay cả khi độc lập"
      },
      {
        "key": "D",
        "text": "Skip output validation to minimize latency",
        "text_vi": "Bỏ qua xác thực đầu ra để giảm thiểu độ trễ"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Parallelize independent work and synchronize before state-changing operations.",
    "question_vi": "Một kiến ​​trúc sư cấp cao tư vấn cho một trường đại học công lập đang xem xét quy trình làm việc của Claude xoay quanh các yêu cầu về dịch vụ sinh viên và nền tảng quản lý khuôn viên trường với quyền truy cập dữ liệu sinh viên nghiêm ngặt. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 20 trường hợp thử nghiệm đại diện. Hành trình của khách hàng có các tác vụ trích xuất và dịch độc lập sau khi tải lên. Sự phối hợp nào làm giảm độ trễ mà không mất kiểm soát?",
    "explanation_vi": "Song song hóa công việc độc lập và đồng bộ hóa trước các hoạt động thay đổi trạng thái."
  },
  {
    "id": 41,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "question": "A pilot retrospective at an energy utility identifies concerns in asset operations platform processing maintenance incident reports, where high operational safety impact applies. The workload is assessed in rollout cohort 2 with 19 representative test cases. Which TWO controls are most important for secure and accountable operation of this workflow? (Choose TWO.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "The prompts become physically smaller",
        "text_vi": "prompt trở nên nhỏ hơn về mặt vật lý"
      },
      {
        "key": "B",
        "text": "Track operational guardrails such as high-severity failures and tail latency",
        "text_vi": "Theo dõi các biện pháp bảo vệ vận hành như lỗi ở mức độ nghiêm trọng cao và độ trễ ở đuôi"
      },
      {
        "key": "C",
        "text": "Cache keys are guaranteed to stop working",
        "text_vi": "Khóa bộ đệm được đảm bảo ngừng hoạt động"
      },
      {
        "key": "D",
        "text": "Evaluate task correctness using representative held-out scenarios",
        "text_vi": "Đánh giá tính chính xác của nhiệm vụ bằng cách sử dụng các kịch bản được tổ chức đại diện"
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "explanation": "Both controls are necessary: evaluate task correctness using representative held-out scenarios; and track operational guardrails such as high-severity failures and tail latency. Model instructions alone do not substitute for enforceable controls.",
    "question_vi": "Một cuộc hồi cứu thí điểm tại một công ty năng lượng xác định các mối lo ngại trong nền tảng vận hành tài sản xử lý các báo cáo sự cố bảo trì, trong đó áp dụng tác động an toàn vận hành cao. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 19 trường hợp thử nghiệm đại diện. HAI biện pháp kiểm soát nào là quan trọng nhất để vận hành quy trình công việc này một cách an toàn và có trách nhiệm? (Chọn HAI.)",
    "explanation_vi": "Cả hai biện pháp kiểm soát đều cần thiết: đánh giá tính chính xác của nhiệm vụ bằng cách sử dụng các kịch bản được đưa ra mang tính đại diện; và theo dõi các rào cản vận hành như lỗi ở mức độ nghiêm trọng cao và độ trễ ở đuôi. Chỉ hướng dẫn mô hình không thể thay thế cho các biện pháp kiểm soát có thể thực thi được."
  },
  {
    "id": 42,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "question": "At a Japanese manufacturing group, an AI pilot processes quality-inspection records from the factory MES; mandatory operator sign-off is a non-negotiable requirement. The workload is assessed in rollout cohort 2 with 20 representative test cases. A pilot demonstrates productivity gains but workers spend more time correcting outputs. What should be reported?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Only number of requests generated",
        "text_vi": "Chỉ có số lượng yêu cầu được tạo"
      },
      {
        "key": "B",
        "text": "Only number of features deployed",
        "text_vi": "Chỉ có số tính năng được triển khai"
      },
      {
        "key": "C",
        "text": "Net operational benefit, including review and rework time, with representative user feedback",
        "text_vi": "Lợi ích hoạt động ròng, bao gồm thời gian xem xét và làm lại, với phản hồi đại diện của người dùng"
      },
      {
        "key": "D",
        "text": "Only average output length",
        "text_vi": "Chỉ có chiều dài đầu ra trung bình"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Business value includes complete workflow cost and human effort.",
    "question_vi": "Tại một nhóm sản xuất Nhật Bản, một dự án thí điểm AI (AI pilot) xử lý hồ sơ kiểm tra chất lượng từ MES của nhà máy; việc ký duyệt (sign-off) bắt buộc của nhà điều hành là một yêu cầu không thể thương lượng. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 20 trường hợp thử nghiệm đại diện. Một thí điểm cho thấy năng suất tăng nhưng công nhân lại mất nhiều thời gian hơn để điều chỉnh kết quả đầu ra. Cần báo cáo những gì?",
    "explanation_vi": "Giá trị kinh doanh bao gồm toàn bộ chi phí của quy trình làm việc và nỗ lực của con người."
  },
  {
    "id": 43,
    "topic": "Solution Design & Architecture (17%)",
    "question": "For the next release, a multinational bank will connect Claude to core banking platform to work with corporate credit applications under auditable financial controls. The workload is assessed in rollout cohort 2 with 18 representative test cases. A call-center summarizer must produce low-latency summaries with no external actions. What is the simplest suitable design?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "A single bounded Claude request with schema validation and fallback",
        "text_vi": "Một yêu cầu Claude giới hạn duy nhất có xác thực và dự phòng lược đồ"
      },
      {
        "key": "B",
        "text": "A reinforcement-learning retraining pipeline for every call",
        "text_vi": "Một quy trình đào tạo lại học tập tăng cường cho mọi cuộc gọi"
      },
      {
        "key": "C",
        "text": "An autonomous multi-agent system with external tools",
        "text_vi": "Một hệ thống đa tác nhân tự trị với các công cụ bên ngoài"
      },
      {
        "key": "D",
        "text": "A browser automation agent that searches the web",
        "text_vi": "Một tác nhân tự động hóa trình duyệt tìm kiếm trên web"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Prefer the least complex architecture that meets the measurable requirements.",
    "question_vi": "Trong lần phát hành tiếp theo, một ngân hàng đa quốc gia sẽ kết nối Claude với nền tảng ngân hàng cốt lõi để hoạt động với các ứng dụng tín dụng doanh nghiệp dưới sự kiểm soát tài chính có thể kiểm toán được. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 18 trường hợp thử nghiệm đại diện. Trình tóm tắt của trung tâm cuộc gọi phải tạo ra các bản tóm tắt có độ trễ thấp mà không có tác động bên ngoài. Thiết kế phù hợp đơn giản nhất là gì?",
    "explanation_vi": "Ưu tiên kiến trúc ít phức tạp nhất, đáp ứng các yêu cầu có thể đo lường được."
  },
  {
    "id": 44,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "question": "A regulated delivery team at an insurance carrier is integrating policy and claim files into claims processing platform; its operational mandate includes regulated evidence retention. The workload is assessed in rollout cohort 2 with 18 representative test cases. A new model lowers cost per token but increases retries due to invalid outputs. What cost metric matters?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Raw throughput regardless of correctness",
        "text_vi": "Thông lượng thô bất kể tính chính xác"
      },
      {
        "key": "B",
        "text": "Cost per successfully completed validated task including retries and human rework",
        "text_vi": "Chi phí cho mỗi nhiệm vụ được xác thực đã hoàn thành thành công, bao gồm cả số lần thử lại và việc làm lại của con người"
      },
      {
        "key": "C",
        "text": "Sticker price per input token alone",
        "text_vi": "Giá nhãn dán riêng cho mỗi mã thông báo đầu vào"
      },
      {
        "key": "D",
        "text": "Number of available model names",
        "text_vi": "Số lượng tên model có sẵn"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Total effective cost depends on quality, retries, and downstream correction.",
    "question_vi": "Nhóm phân phối được quản lý tại một hãng bảo hiểm đang tích hợp các hồ sơ chính sách và yêu cầu bồi thường vào nền tảng xử lý yêu cầu bồi thường; nhiệm vụ hoạt động của nó bao gồm việc lưu giữ bằng chứng theo quy định. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 18 trường hợp thử nghiệm đại diện. Mô hình mới giảm chi phí cho mỗi mã thông báo nhưng tăng số lần thử lại do kết quả đầu ra không hợp lệ. Số liệu chi phí nào quan trọng?",
    "explanation_vi": "Tổng chi phí hiệu quả phụ thuộc vào chất lượng, số lần thử lại và hiệu chỉnh tiếp theo."
  },
  {
    "id": 45,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "question": "At scale, a B2B software vendor expects Claude to support customer support platform users working with support and incident tickets, without compromising multi-tenant isolation. The workload is assessed in rollout cohort 2 with 20 representative test cases. A regression test finds that one new safety rule blocks legitimate customer requests. What is the best release action?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Assess false positives and revise the rule with safety and utility checks before deployment",
        "text_vi": "Đánh giá các kết quả dương tính giả và sửa đổi quy tắc bằng các kiểm tra về an toàn và tiện ích trước khi triển khai"
      },
      {
        "key": "B",
        "text": "Disable all safety checks globally",
        "text_vi": "Vô hiệu hóa tất cả các kiểm tra an toàn trên toàn cầu"
      },
      {
        "key": "C",
        "text": "Ship immediately because stricter always means safer",
        "text_vi": "Giao hàng ngay vì chặt chẽ hơn luôn đồng nghĩa với an toàn hơn"
      },
      {
        "key": "D",
        "text": "Ignore legitimate requests permanently",
        "text_vi": "Bỏ qua các yêu cầu hợp pháp vĩnh viễn"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Safety controls need measured effectiveness and acceptable false-positive rates.",
    "question_vi": "Ở quy mô lớn, một nhà cung cấp phần mềm B2B kỳ vọng Claude sẽ hỗ trợ người dùng nền tảng hỗ trợ khách hàng làm việc với các phiếu hỗ trợ và sự cố mà không ảnh hưởng đến sự cô lập của nhiều bên thuê. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 20 trường hợp thử nghiệm đại diện. Kiểm tra hồi quy cho thấy một quy tắc an toàn mới chặn các yêu cầu hợp pháp của khách hàng. Hành động phát hành tốt nhất là gì?",
    "explanation_vi": "Kiểm soát an toàn cần đo lường hiệu quả và tỷ lệ dương tính giả có thể chấp nhận được."
  },
  {
    "id": 46,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "question": "An incident review at a regional hospital network focuses on AI handling of patient discharge letters in the clinical records system; stakeholders insist on strict clinical authorization. The workload is assessed in rollout cohort 2 with 24 representative test cases. Which TWO controls are most important for secure and accountable operation of this workflow? (Choose TWO.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "Track operational guardrails such as high-severity failures and tail latency",
        "text_vi": "Theo dõi các biện pháp bảo vệ vận hành như lỗi ở mức độ nghiêm trọng cao và độ trễ ở đuôi"
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
        "text": "Evaluate task correctness using representative held-out scenarios",
        "text_vi": "Đánh giá tính chính xác của nhiệm vụ bằng cách sử dụng các kịch bản được tổ chức đại diện"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "explanation": "Both controls are necessary: evaluate task correctness using representative held-out scenarios; and track operational guardrails such as high-severity failures and tail latency. Model instructions alone do not substitute for enforceable controls.",
    "question_vi": "Đánh giá sự cố tại mạng lưới bệnh viện khu vực tập trung vào việc xử lý AI thư xuất viện của bệnh nhân trong hệ thống hồ sơ lâm sàng; các bên liên quan nhấn mạnh vào sự cho phép lâm sàng nghiêm ngặt. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 24 trường hợp thử nghiệm đại diện. HAI biện pháp kiểm soát nào là quan trọng nhất để vận hành quy trình công việc này một cách an toàn và có trách nhiệm? (Chọn HAI.)",
    "explanation_vi": "Cả hai biện pháp kiểm soát đều cần thiết: đánh giá tính chính xác của nhiệm vụ bằng cách sử dụng các kịch bản được đưa ra mang tính đại diện; và theo dõi các rào cản vận hành như lỗi ở mức độ nghiêm trọng cao và độ trễ ở đuôi. Chỉ hướng dẫn mô hình không thể thay thế cho các biện pháp kiểm soát có thể thực thi được."
  },
  {
    "id": 47,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "question": "The architecture board of a logistics provider evaluates cross-border shipment exceptions workflows in transport management system, prioritizing intermittent connectivity. The workload is assessed in rollout cohort 2 with 16 representative test cases. A Claude app occasionally makes catastrophic mistakes on high-value accounts. Which metric deserves priority?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Severity-weighted failure rate and high-risk case recall, alongside average quality",
        "text_vi": "Tỷ lệ thất bại được đánh giá theo mức độ nghiêm trọng và việc thu hồi trường hợp có rủi ro cao, bên cạnh chất lượng trung bình"
      },
      {
        "key": "B",
        "text": "Maximum theoretical context length",
        "text_vi": "Độ dài bối cảnh lý thuyết tối đa"
      },
      {
        "key": "C",
        "text": "Number of tokens per response alone",
        "text_vi": "Số lượng mã thông báo cho mỗi phản hồi"
      },
      {
        "key": "D",
        "text": "Average satisfaction alone",
        "text_vi": "Chỉ riêng mức độ hài lòng trung bình"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "High-severity failure modes demand explicit measurement and acceptance thresholds.",
    "question_vi": "Hội đồng kiến ​​trúc của nhà cung cấp dịch vụ hậu cần đánh giá các quy trình ngoại lệ đối với lô hàng xuyên biên giới trong hệ thống quản lý vận tải, ưu tiên kết nối không liên tục. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 16 trường hợp thử nghiệm đại diện. Ứng dụng Claude đôi khi mắc phải những sai lầm nghiêm trọng đối với các tài khoản có giá trị cao. Số liệu nào xứng đáng được ưu tiên?",
    "explanation_vi": "Các dạng hư hỏng ở mức độ nghiêm trọng cao yêu cầu ngưỡng chấp nhận và đo lường rõ ràng."
  },
  {
    "id": 48,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "question": "At scale, a B2B software vendor expects Claude to support customer support platform users working with support and incident tickets, without compromising multi-tenant isolation. The workload is assessed in rollout cohort 2 with 22 representative test cases. An analyst asks Claude to reveal hidden reasoning verbatim for auditing. What should the system provide instead?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "A concise decision rationale with cited evidence and auditable external actions",
        "text_vi": "Cơ sở đưa ra quyết định ngắn gọn với bằng chứng được trích dẫn và các hành động bên ngoài có thể kiểm tra được"
      },
      {
        "key": "B",
        "text": "An unreviewed claim that no reasoning occurred",
        "text_vi": "Một tuyên bố chưa được xem xét rằng không có lý do nào xảy ra"
      },
      {
        "key": "C",
        "text": "A guarantee to expose all private internal reasoning",
        "text_vi": "Bảo đảm phơi bày mọi suy luận nội bộ riêng tư"
      },
      {
        "key": "D",
        "text": "Only the model's confidence percentage",
        "text_vi": "Chỉ phần trăm độ tin cậy của mô hình"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Auditability is best supported by observable evidence, inputs, outputs, checks, and concise rationales.",
    "question_vi": "Ở quy mô lớn, một nhà cung cấp phần mềm B2B kỳ vọng Claude sẽ hỗ trợ người dùng nền tảng hỗ trợ khách hàng làm việc với các phiếu hỗ trợ và sự cố mà không ảnh hưởng đến sự cô lập của nhiều bên thuê. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 22 trường hợp thử nghiệm đại diện. Một nhà phân tích yêu cầu Claude tiết lộ nguyên văn lý do ẩn giấu cho cuộc kiểm toán. Thay vào đó, hệ thống nên cung cấp những gì?",
    "explanation_vi": "Khả năng kiểm toán được hỗ trợ tốt nhất bởi bằng chứng có thể quan sát được, đầu vào, đầu ra, kiểm tra và cơ sở lý luận ngắn gọn."
  },
  {
    "id": 49,
    "topic": "Solution Design & Architecture (17%)",
    "question": "A pilot retrospective at an energy utility identifies concerns in asset operations platform processing maintenance incident reports, where high operational safety impact applies. The workload is assessed in rollout cohort 2 with 22 representative test cases. A finance assistant will eventually make tool calls that can transfer funds. Which boundary is most important?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "A server-side policy and approval gate that independently authorizes each transaction",
        "text_vi": "Chính sách phía máy chủ và cổng phê duyệt cho phép độc lập mỗi giao dịch"
      },
      {
        "key": "B",
        "text": "A confidence threshold supplied by the model",
        "text_vi": "Ngưỡng tin cậy được cung cấp bởi mô hình"
      },
      {
        "key": "C",
        "text": "A high-priority user prompt saying transfers must be safe",
        "text_vi": "prompt người dùng có mức độ ưu tiên cao cho biết quá trình chuyển tiền phải an toàn"
      },
      {
        "key": "D",
        "text": "A two-agent consensus that automatically transfers money",
        "text_vi": "Sự đồng thuận của hai đại lý tự động chuyển tiền"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "High-impact external actions require independent authorization, not just model intention.",
    "question_vi": "Một cuộc hồi cứu thí điểm tại một công ty năng lượng xác định các mối lo ngại trong nền tảng vận hành tài sản xử lý các báo cáo sự cố bảo trì, trong đó áp dụng tác động an toàn vận hành cao. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 22 trường hợp thử nghiệm đại diện. Trợ lý tài chính cuối cùng sẽ thực hiện các cuộc gọi công cụ có thể chuyển tiền. Ranh giới nào là quan trọng nhất?",
    "explanation_vi": "Các hành động bên ngoài có tác động cao cần có sự cho phép độc lập chứ không chỉ là ý định mẫu."
  },
  {
    "id": 50,
    "topic": "Integration (19%)",
    "question": "For the next release, a multinational bank will connect Claude to core banking platform to work with corporate credit applications under auditable financial controls. The workload is assessed in rollout cohort 2 with 26 representative test cases. A knowledge retrieval service produces relevant but unsupported answers. Which integration improvement best addresses grounding?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Turn off retrieval and ask the model to remember more",
        "text_vi": "Tắt tính năng truy xuất và yêu cầu người mẫu ghi nhớ thêm"
      },
      {
        "key": "B",
        "text": "Replace citations with model confidence scores",
        "text_vi": "Thay thế trích dẫn bằng điểm tin cậy của mô hình"
      },
      {
        "key": "C",
        "text": "Increase context with unrelated documents",
        "text_vi": "Tăng ngữ cảnh với các tài liệu không liên quan"
      },
      {
        "key": "D",
        "text": "Return source IDs and passages and require answer-to-source consistency checks",
        "text_vi": "Trả về ID nguồn và đoạn văn, đồng thời yêu cầu kiểm tra tính nhất quán của câu trả lời với nguồn"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Grounding requires traceable evidence and validation, not solely semantic relevance.",
    "question_vi": "Trong lần phát hành tiếp theo, một ngân hàng đa quốc gia sẽ kết nối Claude với nền tảng ngân hàng cốt lõi để hoạt động với các ứng dụng tín dụng doanh nghiệp dưới sự kiểm soát tài chính có thể kiểm toán được. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 26 trường hợp thử nghiệm đại diện. Dịch vụ truy xuất kiến ​​thức tạo ra các câu trả lời có liên quan nhưng không được hỗ trợ. Cải tiến tích hợp nào giải quyết tốt nhất vấn đề nối đất?",
    "explanation_vi": "Việc nối đất đòi hỏi bằng chứng và xác nhận có thể theo dõi được, không chỉ liên quan đến ngữ nghĩa."
  },
  {
    "id": 51,
    "topic": "Integration (19%)",
    "question": "The architecture board of a logistics provider evaluates cross-border shipment exceptions workflows in transport management system, prioritizing intermittent connectivity. The workload is assessed in rollout cohort 2 with 27 representative test cases. A tool accepts free-form shell commands from Claude in a developer assistant. Which mitigation is essential?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Run all commands as root for reliability",
        "text_vi": "Chạy tất cả các lệnh dưới quyền root để đảm bảo độ tin cậy"
      },
      {
        "key": "B",
        "text": "Allow prompt instructions to override container permissions",
        "text_vi": "Cho phép hướng dẫn nhắc nhở để ghi đè quyền vùng chứa"
      },
      {
        "key": "C",
        "text": "Assume suggested commands are safe because they are code",
        "text_vi": "Giả sử các lệnh được đề xuất là an toàn vì chúng là mã"
      },
      {
        "key": "D",
        "text": "Sandbox execution with command allowlists, least privilege, and approval for destructive actions",
        "text_vi": "Thực thi hộp cát với danh sách lệnh cho phép, đặc quyền tối thiểu và phê duyệt cho các hành động phá hoại"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Generated commands are untrusted and need enforcement outside the model.",
    "question_vi": "Hội đồng kiến ​​trúc của nhà cung cấp dịch vụ hậu cần đánh giá các quy trình ngoại lệ đối với lô hàng xuyên biên giới trong hệ thống quản lý vận tải, ưu tiên kết nối không liên tục. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 27 trường hợp thử nghiệm đại diện. Một công cụ chấp nhận các lệnh shell dạng tự do từ Claude trong trợ lý nhà phát triển. Biện pháp giảm thiểu nào là cần thiết?",
    "explanation_vi": "Các lệnh được tạo không đáng tin cậy và cần được thực thi bên ngoài mô hình."
  },
  {
    "id": 52,
    "topic": "Solution Design & Architecture (17%)",
    "question": "A cross-functional team at an international retail chain plans to modernize ERP using store-level inventory updates, while maintaining subsecond checkout availability. The workload is assessed in rollout cohort 2 with 26 representative test cases. An intake agent must process 20,000 independent forms overnight. Which design best separates scale from correctness?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Have the model self-assign unbounded workers",
        "text_vi": "Có mô hình tự phân công công nhân không giới hạn"
      },
      {
        "key": "B",
        "text": "Queue independent jobs, process with bounded concurrency, and validate outputs before committing",
        "text_vi": "Xếp hàng các công việc độc lập, xử lý đồng thời có giới hạn và xác thực kết quả đầu ra trước khi cam kết"
      },
      {
        "key": "C",
        "text": "Let the model decide whether duplicate form submissions should be ignored",
        "text_vi": "Hãy để mô hình quyết định xem có nên bỏ qua việc gửi biểu mẫu trùng lặp hay không"
      },
      {
        "key": "D",
        "text": "Keep one interactive conversation alive for every form",
        "text_vi": "Duy trì một cuộc trò chuyện mang tính tương tác cho mọi hình thức"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Durable queues and idempotent commits make batch processing recoverable and scalable.",
    "question_vi": "Một nhóm đa chức năng tại một chuỗi bán lẻ quốc tế có kế hoạch hiện đại hóa ERP bằng cách sử dụng các bản cập nhật hàng tồn kho ở cấp độ cửa hàng, trong khi vẫn duy trì khả năng thanh toán dưới giây. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 26 trường hợp thử nghiệm đại diện. Một đại lý tiếp nhận phải xử lý 20.000 biểu mẫu độc lập chỉ trong một đêm. Thiết kế nào tách biệt tốt nhất giữa quy mô và tính chính xác?",
    "explanation_vi": "Hàng đợi lâu bền và các cam kết bình thường giúp quá trình xử lý hàng loạt có thể phục hồi và mở rộng được."
  },
  {
    "id": 53,
    "topic": "Solution Design & Architecture (17%)",
    "question": "An incident review at a regional hospital network focuses on AI handling of patient discharge letters in the clinical records system; stakeholders insist on strict clinical authorization. The workload is assessed in rollout cohort 2 with 17 representative test cases. A data analyst assistant can propose SQL, but production query costs are unpredictable. What is the safest execution pattern?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Give Claude database administrator credentials",
        "text_vi": "Cung cấp thông tin xác thực của quản trị viên cơ sở dữ liệu Claude"
      },
      {
        "key": "B",
        "text": "Run all queries on the primary write database",
        "text_vi": "Chạy tất cả các truy vấn trên cơ sở dữ liệu ghi chính"
      },
      {
        "key": "C",
        "text": "Validate generated SQL against a read-only allowlist and cost limits before execution",
        "text_vi": "Xác thực SQL được tạo dựa trên danh sách cho phép chỉ đọc và giới hạn chi phí trước khi thực thi"
      },
      {
        "key": "D",
        "text": "Execute any SQL if Claude includes an explanation",
        "text_vi": "Thực thi bất kỳ lệnh SQL nào nếu Claude đưa ra lời giải thích"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Generated SQL is untrusted and must pass deterministic validation and resource limits.",
    "question_vi": "Đánh giá sự cố tại mạng lưới bệnh viện khu vực tập trung vào việc xử lý AI thư xuất viện của bệnh nhân trong hệ thống hồ sơ lâm sàng; các bên liên quan nhấn mạnh vào sự cho phép lâm sàng nghiêm ngặt. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 17 trường hợp thử nghiệm đại diện. Trợ lý phân tích dữ liệu có thể đề xuất SQL, nhưng chi phí truy vấn sản xuất là không thể đoán trước. Mẫu thực thi an toàn nhất là gì?",
    "explanation_vi": "SQL được tạo không đáng tin cậy và phải vượt qua giới hạn tài nguyên và xác thực xác định."
  },
  {
    "id": 54,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "question": "A pilot retrospective at an energy utility identifies concerns in asset operations platform processing maintenance incident reports, where high operational safety impact applies. The workload is assessed in rollout cohort 2 with 17 representative test cases. A customer requests an architecture change during a regulated pilot. What should happen?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Implement it silently to keep momentum",
        "text_vi": "Âm thầm thực hiện để giữ đà"
      },
      {
        "key": "B",
        "text": "Capture the change request, impact analysis, approval, updated tests, and versioned decision record",
        "text_vi": "Nắm bắt yêu cầu thay đổi, phân tích tác động, phê duyệt, kiểm tra cập nhật và hồ sơ quyết định theo phiên bản"
      },
      {
        "key": "C",
        "text": "Apply it without revisiting risk controls",
        "text_vi": "Áp dụng nó mà không cần xem lại các biện pháp kiểm soát rủi ro"
      },
      {
        "key": "D",
        "text": "Ask Claude to sign off for all stakeholders",
        "text_vi": "Yêu cầu Claude phê duyệt cho tất cả các bên liên quan"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Change management preserves agreement, compliance, and traceability.",
    "question_vi": "Một cuộc hồi cứu thí điểm tại một công ty năng lượng xác định các mối lo ngại trong nền tảng vận hành tài sản xử lý các báo cáo sự cố bảo trì, trong đó áp dụng tác động an toàn vận hành cao. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 17 trường hợp thử nghiệm đại diện. Khách hàng yêu cầu thay đổi kiến ​​trúc trong quá trình thí điểm được quản lý. Điều gì sẽ xảy ra?",
    "explanation_vi": "Quản lý thay đổi duy trì thỏa thuận, tuân thủ và truy xuất nguồn gốc."
  },
  {
    "id": 55,
    "topic": "Integration (19%)",
    "question": "An incident review at a regional hospital network focuses on AI handling of patient discharge letters in the clinical records system; stakeholders insist on strict clinical authorization. The workload is assessed in rollout cohort 2 with 25 representative test cases. Two agents write to the same customer record. What preserves consistency?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Increase model context length",
        "text_vi": "Tăng độ dài bối cảnh mô hình"
      },
      {
        "key": "B",
        "text": "Use transactional updates or version preconditions and define conflict handling",
        "text_vi": "Sử dụng các bản cập nhật giao dịch hoặc điều kiện tiên quyết của phiên bản và xác định cách xử lý xung đột"
      },
      {
        "key": "C",
        "text": "Allow both writes with no concurrency control",
        "text_vi": "Cho phép cả hai ghi mà không có kiểm soát đồng thời"
      },
      {
        "key": "D",
        "text": "Use the last text response as the official record",
        "text_vi": "Sử dụng phản hồi văn bản cuối cùng làm bản ghi chính thức"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Concurrent updates need optimistic locking or transactions, not conversational coordination alone.",
    "question_vi": "Đánh giá sự cố tại mạng lưới bệnh viện khu vực tập trung vào việc xử lý AI thư xuất viện của bệnh nhân trong hệ thống hồ sơ lâm sàng; các bên liên quan nhấn mạnh vào sự cho phép lâm sàng nghiêm ngặt. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 25 trường hợp thử nghiệm đại diện. Hai đại lý viết vào cùng một hồ sơ khách hàng. Điều gì bảo tồn tính nhất quán?",
    "explanation_vi": "Các bản cập nhật đồng thời cần khóa hoặc giao dịch lạc quan chứ không chỉ phối hợp đàm thoại."
  },
  {
    "id": 56,
    "topic": "Governance, Safety & Risk Management (14%)",
    "question": "For the next release, a multinational bank will connect Claude to core banking platform to work with corporate credit applications under auditable financial controls. The workload is assessed in rollout cohort 2 with 24 representative test cases. Which TWO controls are most important for secure and accountable operation of this workflow? (Choose TWO.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "Assume the model provider stores data in the user's region automatically",
        "text_vi": "Giả sử nhà cung cấp mô hình tự động lưu trữ dữ liệu trong khu vực của người dùng"
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
        "text": "Ignore logging and backup locations",
        "text_vi": "Bỏ qua các vị trí ghi nhật ký và sao lưu"
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "explanation": "Both controls are necessary: enforce access-control and data-handling policies independently of model prompts; and retain auditable evidence of reviews, exceptions, and privileged actions. Model instructions alone do not substitute for enforceable controls.",
    "question_vi": "Trong lần phát hành tiếp theo, một ngân hàng đa quốc gia sẽ kết nối Claude với nền tảng ngân hàng cốt lõi để hoạt động với các ứng dụng tín dụng doanh nghiệp dưới sự kiểm soát tài chính có thể kiểm toán được. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 24 trường hợp thử nghiệm đại diện. HAI biện pháp kiểm soát nào là quan trọng nhất để vận hành quy trình công việc này một cách an toàn và có trách nhiệm? (Chọn HAI.)",
    "explanation_vi": "Cả hai biện pháp kiểm soát đều cần thiết: thực thi các chính sách kiểm soát truy cập và xử lý dữ liệu một cách độc lập với prompt của mô hình; và lưu giữ bằng chứng có thể kiểm tra được về các đánh giá, ngoại lệ và hành động đặc quyền. Chỉ hướng dẫn mô hình không thể thay thế cho các biện pháp kiểm soát có thể thực thi được."
  },
  {
    "id": 57,
    "topic": "Governance, Safety & Risk Management (14%)",
    "question": "A senior architect advising a public university considers a Claude workflow around student service inquiries and campus management platform with strict student data access. The workload is assessed in rollout cohort 2 with 16 representative test cases. A user requests deletion of personal data from an AI service. What architectural consideration matters?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Assume embeddings contain no privacy-sensitive information",
        "text_vi": "Giả sử các phần nhúng không chứa thông tin nhạy cảm về quyền riêng tư"
      },
      {
        "key": "B",
        "text": "Delete only the visible chat bubble",
        "text_vi": "Chỉ xóa bong bóng trò chuyện hiển thị"
      },
      {
        "key": "C",
        "text": "Tell Claude to forget the user without changing storage",
        "text_vi": "Yêu cầu Claude quên người dùng mà không thay đổi bộ nhớ"
      },
      {
        "key": "D",
        "text": "Locate and apply retention/deletion rules across logs, caches, indexes, and application stores",
        "text_vi": "Xác định vị trí và áp dụng các quy tắc lưu giữ/xóa trên nhật ký, bộ nhớ đệm, chỉ mục và kho ứng dụng"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Privacy obligations can span derived data and operational stores.",
    "question_vi": "Một kiến ​​trúc sư cấp cao tư vấn cho một trường đại học công lập đang xem xét quy trình làm việc của Claude xoay quanh các yêu cầu về dịch vụ sinh viên và nền tảng quản lý khuôn viên trường với quyền truy cập dữ liệu sinh viên nghiêm ngặt. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 16 trường hợp thử nghiệm đại diện. Người dùng yêu cầu xóa dữ liệu cá nhân khỏi dịch vụ AI. Việc xem xét kiến ​​trúc có ý nghĩa gì?",
    "explanation_vi": "Nghĩa vụ bảo mật có thể mở rộng dữ liệu có nguồn gốc và các cửa hàng hoạt động."
  },
  {
    "id": 58,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "question": "At a Japanese manufacturing group, an AI pilot processes quality-inspection records from the factory MES; mandatory operator sign-off is a non-negotiable requirement. The workload is assessed in rollout cohort 2 with 22 representative test cases. A system experiences an accuracy drop after a document ingestion change. Which debugging method is best?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Inspect retrieval versions, intermediate results, traces, and a before/after error slice",
        "text_vi": "Kiểm tra các phiên bản truy xuất, kết quả trung gian, dấu vết và lát lỗi trước/sau"
      },
      {
        "key": "B",
        "text": "Rebuild the entire service without logging",
        "text_vi": "Xây dựng lại toàn bộ dịch vụ mà không cần đăng nhập"
      },
      {
        "key": "C",
        "text": "Measure only customer sentiment",
        "text_vi": "Chỉ đo lường tình cảm của khách hàng"
      },
      {
        "key": "D",
        "text": "Change all prompts and tools simultaneously",
        "text_vi": "Thay đổi đồng thời tất cả prompt và công cụ"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Versioned evidence and error slicing isolate the stage responsible for regressions.",
    "question_vi": "Tại một nhóm sản xuất Nhật Bản, một dự án thí điểm AI (AI pilot) xử lý hồ sơ kiểm tra chất lượng từ MES của nhà máy; việc ký duyệt (sign-off) bắt buộc của nhà điều hành là một yêu cầu không thể thương lượng. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 22 trường hợp thử nghiệm đại diện. Hệ thống bị giảm độ chính xác sau khi thay đổi việc nhập tài liệu. Phương pháp gỡ lỗi nào là tốt nhất?",
    "explanation_vi": "Bằng chứng được phiên bản và việc cắt lỗi sẽ tách biệt giai đoạn chịu trách nhiệm cho các hồi quy."
  },
  {
    "id": 59,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "question": "A senior architect advising a public university considers a Claude workflow around student service inquiries and campus management platform with strict student data access. The workload is assessed in rollout cohort 2 with 17 representative test cases. Latency is high but Claude generation is only 35% of total request time. What should optimization target first?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Change model sampling without measuring latency",
        "text_vi": "Thay đổi lấy mẫu mô hình mà không đo độ trễ"
      },
      {
        "key": "B",
        "text": "Reduce answer quality until customers stop using the app",
        "text_vi": "Giảm chất lượng câu trả lời cho đến khi khách hàng ngừng sử dụng ứng dụng"
      },
      {
        "key": "C",
        "text": "Trace end-to-end latency and prioritize the largest retrieval, queue, and tool bottlenecks",
        "text_vi": "Theo dõi độ trễ từ đầu đến cuối và ưu tiên các tắc nghẽn truy xuất, hàng đợi và công cụ lớn nhất"
      },
      {
        "key": "D",
        "text": "Optimize only model tokens because tools cannot cause latency",
        "text_vi": "Chỉ tối ưu hóa mã thông báo mô hình vì các công cụ không thể gây ra độ trễ"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Tracing identifies the dominant bottlenecks across the whole request path.",
    "question_vi": "Một kiến ​​trúc sư cấp cao tư vấn cho một trường đại học công lập đang xem xét quy trình làm việc của Claude xoay quanh các yêu cầu về dịch vụ sinh viên và nền tảng quản lý khuôn viên trường với quyền truy cập dữ liệu sinh viên nghiêm ngặt. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 17 trường hợp thử nghiệm đại diện. Độ trễ cao nhưng việc tạo Claude chỉ chiếm 35% tổng thời gian yêu cầu. Mục tiêu tối ưu hóa nên là gì đầu tiên?",
    "explanation_vi": "Việc theo dõi xác định các điểm nghẽn chủ yếu trên toàn bộ đường dẫn yêu cầu."
  },
  {
    "id": 60,
    "topic": "Developer Productivity & Operational Enablement (7%)",
    "question": "A pilot retrospective at an energy utility identifies concerns in asset operations platform processing maintenance incident reports, where high operational safety impact applies. The workload is assessed in rollout cohort 2 with 16 representative test cases. A team repeatedly ignores repository conventions when using Claude Code. What artifact most directly helps?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "A user prompt copied manually with no version control",
        "text_vi": "prompt của người dùng được sao chép thủ công mà không có kiểm soát phiên bản"
      },
      {
        "key": "B",
        "text": "An undocumented tribal checklist",
        "text_vi": "Danh sách kiểm tra bộ lạc không có giấy tờ"
      },
      {
        "key": "C",
        "text": "An unrelated marketing roadmap",
        "text_vi": "Lộ trình tiếp thị không liên quan"
      },
      {
        "key": "D",
        "text": "A maintained CLAUDE.md describing project rules, commands, and boundaries",
        "text_vi": "CLAUDE.md được duy trì mô tả các quy tắc, lệnh và ranh giới của dự án"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Repository guidance provides reusable development context; it does not replace code review or permissions.",
    "question_vi": "Một cuộc hồi cứu thí điểm tại một công ty năng lượng xác định các mối lo ngại trong nền tảng vận hành tài sản xử lý các báo cáo sự cố bảo trì, trong đó áp dụng tác động an toàn vận hành cao. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 16 trường hợp thử nghiệm đại diện. Một nhóm liên tục bỏ qua các quy ước về kho lưu trữ khi sử dụng Mã Claude. Hiện vật nào giúp ích trực tiếp nhất?",
    "explanation_vi": "Hướng dẫn kho lưu trữ cung cấp bối cảnh phát triển có thể tái sử dụng; nó không thay thế việc xem xét mã hoặc quyền."
  },
  {
    "id": 61,
    "topic": "Developer Productivity & Operational Enablement (7%)",
    "question": "At scale, a B2B software vendor expects Claude to support customer support platform users working with support and incident tickets, without compromising multi-tenant isolation. The workload is assessed in rollout cohort 2 with 17 representative test cases. An AI coding assistant proposes a migration that passes unit tests but breaks production integration. What should the workflow add?",
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
    "question_vi": "Ở quy mô lớn, một nhà cung cấp phần mềm B2B kỳ vọng Claude sẽ hỗ trợ người dùng nền tảng hỗ trợ khách hàng làm việc với các phiếu hỗ trợ và sự cố mà không ảnh hưởng đến sự cô lập của nhiều bên thuê. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 17 trường hợp thử nghiệm đại diện. Trợ lý mã hóa AI đề xuất quá trình di chuyển vượt qua các bài kiểm tra đơn vị nhưng lại phá vỡ quá trình tích hợp sản xuất. Quy trình làm việc nên thêm gì?",
    "explanation_vi": "Những thay đổi do AI tạo ra yêu cầu các biện pháp kiểm soát xác thực và phát hành giống như những thay đổi của con người."
  },
  {
    "id": 62,
    "topic": "Governance, Safety & Risk Management (14%)",
    "question": "A cross-functional team at an international retail chain plans to modernize ERP using store-level inventory updates, while maintaining subsecond checkout availability. The workload is assessed in rollout cohort 2 with 22 representative test cases. A team wants to use customer prompts to improve its product. What is the appropriate first governance question?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Whether users prefer longer answers",
        "text_vi": "Người dùng có thích câu trả lời dài hơn không"
      },
      {
        "key": "B",
        "text": "Whether marketing wants the examples",
        "text_vi": "Liệu bộ phận tiếp thị có muốn các ví dụ hay không"
      },
      {
        "key": "C",
        "text": "What consent, purpose limitation, data classification, and retention rules apply?",
        "text_vi": "Những quy tắc chấp thuận, giới hạn mục đích, phân loại dữ liệu và lưu giữ nào được áp dụng?"
      },
      {
        "key": "D",
        "text": "How many tokens can be collected at maximum?",
        "text_vi": "Có thể thu thập tối đa bao nhiêu token?"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Data reuse should follow approved legal and privacy constraints.",
    "question_vi": "Một nhóm đa chức năng tại một chuỗi bán lẻ quốc tế có kế hoạch hiện đại hóa ERP bằng cách sử dụng các bản cập nhật hàng tồn kho ở cấp độ cửa hàng, trong khi vẫn duy trì khả năng thanh toán dưới giây. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 22 trường hợp thử nghiệm đại diện. Một nhóm muốn sử dụng prompt của khách hàng để cải thiện sản phẩm của mình. Câu hỏi quản trị đầu tiên thích hợp là gì?",
    "explanation_vi": "Việc tái sử dụng dữ liệu phải tuân theo các ràng buộc về quyền riêng tư và pháp lý đã được phê duyệt."
  },
  {
    "id": 63,
    "topic": "Solution Design & Architecture (17%)",
    "question": "During a production-readiness review at a government procurement office, the architects examine purchase approval records connected to the procurement workflow, with formal reviewer approval. The workload is assessed in rollout cohort 2 with 24 representative test cases. Which TWO controls are most important for secure and accountable operation of this workflow? (Choose TWO.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "Assume tool calls have zero variance",
        "text_vi": "Giả sử các lệnh gọi công cụ không có phương sai"
      },
      {
        "key": "B",
        "text": "Measure only average model latency",
        "text_vi": "Chỉ đo độ trễ trung bình của mô hình"
      },
      {
        "key": "C",
        "text": "Define the authoritative decision and approval boundary outside the model",
        "text_vi": "Xác định ranh giới quyết định và phê duyệt có thẩm quyền ngoài mô hình"
      },
      {
        "key": "D",
        "text": "Keep a durable evidence trail linking inputs, proposed outcomes, and applied versions",
        "text_vi": "Lưu giữ dấu vết bằng chứng lâu dài liên kết đầu vào, kết quả đề xuất và các phiên bản áp dụng"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "explanation": "Both controls are necessary: define the authoritative decision and approval boundary outside the model; and keep a durable evidence trail linking inputs, proposed outcomes, and applied versions. Model instructions alone do not substitute for enforceable controls.",
    "question_vi": "Trong quá trình đánh giá mức độ sẵn sàng sản xuất tại văn phòng mua sắm của chính phủ, các kiến ​​trúc sư kiểm tra hồ sơ phê duyệt mua hàng được kết nối với quy trình mua sắm với sự chấp thuận của người đánh giá chính thức. Khối lượng công việc được đánh giá trong nhóm triển khai 2 với 24 trường hợp thử nghiệm đại diện. HAI biện pháp kiểm soát nào là quan trọng nhất để vận hành quy trình công việc này một cách an toàn và có trách nhiệm? (Chọn HAI.)",
    "explanation_vi": "Cả hai biện pháp kiểm soát đều cần thiết: xác định ranh giới phê duyệt và quyết định có thẩm quyền bên ngoài mô hình; và lưu giữ dấu vết bằng chứng lâu dài liên kết các đầu vào, kết quả được đề xuất và các phiên bản được áp dụng. Chỉ hướng dẫn mô hình không thể thay thế cho các biện pháp kiểm soát có thể thực thi được."
  }
];
