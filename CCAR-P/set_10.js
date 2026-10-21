window.QUIZ_DATA_CCARP_SET_10 = [
  {
    "id": 1,
    "topic": "Integration (19%)",
    "objective": "Analyze authentication and authorization requirements to identify security gaps",
    "lessonId": "d3-t2",
    "question": "A law firm's attorneys currently use Claude for privileged document review through personal API keys stored on their laptops. General counsel now requires that all AI tooling touching privileged material run behind infrastructure the firm controls, with firm-owned access control and an end-to-end audit trail. Which integration satisfies the requirement?",
    "question_vi": "Luật sư của một công ty luật hiện dùng Claude để review tài liệu đặc quyền thông qua API key cá nhân lưu trên laptop. Tổng cố vấn pháp lý nay yêu cầu mọi công cụ AI chạm tới tài liệu đặc quyền phải chạy sau hạ tầng do công ty kiểm soát, với kiểm soát truy cập và audit trail đầu-cuối thuộc sở hữu của công ty. Phương án tích hợp nào đáp ứng yêu cầu?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Route all use through the firm's application and gateway, which holds the API key, enforces access via SSO and logs every request.",
        "text_vi": "Đưa mọi lượt sử dụng qua ứng dụng và gateway của công ty, nơi giữ API key, thực thi quyền truy cập qua SSO và log mọi request."
      },
      {
        "key": "B",
        "text": "Move attorneys to a consumer chat tier with individual accounts and two-factor login.",
        "text_vi": "Chuyển luật sư sang gói chat dành cho người tiêu dùng với tài khoản cá nhân và đăng nhập hai lớp."
      },
      {
        "key": "C",
        "text": "Keep the personal keys but require attorneys to export their usage history monthly.",
        "text_vi": "Giữ key cá nhân nhưng yêu cầu luật sư xuất lịch sử sử dụng hằng tháng."
      },
      {
        "key": "D",
        "text": "Rotate each attorney's personal API key weekly and store the keys in an encrypted vault on each laptop, tracked through the usual ticketing process.",
        "text_vi": "Xoay vòng API key cá nhân của từng luật sư hằng tuần và lưu key trong kho mã hóa trên từng laptop, được theo dõi qua quy trình ticket thông thường."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "The constraint-to-integration matrix for privilege puts the API behind the firm's own application and approved gateway, which holds the key, enforces who can access what with SSO identity and produces an audit log the firm owns. Personal keys, even rotated or with exported history, leave access control and the audit trail outside central control. A consumer tier is a surface the firm cannot audit end to end.",
    "explanation_vi": "Ma trận ràng buộc-tích hợp cho đặc quyền luật sư đặt API sau ứng dụng và gateway được duyệt của chính công ty, nơi giữ key, thực thi ai được truy cập gì bằng danh tính SSO và tạo audit log thuộc sở hữu công ty. Key cá nhân, dù được xoay vòng hay xuất lịch sử, vẫn để kiểm soát truy cập và audit trail nằm ngoài sự kiểm soát tập trung. Gói người tiêu dùng là bề mặt mà công ty không thể audit đầu-cuối.",
    "source": "output/10_Entry_Points_Governance.md"
  },
  {
    "id": 2,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "objective": "Implement prompt reuse strategies (caching, modular prompts, Skills)",
    "lessonId": "d2-t5",
    "question": "A partner's support organization drafts replies hundreds of times a day from a ticket plus the relevant manual section, under fixed role, tone, output-contract and guardrail rules. Agents currently keep pasted local copies of the prompt with the ticket at the top. Which design best combines efficient reuse and governance?",
    "question_vi": "Bộ phận hỗ trợ của một đối tác soạn phản hồi hàng trăm lần mỗi ngày từ một ticket cộng đoạn tài liệu hướng dẫn liên quan, theo các quy tắc cố định về role, giọng văn, output contract và guardrail. Nhân viên hiện giữ các bản prompt dán cục bộ với ticket đặt ở đầu. Thiết kế nào kết hợp tốt nhất giữa tái sử dụng hiệu quả và quản trị?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "A modular prompt library assembled by each agent, with caching left at its default settings.",
        "text_vi": "Một thư viện prompt dạng module do từng nhân viên tự lắp ghép, với caching để ở thiết lập mặc định."
      },
      {
        "key": "B",
        "text": "Stable prefix first with the breakpoint before ticket and manual, shipped as a versioned Skill.",
        "text_vi": "Prefix ổn định đứng trước với breakpoint trước ticket và tài liệu hướng dẫn, ship dưới dạng Skill có version."
      },
      {
        "key": "C",
        "text": "Put the ticket and manual first for relevance, cache them, and share the prompt on a wiki for all agents.",
        "text_vi": "Đặt ticket và tài liệu hướng dẫn lên đầu cho liên quan, cache chúng, và chia sẻ prompt trên wiki cho mọi nhân viên."
      },
      {
        "key": "D",
        "text": "Keep local templates but move the ticket to the end, and email updates to agents monthly.",
        "text_vi": "Giữ template cục bộ nhưng chuyển ticket xuống cuối, và gửi email cập nhật cho nhân viên hằng tháng."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "The course's model answer puts role, tone, output contract and guardrail first as the stable cached prefix, with the ticket and manual section as the only per-request content after the breakpoint, and ships the procedure as a versioned Skill because it is stable, run identically across the org and needs versioning and rollback. Local copies and wiki-shared prompts lack central governance and drift, dynamic content first prevents cache hits, and agent-assembled libraries suit often-tweaked prompts within one team, not this procedure.",
    "explanation_vi": "Đáp án mẫu của course đặt role, giọng văn, output contract và guardrail lên đầu làm prefix ổn định được cache, với ticket và đoạn tài liệu hướng dẫn là nội dung duy nhất theo từng request nằm sau breakpoint, và ship quy trình dưới dạng Skill có version vì nó ổn định, chạy giống hệt nhau trên toàn tổ chức và cần versioning cùng rollback. Bản sao cục bộ và prompt chia sẻ trên wiki thiếu quản trị tập trung và dễ trôi lệch, đặt nội dung động lên trước khiến cache không hit, còn thư viện do từng nhân viên lắp ghép phù hợp với prompt hay tinh chỉnh trong một đội, không phải quy trình này.",
    "source": "output/09_Prompting_as_Architecture.md"
  },
  {
    "id": 3,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "objective": "Support lifecycle phases (discovery, design, handoff, monitoring, iteration)",
    "lessonId": "d6-t5",
    "question": "A city council's project management office drafts its AI governance plan. It states that the feedback loop for the residents' enquiry assistant 'will be set up after the first significant incident, when we know what to monitor.' Launch is in three weeks, and the service handles housing-benefit questions. How should the Architect respond?",
    "question_vi": "Văn phòng quản lý dự án của hội đồng thành phố soạn kế hoạch quản trị AI. Kế hoạch ghi rằng feedback loop cho trợ lý giải đáp của cư dân 'sẽ được thiết lập sau sự cố đáng kể đầu tiên, khi chúng ta biết cần giám sát gì'. Launch còn ba tuần, và dịch vụ xử lý câu hỏi về trợ cấp nhà ở. Architect nên phản hồi thế nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Recommend delaying launch indefinitely until enough incident data from similar councils is available.",
        "text_vi": "Khuyến nghị hoãn launch vô thời hạn cho đến khi có đủ dữ liệu sự cố từ các hội đồng tương tự."
      },
      {
        "key": "B",
        "text": "Suggest replacing the feedback loop with comprehensive dashboards, which can be reviewed when needed.",
        "text_vi": "Đề xuất thay feedback loop bằng dashboard toàn diện, có thể xem khi cần."
      },
      {
        "key": "C",
        "text": "Explain that monitoring and iteration start at launch, so the governance table with triggers and owners must exist beforehand.",
        "text_vi": "Giải thích rằng monitoring và iteration bắt đầu từ launch, nên governance table có trigger và owner phải tồn tại trước đó."
      },
      {
        "key": "D",
        "text": "Agree, since incident data will make the governance rules more accurate than guesses made before launch.",
        "text_vi": "Đồng ý, vì dữ liệu sự cố sẽ làm các quy tắc quản trị chính xác hơn so với phỏng đoán trước launch."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "The feedback loop is the monitoring-and-iteration phase, and its governance table must exist before launch; it is a design-time obligation, and much drift never produces an incident at all. Waiting for an incident lets slow drift run unnoticed. Dashboards alone are monitoring, not a feedback loop, and an open-ended delay has no defined gate.",
    "explanation_vi": "Feedback loop là pha monitoring và iteration, và governance table của nó phải tồn tại trước launch; đó là nghĩa vụ ở thời điểm thiết kế, và nhiều drift không bao giờ tạo ra sự cố. Chờ sự cố khiến drift chậm diễn ra mà không ai nhận ra. Chỉ có dashboard là monitoring, không phải feedback loop, và trì hoãn vô thời hạn thì không có gate xác định.",
    "source": "output_4/04_Feedback_Loops_and_SLAs.md"
  },
  {
    "id": 4,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Monitor system performance using logging and observability tools",
    "lessonId": "d4-t6",
    "question": "A fashion retailer's assistant cost rose 40% and time to first token increased right after a release. The prompt team had added the current timestamp and the shopper's first name at the very top of the system prompt, above a long, otherwise unchanged policy block. Request logs record whether caching was applied. How should the team use observability here?",
    "question_vi": "Chi phí của trợ lý một nhà bán lẻ thời trang tăng 40% và thời gian tới token đầu tiên tăng ngay sau một bản phát hành. Team prompt đã thêm timestamp hiện tại và tên của người mua lên đầu system prompt, phía trên một khối chính sách dài vốn không đổi. Request log có ghi việc caching có được áp dụng hay không. Team nên dùng observability ở đây thế nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Disable caching, since it is no longer working",
        "text_vi": "Tắt caching, vì nó không còn hoạt động"
      },
      {
        "key": "B",
        "text": "Switch to a cheaper model to offset the cost increase",
        "text_vi": "Chuyển sang model rẻ hơn để bù lại mức tăng chi phí"
      },
      {
        "key": "C",
        "text": "Ignore the cache flag and increase the budget for the new feature",
        "text_vi": "Bỏ qua cờ cache và tăng ngân sách cho tính năng mới"
      },
      {
        "key": "D",
        "text": "Compare cache-applied rates before and after the release, confirm the prefix broke, and move dynamic content after the static policy",
        "text_vi": "So sánh tỉ lệ áp dụng cache trước và sau bản phát hành, xác nhận prefix bị phá vỡ, và chuyển nội dung động xuống sau phần chính sách tĩnh"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "The context log group records whether caching was applied, which lets the team attribute the jump to the release: inserting a timestamp and name at the top changes the prefix on every request, so the cache never hits. Restoring static-first ordering fixes cost and latency. Raising the budget or switching models ignores the cause, and disabling caching throws away the lever.",
    "explanation_vi": "Nhóm log context ghi lại việc caching có được áp dụng hay không, giúp team quy mức tăng về bản phát hành: chèn timestamp và tên lên đầu làm prefix thay đổi ở mọi request, nên cache không bao giờ hit. Khôi phục thứ tự tĩnh trước sẽ sửa được chi phí và latency. Tăng ngân sách hay đổi model bỏ qua nguyên nhân, còn tắt caching là vứt bỏ đòn bẩy.",
    "source": "output_2/05_Enterprise_Integration_Patterns.md"
  },
  {
    "id": 5,
    "topic": "Governance, Safety & Risk Management (14%)",
    "objective": "Implement guardrails and safety controls",
    "lessonId": "d5-t1",
    "question": "An online retailer's support agent has an issue_refund tool. A trace shows: request received, model emits a tool_use for issue_refund, the refund executes, then the output toxicity filter inspects the reply text and passes it. The design review had approved the system because 'a guardrail is in place'. Which missing control matters most here?",
    "question_vi": "Agent hỗ trợ của một nhà bán lẻ trực tuyến có tool issue_refund. Một trace cho thấy: nhận request, model phát ra tool_use cho issue_refund, lệnh hoàn tiền được thực thi, sau đó output toxicity filter kiểm tra văn bản trả lời và cho qua. Buổi design review đã duyệt hệ thống vì 'đã có guardrail'. Control bị thiếu nào quan trọng nhất ở đây?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Deterministic authorization of the refund call, checking identity, order scope and limits before it runs.",
        "text_vi": "Authorization deterministic cho lời gọi hoàn tiền, kiểm tra identity, phạm vi đơn hàng và hạn mức trước khi nó chạy."
      },
      {
        "key": "B",
        "text": "Detailed logging of each refund so finance can reverse unauthorized ones during reconciliation.",
        "text_vi": "Log chi tiết từng lệnh hoàn tiền để bộ phận tài chính đảo ngược các lệnh trái phép khi đối soát."
      },
      {
        "key": "C",
        "text": "A second, stronger judge model on the output to catch replies describing unauthorized refunds.",
        "text_vi": "Một judge model thứ hai mạnh hơn ở output để bắt các câu trả lời mô tả lệnh hoàn tiền trái phép."
      },
      {
        "key": "D",
        "text": "A system-prompt instruction telling the model to confirm eligibility before calling the tool.",
        "text_vi": "Một chỉ dẫn trong system prompt yêu cầu model xác nhận điều kiện trước khi gọi tool."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Output screening judges text, not actions, and here it sat downstream of the only side effect on the path; the gap is an authorization gate before the refund tool executes. A stronger output judge still runs after the money has moved. Logging for reconciliation is detective, and a prompt instruction steers but does not enforce.",
    "explanation_vi": "Output screening chấm văn bản, không chấm hành động, và ở đây nó nằm sau side effect duy nhất trên đường đi; lỗ hổng là một authorization gate trước khi tool hoàn tiền thực thi. Một judge output mạnh hơn vẫn chạy sau khi tiền đã chuyển. Log để đối soát là control detective, còn chỉ dẫn trong prompt chỉ định hướng chứ không enforce.",
    "source": "output_3/03_Guardrails_and_Failure_Modes.md"
  },
  {
    "id": 6,
    "topic": "Integration (19%)",
    "objective": "Evaluate connection protocols and select the appropriate integration mechanism (MCP, API/CLI, agent-to-agent)",
    "lessonId": "d3-t7",
    "question": "A hospital network holds a BAA with AWS that covers Bedrock and is building a clinical-documentation assistant embedded in its own app on AWS. Clinicians will use it daily with patient records, and the compliance office wants the justification recorded in the architecture decision document. Which choice best names the right delivery route with the right reason?",
    "question_vi": "Một mạng lưới bệnh viện có BAA với AWS bao phủ Bedrock và đang xây trợ lý ghi chép lâm sàng nhúng trong ứng dụng riêng trên AWS. Bác sĩ sẽ dùng hằng ngày với hồ sơ bệnh nhân, và văn phòng compliance muốn lý do được ghi lại trong tài liệu quyết định kiến trúc. Lựa chọn nào gọi đúng delivery route với lý do đúng nhất?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Claude.ai Enterprise, because it is HIPAA-ready and avoids any build effort.",
        "text_vi": "Claude.ai Enterprise, vì nó sẵn sàng cho HIPAA và không cần công xây dựng."
      },
      {
        "key": "B",
        "text": "Bedrock, because the existing BAA covers this configuration, removing compliance risk before other trade-offs.",
        "text_vi": "Bedrock, vì BAA hiện có bao phủ cấu hình này, loại rủi ro compliance trước các đánh đổi khác."
      },
      {
        "key": "C",
        "text": "Direct Anthropic API with a newly negotiated BAA, for more control over PHI flows, in line with how the earlier pilot was handled.",
        "text_vi": "API Anthropic trực tiếp với BAA mới đàm phán, để kiểm soát luồng PHI tốt hơn, phù hợp với cách xử lý ở giai đoạn thử nghiệm trước."
      },
      {
        "key": "D",
        "text": "Bedrock, because pinning a US region is what makes the deployment HIPAA compliant.",
        "text_vi": "Bedrock, vì ghim region Mỹ là điều khiến triển khai tuân thủ HIPAA."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "The deciding factor is governance: the network's existing BAA covers the Bedrock configuration, so that route clears the compliance filter first; HIPAA turns on BAA coverage of the configuration, not geography. Negotiating a new BAA duplicates cover already in place, and Claude.ai Enterprise is not how Claude is embedded into an app that integrates clinical systems.",
    "explanation_vi": "Yếu tố quyết định là governance: BAA hiện có của mạng lưới bao phủ cấu hình Bedrock, nên route này vượt qua bộ lọc compliance trước; HIPAA xoay quanh việc BAA bao phủ cấu hình, không phải địa lý. Đàm phán BAA mới là nhân đôi phần bảo vệ đã có, và Claude.ai Enterprise không phải cách nhúng Claude vào ứng dụng tích hợp hệ thống lâm sàng.",
    "source": "output/10_Entry_Points_Governance.md"
  },
  {
    "id": 7,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "objective": "Implement prompt reuse strategies (caching, modular prompts, Skills)",
    "lessonId": "d2-t5",
    "question": "At a software company, seven product teams each keep their own copy of a 'generate release notes' prompt. Outputs have drifted apart in structure and tone, and when one team fixed a bug in its copy, the others never received the fix. Leadership wants one governed procedure with versioning and rollback. Which two actions fit best? (Choose TWO.)",
    "question_vi": "Tại một công ty phần mềm, bảy đội sản phẩm mỗi đội giữ một bản riêng của prompt 'tạo release notes'. Output đã trôi lệch nhau về cấu trúc và giọng văn, và khi một đội sửa lỗi trong bản của mình, các đội khác không bao giờ nhận được bản sửa. Ban lãnh đạo muốn một quy trình được quản trị với versioning và rollback. Hai hành động nào phù hợp nhất? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "Establish an approval and rollback process for new versions of the Skill.",
        "text_vi": "Thiết lập quy trình phê duyệt và rollback cho các phiên bản mới của Skill."
      },
      {
        "key": "B",
        "text": "Move all teams to a more capable model so that outputs converge naturally.",
        "text_vi": "Chuyển mọi đội sang model mạnh hơn để output tự hội tụ."
      },
      {
        "key": "C",
        "text": "Publish the current best prompt on a wiki page for teams to copy from.",
        "text_vi": "Đăng prompt tốt nhất hiện tại lên trang wiki để các đội sao chép."
      },
      {
        "key": "D",
        "text": "Ask each team to review and update its own copy of the prompt every quarter.",
        "text_vi": "Yêu cầu mỗi đội rà soát và cập nhật bản prompt của mình mỗi quý."
      },
      {
        "key": "E",
        "text": "Package the procedure as a versioned Skill (SKILL.md plus scripts), distributed centrally.",
        "text_vi": "Đóng gói quy trình thành một Skill có version (SKILL.md cộng script), phân phối tập trung."
      }
    ],
    "answer": [
      "A",
      "E"
    ],
    "explanation": "A stable procedure distributed across teams that needs versioning, approval and rollback is the course's case for a Skill, and versioned reuse is the control against drift. Quarterly self-updates and a wiki page both preserve many unmanaged copies that will drift again, and a stronger model does not address the root cause, which is multiple divergent versions of the procedure.",
    "explanation_vi": "Một quy trình ổn định được phân phối qua nhiều đội và cần versioning, phê duyệt và rollback là trường hợp course dành cho Skill, và tái sử dụng có version là biện pháp kiểm soát chống trôi lệch. Tự cập nhật hằng quý và trang wiki đều duy trì nhiều bản sao không được quản lý sẽ lại trôi lệch, còn model mạnh hơn không giải quyết nguyên nhân gốc là có nhiều phiên bản quy trình khác nhau.",
    "source": "output/09_Prompting_as_Architecture.md"
  },
  {
    "id": 8,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Select appropriate architectural patterns (workflow, agentic, augmented LLM)",
    "lessonId": "d1-t3",
    "question": "A motor insurer built its claims-intake assistant as an agent because the team 'didn't want to constrain it too early'. Six months in, they have added many guardrail tools, and analysis of production traces shows that every claim followed one of four path shapes. Logging is weak and compliance is asking questions. What should the architect recommend?",
    "question_vi": "Một công ty bảo hiểm xe cơ giới xây trợ lý tiếp nhận claim dưới dạng agent vì đội 'không muốn ràng buộc nó quá sớm'. Sáu tháng sau, họ đã thêm nhiều guardrail tool, và phân tích trace production cho thấy mọi claim đều đi theo một trong bốn hình dạng đường đi. Logging yếu và compliance đang đặt câu hỏi. Architect nên khuyến nghị gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Split the agent into four peer agents, one per path, each with access to the full set of claims tools.",
        "text_vi": "Tách agent thành bốn agent ngang hàng, mỗi agent một đường đi, mỗi agent có toàn bộ tool claims."
      },
      {
        "key": "B",
        "text": "Keep the agent and add more guardrail tools for each new compliance question, since the agent preserves future flexibility.",
        "text_vi": "Giữ agent và thêm guardrail tool cho mỗi câu hỏi compliance mới, vì agent giữ được sự linh hoạt cho tương lai."
      },
      {
        "key": "C",
        "text": "Refactor into a router and four chains, with step-level logging and an explicit point for each decision.",
        "text_vi": "Tái cấu trúc thành một router và bốn chain, có logging theo bước và một điểm tường minh cho mỗi quyết định."
      },
      {
        "key": "D",
        "text": "Move the agent to a more capable model so that it follows the four observed paths more consistently over time.",
        "text_vi": "Chuyển agent sang model mạnh hơn để nó đi theo bốn đường đi quan sát được một cách ổn định hơn theo thời gian."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Mined traces that collapse into a few enumerable shapes show the steps were knowable all along, so a router with four chains gives a clean, auditable structure with standard logging. Adding more guardrails continues rebuilding a workflow inside the loop minus the logging, a stronger model does not create discrete auditable steps, and four peer agents multiply failure boundaries while keeping the same non-determinism.",
    "explanation_vi": "Trace được phân tích hội tụ về vài hình dạng liệt kê được cho thấy các bước vốn đã biết từ đầu, nên một router với bốn chain mang lại cấu trúc gọn, kiểm toán được với logging tiêu chuẩn. Thêm guardrail là tiếp tục dựng lại workflow bên trong vòng lặp mà thiếu logging, model mạnh hơn không tạo ra bước rời rạc kiểm toán được, còn bốn agent ngang hàng nhân ranh giới lỗi mà vẫn giữ nguyên tính bất định.",
    "source": "output/05_Pattern_Selection.md"
  },
  {
    "id": 9,
    "topic": "Integration (19%)",
    "objective": "Design a RAG pipeline with appropriate chunking and indexing strategies",
    "lessonId": "d3-t5",
    "question": "An investment firm's research assistant answers questions about quarterly reports. Analysts notice wrong figures when a question depends on a financial table: the retrieved chunk often contains only the top half of the table, with the rows they need in the next chunk. Which pipeline change best addresses this?",
    "question_vi": "Trợ lý nghiên cứu của một công ty đầu tư trả lời câu hỏi về báo cáo quý. Chuyên viên phân tích nhận thấy số liệu sai khi câu hỏi phụ thuộc vào một bảng tài chính: chunk được truy xuất thường chỉ chứa nửa trên của bảng, còn các dòng họ cần nằm ở chunk kế tiếp. Thay đổi pipeline nào xử lý tốt nhất?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Increase top-k so both halves of the table are likely to be retrieved together.",
        "text_vi": "Tăng top-k để hai nửa của bảng có khả năng được truy xuất cùng nhau."
      },
      {
        "key": "B",
        "text": "Raise the model's temperature so it can reason about missing rows, in line with how the earlier pilot was handled.",
        "text_vi": "Tăng temperature của model để nó suy luận về các dòng còn thiếu, phù hợp với cách xử lý ở giai đoạn thử nghiệm trước."
      },
      {
        "key": "C",
        "text": "Switch to a model with a larger context window to hold more chunks per request.",
        "text_vi": "Chuyển sang model có context window lớn hơn để chứa nhiều chunk hơn mỗi request."
      },
      {
        "key": "D",
        "text": "Use structure-aware chunking that never splits a table, keeping each table intact with its caption.",
        "text_vi": "Dùng chunking nhận biết cấu trúc không bao giờ cắt ngang bảng, giữ nguyên mỗi bảng cùng chú thích của nó."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Chunking that splits semantic units such as tables, code blocks or multi-paragraph arguments is a named RAG failure, so the fix is at chunking: keep tables whole. Temperature does not create missing data. A larger top-k only raises the odds of retrieving both halves while adding noise and cost, and a larger window does nothing if the split halves are not both retrieved.",
    "explanation_vi": "Chunking cắt ngang đơn vị ngữ nghĩa như bảng, khối code hay lập luận nhiều đoạn là một lỗi RAG được gọi tên, nên cách sửa nằm ở chunking: giữ nguyên bảng. Temperature không tạo ra dữ liệu còn thiếu. top-k lớn hơn chỉ tăng khả năng lấy được cả hai nửa trong khi thêm nhiễu và chi phí, còn cửa sổ lớn hơn chẳng giúp gì nếu hai nửa không cùng được truy xuất.",
    "source": "output/08_Model_Context_Strategy.md"
  },
  {
    "id": 10,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Select appropriate architectural patterns (workflow, agentic, augmented LLM)",
    "lessonId": "d1-t3",
    "question": "A microfinance lender's disbursement assistant runs as an agent. An auditor asks which step approved a specific disbursement and which model version made the decision. The team can only show a transcript of model turns, and the application calls a 'latest' model alias that rolled forward two weeks ago without re-validation. Which two changes address the two separate problems? (Choose TWO.)",
    "question_vi": "Trợ lý giải ngân của một tổ chức tài chính vi mô chạy dưới dạng agent. Auditor hỏi bước nào đã phê duyệt một khoản giải ngân cụ thể và model version nào đã ra quyết định. Đội chỉ có thể đưa ra transcript các model turn, và ứng dụng gọi alias model 'latest' vốn đã roll forward hai tuần trước mà không re-validate. Hai thay đổi nào giải quyết hai vấn đề riêng biệt này? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "Switch the agent to the most capable model available so disbursement decisions become more accurate.",
        "text_vi": "Chuyển agent sang model mạnh nhất hiện có để quyết định giải ngân chính xác hơn."
      },
      {
        "key": "B",
        "text": "Increase the verbosity of agent-loop logging so every tool call and reasoning step is captured in the transcript.",
        "text_vi": "Tăng mức chi tiết của logging trong agent loop để mọi tool call và bước suy luận được ghi trong transcript."
      },
      {
        "key": "C",
        "text": "Make disbursement approval an explicit, logged workflow step with a named owner who signs off each decision.",
        "text_vi": "Biến việc phê duyệt giải ngân thành một bước workflow tường minh, có log, với owner được chỉ định ký duyệt từng quyết định."
      },
      {
        "key": "D",
        "text": "Pin a specific model version and require an eval gate with preset thresholds before any version upgrade.",
        "text_vi": "Pin một model version cụ thể và yêu cầu eval gate với ngưỡng đặt trước trước mọi lần nâng version."
      },
      {
        "key": "E",
        "text": "Add a second agent that reviews the first agent's transcript and summarizes why each disbursement was approved.",
        "text_vi": "Thêm một agent thứ hai review transcript của agent đầu và tóm tắt vì sao mỗi khoản giải ngân được duyệt."
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "explanation": "The missing auditable step is a pattern problem solved by an explicit workflow approval step, while the silent version roll-forward is a model-governance gap solved by pinning and an eval gate, a gap that would affect any pattern. More verbose logging still yields only a transcript, a stronger model is unrelated to auditability, and a reviewing agent produces another probabilistic narrative rather than a discrete step.",
    "explanation_vi": "Việc thiếu bước kiểm toán được là lỗi pattern, giải quyết bằng một bước phê duyệt workflow tường minh, còn version tự roll forward là lỗ hổng model governance, giải quyết bằng pin version và eval gate, một lỗ hổng ảnh hưởng mọi pattern. Logging chi tiết hơn vẫn chỉ cho ra transcript, model mạnh hơn không liên quan tới khả năng kiểm toán, và một agent review chỉ tạo thêm một bản tường thuật xác suất thay vì một bước rời rạc.",
    "source": "output/05_Pattern_Selection.md"
  },
  {
    "id": 11,
    "topic": "Integration (19%)",
    "objective": "Evaluate progressive discovery vs. monolithic context strategy",
    "lessonId": "d3-t8",
    "question": "A product team states two beliefs about context while designing a document-analysis agent. They are about to finalise the architecture and the lead wants misconceptions caught before they become design decisions. Which two beliefs does the course identify as misconceptions? (Choose TWO.)",
    "question_vi": "Một đội sản phẩm nêu hai niềm tin về context khi thiết kế agent phân tích tài liệu. Họ sắp chốt kiến trúc và trưởng nhóm muốn bắt các ngộ nhận trước khi chúng trở thành quyết định thiết kế. Hai niềm tin nào được khóa học xác định là ngộ nhận? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "'Anything we want to persist must be stored and passed back in by our application.'",
        "text_vi": "'Bất cứ thứ gì ta muốn lưu lại phải do ứng dụng của ta lưu và đưa lại vào.'"
      },
      {
        "key": "B",
        "text": "'The context window resets between calls unless our application manages continuity.'",
        "text_vi": "'Context window được đặt lại giữa các lời gọi trừ khi ứng dụng của ta quản lý tính liên tục.'"
      },
      {
        "key": "C",
        "text": "'The model has a 200K-token window, so we should use all of it.'",
        "text_vi": "'Model có cửa sổ 200K token, nên ta nên dùng hết.'"
      },
      {
        "key": "D",
        "text": "'Budget for the largest realistic conversation plus margin, not for the whole window.'",
        "text_vi": "'Lập ngân sách cho cuộc hội thoại lớn nhất thực tế cộng biên dự phòng, không phải cả cửa sổ.'"
      },
      {
        "key": "E",
        "text": "'Memory across sessions is a built-in model capability we get for free.'",
        "text_vi": "'Bộ nhớ xuyên phiên là năng lực có sẵn của model mà ta có miễn phí.'"
      }
    ],
    "answer": [
      "C",
      "E"
    ],
    "explanation": "The window is a ceiling, not a target, so designing toward the full window is an error, and memory is not a native model capability: the Messages API is stateless and anything that persists does so because the application stores and passes it back. The other three statements restate the course's correct guidance on resets, application-managed continuity and sizing.",
    "explanation_vi": "Cửa sổ là trần, không phải mục tiêu, nên thiết kế hướng tới toàn bộ cửa sổ là sai, và bộ nhớ không phải năng lực sẵn có của model: Messages API là stateless và mọi thứ được lưu lại là do ứng dụng lưu và đưa lại. Ba phát biểu còn lại nhắc lại đúng hướng dẫn của khóa học về việc đặt lại, tính liên tục do ứng dụng quản lý và cách định cỡ.",
    "source": "output/08_Model_Context_Strategy.md"
  },
  {
    "id": 12,
    "topic": "Governance, Safety & Risk Management (14%)",
    "objective": "Implement guardrails and safety controls",
    "lessonId": "d5-t1",
    "question": "A university is building an internal HR policy assistant with a tight budget for latency and engineering. The security team proposes spending most of it on a custom classifier to block bioweapon and mass-violence requests. The HR director's real worry is staff seeing other employees' disciplinary records. How should the architect allocate effort?",
    "question_vi": "Một trường đại học xây trợ lý chính sách nhân sự nội bộ với ngân sách eo hẹp về độ trễ và công sức kỹ thuật. Đội bảo mật đề xuất dùng phần lớn ngân sách cho một classifier tùy chỉnh chặn yêu cầu về vũ khí sinh học và bạo lực hàng loạt. Mối lo thật sự của giám đốc nhân sự là nhân viên xem được hồ sơ kỷ luật của người khác. Architect nên phân bổ công sức thế nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Rely on trained behavior for broad harm and spend the budget on authorization for record access.",
        "text_vi": "Dựa vào trained behavior cho tác hại phổ quát và dành ngân sách cho authorization truy cập hồ sơ."
      },
      {
        "key": "B",
        "text": "Prioritize the weapons classifier, because broad harms carry the highest reputational risk.",
        "text_vi": "Ưu tiên classifier chống vũ khí, vì tác hại phổ quát mang rủi ro danh tiếng cao nhất."
      },
      {
        "key": "C",
        "text": "Write the record-access rule into the system prompt and spend the budget on the classifier.",
        "text_vi": "Ghi quy tắc truy cập hồ sơ vào system prompt và dành ngân sách cho classifier."
      },
      {
        "key": "D",
        "text": "Build both controls with equal priority, since layered defenses are always better than gaps.",
        "text_vi": "Xây cả hai control với mức ưu tiên ngang nhau, vì phòng thủ nhiều lớp luôn tốt hơn để hở."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Trained behavior already reduces broad harms such as weapons for every request, and knowing that boundary avoids duplicate protections; the access rule for disciplinary records is a domain policy Claude never saw, so it needs an application-layer authorization control. Equal priority or weapons-first spends scarce budget on what is already covered. A system-prompt rule alone is not enforcement.",
    "explanation_vi": "Trained behavior vốn đã giảm các tác hại phổ quát như vũ khí cho mọi request, và hiểu ranh giới đó giúp tránh bảo vệ trùng lặp; quy tắc truy cập hồ sơ kỷ luật là domain policy mà Claude chưa từng thấy, nên cần một control authorization ở application layer. Ưu tiên ngang nhau hay ưu tiên vũ khí sẽ tiêu ngân sách hạn hẹp vào thứ đã được bao phủ. Chỉ một quy tắc trong system prompt không phải là enforcement.",
    "source": "output_3/02_Alignment_and_Responsibility.md"
  },
  {
    "id": 13,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "objective": "Implement prompt reuse strategies (caching, modular prompts, Skills)",
    "lessonId": "d2-t5",
    "question": "A five-person startup team owns a single codebase with several prompts for an onboarding assistant. The prompts are tweaked almost daily during experiments, are used only inside this product, and need no formal approval process. A new hire proposes packaging each prompt as a versioned Skill. What should the architect recommend?",
    "question_vi": "Một đội startup năm người sở hữu một codebase duy nhất với vài prompt cho trợ lý onboarding. Các prompt được tinh chỉnh gần như hằng ngày trong quá trình thử nghiệm, chỉ dùng bên trong sản phẩm này, và không cần quy trình phê duyệt chính thức. Một nhân viên mới đề xuất đóng gói mỗi prompt thành một Skill có version. Architect nên khuyến nghị gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Versioned Skills for every prompt, since Skills are always the better reuse mechanism.",
        "text_vi": "Skill có version cho mọi prompt, vì Skill luôn là cơ chế tái sử dụng tốt hơn."
      },
      {
        "key": "B",
        "text": "A modular prompt library of shared fragments and templates assembled in the team's code.",
        "text_vi": "Một thư viện prompt dạng module gồm các mảnh và template dùng chung được lắp ghép trong code của đội."
      },
      {
        "key": "C",
        "text": "An MCP server that exposes the prompts so any Claude client could discover them.",
        "text_vi": "Một MCP server phơi bày các prompt để bất kỳ Claude client nào cũng có thể phát hiện."
      },
      {
        "key": "D",
        "text": "Separate copies of each prompt per engineer so experiments do not interfere.",
        "text_vi": "Bản sao riêng của mỗi prompt cho từng kỹ sư để các thử nghiệm không ảnh hưởng lẫn nhau."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "The course's reuse table leans toward a prompt library when prompts are assembled and often tweaked, shared within one codebase or team, and governed lightly by the engineers who own the fragments. Skills earn their place for stable procedures distributed across teams that need versioning, approval and rollback. MCP addresses sharing tools across multiple clients, which is not the need here, and per-engineer copies create the drift that reuse is meant to prevent.",
    "explanation_vi": "Bảng tái sử dụng của course nghiêng về thư viện prompt khi prompt được lắp ghép và hay được tinh chỉnh, chia sẻ trong một codebase hoặc một đội, và được quản trị nhẹ nhàng bởi chính các kỹ sư sở hữu các mảnh. Skill phù hợp với quy trình ổn định được phân phối qua nhiều đội và cần versioning, phê duyệt và rollback. MCP giải quyết việc chia sẻ tool giữa nhiều client, vốn không phải nhu cầu ở đây, còn bản sao riêng cho từng kỹ sư tạo ra đúng sự trôi lệch mà việc tái sử dụng muốn ngăn chặn.",
    "source": "output/09_Prompting_as_Architecture.md"
  },
  {
    "id": 14,
    "topic": "Developer Productivity & Operational Enablement (7%)",
    "objective": "Configure Claude tools and environments for teams (e.g., Claude Code)",
    "lessonId": "d7-t1",
    "question": "A pharmaceutical company with 300 engineers will enable Claude Code next quarter. The Architect is preparing the work that must be done before the broad rollout begins, so that adoption is even and costs stay bounded. Which TWO activities belong in this pre-rollout phase? (Choose TWO.)",
    "question_vi": "Một công ty dược phẩm với 300 kỹ sư sẽ triển khai Claude Code vào quý tới. Architect đang chuẩn bị những việc phải hoàn thành trước khi rollout rộng bắt đầu, để adoption đồng đều và chi phí được kiểm soát. HAI hoạt động nào thuộc pha trước rollout này? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "Send one company-wide email with install links so all engineers start on the same day.",
        "text_vi": "Gửi một email toàn công ty kèm link cài đặt để mọi kỹ sư bắt đầu cùng một ngày."
      },
      {
        "key": "B",
        "text": "Designate a champion per department to convert a real workflow and tune the shared CLAUDE.md.",
        "text_vi": "Chỉ định một champion mỗi phòng ban để chuyển đổi một workflow thật và tinh chỉnh CLAUDE.md dùng chung."
      },
      {
        "key": "C",
        "text": "Let each engineer choose their own MCP servers and permission rules on day one.",
        "text_vi": "Để mỗi kỹ sư tự chọn MCP server và permission rule của mình ngay từ ngày đầu."
      },
      {
        "key": "D",
        "text": "Make the most expensive model the default to create a strong first impression.",
        "text_vi": "Đặt model đắt nhất làm mặc định để tạo ấn tượng ban đầu mạnh mẽ."
      },
      {
        "key": "E",
        "text": "Set the spend posture: model default, allowlist, effort guidance and per-user caps.",
        "text_vi": "Đặt spend posture: model default, allowlist, effort guidance và per-user cap."
      }
    ],
    "answer": [
      "B",
      "E"
    ],
    "explanation": "Champion-led rollout and a deliberately set spend posture are two of the four team-setup decisions that must be made before anyone logs in broadly. A single mass email produces a spike of confused prompts and quiet retreat, an expensive default multiplies cost across every engineer and request, and per-person MCP and permission choices are the opposite of a shared configuration and cause drift.",
    "explanation_vi": "Rollout do champion dẫn dắt và spend posture được đặt có chủ đích là hai trong bốn quyết định thiết lập team phải hoàn thành trước khi mở rộng cho mọi người. Một email hàng loạt duy nhất tạo ra đợt tăng vọt prompt bối rối và sự rút lui lặng lẽ, model đắt làm mặc định nhân chi phí lên theo mọi kỹ sư và mọi request, còn việc mỗi người tự chọn MCP và permission là điều ngược lại với shared configuration và gây trôi dạt cấu hình.",
    "source": "output_5/02_Team_Setup_and_Environment.md"
  },
  {
    "id": 15,
    "topic": "Integration (19%)",
    "objective": "Evaluate connection protocols and select the appropriate integration mechanism (MCP, API/CLI, agent-to-agent)",
    "lessonId": "d3-t7",
    "question": "A regional bank's proposal puts Claude Code on branch laptops for non-technical staff, MCP servers for the customer database, appointments and policy corpus although no other Claude client exists, and subagents performing compliance checks on every interaction. Which redesign addresses the central mistakes?",
    "question_vi": "Đề xuất của một ngân hàng khu vực đặt Claude Code trên laptop chi nhánh cho nhân viên không chuyên kỹ thuật, MCP server cho cơ sở dữ liệu khách hàng, lịch hẹn và kho chính sách dù không có Claude client nào khác, và các subagent thực hiện kiểm tra compliance ở mọi tương tác. Thiết kế lại nào xử lý các sai lầm chính?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Switch to Claude.ai consumer accounts for branch staff to avoid building anything, using the existing tooling and no additional approvals.",
        "text_vi": "Chuyển sang tài khoản Claude.ai dành cho người tiêu dùng cho nhân viên chi nhánh để khỏi phải xây gì, dùng công cụ hiện có và không cần thêm phê duyệt."
      },
      {
        "key": "B",
        "text": "Keep Claude Code but give each branch its own CLAUDE.md with the compliance rules.",
        "text_vi": "Giữ Claude Code nhưng cho mỗi chi nhánh một CLAUDE.md riêng chứa các quy tắc compliance."
      },
      {
        "key": "C",
        "text": "A custom web app using the API with bank SSO, server-side tool calls audited at the boundary and compliance in deterministic code.",
        "text_vi": "Một web app tùy biến dùng API với SSO của ngân hàng, tool call phía server được audit tại ranh giới và compliance nằm trong code tất định."
      },
      {
        "key": "D",
        "text": "Keep the MCP servers but add more subagents so compliance is checked twice.",
        "text_vi": "Giữ các MCP server nhưng thêm subagent để compliance được kiểm tra hai lần."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "The course's corrected architecture is a custom web application on the API with SSO, tool calls audited at the server boundary and compliance in deterministic server-side code, fixing the user-mismatched entry point, MCP without reuse and compliance on a weaker guarantee. Per-branch CLAUDE.md files drift and are shaping, not enforcement. More subagents keep probabilistic compliance, and consumer accounts fail governance needs.",
    "explanation_vi": "Kiến trúc được sửa của khóa học là web app tùy biến trên API với SSO, tool call được audit tại ranh giới server và compliance trong code server-side tất định, sửa được entry point lệch người dùng, MCP không có tái sử dụng và compliance dựa trên đảm bảo yếu hơn. CLAUDE.md riêng từng chi nhánh bị drift và chỉ là shaping, không phải thực thi. Thêm subagent vẫn là compliance xác suất, còn tài khoản người tiêu dùng không đáp ứng yêu cầu governance.",
    "source": "output/10_Entry_Points_Governance.md"
  },
  {
    "id": 16,
    "topic": "Integration (19%)",
    "objective": "Evaluate progressive discovery vs. monolithic context strategy",
    "lessonId": "d3-t8",
    "question": "A research team's agent must review 200 regulatory filings, each far too large to share a single context with the others, and the filings can be assessed independently. Putting all of them in one prompt would exceed limits and degrade accuracy. Which context strategy fits?",
    "question_vi": "Agent của một đội nghiên cứu phải review 200 hồ sơ pháp quy, mỗi hồ sơ quá lớn để dùng chung một context với các hồ sơ khác, và các hồ sơ có thể được đánh giá độc lập. Đặt tất cả vào một prompt sẽ vượt giới hạn và làm giảm độ chính xác. Chiến lược context nào phù hợp?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Summarise each filing to one sentence first and review only the sentences.",
        "text_vi": "Tóm tắt mỗi hồ sơ thành một câu trước và chỉ review các câu đó."
      },
      {
        "key": "B",
        "text": "Load all 200 filings into one very large prompt and ask for a combined verdict, using the existing tooling and no additional approvals.",
        "text_vi": "Nạp cả 200 hồ sơ vào một prompt rất lớn và yêu cầu một kết luận tổng hợp, dùng công cụ hiện có và không cần thêm phê duyệt."
      },
      {
        "key": "C",
        "text": "Process the filings sequentially in one conversation, keeping all prior filings in context.",
        "text_vi": "Xử lý các hồ sơ tuần tự trong một cuộc hội thoại, giữ mọi hồ sơ trước trong context."
      },
      {
        "key": "D",
        "text": "Fan out one subagent per filing, each in a clean context, then synthesise with coverage reconciliation.",
        "text_vi": "Chia cho mỗi hồ sơ một subagent, mỗi cái trong context sạch, rồi tổng hợp kèm đối soát coverage."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "A fan-out gives each subagent a clean context sized to its unit and lets independent units run concurrently, with the orchestrator reconciling that the number of valid results equals the units dispatched. A single huge prompt or a growing sequential conversation hits the working-memory cliff. One-sentence summaries lose the detail the review depends on.",
    "explanation_vi": "Fan-out cho mỗi subagent một context sạch có kích thước vừa đơn vị của nó và cho phép các đơn vị độc lập chạy đồng thời, trong khi orchestrator đối soát số kết quả hợp lệ bằng số đơn vị đã giao. Một prompt khổng lồ hoặc một cuộc hội thoại tuần tự ngày càng dài đều chạm vách working memory. Tóm tắt một câu làm mất chi tiết mà việc review dựa vào.",
    "source": "output/05_Pattern_Selection.md"
  },
  {
    "id": 17,
    "topic": "Integration (19%)",
    "objective": "Design a RAG pipeline with appropriate chunking and indexing strategies",
    "lessonId": "d3-t5",
    "question": "A consultancy is adding 1,200 past project write-ups, long narrative reports without section numbering, to its RAG assistant. Consultants ask open-ended questions such as how a past team handled stakeholder resistance. Early tests show retrieved passages often stop mid-argument. Which chunking approach fits these documents?",
    "question_vi": "Một công ty tư vấn đang thêm 1.200 bản mô tả dự án trước đây, là các báo cáo tường thuật dài không đánh số mục, vào trợ lý RAG. Chuyên viên tư vấn đặt câu hỏi mở như đội trước đã xử lý sự phản đối của các bên liên quan ra sao. Thử nghiệm ban đầu cho thấy các đoạn truy xuất thường dừng giữa chừng một lập luận. Cách chunking nào phù hợp với các tài liệu này?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Semantic chunking on meaning and topic boundaries so each chunk is self-contained.",
        "text_vi": "Semantic chunking theo ranh giới ý nghĩa và chủ đề để mỗi chunk tự đứng được."
      },
      {
        "key": "B",
        "text": "One chunk per sentence, so retrieval is as precise as possible.",
        "text_vi": "Mỗi câu là một chunk, để truy xuất chính xác nhất có thể."
      },
      {
        "key": "C",
        "text": "Fixed-size chunks with no overlap, so that every chunk has an identical token count.",
        "text_vi": "Chunk kích thước cố định không overlap, để mọi chunk có cùng số token."
      },
      {
        "key": "D",
        "text": "Hierarchical chunking on section numbers, retrieving whole sections as units.",
        "text_vi": "Hierarchical chunking theo số mục, truy xuất cả mục như một đơn vị."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Long-form prose without section numbers has nothing to anchor hierarchical chunking, and fixed-size chunks cut mid-idea, so semantic chunking on meaning boundaries keeps each passage coherent enough to answer on its own. Fixed spans without overlap make mid-argument cuts worse. Sentence-level chunks are too small, losing context and multiplying chunk count, latency and cost.",
    "explanation_vi": "Văn xuôi dài không có số mục thì không có gì để neo hierarchical chunking, còn chunk kích thước cố định cắt giữa ý, nên semantic chunking theo ranh giới ý nghĩa giữ mỗi đoạn đủ mạch lạc để tự trả lời. Đoạn cố định không overlap làm việc cắt giữa lập luận tệ hơn. Chunk cấp câu quá nhỏ, mất ngữ cảnh và nhân số chunk, latency và chi phí lên.",
    "source": "output/07_RAG_Pipeline_Design.md"
  },
  {
    "id": 18,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Apply decomposition techniques for complex problem solving",
    "lessonId": "d1-t5",
    "question": "A procurement team's draft design puts all of 'extract invoice fields, check them against the purchase order, approve payments over 50,000 dollars, and write the payment record' inside one large prompt, 'for simplicity'. In demos it works. What is the strongest objection an architect should raise?",
    "question_vi": "Thiết kế nháp của đội mua hàng đặt toàn bộ 'trích trường hóa đơn, đối chiếu với đơn mua hàng, phê duyệt thanh toán trên 50.000 đô la và ghi bản ghi thanh toán' vào một prompt lớn, 'cho đơn giản'. Trong demo nó chạy tốt. Phản đối mạnh nhất mà architect nên nêu là gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "The prompt will exceed the context window because invoices are always several hundred pages long.",
        "text_vi": "Prompt sẽ vượt context window vì hóa đơn luôn dài vài trăm trang."
      },
      {
        "key": "B",
        "text": "It merges language work, rules and a payment, losing traceability and inviting silent drift.",
        "text_vi": "Nó trộn việc ngôn ngữ, quy tắc và thanh toán, làm mất khả năng truy vết và tạo drift im lặng."
      },
      {
        "key": "C",
        "text": "Demos prove nothing about extraction, so the team should first benchmark three different model tiers.",
        "text_vi": "Demo không chứng minh gì về trích xuất, nên đội trước hết nên benchmark ba tier model khác nhau."
      },
      {
        "key": "D",
        "text": "A single prompt is longer than a modular design and therefore always more expensive per request.",
        "text_vi": "Một prompt đơn dài hơn thiết kế dạng module nên luôn đắt hơn mỗi request."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Bundling steps looks tidy in a demo but moves deterministic checks and a high-value approval into the model, so errors stop being traceable and drift is silent. Context length and cost are secondary or unsupported, and benchmarking model tiers does not address the decomposition problem.",
    "explanation_vi": "Gộp các bước trông gọn trong demo nhưng đưa kiểm tra deterministic và phê duyệt giá trị cao vào model, nên lỗi không còn truy vết được và drift im lặng. Độ dài context và chi phí là thứ yếu hoặc không có căn cứ, và benchmark tier model không giải quyết vấn đề phân rã.",
    "source": "output/04_Decomposition.md"
  },
  {
    "id": 19,
    "topic": "Integration (19%)",
    "objective": "Evaluate connection protocols and select the appropriate integration mechanism (MCP, API/CLI, agent-to-agent)",
    "lessonId": "d3-t7",
    "question": "In a design review someone says 'we will use an agent' and five people picture five different architectures. The lead asks the team to classify the components on the table: Claude Code, MCP, AWS Bedrock, the Agent SDK. Which classification is correct?",
    "question_vi": "Trong một buổi review thiết kế, có người nói 'chúng ta sẽ dùng một agent' và năm người hình dung ra năm kiến trúc khác nhau. Trưởng nhóm yêu cầu phân loại các thành phần đang bàn: Claude Code, MCP, AWS Bedrock, Agent SDK. Cách phân loại nào đúng?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "All four are delivery routes because they all terminate API traffic.",
        "text_vi": "Cả bốn đều là delivery route vì đều kết thúc traffic API."
      },
      {
        "key": "B",
        "text": "Claude Code and Agent SDK are entry points; MCP and Bedrock are delivery routes.",
        "text_vi": "Claude Code và Agent SDK là entry point; MCP và Bedrock là delivery route."
      },
      {
        "key": "C",
        "text": "Claude Code is an entry point; MCP and the Agent SDK are build-time interfaces; Bedrock is a delivery route.",
        "text_vi": "Claude Code là entry point; MCP và Agent SDK là build-time interface; Bedrock là delivery route."
      },
      {
        "key": "D",
        "text": "Claude Code is a build-time interface, MCP an entry point, Bedrock a build-time interface, Agent SDK an entry point.",
        "text_vi": "Claude Code là build-time interface, MCP là entry point, Bedrock là build-time interface, Agent SDK là entry point."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Claude Code is an entry point engineers interact with directly, while MCP and the Agent SDK are interfaces engineers program against, and Bedrock is where API traffic terminates. A common trap is calling the Agent SDK an entry point because it runs the same loop as Claude Code. MCP is not an entry point either, and only the CSP services are delivery routes.",
    "explanation_vi": "Claude Code là entry point mà kỹ sư tương tác trực tiếp, MCP và Agent SDK là các interface kỹ sư lập trình dựa vào, còn Bedrock là nơi traffic API kết thúc. Một cái bẫy phổ biến là gọi Agent SDK là entry point vì nó chạy cùng vòng lặp với Claude Code. MCP cũng không phải entry point, và chỉ các dịch vụ của CSP mới là delivery route.",
    "source": "output/03_Platform_Map_Primitives.md"
  },
  {
    "id": 20,
    "topic": "Integration (19%)",
    "objective": "Analyze authentication and authorization requirements to identify security gaps",
    "lessonId": "d3-t2",
    "question": "A clinic's intake summarizer sends the full intake form to Claude, including name, date of birth, SSN and insurance ID, although the prompt only asks for presenting concerns, medications and allergies. A pre-certification review found SSNs throughout the application's request logs. Which two changes address the root cause? (Choose TWO.)",
    "question_vi": "Công cụ tóm tắt phiếu tiếp nhận của một phòng khám gửi toàn bộ phiếu cho Claude, gồm họ tên, ngày sinh, SSN và mã bảo hiểm, dù prompt chỉ yêu cầu lý do khám, thuốc đang dùng và dị ứng. Một đợt review trước chứng nhận phát hiện SSN xuất hiện khắp request log của ứng dụng. Hai thay đổi nào xử lý nguyên nhân gốc? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "Instruct Claude in the system prompt never to repeat SSNs or insurance IDs in its output.",
        "text_vi": "Chỉ dẫn Claude trong system prompt không bao giờ lặp lại SSN hay mã bảo hiểm trong output."
      },
      {
        "key": "B",
        "text": "Pass a reference ID instead of identifying fields and map results back to the record on the server.",
        "text_vi": "Truyền một reference ID thay cho các trường định danh và ghép kết quả lại với hồ sơ ở phía server."
      },
      {
        "key": "C",
        "text": "Move the workload to a delivery route in a US region to satisfy HIPAA.",
        "text_vi": "Chuyển workload sang một delivery route ở region Mỹ để đáp ứng HIPAA."
      },
      {
        "key": "D",
        "text": "Encrypt the request logs at rest and keep collecting the full form as before.",
        "text_vi": "Mã hóa request log khi lưu trữ và tiếp tục thu thập toàn bộ phiếu như trước."
      },
      {
        "key": "E",
        "text": "Strip non-essential identifiers server-side before the API call is made.",
        "text_vi": "Loại bỏ các định danh không cần thiết ở phía server trước khi gọi API."
      }
    ],
    "answer": [
      "B",
      "E"
    ],
    "explanation": "The correct filter is necessity: fields not required for the language task should be removed server-side before the call, with reference IDs used for routing and reattached on the server. A prompt instruction leaves the SSN in the request and in the logs. Encrypting logs still collects unnecessary data, and HIPAA turns on BAA coverage of the configuration, not on geography.",
    "explanation_vi": "Bộ lọc đúng là tính cần thiết: các trường không cần cho tác vụ ngôn ngữ nên bị loại ở phía server trước lời gọi, dùng reference ID để định tuyến và ghép lại ở server. Chỉ dẫn trong prompt vẫn để SSN trong request và trong log. Mã hóa log vẫn thu thập dữ liệu không cần thiết, còn HIPAA xoay quanh việc BAA bao phủ cấu hình, không phải vị trí địa lý.",
    "source": "output_2/05_Enterprise_Integration_Patterns.md"
  },
  {
    "id": 21,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Monitor system performance using logging and observability tools",
    "lessonId": "d4-t6",
    "question": "A university is launching a Claude admissions assistant next month. To hit the date, the team plans to ship with basic error logging and 'add proper observability after we see how it behaves in production'. The architect disagrees. Which reasoning best supports instrumenting now?",
    "question_vi": "Một trường đại học sẽ ra mắt trợ lý tuyển sinh Claude vào tháng tới. Để kịp hạn, team định ship với logging lỗi cơ bản và 'bổ sung observability đầy đủ sau khi thấy nó hoạt động thế nào trên production'. Architect không đồng ý. Lập luận nào ủng hộ tốt nhất việc gắn instrumentation ngay bây giờ?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Observability added after launch is cheaper because requirements are clearer",
        "text_vi": "Observability bổ sung sau khi ra mắt rẻ hơn vì yêu cầu đã rõ hơn"
      },
      {
        "key": "B",
        "text": "Instrumentation mainly matters for multi-tenant systems, not single-tenant ones",
        "text_vi": "Instrumentation chủ yếu quan trọng cho hệ thống multi-tenant, không phải single-tenant"
      },
      {
        "key": "C",
        "text": "Error logs are sufficient because LLM failures always raise errors",
        "text_vi": "Log lỗi là đủ vì lỗi LLM luôn phát sinh lỗi hệ thống"
      },
      {
        "key": "D",
        "text": "After the first incident, root cause must be reconstructed from data that was never captured; building it first is less complex",
        "text_vi": "Sau sự cố đầu tiên, nguyên nhân gốc phải được tái dựng từ dữ liệu chưa từng được ghi lại; xây trước thì ít phức tạp hơn"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "The course states that observability added after the first incident means the root cause must be reconstructed from a system not set up to answer the question, and that building instrumentation correctly the first time is less complex than retroactive reconstruction. LLM failures are usually subtly wrong answers, not errors, and the principle is not limited to multi-tenant systems.",
    "explanation_vi": "Khóa học nêu observability bổ sung sau sự cố đầu tiên nghĩa là nguyên nhân gốc phải được tái dựng từ một hệ thống không được thiết lập để trả lời câu hỏi đó, và xây instrumentation đúng ngay từ đầu ít phức tạp hơn tái dựng hồi tố. Lỗi LLM thường là câu trả lời sai tinh vi chứ không phải lỗi hệ thống, và nguyên tắc này không chỉ giới hạn ở hệ thống multi-tenant.",
    "source": "output_2/05_Enterprise_Integration_Patterns.md"
  },
  {
    "id": 22,
    "topic": "Integration (19%)",
    "objective": "Design a RAG pipeline with appropriate chunking and indexing strategies",
    "lessonId": "d3-t5",
    "question": "A university's student-handbook assistant began giving confident but wrong answers about course withdrawal deadlines the week after the registrar published 300 revised policy pages. The model version is pinned, the prompt is unchanged and latency is normal. Where should the investigation start?",
    "question_vi": "Trợ lý sổ tay sinh viên của một trường đại học bắt đầu trả lời tự tin nhưng sai về hạn rút môn học một tuần sau khi phòng đào tạo công bố 300 trang chính sách sửa đổi. Phiên bản model đã được pin, prompt không đổi và latency bình thường. Việc điều tra nên bắt đầu từ đâu?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "The retrieval and indexing step: a failed reindex, stale chunks still present or mismatched embeddings.",
        "text_vi": "Bước retrieval và indexing: reindex lỗi, chunk cũ vẫn còn hoặc embedding không khớp."
      },
      {
        "key": "B",
        "text": "The model, because pinned versions can still drift after several months in production, with the results reviewed again next quarter.",
        "text_vi": "Model, vì phiên bản đã pin vẫn có thể drift sau vài tháng trong production, với kết quả được xem lại vào quý sau."
      },
      {
        "key": "C",
        "text": "The temperature setting, which may be causing overly confident answers.",
        "text_vi": "Thiết lập temperature, có thể đang gây ra câu trả lời quá tự tin."
      },
      {
        "key": "D",
        "text": "The context window, which may have shrunk as the handbook grew.",
        "text_vi": "Context window, có thể đã thu hẹp khi sổ tay lớn lên."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "The variable that changed is the document set, so the first suspect is retrieval and indexing returning stale or irrelevant chunks, the same reasoning as the exam guide's document-refresh sample. Drift on a pinned model would not be triggered by a policy publication. Temperature and context-window size did not change and are not tied to the refresh.",
    "explanation_vi": "Biến số đã thay đổi là tập tài liệu, nên nghi phạm đầu tiên là retrieval và indexing trả về chunk cũ hoặc không liên quan, cùng lập luận với câu hỏi mẫu về refresh tài liệu trong exam guide. Drift trên model đã pin không bị kích hoạt bởi việc công bố chính sách. Temperature và kích thước context window không thay đổi và không gắn với lần refresh.",
    "source": "output_2/03_POC_to_Production.md"
  },
  {
    "id": 23,
    "topic": "Governance, Safety & Risk Management (14%)",
    "objective": "Address ethical AI considerations (bias, fairness, transparency)",
    "lessonId": "d5-t5",
    "question": "An architect reviews the decision-logging design of a Claude-assisted scholarship-award system. Current state: inputs and outputs are stored per decision and tied to a session ID; reviewer overrides are recorded with reviewer ID; the log is queryable per decision. Which TWO findings are transparency gaps? (Choose TWO.)",
    "question_vi": "Một architect review thiết kế decision logging của một hệ thống xét cấp học bổng có hỗ trợ của Claude. Hiện trạng: input và output được lưu theo từng quyết định và gắn với session ID; override của reviewer được ghi kèm reviewer ID; log truy vấn được theo từng quyết định. HAI phát hiện nào là lỗ hổng transparency? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "A routing step that sends some applications to a secondary committee without any log entry.",
        "text_vi": "Một bước routing đưa một số hồ sơ tới hội đồng phụ mà không có dòng log nào."
      },
      {
        "key": "B",
        "text": "Inputs, outputs and the final award decision are tied to a session ID for each application.",
        "text_vi": "Input, output và quyết định cấp học bổng cuối cùng được gắn với session ID cho mỗi hồ sơ."
      },
      {
        "key": "C",
        "text": "Each decision can be retrieved individually by querying the log.",
        "text_vi": "Mỗi quyết định có thể được lấy riêng bằng cách truy vấn log."
      },
      {
        "key": "D",
        "text": "The retrieved essays and past-award examples used as context are not captured per decision.",
        "text_vi": "Các bài luận và ví dụ học bổng cũ được truy xuất làm context không được ghi lại theo từng quyết định."
      },
      {
        "key": "E",
        "text": "Reviewer overrides are recorded with the reviewer's ID and stated reason.",
        "text_vi": "Override của reviewer được ghi kèm ID của reviewer và lý do đã nêu."
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "explanation": "An unlogged routing step hides one of the four injection points, and uncaptured retrieved context makes it impossible to reconstruct what the model relied on or to rule out the corpus as a source of skew. Session-linked inputs and outputs, recorded overrides with reasons, and per-decision queryability are what the course treats as adequate logging.",
    "explanation_vi": "Một bước routing không được log che giấu một trong bốn injection point, và context truy xuất không được ghi lại khiến không thể tái dựng căn cứ model đã dùng hay loại trừ corpus như nguồn gây lệch. Input và output gắn session, override được ghi kèm lý do, và khả năng truy vấn theo từng quyết định là những gì khóa học coi là logging đầy đủ.",
    "source": "output_3/04_Fairness_and_Accountability.md"
  },
  {
    "id": 24,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "objective": "Support lifecycle phases (discovery, design, handoff, monitoring, iteration)",
    "lessonId": "d6-t5",
    "question": "Six months after launch, an insurer's Architect starts the outcome document for a claims assistant and discovers that nobody recorded claim-processing times before deployment; staff habits have since changed. The sponsor asks how to avoid this on the next project. In which lifecycle phase should the before metric be captured?",
    "question_vi": "Sáu tháng sau launch, Architect của một công ty bảo hiểm bắt đầu viết outcome document cho trợ lý bồi thường và phát hiện không ai ghi lại thời gian xử lý hồ sơ trước khi triển khai; thói quen làm việc của nhân viên đã thay đổi. Sponsor hỏi làm sao tránh điều này ở dự án tiếp theo. Metric before nên được thu thập ở pha nào của vòng đời?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "At the expansion decision, when the CFO first asks for evidence of business value.",
        "text_vi": "Ở thời điểm quyết định mở rộng, khi CFO lần đầu yêu cầu bằng chứng giá trị kinh doanh."
      },
      {
        "key": "B",
        "text": "In discovery, as a baseline with its measurement definition, before anything is built.",
        "text_vi": "Trong discovery, dưới dạng baseline kèm định nghĩa đo, trước khi xây dựng bất cứ thứ gì."
      },
      {
        "key": "C",
        "text": "At handoff, when the receiving team takes ownership of measurement going forward.",
        "text_vi": "Ở pha handoff, khi đội tiếp nhận chịu trách nhiệm đo lường từ đó về sau."
      },
      {
        "key": "D",
        "text": "During monitoring, using the first weeks of production data as the reference point.",
        "text_vi": "Trong pha monitoring, dùng dữ liệu những tuần production đầu tiên làm điểm tham chiếu."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "The course says to capture the before metric at the start: without it there is no story, and once work practices change after go-live the baseline cannot be credibly reconstructed, so the outcome document effectively begins in discovery. Handoff, early production data and the expansion decision all come after deployment has already changed the metric.",
    "explanation_vi": "Khóa học nói hãy thu thập metric before ngay từ đầu: không có nó thì không có câu chuyện, và khi cách làm việc đã thay đổi sau go-live thì không thể dựng lại baseline một cách đáng tin, nên outcome document thực chất bắt đầu từ discovery. Handoff, dữ liệu production ban đầu và quyết định mở rộng đều đến sau khi việc triển khai đã làm thay đổi metric.",
    "source": "output_4/06_Entry_Point_Selection_and_Outcomes.md"
  },
  {
    "id": 25,
    "topic": "Integration (19%)",
    "objective": "Analyze authentication and authorization requirements to identify security gaps",
    "lessonId": "d3-t2",
    "question": "A health insurer's member assistant receives the member's role and plan tier from the client app as fields inside the user message, for example 'tier: platinum'. Platinum members get access to additional benefit-detail tools. A tester edited the request and unlocked platinum tools on a basic plan. Where should the fix be applied?",
    "question_vi": "Trợ lý thành viên của một công ty bảo hiểm sức khỏe nhận vai trò và hạng gói của thành viên từ ứng dụng client dưới dạng các trường trong user message, ví dụ 'tier: platinum'. Thành viên platinum được dùng thêm các tool chi tiết quyền lợi. Một người kiểm thử đã sửa request và mở khóa tool platinum trên gói cơ bản. Cách sửa nên được áp dụng ở đâu?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "In the logging layer, by flagging sessions where the tier field changes mid-conversation, configured once and applied across every environment.",
        "text_vi": "Ở tầng logging, bằng cách gắn cờ các phiên mà trường hạng gói thay đổi giữa cuộc hội thoại, cấu hình một lần và áp dụng cho mọi môi trường."
      },
      {
        "key": "B",
        "text": "In the system prompt, by telling the model to verify the tier before using premium tools.",
        "text_vi": "Ở system prompt, bằng cách yêu cầu model xác minh hạng gói trước khi dùng tool cao cấp."
      },
      {
        "key": "C",
        "text": "On the server, by looking up the tier from the authenticated identity and exposing tools accordingly.",
        "text_vi": "Ở server, bằng cách tra hạng gói từ danh tính đã xác thực và cung cấp tool tương ứng."
      },
      {
        "key": "D",
        "text": "In the client app, by obfuscating the tier field so that users cannot easily edit it.",
        "text_vi": "Ở ứng dụng client, bằng cách làm rối trường hạng gói để người dùng khó sửa."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Identity passed as a raw field in the user message is manipulable; server-side lookup and injection removes that risk, and the server should decide which tools are exposed. Obfuscation in the client is still user-controlled input. The model cannot verify a claim it has no authoritative source for, and flagging changes is a detective measure.",
    "explanation_vi": "Danh tính được truyền dưới dạng trường thô trong user message có thể bị thao túng; tra cứu và chèn từ phía server loại bỏ rủi ro đó, và server nên quyết định tool nào được cung cấp. Làm rối ở client vẫn là input do người dùng kiểm soát. Model không thể xác minh một tuyên bố khi không có nguồn có thẩm quyền, còn gắn cờ thay đổi là biện pháp phát hiện.",
    "source": "output_2/05_Enterprise_Integration_Patterns.md"
  },
  {
    "id": 26,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "objective": "Support lifecycle phases (discovery, design, handoff, monitoring, iteration)",
    "lessonId": "d6-t5",
    "question": "Two days before launch of a pharmacy-benefits assistant, the readiness review shows dashboards and threshold alerts for errors, latency and cost. There is no trigger for gradual eval-score decline, and the quarterly formulary-accuracy audit required by regulation has no owner or schedule yet. Is the monitoring phase ready to begin?",
    "question_vi": "Hai ngày trước khi launch trợ lý quyền lợi dược phẩm, buổi review sẵn sàng cho thấy có dashboard và alert theo ngưỡng cho lỗi, latency và chi phí. Không có trigger cho việc eval score giảm dần, và đợt audit độ chính xác danh mục thuốc hàng quý theo quy định chưa có owner hay lịch. Pha monitoring đã sẵn sàng bắt đầu chưa?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Yes; the drift trigger and audit schedule can be added after launch once real traffic patterns are known.",
        "text_vi": "Rồi; trigger drift và lịch audit có thể được thêm sau launch khi đã biết mô hình lưu lượng thực tế."
      },
      {
        "key": "B",
        "text": "Yes; threshold alerts on errors, latency and cost cover the signals that matter most at launch.",
        "text_vi": "Rồi; alert theo ngưỡng cho lỗi, latency và chi phí bao phủ các signal quan trọng nhất khi launch."
      },
      {
        "key": "C",
        "text": "Yes, provided the dashboards are reviewed manually every week by the operations team.",
        "text_vi": "Rồi, với điều kiện đội vận hành xem xét dashboard thủ công mỗi tuần."
      },
      {
        "key": "D",
        "text": "No; slow-drift triggers and scheduled regulated checkpoints, each with an owner, must exist before launch.",
        "text_vi": "Chưa; trigger cho drift chậm và checkpoint quy định theo lịch, mỗi cái có owner, phải tồn tại trước launch."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "The monitoring gate asks whether every important signal, including slow drift and scheduled checkpoints, has a trigger and owner before launch; the governance table is a design-time obligation. Hard-failure alerts miss quality drift that keeps error rates flat. Adding obligations after launch is more expensive and risks a checkpoint never wired to a trigger, and manual dashboard viewing is not a trigger with an owner.",
    "explanation_vi": "Gate của monitoring hỏi liệu mọi signal quan trọng, kể cả drift chậm và checkpoint theo lịch, đã có trigger và owner trước launch chưa; governance table là nghĩa vụ ở thời điểm thiết kế. Alert cho lỗi cứng bỏ sót drift chất lượng khi error rate vẫn phẳng. Thêm nghĩa vụ sau launch tốn kém hơn và có rủi ro checkpoint không bao giờ được gắn với trigger, còn xem dashboard thủ công không phải là trigger có owner.",
    "source": "output_4/04_Feedback_Loops_and_SLAs.md"
  },
  {
    "id": 27,
    "topic": "Governance, Safety & Risk Management (14%)",
    "objective": "Implement guardrails and safety controls",
    "lessonId": "d5-t1",
    "question": "An insurance carrier's agent can update policyholder addresses and beneficiary designations. The design already includes a jailbreak classifier on input and a toxicity judge on output, plus a system prompt describing who may change what. A reviewer asks which risk the current layers leave uncovered. What is the best answer?",
    "question_vi": "Agent của một hãng bảo hiểm có thể cập nhật địa chỉ chủ hợp đồng và chỉ định người thụ hưởng. Thiết kế đã có classifier chống jailbreak ở input và judge toxicity ở output, cùng một system prompt mô tả ai được thay đổi gì. Một reviewer hỏi các lớp hiện tại còn bỏ ngỏ rủi ro nào. Câu trả lời tốt nhất là gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Unpermitted side-effecting updates, since screening does not authorize actions for this caller.",
        "text_vi": "Các cập nhật có side effect không được phép, vì screening không authorize hành động cho caller này."
      },
      {
        "key": "B",
        "text": "Toxic language in replies, since the judge model can be evaded by unusual phrasing.",
        "text_vi": "Ngôn ngữ độc hại trong câu trả lời, vì judge model có thể bị lách bằng cách diễn đạt bất thường."
      },
      {
        "key": "C",
        "text": "Biased outcomes across customer groups, since authorization is the layer that covers fairness.",
        "text_vi": "Kết quả thiên lệch giữa các nhóm khách hàng, vì authorization là lớp bao phủ fairness."
      },
      {
        "key": "D",
        "text": "Broad harmful requests, since trained behavior does not apply once a system prompt is set.",
        "text_vi": "Các yêu cầu có hại phổ quát, vì trained behavior không còn áp dụng khi đã đặt system prompt."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Runtime screening detects disallowed content but does not decide whether this caller may perform a side-effecting action, and system-prompt instructions are not enforcement; beneficiary changes need an authorization layer. Toxicity is already screened, trained behavior still applies with a system prompt, and authorization explicitly does not cover content quality or fairness.",
    "explanation_vi": "Runtime screening phát hiện nội dung không được phép nhưng không quyết định caller này có được thực hiện hành động có side effect không, và chỉ dẫn trong system prompt không phải là enforcement; việc đổi người thụ hưởng cần một lớp authorization. Toxicity đã được screen, trained behavior vẫn áp dụng khi có system prompt, và authorization vốn không bao phủ chất lượng nội dung hay fairness.",
    "source": "output_3/02_Alignment_and_Responsibility.md"
  },
  {
    "id": 28,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Design multi-agent systems and orchestration strategies",
    "lessonId": "d1-t4",
    "question": "A consultancy asks a single agent to summarize 200 client reports and quickly runs out of working context; later reports are summarized poorly and early ones are forgotten. Reports are independent and each needs the same treatment. Which redesign fits the problem best?",
    "question_vi": "Một công ty tư vấn yêu cầu một agent duy nhất tóm tắt 200 báo cáo khách hàng và nhanh chóng hết context làm việc; các báo cáo sau được tóm tắt kém và các báo cáo đầu bị quên. Các báo cáo độc lập và cần xử lý giống nhau. Thiết kế lại nào phù hợp nhất?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "The same single agent with a stricter instruction to remember every earlier report while it works.",
        "text_vi": "Chính agent đơn đó với chỉ dẫn chặt hơn là phải nhớ mọi báo cáo trước đó khi làm việc."
      },
      {
        "key": "B",
        "text": "An orchestrator fanning per-report units out to parallel subagents, then synthesizing.",
        "text_vi": "Một orchestrator fan-out từng báo cáo cho các subagent song song, rồi tổng hợp."
      },
      {
        "key": "C",
        "text": "An evaluator-optimizer loop that repeatedly rereads all 200 reports until the summaries stop changing.",
        "text_vi": "Một vòng evaluator-optimizer đọc lại cả 200 báo cáo lặp đi lặp lại cho đến khi bản tóm tắt ngừng thay đổi."
      },
      {
        "key": "D",
        "text": "A routing workflow that sends each report to a different summarization prompt chosen by its client name.",
        "text_vi": "Một routing workflow gửi mỗi báo cáo tới một prompt tóm tắt khác nhau chọn theo tên khách hàng."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Work that exceeds one context and consists of independent units is the fan-out case: each subagent works in a clean context sized to its unit while units run concurrently, and the orchestrator synthesizes. A stricter instruction cannot extend the window, routing addresses different input kinds rather than volume, and an evaluator loop over everything makes the context problem worse.",
    "explanation_vi": "Công việc vượt một context và gồm các đơn vị độc lập là trường hợp fan-out: mỗi subagent làm việc trong context sạch vừa với đơn vị của nó trong khi các đơn vị chạy đồng thời, và orchestrator tổng hợp. Chỉ dẫn chặt hơn không mở rộng được window, routing giải quyết các loại input khác nhau chứ không phải volume, và vòng evaluator trên toàn bộ làm vấn đề context tệ hơn.",
    "source": "output/05_Pattern_Selection.md"
  },
  {
    "id": 29,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Diagnose system issues (prompt failure, hallucinations, model mismatch)",
    "lessonId": "d4-t4",
    "question": "An insurer's customer assistant answers coverage questions from the model's general knowledge plus a short policy summary. Auditors find it sometimes cites policy clause numbers and exclusion wording that do not exist in any of the insurer's documents, stated fluently and confidently. The team proposes adding 'never invent clause numbers' to the prompt. What should the architect recommend?",
    "question_vi": "Trợ lý khách hàng của một công ty bảo hiểm trả lời câu hỏi về phạm vi bảo hiểm dựa trên kiến thức chung của model cộng một bản tóm tắt hợp đồng ngắn. Kiểm toán viên phát hiện nó đôi khi trích số điều khoản và câu chữ loại trừ không tồn tại trong bất kỳ tài liệu nào của công ty, được nêu trôi chảy và tự tin. Team đề xuất thêm 'không bao giờ bịa số điều khoản' vào prompt. Architect nên khuyến nghị gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Add the instruction and repeat it at the end of the prompt for emphasis",
        "text_vi": "Thêm chỉ dẫn và lặp lại nó ở cuối prompt để nhấn mạnh"
      },
      {
        "key": "B",
        "text": "Lower max_tokens so answers contain fewer details",
        "text_vi": "Giảm max_tokens để câu trả lời chứa ít chi tiết hơn"
      },
      {
        "key": "C",
        "text": "Ground answers by retrieving the actual policy text with citations and verifying clause references against it",
        "text_vi": "Neo câu trả lời bằng cách truy xuất văn bản hợp đồng thật kèm trích dẫn và kiểm chứng tham chiếu điều khoản với văn bản đó"
      },
      {
        "key": "D",
        "text": "Upgrade to a larger model, which hallucinates less",
        "text_vi": "Nâng lên model lớn hơn, vốn ít hallucinate hơn"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Confident, fluent content not grounded in the input or a reliable source is a hallucination, and the course says the fix is grounding through retrieval, tool use or verification; stronger instruction will not resolve it. A bigger model is still ungrounded, and shorter answers reduce detail without making the remaining claims true.",
    "explanation_vi": "Nội dung trôi chảy, tự tin nhưng không dựa trên input hay nguồn đáng tin là hallucination, và khóa học nói cách sửa là grounding qua retrieval, tool use hoặc kiểm chứng; chỉ dẫn mạnh hơn sẽ không giải quyết được. Model lớn hơn vẫn không được neo vào nguồn, còn câu trả lời ngắn hơn giảm chi tiết nhưng không làm các khẳng định còn lại trở nên đúng.",
    "source": "output_2/06_AB_Testing_and_Observability.md"
  },
  {
    "id": 30,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "objective": "Support lifecycle phases (discovery, design, handoff, monitoring, iteration)",
    "lessonId": "d6-t5",
    "question": "A grocery chain's store-operations assistant passed its pilot in two stores, meeting eval acceptance criteria and the cost forecast. The COO now wants it switched on in all 40 stores next Monday to hit a quarterly target. Store formats and regional suppliers differ considerably. What should the Architect recommend?",
    "question_vi": "Trợ lý vận hành cửa hàng của một chuỗi siêu thị đã vượt qua pilot tại hai cửa hàng, đạt eval acceptance criteria và dự báo chi phí. COO giờ muốn bật nó cho cả 40 cửa hàng vào thứ Hai tới để đạt mục tiêu quý. Định dạng cửa hàng và nhà cung cấp theo khu vực khác nhau đáng kể. Architect nên khuyến nghị gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Enable all 40 stores on Monday, since the pilot met every acceptance criterion and the cost forecast.",
        "text_vi": "Bật cho cả 40 cửa hàng vào thứ Hai, vì pilot đã đạt mọi acceptance criteria và dự báo chi phí."
      },
      {
        "key": "B",
        "text": "Extend the pilot in the same two stores for another six months to gather more confidence.",
        "text_vi": "Kéo dài pilot tại cùng hai cửa hàng thêm sáu tháng để có thêm sự tự tin."
      },
      {
        "key": "C",
        "text": "Cancel the expansion until a full re-evaluation has been designed for every store format.",
        "text_vi": "Hủy việc mở rộng cho đến khi thiết kế xong một đợt đánh giá lại đầy đủ cho mọi định dạng cửa hàng."
      },
      {
        "key": "D",
        "text": "Roll out in phases by store group, holding SLOs at each step with a rollback plan, and present the speed-versus-risk tradeoff to the COO.",
        "text_vi": "Triển khai theo từng pha theo nhóm cửa hàng, giữ SLO ở mỗi bước kèm kế hoạch rollback, và trình bày tradeoff tốc độ và rủi ro cho COO."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "A phased rollout expands step by step while SLOs hold, with the governance table running and a rollback plan ready, which limits blast radius and reversal cost across varied sites; the timing pressure is a tradeoff for the COO to decide on. Switching everything on ignores site variation. An open-ended pilot extension and cancelling without a defined gate both stall progress without clear criteria.",
    "explanation_vi": "Phased rollout mở rộng từng bước khi SLO được giữ, với governance table đang chạy và kế hoạch rollback sẵn sàng, giúp giới hạn phạm vi ảnh hưởng và reversal cost trên các địa điểm khác nhau; áp lực thời gian là một tradeoff để COO quyết định. Bật toàn bộ bỏ qua sự khác biệt giữa các địa điểm. Kéo dài pilot không hồi kết và hủy bỏ khi không có gate xác định đều làm đình trệ tiến độ mà không có tiêu chí rõ ràng.",
    "source": "output_4/10_Supplement_SLOs_Expectations_Handoff_and_Rollout.md"
  },
  {
    "id": 31,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Translate business problems into Claude-based AI solutions",
    "lessonId": "d1-t1",
    "question": "An insurer's success metric for a claims-summary assistant is 'summaries accepted by adjusters without major edits'. During discovery the architect learns that no labelled examples of good or bad summaries exist and nobody currently tracks edit rates. Build is scheduled to start next week. What is the most appropriate way to treat this finding?",
    "question_vi": "Success metric của một công ty bảo hiểm cho trợ lý tóm tắt claim là 'bản tóm tắt được adjuster chấp nhận mà không sửa lớn'. Trong discovery, architect phát hiện không có ví dụ được gán nhãn nào về bản tóm tắt tốt hay xấu và hiện không ai theo dõi tỷ lệ chỉnh sửa. Lịch build bắt đầu tuần sau. Cách xử lý phát hiện này phù hợp nhất là gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Record a data-availability gap with an owner: create a baseline and labelled set before build, or quality has no acceptance criteria.",
        "text_vi": "Ghi nhận khoảng trống dữ liệu kèm người chịu trách nhiệm: tạo baseline và tập có nhãn trước khi build, nếu không chất lượng không có tiêu chí chấp nhận."
      },
      {
        "key": "B",
        "text": "Replace the success metric with model benchmark scores, which are already available and objective.",
        "text_vi": "Thay success metric bằng điểm benchmark của model, vốn đã có sẵn và khách quan."
      },
      {
        "key": "C",
        "text": "Proceed with the build as scheduled and let adjusters' informal feedback define what good quality means once the system is live in production.",
        "text_vi": "Tiếp tục build theo lịch và để phản hồi không chính thức của adjuster định nghĩa thế nào là chất lượng tốt khi hệ thống chạy production."
      },
      {
        "key": "D",
        "text": "Use request volume and error rate as the success metric, since they can be measured automatically from day one.",
        "text_vi": "Dùng request volume và error rate làm success metric, vì chúng đo tự động được từ ngày đầu."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Without data to build a representative eval set there are no acceptance criteria and no quality target to prove, and if nobody measures the baseline it becomes work to do before build, owned and tracked as an assumption. Informal feedback cannot reconstruct a before number later, benchmark scores do not reflect the business outcome, and volume and error rate show the system runs rather than what it changes.",
    "explanation_vi": "Không có dữ liệu để xây eval set đại diện thì không có tiêu chí chấp nhận và không có mục tiêu chất lượng để chứng minh, và nếu chưa ai đo baseline thì đó là việc phải làm trước khi build, có người sở hữu và được theo dõi như một assumption. Phản hồi không chính thức không thể dựng lại số liệu trước đó, điểm benchmark không phản ánh kết quả kinh doanh, còn volume và error rate cho thấy hệ thống chạy chứ không cho thấy nó thay đổi điều gì.",
    "source": "output_4/09_Supplement_Business_Value_and_Discovery_Toolkit.md"
  },
  {
    "id": 32,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Design multi-agent systems and orchestration strategies",
    "lessonId": "d1-t4",
    "question": "A multi-agent system audits a 400-file codebase and reports 'no critical issues'. Reviewers distrust the claim because the report does not say how many files were examined or which units failed. Three engineers propose fixes. Which two together make the report trustworthy? (Choose TWO.)",
    "question_vi": "Một hệ thống multi-agent audit codebase 400 file và báo cáo 'không có vấn đề nghiêm trọng'. Reviewer không tin kết luận vì báo cáo không nói bao nhiêu file đã được kiểm tra hay đơn vị nào lỗi. Ba kỹ sư đề xuất cách sửa. Hai thay đổi nào cùng nhau làm báo cáo đáng tin? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "Reduce the codebase scope to the 100 most frequently changed files so that failures become less likely.",
        "text_vi": "Thu hẹp phạm vi codebase còn 100 file thay đổi nhiều nhất để lỗi ít xảy ra hơn."
      },
      {
        "key": "B",
        "text": "State in the report how many valid results returned versus units dispatched, and list any unreviewed units explicitly.",
        "text_vi": "Nêu trong báo cáo số kết quả hợp lệ trả về so với số đơn vị đã dispatch, và liệt kê tường minh mọi đơn vị chưa được review."
      },
      {
        "key": "C",
        "text": "Ask the orchestrator to state its confidence in the conclusion using a percentage in the final paragraph.",
        "text_vi": "Yêu cầu orchestrator nêu mức độ tin cậy vào kết luận bằng phần trăm ở đoạn cuối."
      },
      {
        "key": "D",
        "text": "Make the summary more concise, so readers focus only on the critical-issue conclusion.",
        "text_vi": "Làm bản tóm tắt ngắn gọn hơn, để người đọc chỉ tập trung vào kết luận về vấn đề nghiêm trọng."
      },
      {
        "key": "E",
        "text": "Retry failed or empty subagent units a bounded number of times before they are flagged as gaps.",
        "text_vi": "Retry các đơn vị subagent lỗi hoặc rỗng một số lần có giới hạn trước khi gắn cờ là khoảng trống."
      }
    ],
    "answer": [
      "B",
      "E"
    ],
    "explanation": "Trust comes from deterministic coverage reporting, results returned reconciled with units dispatched and gaps listed, together with retrying failed units at the subagent boundary before flagging them. A shorter summary hides the gaps further, a self-stated confidence percentage is still model output rather than reconciliation, and shrinking scope changes the job instead of making the report complete.",
    "explanation_vi": "Độ tin cậy đến từ báo cáo coverage deterministic, kết quả trả về được đối chiếu với đơn vị đã dispatch và khoảng trống được liệt kê, cùng với việc retry đơn vị lỗi ở ranh giới subagent trước khi gắn cờ. Tóm tắt ngắn hơn che khoảng trống thêm, phần trăm tự tin do model nêu vẫn là output của model chứ không phải đối chiếu, và thu hẹp phạm vi là thay đổi công việc chứ không làm báo cáo đầy đủ.",
    "source": "output/05_Pattern_Selection.md"
  },
  {
    "id": 33,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Design multi-agent systems and orchestration strategies",
    "lessonId": "d1-t4",
    "question": "A bank's loan-document system combines an extraction pipeline for scanned applications with an agentic investigation loop for suspected fraud. The team uses one eval set measuring overall approval accuracy and reports 93 percent. Fraud-loop failures are numerous but invisible in that number. What should change?",
    "question_vi": "Hệ thống tài liệu vay của một ngân hàng kết hợp pipeline trích xuất cho hồ sơ scan với một vòng điều tra agentic cho nghi ngờ gian lận. Đội dùng một eval set đo độ chính xác duyệt tổng và báo cáo 93 phần trăm. Lỗi của vòng gian lận nhiều nhưng không thấy trong con số đó. Nên thay đổi gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Replace accuracy with request latency as the headline metric so that the number reflects system health.",
        "text_vi": "Thay độ chính xác bằng latency của request làm metric chính để con số phản ánh sức khỏe hệ thống."
      },
      {
        "key": "B",
        "text": "Give each component its own eval set, since each reference architecture carries its own eval contract.",
        "text_vi": "Cho mỗi thành phần eval set riêng, vì mỗi reference architecture mang eval contract riêng."
      },
      {
        "key": "C",
        "text": "Remove the fraud loop from the system, since composed architectures cannot be evaluated reliably.",
        "text_vi": "Loại vòng gian lận khỏi hệ thống, vì các kiến trúc kết hợp không thể đánh giá đáng tin."
      },
      {
        "key": "D",
        "text": "Increase the size of the single eval set so that rare fraud cases are represented in the overall score.",
        "text_vi": "Tăng kích thước eval set đơn để các ca gian lận hiếm được phản ánh trong điểm tổng."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "A system that looks healthy overall can mask failures in one component, so each composed reference architecture needs its own eval set. Enlarging a single set still blends components, removing the fraud loop discards needed capability, and latency says nothing about correctness of fraud investigations.",
    "explanation_vi": "Một hệ thống trông ổn tổng thể có thể che lỗi ở một thành phần, nên mỗi reference architecture được kết hợp cần eval set riêng. Tăng kích thước một eval set vẫn trộn các thành phần, loại vòng gian lận bỏ mất năng lực cần thiết, và latency không nói gì về tính đúng của các cuộc điều tra gian lận.",
    "source": "output/06_Reference_Architectures.md"
  },
  {
    "id": 34,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "objective": "Implement prompt reuse strategies (caching, modular prompts, Skills)",
    "lessonId": "d2-t5",
    "question": "A manufacturer wants its quality-inspection procedure, packaged as a Skill with a Python script that parses sensor CSVs, to run inside its own application through the Claude API. The platform team plans capacity and security reviews. Which dependency must the architect call out for this integration pattern?",
    "question_vi": "Một nhà sản xuất muốn quy trình kiểm tra chất lượng, được đóng gói thành Skill có script Python phân tích file CSV cảm biến, chạy bên trong ứng dụng của mình qua Claude API. Đội nền tảng lên kế hoạch đánh giá năng lực và bảo mật. Architect phải nêu ra phụ thuộc nào cho pattern tích hợp này?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "An MCP server, because Skills can only be reached over the Model Context Protocol from an app.",
        "text_vi": "Một MCP server, vì Skill chỉ có thể được truy cập qua Model Context Protocol từ một ứng dụng."
      },
      {
        "key": "B",
        "text": "Claude Code installed on every operator workstation that triggers an inspection.",
        "text_vi": "Claude Code được cài trên mọi máy trạm của người vận hành kích hoạt việc kiểm tra."
      },
      {
        "key": "C",
        "text": "The Code Execution Tool, which brings a sandboxed execution environment into the design.",
        "text_vi": "Code Execution Tool, vốn đưa một môi trường thực thi sandbox vào thiết kế."
      },
      {
        "key": "D",
        "text": "A fine-tuned model, because Skills must be trained into the model before use.",
        "text_vi": "Một model được fine-tune, vì Skill phải được huấn luyện vào model trước khi dùng."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Through the API, a Skill is attached with the container.skills parameter, published and versioned via /v1/skills, and requires the Code Execution Tool, so the pattern carries a sandboxed execution environment dependency that capacity and security reviews must cover. Skills are not limited to MCP, do not require Claude Code on operator machines for API use, and are not trained into the model.",
    "explanation_vi": "Qua API, một Skill được gắn bằng tham số container.skills, được phát hành và quản lý version qua /v1/skills, và cần Code Execution Tool, nên pattern này mang theo phụ thuộc vào môi trường thực thi sandbox mà các đánh giá năng lực và bảo mật phải bao quát. Skill không bị giới hạn ở MCP, không cần Claude Code trên máy người vận hành khi dùng qua API, và không được huấn luyện vào model.",
    "source": "output/10_Entry_Points_Governance.md"
  },
  {
    "id": 35,
    "topic": "Developer Productivity & Operational Enablement (7%)",
    "objective": "Improve developer workflows using AI-assisted tooling",
    "lessonId": "d7-t2",
    "question": "Engineers at an industrial-equipment manufacturer use Claude only in a browser chat tab: they copy code into the chat, re-explain the project structure each time, and paste suggestions back into their editor before running tests manually. Leadership asks the Architect how to get more value from the tool without adding a separate process. What should the Architect recommend?",
    "question_vi": "Kỹ sư tại một nhà sản xuất thiết bị công nghiệp chỉ dùng Claude trong một tab chat trên trình duyệt: họ copy code vào chat, giải thích lại cấu trúc dự án mỗi lần, rồi dán gợi ý trở lại editor trước khi chạy test thủ công. Ban lãnh đạo hỏi Architect làm sao để thu được nhiều giá trị hơn từ công cụ mà không thêm một quy trình riêng. Architect nên khuyến nghị gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Create a dedicated AI office hour each week where engineers bring code to discuss with Claude together.",
        "text_vi": "Tổ chức một giờ AI riêng mỗi tuần để kỹ sư mang code đến thảo luận cùng Claude."
      },
      {
        "key": "B",
        "text": "Publish a prompt library on the wiki so engineers can describe the project structure more quickly in the chat window.",
        "text_vi": "Xuất bản một thư viện prompt trên wiki để kỹ sư mô tả cấu trúc dự án nhanh hơn trong cửa sổ chat."
      },
      {
        "key": "C",
        "text": "Upgrade to a model with a larger context window so engineers can paste the whole codebase into each chat.",
        "text_vi": "Nâng cấp lên model có context window lớn hơn để kỹ sư dán toàn bộ codebase vào mỗi lần chat."
      },
      {
        "key": "D",
        "text": "Run Claude Code in the editor, review and test loop, with project config letting it read the repo and run tests.",
        "text_vi": "Chạy Claude Code trong editor, quy trình review và vòng lặp test, với cấu hình dự án cho phép nó đọc repo và chạy test."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "AI tooling pays off when it lives inside the existing workflow, the editor, review process and test loop, which removes the copy-paste and re-explaining friction and lets Claude work with repository context and run tests. A prompt library and a bigger context window keep the work in a separate chat window, and a weekly office hour adds a separate process rather than integrating assistance into daily work.",
    "explanation_vi": "Công cụ AI phát huy giá trị khi nằm bên trong workflow sẵn có, tức editor, quy trình review và vòng lặp test, giúp loại bỏ ma sát copy-paste và giải thích lại, đồng thời để Claude làm việc với ngữ cảnh repository và chạy test. Thư viện prompt và context window lớn hơn vẫn giữ công việc trong một cửa sổ chat riêng, còn giờ AI hằng tuần thêm một quy trình riêng thay vì tích hợp sự hỗ trợ vào công việc hằng ngày.",
    "source": "output_5/03_Developer_Workflows_and_Verification.md"
  },
  {
    "id": 36,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Design evaluation datasets and test frameworks using mixed methodologies",
    "lessonId": "d4-t2",
    "question": "A retailer's eval suite for its returns assistant has 2,000 cases, 900 of which are graded by an LLM judge. To cut spending, a finance manager asks the team to shrink the suite to 100 cases. The assistant handles many return policies, regions and product categories, and prompt changes ship every sprint. How should the architect respond?",
    "question_vi": "Eval suite cho trợ lý đổi trả của một nhà bán lẻ có 2.000 case, trong đó 900 case được chấm bằng LLM judge. Để cắt giảm chi tiêu, một quản lý tài chính yêu cầu team thu nhỏ suite xuống 100 case. Trợ lý xử lý nhiều chính sách đổi trả, khu vực và danh mục sản phẩm, và các thay đổi prompt được đưa lên mỗi sprint. Architect nên phản hồi thế nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Keep the suite sized to what gives confidence across categories, treating judge cost as secondary and using code checks where possible",
        "text_vi": "Giữ kích thước suite ở mức tạo được độ tin cậy trên các category, coi chi phí judge là thứ yếu và dùng kiểm tra bằng code khi có thể"
      },
      {
        "key": "B",
        "text": "Run the full suite only once a quarter to save money",
        "text_vi": "Chỉ chạy toàn bộ suite mỗi quý một lần để tiết kiệm"
      },
      {
        "key": "C",
        "text": "Remove all judge-graded cases and keep only code-based ones",
        "text_vi": "Loại bỏ toàn bộ case chấm bằng judge và chỉ giữ case bằng code"
      },
      {
        "key": "D",
        "text": "Agree, since 100 well-chosen cases are enough to represent any system",
        "text_vi": "Đồng ý, vì 100 case được chọn kỹ là đủ đại diện cho mọi hệ thống"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "The course warns not to let eval cost drive you to a smaller set than the use case warrants; a regression that slips through an undersized suite costs far more than extra API calls. Cost can be managed by moving deterministic checks to code rather than cutting coverage. A 100-case suite cannot cover many categories, dropping judge cases leaves interpretive behaviors untested, and quarterly runs remove the per-change gate.",
    "explanation_vi": "Khóa học cảnh báo không để chi phí eval khiến bạn dùng tập nhỏ hơn mức use case cần; một regression lọt qua suite quá nhỏ tốn kém hơn nhiều so với vài lần gọi API thêm. Có thể quản lý chi phí bằng cách chuyển kiểm tra tất định sang code thay vì cắt độ bao phủ. Suite 100 case không thể bao phủ nhiều category, bỏ case judge khiến hành vi cần diễn giải không được kiểm tra, còn chạy mỗi quý loại bỏ cổng cho từng thay đổi.",
    "source": "output_2/02_Evals_as_Acceptance_Criteria.md"
  },
  {
    "id": 37,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Design evaluation datasets and test frameworks using mixed methodologies",
    "lessonId": "d4-t2",
    "question": "An insurer's team is designing an LLM judge to grade whether claim summaries are faithful to the source documents. The summaries are generated by Claude Sonnet, and the team plans to use the same Sonnet deployment as the judge with a short prompt. Which TWO changes make this judge design more rigorous? (Choose TWO.)",
    "question_vi": "Team của một công ty bảo hiểm đang thiết kế LLM judge để chấm xem tóm tắt claim có trung thành với tài liệu gốc không. Các tóm tắt được sinh bởi Claude Sonnet, và team định dùng chính bản triển khai Sonnet đó làm judge với một prompt ngắn. HAI thay đổi nào làm thiết kế judge này nghiêm ngặt hơn? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "Calibrate the judge against adjuster-labeled summaries and confirm agreement before trusting it",
        "text_vi": "Calibrate judge với các tóm tắt do chuyên viên gán nhãn và xác nhận mức đồng thuận trước khi tin dùng"
      },
      {
        "key": "B",
        "text": "Run the uncalibrated judge twice and average the scores",
        "text_vi": "Chạy judge chưa calibrate hai lần và lấy trung bình điểm"
      },
      {
        "key": "C",
        "text": "Grade with a different model from the one that generated the summaries",
        "text_vi": "Chấm bằng một model khác với model đã sinh tóm tắt"
      },
      {
        "key": "D",
        "text": "Let the judge return any score from 1 to 100 to capture nuance",
        "text_vi": "Cho judge trả về bất kỳ điểm nào từ 1 đến 100 để nắm bắt sắc thái"
      },
      {
        "key": "E",
        "text": "Hide the source documents from the judge to keep prompts short",
        "text_vi": "Ẩn tài liệu gốc khỏi judge để prompt ngắn gọn"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "The grading ladder makes a judge rigorous through calibration against human-labeled examples and by grading with a different model than the one being evaluated, to avoid self-preference. Free-form scores reduce consistency, averaging an uncalibrated judge does not make it accurate, and a faithfulness judge needs the source documents to compare against.",
    "explanation_vi": "Grading ladder làm judge nghiêm ngặt qua calibrate với các ví dụ do người gán nhãn và chấm bằng model khác với model đang được đánh giá, để tránh self-preference. Điểm tự do làm giảm tính nhất quán, lấy trung bình judge chưa calibrate không làm nó chính xác hơn, còn judge đánh giá faithfulness cần tài liệu gốc để đối chiếu.",
    "source": "output_2/02_Evals_as_Acceptance_Criteria.md"
  },
  {
    "id": 38,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "objective": "Implement prompt reuse strategies (caching, modular prompts, Skills)",
    "lessonId": "d2-t5",
    "question": "A telco has rolled out cache breakpoints across its customer-care prompts and leadership wants proof that caching is working before extending it to other products. Billing is reported monthly per account, not per prompt. Which data source gives the most direct per-request evidence?",
    "question_vi": "Một nhà mạng đã triển khai cache breakpoint trên các prompt chăm sóc khách hàng và ban lãnh đạo muốn có bằng chứng caching đang hoạt động trước khi mở rộng sang sản phẩm khác. Hóa đơn được báo cáo hằng tháng theo tài khoản, không theo prompt. Nguồn dữ liệu nào cung cấp bằng chứng trực tiếp nhất theo từng request?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Median end-to-end latency on the dashboard, which falls whenever caching is effective for long prompts.",
        "text_vi": "Median latency end-to-end trên dashboard, vốn giảm mỗi khi caching hiệu quả với prompt dài."
      },
      {
        "key": "B",
        "text": "The cache_creation_input_tokens and cache_read_input_tokens fields in each response's usage.",
        "text_vi": "Các trường cache_creation_input_tokens và cache_read_input_tokens trong usage của mỗi response."
      },
      {
        "key": "C",
        "text": "Customer satisfaction scores, which rise when cached responses are returned.",
        "text_vi": "Điểm hài lòng của khách hàng, vốn tăng khi response được cache được trả về."
      },
      {
        "key": "D",
        "text": "The monthly invoice total compared with the previous month's invoice total.",
        "text_vi": "Tổng hóa đơn tháng này so với tổng hóa đơn tháng trước."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "The course points to the cache_creation_input_tokens and cache_read_input_tokens fields in the usage block as the way to track caching effectiveness per request. Latency and invoice totals are influenced by many other factors such as traffic, output length and volume, and caching stores the prompt prefix rather than returning cached responses, so satisfaction scores are not a caching signal.",
    "explanation_vi": "Course chỉ ra các trường cache_creation_input_tokens và cache_read_input_tokens trong khối usage là cách theo dõi hiệu quả caching theo từng request. Latency và tổng hóa đơn bị ảnh hưởng bởi nhiều yếu tố khác như traffic, độ dài output và volume, còn caching lưu prefix của prompt chứ không trả về response được cache, nên điểm hài lòng không phải tín hiệu của caching.",
    "source": "output/09_Prompting_as_Architecture.md"
  },
  {
    "id": 39,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Select appropriate architectural patterns (workflow, agentic, augmented LLM)",
    "lessonId": "d1-t3",
    "question": "A law firm wants a contract-review pipeline: first extract every obligation and deadline from the raw contract, then classify each obligation by risk level, then draft a summary memo for the supervising lawyer. Each stage has a clean, defined output that the next stage consumes. Which workflow sub-pattern best describes this design?",
    "question_vi": "Một hãng luật muốn pipeline review hợp đồng: đầu tiên trích mọi nghĩa vụ và thời hạn từ hợp đồng gốc, sau đó phân loại từng nghĩa vụ theo mức rủi ro, rồi soạn memo tóm tắt cho luật sư giám sát. Mỗi giai đoạn có output rõ ràng, xác định mà giai đoạn sau sử dụng. Sub-pattern workflow nào mô tả đúng nhất thiết kế này?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Routing, because a classifier assigns each obligation to a risk category before the memo is drafted.",
        "text_vi": "Routing, vì một bộ phân loại gán mỗi nghĩa vụ vào một nhóm rủi ro trước khi soạn memo."
      },
      {
        "key": "B",
        "text": "Evaluator-optimizer, because the lawyer reviews the memo and may ask for changes before it is final.",
        "text_vi": "Evaluator-optimizer, vì luật sư review memo và có thể yêu cầu sửa trước khi chốt."
      },
      {
        "key": "C",
        "text": "Chaining: each stage consumes the previous stage's defined output in a fixed sequence.",
        "text_vi": "Chaining: mỗi giai đoạn dùng output xác định của giai đoạn trước theo một trình tự cố định."
      },
      {
        "key": "D",
        "text": "Parallelization, because extraction, classification and drafting can each be run at the same time.",
        "text_vi": "Parallelization, vì trích xuất, phân loại và soạn thảo đều có thể chạy cùng lúc."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Sequential stages with clean handoffs, such as extract then classify then summarize, are the chaining sub-pattern; the course uses this exact contract-review example. Classifying obligations is a step inside the chain, not routing inputs to different paths; the stages depend on each other so they cannot run in parallel; and a human reviewing the final memo is not an automated grade-and-revise loop.",
    "explanation_vi": "Các giai đoạn tuần tự với điểm chuyển giao rõ ràng, như trích xuất rồi phân loại rồi tóm tắt, là sub-pattern chaining; khóa học dùng đúng ví dụ review hợp đồng này. Phân loại nghĩa vụ là một bước trong chain, không phải route input sang các nhánh khác nhau; các giai đoạn phụ thuộc nhau nên không thể chạy song song; và việc người review memo cuối không phải vòng chấm-và-sửa tự động.",
    "source": "output/05_Pattern_Selection.md"
  },
  {
    "id": 40,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Diagnose system issues (prompt failure, hallucinations, model mismatch)",
    "lessonId": "d4-t4",
    "question": "An insurer's claim-routing assistant mislabels claims that involve both property damage and injury; the prompt defines each category separately but never says what to do with mixed claims. To fix it quickly, the team upgraded the step from Sonnet to Opus. Costs rose sharply and the mislabeling rate barely changed. How should the architect assess this?",
    "question_vi": "Trợ lý định tuyến claim của một công ty bảo hiểm gắn nhãn sai các claim có cả thiệt hại tài sản lẫn thương tích; prompt định nghĩa từng category riêng nhưng không nói phải làm gì với claim hỗn hợp. Để sửa nhanh, team nâng bước này từ Sonnet lên Opus. Chi phí tăng mạnh và tỉ lệ gắn nhãn sai gần như không đổi. Architect nên đánh giá việc này thế nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "The upgrade was correct but needs extended thinking to take effect",
        "text_vi": "Việc nâng cấp là đúng nhưng cần extended thinking để phát huy tác dụng"
      },
      {
        "key": "B",
        "text": "It is data drift; wait until mixed claims become less frequent",
        "text_vi": "Đây là data drift; chờ đến khi claim hỗn hợp ít xuất hiện hơn"
      },
      {
        "key": "C",
        "text": "It is a hallucination; ground routing decisions with retrieval",
        "text_vi": "Đây là hallucination; neo quyết định định tuyến bằng retrieval"
      },
      {
        "key": "D",
        "text": "It is a prompt failure; revert the tier and specify the rule for mixed claims, then re-run the eval",
        "text_vi": "Đây là prompt failure; trả lại tier cũ và quy định rõ quy tắc cho claim hỗn hợp, rồi chạy lại eval"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "The instruction is underspecified for mixed claims, so the model fills the gap; the course states the fix for a prompt failure is in the prompt, not the model, and a bigger model is the typical wrong fix. Extended thinking adds more cost to the same ambiguity, retrieval does not supply a missing business rule, and waiting does not fix the instruction.",
    "explanation_vi": "Chỉ dẫn thiếu cụ thể cho claim hỗn hợp nên model tự lấp chỗ trống; khóa học nêu cách sửa prompt failure nằm ở prompt, không phải model, và model lớn hơn là cách sửa sai điển hình. Extended thinking thêm chi phí cho cùng một sự mơ hồ, retrieval không cung cấp được quy tắc nghiệp vụ còn thiếu, và chờ đợi không sửa được chỉ dẫn.",
    "source": "output_2/06_AB_Testing_and_Observability.md"
  },
  {
    "id": 41,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Translate business problems into Claude-based AI solutions",
    "lessonId": "d1-t1",
    "question": "A hospital is choosing between two delivery options for a discharge-summary assistant. Option one costs 30 percent less per month but would send patient data through a route not covered by the hospital's BAA. Option two is covered but slightly slower. Finance wants the cheaper option with a plan to negotiate coverage after go-live. What should the architect recommend?",
    "question_vi": "Một bệnh viện đang chọn giữa hai phương án triển khai cho trợ lý tóm tắt xuất viện. Phương án một rẻ hơn 30 phần trăm mỗi tháng nhưng sẽ gửi dữ liệu bệnh nhân qua một route không được BAA của bệnh viện bao phủ. Phương án hai được bao phủ nhưng chậm hơn một chút. Bộ phận tài chính muốn phương án rẻ hơn và đàm phán bao phủ sau go-live. Architect nên khuyến nghị gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Eliminate the route without BAA coverage first, then compare cost and latency only among compliant options.",
        "text_vi": "Loại route không có BAA trước, rồi mới so sánh cost và latency giữa các phương án tuân thủ."
      },
      {
        "key": "B",
        "text": "Choose the cheaper option because the latency difference matters more to clinicians than the coverage gap.",
        "text_vi": "Chọn phương án rẻ hơn vì chênh lệch latency quan trọng với bác sĩ hơn khoảng trống bao phủ."
      },
      {
        "key": "C",
        "text": "Choose the cheaper option and mask part of the patient data to reduce exposure until coverage is negotiated.",
        "text_vi": "Chọn phương án rẻ hơn và che một phần dữ liệu bệnh nhân để giảm phơi nhiễm cho tới khi đàm phán xong bao phủ."
      },
      {
        "key": "D",
        "text": "Run both options in parallel with real patient records for a month and choose whichever produces better discharge summaries.",
        "text_vi": "Chạy song song cả hai phương án với hồ sơ bệnh nhân thật trong một tháng và chọn phương án tạo bản tóm tắt xuất viện tốt hơn."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Governance and regulated-industry constraints rule out a route before any cost or latency tradeoff is considered, so the uncovered route is eliminated first. Partial masking is a compensating measure that does not replace BAA coverage, and both running in parallel and choosing on latency would still send PHI through a non-permitted route.",
    "explanation_vi": "Ràng buộc governance và ngành được quản lý loại một route trước khi xét bất kỳ đánh đổi cost hay latency nào, nên route không được bao phủ bị loại trước. Che một phần dữ liệu là biện pháp bù đắp không thay thế được BAA, còn chạy song song hay chọn theo latency đều vẫn đưa PHI qua route không được phép.",
    "source": "output/01_Module_Introduction.md"
  },
  {
    "id": 42,
    "topic": "Governance, Safety & Risk Management (14%)",
    "objective": "Identify risks, limitations, and failure modes of LLM systems",
    "lessonId": "d5-t2",
    "question": "An auto insurer's policy-coverage assistant is grounded on the current policy wording through RAG. A business stakeholder, after reading that hallucinations come from randomness, asks the team to simply set temperature to 0 and remove the citation-verification step to cut latency. How should the architect respond?",
    "question_vi": "Trợ lý tra cứu phạm vi bảo hiểm của một hãng bảo hiểm ô tô được grounding vào điều khoản hợp đồng hiện hành qua RAG. Một bên liên quan nghiệp vụ, sau khi đọc rằng hallucination đến từ tính ngẫu nhiên, yêu cầu đội chỉ cần đặt temperature bằng 0 và bỏ bước kiểm chứng trích dẫn để giảm độ trễ. Architect nên phản hồi thế nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Decline, and raise temperature instead so the model explores alternative interpretations.",
        "text_vi": "Từ chối, và thay vào đó tăng temperature để model khám phá các cách diễn giải khác."
      },
      {
        "key": "B",
        "text": "Decline; temperature 0 reduces randomness but adds no grounding, so keep verification.",
        "text_vi": "Từ chối; temperature 0 giảm tính ngẫu nhiên nhưng không thêm căn cứ, nên giữ bước kiểm chứng."
      },
      {
        "key": "C",
        "text": "Agree, provided the retrieval index is refreshed nightly so grounding stays current.",
        "text_vi": "Đồng ý, với điều kiện chỉ mục retrieval được làm mới hằng đêm để grounding luôn cập nhật."
      },
      {
        "key": "D",
        "text": "Agree, because deterministic decoding prevents the model from inventing unsupported coverage terms.",
        "text_vi": "Đồng ý, vì giải mã tất định ngăn model bịa ra điều khoản bảo hiểm không có căn cứ."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "The course lists 'temperature 0 eliminates hallucination' as a misconception: it reduces randomness but adds no knowledge or grounding, so verification against the source must stay. A fresh index helps retrieval quality but does not verify what the model asserts, and raising temperature increases variability rather than faithfulness.",
    "explanation_vi": "Khóa học coi 'temperature 0 loại bỏ hallucination' là một ngộ nhận: nó giảm tính ngẫu nhiên nhưng không thêm kiến thức hay căn cứ, nên bước kiểm chứng với nguồn phải được giữ. Chỉ mục mới giúp chất lượng retrieval nhưng không kiểm chứng điều model khẳng định, còn tăng temperature làm tăng độ biến thiên chứ không tăng faithfulness.",
    "source": "output_3/08_Supplement_LLM_Risks_Hallucination_Agency_PII.md"
  },
  {
    "id": 43,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "objective": "Implement prompt reuse strategies (caching, modular prompts, Skills)",
    "lessonId": "d2-t5",
    "question": "A hospital's discharge-instructions assistant uses a cached 7,000-token clinical template. Daytime hit rates are high, but overnight requests arrive roughly every 20 minutes and almost every night request pays a cache write with no reads. The team asks why caching underperforms at night. What is the explanation and response?",
    "question_vi": "Trợ lý hướng dẫn xuất viện của một bệnh viện dùng một template lâm sàng 7.000 token được cache. Tỷ lệ hit ban ngày cao, nhưng request ban đêm đến khoảng 20 phút một lần và gần như mọi request ban đêm đều trả phí ghi cache mà không có lần đọc nào. Đội hỏi vì sao caching kém hiệu quả vào ban đêm. Giải thích và cách xử lý là gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "The cache is cleared when traffic drops; send dummy requests every minute to keep it warm.",
        "text_vi": "Cache bị xóa khi traffic giảm; gửi request giả mỗi phút để giữ cache luôn ấm."
      },
      {
        "key": "B",
        "text": "Night requests are routed to a different region; pin all traffic to the daytime region.",
        "text_vi": "Request ban đêm được định tuyến tới region khác; pin toàn bộ traffic vào region ban ngày."
      },
      {
        "key": "C",
        "text": "Night traffic is below the default 5-minute TTL; weigh the longer TTL option against its higher write price.",
        "text_vi": "Traffic ban đêm thưa hơn TTL mặc định 5 phút; cân nhắc tùy chọn TTL dài hơn so với giá ghi cao hơn của nó."
      },
      {
        "key": "D",
        "text": "The template changes at night, so the cache is invalidated; freeze it during the night shift to restore hits.",
        "text_vi": "Template thay đổi vào ban đêm nên cache bị vô hiệu; cố định nó trong ca đêm để khôi phục hit."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "The default TTL is 5 minutes, refreshed on use; workloads whose requests arrive less often than the TTL keep paying writes without reads. The course's response is to match TTL to call frequency, and a longer-lived option exists at a higher write price that must be modeled against the savings. Nothing indicates the template changes, keep-warm traffic is not a course-sanctioned lever and adds its own cost, and the region explanation is unsupported.",
    "explanation_vi": "TTL mặc định là 5 phút, được làm mới khi dùng; workload có request đến thưa hơn TTL sẽ liên tục trả phí ghi mà không được đọc. Cách xử lý của course là khớp TTL với tần suất gọi, và có tùy chọn thời gian sống dài hơn với giá ghi cao hơn, cần được mô hình hóa so với khoản tiết kiệm. Không có dấu hiệu template thay đổi, gửi traffic giữ ấm không phải đòn bẩy được course khuyến nghị và tự nó tốn chi phí, còn giải thích về region là không có cơ sở.",
    "source": "output_2/04_Sizing_and_Feasibility.md"
  },
  {
    "id": 44,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "objective": "Support lifecycle phases (discovery, design, handoff, monitoring, iteration)",
    "lessonId": "d6-t5",
    "question": "A telecom's roaming-support assistant showed falling eval scores; the team diagnosed outdated roaming tariffs, refreshed the knowledge base and added test cases. The ticket is about to be closed as 'resolved.' Under the feedback loop's final step, what should still happen before closing it?",
    "question_vi": "Trợ lý hỗ trợ chuyển vùng quốc tế của một nhà mạng có eval score giảm; đội chẩn đoán là do biểu giá chuyển vùng lỗi thời, đã cập nhật knowledge base và thêm test case. Ticket sắp được đóng với trạng thái 'đã giải quyết'. Theo bước cuối của feedback loop, điều gì vẫn cần diễn ra trước khi đóng?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Archive the incident in the observability stack so that the data is available for future audits.",
        "text_vi": "Lưu trữ sự cố trong observability stack để dữ liệu sẵn sàng cho các đợt audit sau."
      },
      {
        "key": "B",
        "text": "Notify all customers who received outdated tariff information during the affected period.",
        "text_vi": "Thông báo cho mọi khách hàng đã nhận thông tin biểu giá lỗi thời trong giai đoạn bị ảnh hưởng."
      },
      {
        "key": "C",
        "text": "Upgrade the model version so that similar issues are less likely to recur in the future.",
        "text_vi": "Nâng cấp phiên bản model để các vấn đề tương tự ít có khả năng tái diễn trong tương lai."
      },
      {
        "key": "D",
        "text": "Review whether the fix actually restored eval scores and whether the trigger or rule needs adjusting, such as tariff-change checks.",
        "text_vi": "Review xem bản sửa có thực sự khôi phục eval score không và trigger hay quy tắc có cần điều chỉnh không, chẳng hạn kiểm tra khi biểu giá thay đổi."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "The feedback loop ends with Review: did the response work, and does the rule need to change? Here that means confirming the scores recovered and considering a rule such as checking the knowledge base whenever tariffs change. Customer notification may be a separate business decision but is not the loop's final step. A model upgrade does not address stale data, and archiving data is not verifying the fix.",
    "explanation_vi": "Feedback loop kết thúc bằng Review: phản ứng có hiệu quả không, và quy tắc có cần thay đổi không? Ở đây nghĩa là xác nhận điểm số đã phục hồi và cân nhắc một quy tắc như kiểm tra knowledge base mỗi khi biểu giá thay đổi. Thông báo khách hàng có thể là một quyết định kinh doanh riêng nhưng không phải bước cuối của vòng lặp. Nâng cấp model không xử lý được dữ liệu cũ, và lưu trữ dữ liệu không phải là xác minh bản sửa.",
    "source": "output_4/04_Feedback_Loops_and_SLAs.md"
  },
  {
    "id": 45,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Design evaluation datasets and test frameworks using mixed methodologies",
    "lessonId": "d4-t2",
    "question": "A retail bank's chatbot scored 95% on an eval of 1,200 single-turn prompt and response pairs. After launch, customers complain that the bot forgets which card they mentioned earlier and invents details about prior requests in long conversations. The eval team wants to close the gap in its framework. What is missing?",
    "question_vi": "Chatbot của một ngân hàng bán lẻ đạt 95% trên eval gồm 1.200 cặp prompt và response đơn lượt. Sau khi ra mắt, khách hàng phàn nàn bot quên thẻ mà họ đã nhắc trước đó và bịa chi tiết về các yêu cầu trước trong các cuộc hội thoại dài. Team eval muốn lấp khoảng trống trong khung đánh giá. Điều gì đang thiếu?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "A multi-turn eval with its own golden dataset of full conversation transcripts",
        "text_vi": "Một multi-turn eval với golden dataset riêng gồm transcript hội thoại đầy đủ"
      },
      {
        "key": "B",
        "text": "More single-turn prompts covering card products",
        "text_vi": "Thêm prompt đơn lượt về các sản phẩm thẻ"
      },
      {
        "key": "C",
        "text": "A lower max_tokens setting so answers stay short",
        "text_vi": "Cài đặt max_tokens thấp hơn để câu trả lời ngắn"
      },
      {
        "key": "D",
        "text": "A higher pass threshold of 99% on the single-turn set",
        "text_vi": "Ngưỡng pass cao hơn 99% trên tập đơn lượt"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "The course treats multi-turn evaluation as a separate category that scores context retention, invented details in follow-ups and quality over conversation length, and it needs its own golden dataset of full transcripts. Raising the threshold or adding more single-turn items cannot test behavior that only appears across turns, and shortening answers does not address forgotten context.",
    "explanation_vi": "Khóa học coi đánh giá nhiều lượt là một category riêng chấm việc giữ ngữ cảnh, chi tiết bịa ở câu hỏi tiếp nối và chất lượng theo độ dài hội thoại, và nó cần golden dataset riêng gồm transcript đầy đủ. Nâng ngưỡng hay thêm mục đơn lượt không thể kiểm tra hành vi chỉ xuất hiện qua nhiều lượt, còn rút ngắn câu trả lời không giải quyết việc quên ngữ cảnh.",
    "source": "output_2/02_Evals_as_Acceptance_Criteria.md"
  },
  {
    "id": 46,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Diagnose system issues (prompt failure, hallucinations, model mismatch)",
    "lessonId": "d4-t4",
    "question": "A hospital's discharge-summary assistant occasionally states lab values, such as potassium levels, that differ from the patient record, written confidently in clinical language. The team is choosing fixes for the next release. Which TWO changes address the root cause? (Choose TWO.)",
    "question_vi": "Trợ lý tóm tắt xuất viện của một bệnh viện thỉnh thoảng nêu các giá trị xét nghiệm, như nồng độ kali, khác với hồ sơ bệnh nhân, được viết tự tin bằng ngôn ngữ lâm sàng. Team đang chọn cách sửa cho bản phát hành tiếp theo. HAI thay đổi nào giải quyết nguyên nhân gốc? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "Upgrade to the largest model tier for clinical summaries",
        "text_vi": "Nâng lên model tier lớn nhất cho tóm tắt lâm sàng"
      },
      {
        "key": "B",
        "text": "Retrieve lab values through a tool call to the record system rather than relying on the model",
        "text_vi": "Lấy giá trị xét nghiệm qua tool call tới hệ thống hồ sơ thay vì dựa vào model"
      },
      {
        "key": "C",
        "text": "Add 'never fabricate lab values' in capital letters to the system prompt",
        "text_vi": "Thêm 'không bao giờ bịa giá trị xét nghiệm' bằng chữ in hoa vào system prompt"
      },
      {
        "key": "D",
        "text": "Enable extended thinking so the model reasons more carefully",
        "text_vi": "Bật extended thinking để model suy luận cẩn thận hơn"
      },
      {
        "key": "E",
        "text": "Add a code-based verifier comparing every stated value with the source record before release",
        "text_vi": "Thêm bộ kiểm chứng bằng code so sánh mọi giá trị được nêu với hồ sơ gốc trước khi phát hành"
      }
    ],
    "answer": [
      "B",
      "E"
    ],
    "explanation": "Confident values not supported by the source are hallucinations, fixed by grounding through tool use and verification; a generator-verifier loop with a deterministic comparison against the authoritative value is the course's compensating control for precise values. Stronger instruction does not resolve hallucination, and larger models or extended thinking are untested guesses that still leave values ungrounded.",
    "explanation_vi": "Giá trị được nêu tự tin nhưng không có trong nguồn là hallucination, được sửa bằng grounding qua tool use và kiểm chứng; vòng generator-verifier với phép so sánh tất định với giá trị chuẩn là biện pháp bù đắp của khóa học cho các giá trị cần chính xác. Chỉ dẫn mạnh hơn không giải quyết được hallucination, còn model lớn hơn hay extended thinking là phỏng đoán chưa kiểm chứng và vẫn để giá trị không được neo vào nguồn.",
    "source": "output_2/06_AB_Testing_and_Observability.md"
  },
  {
    "id": 47,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Translate business problems into Claude-based AI solutions",
    "lessonId": "d1-t1",
    "question": "The COO of a regional insurer opens a kickoff meeting by saying, 'We want to use Claude to improve the claims department.' No process data has been shared yet, and the sales team has already promised the client 'the most capable model available'. As the architect, what is the best first step to translate this request into a Claude-based solution?",
    "question_vi": "COO của một công ty bảo hiểm khu vực mở đầu buổi kickoff bằng câu: 'Chúng tôi muốn dùng Claude để cải thiện bộ phận claims.' Chưa có dữ liệu quy trình nào được chia sẻ, và đội sales đã hứa với khách hàng 'model mạnh nhất hiện có'. Là architect, bước đầu tiên tốt nhất để chuyển yêu cầu này thành giải pháp dựa trên Claude là gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Build a general-purpose chatbot demo over public insurance content so the COO can react to something concrete.",
        "text_vi": "Xây một demo chatbot đa năng trên nội dung bảo hiểm công khai để COO có thứ cụ thể mà phản hồi."
      },
      {
        "key": "B",
        "text": "Define a specific problem statement and measured baseline: which claims work is slow or costly, and its current metric.",
        "text_vi": "Xác định problem statement cụ thể và baseline đã đo: công việc claims nào chậm hoặc tốn kém, và chỉ số hiện tại của nó."
      },
      {
        "key": "C",
        "text": "Propose an agentic architecture with access to the claims, policy and payment systems so the scope can expand as needs emerge.",
        "text_vi": "Đề xuất kiến trúc agentic có quyền truy cập hệ thống claims, policy và thanh toán để phạm vi có thể mở rộng khi nhu cầu xuất hiện."
      },
      {
        "key": "D",
        "text": "Benchmark the largest and mid-tier Claude models on a sample of historical claims so the model promise made by sales is confirmed before design work begins.",
        "text_vi": "Benchmark model Claude lớn nhất và tầm trung trên một mẫu claim lịch sử để lời hứa về model của sales được xác nhận trước khi bắt đầu thiết kế."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Translating a business problem starts problem-first: a concrete problem statement plus a measured baseline is the foundation for success metrics and later outcome evidence. Benchmarking models and proposing an agent are solution-first moves that come later in the decision order, and a generic demo does not address any defined problem.",
    "explanation_vi": "Chuyển dịch bài toán kinh doanh bắt đầu từ bài toán: một problem statement cụ thể cộng baseline đã đo là nền tảng cho success metric và bằng chứng kết quả về sau. Benchmark model và đề xuất agent là cách tiếp cận bắt đầu từ giải pháp, thuộc các bước sau trong thứ tự quyết định, còn một demo chung chung không giải quyết bài toán nào đã được xác định.",
    "source": "output_4/09_Supplement_Business_Value_and_Discovery_Toolkit.md"
  },
  {
    "id": 48,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "objective": "Support lifecycle phases (discovery, design, handoff, monitoring, iteration)",
    "lessonId": "d6-t5",
    "question": "A hospital group's new programme manager is mapping the Architect's deliverables onto the deployment lifecycle (discovery, design, handoff, monitoring, iteration) for the steering committee's governance plan. Which two statements correctly describe the lifecycle as taught in the course? (Choose TWO.)",
    "question_vi": "Quản lý chương trình mới của một tập đoàn bệnh viện đang ánh xạ các sản phẩm bàn giao của Architect vào vòng đời triển khai (discovery, design, handoff, monitoring, iteration) cho kế hoạch quản trị của ban chỉ đạo. Hai phát biểu nào mô tả đúng vòng đời theo khóa học? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "Tradeoff framing belongs to the monitoring phase, where production data informs decisions.",
        "text_vi": "Tradeoff framing thuộc pha monitoring, nơi dữ liệu production định hướng các quyết định."
      },
      {
        "key": "B",
        "text": "Identifying which phase a decision belongs to is what lets you judge when a phase is ready to move to the next.",
        "text_vi": "Xác định một quyết định thuộc pha nào là điều giúp đánh giá khi nào một pha sẵn sàng chuyển sang pha tiếp theo."
      },
      {
        "key": "C",
        "text": "Documentation for handoff and audit corresponds to the handoff phase.",
        "text_vi": "Tài liệu cho bàn giao và kiểm toán tương ứng với pha handoff."
      },
      {
        "key": "D",
        "text": "The feedback loop begins only after the first production incident has occurred.",
        "text_vi": "Feedback loop chỉ bắt đầu sau khi xảy ra sự cố production đầu tiên."
      },
      {
        "key": "E",
        "text": "The outcome document is the primary artifact of the design phase.",
        "text_vi": "Outcome document là artifact chính của pha design."
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "explanation": "The course maps documentation to the handoff phase and states that identifying a decision's phase is what lets you judge readiness to move on. The outcome document closes the loop after operation rather than belonging to design. The feedback loop's governance table must exist before launch, not after an incident, and tradeoff framing does the discovery-and-design work.",
    "explanation_vi": "Khóa học ánh xạ tài liệu vào pha handoff và nói rằng xác định pha của một quyết định là điều giúp đánh giá sự sẵn sàng để chuyển tiếp. Outcome document khép lại vòng sau vận hành chứ không thuộc pha design. Governance table của feedback loop phải tồn tại trước launch, không phải sau sự cố, và tradeoff framing đảm nhận phần việc discovery và design.",
    "source": "output_4/08_Lifecycle_Wrapup_and_Certification.md"
  },
  {
    "id": 49,
    "topic": "Integration (19%)",
    "objective": "Evaluate progressive discovery vs. monolithic context strategy",
    "lessonId": "d3-t8",
    "question": "A document pipeline began a conversation with a 4,000-token prompt. By turn 30 it is carrying about 80,000 tokens, billing has risen sharply, and no alert fired. Cases span dozens of turns with uploaded documents, and finance reports that cost per conversation has tripled since the pilot. Which design response addresses the silent accumulation?",
    "question_vi": "Một pipeline tài liệu bắt đầu cuộc hội thoại với prompt 4.000 token. Đến lượt thứ 30 nó mang khoảng 80.000 token, hóa đơn tăng mạnh và không có cảnh báo nào kích hoạt. Các hồ sơ kéo dài hàng chục lượt với tài liệu được tải lên, và bộ phận tài chính báo chi phí mỗi cuộc hội thoại đã tăng gấp ba kể từ giai đoạn thử nghiệm. Phản ứng thiết kế nào xử lý sự tích lũy âm thầm này?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Ask users to start a new conversation whenever they feel the system slowing down, in line with how the earlier pilot was handled.",
        "text_vi": "Yêu cầu người dùng bắt đầu cuộc hội thoại mới mỗi khi họ cảm thấy hệ thống chậm đi, phù hợp với cách xử lý ở giai đoạn thử nghiệm trước."
      },
      {
        "key": "B",
        "text": "Switch to the Batch API so the growing context is billed at a lower rate.",
        "text_vi": "Chuyển sang Batch API để context tăng dần được tính với mức giá thấp hơn."
      },
      {
        "key": "C",
        "text": "Track measured token usage per turn, alert at a chosen share of the budget and trigger compaction.",
        "text_vi": "Theo dõi lượng token đo được mỗi lượt, cảnh báo ở một tỷ lệ chọn trước của ngân sách và kích hoạt compaction."
      },
      {
        "key": "D",
        "text": "Estimate token counts from characters per token and review the estimate monthly.",
        "text_vi": "Ước tính số token từ số ký tự trên mỗi token và review ước tính hằng tháng."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "The course advises measuring rather than estimating, using the usage field and token counting, and alerting when conversation length passes a design-chosen share of the budget to trigger compaction. Character-ratio estimates are only rough illustrations. Batch processing is asynchronous and unsuited to live conversation, and relying on users to notice slowdowns is not a control.",
    "explanation_vi": "Khóa học khuyên đo thay vì ước tính, dùng trường usage và token counting, và cảnh báo khi độ dài hội thoại vượt một tỷ lệ ngân sách do thiết kế chọn để kích hoạt compaction. Ước tính theo tỷ lệ ký tự chỉ là minh họa sơ bộ. Xử lý theo lô là bất đồng bộ và không hợp với hội thoại trực tiếp, và trông chờ người dùng nhận ra sự chậm lại không phải là một biện pháp kiểm soát.",
    "source": "output/08_Model_Context_Strategy.md"
  },
  {
    "id": 50,
    "topic": "Governance, Safety & Risk Management (14%)",
    "objective": "Address ethical AI considerations (bias, fairness, transparency)",
    "lessonId": "d5-t5",
    "question": "An Italian bank is deploying Claude to support consumer-credit decisions for EU customers. The compliance lead wants to know which EU AI Act obligations, at a principle level, the design must anticipate and how they relate to the controls built in this module. Which TWO obligations apply to this kind of high-risk use? (Choose TWO.)",
    "question_vi": "Một ngân hàng Ý đang triển khai Claude để hỗ trợ quyết định tín dụng tiêu dùng cho khách hàng EU. Trưởng bộ phận compliance muốn biết, ở mức nguyên lý, thiết kế phải lường trước những nghĩa vụ nào của EU AI Act và chúng liên quan thế nào tới các control đã xây trong module này. HAI nghĩa vụ nào áp dụng cho loại ứng dụng high-risk này? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "No obligations, since the general-purpose model provider carries all compliance duties.",
        "text_vi": "Không có nghĩa vụ nào, vì nhà cung cấp model đa dụng gánh mọi nghĩa vụ compliance."
      },
      {
        "key": "B",
        "text": "Human oversight, which maps to the human-review routing for adverse decisions.",
        "text_vi": "Human oversight, tương ứng với human review routing cho các quyết định bất lợi."
      },
      {
        "key": "C",
        "text": "Only a disclosure label, since the system is treated as a minimal-risk chatbot.",
        "text_vi": "Chỉ cần nhãn công bố, vì hệ thống được coi là chatbot rủi ro tối thiểu."
      },
      {
        "key": "D",
        "text": "An outright ban, since credit scoring is an unacceptable-risk practice.",
        "text_vi": "Bị cấm hoàn toàn, vì chấm điểm tín dụng là thực hành có rủi ro không thể chấp nhận."
      },
      {
        "key": "E",
        "text": "Logging and record-keeping, which maps to the decision logging already designed.",
        "text_vi": "Logging và lưu giữ hồ sơ, tương ứng với decision logging đã được thiết kế."
      }
    ],
    "answer": [
      "B",
      "E"
    ],
    "explanation": "Credit decisions are typically high-risk under the EU AI Act's risk-based approach, carrying obligations such as logging and record-keeping and human oversight, which the material maps to decision logging and human-review routing. Credit support is not in the banned tier, it carries more than a minimal-risk disclosure, and general-purpose model duties sit with the model provider without removing the deployer's obligations.",
    "explanation_vi": "Quyết định tín dụng thường thuộc nhóm high-risk theo cách tiếp cận dựa trên rủi ro của EU AI Act, kéo theo các nghĩa vụ như logging và lưu giữ hồ sơ và human oversight, mà tài liệu ánh xạ sang decision logging và human review routing. Hỗ trợ tín dụng không thuộc tầng bị cấm, có nghĩa vụ nhiều hơn mức công bố của nhóm rủi ro tối thiểu, và nghĩa vụ dành cho model đa dụng thuộc về nhà cung cấp model mà không xóa bỏ nghĩa vụ của bên triển khai.",
    "source": "output_3/09_Supplement_Regulatory_Deep_Dive.md"
  },
  {
    "id": 51,
    "topic": "Developer Productivity & Operational Enablement (7%)",
    "objective": "Support debugging and operational issue resolution",
    "lessonId": "d7-t3",
    "question": "A SaaS company's monthly Claude bill rose 40 percent while request volume, active users and average conversation length stayed essentially flat. Finance asks the platform team for an explanation before next month's budget review. Which check should the team perform first?",
    "question_vi": "Hóa đơn Claude hằng tháng của một công ty SaaS tăng 40 phần trăm trong khi số request, số người dùng hoạt động và độ dài hội thoại trung bình gần như không đổi. Bộ phận tài chính yêu cầu team nền tảng giải thích trước buổi review ngân sách tháng tới. Team nên thực hiện kiểm tra nào trước tiên?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Survey users about answer quality to see whether satisfaction changed during the month.",
        "text_vi": "Khảo sát người dùng về chất lượng câu trả lời để xem mức hài lòng có thay đổi trong tháng không."
      },
      {
        "key": "B",
        "text": "Measure the response time of each MCP server the application calls during peak hours.",
        "text_vi": "Đo thời gian phản hồi của từng MCP server mà ứng dụng gọi trong giờ cao điểm."
      },
      {
        "key": "C",
        "text": "Count how many new developer seats were granted during the month and who approved them.",
        "text_vi": "Đếm số seat developer mới được cấp trong tháng và ai đã duyệt chúng."
      },
      {
        "key": "D",
        "text": "Check the per-request model tier and the cache hit rate against the budget model.",
        "text_vi": "Kiểm tra model tier theo từng request và cache hit rate so với budget model."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Cost rising without a usage change points to model tier creep or regressed caching, so the first check is per-request model tier and cache hit rate against the budget model. New seats contradict the flat-usage evidence, a quality survey addresses a different symptom, and MCP response time is a latency investigation rather than a cost one.",
    "explanation_vi": "Chi phí tăng mà mức sử dụng không đổi chỉ tới model tier creep hoặc caching bị suy giảm, nên kiểm tra đầu tiên là model tier theo từng request và cache hit rate so với budget model. Seat mới mâu thuẫn với bằng chứng mức sử dụng không đổi, khảo sát chất lượng xử lý một triệu chứng khác, còn thời gian phản hồi của MCP server là điều tra về latency chứ không phải chi phí.",
    "source": "output_5/04_Operational_Issue_Resolution.md"
  },
  {
    "id": 52,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Diagnose system issues (prompt failure, hallucinations, model mismatch)",
    "lessonId": "d4-t4",
    "question": "A logistics company's Claude extractor writes shipment dates into its tracking system. About 30% of dates from European forms come out in month/day order while others are day/month, and the error pattern is consistent rather than random. The prompt says only 'extract the shipment date'. What is the most likely failure class and fix?",
    "question_vi": "Bộ trích xuất Claude của một công ty logistics ghi ngày gửi hàng vào hệ thống theo dõi. Khoảng 30% ngày từ các tờ khai châu Âu ra theo thứ tự tháng/ngày trong khi số khác là ngày/tháng, và kiểu lỗi nhất quán chứ không ngẫu nhiên. Prompt chỉ ghi 'trích ngày gửi hàng'. Loại lỗi khả năng cao nhất và cách sửa là gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Prompt failure: specify the required output format in the prompt and schema, then re-run the eval",
        "text_vi": "Prompt failure: quy định rõ định dạng output trong prompt và schema, rồi chạy lại eval"
      },
      {
        "key": "B",
        "text": "Data drift: wait for the input distribution to stabilize",
        "text_vi": "Data drift: chờ phân phối input ổn định lại"
      },
      {
        "key": "C",
        "text": "Hallucination: add retrieval of shipment records to ground the dates",
        "text_vi": "Hallucination: thêm retrieval hồ sơ lô hàng để neo ngày"
      },
      {
        "key": "D",
        "text": "Model mismatch: upgrade to Opus for better date reasoning",
        "text_vi": "Model mismatch: nâng lên Opus để suy luận ngày tốt hơn"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "A consistent wrong pattern where the instruction is underspecified is the signature of a prompt failure: the model filled the gap, and the fix is in the prompt, not the model. Retrieval does not resolve an ambiguous output format, a bigger model still has to guess the format, and the inputs have not changed.",
    "explanation_vi": "Một kiểu sai nhất quán ở chỗ chỉ dẫn thiếu cụ thể là dấu hiệu của prompt failure: model tự lấp chỗ trống, và cách sửa nằm ở prompt, không phải ở model. Retrieval không giải quyết được định dạng output mơ hồ, model lớn hơn vẫn phải đoán định dạng, và input cũng không hề thay đổi.",
    "source": "output_2/06_AB_Testing_and_Observability.md"
  },
  {
    "id": 53,
    "topic": "Developer Productivity & Operational Enablement (7%)",
    "objective": "Configure Claude tools and environments for teams (e.g., Claude Code)",
    "lessonId": "d7-t1",
    "question": "A logistics software vendor has three SaaS products that must all call the same shipment-document classification capability from their backend services. A silent behavior change last quarter broke one product's parsing, so engineering now insists that each product controls exactly which version it runs. No humans invoke the capability directly. Which mechanism should the Architect choose?",
    "question_vi": "Một nhà cung cấp phần mềm logistics có ba sản phẩm SaaS đều phải gọi cùng một năng lực phân loại chứng từ vận chuyển từ các dịch vụ backend. Một thay đổi hành vi âm thầm quý trước đã làm hỏng phần parsing của một sản phẩm, nên bộ phận kỹ thuật giờ yêu cầu mỗi sản phẩm kiểm soát chính xác phiên bản mà nó chạy. Không có con người nào gọi năng lực này trực tiếp. Architect nên chọn cơ chế nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "A Claude Code project Skill committed to each product's repository and updated by pull request.",
        "text_vi": "Một Claude Code project Skill commit vào repository của từng sản phẩm và cập nhật qua pull request."
      },
      {
        "key": "B",
        "text": "An API Skill called through the Messages API, with each product pinning an explicit Skill version.",
        "text_vi": "Một API Skill được gọi qua Messages API, mỗi sản phẩm pin một phiên bản Skill tường minh."
      },
      {
        "key": "C",
        "text": "An org-provisioned Skill so that all three product teams share one centrally uploaded copy.",
        "text_vi": "Một org-provisioned Skill để cả ba team sản phẩm dùng chung một bản được upload tập trung."
      },
      {
        "key": "D",
        "text": "An organization-managed plugin assigned to the three product engineering groups with version-controlled updates.",
        "text_vi": "Một organization-managed plugin gán cho ba nhóm kỹ thuật sản phẩm với cập nhật có kiểm soát phiên bản."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "The consumers are software products calling the capability machine to machine, and API Skills are governed in the calling system with explicit version pinning, which directly addresses the silent behavior change. Plugins and org-provisioned Skills target humans using Claude, and project Skills are a Claude Code developer asset rather than a runtime capability for backend services.",
    "explanation_vi": "Người tiêu thụ là các sản phẩm phần mềm gọi năng lực theo kiểu machine-to-machine, và API Skill được quản trị trong hệ thống gọi với explicit version pinning, giải quyết trực tiếp vấn đề thay đổi hành vi âm thầm. Plugin và org-provisioned Skill hướng tới con người dùng Claude, còn project Skill là tài sản của developer trong Claude Code chứ không phải năng lực runtime cho dịch vụ backend.",
    "source": "output_5/02_Team_Setup_and_Environment.md"
  },
  {
    "id": 54,
    "topic": "Governance, Safety & Risk Management (14%)",
    "objective": "Implement guardrails and safety controls",
    "lessonId": "d5-t1",
    "question": "An insurer is launching a Claude assistant for policyholders. Compliance requires that it only discusses approved products and never promises a specific payout amount. The development lead proposes writing both rules into the system prompt and shipping, arguing that Claude follows instructions well and already refused every harmful test prompt. As the architect, what is the most accurate assessment?",
    "question_vi": "Một công ty bảo hiểm sắp ra mắt trợ lý Claude cho chủ hợp đồng. Bộ phận compliance yêu cầu trợ lý chỉ bàn về sản phẩm đã được phê duyệt và không bao giờ hứa một mức chi trả cụ thể. Trưởng nhóm phát triển đề xuất ghi cả hai quy tắc vào system prompt rồi phát hành, lập luận rằng Claude tuân thủ chỉ dẫn tốt và đã từ chối mọi prompt độc hại khi test. Với vai trò architect, đánh giá nào chính xác nhất?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Replace the system prompt with a fine-tuned model so the rules are learned rather than instructed.",
        "text_vi": "Thay system prompt bằng một model fine-tune để quy tắc được học thay vì được chỉ dẫn."
      },
      {
        "key": "B",
        "text": "Unnecessary, because trained refusals already block financial promises that could mislead customers.",
        "text_vi": "Không cần thiết, vì các refusal đã được huấn luyện vốn chặn những lời hứa tài chính có thể gây hiểu lầm."
      },
      {
        "key": "C",
        "text": "The prompt steers behavior, but these domain rules need runtime controls such as policy-based output screening.",
        "text_vi": "Prompt định hướng hành vi, nhưng các quy tắc domain này cần runtime control như output screening theo policy."
      },
      {
        "key": "D",
        "text": "Sufficient, because Claude's constitution already prioritizes guideline compliance over helpfulness.",
        "text_vi": "Đủ, vì constitution của Claude đã ưu tiên tuân thủ guidelines hơn sự hữu ích."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Approved-product scope and no-payout promises are deployment-specific rules that training never saw, and instructions are not enforcement; they must be paired with runtime controls such as screening and review. The constitution's priority order and trained refusals cover broad harm, not this insurer's product policy. Fine-tuning is still trained behavior and does not provide an auditable runtime control.",
    "explanation_vi": "Phạm vi sản phẩm được duyệt và việc không hứa mức chi trả là quy tắc riêng của deployment mà training chưa từng thấy, và chỉ dẫn không phải là enforcement; chúng phải được ghép với runtime control như screening và review. Thứ tự ưu tiên của constitution và các refusal đã huấn luyện bao phủ tác hại phổ quát, không phải chính sách sản phẩm của công ty bảo hiểm này. Fine-tune vẫn là trained behavior và không tạo ra runtime control có thể audit.",
    "source": "output_3/02_Alignment_and_Responsibility.md"
  },
  {
    "id": 55,
    "topic": "Governance, Safety & Risk Management (14%)",
    "objective": "Implement guardrails and safety controls",
    "lessonId": "d5-t1",
    "question": "A cybersecurity training platform built on the Messages API sometimes receives stop_reason refusal mid-conversation. The current handler shows a generic error and immediately resends the same conversation, which produces further refusals and frustrated users. Some deployed models return stop_details and some do not. How should the handler be redesigned?",
    "question_vi": "Một nền tảng đào tạo an ninh mạng xây trên Messages API đôi khi nhận stop_reason refusal giữa hội thoại. Handler hiện tại hiển thị lỗi chung rồi gửi lại ngay cùng cuộc hội thoại đó, dẫn tới thêm refusal và người dùng bực bội. Một số model đang dùng trả về stop_details, một số thì không. Handler nên được thiết kế lại thế nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Append a clarifying message to the same history explaining the educational purpose, then resend.",
        "text_vi": "Thêm một tin nhắn giải thích mục đích giáo dục vào cùng lịch sử đó, rồi gửi lại."
      },
      {
        "key": "B",
        "text": "Hardcode today's refusal categories in a switch statement and resend the turn once per category.",
        "text_vi": "Hardcode các category refusal hiện nay trong một câu lệnh switch và gửi lại lượt đó một lần cho mỗi category."
      },
      {
        "key": "C",
        "text": "Treat every refusal as a server fault, return HTTP 500 and let the client retry with backoff.",
        "text_vi": "Coi mọi refusal là lỗi máy chủ, trả HTTP 500 và để client retry với backoff."
      },
      {
        "key": "D",
        "text": "Route by the stop_details category when present, fall back to generic handling, and reset the refused turn.",
        "text_vi": "Định tuyến theo category trong stop_details khi có, fallback về xử lý chung, và reset lượt bị refuse."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "The course says to read the category and route refusal classes differently, tolerate an absent stop_details object, and reset or rephrase the refused turn because continuing on the same refused context returns more refusals. Hardcoding the category list is discouraged since it changes over time. Treating refusals as server errors or appending to the same refused history keeps the failure going.",
    "explanation_vi": "Khóa học yêu cầu đọc category và định tuyến các loại refusal khác nhau, chịu được trường hợp thiếu object stop_details, và reset hoặc viết lại lượt bị refuse vì tiếp tục trên cùng context đã bị refuse sẽ nhận thêm refusal. Hardcode danh sách category không được khuyến khích vì danh sách thay đổi theo thời gian. Coi refusal là lỗi máy chủ hay thêm tin nhắn vào cùng lịch sử đã bị refuse chỉ kéo dài lỗi.",
    "source": "output_3/03_Guardrails_and_Failure_Modes.md"
  },
  {
    "id": 56,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "objective": "Support lifecycle phases (discovery, design, handoff, monitoring, iteration)",
    "lessonId": "d6-t5",
    "question": "In a design review for a veterinary-clinic chain's records assistant, the finance director challenges a mandatory vet-authorization step that adds staff time: 'Why is this in the design at all?' The step came from a discovery statement that prescriptions must be signed by a licensed vet. What should the Architect point to?",
    "question_vi": "Trong buổi review thiết kế cho trợ lý hồ sơ của một chuỗi phòng khám thú y, giám đốc tài chính chất vấn bước phê duyệt bắt buộc của bác sĩ thú y làm tăng thời gian của nhân viên: 'Sao bước này lại có trong thiết kế?' Bước này xuất phát từ một phát biểu trong discovery rằng đơn thuốc phải được bác sĩ thú y có giấy phép ký. Architect nên dẫn chiếu điều gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "The translation-table row linking the stakeholder statement to the constraint and the design decision it forced.",
        "text_vi": "Hàng trong translation table liên kết câu nói của stakeholder với constraint và quyết định thiết kế mà nó buộc phải có."
      },
      {
        "key": "B",
        "text": "Industry best practice, which recommends human review for any AI-generated medical content.",
        "text_vi": "Thực hành tốt nhất trong ngành, khuyến nghị con người review mọi nội dung y tế do AI tạo ra."
      },
      {
        "key": "C",
        "text": "The model's eval results, which show the assistant is not yet accurate enough to work unsupervised.",
        "text_vi": "Kết quả eval của model, cho thấy trợ lý chưa đủ chính xác để hoạt động không có giám sát."
      },
      {
        "key": "D",
        "text": "The Architect's professional judgment that oversight improves trust in early deployments.",
        "text_vi": "Phán đoán chuyên môn của Architect rằng giám sát giúp tăng niềm tin trong các đợt triển khai đầu."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "The lifecycle phases chain together: the constraint set from discovery is what the design and tradeoff presentation defend, and the translation table lets every design decision trace back to the business case rather than to preference. Industry practice and the Architect's judgment are not this stakeholder's requirement. Eval results are relevant to quality, but the step exists because of a legal authorization constraint, not accuracy.",
    "explanation_vi": "Các pha vòng đời nối tiếp nhau: bộ constraint từ discovery là thứ mà thiết kế và bài trình bày tradeoff bảo vệ, và translation table giúp mọi quyết định thiết kế truy về business case thay vì sở thích. Thực hành ngành và phán đoán của Architect không phải requirement của stakeholder này. Kết quả eval liên quan đến chất lượng, nhưng bước này tồn tại vì một constraint phê duyệt theo luật, không phải vì độ chính xác.",
    "source": "output_4/01_Module_Introduction.md"
  },
  {
    "id": 57,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "objective": "Implement prompt reuse strategies (caching, modular prompts, Skills)",
    "lessonId": "d2-t5",
    "question": "A SaaS platform's agent sends 30 tool definitions, a stable system prompt and then the conversation. Caching is enabled with a breakpoint after the system prompt, yet cache reads are rare. Investigation shows the service builds the tools array from a hash map, so tool order differs between requests. What should be fixed?",
    "question_vi": "Agent của một nền tảng SaaS gửi 30 định nghĩa tool, một system prompt ổn định và sau đó là hội thoại. Caching đã được bật với breakpoint sau system prompt, nhưng hiếm khi có cache read. Điều tra cho thấy dịch vụ dựng mảng tools từ một hash map, nên thứ tự tool khác nhau giữa các request. Cần sửa điều gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Reduce the number of tools to five so ordering differences matter less to the cache.",
        "text_vi": "Giảm số tool xuống năm để khác biệt thứ tự ít ảnh hưởng tới cache hơn."
      },
      {
        "key": "B",
        "text": "Serialize the tool definitions in a fixed, deterministic order so the prefix is byte-identical.",
        "text_vi": "Tuần tự hóa định nghĩa tool theo một thứ tự cố định, tất định để prefix giống hệt từng byte."
      },
      {
        "key": "C",
        "text": "Move the breakpoint before the tools so that only the conversation is cached.",
        "text_vi": "Chuyển breakpoint lên trước tools để chỉ hội thoại được cache."
      },
      {
        "key": "D",
        "text": "Switch to a longer TTL so that differently ordered prefixes remain in the cache longer and can hit.",
        "text_vi": "Chuyển sang TTL dài hơn để các prefix có thứ tự khác nhau tồn tại lâu hơn trong cache và có thể hit."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "The cached prefix follows the order tools, then system, then messages, and a later call hits only if that prefix is byte-identical; reordering tool definitions is one of the small changes the course names as causing a miss. Moving the breakpoint would forfeit caching of the stable content, fewer tools still produce varying order, and a longer TTL keeps entries that will never be matched.",
    "explanation_vi": "Prefix được cache theo thứ tự tools, rồi system, rồi messages, và một lời gọi sau chỉ hit nếu prefix đó giống hệt từng byte; đảo thứ tự định nghĩa tool là một trong những thay đổi nhỏ mà course nêu là gây miss. Chuyển breakpoint sẽ đánh mất việc cache phần nội dung ổn định, ít tool hơn vẫn có thứ tự thay đổi, và TTL dài hơn chỉ giữ lại các mục sẽ không bao giờ được khớp.",
    "source": "output/09_Prompting_as_Architecture.md"
  },
  {
    "id": 58,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Select appropriate architectural patterns (workflow, agentic, augmented LLM)",
    "lessonId": "d1-t3",
    "question": "A helpdesk platform needs a one-paragraph summary of each incoming ticket, shown to agents in under one second. Volume is about two million tickets per day, and every summary is validated against a fixed JSON schema before display. The task is well defined and has no branching steps. Which pattern is most appropriate?",
    "question_vi": "Một nền tảng helpdesk cần một đoạn tóm tắt cho mỗi ticket đến, hiển thị cho nhân viên trong dưới một giây. Volume khoảng hai triệu ticket mỗi ngày, và mỗi bản tóm tắt được validate theo một JSON schema cố định trước khi hiển thị. Tác vụ được xác định rõ và không có bước rẽ nhánh. Pattern nào phù hợp nhất?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "A multi-agent fan-out where separate subagents summarize the subject, the body and the attachments of each ticket.",
        "text_vi": "Một multi-agent fan-out trong đó các subagent riêng tóm tắt tiêu đề, nội dung và tệp đính kèm của mỗi ticket."
      },
      {
        "key": "B",
        "text": "An agent that decides how much of the ticket history to read before writing each summary for the support agent.",
        "text_vi": "Một agent tự quyết đọc bao nhiêu lịch sử ticket trước khi viết mỗi bản tóm tắt cho nhân viên hỗ trợ."
      },
      {
        "key": "C",
        "text": "An augmented LLM: one bounded call with structured output, validated against the schema before display.",
        "text_vi": "Augmented LLM: một lời gọi có giới hạn với structured output, được validate theo schema trước khi hiển thị."
      },
      {
        "key": "D",
        "text": "An evaluator-optimizer loop applied to every ticket, so each summary is graded and rewritten before display.",
        "text_vi": "Một vòng evaluator-optimizer áp dụng cho mọi ticket, để mỗi bản tóm tắt được chấm và viết lại trước khi hiển thị."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "A well-defined task with verifiable output, a tight latency budget and very high volume points to the pattern with the fewest tokens and fastest path: a single bounded call. An agent adds open-ended runtime, an evaluator loop on every ticket roughly doubles cost and latency without evidence it is needed, and a multi-agent fan-out multiplies token spend for work that fits in one context.",
    "explanation_vi": "Tác vụ được xác định rõ với output kiểm chứng được, ngân sách latency chặt và volume rất lớn chỉ tới pattern ít token và nhanh nhất: một lời gọi có giới hạn. Agent thêm runtime mở, vòng evaluator cho mọi ticket gần như nhân đôi chi phí và latency mà không có bằng chứng cần thiết, còn multi-agent fan-out nhân chi phí token cho công việc vừa trong một context.",
    "source": "output/05_Pattern_Selection.md"
  },
  {
    "id": 59,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "objective": "Support lifecycle phases (discovery, design, handoff, monitoring, iteration)",
    "lessonId": "d6-t5",
    "question": "The project plan for a regional bank's complaints assistant schedules handoff to the internal team on 30 June, and the consulting contract ends that day. On 20 June, a dry run shows that an engineer who was not on the project cannot work out which context-strategy decisions are load-bearing for compliance. What should happen?",
    "question_vi": "Kế hoạch dự án cho trợ lý xử lý khiếu nại của một ngân hàng khu vực lên lịch bàn giao cho đội nội bộ vào ngày 30/6, và hợp đồng tư vấn kết thúc vào ngày đó. Ngày 20/6, một buổi chạy thử cho thấy một kỹ sư không tham gia dự án không xác định được quyết định context strategy nào là load-bearing cho compliance. Điều gì nên xảy ra?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Hand off on 30 June as planned, since the date was agreed with the sponsor at project start.",
        "text_vi": "Bàn giao vào 30/6 như kế hoạch, vì ngày này đã được thống nhất với sponsor từ đầu dự án."
      },
      {
        "key": "B",
        "text": "Add more diagrams to the package so that the engineer can see the structure of each context strategy.",
        "text_vi": "Thêm diagram vào gói để kỹ sư thấy cấu trúc của từng context strategy."
      },
      {
        "key": "C",
        "text": "Hand off on schedule and offer the internal team a paid support period for questions afterwards.",
        "text_vi": "Bàn giao đúng lịch và cung cấp cho đội nội bộ một giai đoạn hỗ trợ có phí để hỏi đáp sau đó."
      },
      {
        "key": "D",
        "text": "Treat the handoff gate as unmet; complete the decision log and rationale before handoff, and raise the timing tradeoff with the sponsor.",
        "text_vi": "Coi gate bàn giao là chưa đạt; hoàn thiện decision log và lý do trước khi bàn giao, và nêu tradeoff về thời gian với sponsor."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Phase gates are artifacts, not dates: the handoff gate is passing the completeness test, which the dry run failed, so the rationale must be completed and the schedule tradeoff surfaced to the sponsor. Handing off on the date carries the documentation gap into production, and post-handoff support depends on people who are leaving. More diagrams show what, not why a decision is load-bearing.",
    "explanation_vi": "Gate là artifact, không phải ngày tháng: gate bàn giao là vượt qua completeness test, điều mà buổi chạy thử đã không đạt, nên phải hoàn thiện lý do và nêu tradeoff về lịch với sponsor. Bàn giao đúng ngày mang khoảng trống tài liệu vào production, và hỗ trợ sau bàn giao phụ thuộc vào những người sắp rời đi. Thêm diagram chỉ cho thấy cái gì, không cho thấy vì sao một quyết định là load-bearing.",
    "source": "output_4/10_Supplement_SLOs_Expectations_Handoff_and_Rollout.md"
  },
  {
    "id": 60,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "objective": "Implement prompt reuse strategies (caching, modular prompts, Skills)",
    "lessonId": "d2-t5",
    "question": "A law firm's research assistant sends tool definitions (stable for months), a system prompt (changed quarterly), a 50,000-token practice-area handbook (updated weekly), and then the conversation. With a single breakpoint after the handbook, every weekly update forces a full rewrite of the whole prefix. How should caching be structured?",
    "question_vi": "Trợ lý nghiên cứu của một công ty luật gửi định nghĩa tool (ổn định nhiều tháng), system prompt (thay đổi hằng quý), một sổ tay lĩnh vực hành nghề 50.000 token (cập nhật hằng tuần), rồi đến hội thoại. Với một breakpoint duy nhất sau sổ tay, mỗi lần cập nhật hằng tuần buộc phải ghi lại toàn bộ prefix. Caching nên được cấu trúc thế nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Use layered breakpoints at the tools, system prompt and handbook boundaries, most stable first.",
        "text_vi": "Dùng các breakpoint nhiều tầng ở ranh giới tools, system prompt và sổ tay, phần ổn định nhất đứng trước."
      },
      {
        "key": "B",
        "text": "Place the handbook first, before the tools and system prompt, since it is the largest block to cache.",
        "text_vi": "Đặt sổ tay lên đầu, trước tools và system prompt, vì nó là khối lớn nhất cần cache."
      },
      {
        "key": "C",
        "text": "Remove the handbook from the prompt and paste relevant passages into each user message.",
        "text_vi": "Gỡ sổ tay khỏi prompt và dán các đoạn liên quan vào mỗi tin nhắn người dùng."
      },
      {
        "key": "D",
        "text": "Cache only the conversation, since it is the part of the prompt that grows each turn.",
        "text_vi": "Chỉ cache hội thoại, vì đó là phần của prompt tăng lên sau mỗi lượt."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Multiple breakpoints allow layered caching in the order tools, system prompt, large reference document, then conversation, so a change in a later layer does not invalidate the more stable layers before it. Pasting passages per message loses the cacheable reference block, putting the most frequently changing block first invalidates everything after it on each update, and the conversation is the dynamic content that belongs after the breakpoints.",
    "explanation_vi": "Nhiều breakpoint cho phép cache theo tầng theo thứ tự tools, system prompt, tài liệu tham chiếu lớn, rồi đến hội thoại, nên thay đổi ở tầng sau không làm vô hiệu các tầng ổn định hơn đứng trước. Dán đoạn trích theo từng tin nhắn làm mất khối tham chiếu có thể cache, đặt khối thay đổi thường xuyên nhất lên đầu sẽ vô hiệu mọi thứ phía sau ở mỗi lần cập nhật, còn hội thoại là nội dung động thuộc về phía sau các breakpoint.",
    "source": "output/09_Prompting_as_Architecture.md"
  },
  {
    "id": 61,
    "topic": "Governance, Safety & Risk Management (14%)",
    "objective": "Implement guardrails and safety controls",
    "lessonId": "d5-t1",
    "question": "A regional bank's proposed branch assistant routes every customer interaction through a compliance-checking subagent before a reply is shown. The subagent has its own system prompt listing KYC and disclosure rules. Regulators will examine how compliance is guaranteed and audited. What is the main weakness of this design?",
    "question_vi": "Trợ lý chi nhánh được đề xuất của một ngân hàng khu vực đưa mọi tương tác khách hàng qua một subagent kiểm tra compliance trước khi hiển thị câu trả lời. Subagent có system prompt riêng liệt kê các quy tắc KYC và công bố thông tin. Cơ quan quản lý sẽ xem xét compliance được đảm bảo và audit thế nào. Điểm yếu chính của thiết kế này là gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "The subagent adds token cost and latency to every interaction without improving accuracy.",
        "text_vi": "Subagent thêm chi phí token và độ trễ cho mọi tương tác mà không cải thiện độ chính xác."
      },
      {
        "key": "B",
        "text": "The highest-consequence path relies on a probabilistic agent instead of deterministic server-side code.",
        "text_vi": "Đường có hậu quả cao nhất dựa vào một agent xác suất thay vì code server-side deterministic."
      },
      {
        "key": "C",
        "text": "The subagent should run on a smaller model so that compliance checks complete faster.",
        "text_vi": "Subagent nên chạy trên model nhỏ hơn để kiểm tra compliance hoàn tất nhanh hơn."
      },
      {
        "key": "D",
        "text": "The subagent's system prompt will become too long as regulations change over time.",
        "text_vi": "System prompt của subagent sẽ trở nên quá dài khi quy định thay đổi theo thời gian."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "In the course's bank case, compliance was assigned to the mechanism with the weakest deterministic guarantees; it belongs in deterministic server-side code with tool calls audited at the server boundary. Cost, latency and prompt length are secondary concerns that do not address auditability. A smaller model keeps the same probabilistic weakness.",
    "explanation_vi": "Trong ca ngân hàng của khóa học, compliance bị giao cho cơ chế có đảm bảo deterministic yếu nhất; nó phải nằm trong code server-side deterministic với tool call được audit tại ranh giới server. Chi phí, độ trễ và độ dài prompt là mối lo thứ yếu, không giải quyết khả năng audit. Model nhỏ hơn vẫn giữ nguyên điểm yếu mang tính xác suất.",
    "source": "output/10_Entry_Points_Governance.md"
  },
  {
    "id": 62,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Design evaluation datasets and test frameworks using mixed methodologies",
    "lessonId": "d4-t2",
    "question": "A telco uses an LLM judge to rate the helpfulness of support answers on a 1 to 10 scale. Re-running the judge on the same outputs shifts many scores by two or three points, making release comparisons unreliable, and nobody can tell why a given answer received its score. Which redesign of the judge best addresses this?",
    "question_vi": "Một nhà mạng dùng LLM judge chấm mức độ hữu ích của câu trả lời hỗ trợ theo thang 1 đến 10. Chạy lại judge trên cùng output làm nhiều điểm lệch hai đến ba điểm, khiến việc so sánh giữa các lần phát hành không đáng tin cậy, và không ai biết vì sao một câu trả lời nhận được điểm đó. Thiết kế lại judge nào giải quyết tốt nhất vấn đề này?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Average three runs of the same 1 to 10 prompt",
        "text_vi": "Lấy trung bình ba lần chạy của cùng prompt chấm 1 đến 10"
      },
      {
        "key": "B",
        "text": "Switch to a 1 to 100 scale to capture finer differences",
        "text_vi": "Chuyển sang thang 1 đến 100 để nắm bắt khác biệt tinh hơn"
      },
      {
        "key": "C",
        "text": "A detailed rubric, a small fixed set of verdict labels, and reasoning required with each verdict",
        "text_vi": "Rubric chi tiết, một tập nhỏ nhãn phán quyết cố định và yêu cầu lập luận kèm mỗi phán quyết"
      },
      {
        "key": "D",
        "text": "Use the production support model as judge for consistency",
        "text_vi": "Dùng chính model hỗ trợ production làm judge để nhất quán"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "The course makes judges rigorous with detailed rubrics, constrained verdicts from a small fixed label set instead of free-form scores, and reasoning alongside each score so inconsistency becomes detectable. Averaging runs masks rather than removes the instability, a finer scale increases free-form variance, and grading with the production model introduces self-preference.",
    "explanation_vi": "Khóa học làm judge nghiêm ngặt bằng rubric chi tiết, constrained verdict từ một tập nhãn nhỏ cố định thay vì điểm tự do, và lập luận đi kèm mỗi điểm để có thể phát hiện thiếu nhất quán. Lấy trung bình các lần chạy chỉ che chứ không loại bỏ sự bất ổn, thang chi tiết hơn làm tăng dao động của điểm tự do, còn chấm bằng model production gây self-preference.",
    "source": "output_2/02_Evals_as_Acceptance_Criteria.md"
  },
  {
    "id": 63,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "objective": "Support lifecycle phases (discovery, design, handoff, monitoring, iteration)",
    "lessonId": "d6-t5",
    "question": "A freight forwarder has completed its translation table, but two assumptions remain unconfirmed: who owns the customs-routing rules, and whether a data-protection obligation covers shipper contact details. The team is eager to start detailed design now. What is the most appropriate way to handle the move from discovery to design?",
    "question_vi": "Một công ty giao nhận hàng hóa đã hoàn thành translation table, nhưng còn hai assumption chưa được xác nhận: ai sở hữu quy tắc routing hải quan, và liệu một nghĩa vụ bảo vệ dữ liệu có áp dụng cho thông tin liên hệ của người gửi hàng không. Đội muốn bắt đầu thiết kế chi tiết ngay. Cách phù hợp nhất để xử lý việc chuyển từ discovery sang design là gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Start full detailed design now; the assumptions can be confirmed during build when more is known.",
        "text_vi": "Bắt đầu thiết kế chi tiết toàn bộ ngay; các assumption có thể được xác nhận trong lúc build khi biết nhiều hơn."
      },
      {
        "key": "B",
        "text": "Remove the two assumptions from the documents to avoid alarming the sponsor before design starts.",
        "text_vi": "Xóa hai assumption khỏi tài liệu để tránh làm sponsor lo lắng trước khi bắt đầu thiết kế."
      },
      {
        "key": "C",
        "text": "Halt all work until both assumptions are confirmed, even parts of the design that do not depend on them.",
        "text_vi": "Dừng mọi công việc cho đến khi cả hai assumption được xác nhận, kể cả các phần thiết kế không phụ thuộc vào chúng."
      },
      {
        "key": "D",
        "text": "Design the independent parts while keeping both assumptions labeled with owners and confirmation criteria before dependent decisions close.",
        "text_vi": "Thiết kế các phần độc lập trong khi giữ hai assumption được gắn nhãn kèm owner và tiêu chí xác nhận trước khi chốt các quyết định phụ thuộc."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "The discovery gate asks whether assumptions are labeled and owned; work that does not depend on them can proceed, but decisions that do should wait for confirmation so the design does not inherit unverified assumptions. Starting everything lets assumptions silently become facts, and deleting them creates unsourced assumptions. Halting independent work is an unnecessary delay.",
    "explanation_vi": "Gate của discovery hỏi liệu assumption đã được gắn nhãn và có owner chưa; công việc không phụ thuộc vào chúng có thể tiến hành, nhưng các quyết định phụ thuộc nên chờ xác nhận để thiết kế không thừa hưởng assumption chưa kiểm chứng. Bắt đầu mọi thứ khiến assumption âm thầm thành sự thật, và xóa chúng tạo ra assumption không có nguồn. Dừng công việc độc lập là trì hoãn không cần thiết.",
    "source": "output_4/01_Module_Introduction.md"
  }
];
