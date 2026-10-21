window.QUIZ_DATA_CCARP_SET_7 = [
  {
    "id": 1,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Optimize token usage, latency, and cost-performance trade-offs",
    "lessonId": "d4-t5",
    "question": "A tax authority's citizen-help assistant averages about 1,200 output tokens per answer, although usability testing shows citizens prefer answers around 300 tokens with a link to the relevant guidance. Output tokens are the largest share of spend, and p95 latency is near the SLA. Which change best optimizes cost and latency?",
    "question_vi": "Trợ lý hỗ trợ công dân của một cơ quan thuế có trung bình khoảng 1.200 output token mỗi câu trả lời, dù kiểm thử khả dụng cho thấy công dân thích câu trả lời khoảng 300 token kèm liên kết đến hướng dẫn liên quan. Output token chiếm phần chi tiêu lớn nhất, và latency p95 gần chạm SLA. Thay đổi nào tối ưu tốt nhất chi phí và latency?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Request a concise structured format with a sensible max_tokens cap, monitoring stop_reason for truncation",
        "text_vi": "Yêu cầu định dạng ngắn gọn có cấu trúc với giới hạn max_tokens hợp lý, theo dõi stop_reason để phát hiện cắt cụt"
      },
      {
        "key": "B",
        "text": "Switch to the Batch API for all citizen questions",
        "text_vi": "Chuyển sang Batch API cho mọi câu hỏi của công dân"
      },
      {
        "key": "C",
        "text": "Enable extended thinking to produce more focused answers",
        "text_vi": "Bật extended thinking để tạo câu trả lời tập trung hơn"
      },
      {
        "key": "D",
        "text": "Enable prompt caching on the user questions",
        "text_vi": "Bật prompt caching cho câu hỏi của người dùng"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Output tokens are typically priced higher than input and generation time scales with length, so capping output and asking for a concise structured format reduces both cost and latency; monitoring stop_reason catches truncation. Caching targets repeated input prefixes, not varying questions or outputs; batch is unsuitable for interactive help; and extended thinking adds billed output tokens and latency.",
    "explanation_vi": "Output token thường có giá cao hơn input và thời gian sinh tỉ lệ với độ dài, nên giới hạn output và yêu cầu định dạng ngắn gọn có cấu trúc giảm cả chi phí lẫn latency; theo dõi stop_reason giúp phát hiện cắt cụt. Caching nhắm vào prefix input lặp lại, không phải câu hỏi hay output thay đổi; batch không phù hợp cho hỗ trợ tương tác; còn extended thinking thêm output token tính phí và latency.",
    "source": "output_2/09_Supplement_Integration_Mechanisms_and_Optimization.md"
  },
  {
    "id": 2,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "objective": "Communicate architectural decisions and trade-offs",
    "lessonId": "d6-t2",
    "question": "An HR policy assistant for a 40,000-employee company keeps a 50,000-token static policy handbook in context on every call. In the tradeoff deck, the Architect shows the per-call cost of the full-context option multiplied by forecast volume and concludes that retrieval is mandatory. What should the Architect evaluate before presenting this conclusion?",
    "question_vi": "Trợ lý chính sách nhân sự cho một công ty 40.000 nhân viên giữ một sổ tay chính sách tĩnh 50.000 token trong context ở mọi lần gọi. Trong bộ slide tradeoff, Architect nhân chi phí mỗi lần gọi của phương án full-context với volume dự báo và kết luận rằng retrieval là bắt buộc. Architect nên đánh giá điều gì trước khi trình bày kết luận này?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Whether a smaller model tier would be acceptable regardless of how it performs on the HR evaluation set.",
        "text_vi": "Liệu một tier model nhỏ hơn có chấp nhận được không, bất kể nó hoạt động thế nào trên bộ eval nhân sự."
      },
      {
        "key": "B",
        "text": "Whether prompt caching of the static handbook would recover much of the input cost, before treating per-call cost as fixed.",
        "text_vi": "Liệu prompt caching cho sổ tay tĩnh có thu hồi được phần lớn chi phí input không, trước khi coi chi phí mỗi lần gọi là cố định."
      },
      {
        "key": "C",
        "text": "Whether employees could be asked to paste the relevant policy section into their question themselves.",
        "text_vi": "Liệu có thể yêu cầu nhân viên tự dán phần chính sách liên quan vào câu hỏi của họ không."
      },
      {
        "key": "D",
        "text": "Whether the handbook can be truncated to the most frequently consulted sections to cut tokens.",
        "text_vi": "Liệu sổ tay có thể được cắt bớt chỉ còn các phần hay được tra cứu nhất để giảm token không."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "The course map notes that prompt caching can recover a significant portion of input cost for static content held in context, so it must be evaluated before per-call cost is treated as fixed. Downsizing the model without regard to eval results risks quality. Truncating the handbook drops required context, and pushing the work to users degrades the experience without addressing the real cost driver.",
    "explanation_vi": "Bảng ánh xạ của khóa học lưu ý rằng prompt caching có thể thu hồi phần đáng kể chi phí input cho nội dung tĩnh nằm trong context, nên cần đánh giá nó trước khi coi chi phí mỗi lần gọi là cố định. Giảm model mà không xét kết quả eval có rủi ro về chất lượng. Cắt bớt sổ tay làm mất context cần thiết, và đẩy việc sang người dùng làm giảm trải nghiệm mà không giải quyết yếu tố chi phí thật.",
    "source": "output_4/03_Tradeoffs_and_GTM.md"
  },
  {
    "id": 3,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Define evaluation metrics (accuracy, latency, cost, safety, security)",
    "lessonId": "d4-t1",
    "question": "An architect reviews a colleague's five-dimension eval framework for a mortgage document assistant. The colleague wrote one grading method per dimension and chose methods based on how critical each dimension is to the bank. Which TWO statements about grading these dimensions are correct? (Choose TWO.)",
    "question_vi": "Một architect review khung eval năm chiều của đồng nghiệp cho trợ lý tài liệu thế chấp. Đồng nghiệp viết một phương pháp chấm cho mỗi chiều và chọn phương pháp dựa trên mức độ quan trọng của từng chiều đối với ngân hàng. HAI phát biểu nào về việc chấm các chiều này là đúng? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "Summary faithfulness can be fully verified with a regex against the source",
        "text_vi": "Độ trung thành của tóm tắt có thể kiểm chứng hoàn toàn bằng regex so với nguồn"
      },
      {
        "key": "B",
        "text": "Latency should be graded by human review because customers notice delays",
        "text_vi": "Latency nên được chấm bằng human review vì khách hàng nhận thấy sự chậm trễ"
      },
      {
        "key": "C",
        "text": "Cost per document should be estimated by an LLM judge reading each output",
        "text_vi": "Chi phí mỗi tài liệu nên được ước tính bởi LLM judge đọc từng output"
      },
      {
        "key": "D",
        "text": "A deterministic security check stays in code even though the stakes are high",
        "text_vi": "Một kiểm tra bảo mật tất định vẫn dùng code dù mức độ rủi ro cao"
      },
      {
        "key": "E",
        "text": "Extraction accuracy against known values belongs in code-based evals",
        "text_vi": "Accuracy của trích xuất so với giá trị đã biết thuộc về code-based eval"
      }
    ],
    "answer": [
      "D",
      "E"
    ],
    "explanation": "The grading ladder chooses methods by the nature of the check: known values and deterministic security scans go to code regardless of stakes. Latency and cost are numbers computed from logs, so human review and a judge are the wrong tools, while faithfulness is interpretive and cannot be fully verified with a regex.",
    "explanation_vi": "Grading ladder chọn phương pháp theo bản chất phép kiểm tra: giá trị đã biết và phép quét bảo mật tất định dùng code bất kể mức độ rủi ro. Latency và chi phí là con số tính từ log, nên human review và judge là công cụ sai, còn faithfulness cần diễn giải và không thể kiểm chứng hoàn toàn bằng regex.",
    "source": "output_2/07_Exercise_Evaluation_Framework.md"
  },
  {
    "id": 4,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Design end-to-end architectures (input → processing → output → feedback loops)",
    "lessonId": "d1-t2",
    "question": "An online-learning company changed the retrieval chunking behind its course-help assistant. The team ran the eval suite after the change, saw 84 percent accuracy, and then debated whether 84 percent was good enough to ship. Last quarter a similar debate ended with a release that had to be rolled back. How should the offline feedback loop be designed for future changes?",
    "question_vi": "Một công ty học trực tuyến thay đổi cách chunking retrieval phía sau trợ lý hỗ trợ khóa học. Đội chạy bộ eval sau thay đổi, thấy độ chính xác 84 phần trăm, rồi tranh luận 84 phần trăm đã đủ tốt để phát hành chưa. Quý trước, một cuộc tranh luận tương tự kết thúc bằng một bản phát hành phải rollback. Vòng phản hồi offline nên được thiết kế thế nào cho các thay đổi về sau?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Ship every change and rely on production complaints as the signal for whether a rollback is needed.",
        "text_vi": "Phát hành mọi thay đổi và dựa vào khiếu nại trong production làm tín hiệu có cần rollback hay không."
      },
      {
        "key": "B",
        "text": "Let the product manager decide after each eval run, since business context matters more than a fixed number.",
        "text_vi": "Để product manager quyết định sau mỗi lần chạy eval, vì bối cảnh kinh doanh quan trọng hơn một con số cố định."
      },
      {
        "key": "C",
        "text": "Decide pass thresholds and rollback criteria before running the eval, then release only if the gate passes.",
        "text_vi": "Quyết định ngưỡng đạt và tiêu chí rollback trước khi chạy eval, rồi chỉ release khi vượt gate."
      },
      {
        "key": "D",
        "text": "Raise the eval pass mark after each release so the threshold always matches the latest observed accuracy level.",
        "text_vi": "Nâng mức đạt eval sau mỗi lần release để ngưỡng luôn khớp với mức độ chính xác quan sát được gần nhất."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "The improvement loop runs changes through an eval gate whose thresholds, like rollback criteria, are set before the change rather than after seeing the result; otherwise the gate becomes a negotiation. Deciding after each run is exactly the threshold-after-results anti-pattern, relying on complaints makes customers the detector, and moving the bar to the last observed score is still setting it after the fact.",
    "explanation_vi": "Vòng cải tiến đưa thay đổi qua một eval gate mà ngưỡng, giống như tiêu chí rollback, được đặt trước thay đổi chứ không phải sau khi thấy kết quả; nếu không, gate trở thành một cuộc thương lượng. Quyết định sau mỗi lần chạy chính là anti-pattern đặt ngưỡng sau khi xem kết quả, dựa vào khiếu nại biến khách hàng thành bộ phát hiện, còn dời mức đạt theo điểm quan sát gần nhất vẫn là đặt ngưỡng sau sự việc.",
    "source": "output/11_Assembly_Recap.md"
  },
  {
    "id": 5,
    "topic": "Integration (19%)",
    "objective": "Analyze observability challenges and select monitoring strategies at scale",
    "lessonId": "d3-t4",
    "question": "A retailer's support assistant had three prompt revisions and one model-version change over two weeks. Task success dropped from 81% to 74% with no errors or latency change, and nobody can tell which change caused it because traces do not record which prompt or model version produced each response. What should be added?",
    "question_vi": "Trợ lý hỗ trợ của một nhà bán lẻ đã có ba lần sửa prompt và một lần đổi phiên bản model trong hai tuần. Task success giảm từ 81% xuống 74% mà không có lỗi hay thay đổi latency, và không ai biết thay đổi nào gây ra vì trace không ghi phiên bản prompt hay model nào đã tạo ra mỗi phản hồi. Cần bổ sung gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Full-text logging of every conversation so reviewers can read the responses directly.",
        "text_vi": "Log toàn văn mọi cuộc hội thoại để người review đọc trực tiếp các phản hồi."
      },
      {
        "key": "B",
        "text": "A higher alert threshold so small quality fluctuations stop paging the team.",
        "text_vi": "Ngưỡng cảnh báo cao hơn để các dao động chất lượng nhỏ không còn gọi đội trực."
      },
      {
        "key": "C",
        "text": "A rollback of all four changes at once, followed by re-applying them later, using the existing tooling and no additional approvals.",
        "text_vi": "Rollback cả bốn thay đổi cùng lúc, sau đó áp dụng lại chúng sau, dùng công cụ hiện có và không cần thêm phê duyệt."
      },
      {
        "key": "D",
        "text": "Tag every trace with the prompt identifier and pinned model version, and mark deployments on the dashboard.",
        "text_vi": "Gắn prompt identifier và phiên bản model đã pin vào mọi trace, và đánh dấu các lần deploy trên dashboard."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Change attribution requires every trace to carry the prompt, model and index versions, plus deployment markers, so a metric movement can be tied to the change that caused it. A higher alert threshold hides the signal. Full-text logs add PII exposure without version linkage, and a blanket rollback may restore the metric but teaches nothing about which change was responsible.",
    "explanation_vi": "Change attribution đòi hỏi mọi trace mang theo phiên bản prompt, model và index, cùng các mốc deploy, để một biến động metric có thể được gắn với thay đổi đã gây ra nó. Ngưỡng cảnh báo cao hơn che giấu tín hiệu. Log toàn văn làm tăng phơi nhiễm PII mà không liên kết với phiên bản, còn rollback đồng loạt có thể khôi phục metric nhưng không cho biết thay đổi nào chịu trách nhiệm.",
    "source": "output_2/06_AB_Testing_and_Observability.md"
  },
  {
    "id": 6,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Optimize token usage, latency, and cost-performance trade-offs",
    "lessonId": "d4-t5",
    "question": "A home-improvement retailer's assistant places a 4,000-token store policy block in the cached prefix, followed by a snapshot of current stock levels and prices, then the customer question. Cache hit rates are low, and customers sometimes get prices that changed an hour earlier. How should the prompt be restructured?",
    "question_vi": "Trợ lý của một nhà bán lẻ đồ gia dụng đặt khối chính sách cửa hàng 4.000 token trong prefix được cache, tiếp theo là snapshot mức tồn kho và giá hiện tại, rồi đến câu hỏi của khách hàng. Tỉ lệ cache hit thấp, và khách hàng đôi khi nhận được giá đã thay đổi từ một giờ trước. Prompt nên được tái cấu trúc thế nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Keep only the static policy in the cached prefix and fetch stock and prices via a tool call in the dynamic part",
        "text_vi": "Chỉ giữ chính sách tĩnh trong prefix được cache và lấy tồn kho cùng giá qua tool call ở phần động"
      },
      {
        "key": "B",
        "text": "Cache the stock and price snapshot too, and refresh the cache hourly",
        "text_vi": "Cache cả snapshot tồn kho và giá, và refresh cache mỗi giờ"
      },
      {
        "key": "C",
        "text": "Move the policy block after the customer question",
        "text_vi": "Chuyển khối chính sách xuống sau câu hỏi của khách hàng"
      },
      {
        "key": "D",
        "text": "Disable caching entirely to avoid stale data",
        "text_vi": "Tắt caching hoàn toàn để tránh dữ liệu cũ"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Caching works on an identical prefix, so static content goes first and dynamic content last; when content must reflect live state, caching creates a consistency window, and live data should come from a tool call in the dynamic part. Caching the snapshot widens the staleness window, disabling caching gives up savings on the stable policy, and putting the policy after the question breaks the cacheable prefix.",
    "explanation_vi": "Caching hoạt động trên prefix giống hệt nhau, nên nội dung tĩnh đặt trước và nội dung động đặt sau; khi nội dung phải phản ánh live state, caching tạo ra cửa sổ không nhất quán, và dữ liệu live nên lấy từ tool call ở phần động. Cache cả snapshot làm rộng cửa sổ dữ liệu cũ, tắt caching từ bỏ mức tiết kiệm trên phần chính sách ổn định, còn đặt chính sách sau câu hỏi phá vỡ prefix có thể cache.",
    "source": "output_2/03_POC_to_Production.md"
  },
  {
    "id": 7,
    "topic": "Governance, Safety & Risk Management (14%)",
    "objective": "Apply human-in-the-loop validation strategies",
    "lessonId": "d5-t3",
    "question": "A law firm wants Claude to help with client engagement: summarizing intake calls, drafting engagement letters, and deciding whether to accept a client given potential conflicts of interest, for which a partner is professionally accountable. Which delegation map best applies the Reversibility, Stakes and Accountability lens?",
    "question_vi": "Một công ty luật muốn Claude hỗ trợ tiếp nhận khách hàng: tóm tắt cuộc gọi tiếp nhận, soạn thư cam kết dịch vụ, và quyết định có nhận khách hàng hay không khi có khả năng xung đột lợi ích, việc mà một luật sư thành viên chịu trách nhiệm nghề nghiệp. Bản đồ giao việc nào áp dụng tốt nhất lăng kính Reversibility, Stakes và Accountability?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Claude decides acceptance when confidence is high, and the partner reviews low-confidence cases.",
        "text_vi": "Claude quyết định nhận khách hàng khi confidence cao, còn luật sư review các ca confidence thấp."
      },
      {
        "key": "B",
        "text": "Summaries by Claude; letters drafted by Claude for the partner to finalize; acceptance retained by the partner.",
        "text_vi": "Tóm tắt do Claude làm; thư do Claude soạn để luật sư hoàn thiện; quyết định nhận khách hàng do luật sư giữ."
      },
      {
        "key": "C",
        "text": "Claude owns all three steps, with the partner reviewing a monthly sample of decisions.",
        "text_vi": "Claude đảm nhận cả ba bước, với luật sư thành viên review một mẫu quyết định hằng tháng."
      },
      {
        "key": "D",
        "text": "The partner owns all three steps, since any client-facing work carries professional liability.",
        "text_vi": "Luật sư thành viên đảm nhận cả ba bước, vì mọi việc hướng khách hàng đều mang trách nhiệm nghề nghiệp."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Decomposition assigns AI-appropriate work (summaries) to Claude, collaborative work (Claude drafts, a person decides) for letters, and human-retained work where accountability and stakes demand it, such as accepting a client under conflict rules. Letting Claude own acceptance, even when confident, ignores accountability, and keeping everything with the partner over-assigns humans to low-stakes language work.",
    "explanation_vi": "Decomposition giao việc AI-appropriate (tóm tắt) cho Claude, việc collaborative (Claude soạn, người quyết) cho thư, và việc human-retained ở nơi trách nhiệm giải trình và stakes đòi hỏi, như quyết định nhận khách hàng theo quy tắc xung đột lợi ích. Để Claude quyết định nhận khách hàng, kể cả khi confident, là bỏ qua accountability, còn giữ mọi thứ cho luật sư là giao quá nhiều cho con người ở việc ngôn ngữ rủi ro thấp.",
    "source": "output/04_Decomposition.md"
  },
  {
    "id": 8,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Apply decomposition techniques for complex problem solving",
    "lessonId": "d1-t5",
    "question": "A pharmaceutical distributor's partner request reads: 'review incoming orders, determine whether a controlled-substance order exceeds the licensed monthly quantity, and hold suspicious orders for compliance'. Orders arrive as free-text emails and PDFs from pharmacies, and the licensed quantities live in a compliance database. Which two decomposition choices are correct? (Choose TWO.)",
    "question_vi": "Yêu cầu của partner một nhà phân phối dược phẩm: 'review đơn hàng đến, xác định đơn chất kiểm soát có vượt số lượng giấy phép hằng tháng không, và giữ các đơn đáng ngờ cho compliance'. Đơn đến dưới dạng email văn bản tự do và PDF từ các nhà thuốc, và số lượng được cấp phép nằm trong cơ sở dữ liệu compliance. Hai lựa chọn decomposition nào đúng? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "Orders Claude finds ambiguous are released automatically to avoid delaying legitimate customers.",
        "text_vi": "Các đơn Claude thấy mơ hồ được tự động thả đi để không làm chậm khách hàng hợp pháp."
      },
      {
        "key": "B",
        "text": "A single prompt performs extraction, quantity comparison and the final hold decision, to keep one auditable component.",
        "text_vi": "Một prompt đơn thực hiện trích xuất, so sánh số lượng và quyết định giữ cuối cùng, để giữ một thành phần kiểm toán được."
      },
      {
        "key": "C",
        "text": "Code compares extracted quantities with the compliance database; Claude reads the free-text order and summarizes the reasons.",
        "text_vi": "Code so số lượng được trích xuất với cơ sở dữ liệu compliance; Claude đọc đơn văn bản tự do và tóm tắt lý do."
      },
      {
        "key": "D",
        "text": "Claude compares the order quantity with the licensed quantity it learned during training and holds orders it judges excessive.",
        "text_vi": "Claude so số lượng đơn với số lượng được cấp phép mà nó đã học khi huấn luyện và giữ các đơn nó cho là quá mức."
      },
      {
        "key": "E",
        "text": "Holding and release decisions on suspicious controlled-substance orders stay with compliance staff, supported by Claude's summary.",
        "text_vi": "Quyết định giữ và thả đơn chất kiểm soát đáng ngờ do nhân viên compliance giữ, được hỗ trợ bởi bản tóm tắt của Claude."
      }
    ],
    "answer": [
      "C",
      "E"
    ],
    "explanation": "The quantity comparison is a deterministic check against live authoritative data so code owns it while Claude does language work, and holding or releasing controlled-substance orders is a high-stakes, accountable decision that stays with compliance staff. Training knowledge cannot hold license data, auto-releasing ambiguous orders fails unsafe, and a single prompt merges rule, data lookup and decision in the model.",
    "explanation_vi": "So sánh số lượng là kiểm tra deterministic với dữ liệu có thẩm quyền live nên code sở hữu trong khi Claude làm việc ngôn ngữ, và việc giữ hay thả đơn chất kiểm soát là quyết định stakes cao, có trách nhiệm, thuộc nhân viên compliance. Kiến thức huấn luyện không thể chứa dữ liệu giấy phép, tự thả đơn mơ hồ là lỗi theo hướng không an toàn, và một prompt đơn gộp quy tắc, tra cứu dữ liệu và quyết định vào model.",
    "source": "output/04_Decomposition.md"
  },
  {
    "id": 9,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Conduct A/B testing and iterative improvements",
    "lessonId": "d4-t3",
    "question": "A public-sector agency is evaluating a model change for its permit-application assistant. The team ran the comparison first and is now debating what score drop would be acceptable, with some members arguing for 3 points and others for 6 points after seeing a 4-point drop. What should the architect insist on for this and future model changes?",
    "question_vi": "Một cơ quan nhà nước đang đánh giá việc đổi model cho trợ lý hồ sơ cấp phép. Team đã chạy so sánh trước và giờ đang tranh luận mức giảm điểm nào là chấp nhận được, một số người đề xuất 3 điểm và số khác đề xuất 6 điểm sau khi thấy điểm giảm 4. Architect nên yêu cầu điều gì cho lần này và các lần đổi model sau?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Accept the change, since a 4-point drop is the midpoint of the debate",
        "text_vi": "Chấp nhận thay đổi, vì giảm 4 điểm nằm giữa hai đề xuất"
      },
      {
        "key": "B",
        "text": "Let the vendor's release notes decide the acceptable drop",
        "text_vi": "Để release note của nhà cung cấp quyết định mức giảm chấp nhận được"
      },
      {
        "key": "C",
        "text": "Set the delta threshold and rollback criterion before running the eval",
        "text_vi": "Đặt ngưỡng chênh lệch và rollback criterion trước khi chạy eval"
      },
      {
        "key": "D",
        "text": "Re-run the eval until the drop falls below 3 points",
        "text_vi": "Chạy lại eval cho đến khi mức giảm xuống dưới 3 điểm"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "The course requires a delta threshold set in advance below which you do not ship; setting it after the run means writing acceptance criteria after the build, and a pre-set criterion avoids negotiating with yourself when data arrives. Splitting the difference, deferring to vendor notes or re-running until the number looks better are all post-hoc rationalizations.",
    "explanation_vi": "Khóa học yêu cầu một ngưỡng chênh lệch đặt trước mà dưới mức đó thì không ship; đặt sau khi chạy nghĩa là viết tiêu chí nghiệm thu sau khi xây xong, và tiêu chí đặt trước giúp tránh tự đàm phán với chính mình khi có dữ liệu. Lấy điểm giữa, dựa vào release note của nhà cung cấp hay chạy lại đến khi con số đẹp đều là hợp lý hóa sau sự việc.",
    "source": "output/08_Model_Context_Strategy.md"
  },
  {
    "id": 10,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "objective": "Design system prompts, templates, and guardrails",
    "lessonId": "d2-t2",
    "question": "A manufacturer's procurement assistant reads supplier contracts and must report whether total late-delivery penalties across 12 clauses exceed a contractual cap. In testing, totals are occasionally wrong by small amounts even with careful step-by-step instructions. How should this step be designed?",
    "question_vi": "Trợ lý mua sắm của một nhà sản xuất đọc hợp đồng nhà cung cấp và phải báo cáo tổng tiền phạt giao hàng trễ trên 12 điều khoản có vượt mức trần trong hợp đồng hay không. Khi kiểm thử, tổng đôi khi sai lệch một khoản nhỏ dù đã có chỉ dẫn từng bước cẩn thận. Bước này nên được thiết kế thế nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Ask Claude to compute the total twice and report only when both answers agree.",
        "text_vi": "Yêu cầu Claude tính tổng hai lần và chỉ báo cáo khi hai kết quả khớp nhau."
      },
      {
        "key": "B",
        "text": "Use Opus with extended thinking so the arithmetic is reasoned through more carefully, clause by clause.",
        "text_vi": "Dùng Opus với extended thinking để phép tính được suy luận cẩn thận hơn, từng điều khoản một."
      },
      {
        "key": "C",
        "text": "Add five few-shot examples of correctly computed penalty totals to the prompt.",
        "text_vi": "Thêm năm ví dụ few-shot về tổng tiền phạt được tính đúng vào prompt."
      },
      {
        "key": "D",
        "text": "Have Claude extract the penalty values into a schema and let code compute and compare the total.",
        "text_vi": "Để Claude trích xuất các giá trị tiền phạt vào schema và để code tính tổng và so sánh."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "For high-stakes numerical accuracy the course says deterministic computation or tool execution should own the answer, with the model extracting values into a structured output. Extended thinking, few-shot examples and self-consistency checks all still leave the model owning the arithmetic, which is where its precision limit lies.",
    "explanation_vi": "Với độ chính xác số liệu có rủi ro cao, course nói rằng tính toán tất định hoặc thực thi tool phải sở hữu câu trả lời, còn model trích xuất giá trị vào output có cấu trúc. Extended thinking, ví dụ few-shot và kiểm tra tự nhất quán đều vẫn để model sở hữu phép tính, vốn là nơi có giới hạn về độ chính xác của nó.",
    "source": "output/02_How_Claude_Behaves.md"
  },
  {
    "id": 11,
    "topic": "Governance, Safety & Risk Management (14%)",
    "objective": "Apply human-in-the-loop validation strategies",
    "lessonId": "d5-t3",
    "question": "A logistics company has expanded its Claude agents from two workflows to fourteen in a year. Under delivery pressure, several new workflows now execute customs filings without any human checkpoint, and nobody can say which workflows act without review. Which practice from the course addresses this?",
    "question_vi": "Một công ty logistics đã mở rộng agent Claude từ hai lên mười bốn workflow trong một năm. Dưới áp lực tiến độ, nhiều workflow mới giờ thực hiện khai báo hải quan mà không có checkpoint nào của con người, và không ai biết workflow nào hành động mà không qua review. Thực hành nào trong khóa học giải quyết vấn đề này?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Diligence: keep explicit accountability checkpoints and audit workflows for gaps where AI acts unreviewed.",
        "text_vi": "Diligence: giữ các checkpoint trách nhiệm rõ ràng và audit các workflow để tìm lỗ hổng nơi AI hành động mà không được review."
      },
      {
        "key": "B",
        "text": "Delegation: let the agents decide for themselves which filings need a human checkpoint.",
        "text_vi": "Delegation: để các agent tự quyết định khai báo nào cần checkpoint của con người."
      },
      {
        "key": "C",
        "text": "Discernment: train staff to judge whether each customs filing output looks acceptable.",
        "text_vi": "Discernment: đào tạo nhân viên đánh giá từng output khai báo hải quan có chấp nhận được không."
      },
      {
        "key": "D",
        "text": "Consolidation: merge the fourteen workflows into one agent so it has a single review queue.",
        "text_vi": "Hợp nhất: gộp mười bốn workflow vào một agent để chỉ có một hàng chờ review."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Diligence, as the course applies it to deployment, means maintaining explicit human accountability checkpoints, recognizing when automation pressure erodes oversight, and auditing workflows for gaps where AI acts without review as automation scales. Discernment judges individual outputs but does not find unreviewed workflows, letting agents choose their own checkpoints removes accountability, and merging workflows does not reveal or close the gaps.",
    "explanation_vi": "Diligence, như khóa học áp dụng vào deployment, nghĩa là duy trì các checkpoint trách nhiệm rõ ràng của con người, nhận ra khi áp lực tự động hóa bào mòn oversight, và audit các workflow để tìm lỗ hổng nơi AI hành động mà không được review khi tự động hóa mở rộng. Discernment đánh giá từng output nhưng không tìm ra workflow chưa được review, để agent tự chọn checkpoint làm mất trách nhiệm giải trình, còn gộp workflow không làm lộ ra hay đóng lại các lỗ hổng.",
    "source": "output_3/05_Human_Review_Routing.md"
  },
  {
    "id": 12,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "objective": "Design system prompts, templates, and guardrails",
    "lessonId": "d2-t2",
    "question": "A university has about 40 ad-hoc prompts for student-facing assistants, each written by a different department, with no owner and inconsistent safety wording. Incidents are hard to trace to a specific prompt. The CIO asks where the prompt design effort should be concentrated. What should the architect recommend?",
    "question_vi": "Một trường đại học có khoảng 40 prompt tùy hứng cho các trợ lý phục vụ sinh viên, mỗi prompt do một khoa khác nhau viết, không có người sở hữu và câu chữ an toàn không nhất quán. Các sự cố rất khó truy vết về một prompt cụ thể. CIO hỏi nên tập trung công sức thiết kế prompt vào đâu. Architect nên khuyến nghị gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Let each department keep tuning its own prompt, since local owners know their students best.",
        "text_vi": "Để mỗi khoa tiếp tục tinh chỉnh prompt của mình, vì người sở hữu tại chỗ hiểu sinh viên của họ nhất."
      },
      {
        "key": "B",
        "text": "Consolidate them into owned templates with shared guardrail scaffolding that can be reviewed and governed.",
        "text_vi": "Hợp nhất chúng thành các template có người sở hữu với phần khung guardrail dùng chung có thể review và quản trị."
      },
      {
        "key": "C",
        "text": "Add a monthly reminder asking departments to check that their safety wording is still present and unchanged in each prompt.",
        "text_vi": "Thêm lời nhắc hằng tháng yêu cầu các khoa kiểm tra câu chữ an toàn vẫn còn đó và không bị thay đổi trong từng prompt."
      },
      {
        "key": "D",
        "text": "Replace the prompts with a single larger model that needs no per-department instructions.",
        "text_vi": "Thay các prompt bằng một model lớn hơn duy nhất không cần chỉ dẫn riêng cho từng khoa."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "The course says templates concentrate complexity in one place where it can be reviewed and governed, instead of scattering it across ad-hoc prompts no one owns, and a vague prompt is paid for in every request needing correction. Leaving departments to tune their own copies preserves the drift, a larger model does not supply missing scope or guardrails, and reminders are not a control.",
    "explanation_vi": "Course nói rằng template tập trung độ phức tạp vào một nơi có thể review và quản trị, thay vì rải rác trong các prompt tùy hứng không ai sở hữu, và một prompt mơ hồ phải trả giá ở mọi request cần sửa. Để các khoa tự tinh chỉnh bản riêng là duy trì sự trôi lệch, model lớn hơn không cung cấp scope hay guardrail còn thiếu, và lời nhắc không phải là biện pháp kiểm soát.",
    "source": "output/09_Prompting_as_Architecture.md"
  },
  {
    "id": 13,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Conduct A/B testing and iterative improvements",
    "lessonId": "d4-t3",
    "question": "A product team is choosing which of several planned experiments needs the largest sample. One is a minor wording change in a low-stakes FAQ bot; another adds a routing category expected to capture 30% of volume; a third tests whether moving a simple formatting task from Sonnet to Haiku causes no quality loss, which must hold for all traffic. Which needs the largest sample?",
    "question_vi": "Một team sản phẩm đang chọn xem thí nghiệm nào trong số các thí nghiệm dự kiến cần cỡ mẫu lớn nhất. Một là thay đổi từ ngữ nhỏ trong bot FAQ rủi ro thấp; một là thêm category định tuyến dự kiến chiếm 30% volume; thí nghiệm thứ ba kiểm tra xem việc chuyển tác vụ định dạng đơn giản từ Sonnet sang Haiku có không làm giảm chất lượng hay không, điều phải đúng cho toàn bộ traffic. Thí nghiệm nào cần cỡ mẫu lớn nhất?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "The FAQ wording change, because it is the most frequent request",
        "text_vi": "Thay đổi từ ngữ FAQ, vì đó là request thường gặp nhất"
      },
      {
        "key": "B",
        "text": "All three need the same sample because they share a platform",
        "text_vi": "Cả ba cần cùng cỡ mẫu vì dùng chung nền tảng"
      },
      {
        "key": "C",
        "text": "The Sonnet-to-Haiku test, a small effect requiring high confidence",
        "text_vi": "Thí nghiệm Sonnet sang Haiku, một hiệu ứng nhỏ đòi hỏi độ tin cậy cao"
      },
      {
        "key": "D",
        "text": "The new routing category, because it affects 30% of volume",
        "text_vi": "Category định tuyến mới, vì nó ảnh hưởng 30% volume"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "On the course's experiment-design plane, the smallest effects needing the highest confidence require the largest samples; proving no quality loss across all traffic means detecting small differences with high certainty. A large effect like a 30% routing category is easier to detect, and a low-stakes wording change needs little confidence; sample size depends on effect and confidence, not the shared platform.",
    "explanation_vi": "Trên mặt phẳng thiết kế thí nghiệm của khóa học, hiệu ứng nhỏ nhất cần độ tin cậy cao nhất đòi hỏi cỡ mẫu lớn nhất; chứng minh không giảm chất lượng trên toàn bộ traffic nghĩa là phải phát hiện khác biệt nhỏ với độ chắc chắn cao. Hiệu ứng lớn như category định tuyến chiếm 30% dễ phát hiện hơn, còn thay đổi từ ngữ rủi ro thấp cần ít độ tin cậy; cỡ mẫu phụ thuộc vào hiệu ứng và độ tin cậy, không phụ thuộc vào nền tảng dùng chung.",
    "source": "output_2/06_AB_Testing_and_Observability.md"
  },
  {
    "id": 14,
    "topic": "Developer Productivity & Operational Enablement (7%)",
    "objective": "Improve developer workflows using AI-assisted tooling",
    "lessonId": "d7-t2",
    "question": "An online-education company's engineering director reports Claude Code adoption as a success because 95 percent of engineers have logged in this quarter. The Architect suspects the figure hides how the tool is actually used and wants a measure that shows whether workflows have really changed. Which measure best reflects real adoption?",
    "question_vi": "Giám đốc kỹ thuật của một công ty giáo dục trực tuyến báo cáo việc áp dụng Claude Code là thành công vì 95 phần trăm kỹ sư đã đăng nhập trong quý này. Architect nghi ngờ con số này che giấu cách công cụ thực sự được dùng và muốn một thước đo cho thấy workflow có thật sự thay đổi hay không. Thước đo nào phản ánh tốt nhất adoption thực sự?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "The number of seats purchased compared with the number of engineers on the payroll.",
        "text_vi": "Số seat đã mua so với số kỹ sư trong biên chế."
      },
      {
        "key": "B",
        "text": "The average session length, since longer sessions suggest deeper engagement with the tool.",
        "text_vi": "Độ dài phiên trung bình, vì phiên dài hơn cho thấy mức độ gắn bó sâu hơn với công cụ."
      },
      {
        "key": "C",
        "text": "The total number of prompts sent per engineer per day, compared across teams each week.",
        "text_vi": "Tổng số prompt mỗi kỹ sư gửi mỗi ngày, so sánh giữa các team hằng tuần."
      },
      {
        "key": "D",
        "text": "Which workflows were converted, such as the share of pull requests with AI review.",
        "text_vi": "Những workflow nào đã được chuyển đổi, ví dụ tỷ lệ pull request có AI review."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "High login counts can still mean stalling at basic chat, so adoption should be measured by which workflows were actually converted to AI-assisted ones with review discipline. Prompt counts and session length reward activity rather than workflow change and mirror the usage-target distractor, and seats purchased measures access, which the course stresses is not adoption.",
    "explanation_vi": "Số lượt đăng nhập cao vẫn có thể là stalling at basic chat, nên adoption cần được đo bằng các workflow đã thực sự được chuyển sang có AI hỗ trợ kèm kỷ luật review. Số prompt và độ dài phiên thưởng cho hoạt động chứ không phải thay đổi workflow, giống đáp án nhiễu kiểu chỉ tiêu sử dụng, còn số seat đã mua đo quyền truy cập, mà course nhấn mạnh rằng truy cập không phải là adoption.",
    "source": "output_5/03_Developer_Workflows_and_Verification.md"
  },
  {
    "id": 15,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "objective": "Design system prompts, templates, and guardrails",
    "lessonId": "d2-t2",
    "question": "A hospital's patient-portal assistant has the guardrail line 'Be careful with medical advice.' Reviewers find it sometimes recommends dosage changes and sometimes refuses to explain clinic opening hours. Leadership believes a guardrail is already in place. What is the architect's most accurate assessment?",
    "question_vi": "Trợ lý cổng bệnh nhân của một bệnh viện có dòng guardrail 'Hãy cẩn thận với lời khuyên y tế.' Người review phát hiện nó đôi khi khuyên thay đổi liều thuốc và đôi khi từ chối giải thích giờ mở cửa phòng khám. Ban lãnh đạo tin rằng guardrail đã có sẵn. Đánh giá chính xác nhất của architect là gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "It is an underspecified guardrail that looks like a control; bound it explicitly and add a structural check.",
        "text_vi": "Đó là guardrail đặc tả thiếu, trông như một biện pháp kiểm soát; hãy giới hạn tường minh và thêm kiểm tra cấu trúc."
      },
      {
        "key": "B",
        "text": "The behaviour shows non-determinism that no prompt change can affect, so only human review helps.",
        "text_vi": "Hành vi này cho thấy tính bất định mà không thay đổi prompt nào tác động được, nên chỉ có người review mới giúp được."
      },
      {
        "key": "C",
        "text": "The guardrail works but needs emphasis; repeating it in capital letters will make it reliable.",
        "text_vi": "Guardrail hoạt động nhưng cần nhấn mạnh; lặp lại bằng chữ in hoa sẽ làm nó đáng tin cậy."
      },
      {
        "key": "D",
        "text": "The model tier is too small to interpret medical intent; moving to Opus will resolve both errors without prompt changes.",
        "text_vi": "Model tier quá nhỏ để hiểu ý định y tế; chuyển sang Opus sẽ giải quyết cả hai lỗi mà không cần sửa prompt."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "The course warns that an underspecified guardrail is worse than a missing one because it creates the appearance of a control without the substance; the model fills the vague rule differently each time, producing both over- and under-restriction. The fix is explicit bounds (what is never allowed, what is always allowed) plus structural enforcement. Emphasis or a bigger model leaves the rule undefined, and the variation is caused by the gap, not by something prompts cannot influence.",
    "explanation_vi": "Course cảnh báo rằng guardrail đặc tả thiếu còn tệ hơn không có vì nó tạo ra vẻ ngoài của một biện pháp kiểm soát mà không có thực chất; model lấp quy tắc mơ hồ mỗi lần một kiểu, sinh ra cả hạn chế quá mức lẫn hạn chế thiếu. Cách sửa là giới hạn tường minh (điều gì không bao giờ được phép, điều gì luôn được phép) cộng với thực thi bằng cấu trúc. Nhấn mạnh hay model lớn hơn vẫn để quy tắc không được định nghĩa, và sự biến thiên là do khoảng trống gây ra, không phải do thứ mà prompt không thể tác động.",
    "source": "output/09_Prompting_as_Architecture.md"
  },
  {
    "id": 16,
    "topic": "Governance, Safety & Risk Management (14%)",
    "objective": "Apply human-in-the-loop validation strategies",
    "lessonId": "d5-t3",
    "question": "A DevOps team's infrastructure agent asks an engineer to approve each of the 30 to 60 steps in a typical change, from listing resources to editing configs. Engineers now click approve without reading, and one approved a step that dropped a production table. How should the architect redesign the review?",
    "question_vi": "Agent hạ tầng của một đội DevOps yêu cầu kỹ sư phê duyệt từng bước trong 30 đến 60 bước của một thay đổi thông thường, từ liệt kê tài nguyên đến sửa cấu hình. Kỹ sư giờ bấm approve mà không đọc, và một người đã duyệt một bước xóa một bảng production. Architect nên thiết kế lại việc review thế nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Keep per-step approval but add a mandatory 10-second delay before each approve button activates.",
        "text_vi": "Giữ phê duyệt từng bước nhưng thêm độ trễ bắt buộc 10 giây trước khi nút approve kích hoạt."
      },
      {
        "key": "B",
        "text": "Approve the plan up front, hard-gate irreversible steps such as drops and deploys, and sample the rest.",
        "text_vi": "Duyệt kế hoạch từ đầu, đặt gate cứng cho các bước không thể đảo ngược như xóa và deploy, và lấy mẫu phần còn lại."
      },
      {
        "key": "C",
        "text": "Require two engineers to approve every step so that no single person rubber-stamps.",
        "text_vi": "Yêu cầu hai kỹ sư phê duyệt mọi bước để không ai một mình bấm duyệt cho có."
      },
      {
        "key": "D",
        "text": "Remove approvals entirely and rely on post-incident review of the agent's logs.",
        "text_vi": "Bỏ hoàn toàn phê duyệt và dựa vào review log của agent sau sự cố."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Sign-off on every action adds friction without meaningful safety gain and causes consent fatigue; the course pattern moves review to higher-value checkpoints such as plan review, places gates before irreversible actions, and samples lower-stakes ones. Delays and dual approval keep the same flood of approvals, and removing gates leaves irreversible actions unreviewed.",
    "explanation_vi": "Duyệt mọi hành động thêm ma sát mà không tăng an toàn đáng kể và gây consent fatigue; pattern của khóa học chuyển review lên các checkpoint giá trị cao hơn như plan review, đặt gate trước các hành động không thể đảo ngược, và lấy mẫu các hành động rủi ro thấp. Độ trễ hay phê duyệt kép vẫn giữ nguyên dòng phê duyệt dồn dập, còn bỏ gate để các hành động không thể đảo ngược diễn ra mà không được xem xét.",
    "source": "output_3/05_Human_Review_Routing.md"
  },
  {
    "id": 17,
    "topic": "Integration (19%)",
    "objective": "Analyze observability challenges and select monitoring strategies at scale",
    "lessonId": "d3-t4",
    "question": "A government agency's policy Q&A assistant is built on RAG. Over three months answers degraded while latency, error rates and the pinned model version stayed constant; staff had added hundreds of documents without a full reindex. Which metric, tracked as a system metric, would have caught this early?",
    "question_vi": "Trợ lý hỏi đáp chính sách của một cơ quan nhà nước được xây trên RAG. Trong ba tháng, câu trả lời xuống cấp dần trong khi latency, tỷ lệ lỗi và phiên bản model đã pin vẫn giữ nguyên; nhân viên đã thêm hàng trăm tài liệu mà không reindex đầy đủ. Metric nào, nếu được theo dõi như một metric hệ thống, lẽ ra đã phát hiện sớm vấn đề?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Average output token count per answer, using the existing tooling and no additional approvals.",
        "text_vi": "Số output token trung bình mỗi câu trả lời, dùng công cụ hiện có và không cần thêm phê duyệt."
      },
      {
        "key": "B",
        "text": "p95 latency of the end-to-end request.",
        "text_vi": "p95 latency của request đầu-cuối."
      },
      {
        "key": "C",
        "text": "Retrieval precision and recall on a labelled query set, plus the 'not found' rate.",
        "text_vi": "Retrieval precision và recall trên tập truy vấn có nhãn, cộng tỷ lệ 'không tìm thấy'."
      },
      {
        "key": "D",
        "text": "HTTP 5xx error rate on the retrieval service.",
        "text_vi": "Tỷ lệ lỗi HTTP 5xx trên dịch vụ truy xuất."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "The RAG failure mode is retrieval quality drift, and the mitigation is to monitor retrieval precision and recall as system metrics, not just output quality; a rising 'not found' rate is another quality signal. Output length, 5xx errors and p95 latency are operational metrics that stay flat while the index silently falls out of alignment with the corpus.",
    "explanation_vi": "Failure mode của RAG là retrieval quality drift, và biện pháp là giám sát retrieval precision và recall như metric hệ thống, không chỉ chất lượng output; tỷ lệ 'không tìm thấy' tăng là một tín hiệu chất lượng khác. Độ dài output, lỗi 5xx và p95 latency là metric vận hành, vẫn đi ngang trong khi index âm thầm lệch khỏi corpus.",
    "source": "output_2/03_POC_to_Production.md"
  },
  {
    "id": 18,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "objective": "Communicate architectural decisions and trade-offs",
    "lessonId": "d6-t2",
    "question": "A logistics firm's CFO approved a full-context design for a customs-document assistant after hearing it was 'simpler' and cost 'about three cents per call.' Two months later, at 350,000 calls a month on a largely static regulation corpus, the CFO disputes the invoice and asks why nobody warned them. Which two elements should the original presentation have included? (Choose TWO.)",
    "question_vi": "CFO của một công ty logistics phê duyệt thiết kế full-context cho trợ lý chứng từ hải quan sau khi nghe rằng nó 'đơn giản hơn' và tốn 'khoảng ba cent mỗi lần gọi'. Hai tháng sau, với 350.000 lần gọi mỗi tháng trên một kho quy định phần lớn là tĩnh, CFO phản đối hóa đơn và hỏi vì sao không ai cảnh báo. Bài trình bày ban đầu lẽ ra phải có hai yếu tố nào? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "The reversal cost of moving to retrieval once the system had been built around full context.",
        "text_vi": "Reversal cost của việc chuyển sang retrieval khi hệ thống đã được xây quanh full context."
      },
      {
        "key": "B",
        "text": "A list of the newest model features available on the direct API but not yet on cloud routes.",
        "text_vi": "Danh sách các tính năng model mới nhất có trên direct API nhưng chưa có trên các route cloud."
      },
      {
        "key": "C",
        "text": "The cost translated to a monthly figure at production volume, with prompt caching of the static corpus evaluated.",
        "text_vi": "Chi phí quy đổi thành con số hàng tháng ở production volume, có đánh giá prompt caching cho kho quy định tĩnh."
      },
      {
        "key": "D",
        "text": "A more detailed architecture diagram showing every component involved in a customs request.",
        "text_vi": "Một architecture diagram chi tiết hơn cho thấy mọi thành phần tham gia vào một yêu cầu hải quan."
      },
      {
        "key": "E",
        "text": "A benchmark comparing several models' accuracy on publicly available customs classification tasks.",
        "text_vi": "Một benchmark so sánh độ chính xác của nhiều model trên các tác vụ phân loại hải quan công khai."
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "The course's watch-out shows exactly these gaps: a per-call figure instead of the monthly line at volume, caching left unevaluated for static content, and no statement of what unwinding the design would cost. Benchmarks and more detailed diagrams add technical detail rather than business translation. Feature availability across routes does not bear on the cost decision the CFO approved.",
    "explanation_vi": "Phần cảnh báo của khóa học cho thấy đúng những khoảng trống này: con số mỗi lần gọi thay vì khoản hàng tháng ở volume thật, caching không được đánh giá cho nội dung tĩnh, và không nêu việc gỡ bỏ thiết kế sẽ tốn gì. Benchmark và diagram chi tiết hơn thêm chi tiết kỹ thuật thay vì chuyển dịch sang ngôn ngữ kinh doanh. Tính khả dụng tính năng giữa các route không liên quan đến quyết định chi phí mà CFO đã phê duyệt.",
    "source": "output_4/03_Tradeoffs_and_GTM.md"
  },
  {
    "id": 19,
    "topic": "Integration (19%)",
    "objective": "Apply retrieval strategies matched to data shape and query pattern",
    "lessonId": "d3-t6",
    "question": "A national tax authority wants an assistant that answers questions about tax regulations, which are amended several times a year, and every answer must cite the specific provision so officers can verify it. The full regulation set is far larger than the context window. Which approach best fits?",
    "question_vi": "Cơ quan thuế quốc gia muốn một trợ lý trả lời câu hỏi về quy định thuế, vốn được sửa đổi nhiều lần mỗi năm, và mọi câu trả lời phải trích dẫn điều khoản cụ thể để cán bộ có thể kiểm chứng. Toàn bộ bộ quy định lớn hơn nhiều so với context window. Cách tiếp cận nào phù hợp nhất?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Rely on the model's training knowledge and add a disclaimer to every answer, configured once and applied across every environment.",
        "text_vi": "Dựa vào tri thức huấn luyện của model và thêm tuyên bố miễn trừ vào mọi câu trả lời, cấu hình một lần và áp dụng cho mọi môi trường."
      },
      {
        "key": "B",
        "text": "Place a condensed summary of all regulations in the system prompt.",
        "text_vi": "Đặt bản tóm tắt cô đọng của mọi quy định vào system prompt."
      },
      {
        "key": "C",
        "text": "Fine-tune a model on the current regulations and retrain after each amendment.",
        "text_vi": "Fine-tune một model trên quy định hiện hành và huấn luyện lại sau mỗi lần sửa đổi."
      },
      {
        "key": "D",
        "text": "Use RAG over the regulations with provision-level metadata and require citations in answers.",
        "text_vi": "Dùng RAG trên các quy định với metadata cấp điều khoản và yêu cầu trích dẫn trong câu trả lời."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Retrieval earns its place when the knowledge base is too large for the context, changes faster than the prompt is redeployed, and source citation is required, all of which apply here. Fine-tuning lags every amendment and does not provide citations. A condensed summary loses the provision detail needed for verification, and training knowledge is neither current nor citable.",
    "explanation_vi": "Retrieval phát huy giá trị khi knowledge base quá lớn so với context, thay đổi nhanh hơn chu kỳ triển khai lại prompt, và bắt buộc trích dẫn nguồn, tất cả đều đúng ở đây. Fine-tune luôn chậm hơn mỗi lần sửa đổi và không cung cấp trích dẫn. Bản tóm tắt cô đọng làm mất chi tiết điều khoản cần cho việc kiểm chứng, còn tri thức huấn luyện vừa không cập nhật vừa không trích dẫn được.",
    "source": "output/08_Model_Context_Strategy.md"
  },
  {
    "id": 20,
    "topic": "Integration (19%)",
    "objective": "Evaluate accuracy-latency trade-offs and justify configuration decisions",
    "lessonId": "d3-t3",
    "question": "An insurer's claims triage step asks Claude for a narrative assessment averaging 1,500 output tokens, but the downstream system only reads three fields: severity, coverage flag and next action. The step is now the largest contributor to both latency and cost. Which change is most appropriate?",
    "question_vi": "Bước phân loại hồ sơ bồi thường của một công ty bảo hiểm yêu cầu Claude viết đánh giá dạng văn xuôi trung bình 1.500 output token, nhưng hệ thống hạ nguồn chỉ đọc ba trường: mức độ nghiêm trọng, cờ quyền lợi và hành động tiếp theo. Bước này hiện đóng góp lớn nhất vào cả latency lẫn chi phí. Thay đổi nào phù hợp nhất?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Request a concise structured output with the three fields, set a fitting max_tokens and monitor stop_reason.",
        "text_vi": "Yêu cầu output có cấu trúc ngắn gọn gồm ba trường, đặt max_tokens phù hợp và theo dõi stop_reason."
      },
      {
        "key": "B",
        "text": "Cache the narrative outputs so that similar claims reuse earlier assessments.",
        "text_vi": "Cache các output văn xuôi để các hồ sơ tương tự dùng lại đánh giá trước đó."
      },
      {
        "key": "C",
        "text": "Keep the narrative but enable streaming so the downstream system receives text sooner.",
        "text_vi": "Giữ phần văn xuôi nhưng bật streaming để hệ thống hạ nguồn nhận văn bản sớm hơn."
      },
      {
        "key": "D",
        "text": "Move the step to a larger tier so the narrative is produced more quickly.",
        "text_vi": "Chuyển bước này sang tier lớn hơn để phần văn xuôi được sinh nhanh hơn."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Output tokens are typically more expensive than input and generation time scales with length, so limiting output to what downstream needs cuts both cost and latency; watching stop_reason catches truncation. Streaming helps perceived latency for humans, not total time for a machine consumer. Larger tiers are generally slower and costlier, and prompt caching stores prefixes, not responses.",
    "explanation_vi": "Output token thường đắt hơn input và thời gian sinh tỷ lệ với độ dài, nên giới hạn output ở đúng những gì hạ nguồn cần sẽ giảm cả chi phí lẫn latency; theo dõi stop_reason giúp phát hiện bị cắt cụt. Streaming giúp latency cảm nhận cho con người, không giảm tổng thời gian cho một hệ thống máy tiêu thụ. Tier lớn hơn thường chậm và đắt hơn, còn prompt caching lưu prefix, không lưu phản hồi.",
    "source": "output_2/09_Supplement_Integration_Mechanisms_and_Optimization.md"
  },
  {
    "id": 21,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Define evaluation metrics (accuracy, latency, cost, safety, security)",
    "lessonId": "d4-t1",
    "question": "An online education provider uses Claude to write feedback on student essays. One requirement is that feedback must be encouraging and age-appropriate for 13-year-olds while still pointing out errors. The team is choosing how to grade this requirement across 3,000 essays per release. Which grading method fits best?",
    "question_vi": "Một nhà cung cấp giáo dục trực tuyến dùng Claude để viết nhận xét bài luận của học sinh. Một yêu cầu là nhận xét phải mang tính khích lệ và phù hợp lứa tuổi 13 trong khi vẫn chỉ ra lỗi. Team đang chọn cách chấm yêu cầu này trên 3.000 bài luận cho mỗi lần phát hành. Phương pháp chấm nào phù hợp nhất?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "A regex that checks for a list of positive words in each response",
        "text_vi": "Một regex kiểm tra danh sách từ ngữ tích cực trong mỗi phản hồi"
      },
      {
        "key": "B",
        "text": "An LLM judge with a detailed rubric, constrained verdicts and calibration against teacher-labeled samples",
        "text_vi": "Một LLM judge với rubric chi tiết, constrained verdict và calibrate với mẫu do giáo viên gán nhãn"
      },
      {
        "key": "C",
        "text": "A length check confirming feedback stays under 200 words",
        "text_vi": "Kiểm tra độ dài xác nhận nhận xét dưới 200 từ"
      },
      {
        "key": "D",
        "text": "Teachers reading all 3,000 feedback texts for every release",
        "text_vi": "Giáo viên đọc toàn bộ 3.000 bản nhận xét cho mỗi lần phát hành"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Tone and appropriateness require interpretation, so the grading ladder climbs to an LLM judge made rigorous with rubrics, constrained verdicts and calibration against human labels. A word-list regex or a length check measures something deterministic but not the requirement, and full teacher review of every output is the most expensive option and does not scale per release.",
    "explanation_vi": "Giọng điệu và mức độ phù hợp cần diễn giải, nên grading ladder leo lên LLM judge được làm nghiêm ngặt bằng rubric, constrained verdict và calibrate với nhãn của con người. Regex theo danh sách từ hay kiểm tra độ dài đo một thứ tất định nhưng không phải yêu cầu này, còn giáo viên review toàn bộ output là phương án đắt nhất và không scale được cho mỗi lần phát hành.",
    "source": "output_2/02_Evals_as_Acceptance_Criteria.md"
  },
  {
    "id": 22,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Design end-to-end architectures (input → processing → output → feedback loops)",
    "lessonId": "d1-t2",
    "question": "A national bank wants one assistant to answer two kinds of customer questions: 'What is the fee for an international transfer?' from a published fee schedule updated quarterly, and 'What is my current account balance?'. The team proposes a single design for both to keep things simple. Which design is correct?",
    "question_vi": "Một ngân hàng quốc gia muốn một trợ lý trả lời hai loại câu hỏi của khách hàng: 'Phí chuyển tiền quốc tế là bao nhiêu?' dựa trên biểu phí công bố cập nhật hằng quý, và 'Số dư tài khoản hiện tại của tôi là bao nhiêu?'. Đội đề xuất một thiết kế chung cho cả hai cho đơn giản. Thiết kế nào đúng?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Place the fee schedule and each customer's latest balance in the system prompt so the model always has them in context.",
        "text_vi": "Đặt biểu phí và số dư mới nhất của từng khách hàng vào system prompt để model luôn có chúng trong context."
      },
      {
        "key": "B",
        "text": "Retrieval over an index containing both the fee schedule and nightly balance exports, so one mechanism serves both questions.",
        "text_vi": "Retrieval trên một index chứa cả biểu phí và dữ liệu số dư xuất hằng đêm, để một cơ chế phục vụ cả hai câu hỏi."
      },
      {
        "key": "C",
        "text": "Retrieval over the versioned fee schedule, and an authenticated tool call to core banking for the customer's balance.",
        "text_vi": "Retrieval trên biểu phí có version, và tool call có xác thực tới core banking cho số dư của khách hàng."
      },
      {
        "key": "D",
        "text": "Tool calls for both, with the fee schedule served by a new pricing API built specifically for the assistant.",
        "text_vi": "Tool call cho cả hai, với biểu phí được cung cấp bởi một pricing API mới xây riêng cho trợ lý."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Match each data type to its mechanism: a published fee schedule is stable knowledge suited to retrieval, while a balance is personal live state that must come from the system of record through an authenticated, authorized tool call. Indexing balances makes them stale snapshots, building a new API for stable published content adds integration without need, and putting balances in the prompt fails both freshness and security.",
    "explanation_vi": "Ghép mỗi loại dữ liệu với cơ chế của nó: biểu phí công bố là tri thức ổn định phù hợp với retrieval, còn số dư là live state cá nhân phải lấy từ system of record qua tool call có xác thực và phân quyền. Đưa số dư vào index biến chúng thành snapshot cũ, xây API mới cho nội dung ổn định đã công bố là thêm tích hợp không cần thiết, còn đặt số dư vào prompt thất bại cả về độ tươi dữ liệu lẫn bảo mật.",
    "source": "output/06_Reference_Architectures.md"
  },
  {
    "id": 23,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Apply decomposition techniques for complex problem solving",
    "lessonId": "d1-t5",
    "question": "A claims-triage assistant must 'email the adjuster'. The team marks it as one Claude-owned step: Claude writes the message and sends it directly through an email tool, including claims above a high-value threshold. A reviewer flags the step as badly decomposed. What is the better design?",
    "question_vi": "Một trợ lý phân loại claim phải 'gửi email cho adjuster'. Đội đánh dấu đây là một bước do Claude sở hữu: Claude viết thư và gửi trực tiếp qua một tool email, kể cả các claim trên ngưỡng giá trị cao. Một reviewer cho rằng bước này được phân rã kém. Thiết kế tốt hơn là gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Keep the single Claude step but instruct it in the prompt to be especially careful with high-value claims.",
        "text_vi": "Giữ bước Claude đơn nhưng chỉ dẫn trong prompt là phải đặc biệt cẩn thận với claim giá trị cao."
      },
      {
        "key": "B",
        "text": "Replace the free-text email with a fixed template filled by the email system, with no use of Claude.",
        "text_vi": "Thay email tự do bằng mẫu cố định do hệ thống email điền, không dùng Claude."
      },
      {
        "key": "C",
        "text": "Have a person write and send every adjuster email, because messages about claims are too sensitive for a model.",
        "text_vi": "Để người viết và gửi mọi email cho adjuster, vì thư về claim quá nhạy cảm đối với model."
      },
      {
        "key": "D",
        "text": "Split it: Claude drafts, the email system sends, and a human approves anything above the value threshold.",
        "text_vi": "Tách ra: Claude soạn, hệ thống email gửi, và người duyệt mọi thứ trên ngưỡng giá trị."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "A step that sounds like one action often splits into drafting (language work for Claude), sending (the email system) and approval (a human above a threshold, based on stakes and reversibility). Removing Claude entirely or having people do everything discards its strength, and a prompt instruction to be careful is not a gate.",
    "explanation_vi": "Một bước nghe như một hành động thường tách thành soạn thảo là việc ngôn ngữ của Claude, gửi là việc của hệ thống email, và phê duyệt là việc của người trên ngưỡng, dựa vào stakes và khả năng đảo ngược. Bỏ hoàn toàn Claude hay để người làm mọi thứ là bỏ thế mạnh của nó, và chỉ dẫn 'cẩn thận' trong prompt không phải là gate.",
    "source": "output/04_Decomposition.md"
  },
  {
    "id": 24,
    "topic": "Governance, Safety & Risk Management (14%)",
    "objective": "Identify risks, limitations, and failure modes of LLM systems",
    "lessonId": "d5-t2",
    "question": "An HR-tech company's onboarding agent writes records into customers' HRIS systems. Errors and timeouts are logged, but when the agent writes a subtly wrong start date, nothing records it, and the security team now refuses to approve wider autonomy. Which TWO observability changes address their concern? (Choose TWO.)",
    "question_vi": "Agent onboarding của một công ty HR-tech ghi bản ghi vào hệ thống HRIS của khách hàng. Lỗi và timeout được log, nhưng khi agent ghi một ngày bắt đầu sai một cách tinh vi thì không gì ghi lại, và đội bảo mật hiện từ chối phê duyệt mở rộng quyền tự chủ. HAI thay đổi observability nào giải quyết mối lo của họ? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "Log the outcome of each write, including whether the HRIS accepted it and any rejection signals.",
        "text_vi": "Log kết quả của mỗi lần ghi, gồm việc HRIS có chấp nhận không và mọi tín hiệu từ chối."
      },
      {
        "key": "B",
        "text": "Increase log verbosity for errors and timeouts so failures are captured in more detail.",
        "text_vi": "Tăng mức chi tiết log cho lỗi và timeout để thất bại được ghi lại kỹ hơn."
      },
      {
        "key": "C",
        "text": "Rely on Anthropic's API-side retention as the audit trail for agent activity.",
        "text_vi": "Dựa vào cơ chế lưu giữ phía API của Anthropic làm audit trail cho hoạt động của agent."
      },
      {
        "key": "D",
        "text": "Record every agentic action with actor, parameters and result so it can be reconstructed.",
        "text_vi": "Ghi lại mọi hành động của agent kèm tác nhân, tham số và kết quả để có thể tái dựng."
      },
      {
        "key": "E",
        "text": "Store full employee records in plaintext in the log so reviewers can compare values.",
        "text_vi": "Lưu toàn bộ hồ sơ nhân viên dạng plaintext trong log để reviewer so sánh giá trị."
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "explanation": "LLM systems fail quietly with subtly wrong outputs, so the course adds outcome logging (downstream accept or reject signals) and an audit trail of every agentic action; an action taken but not logged cannot be approved. More error verbosity still misses silent wrongness, plaintext personal data in logs creates a new exposure, and the API does not retain conversation content by default, so it is not your audit trail.",
    "explanation_vi": "Hệ thống LLM thất bại âm thầm với output sai tinh vi, nên khóa học bổ sung log kết quả (tín hiệu chấp nhận hoặc từ chối ở hạ nguồn) và audit trail cho mọi hành động của agent; một hành động đã làm mà không được log thì không thể được phê duyệt. Log lỗi chi tiết hơn vẫn bỏ sót cái sai âm thầm, dữ liệu cá nhân plaintext trong log tạo ra rủi ro lộ mới, và API mặc định không lưu nội dung hội thoại nên không phải là audit trail của bạn.",
    "source": "output_2/05_Enterprise_Integration_Patterns.md"
  },
  {
    "id": 25,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "objective": "Communicate architectural decisions and trade-offs",
    "lessonId": "d6-t2",
    "question": "A telehealth provider's operations director asks for 'the fastest possible design' for a visit-summary assistant and suggests removing per-interaction logging. The workflow carries a health-privacy obligation with an audit-trail requirement. The director has budget authority over the project. What is the Architect's best response?",
    "question_vi": "Giám đốc vận hành của một nhà cung cấp dịch vụ khám từ xa yêu cầu 'thiết kế nhanh nhất có thể' cho trợ lý tóm tắt buổi khám và đề xuất bỏ logging từng tương tác. Quy trình có nghĩa vụ health-privacy kèm yêu cầu audit trail. Giám đốc có quyền quyết định ngân sách cho dự án. Phản hồi tốt nhất của Architect là gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Frame the gain, the audit detail given up and the reversal cost, including compliance exposure, and propose other latency improvements.",
        "text_vi": "Trình bày phần được, chi tiết audit bị mất và reversal cost, bao gồm rủi ro compliance, và đề xuất các cách cải thiện latency khác."
      },
      {
        "key": "B",
        "text": "Accept the request, since the director controls the budget and is entitled to prioritise latency over logging.",
        "text_vi": "Chấp nhận yêu cầu, vì giám đốc kiểm soát ngân sách và có quyền ưu tiên latency hơn logging."
      },
      {
        "key": "C",
        "text": "Remove logging for launch to hit the speed target, then re-enable it before the first scheduled audit.",
        "text_vi": "Bỏ logging khi launch để đạt mục tiêu tốc độ, rồi bật lại trước đợt audit theo lịch đầu tiên."
      },
      {
        "key": "D",
        "text": "Decline the request and keep full logging without discussion, since the obligation leaves no room for choice.",
        "text_vi": "Từ chối yêu cầu và giữ logging đầy đủ mà không thảo luận, vì nghĩa vụ không chừa chỗ cho lựa chọn."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "In the cumulative exercise the Architect neither rejects nor silently accepts the preference, but frames the three elements so the stakeholder sees that restoring logging means redesign and a compliance exposure to disclose, then pursues latency in other ways. Accepting without that framing is not an informed choice. Refusing without explanation does not help the stakeholder decide, and a logging gap cannot be filled retroactively before an audit.",
    "explanation_vi": "Trong bài tổng hợp, Architect không bác bỏ cũng không âm thầm chấp nhận preference, mà trình bày ba yếu tố để stakeholder thấy rằng khôi phục logging nghĩa là thiết kế lại và một rủi ro compliance phải công bố, rồi tìm cách cải thiện latency theo hướng khác. Chấp nhận mà không trình bày như vậy thì không phải lựa chọn có hiểu biết. Từ chối không giải thích không giúp stakeholder ra quyết định, và khoảng trống log không thể được lấp lại hồi tố trước một đợt audit.",
    "source": "output_4/07_Cumulative_Regulated_Deployment.md"
  },
  {
    "id": 26,
    "topic": "Integration (19%)",
    "objective": "Apply retrieval strategies matched to data shape and query pattern",
    "lessonId": "d3-t6",
    "question": "A utility's customer assistant combines a routing workflow with two branches: RAG over tariff documents and a tool branch that queries meter readings. The team measures only one end-to-end satisfaction score. After a tariff-document update, that score stays flat, but complaints about tariff answers rise. What should change in how the system is evaluated?",
    "question_vi": "Trợ lý khách hàng của một công ty tiện ích kết hợp một routing workflow với hai nhánh: RAG trên tài liệu biểu giá và một nhánh tool truy vấn chỉ số đồng hồ. Đội chỉ đo một điểm hài lòng đầu-cuối duy nhất. Sau khi tài liệu biểu giá được cập nhật, điểm đó vẫn đi ngang, nhưng khiếu nại về câu trả lời biểu giá tăng. Cách đánh giá hệ thống nên thay đổi thế nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Keep one end-to-end score but sample more conversations each week.",
        "text_vi": "Giữ một điểm đầu-cuối nhưng lấy mẫu nhiều cuộc hội thoại hơn mỗi tuần."
      },
      {
        "key": "B",
        "text": "Give each component its own eval set, including retrieval metrics for the tariff branch.",
        "text_vi": "Cấp cho mỗi thành phần eval set riêng, gồm metric truy xuất cho nhánh biểu giá."
      },
      {
        "key": "C",
        "text": "Merge both branches into a single agent so a single score is meaningful.",
        "text_vi": "Gộp hai nhánh thành một agent duy nhất để một điểm số duy nhất có ý nghĩa."
      },
      {
        "key": "D",
        "text": "Replace the satisfaction score with average latency, which is easier to measure, with the change documented in the team's runbook.",
        "text_vi": "Thay điểm hài lòng bằng latency trung bình, vốn dễ đo hơn, với thay đổi được ghi lại trong runbook của đội."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Each reference architecture carries its own eval contract; a composed system that looks healthy at the top level can mask a failing component, and the RAG branch fails differently, through recall, from the tool branch. More samples of the same blended score still hide the branch-level drop. Merging branches into an agent removes structure, and latency does not measure answer correctness.",
    "explanation_vi": "Mỗi kiến trúc tham chiếu mang theo hợp đồng eval riêng; một hệ thống ghép trông khỏe mạnh ở cấp tổng có thể che giấu một thành phần đang hỏng, và nhánh RAG hỏng theo kiểu khác, qua recall, so với nhánh tool. Lấy thêm mẫu cho cùng một điểm trộn chung vẫn che giấu sự sụt giảm ở cấp nhánh. Gộp các nhánh thành agent làm mất cấu trúc, còn latency không đo tính đúng của câu trả lời.",
    "source": "output/06_Reference_Architectures.md"
  },
  {
    "id": 27,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Align solutions to business value pillars (efficiency, transformation, productivity, cost, performance SLAs)",
    "lessonId": "d1-t6",
    "question": "A bank's customer-service director requires p95 latency under 1.5 seconds for a chatbot, a fixed monthly budget, and human-quality answers on common questions. The first proposal runs the strongest model tier with extended thinking on every message. What is the architect's best response?",
    "question_vi": "Giám đốc dịch vụ khách hàng của một ngân hàng yêu cầu p95 latency dưới 1,5 giây cho chatbot, ngân sách tháng cố định và câu trả lời chất lượng như con người cho các câu hỏi thường gặp. Đề xuất đầu tiên chạy tier model mạnh nhất với extended thinking cho mọi tin nhắn. Phản hồi tốt nhất của architect là gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Reject the project, because no combination of Claude features can meet all three requirements together.",
        "text_vi": "Từ chối dự án, vì không tổ hợp tính năng Claude nào đáp ứng được cả ba yêu cầu cùng lúc."
      },
      {
        "key": "B",
        "text": "Keep the strongest tier but ask the director to relax the latency target until the budget has been confirmed.",
        "text_vi": "Giữ tier mạnh nhất nhưng đề nghị giám đốc nới mục tiêu latency cho đến khi ngân sách được xác nhận."
      },
      {
        "key": "C",
        "text": "Name the tradeoffs: faster tier on the user path, RAG and caching for FAQs, proven by evals and measured p95 and cost.",
        "text_vi": "Nêu các đánh đổi: tier nhanh trên đường người dùng, RAG và caching cho FAQ, chứng minh bằng eval cùng p95 và chi phí đo được."
      },
      {
        "key": "D",
        "text": "Accept it, because answer quality is the first priority and budget can be revisited once the chatbot is live.",
        "text_vi": "Chấp nhận, vì chất lượng câu trả lời là ưu tiên số một và ngân sách có thể xem lại khi chatbot đã chạy."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Performance SLAs and cost are architectural inputs: use a fast tier on the user path, retrieval and caching for stable content, avoid default thinking, and defend the choice with evals and measured p95 and cost. Accepting the strongest tier everywhere repeats the Opus-everywhere failure, and refusing the project or dropping the SLA ignores levers that exist.",
    "explanation_vi": "Performance SLA và chi phí là đầu vào kiến trúc: dùng tier nhanh trên đường người dùng, retrieval và caching cho nội dung ổn định, tránh thinking mặc định, và bảo vệ lựa chọn bằng eval cùng p95 và chi phí đo được. Chấp nhận tier mạnh nhất ở mọi nơi là lặp lại lỗi Opus-everywhere, còn từ chối dự án hay bỏ SLA là bỏ qua các đòn bẩy sẵn có.",
    "source": "output/13_Supplement_Business_Value_End_to_End.md"
  },
  {
    "id": 28,
    "topic": "Integration (19%)",
    "objective": "Evaluate tool/agent configuration for capability bloat",
    "lessonId": "d3-t1",
    "question": "An insurer deploys a claims-correspondence agent whose only job is to read claim files and draft letters to policyholders. Its configuration also includes approve_payout and update_policy_limits tools inherited from an earlier pilot. The security team proposes adding real-time alerts whenever either tool is invoked. As the architect reviewing the configuration, what should you recommend?",
    "question_vi": "Một công ty bảo hiểm triển khai agent soạn thư bồi thường với nhiệm vụ duy nhất là đọc hồ sơ bồi thường và soạn thư gửi khách hàng. Cấu hình của agent còn có tool approve_payout và update_policy_limits được kế thừa từ một đợt thử nghiệm trước. Đội bảo mật đề xuất thêm cảnh báo thời gian thực mỗi khi một trong hai tool này được gọi. Với vai trò Architect review cấu hình, bạn nên khuyến nghị gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Move the agent to a more capable model tier so it reliably avoids the payout tools.",
        "text_vi": "Chuyển agent sang tier model mạnh hơn để nó tránh dùng các tool chi trả một cách đáng tin cậy."
      },
      {
        "key": "B",
        "text": "Keep both tools but add the proposed alerts and a weekly review of every invocation, in line with how the earlier pilot was handled.",
        "text_vi": "Giữ cả hai tool nhưng thêm cảnh báo được đề xuất và review hằng tuần mọi lần gọi, phù hợp với cách xử lý ở giai đoạn thử nghiệm trước."
      },
      {
        "key": "C",
        "text": "Keep both tools but require a human confirmation dialog before either one executes.",
        "text_vi": "Giữ cả hai tool nhưng yêu cầu hộp thoại xác nhận của người trước khi một trong hai tool thực thi."
      },
      {
        "key": "D",
        "text": "Remove approve_payout and update_policy_limits from this agent and record why they were removed.",
        "text_vi": "Gỡ approve_payout và update_policy_limits khỏi agent này và ghi lại lý do gỡ bỏ."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "The role never needs to approve payouts or change limits, so least privilege means removing those capabilities and documenting the justification, which eliminates the attack surface. Alerts and weekly reviews are detective controls that only notice misuse after it happens. A confirmation dialog is a compensating control that still leaves unneeded capability in place, and model tier has nothing to do with authorization scope.",
    "explanation_vi": "Vai trò này không bao giờ cần duyệt chi trả hay thay đổi hạn mức, nên least privilege nghĩa là gỡ bỏ các năng lực đó và ghi lại lý do, qua đó loại bỏ bề mặt tấn công. Cảnh báo và review hằng tuần là biện pháp phát hiện, chỉ nhận ra việc lạm dụng sau khi nó đã xảy ra. Hộp thoại xác nhận là biện pháp bù đắp và vẫn giữ lại năng lực không cần thiết, còn tier model không liên quan gì đến phạm vi phân quyền.",
    "source": "output_2/05_Enterprise_Integration_Patterns.md"
  },
  {
    "id": 29,
    "topic": "Developer Productivity & Operational Enablement (7%)",
    "objective": "Support debugging and operational issue resolution",
    "lessonId": "d7-t3",
    "question": "At a regional hospital, a first-line engineer followed the runbook entry for intermittent tool failures on the clinical-scheduling assistant, but the failures continued after every listed step. The engineer spent most of the night unsure whether to keep trying, wake someone up, or contact the vendor. Which team-operations artifact is missing?",
    "question_vi": "Tại một bệnh viện khu vực, một kỹ sư tuyến đầu đã làm theo entry runbook cho lỗi tool chập chờn của trợ lý xếp lịch lâm sàng, nhưng lỗi vẫn tiếp diễn sau mọi bước được liệt kê. Kỹ sư mất gần như cả đêm không chắc nên tiếp tục thử, đánh thức ai đó hay liên hệ nhà cung cấp. Tài liệu vận hành nào của team đang thiếu?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "An escalation path defining who handles what and when an issue leaves the first-line team.",
        "text_vi": "Một escalation path xác định ai xử lý việc gì và khi nào sự cố rời khỏi team tuyến đầu."
      },
      {
        "key": "B",
        "text": "A verification checklist covering correctness, security, maintainability and human understanding.",
        "text_vi": "Một verification checklist bao phủ correctness, security, maintainability và human understanding."
      },
      {
        "key": "C",
        "text": "A shared configuration baseline with an agreed permission posture for the assistant.",
        "text_vi": "Một baseline shared configuration với permission posture đã thống nhất cho trợ lý."
      },
      {
        "key": "D",
        "text": "A spend posture with per-user caps and a model allowlist for the clinical tools.",
        "text_vi": "Một spend posture với per-user cap và model allowlist cho các tool lâm sàng."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "The runbook existed and was followed; what was missing is the escalation path, the named definition of who handles what and when an issue leaves the team, which tells first-line staff the boundary of what they resolve themselves. A verification checklist gates code before production, shared configuration standardizes the environment, and spend posture bounds cost; none of them define hand-off when a runbook step fails.",
    "explanation_vi": "Runbook đã có và đã được làm theo; thứ còn thiếu là escalation path, định nghĩa cụ thể ai xử lý việc gì và khi nào sự cố rời khỏi team, giúp nhân sự tuyến đầu biết ranh giới những gì họ tự xử lý. Verification checklist là cổng cho code trước production, shared configuration chuẩn hóa môi trường, còn spend posture chặn trên chi phí; không cái nào định nghĩa việc chuyển giao khi một bước runbook thất bại.",
    "source": "output_5/05_Wrapup_Quiz_and_Glossary.md"
  },
  {
    "id": 30,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Apply decomposition techniques for complex problem solving",
    "lessonId": "d1-t5",
    "question": "A financial-reconciliation pipeline for a bank passed ten demo runs, so the team treated each model categorization as fixed and built no checks around it. In week two the same statement, reprocessed by an analyst, received a different category. Which decomposition-aware design best reflects the four properties?",
    "question_vi": "Pipeline đối soát tài chính của một ngân hàng chạy đúng trong mười lần demo, nên đội coi mỗi phân loại của model là cố định và không xây kiểm tra nào xung quanh nó. Tuần thứ hai, cùng một sao kê được analyst xử lý lại cho ra category khác. Thiết kế nhận biết decomposition nào phản ánh tốt nhất bốn thuộc tính?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Set temperature to zero and treat the output as repeatable from then on.",
        "text_vi": "Đặt temperature về 0 và coi output là lặp lại được từ đó về sau."
      },
      {
        "key": "B",
        "text": "Claude proposes categories, code owns arithmetic, outputs are validated, and evals gate changes.",
        "text_vi": "Claude đề xuất category, code sở hữu số học, output được validate, và eval làm gate cho thay đổi."
      },
      {
        "key": "C",
        "text": "Log the final categories and have an analyst review the logs whenever a customer disputes a statement.",
        "text_vi": "Log các category cuối và để analyst xem log khi khách hàng tranh chấp một sao kê."
      },
      {
        "key": "D",
        "text": "Ask the model to double-check each categorization and trust the result when both answers match.",
        "text_vi": "Yêu cầu model kiểm tra lại từng phân loại và tin kết quả khi hai câu trả lời khớp nhau."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "A demo is not evidence of determinism, so the design pairs Claude's pattern strength with deterministic owners for arithmetic, validation at the boundary, human sampling and evals as the gate for changes. Temperature zero and self-checking reduce variation without certifying behavior, and reviewing logs after disputes is only detective.",
    "explanation_vi": "Demo không phải bằng chứng của tính deterministic, nên thiết kế ghép thế mạnh nhận diện mẫu của Claude với owner deterministic cho số học, validation ở ranh giới, lấy mẫu bởi người và eval làm gate cho thay đổi. Temperature bằng 0 và tự kiểm tra giảm biến động nhưng không chứng nhận hành vi, và xem log sau tranh chấp chỉ là phát hiện.",
    "source": "output/02_How_Claude_Behaves.md"
  },
  {
    "id": 31,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "objective": "Communicate architectural decisions and trade-offs",
    "lessonId": "d6-t2",
    "question": "At a logistics company's steering committee, the Architect opens with a ten-minute walkthrough of the proposed orchestration architecture before reaching the delivery-delay problem it solves. Two executives disengage, and the decision is deferred. Applying the Description competency, what should the Architect change first?",
    "question_vi": "Tại ủy ban điều hành của một công ty logistics, Architect mở đầu bằng mười phút giới thiệu kiến trúc orchestration đề xuất trước khi nói đến vấn đề giao hàng trễ mà nó giải quyết. Hai lãnh đạo mất tập trung, và quyết định bị hoãn. Áp dụng năng lực Description, Architect nên thay đổi điều gì trước tiên?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Send the architecture document in advance so executives arrive already familiar with the components.",
        "text_vi": "Gửi trước tài liệu kiến trúc để lãnh đạo đến họp khi đã quen với các thành phần."
      },
      {
        "key": "B",
        "text": "Invite the engineering lead to co-present so technical questions can be answered with more authority.",
        "text_vi": "Mời trưởng nhóm kỹ thuật cùng trình bày để các câu hỏi kỹ thuật được trả lời có thẩm quyền hơn."
      },
      {
        "key": "C",
        "text": "Open with the business outcome, such as the delay reduction at stake, and bring in architecture only as it supports the decision.",
        "text_vi": "Mở đầu bằng kết quả kinh doanh, như mức giảm giao hàng trễ đang được đặt ra, và chỉ đưa kiến trúc vào khi nó hỗ trợ quyết định."
      },
      {
        "key": "D",
        "text": "Shorten the architecture walkthrough to five minutes and add an animated diagram to hold attention.",
        "text_vi": "Rút phần giới thiệu kiến trúc xuống năm phút và thêm diagram động để giữ sự chú ý."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "The first Description rule is to lead with the business outcome rather than the architecture, framing the system in the stakeholder's goal terms. A shorter or animated architecture section still leads with the wrong thing. Pre-reading and a co-presenter add technical depth, but the room needs translation, not more detail.",
    "explanation_vi": "Quy tắc Description đầu tiên là mở đầu bằng kết quả kinh doanh thay vì kiến trúc, mô tả hệ thống theo mục tiêu của stakeholder. Phần kiến trúc ngắn hơn hay có hiệu ứng động vẫn mở đầu sai thứ. Tài liệu đọc trước và người cùng trình bày thêm chiều sâu kỹ thuật, nhưng căn phòng cần sự chuyển dịch, không phải thêm chi tiết.",
    "source": "output_4/03_Tradeoffs_and_GTM.md"
  },
  {
    "id": 32,
    "topic": "Integration (19%)",
    "objective": "Evaluate tool/agent configuration for capability bloat",
    "lessonId": "d3-t1",
    "question": "A fintech reviews the configuration of its multi-agent loan-servicing system before an audit. The audit will test least privilege across the document-search subagent, the customer-facing agent and the servicing tools. Which two findings are evidence of capability bloat that should be fixed? (Choose TWO.)",
    "question_vi": "Một công ty fintech review cấu hình hệ thống multi-agent phục vụ khoản vay trước một đợt kiểm toán. Cuộc kiểm toán sẽ kiểm tra least privilege trên subagent tìm kiếm tài liệu, agent hướng tới khách hàng và các tool phục vụ khoản vay. Hai phát hiện nào là bằng chứng của capability bloat cần được sửa? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "A pre-execution hook blocks any payment above the approved disbursement amount.",
        "text_vi": "Một hook trước khi thực thi chặn mọi khoản thanh toán vượt quá số tiền giải ngân đã duyệt."
      },
      {
        "key": "B",
        "text": "The balance tool is read-only and accepts only the authenticated customer's account ID.",
        "text_vi": "Tool tra số dư chỉ đọc và chỉ nhận account ID của khách hàng đã xác thực."
      },
      {
        "key": "C",
        "text": "Tools call the core system using each customer's short-lived, minimally scoped token.",
        "text_vi": "Tool gọi hệ thống lõi bằng token ngắn hạn, phạm vi tối thiểu của từng khách hàng."
      },
      {
        "key": "D",
        "text": "The customer-facing agent can call a generic execute_shell tool on the servicing host.",
        "text_vi": "Agent hướng tới khách hàng có thể gọi tool execute_shell tổng quát trên máy chủ phục vụ."
      },
      {
        "key": "E",
        "text": "The document-search subagent holds an initiate_payment tool it never uses.",
        "text_vi": "Subagent tìm kiếm tài liệu giữ tool initiate_payment mà nó không bao giờ dùng."
      }
    ],
    "answer": [
      "D",
      "E"
    ],
    "explanation": "A payment tool on a search subagent and a generic shell tool on a customer-facing agent are capabilities far beyond what those roles need, enlarging the attack surface. The read-only, customer-scoped balance tool is an example of a correctly narrowed tool. The hook is a deterministic gate on a consequential action, and per-customer scoped tokens are the preferred delegated-credential pattern; both are sound.",
    "explanation_vi": "Tool thanh toán trên subagent tìm kiếm và tool shell tổng quát trên agent hướng tới khách hàng là các năng lực vượt xa nhu cầu của những vai trò đó, mở rộng bề mặt tấn công. Tool tra số dư chỉ đọc, giới hạn theo khách hàng là ví dụ của một tool được thu hẹp đúng cách. Hook là cổng tất định cho hành động có hậu quả, và token phạm vi theo từng khách hàng là mô hình credential ủy quyền được ưu tiên; cả hai đều đúng.",
    "source": "output_2/05_Enterprise_Integration_Patterns.md"
  },
  {
    "id": 33,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "objective": "Design system prompts, templates, and guardrails",
    "lessonId": "d2-t2",
    "question": "A bank's statement-reconciliation pipeline uses Claude to categorize transactions. The architect saw five identical demo runs and built no checks. In week two, re-processing the same statement produced a different category for several items, discovered only when an analyst re-ran a batch. What design should replace the current approach?",
    "question_vi": "Pipeline đối soát sao kê của một ngân hàng dùng Claude để phân loại giao dịch. Architect đã thấy năm lần demo cho kết quả giống hệt và không xây kiểm tra nào. Đến tuần thứ hai, việc xử lý lại cùng một sao kê cho ra category khác ở vài khoản mục, chỉ được phát hiện khi một chuyên viên phân tích chạy lại một lô. Thiết kế nào nên thay thế cách tiếp cận hiện tại?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Add detailed logging of every request so that changed categories can be found later and corrected by analysts.",
        "text_vi": "Thêm logging chi tiết mọi request để có thể tìm ra các category bị thay đổi về sau và được chuyên viên phân tích sửa lại."
      },
      {
        "key": "B",
        "text": "Move the pipeline to a larger model so that categorization becomes deterministic.",
        "text_vi": "Chuyển pipeline sang model lớn hơn để việc phân loại trở nên tất định."
      },
      {
        "key": "C",
        "text": "Set temperature to zero and treat the categorization output as fixed from then on.",
        "text_vi": "Đặt temperature bằng 0 và coi output phân loại là cố định kể từ đó."
      },
      {
        "key": "D",
        "text": "Treat outputs as probabilistic: schema-validate them, run an eval set on real statements, and sample-review.",
        "text_vi": "Coi output là xác suất: validate theo schema, chạy eval set trên sao kê thật, và review mẫu."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "The failure came from building as though the model were deterministic; five clean demo runs are not evidence. The course remedy is to design for non-determinism with validation at the boundary, an eval set on the real distribution and human sampling. Zero temperature reduces variation but does not guarantee it or replace evals, logging only detects after the fact, and a larger model is still non-deterministic.",
    "explanation_vi": "Thất bại đến từ việc xây dựng như thể model là tất định; năm lần demo sạch không phải là bằng chứng. Biện pháp của course là thiết kế cho non-determinism với validate ở ranh giới, eval set trên phân phối thực và người kiểm tra mẫu. Temperature bằng 0 giảm biến thiên nhưng không đảm bảo và không thay thế eval, logging chỉ phát hiện sau sự việc, và model lớn hơn vẫn bất định.",
    "source": "output/02_How_Claude_Behaves.md"
  },
  {
    "id": 34,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Optimize token usage, latency, and cost-performance trade-offs",
    "lessonId": "d4-t5",
    "question": "A wealth-management assistant resends the full conversation, every previously retrieved document and all tool outputs on each turn. Cost per call grows steadily with conversation length, and long sessions approach the context limit. The team wants to cut token usage without losing details clients mentioned early. Which TWO changes best address this? (Choose TWO.)",
    "question_vi": "Một trợ lý quản lý tài sản gửi lại toàn bộ hội thoại, mọi tài liệu đã truy xuất trước đó và tất cả output của tool ở mỗi lượt. Chi phí mỗi lần gọi tăng đều theo độ dài hội thoại, và các phiên dài tiến gần giới hạn context. Team muốn cắt giảm token mà không mất các chi tiết khách hàng đã nhắc từ sớm. HAI thay đổi nào giải quyết tốt nhất vấn đề này? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "Retrieve documents just in time for the current question instead of resending all earlier retrievals",
        "text_vi": "Truy xuất tài liệu đúng lúc cho câu hỏi hiện tại thay vì gửi lại mọi lần truy xuất trước"
      },
      {
        "key": "B",
        "text": "Raise max_tokens so the assistant can summarize history in its answers",
        "text_vi": "Nâng max_tokens để trợ lý có thể tóm tắt lịch sử trong câu trả lời"
      },
      {
        "key": "C",
        "text": "Switch to Opus so it handles long contexts more accurately",
        "text_vi": "Chuyển sang Opus để xử lý context dài chính xác hơn"
      },
      {
        "key": "D",
        "text": "Move to the model with the largest available context window",
        "text_vi": "Chuyển sang model có context window lớn nhất hiện có"
      },
      {
        "key": "E",
        "text": "Adopt a progressive strategy that carries forward only what the next step needs, with compaction preserving IDs, amounts and decisions",
        "text_vi": "Áp dụng chiến lược progressive chỉ mang theo những gì bước tiếp theo cần, với compaction giữ nguyên ID, số tiền và các quyết định"
      }
    ],
    "answer": [
      "A",
      "E"
    ],
    "explanation": "Monolithic context accumulates turn over turn; progressive context with compaction that keeps load-bearing details, plus just-in-time retrieval, bounds input tokens while preserving what matters. A larger window treats the ceiling as a target and keeps costs growing, a higher output cap adds output tokens, and a bigger model raises per-token cost without fixing accumulation.",
    "explanation_vi": "Context nguyên khối tích lũy qua từng lượt; progressive context với compaction giữ các chi tiết quan trọng, cộng truy xuất đúng lúc, giới hạn input token mà vẫn giữ những gì cần thiết. Window lớn hơn là coi giới hạn như mục tiêu và chi phí vẫn tiếp tục tăng, giới hạn output cao hơn thêm output token, còn model lớn hơn tăng chi phí mỗi token mà không sửa được sự tích lũy.",
    "source": "output/08_Model_Context_Strategy.md"
  },
  {
    "id": 35,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "objective": "Communicate architectural decisions and trade-offs",
    "lessonId": "d6-t2",
    "question": "A manufacturer's Architect must present the same model-tiering tradeoff twice: to the CFO on Monday and to the platform engineering lead on Tuesday. A colleague suggests reusing one technical deck for both to stay consistent. How should the Architect adapt the CFO presentation?",
    "question_vi": "Architect của một nhà sản xuất phải trình bày cùng một tradeoff về model tiering hai lần: với CFO vào thứ Hai và với trưởng nhóm platform engineering vào thứ Ba. Một đồng nghiệp gợi ý dùng lại một bộ slide kỹ thuật cho cả hai để nhất quán. Architect nên điều chỉnh bài trình bày cho CFO thế nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Lead with business impact, express cost as a monthly figure at production volume, and state reversal cost in money and time.",
        "text_vi": "Mở đầu bằng tác động kinh doanh, diễn đạt chi phí thành con số hàng tháng ở production volume, và nêu reversal cost bằng tiền và thời gian."
      },
      {
        "key": "B",
        "text": "Present per-call token prices for each tier precisely, since exact unit prices are the most defensible numbers.",
        "text_vi": "Trình bày chính xác giá token mỗi lần gọi cho từng tier, vì đơn giá chính xác là con số dễ bảo vệ nhất."
      },
      {
        "key": "C",
        "text": "Keep the technical deck but add a glossary so the CFO can follow terms such as p95 latency and cache hit rate.",
        "text_vi": "Giữ bộ slide kỹ thuật nhưng thêm bảng thuật ngữ để CFO theo kịp các thuật ngữ như p95 latency và cache hit rate."
      },
      {
        "key": "D",
        "text": "Simplify by omitting risks and limitations, since the CFO only needs the recommended option and its price.",
        "text_vi": "Đơn giản hóa bằng cách bỏ rủi ro và giới hạn, vì CFO chỉ cần phương án khuyến nghị và giá của nó."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Translation means using the units the listener decides in: for an executive, business impact, monthly cost at scale and reversal cost in money, time or credibility; the engineering lead gets mechanisms and latency detail. A glossary on a technical deck still answers the wrong question. Dropping risks breaks honest framing, and per-call prices are exactly the unit that misled the CTO in the course example.",
    "explanation_vi": "Chuyển dịch nghĩa là dùng đơn vị mà người nghe dùng để ra quyết định: với lãnh đạo là tác động kinh doanh, chi phí hàng tháng ở quy mô thật và reversal cost bằng tiền, thời gian hoặc uy tín; trưởng nhóm kỹ thuật thì nhận cơ chế và chi tiết latency. Thêm bảng thuật ngữ vào slide kỹ thuật vẫn trả lời sai câu hỏi. Bỏ rủi ro phá vỡ nguyên tắc trung thực, và giá mỗi lần gọi chính là đơn vị đã đánh lừa CTO trong ví dụ của khóa học.",
    "source": "output_4/03_Tradeoffs_and_GTM.md"
  },
  {
    "id": 36,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Conduct A/B testing and iterative improvements",
    "lessonId": "d4-t3",
    "question": "A health insurer wants to upgrade the model version behind its medical-record summarizer. Internal policy forbids any user from receiving output from an unvalidated configuration, and the system processes about 300 records per day. The team needs evidence from real traffic before deciding. Which validation approach should the architect choose?",
    "question_vi": "Một công ty bảo hiểm sức khỏe muốn nâng cấp phiên bản model phía sau bộ tóm tắt hồ sơ y tế. Chính sách nội bộ cấm bất kỳ người dùng nào nhận output từ cấu hình chưa được kiểm chứng, và hệ thống xử lý khoảng 300 hồ sơ mỗi ngày. Team cần bằng chứng từ traffic thật trước khi quyết định. Architect nên chọn cách kiểm chứng nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Ask five physicians to review a few sample outputs",
        "text_vi": "Nhờ năm bác sĩ review vài output mẫu"
      },
      {
        "key": "B",
        "text": "Offline eval on the golden set, then shadow testing on a copy of live traffic scored offline",
        "text_vi": "Offline eval trên golden set, sau đó shadow testing trên bản sao traffic thật và chấm offline"
      },
      {
        "key": "C",
        "text": "A 10% canary to real users with complaint monitoring",
        "text_vi": "Canary 10% cho người dùng thật kèm theo dõi khiếu nại"
      },
      {
        "key": "D",
        "text": "A live 50/50 A/B test for two days",
        "text_vi": "Một live A/B test 50/50 trong hai ngày"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Shadow testing sends a copy of live requests to the new version, logs its outputs without returning them and scores them offline, so no user sees an unvalidated configuration; the course calls it often the only acceptable option in regulated settings or when traffic is low. Any live split or canary exposes users, and two days at 300 records is far too small; a few physician reviews are a spot-check.",
    "explanation_vi": "Shadow testing gửi bản sao request thật tới phiên bản mới, ghi log output mà không trả về và chấm offline, nên không người dùng nào thấy cấu hình chưa kiểm chứng; khóa học gọi đây thường là lựa chọn duy nhất được chấp nhận trong ngành có quản lý hoặc khi traffic thấp. Mọi kiểu chia live hay canary đều để người dùng tiếp xúc, và hai ngày với 300 hồ sơ là quá ít; vài lượt review của bác sĩ chỉ là spot-check.",
    "source": "output_2/06_AB_Testing_and_Observability.md"
  },
  {
    "id": 37,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "objective": "Design system prompts, templates, and guardrails",
    "lessonId": "d2-t2",
    "question": "An e-commerce engineer shortened the product-description system prompt from 900 to 150 words, arguing that shorter prompts are better. Afterwards, descriptions vary in length, sometimes switch language, and occasionally mention prices that should never appear. What is the most accurate diagnosis?",
    "question_vi": "Một kỹ sư thương mại điện tử rút gọn system prompt mô tả sản phẩm từ 900 xuống 150 từ, với lập luận prompt ngắn hơn thì tốt hơn. Sau đó, các mô tả có độ dài khác nhau, đôi khi đổi ngôn ngữ, và thỉnh thoảng nhắc tới giá vốn không bao giờ được xuất hiện. Chẩn đoán chính xác nhất là gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "The shorter prompt broke prompt caching, which caused inconsistent generations.",
        "text_vi": "Prompt ngắn hơn đã làm hỏng prompt caching, gây ra các lần sinh không nhất quán."
      },
      {
        "key": "B",
        "text": "The model tier has regressed and should be rolled back to the previous version.",
        "text_vi": "Model tier đã bị regression và nên được rollback về phiên bản trước."
      },
      {
        "key": "C",
        "text": "The prompt became underspecified: length, language and the price constraint are no longer stated.",
        "text_vi": "Prompt đã bị đặc tả thiếu: độ dài, ngôn ngữ và ràng buộc về giá không còn được nêu ra."
      },
      {
        "key": "D",
        "text": "The variation is normal non-determinism and should be handled with more human review before publishing.",
        "text_vi": "Sự biến thiên là non-determinism bình thường và nên được xử lý bằng thêm người review trước khi đăng."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "A short prompt that omits specification leaves the model to guess, differently each time; maximum length, response language and hard constraints are exactly the requirements the course says to check the prompt actually states. Nothing points to a model regression, caching affects cost and latency rather than what is generated, and the changes are caused by removed specification, not something to absorb with more review.",
    "explanation_vi": "Một prompt ngắn bỏ sót đặc tả khiến model phải đoán, mỗi lần một kiểu; độ dài tối đa, ngôn ngữ trả lời và các ràng buộc cứng chính là những yêu cầu mà course bảo phải kiểm tra xem prompt có thực sự nêu ra không. Không có dấu hiệu nào của regression model, caching ảnh hưởng đến chi phí và latency chứ không ảnh hưởng nội dung được sinh, và các thay đổi là do đặc tả bị gỡ bỏ, không phải thứ cần bù đắp bằng thêm người review.",
    "source": "output/09_Prompting_as_Architecture.md"
  },
  {
    "id": 38,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "objective": "Design system prompts, templates, and guardrails",
    "lessonId": "d2-t2",
    "question": "An insurer's adjusters use a shared prompt, 'Summarize this claim file', hundreds of times a day. Each summary comes back in a different structure, some speculate on the cause of loss, and amounts are sometimes paraphrased. Adjusters need to read a summary in 30 seconds. What is the most effective fix?",
    "question_vi": "Các chuyên viên giám định của một công ty bảo hiểm dùng chung prompt 'Tóm tắt hồ sơ bồi thường này' hàng trăm lần mỗi ngày. Mỗi bản tóm tắt trả về một cấu trúc khác nhau, một số suy đoán nguyên nhân tổn thất, và số tiền đôi khi bị diễn đạt lại. Chuyên viên cần đọc một bản tóm tắt trong 30 giây. Cách sửa hiệu quả nhất là gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Add one example summary to the prompt and ask adjusters to flag summaries that differ from it, for later correction.",
        "text_vi": "Thêm một bản tóm tắt mẫu vào prompt và yêu cầu chuyên viên đánh dấu các bản tóm tắt khác với mẫu, để chỉnh sửa về sau."
      },
      {
        "key": "B",
        "text": "Switch the summarization step to Opus so that the model infers the format adjusters prefer.",
        "text_vi": "Chuyển bước tóm tắt sang Opus để model tự suy ra định dạng mà chuyên viên ưa thích."
      },
      {
        "key": "C",
        "text": "Set temperature to zero so that the same claim file always produces the same summary.",
        "text_vi": "Đặt temperature bằng 0 để cùng một hồ sơ luôn cho ra cùng một bản tóm tắt."
      },
      {
        "key": "D",
        "text": "State the goal, a fixed five-field format and constraints: no speculation, amounts verbatim, 'none' if missing.",
        "text_vi": "Nêu mục tiêu, định dạng cố định năm trường và các ràng buộc: không suy đoán, số tiền nguyên văn, ghi 'không có' nếu thiếu."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "The variation comes from underspecification: the prompt is silent on goal, format and constraints, so the model fills the gap differently each time. Making the implicit explicit (goal, fixed fields, no speculation, verbatim amounts, behaviour when data is missing) is the course's fix. A bigger model or zero temperature does not supply the missing specification, and a single example plus human flagging is a detective step rather than a specification.",
    "explanation_vi": "Sự khác biệt đến từ underspecification: prompt không nói gì về mục tiêu, định dạng và ràng buộc, nên model lấp khoảng trống mỗi lần một kiểu. Biến điều ngầm định thành tường minh (mục tiêu, các trường cố định, không suy đoán, số tiền nguyên văn, hành vi khi thiếu dữ liệu) là cách sửa của course. Model lớn hơn hay temperature bằng 0 không cung cấp phần đặc tả còn thiếu, còn một ví dụ cộng việc người dùng đánh dấu là bước phát hiện chứ không phải đặc tả.",
    "source": "output/09_Prompting_as_Architecture.md"
  },
  {
    "id": 39,
    "topic": "Governance, Safety & Risk Management (14%)",
    "objective": "Apply human-in-the-loop validation strategies",
    "lessonId": "d5-t3",
    "question": "A German insurer plans to have Claude reject travel-insurance claims fully automatically when documents do not match policy terms, sending customers a generic rejection email. Rejections have significant financial effects on customers, and the insurer is subject to GDPR. Which design best addresses the human-oversight concern?",
    "question_vi": "Một công ty bảo hiểm Đức dự định để Claude tự động hoàn toàn từ chối claim bảo hiểm du lịch khi giấy tờ không khớp điều khoản hợp đồng, gửi cho khách một email từ chối chung chung. Việc từ chối gây ảnh hưởng tài chính đáng kể cho khách hàng, và công ty chịu sự điều chỉnh của GDPR. Thiết kế nào xử lý tốt nhất mối lo về human oversight?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Route rejections to human review, give actionable reasons, keep reconstructable decision logs.",
        "text_vi": "Chuyển các ca từ chối sang human review, đưa lý do actionable, giữ decision log tái dựng được."
      },
      {
        "key": "B",
        "text": "Disclose in the terms of service that claims are assessed with AI, and keep full automation.",
        "text_vi": "Công bố trong điều khoản dịch vụ rằng claim được đánh giá bằng AI, và giữ tự động hoàn toàn."
      },
      {
        "key": "C",
        "text": "Keep full automation but add an output filter that removes offensive language from rejections.",
        "text_vi": "Giữ tự động hoàn toàn nhưng thêm output filter loại bỏ ngôn ngữ xúc phạm khỏi thư từ chối."
      },
      {
        "key": "D",
        "text": "Move processing to a region outside the EU, where automated-decision rules do not apply.",
        "text_vi": "Chuyển việc xử lý sang một region ngoài EU, nơi quy định về quyết định tự động không áp dụng."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "GDPR safeguards for solely automated decisions with significant effects include the right to human intervention and to contest the decision, which maps to human review routing, actionable explanations and decision logging in the course. An output filter and a terms-of-service disclosure leave the decision fully automated, and moving processing abroad does not remove GDPR obligations for EU data subjects.",
    "explanation_vi": "Biện pháp bảo vệ của GDPR cho quyết định hoàn toàn tự động có ảnh hưởng đáng kể bao gồm quyền yêu cầu con người can thiệp và phản đối quyết định, tương ứng với human review routing, giải thích actionable và decision logging trong khóa học. Output filter và công bố trong điều khoản dịch vụ vẫn để quyết định tự động hoàn toàn, còn chuyển xử lý ra nước ngoài không xóa nghĩa vụ GDPR với chủ thể dữ liệu ở EU.",
    "source": "output_3/09_Supplement_Regulatory_Deep_Dive.md"
  },
  {
    "id": 40,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Translate business problems into Claude-based AI solutions",
    "lessonId": "d1-t1",
    "question": "A retail bank's head of branches opens with, 'We want a chatbot for our branch staff.' No pain point, user group or metric has been named. The architect wants to translate this into a problem the solution can be measured against. Which two actions best do that? (Choose TWO.)",
    "question_vi": "Trưởng khối chi nhánh của một ngân hàng bán lẻ mở đầu: 'Chúng tôi muốn một chatbot cho nhân viên chi nhánh.' Chưa có điểm đau, nhóm người dùng hay chỉ số nào được nêu. Architect muốn chuyển điều này thành một bài toán mà giải pháp có thể được đo lường. Hai hành động nào làm điều đó tốt nhất? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "Capture the current value of the metric that task affects, such as average time to answer a product question, and how it is measured.",
        "text_vi": "Ghi nhận giá trị hiện tại của chỉ số mà công việc đó ảnh hưởng, như thời gian trung bình trả lời một câu hỏi sản phẩm, và cách đo."
      },
      {
        "key": "B",
        "text": "Propose an agent with access to core banking so the chatbot can handle any request staff might bring.",
        "text_vi": "Đề xuất một agent có quyền truy cập core banking để chatbot xử lý mọi yêu cầu nhân viên có thể đưa ra."
      },
      {
        "key": "C",
        "text": "Select the newest model and a chat interface so the head of branches can see a concrete solution in the next meeting.",
        "text_vi": "Chọn model mới nhất và giao diện chat để trưởng khối chi nhánh thấy giải pháp cụ thể ở buổi họp tới."
      },
      {
        "key": "D",
        "text": "Ask which branch staff task the chatbot should make faster, cheaper or better, and how staff perform that task today.",
        "text_vi": "Hỏi chatbot nên giúp nhân viên chi nhánh làm nhanh hơn, rẻ hơn hoặc tốt hơn việc gì, và hiện họ thực hiện việc đó thế nào."
      },
      {
        "key": "E",
        "text": "Start drafting the system prompt so staff can test tone and wording during the next week.",
        "text_vi": "Bắt đầu soạn system prompt để nhân viên thử giọng điệu và câu chữ trong tuần tới."
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "explanation": "Stakeholders often open with a solution, so the architect pulls back to the problem (who is helped to do what, and how it is done today) and to a measured baseline that the success metric and outcome evidence depend on. Picking a model, proposing a broad agent and drafting prompts are solution-first moves that skip problem framing and may even reveal that an LLM is not needed.",
    "explanation_vi": "Stakeholder thường mở đầu bằng giải pháp, nên architect kéo về bài toán (giúp ai làm gì, hiện đang làm thế nào) và về baseline đã đo mà success metric và bằng chứng kết quả phụ thuộc vào. Chọn model, đề xuất agent rộng và soạn prompt là cách tiếp cận bắt đầu từ giải pháp, bỏ qua bước định khung bài toán, trong khi định khung có thể cho thấy thậm chí không cần LLM.",
    "source": "output_4/09_Supplement_Business_Value_and_Discovery_Toolkit.md"
  },
  {
    "id": 41,
    "topic": "Integration (19%)",
    "objective": "Analyze observability challenges and select monitoring strategies at scale",
    "lessonId": "d3-t4",
    "question": "An online education provider's essay-feedback assistant produces 400,000 responses a month. Leadership wants ongoing visibility into feedback quality, but human-grading every response is impossible and there is no downstream acceptance signal. Teachers occasionally complain about tone, and the product owner wants a trend line that can be reviewed every week. Which monitoring approach is most appropriate?",
    "question_vi": "Trợ lý nhận xét bài luận của một đơn vị giáo dục trực tuyến tạo ra 400.000 phản hồi mỗi tháng. Ban lãnh đạo muốn có tầm nhìn liên tục về chất lượng nhận xét, nhưng chấm bằng người cho mọi phản hồi là bất khả thi và không có tín hiệu chấp nhận ở hạ nguồn. Giáo viên thỉnh thoảng phàn nàn về giọng điệu, và chủ sản phẩm muốn một đường xu hướng có thể xem lại mỗi tuần. Cách giám sát nào phù hợp nhất?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Track only latency and error rate, since they correlate closely with feedback quality.",
        "text_vi": "Chỉ theo dõi latency và tỷ lệ lỗi, vì chúng tương quan chặt chẽ với chất lượng nhận xét."
      },
      {
        "key": "B",
        "text": "Sample outputs continuously for online evaluation against a rubric, graded by humans or a calibrated model grader.",
        "text_vi": "Lấy mẫu output liên tục để đánh giá online theo rubric, chấm bởi người hoặc model chấm đã được hiệu chỉnh."
      },
      {
        "key": "C",
        "text": "Ask the assistant to append a self-rated confidence score to each response and chart it, tracked through the usual ticketing process.",
        "text_vi": "Yêu cầu trợ lý thêm điểm tự tin tự đánh giá vào mỗi phản hồi và vẽ biểu đồ, được theo dõi qua quy trình ticket thông thường."
      },
      {
        "key": "D",
        "text": "Have teachers spot-check five responses each Friday and report impressions.",
        "text_vi": "Để giáo viên kiểm tra ngẫu nhiên năm phản hồi mỗi thứ Sáu và báo cáo cảm nhận."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Sampled online evaluation by rubric, human or model-graded, is the course's layer for tracking quality at scale without grading every output. Latency and error rate are operational metrics and miss quietly poor feedback. Five weekly spot-checks are too few to separate signal from noise, and a self-reported confidence score is not correctness, since confidence is not correctness.",
    "explanation_vi": "Đánh giá online theo rubric dựa trên mẫu, do người hoặc model chấm, là lớp mà khóa học dùng để theo dõi chất lượng ở quy mô lớn mà không chấm mọi output. Latency và tỷ lệ lỗi là metric vận hành và bỏ sót nhận xét kém một cách âm thầm. Năm lần kiểm tra mỗi tuần là quá ít để tách tín hiệu khỏi nhiễu, còn điểm tự tin tự khai không phải tính đúng, vì confidence không phải correctness.",
    "source": "output/14_Supplement_Integration_Security_Observability.md"
  },
  {
    "id": 42,
    "topic": "Developer Productivity & Operational Enablement (7%)",
    "objective": "Configure Claude tools and environments for teams (e.g., Claude Code)",
    "lessonId": "d7-t1",
    "question": "A platform team packaged its release-notes procedure as a Skill and pushed it inside a plugin to a forty-engineer group as a flat bundle. A well-meaning prompt edit then made every team's notes come out in the wrong format, and fixing it required a manual re-edit while bad output kept shipping. Which TWO changes would most directly prevent a repeat? (Choose TWO.)",
    "question_vi": "Một team nền tảng đóng gói quy trình viết release notes thành một Skill và đẩy nó trong một plugin tới một nhóm bốn mươi kỹ sư dưới dạng flat bundle. Sau đó một chỉnh sửa prompt có thiện ý khiến release notes của mọi team ra sai format, và việc khắc phục đòi hỏi sửa tay trong khi output xấu vẫn tiếp tục được tạo ra. HAI thay đổi nào ngăn tái diễn trực tiếp nhất? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "Have each team keep its own local copy of the Skill so one bad edit cannot affect the others.",
        "text_vi": "Để mỗi team giữ bản sao Skill riêng ở máy mình để một chỉnh sửa xấu không ảnh hưởng tới team khác."
      },
      {
        "key": "B",
        "text": "Name an owner who reviews every change to the Skill before it is released to the group.",
        "text_vi": "Chỉ định một owner xem xét mọi thay đổi của Skill trước khi phát hành cho nhóm."
      },
      {
        "key": "C",
        "text": "Connect the plugin to a repository so updates are version-controlled and can be rolled back.",
        "text_vi": "Kết nối plugin với một repository để các cập nhật được kiểm soát phiên bản và có thể rollback."
      },
      {
        "key": "D",
        "text": "Replace the Skill with formatting rules written into each repository's CLAUDE.md file.",
        "text_vi": "Thay Skill bằng các quy tắc định dạng viết vào tệp CLAUDE.md của từng repository."
      },
      {
        "key": "E",
        "text": "Move the Skill to an org-provisioned Skill so that everyone always receives the newest upload.",
        "text_vi": "Chuyển Skill sang org-provisioned Skill để mọi người luôn nhận bản upload mới nhất."
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "explanation": "The team chose the right channel but skipped its governance: a shared asset needs version-controlled updates with rollback and an identified owner, so a bad change can be reviewed before release and reverted quickly. An org-provisioned Skill has no native rollback, so the newest upload is the problem rather than the fix; local copies create drift and lose central updates; scattering rules across CLAUDE.md files removes the single governed artifact.",
    "explanation_vi": "Team đã chọn đúng kênh nhưng bỏ qua governance của nó: tài sản dùng chung cần cập nhật có kiểm soát phiên bản kèm rollback và một owner được chỉ định, để thay đổi xấu được review trước khi phát hành và hoàn tác nhanh. Org-provisioned Skill không có rollback gốc, nên bản upload mới nhất chính là vấn đề chứ không phải giải pháp; bản sao cục bộ gây trôi dạt và mất khả năng cập nhật tập trung; rải quy tắc khắp các tệp CLAUDE.md làm mất đi một artifact duy nhất có governance.",
    "source": "output_5/02_Team_Setup_and_Environment.md"
  },
  {
    "id": 43,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Design end-to-end architectures (input → processing → output → feedback loops)",
    "lessonId": "d1-t2",
    "question": "A corporate bank uses Claude to prepare outgoing payment instructions from client emails, which are then written to the payments system. An incident occurred when a malformed beneficiary field was written directly and the payment had to be recalled. Where should the architect add controls in the end-to-end design?",
    "question_vi": "Một ngân hàng doanh nghiệp dùng Claude chuẩn bị lệnh thanh toán đi từ email của khách hàng, sau đó ghi vào hệ thống thanh toán. Một sự cố xảy ra khi trường người thụ hưởng sai định dạng được ghi thẳng vào hệ thống và khoản thanh toán phải thu hồi. Architect nên bổ sung control ở đâu trong thiết kế end-to-end?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "In the feedback stage, by logging every instruction so recalled payments can be analysed after the fact.",
        "text_vi": "Ở giai đoạn feedback, log mọi lệnh để các khoản bị thu hồi có thể được phân tích sau."
      },
      {
        "key": "B",
        "text": "In the processing stage, by moving to the most capable model so field extraction errors become rare enough.",
        "text_vi": "Ở giai đoạn processing, chuyển sang model mạnh nhất để lỗi trích xuất trường đủ hiếm."
      },
      {
        "key": "C",
        "text": "In the output stage: schema and rule validation before any write, plus a human gate before irreversible payment actions.",
        "text_vi": "Ở giai đoạn output: validation theo schema và rule trước mọi lần ghi, cộng human gate trước hành động thanh toán không đảo ngược."
      },
      {
        "key": "D",
        "text": "In the input stage only, by asking clients to use a stricter email template so the model receives cleaner text.",
        "text_vi": "Chỉ ở giai đoạn input, bằng cách yêu cầu khách hàng dùng mẫu email chặt hơn để model nhận văn bản sạch hơn."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "The output block is where results are validated against schema and rules before they touch a system, and irreversible actions such as payments need a human gate. A stricter template does not guarantee clean inputs, a stronger model lowers but does not eliminate error rates, and logging is a detective control that only helps after the money has moved.",
    "explanation_vi": "Khối output là nơi kết quả được validate theo schema và rule trước khi chạm vào hệ thống, và hành động không đảo ngược như thanh toán cần human gate. Mẫu email chặt hơn không đảm bảo input sạch, model mạnh hơn giảm nhưng không loại bỏ lỗi, còn logging là control phát hiện chỉ có ích sau khi tiền đã chuyển.",
    "source": "output/13_Supplement_Business_Value_End_to_End.md"
  },
  {
    "id": 44,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "objective": "Communicate architectural decisions and trade-offs",
    "lessonId": "d6-t2",
    "question": "Before an executive approval meeting at a telecom operator, the Architect's manager suggests: 'Executives are busy. Decide the tradeoff yourself and just present the conclusion so they can sign off quickly.' The decision affects monthly spend and regional expansion plans the executives must defend to the board. How should the Architect prepare?",
    "question_vi": "Trước cuộc họp phê duyệt với lãnh đạo tại một nhà mạng, quản lý của Architect gợi ý: 'Lãnh đạo bận lắm. Anh tự quyết tradeoff rồi chỉ trình bày kết luận để họ ký nhanh.' Quyết định này ảnh hưởng đến chi tiêu hàng tháng và kế hoạch mở rộng khu vực mà lãnh đạo phải bảo vệ trước hội đồng quản trị. Architect nên chuẩn bị thế nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Ask the engineering leads to make the decision, since they understand the technical consequences best.",
        "text_vi": "Đề nghị các trưởng nhóm kỹ thuật ra quyết định, vì họ hiểu rõ nhất hệ quả kỹ thuật."
      },
      {
        "key": "B",
        "text": "Present only the recommended option with a one-line rationale, keeping the alternatives in an appendix nobody needs to read.",
        "text_vi": "Chỉ trình bày phương án khuyến nghị kèm lý do một dòng, để các phương án khác trong phụ lục không ai cần đọc."
      },
      {
        "key": "C",
        "text": "Present all options neutrally without a recommendation so the executives cannot claim they were steered.",
        "text_vi": "Trình bày tất cả phương án một cách trung lập, không khuyến nghị, để lãnh đạo không thể nói họ bị dẫn dắt."
      },
      {
        "key": "D",
        "text": "Present a package: options considered, criteria, a recommendation and residual risks, so the executives can make and defend the decision.",
        "text_vi": "Trình bày một gói: các phương án đã xem xét, tiêu chí, khuyến nghị và rủi ro còn lại, để lãnh đạo ra và bảo vệ được quyết định."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "The course says to frame the decision as a package rather than a verdict, because the stakeholder is accepting a decision they must defend to their own leadership. A conclusion-only deck looks clear but leaves the approver exposed when downsides appear. A package still includes a recommendation, and the accountable executives, not engineers, own a decision with business consequences.",
    "explanation_vi": "Khóa học nói hãy trình bày quyết định như một gói thay vì một phán quyết, vì stakeholder đang chấp nhận một quyết định mà họ phải bảo vệ trước lãnh đạo của mình. Bộ slide chỉ có kết luận trông rõ ràng nhưng khiến người phê duyệt bị động khi mặt trái xuất hiện. Gói vẫn bao gồm khuyến nghị, và chính lãnh đạo chịu trách nhiệm, không phải kỹ sư, sở hữu quyết định có hệ quả kinh doanh.",
    "source": "output_4/03_Tradeoffs_and_GTM.md"
  },
  {
    "id": 45,
    "topic": "Developer Productivity & Operational Enablement (7%)",
    "objective": "Configure Claude tools and environments for teams (e.g., Claude Code)",
    "lessonId": "d7-t1",
    "question": "A telco's marketing office created a Skill that rewrites customer-facing text in the company's brand voice. Every employee, from engineering to retail stores, should have it. The content rarely changes, there is no requirement for version history or rollback, and the admin wants the simplest path with the least ongoing administration. Which distribution mechanism fits?",
    "question_vi": "Phòng marketing của một công ty viễn thông đã tạo một Skill viết lại văn bản gửi khách hàng theo giọng thương hiệu của công ty. Mọi nhân viên, từ kỹ sư đến cửa hàng bán lẻ, đều nên có Skill này. Nội dung hiếm khi thay đổi, không có yêu cầu về lịch sử phiên bản hay rollback, và admin muốn con đường đơn giản nhất với ít công quản trị nhất. Cơ chế phân phối nào phù hợp?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "An org-provisioned Skill uploaded under Organization settings, available to everyone in the organization at once.",
        "text_vi": "Một org-provisioned Skill được upload trong Organization settings, có sẵn cho mọi người trong tổ chức cùng lúc."
      },
      {
        "key": "B",
        "text": "A Claude Code project Skill copied into the .claude/skills/ folder of each team's repository.",
        "text_vi": "Một Claude Code project Skill được sao chép vào thư mục .claude/skills/ trong repository của từng team."
      },
      {
        "key": "C",
        "text": "A plugin set to required for every group, synced from a connected repository with version-controlled updates.",
        "text_vi": "Một plugin đặt ở chế độ required cho mọi nhóm, đồng bộ từ một repository được kết nối với cập nhật có kiểm soát phiên bản."
      },
      {
        "key": "D",
        "text": "An API Skill attached through the Messages API container with an explicitly pinned version.",
        "text_vi": "Một API Skill gắn qua Messages API container với phiên bản được pin tường minh."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "When a capability genuinely should reach every member and needs no versioning or rollback, the org-provisioned Skill is the simplest path to the whole organization. A governed plugin works but adds administration the scenario explicitly does not need, an API Skill is for products calling the capability programmatically, and project Skills only reach developers working in repositories, not store staff.",
    "explanation_vi": "Khi một năng lực thật sự cần đến mọi thành viên và không cần versioning hay rollback, org-provisioned Skill là con đường đơn giản nhất tới toàn tổ chức. Một plugin có governance vẫn dùng được nhưng thêm công quản trị mà tình huống nói rõ là không cần, API Skill dành cho sản phẩm gọi năng lực bằng chương trình, còn project Skill chỉ đến được developer làm việc trong repository, không đến được nhân viên cửa hàng.",
    "source": "output_5/02_Team_Setup_and_Environment.md"
  },
  {
    "id": 46,
    "topic": "Integration (19%)",
    "objective": "Apply retrieval strategies matched to data shape and query pattern",
    "lessonId": "d3-t6",
    "question": "A telco's support knowledge base serves agents who search both by exact error codes such as 'ERR-5G-217' and by symptom descriptions such as 'calls drop when switching towers'. Code searches are frequently missed, and results often include documentation for retired products. Which two changes best match the data and query pattern? (Choose TWO.)",
    "question_vi": "Knowledge base hỗ trợ của một nhà mạng phục vụ nhân viên tìm kiếm cả theo mã lỗi chính xác như 'ERR-5G-217' lẫn theo mô tả triệu chứng như 'cuộc gọi rớt khi chuyển trạm'. Tìm theo mã thường bị bỏ sót, và kết quả thường gồm tài liệu của các sản phẩm đã ngừng. Hai thay đổi nào phù hợp nhất với dữ liệu và mẫu truy vấn? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "Increase top-k to 50 so codes and current products both appear somewhere in the list.",
        "text_vi": "Tăng top-k lên 50 để mã và sản phẩm hiện hành đều xuất hiện đâu đó trong danh sách."
      },
      {
        "key": "B",
        "text": "Replace the embedding model with a larger one trained on more general web data.",
        "text_vi": "Thay embedding model bằng một model lớn hơn được huấn luyện trên nhiều dữ liệu web chung hơn."
      },
      {
        "key": "C",
        "text": "Filter retrieval on product-lifecycle metadata so only documentation for current products is searched.",
        "text_vi": "Lọc truy xuất theo metadata vòng đời sản phẩm để chỉ tìm tài liệu của sản phẩm hiện hành."
      },
      {
        "key": "D",
        "text": "Switch all documents to fixed-size chunks to simplify indexing.",
        "text_vi": "Chuyển mọi tài liệu sang chunk kích thước cố định để đơn giản hóa indexing."
      },
      {
        "key": "E",
        "text": "Add a sparse BM25 index alongside dense retrieval and merge the lists with reciprocal rank fusion.",
        "text_vi": "Thêm sparse index BM25 bên cạnh dense retrieval và hợp nhất các danh sách bằng reciprocal rank fusion."
      }
    ],
    "answer": [
      "C",
      "E"
    ],
    "explanation": "Mixed query patterns with exact identifiers call for hybrid dense plus sparse retrieval, since BM25 catches codes that embeddings miss and RRF merges the lists, and metadata filtering restricts results to the relevant scope, here current products. A larger general embedding model is still weak on exact codes. A huge top-k adds noise and tokens, and fixed-size chunking addresses neither problem.",
    "explanation_vi": "Mẫu truy vấn hỗn hợp có định danh chính xác cần hybrid dense cộng sparse, vì BM25 bắt được mã mà embedding bỏ sót và RRF hợp nhất các danh sách, còn metadata filter giới hạn kết quả trong phạm vi liên quan, ở đây là sản phẩm hiện hành. Embedding model tổng quát lớn hơn vẫn yếu với mã chính xác. top-k rất lớn thêm nhiễu và token, còn chunk kích thước cố định không giải quyết vấn đề nào.",
    "source": "output/07_RAG_Pipeline_Design.md"
  },
  {
    "id": 47,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "objective": "Communicate architectural decisions and trade-offs",
    "lessonId": "d6-t2",
    "question": "In a design review for a tax-agency assistant that drafts responses to taxpayer queries, the agency's security lead asks: 'What does this system not handle well?' The design deliberately never issues binding rulings; those always go to a tax officer. Which answer best builds the security lead's trust?",
    "question_vi": "Trong buổi review thiết kế cho trợ lý của cơ quan thuế soạn nháp phản hồi câu hỏi của người nộp thuế, trưởng bộ phận bảo mật của cơ quan hỏi: 'Hệ thống này không xử lý tốt điều gì?' Thiết kế có chủ đích không bao giờ đưa ra phán quyết ràng buộc; chúng luôn được chuyển cho cán bộ thuế. Câu trả lời nào xây dựng niềm tin của trưởng bộ phận bảo mật tốt nhất?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "'The model is highly capable, so in practice there are very few query types it struggles with in our testing.'",
        "text_vi": "'Model rất mạnh, nên trên thực tế có rất ít loại câu hỏi mà nó gặp khó khăn trong các bài test của chúng tôi.'"
      },
      {
        "key": "B",
        "text": "'It never issues binding rulings; that boundary exists because a tax officer must decide, and extending it would need a new approval flow and evals.'",
        "text_vi": "'Nó không bao giờ đưa ra phán quyết ràng buộc; ranh giới đó tồn tại vì cán bộ thuế phải quyết định, và mở rộng nó cần luồng phê duyệt và eval mới.'"
      },
      {
        "key": "C",
        "text": "'On our demonstration data the error rate was zero, so we do not expect meaningful gaps in production.'",
        "text_vi": "'Trên dữ liệu demo, tỉ lệ lỗi bằng không, nên chúng tôi không kỳ vọng có lỗ hổng đáng kể trong production.'"
      },
      {
        "key": "D",
        "text": "'We will learn its weak spots from production feedback and share a report after the first quarter of operation.'",
        "text_vi": "'Chúng tôi sẽ tìm ra điểm yếu từ phản hồi production và chia sẻ báo cáo sau quý vận hành đầu tiên.'"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "The Description rules include framing limitations honestly, because a security stakeholder trusts a system whose limits are clearly stated; a good answer names the limit, why it exists and what going beyond it would take. Claiming broad capability or a zero error rate overstates a probabilistic system and erodes trust. Deferring the answer to production reads as deflection, which signals risk.",
    "explanation_vi": "Các quy tắc Description bao gồm nêu giới hạn trung thực, vì một stakeholder bảo mật tin tưởng hệ thống có giới hạn được nói rõ; một câu trả lời tốt nêu giới hạn, vì sao nó tồn tại và vượt qua nó cần gì. Khẳng định năng lực rộng hoặc tỉ lệ lỗi bằng không là phóng đại một hệ thống probabilistic và làm xói mòn niềm tin. Hoãn câu trả lời đến production giống như né tránh, vốn là tín hiệu rủi ro.",
    "source": "output_4/03_Tradeoffs_and_GTM.md"
  },
  {
    "id": 48,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "objective": "Design system prompts, templates, and guardrails",
    "lessonId": "d2-t2",
    "question": "A telco reviews the system prompt of its plan-advisor bot. Symptoms: replies alternate between bullet lists, paragraphs and tables, which breaks the app's display, and the bot sometimes comments on competitors' network quality. The prompt contains a role statement and tone guidance only. Which two gaps should be closed first? (Choose TWO.)",
    "question_vi": "Một nhà mạng rà soát system prompt của bot tư vấn gói cước. Triệu chứng: câu trả lời luân phiên giữa danh sách gạch đầu dòng, đoạn văn và bảng, làm hỏng hiển thị của ứng dụng, và bot đôi khi bình luận về chất lượng mạng của đối thủ. Prompt chỉ có một câu về role và hướng dẫn giọng văn. Hai khoảng trống nào nên được lấp trước? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "No scope stating what topics are in and out of bounds.",
        "text_vi": "Không có scope nêu chủ đề nào trong và ngoài phạm vi."
      },
      {
        "key": "B",
        "text": "No capitalized warning about staying on topic.",
        "text_vi": "Không có cảnh báo viết hoa về việc bám sát chủ đề."
      },
      {
        "key": "C",
        "text": "No extended thinking enabled for plan comparisons.",
        "text_vi": "Không bật extended thinking cho việc so sánh gói cước."
      },
      {
        "key": "D",
        "text": "No few-shot examples showing friendly replies.",
        "text_vi": "Không có ví dụ few-shot nào thể hiện câu trả lời thân thiện."
      },
      {
        "key": "E",
        "text": "No explicit output contract naming the response shape.",
        "text_vi": "Không có output contract tường minh nêu hình dạng response."
      }
    ],
    "answer": [
      "A",
      "E"
    ],
    "explanation": "Each symptom maps to a missing element of the enterprise structure: the changing layout to the absent output contract (format) and the competitor comments to the absent scope. Friendly examples address tone, which is already covered, extended thinking adds cost without addressing format or boundaries, and a capitalized warning is emphasis rather than a stated scope.",
    "explanation_vi": "Mỗi triệu chứng ánh xạ tới một thành phần còn thiếu của cấu trúc doanh nghiệp: bố cục thay đổi là do thiếu output contract (format) và bình luận về đối thủ là do thiếu scope. Ví dụ thân thiện chỉ xử lý giọng văn, vốn đã có, extended thinking thêm chi phí mà không xử lý định dạng hay ranh giới, còn cảnh báo viết hoa chỉ là nhấn mạnh chứ không phải một scope được nêu rõ.",
    "source": "output/09_Prompting_as_Architecture.md"
  },
  {
    "id": 49,
    "topic": "Integration (19%)",
    "objective": "Evaluate tool/agent configuration for capability bloat",
    "lessonId": "d3-t1",
    "question": "A hospital builds an orchestrator-worker system that summarises research literature for clinicians. To simplify setup, every literature-search subagent was given the orchestrator's full tool set, including send_patient_message and update_care_plan. No incident has occurred yet. Which change best establishes the right trust hierarchy?",
    "question_vi": "Một bệnh viện xây hệ thống orchestrator-worker tóm tắt tài liệu nghiên cứu cho bác sĩ. Để đơn giản hóa thiết lập, mọi subagent tìm kiếm tài liệu đều được cấp toàn bộ bộ tool của orchestrator, bao gồm send_patient_message và update_care_plan. Chưa có sự cố nào xảy ra. Thay đổi nào thiết lập phân cấp tin cậy đúng nhất?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Run the subagents on a smaller model tier so that their actions are cheaper to reverse, tracked through the usual ticketing process.",
        "text_vi": "Chạy subagent trên tier model nhỏ hơn để hành động của chúng rẻ hơn khi cần đảo ngược, được theo dõi qua quy trình ticket thông thường."
      },
      {
        "key": "B",
        "text": "Add a system-prompt rule telling subagents never to contact patients or edit care plans.",
        "text_vi": "Thêm quy tắc vào system prompt yêu cầu subagent không bao giờ liên hệ bệnh nhân hay sửa kế hoạch chăm sóc."
      },
      {
        "key": "C",
        "text": "Scope each subagent's tools to its literature-search task so it cannot reach patient-facing tools.",
        "text_vi": "Giới hạn tool của mỗi subagent theo nhiệm vụ tìm tài liệu để nó không thể chạm tới tool hướng tới bệnh nhân."
      },
      {
        "key": "D",
        "text": "Log every subagent tool call and alert the clinical safety team on any patient-facing action.",
        "text_vi": "Log mọi tool call của subagent và cảnh báo đội an toàn lâm sàng khi có hành động hướng tới bệnh nhân."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "The course states that in orchestrator-worker deployments each subagent's tool access should be scoped to its task so it cannot reach tools its job does not require. A prompt rule relies on the model as the security boundary. Logging and alerts detect misuse but do not prevent it. Model tier does not change what the subagent is able to do or make clinical actions reversible.",
    "explanation_vi": "Khóa học nêu rõ trong triển khai orchestrator-worker, quyền dùng tool của mỗi subagent phải được giới hạn theo nhiệm vụ để nó không thể chạm tới tool mà công việc của nó không cần. Quy tắc trong prompt dựa vào model làm ranh giới bảo mật. Logging và cảnh báo phát hiện lạm dụng nhưng không ngăn chặn. Tier model không thay đổi những gì subagent có thể làm và không khiến hành động lâm sàng có thể đảo ngược.",
    "source": "output_2/05_Enterprise_Integration_Patterns.md"
  },
  {
    "id": 50,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Optimize token usage, latency, and cost-performance trade-offs",
    "lessonId": "d4-t5",
    "question": "Ninety days after launch, a SaaS company's support pipeline costs seven times the modeled figure, median latency is 2.3 seconds against an 800-millisecond target, and customer satisfaction has not moved. Every step, including a routing classifier, runs on Opus, and no per-step eval exists. What should the architect do first?",
    "question_vi": "Chín mươi ngày sau khi ra mắt, pipeline hỗ trợ của một công ty SaaS tốn gấp bảy lần con số đã mô hình hóa, latency median là 2,3 giây so với mục tiêu 800 mili giây, và mức độ hài lòng của khách hàng không thay đổi. Mọi bước, kể cả bộ phân loại định tuyến, đều chạy trên Opus, và không có eval theo từng bước. Architect nên làm gì trước tiên?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Move every step to Haiku immediately to cut cost",
        "text_vi": "Chuyển ngay mọi bước sang Haiku để cắt giảm chi phí"
      },
      {
        "key": "B",
        "text": "Add caching and keep Opus everywhere, since quality is proven",
        "text_vi": "Thêm caching và giữ Opus ở mọi nơi, vì chất lượng đã được chứng minh"
      },
      {
        "key": "C",
        "text": "Negotiate a volume discount and keep the architecture unchanged",
        "text_vi": "Đàm phán giảm giá theo volume và giữ nguyên kiến trúc"
      },
      {
        "key": "D",
        "text": "Build per-step evals, then choose the smallest tier that passes for each step",
        "text_vi": "Xây eval theo từng bước, rồi chọn tier nhỏ nhất đạt yêu cầu cho mỗi bước"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "In the course case, the team built an eval set covering each pipeline step, moved the classifier to Haiku and summarization to Sonnet with no regression, and kept Opus only where the eval showed it earned its place, cutting cost 71% with unchanged CSAT. An across-the-board downgrade is untested, a discount does not fix latency, and unchanged CSAT shows Opus everywhere was not proven necessary.",
    "explanation_vi": "Trong case của khóa học, team xây eval set bao phủ từng bước pipeline, chuyển bộ phân loại sang Haiku và bước tóm tắt sang Sonnet mà không có regression, và chỉ giữ Opus ở nơi eval cho thấy nó xứng đáng, giảm 71% chi phí với CSAT không đổi. Hạ tier đồng loạt là chưa kiểm chứng, giảm giá không sửa được latency, và CSAT không đổi cho thấy dùng Opus khắp nơi chưa từng được chứng minh là cần thiết.",
    "source": "output/08_Model_Context_Strategy.md"
  },
  {
    "id": 51,
    "topic": "Governance, Safety & Risk Management (14%)",
    "objective": "Apply human-in-the-loop validation strategies",
    "lessonId": "d5-t3",
    "question": "A commercial insurer wants a claims-triage assistant that reads each claim, decides its priority, checks policy coverage and emails the assigned adjuster. Priority rules live in a rules engine, coverage in the policy system, and emails above a claim-value threshold must be checked by a supervisor. How should the email step be designed?",
    "question_vi": "Một công ty bảo hiểm thương mại muốn một trợ lý phân loại claim đọc từng claim, quyết định mức ưu tiên, kiểm tra phạm vi bảo hiểm và gửi email cho adjuster được giao. Quy tắc ưu tiên nằm trong rules engine, phạm vi bảo hiểm trong hệ thống hợp đồng, và email cho claim trên một ngưỡng giá trị phải được giám sát viên kiểm tra. Bước email nên được thiết kế thế nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Claude drafts the email, the email system sends it, and a supervisor approves above the threshold.",
        "text_vi": "Claude soạn email, hệ thống email gửi, và giám sát viên phê duyệt khi trên ngưỡng."
      },
      {
        "key": "B",
        "text": "Claude drafts and sends, applying the value threshold through instructions in its prompt.",
        "text_vi": "Claude soạn và gửi, áp dụng ngưỡng giá trị thông qua chỉ dẫn trong prompt."
      },
      {
        "key": "C",
        "text": "Claude drafts and sends every email directly, with a supervisor reviewing a weekly sample.",
        "text_vi": "Claude soạn và gửi trực tiếp mọi email, với giám sát viên review một mẫu hằng tuần."
      },
      {
        "key": "D",
        "text": "A supervisor writes and sends all emails, since any email is a human-retained task.",
        "text_vi": "Giám sát viên tự viết và gửi mọi email, vì email nào cũng là việc human-retained."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "The course splits 'email the adjuster': drafting is language work for Claude, sending belongs to the email system, and a human approves anything above a value threshold, a collaborative assignment justified by reversibility, stakes and accountability. Letting Claude send directly or enforce the threshold in its prompt hands a must-hold rule to a probabilistic system, and making every email human-retained wastes Claude where it fits.",
    "explanation_vi": "Khóa học tách bước 'email cho adjuster': soạn thảo là việc ngôn ngữ dành cho Claude, gửi thuộc về hệ thống email, và con người phê duyệt mọi thứ trên ngưỡng giá trị, một kiểu giao việc collaborative được biện minh bằng reversibility, stakes và accountability. Để Claude gửi trực tiếp hay enforce ngưỡng bằng prompt là giao quy tắc bắt buộc cho hệ thống xác suất, còn biến mọi email thành human-retained là lãng phí Claude ở chỗ nó phù hợp.",
    "source": "output/04_Decomposition.md"
  },
  {
    "id": 52,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Align solutions to business value pillars (efficiency, transformation, productivity, cost, performance SLAs)",
    "lessonId": "d1-t6",
    "question": "A law firm wants to use Claude to review every vendor contract instead of the sampled 10 percent that associates can review today. Leadership describes the value as 'making a service we could not previously deliver economically'. Which business value pillar is this, and what is the appropriate metric?",
    "question_vi": "Một hãng luật muốn dùng Claude để review mọi hợp đồng nhà cung cấp thay vì mẫu 10 phần trăm mà associate review được hiện nay. Ban lãnh đạo mô tả giá trị là 'làm được một dịch vụ mà trước đây ta không thể cung cấp một cách kinh tế'. Đây là trụ cột giá trị nào và metric phù hợp là gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Productivity, measured by the number of Claude sessions started per associate each day.",
        "text_vi": "Productivity, đo bằng số phiên Claude được mở mỗi associate mỗi ngày."
      },
      {
        "key": "B",
        "text": "Transformation, measured by contract coverage rising from a sample to full review.",
        "text_vi": "Transformation, đo bằng độ phủ hợp đồng tăng từ mẫu lên review toàn bộ."
      },
      {
        "key": "C",
        "text": "Efficiency, measured by the number of minutes saved per sampled contract by the existing associates.",
        "text_vi": "Efficiency, đo bằng số phút tiết kiệm mỗi hợp đồng được lấy mẫu bởi các associate hiện có."
      },
      {
        "key": "D",
        "text": "Cost, measured by reductions in the number of associates employed in the contract-review team.",
        "text_vi": "Cost, đo bằng mức giảm số associate làm việc trong đội review hợp đồng."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Work that was not feasible or economical before becoming possible is the transformation pillar, and reviewing every contract instead of a sample is measured as coverage. Efficiency and cost describe doing the same work faster or cheaper, and session counts are an activity measure rather than a value outcome.",
    "explanation_vi": "Công việc trước đây không khả thi hoặc không kinh tế nay trở nên khả thi là trụ cột transformation, và review mọi hợp đồng thay vì mẫu được đo bằng độ phủ. Efficiency và cost mô tả làm cùng công việc nhanh hơn hay rẻ hơn, còn số phiên là thước đo hoạt động chứ không phải kết quả giá trị.",
    "source": "output_4/09_Supplement_Business_Value_and_Discovery_Toolkit.md"
  },
  {
    "id": 53,
    "topic": "Governance, Safety & Risk Management (14%)",
    "objective": "Apply human-in-the-loop validation strategies",
    "lessonId": "d5-t3",
    "question": "An e-commerce marketplace is tuning review routing and hits two awkward categories: seller payouts that are high in value but can be clawed back within 24 hours, and listing-category corrections where confidence is low but changes are trivial to undo. Reviewer time is scarce. How should the architect weigh the variables?",
    "question_vi": "Một sàn thương mại điện tử đang tinh chỉnh định tuyến review và gặp hai nhóm khó: các khoản chi trả cho người bán có giá trị cao nhưng có thể thu hồi trong 24 giờ, và các chỉnh sửa danh mục sản phẩm có confidence thấp nhưng thay đổi rất dễ hoàn tác. Thời gian của reviewer khan hiếm. Architect nên cân nhắc các biến số thế nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Route both categories to pre-action review, since conflicting signals always need a human.",
        "text_vi": "Chuyển cả hai nhóm sang pre-action review, vì tín hiệu mâu thuẫn luôn cần con người."
      },
      {
        "key": "B",
        "text": "Weight confidence most heavily, since it is the only variable the model measures directly.",
        "text_vi": "Đặt trọng số lớn nhất cho confidence, vì đó là biến duy nhất mà model đo trực tiếp."
      },
      {
        "key": "C",
        "text": "Weight cost and reversibility more, and use confidence to decide how much volume passes.",
        "text_vi": "Đặt trọng số lớn hơn cho cost và reversibility, và dùng confidence để quyết định bao nhiêu khối lượng được đi qua."
      },
      {
        "key": "D",
        "text": "Treat all three variables equally and route any item that fails at least two of them.",
        "text_vi": "Coi ba biến ngang nhau và định tuyến mọi item không đạt ít nhất hai trong số đó."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "When the variables disagree, the course gives greater weight to cost and reversibility because they determine the consequences of a mistake, while confidence decides how much of the high-stakes volume can safely pass unreviewed. Weighting confidence most or treating the variables equally ignores consequences, and sending all conflicting items to review spends scarce reviewer attention on trivial, reversible changes.",
    "explanation_vi": "Khi các biến mâu thuẫn, khóa học đặt trọng số lớn hơn cho cost và reversibility vì chúng quyết định hậu quả của sai sót, còn confidence quyết định bao nhiêu phần khối lượng high-stakes có thể an toàn đi qua mà không cần review. Ưu tiên confidence hay coi các biến ngang nhau là bỏ qua hậu quả, còn chuyển mọi item mâu thuẫn sang review tiêu tốn sự chú ý khan hiếm của reviewer vào các thay đổi nhỏ, đảo ngược được.",
    "source": "output_3/05_Human_Review_Routing.md"
  },
  {
    "id": 54,
    "topic": "Claude Models, Prompting & Context Engineering (13%)",
    "objective": "Design system prompts, templates, and guardrails",
    "lessonId": "d2-t2",
    "question": "A telco's billing-support assistant is meant to cover only billing and plan changes. It regularly answers questions about handset repairs and competitor pricing, sometimes inventing details. The system prompt defines a role and a JSON output contract but nothing else. Which addition most directly addresses this behaviour?",
    "question_vi": "Trợ lý hỗ trợ thanh toán của một nhà mạng chỉ được thiết kế để xử lý thanh toán và thay đổi gói cước. Nó thường xuyên trả lời câu hỏi về sửa chữa điện thoại và giá của đối thủ, đôi khi bịa chi tiết. System prompt định nghĩa role và một JSON output contract nhưng không có gì khác. Bổ sung nào giải quyết trực tiếp nhất hành vi này?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "A higher-capability model tier that better infers the intended boundaries of the role from context.",
        "text_vi": "Một model tier năng lực cao hơn để suy ra tốt hơn ranh giới dự định của role từ ngữ cảnh."
      },
      {
        "key": "B",
        "text": "A larger set of few-shot examples showing good answers to typical billing questions.",
        "text_vi": "Một bộ ví dụ few-shot lớn hơn thể hiện câu trả lời tốt cho các câu hỏi thanh toán điển hình."
      },
      {
        "key": "C",
        "text": "A longer role description emphasizing that the assistant is a billing expert.",
        "text_vi": "Một mô tả role dài hơn nhấn mạnh trợ lý là chuyên gia thanh toán."
      },
      {
        "key": "D",
        "text": "An explicit scope section with an out_of_scope status in the output contract for anything else.",
        "text_vi": "Một phần scope tường minh với trạng thái out_of_scope trong output contract cho mọi nội dung khác."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "The prompt is missing the scope element of the enterprise structure (role, scope, constraints, output contract), so the model improvises its boundaries. Naming what is in and out of bounds, and giving out-of-scope requests a defined status in the contract, removes the gap. More billing examples, a stronger model or a richer role description still leave the boundary unstated.",
    "explanation_vi": "Prompt thiếu thành phần scope trong cấu trúc doanh nghiệp (role, scope, constraints, output contract), nên model tự ứng biến ranh giới. Nêu rõ cái gì trong và ngoài phạm vi, và gán cho yêu cầu ngoài phạm vi một trạng thái xác định trong contract, sẽ lấp khoảng trống. Thêm ví dụ về thanh toán, model mạnh hơn hay mô tả role phong phú hơn đều vẫn để ranh giới không được nêu ra.",
    "source": "output/09_Prompting_as_Architecture.md"
  },
  {
    "id": 55,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "objective": "Communicate architectural decisions and trade-offs",
    "lessonId": "d6-t2",
    "question": "A media company's Architect told the sponsor that a static 30,000-token style guide 'could' be prompt-cached to reduce cost, and the sponsor approved the full-context design on that basis. Three months later invoices show no caching was ever implemented; nobody had been assigned to it. What should the Architect have done when presenting the tradeoff?",
    "question_vi": "Architect của một công ty truyền thông nói với sponsor rằng một style guide tĩnh 30.000 token 'có thể' được prompt cache để giảm chi phí, và sponsor phê duyệt thiết kế full-context dựa trên điều đó. Ba tháng sau hóa đơn cho thấy caching chưa bao giờ được triển khai; không ai được giao việc này. Architect lẽ ra nên làm gì khi trình bày tradeoff?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Present caching as a committed design decision with an owner and expected savings to be confirmed with pilot data.",
        "text_vi": "Trình bày caching như một quyết định thiết kế cam kết, có owner và mức tiết kiệm dự kiến sẽ được xác nhận bằng dữ liệu pilot."
      },
      {
        "key": "B",
        "text": "Omit caching from the presentation entirely, since mentioning optional optimisations confuses non-technical sponsors.",
        "text_vi": "Bỏ hẳn caching khỏi bài trình bày, vì nhắc đến các tối ưu tùy chọn gây rối cho sponsor không chuyên."
      },
      {
        "key": "C",
        "text": "Quote the maximum theoretical caching discount so the sponsor sees the most favourable cost scenario.",
        "text_vi": "Trích dẫn mức giảm giá caching tối đa trên lý thuyết để sponsor thấy kịch bản chi phí thuận lợi nhất."
      },
      {
        "key": "D",
        "text": "Recommend retrieval instead, since caching benefits are too uncertain to include in any business case.",
        "text_vi": "Khuyến nghị retrieval thay thế, vì lợi ích của caching quá không chắc chắn để đưa vào bất kỳ business case nào."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "In the course's watch-out, caching was mentioned only as a possibility rather than becoming an owned design decision, so nobody implemented it; the better answer commits to caching from the start, names an owner and confirms savings with pilot numbers. Omitting it hides a real cost lever. Quoting a best-case discount overstates the outcome, and dismissing caching contradicts the course advice to evaluate it for static content.",
    "explanation_vi": "Trong phần cảnh báo của khóa học, caching chỉ được nhắc như một khả năng thay vì trở thành quyết định thiết kế có owner, nên không ai triển khai; câu trả lời tốt hơn là cam kết caching ngay từ đầu, chỉ định owner và xác nhận mức tiết kiệm bằng số liệu pilot. Bỏ nó đi là che giấu một đòn bẩy chi phí thật. Trích mức giảm tốt nhất là phóng đại kết quả, và gạt bỏ caching trái với lời khuyên của khóa học là đánh giá nó cho nội dung tĩnh.",
    "source": "output_4/03_Tradeoffs_and_GTM.md"
  },
  {
    "id": 56,
    "topic": "Stakeholder Communication & Lifecycle Management (14%)",
    "objective": "Communicate architectural decisions and trade-offs",
    "lessonId": "d6-t2",
    "question": "A motor insurer's claims workflow carries a state audit-trail obligation. The delivery team proposes dropping per-interaction logging to cut about 300 ms from each response and asks the Architect to present the option to the sponsor. Using the tradeoff translation map, what is the reversal cost the Architect must state for this option?",
    "question_vi": "Quy trình bồi thường của một công ty bảo hiểm xe cơ giới có nghĩa vụ audit trail theo quy định của bang. Đội triển khai đề xuất bỏ logging từng tương tác để giảm khoảng 300 ms cho mỗi phản hồi và đề nghị Architect trình bày phương án này với sponsor. Theo tradeoff translation map, reversal cost mà Architect phải nêu cho phương án này là gì?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Higher token spend, because unlogged interactions cannot benefit from prompt caching on later requests.",
        "text_vi": "Chi tiêu token cao hơn, vì các tương tác không được log không thể hưởng lợi từ prompt caching ở các request sau."
      },
      {
        "key": "B",
        "text": "A potential compliance gap requiring remediation, and restoring logging may require redesigning the interaction layer.",
        "text_vi": "Một compliance gap tiềm ẩn cần khắc phục, và việc khôi phục logging có thể đòi hỏi thiết kế lại tầng tương tác."
      },
      {
        "key": "C",
        "text": "A need to move to a larger model tier to recover the response quality lost when logging is removed.",
        "text_vi": "Cần chuyển sang tier model lớn hơn để lấy lại chất lượng phản hồi bị mất khi bỏ logging."
      },
      {
        "key": "D",
        "text": "None of significance, because logging can be switched back on through configuration whenever auditors ask.",
        "text_vi": "Không đáng kể, vì logging có thể bật lại bằng cấu hình bất cứ khi nào kiểm toán viên yêu cầu."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "The course map states that in a regulated workload trimming logging risks a compliance gap requiring remediation, and the cumulative exercise adds that restoring logging means redesigning the interaction layer, with any gap period exposed. Assuming logging can simply be re-enabled is the thinking that makes reversal cost invisible, and it cannot recover the missing records. Model tier and caching are unrelated to this decision.",
    "explanation_vi": "Bảng ánh xạ của khóa học nói rằng trong workload regulated, cắt giảm logging có nguy cơ tạo compliance gap cần khắc phục, và bài tổng hợp bổ sung rằng khôi phục logging nghĩa là thiết kế lại tầng tương tác, với khoảng thời gian thiếu log bị phơi bày. Cho rằng logging có thể bật lại đơn giản chính là lối nghĩ khiến reversal cost trở nên vô hình, và nó không thể khôi phục các bản ghi đã thiếu. Tier model và caching không liên quan đến quyết định này.",
    "source": "output_4/03_Tradeoffs_and_GTM.md"
  },
  {
    "id": 57,
    "topic": "Integration (19%)",
    "objective": "Evaluate accuracy-latency trade-offs and justify configuration decisions",
    "lessonId": "d3-t3",
    "question": "A corporate legal team wants to enable extended thinking on its contract-risk analysis step, arguing that more reasoning 'can't hurt'. The step runs on Sonnet, its prompt was written quickly, and no eval has been run with thinking disabled. What process should the architect recommend?",
    "question_vi": "Đội pháp chế của một tập đoàn muốn bật extended thinking cho bước phân tích rủi ro hợp đồng, lập luận rằng suy luận nhiều hơn thì 'không thể có hại'. Bước này chạy trên Sonnet, prompt được viết vội, và chưa có eval nào chạy khi tắt thinking. Architect nên khuyến nghị quy trình nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Enable it now and remove it later if the monthly invoice exceeds budget, keeping the rest of the architecture unchanged.",
        "text_vi": "Bật ngay bây giờ và tắt sau nếu hóa đơn hằng tháng vượt ngân sách, giữ nguyên phần còn lại của kiến trúc."
      },
      {
        "key": "B",
        "text": "Skip thinking and move the step straight to Opus, which reasons more by default.",
        "text_vi": "Bỏ qua thinking và chuyển thẳng bước này sang Opus, vốn suy luận nhiều hơn theo mặc định."
      },
      {
        "key": "C",
        "text": "Run the eval without thinking, improve the prompt, and enable thinking only if a measured accuracy gap remains on this step.",
        "text_vi": "Chạy eval khi chưa bật thinking, cải thiện prompt, và chỉ bật thinking nếu vẫn còn khoảng cách độ chính xác đo được ở bước này."
      },
      {
        "key": "D",
        "text": "Enable it by default on every step, since thinking tokens are only billed for the visible summary, with the change documented in the team's runbook.",
        "text_vi": "Bật mặc định cho mọi bước, vì thinking token chỉ bị tính phí cho phần tóm tắt hiển thị, với thay đổi được ghi lại trong runbook của đội."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Extended thinking is a cost and latency trade-off, so the course says to run evals without it first, work on the prompt, and enable it only for a measured accuracy gap. Billing is for thinking tokens actually consumed, not the summary length, and enabling it everywhere is the anti-pattern. Waiting for the invoice is reactive, and jumping to Opus is another unmeasured tier change.",
    "explanation_vi": "Extended thinking là một đánh đổi chi phí và latency, nên khóa học khuyên chạy eval khi chưa bật trước, cải thiện prompt, và chỉ bật khi có khoảng cách độ chính xác đo được. Phí được tính theo thinking token thực sự tiêu thụ, không theo độ dài bản tóm tắt, và bật ở mọi nơi là anti-pattern. Chờ hóa đơn là phản ứng bị động, còn nhảy lên Opus là một thay đổi tier khác chưa được đo.",
    "source": "output/08_Model_Context_Strategy.md"
  },
  {
    "id": 58,
    "topic": "Evaluation, Testing & Optimization (16%)",
    "objective": "Define evaluation metrics (accuracy, latency, cost, safety, security)",
    "lessonId": "d4-t1",
    "question": "A retailer selling dietary supplements uses Claude to draft product descriptions. A safety requirement is that descriptions must not imply the product treats or cures a disease, but legitimate phrasing about ingredients is allowed. A keyword blocklist the team tried produced many false alarms and missed implied claims. How should this safety behavior be graded?",
    "question_vi": "Một nhà bán lẻ thực phẩm chức năng dùng Claude để soạn mô tả sản phẩm. Một yêu cầu safety là mô tả không được ngụ ý sản phẩm điều trị hay chữa khỏi bệnh, nhưng cách diễn đạt hợp lệ về thành phần thì được phép. Danh sách từ khóa chặn mà team đã thử tạo ra nhiều cảnh báo giả và bỏ sót các tuyên bố ngụ ý. Hành vi safety này nên được chấm thế nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Expand the keyword blocklist until false alarms disappear",
        "text_vi": "Mở rộng danh sách từ khóa chặn cho đến khi hết cảnh báo giả"
      },
      {
        "key": "B",
        "text": "Skip grading and rely on a system prompt instruction against health claims",
        "text_vi": "Bỏ qua việc chấm và dựa vào chỉ dẫn trong system prompt cấm tuyên bố sức khỏe"
      },
      {
        "key": "C",
        "text": "Grade with the same model that wrote the descriptions, for consistency of style",
        "text_vi": "Chấm bằng chính model đã viết mô tả, để nhất quán về văn phong"
      },
      {
        "key": "D",
        "text": "Use a different-model LLM judge with a rubric and fixed verdict labels, calibrated on compliance-labeled examples",
        "text_vi": "Dùng LLM judge từ model khác với rubric và nhãn phán quyết cố định, calibrate trên các ví dụ được bộ phận compliance gán nhãn"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Whether wording implies a medical claim requires interpretation, so this belongs with an LLM judge made rigorous by a rubric, constrained verdicts, calibration against human labels, and a different model to avoid self-preference. A growing blocklist is still a deterministic tool for an interpretive behavior, self-grading introduces self-preference, and an instruction alone provides no measurement.",
    "explanation_vi": "Việc một cách diễn đạt có ngụ ý tuyên bố y tế hay không cần diễn giải, nên thuộc về LLM judge được làm nghiêm ngặt bằng rubric, constrained verdict, calibrate với nhãn của con người và dùng model khác để tránh self-preference. Danh sách chặn mở rộng vẫn là công cụ tất định cho một hành vi cần diễn giải, tự chấm gây self-preference, còn chỉ dẫn đơn thuần không cung cấp phép đo nào.",
    "source": "output_2/02_Evals_as_Acceptance_Criteria.md"
  },
  {
    "id": 59,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Apply decomposition techniques for complex problem solving",
    "lessonId": "d1-t5",
    "question": "A partner brief for a claims-triage assistant lists: read the claim, decide priority, look up coverage, email the adjuster. The architect starts by asking 'where can Claude help with this?' and quickly assigns all four steps to Claude. According to the course, how should the guiding question be reframed?",
    "question_vi": "Brief của partner cho trợ lý phân loại claim gồm: đọc claim, quyết định ưu tiên, tra coverage, gửi email cho adjuster. Architect bắt đầu bằng câu hỏi 'Claude giúp được ở đâu?' và nhanh chóng gán cả bốn bước cho Claude. Theo khóa học, câu hỏi định hướng nên được diễn đạt lại thế nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Where do the four properties argue for Claude over the system that already does this right?",
        "text_vi": "Ở đâu bốn thuộc tính ủng hộ Claude hơn hệ thống đã làm đúng việc này?"
      },
      {
        "key": "B",
        "text": "Which steps are the most expensive today, so that the largest cost savings come first from automation?",
        "text_vi": "Bước nào đang tốn kém nhất hiện nay, để tiết kiệm chi phí lớn nhất đến trước từ tự động hóa?"
      },
      {
        "key": "C",
        "text": "Which steps can Claude perform at all, given that current models handle almost every language-related task?",
        "text_vi": "Bước nào Claude có thể làm được, khi các model hiện nay xử lý hầu hết tác vụ liên quan ngôn ngữ?"
      },
      {
        "key": "D",
        "text": "Which steps would stakeholders most enjoy seeing automated, to maximize visible adoption of the assistant?",
        "text_vi": "Bước nào các stakeholder thích thấy được tự động hóa nhất, để tối đa mức chấp nhận dễ thấy của trợ lý?"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "The course shifts the framing from 'where can Claude help' to where the four properties favour Claude over an existing system that already does the job reliably, which is what protects against over-assigning to Claude. Cost, mere capability and stakeholder enthusiasm are not the decision lens for ownership.",
    "explanation_vi": "Khóa học chuyển khung câu hỏi từ 'Claude giúp được ở đâu' sang việc bốn thuộc tính ủng hộ Claude hơn hệ thống hiện có đang làm đúng việc đó ở đâu, điều bảo vệ khỏi việc giao quá nhiều cho Claude. Chi phí, năng lực đơn thuần và sự hào hứng của stakeholder không phải lăng kính quyết định quyền sở hữu.",
    "source": "output/04_Decomposition.md"
  },
  {
    "id": 60,
    "topic": "Integration (19%)",
    "objective": "Evaluate accuracy-latency trade-offs and justify configuration decisions",
    "lessonId": "d3-t3",
    "question": "Ninety days after launch, a travel-booking assistant costs seven times its approved estimate and median latency is far above the agreed target, while customer satisfaction is unchanged from the pre-launch baseline. Every pipeline step calls Opus, and there was never a per-step eval. What should the architect do first?",
    "question_vi": "Chín mươi ngày sau khi ra mắt, trợ lý đặt chỗ du lịch tốn gấp bảy lần ước tính được duyệt và latency trung vị cao hơn nhiều so với mục tiêu đã thỏa thuận, trong khi mức hài lòng của khách hàng không đổi so với trước khi ra mắt. Mọi bước trong pipeline đều gọi Opus, và chưa từng có eval theo từng bước. Architect nên làm gì đầu tiên?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Negotiate volume pricing with the provider so that the Opus configuration fits the budget.",
        "text_vi": "Đàm phán giá theo khối lượng với nhà cung cấp để cấu hình Opus vừa ngân sách."
      },
      {
        "key": "B",
        "text": "Build an eval for each step's work, then choose the lowest tier that passes for each step.",
        "text_vi": "Xây eval cho công việc của từng bước, sau đó chọn tier thấp nhất đạt eval cho mỗi bước."
      },
      {
        "key": "C",
        "text": "Enable prompt caching on every step and keep the model configuration as it is.",
        "text_vi": "Bật prompt caching ở mọi bước và giữ nguyên cấu hình model."
      },
      {
        "key": "D",
        "text": "Switch every step to Haiku immediately and monitor complaints for regressions.",
        "text_vi": "Chuyển mọi bước sang Haiku ngay lập tức và theo dõi khiếu nại để phát hiện suy giảm."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "The course's case shows that 'no tier decision' defaults to the most expensive option, and the fix is a per-step eval followed by per-step tier selection, which cut cost 71% while CSAT stayed flat. Switching everything to Haiku blindly uses customers as the eval. Price negotiation and caching may help at the margin but leave the root cause, an unjustified tier on every step, in place.",
    "explanation_vi": "Case của khóa học cho thấy 'không có quyết định tier' sẽ mặc định thành lựa chọn đắt nhất, và cách sửa là eval theo từng bước rồi chọn tier theo từng bước, giúp giảm 71% chi phí trong khi CSAT không đổi. Chuyển hết sang Haiku một cách mù quáng là dùng khách hàng làm eval. Đàm phán giá và caching có thể giúp phần nào nhưng giữ nguyên nguyên nhân gốc, tức một tier không được chứng minh ở mọi bước.",
    "source": "output/08_Model_Context_Strategy.md"
  },
  {
    "id": 61,
    "topic": "Solution Design & Architecture (17%)",
    "objective": "Align solutions to business value pillars (efficiency, transformation, productivity, cost, performance SLAs)",
    "lessonId": "d1-t6",
    "question": "A sponsor wants to automate a high-consequence regulatory-submission step completely to maximize the efficiency pillar. The design team argues that a collaborative design, where Claude drafts and a compliance officer approves, would still capture most of the time savings. How should the architect frame the tradeoff?",
    "question_vi": "Một sponsor muốn tự động hóa hoàn toàn một bước nộp hồ sơ pháp quy hậu quả cao để tối đa trụ cột efficiency. Đội thiết kế lập luận rằng thiết kế cộng tác, trong đó Claude soạn và cán bộ compliance duyệt, vẫn giữ được phần lớn thời gian tiết kiệm. Architect nên định khung đánh đổi thế nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Efficiency and risk are independent pillars, so the review step can be added or removed without effect.",
        "text_vi": "Efficiency và rủi ro là các trụ cột độc lập, nên bước review có thể thêm hoặc bỏ mà không ảnh hưởng."
      },
      {
        "key": "B",
        "text": "The sponsor should be told that any human review removes all efficiency value, so the project should stop.",
        "text_vi": "Cần nói với sponsor rằng bất kỳ review nào của người cũng xóa toàn bộ giá trị efficiency, nên dự án nên dừng."
      },
      {
        "key": "C",
        "text": "Collaborative keeps most efficiency value at acceptable risk for a consequential step.",
        "text_vi": "Collaborative giữ phần lớn giá trị efficiency với rủi ro chấp nhận được cho bước có hậu quả."
      },
      {
        "key": "D",
        "text": "Efficiency always outranks risk for the sponsor, so full automation is correct provided logs are retained.",
        "text_vi": "Efficiency luôn xếp trên rủi ro với sponsor, nên tự động hóa hoàn toàn là đúng miễn là giữ log."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Pillars trade off: fully automating a high-consequence step increases efficiency but also risk, whereas Claude drafting with a person approving keeps most of the value at acceptable risk. Ranking efficiency above risk by default ignores accountability, claiming review erases all value is wrong because drafting still saves time, and the pillars are not independent of design.",
    "explanation_vi": "Các trụ cột đánh đổi nhau: tự động hóa hoàn toàn một bước hậu quả cao tăng efficiency nhưng cũng tăng rủi ro, còn Claude soạn và người duyệt giữ phần lớn giá trị ở rủi ro chấp nhận được. Xếp efficiency trên rủi ro theo mặc định bỏ qua trách nhiệm giải trình, cho rằng review xóa hết giá trị là sai vì việc soạn vẫn tiết kiệm thời gian, và các trụ cột không độc lập với thiết kế.",
    "source": "output/13_Supplement_Business_Value_End_to_End.md"
  },
  {
    "id": 62,
    "topic": "Governance, Safety & Risk Management (14%)",
    "objective": "Identify risks, limitations, and failure modes of LLM systems",
    "lessonId": "d5-t2",
    "question": "A bank's loan-intake pipeline uses Claude to extract the requested loan amount, and code routes amounts above a threshold to credit officers. Early demos used clean application forms and looked perfect. The architect wants this kind of failure to surface in testing and operations rather than in an audit. Which TWO measures should be added? (Choose TWO.)",
    "question_vi": "Pipeline tiếp nhận hồ sơ vay của một ngân hàng dùng Claude để trích xuất số tiền vay đề nghị, và code chuyển các khoản trên ngưỡng cho chuyên viên tín dụng. Các buổi demo ban đầu dùng mẫu đơn sạch và trông hoàn hảo. Architect muốn kiểu lỗi này lộ ra trong kiểm thử và vận hành thay vì trong audit. Nên thêm HAI biện pháp nào? (Chọn HAI đáp án.)",
    "type": "multiple",
    "selectCount": 2,
    "options": [
      {
        "key": "A",
        "text": "A larger model for extraction, validated on the same clean forms used in the demos.",
        "text_vi": "Một model lớn hơn cho bước trích xuất, được kiểm định trên chính các mẫu đơn sạch đã dùng khi demo."
      },
      {
        "key": "B",
        "text": "Standard request and error logging, which records each extraction call and its latency.",
        "text_vi": "Logging request và lỗi tiêu chuẩn, ghi lại từng lời gọi trích xuất và độ trễ của nó."
      },
      {
        "key": "C",
        "text": "An extraction eval set with messy cases such as amounts in words, ranges and mixed currencies.",
        "text_vi": "Một eval set cho bước trích xuất với các ca bẩn như số tiền viết bằng chữ, khoảng giá trị và nhiều loại tiền."
      },
      {
        "key": "D",
        "text": "A longer system prompt that lists every way an applicant might phrase an amount.",
        "text_vi": "Một system prompt dài hơn liệt kê mọi cách người nộp đơn có thể diễn đạt số tiền."
      },
      {
        "key": "E",
        "text": "Business-level monitoring of the escalation rate with periodic sampled reconciliation.",
        "text_vi": "Giám sát cấp nghiệp vụ trên tỷ lệ chuyển lên cấp trên, kèm đối chiếu định kỳ theo mẫu."
      }
    ],
    "answer": [
      "C",
      "E"
    ],
    "explanation": "The course's corrected design adds an eval set built from dirty cases and business-level monitoring with sampled reconciliation, because demos only show clean inputs. Standard request logging does not record the decision a model makes inside a request, so it would not flag drift. Validating a bigger model on clean forms repeats the demo blind spot, and a longer prompt improves odds without creating a test or a signal.",
    "explanation_vi": "Thiết kế đã sửa trong khóa học thêm một eval set xây từ các ca bẩn và giám sát cấp nghiệp vụ kèm đối chiếu theo mẫu, vì demo chỉ cho thấy input sạch. Request logging tiêu chuẩn không ghi lại quyết định model đưa ra bên trong một request, nên sẽ không gắn cờ drift. Kiểm định model lớn hơn trên mẫu sạch lặp lại đúng điểm mù của demo, còn prompt dài hơn cải thiện xác suất mà không tạo ra bài test hay tín hiệu nào.",
    "source": "output/04_Decomposition.md"
  },
  {
    "id": 63,
    "topic": "Governance, Safety & Risk Management (14%)",
    "objective": "Apply human-in-the-loop validation strategies",
    "lessonId": "d5-t3",
    "question": "A city government's public-information chatbot answers about 60,000 questions a month on opening hours, permits and waste collection. Wrong answers are low-cost and easy to correct. The communications director proposes reviewing a random 2% sample weekly and claims this 'guarantees every resident gets a correct answer'. How should the architect characterize the proposal?",
    "question_vi": "Chatbot thông tin công cộng của một chính quyền thành phố trả lời khoảng 60.000 câu hỏi mỗi tháng về giờ mở cửa, giấy phép và thu gom rác. Câu trả lời sai có chi phí thấp và dễ sửa. Giám đốc truyền thông đề xuất review ngẫu nhiên 2% mẫu mỗi tuần và cho rằng điều này 'đảm bảo mọi cư dân đều nhận câu trả lời đúng'. Architect nên nhận định đề xuất này thế nào?",
    "type": "single",
    "selectCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Unnecessary; low-cost answers need no review because residents can always call the city.",
        "text_vi": "Không cần thiết; câu trả lời chi phí thấp không cần review vì cư dân luôn có thể gọi cho thành phố."
      },
      {
        "key": "B",
        "text": "Wrong placement; low-stakes public answers should go through pre-action approval instead.",
        "text_vi": "Sai vị trí; câu trả lời công cộng rủi ro thấp nên đi qua pre-action approval."
      },
      {
        "key": "C",
        "text": "Correct on both counts; sampling at 2% is statistically equivalent to reviewing each answer.",
        "text_vi": "Đúng cả hai ý; lấy mẫu 2% tương đương về thống kê với việc review từng câu trả lời."
      },
      {
        "key": "D",
        "text": "Right placement, wrong claim: sampling monitors system quality but does not guard each answer.",
        "text_vi": "Đúng vị trí, sai khẳng định: lấy mẫu giám sát chất lượng hệ thống nhưng không bảo vệ từng câu trả lời."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Sampled review fits high-volume, low-risk traffic because it monitors quality and drift without slowing the flow, but it monitors the system rather than guarding individual outcomes, so an unsampled bad answer can slip through. Pre-action approval would not scale here, and dropping review entirely loses the quality and drift signal.",
    "explanation_vi": "Sampled review phù hợp với traffic khối lượng lớn, rủi ro thấp vì nó giám sát chất lượng và drift mà không làm chậm luồng, nhưng nó giám sát hệ thống chứ không bảo vệ từng kết quả, nên một câu trả lời sai không được lấy mẫu vẫn có thể lọt qua. Pre-action approval không mở rộng được ở đây, còn bỏ hẳn review làm mất tín hiệu về chất lượng và drift.",
    "source": "output_3/05_Human_Review_Routing.md"
  }
];
