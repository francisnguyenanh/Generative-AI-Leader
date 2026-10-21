window.QUIZ_DATA_CCARP_SET_9 = [
  {
    "id": 1,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Define evaluation metrics (accuracy, latency, cost, safety, security)",
    "lessonId": "d4-t1",
    "question": "An insurer's claims assistant summarizes each claim narrative for an adjuster and must never auto-deny a claim; denials are human decisions. The architect is defining how the safety dimension will be graded in the eval suite and wants each check to use the cheapest reliable method. Which TWO grading choices should be included? (Choose TWO.)",
    "question_vi": "Trợ lý claim của một công ty bảo hiểm tóm tắt tường thuật mỗi claim cho chuyên viên và không bao giờ được tự động từ chối claim; quyết định từ chối là của con người. Architect đang định nghĩa cách chấm chiều safety trong eval suite và muốn mỗi phép kiểm tra dùng phương pháp rẻ nhất mà đáng tin cậy. HAI lựa chọn chấm nào nên được đưa vào? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "A calibrated LLM judge scoring whether each summary is faithful to the source claim",
        "text_vi": "Một LLM judge đã calibrate chấm xem mỗi tóm tắt có trung thành với claim gốc hay không"
      },
      {
        "key": "B",
        "text": "A code-based check that no deny action or deny label was emitted, expecting zero",
        "text_vi": "Kiểm tra bằng code rằng không có hành động hay nhãn từ chối nào được phát ra, kỳ vọng bằng không"
      },
      {
        "key": "C",
        "text": "Human review of every summary, since safety is the highest-stakes dimension",
        "text_vi": "Con người review mọi bản tóm tắt, vì safety là chiều có rủi ro cao nhất"
      },
      {
        "key": "D",
        "text": "An LLM judge asked to decide whether each output amounts to a denial",
        "text_vi": "Một LLM judge được yêu cầu quyết định liệu mỗi output có tương đương một quyết định từ chối hay không"
      },
      {
        "key": "E",
        "text": "A regex that checks summaries for fabricated facts",
        "text_vi": "Một regex kiểm tra tóm tắt có chứa dữ kiện bịa đặt hay không"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "explanation": "The model answer splits safety into two methods: the deny action is binary, so code handles it, while summary faithfulness requires interpretation, so a calibrated judge handles it. Using a judge for the binary deny check makes a deterministic test interpretive, a regex cannot detect fabrication, and reviewing every summary by hand does not scale beyond samples.",
    "explanation_vi": "Đáp án mẫu tách safety thành hai phương pháp: hành động từ chối là nhị phân nên dùng code, còn độ trung thành của tóm tắt cần diễn giải nên dùng judge đã calibrate. Dùng judge cho kiểm tra từ chối nhị phân biến một phép thử tất định thành diễn giải, regex không phát hiện được nội dung bịa, và con người review mọi bản tóm tắt không scale được ngoài việc lấy mẫu.",
    "source": "output_2/07_Exercise_Evaluation_Framework.md"
  },
  {
    "id": 2,
    "topic": "Governance, Safety & Risk Management (14%)",
    "objective": "Address ethical AI considerations (bias, fairness, transparency)",
    "lessonId": "d5-t5",
    "question": "A health-insurance marketplace has built decision logging for its Claude-assisted plan recommendations to support explanations and fairness audits. The data team proposes keeping every log entry, including full member inputs, indefinitely 'in case a regulator asks someday'. Logging cost grows with traffic. How should the architect set the retention policy?",
    "question_vi": "Một sàn bảo hiểm y tế đã xây decision logging cho các khuyến nghị gói bảo hiểm có hỗ trợ của Claude để phục vụ giải thích và audit fairness. Đội dữ liệu đề xuất giữ mọi dòng log, kể cả toàn bộ input của thành viên, vô thời hạn 'phòng khi một ngày cơ quan quản lý hỏi tới'. Chi phí logging tăng theo traffic. Architect nên đặt chính sách retention thế nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Govern retention to the legally required period, minimize stored fields, and register the log as a control.",
        "text_vi": "Quản trị retention theo đúng thời hạn pháp luật yêu cầu, tối thiểu hóa các trường lưu, và đưa log vào register như một control."
      },
      {
        "key": "B",
        "text": "Keep only aggregate statistics after 24 hours to remove personal data quickly.",
        "text_vi": "Chỉ giữ số liệu tổng sau 24 giờ để nhanh chóng loại bỏ dữ liệu cá nhân."
      },
      {
        "key": "C",
        "text": "Keep everything indefinitely, since transparency obligations outweigh storage cost.",
        "text_vi": "Giữ mọi thứ vô thời hạn, vì nghĩa vụ transparency quan trọng hơn chi phí lưu trữ."
      },
      {
        "key": "D",
        "text": "Adopt a fixed 90-day retention, since that is the standard period for decision logs.",
        "text_vi": "Áp dụng retention cố định 90 ngày, vì đó là thời hạn tiêu chuẩn cho decision log."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "The course notes that holding decision-level data longer and for a specific purpose means the retention policy must be governed: minimization, retention limits and access controls, with the log mapped as a named control in the compliance register. Indefinite retention violates storage limitation, 90 days was an exercise figure rather than a universal standard, and aggregates alone cannot reconstruct individual decisions.",
    "explanation_vi": "Khóa học lưu ý rằng giữ dữ liệu ở mức từng quyết định lâu hơn và cho một mục đích cụ thể nghĩa là chính sách retention phải được quản trị: minimization, giới hạn retention và access control, với log được ánh xạ như một control có tên trong compliance register. Lưu vô thời hạn vi phạm storage limitation, 90 ngày là con số của bài tập chứ không phải chuẩn chung, và chỉ số liệu tổng thì không tái dựng được từng quyết định.",
    "source": "output_3/04_Fairness_and_Accountability.md"
  },
  {
    "id": 3,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "objective": "Document architectures and provide implementation guidance",
    "lessonId": "d6-t4",
    "question": "An Architect returns to a retail loyalty-program assistant after eight months away. The design notes state 'promotions data refreshes nightly' and 'legal approved the 30-day retention' as facts, with no dates or sources, and a list of 'to-dos' without names. The Architect cannot tell what was confirmed. Which documentation practice was missing?",
    "question_vi": "Một Architect quay lại trợ lý chương trình khách hàng thân thiết của một nhà bán lẻ sau tám tháng vắng mặt. Ghi chú thiết kế nêu 'dữ liệu khuyến mãi được làm mới hàng đêm' và 'bộ phận pháp lý đã duyệt việc lưu 30 ngày' như sự thật, không có ngày hay nguồn, cùng một danh sách 'việc cần làm' không có tên người. Architect không biết điều gì đã được xác nhận. Thực hành tài liệu nào đã bị thiếu?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Writing a weekly status email to the sponsor summarising decisions made during that week.",
        "text_vi": "Viết email trạng thái hàng tuần cho sponsor tóm tắt các quyết định trong tuần đó."
      },
      {
        "key": "B",
        "text": "Dating decisions, labeling assumptions as assumptions, and giving open items owners and resolution criteria.",
        "text_vi": "Ghi ngày cho các quyết định, gắn nhãn assumption là assumption, và giao cho việc còn mở owner cùng tiêu chí đóng."
      },
      {
        "key": "C",
        "text": "Recording every design meeting as a video so returning team members can replay the discussions.",
        "text_vi": "Ghi hình mọi buổi họp thiết kế để thành viên quay lại có thể xem lại các cuộc thảo luận."
      },
      {
        "key": "D",
        "text": "Keeping a single master diagram updated after every release so the current state is always visible.",
        "text_vi": "Duy trì một diagram tổng duy nhất được cập nhật sau mỗi lần phát hành để trạng thái hiện tại luôn hiển thị."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "For the returning Architect the document must stand on its own: decisions are dated, assumptions are explicitly labeled rather than embedded as facts, and open items have owners and resolution criteria. Meeting recordings and status emails are not a navigable record and are rarely re-read. An updated diagram shows the current 'what' without distinguishing confirmed facts from assumptions.",
    "explanation_vi": "Với Architect quay lại, tài liệu phải tự đứng được: quyết định có ngày, assumption được gắn nhãn rõ ràng thay vì nhúng như sự thật, và việc còn mở có owner cùng tiêu chí đóng. Video họp và email trạng thái không phải là hồ sơ dễ tra cứu và hiếm khi được đọc lại. Một diagram cập nhật cho thấy 'cái gì' hiện tại mà không phân biệt sự thật đã xác nhận với assumption.",
    "source": "output_4/05_Documentation_and_Knowledge_Handoff.md"
  },
  {
    "id": 4,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Design end-to-end architectures (input → processing → output → feedback loops)",
    "lessonId": "d1-t2",
    "question": "An insurer moved its 'claims over 5,000 pounds need a senior adjuster' check from SQL into Claude's extraction prompt. Three months later an audit found 41 of 14,000 claims misrouted, all with amounts written in prose such as 'around five thousand pounds'. System logs showed normal request and response traffic throughout. Which feedback-loop gap allowed this to stay invisible until the audit?",
    "question_vi": "Một công ty bảo hiểm chuyển kiểm tra 'claim trên 5.000 bảng cần senior adjuster' từ SQL vào prompt trích xuất của Claude. Ba tháng sau, một cuộc audit phát hiện 41 trên 14.000 claim bị route sai, tất cả có số tiền viết bằng lời như 'khoảng năm nghìn bảng'. Log hệ thống cho thấy lưu lượng request và response bình thường suốt thời gian đó. Lỗ hổng nào của vòng phản hồi đã khiến vấn đề vô hình cho tới khi audit?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Request logs were not retained for long enough to compare individual routing decisions across the full three-month period.",
        "text_vi": "Log request không được lưu đủ lâu để so sánh từng quyết định routing trong suốt toàn bộ ba tháng."
      },
      {
        "key": "B",
        "text": "The model was not using extended thinking, which would have exposed its reasoning about each amount in the logs.",
        "text_vi": "Model không dùng extended thinking, thứ lẽ ra sẽ làm lộ suy luận của nó về từng số tiền trong log."
      },
      {
        "key": "C",
        "text": "No business-level routing metrics or eval cases existed; ordinary logs do not record decisions made inside a model call.",
        "text_vi": "Không có metric routing cấp nghiệp vụ hay ca eval nào; log thông thường không ghi lại quyết định đưa ra bên trong một lời gọi model."
      },
      {
        "key": "D",
        "text": "Latency alerts were configured with thresholds that were too loose to catch the slower misrouted claims.",
        "text_vi": "Cảnh báo latency được cấu hình với ngưỡng quá lỏng nên không bắt được các claim bị route sai chậm hơn."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "The misroutes were caught by audit because nothing measured routing as a business outcome: technical logs record traffic, not the choices a model makes within a request, and no eval set covered messy amounts. Longer log retention would still lack the decision signal, extended thinking does not create a monitoring metric, and the failure was not a latency problem.",
    "explanation_vi": "Lỗi route bị audit phát hiện vì không có gì đo routing như một kết quả nghiệp vụ: log kỹ thuật ghi lưu lượng chứ không ghi lựa chọn model đưa ra trong một request, và không có eval set nào phủ các số tiền viết lộn xộn. Lưu log lâu hơn vẫn thiếu tín hiệu quyết định, extended thinking không tạo ra metric giám sát, và lỗi này không phải vấn đề latency.",
    "source": "output/04_Decomposition.md"
  },
  {
    "id": 5,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Conduct A/B testing and iterative improvements",
    "lessonId": "d4-t3",
    "question": "A consulting firm wants to test a new retrieval configuration for its RFP drafting assistant. Baseline task success, measured as consultant acceptance without major revision, is 70%; they want to detect a 5-point improvement at 80% power and 5% significance. The assistant serves 800 requests a day. What experiment plan matches the course guidance?",
    "question_vi": "Một công ty tư vấn muốn thử nghiệm cấu hình retrieval mới cho trợ lý soạn RFP. Task success baseline, đo bằng việc consultant chấp nhận bản nháp mà không sửa lớn, là 70%; họ muốn phát hiện mức cải thiện 5 điểm với power 80% và mức ý nghĩa 5%. Trợ lý phục vụ 800 request mỗi ngày. Kế hoạch thí nghiệm nào khớp với hướng dẫn của khóa học?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Run until the treatment shows a significant lead, then stop",
        "text_vi": "Chạy cho đến khi nhóm treatment dẫn trước có ý nghĩa thống kê rồi dừng"
      },
      {
        "key": "B",
        "text": "About 100 sessions per group over half a day",
        "text_vi": "Khoảng 100 phiên mỗi nhóm trong nửa ngày"
      },
      {
        "key": "C",
        "text": "Roll out to everyone and compare with the previous month",
        "text_vi": "Triển khai cho tất cả và so sánh với tháng trước"
      },
      {
        "key": "D",
        "text": "About 1,500 sessions per group, roughly four days, with groups balanced on RFP complexity",
        "text_vi": "Khoảng 1.500 phiên mỗi nhóm, khoảng bốn ngày, với hai nhóm cân bằng về độ phức tạp RFP"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "The capstone model answer estimates about 1,500 sessions per group, which takes about four days at 800 requests a day split evenly, and controls input distribution by balancing RFP complexity and segmenting by RFP type. One hundred per group is underpowered, stopping when significant is peeking, and a before-and-after comparison confounds the change with other shifts.",
    "explanation_vi": "Đáp án mẫu của bài tổng hợp ước tính khoảng 1.500 phiên mỗi nhóm, mất khoảng bốn ngày với 800 request mỗi ngày chia đều, và kiểm soát phân phối input bằng cách cân bằng độ phức tạp RFP và phân nhóm theo loại RFP. Một trăm mỗi nhóm là thiếu cỡ mẫu, dừng khi thấy có ý nghĩa là peeking, còn so sánh trước và sau trộn lẫn tác động của thay đổi với các biến động khác.",
    "source": "output_2/08_Production_Readiness_and_Wrapup.md"
  },
  {
    "id": 6,
    "topic": "Developer Productivity & Operational Enablement (7%)",
    "objective": "Support debugging and operational issue resolution",
    "lessonId": "d7-t3",
    "question": "A law firm's Architect was called three times this month for the same pattern on the contract-search assistant: answers degrade gradually after large batches of new precedents are added to the corpus. Each time the Architect diagnosed and fixed it personally. Which TWO actions would most durably reduce the Architect's load? (Choose TWO.)",
    "question_vi": "Architect của một công ty luật bị gọi ba lần trong tháng này cho cùng một mẫu sự cố trên trợ lý tìm kiếm hợp đồng: câu trả lời giảm chất lượng dần sau khi các đợt lớn án lệ mới được thêm vào corpus. Mỗi lần Architect đều tự chẩn đoán và sửa. HAI hành động nào giảm tải cho Architect một cách bền vững nhất? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "Write a runbook entry with the team: symptom, likely causes, checks to run and actions to take.",
        "text_vi": "Cùng team viết một entry runbook: triệu chứng, nguyên nhân khả dĩ, các bước kiểm tra và hành động cần làm."
      },
      {
        "key": "B",
        "text": "Keep fixing it personally each time, because a fast fix minimizes disruption to attorneys.",
        "text_vi": "Tiếp tục tự sửa mỗi lần, vì sửa nhanh giảm tối đa gián đoạn cho luật sư."
      },
      {
        "key": "C",
        "text": "Define an escalation path: first line resolves via the runbook and escalates on clear criteria.",
        "text_vi": "Định nghĩa escalation path: tuyến đầu xử lý theo runbook và chuyển lên khi vượt các tiêu chí rõ ràng."
      },
      {
        "key": "D",
        "text": "Schedule a quarterly quality review to catch the decline across all batches at once.",
        "text_vi": "Lên lịch review chất lượng hằng quý để bắt suy giảm của tất cả các đợt cùng một lúc."
      },
      {
        "key": "E",
        "text": "Raise the model tier so it can compensate for weaker retrieval after each corpus update.",
        "text_vi": "Nâng model tier để bù đắp cho truy xuất kém hơn sau mỗi lần cập nhật corpus."
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "A runbook captures the known symptom-to-cause-to-action path so the team resolves recurring issues without the Architect, and an escalation path sets the boundary of what first line handles and when to hand off. Fixing it personally is firefighting that repeats the load, a quarterly review is exactly how drift goes unnoticed for months, and a bigger model masks the index problem while adding cost.",
    "explanation_vi": "Runbook ghi lại con đường đã biết từ triệu chứng đến nguyên nhân đến hành động để team xử lý sự cố lặp lại mà không cần Architect, còn escalation path đặt ranh giới những gì tuyến đầu xử lý và khi nào chuyển giao. Tự sửa là chữa cháy và lặp lại tải, review hằng quý chính là cách drift bị bỏ sót nhiều tháng, còn model lớn hơn che giấu vấn đề index và tăng chi phí.",
    "source": "output_5/04_Operational_Issue_Resolution.md"
  },
  {
    "id": 7,
    "topic": "Developer Productivity & Operational Enablement (7%)",
    "objective": "Improve developer workflows using AI-assisted tooling",
    "lessonId": "d7-t2",
    "question": "A hospital's patient-portal team adopted AI-assisted coding and ships noticeably faster. Last month an AI-generated endpoint passed code review and tests, then exposed appointment data because an input parameter was never validated. The team already runs a linter in CI. What was most likely missing from their workflow?",
    "question_vi": "Team cổng thông tin bệnh nhân của một bệnh viện áp dụng lập trình có AI hỗ trợ và ship nhanh hơn rõ rệt. Tháng trước một endpoint do AI sinh đã qua code review và tests, rồi làm lộ dữ liệu lịch hẹn vì một tham số đầu vào không bao giờ được validate. Team đã chạy linter trong CI. Điều gì có khả năng cao nhất đang thiếu trong workflow của họ?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "A verification checklist that AI-generated code must pass before production, including a security dimension.",
        "text_vi": "Một verification checklist mà code do AI sinh phải vượt qua trước production, bao gồm chiều security."
      },
      {
        "key": "B",
        "text": "A review SLA that lets small AI-generated changes skip security review so reviewers can focus on large diffs.",
        "text_vi": "Một SLA review cho phép các thay đổi nhỏ do AI sinh bỏ qua review bảo mật để reviewer tập trung vào diff lớn."
      },
      {
        "key": "C",
        "text": "Additional linter rules configured to flag more known vulnerability patterns before the merge happens.",
        "text_vi": "Thêm quy tắc linter để gắn cờ nhiều mẫu lỗ hổng đã biết hơn trước khi merge."
      },
      {
        "key": "D",
        "text": "More frequent model upgrades so that generated code reflects the most recent security practices.",
        "text_vi": "Nâng cấp model thường xuyên hơn để code được sinh ra phản ánh các thực hành bảo mật mới nhất."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "The missing control is a verification checklist gating AI-generated code before production, whose security dimension explicitly asks whether inputs are validated and access is least-privilege. An SLA exempting small changes weakens review rather than filling the gap, a linter only catches known patterns and is one automated part inside the checklist, and model upgrades do not replace the team's responsibility to verify.",
    "explanation_vi": "Biện pháp kiểm soát còn thiếu là một verification checklist làm cổng cho code do AI sinh trước production, trong đó chiều security hỏi tường minh input có được validate không và quyền truy cập có theo least privilege không. SLA miễn review cho thay đổi nhỏ làm yếu review chứ không lấp được lỗ hổng, linter chỉ bắt các mẫu đã biết và chỉ là một phần tự động bên trong checklist, còn nâng cấp model không thay thế được trách nhiệm xác minh của team.",
    "source": "output_5/05_Wrapup_Quiz_and_Glossary.md"
  },
  {
    "id": 8,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Apply decomposition techniques for complex problem solving",
    "lessonId": "d1-t5",
    "question": "A hospital's discharge-planning assistant has a step 'decide whether to escalate a patient-safety incident to the nursing director'. A product manager suggests Claude should own it because it reads the incident narrative best. Applying Reversibility, Stakes and Accountability, what is the right assignment?",
    "question_vi": "Trợ lý lập kế hoạch xuất viện của một bệnh viện có bước 'quyết định có leo thang sự cố an toàn người bệnh lên giám đốc điều dưỡng không'. Một product manager đề xuất Claude nên sở hữu vì nó đọc diễn biến sự cố tốt nhất. Áp dụng Reversibility, Stakes và Accountability, cách gán đúng là gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Existing system: a keyword rule engine decides, since a rules table is always more reliable than judgment.",
        "text_vi": "Hệ thống hiện có: rule engine từ khóa quyết định, vì bảng quy tắc luôn đáng tin hơn phán đoán."
      },
      {
        "key": "B",
        "text": "Human-retained: Claude may summarize the narrative, but a person decides and is accountable for the escalation.",
        "text_vi": "Human-retained: Claude có thể tóm tắt diễn biến, nhưng một người quyết định và chịu trách nhiệm về việc leo thang."
      },
      {
        "key": "C",
        "text": "AI-appropriate: Claude decides and escalates, since reading narratives is exactly the language work it does best.",
        "text_vi": "AI-appropriate: Claude quyết định và leo thang, vì đọc diễn biến chính là việc ngôn ngữ nó làm tốt nhất."
      },
      {
        "key": "D",
        "text": "Collaborative: Claude decides, and a person is notified afterwards that the decision was made automatically.",
        "text_vi": "Collaborative: Claude quyết định, và một người được thông báo sau đó rằng quyết định được đưa ra tự động."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Safety-incident escalation is a judgment call with high stakes, hard-to-undo consequences and a person who must answer for it, so it stays human-retained with Claude supporting. Letting Claude decide mistakes language skill for authority, a keyword table cannot replace judgment here, and notifying a person after an automatic decision is not collaboration.",
    "explanation_vi": "Leo thang sự cố an toàn là quyết định phán đoán với stakes cao, hậu quả khó đảo ngược và có người phải chịu trách nhiệm, nên nó giữ ở human-retained với Claude hỗ trợ. Để Claude quyết định là nhầm kỹ năng ngôn ngữ với thẩm quyền, bảng từ khóa không thay thế được phán đoán ở đây, và thông báo cho người sau quyết định tự động không phải cộng tác.",
    "source": "output/04_Decomposition.md"
  },
  {
    "id": 9,
    "topic": "Governance, Safety & Risk Management (14%)",
    "objective": "Address ethical AI considerations (bias, fairness, transparency)",
    "lessonId": "d5-t5",
    "question": "A financial regulator asks a credit-card issuer to demonstrate that comparable applicants were treated consistently by its Claude-assisted limit-setting system over the past year, and to reconstruct three specific decisions on demand. The issuer currently stores only the final limit and a timestamp. What must the architecture provide?",
    "question_vi": "Một cơ quan quản lý tài chính yêu cầu một tổ chức phát hành thẻ tín dụng chứng minh rằng các người nộp đơn tương đương được hệ thống đặt hạn mức có hỗ trợ của Claude xử lý nhất quán trong năm qua, và tái dựng ba quyết định cụ thể theo yêu cầu. Hiện tổ chức chỉ lưu hạn mức cuối cùng và dấu thời gian. Kiến trúc phải cung cấp điều gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "A real-time dashboard of approval volume and average limit by week.",
        "text_vi": "Một dashboard thời gian thực về khối lượng chấp thuận và hạn mức trung bình theo tuần."
      },
      {
        "key": "B",
        "text": "A plain-language explanation generator that tells each applicant why their limit was set.",
        "text_vi": "Một bộ sinh giải thích bằng ngôn ngữ dễ hiểu cho mỗi người nộp đơn biết vì sao hạn mức được đặt như vậy."
      },
      {
        "key": "C",
        "text": "A durable, queryable record of inputs, outputs and decision path for each decision.",
        "text_vi": "Một bản ghi bền vững, truy vấn được về input, output và đường đi quyết định cho từng quyết định."
      },
      {
        "key": "D",
        "text": "A copy of the current system prompt and model version used in production.",
        "text_vi": "Một bản sao system prompt hiện tại và phiên bản model đang dùng ở production."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "The course says a regulator needs evidence of consistent treatment and on-demand reconstruction, which requires a durable, queryable record of inputs, outputs and decision path. An applicant-facing explanation serves the affected user, aggregate volume dashboards cannot answer comparability per decision, and the current prompt and model version do not reconstruct past individual decisions.",
    "explanation_vi": "Khóa học nói regulator cần bằng chứng về xử lý nhất quán và khả năng tái dựng theo yêu cầu, điều này đòi hỏi một bản ghi bền vững, truy vấn được về input, output và đường đi quyết định. Giải thích hướng người nộp đơn phục vụ người bị ảnh hưởng, dashboard khối lượng tổng không trả lời được tính tương đương cho từng quyết định, còn prompt và phiên bản model hiện tại không tái dựng được các quyết định riêng lẻ trong quá khứ.",
    "source": "output_3/04_Fairness_and_Accountability.md"
  },
  {
    "id": 10,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Align solutions to business value pillars (efficiency, transformation, productivity, cost, performance SLAs)",
    "lessonId": "d1-t6",
    "question": "A hospital network's sponsor tells the architect that 'productivity gains' from a documentation assistant should be presented to the board as headcount reductions. The clinicians' union has asked what the assistant means for staffing. How should the architect frame the productivity pillar?",
    "question_vi": "Sponsor của một mạng lưới bệnh viện bảo architect rằng 'lợi ích năng suất' của trợ lý tài liệu nên được trình bày với hội đồng như cắt giảm nhân sự. Công đoàn clinician đã hỏi trợ lý có ý nghĩa gì với biên chế. Architect nên định khung trụ cột productivity thế nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "As headcount reduction, because that is the only form in which productivity can be expressed as financial value.",
        "text_vi": "Là cắt giảm nhân sự, vì đó là hình thức duy nhất để biểu diễn năng suất thành giá trị tài chính."
      },
      {
        "key": "B",
        "text": "As a benefit that should not be mentioned to the union, since discussing it would delay deployment.",
        "text_vi": "Là lợi ích không nên nói với công đoàn, vì thảo luận sẽ làm chậm triển khai."
      },
      {
        "key": "C",
        "text": "As a purely technical metric such as tokens processed per clinician, which avoids staffing questions entirely.",
        "text_vi": "Là một metric thuần kỹ thuật như số token xử lý mỗi clinician, tránh hoàn toàn các câu hỏi về biên chế."
      },
      {
        "key": "D",
        "text": "As capacity released for higher-value clinical work unless the sponsor has explicitly defined a different goal.",
        "text_vi": "Là năng lực được giải phóng cho công việc lâm sàng giá trị cao hơn trừ khi sponsor đã xác định tường minh mục tiêu khác."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Productivity should be presented as freed capacity for higher-value work unless the sponsor has defined another goal, which is also the honest framing. Headcount is not the only way to express value, a token metric is not a business outcome, and withholding the framing from affected staff is an ethical and delivery risk.",
    "explanation_vi": "Productivity nên được trình bày là năng lực được giải phóng cho việc giá trị cao hơn trừ khi sponsor đã xác định mục tiêu khác, cũng là cách định khung trung thực. Biên chế không phải cách duy nhất biểu diễn giá trị, metric token không phải kết quả kinh doanh, và giấu cách định khung với nhân viên bị ảnh hưởng là rủi ro về đạo đức và triển khai.",
    "source": "output_4/09_Supplement_Business_Value_and_Discovery_Toolkit.md"
  },
  {
    "id": 11,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Design end-to-end architectures (input → processing → output → feedback loops)",
    "lessonId": "d1-t2",
    "question": "An electronics retailer's support assistant answers 'Where is my order?' from a vector index of order-history text refreshed nightly. A customer was told her order shipped on the 12th, but it had been returned to the depot and was awaiting re-dispatch. Latency is normal and no errors were logged. An order-status API exists but is not called. What is the right fix?",
    "question_vi": "Trợ lý hỗ trợ của một nhà bán lẻ điện tử trả lời 'Đơn của tôi đâu?' từ một vector index chứa văn bản lịch sử đơn hàng được refresh hằng đêm. Một khách hàng được báo đơn đã giao đi ngày 12, nhưng thực tế đơn đã bị trả về kho và đang chờ giao lại. Latency bình thường và không có lỗi nào được log. Có sẵn API trạng thái đơn hàng nhưng không được gọi. Cách sửa đúng là gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Route order-status intents to a tool call against the order-status API and keep retrieval for FAQ content.",
        "text_vi": "Chuyển intent trạng thái đơn hàng sang tool call tới API trạng thái đơn, và giữ retrieval cho nội dung FAQ."
      },
      {
        "key": "B",
        "text": "Refresh the order index every five minutes so the retrieved snapshots stay close to the current status.",
        "text_vi": "Refresh index đơn hàng mỗi năm phút để các snapshot được truy hồi luôn sát với trạng thái hiện tại."
      },
      {
        "key": "C",
        "text": "Raise the similarity threshold so only the closest-matching order chunk is passed to the model.",
        "text_vi": "Tăng similarity threshold để chỉ chunk đơn hàng khớp nhất được đưa cho model."
      },
      {
        "key": "D",
        "text": "Switch to a higher-quality embedding model so that retrieval distinguishes older and newer order snapshots.",
        "text_vi": "Chuyển sang embedding model chất lượng cao hơn để retrieval phân biệt được snapshot đơn hàng cũ và mới."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Order status is live state, and an index only captures text snapshots, so the fix is a tool call to the system that owns the current value while the knowledge base keeps FAQ content. A shorter refresh interval, a higher similarity threshold and a better embedding model are exactly the remedies the course names as not fixing this category error, because similarity is not truth.",
    "explanation_vi": "Trạng thái đơn hàng là live state, còn index chỉ lưu snapshot văn bản, nên cách sửa là tool call tới hệ thống sở hữu giá trị hiện tại trong khi knowledge base giữ nội dung FAQ. Rút ngắn chu kỳ refresh, tăng similarity threshold và dùng embedding model tốt hơn chính là các biện pháp mà khóa học nêu rõ là không sửa được lỗi phân loại này, vì similarity không phải là sự thật.",
    "source": "output/06_Reference_Architectures.md"
  },
  {
    "id": 12,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "objective": "Optimize context windows and manage token usage",
    "lessonId": "d2-t4",
    "question": "A fashion retailer's product-Q&A assistant produces long, chatty answers averaging 900 tokens, while the UI shows only the first few lines. Output-token spend dominates the bill and generation time pushes p95 latency over target. Quality on the eval is acceptable. Which change best targets the driver?",
    "question_vi": "Trợ lý hỏi đáp sản phẩm của một nhà bán lẻ thời trang tạo ra câu trả lời dài, dông dài, trung bình 900 token, trong khi UI chỉ hiển thị vài dòng đầu. Chi phí output token chiếm phần lớn hóa đơn và thời gian sinh đẩy p95 latency vượt mục tiêu. Chất lượng trên eval chấp nhận được. Thay đổi nào nhắm đúng vào yếu tố gây ra vấn đề nhất?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Add retrieval of more product data so the answers become more precise.",
        "text_vi": "Thêm truy xuất nhiều dữ liệu sản phẩm hơn để câu trả lời chính xác hơn."
      },
      {
        "key": "B",
        "text": "Ask for a concise structured answer, set a suitable max_tokens, and monitor stop_reason for truncation.",
        "text_vi": "Yêu cầu câu trả lời ngắn gọn có cấu trúc, đặt max_tokens phù hợp, và theo dõi stop_reason để phát hiện bị cắt."
      },
      {
        "key": "C",
        "text": "Switch to the Batch API so that answers are produced at a discounted rate.",
        "text_vi": "Chuyển sang Batch API để câu trả lời được tạo ra với mức giá chiết khấu."
      },
      {
        "key": "D",
        "text": "Enable prompt caching on the system prompt to reduce the cost of each answer and the time to first token.",
        "text_vi": "Bật prompt caching cho system prompt để giảm chi phí mỗi câu trả lời và thời gian tới token đầu tiên."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Output tokens usually cost more than input tokens and generation time scales with output length, so limiting output through concise structured formats and a sensible max_tokens targets the actual driver, with stop_reason monitoring to catch truncation. Caching reduces repeated input cost, not output. The Batch API is asynchronous and unsuitable for interactive Q&A, and more retrieved data adds input without shortening the answers.",
    "explanation_vi": "Output token thường đắt hơn input token và thời gian sinh tỉ lệ với độ dài output, nên giới hạn output bằng định dạng ngắn gọn có cấu trúc và max_tokens hợp lý nhắm đúng yếu tố gây ra vấn đề, cùng với việc theo dõi stop_reason để phát hiện bị cắt. Caching giảm chi phí input lặp lại, không phải output. Batch API là bất đồng bộ và không phù hợp cho hỏi đáp tương tác, còn truy xuất thêm dữ liệu làm tăng input mà không rút ngắn câu trả lời.",
    "source": "output_2/09_Supplement_Integration_Mechanisms_and_Optimization.md"
  },
  {
    "id": 13,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Translate business problems into Claude-based AI solutions",
    "lessonId": "d1-t1",
    "question": "An architect is setting up discovery for a clinical documentation project across a hospital network. Previous projects at this client were blocked late because privacy obligations surfaced at final review, and nurses rejected tools that did not fit their workflow. Which two stakeholders should be engaged as Consulted during discovery? (Choose TWO.)",
    "question_vi": "Một architect đang chuẩn bị discovery cho dự án tài liệu lâm sàng trên một mạng lưới bệnh viện. Các dự án trước tại khách hàng này bị chặn muộn vì nghĩa vụ privacy lộ ra ở review cuối, và điều dưỡng đã từ chối các công cụ không khớp workflow của họ. Hai stakeholder nào nên được mời với vai trò Consulted trong discovery? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "The CFO as Accountable for the build budget, replacing the executive sponsor.",
        "text_vi": "CFO với vai trò Accountable cho ngân sách build, thay thế executive sponsor."
      },
      {
        "key": "B",
        "text": "An external auditor, who should sign the statement of work before discovery begins.",
        "text_vi": "Một auditor bên ngoài, người nên ký statement of work trước khi discovery bắt đầu."
      },
      {
        "key": "C",
        "text": "Frontline nurses and clinicians, interviewed about how the documentation workflow actually runs.",
        "text_vi": "Điều dưỡng và clinician tuyến đầu, được phỏng vấn về cách workflow tài liệu thực sự vận hành."
      },
      {
        "key": "D",
        "text": "The privacy or compliance officer, so must-prove and must-not-do obligations surface early.",
        "text_vi": "Privacy hoặc compliance officer, để nghĩa vụ must-prove và must-not-do lộ ra sớm."
      },
      {
        "key": "E",
        "text": "The model vendor's sales team, to confirm which model tier the design should use.",
        "text_vi": "Đội sales của nhà cung cấp model, để xác nhận thiết kế nên dùng tier model nào."
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "explanation": "Late constraints are often a missing Consulted stakeholder: compliance and privacy must be asked during discovery, and end users are consulted on their real workflow. Finance is typically Informed during the build and Accountable for expansion decisions, an external auditor signing the SOW before discovery is not part of the approach, and model tier is an architecture decision grounded in evals, not vendor confirmation.",
    "explanation_vi": "Constraint xuất hiện muộn thường do thiếu một stakeholder Consulted: compliance và privacy phải được hỏi trong discovery, và người dùng cuối được tham vấn về workflow thực tế. Tài chính thường là Informed trong giai đoạn build và Accountable cho quyết định mở rộng, việc auditor bên ngoài ký SOW trước discovery không thuộc cách tiếp cận này, và tier model là quyết định kiến trúc dựa trên eval chứ không dựa vào xác nhận của nhà cung cấp.",
    "source": "output_4/09_Supplement_Business_Value_and_Discovery_Toolkit.md"
  },
  {
    "id": 14,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "objective": "Optimize context windows and manage token usage",
    "lessonId": "d2-t4",
    "question": "A telco's long-running retention-chat agent compacts older turns into a free-text summary. Since compaction was introduced, the agent occasionally re-offers a discount the customer already declined and quotes the wrong contract number. Cost and latency targets are met. What is the best fix?",
    "question_vi": "Agent chat giữ chân khách hàng chạy dài của một nhà mạng compaction các lượt cũ thành bản tóm tắt văn bản tự do. Kể từ khi đưa compaction vào, agent thỉnh thoảng đề nghị lại một ưu đãi mà khách đã từ chối và trích sai số hợp đồng. Mục tiêu chi phí và latency đều đạt. Cách sửa tốt nhất là gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Disable compaction and resend the full transcript on every turn instead.",
        "text_vi": "Tắt compaction và thay vào đó gửi lại toàn bộ bản ghi ở mọi lượt."
      },
      {
        "key": "B",
        "text": "Run compaction more often so each summary covers fewer turns and is more accurate.",
        "text_vi": "Chạy compaction thường xuyên hơn để mỗi bản tóm tắt bao phủ ít lượt hơn và chính xác hơn."
      },
      {
        "key": "C",
        "text": "Keep identifiers, amounts and prior decisions verbatim in a separate facts-and-decisions structure.",
        "text_vi": "Giữ nguyên văn mã định danh, số tiền và các quyết định trước đó trong một cấu trúc facts-và-decisions riêng."
      },
      {
        "key": "D",
        "text": "Move the summarization step to Opus so the free-text summaries capture more detail from each session.",
        "text_vi": "Chuyển bước tóm tắt sang Opus để bản tóm tắt văn bản tự do nắm được nhiều chi tiết hơn từ mỗi phiên."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Compaction breaks down when summaries drop load-bearing detail such as exact identifiers, numeric values and prior decisions; the course advice is to keep those verbatim, for example in a separate facts and decisions structure, rather than trusting a free summary. Returning to the full transcript reintroduces linear growth and the window cliff, more frequent compaction still loses detail, and a larger summarizer is still free text with no guarantee of fidelity.",
    "explanation_vi": "Compaction thất bại khi bản tóm tắt làm rơi chi tiết load-bearing như mã định danh chính xác, giá trị số và quyết định trước đó; lời khuyên của course là giữ nguyên văn những thứ đó, ví dụ trong một cấu trúc facts và decisions riêng, thay vì tin vào bản tóm tắt tự do. Quay lại gửi toàn bộ bản ghi là đưa trở lại sự tăng trưởng tuyến tính và vách window, compaction thường xuyên hơn vẫn mất chi tiết, còn bộ tóm tắt lớn hơn vẫn là văn bản tự do không có đảm bảo về độ trung thực.",
    "source": "output/08_Model_Context_Strategy.md"
  },
  {
    "id": 15,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "objective": "Optimize context windows and manage token usage",
    "lessonId": "d2-t4",
    "question": "A retail bank's internal operations agent has 80 tool definitions loaded on every request. Logs show it frequently picks the wrong tool, and tool definitions account for a large share of input tokens, although each request uses only two or three tools. Which two changes are most appropriate? (Choose TWO.)",
    "question_vi": "Agent vận hành nội bộ của một ngân hàng bán lẻ có 80 định nghĩa tool được nạp ở mọi request. Log cho thấy nó thường chọn sai tool, và định nghĩa tool chiếm phần lớn input token, dù mỗi request chỉ dùng hai hoặc ba tool. Hai thay đổi nào phù hợp nhất? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "Load only the relevant tools on demand through progressive discovery.",
        "text_vi": "Chỉ nạp các tool liên quan theo nhu cầu qua progressive discovery."
      },
      {
        "key": "B",
        "text": "Remove out-of-scope tools and merge or narrow overlapping ones.",
        "text_vi": "Gỡ các tool ngoài phạm vi và gộp hoặc thu hẹp các tool chồng chéo."
      },
      {
        "key": "C",
        "text": "Repeat all tool descriptions in the system prompt for emphasis.",
        "text_vi": "Lặp lại mọi mô tả tool trong system prompt để nhấn mạnh."
      },
      {
        "key": "D",
        "text": "Move the agent to the largest model tier to improve tool choice.",
        "text_vi": "Chuyển agent sang model tier lớn nhất để cải thiện việc chọn tool."
      },
      {
        "key": "E",
        "text": "Raise max_tokens so the agent has room to consider every tool.",
        "text_vi": "Tăng max_tokens để agent có chỗ cân nhắc mọi tool."
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "explanation": "This is capability bloat combined with monolithic loading of capabilities: trimming and narrowing the tool set removes noise and attack surface, and progressive discovery loads only what each request needs, cutting tokens and improving selection. A larger model is costlier and leaves the root cause in place, max_tokens governs output rather than input selection, and repeating descriptions adds even more input tokens.",
    "explanation_vi": "Đây là capability bloat kết hợp với việc nạp năng lực theo kiểu monolithic: thu gọn và thu hẹp bộ tool loại bỏ nhiễu và bề mặt tấn công, còn progressive discovery chỉ nạp những gì mỗi request cần, giảm token và cải thiện việc chọn tool. Model lớn hơn đắt hơn và để nguyên nguyên nhân gốc, max_tokens điều khiển output chứ không phải việc chọn input, còn lặp lại mô tả lại thêm nhiều input token hơn.",
    "source": "output_2/09_Supplement_Integration_Mechanisms_and_Optimization.md"
  },
  {
    "id": 16,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "objective": "Document architectures and provide implementation guidance",
    "lessonId": "d6-t4",
    "question": "An external auditor reviewing a clinic network's note-drafting assistant rejects the control documentation, which states: 'All generated notes are authorized by a licensed clinician before filing.' The auditor says the statement is an assertion, not proof. Which two additions would make this control acceptable to the reviewer? (Choose TWO.)",
    "question_vi": "Một kiểm toán viên bên ngoài khi rà soát trợ lý soạn ghi chú của một chuỗi phòng khám bác bỏ tài liệu control, trong đó ghi: 'Mọi ghi chú được sinh ra đều được clinician có giấy phép phê duyệt trước khi lưu hồ sơ.' Kiểm toán viên nói đây là một lời khẳng định, không phải bằng chứng. Hai bổ sung nào giúp control này được reviewer chấp nhận? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "An evidence artifact, such as timestamped authorization records linking clinician, note and interaction, or a returned log query.",
        "text_vi": "Một evidence artifact, như các bản ghi phê duyệt có timestamp liên kết clinician, ghi chú và tương tác, hoặc kết quả trả về của một log query."
      },
      {
        "key": "B",
        "text": "Screenshots from the pre-launch demo showing the approval button in the clinician interface.",
        "text_vi": "Ảnh chụp màn hình từ bản demo trước launch cho thấy nút phê duyệt trong giao diện clinician."
      },
      {
        "key": "C",
        "text": "A reference to the vendor's general compliance certifications for the hosting platform.",
        "text_vi": "Tham chiếu đến các chứng nhận compliance chung của nhà cung cấp cho nền tảng hosting."
      },
      {
        "key": "D",
        "text": "The named owner of the control and its audit-ready status, showing the evidence is current and sufficient.",
        "text_vi": "Owner cụ thể của control và trạng thái audit-ready, cho thấy bằng chứng còn hiện hành và đầy đủ."
      },
      {
        "key": "E",
        "text": "A longer narrative describing the authorization workflow step by step, signed by the clinical director.",
        "text_vi": "Một đoạn mô tả dài hơn về quy trình phê duyệt từng bước, có chữ ký của giám đốc lâm sàng."
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "explanation": "The compliance reviewer needs the obligation, the control, its owner and an evidence artifact demonstrating the control is operating, plus whether that evidence is audit-ready. A longer narrative is still an assertion, and demo screenshots do not prove the control operates in production. Platform certifications do not show that this workflow's authorization control is live.",
    "explanation_vi": "Compliance reviewer cần nghĩa vụ, control, owner của nó và một evidence artifact chứng minh control đang hoạt động, cộng với việc bằng chứng đó đã audit-ready hay chưa. Một đoạn mô tả dài hơn vẫn là assertion, và ảnh chụp demo không chứng minh control hoạt động trong production. Chứng nhận của nền tảng không cho thấy control phê duyệt của quy trình này đang hoạt động.",
    "source": "output_4/05_Documentation_and_Knowledge_Handoff.md"
  },
  {
    "id": 17,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Conduct A/B testing and iterative improvements",
    "lessonId": "d4-t3",
    "question": "A telco support team compared a revised prompt against the current one on 50 customer sessions each. Task success was 69% for the new prompt and 63% for the old one, and the team lead wants to roll the new prompt out to all customers today. Inputs were routed to each group by whichever agent queue was free. What should the architect conclude?",
    "question_vi": "Một team hỗ trợ của nhà mạng so sánh prompt đã sửa với prompt hiện tại trên 50 phiên khách hàng mỗi bên. Task success là 69% với prompt mới và 63% với prompt cũ, và trưởng nhóm muốn triển khai prompt mới cho mọi khách hàng ngay hôm nay. Input được phân cho mỗi nhóm theo hàng đợi agent nào đang rảnh. Architect nên kết luận gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "The result is probably model drift and should be retested next month",
        "text_vi": "Kết quả có thể là model drift và nên kiểm tra lại vào tháng sau"
      },
      {
        "key": "B",
        "text": "The new prompt should ship, but only to the queue that performed best",
        "text_vi": "Prompt mới nên được ship, nhưng chỉ cho hàng đợi có kết quả tốt nhất"
      },
      {
        "key": "C",
        "text": "The 6-point gain is real because it exceeds 5 points",
        "text_vi": "Mức tăng 6 điểm là thật vì vượt quá 5 điểm"
      },
      {
        "key": "D",
        "text": "The comparison is underpowered and uncontrolled, so it is confirmation rather than evidence",
        "text_vi": "Phép so sánh thiếu cỡ mẫu và không được kiểm soát, nên đó là xác nhận chứ không phải bằng chứng"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "This mirrors the course's '50-session winner': a 6-point difference on a high-variance metric needs samples in the hundreds, and non-random routing means the groups may differ in input mix. Treating the gap as real ignores noise, attributing it to drift misreads a sampling problem, and shipping to one queue still relies on the same unreliable comparison.",
    "explanation_vi": "Trường hợp này giống '50-session winner' của khóa học: chênh lệch 6 điểm trên metric có phương sai cao cần mẫu hàng trăm, và việc phân nhóm không ngẫu nhiên khiến hai nhóm có thể khác nhau về cơ cấu input. Coi chênh lệch là thật là bỏ qua nhiễu, quy cho drift là đọc sai một vấn đề lấy mẫu, còn ship cho một hàng đợi vẫn dựa trên cùng phép so sánh không đáng tin.",
    "source": "output_2/06_AB_Testing_and_Observability.md"
  },
  {
    "id": 18,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Define evaluation metrics (accuracy, latency, cost, safety, security)",
    "lessonId": "d4-t1",
    "question": "A public-sector agency runs a RAG assistant that answers staff questions about benefit regulations. Its eval suite scores only final answer quality with a calibrated judge. The corpus is updated weekly as regulations change. The architect wants to detect degradation before answer quality visibly drops. Which additional metric best serves that goal?",
    "question_vi": "Một cơ quan nhà nước vận hành trợ lý RAG trả lời câu hỏi của nhân viên về quy định trợ cấp. Eval suite chỉ chấm chất lượng câu trả lời cuối bằng judge đã calibrate. Kho tài liệu được cập nhật hằng tuần khi quy định thay đổi. Architect muốn phát hiện suy giảm trước khi chất lượng câu trả lời giảm rõ rệt. Metric bổ sung nào phục vụ tốt nhất mục tiêu đó?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Retrieval precision and recall against a labeled query set, tracked as system metrics",
        "text_vi": "Retrieval precision và recall trên tập truy vấn có nhãn, theo dõi như metric hệ thống"
      },
      {
        "key": "B",
        "text": "Average output token count per answer",
        "text_vi": "Số output token trung bình mỗi câu trả lời"
      },
      {
        "key": "C",
        "text": "Latency p95 of the generation step alone",
        "text_vi": "Latency p95 của riêng bước sinh câu trả lời"
      },
      {
        "key": "D",
        "text": "The rate of HTTP 5xx errors returned by the API",
        "text_vi": "Tỉ lệ lỗi HTTP 5xx do API trả về"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "The first thing to break in RAG is retrieval quality drift as documents are added or removed, and the course mitigation is to monitor retrieval precision and recall as system metrics, not just output quality. Output length, generation latency and 5xx rates are cost or infrastructure signals that do not reveal whether the right chunks are being retrieved.",
    "explanation_vi": "Điểm gãy đầu tiên của RAG là retrieval quality drift khi tài liệu được thêm hoặc xóa, và biện pháp của khóa học là giám sát retrieval precision và recall như metric hệ thống, không chỉ chất lượng output. Độ dài output, latency của bước sinh và tỉ lệ 5xx là tín hiệu chi phí hoặc hạ tầng, không cho biết các chunk đúng có được truy xuất hay không.",
    "source": "output_2/03_POC_to_Production.md"
  },
  {
    "id": 19,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "objective": "Optimize context windows and manage token usage",
    "lessonId": "d2-t4",
    "question": "A procurement team wants a single-shot comparison of two supplier contracts of about ten pages each, flagging every clause where the terms differ. Input sizes are predictable, the instruction block is identical on every run, and retrieval latency is unwelcome. Which context strategy fits best?",
    "question_vi": "Một đội mua sắm muốn so sánh một lần hai hợp đồng nhà cung cấp, mỗi hợp đồng khoảng mười trang, đánh dấu mọi điều khoản có điều kiện khác nhau. Kích thước input dự đoán được, khối chỉ dẫn giống hệt nhau ở mọi lần chạy, và không mong muốn latency của bước truy xuất. Chiến lược context nào phù hợp nhất?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Retrieval: chunk both contracts and fetch the top-k clauses most similar to the query for comparison.",
        "text_vi": "Retrieval: chunk cả hai hợp đồng và lấy top-k điều khoản giống truy vấn nhất để so sánh."
      },
      {
        "key": "B",
        "text": "Monolithic: load both contracts in full, with the fixed instruction block first and cached.",
        "text_vi": "Monolithic: nạp đầy đủ cả hai hợp đồng, với khối chỉ dẫn cố định đứng đầu và được cache."
      },
      {
        "key": "C",
        "text": "Compaction: summarize each contract first, then compare the two summaries.",
        "text_vi": "Compaction: tóm tắt từng hợp đồng trước, rồi so sánh hai bản tóm tắt."
      },
      {
        "key": "D",
        "text": "Progressive: send one clause pair per call and carry forward only the latest result.",
        "text_vi": "Progressive: gửi một cặp điều khoản mỗi lời gọi và chỉ mang theo kết quả gần nhất."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Monolithic context earns its place for bounded tasks with predictable input sizes, stable prefixes that benefit from caching, single-shot work where retrieval latency is not worth paying, and reasoning that needs simultaneous access to all material, as a two-contract comparison does. Top-k retrieval can miss clauses that differ, summaries drop the clause-level detail being compared, and clause-by-clause progressive calls lose the cross-document view.",
    "explanation_vi": "Monolithic context phù hợp với tác vụ có giới hạn, kích thước input dự đoán được, prefix ổn định hưởng lợi từ caching, công việc một lần mà latency truy xuất không đáng trả, và suy luận cần truy cập đồng thời toàn bộ tài liệu, như việc so sánh hai hợp đồng. Truy xuất top-k có thể bỏ sót các điều khoản khác nhau, bản tóm tắt làm rơi chi tiết cấp điều khoản cần so sánh, còn gọi progressive theo từng điều khoản làm mất góc nhìn xuyên tài liệu.",
    "source": "output/08_Model_Context_Strategy.md"
  },
  {
    "id": 20,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Optimize token usage, latency, and cost-performance trade-offs",
    "lessonId": "d4-t5",
    "question": "A manufacturer's document-triage POC processed about 30 requests a day for a few dollars a month. The plant director asks the architect to present expected production cost for 25,000 documents a day at next week's investment committee. A colleague suggests simply scaling the POC bill. How should the cost be presented?",
    "question_vi": "POC phân loại tài liệu của một nhà sản xuất xử lý khoảng 30 request mỗi ngày với chi phí vài đô mỗi tháng. Giám đốc nhà máy yêu cầu architect trình bày chi phí production dự kiến cho 25.000 tài liệu mỗi ngày tại hội đồng đầu tư tuần tới. Một đồng nghiệp gợi ý chỉ cần nhân hóa đơn POC lên. Chi phí nên được trình bày thế nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Quote the cost of the cheapest model tier to keep the committee comfortable",
        "text_vi": "Báo chi phí của model tier rẻ nhất để hội đồng yên tâm"
      },
      {
        "key": "B",
        "text": "Scale the POC bill linearly, since the per-request cost is already measured",
        "text_vi": "Nhân tuyến tính hóa đơn POC, vì chi phí mỗi request đã được đo"
      },
      {
        "key": "C",
        "text": "Model production volume, the token distribution and tier, and present the estimate with error bounds and sensitivity",
        "text_vi": "Mô hình hóa volume production, phân phối token và tier, rồi trình bày ước tính kèm khoảng sai số và sensitivity"
      },
      {
        "key": "D",
        "text": "Present the POC bill and promise to optimize after go-live",
        "text_vi": "Trình bày hóa đơn POC và cam kết tối ưu sau khi go-live"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "The course postmortem quote says a POC can inform a production estimate only if scaled to expected production volume with appropriate error bounds, and that presenting raw demo costs is where risk lives; distribution and sensitivity analysis complete the model. Linear scaling of a non-representative sample, deferring the question, or quoting a tier chosen without an eval all mislead the committee.",
    "explanation_vi": "Trích dẫn postmortem của khóa học nói POC chỉ có thể làm cơ sở cho ước tính production nếu được ngoại suy theo volume production dự kiến với khoảng sai số phù hợp, và việc trình bày chi phí demo thô chính là nơi rủi ro nằm; phân phối và sensitivity analysis hoàn thiện mô hình. Nhân tuyến tính một mẫu không đại diện, hoãn câu hỏi, hay báo giá theo tier được chọn mà không eval đều đánh lừa hội đồng.",
    "source": "output_2/03_POC_to_Production.md"
  },
  {
    "id": 21,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Conduct A/B testing and iterative improvements",
    "lessonId": "d4-t3",
    "question": "A telco's network-support assistant has a prompt change that passed offline evals and two weeks of shadow testing. Bounded exposure is now acceptable, and leadership wants to limit the blast radius if real users react badly. Which rollout plan best follows the safe progression described in the course material?",
    "question_vi": "Trợ lý hỗ trợ mạng của một nhà mạng có một thay đổi prompt đã pass offline eval và hai tuần shadow testing. Giờ đây mức phơi nhiễm có giới hạn là chấp nhận được, và ban lãnh đạo muốn hạn chế phạm vi ảnh hưởng nếu người dùng thật phản ứng không tốt. Kế hoạch triển khai nào tuân theo tốt nhất lộ trình an toàn được mô tả trong tài liệu khóa học?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Switch 100% of traffic at once and watch the dashboard",
        "text_vi": "Chuyển 100% traffic cùng lúc và theo dõi dashboard"
      },
      {
        "key": "B",
        "text": "Continue shadow testing indefinitely to avoid any exposure",
        "text_vi": "Tiếp tục shadow testing vô thời hạn để tránh mọi phơi nhiễm"
      },
      {
        "key": "C",
        "text": "Roll out to one region chosen by the regional manager, with no comparison group",
        "text_vi": "Triển khai cho một khu vực do quản lý khu vực chọn, không có nhóm so sánh"
      },
      {
        "key": "D",
        "text": "A canary rollout increasing gradually from a small percentage, with guardrail alerts and automatic rollback",
        "text_vi": "Canary rollout tăng dần từ một tỉ lệ nhỏ, kèm cảnh báo guardrail và rollback tự động"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "The course material describes a typical safe path of offline eval, then shadow test, then a live A/B or canary rollout that increases gradually with guardrail alerts and automatic rollback. A full switch removes the limit on blast radius, indefinite shadowing never captures downstream signals, and a hand-picked region without comparison is neither random nor controlled.",
    "explanation_vi": "Tài liệu khóa học mô tả lộ trình an toàn điển hình là offline eval, rồi shadow test, rồi live A/B hoặc canary rollout tăng dần với cảnh báo guardrail và rollback tự động. Chuyển toàn bộ cùng lúc bỏ giới hạn phạm vi ảnh hưởng, shadow vô thời hạn không bao giờ nắm được tín hiệu hạ nguồn, còn khu vực chọn tay không có nhóm so sánh thì vừa không ngẫu nhiên vừa không có kiểm soát.",
    "source": "output_2/06_AB_Testing_and_Observability.md"
  },
  {
    "id": 22,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "objective": "Optimize context windows and manage token usage",
    "lessonId": "d2-t4",
    "question": "A SaaS analytics tool asks Claude to write long reports from large data extracts. Some responses come back truncated with the stop reason model_context_window_exceeded. The team's max_tokens is already set generously, and an engineer proposes raising it further. What is the correct diagnosis and fix?",
    "question_vi": "Một công cụ phân tích SaaS yêu cầu Claude viết báo cáo dài từ các bản trích xuất dữ liệu lớn. Một số response bị cắt cụt với stop reason model_context_window_exceeded. max_tokens của đội đã được đặt khá rộng, và một kỹ sư đề xuất tăng thêm nữa. Chẩn đoán và cách sửa đúng là gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Generation hit the window ceiling; reduce or stage the input so the output has room in the window.",
        "text_vi": "Quá trình sinh chạm trần window; giảm hoặc phân tầng input để output có chỗ trong window."
      },
      {
        "key": "B",
        "text": "The endpoint was overloaded mid-generation; add retries with backoff around the call and a circuit breaker.",
        "text_vi": "Endpoint bị quá tải giữa chừng khi sinh; thêm retry có backoff quanh lời gọi và một circuit breaker."
      },
      {
        "key": "C",
        "text": "The request body exceeded the byte limit; compress the data extracts before sending.",
        "text_vi": "Thân request vượt giới hạn byte; nén các bản trích xuất dữ liệu trước khi gửi."
      },
      {
        "key": "D",
        "text": "The output hit the max_tokens cap; raising it further will let the reports complete.",
        "text_vi": "Output chạm giới hạn max_tokens; tăng thêm sẽ cho phép báo cáo hoàn tất."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "model_context_window_exceeded means the prompt fit but generation ran into the model's window ceiling, so the input must shrink or be staged to leave room for output. The max_tokens stop reason is a different signal tied to your own cap, so raising the cap does not create space in the window. A byte-limit problem would be rejected before generation with 413, and overload is a separate transient error class.",
    "explanation_vi": "model_context_window_exceeded nghĩa là prompt vừa nhưng quá trình sinh chạm trần window của model, nên input phải được thu nhỏ hoặc phân tầng để chừa chỗ cho output. Stop reason max_tokens là một tín hiệu khác gắn với giới hạn do bạn đặt, nên tăng giới hạn không tạo thêm chỗ trong window. Vấn đề giới hạn byte sẽ bị từ chối trước khi sinh với lỗi 413, còn quá tải là một loại lỗi tạm thời riêng.",
    "source": "output/02_How_Claude_Behaves.md"
  },
  {
    "id": 23,
    "topic": "Integration (19%)",
    "objective": "Evaluate tool/agent configuration for capability bloat",
    "lessonId": "d3-t1",
    "question": "A manufacturer's maintenance-diagnostics agent investigates machine faults using sensor, manual and ticket tools. Most runs finish in under a minute, but a few each week run for several minutes and cost dozens of times the typical request, with long chains of repeated tool calls. Which two mitigations does the course recommend for this failure mode? (Choose TWO.)",
    "question_vi": "Agent chẩn đoán bảo trì của một nhà sản xuất điều tra lỗi máy bằng các tool cảm biến, sổ tay và ticket. Hầu hết các lượt chạy kết thúc dưới một phút, nhưng mỗi tuần có vài lượt chạy nhiều phút và tốn gấp hàng chục lần request thông thường, với chuỗi dài các tool call lặp lại. Hai biện pháp nào được khóa học khuyến nghị cho failure mode này? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "Set per-turn token budgets, a maximum tool-call count and explicit stopping criteria.",
        "text_vi": "Đặt ngân sách token mỗi lượt, số tool call tối đa và tiêu chí dừng rõ ràng."
      },
      {
        "key": "B",
        "text": "Add more specialised tools so the agent can find the answer in fewer steps.",
        "text_vi": "Thêm nhiều tool chuyên biệt hơn để agent tìm được câu trả lời với ít bước hơn."
      },
      {
        "key": "C",
        "text": "Raise the request timeout so long investigations are not cut off before they finish.",
        "text_vi": "Tăng timeout của request để các cuộc điều tra dài không bị cắt trước khi hoàn tất."
      },
      {
        "key": "D",
        "text": "Move the agent to a larger model tier so it reasons its way out of loops faster.",
        "text_vi": "Chuyển agent sang tier model lớn hơn để nó suy luận thoát khỏi vòng lặp nhanh hơn."
      },
      {
        "key": "E",
        "text": "Constrain the tool set to the minimum required and evaluate the agent's stopping behaviour.",
        "text_vi": "Thu hẹp bộ tool về mức tối thiểu cần thiết và eval hành vi dừng của agent."
      }
    ],
    "answer": [
      "A",
      "E"
    ],
    "explanation": "The course names unbounded tool use and growing context as what breaks first in agents, and its mitigations are budgets, tool-call limits, stopping criteria, a minimal tool set and evaluating stopping behaviour. Adding tools is more capability bloat and widens the choices the agent can loop through. A larger tier does not bound the loop and usually raises cost, and a longer timeout simply lets runaway runs consume more.",
    "explanation_vi": "Khóa học gọi tên việc dùng tool không giới hạn và context ngày càng phình là thứ hỏng đầu tiên ở agent, và biện pháp gồm ngân sách, giới hạn số tool call, tiêu chí dừng, bộ tool tối thiểu và eval hành vi dừng. Thêm tool là thêm capability bloat và mở rộng các lựa chọn mà agent có thể lặp qua. Tier lớn hơn không giới hạn vòng lặp và thường tăng chi phí, còn timeout dài hơn chỉ để các lượt chạy mất kiểm soát tiêu tốn nhiều hơn.",
    "source": "output_2/03_POC_to_Production.md"
  },
  {
    "id": 24,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Design end-to-end architectures (input → processing → output → feedback loops)",
    "lessonId": "d1-t2",
    "question": "A SaaS company's in-app help assistant launched with good eval results. Two months later, support leads notice answer quality slowly declining, yet no code, prompt or retrieval change has been deployed. Nobody can say when the decline began or which answer types are affected. Which two architectural components would have helped detect and correct this? (Choose TWO.)",
    "question_vi": "Trợ lý trợ giúp trong ứng dụng của một công ty SaaS ra mắt với kết quả eval tốt. Hai tháng sau, trưởng nhóm hỗ trợ nhận thấy chất lượng trả lời giảm dần, dù không có thay đổi code, prompt hay retrieval nào được deploy. Không ai biết sự suy giảm bắt đầu khi nào hoặc loại câu trả lời nào bị ảnh hưởng. Hai thành phần kiến trúc nào lẽ ra giúp phát hiện và khắc phục vấn đề này? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "An online monitoring loop tracking quality signals, escalation rate and validation failures per step, with alerts on threshold breaches.",
        "text_vi": "Vòng monitoring online theo dõi tín hiệu chất lượng, tỷ lệ escalation và lỗi validation theo từng bước, kèm cảnh báo khi vượt ngưỡng."
      },
      {
        "key": "B",
        "text": "Extended thinking enabled on every request so the model reasons more carefully about each answer.",
        "text_vi": "Bật extended thinking cho mọi request để model suy luận cẩn thận hơn với từng câu trả lời."
      },
      {
        "key": "C",
        "text": "A quarterly manual review of a few hundred conversations by the product team.",
        "text_vi": "Review thủ công vài trăm hội thoại mỗi quý bởi đội sản phẩm."
      },
      {
        "key": "D",
        "text": "A larger context window so the assistant can hold more of the product documentation in each request.",
        "text_vi": "Context window lớn hơn để trợ lý chứa được nhiều tài liệu sản phẩm hơn trong mỗi request."
      },
      {
        "key": "E",
        "text": "An offline loop that adds real failure cases to the eval set and runs an eval gate before every change is released.",
        "text_vi": "Vòng offline đưa các ca lỗi thật vào eval set và chạy eval gate trước mỗi thay đổi được release."
      }
    ],
    "answer": [
      "A",
      "E"
    ],
    "explanation": "Feedback loops are how a system detects drift and turns failures into controlled improvements: online monitoring surfaces the decline as it happens, and feeding real failures into the eval set with an eval gate fixes it without regressions. A larger window and extended thinking are configuration changes, not detection mechanisms, and an occasional quarterly review is too slow and sparse to locate when the decline started.",
    "explanation_vi": "Các vòng phản hồi là cách hệ thống phát hiện drift và biến lỗi thành cải tiến có kiểm soát: monitoring online làm lộ sự suy giảm ngay khi nó xảy ra, còn đưa ca lỗi thật vào eval set cùng eval gate giúp sửa mà không gây regression. Window lớn hơn và extended thinking là thay đổi cấu hình, không phải cơ chế phát hiện, còn review hằng quý quá chậm và thưa để xác định sự suy giảm bắt đầu khi nào.",
    "source": "output/13_Supplement_Business_Value_End_to_End.md"
  },
  {
    "id": 25,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "objective": "Document architectures and provide implementation guidance",
    "lessonId": "d6-t4",
    "question": "A media company's Architect is preparing the handoff package for a content-tagging assistant. The receiving team will regularly adjust prompts and upgrade model versions, and has asked how they will know whether a change makes tagging quality worse. Beyond the decision log, which artifact best answers this need?",
    "question_vi": "Architect của một công ty truyền thông đang chuẩn bị gói bàn giao cho trợ lý gắn thẻ nội dung. Đội tiếp nhận sẽ thường xuyên điều chỉnh prompt và nâng cấp phiên bản model, và đã hỏi làm sao họ biết một thay đổi có làm chất lượng gắn thẻ tệ đi không. Ngoài decision log, artifact nào đáp ứng nhu cầu này tốt nhất?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "A screenshot of the observability dashboard on the day of handoff as a reference point.",
        "text_vi": "Ảnh chụp dashboard observability vào ngày bàn giao làm điểm tham chiếu."
      },
      {
        "key": "B",
        "text": "The eval suite with its acceptance criteria and the latest test-result summary, to be re-run before every change.",
        "text_vi": "Eval suite kèm acceptance criteria và test-result summary gần nhất, để chạy lại trước mọi thay đổi."
      },
      {
        "key": "C",
        "text": "A recording of the kickoff meeting where quality expectations were first discussed with the sponsor.",
        "text_vi": "Bản ghi buổi kickoff nơi kỳ vọng chất lượng lần đầu được thảo luận với sponsor."
      },
      {
        "key": "D",
        "text": "A list of the prompt versions used so far, with release dates and the engineer responsible.",
        "text_vi": "Danh sách các phiên bản prompt đã dùng, kèm ngày phát hành và kỹ sư phụ trách."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "The eval suite is the re-runnable quality contract in a handoff package; without it, a successor cannot tell whether a prompt or model change degraded quality. A kickoff recording and a dashboard snapshot are not repeatable tests. A prompt version history records what changed but cannot measure the effect of a new change.",
    "explanation_vi": "Eval suite là hợp đồng chất lượng có thể chạy lại trong gói bàn giao; thiếu nó, người kế nhiệm không thể biết thay đổi prompt hay model có làm giảm chất lượng hay không. Bản ghi kickoff và ảnh chụp dashboard không phải là bài test có thể lặp lại. Lịch sử phiên bản prompt ghi lại cái gì đã thay đổi nhưng không đo được tác động của một thay đổi mới.",
    "source": "output_4/05_Documentation_and_Knowledge_Handoff.md"
  },
  {
    "id": 26,
    "topic": "Developer Productivity & Operational Enablement (7%)",
    "objective": "Support debugging and operational issue resolution",
    "lessonId": "d7-t3",
    "question": "An insurer's claims-guidance assistant has given gradually worse answers over two months. There have been no code deployments in that period, infrastructure dashboards are green, and the policy library it retrieves from has grown by roughly a third. The operations team pulls in the Architect. Where should the investigation start?",
    "question_vi": "Trợ lý hướng dẫn bồi thường của một công ty bảo hiểm đưa ra câu trả lời kém dần trong hai tháng. Không có lần deploy code nào trong khoảng thời gian đó, dashboard hạ tầng vẫn xanh, và thư viện chính sách mà nó truy xuất đã tăng khoảng một phần ba. Team vận hành mời Architect vào cuộc. Việc điều tra nên bắt đầu từ đâu?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Move to a more capable model tier so it can compensate for weaker retrieved context.",
        "text_vi": "Chuyển sang model tier mạnh hơn để bù đắp cho ngữ cảnh truy xuất kém hơn."
      },
      {
        "key": "B",
        "text": "Roll back the most recent code deployment and re-run the integration test suite.",
        "text_vi": "Rollback lần deploy code gần nhất và chạy lại bộ integration test."
      },
      {
        "key": "C",
        "text": "Compare against an eval set and check what changed in the model, the prompt and the corpus.",
        "text_vi": "So với eval set và kiểm tra những gì đã thay đổi ở model, prompt và corpus."
      },
      {
        "key": "D",
        "text": "Disable prompt caching so that every request is processed with completely fresh content.",
        "text_vi": "Tắt prompt caching để mọi request được xử lý với nội dung hoàn toàn mới."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Gradual quality decline with no code change maps to a model or prompt change, or retrieval drift as the corpus grew, and the first action is to compare against an eval set and check what changed in model, prompt or corpus; the corpus growth makes retrieval drift a strong candidate. Rolling back code is irrelevant when nothing was deployed, a bigger model masks the symptom and adds cost, and disabling caching raises latency and cost without touching the index.",
    "explanation_vi": "Chất lượng giảm dần mà không đổi code ứng với thay đổi model hoặc prompt, hoặc retrieval drift khi corpus tăng, và hành động đầu tiên là so với eval set và kiểm tra những gì đã đổi ở model, prompt hoặc corpus; việc corpus tăng khiến retrieval drift là ứng viên mạnh. Rollback code là vô nghĩa khi không có gì được deploy, model lớn hơn chỉ che triệu chứng và tăng chi phí, còn tắt cache làm tăng latency và chi phí mà không chạm tới index.",
    "source": "output_5/04_Operational_Issue_Resolution.md"
  },
  {
    "id": 27,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "objective": "Document architectures and provide implementation guidance",
    "lessonId": "d6-t4",
    "question": "A telecom operator's network-operations team will take over a fault-triage assistant next week. Their lead asks for written guidance on how to deploy, how to roll back a bad prompt change at 3 a.m., what the common incidents look like, and whom to escalate to. Which handoff artifact primarily serves this need?",
    "question_vi": "Đội vận hành mạng của một nhà mạng sẽ tiếp quản trợ lý phân loại sự cố vào tuần sau. Trưởng nhóm yêu cầu hướng dẫn bằng văn bản về cách triển khai, cách rollback một thay đổi prompt lỗi lúc 3 giờ sáng, các sự cố thường gặp trông như thế nào, và cần leo thang cho ai. Artifact bàn giao nào chủ yếu đáp ứng nhu cầu này?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "The outcome document, which summarises the business value delivered by the assistant.",
        "text_vi": "Outcome document, tóm tắt giá trị kinh doanh mà trợ lý mang lại."
      },
      {
        "key": "B",
        "text": "The control register, which maps obligations to controls, owners and evidence artifacts.",
        "text_vi": "Control register, ánh xạ nghĩa vụ tới control, owner và evidence artifact."
      },
      {
        "key": "C",
        "text": "The assumption register, which lists what remains unconfirmed and who will confirm it.",
        "text_vi": "Assumption register, liệt kê những gì còn chưa xác nhận và ai sẽ xác nhận."
      },
      {
        "key": "D",
        "text": "The runbook, covering deployment, rollback, common incidents, safe prompt or model changes and escalation contacts.",
        "text_vi": "Runbook, bao gồm triển khai, rollback, sự cố thường gặp, cách đổi prompt hoặc model an toàn và liên hệ leo thang."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "In the handoff package, the runbook is the operational guide for the receiving team: deploy, rollback, common incidents, safe procedures for changing prompts or models, and escalation contacts. The control register serves the compliance reviewer, the outcome document serves the sponsor, and the assumption register serves the returning Architect.",
    "explanation_vi": "Trong gói bàn giao, runbook là hướng dẫn vận hành cho đội tiếp nhận: triển khai, rollback, sự cố thường gặp, quy trình an toàn để đổi prompt hoặc model, và liên hệ leo thang. Control register phục vụ compliance reviewer, outcome document phục vụ sponsor, còn assumption register phục vụ Architect quay lại.",
    "source": "output_4/10_Supplement_SLOs_Expectations_Handoff_and_Rollout.md"
  },
  {
    "id": 28,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "objective": "Document architectures and provide implementation guidance",
    "lessonId": "d6-t4",
    "question": "A European bank standardised on Microsoft Azure plans to use the Microsoft Foundry route for Claude. The draft implementation guide states: 'Because the route runs on Azure, all inference stays in our EU tenancy, satisfying residency.' Nobody has checked how the chosen models are hosted. What correction should the guide make?",
    "question_vi": "Một ngân hàng châu Âu đã chuẩn hóa trên Microsoft Azure dự định dùng route Microsoft Foundry cho Claude. Bản nháp hướng dẫn triển khai ghi: 'Vì route chạy trên Azure, mọi inference đều ở trong tenancy EU của chúng ta, đáp ứng residency.' Chưa ai kiểm tra các model được chọn được host như thế nào. Hướng dẫn cần sửa điều gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Verify residency per hosting form, since hosted-on-Anthropic models route to Anthropic infrastructure, and re-check current docs at build.",
        "text_vi": "Xác minh residency theo từng hình thức hosting, vì model hosted-on-Anthropic được định tuyến đến hạ tầng Anthropic, và kiểm tra lại tài liệu hiện hành khi build."
      },
      {
        "key": "B",
        "text": "None; any route mediated by a cloud provider inherits that provider's residency posture automatically.",
        "text_vi": "Không cần sửa; mọi route qua nhà cung cấp cloud đều tự động thừa hưởng tư thế residency của nhà cung cấp đó."
      },
      {
        "key": "C",
        "text": "Add a note that residency will be reviewed after launch based on actual traffic logs.",
        "text_vi": "Thêm ghi chú rằng residency sẽ được xem xét sau launch dựa trên log lưu lượng thực tế."
      },
      {
        "key": "D",
        "text": "Replace Foundry with the direct API, since only the direct API can guarantee residency.",
        "text_vi": "Thay Foundry bằng direct API, vì chỉ direct API mới bảo đảm được residency."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "The decision matrix says Foundry varies by hosting form: hosted-on-Azure models run in the partner's Azure environment while hosted-on-Anthropic models route to Anthropic infrastructure, so residency must be verified per route and not assumed from the platform name. Assuming inheritance is the error itself. The direct API is not described as the only residency-safe route, and checking residency after launch is too late for an obligation.",
    "explanation_vi": "Decision matrix nói Foundry khác nhau theo hình thức hosting: model hosted-on-Azure chạy trong môi trường Azure của partner, còn model hosted-on-Anthropic được định tuyến đến hạ tầng Anthropic, nên residency phải được xác minh theo từng route chứ không suy ra từ tên nền tảng. Giả định thừa hưởng chính là lỗi. Direct API không được mô tả là route duy nhất an toàn về residency, và kiểm tra residency sau launch là quá muộn với một nghĩa vụ.",
    "source": "output_4/06_Entry_Point_Selection_and_Outcomes.md"
  },
  {
    "id": 29,
    "topic": "Integration (19%)",
    "objective": "Evaluate accuracy-latency trade-offs and justify configuration decisions",
    "lessonId": "d3-t3",
    "question": "A hospital network must summarise about 200,000 nursing notes each night for a dashboard that clinicians read at 8 a.m. The current design calls the API synchronously with Opus throughout the night, and cost has become the main concern. Quality on the current eval is good. Which change is most appropriate?",
    "question_vi": "Một mạng lưới bệnh viện phải tóm tắt khoảng 200.000 ghi chép điều dưỡng mỗi đêm cho một dashboard mà bác sĩ đọc lúc 8 giờ sáng. Thiết kế hiện tại gọi API đồng bộ với Opus suốt đêm, và chi phí đã trở thành mối quan tâm chính. Chất lượng trên eval hiện tại tốt. Thay đổi nào phù hợp nhất?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Combine all notes into a few very large prompts to minimise the number of calls, using the existing tooling and no additional approvals.",
        "text_vi": "Gộp mọi ghi chép vào một vài prompt rất lớn để giảm số lời gọi, dùng công cụ hiện có và không cần thêm phê duyệt."
      },
      {
        "key": "B",
        "text": "Use the Message Batches API with an eval-confirmed tier, since results are not needed immediately.",
        "text_vi": "Dùng Message Batches API với tier đã được eval xác nhận, vì kết quả không cần ngay lập tức."
      },
      {
        "key": "C",
        "text": "Keep synchronous Opus calls but stream the responses to cut processing time.",
        "text_vi": "Giữ lời gọi Opus đồng bộ nhưng stream phản hồi để giảm thời gian xử lý."
      },
      {
        "key": "D",
        "text": "Enable extended thinking so each summary needs fewer regeneration attempts.",
        "text_vi": "Bật extended thinking để mỗi bản tóm tắt cần ít lần sinh lại hơn."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Work that does not need an immediate response is the case for batch processing, which reduces cost substantially in exchange for asynchronous results, combined with a tier validated by eval. Giant combined prompts exceed context and make errors hard to isolate. Extended thinking adds billed output tokens without evidence of need, and streaming does not reduce total time or cost.",
    "explanation_vi": "Công việc không cần phản hồi ngay là trường hợp dành cho xử lý theo lô, giúp giảm chi phí đáng kể để đổi lấy kết quả bất đồng bộ, kết hợp với tier đã được eval xác nhận. Prompt khổng lồ gộp chung vượt quá context và khiến lỗi khó cô lập. Extended thinking thêm output token tính phí mà không có bằng chứng cần thiết, còn streaming không giảm tổng thời gian hay chi phí.",
    "source": "output/08_Model_Context_Strategy.md"
  },
  {
    "id": 30,
    "topic": "Governance, Safety & Risk Management (14%)",
    "objective": "Address ethical AI considerations (bias, fairness, transparency)",
    "lessonId": "d5-t5",
    "question": "An insurer's small-business underwriting assistant uses five few-shot examples to show how to write a recommendation. A fairness audit finds that all five examples happen to show sole proprietors being declined and incorporated firms approved, and sole proprietors now face a much higher decline rate. What should the architect do?",
    "question_vi": "Trợ lý thẩm định bảo hiểm doanh nghiệp nhỏ của một công ty bảo hiểm dùng năm ví dụ few-shot để minh họa cách viết khuyến nghị. Một đợt audit fairness phát hiện cả năm ví dụ tình cờ đều cho thấy hộ kinh doanh cá thể bị từ chối còn công ty có pháp nhân được chấp thuận, và hộ cá thể giờ có tỷ lệ bị từ chối cao hơn nhiều. Architect nên làm gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Remove business type from the input so the model cannot see it at all.",
        "text_vi": "Loại bỏ loại hình doanh nghiệp khỏi input để model hoàn toàn không thấy nó."
      },
      {
        "key": "B",
        "text": "Keep the examples but add an instruction not to infer outcomes from business type.",
        "text_vi": "Giữ các ví dụ nhưng thêm chỉ dẫn không suy ra kết quả từ loại hình doanh nghiệp."
      },
      {
        "key": "C",
        "text": "Rebalance the few-shot examples and evaluate on a diverse test set by business type.",
        "text_vi": "Cân bằng lại các ví dụ few-shot và đánh giá trên bộ test đa dạng theo loại hình doanh nghiệp."
      },
      {
        "key": "D",
        "text": "Drop few-shot examples entirely and rely on zero-shot prompting for all recommendations.",
        "text_vi": "Bỏ hẳn ví dụ few-shot và dựa vào zero-shot prompting cho mọi khuyến nghị."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Few-shot examples are one of the four injection points and can carry skew; the course remedy is to balance the examples and evaluate on a diverse test set. Hiding the attribute leaves proxies in the data and is not sufficient, an instruction contradicting the examples does not remove the skewed signal, and dropping examples discards a useful technique instead of fixing it and still needs evaluation.",
    "explanation_vi": "Ví dụ few-shot là một trong bốn injection point và có thể mang độ lệch; cách khắc phục của khóa học là cân bằng ví dụ và đánh giá trên bộ test đa dạng. Ẩn thuộc tính vẫn để lại proxy trong dữ liệu nên không đủ, một chỉ dẫn mâu thuẫn với ví dụ không xóa được tín hiệu lệch, còn bỏ hẳn ví dụ là vứt đi một kỹ thuật hữu ích thay vì sửa nó và vẫn cần đánh giá.",
    "source": "output_3/04_Fairness_and_Accountability.md"
  },
  {
    "id": 31,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "objective": "Document architectures and provide implementation guidance",
    "lessonId": "d6-t4",
    "question": "An auto insurer's outcome document reports that claim-response drafting time fell by 40 percent. Reading it, a regional director assumes the assistant also decides payouts and plans to cut adjuster headcount accordingly. In fact, the assistant drafts responses but neither sends them nor decides payments. Which outcome-document field was inadequate?",
    "question_vi": "Outcome document của một công ty bảo hiểm ô tô báo cáo thời gian soạn phản hồi bồi thường giảm 40%. Khi đọc, một giám đốc khu vực cho rằng trợ lý cũng quyết định chi trả và dự định cắt giảm nhân sự giám định viên tương ứng. Thực tế, trợ lý chỉ soạn nháp phản hồi, không gửi đi cũng không quyết định chi trả. Trường nào trong outcome document chưa đầy đủ?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "The control in place, which should have included the adjusters' approval logs.",
        "text_vi": "Control đang áp dụng, lẽ ra nên bao gồm log phê duyệt của giám định viên."
      },
      {
        "key": "B",
        "text": "The metric after deployment, which should have been reported with a confidence interval.",
        "text_vi": "Metric sau triển khai, lẽ ra nên được báo cáo kèm khoảng tin cậy."
      },
      {
        "key": "C",
        "text": "The measurement owner, who should have briefed the regional director in person.",
        "text_vi": "Owner đo lường, người lẽ ra nên trực tiếp giải thích cho giám đốc khu vực."
      },
      {
        "key": "D",
        "text": "The use case with its scope boundary, stating what the deployment does and what it does not do.",
        "text_vi": "Use case kèm ranh giới phạm vi, nêu hệ thống làm gì và không làm gì."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "The outcome document's first field is the use case with its scope boundary, recording what the deployment does and what it does not; without it, readers infer the system does more than it does and form wrong expectations about expansion. Statistical detail on the after metric, a briefing or stronger control evidence would not correct a misunderstanding about scope.",
    "explanation_vi": "Trường đầu tiên của outcome document là use case kèm ranh giới phạm vi, ghi lại hệ thống làm gì và không làm gì; thiếu nó, người đọc suy ra hệ thống làm nhiều hơn thực tế và hình thành kỳ vọng sai về việc mở rộng. Chi tiết thống kê cho metric after, một buổi giải thích hay bằng chứng control mạnh hơn đều không sửa được hiểu lầm về phạm vi.",
    "source": "output_4/06_Entry_Point_Selection_and_Outcomes.md"
  },
  {
    "id": 32,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Align solutions to business value pillars (efficiency, transformation, productivity, cost, performance SLAs)",
    "lessonId": "d1-t6",
    "question": "A sponsor takes an outcome document for a Claude claims assistant to the CFO to justify expansion. It lists 40,000 requests per month, sub-two-second average latency and a 0.5 percent error rate. The CFO asks what the deployment did for the business, and the sponsor has no answer. Which fields were missing?",
    "question_vi": "Một sponsor đưa tài liệu kết quả của trợ lý claim dùng Claude cho CFO để biện minh việc mở rộng. Tài liệu liệt kê 40.000 request mỗi tháng, latency trung bình dưới hai giây và tỷ lệ lỗi 0,5 phần trăm. CFO hỏi triển khai đã làm được gì cho doanh nghiệp, và sponsor không có câu trả lời. Những trường nào bị thiếu?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Before and after business metrics on one definition, plus an auditable control.",
        "text_vi": "Metric kinh doanh trước và sau theo một định nghĩa, cùng control kiểm toán được."
      },
      {
        "key": "B",
        "text": "The p99 latency and total tokens consumed, which would show the CFO how efficiently the system runs.",
        "text_vi": "p99 latency và tổng token tiêu thụ, cho CFO thấy hệ thống chạy hiệu quả thế nào."
      },
      {
        "key": "C",
        "text": "A longer technical appendix describing the model version, prompt structure and retrieval settings.",
        "text_vi": "Một phụ lục kỹ thuật dài mô tả model version, cấu trúc prompt và cài đặt retrieval."
      },
      {
        "key": "D",
        "text": "A list of other customers who have deployed similar assistants, to show market adoption.",
        "text_vi": "Danh sách các khách hàng khác đã triển khai trợ lý tương tự, để cho thấy mức chấp nhận của thị trường."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Without the before number there is no story, and without a control the after number is an assertion, so the document needs the business metric before and after plus an auditable control. More technical metrics and appendices answer whether the system runs rather than what it changed, and market adoption does not show this deployment's value.",
    "explanation_vi": "Không có số trước thì không có câu chuyện, và không có control thì số sau chỉ là lời khẳng định, nên tài liệu cần metric kinh doanh trước và sau cùng một control kiểm toán được. Thêm metric kỹ thuật và phụ lục chỉ trả lời hệ thống có chạy không chứ không phải nó thay đổi điều gì, và mức chấp nhận của thị trường không cho thấy giá trị của triển khai này.",
    "source": "output_4/06_Entry_Point_Selection_and_Outcomes.md"
  },
  {
    "id": 33,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "objective": "Document architectures and provide implementation guidance",
    "lessonId": "d6-t4",
    "question": "Four months after handoff, a pension fund's new engineer fixed a slow member-statement assistant by switching to a context strategy that sends full member records to a shared endpoint. This broke the fund's data-residency constraint. The engineer had a detailed, current architecture diagram but nothing else. Which documentation practice would most likely have prevented this?",
    "question_vi": "Bốn tháng sau bàn giao, kỹ sư mới của một quỹ hưu trí sửa trợ lý báo cáo thành viên bị chậm bằng cách chuyển sang context strategy gửi toàn bộ hồ sơ thành viên đến một endpoint dùng chung. Điều này phá vỡ constraint data residency của quỹ. Kỹ sư có một architecture diagram chi tiết, cập nhật nhưng không có gì khác. Thực hành tài liệu nào có khả năng nhất đã ngăn được điều này?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "A policy that the original Architect must approve any change made during the first year after handoff.",
        "text_vi": "Một chính sách yêu cầu Architect ban đầu phê duyệt mọi thay đổi trong năm đầu sau bàn giao."
      },
      {
        "key": "B",
        "text": "A decision log recording the context strategy, the rejected faster alternative and the residency tradeoff, marked load-bearing.",
        "text_vi": "Một decision log ghi lại context strategy, phương án nhanh hơn bị loại và tradeoff về residency, được đánh dấu load-bearing."
      },
      {
        "key": "C",
        "text": "A freeze on all architectural changes after handoff until a full compliance re-certification is completed.",
        "text_vi": "Đóng băng mọi thay đổi kiến trúc sau bàn giao cho đến khi hoàn tất tái chứng nhận compliance đầy đủ."
      },
      {
        "key": "D",
        "text": "A more detailed diagram that color-codes each component by the region in which it runs.",
        "text_vi": "Một diagram chi tiết hơn, tô màu từng thành phần theo region mà nó chạy."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "The diagram shows what the system is but not why; only the decision, its rejected alternative and the named tradeoff tell a successor that a choice is load-bearing for compliance. A better diagram is still 'what'. Depending on the original Architect fails once they have left, and a blanket freeze is impractical for a system that must iterate.",
    "explanation_vi": "Diagram cho thấy hệ thống là gì nhưng không cho biết vì sao; chỉ có quyết định, phương án bị loại và tradeoff được nêu tên mới cho người kế nhiệm biết một lựa chọn là load-bearing cho compliance. Một diagram tốt hơn vẫn chỉ là 'cái gì'. Phụ thuộc vào Architect ban đầu sẽ thất bại khi họ đã rời đi, và đóng băng toàn bộ là không thực tế với hệ thống cần iterate.",
    "source": "output_4/05_Documentation_and_Knowledge_Handoff.md"
  },
  {
    "id": 34,
    "topic": "Integration (19%)",
    "objective": "Evaluate accuracy-latency trade-offs and justify configuration decisions",
    "lessonId": "d3-t3",
    "question": "A trading firm on GCP needs a one-sentence natural-language summary of each executed trade within 400 milliseconds. A prototype using Opus with extended thinking and multi-paragraph output takes several seconds. Which configuration direction is most likely to meet the requirement, subject to eval?",
    "question_vi": "Một công ty giao dịch chạy trên GCP cần một bản tóm tắt ngôn ngữ tự nhiên dài một câu cho mỗi giao dịch đã khớp trong vòng 400 mili giây. Bản prototype dùng Opus với extended thinking và output nhiều đoạn mất vài giây. Hướng cấu hình nào có khả năng đáp ứng yêu cầu nhất, với điều kiện qua eval?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Send trades to the Batch API and publish the summaries when each batch completes.",
        "text_vi": "Gửi giao dịch tới Batch API và công bố bản tóm tắt khi mỗi lô hoàn tất."
      },
      {
        "key": "B",
        "text": "Keep Opus with thinking but stream the output so the first words appear within 400 ms.",
        "text_vi": "Giữ Opus kèm thinking nhưng stream output để những từ đầu tiên xuất hiện trong 400 ms."
      },
      {
        "key": "C",
        "text": "A fast tier such as Haiku with thinking off and a short output, served through Vertex AI inside the firm's GCP environment.",
        "text_vi": "Một tier nhanh như Haiku, tắt thinking và output ngắn, được phục vụ qua Vertex AI trong môi trường GCP của công ty."
      },
      {
        "key": "D",
        "text": "Route requests to a different cloud provider whose managed service advertises lower latency, in line with how the earlier pilot was handled.",
        "text_vi": "Định tuyến request tới một nhà cung cấp cloud khác có dịch vụ quản lý quảng cáo latency thấp hơn, phù hợp với cách xử lý ở giai đoạn thử nghiệm trước."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Latency is the binding constraint, so the controls that move it most, tier, thinking and output length, must all point toward speed, and keeping the request path inside the firm's existing Google Cloud environment fits its cloud commitment. Streaming only improves perceived latency, not completion of the summary. Batch processing is asynchronous, and moving to another cloud ignores the GCP commitment.",
    "explanation_vi": "Latency là ràng buộc quyết định, nên các núm tác động mạnh nhất tới nó, gồm tier, thinking và độ dài output, đều phải hướng tới tốc độ, và giữ đường đi của request trong môi trường Google Cloud hiện có phù hợp với cam kết cloud của công ty. Streaming chỉ cải thiện latency cảm nhận, không giúp hoàn tất bản tóm tắt sớm hơn. Xử lý theo lô là bất đồng bộ, còn chuyển sang cloud khác là bỏ qua cam kết GCP.",
    "source": "output/10_Entry_Points_Governance.md"
  },
  {
    "id": 35,
    "topic": "Integration (19%)",
    "objective": "Evaluate accuracy-latency trade-offs and justify configuration decisions",
    "lessonId": "d3-t3",
    "question": "An engineering firm's knowledge assistant uses small chunks, hybrid retrieval and a reranker. Leadership wants retrieval latency cut by 40%. Query logs show 95% are conceptual questions and very few look up exact codes. A labelled query set exists. What should the architect propose?",
    "question_vi": "Trợ lý tri thức của một công ty kỹ thuật dùng chunk nhỏ, hybrid retrieval và reranker. Ban lãnh đạo muốn giảm 40% latency truy xuất. Log truy vấn cho thấy 95% là câu hỏi khái niệm và rất ít truy vấn tra mã chính xác. Đã có sẵn một tập truy vấn có nhãn. Architect nên đề xuất gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Keep the pipeline unchanged, because retrieval quality always outranks latency, configured once and applied across every environment.",
        "text_vi": "Giữ nguyên pipeline, vì chất lượng truy xuất luôn quan trọng hơn latency, cấu hình một lần và áp dụng cho mọi môi trường."
      },
      {
        "key": "B",
        "text": "Switch to sparse-only retrieval, which is the fastest strategy available, in line with how the earlier pilot was handled.",
        "text_vi": "Chuyển sang retrieval chỉ dùng sparse, vốn là chiến lược nhanh nhất, phù hợp với cách xử lý ở giai đoạn thử nghiệm trước."
      },
      {
        "key": "C",
        "text": "Remove retrieval and place the full corpus in the prompt of a long-context model, using the existing tooling and no additional approvals.",
        "text_vi": "Bỏ retrieval và đặt toàn bộ corpus vào prompt của một model context dài, dùng công cụ hiện có và không cần thêm phê duyệt."
      },
      {
        "key": "D",
        "text": "Measure on the labelled set how removing the reranker, going dense-only or using larger chunks affects recall, then pick the fastest option meeting the preset bar.",
        "text_vi": "Đo trên tập có nhãn xem bỏ reranker, chỉ dùng dense hoặc dùng chunk lớn hơn ảnh hưởng tới recall thế nào, rồi chọn phương án nhanh nhất đạt ngưỡng đặt trước."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "The course says to size the pipeline to the query patterns you actually have and state a defensible trade-off, which means measuring candidate simplifications against a pre-set quality threshold. Refusing to trade at all ignores a real requirement. Sparse-only fits exact-token lookups and would fail conceptual queries, and stuffing the corpus raises cost and latency instead of lowering them.",
    "explanation_vi": "Khóa học nói hãy định cỡ pipeline theo các mẫu truy vấn bạn thực sự có và nêu một đánh đổi có thể bảo vệ, nghĩa là đo các phương án đơn giản hóa so với một ngưỡng chất lượng đặt trước. Từ chối mọi đánh đổi là bỏ qua một yêu cầu thật. Chỉ dùng sparse phù hợp với tra token chính xác và sẽ thất bại với truy vấn khái niệm, còn nhồi corpus vào prompt làm tăng chứ không giảm chi phí và latency.",
    "source": "output/07_RAG_Pipeline_Design.md"
  },
  {
    "id": 36,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Define evaluation metrics (accuracy, latency, cost, safety, security)",
    "lessonId": "d4-t1",
    "question": "An online retailer revised its customer-service prompt. On the eval suite the mean score rose from 86% to 89%, and the team wants to ship. The suite contains several labeled categories, one of which is disputed refund complaints, a small but legally sensitive slice of traffic. Before approving the change, what should the architect require from the eval results?",
    "question_vi": "Một nhà bán lẻ trực tuyến đã sửa prompt chăm sóc khách hàng. Trên eval suite, điểm trung bình tăng từ 86% lên 89%, và team muốn ship. Suite có nhiều category được gắn nhãn, trong đó có khiếu nại hoàn tiền có tranh chấp, một phần traffic nhỏ nhưng nhạy cảm về pháp lý. Trước khi phê duyệt thay đổi, architect nên yêu cầu gì từ kết quả eval?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "A per-category breakdown showing no category, especially disputed refunds, regressed",
        "text_vi": "Phân rã theo category cho thấy không category nào, đặc biệt là hoàn tiền tranh chấp, bị tụt"
      },
      {
        "key": "B",
        "text": "A confidence interval on the overall mean to confirm the 3-point gain",
        "text_vi": "Khoảng tin cậy cho điểm trung bình tổng để xác nhận mức tăng 3 điểm"
      },
      {
        "key": "C",
        "text": "A rerun of the suite with a larger judge model to confirm the mean",
        "text_vi": "Chạy lại suite với judge model lớn hơn để xác nhận điểm trung bình"
      },
      {
        "key": "D",
        "text": "Removal of the small refund category, since it distorts the average",
        "text_vi": "Loại bỏ category hoàn tiền nhỏ vì nó làm lệch điểm trung bình"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Stage 5 of the eval workflow warns that a change raising the mean while quietly degrading edge cases does not make the system better, so results must be read per category. Tightening the confidence interval on the mean or rerunning with a bigger judge still looks only at the aggregate, and deleting the sensitive category removes exactly the signal that matters.",
    "explanation_vi": "Giai đoạn 5 của quy trình eval cảnh báo rằng một thay đổi làm tăng điểm trung bình nhưng âm thầm làm giảm chất lượng ở edge case không làm hệ thống tốt hơn, vì vậy kết quả phải được đọc theo category. Thu hẹp khoảng tin cậy của điểm trung bình hay chạy lại với judge lớn hơn vẫn chỉ nhìn vào số tổng, còn xóa category nhạy cảm là loại bỏ chính tín hiệu quan trọng.",
    "source": "output_2/02_Evals_as_Acceptance_Criteria.md"
  },
  {
    "id": 37,
    "topic": "Integration (19%)",
    "objective": "Apply retrieval strategies matched to data shape and query pattern",
    "lessonId": "d3-t6",
    "question": "An online retailer's assistant answers 'Am I eligible for a refund?' by retrieving passages from the returns policy and letting the model decide. Eligibility depends on fixed thresholds: days since delivery, item category and order value. Some customers get inconsistent answers to identical situations. Which mechanism should own the eligibility decision?",
    "question_vi": "Trợ lý của một nhà bán lẻ trực tuyến trả lời câu 'Tôi có đủ điều kiện hoàn tiền không?' bằng cách truy xuất các đoạn trong chính sách đổi trả và để model quyết định. Điều kiện phụ thuộc vào các ngưỡng cố định: số ngày kể từ khi giao, danh mục sản phẩm và giá trị đơn hàng. Một số khách hàng nhận câu trả lời không nhất quán cho các tình huống giống hệt nhau. Cơ chế nào nên sở hữu quyết định về điều kiện?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "A larger retrieval top-k so the model sees every clause of the returns policy.",
        "text_vi": "top-k truy xuất lớn hơn để model thấy mọi điều khoản của chính sách đổi trả."
      },
      {
        "key": "B",
        "text": "A rule engine or code that evaluates the thresholds, with the model explaining the outcome.",
        "text_vi": "Một rule engine hoặc code đánh giá các ngưỡng, còn model giải thích kết quả."
      },
      {
        "key": "C",
        "text": "A fine-tuned model trained on historical refund decisions.",
        "text_vi": "Một model đã fine-tune trên các quyết định hoàn tiền trong quá khứ."
      },
      {
        "key": "D",
        "text": "A stronger instruction telling the model to apply the policy consistently, tracked through the usual ticketing process.",
        "text_vi": "Một chỉ dẫn mạnh hơn yêu cầu model áp dụng chính sách nhất quán, được theo dõi qua quy trình ticket thông thường."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Business rules such as approval thresholds and refund conditions must be right every time, so the course maps them to a rule engine or code; the model can still explain the result in natural language. More retrieved text does not make probabilistic interpretation deterministic. Fine-tuning and stronger instructions still leave a deterministic decision to a probabilistic process.",
    "explanation_vi": "Quy tắc nghiệp vụ như ngưỡng phê duyệt và điều kiện hoàn tiền phải đúng mọi lúc, nên khóa học ánh xạ chúng tới rule engine hoặc code; model vẫn có thể giải thích kết quả bằng ngôn ngữ tự nhiên. Truy xuất thêm văn bản không biến việc diễn giải xác suất thành tất định. Fine-tune và chỉ dẫn mạnh hơn vẫn giao một quyết định tất định cho một quá trình xác suất.",
    "source": "output/06_Reference_Architectures.md"
  },
  {
    "id": 38,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Design end-to-end architectures (input → processing → output → feedback loops)",
    "lessonId": "d1-t2",
    "question": "A provincial benefits agency is designing a citizen-facing Claude assistant that answers questions about an applicant's own claim and drafts responses for caseworkers. Citizens arrive through the agency web portal, and many messages include national ID numbers and medical details that the drafting step does not need. Where should authentication and redaction of unnecessary personal data occur?",
    "question_vi": "Một cơ quan trợ cấp cấp tỉnh đang thiết kế trợ lý Claude cho người dân, trả lời câu hỏi về hồ sơ của chính người nộp đơn và soạn phản hồi cho cán bộ xử lý. Người dân vào qua cổng web của cơ quan, và nhiều tin nhắn chứa số định danh cá nhân và chi tiết y tế mà bước soạn thảo không cần. Xác thực và che dữ liệu cá nhân không cần thiết nên diễn ra ở đâu?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "In the output stage, by scanning drafted responses for personal data just before they are shown to caseworkers.",
        "text_vi": "Ở giai đoạn output, quét các phản hồi đã soạn để tìm dữ liệu cá nhân ngay trước khi hiển thị cho cán bộ."
      },
      {
        "key": "B",
        "text": "In the feedback stage, by reviewing logs weekly and deleting conversations that contain sensitive information.",
        "text_vi": "Ở giai đoạn feedback, review log hằng tuần và xóa các hội thoại chứa thông tin nhạy cảm."
      },
      {
        "key": "C",
        "text": "In the input stage, by authenticating and authorizing the citizen and redacting unneeded PII before any processing.",
        "text_vi": "Ở giai đoạn input, xác thực và phân quyền người dân và che PII không cần thiết trước mọi bước xử lý."
      },
      {
        "key": "D",
        "text": "In the processing stage, by instructing the model in the system prompt to ignore identifiers and medical details.",
        "text_vi": "Ở giai đoạn processing, chỉ dẫn model trong system prompt bỏ qua số định danh và chi tiết y tế."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "The input block of an end-to-end design handles user authentication and authorization, cleaning and PII redaction before data reaches processing, so unnecessary sensitive data never enters the model's context. Scanning outputs is too late, a prompt instruction relies on the model to ignore data it has already received, and weekly log cleanup is an after-the-fact measure that leaves exposure in place.",
    "explanation_vi": "Khối input của thiết kế end-to-end xử lý xác thực và phân quyền người dùng, làm sạch và che PII trước khi dữ liệu tới processing, để dữ liệu nhạy cảm không cần thiết không bao giờ vào context của model. Quét output là quá muộn, chỉ dẫn trong prompt dựa vào việc model bỏ qua dữ liệu nó đã nhận, còn dọn log hằng tuần là biện pháp sau sự việc, vẫn để rủi ro phơi nhiễm tồn tại.",
    "source": "output/13_Supplement_Business_Value_End_to_End.md"
  },
  {
    "id": 39,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Apply decomposition techniques for complex problem solving",
    "lessonId": "d1-t5",
    "question": "A mid-market law firm wants contract review accelerated. Associates currently compare clauses to the firm's playbook by hand; the playbook is maintained and versioned by senior partners; iManage holds the documents; attorney-client privilege applies; and a senior associate must sign off on each review. Which decomposition best fits?",
    "question_vi": "Một hãng luật tầm trung muốn tăng tốc review hợp đồng. Hiện associate so sánh điều khoản với playbook của hãng bằng tay; playbook do các partner cấp cao duy trì và quản lý version; iManage lưu tài liệu; áp dụng đặc quyền luật sư-khách hàng; và một senior associate phải ký duyệt mỗi lần review. Phân rã nào phù hợp nhất?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Claude also acts as the source of truth for the firm's standard positions, replacing the partners' versioned document.",
        "text_vi": "Claude cũng đóng vai nguồn sự thật cho lập trường chuẩn của hãng, thay thế tài liệu có version của các partner."
      },
      {
        "key": "B",
        "text": "Claude memorizes the playbook through repeated prompting, so that no external playbook retrieval is needed during review.",
        "text_vi": "Claude ghi nhớ playbook qua prompt lặp lại, để không cần truy xuất playbook bên ngoài khi review."
      },
      {
        "key": "C",
        "text": "A paralegal extracts all clauses manually, then Claude decides which clauses breach the playbook without human review.",
        "text_vi": "Một trợ lý pháp lý trích mọi điều khoản thủ công, rồi Claude quyết định điều khoản nào vi phạm playbook mà không có người review."
      },
      {
        "key": "D",
        "text": "Claude extracts and drafts redlines; iManage and the playbook stay systems of record; a senior associate signs off.",
        "text_vi": "Claude trích xuất và soạn redline; iManage và playbook là system of record; senior associate ký duyệt."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Extraction, classification against a playbook and redline drafting are language work for Claude, the versioned playbook and iManage are systems of record, and the senior associate remains the accountable reviewer. Memorizing the playbook and using Claude as the source of truth both remove the version-controlled authority, and removing human review contradicts the brief.",
    "explanation_vi": "Trích xuất, phân loại theo playbook và soạn redline là việc ngôn ngữ của Claude, playbook có version và iManage là system of record, và senior associate vẫn là người review có trách nhiệm. Ghi nhớ playbook và dùng Claude làm nguồn sự thật đều bỏ thẩm quyền được quản lý version, còn bỏ review của người mâu thuẫn với brief.",
    "source": "output/04_Decomposition.md"
  },
  {
    "id": 40,
    "topic": "Integration (19%)",
    "objective": "Analyze observability challenges and select monitoring strategies at scale",
    "lessonId": "d3-t4",
    "question": "A multi-tenant legal-research SaaS uses one organisation-level API key for all customers. At peak, every tenant receives 429 errors and operations cannot tell which tenant caused the spike. Retries from the client are already enabled, and the team needs both attribution and isolation before the next customer onboarding. Which two changes are most appropriate? (Choose TWO.)",
    "question_vi": "Một SaaS nghiên cứu pháp lý multi-tenant dùng một API key cấp tổ chức cho mọi khách hàng. Vào giờ cao điểm, mọi tenant đều nhận lỗi 429 và đội vận hành không biết tenant nào gây ra đột biến. Retry phía client đã được bật, và đội cần cả khả năng quy trách nhiệm lẫn cô lập trước đợt onboard khách hàng tiếp theo. Hai thay đổi nào phù hợp nhất? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "Log each request with tenant and session ID, token counts and latency.",
        "text_vi": "Log mỗi request kèm tenant và session ID, số token và latency."
      },
      {
        "key": "B",
        "text": "Merge all tenants into one unbounded shared queue to smooth the peaks.",
        "text_vi": "Gộp mọi tenant vào một hàng đợi chung không giới hạn để làm phẳng đỉnh tải."
      },
      {
        "key": "C",
        "text": "Raise the client retry count to 20 immediate attempts so requests eventually succeed.",
        "text_vi": "Tăng số lần retry phía client lên 20 lần liên tiếp ngay lập tức để request cuối cùng thành công."
      },
      {
        "key": "D",
        "text": "Issue a separate API key per tenant for attribution and isolation.",
        "text_vi": "Cấp API key riêng cho từng tenant để quy trách nhiệm và cô lập."
      },
      {
        "key": "E",
        "text": "Move every tenant to a larger model tier to finish requests faster.",
        "text_vi": "Chuyển mọi tenant sang tier model lớn hơn để hoàn tất request nhanh hơn."
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "explanation": "The course states that separate API keys per tenant are required for attribution and isolation, and per-request context logging with tenant and session lets operations decompose load by tenant. Immediate repeated retries amplify the overload into a retry storm. A shared unbounded queue keeps the noisy-neighbour problem and attribution gap, and a larger tier is unrelated to rate limits.",
    "explanation_vi": "Khóa học nêu rằng API key riêng cho từng tenant là bắt buộc để quy trách nhiệm và cô lập, và log context theo request kèm tenant và session giúp đội vận hành phân rã tải theo tenant. Retry liên tiếp ngay lập tức khuếch đại tình trạng quá tải thành retry storm. Hàng đợi chung không giới hạn giữ nguyên vấn đề noisy neighbour và lỗ hổng quy trách nhiệm, còn tier lớn hơn không liên quan tới rate limit.",
    "source": "output_2/05_Enterprise_Integration_Patterns.md"
  },
  {
    "id": 41,
    "topic": "Integration (19%)",
    "objective": "Evaluate tool/agent configuration for capability bloat",
    "lessonId": "d3-t1",
    "question": "An energy utility's billing-dispute agent can adjust customer balances and cancel meter work orders, although the dispute team only investigates and drafts responses. Facing a deadline, the team proposes keeping the tools and adding detailed logging with a weekly review. How should the architect evaluate this proposal?",
    "question_vi": "Agent xử lý khiếu nại hóa đơn của một công ty điện lực có thể điều chỉnh số dư khách hàng và hủy lệnh công việc đo đếm, dù đội khiếu nại chỉ điều tra và soạn phản hồi. Vì sắp tới hạn, đội đề xuất giữ các tool và thêm logging chi tiết kèm review hằng tuần. Architect nên đánh giá đề xuất này thế nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Insufficient, because logging is detective; the unneeded write tools should be removed first.",
        "text_vi": "Chưa đủ, vì logging là biện pháp phát hiện; các tool ghi không cần thiết phải được gỡ trước."
      },
      {
        "key": "B",
        "text": "Adequate, because detailed logs provide full accountability for every balance adjustment.",
        "text_vi": "Đầy đủ, vì log chi tiết tạo trách nhiệm giải trình đầy đủ cho mọi lần điều chỉnh số dư."
      },
      {
        "key": "C",
        "text": "Adequate, provided the weekly review is replaced with a daily review of the logs.",
        "text_vi": "Đầy đủ, miễn là review hằng tuần được thay bằng review log hằng ngày."
      },
      {
        "key": "D",
        "text": "Insufficient, because the agent should be moved to a stronger model before logging matters.",
        "text_vi": "Chưa đủ, vì agent cần được chuyển sang model mạnh hơn trước khi logging có ý nghĩa."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "The course orders remediation preventive first: remove capabilities the role does not need, and treat monitoring as a necessary detective layer that cannot replace removal. Daily instead of weekly review is still detection after the damage. A stronger model does not change authorization scope, so it neither fixes the bloat nor makes logging more meaningful.",
    "explanation_vi": "Khóa học sắp xếp biện pháp khắc phục theo thứ tự phòng ngừa trước: gỡ năng lực mà vai trò không cần, và coi giám sát là lớp phát hiện cần thiết nhưng không thể thay thế việc gỡ bỏ. Review hằng ngày thay vì hằng tuần vẫn là phát hiện sau khi thiệt hại đã xảy ra. Model mạnh hơn không thay đổi phạm vi phân quyền, nên vừa không sửa được bloat vừa không làm logging có ý nghĩa hơn.",
    "source": "output/14_Supplement_Integration_Security_Observability.md"
  },
  {
    "id": 42,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "objective": "Optimize context windows and manage token usage",
    "lessonId": "d2-t4",
    "question": "An enterprise IT helpdesk chatbot resends the entire conversation history on every turn. Per-request cost climbs steadily through each session, and in very long sessions some requests now fail or responses are cut short. Answers in short sessions are fine. Which architectural change is most appropriate?",
    "question_vi": "Chatbot helpdesk IT của một doanh nghiệp gửi lại toàn bộ lịch sử hội thoại ở mọi lượt. Chi phí mỗi request tăng dần trong mỗi phiên, và ở các phiên rất dài một số request giờ bị lỗi hoặc response bị cắt ngắn. Câu trả lời trong các phiên ngắn vẫn tốt. Thay đổi kiến trúc nào phù hợp nhất?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Move to a model with a larger context window so long sessions no longer hit the limit, keeping the full history.",
        "text_vi": "Chuyển sang model có context window lớn hơn để phiên dài không còn chạm giới hạn, giữ nguyên toàn bộ lịch sử."
      },
      {
        "key": "B",
        "text": "Use progressive context: keep recent turns, compact older ones preserving key facts, retrieve on demand.",
        "text_vi": "Dùng progressive context: giữ các lượt gần nhất, compaction các lượt cũ nhưng giữ dữ kiện quan trọng, truy xuất khi cần."
      },
      {
        "key": "C",
        "text": "Move all traffic to Haiku so that the growing history costs less per token.",
        "text_vi": "Chuyển toàn bộ traffic sang Haiku để lịch sử ngày càng dài tốn ít hơn trên mỗi token."
      },
      {
        "key": "D",
        "text": "Raise max_tokens so that responses in long sessions are no longer truncated.",
        "text_vi": "Tăng max_tokens để response trong phiên dài không còn bị cắt."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "The symptom is accumulating monolithic context, whose cost grows linearly with conversation length until it hits the working-memory cliff. Progressive context with compaction and just-in-time retrieval addresses the accumulation. A larger window only moves the cliff and keeps the linear cost, a cheaper tier lowers the unit price but not the accumulation and carries unmeasured quality risk, and max_tokens does nothing about the input growth.",
    "explanation_vi": "Triệu chứng là monolithic context tích lũy, có chi phí tăng tuyến tính theo độ dài hội thoại cho đến khi chạm vách working memory. Progressive context với compaction và truy xuất just-in-time xử lý được sự tích lũy. Window lớn hơn chỉ dời vách ra xa và vẫn giữ chi phí tuyến tính, tier rẻ hơn giảm đơn giá nhưng không xử lý tích lũy và mang rủi ro chất lượng chưa được đo, còn max_tokens không làm gì với việc input phình to.",
    "source": "output/08_Model_Context_Strategy.md"
  },
  {
    "id": 43,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Optimize token usage, latency, and cost-performance trade-offs",
    "lessonId": "d4-t5",
    "question": "An electronics retailer runs every support ticket through Sonnet. Analysis shows about 70% of tickets are simple order-status lookups, while the rest are complex complaints. The team proposes routing simple tickets to Haiku with an order-lookup tool and keeping Sonnet for complaints. What must be true before this goes to production?",
    "question_vi": "Một nhà bán lẻ điện tử chạy mọi ticket hỗ trợ qua Sonnet. Phân tích cho thấy khoảng 70% ticket là tra cứu trạng thái đơn hàng đơn giản, phần còn lại là khiếu nại phức tạp. Team đề xuất định tuyến ticket đơn giản sang Haiku kèm tool tra đơn và giữ Sonnet cho khiếu nại. Điều gì phải đúng trước khi đưa vào production?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "A few team members have tried sample tickets on both branches",
        "text_vi": "Vài thành viên team đã thử ticket mẫu trên cả hai nhánh"
      },
      {
        "key": "B",
        "text": "Nothing further, because Haiku is cheaper and faster",
        "text_vi": "Không cần gì thêm, vì Haiku rẻ hơn và nhanh hơn"
      },
      {
        "key": "C",
        "text": "Each branch and the routing classifier pass the golden dataset by category, followed by an A/B or canary with guardrails",
        "text_vi": "Mỗi nhánh và bộ phân loại định tuyến đều pass golden dataset theo category, sau đó là A/B hoặc canary với guardrail"
      },
      {
        "key": "D",
        "text": "The cost reduction has been confirmed on the billing dashboard",
        "text_vi": "Mức giảm chi phí đã được xác nhận trên dashboard thanh toán"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Model routing lowers average cost only if each branch, and the router itself, holds quality; every configuration change is gated by evals and measured with guardrailed experiments. Cheaper alone ignores quality, billing data confirms cost but not correctness, and a few manual tries are spot-checks.",
    "explanation_vi": "Model routing chỉ giảm chi phí trung bình nếu mỗi nhánh, và chính bộ định tuyến, giữ được chất lượng; mọi thay đổi cấu hình đều phải qua cổng eval và được đo bằng thí nghiệm có guardrail. Chỉ rẻ hơn thì bỏ qua chất lượng, dữ liệu thanh toán xác nhận chi phí chứ không xác nhận độ đúng, còn vài lần thử thủ công là spot-check.",
    "source": "output_2/09_Supplement_Integration_Mechanisms_and_Optimization.md"
  },
  {
    "id": 44,
    "topic": "Integration (19%)",
    "objective": "Analyze observability challenges and select monitoring strategies at scale",
    "lessonId": "d3-t4",
    "question": "A bank's complaint-classification assistant has run for eight months on a pinned model with an unchanged prompt. Threshold alerts on latency and error rate never fire, yet reviewers sense outputs are slowly becoming more hedged and labels are shifting. Which monitoring technique best detects this kind of gradual change?",
    "question_vi": "Trợ lý phân loại khiếu nại của một ngân hàng đã chạy tám tháng trên một model đã pin với prompt không đổi. Cảnh báo theo ngưỡng về latency và tỷ lệ lỗi chưa bao giờ kích hoạt, nhưng người review cảm thấy output đang dần trở nên rào đón hơn và nhãn đang dịch chuyển. Kỹ thuật giám sát nào phát hiện tốt nhất loại thay đổi từ từ này?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Increase the error-rate alert sensitivity to catch low-level failures sooner, with the results reviewed again next quarter.",
        "text_vi": "Tăng độ nhạy cảnh báo tỷ lệ lỗi để bắt các lỗi mức thấp sớm hơn, với kết quả được xem lại vào quý sau."
      },
      {
        "key": "B",
        "text": "Lower the latency alert threshold so smaller deviations trigger an alert.",
        "text_vi": "Hạ ngưỡng cảnh báo latency để các sai lệch nhỏ hơn cũng kích hoạt cảnh báo."
      },
      {
        "key": "C",
        "text": "Restart the service weekly so the model returns to its original behaviour.",
        "text_vi": "Khởi động lại dịch vụ hằng tuần để model trở về hành vi ban đầu."
      },
      {
        "key": "D",
        "text": "Periodically compare output distributions, such as label mix, refusal rate and output length, against a baseline window.",
        "text_vi": "So sánh định kỳ phân phối output, như cơ cấu nhãn, tỷ lệ từ chối và độ dài output, với một khoảng thời gian baseline."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "The course notes that gradual model drift is hard to detect with threshold alerts and benefits from periodic distribution comparison of outputs. Tighter latency or error thresholds still watch signals that are not moving. Restarting the service does not change model behaviour, because the model holds no state between calls.",
    "explanation_vi": "Khóa học lưu ý model drift diễn ra từ từ khó phát hiện bằng cảnh báo theo ngưỡng và cần so sánh phân phối output định kỳ. Siết ngưỡng latency hay lỗi vẫn là theo dõi các tín hiệu không hề thay đổi. Khởi động lại dịch vụ không thay đổi hành vi model, vì model không giữ trạng thái giữa các lời gọi.",
    "source": "output_2/06_AB_Testing_and_Observability.md"
  },
  {
    "id": 45,
    "topic": "Integration (19%)",
    "objective": "Apply retrieval strategies matched to data shape and query pattern",
    "lessonId": "d3-t6",
    "question": "A legal-research startup's assistant uses dense-only retrieval over case law. Lawyers searching for a specific statute citation such as '42 U.S.C. § 1983' or a docket number often get conceptually related cases that never cite it, while the exact matches are missing. Which change best fits this query pattern?",
    "question_vi": "Trợ lý của một startup nghiên cứu pháp lý dùng retrieval chỉ dense trên án lệ. Luật sư tìm một trích dẫn điều luật cụ thể như '42 U.S.C. § 1983' hoặc một số hồ sơ vụ án thường nhận được các vụ liên quan về khái niệm nhưng không hề trích dẫn nó, trong khi các kết quả khớp chính xác bị thiếu. Thay đổi nào phù hợp nhất với mẫu truy vấn này?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Add sparse keyword indexing such as BM25 and fuse it with dense results.",
        "text_vi": "Thêm sparse keyword indexing như BM25 và hợp nhất với kết quả dense."
      },
      {
        "key": "B",
        "text": "Lower the similarity threshold so more conceptually related cases are returned.",
        "text_vi": "Hạ ngưỡng similarity để trả về nhiều vụ liên quan về khái niệm hơn."
      },
      {
        "key": "C",
        "text": "Increase the embedding dimension to capture finer semantic differences.",
        "text_vi": "Tăng số chiều embedding để nắm bắt khác biệt ngữ nghĩa tinh hơn."
      },
      {
        "key": "D",
        "text": "Use semantic chunking so each case is split at topic boundaries.",
        "text_vi": "Dùng semantic chunking để mỗi vụ án được chia theo ranh giới chủ đề."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Queries that hinge on specific tokens such as statute citations and identifiers need sparse indexing, where dense embeddings are weak; fusing sparse with dense keeps conceptual search working. A larger embedding dimension remains a semantic match. Chunking changes do not add exact-term matching, and a lower threshold returns even more of the related-but-wrong cases.",
    "explanation_vi": "Truy vấn phụ thuộc vào token cụ thể như trích dẫn điều luật và định danh cần sparse indexing, nơi dense embedding yếu; hợp nhất sparse với dense giữ cho tìm kiếm khái niệm vẫn hoạt động. Số chiều embedding lớn hơn vẫn là khớp ngữ nghĩa. Thay đổi chunking không bổ sung việc khớp từ chính xác, còn hạ ngưỡng trả về càng nhiều vụ liên quan nhưng sai.",
    "source": "output/07_RAG_Pipeline_Design.md"
  },
  {
    "id": 46,
    "topic": "Governance, Safety & Risk Management (14%)",
    "objective": "Ensure compliance with regulations (e.g., GDPR, HIPAA, FedRAMP)",
    "lessonId": "d5-t4",
    "question": "A telehealth startup's intake summarizer runs on a BAA-covered configuration. Before production certification, reviewers find thousands of application request-log entries containing patient SSNs, insurance IDs and dates of birth, none of which the summary needs. Which TWO changes should the architect make? (Choose TWO.)",
    "question_vi": "Công cụ tóm tắt hồ sơ tiếp nhận của một startup telehealth chạy trên một cấu hình được BAA bao phủ. Trước khi chứng nhận production, reviewer phát hiện hàng nghìn dòng request log của ứng dụng chứa SSN, mã bảo hiểm và ngày sinh của bệnh nhân, không trường nào cần cho bản tóm tắt. Architect nên thực hiện HAI thay đổi nào? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "Redact non-essential identifiers on the server before the Claude call is made.",
        "text_vi": "Redact các định danh không cần thiết phía server trước khi gọi Claude."
      },
      {
        "key": "B",
        "text": "Encrypt the request logs at the end of each day so plaintext exposure is short-lived.",
        "text_vi": "Mã hóa request log vào cuối mỗi ngày để thời gian lộ plaintext ngắn lại."
      },
      {
        "key": "C",
        "text": "Add a system-prompt instruction telling Claude never to repeat SSNs or insurance IDs.",
        "text_vi": "Thêm chỉ dẫn vào system prompt bảo Claude không bao giờ lặp lại SSN hay mã bảo hiểm."
      },
      {
        "key": "D",
        "text": "Retrieve only the fields the task needs and pass a reference ID instead of identifiers.",
        "text_vi": "Chỉ truy xuất các trường tác vụ cần và truyền reference ID thay cho định danh."
      },
      {
        "key": "E",
        "text": "Remove the chief complaint and medications too, so no PHI reaches the model at all.",
        "text_vi": "Loại bỏ cả lý do khám chính và thuốc, để không PHI nào tới model."
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "explanation": "The course fix for this exact pattern is a server-side redaction step plus a retrieval function that supplies only the fields the language task needs, with reference IDs, applying necessity rather than convenience and HIPAA's minimum necessary. A prompt instruction does not keep data out of the request or logs, delayed encryption still collects unnecessary PHI, and the clinical fields are necessary for the summary and allowed on the BAA-covered route.",
    "explanation_vi": "Cách sửa của khóa học cho đúng mẫu này là một bước redaction phía server cộng một hàm truy xuất chỉ cung cấp các trường mà tác vụ ngôn ngữ cần, dùng reference ID, áp dụng tính cần thiết thay vì sự tiện lợi và nguyên tắc minimum necessary của HIPAA. Chỉ dẫn trong prompt không giữ dữ liệu khỏi request hay log, mã hóa muộn vẫn thu thập PHI thừa, còn các trường lâm sàng là cần thiết cho bản tóm tắt và được phép trên route có BAA bao phủ.",
    "source": "output_2/05_Enterprise_Integration_Patterns.md"
  },
  {
    "id": 47,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Apply decomposition techniques for complex problem solving",
    "lessonId": "d1-t5",
    "question": "An insurer moved its 'claims above 5,000 pounds need a senior adjuster' SQL check into a Claude prompt. Three months later, 41 of 14,000 claims were misrouted when amounts were written as 'around five thousand pounds'. Which change resolves the root cause?",
    "question_vi": "Một công ty bảo hiểm chuyển kiểm tra SQL 'claim trên 5.000 bảng cần senior adjuster' vào prompt của Claude. Ba tháng sau, 41 trên 14.000 claim bị route sai khi số tiền viết là 'khoảng năm nghìn bảng'. Thay đổi nào giải quyết nguyên nhân gốc?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Add ten few-shot examples covering amounts written in words and approximate phrasing.",
        "text_vi": "Thêm mười ví dụ few-shot phủ số tiền viết bằng chữ và cách diễn đạt xấp xỉ."
      },
      {
        "key": "B",
        "text": "Claude extracts a typed amount with an uncertainty flag; code applies the threshold; uncertain cases go to senior review.",
        "text_vi": "Claude trích số tiền có kiểu kèm cờ không chắc; code áp ngưỡng; ca không chắc đi senior review."
      },
      {
        "key": "C",
        "text": "Switch to a more capable model that interprets approximate amounts more accurately.",
        "text_vi": "Chuyển sang model mạnh hơn diễn giải số tiền xấp xỉ chính xác hơn."
      },
      {
        "key": "D",
        "text": "Turn on detailed logging so that misrouted claims are detected sooner than at the next audit.",
        "text_vi": "Bật logging chi tiết để claim bị route sai được phát hiện sớm hơn lần audit tiếp theo."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "The rule must be right every time, so it returns to deterministic code while Claude performs the language task of structured extraction, with uncertain cases failing safe. Few-shot examples and a stronger model raise the probability but leave the model owning the rule, and logging only detects problems rather than fixing the ownership.",
    "explanation_vi": "Quy tắc phải đúng mọi lúc, nên nó quay về code deterministic trong khi Claude làm việc ngôn ngữ là trích xuất có cấu trúc, với ca không chắc chắn rơi vào hướng an toàn. Few-shot và model mạnh hơn tăng xác suất nhưng vẫn để model sở hữu quy tắc, còn logging chỉ phát hiện chứ không sửa quyền sở hữu.",
    "source": "output/04_Decomposition.md"
  },
  {
    "id": 48,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Define evaluation metrics (accuracy, latency, cost, safety, security)",
    "lessonId": "d4-t1",
    "question": "A law firm's partners tell the architect that their new research assistant must 'give accurate answers about our precedents'. The engineering team wants to start building immediately and define metrics later. The architect insists on converting the requirement into an eval criterion first. Which sequence correctly turns this requirement into something measurable?",
    "question_vi": "Các partner của một công ty luật nói với architect rằng trợ lý nghiên cứu mới phải 'trả lời chính xác về các án lệ của chúng tôi'. Team kỹ thuật muốn bắt đầu xây ngay và định nghĩa metric sau. Architect yêu cầu chuyển yêu cầu này thành tiêu chí eval trước. Trình tự nào chuyển đúng yêu cầu này thành thứ đo được?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Build the system first, then measure what it achieves and adopt that as the target",
        "text_vi": "Xây hệ thống trước, sau đó đo xem nó đạt được gì và lấy đó làm mục tiêu"
      },
      {
        "key": "B",
        "text": "Pick a judge model, ask it to rate accuracy from 1 to 10, then set the bar at the average score",
        "text_vi": "Chọn một judge model, yêu cầu chấm độ chính xác từ 1 đến 10, rồi đặt ngưỡng bằng điểm trung bình"
      },
      {
        "key": "C",
        "text": "Name the specific behavior, set a business-derived threshold, list failure modes as categories, and add adversarial inputs",
        "text_vi": "Nêu hành vi cụ thể, đặt ngưỡng xuất phát từ nghiệp vụ, liệt kê failure mode thành các category và thêm adversarial input"
      },
      {
        "key": "D",
        "text": "Collect ten precedents the team knows well and confirm the answers look right",
        "text_vi": "Thu thập mười án lệ mà team đã quen và xác nhận câu trả lời trông có vẻ đúng"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "The course's four steps are: identify the behavior specifically, set a threshold from the business requirement, identify failure modes as dataset categories, and include adversarial inputs. A free-form 1 to 10 judge score with an average-based bar is neither specific nor business-derived, ten familiar cases are a convenience sample, and adopting whatever the build achieves inverts acceptance criteria.",
    "explanation_vi": "Bốn bước của khóa học là: xác định hành vi cụ thể, đặt ngưỡng từ yêu cầu kinh doanh, xác định failure mode thành các category của dataset, và đưa vào adversarial input. Điểm judge tự do từ 1 đến 10 với ngưỡng theo trung bình vừa không cụ thể vừa không xuất phát từ nghiệp vụ, mười case quen thuộc là mẫu tiện tay, còn lấy kết quả hệ thống đạt được làm mục tiêu là đảo ngược tiêu chí nghiệm thu.",
    "source": "output_2/02_Evals_as_Acceptance_Criteria.md"
  },
  {
    "id": 49,
    "topic": "Governance, Safety & Risk Management (14%)",
    "objective": "Address ethical AI considerations (bias, fairness, transparency)",
    "lessonId": "d5-t5",
    "question": "A consumer lender's credit-support assistant uses a Claude model whose vendor published strong fairness evaluations. Six months in, a consumer group shows applicants from rural areas receive adverse recommendations far more often. The assistant retrieves 'similar past approved applications' from an internal corpus to ground its reasoning. Where should the architect look first?",
    "question_vi": "Trợ lý hỗ trợ tín dụng của một công ty cho vay tiêu dùng dùng model Claude mà nhà cung cấp đã công bố kết quả đánh giá fairness tốt. Sau sáu tháng, một nhóm người tiêu dùng chỉ ra người nộp đơn ở vùng nông thôn nhận khuyến nghị bất lợi thường xuyên hơn nhiều. Trợ lý truy xuất 'các hồ sơ đã duyệt tương tự trong quá khứ' từ một corpus nội bộ để làm căn cứ lập luận. Architect nên xem xét đâu trước tiên?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Ask the vendor to rerun its fairness evaluations on the current model version.",
        "text_vi": "Yêu cầu nhà cung cấp chạy lại các đánh giá fairness trên phiên bản model hiện tại."
      },
      {
        "key": "B",
        "text": "Add a system-prompt instruction to treat rural and urban applicants equally.",
        "text_vi": "Thêm chỉ dẫn vào system prompt để đối xử ngang nhau với người nộp đơn nông thôn và thành thị."
      },
      {
        "key": "C",
        "text": "Switch to a different model with higher published fairness scores.",
        "text_vi": "Chuyển sang một model khác có điểm fairness công bố cao hơn."
      },
      {
        "key": "D",
        "text": "The retrieval corpus and the other injection points, using decision logs and subgroup results.",
        "text_vi": "Retrieval corpus và các injection point khác, dùng decision log và kết quả theo subgroup."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Unequal outcomes enter at points the architect controls, and a corpus of past approvals that over-represents some groups is a classic source the vendor never tested; the fix is to inspect the injection points with decision logs and subgroup breakdowns. Rerunning or switching vendor evaluations treats fairness as a model property, and a prompt instruction neither finds the source nor provides verifiable evidence.",
    "explanation_vi": "Kết quả bất công xâm nhập tại các điểm Architect kiểm soát, và một corpus hồ sơ được duyệt trong quá khứ đại diện quá nhiều cho một số nhóm là nguồn điển hình mà nhà cung cấp chưa bao giờ kiểm tra; cách sửa là xem xét các injection point bằng decision log và phân tách theo subgroup. Chạy lại hay đổi đánh giá của nhà cung cấp là coi fairness như thuộc tính của model, còn chỉ dẫn trong prompt không tìm ra nguồn gốc cũng không cung cấp bằng chứng kiểm chứng được.",
    "source": "output_3/04_Fairness_and_Accountability.md"
  },
  {
    "id": 50,
    "topic": "Integration (19%)",
    "objective": "Analyze observability challenges and select monitoring strategies at scale",
    "lessonId": "d3-t4",
    "question": "An electronics retailer launched a new smart-home product line. Over the next month its support assistant's accuracy fell, mostly on questions about the new products. The model version is pinned, the prompt is unchanged and answers on older product questions are stable. How should this change be classified and handled?",
    "question_vi": "Một nhà bán lẻ điện tử ra mắt dòng sản phẩm nhà thông minh mới. Trong tháng sau đó, độ chính xác của trợ lý hỗ trợ giảm, chủ yếu ở các câu hỏi về sản phẩm mới. Phiên bản model đã được pin, prompt không đổi và câu trả lời cho câu hỏi về sản phẩm cũ vẫn ổn định. Thay đổi này nên được phân loại và xử lý thế nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Data drift; extend the eval set and supply knowledge about the new products through retrieval.",
        "text_vi": "Data drift; mở rộng eval set và cung cấp tri thức về sản phẩm mới qua retrieval."
      },
      {
        "key": "B",
        "text": "Model update effect; roll back to the previous model version.",
        "text_vi": "Model update effect; rollback về phiên bản model trước."
      },
      {
        "key": "C",
        "text": "Model drift; tighten the prompt and re-run the eval on the existing golden set, in line with how the earlier pilot was handled.",
        "text_vi": "Model drift; siết chặt prompt và chạy lại eval trên golden set hiện có, phù hợp với cách xử lý ở giai đoạn thử nghiệm trước."
      },
      {
        "key": "D",
        "text": "Infrastructure fault; add retries and a circuit breaker on the API call.",
        "text_vi": "Lỗi hạ tầng; thêm retry và circuit breaker cho lời gọi API."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "The input distribution changed while the model and prompt stayed fixed, which is data drift; its mitigation is extending the dataset and adding the missing knowledge, here via retrieval. Model drift means behaviour on stable inputs changed, which the stable older answers contradict. There was no version change to roll back, and there are no errors pointing to infrastructure.",
    "explanation_vi": "Phân phối input đã thay đổi trong khi model và prompt giữ nguyên, đó là data drift; cách giảm thiểu là mở rộng dataset và bổ sung tri thức còn thiếu, ở đây qua retrieval. Model drift nghĩa là hành vi trên input ổn định thay đổi, điều mà các câu trả lời ổn định về sản phẩm cũ phủ nhận. Không có thay đổi phiên bản nào để rollback, và không có lỗi nào chỉ tới hạ tầng.",
    "source": "output_2/06_AB_Testing_and_Observability.md"
  },
  {
    "id": 51,
    "topic": "Integration (19%)",
    "objective": "Evaluate tool/agent configuration for capability bloat",
    "lessonId": "d3-t1",
    "question": "A university's tutoring assistant connects at startup to 12 MCP servers owned by different departments, including finance, HR and admissions. Only the course-content and assignment servers are relevant to tutoring. Students report the assistant occasionally calls admissions tools, and the startup context is large. Which recommendation best addresses the issue?",
    "question_vi": "Trợ lý gia sư của một trường đại học kết nối với 12 MCP server của các phòng ban khác nhau ngay khi khởi động, gồm tài chính, nhân sự và tuyển sinh. Chỉ server nội dung môn học và bài tập là liên quan tới việc gia sư. Sinh viên phản ánh trợ lý thỉnh thoảng gọi tool tuyển sinh, và context lúc khởi động rất lớn. Khuyến nghị nào xử lý vấn đề tốt nhất?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Move to a model with a larger context window so all twelve servers fit comfortably.",
        "text_vi": "Chuyển sang model có context window lớn hơn để cả mười hai server vừa thoải mái."
      },
      {
        "key": "B",
        "text": "Disconnect the servers not needed for tutoring so only course-content and assignment tools remain.",
        "text_vi": "Ngắt kết nối các server không cần cho việc gia sư để chỉ còn tool nội dung môn học và bài tập."
      },
      {
        "key": "C",
        "text": "Add a description to each server explaining that only staff should use its tools.",
        "text_vi": "Thêm mô tả cho mỗi server giải thích rằng chỉ nhân viên mới được dùng tool của nó."
      },
      {
        "key": "D",
        "text": "Enable prompt caching on the tool definitions so the large startup context costs less.",
        "text_vi": "Bật prompt caching cho định nghĩa tool để context khởi động lớn tốn ít chi phí hơn."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Loading too many MCP servers up front is capability bloat: it enlarges the risk surface, confuses tool selection and spends tokens on every request, so the fix is to remove what the role does not need. Caching lowers cost but leaves the wrong tools callable. A larger window treats the window as a target and keeps the bloat, and descriptions asking for restraint still rely on the model.",
    "explanation_vi": "Nạp quá nhiều MCP server từ đầu là capability bloat: nó mở rộng bề mặt rủi ro, gây nhầm lẫn khi chọn tool và tốn token ở mọi request, nên cách sửa là gỡ những gì vai trò không cần. Caching giảm chi phí nhưng vẫn để các tool sai có thể được gọi. Cửa sổ lớn hơn coi cửa sổ là mục tiêu và giữ nguyên bloat, còn mô tả yêu cầu kiềm chế vẫn dựa vào model.",
    "source": "output/14_Supplement_Integration_Security_Observability.md"
  },
  {
    "id": 52,
    "topic": "Governance, Safety & Risk Management (14%)",
    "objective": "Address ethical AI considerations (bias, fairness, transparency)",
    "lessonId": "d5-t5",
    "question": "An EU health insurer logs inputs, retrieved context and outputs for every Claude-assisted claim decision so that decisions can be explained. Its legal team, worried about GDPR exposure from storing sensitive health data, proposes switching off decision logging entirely. What is the most appropriate response from the architect?",
    "question_vi": "Một công ty bảo hiểm y tế ở EU log input, context truy xuất và output cho mọi quyết định claim có hỗ trợ của Claude để có thể giải thích quyết định. Đội pháp lý lo ngại rủi ro GDPR do lưu dữ liệu sức khỏe nhạy cảm, đề xuất tắt hoàn toàn decision logging. Phản hồi phù hợp nhất của architect là gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Keep the log as is, because transparency is the stronger legal requirement here.",
        "text_vi": "Giữ nguyên log, vì transparency là yêu cầu pháp lý mạnh hơn trong trường hợp này."
      },
      {
        "key": "B",
        "text": "Move the log to engineers' local machines so it sits outside the production scope.",
        "text_vi": "Chuyển log sang máy cục bộ của kỹ sư để nó nằm ngoài phạm vi production."
      },
      {
        "key": "C",
        "text": "Keep the log, governed with minimization, retention limits, access control and a register entry.",
        "text_vi": "Giữ log, được quản trị bằng minimization, giới hạn retention, access control và một dòng trong register."
      },
      {
        "key": "D",
        "text": "Agree, because privacy obligations always take precedence over explainability.",
        "text_vi": "Đồng ý, vì nghĩa vụ quyền riêng tư luôn được ưu tiên hơn khả năng giải thích."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "The course states that logging for transparency and pinning data for compliance are not in conflict: they require the same log, governed differently, with minimization, retention limits, access controls and a named entry in the compliance register. Turning logging off removes the ability to explain or defend decisions, keeping it ungoverned ignores data-protection duties, and local copies increase leakage and lose access control.",
    "explanation_vi": "Khóa học khẳng định logging để minh bạch và giữ dữ liệu theo yêu cầu compliance không mâu thuẫn: chúng cần cùng một log, được quản trị khác nhau, với minimization, giới hạn retention, access control và một dòng có tên trong compliance register. Tắt logging làm mất khả năng giải thích hay bảo vệ quyết định, giữ log mà không quản trị là bỏ qua nghĩa vụ bảo vệ dữ liệu, còn bản sao cục bộ làm tăng rò rỉ và mất kiểm soát truy cập.",
    "source": "output_3/04_Fairness_and_Accountability.md"
  },
  {
    "id": 53,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "objective": "Optimize context windows and manage token usage",
    "lessonId": "d2-t4",
    "question": "A telco product manager asks that the support assistant 'just remember' each customer between sessions and know their current balance, assuming Claude retains this automatically. The assistant is built on the Messages API. How should the architect explain and design this capability?",
    "question_vi": "Một product manager của nhà mạng yêu cầu trợ lý hỗ trợ 'cứ nhớ' từng khách hàng giữa các phiên và biết số dư hiện tại của họ, với giả định rằng Claude tự động lưu giữ điều này. Trợ lý được xây trên Messages API. Architect nên giải thích và thiết kế năng lực này thế nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Claude keeps per-customer memory once the same API key is reused across sessions.",
        "text_vi": "Claude lưu bộ nhớ theo từng khách hàng khi cùng một API key được dùng lại qua các phiên."
      },
      {
        "key": "B",
        "text": "Put every customer's balance into the cached system prompt so that it is always available to the model.",
        "text_vi": "Đưa số dư của mọi khách hàng vào system prompt được cache để nó luôn sẵn có cho model."
      },
      {
        "key": "C",
        "text": "Raise the context window so earlier sessions remain inside it on later requests.",
        "text_vi": "Tăng context window để các phiên trước vẫn nằm trong đó ở các request sau."
      },
      {
        "key": "D",
        "text": "Store session summaries in the application and pass them back; fetch the balance with a tool call.",
        "text_vi": "Lưu tóm tắt phiên trong ứng dụng và đưa lại vào; lấy số dư bằng tool call."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "The model has no native memory between calls and the context window resets, so continuity is an application-managed architectural choice: store summaries and pass them back. Account balances are persistent application state owned by your system and reach the model through a tool call. Neither API keys nor a larger window create cross-session memory, and caching live balances creates a consistency window and puts every customer's data in every prompt.",
    "explanation_vi": "Model không có bộ nhớ gốc giữa các lời gọi và context window được làm mới, nên tính liên tục là lựa chọn kiến trúc do ứng dụng quản lý: lưu bản tóm tắt và đưa lại vào. Số dư tài khoản là persistent application state do hệ thống của bạn sở hữu và đến được model qua tool call. Cả API key lẫn window lớn hơn đều không tạo ra bộ nhớ giữa các phiên, còn cache số dư live tạo ra cửa sổ không nhất quán và đưa dữ liệu của mọi khách hàng vào mọi prompt.",
    "source": "output/08_Model_Context_Strategy.md"
  },
  {
    "id": 54,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Conduct A/B testing and iterative improvements",
    "lessonId": "d4-t3",
    "question": "A travel agency's itinerary assistant finished an A/B test in which the treatment raised task success from 72% to 77%, meeting the pre-set threshold with the planned sample. Before declaring the new prompt the winner, the architect runs a final checklist. Which TWO checks belong on that checklist? (Choose TWO.)",
    "question_vi": "Trợ lý lịch trình của một công ty du lịch vừa hoàn tất A/B test trong đó nhóm treatment tăng task success từ 72% lên 77%, đạt ngưỡng đặt trước với cỡ mẫu đã lên kế hoạch. Trước khi tuyên bố prompt mới thắng, architect chạy một checklist cuối cùng. HAI kiểm tra nào thuộc checklist đó? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "Confirm no guardrail metric such as latency p95 or cost per request degraded beyond its limit",
        "text_vi": "Xác nhận không guardrail metric nào như latency p95 hay chi phí mỗi request xấu đi quá giới hạn"
      },
      {
        "key": "B",
        "text": "Look for an additional metric that also improved to strengthen the case",
        "text_vi": "Tìm thêm một metric khác cũng cải thiện để củng cố lập luận"
      },
      {
        "key": "C",
        "text": "Break results down by segment or input type to check for interaction effects",
        "text_vi": "Phân rã kết quả theo phân nhóm hoặc loại input để kiểm tra interaction effect"
      },
      {
        "key": "D",
        "text": "Extend the test until the gap widens further",
        "text_vi": "Kéo dài thí nghiệm cho đến khi khoảng cách rộng hơn nữa"
      },
      {
        "key": "E",
        "text": "Compare the treatment against last year's results for the same month",
        "text_vi": "So sánh nhóm treatment với kết quả cùng tháng năm trước"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "Before declaring a winner the course asks whether any secondary metric degraded and warns about interaction effects between the treatment and specific input types, so guardrail checks and segment breakdowns belong on the list. Hunting for extra improved metrics is outcome-shopping, extending until the gap widens is peeking, and a year-over-year comparison adds no concurrent control.",
    "explanation_vi": "Trước khi tuyên bố bên thắng, khóa học yêu cầu kiểm tra xem có metric phụ nào xấu đi không và cảnh báo về interaction effect giữa treatment và các loại input cụ thể, nên kiểm tra guardrail và phân rã theo phân nhóm thuộc checklist. Tìm thêm metric cải thiện là outcome-shopping, kéo dài đến khi khoảng cách rộng hơn là peeking, còn so sánh với năm trước không thêm nhóm đối chứng đồng thời.",
    "source": "output_2/06_AB_Testing_and_Observability.md"
  },
  {
    "id": 55,
    "topic": "Developer Productivity & Operational Enablement (7%)",
    "objective": "Configure Claude tools and environments for teams (e.g., Claude Code)",
    "lessonId": "d7-t1",
    "question": "A retailer expanded Claude Code from a 10-person pilot to 160 developers. Two months later spend is several times the forecast. Usage logs show most sessions start on the most capable tier for routine edits, a few scripted loops consumed large volumes overnight, and admins never changed any setting from the defaults. Which action addresses the root cause?",
    "question_vi": "Một nhà bán lẻ mở rộng Claude Code từ pilot 10 người lên 160 developer. Hai tháng sau chi phí cao gấp nhiều lần dự báo. Log sử dụng cho thấy phần lớn phiên bắt đầu với tier mạnh nhất cho các chỉnh sửa thường ngày, một vài vòng lặp chạy bằng script tiêu thụ khối lượng lớn qua đêm, và admin chưa từng thay đổi bất kỳ setting nào khỏi mặc định. Hành động nào giải quyết nguyên nhân gốc?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Set a spend posture: task-matched model default, allowlist, effort guidance, and spend, rate and per-user caps.",
        "text_vi": "Đặt spend posture: model default khớp với tác vụ, allowlist, effort guidance, cùng các giới hạn spend, rate và per-user cap."
      },
      {
        "key": "B",
        "text": "Publish a cost-awareness guide in the shared CLAUDE.md asking developers to choose cheaper models when possible.",
        "text_vi": "Đăng một hướng dẫn nâng cao ý thức chi phí trong CLAUDE.md dùng chung, đề nghị developer chọn model rẻ hơn khi có thể."
      },
      {
        "key": "C",
        "text": "Force every developer onto the smallest available model regardless of the task, so spend falls back under the forecast.",
        "text_vi": "Ép mọi developer dùng model nhỏ nhất hiện có bất kể tác vụ, để chi phí quay về dưới mức dự báo."
      },
      {
        "key": "D",
        "text": "Suspend access for the whole team until finance reviews the next monthly invoice line by line.",
        "text_vi": "Tạm ngưng quyền truy cập của cả team cho đến khi bộ phận tài chính rà soát từng dòng hóa đơn tháng tới."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "The cost came from inherited defaults: unmanaged model choice routed routine work to an expensive tier and nothing capped runaway loops, so the fix is a deliberately set spend posture of defaults, allowlists, effort guidance and caps. Forcing the smallest model ignores task fit and hurts quality, suspending access stops adoption without fixing configuration, and a CLAUDE.md note is advisory rather than a control.",
    "explanation_vi": "Chi phí phát sinh từ các giá trị mặc định được thừa hưởng: lựa chọn model không được quản lý đã đẩy công việc thường ngày sang tier đắt, và không có gì chặn các vòng lặp mất kiểm soát, nên cách khắc phục là đặt spend posture có chủ đích gồm defaults, allowlists, effort guidance và caps. Ép dùng model nhỏ nhất bỏ qua sự phù hợp với tác vụ và làm giảm chất lượng, tạm ngưng truy cập làm dừng adoption mà không sửa cấu hình, còn một ghi chú trong CLAUDE.md chỉ là hướng dẫn chứ không phải biện pháp kiểm soát.",
    "source": "output_5/02_Team_Setup_and_Environment.md"
  },
  {
    "id": 56,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "objective": "Document architectures and provide implementation guidance",
    "lessonId": "d6-t4",
    "question": "Reviewing a hospital network's handoff package, the incoming operations lead notices that six of nine governance-table rows and most control-register entries list 'Owner: Lead Architect (consultant).' The consulting engagement ends in three weeks. Everything else in the package is thorough. What should be fixed before handoff?",
    "question_vi": "Khi rà soát gói bàn giao của một mạng lưới bệnh viện, trưởng vận hành tiếp nhận nhận thấy sáu trên chín hàng governance table và hầu hết mục trong control register ghi 'Owner: Lead Architect (tư vấn)'. Hợp đồng tư vấn kết thúc sau ba tuần. Mọi thứ khác trong gói đều kỹ lưỡng. Cần sửa gì trước khi bàn giao?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Replace the consultant with 'Operations team' as a collective owner for every row and control.",
        "text_vi": "Thay tư vấn viên bằng 'Đội vận hành' làm owner tập thể cho mọi hàng và control."
      },
      {
        "key": "B",
        "text": "Assign each row and control a named owner who remains after the engagement ends, recorded in an ownership matrix.",
        "text_vi": "Giao cho mỗi hàng và control một owner cụ thể còn ở lại sau khi hợp đồng kết thúc, ghi trong ownership matrix."
      },
      {
        "key": "C",
        "text": "Nothing; the consultant's name provides a contact point if questions arise after the engagement.",
        "text_vi": "Không cần gì; tên của tư vấn viên là đầu mối liên hệ nếu có câu hỏi sau khi hợp đồng kết thúc."
      },
      {
        "key": "D",
        "text": "Add an escalation clause so the consultant can be re-engaged whenever an owned signal fires.",
        "text_vi": "Thêm điều khoản leo thang để có thể thuê lại tư vấn viên bất cứ khi nào một signal họ sở hữu kích hoạt."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Every governance row and control needs an owner who stays after the engagement; an owner who has left is a gap, and the handoff package should include an ownership matrix. Keeping the consultant as owner or relying on re-engagement leaves signals unowned day to day. A collective team label recreates the problem where everyone assumes someone else will act.",
    "explanation_vi": "Mỗi hàng governance và control cần một owner còn ở lại sau khi hợp đồng kết thúc; một owner đã rời đi là một lỗ hổng, và gói bàn giao nên có ownership matrix. Giữ tư vấn viên làm owner hoặc dựa vào việc thuê lại khiến signal không có người sở hữu trong vận hành hằng ngày. Một nhãn tập thể tái tạo vấn đề ai cũng nghĩ người khác sẽ hành động.",
    "source": "output_4/10_Supplement_SLOs_Expectations_Handoff_and_Rollout.md"
  },
  {
    "id": 57,
    "topic": "Governance, Safety & Risk Management (14%)",
    "objective": "Address ethical AI considerations (bias, fairness, transparency)",
    "lessonId": "d5-t5",
    "question": "A city's housing-allocation assistant was redesigned so that ethnicity and gender are no longer passed to Claude. The project sponsor now declares the system 'bias-free by construction'. Inputs still include applicants' full names, home postcodes and previous schools. What should the architect point out?",
    "question_vi": "Trợ lý phân bổ nhà ở của một thành phố đã được thiết kế lại để không còn truyền dân tộc và giới tính cho Claude. Nhà tài trợ dự án giờ tuyên bố hệ thống 'không thiên lệch ngay từ thiết kế'. Input vẫn gồm họ tên đầy đủ, mã bưu chính nơi ở và trường học trước đây của người nộp đơn. Architect nên chỉ ra điều gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Remaining risk is limited to hallucination, which grounding in housing rules will address.",
        "text_vi": "Rủi ro còn lại chỉ giới hạn ở hallucination, điều mà grounding vào quy định nhà ở sẽ xử lý."
      },
      {
        "key": "B",
        "text": "The claim is correct only if the vendor's bias benchmark also covers housing decisions.",
        "text_vi": "Khẳng định chỉ đúng nếu benchmark bias của nhà cung cấp cũng bao phủ quyết định về nhà ở."
      },
      {
        "key": "C",
        "text": "Names, postcodes and schools can act as proxies, so outcomes must still be measured by subgroup.",
        "text_vi": "Tên, mã bưu chính và trường học có thể đóng vai proxy, nên vẫn phải đo kết quả theo subgroup."
      },
      {
        "key": "D",
        "text": "The claim is correct, because a model cannot discriminate on attributes it never receives.",
        "text_vi": "Khẳng định đúng, vì model không thể phân biệt đối xử dựa trên thuộc tính nó không bao giờ nhận."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Removing a sensitive column is not enough because variables such as postcode, school or name can carry the same information as proxies; fairness must still be measured, for example with subgroup breakdowns and counterfactual tests. Vendor benchmarks do not cover the architect's own inputs and pipeline, and hallucination is a different risk from unequal outcomes.",
    "explanation_vi": "Bỏ một cột nhạy cảm là chưa đủ vì các biến như mã bưu chính, trường học hay tên có thể mang cùng thông tin dưới dạng proxy; fairness vẫn phải được đo, ví dụ bằng phân tách theo subgroup và counterfactual test. Benchmark của nhà cung cấp không bao phủ input và pipeline riêng của architect, còn hallucination là rủi ro khác với kết quả bất công.",
    "source": "output_3/04_Fairness_and_Accountability.md"
  },
  {
    "id": 58,
    "topic": "Integration (19%)",
    "objective": "Apply retrieval strategies matched to data shape and query pattern",
    "lessonId": "d3-t6",
    "question": "A partner's draft architecture for an e-commerce support assistant has: an intent classifier; retrieval over a 'Live Order Status Index'; retrieval over the product-manual corpus; and a response composer. A separate tool for order status exists in the partner's API. Which component is misapplied for the data it handles?",
    "question_vi": "Bản nháp kiến trúc của một đối tác cho trợ lý hỗ trợ thương mại điện tử gồm: một intent classifier; truy xuất trên 'Live Order Status Index'; truy xuất trên corpus sổ tay sản phẩm; và một bộ soạn phản hồi. Trong API của đối tác đã có sẵn một tool riêng cho trạng thái đơn hàng. Thành phần nào bị áp dụng sai cho loại dữ liệu nó xử lý?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Retrieval over the product-manual corpus, because manuals should be in the system prompt.",
        "text_vi": "Truy xuất trên corpus sổ tay sản phẩm, vì sổ tay nên nằm trong system prompt."
      },
      {
        "key": "B",
        "text": "The intent classifier, because classification should be done with keyword rules, tracked through the usual ticketing process.",
        "text_vi": "Intent classifier, vì việc phân loại nên làm bằng quy tắc từ khóa, được theo dõi qua quy trình ticket thông thường."
      },
      {
        "key": "C",
        "text": "The response composer, because composition should be templated rather than generated.",
        "text_vi": "Bộ soạn phản hồi, vì việc soạn nên dùng template thay vì sinh ra."
      },
      {
        "key": "D",
        "text": "Retrieval over the order-status index, because order status is live state that needs a call to the order API.",
        "text_vi": "Truy xuất trên index trạng thái đơn hàng, vì trạng thái đơn là trạng thái live cần gọi tới API đơn hàng."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "In the course's critique exercise, retrieval over an order-status index is the misapplied component because order status is live state that belongs to the transactional API. A Claude intent classifier is the essence of routing, retrieval over manuals suits stable knowledge too large for the prompt, and composing the response is a language task suited to Claude.",
    "explanation_vi": "Trong bài tập phản biện của khóa học, truy xuất trên index trạng thái đơn hàng là thành phần bị áp dụng sai vì trạng thái đơn là trạng thái live thuộc về API giao dịch. Intent classifier bằng Claude là bản chất của routing, truy xuất trên sổ tay phù hợp với tri thức ổn định quá lớn cho prompt, và soạn phản hồi là tác vụ ngôn ngữ phù hợp với Claude.",
    "source": "output/06_Reference_Architectures.md"
  },
  {
    "id": 59,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "objective": "Document architectures and provide implementation guidance",
    "lessonId": "d6-t4",
    "question": "A Canadian insurer standardised on AWS must keep policyholder data in-country. After go-live on Bedrock, an audit finds that some requests were processed outside the required region. The model, prompts and application logic are working as designed. What is the most likely cause, and what guidance should be recorded?",
    "question_vi": "Một công ty bảo hiểm Canada đã chuẩn hóa trên AWS phải giữ dữ liệu chủ hợp đồng trong nước. Sau go-live trên Bedrock, một đợt audit phát hiện một số request được xử lý ngoài region yêu cầu. Model, prompt và logic ứng dụng đều hoạt động đúng thiết kế. Nguyên nhân có khả năng nhất là gì, và hướng dẫn nào nên được ghi lại?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "The client relied on a default or global endpoint; set the region explicitly and record it as a load-bearing decision.",
        "text_vi": "Client dựa vào endpoint mặc định hoặc global; hãy đặt region tường minh và ghi nhận nó là quyết định load-bearing."
      },
      {
        "key": "B",
        "text": "Bedrock silently moved the model to another region; migrate the workload to the direct API instead.",
        "text_vi": "Bedrock âm thầm chuyển model sang region khác; hãy chuyển workload sang direct API thay thế."
      },
      {
        "key": "C",
        "text": "Developers used Claude Code against production data; restrict Claude Code access to non-production systems.",
        "text_vi": "Developer dùng Claude Code với dữ liệu production; hãy giới hạn quyền truy cập Claude Code vào hệ thống không phải production."
      },
      {
        "key": "D",
        "text": "Long prompts were offloaded to overflow capacity elsewhere; shorten prompts to stay in-region.",
        "text_vi": "Các prompt dài được đẩy sang dung lượng dự phòng ở nơi khác; hãy rút ngắn prompt để ở trong region."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Regional availability on Bedrock requires explicit configuration, and defaulting to a global endpoint is the common pattern that breaks data residency; the fix is to set the region in the client and document the decision as load-bearing so it is not reverted. Moving to the direct API conflicts with AWS procurement and does not by itself address residency. Prompt length and Claude Code are unrelated to where these requests were processed.",
    "explanation_vi": "Tính khả dụng theo region trên Bedrock cần cấu hình tường minh, và để mặc định global endpoint là pattern phổ biến làm vỡ data residency; cách sửa là đặt region trong client và ghi quyết định là load-bearing để nó không bị đảo ngược. Chuyển sang direct API mâu thuẫn với procurement AWS và tự nó không giải quyết residency. Độ dài prompt và Claude Code không liên quan đến nơi các request này được xử lý.",
    "source": "output_4/06_Entry_Point_Selection_and_Outcomes.md"
  },
  {
    "id": 60,
    "topic": "Governance, Safety & Risk Management (14%)",
    "objective": "Address ethical AI considerations (bias, fairness, transparency)",
    "lessonId": "d5-t5",
    "question": "A staffing agency uses Claude to score candidate fit, and the scores look balanced across groups at the model output. After scoring, a business rule sends candidates whose addresses are in certain postcodes to a slower manual-verification queue, where many drop out. Hiring outcomes are skewed. Which fairness injection point is this?",
    "question_vi": "Một công ty tuyển dụng dùng Claude để chấm điểm mức độ phù hợp của ứng viên, và điểm số trông cân bằng giữa các nhóm ở đầu ra của model. Sau khi chấm, một quy tắc nghiệp vụ đưa ứng viên có địa chỉ thuộc một số mã bưu chính vào hàng chờ xác minh thủ công chậm hơn, nơi nhiều người bỏ cuộc. Kết quả tuyển dụng bị lệch. Đây là fairness injection point nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "The retrieval corpus, because postcode data is stored alongside candidate profiles.",
        "text_vi": "Retrieval corpus, vì dữ liệu mã bưu chính được lưu cùng hồ sơ ứng viên."
      },
      {
        "key": "B",
        "text": "The downstream routing, because what happens after the output sends some groups down different paths.",
        "text_vi": "Downstream routing, vì những gì xảy ra sau output đưa một số nhóm sang nhánh khác."
      },
      {
        "key": "C",
        "text": "The few-shot examples, because they may include candidates from those postcodes.",
        "text_vi": "Ví dụ few-shot, vì chúng có thể bao gồm ứng viên từ các mã bưu chính đó."
      },
      {
        "key": "D",
        "text": "The prompt framing, because the scoring prompt mentions candidate location.",
        "text_vi": "Prompt framing, vì prompt chấm điểm có nhắc tới địa điểm của ứng viên."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "The course defines downstream routing as what happens to the model's output after it is produced, which can direct some groups down different paths; here the skew arises after balanced scores, through the postcode rule. Corpus, framing and examples act before or during generation, and the scenario shows the model output itself was balanced.",
    "explanation_vi": "Khóa học định nghĩa downstream routing là những gì xảy ra với output của model sau khi nó được tạo ra, có thể đưa một số nhóm sang nhánh khác; ở đây độ lệch phát sinh sau điểm số cân bằng, qua quy tắc mã bưu chính. Corpus, framing và ví dụ tác động trước hoặc trong lúc sinh output, và tình huống cho thấy bản thân output của model là cân bằng.",
    "source": "output_3/04_Fairness_and_Accountability.md"
  },
  {
    "id": 61,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Align solutions to business value pillars (efficiency, transformation, productivity, cost, performance SLAs)",
    "lessonId": "d1-t6",
    "question": "A claims team spends 4,000 claims times 45 minutes per month on review. A proposal says Claude will reduce this to near zero, saving 3,000 analyst hours monthly. The approved design requires human review of low-confidence extractions, about 15 percent of claims. What is the main flaw in the ROI claim?",
    "question_vi": "Một đội claims dành 4.000 claim nhân 45 phút mỗi tháng cho việc review. Một đề xuất nói Claude sẽ giảm xuống gần bằng không, tiết kiệm 3.000 giờ analyst mỗi tháng. Thiết kế được duyệt yêu cầu người review các trích xuất low-confidence, khoảng 15 phần trăm số claim. Sai sót chính trong tuyên bố ROI là gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "It counts hours saved but fails to count the engineering time already spent building the first prototype.",
        "text_vi": "Nó tính số giờ tiết kiệm nhưng không tính thời gian kỹ thuật đã bỏ ra xây prototype đầu tiên."
      },
      {
        "key": "B",
        "text": "It uses minutes as the baseline unit, whereas ROI must always be expressed in currency before any comparison.",
        "text_vi": "Nó dùng phút làm đơn vị baseline, trong khi ROI luôn phải được biểu diễn bằng tiền trước mọi so sánh."
      },
      {
        "key": "C",
        "text": "It assumes full automation although the design needs human review, overstating the gain.",
        "text_vi": "Nó giả định tự động hóa hoàn toàn dù thiết kế cần người review, làm phóng đại lợi ích."
      },
      {
        "key": "D",
        "text": "It ignores that the baseline should be the industry average rather than the insurer's own operational data.",
        "text_vi": "Nó bỏ qua việc baseline nên là trung bình ngành thay vì dữ liệu vận hành của chính công ty bảo hiểm."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "A review gate reduces labor but does not eliminate it, so the projected state must include review cost in the same unit as the baseline; the course example yields roughly 1,017 hours remaining rather than zero. The baseline should come from the owner's own operational data, units can be hours if consistent, and sunk prototype time belongs in payback rather than invalidating this projection.",
    "explanation_vi": "Review gate giảm nhưng không loại bỏ lao động, nên trạng thái dự phóng phải gồm chi phí review cùng đơn vị với baseline; ví dụ của khóa học cho khoảng 1.017 giờ còn lại thay vì bằng không. Baseline phải lấy từ dữ liệu vận hành của chính owner, đơn vị có thể là giờ nếu nhất quán, và thời gian prototype đã chi thuộc về payback chứ không làm vô hiệu dự phóng này.",
    "source": "output_2/04_Sizing_and_Feasibility.md"
  },
  {
    "id": 62,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "objective": "Optimize context windows and manage token usage",
    "lessonId": "d2-t4",
    "question": "A software company's coding agent starts each session with the task description and the files the developer referenced. Midway through, it realizes it needs a utility module it did not load; the repository is far too large to preload. Which context strategy fits this phase of the work?",
    "question_vi": "Agent viết code của một công ty phần mềm bắt đầu mỗi phiên với mô tả tác vụ và các file mà lập trình viên tham chiếu. Giữa chừng, nó nhận ra cần một module tiện ích mà nó chưa nạp; repository quá lớn để nạp trước. Chiến lược context nào phù hợp với giai đoạn này của công việc?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Monolithic: reload the whole repository into the prompt so that nothing is ever missed.",
        "text_vi": "Monolithic: nạp lại toàn bộ repository vào prompt để không bao giờ bỏ sót gì."
      },
      {
        "key": "B",
        "text": "Compaction: summarize the session so far, which will make room for the module.",
        "text_vi": "Compaction: tóm tắt phiên làm việc cho đến nay, việc này sẽ tạo chỗ cho module."
      },
      {
        "key": "C",
        "text": "Restart the session with a longer initial file list chosen by the developer.",
        "text_vi": "Khởi động lại phiên với danh sách file ban đầu dài hơn do lập trình viên chọn."
      },
      {
        "key": "D",
        "text": "Just-in-time retrieval: search the codebase and pull in only the matching files.",
        "text_vi": "Truy xuất just-in-time: tìm trong codebase và chỉ kéo vào các file khớp."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "In the course's layered coding-agent example, the discovery phase uses just-in-time retrieval: the corpus is too large to preload, so only the relevant slice is fetched on demand. Preloading everything hits the context limit, compaction compresses past work but cannot surface code that was never loaded, and restarting discards accumulated progress while still guessing which files are needed.",
    "explanation_vi": "Trong ví dụ coding agent nhiều lớp của course, giai đoạn khám phá dùng truy xuất just-in-time: kho quá lớn để nạp trước, nên chỉ phần liên quan được lấy về khi cần. Nạp trước mọi thứ sẽ chạm giới hạn context, compaction nén công việc đã qua nhưng không thể đưa ra code chưa từng được nạp, còn khởi động lại là bỏ tiến độ đã tích lũy trong khi vẫn phải đoán file nào cần.",
    "source": "output/08_Model_Context_Strategy.md"
  },
  {
    "id": 63,
    "topic": "Governance, Safety & Risk Management (14%)",
    "objective": "Ensure compliance with regulations (e.g., GDPR, HIPAA, FedRAMP)",
    "lessonId": "d5-t4",
    "question": "A Dutch online bank's Claude assistant stores conversation transcripts, embeds past chats in a vector store for personalization, caches recent sessions and keeps nightly backups. A customer submits a GDPR erasure request and the team realizes nobody knows every place her data lives. Which TWO elements are necessary to fulfil such requests? (Choose TWO.)",
    "question_vi": "Trợ lý Claude của một ngân hàng trực tuyến Hà Lan lưu bản ghi hội thoại, nhúng các cuộc chat cũ vào vector store để cá nhân hóa, cache các phiên gần đây và giữ bản backup hằng đêm. Một khách hàng gửi yêu cầu xóa dữ liệu theo GDPR và đội nhận ra không ai biết hết mọi nơi dữ liệu của cô ấy nằm. HAI yếu tố nào là cần thiết để đáp ứng các yêu cầu như vậy? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "A system-prompt instruction telling Claude to forget the customer's past conversations.",
        "text_vi": "Một chỉ dẫn trong system prompt bảo Claude quên các cuộc hội thoại trước của khách hàng."
      },
      {
        "key": "B",
        "text": "An evidenced deletion process that applies to every in-scope copy of the data.",
        "text_vi": "Một quy trình xóa có bằng chứng, áp dụng cho mọi bản sao dữ liệu trong phạm vi."
      },
      {
        "key": "C",
        "text": "A current data-flow record showing every copy across logs, caches, vector store and backups.",
        "text_vi": "Một data-flow record hiện hành cho thấy mọi bản sao trong log, cache, vector store và backup."
      },
      {
        "key": "D",
        "text": "An output filter that suppresses the customer's name in any future assistant reply.",
        "text_vi": "Một output filter che tên khách hàng trong mọi câu trả lời sau này của trợ lý."
      },
      {
        "key": "E",
        "text": "Moving the vector store outside the EU so it falls outside the erasure obligation.",
        "text_vi": "Chuyển vector store ra ngoài EU để nó nằm ngoài nghĩa vụ xóa."
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "explanation": "Erasure requires knowing where a person's data lives across context caches, logs, vector stores and backups, which is what the data-flow record provides, and then deleting every copy with evidence. An output filter or a prompt instruction hides data from replies while it still exists, and relocating data outside the EU does not remove GDPR obligations.",
    "explanation_vi": "Việc xóa đòi hỏi biết dữ liệu của một người nằm ở đâu trong cache, log, vector store và backup, chính là điều data-flow record cung cấp, rồi xóa mọi bản sao có bằng chứng. Output filter hay chỉ dẫn trong prompt chỉ che dữ liệu khỏi câu trả lời trong khi nó vẫn tồn tại, còn chuyển dữ liệu ra ngoài EU không xóa được nghĩa vụ GDPR.",
    "source": "output_3/09_Supplement_Regulatory_Deep_Dive.md"
  }
];
