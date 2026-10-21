window.QUIZ_DATA_CCARP_SET_8 = [
  {
    "id": 1,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Translate business problems into Claude-based AI solutions",
    "lessonId": "d1-t1",
    "question": "A city permitting office says its new assistant 'just needs to read each application form and send it to the right department'. Department assignment today follows a published matrix maintained by the operations team, and misrouted permits must be explainable to auditors. Which design decision best reflects this statement?",
    "question_vi": "Văn phòng cấp phép của một thành phố nói trợ lý mới 'chỉ cần đọc từng đơn đăng ký và gửi đến đúng phòng ban'. Hiện nay việc phân phòng ban theo một ma trận đã công bố do đội vận hành duy trì, và các giấy phép bị chuyển sai phải giải thích được với auditor. Quyết định thiết kế nào phản ánh tốt nhất phát biểu này?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Claude extracts the fields; routing stays in a rule engine owned by operations, with that ownership logged as an assumption to confirm.",
        "text_vi": "Claude trích xuất các trường; routing nằm trong rule engine do đội vận hành sở hữu, với quyền sở hữu đó được ghi thành assumption cần xác nhận."
      },
      {
        "key": "B",
        "text": "Defer routing to a later phase and deliver only field extraction in the first release.",
        "text_vi": "Hoãn routing sang giai đoạn sau và chỉ giao phần trích xuất trường trong bản phát hành đầu."
      },
      {
        "key": "C",
        "text": "Claude both extracts the fields and chooses the department, since a single component is simpler to deploy, cheaper to run and easier to explain to operations.",
        "text_vi": "Claude vừa trích xuất trường vừa chọn phòng ban, vì một thành phần duy nhất dễ triển khai hơn, rẻ hơn khi vận hành và dễ giải thích với đội vận hành hơn."
      },
      {
        "key": "D",
        "text": "Fine-tune a model on past routing decisions so it learns the matrix and routes without an external lookup.",
        "text_vi": "Fine-tune một model trên các quyết định routing trước đây để nó học ma trận và route mà không cần tra cứu bên ngoài."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "'Read the form and route it' hides a deterministic business rule, so the pattern is that Claude extracts and the system routes, with the routing owner recorded as an assumption to confirm. Letting the model choose the department puts a rule into a probabilistic, hard-to-audit component, fine-tuning adds complexity without resolving ownership, and dropping routing ignores part of the must-do scope.",
    "explanation_vi": "'Đọc đơn và chuyển đi' che giấu một quy tắc nghiệp vụ deterministic, nên mẫu đúng là Claude trích xuất và hệ thống route, với owner của routing được ghi thành assumption cần xác nhận. Để model chọn phòng ban là đưa quy tắc vào một thành phần xác suất, khó audit; fine-tuning thêm phức tạp mà không giải quyết quyền sở hữu; còn bỏ routing là bỏ qua một phần phạm vi must-do.",
    "source": "output_4/02_Discovery_and_Scoping.md"
  },
  {
    "id": 2,
    "topic": "Integration (19%)",
    "objective": "Evaluate progressive discovery vs. monolithic context strategy",
    "lessonId": "d3-t8",
    "question": "A team adopts progressive discovery for a library of 300 internal procedures and sees fewer tokens per request. A month later users report that the assistant sometimes ignores a relevant procedure that clearly exists. What does the course suggest is the likeliest cause and the remedy?",
    "question_vi": "Một đội áp dụng progressive discovery cho thư viện 300 quy trình nội bộ và thấy ít token hơn mỗi request. Một tháng sau người dùng báo trợ lý đôi khi bỏ qua một quy trình liên quan rõ ràng đang tồn tại. Khóa học gợi ý nguyên nhân khả dĩ nhất và biện pháp là gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Progressive discovery is inherently unreliable; return to loading all 300 procedures every time, configured once and applied across every environment.",
        "text_vi": "Progressive discovery vốn không đáng tin cậy; quay lại nạp cả 300 quy trình mọi lần, cấu hình một lần và áp dụng cho mọi môi trường."
      },
      {
        "key": "B",
        "text": "The discovery step is missing items, often because of weak descriptions or metadata; evaluate the discovery step itself and improve descriptions.",
        "text_vi": "Bước khám phá bỏ sót mục, thường do mô tả hoặc metadata yếu; eval chính bước khám phá và cải thiện mô tả."
      },
      {
        "key": "C",
        "text": "The model has forgotten the procedures; retrain it periodically on the library, with the change documented in the team's runbook.",
        "text_vi": "Model đã quên các quy trình; huấn luyện lại định kỳ trên thư viện, với thay đổi được ghi lại trong runbook của đội."
      },
      {
        "key": "D",
        "text": "The context window is too small; request a larger window from the provider, using the existing tooling and no additional approvals.",
        "text_vi": "Context window quá nhỏ; yêu cầu nhà cung cấp cung cấp cửa sổ lớn hơn, dùng công cụ hiện có và không cần thêm phê duyệt."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Progressive discovery adds a step that depends on the quality of descriptions and metadata and risks missing something when discovery fails, so the discovery step needs its own eval and better descriptions. Reverting to loading everything gives up the benefits and reintroduces bloat. The model has no memory of the library to forget, and window size is not the issue when little is loaded.",
    "explanation_vi": "Progressive discovery thêm một bước phụ thuộc vào chất lượng mô tả và metadata và có rủi ro bỏ sót khi khám phá thất bại, nên bước khám phá cần eval riêng và mô tả tốt hơn. Quay lại nạp tất cả là từ bỏ lợi ích và đưa bloat quay lại. Model không có ký ức về thư viện để quên, và kích thước cửa sổ không phải vấn đề khi chỉ nạp ít.",
    "source": "output_2/09_Supplement_Integration_Mechanisms_and_Optimization.md"
  },
  {
    "id": 3,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "objective": "Apply prompt engineering techniques (zero-shot, few-shot, chain-of-thought)",
    "lessonId": "d2-t3",
    "question": "A freight forwarder is adding few-shot examples to a bill-of-lading extraction prompt. Real documents vary: scanned and digital, single and multiple consignees, different currencies. An engineer proposes 30 examples, all clean digital documents from the largest carrier, because they are easiest to label. What should the architect recommend?",
    "question_vi": "Một công ty giao nhận đang thêm ví dụ few-shot vào prompt trích xuất vận đơn. Tài liệu thực tế đa dạng: bản scan và bản số, một hay nhiều người nhận hàng, nhiều loại tiền tệ khác nhau. Một kỹ sư đề xuất 30 ví dụ, tất cả là tài liệu số sạch từ hãng vận chuyển lớn nhất, vì chúng dễ gán nhãn nhất. Architect nên khuyến nghị gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Use the 30 examples but move them to the end of the prompt, after the document.",
        "text_vi": "Dùng 30 ví dụ nhưng chuyển chúng xuống cuối prompt, sau tài liệu."
      },
      {
        "key": "B",
        "text": "Use one clean example only, since a single demonstration is enough to show the format.",
        "text_vi": "Chỉ dùng một ví dụ sạch, vì một minh họa là đủ để thể hiện định dạng."
      },
      {
        "key": "C",
        "text": "Use a handful of diverse examples that cover the real variants seen in production.",
        "text_vi": "Dùng một vài ví dụ đa dạng bao phủ các biến thể thực tế gặp trong production."
      },
      {
        "key": "D",
        "text": "Use all 30 examples, since more demonstrations always improve extraction accuracy.",
        "text_vi": "Dùng cả 30 ví dụ, vì nhiều minh họa hơn luôn cải thiện độ chính xác trích xuất."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Good few-shot uses a small number of diverse examples (the course suggests three to five) that cover the variants the system will actually see and are balanced across cases. Thirty near-identical clean documents add tokens and maintenance while teaching nothing about scans, multiple consignees or currencies, and could bias the model toward one carrier's layout. A single example cannot show the variation, and moving examples does not fix their coverage.",
    "explanation_vi": "Few-shot tốt dùng một số ít ví dụ đa dạng (course gợi ý ba đến năm) bao phủ các biến thể hệ thống sẽ thực sự gặp và cân bằng giữa các trường hợp. Ba mươi tài liệu sạch gần như giống nhau làm tăng token và công bảo trì mà không dạy gì về bản scan, nhiều người nhận hàng hay tiền tệ, và có thể khiến model thiên về bố cục của một hãng. Một ví dụ duy nhất không thể thể hiện sự đa dạng, và chuyển vị trí ví dụ không sửa được độ bao phủ.",
    "source": "output/09_Prompting_as_Architecture.md"
  },
  {
    "id": 4,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "objective": "Manage stakeholder feedback loops and expectation alignment (including SLAs)",
    "lessonId": "d6-t3",
    "question": "A law firm's managing partner wants the contract-review assistant's service agreement to state: 'The assistant will never miss a non-standard clause.' The firm's acceptance testing used a 300-contract evaluation set, and all flagged contracts are reviewed by an associate. How should the Architect respond?",
    "question_vi": "Managing partner của một công ty luật muốn thỏa thuận dịch vụ của trợ lý rà soát hợp đồng ghi: 'Trợ lý sẽ không bao giờ bỏ sót một điều khoản bất thường.' Kiểm thử nghiệm thu của công ty dùng bộ eval 300 hợp đồng, và mọi hợp đồng được đánh dấu đều được một luật sư cộng sự xem xét. Architect nên phản hồi thế nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Agree to the wording to secure sign-off, and rely on associate review to catch any misses.",
        "text_vi": "Đồng ý với cách diễn đạt để có chữ ký, và dựa vào review của luật sư cộng sự để bắt các lỗi sót."
      },
      {
        "key": "B",
        "text": "Set the temperature to zero and state in the agreement that outputs are therefore deterministic and complete.",
        "text_vi": "Đặt temperature bằng 0 và ghi trong thỏa thuận rằng do đó output là tất định và đầy đủ."
      },
      {
        "key": "C",
        "text": "Refuse any quality commitment, since a probabilistic system cannot be held to measurable quality targets.",
        "text_vi": "Từ chối mọi cam kết chất lượng, vì một hệ thống probabilistic không thể bị ràng buộc bởi mục tiêu chất lượng đo được."
      },
      {
        "key": "D",
        "text": "Propose a recall rate on a regularly evaluated sample, tied to the acceptance criteria, with human review and a defined breach action.",
        "text_vi": "Đề xuất tỉ lệ recall trên một mẫu được đánh giá định kỳ, gắn với acceptance criteria, kèm human review và hành động xác định khi vi phạm."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "An LLM cannot honestly promise zero misses; the defensible commitment is a rate on a representative evaluated sample traced to acceptance criteria, plus the mechanism that handles the remainder and the action on breach. Agreeing to an impossible promise misaligns expectations. Refusing all quality commitments ignores a legitimate need, and lower temperature reduces variability without eliminating errors.",
    "explanation_vi": "Một LLM không thể hứa trung thực là không bao giờ bỏ sót; cam kết có thể bảo vệ được là một tỉ lệ trên mẫu đánh giá đại diện truy về acceptance criteria, cộng cơ chế xử lý phần còn lại và hành động khi vi phạm. Đồng ý với lời hứa bất khả thi làm lệch kỳ vọng. Từ chối mọi cam kết chất lượng bỏ qua một nhu cầu chính đáng, và temperature thấp hơn giảm biến thiên nhưng không loại bỏ lỗi.",
    "source": "output_4/10_Supplement_SLOs_Expectations_Handoff_and_Rollout.md"
  },
  {
    "id": 5,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "objective": "Apply prompt engineering techniques (zero-shot, few-shot, chain-of-thought)",
    "lessonId": "d2-t3",
    "question": "A pharmaceutical company's adverse-event extraction prompt was tuned on Opus. To cut cost, the team will move it to Haiku and plans to keep the prompt exactly as it is, since 'prompts are model-agnostic'. Which two actions should the architect require? (Choose TWO.)",
    "question_vi": "Prompt trích xuất biến cố bất lợi của một công ty dược được tinh chỉnh trên Opus. Để giảm chi phí, đội sẽ chuyển nó sang Haiku và dự định giữ nguyên prompt, vì 'prompt không phụ thuộc model'. Architect nên yêu cầu hai hành động nào? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "Add chain-of-thought to every extraction, since smaller models always need reasoning.",
        "text_vi": "Thêm chain-of-thought cho mọi lần trích xuất, vì model nhỏ hơn luôn cần suy luận."
      },
      {
        "key": "B",
        "text": "Compare a few outputs from both models by eye and proceed if they look similar.",
        "text_vi": "So sánh bằng mắt vài output từ hai model và tiến hành nếu chúng trông giống nhau."
      },
      {
        "key": "C",
        "text": "Treat the prompt as a starting point and re-tune it for Haiku, for example with more examples or scaffolding.",
        "text_vi": "Coi prompt là điểm khởi đầu và tinh chỉnh lại cho Haiku, ví dụ thêm ví dụ hoặc scaffolding."
      },
      {
        "key": "D",
        "text": "Gate the new prompt-model pairing with the eval set before it replaces the Opus version.",
        "text_vi": "Đặt cổng eval cho cặp prompt–model mới trước khi nó thay thế phiên bản Opus."
      },
      {
        "key": "E",
        "text": "Ship the unchanged prompt and monitor complaints from the safety team for regressions.",
        "text_vi": "Ship prompt không thay đổi và theo dõi phàn nàn từ đội an toàn để phát hiện regression."
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "explanation": "A prompt tuned for one model is a starting point for another: a less capable model may need more scaffolding, and the prompt-model pairing is what you ship, so the swap must pass the eval. Using a safety team's complaints as the detector puts users in the role of the eval, blanket chain-of-thought is a heavier technique applied without evidence, and eyeballing a few outputs is a spot check rather than an eval gate.",
    "explanation_vi": "Một prompt tinh chỉnh cho model này chỉ là điểm khởi đầu cho model khác: model yếu hơn có thể cần nhiều scaffolding hơn, và cặp prompt–model là thứ bạn ship, nên việc chuyển đổi phải qua eval. Dùng phàn nàn của đội an toàn làm công cụ phát hiện là đặt người dùng vào vai eval, thêm chain-of-thought cho mọi nơi là áp dụng kỹ thuật nặng hơn mà không có bằng chứng, còn so sánh bằng mắt vài output chỉ là spot check chứ không phải cổng eval.",
    "source": "output/09_Prompting_as_Architecture.md"
  },
  {
    "id": 6,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Design evaluation datasets and test frameworks using mixed methodologies",
    "lessonId": "d4-t2",
    "question": "A consulting firm's report generator must produce reports with specific properties. The team is sorting checks between code-based and model-based evals to keep grading cheap and reliable. Which TWO of the following checks should be implemented as code-based evals? (Choose TWO.)",
    "question_vi": "Bộ tạo báo cáo của một công ty tư vấn phải sinh báo cáo có các thuộc tính cụ thể. Team đang phân loại các kiểm tra giữa code-based eval và model-based eval để việc chấm rẻ và đáng tin cậy. HAI kiểm tra nào sau đây nên được thực hiện bằng code-based eval? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "Whether every report is valid JSON matching the output schema",
        "text_vi": "Liệu mọi báo cáo có phải JSON hợp lệ khớp với output schema không"
      },
      {
        "key": "B",
        "text": "Whether the tone suits the client's brand",
        "text_vi": "Liệu giọng văn có phù hợp với thương hiệu của khách hàng không"
      },
      {
        "key": "C",
        "text": "Whether all required sections are present: summary, methodology, findings, recommendations",
        "text_vi": "Liệu tất cả các phần bắt buộc có mặt: tóm tắt, phương pháp, kết quả, khuyến nghị"
      },
      {
        "key": "D",
        "text": "Whether the executive summary captures the most important points",
        "text_vi": "Liệu phần tóm tắt điều hành có nắm được các điểm quan trọng nhất không"
      },
      {
        "key": "E",
        "text": "Whether the analysis reasoning in the findings section is sound",
        "text_vi": "Liệu lập luận phân tích trong phần kết quả có chặt chẽ không"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "Schema validation and section presence are unambiguous checks a function can answer, so they belong in code-based evals that run in milliseconds and never drift. Soundness of reasoning, capturing the most important points and brand-appropriate tone all require interpretation and belong with a model-based judge.",
    "explanation_vi": "Validate schema và kiểm tra sự hiện diện của các phần là kiểm tra rõ ràng mà một hàm trả lời được, nên thuộc code-based eval chạy trong vài mili giây và không bao giờ drift. Độ chặt chẽ của lập luận, việc nắm các điểm quan trọng nhất và giọng văn phù hợp thương hiệu đều cần diễn giải và thuộc về judge dựa trên model.",
    "source": "output_2/02_Evals_as_Acceptance_Criteria.md"
  },
  {
    "id": 7,
    "topic": "Integration (19%)",
    "objective": "Analyze authentication and authorization requirements to identify security gaps",
    "lessonId": "d3-t2",
    "question": "A bank exposes a get_account_summary(account_id) tool to its mobile-banking assistant. The tool returns data for whatever account_id the model supplies, and the model takes the ID from the conversation. A tester asked about 'my brother's account 4471' and received its balance. Which fix addresses the gap?",
    "question_vi": "Một ngân hàng cung cấp tool get_account_summary(account_id) cho trợ lý ngân hàng di động. Tool trả dữ liệu cho bất kỳ account_id nào model cung cấp, và model lấy ID từ cuộc hội thoại. Một người kiểm thử hỏi về 'tài khoản 4471 của anh trai tôi' và nhận được số dư của tài khoản đó. Cách sửa nào xử lý lỗ hổng?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Have the tool derive or validate the account against the authenticated session's entitlements server-side.",
        "text_vi": "Để tool tự xác định hoặc kiểm tra tài khoản dựa trên quyền của phiên đã xác thực ở phía server."
      },
      {
        "key": "B",
        "text": "Instruct the assistant to refuse questions that mention other people's accounts, configured once and applied across every environment.",
        "text_vi": "Chỉ dẫn trợ lý từ chối các câu hỏi nhắc tới tài khoản của người khác, cấu hình một lần và áp dụng cho mọi môi trường."
      },
      {
        "key": "C",
        "text": "Mask all but the last four digits of balances returned for accounts the user does not own.",
        "text_vi": "Che mọi chữ số trừ bốn số cuối của số dư trả về cho các tài khoản người dùng không sở hữu."
      },
      {
        "key": "D",
        "text": "Log every account_id the model requests and alert when it differs from the user's primary account.",
        "text_vi": "Log mọi account_id mà model yêu cầu và cảnh báo khi nó khác tài khoản chính của người dùng."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Authorization must be enforced in code, and the tool should only receive or accept the user's own IDs, checked against the authenticated identity on the server. A refusal instruction relies on the model to hold the boundary. Masking still discloses other customers' data, and alerting on mismatches only detects the exposure after the balance has been returned.",
    "explanation_vi": "Phân quyền phải được thực thi trong code, và tool chỉ nên nhận hoặc chấp nhận ID của chính người dùng, được kiểm tra với danh tính đã xác thực ở server. Chỉ dẫn từ chối dựa vào model để giữ ranh giới. Che số vẫn làm lộ dữ liệu của khách hàng khác, còn cảnh báo khi không khớp chỉ phát hiện việc lộ sau khi số dư đã được trả về.",
    "source": "output/14_Supplement_Integration_Security_Observability.md"
  },
  {
    "id": 8,
    "topic": "Integration (19%)",
    "objective": "Evaluate progressive discovery vs. monolithic context strategy",
    "lessonId": "d3-t8",
    "question": "A bank's chat assistant uses a 5,000-token compliance policy that applies to nearly every request and changes about once a quarter. Engineers propose moving it into a discoverable library loaded on demand to save tokens. What is the best assessment?",
    "question_vi": "Trợ lý chat của một ngân hàng dùng một chính sách compliance 5.000 token áp dụng cho gần như mọi request và thay đổi khoảng mỗi quý một lần. Kỹ sư đề xuất chuyển nó vào một thư viện có thể khám phá và nạp theo nhu cầu để tiết kiệm token. Đánh giá tốt nhất là gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Agree: everything should be discovered on demand regardless of how often it is needed, with the results reviewed again next quarter.",
        "text_vi": "Đồng ý: mọi thứ nên được khám phá theo nhu cầu bất kể mức độ cần thiết, với kết quả được xem lại vào quý sau."
      },
      {
        "key": "B",
        "text": "Disagree: always-needed, stable content is best kept in a cached prefix, a monolithic baseline, rather than paying a discovery step.",
        "text_vi": "Không đồng ý: nội dung luôn cần và ổn định tốt nhất giữ trong prefix được cache, một baseline monolithic, thay vì trả thêm bước khám phá."
      },
      {
        "key": "C",
        "text": "Disagree: the policy should be split into one-sentence chunks and retrieved by similarity.",
        "text_vi": "Không đồng ý: chính sách nên chia thành các chunk một câu và truy xuất theo similarity."
      },
      {
        "key": "D",
        "text": "Agree, because on-demand loading is always faster than a cached prefix, in line with how the earlier pilot was handled.",
        "text_vi": "Đồng ý, vì nạp theo nhu cầu luôn nhanh hơn prefix được cache, phù hợp với cách xử lý ở giai đoạn thử nghiệm trước."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "The practical rule is that content always needed and stable goes in the prefix and is cached, while occasionally needed content is discovered on demand; a small stable policy used on most requests is the course's example for monolithic plus caching. On-demand loading adds a discovery step and the risk of missing the policy. Splitting a policy into sentences risks losing required conditions.",
    "explanation_vi": "Quy tắc thực hành là nội dung luôn cần và ổn định đặt trong prefix và được cache, còn nội dung thỉnh thoảng cần được khám phá theo nhu cầu; một chính sách nhỏ, ổn định, dùng ở hầu hết request là ví dụ của khóa học cho monolithic cộng caching. Nạp theo nhu cầu thêm bước khám phá và rủi ro bỏ sót chính sách. Chia chính sách thành từng câu có nguy cơ mất các điều kiện bắt buộc.",
    "source": "output_2/09_Supplement_Integration_Mechanisms_and_Optimization.md"
  },
  {
    "id": 9,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "objective": "Manage stakeholder feedback loops and expectation alignment (including SLAs)",
    "lessonId": "d6-t3",
    "question": "A university's internal IT helpdesk assistant answers staff questions during office hours; if it is down, staff email the helpdesk as they did before. A steering-committee member proposes a 99.99 percent availability SLA 'because that's what serious systems have.' How should the Architect set the availability threshold?",
    "question_vi": "Trợ lý helpdesk IT nội bộ của một trường đại học trả lời câu hỏi của nhân viên trong giờ hành chính; nếu nó ngừng hoạt động, nhân viên gửi email cho helpdesk như trước đây. Một thành viên ban chỉ đạo đề xuất SLA availability 99,99% 'vì các hệ thống nghiêm túc đều như vậy'. Architect nên đặt ngưỡng availability thế nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Accept 99.99 percent, since a higher commitment signals quality and costs nothing to write down.",
        "text_vi": "Chấp nhận 99,99%, vì cam kết cao hơn thể hiện chất lượng và viết ra thì không tốn gì."
      },
      {
        "key": "B",
        "text": "Avoid an availability SLA entirely, since an internal tool does not need formal commitments.",
        "text_vi": "Không đặt SLA availability nào, vì công cụ nội bộ không cần cam kết chính thức."
      },
      {
        "key": "C",
        "text": "Derive it from business criticality: an office-hours internal tool with a manual fallback warrants a lower, defensible target.",
        "text_vi": "Suy ra từ mức độ quan trọng kinh doanh: công cụ nội bộ giờ hành chính có phương án thủ công dự phòng cần mục tiêu thấp hơn, có thể bảo vệ được."
      },
      {
        "key": "D",
        "text": "Use the model provider's published availability figure, since the assistant cannot exceed it.",
        "text_vi": "Dùng con số availability do nhà cung cấp model công bố, vì trợ lý không thể vượt quá nó."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Availability should reflect how critical the deployment is to the business; a number that cannot be tied to that is just a target that sounded reasonable, and an unjustified high commitment creates breaches and cost. The provider figure is one input but not this deployment's business need. Dropping the SLA removes a commitment that keeps expectations aligned.",
    "explanation_vi": "Availability nên phản ánh mức độ quan trọng của hệ thống đối với doanh nghiệp; một con số không gắn được với điều đó chỉ là mục tiêu nghe có vẻ hợp lý, và một cam kết cao không có cơ sở sẽ tạo ra vi phạm và chi phí. Con số của nhà cung cấp là một đầu vào nhưng không phải nhu cầu kinh doanh của hệ thống này. Bỏ SLA là bỏ đi một cam kết giúp giữ kỳ vọng được căn chỉnh.",
    "source": "output_4/04_Feedback_Loops_and_SLAs.md"
  },
  {
    "id": 10,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Translate business problems into Claude-based AI solutions",
    "lessonId": "d1-t1",
    "question": "A regional hospital network asked for Claude to draft clinical notes from nurse dictation. On the first call the architect replied, 'That's a clean augmented pattern; we can have a prototype next week,' and the stakeholder mentioned 'a quick check somewhere'. Two weeks later, compliance review found a mandatory licensed-clinician authorization step, PHI handling requirements and two states' differing retention rules. What was the root cause?",
    "question_vi": "Một mạng lưới bệnh viện khu vực yêu cầu Claude soạn ghi chú lâm sàng từ bản đọc của điều dưỡng. Ngay buổi đầu architect trả lời: 'Đây là augmented pattern gọn gàng; tuần sau có prototype,' và stakeholder nhắc tới 'một bước kiểm tra nhanh đâu đó'. Hai tuần sau, compliance review phát hiện bước phê duyệt bắt buộc của clinician có giấy phép, yêu cầu xử lý PHI và quy định lưu trữ khác nhau giữa hai bang. Nguyên nhân gốc là gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "The augmented pattern was too simple for clinical work; a multi-step agent with access to the record system would have discovered the review requirement itself.",
        "text_vi": "Augmented pattern quá đơn giản cho công việc lâm sàng; một agent nhiều bước có quyền truy cập hệ thống hồ sơ lẽ ra đã tự phát hiện yêu cầu review."
      },
      {
        "key": "B",
        "text": "The team used a model tier that was not approved for clinical documentation workloads.",
        "text_vi": "Đội đã dùng một tier model chưa được phê duyệt cho tác vụ tài liệu lâm sàng."
      },
      {
        "key": "C",
        "text": "No eval set had been built for note quality, so the compliance gaps could not be detected before the formal review started.",
        "text_vi": "Chưa có eval set nào cho chất lượng ghi chú, nên các khoảng trống compliance không thể được phát hiện trước khi review chính thức bắt đầu."
      },
      {
        "key": "D",
        "text": "The discovery call moved into design before the must-not-do and must-prove questions were asked, so constraints surfaced late.",
        "text_vi": "Buổi discovery chuyển sang thiết kế trước khi các câu hỏi must-not-do và must-prove được hỏi, nên constraint lộ ra muộn."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "A competent-sounding sketch ended the questions discovery exists to ask; each late constraint would have come out of a direct must-prove or must-not-do question, and 'a quick check' was really a mandatory architectural gate. A more autonomous pattern does not discover legal obligations, an eval set measures quality rather than surfacing compliance requirements, and nothing in the scenario points to the model tier.",
    "explanation_vi": "Một bản phác thảo nghe có vẻ thành thạo đã chấm dứt các câu hỏi mà discovery tồn tại để hỏi; mỗi constraint lộ muộn lẽ ra đã xuất hiện từ một câu hỏi must-prove hoặc must-not-do trực tiếp, và 'kiểm tra nhanh' thực chất là một gate kiến trúc bắt buộc. Một pattern tự chủ hơn không phát hiện được nghĩa vụ pháp lý, eval set đo chất lượng chứ không làm lộ yêu cầu compliance, và không có gì trong tình huống chỉ tới tier model.",
    "source": "output_4/02_Discovery_and_Scoping.md"
  },
  {
    "id": 11,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Diagnose system issues (prompt failure, hallucinations, model mismatch)",
    "lessonId": "d4-t4",
    "question": "A bank's relationship-manager assistant keeps the full conversation, retrieved documents and tool outputs in every request. By around turn 30, sessions carry roughly 80,000 tokens, cost per call has climbed steadily, and the assistant starts ignoring the client's account number stated in turn 2. What is the diagnosis and remedy?",
    "question_vi": "Trợ lý cho chuyên viên quan hệ khách hàng của một ngân hàng giữ toàn bộ hội thoại, tài liệu truy xuất và output của tool trong mọi request. Đến khoảng lượt 30, phiên mang khoảng 80.000 token, chi phí mỗi lần gọi tăng đều, và trợ lý bắt đầu bỏ qua số tài khoản khách hàng được nêu ở lượt 2. Chẩn đoán và cách khắc phục là gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Monolithic context accumulation; use progressive context with compaction that preserves identifiers and decisions verbatim",
        "text_vi": "Tích lũy context nguyên khối; dùng progressive context với compaction giữ nguyên văn identifier và các quyết định"
      },
      {
        "key": "B",
        "text": "Prompt failure; repeat the account number instruction in the system prompt",
        "text_vi": "Prompt failure; lặp lại chỉ dẫn về số tài khoản trong system prompt"
      },
      {
        "key": "C",
        "text": "Hallucination; add retrieval of account records on every turn",
        "text_vi": "Hallucination; thêm retrieval hồ sơ tài khoản ở mọi lượt"
      },
      {
        "key": "D",
        "text": "Model mismatch; move the assistant to the model with the largest context window",
        "text_vi": "Model mismatch; chuyển trợ lý sang model có context window lớn nhất"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "The course identifies monolithic context as a silent budget killer in multi-turn work, where a session can grow from 4,000 to 80,000 tokens and attention quality can degrade on long contexts; progressive strategies with compaction that keeps load-bearing details such as identifiers are the fix. A bigger window only delays the cliff and raises cost, while retrieval or repeated instructions add tokens without addressing accumulation.",
    "explanation_vi": "Khóa học chỉ ra context nguyên khối là kẻ giết ngân sách thầm lặng trong công việc nhiều lượt, khi một phiên có thể tăng từ 4.000 lên 80.000 token và chất lượng chú ý có thể giảm trên context dài; chiến lược progressive với compaction giữ các chi tiết quan trọng như identifier là cách sửa. Window lớn hơn chỉ trì hoãn điểm gãy và tăng chi phí, còn retrieval hay lặp chỉ dẫn thêm token mà không xử lý được sự tích lũy.",
    "source": "output/08_Model_Context_Strategy.md"
  },
  {
    "id": 12,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Translate business problems into Claude-based AI solutions",
    "lessonId": "d1-t1",
    "question": "A corporate legal department saw a strong demo of Claude flagging non-standard clauses and asks the architect to confirm feasibility today so a six-week timeline can be signed. So far, nobody has discussed daily contract volume, the longest agreements in scope, or how quickly results are needed. What is the architect's best response?",
    "question_vi": "Phòng pháp chế của một tập đoàn vừa xem demo ấn tượng về việc Claude gắn cờ các điều khoản không chuẩn và yêu cầu architect xác nhận khả thi ngay hôm nay để ký timeline sáu tuần. Đến nay chưa ai bàn về số hợp đồng mỗi ngày, hợp đồng dài nhất trong phạm vi, hay cần kết quả nhanh đến mức nào. Phản hồi tốt nhất của architect là gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Commit to the model with the largest context window, which removes the need to collect input-size constraints.",
        "text_vi": "Cam kết dùng model có context window lớn nhất, như vậy không cần thu thập constraint về kích thước input."
      },
      {
        "key": "B",
        "text": "Gather volume, input size, latency SLA, cost ceiling and compliance constraints before giving any verdict.",
        "text_vi": "Thu thập volume, kích thước input, latency SLA, cost ceiling và ràng buộc compliance trước khi đưa bất kỳ verdict nào."
      },
      {
        "key": "C",
        "text": "Confirm feasibility now because the demo already proved the capability, then refine volume, document length and latency assumptions during the first sprints.",
        "text_vi": "Xác nhận khả thi ngay vì demo đã chứng minh năng lực, rồi tinh chỉnh các giả định về volume, độ dài tài liệu và latency trong các sprint đầu."
      },
      {
        "key": "D",
        "text": "Issue a generic 'feasible with constraints' verdict so the timeline can be signed while leaving room to adjust later.",
        "text_vi": "Đưa verdict 'feasible with constraints' chung chung để ký được timeline mà vẫn còn chỗ điều chỉnh sau."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "The verdict is only as sound as the constraints gathered before it; a capability demo is necessary but not sufficient, as the course case where 800 contracts a day, 300-page agreements and a 30-second requirement surfaced mid-build shows. Confirming now repeats that mistake, a vague verdict gives the SOW no boundary conditions, and a larger window does not address cost, latency or compliance.",
    "explanation_vi": "Verdict chỉ vững chắc bằng các constraint đã thu thập trước nó; demo năng lực là cần nhưng chưa đủ, như ca của khóa học khi 800 hợp đồng mỗi ngày, hợp đồng 300 trang và yêu cầu 30 giây chỉ lộ ra giữa chừng. Xác nhận ngay là lặp lại sai lầm đó, verdict mơ hồ không cho SOW boundary condition nào, và window lớn hơn không giải quyết cost, latency hay compliance.",
    "source": "output_2/04_Sizing_and_Feasibility.md"
  },
  {
    "id": 13,
    "topic": "Integration (19%)",
    "objective": "Evaluate connection protocols and select the appropriate integration mechanism (MCP, API/CLI, agent-to-agent)",
    "lessonId": "d3-t7",
    "question": "A bank's customer agent calls core-banking functions through an MCP server maintained by the platform team, and the same server is reused by the call-centre agents' internal tool. Which two practices belong in the design of that shared server? (Choose TWO.)",
    "question_vi": "Agent khách hàng của một ngân hàng gọi các hàm core-banking qua một MCP server do đội nền tảng duy trì, và cùng server đó được tái sử dụng bởi công cụ nội bộ của các agent tổng đài. Hai thực hành nào thuộc về thiết kế của server dùng chung này? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "Expose every core-banking function as a tool so the agents never lack capability.",
        "text_vi": "Phơi bày mọi hàm core-banking dưới dạng tool để agent không bao giờ thiếu năng lực."
      },
      {
        "key": "B",
        "text": "Use one powerful service account shared by both clients for operational simplicity.",
        "text_vi": "Dùng một service account mạnh dùng chung cho cả hai client để đơn giản vận hành."
      },
      {
        "key": "C",
        "text": "Connect only trusted servers, but skip authentication for calls arriving from inside the corporate network.",
        "text_vi": "Chỉ kết nối server đáng tin, nhưng bỏ xác thực với lời gọi đến từ bên trong mạng công ty."
      },
      {
        "key": "D",
        "text": "Manage server lifecycle, versioning and access centrally, and log each tool call with user identity.",
        "text_vi": "Quản lý vòng đời server, phiên bản và quyền truy cập một cách tập trung, và log mỗi tool call kèm danh tính người dùng."
      },
      {
        "key": "E",
        "text": "Authenticate with delegated per-customer OAuth tokens of minimal scope so core banking enforces permissions.",
        "text_vi": "Xác thực bằng OAuth token ủy quyền theo từng khách hàng với phạm vi tối thiểu để core banking thực thi quyền."
      }
    ],
    "answer": [
      "D",
      "E"
    ],
    "explanation": "Shared MCP servers carry extra obligations: delegated user tokens let the source system enforce permissions, and central lifecycle, versioning, access control and identity-bearing logs are the costs the course attaches to MCP. One shared powerful account is the over-privileged pattern. Skipping authentication inside the network leaves a gap, and exposing every function is capability bloat.",
    "explanation_vi": "MCP server dùng chung mang thêm nghĩa vụ: token ủy quyền của người dùng cho phép hệ thống nguồn thực thi quyền, và vòng đời, phiên bản, kiểm soát truy cập tập trung cùng log mang danh tính là các chi phí mà khóa học gắn với MCP. Một tài khoản mạnh dùng chung là mô hình quá quyền. Bỏ xác thực trong mạng nội bộ để lại lỗ hổng, và phơi bày mọi hàm là capability bloat.",
    "source": "output_2/09_Supplement_Integration_Mechanisms_and_Optimization.md"
  },
  {
    "id": 14,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "objective": "Apply prompt engineering techniques (zero-shot, few-shot, chain-of-thought)",
    "lessonId": "d2-t3",
    "question": "A health insurer's assistant decides whether a prior-authorization request meets policy. Approval depends on three interacting conditions: diagnosis category, prior treatments tried, and patient age band, where one condition changes how the others apply. Errors in testing come from the model skipping an interaction. Which technique fits best?",
    "question_vi": "Trợ lý của một công ty bảo hiểm y tế quyết định một yêu cầu phê duyệt trước có đáp ứng chính sách hay không. Việc phê duyệt phụ thuộc vào ba điều kiện tương tác nhau: nhóm chẩn đoán, các điều trị đã thử trước đó, và nhóm tuổi bệnh nhân, trong đó một điều kiện thay đổi cách áp dụng các điều kiện còn lại. Lỗi khi kiểm thử đến từ việc model bỏ qua một tương tác. Kỹ thuật nào phù hợp nhất?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Zero-shot with the policy text, since the model already understands insurance terminology and policy logic.",
        "text_vi": "Zero-shot với văn bản chính sách, vì model đã hiểu thuật ngữ bảo hiểm và logic chính sách."
      },
      {
        "key": "B",
        "text": "Few-shot with ten approved requests so the model learns what an approval looks like.",
        "text_vi": "Few-shot với mười yêu cầu đã duyệt để model học một yêu cầu được duyệt trông như thế nào."
      },
      {
        "key": "C",
        "text": "Chain-of-thought, prompting the model to work through each condition step by step before deciding.",
        "text_vi": "Chain-of-thought, yêu cầu model xét từng điều kiện từng bước trước khi quyết định."
      },
      {
        "key": "D",
        "text": "A shorter prompt listing only the three conditions, to reduce the chance of distraction.",
        "text_vi": "Một prompt ngắn hơn chỉ liệt kê ba điều kiện, để giảm khả năng bị phân tâm."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Chain-of-thought fits tasks where the answer depends on a sequence of conditional logic steps; prompting for step-by-step reasoning reduces the chance of skipping an interaction, which is the observed failure. Zero-shot and a shorter prompt do not address the skipped interaction, and ten approved-only examples are unbalanced and would bias the model toward approval.",
    "explanation_vi": "Chain-of-thought phù hợp với tác vụ mà câu trả lời phụ thuộc vào một chuỗi bước logic có điều kiện; yêu cầu suy luận từng bước giảm khả năng bỏ qua một tương tác, đúng là lỗi đang quan sát được. Zero-shot và prompt ngắn hơn không xử lý được tương tác bị bỏ qua, còn mười ví dụ chỉ toàn được duyệt là mất cân bằng và sẽ khiến model thiên về phê duyệt.",
    "source": "output/09_Prompting_as_Architecture.md"
  },
  {
    "id": 15,
    "topic": "Integration (19%)",
    "objective": "Evaluate progressive discovery vs. monolithic context strategy",
    "lessonId": "d3-t8",
    "question": "An enterprise distributes a versioned document-review procedure to teams through Skills. A skeptical architect worries that dozens of installed skills will bloat every conversation's context. Different teams add skills at different times, and the architect wants the always-present footprint of each skill to stay small. How does Skills' design address this concern?",
    "question_vi": "Một doanh nghiệp phân phối quy trình review tài liệu có phiên bản cho các đội thông qua Skills. Một Architect hoài nghi lo rằng hàng chục skill được cài sẽ làm phình context của mọi cuộc hội thoại. Các đội khác nhau thêm skill vào các thời điểm khác nhau, và Architect muốn phần dấu chân luôn hiện diện của mỗi skill vẫn nhỏ. Thiết kế của Skills xử lý mối lo này thế nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Skills run only on the client side, so none of their content reaches the model.",
        "text_vi": "Skill chỉ chạy phía client, nên không nội dung nào của chúng tới model."
      },
      {
        "key": "B",
        "text": "Skills are compressed into embeddings, so their full text never enters the context.",
        "text_vi": "Skill được nén thành embedding, nên văn bản đầy đủ của chúng không bao giờ vào context."
      },
      {
        "key": "C",
        "text": "Skills must be manually pasted into the prompt by users whenever they need them.",
        "text_vi": "Skill phải được người dùng dán thủ công vào prompt mỗi khi cần."
      },
      {
        "key": "D",
        "text": "Only each skill's short name and description are loaded up front; the full SKILL.md and files load when the skill is relevant.",
        "text_vi": "Chỉ name và description ngắn của mỗi skill được nạp sẵn; SKILL.md đầy đủ và các file được nạp khi skill liên quan."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Progressive disclosure is the architectural strength of Skills: initially only short metadata is loaded, and full content and supporting files load only when the skill is actually relevant, keeping context lean. Skills are not turned into embeddings. They are not client-only, and manual pasting would defeat the point of a packaged, versioned procedure.",
    "explanation_vi": "Progressive disclosure là điểm mạnh kiến trúc của Skills: ban đầu chỉ metadata ngắn được nạp, còn nội dung đầy đủ và file phụ chỉ được nạp khi skill thực sự liên quan, giữ context gọn. Skill không bị biến thành embedding. Chúng không chỉ chạy ở client, và dán thủ công sẽ làm mất ý nghĩa của một quy trình đóng gói, có phiên bản.",
    "source": "output/03_Platform_Map_Primitives.md"
  },
  {
    "id": 16,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Monitor system performance using logging and observability tools",
    "lessonId": "d4-t6",
    "question": "A SaaS platform's dashboard shows stable average cost per request and stable median latency, yet the monthly bill rose 70% and several enterprise customers report wrong answers. Only aggregate metrics are currently displayed. Which TWO observability changes are most appropriate? (Choose TWO.)",
    "question_vi": "Dashboard của một nền tảng SaaS cho thấy chi phí trung bình mỗi request và latency median ổn định, nhưng hóa đơn hằng tháng tăng 70% và nhiều khách hàng doanh nghiệp báo câu trả lời sai. Hiện chỉ hiển thị metric tổng hợp. HAI thay đổi observability nào phù hợp nhất? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "Anomaly alerts such as cost above 150% of the 7-day average and p95 crossing the SLA",
        "text_vi": "Cảnh báo bất thường như chi phí vượt 150% trung bình 7 ngày và p95 vượt SLA"
      },
      {
        "key": "B",
        "text": "Reporting the monthly average to finance instead of daily figures",
        "text_vi": "Báo cáo trung bình hằng tháng cho tài chính thay vì số liệu hằng ngày"
      },
      {
        "key": "C",
        "text": "Moving all traffic to the cheapest model until the cause is found",
        "text_vi": "Chuyển toàn bộ traffic sang model rẻ nhất cho đến khi tìm ra nguyên nhân"
      },
      {
        "key": "D",
        "text": "Reviewing the same aggregate dashboard more frequently",
        "text_vi": "Xem cùng dashboard tổng hợp thường xuyên hơn"
      },
      {
        "key": "E",
        "text": "Per-request decomposition: top-N costliest requests, token histograms, cost by tenant and feature",
        "text_vi": "Phân rã theo request: top-N request đắt nhất, histogram token, chi phí theo tenant và tính năng"
      }
    ],
    "answer": [
      "A",
      "E"
    ],
    "explanation": "The course warns that aggregate metrics can look healthy while a small fraction of requests consumes most of the budget and produces wrong outputs, so per-request decomposition plus threshold-based anomaly alerts are needed. Looking at the same aggregates more often changes nothing, a blind model switch acts before diagnosis, and monthly averages hide the tail even further.",
    "explanation_vi": "Khóa học cảnh báo metric tổng hợp có thể trông khỏe trong khi một phần nhỏ request tiêu tốn phần lớn ngân sách và tạo output sai, nên cần phân rã theo request cộng cảnh báo bất thường theo ngưỡng. Xem cùng số tổng thường xuyên hơn không thay đổi gì, đổi model mù quáng là hành động trước khi chẩn đoán, còn trung bình hằng tháng càng che giấu phần đuôi.",
    "source": "output_2/06_AB_Testing_and_Observability.md"
  },
  {
    "id": 17,
    "topic": "Governance, Safety & Risk Management (14%)",
    "objective": "Apply human-in-the-loop validation strategies",
    "lessonId": "d5-t3",
    "question": "An online university uses Claude to give formative feedback on weekly essays, which students can request to have re-graded, and to draft academic-misconduct findings that can lead to suspension. The provost asks how human review should be placed for each. Which TWO statements are correct? (Choose TWO.)",
    "question_vi": "Một trường đại học trực tuyến dùng Claude để đưa nhận xét định kỳ cho bài luận hằng tuần, mà sinh viên có thể yêu cầu chấm lại, và để soạn kết luận vi phạm học thuật có thể dẫn tới đình chỉ học. Hiệu trưởng hỏi nên đặt human review thế nào cho từng loại. HAI phát biểu nào đúng? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "Essay feedback can be released directly, with sampled review to monitor quality and drift.",
        "text_vi": "Nhận xét bài luận có thể phát hành trực tiếp, với sampled review để giám sát chất lượng và drift."
      },
      {
        "key": "B",
        "text": "Essay feedback needs pre-action approval by an instructor before students can see it.",
        "text_vi": "Nhận xét bài luận cần pre-action approval bởi giảng viên trước khi sinh viên được xem."
      },
      {
        "key": "C",
        "text": "Misconduct findings need pre-action approval by a person before any sanction takes effect.",
        "text_vi": "Kết luận vi phạm cần pre-action approval bởi một người trước khi bất kỳ hình thức kỷ luật nào có hiệu lực."
      },
      {
        "key": "D",
        "text": "Misconduct findings can use post-action audit, since students may appeal a suspension.",
        "text_vi": "Kết luận vi phạm có thể dùng post-action audit, vì sinh viên có thể khiếu nại việc đình chỉ."
      },
      {
        "key": "E",
        "text": "Both should share one queue ordered by model confidence to keep reviewer effort simple.",
        "text_vi": "Cả hai nên dùng chung một hàng chờ sắp theo confidence của model để công sức reviewer đơn giản."
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "A misconduct finding leading to suspension is high-cost and hard to undo, so a person approves before it takes effect; essay feedback is reversible and low-cost, so it can flow with sampled review for quality monitoring. Pre-action approval for every feedback item does not scale, post-action audit lets a damaging sanction take effect first, and a single confidence-ordered queue ignores stakes.",
    "explanation_vi": "Kết luận vi phạm dẫn tới đình chỉ có chi phí cao và khó hoàn tác, nên một người phải phê duyệt trước khi có hiệu lực; nhận xét bài luận đảo ngược được và chi phí thấp, nên có thể phát hành với sampled review để giám sát chất lượng. Pre-action approval cho mọi nhận xét không mở rộng được, post-action audit để một hình thức kỷ luật gây hại có hiệu lực trước, và một hàng chờ chung sắp theo confidence bỏ qua stakes.",
    "source": "output_3/05_Human_Review_Routing.md"
  },
  {
    "id": 18,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Monitor system performance using logging and observability tools",
    "lessonId": "d4-t6",
    "question": "A multi-tenant HR software vendor runs all customers' Claude traffic through a single organization API key. During a payroll-week peak the org-level rate limit tripped, every tenant saw failures, and the operations team could not tell which tenant caused the spike. What change does the course prescribe?",
    "question_vi": "Một nhà cung cấp phần mềm nhân sự multi-tenant chạy toàn bộ traffic Claude của mọi khách hàng qua một API key tổ chức duy nhất. Trong đợt cao điểm tuần tính lương, rate limit cấp tổ chức bị chạm, mọi tenant đều gặp lỗi, và đội vận hành không biết tenant nào gây ra đợt tăng đột biến. Khóa học quy định thay đổi nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Use separate API keys per tenant for attribution and isolation",
        "text_vi": "Dùng API key riêng cho mỗi tenant để quy nguyên nhân và cô lập"
      },
      {
        "key": "B",
        "text": "Log the total request count per minute on the shared key",
        "text_vi": "Log tổng số request mỗi phút trên key dùng chung"
      },
      {
        "key": "C",
        "text": "Add retries with exponential backoff for all tenants",
        "text_vi": "Thêm retry với exponential backoff cho mọi tenant"
      },
      {
        "key": "D",
        "text": "Raise the organization rate limit so the spike is absorbed",
        "text_vi": "Nâng rate limit của tổ chức để hấp thụ đợt tăng đột biến"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "A shared key makes a rate-limit breach visible but its source invisible, and every tenant absorbs the impact; the course states separate API keys per tenant are required for attribution and isolation in multi-tenant production. A higher limit and retries do not identify or isolate the noisy tenant, and aggregate counts on the shared key still cannot attribute the spike.",
    "explanation_vi": "Key dùng chung khiến việc vượt rate limit hiển thị được nhưng nguồn gốc thì không, và mọi tenant đều chịu tác động; khóa học nêu rõ cần API key riêng cho mỗi tenant để quy nguyên nhân và cô lập trong production multi-tenant. Nâng giới hạn và retry không xác định hay cô lập được tenant gây ồn, còn số đếm tổng trên key dùng chung vẫn không quy được nguồn gốc đợt tăng.",
    "source": "output_2/05_Enterprise_Integration_Patterns.md"
  },
  {
    "id": 19,
    "topic": "Integration (19%)",
    "objective": "Analyze authentication and authorization requirements to identify security gaps",
    "lessonId": "d3-t2",
    "question": "A consulting firm's platform team stands up a remote MCP server exposing CRM search and contract-drafting tools so a partner's Claude client can use them over the internet. To speed the pilot, the server accepts any connection that knows its URL. What is the most important gap to close?",
    "question_vi": "Đội nền tảng của một công ty tư vấn dựng một MCP server từ xa phơi bày tool tìm kiếm CRM và soạn hợp đồng để Claude client của một đối tác dùng qua internet. Để đẩy nhanh thử nghiệm, server chấp nhận mọi kết nối biết URL của nó. Lỗ hổng quan trọng nhất cần đóng là gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Rate-limit the server so that an unknown client cannot extract too much data at once.",
        "text_vi": "Giới hạn tốc độ của server để client lạ không thể trích xuất quá nhiều dữ liệu cùng lúc."
      },
      {
        "key": "B",
        "text": "Require authentication using MCP's authorization mechanism (OAuth) and limit the scopes the partner can use.",
        "text_vi": "Yêu cầu xác thực bằng cơ chế authorization của MCP (OAuth) và giới hạn các scope mà đối tác được dùng."
      },
      {
        "key": "C",
        "text": "Log every connection's IP address so unauthorized use can be traced afterwards.",
        "text_vi": "Log địa chỉ IP của mọi kết nối để có thể truy vết việc sử dụng trái phép sau đó."
      },
      {
        "key": "D",
        "text": "Add the server's URL to the partner's allowlist and keep it out of public documentation, using the existing tooling and no additional approvals.",
        "text_vi": "Thêm URL của server vào allowlist của đối tác và không đưa nó vào tài liệu công khai, dùng công cụ hiện có và không cần thêm phê duyệt."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "An unauthenticated remote MCP server is a named gap; the fix is to use MCP's authorization mechanism, which the specification bases on OAuth 2.1, and to limit scopes. Keeping the URL secret is obscurity, not access control. Rate limiting only slows unauthorized access, and IP logging is a detective measure that does not stop anyone from connecting.",
    "explanation_vi": "MCP server từ xa không xác thực là một lỗ hổng được gọi tên; cách sửa là dùng cơ chế authorization của MCP, vốn được đặc tả dựa trên OAuth 2.1, và giới hạn scope. Giữ bí mật URL là che giấu, không phải kiểm soát truy cập. Giới hạn tốc độ chỉ làm chậm truy cập trái phép, còn log IP là biện pháp phát hiện không ngăn được ai kết nối.",
    "source": "output/14_Supplement_Integration_Security_Observability.md"
  },
  {
    "id": 20,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Design multi-agent systems and orchestration strategies",
    "lessonId": "d1-t4",
    "question": "A telecom's agent team debates what to do with a 'retry' policy. The orchestrator dispatches 80 subagents; 5 return empty output. One engineer says to ignore failures because the other 75 results give a statistically sufficient picture for the customer-contract audit. The audit is regulatory. What is the correct design stance?",
    "question_vi": "Đội agent của một nhà mạng tranh luận về chính sách 'retry'. Orchestrator giao 80 subagent; 5 cái trả output rỗng. Một kỹ sư nói bỏ qua lỗi vì 75 kết quả còn lại đủ cho một bức tranh có ý nghĩa thống kê về audit hợp đồng khách hàng. Audit này mang tính pháp quy. Lập trường thiết kế đúng là gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Cancel the whole run and require it to restart from the beginning whenever any single subagent fails.",
        "text_vi": "Hủy toàn bộ lần chạy và bắt đầu lại từ đầu mỗi khi bất kỳ subagent nào lỗi."
      },
      {
        "key": "B",
        "text": "Fill the five missing results with the average verdict of the other 75 so the report has a complete set.",
        "text_vi": "Điền năm kết quả thiếu bằng verdict trung bình của 75 kết quả còn lại để báo cáo đủ bộ."
      },
      {
        "key": "C",
        "text": "Retry the failed units, then flag any remaining gap for human follow-up.",
        "text_vi": "Retry các đơn vị lỗi, rồi gắn cờ khoảng trống còn lại để người theo dõi."
      },
      {
        "key": "D",
        "text": "Ignore the five failures, since a majority of units returned and the remaining sample is large enough.",
        "text_vi": "Bỏ qua năm lỗi, vì đa số đơn vị đã trả về và mẫu còn lại đủ lớn."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "A subagent failure is recoverable: retry, re-route, or drop the unit and flag the gap while the rest proceeds, and never leave it silent, especially for a regulatory audit where every unit matters. Ignoring failures or imputing averages creates a confident but incomplete result, and restarting everything wastes the work that succeeded.",
    "explanation_vi": "Lỗi subagent phục hồi được: retry, chuyển hướng, hoặc bỏ đơn vị và gắn cờ khoảng trống trong khi phần còn lại tiếp tục, và không bao giờ để im lặng, nhất là với audit pháp quy nơi mọi đơn vị đều quan trọng. Bỏ qua lỗi hay điền giá trị trung bình tạo ra kết quả tự tin nhưng không đầy đủ, còn chạy lại tất cả lãng phí công việc đã thành công.",
    "source": "output/05_Pattern_Selection.md"
  },
  {
    "id": 21,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "objective": "Manage stakeholder feedback loops and expectation alignment (including SLAs)",
    "lessonId": "d6-t3",
    "question": "A travel agency's booking assistant has an SLA of 'average response time under 1.5 seconds,' which it meets every week at about 1.2 seconds. Yet the sponsor reports frequent customer complaints about long waits, and traces show some multi-tool responses take eight seconds or more. How should the SLA be revised?",
    "question_vi": "Trợ lý đặt chỗ của một công ty du lịch có SLA 'thời gian phản hồi trung bình dưới 1,5 giây', và tuần nào nó cũng đạt khoảng 1,2 giây. Tuy vậy sponsor báo cáo nhiều khiếu nại của khách hàng về việc chờ lâu, và trace cho thấy một số phản hồi dùng nhiều tool mất từ tám giây trở lên. SLA nên được sửa thế nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Measure the median instead of the mean, since the median is less sensitive to outliers.",
        "text_vi": "Đo trung vị thay vì trung bình, vì trung vị ít nhạy với giá trị ngoại lai hơn."
      },
      {
        "key": "B",
        "text": "Remove latency from the SLA, since long tool calls are outside the assistant's control.",
        "text_vi": "Bỏ latency khỏi SLA, vì các tool call dài nằm ngoài khả năng kiểm soát của trợ lý."
      },
      {
        "key": "C",
        "text": "Tighten the average target to one second so that overall responsiveness improves.",
        "text_vi": "Siết mục tiêu trung bình xuống một giây để cải thiện độ phản hồi tổng thể."
      },
      {
        "key": "D",
        "text": "Use a percentile target such as p95, traced to the confirmed user-experience requirement, with a defined breach action.",
        "text_vi": "Dùng mục tiêu theo percentile như p95, truy về yêu cầu trải nghiệm người dùng đã xác nhận, kèm hành động xác định khi vi phạm."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "LLM latency has a long tail from long outputs, retries and tool calls; an average hides the users who wait longest, so the SLA should use percentiles traced to the UX requirement and state what happens on breach. Tightening the average or switching to the median still ignores the tail customers complain about. Dropping latency abandons a commitment the user experience depends on.",
    "explanation_vi": "Latency LLM có đuôi dài do output dài, retry và tool call; trung bình che giấu những người dùng chờ lâu nhất, nên SLA nên dùng percentile truy về yêu cầu UX và nêu điều gì xảy ra khi vi phạm. Siết trung bình hay chuyển sang trung vị vẫn bỏ qua phần đuôi mà khách hàng phàn nàn. Bỏ latency là từ bỏ một cam kết mà trải nghiệm người dùng phụ thuộc vào.",
    "source": "output_4/10_Supplement_SLOs_Expectations_Handoff_and_Rollout.md"
  },
  {
    "id": 22,
    "topic": "Integration (19%)",
    "objective": "Evaluate connection protocols and select the appropriate integration mechanism (MCP, API/CLI, agent-to-agent)",
    "lessonId": "d3-t7",
    "question": "A SaaS product team wants Claude to work over many turns inside its own web app: read customer data, call a few APIs and loop until done. The team does not want to build iteration and termination logic and has no cloud commitments. Which build-time interface fits best?",
    "question_vi": "Một đội sản phẩm SaaS muốn Claude làm việc qua nhiều lượt bên trong web app của mình: đọc dữ liệu khách hàng, gọi vài API và lặp cho tới khi xong. Đội không muốn tự xây logic lặp và kết thúc, và không có cam kết cloud. Build-time interface nào phù hợp nhất?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "The Agent SDK, which runs a managed agent loop inside the partner's own application.",
        "text_vi": "Agent SDK, chạy vòng lặp agent được quản lý bên trong ứng dụng của partner."
      },
      {
        "key": "B",
        "text": "Single-request SDK calls with no loop, accepting one answer per request, configured once and applied across every environment.",
        "text_vi": "Lời gọi SDK một request không có vòng lặp, chấp nhận một câu trả lời cho mỗi request, cấu hình một lần và áp dụng cho mọi môi trường."
      },
      {
        "key": "C",
        "text": "An MCP server alone, since MCP handles looping over tools.",
        "text_vi": "Chỉ một MCP server, vì MCP xử lý việc lặp qua các tool."
      },
      {
        "key": "D",
        "text": "The Claude Code CLI on branch users' laptops.",
        "text_vi": "Claude Code CLI trên laptop của người dùng."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "The Agent SDK runs the same managed loop that powers Claude Code, handling iteration, tool execution and termination from the partner's own code, which matches multi-turn action inside a product. MCP shares tools but does not run a loop. Claude Code CLI is an engineering entry point, and a single-request SDK call cannot do multi-step work.",
    "explanation_vi": "Agent SDK chạy cùng vòng lặp được quản lý đang vận hành Claude Code, xử lý lặp, thực thi tool và kết thúc từ chính code của partner, khớp với hành động nhiều lượt trong một sản phẩm. MCP chia sẻ tool nhưng không chạy vòng lặp. Claude Code CLI là entry point cho kỹ sư, còn lời gọi SDK một request không làm được việc nhiều bước.",
    "source": "output/10_Entry_Points_Governance.md"
  },
  {
    "id": 23,
    "topic": "Integration (19%)",
    "objective": "Design a RAG pipeline with appropriate chunking and indexing strategies",
    "lessonId": "d3-t5",
    "question": "To save money, a SaaS documentation team switched to a new embedding model for documents added this month but left last year's 40,000 chunks embedded with the old model in the same index. Since then, relevant older documents rarely appear in results. What is the most likely cause and fix?",
    "question_vi": "Để tiết kiệm chi phí, đội tài liệu của một công ty SaaS chuyển sang embedding model mới cho tài liệu được thêm trong tháng này nhưng giữ nguyên 40.000 chunk của năm ngoái được embed bằng model cũ trong cùng một index. Kể từ đó, các tài liệu cũ có liên quan hiếm khi xuất hiện trong kết quả. Nguyên nhân khả dĩ nhất và cách sửa là gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Older documents are stale; delete them so the index contains only recent content.",
        "text_vi": "Tài liệu cũ đã lỗi thời; xóa chúng để index chỉ chứa nội dung gần đây."
      },
      {
        "key": "B",
        "text": "Mismatched embedding spaces; re-embed and reindex the full corpus with the new model.",
        "text_vi": "Không gian embedding không khớp; embed lại và reindex toàn bộ corpus bằng model mới."
      },
      {
        "key": "C",
        "text": "The generation model is hallucinating; add an instruction to cite only retrieved sources.",
        "text_vi": "Model sinh đang hallucinate; thêm chỉ dẫn chỉ trích dẫn nguồn đã truy xuất."
      },
      {
        "key": "D",
        "text": "Top-k is too small; double it so older documents have room to appear.",
        "text_vi": "top-k quá nhỏ; tăng gấp đôi để tài liệu cũ có chỗ xuất hiện."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Changing the embedding model requires reindexing everything, because query vectors from the new model are not comparable with document vectors from the old one; this is the 'mismatched embeddings' cause the exam guide names. An instruction cannot retrieve documents that never come back. Deleting older content discards valid knowledge, and a larger top-k does not fix vectors that live in incompatible spaces.",
    "explanation_vi": "Đổi embedding model đòi hỏi reindex toàn bộ, vì vector truy vấn từ model mới không so sánh được với vector tài liệu từ model cũ; đây là nguyên nhân 'embedding không khớp' mà exam guide gọi tên. Chỉ dẫn không thể truy xuất các tài liệu không bao giờ được trả về. Xóa nội dung cũ là bỏ đi tri thức còn giá trị, và top-k lớn hơn không sửa được vector nằm trong các không gian không tương thích.",
    "source": "output_2/09_Supplement_Integration_Mechanisms_and_Optimization.md"
  },
  {
    "id": 24,
    "topic": "Developer Productivity & Operational Enablement (7%)",
    "objective": "Improve developer workflows using AI-assisted tooling",
    "lessonId": "d7-t2",
    "question": "A logistics company's AI-assisted team now opens three times as many pull requests as before, and reviewers admit they skim. The team has a written verification checklist but applies it by memory. The Architect wants the checklist to become a repeatable gate rather than a good intention. Which TWO measures best achieve this? (Choose TWO.)",
    "question_vi": "Team có AI hỗ trợ của một công ty logistics giờ mở số pull request gấp ba trước đây, và reviewer thừa nhận họ chỉ đọc lướt. Team có một verification checklist bằng văn bản nhưng áp dụng theo trí nhớ. Architect muốn checklist trở thành một cổng lặp lại được chứ không chỉ là thiện chí. HAI biện pháp nào đạt được điều này tốt nhất? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "Switch to the newest model release, since it introduces fewer defects than earlier ones.",
        "text_vi": "Chuyển sang phiên bản model mới nhất vì nó tạo ra ít lỗi hơn các bản trước."
      },
      {
        "key": "B",
        "text": "Exempt changes under 20 lines from review so reviewers can focus on larger diffs.",
        "text_vi": "Miễn review cho thay đổi dưới 20 dòng để reviewer tập trung vào diff lớn hơn."
      },
      {
        "key": "C",
        "text": "Automate secret scanning and linters in CI or hooks, leaving human understanding to reviewers.",
        "text_vi": "Tự động hóa secret scanning và linter trong CI hoặc hooks, dành phần human understanding cho reviewer."
      },
      {
        "key": "D",
        "text": "Remind reviewers in a team meeting to read AI-generated code more carefully.",
        "text_vi": "Nhắc reviewer trong buổi họp team đọc code do AI sinh cẩn thận hơn."
      },
      {
        "key": "E",
        "text": "Run the regression test suite and eval set automatically on every change in CI.",
        "text_vi": "Chạy regression test suite và eval set tự động trên mọi thay đổi trong CI."
      }
    ],
    "answer": [
      "C",
      "E"
    ],
    "explanation": "Wherever a check can be made automatic it should be: tests and evals prove correctness on every change, and scans and linters cover part of security and maintainability, freeing reviewers to focus on human understanding, which cannot be automated. A reminder is still a good intention rather than a gate, exempting small changes opens a hole where a few lines can leak data, and a newer model does not replace verification.",
    "explanation_vi": "Kiểm tra nào tự động hóa được thì nên tự động hóa: tests và evals chứng minh correctness trên mọi thay đổi, còn scan và linter bao phủ một phần security và maintainability, giúp reviewer tập trung vào human understanding, phần không thể tự động hóa. Lời nhắc nhở vẫn chỉ là thiện chí chứ không phải cổng, miễn review cho thay đổi nhỏ mở ra lỗ hổng nơi vài dòng code có thể làm rò rỉ dữ liệu, còn model mới hơn không thay thế được việc xác minh.",
    "source": "output_5/03_Developer_Workflows_and_Verification.md"
  },
  {
    "id": 25,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "objective": "Apply prompt engineering techniques (zero-shot, few-shot, chain-of-thought)",
    "lessonId": "d2-t3",
    "question": "A retailer's email router sorts customer emails into four well-defined groups. An engineer added chain-of-thought instructions and eight examples to the original zero-shot prompt. On the eval, accuracy is unchanged but p95 latency has tripled and token spend has risen sharply. What should the architect recommend?",
    "question_vi": "Bộ định tuyến email của một nhà bán lẻ phân loại email khách hàng vào bốn nhóm được định nghĩa rõ. Một kỹ sư đã thêm chỉ dẫn chain-of-thought và tám ví dụ vào prompt zero-shot ban đầu. Trên eval, độ chính xác không đổi nhưng p95 latency tăng gấp ba và chi phí token tăng mạnh. Architect nên khuyến nghị gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Move the router to Opus so that the reasoning finishes faster and latency recovers.",
        "text_vi": "Chuyển bộ định tuyến sang Opus để phần suy luận hoàn tất nhanh hơn và latency hồi phục."
      },
      {
        "key": "B",
        "text": "Add more examples until accuracy improves enough to justify the higher latency.",
        "text_vi": "Thêm nhiều ví dụ hơn cho đến khi độ chính xác cải thiện đủ để biện minh cho latency cao hơn."
      },
      {
        "key": "C",
        "text": "Return to the zero-shot prompt, confirmed by the eval, since the heavier techniques added cost for no gain.",
        "text_vi": "Quay lại prompt zero-shot, được xác nhận bằng eval, vì các kỹ thuật nặng hơn chỉ thêm chi phí mà không có lợi."
      },
      {
        "key": "D",
        "text": "Keep the heavier prompt, because chain-of-thought is more robust for future edge cases and for new email types.",
        "text_vi": "Giữ prompt nặng hơn, vì chain-of-thought vững hơn cho các trường hợp biên trong tương lai và cho các loại email mới."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "The rule is to reach for the lightest technique that meets the requirement; chain-of-thought on a task that does not need it is a recurring tax for no gain, and the eval shows no accuracy benefit. Speculative robustness is not evidence, Opus is slower and more expensive rather than faster, and adding more examples increases tokens and maintenance without a demonstrated need.",
    "explanation_vi": "Quy tắc là chọn kỹ thuật nhẹ nhất đáp ứng yêu cầu; chain-of-thought cho tác vụ không cần nó là khoản thuế lặp lại không mang lại lợi ích, và eval cho thấy không có cải thiện độ chính xác. Sự vững vàng mang tính suy đoán không phải bằng chứng, Opus chậm hơn và đắt hơn chứ không nhanh hơn, còn thêm ví dụ làm tăng token và công bảo trì khi chưa chứng minh được nhu cầu.",
    "source": "output/09_Prompting_as_Architecture.md"
  },
  {
    "id": 26,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Monitor system performance using logging and observability tools",
    "lessonId": "d4-t6",
    "question": "An insurer has shipped five revisions of its claims-explanation prompt over two months, sometimes running two versions at once for different regions. Complaints spike for some claims, but the team cannot tell which prompt version produced the problematic outputs. Which logging change most directly fixes this?",
    "question_vi": "Một công ty bảo hiểm đã đưa ra năm bản sửa của prompt giải thích claim trong hai tháng, đôi khi chạy hai phiên bản cùng lúc cho các khu vực khác nhau. Khiếu nại tăng vọt ở một số claim, nhưng team không biết phiên bản prompt nào đã tạo ra output có vấn đề. Thay đổi logging nào sửa trực tiếp nhất điều này?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Increase sampling of human reviews for complaint cases",
        "text_vi": "Tăng tần suất lấy mẫu human review cho các case khiếu nại"
      },
      {
        "key": "B",
        "text": "Keep a changelog document listing prompt release dates",
        "text_vi": "Duy trì một tài liệu changelog liệt kê ngày phát hành prompt"
      },
      {
        "key": "C",
        "text": "Log the full prompt text only for requests that error",
        "text_vi": "Chỉ log toàn bộ nội dung prompt cho các request bị lỗi"
      },
      {
        "key": "D",
        "text": "Log a prompt identifier with version on every request, alongside model version",
        "text_vi": "Log prompt identifier kèm phiên bản trên mọi request, cùng với phiên bản model"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "The request log group includes the prompt identifier precisely so the team can answer which prompt and model version produced an output, which is essential for change attribution when versions overlap. A release-date changelog cannot resolve concurrent regional versions, error-only logging misses quietly wrong outputs, and more reviews find bad outputs without attributing them.",
    "explanation_vi": "Nhóm log request có prompt identifier chính là để team trả lời được phiên bản prompt và model nào tạo ra một output, điều thiết yếu cho change attribution khi các phiên bản chồng lấn nhau. Changelog theo ngày phát hành không phân giải được các phiên bản chạy đồng thời theo khu vực, chỉ log khi lỗi bỏ sót output sai âm thầm, còn tăng review chỉ tìm ra output xấu mà không quy được nguồn gốc.",
    "source": "output_2/05_Enterprise_Integration_Patterns.md"
  },
  {
    "id": 27,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "objective": "Apply prompt engineering techniques (zero-shot, few-shot, chain-of-thought)",
    "lessonId": "d2-t3",
    "question": "In a telco design review, an engineer says: 'We already prompt for step-by-step reasoning, so enabling extended thinking changes nothing for cost or architecture.' The architect needs to correct the record before a pricing estimate goes to finance. Which statement is accurate?",
    "question_vi": "Trong một buổi review thiết kế ở một nhà mạng, một kỹ sư nói: 'Chúng ta đã yêu cầu suy luận từng bước trong prompt, nên bật extended thinking không thay đổi gì về chi phí hay kiến trúc.' Architect cần đính chính trước khi bản ước tính giá được gửi cho bộ phận tài chính. Phát biểu nào chính xác?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Chain-of-thought is a prompt technique in the output; extended thinking is a separate API thinking block billed as output.",
        "text_vi": "Chain-of-thought là kỹ thuật prompt nằm trong output; extended thinking là khối thinking riêng của API, tính phí như output."
      },
      {
        "key": "B",
        "text": "They are the same mechanism, so enabling extended thinking adds no tokens beyond the existing reasoning already in the output.",
        "text_vi": "Chúng là cùng một cơ chế, nên bật extended thinking không thêm token nào ngoài phần suy luận hiện có vốn đã có trong output."
      },
      {
        "key": "C",
        "text": "Extended thinking is free because only a summary is shown, while chain-of-thought tokens are billed.",
        "text_vi": "Extended thinking miễn phí vì chỉ có bản tóm tắt được hiển thị, còn token chain-of-thought thì bị tính phí."
      },
      {
        "key": "D",
        "text": "Chain-of-thought tokens are billed at the input rate, while extended thinking tokens are not billed.",
        "text_vi": "Token chain-of-thought được tính theo giá input, còn token extended thinking thì không bị tính phí."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "The course distinguishes the two: chain-of-thought is a prompting technique whose reasoning appears in ordinary output, whereas extended thinking is an API capability producing a separate thinking block billed as output tokens and adding latency. They are not the same mechanism, extended thinking is billed on tokens consumed regardless of the visible summary, and neither is billed at the input rate.",
    "explanation_vi": "Course phân biệt hai khái niệm: chain-of-thought là kỹ thuật prompting có phần suy luận xuất hiện trong output thông thường, còn extended thinking là năng lực API tạo ra một khối thinking riêng được tính phí như output token và làm tăng latency. Chúng không phải cùng một cơ chế, extended thinking bị tính phí theo số token tiêu thụ bất kể bản tóm tắt hiển thị, và không cái nào được tính theo giá input.",
    "source": "output/09_Prompting_as_Architecture.md"
  },
  {
    "id": 28,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "objective": "Manage stakeholder feedback loops and expectation alignment (including SLAs)",
    "lessonId": "d6-t3",
    "question": "A tax-preparation firm's assistant keeps a full rules corpus in context on every call. Since a partnership deal, volume is fifty times the discovery assumption, and cost per interaction now far exceeds the envelope even with caching tuned. Prompt edits have not helped. Diagnosis rules out quality issues. What is the appropriate next step?",
    "question_vi": "Trợ lý của một công ty dịch vụ khai thuế giữ toàn bộ kho quy tắc trong context ở mọi lần gọi. Kể từ một thỏa thuận hợp tác, volume gấp năm mươi lần giả định trong discovery, và chi phí mỗi tương tác giờ vượt xa envelope ngay cả khi caching đã được tinh chỉnh. Sửa prompt không giúp được. Chẩn đoán loại trừ vấn đề chất lượng. Bước tiếp theo phù hợp là gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Continue iterating on the prompt to shorten instructions until cost returns within the envelope.",
        "text_vi": "Tiếp tục iterate trên prompt để rút ngắn chỉ dẫn cho đến khi chi phí quay lại trong envelope."
      },
      {
        "key": "B",
        "text": "Treat it as a re-architecture decision and present it to the stakeholder as a tradeoff with gains, costs and reversal cost.",
        "text_vi": "Coi đây là quyết định re-architect và trình bày với stakeholder như một tradeoff với phần được, chi phí và reversal cost."
      },
      {
        "key": "C",
        "text": "Switch to retrieval immediately to restore cost targets, then inform the stakeholder once the change is live.",
        "text_vi": "Chuyển ngay sang retrieval để khôi phục mục tiêu chi phí, rồi thông báo stakeholder khi thay đổi đã chạy."
      },
      {
        "key": "D",
        "text": "Raise the budget envelope internally to match the new volume, since revenue from the partnership will cover it.",
        "text_vi": "Tự nâng budget envelope nội bộ cho khớp volume mới, vì doanh thu từ hợp tác sẽ bù đắp."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Re-architecture is appropriate when a foundational constraint has changed, such as volume far above assumptions making full-context cost unsustainable, and the course treats it as a tradeoff to bring to the stakeholder with its reversal cost. Further prompt iteration has already failed to address a structural driver. Changing the budget or the architecture without the stakeholder's decision bypasses expectation alignment.",
    "explanation_vi": "Re-architect là phù hợp khi một constraint nền tảng đã thay đổi, như volume vượt xa giả định khiến chi phí full-context không còn bền vững, và khóa học coi đó là một tradeoff phải đưa lên stakeholder kèm reversal cost. Iterate thêm trên prompt đã không giải quyết được yếu tố mang tính cấu trúc. Thay đổi ngân sách hoặc kiến trúc mà không có quyết định của stakeholder là bỏ qua việc căn chỉnh kỳ vọng.",
    "source": "output_4/04_Feedback_Loops_and_SLAs.md"
  },
  {
    "id": 29,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Diagnose system issues (prompt failure, hallucinations, model mismatch)",
    "lessonId": "d4-t4",
    "question": "A grocery retailer's assistant answers 'is this item in stock at my store?' using RAG over a product index refreshed nightly. Customers are often told items are available that sold out hours earlier, while answers about product ingredients and allergens are accurate. What is the correct diagnosis and design change?",
    "question_vi": "Trợ lý của một chuỗi bán lẻ thực phẩm trả lời 'mặt hàng này còn ở cửa hàng của tôi không?' bằng RAG trên một index sản phẩm được refresh hằng đêm. Khách hàng thường được báo là còn hàng trong khi mặt hàng đã hết từ vài giờ trước, còn câu trả lời về thành phần và chất gây dị ứng thì chính xác. Chẩn đoán và thay đổi thiết kế đúng là gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Model mismatch; move stock questions to a larger model",
        "text_vi": "Model mismatch; chuyển câu hỏi tồn kho sang model lớn hơn"
      },
      {
        "key": "B",
        "text": "Hallucination; add an instruction to say 'please check in store'",
        "text_vi": "Hallucination; thêm chỉ dẫn nói 'vui lòng kiểm tra tại cửa hàng'"
      },
      {
        "key": "C",
        "text": "Staleness of live state in a snapshot index; answer stock queries with a tool call to the inventory system and keep RAG for static content",
        "text_vi": "Dữ liệu live state bị cũ trong index dạng snapshot; trả lời câu hỏi tồn kho bằng tool call tới hệ thống tồn kho và giữ RAG cho nội dung tĩnh"
      },
      {
        "key": "D",
        "text": "Retrieval drift from poor chunking; switch to semantic chunking",
        "text_vi": "Retrieval drift do chunking kém; chuyển sang semantic chunking"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Inventory is live state, and the course notes that refresh schedules create staleness for live-state queries; the mitigation is to separate live-state queries, served by a tool call to the system of record, from static knowledge served by RAG. Chunking changes, extra instructions or a bigger model all keep answering from a snapshot that is already out of date.",
    "explanation_vi": "Tồn kho là live state, và khóa học lưu ý lịch refresh gây dữ liệu cũ cho truy vấn live-state; biện pháp là tách truy vấn live-state, phục vụ bằng tool call tới hệ thống gốc, khỏi kiến thức tĩnh phục vụ bằng RAG. Đổi chunking, thêm chỉ dẫn hay model lớn hơn đều vẫn trả lời từ một snapshot đã lỗi thời.",
    "source": "output_2/03_POC_to_Production.md"
  },
  {
    "id": 30,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Design multi-agent systems and orchestration strategies",
    "lessonId": "d1-t4",
    "question": "A document-classification fan-out over 10,000 archived records works well, but its last step automatically archives and deletes originals for records judged obsolete. A subagent misclassification last week removed records that legal later needed. Where should the architect place a human-in-the-loop gate?",
    "question_vi": "Một fan-out phân loại tài liệu trên 10.000 hồ sơ lưu trữ hoạt động tốt, nhưng bước cuối tự động lưu trữ và xóa bản gốc của các hồ sơ được đánh giá là lỗi thời. Một lần phân loại sai của subagent tuần trước đã xóa hồ sơ mà bộ phận pháp lý sau đó cần. Architect nên đặt human-in-the-loop gate ở đâu?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Before every subagent returns its classification, so a person approves each individual verdict.",
        "text_vi": "Trước khi mọi subagent trả phân loại, để một người duyệt từng verdict riêng lẻ."
      },
      {
        "key": "B",
        "text": "Nowhere in the pipeline, provided the orchestrator is upgraded to a higher-tier model for synthesis.",
        "text_vi": "Không đặt ở đâu trong pipeline, miễn là orchestrator được nâng lên model tier cao hơn cho bước tổng hợp."
      },
      {
        "key": "C",
        "text": "After the deletion has run, with a nightly report so reviewers can restore anything wrongly removed.",
        "text_vi": "Sau khi xóa đã chạy, kèm báo cáo hằng đêm để reviewer khôi phục những gì bị xóa nhầm."
      },
      {
        "key": "D",
        "text": "Before the irreversible delete, sampling lower-stakes classifications.",
        "text_vi": "Trước hành động xóa không đảo ngược, lấy mẫu các phân loại stakes thấp."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Gates belong before irreversible or high-stakes actions, while lower-stakes steps are sampled rather than gated one by one. Gating every verdict is slow and costly, a post-deletion report is detective and depends on recoverability that may not exist, and a stronger model does not replace a gate on an irreversible action.",
    "explanation_vi": "Gate thuộc về trước hành động không đảo ngược hoặc stakes cao, còn các bước stakes thấp được lấy mẫu thay vì gate từng cái. Gate mọi verdict chậm và tốn kém, báo cáo sau khi xóa là phát hiện và phụ thuộc vào khả năng khôi phục có thể không tồn tại, và model mạnh hơn không thay thế được gate cho hành động không đảo ngược.",
    "source": "output/05_Pattern_Selection.md"
  },
  {
    "id": 31,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "objective": "Manage stakeholder feedback loops and expectation alignment (including SLAs)",
    "lessonId": "d6-t3",
    "question": "A bank's internal SLA with the retail division commits to a quality pass rate of at least 92 percent on the weekly evaluated sample. The operations team proposes setting their own internal alerting target at exactly 92 percent as well, 'to keep things consistent.' Why would the Architect advise setting the internal SLO tighter?",
    "question_vi": "SLA nội bộ của một ngân hàng với khối bán lẻ cam kết tỉ lệ đạt chất lượng ít nhất 92% trên mẫu được đánh giá hàng tuần. Đội vận hành đề xuất đặt mục tiêu cảnh báo nội bộ của họ cũng đúng 92%, 'để nhất quán'. Vì sao Architect sẽ khuyên đặt SLO nội bộ chặt hơn?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Because a tighter internal target gives the team a warning buffer to act before the stakeholder commitment is breached.",
        "text_vi": "Vì mục tiêu nội bộ chặt hơn tạo cho đội vùng đệm cảnh báo để hành động trước khi cam kết với stakeholder bị vi phạm."
      },
      {
        "key": "B",
        "text": "Because the SLA can then be renegotiated upward once the team consistently meets the tighter SLO.",
        "text_vi": "Vì sau đó SLA có thể được đàm phán nâng lên khi đội liên tục đạt SLO chặt hơn."
      },
      {
        "key": "C",
        "text": "Because auditors require internal targets to exceed external ones by a fixed regulatory margin.",
        "text_vi": "Vì kiểm toán viên yêu cầu mục tiêu nội bộ phải cao hơn mục tiêu bên ngoài một biên độ quy định cố định."
      },
      {
        "key": "D",
        "text": "Because a tighter target will cause the model to produce higher-quality outputs on average.",
        "text_vi": "Vì mục tiêu chặt hơn sẽ khiến model tạo ra output chất lượng cao hơn trung bình."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "The SLO is the internal target and is usually set tighter than the SLA so the team gets early warning and can investigate before the commitment to the stakeholder is broken. There is no fixed regulatory margin in the material. A target does not change model behaviour, and renegotiating the SLA is not the purpose of the buffer.",
    "explanation_vi": "SLO là mục tiêu nội bộ và thường được đặt chặt hơn SLA để đội được cảnh báo sớm và có thể điều tra trước khi cam kết với stakeholder bị phá vỡ. Tài liệu không nêu biên độ quy định cố định nào. Một mục tiêu không làm thay đổi hành vi của model, và đàm phán lại SLA không phải là mục đích của vùng đệm.",
    "source": "output_4/04_Feedback_Loops_and_SLAs.md"
  },
  {
    "id": 32,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Design multi-agent systems and orchestration strategies",
    "lessonId": "d1-t4",
    "question": "A multi-agent audit of 400 repository files completes after a long run, but the orchestrator process crashes while synthesizing; 320 subagent results had already been produced. The team must rerun everything from scratch, costing hours and tokens. Which design principle was missing?",
    "question_vi": "Một lần audit multi-agent trên 400 file repository hoàn tất sau thời gian dài, nhưng tiến trình orchestrator sập khi đang tổng hợp; 320 kết quả subagent đã được tạo ra. Đội phải chạy lại toàn bộ từ đầu, tốn nhiều giờ và token. Nguyên tắc thiết kế nào đã bị thiếu?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Running subagents sequentially, so that a crash can only ever lose the single unit in progress.",
        "text_vi": "Chạy subagent tuần tự, để sự cố chỉ có thể làm mất đúng một đơn vị đang xử lý."
      },
      {
        "key": "B",
        "text": "Checkpointing orchestrator state externally so a failed run can resume.",
        "text_vi": "Checkpoint trạng thái orchestrator ra bên ngoài để lần chạy lỗi có thể resume."
      },
      {
        "key": "C",
        "text": "Giving each subagent a larger context window so that fewer subagents are needed in total.",
        "text_vi": "Cho mỗi subagent context window lớn hơn để cần ít subagent hơn tổng cộng."
      },
      {
        "key": "D",
        "text": "Propagating a shared trace ID, which allows the crashed run to be reconstructed in the observability tool.",
        "text_vi": "Truyền shared trace ID, cho phép tái dựng lần chạy bị sập trong công cụ observability."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "An orchestrator failure is usually not recoverable unless its state is protected, so checkpointing completed units lets the run resume. A shared trace ID helps reconstruct a run but does not restore its work, larger subagent windows do not protect orchestrator state, and sequential execution discards the concurrency benefit without protecting the synthesis step.",
    "explanation_vi": "Lỗi orchestrator thường không phục hồi được trừ khi trạng thái được bảo vệ, nên checkpoint các đơn vị đã xong cho phép lần chạy resume. Shared trace ID giúp tái dựng lần chạy nhưng không khôi phục công việc, window lớn hơn cho subagent không bảo vệ trạng thái orchestrator, và chạy tuần tự bỏ lợi ích đồng thời mà vẫn không bảo vệ bước tổng hợp.",
    "source": "output/05_Pattern_Selection.md"
  },
  {
    "id": 33,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Design evaluation datasets and test frameworks using mixed methodologies",
    "lessonId": "d4-t2",
    "question": "A hospital network wants Claude to suggest follow-up care plans for a rare pediatric condition, a capability area with no established rubric. Only a few specialists can judge the suggestions, and a wrong evaluation could harm patients. The team wants to start evaluating before launch. Which approach fits the grading ladder?",
    "question_vi": "Một mạng lưới bệnh viện muốn Claude đề xuất kế hoạch chăm sóc theo dõi cho một bệnh nhi hiếm gặp, một lĩnh vực năng lực chưa có rubric được thiết lập. Chỉ có vài chuyên gia có thể đánh giá các đề xuất, và một đánh giá sai có thể gây hại cho bệnh nhân. Team muốn bắt đầu đánh giá trước khi ra mắt. Cách tiếp cận nào phù hợp với grading ladder?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Self-evaluation by the generating model with extended thinking enabled",
        "text_vi": "Model sinh tự đánh giá với extended thinking được bật"
      },
      {
        "key": "B",
        "text": "An LLM judge with a generic helpfulness rubric, deployed immediately",
        "text_vi": "Một LLM judge với rubric mức độ hữu ích chung chung, triển khai ngay"
      },
      {
        "key": "C",
        "text": "Specialist human review on a structured sample, with their labels later used to build and calibrate a judge",
        "text_vi": "Chuyên gia review trên một mẫu có cấu trúc, với nhãn của họ sau đó được dùng để xây và calibrate judge"
      },
      {
        "key": "D",
        "text": "Code-based checks on output length and section headings only",
        "text_vi": "Chỉ kiểm tra bằng code về độ dài output và tiêu đề các phần"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Human review is the last rung, reserved for high-stakes or novel behaviors where neither code nor a calibrated judge is trustworthy yet, and human labels are also what calibrates a future judge. An uncalibrated generic judge gives false confidence, format checks miss clinical appropriateness, and self-evaluation introduces self-preference.",
    "explanation_vi": "Human review là nấc cuối, dành cho hành vi rủi ro cao hoặc mới lạ nơi cả code lẫn judge đã calibrate đều chưa đáng tin, và nhãn của con người cũng là thứ dùng để calibrate judge sau này. Judge chung chung chưa calibrate tạo cảm giác an toàn giả, kiểm tra định dạng bỏ sót tính phù hợp lâm sàng, còn tự đánh giá gây self-preference.",
    "source": "output_2/02_Evals_as_Acceptance_Criteria.md"
  },
  {
    "id": 34,
    "topic": "Governance, Safety & Risk Management (14%)",
    "objective": "Ensure compliance with regulations (e.g., GDPR, HIPAA, FedRAMP)",
    "lessonId": "d5-t4",
    "question": "A French retailer's contract with its works council requires that customer-service data be processed only within the EU. The team plans to call the Claude API directly and set inference_geo to restrict processing, because direct API access gets new features first. Based on the course material, what should the architect recommend?",
    "question_vi": "Hợp đồng của một nhà bán lẻ Pháp với hội đồng người lao động yêu cầu dữ liệu chăm sóc khách hàng chỉ được xử lý trong EU. Đội dự định gọi Claude API trực tiếp và đặt inference_geo để giới hạn việc xử lý, vì truy cập API trực tiếp có tính năng mới sớm nhất. Dựa trên tài liệu khóa học, architect nên khuyến nghị gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Proceed with the direct API and add an output filter that strips EU personal data.",
        "text_vi": "Tiến hành với API trực tiếp và thêm output filter loại bỏ dữ liệu cá nhân của EU."
      },
      {
        "key": "B",
        "text": "Proceed, since inference_geo can pin processing to the EU on the direct API.",
        "text_vi": "Tiến hành, vì inference_geo có thể pin việc xử lý vào EU trên API trực tiếp."
      },
      {
        "key": "C",
        "text": "Proceed, since GDPR permits cross-border transfers with a valid mechanism anyway.",
        "text_vi": "Tiến hành, vì dù sao GDPR cũng cho phép chuyển dữ liệu xuyên biên giới với cơ chế hợp lệ."
      },
      {
        "key": "D",
        "text": "Use a cloud route such as Bedrock or Vertex with the region pinned to an approved EU region.",
        "text_vi": "Dùng một cloud route như Bedrock hoặc Vertex với region được pin vào một region EU đã phê duyệt."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Per the course, inference_geo currently supports us and global and does not pin to the EU, so a deployment with an EU residency requirement should use a cloud route with the region pinned. GDPR alone may allow transfers with a valid mechanism, but this deployment has its own contractual residency requirement. An output filter does not change where processing happens.",
    "explanation_vi": "Theo khóa học, inference_geo hiện hỗ trợ us và global và không pin vào EU, nên một deployment có yêu cầu lưu trú tại EU nên dùng cloud route với region được pin. Riêng GDPR có thể cho phép chuyển dữ liệu với cơ chế hợp lệ, nhưng deployment này có yêu cầu residency riêng theo hợp đồng. Output filter không thay đổi nơi việc xử lý diễn ra.",
    "source": "output_2/05_Enterprise_Integration_Patterns.md"
  },
  {
    "id": 35,
    "topic": "Integration (19%)",
    "objective": "Analyze authentication and authorization requirements to identify security gaps",
    "lessonId": "d3-t2",
    "question": "A security reviewer examines a retailer's customer-service integration. The platform serves several retail brands, handles order data and payment-related requests, and the launch date is two weeks away. Which two findings are security gaps that must be remediated before launch? (Choose TWO.)",
    "question_vi": "Một người review bảo mật kiểm tra phần tích hợp chăm sóc khách hàng của một nhà bán lẻ. Nền tảng phục vụ nhiều thương hiệu bán lẻ, xử lý dữ liệu đơn hàng và các yêu cầu liên quan đến thanh toán, và ngày ra mắt chỉ còn hai tuần. Hai phát hiện nào là lỗ hổng bảo mật phải được khắc phục trước khi ra mắt? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "Tool calls are logged with timestamps and arguments but without the identity of the user who triggered them.",
        "text_vi": "Tool call được log kèm thời gian và tham số nhưng không có danh tính người dùng đã kích hoạt chúng."
      },
      {
        "key": "B",
        "text": "Users authenticate through the company's SSO before any request reaches Claude.",
        "text_vi": "Người dùng xác thực qua SSO của công ty trước khi bất kỳ request nào tới Claude."
      },
      {
        "key": "C",
        "text": "Order data is isolated per tenant at the storage layer.",
        "text_vi": "Dữ liệu đơn hàng được cách ly theo tenant ở tầng lưu trữ."
      },
      {
        "key": "D",
        "text": "Each tool uses short-lived tokens limited to the minimum scope it needs.",
        "text_vi": "Mỗi tool dùng token ngắn hạn giới hạn ở phạm vi tối thiểu mà nó cần."
      },
      {
        "key": "E",
        "text": "A webhook API key is written into the system prompt so the model can include it in tool arguments.",
        "text_vi": "Một API key webhook được ghi vào system prompt để model có thể đưa nó vào tham số tool."
      }
    ],
    "answer": [
      "A",
      "E"
    ],
    "explanation": "Secrets must never be placed in the context, so an API key in the system prompt is a gap; it belongs in a server-side secret manager with the tool layer attaching it. Logs that cannot say which user triggered which tool call fail the identity-audit requirement. SSO before the call, tenant isolation at storage and short-lived minimally scoped tokens are all sound practices named in the course.",
    "explanation_vi": "Bí mật không bao giờ được đặt vào context, nên API key trong system prompt là lỗ hổng; nó thuộc về secret manager phía server với tầng tool gắn vào khi gọi. Log không cho biết người dùng nào kích hoạt tool call nào thì không đáp ứng yêu cầu audit danh tính. SSO trước lời gọi, cách ly tenant ở tầng lưu trữ và token ngắn hạn phạm vi tối thiểu đều là thực hành đúng được khóa học nêu.",
    "source": "output/14_Supplement_Integration_Security_Observability.md"
  },
  {
    "id": 36,
    "topic": "Governance, Safety & Risk Management (14%)",
    "objective": "Ensure compliance with regulations (e.g., GDPR, HIPAA, FedRAMP)",
    "lessonId": "d5-t4",
    "question": "A US dental-clinic chain wants Claude to summarize treatment notes that contain patient names and diagnoses. The engineering team has already built a strong output filter for health terms, encrypted the data at rest, and written a system prompt forbidding disclosure. No agreement with the vendor has been signed yet. What must be in place before any notes are sent?",
    "question_vi": "Một chuỗi phòng khám nha khoa ở Mỹ muốn Claude tóm tắt ghi chú điều trị có chứa tên bệnh nhân và chẩn đoán. Đội kỹ thuật đã xây một output filter mạnh cho thuật ngữ y tế, mã hóa dữ liệu at rest, và viết system prompt cấm tiết lộ thông tin. Chưa có thỏa thuận nào được ký với nhà cung cấp. Điều gì phải có trước khi gửi bất kỳ ghi chú nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "A HIPAA-ready configuration covered by a signed BAA, with HIPAA enabled and only eligible features.",
        "text_vi": "Một cấu hình HIPAA-ready được bao phủ bởi BAA đã ký, bật HIPAA và chỉ dùng tính năng eligible."
      },
      {
        "key": "B",
        "text": "A second output filter from a different vendor to provide defense in depth for health terms.",
        "text_vi": "Một output filter thứ hai từ nhà cung cấp khác để phòng thủ nhiều lớp cho thuật ngữ y tế."
      },
      {
        "key": "C",
        "text": "Encryption in transit added to the existing at-rest encryption for all clinic data.",
        "text_vi": "Bổ sung mã hóa khi truyền vào cơ chế mã hóa at rest hiện có cho mọi dữ liệu phòng khám."
      },
      {
        "key": "D",
        "text": "A penetration test of the system prompt to confirm it cannot be overridden by users.",
        "text_vi": "Một bài kiểm thử xâm nhập system prompt để xác nhận người dùng không thể ghi đè nó."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Without a Business Associate Agreement, handling PHI through the vendor is non-compliant regardless of technical controls; the course control is a HIPAA-ready plan or first-party API under a signed BAA with HIPAA compliance enabled and only eligible features in scope. Additional filters, prompt testing and encryption are technical measures that cannot substitute for the agreement.",
    "explanation_vi": "Không có Business Associate Agreement, việc xử lý PHI qua nhà cung cấp là không tuân thủ bất kể control kỹ thuật; control trong khóa học là gói HIPAA-ready hoặc API first-party dưới BAA đã ký, bật HIPAA compliance và chỉ dùng tính năng eligible. Thêm filter, kiểm thử prompt và mã hóa là biện pháp kỹ thuật không thể thay thế thỏa thuận.",
    "source": "output_3/06_Compliance_and_Governance.md"
  },
  {
    "id": 37,
    "topic": "Developer Productivity & Operational Enablement (7%)",
    "objective": "Support debugging and operational issue resolution",
    "lessonId": "d7-t3",
    "question": "A bank's internal policy assistant became both slower and more expensive the day after a small change that inserted the current timestamp and the user ID at the very beginning of its long, static system prompt. Answer quality is unchanged, and the change was made to improve audit logging. What is the most likely architecture cause?",
    "question_vi": "Trợ lý chính sách nội bộ của một ngân hàng trở nên vừa chậm hơn vừa tốn kém hơn ngay ngày sau một thay đổi nhỏ chèn timestamp hiện tại và user ID vào ngay đầu system prompt dài và tĩnh của nó. Chất lượng câu trả lời không đổi, và thay đổi được thực hiện để cải thiện audit logging. Nguyên nhân kiến trúc khả dĩ nhất là gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "The model tier crept up because routing sent more requests to an expensive model.",
        "text_vi": "Model tier bị đẩy lên vì routing gửi nhiều request hơn tới một model đắt tiền."
      },
      {
        "key": "B",
        "text": "The dynamic values at the start of the prompt broke the cached prefix, so the cache stopped hitting.",
        "text_vi": "Các giá trị động ở đầu prompt làm vỡ prefix đã cache, khiến cache ngừng hit."
      },
      {
        "key": "C",
        "text": "The audit tool hit its rate limit and returned intermittent authorization failures.",
        "text_vi": "Tool audit chạm rate limit và trả về lỗi authorization chập chờn."
      },
      {
        "key": "D",
        "text": "The retrieval index drifted because the policy corpus grew during the same week.",
        "text_vi": "Index truy xuất bị trôi dạt vì corpus chính sách tăng trong cùng tuần đó."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Inserting dynamic content such as a timestamp or user ID at the start of the prompt breaks the prompt caching prefix, so a cache that stopped hitting explains both the latency rise and the cost rise that began with the change. Retrieval drift would degrade quality, which is unchanged; tool rate limits would show as intermittent failures; and nothing in the change altered model routing.",
    "explanation_vi": "Chèn nội dung động như timestamp hay user ID vào đầu prompt làm vỡ prefix của prompt caching, nên việc cache ngừng hit giải thích được cả latency lẫn chi phí tăng bắt đầu cùng thay đổi đó. Retrieval drift sẽ làm giảm chất lượng, trong khi chất lượng không đổi; rate limit của tool sẽ biểu hiện thành lỗi chập chờn; và thay đổi này không động gì tới routing model.",
    "source": "output_5/04_Operational_Issue_Resolution.md"
  },
  {
    "id": 38,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Monitor system performance using logging and observability tools",
    "lessonId": "d4-t6",
    "question": "An insurer's claims-summary system has threshold alerts on cost and p95 latency, and both are quiet. Adjusters feel that summaries have slowly become longer and more hedged over several months, but no single day looks unusual. Inputs and model version have not obviously changed. What monitoring approach fits this kind of change?",
    "question_vi": "Hệ thống tóm tắt claim của một công ty bảo hiểm có cảnh báo ngưỡng cho chi phí và latency p95, và cả hai đều im lặng. Chuyên viên cảm thấy các bản tóm tắt dần dài hơn và rào đón nhiều hơn qua vài tháng, nhưng không có ngày nào trông bất thường. Input và phiên bản model không có thay đổi rõ ràng. Cách giám sát nào phù hợp với kiểu thay đổi này?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Rely on adjuster complaints as the drift detector",
        "text_vi": "Dựa vào khiếu nại của chuyên viên làm bộ phát hiện drift"
      },
      {
        "key": "B",
        "text": "Lower the cost alert threshold until it fires",
        "text_vi": "Hạ ngưỡng cảnh báo chi phí cho đến khi nó kích hoạt"
      },
      {
        "key": "C",
        "text": "Periodic comparison of output distributions, such as length and refusal or hedge rates, against a baseline period",
        "text_vi": "So sánh định kỳ phân phối output, như độ dài và tỉ lệ từ chối hoặc rào đón, với một giai đoạn baseline"
      },
      {
        "key": "D",
        "text": "Add an alert for any single summary over 1,000 tokens",
        "text_vi": "Thêm cảnh báo cho bất kỳ bản tóm tắt nào trên 1.000 token"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "The course notes that model drift, a gradual change in the distribution of outputs, is hard to catch with threshold alerts and benefits from periodic distribution comparison. Tuning cost thresholds or single-output alerts still looks for spikes rather than gradual shifts, and waiting for complaints is not instrumentation.",
    "explanation_vi": "Khóa học lưu ý model drift, sự thay đổi dần dần trong phân phối output, khó bắt bằng cảnh báo ngưỡng và cần so sánh phân phối định kỳ. Chỉnh ngưỡng chi phí hay cảnh báo cho từng output vẫn chỉ tìm đột biến chứ không thấy dịch chuyển dần, còn chờ khiếu nại không phải là instrumentation.",
    "source": "output_2/06_AB_Testing_and_Observability.md"
  },
  {
    "id": 39,
    "topic": "Integration (19%)",
    "objective": "Evaluate connection protocols and select the appropriate integration mechanism (MCP, API/CLI, agent-to-agent)",
    "lessonId": "d3-t7",
    "question": "A SaaS company wraps a single internal Jira-lookup tool as an MCP server 'to be standard'. Only its own web application calls Claude with this tool and there is no plan for other clients. How should the architect assess this?",
    "question_vi": "Một công ty SaaS bọc một tool tra cứu Jira nội bộ thành MCP server 'cho chuẩn'. Chỉ ứng dụng web của chính công ty gọi Claude với tool này và không có kế hoạch cho client khác. Architect nên đánh giá thế nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Incorrect: MCP cannot expose tools that take parameters.",
        "text_vi": "Sai: MCP không thể phơi bày tool có tham số."
      },
      {
        "key": "B",
        "text": "Correct: MCP should be the default for every tool regardless of the number of clients.",
        "text_vi": "Đúng: MCP nên là mặc định cho mọi tool bất kể số lượng client."
      },
      {
        "key": "C",
        "text": "Correct: MCP calls are faster than direct tool use because they bypass the application, in line with how the earlier pilot was handled.",
        "text_vi": "Đúng: lời gọi MCP nhanh hơn tool use trực tiếp vì bỏ qua ứng dụng, phù hợp với cách xử lý ở giai đoạn thử nghiệm trước."
      },
      {
        "key": "D",
        "text": "Not needed now: direct tool use in the one product is sufficient, and MCP pays off only with multiple clients.",
        "text_vi": "Chưa cần lúc này: tool use trực tiếp trong một sản phẩm là đủ, và MCP chỉ đáng khi có nhiều client."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "MCP is a sharing convention across clients, and with a single client it adds a protocol layer, harder debugging and server lifecycle work without payback. Treating MCP as the universal default is a named misconception. It is not faster, since it adds a layer, and MCP tools do accept parameters.",
    "explanation_vi": "MCP là quy ước chia sẻ giữa các client, và với một client duy nhất nó thêm một lớp protocol, debug khó hơn và công việc quản lý vòng đời server mà không có lợi ích tương xứng. Coi MCP là mặc định phổ quát là một ngộ nhận được gọi tên. Nó không nhanh hơn vì thêm một lớp, và tool MCP vẫn nhận tham số.",
    "source": "output/03_Platform_Map_Primitives.md"
  },
  {
    "id": 40,
    "topic": "Developer Productivity & Operational Enablement (7%)",
    "objective": "Improve developer workflows using AI-assisted tooling",
    "lessonId": "d7-t2",
    "question": "Three months after a bank licensed Claude Code for its lending-platform engineers, 90 percent of them log in weekly, yet almost nobody lets Claude run tests, uses the configured MCP servers, or invokes Skills. Engineers mostly paste error messages and ask what they mean. Delivery throughput is unchanged. What is the best diagnosis and response?",
    "question_vi": "Ba tháng sau khi một ngân hàng mua license Claude Code cho kỹ sư nền tảng cho vay, 90 phần trăm trong số họ đăng nhập hằng tuần, nhưng gần như không ai để Claude chạy test, dùng các MCP server đã cấu hình hay gọi Skills. Kỹ sư chủ yếu dán thông báo lỗi và hỏi nó nghĩa là gì. Năng suất giao hàng không thay đổi. Chẩn đoán và cách xử lý nào tốt nhất?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Stalling at basic chat; enable repository-aware, tool-use and Skill workflows within the current workflow.",
        "text_vi": "Stalling at basic chat; kích hoạt các workflow repository-aware, tool use và Skills ngay trong workflow hiện tại."
      },
      {
        "key": "B",
        "text": "Lumpy adoption; buy additional licenses so that more engineers can become heavy users of the tool.",
        "text_vi": "Lumpy adoption; mua thêm license để nhiều kỹ sư hơn có thể trở thành người dùng tích cực của công cụ."
      },
      {
        "key": "C",
        "text": "A weak spend posture; raise the default model tier so answers become useful enough to change behavior.",
        "text_vi": "Spend posture yếu; nâng model tier mặc định để câu trả lời đủ hữu ích nhằm thay đổi hành vi."
      },
      {
        "key": "D",
        "text": "Judgment erosion; introduce a verification checklist so engineers stop trusting the chat answers by default.",
        "text_vi": "Judgment erosion; đưa vào verification checklist để kỹ sư thôi mặc nhiên tin các câu trả lời chat."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Usage is broad but limited to question answering, which is the stalling-at-basic-chat failure mode: access was provided but no one enabled the higher-value workflows past the first step. It is not lumpy adoption because usage is even, judgment erosion concerns review quality rather than depth of use, and a stronger model does not unlock workflows nobody has configured or taught.",
    "explanation_vi": "Việc sử dụng rộng khắp nhưng chỉ giới hạn ở hỏi đáp, đó chính là failure mode stalling at basic chat: quyền truy cập đã được cấp nhưng không ai kích hoạt các workflow giá trị cao hơn sau bước đầu tiên. Đây không phải lumpy adoption vì mức sử dụng đồng đều, judgment erosion liên quan tới chất lượng review chứ không phải độ sâu sử dụng, và model mạnh hơn không mở khóa được các workflow mà chưa ai cấu hình hay hướng dẫn.",
    "source": "output_5/03_Developer_Workflows_and_Verification.md"
  },
  {
    "id": 41,
    "topic": "Governance, Safety & Risk Management (14%)",
    "objective": "Ensure compliance with regulations (e.g., GDPR, HIPAA, FedRAMP)",
    "lessonId": "d5-t4",
    "question": "A Spanish hospital group plans to use Claude to analyze several million historical patient records to identify patients at risk of readmission and prioritize follow-up calls. The project team has chosen a compliant route and is about to start engineering. Under GDPR, which artifact should be produced before processing begins?",
    "question_vi": "Một tập đoàn bệnh viện Tây Ban Nha dự định dùng Claude phân tích vài triệu hồ sơ bệnh nhân lịch sử để xác định bệnh nhân có nguy cơ tái nhập viện và ưu tiên gọi theo dõi. Đội dự án đã chọn một route tuân thủ và sắp bắt đầu phần kỹ thuật. Theo GDPR, artifact nào cần được lập trước khi bắt đầu xử lý?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "A FedRAMP authorization record for the route that will process the records.",
        "text_vi": "Một FedRAMP authorization record cho route sẽ xử lý các hồ sơ."
      },
      {
        "key": "B",
        "text": "A Data Protection Impact Assessment covering the risks and the mitigating measures.",
        "text_vi": "Một Data Protection Impact Assessment bao gồm các rủi ro và biện pháp giảm thiểu."
      },
      {
        "key": "C",
        "text": "A public privacy notice stating that AI is used, which replaces the need for assessment.",
        "text_vi": "Một thông báo quyền riêng tư công khai nêu rằng có dùng AI, thay thế cho nhu cầu đánh giá."
      },
      {
        "key": "D",
        "text": "A Business Associate Agreement between the hospital group and the model provider.",
        "text_vi": "Một Business Associate Agreement giữa tập đoàn bệnh viện và nhà cung cấp model."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Large-scale processing of special-category health data with new technology to score individuals is likely high risk, which under GDPR requires a DPIA; the DPIA also serves as an evidence artifact. A BAA is a US HIPAA instrument, FedRAMP applies to US federal workloads, and a privacy notice supports transparency but does not replace the impact assessment.",
    "explanation_vi": "Xử lý quy mô lớn dữ liệu sức khỏe thuộc nhóm đặc biệt bằng công nghệ mới để chấm điểm cá nhân có khả năng rủi ro cao, điều mà GDPR yêu cầu DPIA; DPIA cũng đóng vai trò evidence artifact. BAA là công cụ của HIPAA ở Mỹ, FedRAMP áp dụng cho workload liên bang Mỹ, còn thông báo quyền riêng tư hỗ trợ minh bạch nhưng không thay thế đánh giá tác động.",
    "source": "output_3/09_Supplement_Regulatory_Deep_Dive.md"
  },
  {
    "id": 42,
    "topic": "Developer Productivity & Operational Enablement (7%)",
    "objective": "Configure Claude tools and environments for teams (e.g., Claude Code)",
    "lessonId": "d7-t1",
    "question": "A public-sector agency runs Claude Code in an unattended CI pipeline that generates test scaffolding. Nobody is present to approve prompts, so runs currently hang waiting for confirmation. The security team requires that the agent execute only the commands explicitly listed in allow rules and that anything else be refused automatically rather than approved. Which permission mode fits?",
    "question_vi": "Một cơ quan nhà nước chạy Claude Code trong một CI pipeline không có người giám sát để sinh khung test. Không có ai để duyệt các yêu cầu xác nhận, nên các lần chạy hiện bị treo chờ xác nhận. Đội bảo mật yêu cầu agent chỉ thực thi các lệnh được liệt kê tường minh trong allow rules và mọi thứ khác phải bị tự động từ chối thay vì được duyệt. Permission mode nào phù hợp?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "bypassPermissions, so that the pipeline never stops to ask for confirmation of any action.",
        "text_vi": "bypassPermissions, để pipeline không bao giờ dừng lại hỏi xác nhận cho bất kỳ hành động nào."
      },
      {
        "key": "B",
        "text": "acceptEdits, so that file edits and common filesystem commands are approved automatically.",
        "text_vi": "acceptEdits, để việc sửa file và các lệnh filesystem phổ biến được tự động duyệt."
      },
      {
        "key": "C",
        "text": "dontAsk, which auto-denies anything that would prompt and runs only what the allow rules cover.",
        "text_vi": "dontAsk, chế độ tự từ chối mọi thứ cần hỏi và chỉ chạy những gì allow rules cho phép."
      },
      {
        "key": "D",
        "text": "Plan mode, which keeps the session read-only until a plan is approved by a reviewer.",
        "text_vi": "Plan mode, giữ phiên ở chế độ chỉ đọc cho đến khi kế hoạch được một reviewer duyệt."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "dontAsk auto-denies anything that would require a prompt and executes only what allow rules cover, which is the course's mode for locked-down CI and matches the refuse-by-default requirement. bypassPermissions skips all checks instead of refusing, acceptEdits still prompts for other Bash commands and would hang, and plan mode needs a human to approve the plan, which an unattended pipeline cannot provide.",
    "explanation_vi": "dontAsk tự từ chối mọi thứ cần hỏi xác nhận và chỉ thực thi những gì allow rules cho phép, đây là chế độ course khuyến nghị cho CI bị khóa chặt và khớp với yêu cầu mặc định từ chối. bypassPermissions bỏ qua mọi kiểm tra thay vì từ chối, acceptEdits vẫn hỏi với các lệnh Bash khác nên vẫn bị treo, còn plan mode cần con người duyệt kế hoạch, điều mà pipeline không người giám sát không thể đáp ứng.",
    "source": "output/10_Entry_Points_Governance.md"
  },
  {
    "id": 43,
    "topic": "Integration (19%)",
    "objective": "Design a RAG pipeline with appropriate chunking and indexing strategies",
    "lessonId": "d3-t5",
    "question": "A law firm's RAG assistant over client engagement contracts uses 512-token fixed chunks. Lawyers ask for specific clauses, such as the limitation-of-liability clause in a given agreement, and often get passages that start mid-clause or mix two clauses without the section heading. Which change best fits the documents?",
    "question_vi": "Trợ lý RAG của một công ty luật trên các hợp đồng dịch vụ khách hàng dùng chunk cố định 512 token. Luật sư hỏi các điều khoản cụ thể, như điều khoản giới hạn trách nhiệm trong một thỏa thuận nhất định, và thường nhận được đoạn bắt đầu giữa điều khoản hoặc trộn hai điều khoản mà không có tiêu đề mục. Thay đổi nào phù hợp nhất với loại tài liệu này?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Shrink fixed chunks to 128 tokens so each chunk covers less text, with the results reviewed again next quarter.",
        "text_vi": "Thu nhỏ chunk cố định xuống 128 token để mỗi chunk chứa ít văn bản hơn, với kết quả được xem lại vào quý sau."
      },
      {
        "key": "B",
        "text": "Semantic chunking that ignores headings and splits only on topic shifts.",
        "text_vi": "Semantic chunking bỏ qua tiêu đề và chỉ chia theo chuyển chủ đề."
      },
      {
        "key": "C",
        "text": "Increase top-k from 5 to 30 so the full clause is likely to appear somewhere.",
        "text_vi": "Tăng top-k từ 5 lên 30 để điều khoản đầy đủ có khả năng xuất hiện đâu đó."
      },
      {
        "key": "D",
        "text": "Hierarchical chunking that preserves clause and section structure and retrieves at the clause level.",
        "text_vi": "Hierarchical chunking giữ nguyên cấu trúc điều khoản và mục, truy xuất ở cấp điều khoản."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Contracts are highly structured and section-numbered, so hierarchical chunking keeps each clause intact and self-contained with its structural context; fixed-size chunking cuts across section boundaries. Smaller fixed chunks fragment clauses further. Ignoring headings discards the structure that carries meaning, and a larger top-k adds noise and cost without restoring clause boundaries.",
    "explanation_vi": "Hợp đồng có cấu trúc cao và đánh số mục, nên hierarchical chunking giữ mỗi điều khoản nguyên vẹn, tự đứng được cùng ngữ cảnh cấu trúc của nó; chunk kích thước cố định cắt ngang ranh giới mục. Chunk cố định nhỏ hơn càng làm điều khoản bị phân mảnh. Bỏ qua tiêu đề là vứt đi cấu trúc mang ý nghĩa, còn top-k lớn hơn thêm nhiễu và chi phí mà không khôi phục ranh giới điều khoản.",
    "source": "output/07_RAG_Pipeline_Design.md"
  },
  {
    "id": 44,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "objective": "Apply prompt engineering techniques (zero-shot, few-shot, chain-of-thought)",
    "lessonId": "d2-t3",
    "question": "An insurer's claim-triage prompt includes five few-shot examples, all of which end in 'approve for fast-track'. After launch, the fast-track rate is far above the historical rate, and auditors find claims with clear red flags fast-tracked. Which change most directly addresses the cause?",
    "question_vi": "Prompt phân loại hồ sơ bồi thường của một công ty bảo hiểm có năm ví dụ few-shot, tất cả đều kết thúc bằng 'duyệt xử lý nhanh'. Sau khi ra mắt, tỷ lệ xử lý nhanh cao hơn nhiều so với mức lịch sử, và kiểm toán viên phát hiện các hồ sơ có dấu hiệu cảnh báo rõ ràng vẫn được xử lý nhanh. Thay đổi nào giải quyết trực tiếp nhất nguyên nhân?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Rebalance the examples across real outcomes, including red-flag claims that are not fast-tracked.",
        "text_vi": "Cân bằng lại các ví dụ theo các kết quả thực tế, bao gồm hồ sơ có dấu hiệu cảnh báo không được xử lý nhanh."
      },
      {
        "key": "B",
        "text": "Move the triage step to a more capable tier that ignores skewed examples.",
        "text_vi": "Chuyển bước phân loại sang tier năng lực cao hơn vốn bỏ qua ví dụ bị lệch."
      },
      {
        "key": "C",
        "text": "Remove all examples and rely on a longer description of red flags instead.",
        "text_vi": "Gỡ mọi ví dụ và thay bằng một mô tả dài hơn về các dấu hiệu cảnh báo."
      },
      {
        "key": "D",
        "text": "Add a sentence telling the model not to over-approve claims for fast-track, especially when red flags are present.",
        "text_vi": "Thêm một câu bảo model không duyệt xử lý nhanh quá mức, đặc biệt khi có dấu hiệu cảnh báo."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Unbalanced examples that show only one kind of case steer the output; the course's discipline is to balance examples across the cases the system will actually see. Removing examples discards a technique that may be needed for judgment, a corrective sentence fights the examples rather than fixing them, and no tier reliably ignores what its examples demonstrate.",
    "explanation_vi": "Ví dụ mất cân bằng chỉ thể hiện một loại trường hợp sẽ dẫn dắt output; kỷ luật của course là cân bằng ví dụ theo các trường hợp hệ thống sẽ thực sự gặp. Gỡ hết ví dụ là bỏ một kỹ thuật có thể cần cho việc phán đoán, một câu sửa sai là đối chọi với ví dụ thay vì sửa chúng, và không tier nào bỏ qua một cách đáng tin cậy những gì ví dụ của nó minh họa.",
    "source": "output/09_Prompting_as_Architecture.md"
  },
  {
    "id": 45,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "objective": "Apply prompt engineering techniques (zero-shot, few-shot, chain-of-thought)",
    "lessonId": "d2-t3",
    "question": "A tax-advisory firm's assistant keeps applying last year's VAT thresholds, although a new rule took effect last month. An engineer proposes adding few-shot examples showing correct answers under the new rule, plus chain-of-thought so the model 'reasons about the change'. What should the architect recommend instead?",
    "question_vi": "Trợ lý của một công ty tư vấn thuế liên tục áp dụng ngưỡng VAT của năm ngoái, dù quy định mới đã có hiệu lực từ tháng trước. Một kỹ sư đề xuất thêm ví dụ few-shot thể hiện câu trả lời đúng theo quy định mới, cộng chain-of-thought để model 'suy luận về thay đổi'. Architect nên khuyến nghị gì thay vào đó?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Keep adding examples until the eval shows the new thresholds are applied in every case, across all client types.",
        "text_vi": "Tiếp tục thêm ví dụ cho đến khi eval cho thấy ngưỡng mới được áp dụng trong mọi trường hợp, trên mọi loại khách hàng."
      },
      {
        "key": "B",
        "text": "Supply the current rule from an authoritative, versioned source at runtime via retrieval or a tool.",
        "text_vi": "Cung cấp quy định hiện hành từ một nguồn có thẩm quyền, có version tại thời điểm chạy qua retrieval hoặc tool."
      },
      {
        "key": "C",
        "text": "Enable extended thinking so the model can deduce that the thresholds have changed.",
        "text_vi": "Bật extended thinking để model có thể suy ra rằng các ngưỡng đã thay đổi."
      },
      {
        "key": "D",
        "text": "Move to the newest model generation, which will have learned the current thresholds.",
        "text_vi": "Chuyển sang thế hệ model mới nhất, vốn sẽ đã học được các ngưỡng hiện hành."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "This is a knowledge-boundary problem, not a technique problem: recent or fast-changing facts are outside what the model reliably knows, and the course mitigation is to make an external authoritative source the source of truth at runtime. Examples and reasoning techniques shape format and logic but cannot reliably supply current facts, and a newer model's training data still will not track rules as they change.",
    "explanation_vi": "Đây là vấn đề knowledge boundary, không phải vấn đề kỹ thuật prompt: các sự kiện mới hoặc thay đổi nhanh nằm ngoài những gì model biết một cách đáng tin cậy, và biện pháp của course là đưa một nguồn bên ngoài có thẩm quyền làm source of truth tại thời điểm chạy. Ví dụ và kỹ thuật suy luận định hình định dạng và logic nhưng không thể cung cấp dữ kiện hiện hành một cách đáng tin cậy, và dữ liệu huấn luyện của model mới hơn vẫn không theo kịp các quy định khi chúng thay đổi.",
    "source": "output/02_How_Claude_Behaves.md"
  },
  {
    "id": 46,
    "topic": "Governance, Safety & Risk Management (14%)",
    "objective": "Apply human-in-the-loop validation strategies",
    "lessonId": "d5-t3",
    "question": "An insurer routes every Claude-drafted claim decision to adjusters. Each adjuster faces about 450 items a day, sees only the drafted decision and an approve button, approves 99.7% of items, and spends roughly four seconds per item. A regulator questions whether oversight is real. Which TWO changes address the root causes? (Choose TWO.)",
    "question_vi": "Một công ty bảo hiểm chuyển mọi quyết định claim do Claude soạn cho adjuster. Mỗi adjuster nhận khoảng 450 item mỗi ngày, chỉ thấy quyết định đã soạn và một nút approve, approve 99,7% item, và mất khoảng bốn giây mỗi item. Cơ quan quản lý nghi ngờ oversight có thật không. HAI thay đổi nào giải quyết các nguyên nhân gốc? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "Shorten the review SLA so adjusters must clear their queue before end of day.",
        "text_vi": "Rút ngắn SLA review để adjuster phải xử lý xong hàng chờ trước cuối ngày."
      },
      {
        "key": "B",
        "text": "Show the claim inputs and the reason each item was flagged in the reviewer view.",
        "text_vi": "Hiển thị input của claim và lý do mỗi item bị gắn cờ trong giao diện reviewer."
      },
      {
        "key": "C",
        "text": "Require adjusters to type a written justification before every approval.",
        "text_vi": "Bắt adjuster gõ lý do bằng văn bản trước mỗi lần approve."
      },
      {
        "key": "D",
        "text": "Hire enough additional adjusters to bring each queue under 150 items per day.",
        "text_vi": "Tuyển thêm đủ adjuster để đưa mỗi hàng chờ xuống dưới 150 item mỗi ngày."
      },
      {
        "key": "E",
        "text": "Replace route-everything with routing by confidence, reversibility and cost of a wrong decision.",
        "text_vi": "Thay việc chuyển mọi thứ bằng định tuyến theo confidence, reversibility và cost của quyết định sai."
      }
    ],
    "answer": [
      "B",
      "E"
    ],
    "explanation": "Two independent failures stacked: volume beyond what a person can read, and missing context to judge against; the fixes are routing by stakes and surfacing inputs plus the flag reason, and fixing only one still fails. Hiring more adjusters leaves them without context, typed justifications add friction that gets filled in by rote, and a tighter SLA worsens the volume pressure.",
    "explanation_vi": "Hai lỗi độc lập chồng lên nhau: khối lượng vượt quá những gì một người đọc được, và thiếu ngữ cảnh để đối chiếu; cách sửa là định tuyến theo stakes và hiển thị input cùng flag reason, và chỉ sửa một lỗi vẫn thất bại. Tuyển thêm adjuster vẫn để họ thiếu ngữ cảnh, bắt gõ lý do thêm ma sát và dễ bị điền cho có, còn SLA chặt hơn làm áp lực khối lượng tệ hơn.",
    "source": "output_3/05_Human_Review_Routing.md"
  },
  {
    "id": 47,
    "topic": "Integration (19%)",
    "objective": "Design a RAG pipeline with appropriate chunking and indexing strategies",
    "lessonId": "d3-t5",
    "question": "A property-management company indexes hundreds of lease agreements. Many chunks read like 'The tenant may terminate this agreement with 60 days notice...' with no indication of which lease or property they belong to, so similar clauses from different leases are confused at retrieval. Which ingest-time technique most directly addresses this?",
    "question_vi": "Một công ty quản lý bất động sản index hàng trăm hợp đồng thuê. Nhiều chunk có dạng 'Bên thuê có thể chấm dứt hợp đồng này với thông báo trước 60 ngày...' mà không cho biết thuộc hợp đồng hay bất động sản nào, nên các điều khoản giống nhau từ các hợp đồng khác nhau bị nhầm lẫn khi truy xuất. Kỹ thuật ở bước ingest nào xử lý trực tiếp nhất vấn đề này?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Raise the similarity threshold so only the closest matching chunk is returned.",
        "text_vi": "Tăng ngưỡng similarity để chỉ trả về chunk khớp gần nhất."
      },
      {
        "key": "B",
        "text": "Switch to a larger generation model so it can infer which lease each chunk came from.",
        "text_vi": "Chuyển sang model sinh lớn hơn để nó suy ra mỗi chunk đến từ hợp đồng nào."
      },
      {
        "key": "C",
        "text": "Prepend a short document-level context to each chunk before embedding and BM25 indexing.",
        "text_vi": "Thêm một đoạn ngữ cảnh ngắn cấp tài liệu vào đầu mỗi chunk trước khi embedding và index BM25."
      },
      {
        "key": "D",
        "text": "Reduce chunk size so each chunk contains only one sentence of the clause.",
        "text_vi": "Giảm kích thước chunk để mỗi chunk chỉ chứa một câu của điều khoản."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Anthropic's Contextual Retrieval adds a short generated context to each chunk, applied to both embeddings and BM25, so the chunk stands on its own and retrieval errors fall. Smaller chunks strip even more context. A higher threshold still cannot distinguish near-identical clauses from different leases, and the generator cannot recover provenance that retrieval never surfaced.",
    "explanation_vi": "Contextual Retrieval của Anthropic thêm một đoạn ngữ cảnh ngắn được sinh ra vào mỗi chunk, áp dụng cho cả embedding và BM25, để chunk tự đứng được và lỗi truy xuất giảm. Chunk nhỏ hơn còn bị mất ngữ cảnh nhiều hơn. Ngưỡng cao hơn vẫn không phân biệt được các điều khoản gần như giống nhau từ các hợp đồng khác nhau, và model sinh không thể khôi phục nguồn gốc mà bước truy xuất chưa từng đưa ra.",
    "source": "output/07_RAG_Pipeline_Design.md"
  },
  {
    "id": 48,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "objective": "Manage stakeholder feedback loops and expectation alignment (including SLAs)",
    "lessonId": "d6-t3",
    "question": "A car-rental company is finalising the latency SLA for its customer chat assistant. Discovery confirmed that customers drop off if the first reply takes more than about three seconds, and the operations team wants clear accountability. Which two components must a good latency SLA include? (Choose TWO.)",
    "question_vi": "Một công ty cho thuê xe đang hoàn thiện SLA latency cho trợ lý chat khách hàng. Discovery xác nhận khách hàng rời đi nếu phản hồi đầu tiên mất hơn khoảng ba giây, và đội vận hành muốn trách nhiệm rõ ràng. Một SLA latency tốt phải có hai thành phần nào? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "The latency figure published by the model provider for the selected tier.",
        "text_vi": "Con số latency do nhà cung cấp model công bố cho tier đã chọn."
      },
      {
        "key": "B",
        "text": "A definition of breach and what happens on breach: who acts and within what time.",
        "text_vi": "Định nghĩa vi phạm và điều gì xảy ra khi vi phạm: ai hành động và trong bao lâu."
      },
      {
        "key": "C",
        "text": "A guarantee that every response will arrive within three seconds without exception.",
        "text_vi": "Một bảo đảm rằng mọi phản hồi đều đến trong ba giây, không có ngoại lệ."
      },
      {
        "key": "D",
        "text": "A commitment to the lowest average latency the platform can achieve each month.",
        "text_vi": "Một cam kết đạt latency trung bình thấp nhất mà nền tảng làm được mỗi tháng."
      },
      {
        "key": "E",
        "text": "A percentile threshold, such as p95, traced to the user-experience requirement confirmed in discovery.",
        "text_vi": "Một ngưỡng theo percentile, như p95, truy về yêu cầu trải nghiệm người dùng đã xác nhận trong discovery."
      }
    ],
    "answer": [
      "B",
      "E"
    ],
    "explanation": "An SLA names what is measured, what counts as a breach and what happens on breach, with thresholds traced to a tangible source; a UX-traced percentile plus a breach definition with owner and timing covers this. An open-ended average has no threshold and hides the tail. A provider figure ignores the full pipeline and this use case, and a no-exception guarantee is not realistic for a probabilistic system.",
    "explanation_vi": "SLA nêu đo gì, thế nào là vi phạm và điều gì xảy ra khi vi phạm, với ngưỡng truy về nguồn cụ thể; một percentile truy về UX cộng định nghĩa vi phạm có owner và thời hạn đáp ứng điều này. Một mức trung bình không giới hạn thì không có ngưỡng và che giấu phần đuôi. Con số của nhà cung cấp bỏ qua toàn bộ pipeline và use case này, còn bảo đảm không ngoại lệ là không thực tế với hệ thống probabilistic.",
    "source": "output_4/10_Supplement_SLOs_Expectations_Handoff_and_Rollout.md"
  },
  {
    "id": 49,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Select appropriate architectural patterns (workflow, agentic, augmented LLM)",
    "lessonId": "d1-t3",
    "question": "During a design review at a retail group, the CFO rejects an agent-based proposal for a merchandising assistant, arguing that 'agents always cost more than workflows, so a workflow is automatically the cheaper option'. The competing workflow design has eleven steps, each carrying the full product catalog in its context. How should the architect respond?",
    "question_vi": "Trong một buổi review thiết kế tại một tập đoàn bán lẻ, CFO bác bỏ đề xuất dựa trên agent cho trợ lý merchandising, lập luận rằng 'agent luôn đắt hơn workflow, nên workflow tự động là lựa chọn rẻ hơn'. Thiết kế workflow cạnh tranh có mười một bước, mỗi bước mang toàn bộ danh mục sản phẩm trong context. Architect nên phản hồi thế nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Defer the cost question to after launch, since real production bills are the only reliable way to compare patterns.",
        "text_vi": "Hoãn câu hỏi chi phí tới sau launch, vì hóa đơn production thực tế là cách duy nhất đáng tin để so sánh các pattern."
      },
      {
        "key": "B",
        "text": "Agree, since agents always consume more tokens per request than any workflow because of iterative reasoning.",
        "text_vi": "Đồng ý, vì agent luôn tiêu tốn nhiều token mỗi request hơn mọi workflow do suy luận lặp."
      },
      {
        "key": "C",
        "text": "Disagree, because agents are always cheaper than workflows once prompt caching is enabled on the agent's tools.",
        "text_vi": "Không đồng ý, vì agent luôn rẻ hơn workflow một khi prompt caching được bật cho tool của agent."
      },
      {
        "key": "D",
        "text": "Explain that cost is driven by accumulated context and call count, so this workflow may cost more than the agent.",
        "text_vi": "Giải thích rằng chi phí do context tích lũy và số lần gọi quyết định, nên workflow này có thể đắt hơn agent."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "The course states that agents do not automatically cost more: cost is driven by how much context accumulates and how many model calls are made, so a poorly designed workflow, such as eleven steps each carrying the full catalog, can cost more than a well-designed agent. Both blanket claims ignore those drivers, and deferring cost to the first bill repeats the lagging cost visibility the course warns about.",
    "explanation_vi": "Khóa học nêu rõ agent không tự động đắt hơn: chi phí do lượng context tích lũy và số lần gọi model quyết định, nên một workflow thiết kế tồi, như mười một bước mỗi bước mang toàn bộ danh mục, có thể đắt hơn một agent thiết kế tốt. Cả hai khẳng định tuyệt đối đều bỏ qua các yếu tố này, còn hoãn chi phí tới hóa đơn đầu tiên là lặp lại việc chậm thấy chi phí mà khóa học cảnh báo.",
    "source": "output/05_Pattern_Selection.md"
  },
  {
    "id": 50,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Diagnose system issues (prompt failure, hallucinations, model mismatch)",
    "lessonId": "d4-t4",
    "question": "An education company configured its tutoring assistant with a model alias that always points to the latest release. One Monday, students report different explanation styles and some incorrect step numbering, though nothing in the codebase or prompt changed. Traces do not record the exact model version. What should the architect put in place?",
    "question_vi": "Một công ty giáo dục cấu hình trợ lý dạy kèm với một model alias luôn trỏ tới bản phát hành mới nhất. Một sáng thứ Hai, học sinh báo cáo phong cách giải thích khác đi và một số chỗ đánh số bước sai, dù không có gì trong codebase hay prompt thay đổi. Trace không ghi lại phiên bản model chính xác. Architect nên thiết lập điều gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Pin the model version, record it on every trace, and use a runbook that runs the eval suite before upgrading",
        "text_vi": "Pin phiên bản model, ghi nó trên mọi trace, và dùng runbook chạy eval suite trước khi nâng cấp"
      },
      {
        "key": "B",
        "text": "Keep the alias but add a prompt instruction to number steps carefully",
        "text_vi": "Giữ alias nhưng thêm chỉ dẫn trong prompt để đánh số bước cẩn thận"
      },
      {
        "key": "C",
        "text": "Lower temperature so outputs stay consistent across versions",
        "text_vi": "Giảm temperature để output nhất quán giữa các phiên bản"
      },
      {
        "key": "D",
        "text": "Switch to a different model family to avoid future updates",
        "text_vi": "Chuyển sang dòng model khác để tránh các bản cập nhật sau này"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "This is a model update effect enabled by an unpinned alias; the course treats version pinning as an operational discipline with a version-update runbook, and change attribution requires the version on each trace. A prompt patch or temperature change does not control which model runs, and switching families just moves the same risk.",
    "explanation_vi": "Đây là model update effect do alias không được pin gây ra; khóa học coi pin phiên bản là kỷ luật vận hành với runbook nâng cấp phiên bản, và việc quy nguyên nhân cần phiên bản trên mỗi trace. Vá prompt hay đổi temperature không kiểm soát được model nào đang chạy, còn chuyển dòng model chỉ dời cùng rủi ro sang chỗ khác.",
    "source": "output_2/03_POC_to_Production.md"
  },
  {
    "id": 51,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Align solutions to business value pillars (efficiency, transformation, productivity, cost, performance SLAs)",
    "lessonId": "d1-t6",
    "question": "A SaaS company is reviewing a Claude support-assistant design before funding it, and the CFO asks the architect to tie each major technical decision to a business value pillar so that spend can be defended. Which mapping of pillars to architecture levers is accurate according to the course? (Choose TWO.)",
    "question_vi": "Một công ty SaaS đang xem xét thiết kế trợ lý hỗ trợ dùng Claude trước khi cấp vốn, và CFO yêu cầu architect gắn mỗi quyết định kỹ thuật chính với một trụ cột giá trị kinh doanh để có thể bảo vệ chi tiêu. Cách ánh xạ trụ cột sang đòn bẩy kiến trúc nào là chính xác theo khóa học? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "Transformation: keep all work in a single deterministic rule engine so that outcomes are predictable.",
        "text_vi": "Transformation: giữ mọi công việc trong một rule engine deterministic duy nhất để kết quả dễ dự đoán."
      },
      {
        "key": "B",
        "text": "Efficiency: let an unbounded agent decide its own steps so that no manual step remains in the process.",
        "text_vi": "Efficiency: để một agent không giới hạn tự quyết các bước để không còn bước thủ công nào trong quy trình."
      },
      {
        "key": "C",
        "text": "Cost: model tiering, prompt caching, batch processing and progressive context.",
        "text_vi": "Cost: phân tier model, prompt caching, xử lý theo lô và progressive context."
      },
      {
        "key": "D",
        "text": "Productivity: a collaborative pattern in which Claude drafts and a person reviews and sends.",
        "text_vi": "Productivity: pattern cộng tác trong đó Claude soạn và một người review rồi gửi."
      },
      {
        "key": "E",
        "text": "Performance SLAs: always select the largest model tier and enable extended thinking on every request.",
        "text_vi": "Performance SLA: luôn chọn tier model lớn nhất và bật extended thinking cho mọi request."
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "explanation": "The course maps cost to tiering, caching, batch and progressive context, and productivity to the collaborative pattern in which Claude drafts and a person approves. The largest tier with extended thinking everywhere harms the SLA and budget, a pure rule engine does not create new capability, and an unbounded agent trades efficiency for unacceptable autonomy and audit risk.",
    "explanation_vi": "Khóa học ánh xạ cost sang phân tier, caching, batch và progressive context, và productivity sang pattern cộng tác trong đó Claude soạn và người duyệt. Tier lớn nhất với extended thinking ở mọi nơi làm hại SLA và ngân sách, rule engine thuần không tạo năng lực mới, và agent không giới hạn đánh đổi efficiency lấy mức tự chủ và rủi ro audit không chấp nhận được.",
    "source": "output/13_Supplement_Business_Value_End_to_End.md"
  },
  {
    "id": 52,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Select appropriate architectural patterns (workflow, agentic, augmented LLM)",
    "lessonId": "d1-t3",
    "question": "Several teams at a large enterprise are evaluating whether to fine-tune a model instead of relying on prompting. Their workloads differ widely in volume, latency targets and output formats. According to the course, which two situations are ones where fine-tuning can be justified, assuming access is confirmed with the Anthropic account team? (Choose TWO.)",
    "question_vi": "Một số đội tại một doanh nghiệp lớn đang đánh giá có nên fine-tune model thay vì dựa vào prompting. Các workload của họ khác nhau nhiều về volume, mục tiêu latency và định dạng output. Theo khóa học, hai tình huống nào là tình huống fine-tuning có thể được biện minh, giả sử quyền truy cập đã được xác nhận với account team của Anthropic? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "Latency is critical, and a smaller specialized model would outperform a prompted general model.",
        "text_vi": "Latency tối quan trọng, và một model nhỏ chuyên biệt sẽ vượt trội model tổng quát được prompt."
      },
      {
        "key": "B",
        "text": "A first prompt draft gives inconsistent answers, and the team wants the quickest fix before optimizing the prompt.",
        "text_vi": "Bản prompt đầu cho câu trả lời không ổn định, và đội muốn cách sửa nhanh nhất trước khi tối ưu prompt."
      },
      {
        "key": "C",
        "text": "A classification task runs at very high volume and inference cost is the binding constraint.",
        "text_vi": "Một tác vụ phân loại chạy ở volume rất lớn và chi phí inference là ràng buộc chính."
      },
      {
        "key": "D",
        "text": "The team wants to avoid pinning a model version, so it prefers its own trained model that never changes.",
        "text_vi": "Đội muốn tránh pin model version, nên chọn model tự huấn luyện không bao giờ thay đổi."
      },
      {
        "key": "E",
        "text": "The assistant must know today's product prices, which change several times per day.",
        "text_vi": "Trợ lý phải biết giá sản phẩm hôm nay, vốn thay đổi nhiều lần mỗi ngày."
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "Fine-tuning has a place when volume is very high and inference cost is the real constraint, when latency is critical and a smaller specialized model outperforms, or when a required format cannot be held by prompting. Using it as a first fix skips prompt optimization, fast-changing prices are live state that needs a tool call, and fine-tuning actually locks you to a fixed model version rather than freeing you from version management.",
    "explanation_vi": "Fine-tuning có chỗ đứng khi volume rất lớn và chi phí inference là ràng buộc thật, khi latency tối quan trọng và model nhỏ chuyên biệt vượt trội, hoặc khi định dạng yêu cầu không giữ được bằng prompting. Dùng nó làm cách sửa đầu tiên là bỏ qua tối ưu prompt, giá thay đổi nhanh là live state cần tool call, còn fine-tuning thực ra khóa bạn vào một model version cố định chứ không giải phóng bạn khỏi việc quản lý version.",
    "source": "output/05_Pattern_Selection.md"
  },
  {
    "id": 53,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "objective": "Manage stakeholder feedback loops and expectation alignment (including SLAs)",
    "lessonId": "d6-t3",
    "question": "An online marketplace's seller-support assistant has complete dashboards for latency, error rate, cost and weekly eval scores. In week 10 the sponsor complains that answers have become 'less useful lately.' The data shows eval scores declining steadily since week 3 while error rate and latency stayed flat, so no alert ever fired. What change addresses the root cause?",
    "question_vi": "Trợ lý hỗ trợ người bán của một sàn thương mại điện tử có dashboard đầy đủ cho latency, error rate, chi phí và eval score hàng tuần. Ở tuần 10, sponsor phàn nàn rằng câu trả lời 'dạo này kém hữu ích hơn'. Dữ liệu cho thấy eval score giảm đều từ tuần 3 trong khi error rate và latency vẫn phẳng, nên không có alert nào bắn. Thay đổi nào giải quyết nguyên nhân gốc?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Double the frequency of the quarterly stakeholder review so issues are discussed more often.",
        "text_vi": "Tăng gấp đôi tần suất buổi stakeholder review hàng quý để các vấn đề được thảo luận thường xuyên hơn."
      },
      {
        "key": "B",
        "text": "Add a governance row mapping a sustained eval-score decline to an Architect review with a named owner, escalating to stakeholder review once confirmed.",
        "text_vi": "Thêm một hàng governance ánh xạ việc eval score giảm kéo dài tới Architect review có owner cụ thể, leo thang lên stakeholder review khi được xác nhận."
      },
      {
        "key": "C",
        "text": "Add an error-rate alert at a lower threshold so smaller degradations trigger notifications sooner.",
        "text_vi": "Thêm alert error rate ở ngưỡng thấp hơn để các suy giảm nhỏ hơn kích hoạt thông báo sớm hơn."
      },
      {
        "key": "D",
        "text": "Upgrade to a larger model tier so that answer quality has more headroom before users notice.",
        "text_vi": "Nâng cấp lên tier model lớn hơn để chất lượng câu trả lời có nhiều dư địa hơn trước khi người dùng nhận ra."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "The signals already existed; what was missing was the decision layer mapping slow drift to a trigger, an owner and an action. Quality drift does not raise error rates, so a tighter error alert still would not fire. A larger model skips diagnosis of prompt, data or model drift, and more frequent calendar reviews are still not a signal-driven trigger.",
    "explanation_vi": "Các signal đã tồn tại; thứ còn thiếu là decision layer ánh xạ drift chậm tới trigger, owner và action. Drift chất lượng không làm tăng error rate, nên alert lỗi chặt hơn vẫn sẽ không bắn. Model lớn hơn bỏ qua việc chẩn đoán prompt, data hay model drift, và review theo lịch dày hơn vẫn không phải là trigger dựa trên signal.",
    "source": "output_4/04_Feedback_Loops_and_SLAs.md"
  },
  {
    "id": 54,
    "topic": "Governance, Safety & Risk Management (14%)",
    "objective": "Ensure compliance with regulations (e.g., GDPR, HIPAA, FedRAMP)",
    "lessonId": "d5-t4",
    "question": "A German manufacturer runs entirely on Azure under a Microsoft enterprise agreement and has a strict requirement that Claude processing stays within the EU. The team plans to commit to Microsoft Foundry immediately because it consolidates procurement. Based on the course, what should the architect do before committing?",
    "question_vi": "Một nhà sản xuất Đức vận hành hoàn toàn trên Azure theo một thỏa thuận doanh nghiệp với Microsoft và có yêu cầu nghiêm ngặt rằng việc xử lý Claude phải nằm trong EU. Đội dự định cam kết dùng Microsoft Foundry ngay vì nó gom việc mua sắm về một chỗ. Dựa trên khóa học, architect nên làm gì trước khi cam kết?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Commit now and use the direct API's inference_geo setting as a fallback for EU pinning.",
        "text_vi": "Cam kết ngay và dùng thiết lập inference_geo của API trực tiếp làm phương án dự phòng để pin EU."
      },
      {
        "key": "B",
        "text": "Commit now, since Foundry deploys into the partner's Azure region for every Claude model.",
        "text_vi": "Cam kết ngay, vì Foundry triển khai vào region Azure của khách hàng cho mọi model Claude."
      },
      {
        "key": "C",
        "text": "Verify the hosting form and current EU residency availability for the specific models first.",
        "text_vi": "Xác minh trước hình thức hosting và khả năng lưu trú tại EU hiện hành cho đúng các model sẽ dùng."
      },
      {
        "key": "D",
        "text": "Commit now, since GDPR is satisfied by any route covered by a data processing agreement.",
        "text_vi": "Cam kết ngay, vì GDPR được đáp ứng bởi bất kỳ route nào có data processing agreement."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "The course notes that Foundry offers models hosted on Azure and others hosted on Anthropic infrastructure, and that Foundry EU data residency was not confirmed at publish, so partners with strict residency needs must verify the hosting form and availability before committing. inference_geo does not pin to the EU, and a DPA alone does not satisfy this deployment's own residency requirement.",
    "explanation_vi": "Khóa học lưu ý Foundry có model được host trên Azure và model khác được host trên hạ tầng Anthropic, và khả năng lưu trú dữ liệu tại EU của Foundry chưa được xác nhận tại thời điểm phát hành, nên khách hàng có yêu cầu residency nghiêm ngặt phải xác minh hình thức hosting và tính khả dụng trước khi cam kết. inference_geo không pin vào EU, và riêng một DPA không đáp ứng yêu cầu residency riêng của deployment này.",
    "source": "output_2/05_Enterprise_Integration_Patterns.md"
  },
  {
    "id": 55,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Select appropriate architectural patterns (workflow, agentic, augmented LLM)",
    "lessonId": "d1-t3",
    "question": "A mobile operator plans an agent that reads customer complaints and can autonomously issue account credits and refunds of any size, change plans and close accounts. Refunds above 200 dollars and account closures cannot easily be reversed. The product owner argues autonomy will cut handling time. Applying the delegation lens to the pattern, what should the architect recommend?",
    "question_vi": "Một nhà mạng di động lên kế hoạch cho một agent đọc khiếu nại của khách hàng và có thể tự động cấp tín dụng tài khoản và hoàn tiền với mọi mức, đổi gói và đóng tài khoản. Hoàn tiền trên 200 đô la và việc đóng tài khoản không dễ đảo ngược. Product owner lập luận rằng tự chủ sẽ giảm thời gian xử lý. Áp dụng lăng kính delegation cho pattern, architect nên khuyến nghị gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Approve the agent as designed, adding detailed logs of every action so that wrong refunds and account closures can be identified afterward.",
        "text_vi": "Duyệt agent như thiết kế, thêm log chi tiết mọi hành động để có thể xác định các lần hoàn tiền và đóng tài khoản sai về sau."
      },
      {
        "key": "B",
        "text": "Replace the agent with a larger model that follows refund policy more reliably, keeping all actions automated.",
        "text_vi": "Thay agent bằng model lớn hơn tuân thủ chính sách hoàn tiền tốt hơn, giữ mọi hành động tự động."
      },
      {
        "key": "C",
        "text": "Approve the agent but add a confirmation prompt shown to the customer before any refund or closure is processed.",
        "text_vi": "Duyệt agent nhưng thêm bước xác nhận hiển thị cho khách hàng trước khi xử lý hoàn tiền hay đóng tài khoản."
      },
      {
        "key": "D",
        "text": "Use a workflow: Claude drafts and classifies, rules apply refund policy, and humans approve high-value refunds and closures.",
        "text_vi": "Dùng workflow: Claude soạn và phân loại, rule áp dụng chính sách hoàn tiền, và người duyệt hoàn tiền giá trị cao cùng việc đóng tài khoản."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "The delegation lens asks whether the pattern grants appropriate or excessive authority for the risk; irreversible, high-stakes actions do not justify autonomous execution, so a workflow with rule-based policy and human approval for high-value actions fits. Logging is detective, a customer confirmation does not provide accountable approval, and a larger model does not change who should hold decision authority.",
    "explanation_vi": "Lăng kính delegation hỏi pattern trao quyền quyết định phù hợp hay quá mức so với rủi ro; hành động không đảo ngược, stakes cao không biện minh cho việc tự động thực thi, nên workflow với chính sách dựa trên rule và phê duyệt của người cho hành động giá trị cao là phù hợp. Logging là control phát hiện, xác nhận của khách hàng không phải là phê duyệt có trách nhiệm, và model lớn hơn không thay đổi việc ai nên giữ quyền quyết định.",
    "source": "output/05_Pattern_Selection.md"
  },
  {
    "id": 56,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Select appropriate architectural patterns (workflow, agentic, augmented LLM)",
    "lessonId": "d1-t3",
    "question": "A pharmaceutical company wants Claude to triage adverse-event reports: extract patient and drug details, check seriousness criteria, and draft a regulator submission for a safety officer to approve. The steps are known in advance, a wrong classification could trigger regulatory action, and reports are due within days. Walking the five factors in sequence, which pattern results and why?",
    "question_vi": "Một công ty dược muốn Claude phân loại báo cáo biến cố bất lợi: trích chi tiết bệnh nhân và thuốc, kiểm tra tiêu chí mức độ nghiêm trọng, và soạn hồ sơ nộp cơ quan quản lý để cán bộ an toàn phê duyệt. Các bước được biết trước, phân loại sai có thể dẫn tới hành động của cơ quan quản lý, và báo cáo có hạn trong vài ngày. Đi qua năm yếu tố theo thứ tự, pattern nào được chọn và vì sao?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "A workflow: enumerable steps rule out an agent, and high error cost favours deterministic guards between steps.",
        "text_vi": "Workflow: các bước liệt kê được loại agent, và error cost cao ưu tiên guard deterministic giữa các bước."
      },
      {
        "key": "B",
        "text": "A multi-agent system, because seriousness criteria and drafting are different skills that need separate agents.",
        "text_vi": "Hệ thống multi-agent, vì tiêu chí nghiêm trọng và soạn thảo là các kỹ năng khác nhau cần agent riêng."
      },
      {
        "key": "C",
        "text": "An augmented LLM, because a single call is cheapest and the latency budget of several days is very generous.",
        "text_vi": "Augmented LLM, vì một lời gọi đơn là rẻ nhất và ngân sách latency vài ngày là rất rộng."
      },
      {
        "key": "D",
        "text": "An agent, because regulatory work is complex and the model should have the freedom to decide how to handle each report.",
        "text_vi": "Agent, vì công việc pháp quy phức tạp và model nên được tự do quyết định cách xử lý từng báo cáo."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Walking the factors in order, predictability comes first: the steps can be enumerated, so an agent is ruled out, and the high error cost then favours a workflow whose deterministic guards sit between steps, with the safety officer's approval as an explicit step. Choosing an agent for complexity ignores predictability, a single call lacks step-level guards for a high-cost error, and splitting skills across agents adds failure boundaries without need.",
    "explanation_vi": "Đi qua các yếu tố theo thứ tự, predictability đứng đầu: các bước liệt kê được nên agent bị loại, và error cost cao sau đó ưu tiên workflow với guard deterministic giữa các bước, trong đó phê duyệt của cán bộ an toàn là một bước tường minh. Chọn agent vì độ phức tạp bỏ qua predictability, một lời gọi đơn thiếu guard theo bước cho lỗi có chi phí cao, còn chia kỹ năng cho nhiều agent thêm ranh giới lỗi không cần thiết.",
    "source": "output/05_Pattern_Selection.md"
  },
  {
    "id": 57,
    "topic": "Governance, Safety & Risk Management (14%)",
    "objective": "Ensure compliance with regulations (e.g., GDPR, HIPAA, FedRAMP)",
    "lessonId": "d5-t4",
    "question": "An architect is preparing the control-register entry for a hospice provider's obligation that protected health data be handled under a formal agreement. A colleague drafts: 'Control: HIPAA-ready plan under a signed BAA. Reason it counts as evidence: Claude is instructed to treat health data with care.' The reviewer rejects the entry. What correction makes it acceptable?",
    "question_vi": "Một architect đang chuẩn bị dòng control register cho nghĩa vụ của một nhà cung cấp chăm sóc cuối đời rằng dữ liệu sức khỏe được bảo vệ phải được xử lý dưới một thỏa thuận chính thức. Một đồng nghiệp soạn: 'Control: gói HIPAA-ready dưới BAA đã ký. Lý do nó được coi là bằng chứng: Claude được chỉ dẫn xử lý dữ liệu sức khỏe cẩn thận.' Reviewer từ chối dòng này. Sửa thế nào để nó được chấp nhận?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Keep the control and add the system prompt text as an appendix to the register.",
        "text_vi": "Giữ control và thêm nội dung system prompt làm phụ lục cho register."
      },
      {
        "key": "B",
        "text": "Keep the control; the evidence is the signed BAA plus the enabled configuration a reviewer can inspect.",
        "text_vi": "Giữ control; bằng chứng là BAA đã ký cộng cấu hình đã bật mà reviewer có thể kiểm tra."
      },
      {
        "key": "C",
        "text": "Keep the control and add a vendor email confirming the plan is HIPAA-ready.",
        "text_vi": "Giữ control và thêm một email của nhà cung cấp xác nhận gói là HIPAA-ready."
      },
      {
        "key": "D",
        "text": "Replace the control with a model-based filter on health terms, which proves PHI is caught at runtime.",
        "text_vi": "Thay control bằng một filter model-based cho thuật ngữ y tế, chứng minh PHI bị bắt lúc runtime."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "In the course checkpoint both parts must land: the control must fit the obligation and the reason must name inspectable evidence, which is the signed agreement plus the enabled configuration. A model instruction or the prompt text is not proof, a runtime filter does not create the required agreement, and a vendor email is an assertion rather than an inspectable artifact.",
    "explanation_vi": "Trong checkpoint của khóa học, cả hai phần đều phải đúng: control phải khớp với nghĩa vụ và lý do phải nêu bằng chứng kiểm tra được, tức là thỏa thuận đã ký cộng cấu hình đã bật. Chỉ dẫn cho model hay nội dung prompt không phải bằng chứng, filter runtime không tạo ra thỏa thuận bắt buộc, còn email của nhà cung cấp là lời khẳng định chứ không phải artifact kiểm tra được.",
    "source": "output_3/06_Compliance_and_Governance.md"
  },
  {
    "id": 58,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Design evaluation datasets and test frameworks using mixed methodologies",
    "lessonId": "d4-t2",
    "question": "A government agency's correspondence assistant produces about 20,000 letters a month. The quality lead proposes that caseworkers manually grade every letter in each release's eval run 'because public letters must be perfect'. Release cadence is weekly, and most quality criteria are format, required references and tone. What test framework should the architect recommend?",
    "question_vi": "Trợ lý soạn thư của một cơ quan nhà nước tạo khoảng 20.000 thư mỗi tháng. Trưởng nhóm chất lượng đề xuất cán bộ chấm thủ công mọi thư trong lần chạy eval của mỗi bản phát hành 'vì thư gửi công dân phải hoàn hảo'. Chu kỳ phát hành là hằng tuần, và phần lớn tiêu chí chất lượng là định dạng, tham chiếu bắt buộc và giọng văn. Architect nên khuyến nghị khung kiểm thử nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "A single LLM judge grading all criteria, including format",
        "text_vi": "Một LLM judge duy nhất chấm mọi tiêu chí, kể cả định dạng"
      },
      {
        "key": "B",
        "text": "Grade only a handful of letters by hand for each release",
        "text_vi": "Chỉ chấm thủ công một vài thư cho mỗi bản phát hành"
      },
      {
        "key": "C",
        "text": "Code checks for format and references, a calibrated judge for tone, and sampled human review for calibration and high-stakes cases",
        "text_vi": "Kiểm tra bằng code cho định dạng và tham chiếu, judge đã calibrate cho giọng văn, và human review lấy mẫu để calibrate và cho các case rủi ro cao"
      },
      {
        "key": "D",
        "text": "Keep full manual grading but release monthly instead of weekly",
        "text_vi": "Giữ chấm thủ công toàn bộ nhưng phát hành hằng tháng thay vì hằng tuần"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Mixed methodologies follow the grading ladder: deterministic format and reference checks in code, interpretive tone with a calibrated judge, and human review sampled for calibration and high-stakes or novel cases. The course also favors volume over perfection, so a handful of hand-graded letters catches fewer regressions; slowing releases for full manual review and using a judge for deterministic checks both waste effort.",
    "explanation_vi": "Phương pháp kết hợp theo grading ladder: kiểm tra định dạng và tham chiếu tất định bằng code, giọng văn cần diễn giải bằng judge đã calibrate, và human review lấy mẫu để calibrate và cho case rủi ro cao hoặc mới lạ. Khóa học cũng ưu tiên số lượng hơn sự hoàn hảo, nên vài thư chấm tay bắt được ít regression hơn; làm chậm phát hành để chấm thủ công toàn bộ hay dùng judge cho kiểm tra tất định đều lãng phí.",
    "source": "output_2/02_Evals_as_Acceptance_Criteria.md"
  },
  {
    "id": 59,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "objective": "Manage stakeholder feedback loops and expectation alignment (including SLAs)",
    "lessonId": "d6-t3",
    "question": "A government permits portal's assistant breaches its p95 latency budget of 1.5 seconds. The Architect's investigation shows the budget was set before a mandatory document-verification tool call was added, and no design can meet 1.5 seconds with that step. Users have not complained. What should the Architect do?",
    "question_vi": "Trợ lý của cổng cấp phép của chính phủ vi phạm latency budget p95 là 1,5 giây. Điều tra của Architect cho thấy budget được đặt trước khi thêm một tool call xác minh giấy tờ bắt buộc, và không thiết kế nào đạt được 1,5 giây với bước đó. Người dùng chưa phàn nàn. Architect nên làm gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Keep reporting breaches each week until the stakeholder asks for an explanation.",
        "text_vi": "Tiếp tục báo cáo vi phạm mỗi tuần cho đến khi stakeholder yêu cầu giải thích."
      },
      {
        "key": "B",
        "text": "Remove the verification tool call temporarily so the system meets the agreed latency budget.",
        "text_vi": "Tạm thời bỏ tool call xác minh để hệ thống đạt latency budget đã thống nhất."
      },
      {
        "key": "C",
        "text": "Quietly raise the threshold to 3 seconds in the monitoring configuration, since users are not affected.",
        "text_vi": "Âm thầm nâng ngưỡng lên 3 giây trong cấu hình giám sát, vì người dùng không bị ảnh hưởng."
      },
      {
        "key": "D",
        "text": "Escalate to a stakeholder review to realign the budget, explaining why the original figure no longer holds.",
        "text_vi": "Leo thang lên stakeholder review để căn chỉnh lại budget, giải thích vì sao con số ban đầu không còn phù hợp."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "The governance table's latency row says to investigate the bottleneck and escalate to a stakeholder review if the budget itself is wrong; this is expectation alignment rather than a silent threshold change. Raising the threshold quietly breaks the agreement without a decision. Removing a mandatory verification step trades away a requirement, and passively reporting breaches leaves the misalignment unresolved.",
    "explanation_vi": "Hàng latency trong governance table nói hãy điều tra điểm nghẽn và leo thang lên stakeholder review nếu chính budget đó sai; đây là căn chỉnh kỳ vọng, không phải âm thầm đổi ngưỡng. Âm thầm nâng ngưỡng là phá vỡ thỏa thuận mà không có quyết định. Bỏ bước xác minh bắt buộc là đánh đổi một requirement, và thụ động báo cáo vi phạm để sự lệch pha không được giải quyết.",
    "source": "output_4/04_Feedback_Loops_and_SLAs.md"
  },
  {
    "id": 60,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "objective": "Apply prompt engineering techniques (zero-shot, few-shot, chain-of-thought)",
    "lessonId": "d2-t3",
    "question": "A retailer's product-categorization prompt uses six few-shot examples written two years ago. The catalogue has since added new categories and retired two old ones. Accuracy has been slowly declining, mostly on items that resemble the old examples but belong to new categories. What is the most likely cause and fix?",
    "question_vi": "Prompt phân loại sản phẩm của một nhà bán lẻ dùng sáu ví dụ few-shot được viết hai năm trước. Từ đó đến nay, danh mục đã thêm các nhóm mới và loại bỏ hai nhóm cũ. Độ chính xác giảm dần, chủ yếu ở các mặt hàng giống ví dụ cũ nhưng thuộc nhóm mới. Nguyên nhân khả dĩ nhất và cách sửa là gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Stale examples are steering the model; treat examples as owned content and update them with the taxonomy.",
        "text_vi": "Ví dụ cũ đang dẫn dắt sai model; coi ví dụ là nội dung có người sở hữu và cập nhật theo bộ phân loại."
      },
      {
        "key": "B",
        "text": "The prompt is too long; remove the category list and keep only the examples.",
        "text_vi": "Prompt quá dài; gỡ danh sách nhóm và chỉ giữ lại các ví dụ."
      },
      {
        "key": "C",
        "text": "The model has drifted over time; re-pin a newer model version to restore accuracy.",
        "text_vi": "Model đã trôi lệch theo thời gian; pin lại một phiên bản model mới hơn để khôi phục độ chính xác."
      },
      {
        "key": "D",
        "text": "Few-shot is unsuitable for categorization; switch the prompt to chain-of-thought so the model reasons about each item.",
        "text_vi": "Few-shot không phù hợp cho phân loại; chuyển prompt sang chain-of-thought để model suy luận về từng mặt hàng."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "The course notes that few-shot examples are content to maintain: as the task evolves, stale examples quietly steer the model wrong, which matches errors concentrated on items resembling the old examples. A pinned model version does not drift on its own, chain-of-thought does not fix outdated demonstrations, and removing the category list removes the very specification that changed.",
    "explanation_vi": "Course lưu ý rằng ví dụ few-shot là nội dung cần bảo trì: khi tác vụ thay đổi, ví dụ cũ lặng lẽ dẫn model đi sai, khớp với lỗi tập trung ở các mặt hàng giống ví dụ cũ. Một phiên bản model đã pin không tự trôi lệch, chain-of-thought không sửa được các minh họa lỗi thời, và gỡ danh sách nhóm là gỡ chính phần đặc tả đã thay đổi.",
    "source": "output/09_Prompting_as_Architecture.md"
  },
  {
    "id": 61,
    "topic": "Governance, Safety & Risk Management (14%)",
    "objective": "Ensure compliance with regulations (e.g., GDPR, HIPAA, FedRAMP)",
    "lessonId": "d5-t4",
    "question": "A medical-device company processes PHI through Claude under a signed BAA with HIPAA compliance enabled. A product manager wants to switch on a newly released beta capability for the PHI workload next sprint, arguing that 'we already have a BAA with the vendor'. What should the architect require first?",
    "question_vi": "Một công ty thiết bị y tế xử lý PHI qua Claude dưới BAA đã ký và đã bật HIPAA compliance. Một product manager muốn bật một tính năng beta mới phát hành cho workload PHI trong sprint tới, lập luận rằng 'chúng ta đã có BAA với nhà cung cấp'. Architect nên yêu cầu điều gì trước tiên?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Ask Claude whether the beta capability is HIPAA-compliant and record its answer.",
        "text_vi": "Hỏi Claude xem tính năng beta có tuân thủ HIPAA không và ghi lại câu trả lời."
      },
      {
        "key": "B",
        "text": "Confirm the capability is on the eligible-feature list covered by the BAA and HIPAA configuration.",
        "text_vi": "Xác nhận tính năng nằm trong danh sách eligible được BAA và cấu hình HIPAA bao phủ."
      },
      {
        "key": "C",
        "text": "Enable it behind a PHI-detection classifier that blocks identifiers from reaching the feature.",
        "text_vi": "Bật nó phía sau một classifier phát hiện PHI chặn định danh tới tính năng."
      },
      {
        "key": "D",
        "text": "Enable it, since a BAA covers every capability the vendor offers on that account.",
        "text_vi": "Bật luôn, vì BAA bao phủ mọi tính năng nhà cung cấp cung cấp trên tài khoản đó."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "BAA coverage depends on feature eligibility, and beta features are generally excluded unless explicitly listed as eligible; the eligible-feature list is part of the evidence the course names. A BAA does not automatically extend to every capability, a classifier cannot change contractual scope, and the model is not a source of compliance evidence.",
    "explanation_vi": "Phạm vi BAA phụ thuộc vào tính năng có eligible hay không, và tính năng beta thường bị loại trừ trừ khi được liệt kê rõ là eligible; danh sách tính năng eligible là một phần bằng chứng mà khóa học nêu. BAA không tự động mở rộng tới mọi tính năng, classifier không thay đổi được phạm vi hợp đồng, và model không phải là nguồn bằng chứng compliance.",
    "source": "output_3/09_Supplement_Regulatory_Deep_Dive.md"
  },
  {
    "id": 62,
    "topic": "Governance, Safety & Risk Management (14%)",
    "objective": "Ensure compliance with regulations (e.g., GDPR, HIPAA, FedRAMP)",
    "lessonId": "d5-t4",
    "question": "A civilian agency runs its case-summary assistant on an authorized FedRAMP High route. To speed up iteration, the data-science team runs nightly evaluations by replaying production prompts through Claude Enterprise on the direct commercial API. The production path itself is unchanged. What is the compliance issue?",
    "question_vi": "Một cơ quan dân sự chạy trợ lý tóm tắt hồ sơ trên một route FedRAMP High đã được authorize. Để tăng tốc lặp, đội data science chạy eval hằng đêm bằng cách phát lại các prompt production qua Claude Enterprise trên API thương mại trực tiếp. Bản thân đường production không thay đổi. Vấn đề compliance là gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Only a cost issue, since running evals on two routes doubles the token spend.",
        "text_vi": "Chỉ là vấn đề chi phí, vì chạy eval trên hai route làm tăng gấp đôi chi tiêu token."
      },
      {
        "key": "B",
        "text": "None, because evaluation traffic is not part of the production system boundary.",
        "text_vi": "Không có, vì traffic eval không thuộc ranh giới hệ thống production."
      },
      {
        "key": "C",
        "text": "Workload data leaves the authorized route; Claude Enterprise on the direct API is not FedRAMP authorized.",
        "text_vi": "Dữ liệu workload rời khỏi route được authorize; Claude Enterprise trên API trực tiếp không được FedRAMP authorize."
      },
      {
        "key": "D",
        "text": "None, as long as the evaluation results are deleted after each nightly run.",
        "text_vi": "Không có, miễn là kết quả eval được xóa sau mỗi lần chạy hằng đêm."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "The evidence the course requires includes confirmation that the workload runs exclusively on the authorized route, and Claude Enterprise on the direct API is not FedRAMP authorized nor a substitute for authorized paths. Replaying production prompts moves workload data outside the boundary regardless of later deletion, and the issue is authorization, not cost.",
    "explanation_vi": "Bằng chứng mà khóa học yêu cầu gồm xác nhận rằng workload chỉ chạy trên route được authorize, và Claude Enterprise trên API trực tiếp không được FedRAMP authorize cũng không thay thế được các path đã authorize. Phát lại prompt production đưa dữ liệu workload ra ngoài ranh giới bất kể sau đó có xóa hay không, và vấn đề là authorization, không phải chi phí.",
    "source": "output_2/05_Enterprise_Integration_Patterns.md"
  },
  {
    "id": 63,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "objective": "Manage stakeholder feedback loops and expectation alignment (including SLAs)",
    "lessonId": "d6-t3",
    "question": "An insurer's claims-triage assistant has an internal quality SLO of 95 percent rubric pass rate per month. With ten days left in the month, the error budget is almost spent. The product team wants to ship a new prompt template this week to support an upcoming marketing campaign. What does error-budget practice suggest?",
    "question_vi": "Trợ lý phân loại hồ sơ bồi thường của một công ty bảo hiểm có SLO chất lượng nội bộ là tỉ lệ đạt rubric 95% mỗi tháng. Còn mười ngày nữa là hết tháng, error budget gần cạn. Đội sản phẩm muốn phát hành một prompt template mới trong tuần này để hỗ trợ một chiến dịch marketing sắp tới. Thực hành error budget gợi ý điều gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Ship the template now, because the SLO resets next month and the campaign deadline is fixed.",
        "text_vi": "Phát hành template ngay, vì SLO sẽ đặt lại vào tháng sau và hạn chót của chiến dịch là cố định."
      },
      {
        "key": "B",
        "text": "Lower the SLO to 90 percent for this month so the new template can ship without a breach.",
        "text_vi": "Hạ SLO xuống 90% cho tháng này để template mới có thể phát hành mà không vi phạm."
      },
      {
        "key": "C",
        "text": "Ship the template to all users but stop measuring the rubric pass rate until the campaign ends.",
        "text_vi": "Phát hành template cho mọi người dùng nhưng ngừng đo tỉ lệ đạt rubric cho đến khi chiến dịch kết thúc."
      },
      {
        "key": "D",
        "text": "Freeze risky changes and focus on investigation and stabilisation until the budget recovers, sharing the tradeoff with the sponsor.",
        "text_vi": "Đóng băng các thay đổi rủi ro và tập trung điều tra, ổn định cho đến khi budget phục hồi, đồng thời chia sẻ tradeoff với sponsor."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Error-budget practice says that when the budget is nearly used up, risky changes are frozen and the team prioritises stability; the timing conflict is a tradeoff for the sponsor to see, not something to hide. Shipping anyway risks breaching the commitment. Lowering the SLO on the fly or pausing measurement defeats the purpose of turning non-determinism into a governed number.",
    "explanation_vi": "Thực hành error budget nói rằng khi ngân sách lỗi gần cạn, các thay đổi rủi ro bị đóng băng và đội ưu tiên ổn định; xung đột về thời điểm là một tradeoff để sponsor thấy, không phải điều để che giấu. Vẫn phát hành có nguy cơ vi phạm cam kết. Hạ SLO tùy tiện hoặc tạm ngừng đo lường làm mất mục đích biến tính non-deterministic thành con số được quản trị.",
    "source": "output_4/10_Supplement_SLOs_Expectations_Handoff_and_Rollout.md"
  }
];
