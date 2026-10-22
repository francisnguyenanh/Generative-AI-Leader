window.QUIZ_DATA_SET_9 = [
  {
    "id": 1,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "A bank executive says, \"We already have a foundation model, because our churn-prediction model was trained on our own customer data.\" Which response is most accurate?",
    "question_vi": "Một giám đốc ngân hàng nói: \"Chúng tôi đã có foundation model, vì mô hình dự đoán khách rời bỏ được huấn luyện trên dữ liệu khách hàng của chúng tôi.\" Phản hồi nào chính xác nhất?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Not quite: a foundation model is trained on broad data and adapted to many tasks, while a churn model is built for one prediction.",
        "text_vi": "Chưa đúng: foundation model được huấn luyện trên dữ liệu rộng và thích ứng cho nhiều tác vụ, còn mô hình dự đoán rời bỏ chỉ xây cho một dự đoán."
      },
      {
        "key": "B",
        "text": "Correct: any model trained on a company's own data counts as a foundation model, however many tasks it can actually support.",
        "text_vi": "Đúng: bất kỳ mô hình nào huấn luyện trên dữ liệu riêng của công ty đều là foundation model, dù nó hỗ trợ được bao nhiêu tác vụ."
      },
      {
        "key": "C",
        "text": "Not quite: a foundation model must be a hand-written rule-based program, while a churn model is learned automatically from data.",
        "text_vi": "Chưa đúng: foundation model phải là chương trình dựa trên luật viết tay, còn mô hình rời bỏ được học tự động từ dữ liệu."
      },
      {
        "key": "D",
        "text": "Correct: a model becomes a foundation model once it is deployed to production and is making predictions for customers every day.",
        "text_vi": "Đúng: một mô hình trở thành foundation model khi đã triển khai production và đưa ra dự đoán cho khách hàng mỗi ngày."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "A foundation model is trained on massive, diverse data and can be adapted to many tasks. A churn model trained on company data for one prediction is a task-specific ML model, and neither deployment nor use of private data makes a model a foundation model.",
    "explanation_vi": "Foundation model được huấn luyện trên lượng dữ liệu lớn, đa dạng và có thể thích ứng cho nhiều tác vụ. Mô hình rời bỏ huấn luyện trên dữ liệu công ty cho một dự đoán là mô hình ML riêng cho tác vụ, và việc triển khai hay dùng dữ liệu riêng không biến nó thành foundation model.",
    "lessonId": "d1-t1",
    "objective": "1.1 Core gen AI concepts"
  },
  {
    "id": 2,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "An online retailer's marketing team wants better product descriptions from a gen AI model. They keep rewording their instructions and adding context to the input, but nobody retrains or changes the model itself. What is this practice called?",
    "question_vi": "Đội marketing của một nhà bán lẻ trực tuyến muốn mô hình gen AI viết mô tả sản phẩm tốt hơn. Họ liên tục diễn đạt lại chỉ dẫn và bổ sung ngữ cảnh cho đầu vào, nhưng không ai huấn luyện lại hay thay đổi mô hình. Cách làm này gọi là gì?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Prompt tuning, because the team is learning small sets of parameters that are attached to the model.",
        "text_vi": "Prompt tuning, vì đội đang học một tập tham số nhỏ gắn thêm vào mô hình."
      },
      {
        "key": "B",
        "text": "Prompt engineering, because only the input to the model is being designed and refined.",
        "text_vi": "Prompt engineering, vì chỉ có đầu vào của mô hình được thiết kế và tinh chỉnh."
      },
      {
        "key": "C",
        "text": "Fine-tuning, because the model is gradually being adapted to the retailer's own writing style over time.",
        "text_vi": "Fine-tuning, vì mô hình đang dần được điều chỉnh theo phong cách viết riêng của nhà bán lẻ."
      },
      {
        "key": "D",
        "text": "Reinforcement learning, because the team rewards good descriptions and penalizes poor ones in each attempt.",
        "text_vi": "Học tăng cường, vì đội thưởng cho mô tả tốt và phạt mô tả kém ở mỗi lần thử."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Prompt engineering changes only the input. Prompt tuning and fine-tuning both change learned parameters, which is not happening here.",
    "explanation_vi": "Prompt engineering chỉ thay đổi đầu vào. Prompt tuning và fine-tuning đều thay đổi tham số đã học, điều này không xảy ra ở đây.",
    "lessonId": "d1-t1",
    "objective": "1.1 Core gen AI concepts"
  },
  {
    "id": 3,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "A media studio wants one AI assistant that can read scripts, look at storyboard images, listen to audio clips and write a text summary of each scene. Which type of model fits this need?",
    "question_vi": "Một studio truyền thông muốn một trợ lý AI duy nhất có thể đọc kịch bản, xem ảnh storyboard, nghe đoạn âm thanh và viết bản tóm tắt cho từng cảnh. Loại mô hình nào phù hợp?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "A multimodal foundation model that can process and combine text, images and audio.",
        "text_vi": "Mô hình nền đa phương thức (multimodal foundation model) có thể xử lý và kết hợp văn bản, hình ảnh và âm thanh."
      },
      {
        "key": "B",
        "text": "A text-only large language model that reads typed scripts and can describe images only when staff type captions.",
        "text_vi": "LLM chỉ xử lý văn bản, đọc kịch bản gõ sẵn và chỉ mô tả hình ảnh khi nhân viên gõ chú thích."
      },
      {
        "key": "C",
        "text": "A supervised classification model trained to sort scenes into a fixed list of genres using labeled examples.",
        "text_vi": "Mô hình phân loại có giám sát, được huấn luyện để xếp cảnh vào danh sách thể loại cố định từ các ví dụ có nhãn."
      },
      {
        "key": "D",
        "text": "A diffusion model that is designed mainly to turn text descriptions into new still images or video frames.",
        "text_vi": "Mô hình khuếch tán (diffusion) chủ yếu để biến mô tả văn bản thành ảnh tĩnh hoặc khung hình video mới."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Combining several data types in one workflow is what multimodal models are for. A text-only LLM cannot handle images and audio, and a diffusion model generates media rather than summarizing it.",
    "explanation_vi": "Kết hợp nhiều loại dữ liệu trong cùng một quy trình chính là mục đích của mô hình đa phương thức. LLM chỉ văn bản không xử lý được ảnh và âm thanh, còn mô hình diffusion tạo ra phương tiện chứ không tóm tắt.",
    "lessonId": "d1-t1",
    "objective": "1.1 Core gen AI concepts"
  },
  {
    "id": 4,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "An insurance company wants to group its customers into natural segments, but it has no predefined categories and no labeled examples. Which machine learning approach fits best?",
    "question_vi": "Một công ty bảo hiểm muốn nhóm khách hàng thành các phân khúc tự nhiên, nhưng chưa có danh mục định sẵn và không có ví dụ gắn nhãn. Phương pháp machine learning nào phù hợp nhất?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Supervised learning, after analysts first tag every customer with the segment name they think is correct.",
        "text_vi": "Học có giám sát (supervised), sau khi chuyên viên gắn cho từng khách hàng tên phân khúc mà họ cho là đúng."
      },
      {
        "key": "B",
        "text": "Reinforcement learning, where the model is rewarded each time a customer renews a policy or accepts an offer.",
        "text_vi": "Học tăng cường (reinforcement), mô hình được thưởng mỗi khi khách hàng gia hạn hợp đồng hoặc chấp nhận ưu đãi."
      },
      {
        "key": "C",
        "text": "Rule-based segmentation, where the company writes fixed age and income thresholds for every possible group.",
        "text_vi": "Phân khúc dựa trên luật, công ty tự đặt ngưỡng tuổi và thu nhập cố định cho mọi nhóm có thể."
      },
      {
        "key": "D",
        "text": "Unsupervised learning, which finds patterns and groupings in unlabeled data.",
        "text_vi": "Học không giám sát (unsupervised), tìm ra mẫu và nhóm trong dữ liệu chưa gắn nhãn."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Finding groups without predefined labels is the classic use of unsupervised learning. Supervised learning needs labeled data, which this company does not have.",
    "explanation_vi": "Tìm nhóm khi không có nhãn định sẵn là ứng dụng điển hình của học không giám sát. Học có giám sát cần dữ liệu có nhãn mà công ty này không có.",
    "lessonId": "d1-t2",
    "objective": "1.1 ML approaches"
  },
  {
    "id": 5,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "A telecom operator's churn-prediction model was accurate at launch but has become less reliable as customer behavior changed. Which Agent Platform (formerly Vertex AI) capability helps the team detect this kind of drift?",
    "question_vi": "Mô hình dự đoán khách rời mạng của một nhà mạng từng chính xác khi ra mắt nhưng giờ kém tin cậy vì hành vi khách hàng thay đổi. Khả năng nào của Agent Platform (trước đây là Vertex AI) giúp đội phát hiện hiện tượng drift này?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Model Registry, which stores and versions models but does not watch live prediction quality.",
        "text_vi": "Model Registry, lưu trữ và quản lý phiên bản mô hình nhưng không theo dõi chất lượng dự đoán thực tế."
      },
      {
        "key": "B",
        "text": "Model Monitoring, which tracks a deployed model's behavior and flags drift over time.",
        "text_vi": "Model Monitoring, theo dõi hành vi của mô hình đã triển khai và cảnh báo drift theo thời gian."
      },
      {
        "key": "C",
        "text": "Model Garden, which is a catalog for finding and deploying Google, third-party and open models.",
        "text_vi": "Model Garden, là danh mục để tìm và triển khai các mô hình của Google, bên thứ ba và mã nguồn mở."
      },
      {
        "key": "D",
        "text": "Pipelines, which automates repeatable ML workflows but does not measure real-world accuracy changes.",
        "text_vi": "Pipelines, tự động hóa các quy trình ML lặp lại nhưng không đo sự thay đổi độ chính xác thực tế."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Drift means accuracy changes as real-world data changes, and Model Monitoring is the tool for the model-management stage. Registry handles versions, Garden is a catalog and Pipelines automates workflows.",
    "explanation_vi": "Drift là khi độ chính xác thay đổi do dữ liệu thực tế thay đổi, và Model Monitoring là công cụ cho giai đoạn quản lý mô hình. Registry quản lý phiên bản, Garden là danh mục, Pipelines tự động hóa quy trình.",
    "lessonId": "d1-t2",
    "objective": "1.1 ML lifecycle and Google Cloud tools"
  },
  {
    "id": 6,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "A hospital analytics team is planning its first ML project. Which sequence correctly describes the stages of the ML lifecycle?",
    "question_vi": "Một nhóm phân tích của bệnh viện đang lên kế hoạch cho dự án ML đầu tiên. Trình tự nào mô tả đúng các giai đoạn của vòng đời ML?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Model training, data ingestion and preparation, model management, then model deployment.",
        "text_vi": "Huấn luyện mô hình, thu nhận và chuẩn bị dữ liệu, quản lý mô hình, rồi triển khai mô hình."
      },
      {
        "key": "B",
        "text": "Data ingestion and preparation, model training, model deployment, then model management.",
        "text_vi": "Thu nhận và chuẩn bị dữ liệu, huấn luyện mô hình, triển khai mô hình, rồi quản lý mô hình."
      },
      {
        "key": "C",
        "text": "Model deployment, model training, data ingestion and preparation, then model management.",
        "text_vi": "Triển khai mô hình, huấn luyện mô hình, thu nhận và chuẩn bị dữ liệu, rồi quản lý mô hình."
      },
      {
        "key": "D",
        "text": "Model management, data ingestion and preparation, model deployment, then model training.",
        "text_vi": "Quản lý mô hình, thu nhận và chuẩn bị dữ liệu, triển khai mô hình, rồi huấn luyện mô hình."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Data must be collected and prepared before a model can be trained, the trained model is then deployed, and management (monitoring, versioning) continues afterwards.",
    "explanation_vi": "Dữ liệu phải được thu thập và chuẩn bị trước khi huấn luyện, sau đó mô hình được triển khai và việc quản lý (giám sát, phiên bản) tiếp tục sau đó.",
    "lessonId": "d1-t2",
    "objective": "1.1 ML lifecycle"
  },
  {
    "id": 7,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "A hospital network wants a gen AI model to summarize patient notes. The data is sensitive and tightly regulated. Which factor should weigh most heavily when choosing a foundation model?",
    "question_vi": "Một mạng lưới bệnh viện muốn dùng mô hình gen AI để tóm tắt ghi chú bệnh nhân. Dữ liệu nhạy cảm và chịu quản lý chặt. Yếu tố nào nên được cân nhắc nhiều nhất khi chọn foundation model?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Security and data governance, such as where data is processed and who can access it.",
        "text_vi": "Bảo mật và quản trị dữ liệu, chẳng hạn dữ liệu được xử lý ở đâu và ai được truy cập."
      },
      {
        "key": "B",
        "text": "The creativity of the model's writing style, since clinicians prefer notes that read in an engaging way.",
        "text_vi": "Độ sáng tạo trong văn phong của mô hình, vì bác sĩ thích ghi chú đọc hấp dẫn."
      },
      {
        "key": "C",
        "text": "The lowest price per request among all providers, regardless of where the data would be processed.",
        "text_vi": "Giá mỗi yêu cầu thấp nhất trong mọi nhà cung cấp, bất kể dữ liệu được xử lý ở đâu."
      },
      {
        "key": "D",
        "text": "The ability to generate images and video, since multimodal output is the main sign of a better model.",
        "text_vi": "Khả năng tạo ảnh và video, vì đầu ra đa phương thức là dấu hiệu chính của mô hình tốt hơn."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "When a scenario stresses sensitive or regulated data, security and governance become the deciding factors. Cost and creativity matter only after the privacy requirement is met.",
    "explanation_vi": "Khi tình huống nhấn mạnh dữ liệu nhạy cảm hoặc bị quản lý, bảo mật và quản trị là yếu tố quyết định. Chi phí và sự sáng tạo chỉ xét sau khi đáp ứng yêu cầu riêng tư.",
    "lessonId": "d1-t3",
    "objective": "1.1 Choosing a foundation model"
  },
  {
    "id": 8,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "A law firm wants a gen AI assistant to analyze a single 400-page contract in one request and answer questions about it. Which model characteristic matters most for this requirement?",
    "question_vi": "Một công ty luật muốn trợ lý gen AI phân tích một hợp đồng 400 trang trong một yêu cầu và trả lời câu hỏi về nó. Đặc điểm nào của mô hình quan trọng nhất cho yêu cầu này?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "The ability to generate photorealistic images, so the assistant can illustrate each clause it explains.",
        "text_vi": "Khả năng tạo ảnh chân thực, để trợ lý minh họa từng điều khoản mà nó giải thích."
      },
      {
        "key": "B",
        "text": "A very small size so the model can run offline on lawyers' phones without any connection to the cloud.",
        "text_vi": "Kích thước rất nhỏ để mô hình chạy offline trên điện thoại của luật sư mà không cần kết nối đám mây."
      },
      {
        "key": "C",
        "text": "A context window large enough to hold the whole document in one request.",
        "text_vi": "Cửa sổ ngữ cảnh (context window) đủ lớn để chứa toàn bộ tài liệu trong một yêu cầu."
      },
      {
        "key": "D",
        "text": "A high creativity setting that makes the assistant produce more varied wording in each of its answers.",
        "text_vi": "Mức sáng tạo cao để trợ lý đưa ra cách diễn đạt đa dạng hơn trong mỗi câu trả lời."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "The context window limits how much text the model can consider at once, so a long contract requires a large one. Larger windows do raise compute cost, which is a trade-off to weigh.",
    "explanation_vi": "Context window giới hạn lượng văn bản mô hình xét cùng lúc, nên hợp đồng dài cần cửa sổ lớn. Cửa sổ lớn làm tăng chi phí tính toán, đó là sự đánh đổi cần cân nhắc.",
    "lessonId": "d1-t3",
    "objective": "1.1 Choosing a foundation model"
  },
  {
    "id": 9,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "Why might a company choose a smaller, lower-cost model instead of the largest available model for a simple, high-volume task such as tagging support tickets?",
    "question_vi": "Vì sao một công ty có thể chọn mô hình nhỏ hơn, chi phí thấp thay vì mô hình lớn nhất cho tác vụ đơn giản, khối lượng lớn như gắn thẻ phiếu hỗ trợ?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "It can meet the required quality at lower cost and latency, because the best model is the one that fits the stated requirements.",
        "text_vi": "Mô hình đó có thể đạt chất lượng yêu cầu với chi phí và độ trễ thấp hơn, vì mô hình tốt nhất là mô hình phù hợp với yêu cầu đã nêu."
      },
      {
        "key": "B",
        "text": "Smaller models are exempt from data privacy rules, so no security review is needed before using them.",
        "text_vi": "Mô hình nhỏ được miễn các quy tắc về quyền riêng tư dữ liệu, nên không cần rà soát bảo mật trước khi dùng."
      },
      {
        "key": "C",
        "text": "Larger models cannot perform classification tasks, because they are only designed for open-ended text creation.",
        "text_vi": "Mô hình lớn không thể thực hiện phân loại, vì chỉ được thiết kế để tạo văn bản tự do."
      },
      {
        "key": "D",
        "text": "Smaller models need no evaluation, because their answers for simple tasks are guaranteed to be correct.",
        "text_vi": "Mô hình nhỏ không cần đánh giá, vì câu trả lời cho tác vụ đơn giản được đảm bảo đúng."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Model choice is driven by modality, performance, cost and other constraints, not by size alone. The largest model is often more expensive and slower than a simple task needs.",
    "explanation_vi": "Việc chọn mô hình dựa trên modality, hiệu năng, chi phí và các ràng buộc khác, không chỉ kích thước. Mô hình lớn nhất thường đắt và chậm hơn mức một tác vụ đơn giản cần.",
    "lessonId": "d1-t3",
    "objective": "1.1 Choosing a foundation model"
  },
  {
    "id": 10,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "A manufacturer's gen AI maintenance assistant gives poor answers even though it uses a strong model. The maintenance logs it relies on have inconsistent formats, many missing fields and duplicate entries. What is the most likely root cause?",
    "question_vi": "Trợ lý bảo trì gen AI của một nhà sản xuất trả lời kém dù dùng mô hình mạnh. Nhật ký bảo trì mà nó dựa vào có định dạng không nhất quán, nhiều trường bị thiếu và bản ghi trùng lặp. Nguyên nhân gốc nhiều khả năng nhất là gì?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "The model's context window is too short, which is the usual reason answers about logs are inaccurate.",
        "text_vi": "Context window của mô hình quá ngắn, đây là lý do thường gặp khiến câu trả lời về nhật ký thiếu chính xác."
      },
      {
        "key": "B",
        "text": "The temperature is set too low, which makes the model unable to read records written in different formats.",
        "text_vi": "Temperature đặt quá thấp, khiến mô hình không đọc được bản ghi ở các định dạng khác nhau."
      },
      {
        "key": "C",
        "text": "The company has too few GPUs, which causes the model to forget fields when it reads long maintenance logs.",
        "text_vi": "Công ty có quá ít GPU, khiến mô hình quên các trường khi đọc nhật ký bảo trì dài."
      },
      {
        "key": "D",
        "text": "Data quality problems, such as inconsistent, incomplete and duplicated records.",
        "text_vi": "Vấn đề chất lượng dữ liệu, như bản ghi không nhất quán, thiếu và trùng lặp."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "A strong model cannot compensate for data that is incomplete, inconsistent or duplicated, so data quality is the first suspect. Settings and hardware do not fix messy source data.",
    "explanation_vi": "Mô hình mạnh không thể bù cho dữ liệu thiếu, không nhất quán hoặc trùng lặp, nên chất lượng dữ liệu là nghi vấn đầu tiên. Cài đặt và phần cứng không sửa được dữ liệu nguồn lộn xộn.",
    "lessonId": "d1-t4",
    "objective": "1.2 Data quality and accessibility"
  },
  {
    "id": 11,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "A retailer is taking inventory of its data sources before a gen AI project. Which TWO of these sources are unstructured data? (Select TWO.)",
    "question_vi": "Một nhà bán lẻ đang kiểm kê các nguồn dữ liệu trước dự án gen AI. Hai nguồn nào sau đây là dữ liệu phi cấu trúc? (Chọn HAI.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "A relational table of orders with fixed columns for date, SKU and amount",
        "text_vi": "Bảng quan hệ chứa đơn hàng với các cột cố định gồm ngày, SKU và số tiền"
      },
      {
        "key": "B",
        "text": "Point-of-sale transactions stored in a database with predefined fields",
        "text_vi": "Giao dịch điểm bán hàng lưu trong cơ sở dữ liệu với các trường định sẵn"
      },
      {
        "key": "C",
        "text": "Recordings of customer service phone calls",
        "text_vi": "Bản ghi âm các cuộc gọi chăm sóc khách hàng"
      },
      {
        "key": "D",
        "text": "A CRM table listing customer IDs, loyalty tiers and signup dates",
        "text_vi": "Bảng CRM liệt kê mã khách hàng, hạng thành viên và ngày đăng ký"
      },
      {
        "key": "E",
        "text": "Product photos uploaded by store staff",
        "text_vi": "Ảnh sản phẩm do nhân viên cửa hàng tải lên"
      }
    ],
    "answer": [
      "C",
      "E"
    ],
    "explanation": "Audio recordings and photos have no predefined format, so they are unstructured. Tables with fixed columns and predefined fields are structured data.",
    "explanation_vi": "Bản ghi âm và ảnh không có định dạng định sẵn nên là dữ liệu phi cấu trúc. Các bảng có cột cố định và trường định sẵn là dữ liệu có cấu trúc.",
    "lessonId": "d1-t4",
    "objective": "1.2 Structured vs unstructured data"
  },
  {
    "id": 12,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "A university wants to train a supervised model that sorts student support emails into categories. Which description correctly identifies the labeled data it needs?",
    "question_vi": "Một trường đại học muốn huấn luyện mô hình có giám sát để phân loại email hỗ trợ sinh viên theo danh mục. Mô tả nào xác định đúng dữ liệu có nhãn mà họ cần?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Emails that staff have already tagged with the correct category, such as billing or enrollment.",
        "text_vi": "Các email mà nhân viên đã gắn đúng danh mục, chẳng hạn học phí hoặc đăng ký môn học."
      },
      {
        "key": "B",
        "text": "Emails that are stored in an encrypted bucket so that only authorized staff members can open them.",
        "text_vi": "Các email được lưu trong bucket mã hóa để chỉ nhân viên được cấp quyền mới mở được."
      },
      {
        "key": "C",
        "text": "Emails that have been translated into English so that the model reads every message in one language.",
        "text_vi": "Các email đã được dịch sang tiếng Anh để mô hình đọc mọi thư bằng một ngôn ngữ."
      },
      {
        "key": "D",
        "text": "Emails from which names and student IDs were removed so that no personal data reaches the model.",
        "text_vi": "Các email đã xóa tên và mã sinh viên để không có dữ liệu cá nhân nào đến mô hình."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Labeled data carries tags such as a category that the model learns to predict. Encryption, translation and anonymization are useful steps but do not add labels.",
    "explanation_vi": "Dữ liệu có nhãn mang thẻ như danh mục mà mô hình học để dự đoán. Mã hóa, dịch và ẩn danh là các bước hữu ích nhưng không thêm nhãn.",
    "lessonId": "d1-t4",
    "objective": "1.2 Labeled vs unlabeled data"
  },
  {
    "id": 13,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "A SaaS startup with no ML engineers wants to ship a gen AI feature to customers within weeks. Based on the layers of the gen AI landscape, what is the best approach?",
    "question_vi": "Một startup SaaS không có kỹ sư ML muốn đưa tính năng gen AI đến khách hàng trong vài tuần. Dựa trên các tầng của hệ sinh thái gen AI, cách tiếp cận tốt nhất là gì?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Build on higher layers, such as platforms, agents or prebuilt applications, to get value quickly with less effort.",
        "text_vi": "Xây dựng trên các tầng cao hơn như nền tảng, agent hoặc ứng dụng dựng sẵn để có giá trị nhanh với ít công sức hơn."
      },
      {
        "key": "B",
        "text": "Start at the infrastructure layer by provisioning GPUs and TPUs, because lower layers always deliver results faster.",
        "text_vi": "Bắt đầu từ tầng hạ tầng bằng cách cấp phát GPU và TPU, vì các tầng thấp luôn cho kết quả nhanh hơn."
      },
      {
        "key": "C",
        "text": "Train a new foundation model from scratch so the product has complete control over every part of the stack.",
        "text_vi": "Huấn luyện foundation model mới từ đầu để sản phẩm kiểm soát hoàn toàn mọi phần của hệ thống."
      },
      {
        "key": "D",
        "text": "Wait to hire a full ML team first, because gen AI features cannot be delivered without in-house researchers.",
        "text_vi": "Chờ tuyển đủ đội ML trước, vì không thể triển khai tính năng gen AI nếu thiếu nhà nghiên cứu nội bộ."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Higher layers mean faster adoption and less control, which suits a team with limited skills and tight time-to-market. Lower layers give more control but require much more effort.",
    "explanation_vi": "Tầng cao hơn nghĩa là triển khai nhanh hơn nhưng ít kiểm soát hơn, phù hợp với đội ít kỹ năng và cần ra thị trường sớm. Tầng thấp cho nhiều kiểm soát hơn nhưng tốn nhiều công sức hơn.",
    "lessonId": "d1-t5",
    "objective": "1.3 Layers of the gen AI landscape"
  },
  {
    "id": 14,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "A logistics company's architects describe a layer of the gen AI stack that provides APIs, data management and deployment tools, and sits between the models and the agents. Which layer is this?",
    "question_vi": "Các kiến trúc sư của một công ty logistics mô tả một tầng của hệ gen AI cung cấp API, quản lý dữ liệu và công cụ triển khai, nằm giữa mô hình và agent. Đó là tầng nào?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "The infrastructure layer, which supplies servers, GPUs and TPUs for storing and running models.",
        "text_vi": "Tầng hạ tầng, cung cấp máy chủ, GPU và TPU để lưu trữ và chạy mô hình."
      },
      {
        "key": "B",
        "text": "The application layer, which is the part of the stack that end users see and interact with directly.",
        "text_vi": "Tầng ứng dụng, là phần của hệ mà người dùng cuối nhìn thấy và tương tác trực tiếp."
      },
      {
        "key": "C",
        "text": "The platform layer, which provides APIs, data management and deployment tools between models and agents.",
        "text_vi": "Tầng nền tảng (platform), cung cấp API, quản lý dữ liệu và công cụ triển khai nằm giữa mô hình và agent."
      },
      {
        "key": "D",
        "text": "The model layer, which consists of the trained algorithms that generate text, images or code.",
        "text_vi": "Tầng mô hình, gồm các thuật toán đã huấn luyện để tạo văn bản, hình ảnh hoặc mã."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Platforms bridge models and agents and simplify infrastructure management with APIs, data management and deployment tools. Infrastructure, models and applications each play a different role.",
    "explanation_vi": "Nền tảng là cầu nối giữa mô hình và agent, đơn giản hóa việc quản lý hạ tầng bằng API, quản lý dữ liệu và công cụ triển khai. Hạ tầng, mô hình và ứng dụng mỗi tầng có vai trò khác.",
    "lessonId": "d1-t5",
    "objective": "1.3 Layers of the gen AI landscape"
  },
  {
    "id": 15,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "A travel company wants a system that can pursue a goal on its own, such as rebooking a traveler after a canceled flight by calling airline and hotel systems. Which layer of the gen AI landscape does this describe?",
    "question_vi": "Một công ty du lịch muốn hệ thống có thể tự theo đuổi mục tiêu, ví dụ đặt lại chuyến cho hành khách sau khi chuyến bay bị hủy bằng cách gọi hệ thống của hãng bay và khách sạn. Điều này mô tả tầng nào của hệ sinh thái gen AI?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "The infrastructure layer, because rebooking requires powerful chips and networking to run quickly.",
        "text_vi": "Tầng hạ tầng, vì việc đặt lại chuyến cần chip và mạng mạnh để chạy nhanh."
      },
      {
        "key": "B",
        "text": "The agent layer, because agents use inputs and available tools to work toward a goal.",
        "text_vi": "Tầng agent, vì agent dùng đầu vào và các công cụ sẵn có để hướng tới mục tiêu."
      },
      {
        "key": "C",
        "text": "The model layer alone, because a trained model can call booking systems without any tools connected.",
        "text_vi": "Chỉ riêng tầng mô hình, vì mô hình đã huấn luyện có thể gọi hệ thống đặt chỗ mà không cần kết nối công cụ."
      },
      {
        "key": "D",
        "text": "The application layer only, because the traveler sees a chat window and that window completes the booking.",
        "text_vi": "Chỉ tầng ứng dụng, vì hành khách thấy khung chat và khung chat đó hoàn tất việc đặt chỗ."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Agents act toward a goal by combining model reasoning with tools such as APIs. A model on its own only generates content, and the application is simply what the user sees.",
    "explanation_vi": "Agent hành động hướng tới mục tiêu bằng cách kết hợp suy luận của mô hình với công cụ như API. Mô hình riêng lẻ chỉ tạo nội dung, còn ứng dụng chỉ là phần người dùng nhìn thấy.",
    "lessonId": "d1-t5",
    "objective": "1.3 Layers of the gen AI landscape"
  },
  {
    "id": 16,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "Which statement correctly matches a Google foundation model with what it does?",
    "question_vi": "Phát biểu nào ghép đúng một foundation model của Google với chức năng của nó?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Imagen generates video from text descriptions, while Veo is the model that creates still images.",
        "text_vi": "Imagen tạo video từ mô tả văn bản, còn Veo là mô hình tạo ảnh tĩnh."
      },
      {
        "key": "B",
        "text": "Gemma is a closed, very large multimodal model that can be used only inside Google Workspace apps.",
        "text_vi": "Gemma là mô hình đa phương thức rất lớn, đóng, chỉ dùng được bên trong các ứng dụng Google Workspace."
      },
      {
        "key": "C",
        "text": "Veo generates video from text descriptions or still images.",
        "text_vi": "Veo tạo video từ mô tả văn bản hoặc ảnh tĩnh."
      },
      {
        "key": "D",
        "text": "Gemini is a lightweight open model whose main purpose is to be customized and run on local hardware.",
        "text_vi": "Gemini là mô hình mã nguồn mở nhẹ, mục đích chính là tùy biến và chạy trên phần cứng cục bộ."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Veo is Google's video generation model and Imagen generates images from text. Gemma is the lightweight open model, and Gemini is the multimodal conversational family.",
    "explanation_vi": "Veo là mô hình tạo video của Google và Imagen tạo ảnh từ văn bản. Gemma là mô hình mở nhẹ, còn Gemini là dòng đa phương thức dùng cho hội thoại.",
    "lessonId": "d1-t6",
    "objective": "1.4 Google foundation models"
  },
  {
    "id": 17,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "A utility company wants a lightweight, open model that its team can customize and run on its own hardware to meet data residency rules. Which Google foundation model fits best?",
    "question_vi": "Một công ty điện lực muốn mô hình mở, nhẹ để đội ngũ tùy biến và chạy trên phần cứng riêng nhằm đáp ứng quy định lưu trữ dữ liệu. Foundation model nào của Google phù hợp nhất?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Veo, because it is the Google model designed for local deployment and specialized customization.",
        "text_vi": "Veo, vì đây là mô hình của Google được thiết kế để triển khai cục bộ và tùy biến chuyên biệt."
      },
      {
        "key": "B",
        "text": "Imagen, because it is a lightweight open model that organizations commonly host on their own servers.",
        "text_vi": "Imagen, vì đây là mô hình mở nhẹ mà các tổ chức thường tự lưu trữ trên máy chủ riêng."
      },
      {
        "key": "C",
        "text": "Gemini Notebook, because it is the open model family that Google releases for self-hosted customization.",
        "text_vi": "Gemini Notebook, vì đây là dòng mô hình mở Google phát hành để tự lưu trữ và tùy biến."
      },
      {
        "key": "D",
        "text": "Gemma, because it is Google's lightweight open model family meant for customization and local deployment.",
        "text_vi": "Gemma, vì đây là dòng mô hình mở nhẹ của Google dành cho tùy biến và triển khai cục bộ."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Gemma is Google's lightweight, customizable open model for local deployment and specialized applications. Veo and Imagen generate media, and Gemini Notebook is a product, not a model family.",
    "explanation_vi": "Gemma là mô hình mở, nhẹ, tùy biến được của Google cho triển khai cục bộ và ứng dụng chuyên biệt. Veo và Imagen tạo phương tiện, còn Gemini Notebook là sản phẩm chứ không phải dòng mô hình.",
    "lessonId": "d1-t6",
    "objective": "1.4 Google foundation models"
  },
  {
    "id": 18,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "An e-commerce support team wants one model that can read a customer's photo of a damaged product, understand the accompanying message and reply conversationally. Which Google foundation model family fits best?",
    "question_vi": "Một đội hỗ trợ thương mại điện tử muốn một mô hình đọc được ảnh sản phẩm hư hỏng của khách, hiểu tin nhắn đi kèm và trả lời theo kiểu hội thoại. Dòng foundation model nào của Google phù hợp nhất?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Gemini, because it is multimodal and built for conversational question answering.",
        "text_vi": "Gemini, vì là mô hình đa phương thức và được xây dựng cho hỏi đáp hội thoại."
      },
      {
        "key": "B",
        "text": "Imagen, because it understands uploaded photos and writes the explanation text for the customer.",
        "text_vi": "Imagen, vì nó hiểu ảnh được tải lên và viết văn bản giải thích cho khách hàng."
      },
      {
        "key": "C",
        "text": "Veo, because it turns still images into short videos that can be shown back to the customer.",
        "text_vi": "Veo, vì nó biến ảnh tĩnh thành video ngắn có thể hiển thị lại cho khách hàng."
      },
      {
        "key": "D",
        "text": "Gemma, because lightweight open models are the only ones able to process images and text together.",
        "text_vi": "Gemma, vì chỉ các mô hình mở nhẹ mới xử lý được ảnh và văn bản cùng nhau."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Gemini offers multimodal understanding and conversation. Imagen and Veo generate images and video rather than analyzing a customer's photo.",
    "explanation_vi": "Gemini có khả năng hiểu đa phương thức và hội thoại. Imagen và Veo tạo ảnh và video chứ không phân tích ảnh của khách hàng.",
    "lessonId": "d1-t6",
    "objective": "1.4 Google foundation models"
  },
  {
    "id": 19,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A bank's executives worry about handing sensitive data to a gen AI provider. Which Google Cloud strength best addresses this concern?",
    "question_vi": "Ban lãnh đạo một ngân hàng lo ngại việc giao dữ liệu nhạy cảm cho nhà cung cấp gen AI. Thế mạnh nào của Google Cloud giải quyết tốt nhất mối lo này?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "An enterprise-ready AI platform with security, privacy and governance controls that keep the customer in control of its data.",
        "text_vi": "Nền tảng AI sẵn sàng cho doanh nghiệp, có các kiểm soát về bảo mật, quyền riêng tư và quản trị để khách hàng làm chủ dữ liệu của mình."
      },
      {
        "key": "B",
        "text": "A requirement that customers share their data with Google's public models in exchange for lower prices.",
        "text_vi": "Yêu cầu khách hàng chia sẻ dữ liệu cho các mô hình công khai của Google để đổi lấy giá thấp hơn."
      },
      {
        "key": "C",
        "text": "A restriction to Google's own first-party models, so that no external model provider ever handles a request.",
        "text_vi": "Giới hạn chỉ dùng mô hình của chính Google, để không nhà cung cấp mô hình bên ngoài nào xử lý yêu cầu."
      },
      {
        "key": "D",
        "text": "A single prebuilt application with fixed behavior, which removes the need to configure any data controls.",
        "text_vi": "Một ứng dụng dựng sẵn duy nhất với hành vi cố định, giúp loại bỏ nhu cầu cấu hình kiểm soát dữ liệu."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Enterprise-ready means responsible, secure, private, reliable and scalable, with governance that gives customers control over their data. The distractors describe giving up control or limiting choice, which is not what Google Cloud offers.",
    "explanation_vi": "Sẵn sàng cho doanh nghiệp nghĩa là có trách nhiệm, bảo mật, riêng tư, đáng tin cậy và mở rộng được, cùng quản trị giúp khách hàng kiểm soát dữ liệu. Các lựa chọn sai mô tả việc mất kiểm soát hoặc bị giới hạn, không phải điều Google Cloud cung cấp.",
    "lessonId": "d2-t1",
    "objective": "2.1 Google Cloud strengths"
  },
  {
    "id": 20,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "Which description best captures the benefit of Google Cloud's open approach to gen AI?",
    "question_vi": "Mô tả nào nắm bắt tốt nhất lợi ích của cách tiếp cận mở của Google Cloud đối với gen AI?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Customers receive the source code of every Google product so they can rebuild the products on their own servers.",
        "text_vi": "Khách hàng nhận mã nguồn của mọi sản phẩm Google để tự xây lại sản phẩm trên máy chủ riêng."
      },
      {
        "key": "B",
        "text": "Customers can use gen AI only inside Google's own apps, which keeps everything simple and consistent.",
        "text_vi": "Khách hàng chỉ dùng được gen AI trong các ứng dụng của Google, giúp mọi thứ đơn giản và nhất quán."
      },
      {
        "key": "C",
        "text": "Customers can choose among first-party, third-party and open-source models, which reduces dependence on a single vendor.",
        "text_vi": "Khách hàng có thể chọn giữa mô hình của Google, bên thứ ba và mã nguồn mở, giúp giảm phụ thuộc vào một nhà cung cấp."
      },
      {
        "key": "D",
        "text": "Customers get Google-trained models at no cost, because open means that no usage charges ever apply.",
        "text_vi": "Khách hàng nhận mô hình do Google huấn luyện miễn phí, vì mở nghĩa là không có phí sử dụng nào."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "The open approach gives access to Google, partner and open models, so teams can pick what fits and avoid lock-in. It does not mean free usage or open-sourcing every product.",
    "explanation_vi": "Cách tiếp cận mở cho phép dùng mô hình của Google, đối tác và mã nguồn mở, để đội chọn cái phù hợp và tránh bị khóa vào một nhà cung cấp. Nó không có nghĩa là miễn phí hay mở mã nguồn mọi sản phẩm.",
    "lessonId": "d2-t1",
    "objective": "2.1 Google Cloud strengths"
  },
  {
    "id": 21,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A city government wants staff with no programming background to build simple AI-powered solutions on their own. Which Google Cloud strength is most relevant?",
    "question_vi": "Một chính quyền thành phố muốn nhân viên không biết lập trình tự xây các giải pháp đơn giản dùng AI. Thế mạnh nào của Google Cloud liên quan nhất?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "AI-optimized infrastructure, because custom chips such as TPUs let non-technical staff train their own models.",
        "text_vi": "Hạ tầng tối ưu cho AI, vì chip tùy chỉnh như TPU cho phép nhân viên không chuyên tự huấn luyện mô hình."
      },
      {
        "key": "B",
        "text": "Secure-by-design data centers, because physical security removes the need for any tooling to build solutions.",
        "text_vi": "Trung tâm dữ liệu an toàn theo thiết kế, vì an ninh vật lý loại bỏ nhu cầu công cụ để xây giải pháp."
      },
      {
        "key": "C",
        "text": "Democratization of AI through low-code and no-code tools, pre-trained models and APIs.",
        "text_vi": "Dân chủ hóa AI thông qua công cụ low-code và no-code, mô hình huấn luyện sẵn và API."
      },
      {
        "key": "D",
        "text": "Integration across Google products, because it requires each department to write its own custom code first.",
        "text_vi": "Tích hợp xuyên các sản phẩm Google, vì nó yêu cầu mỗi phòng ban phải tự viết mã tùy chỉnh trước."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Low-code and no-code tools, pre-trained models and APIs let non-specialists build with AI, which is the meaning of democratization. Infrastructure and data-center security do not by themselves lower the skill barrier.",
    "explanation_vi": "Công cụ low-code/no-code, mô hình huấn luyện sẵn và API giúp người không chuyên xây dựng với AI, đó là ý nghĩa của dân chủ hóa. Hạ tầng và an ninh trung tâm dữ liệu tự chúng không hạ thấp rào cản kỹ năng.",
    "lessonId": "d2-t1",
    "objective": "2.1 Democratizing AI"
  },
  {
    "id": 22,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A research institute plans to train and serve very large AI models on Google Cloud and wants hardware, networking and software designed to work together rather than assembling separate parts itself. Which offering fits?",
    "question_vi": "Một viện nghiên cứu dự định huấn luyện và phục vụ các mô hình AI rất lớn trên Google Cloud, muốn phần cứng, mạng và phần mềm được thiết kế phối hợp với nhau thay vì tự lắp ráp từng phần. Sản phẩm nào phù hợp?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "AI Hypercomputer, an integrated system of hardware, networking and software for AI workloads.",
        "text_vi": "AI Hypercomputer, hệ thống tích hợp phần cứng, mạng và phần mềm cho khối lượng công việc AI."
      },
      {
        "key": "B",
        "text": "Model Garden, a catalog where teams browse first-party, third-party and open models before deploying one.",
        "text_vi": "Model Garden, danh mục nơi các đội duyệt mô hình của Google, bên thứ ba và mã nguồn mở trước khi triển khai một mô hình."
      },
      {
        "key": "C",
        "text": "Gemini Enterprise, a platform where employees search company data and create custom agents for their teams.",
        "text_vi": "Gemini Enterprise, nền tảng nơi nhân viên tìm kiếm dữ liệu công ty và tạo agent tùy chỉnh cho đội của mình."
      },
      {
        "key": "D",
        "text": "Security Command Center, a tool that shows security posture and highlights misconfigurations that need fixing.",
        "text_vi": "Security Command Center, công cụ hiển thị tình trạng bảo mật và nêu bật các cấu hình sai cần sửa."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "AI Hypercomputer integrates hardware, networking and software for the infrastructure layer of AI workloads. The distractors are a model catalog, an enterprise search and agent product, and a security tool.",
    "explanation_vi": "AI Hypercomputer tích hợp phần cứng, mạng và phần mềm cho tầng hạ tầng của khối lượng công việc AI. Các lựa chọn sai là danh mục mô hình, sản phẩm tìm kiếm và agent doanh nghiệp, và một công cụ bảo mật.",
    "lessonId": "d2-t2",
    "objective": "2.1 AI-optimized infrastructure"
  },
  {
    "id": 23,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A manufacturing CTO asks what TPUs are and why they matter for gen AI. Which answer is correct?",
    "question_vi": "CTO của một nhà sản xuất hỏi TPU là gì và vì sao chúng quan trọng với gen AI. Câu trả lời nào đúng?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "TPUs are general-purpose processors that Google designed mainly for hosting websites and handling email.",
        "text_vi": "TPU là bộ xử lý đa dụng mà Google thiết kế chủ yếu để lưu trữ website và xử lý email."
      },
      {
        "key": "B",
        "text": "TPUs are managed databases that store vector embeddings so that a model can search company documents.",
        "text_vi": "TPU là cơ sở dữ liệu được quản lý để lưu vector embedding giúp mô hình tìm kiếm tài liệu công ty."
      },
      {
        "key": "C",
        "text": "TPUs are custom-designed Google chips built to accelerate AI workloads.",
        "text_vi": "TPU là chip do Google thiết kế riêng nhằm tăng tốc các khối lượng công việc AI."
      },
      {
        "key": "D",
        "text": "TPUs are hardware modules that encrypt training data and control which employees may call a model.",
        "text_vi": "TPU là các mô-đun phần cứng mã hóa dữ liệu huấn luyện và kiểm soát nhân viên nào được gọi mô hình."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "TPUs are Google's custom-designed AI chips and part of the AI-optimized infrastructure, alongside GPUs. They are not databases, security modules or general web servers.",
    "explanation_vi": "TPU là chip AI do Google thiết kế riêng và là một phần của hạ tầng tối ưu cho AI, bên cạnh GPU. Chúng không phải cơ sở dữ liệu, mô-đun bảo mật hay máy chủ web đa dụng.",
    "lessonId": "d2-t2",
    "objective": "2.1 AI-optimized infrastructure"
  },
  {
    "id": 24,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "An energy company's field technicians work in remote locations with unreliable connectivity. They need AI help on their devices with low latency and without sending data off the device. What is the best approach?",
    "question_vi": "Kỹ thuật viên hiện trường của một công ty năng lượng làm việc ở vùng xa với kết nối không ổn định. Họ cần AI ngay trên thiết bị, độ trễ thấp và không gửi dữ liệu ra ngoài thiết bị. Cách tiếp cận tốt nhất là gì?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Send every request over the mobile network to a large cloud-hosted model and wait for each response.",
        "text_vi": "Gửi mọi yêu cầu qua mạng di động đến mô hình lớn trên đám mây và chờ từng phản hồi."
      },
      {
        "key": "B",
        "text": "Give technicians Gemini for Google Workspace so that they can summarize emails in Gmail on site.",
        "text_vi": "Cấp Gemini for Google Workspace cho kỹ thuật viên để họ tóm tắt email trong Gmail tại hiện trường."
      },
      {
        "key": "C",
        "text": "Collect questions on paper and process them in a weekly batch job in the data center after they return.",
        "text_vi": "Ghi câu hỏi ra giấy và xử lý theo lô hằng tuần tại trung tâm dữ liệu sau khi họ quay về."
      },
      {
        "key": "D",
        "text": "Use edge AI by running an on-device model such as Gemini Nano close to where the data is.",
        "text_vi": "Dùng edge AI bằng cách chạy mô hình trên thiết bị như Gemini Nano, gần nơi dữ liệu phát sinh."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Edge AI runs near the data, giving real-time responses, better privacy and less reliance on connectivity. Gemini Nano is Google's on-device model.",
    "explanation_vi": "Edge AI chạy gần nơi có dữ liệu, cho phản hồi thời gian thực, quyền riêng tư tốt hơn và ít phụ thuộc kết nối. Gemini Nano là mô hình chạy trên thiết bị của Google.",
    "lessonId": "d2-t2",
    "objective": "2.1 Edge AI"
  },
  {
    "id": 25,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A biotech research team wants to ask questions about 40 scientific papers it has uploaded and get answers grounded only in those documents. Which Google offering fits best?",
    "question_vi": "Một nhóm nghiên cứu công nghệ sinh học muốn đặt câu hỏi về 40 bài báo khoa học đã tải lên và nhận câu trả lời chỉ dựa trên các tài liệu đó. Sản phẩm nào của Google phù hợp nhất?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Gemini for Google Workspace in Gmail, which drafts and summarizes email messages inside the inbox.",
        "text_vi": "Gemini for Google Workspace trong Gmail, soạn và tóm tắt thư email ngay trong hộp thư."
      },
      {
        "key": "B",
        "text": "Gemini for Google Cloud, which helps developers and operators write code and manage cloud resources.",
        "text_vi": "Gemini for Google Cloud, hỗ trợ lập trình viên và đội vận hành viết mã và quản lý tài nguyên đám mây."
      },
      {
        "key": "C",
        "text": "Imagen, which turns text descriptions into new images that the team can use in its presentations.",
        "text_vi": "Imagen, biến mô tả văn bản thành ảnh mới mà đội có thể dùng trong bài thuyết trình."
      },
      {
        "key": "D",
        "text": "Gemini Notebook (formerly NotebookLM), which answers from the sources the user provides.",
        "text_vi": "Gemini Notebook (trước đây là NotebookLM), trả lời dựa trên các nguồn do người dùng cung cấp."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Gemini Notebook grounds its answers in the documents the user uploads. The other options serve email productivity, cloud operations or image generation.",
    "explanation_vi": "Gemini Notebook đặt câu trả lời dựa trên tài liệu người dùng tải lên. Các lựa chọn còn lại phục vụ năng suất email, vận hành đám mây hoặc tạo ảnh.",
    "lessonId": "d2-t3",
    "objective": "2.2 Prebuilt gen AI offerings"
  },
  {
    "id": 26,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A retail company's employees spend most of their day in Gmail, Docs and Meet. Management wants AI help drafting messages and summarizing meetings without rolling out a new tool. Which offering should they use?",
    "question_vi": "Nhân viên của một công ty bán lẻ dành phần lớn thời gian trong Gmail, Docs và Meet. Ban quản lý muốn AI hỗ trợ soạn tin nhắn và tóm tắt cuộc họp mà không phải triển khai công cụ mới. Nên dùng sản phẩm nào?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Gemini for Google Workspace, which embeds gen AI in the productivity apps staff already use.",
        "text_vi": "Gemini for Google Workspace, tích hợp gen AI vào các ứng dụng năng suất nhân viên đang dùng."
      },
      {
        "key": "B",
        "text": "A custom agent built from scratch on Agent Platform, which requires a development project first.",
        "text_vi": "Một agent tùy chỉnh xây từ đầu trên Agent Platform, đòi hỏi phải có dự án phát triển trước."
      },
      {
        "key": "C",
        "text": "Gemini for Google Cloud, which is aimed at developers and IT operators working in the cloud console.",
        "text_vi": "Gemini for Google Cloud, nhắm tới lập trình viên và đội vận hành IT làm việc trong cloud console."
      },
      {
        "key": "D",
        "text": "Gemma deployed on company servers, which would need staff to host and connect the model themselves.",
        "text_vi": "Gemma triển khai trên máy chủ công ty, đòi hỏi nhân viên tự lưu trữ và kết nối mô hình."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Gemini for Google Workspace brings AI into Gmail, Docs, Slides and Meet with little or no setup. A custom build or self-hosted model adds effort the scenario wants to avoid.",
    "explanation_vi": "Gemini for Google Workspace đưa AI vào Gmail, Docs, Slides và Meet với rất ít hoặc không cần cài đặt. Tự xây hoặc tự lưu trữ mô hình tốn thêm công sức mà tình huống muốn tránh.",
    "lessonId": "d2-t3",
    "objective": "2.2 Prebuilt gen AI offerings"
  },
  {
    "id": 27,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "An insurance company wants employees to securely search across internal documents, tickets and drives, and also to create custom agents for their teams. Which offering fits best?",
    "question_vi": "Một công ty bảo hiểm muốn nhân viên tìm kiếm an toàn trên tài liệu nội bộ, phiếu yêu cầu và ổ đĩa, đồng thời tạo agent tùy chỉnh cho đội của mình. Sản phẩm nào phù hợp nhất?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Google AI Studio, which is a browser-based environment for quickly prototyping with Gemini models.",
        "text_vi": "Google AI Studio, môi trường trên trình duyệt để tạo mẫu nhanh với các mô hình Gemini."
      },
      {
        "key": "B",
        "text": "Gemini for Google Workspace, which helps write and summarize inside Gmail, Docs, Slides and Meet.",
        "text_vi": "Gemini for Google Workspace, hỗ trợ viết và tóm tắt trong Gmail, Docs, Slides và Meet."
      },
      {
        "key": "C",
        "text": "Veo, which generates video from text descriptions for use in training and marketing content.",
        "text_vi": "Veo, tạo video từ mô tả văn bản để dùng cho nội dung đào tạo và marketing."
      },
      {
        "key": "D",
        "text": "Gemini Enterprise, which offers enterprise search and custom agents over company data.",
        "text_vi": "Gemini Enterprise, cung cấp tìm kiếm doanh nghiệp và agent tùy chỉnh trên dữ liệu công ty."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Gemini Enterprise combines search across company data sources with custom agent capabilities. Workspace features help with content inside Google apps, and Google AI Studio is for prototyping.",
    "explanation_vi": "Gemini Enterprise kết hợp tìm kiếm trên các nguồn dữ liệu công ty với khả năng tạo agent tùy chỉnh. Tính năng Workspace hỗ trợ nội dung trong ứng dụng Google, còn Google AI Studio dùng để tạo mẫu.",
    "lessonId": "d2-t3",
    "objective": "2.2 Prebuilt gen AI offerings"
  },
  {
    "id": 28,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A sales manager wants a reusable assistant in the Gemini app that always follows the company's proposal tone and structure. Which feature should the manager use?",
    "question_vi": "Một quản lý bán hàng muốn có trợ lý tái sử dụng trong ứng dụng Gemini luôn tuân theo giọng điệu và cấu trúc đề xuất của công ty. Nên dùng tính năng nào?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Model Garden, which is the place where teams browse and deploy first-party, third-party and open models.",
        "text_vi": "Model Garden, nơi các đội duyệt và triển khai mô hình của Google, bên thứ ba và mã nguồn mở."
      },
      {
        "key": "B",
        "text": "Gems, which are personalized assistants that work like reusable prompt templates.",
        "text_vi": "Gems, các trợ lý cá nhân hóa hoạt động như mẫu prompt có thể tái sử dụng."
      },
      {
        "key": "C",
        "text": "Gemini Nano, which is the on-device model used when no connection to the cloud is available.",
        "text_vi": "Gemini Nano, mô hình chạy trên thiết bị khi không có kết nối đến đám mây."
      },
      {
        "key": "D",
        "text": "Supervised fine-tuning on Agent Platform, which retrains the model using a labeled proposal dataset.",
        "text_vi": "Supervised fine-tuning trên Agent Platform, huấn luyện lại mô hình bằng bộ dữ liệu đề xuất có nhãn."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Gems let users save instructions as a custom assistant, similar to reusable prompt templates. Fine-tuning is far heavier and unnecessary for a tone-and-structure request.",
    "explanation_vi": "Gems cho phép lưu chỉ dẫn thành trợ lý tùy chỉnh, giống mẫu prompt tái sử dụng. Fine-tuning nặng hơn nhiều và không cần thiết cho yêu cầu về giọng điệu và cấu trúc.",
    "lessonId": "d2-t3",
    "objective": "2.2 Gemini app and Gems"
  },
  {
    "id": 29,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A telecom contact center wants to give its human agents real-time suggestions and relevant knowledge articles during live customer calls. Which offering fits best?",
    "question_vi": "Trung tâm liên lạc của một nhà mạng muốn đưa ra gợi ý thời gian thực và bài viết kiến thức liên quan cho nhân viên tổng đài trong các cuộc gọi trực tiếp. Sản phẩm nào phù hợp nhất?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Conversational Agents, which build virtual agents that handle customer conversations without a human.",
        "text_vi": "Conversational Agents, xây dựng agent ảo xử lý hội thoại với khách hàng mà không cần con người."
      },
      {
        "key": "B",
        "text": "Conversational Insights, which analyzes completed conversations to find sentiment and recurring topics.",
        "text_vi": "Conversational Insights, phân tích các cuộc hội thoại đã hoàn tất để tìm cảm xúc và chủ đề lặp lại."
      },
      {
        "key": "C",
        "text": "Agent Search, which gives customers a search experience over a company's own website content.",
        "text_vi": "Agent Search, mang đến trải nghiệm tìm kiếm cho khách hàng trên nội dung website của công ty."
      },
      {
        "key": "D",
        "text": "Agent Assist, which supports human agents during live conversations.",
        "text_vi": "Agent Assist, hỗ trợ nhân viên tổng đài trong các cuộc hội thoại trực tiếp."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Assisting a live human agent is the job of Agent Assist. Conversational Agents automate the conversation, and Conversational Insights analyzes it afterwards.",
    "explanation_vi": "Hỗ trợ nhân viên tổng đài đang trực tiếp là việc của Agent Assist. Conversational Agents tự động hóa cuộc hội thoại, còn Conversational Insights phân tích sau đó.",
    "lessonId": "d2-t4",
    "objective": "2.3 Customer Engagement Suite"
  },
  {
    "id": 30,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A bank wants a virtual agent that can handle routine customer chats, such as blocking a lost card or checking a balance, around the clock without a human. Which offering fits best?",
    "question_vi": "Một ngân hàng muốn có agent ảo xử lý các cuộc chat thường ngày như khóa thẻ bị mất hoặc kiểm tra số dư, suốt ngày đêm mà không cần con người. Sản phẩm nào phù hợp nhất?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Agent Assist, which offers suggestions to a human agent who is already handling the conversation.",
        "text_vi": "Agent Assist, đưa ra gợi ý cho nhân viên tổng đài đang trực tiếp xử lý cuộc hội thoại."
      },
      {
        "key": "B",
        "text": "Conversational Insights, which reports on trends found across calls and chats after they finish.",
        "text_vi": "Conversational Insights, báo cáo xu hướng tìm thấy trong các cuộc gọi và chat sau khi chúng kết thúc."
      },
      {
        "key": "C",
        "text": "Conversational Agents in Customer Engagement Suite, which automates customer-facing conversations.",
        "text_vi": "Conversational Agents trong Customer Engagement Suite, tự động hóa các hội thoại hướng tới khách hàng."
      },
      {
        "key": "D",
        "text": "Gemini Notebook, which answers questions from documents that an individual user uploads to a notebook.",
        "text_vi": "Gemini Notebook, trả lời câu hỏi từ tài liệu mà một người dùng tải lên sổ tay của mình."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Conversational Agents build customer-facing chatbots and voice agents that automate the conversation itself. Agent Assist still needs a human agent in the loop.",
    "explanation_vi": "Conversational Agents xây dựng chatbot và agent giọng nói hướng tới khách hàng, tự động hóa chính cuộc hội thoại. Agent Assist vẫn cần nhân viên con người tham gia.",
    "lessonId": "d2-t4",
    "objective": "2.3 Customer Engagement Suite"
  },
  {
    "id": 31,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A travel company has thousands of recorded calls and chat transcripts. Leaders want to understand customer sentiment and spot recurring complaints across all of them. Which offering fits best?",
    "question_vi": "Một công ty du lịch có hàng nghìn cuộc gọi ghi âm và bản ghi chat. Ban lãnh đạo muốn hiểu cảm xúc khách hàng và phát hiện các khiếu nại lặp lại trên toàn bộ dữ liệu. Sản phẩm nào phù hợp nhất?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Agent Assist, which prompts a human agent with suggested replies while the call is still in progress.",
        "text_vi": "Agent Assist, nhắc nhân viên tổng đài các câu trả lời gợi ý khi cuộc gọi vẫn đang diễn ra."
      },
      {
        "key": "B",
        "text": "Conversational Agents, which let customers talk with a virtual agent to rebook or cancel a reservation.",
        "text_vi": "Conversational Agents, cho khách hàng trò chuyện với agent ảo để đổi hoặc hủy đặt chỗ."
      },
      {
        "key": "C",
        "text": "Conversational Insights, which analyzes customer communications to extract insights.",
        "text_vi": "Conversational Insights, phân tích các cuộc giao tiếp với khách hàng để rút ra insight."
      },
      {
        "key": "D",
        "text": "Imagen, which generates promotional pictures of destinations based on short written descriptions.",
        "text_vi": "Imagen, tạo ảnh quảng bá điểm đến dựa trên các mô tả văn bản ngắn."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Analyzing calls and chats at scale for sentiment and trends is the purpose of Conversational Insights. The other options either assist live agents, automate chats or generate images.",
    "explanation_vi": "Phân tích cuộc gọi và chat ở quy mô lớn để tìm cảm xúc và xu hướng là mục đích của Conversational Insights. Các lựa chọn khác hỗ trợ nhân viên trực tiếp, tự động hóa chat hoặc tạo ảnh.",
    "lessonId": "d2-t4",
    "objective": "2.3 Customer Engagement Suite"
  },
  {
    "id": 32,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "An e-commerce company wants shoppers to search its catalog in natural language and receive recommendations, with as little infrastructure to build as possible. Which option is the best fit?",
    "question_vi": "Một công ty thương mại điện tử muốn khách mua hàng tìm kiếm danh mục bằng ngôn ngữ tự nhiên và nhận gợi ý, với càng ít hạ tầng phải xây càng tốt. Lựa chọn nào phù hợp nhất?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "A custom RAG pipeline assembled from separate components, which means far more engineering effort.",
        "text_vi": "Một pipeline RAG tùy chỉnh ghép từ các thành phần riêng lẻ, đồng nghĩa với nhiều công sức kỹ thuật hơn nhiều."
      },
      {
        "key": "B",
        "text": "Agent Assist, which helps human agents answer questions during live service conversations.",
        "text_vi": "Agent Assist, giúp nhân viên tổng đài trả lời câu hỏi trong các cuộc hội thoại dịch vụ trực tiếp."
      },
      {
        "key": "C",
        "text": "Agent Search, which provides enterprise search and recommendations with pre-built RAG.",
        "text_vi": "Agent Search, cung cấp tìm kiếm doanh nghiệp và gợi ý với RAG dựng sẵn."
      },
      {
        "key": "D",
        "text": "Conversational Insights, which summarizes customer feedback after conversations have ended.",
        "text_vi": "Conversational Insights, tóm tắt phản hồi của khách hàng sau khi các cuộc hội thoại đã kết thúc."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Agent Search delivers search and recommendations over company data with pre-built RAG and no infrastructure to assemble. Building RAG from components is possible but costs far more effort.",
    "explanation_vi": "Agent Search cung cấp tìm kiếm và gợi ý trên dữ liệu công ty với RAG dựng sẵn, không phải tự lắp hạ tầng. Tự dựng RAG từ các thành phần là khả thi nhưng tốn nhiều công sức hơn.",
    "lessonId": "d2-t4",
    "objective": "2.3 Search offerings"
  },
  {
    "id": 33,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A healthcare startup has its own labeled medical images and little ML expertise. It wants a custom image classifier without writing training code. Which Agent Platform (formerly Vertex AI) option fits best?",
    "question_vi": "Một startup y tế có bộ ảnh y khoa gắn nhãn của riêng mình và ít chuyên môn ML. Họ muốn bộ phân loại ảnh tùy chỉnh mà không phải viết mã huấn luyện. Tùy chọn nào của Agent Platform (trước đây là Vertex AI) phù hợp nhất?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Custom training with the team's own code, which gives full control but requires strong ML expertise.",
        "text_vi": "Huấn luyện tùy chỉnh bằng mã riêng của đội, cho toàn quyền kiểm soát nhưng đòi hỏi chuyên môn ML sâu."
      },
      {
        "key": "B",
        "text": "AutoML, which trains a custom model from the company's own data with minimal ML expertise.",
        "text_vi": "AutoML, huấn luyện mô hình tùy chỉnh từ dữ liệu riêng của công ty với rất ít chuyên môn ML."
      },
      {
        "key": "C",
        "text": "Model Garden alone, which is a catalog for finding models and does not train one on the startup's images.",
        "text_vi": "Chỉ riêng Model Garden, là danh mục để tìm mô hình và không huấn luyện mô hình trên ảnh của startup."
      },
      {
        "key": "D",
        "text": "Gemini for Google Workspace, which adds AI features to Docs and Gmail but does not train custom models.",
        "text_vi": "Gemini for Google Workspace, thêm tính năng AI vào Docs và Gmail nhưng không huấn luyện mô hình tùy chỉnh."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Limited ML expertise plus own data points to AutoML, while custom training suits teams that need full control. Model Garden is where you find models, not where you train on your own data.",
    "explanation_vi": "Ít chuyên môn ML cùng dữ liệu riêng dẫn đến AutoML, còn huấn luyện tùy chỉnh phù hợp đội cần toàn quyền kiểm soát. Model Garden là nơi tìm mô hình, không phải nơi huấn luyện trên dữ liệu riêng.",
    "lessonId": "d2-t5",
    "objective": "2.4 Agent Platform: AutoML"
  },
  {
    "id": 34,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A product team at a software company wants to prototype a Gemini-powered feature quickly and cheaply in a browser, with no need for production governance yet. Which tool is the best starting point?",
    "question_vi": "Đội sản phẩm của một công ty phần mềm muốn tạo mẫu nhanh và rẻ một tính năng dùng Gemini ngay trên trình duyệt, chưa cần quản trị cấp production. Công cụ nào là điểm khởi đầu tốt nhất?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Agent Studio on Agent Platform, which is aimed at production use with enterprise IAM and governance.",
        "text_vi": "Agent Studio trên Agent Platform, nhắm tới môi trường production với IAM và quản trị doanh nghiệp."
      },
      {
        "key": "B",
        "text": "Google AI Studio, which is built for quick prototyping with Gemini models.",
        "text_vi": "Google AI Studio, được xây dựng để tạo mẫu nhanh với các mô hình Gemini."
      },
      {
        "key": "C",
        "text": "Security Command Center, which shows the security posture of cloud resources but does not prototype features.",
        "text_vi": "Security Command Center, hiển thị tình trạng bảo mật của tài nguyên đám mây nhưng không dùng để tạo mẫu tính năng."
      },
      {
        "key": "D",
        "text": "Conversational Insights, which analyzes contact center conversations but does not build new product features.",
        "text_vi": "Conversational Insights, phân tích hội thoại của trung tâm liên lạc nhưng không xây dựng tính năng sản phẩm mới."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Google AI Studio is for fast, low-cost prototyping, while Agent Studio is the production-oriented choice. The remaining options are not prototyping tools.",
    "explanation_vi": "Google AI Studio dùng để tạo mẫu nhanh, chi phí thấp, còn Agent Studio hướng tới production. Các lựa chọn còn lại không phải công cụ tạo mẫu.",
    "lessonId": "d2-t5",
    "objective": "2.4 Google AI Studio vs Agent Studio"
  },
  {
    "id": 35,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A bank has validated a gen AI prototype and now wants to move it to production with enterprise access control, governance and monitoring. Which tool should the team use?",
    "question_vi": "Một ngân hàng đã kiểm chứng bản mẫu gen AI và muốn đưa vào production với kiểm soát truy cập, quản trị và giám sát cấp doanh nghiệp. Đội nên dùng công cụ nào?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Google AI Studio, which is intended for fast and inexpensive experiments rather than governed production.",
        "text_vi": "Google AI Studio, dành cho các thử nghiệm nhanh và rẻ hơn là production có quản trị."
      },
      {
        "key": "B",
        "text": "Agent Studio on Agent Platform, which supports production use with IAM and governance.",
        "text_vi": "Agent Studio trên Agent Platform, hỗ trợ môi trường production với IAM và quản trị."
      },
      {
        "key": "C",
        "text": "The Gemini app with Gems, which is a consumer-style assistant that employees use on their own.",
        "text_vi": "Ứng dụng Gemini với Gems, là trợ lý kiểu người dùng cuối mà nhân viên tự sử dụng."
      },
      {
        "key": "D",
        "text": "Gemini Notebook, which answers questions from a handful of documents uploaded by one individual.",
        "text_vi": "Gemini Notebook, trả lời câu hỏi từ một vài tài liệu do một cá nhân tải lên."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Enterprise IAM, governance and production use are the cues for Agent Studio. Google AI Studio is for prototyping, and the Gemini app and Gemini Notebook are end-user tools.",
    "explanation_vi": "IAM doanh nghiệp, quản trị và production là dấu hiệu của Agent Studio. Google AI Studio để tạo mẫu, còn ứng dụng Gemini và Gemini Notebook là công cụ cho người dùng cuối.",
    "lessonId": "d2-t5",
    "objective": "2.4 Google AI Studio vs Agent Studio"
  },
  {
    "id": 36,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "What is the main purpose of Model Garden on Agent Platform (formerly Vertex AI)?",
    "question_vi": "Mục đích chính của Model Garden trên Agent Platform (trước đây là Vertex AI) là gì?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "To explore and deploy a catalog of Google, third-party and open models in one place.",
        "text_vi": "Để khám phá và triển khai danh mục mô hình của Google, bên thứ ba và mã nguồn mở tại một nơi."
      },
      {
        "key": "B",
        "text": "To detect when a deployed model's accuracy drifts away from what it delivered at launch.",
        "text_vi": "Để phát hiện khi độ chính xác của mô hình đã triển khai lệch khỏi mức lúc ra mắt."
      },
      {
        "key": "C",
        "text": "To give contact center agents live suggestions while they speak with customers on the phone.",
        "text_vi": "Để đưa ra gợi ý trực tiếp cho nhân viên tổng đài khi họ nói chuyện qua điện thoại với khách hàng."
      },
      {
        "key": "D",
        "text": "To control which employees are allowed to call a model and which datasets they may read.",
        "text_vi": "Để kiểm soát nhân viên nào được gọi mô hình và được đọc bộ dữ liệu nào."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Model Garden is the model catalog where teams choose models to use. Drift detection belongs to Model Monitoring, agent suggestions to Agent Assist and access control to IAM.",
    "explanation_vi": "Model Garden là danh mục mô hình nơi các đội chọn mô hình để dùng. Phát hiện drift thuộc về Model Monitoring, gợi ý cho nhân viên thuộc Agent Assist và kiểm soát truy cập thuộc IAM.",
    "lessonId": "d2-t5",
    "objective": "2.4 Agent Platform: Model Garden"
  },
  {
    "id": 37,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A telecom support organization wants to turn thousands of recorded customer calls into text so the transcripts can be analyzed. Which Google Cloud pre-built API fits best?",
    "question_vi": "Một tổ chức hỗ trợ viễn thông muốn chuyển hàng nghìn cuộc gọi khách hàng đã ghi âm thành văn bản để phân tích bản ghi. API dựng sẵn nào của Google Cloud phù hợp nhất?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Text-to-Speech API, which turns written text into spoken audio rather than the other way around.",
        "text_vi": "Text-to-Speech API, biến văn bản viết thành âm thanh nói chứ không phải chiều ngược lại."
      },
      {
        "key": "B",
        "text": "Speech-to-Text API, which converts spoken audio such as recorded calls into written text.",
        "text_vi": "Speech-to-Text API, chuyển âm thanh nói như cuộc gọi ghi âm thành văn bản."
      },
      {
        "key": "C",
        "text": "Cloud Vision API, which analyzes the content of still images rather than the audio of conversations.",
        "text_vi": "Cloud Vision API, phân tích nội dung ảnh tĩnh chứ không phải âm thanh hội thoại."
      },
      {
        "key": "D",
        "text": "Document Translation API, which translates documents into other languages while keeping their layout.",
        "text_vi": "Document Translation API, dịch tài liệu sang ngôn ngữ khác và giữ nguyên bố cục."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Transcribing audio to text is the job of Speech-to-Text. Text-to-Speech works in the opposite direction, and Vision and Document Translation handle images and documents.",
    "explanation_vi": "Chuyển âm thanh thành văn bản là việc của Speech-to-Text. Text-to-Speech làm chiều ngược lại, còn Vision và Document Translation xử lý hình ảnh và tài liệu.",
    "lessonId": "d2-t6",
    "objective": "2.5 Pre-built AI APIs"
  },
  {
    "id": 38,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "An insurance company receives thousands of scanned claim forms and invoices each week and wants to extract fields such as dates, totals and policy numbers automatically. Which pre-built API fits best?",
    "question_vi": "Một công ty bảo hiểm mỗi tuần nhận hàng nghìn phiếu yêu cầu bồi thường và hóa đơn quét, muốn tự động trích xuất các trường như ngày, tổng tiền và số hợp đồng. API dựng sẵn nào phù hợp nhất?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Cloud Vision API, which labels what is shown in a photo but is not built for form and invoice fields.",
        "text_vi": "Cloud Vision API, gắn nhãn nội dung có trong ảnh nhưng không được xây dựng cho các trường của biểu mẫu và hóa đơn."
      },
      {
        "key": "B",
        "text": "Natural Language API, which analyzes sentiment in text that has already been extracted from documents.",
        "text_vi": "Natural Language API, phân tích cảm xúc trong văn bản đã được trích xuất từ tài liệu."
      },
      {
        "key": "C",
        "text": "Cloud Video Intelligence API, which detects objects and scenes inside video files rather than paperwork.",
        "text_vi": "Cloud Video Intelligence API, phát hiện đối tượng và cảnh trong tệp video chứ không phải giấy tờ."
      },
      {
        "key": "D",
        "text": "Document AI API, which extracts structured data from forms and invoices.",
        "text_vi": "Document AI API, trích xuất dữ liệu có cấu trúc từ biểu mẫu và hóa đơn."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Document AI is designed to extract structured fields from invoices and forms. Cloud Vision labels image content, and the other APIs focus on text sentiment or video.",
    "explanation_vi": "Document AI được thiết kế để trích xuất các trường có cấu trúc từ hóa đơn và biểu mẫu. Cloud Vision gắn nhãn nội dung ảnh, còn các API khác tập trung vào cảm xúc văn bản hoặc video.",
    "lessonId": "d2-t6",
    "objective": "2.5 Pre-built AI APIs"
  },
  {
    "id": 39,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A logistics company is comparing a plain LLM with a gen AI agent for handling shipment exceptions. Which TWO characteristics distinguish an agent from a model that only generates text? (Select TWO.)",
    "question_vi": "Một công ty logistics đang so sánh LLM thông thường với agent gen AI để xử lý các sự cố vận chuyển. Hai đặc điểm nào phân biệt agent với mô hình chỉ tạo văn bản? (Chọn HAI.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "It must be trained from scratch for every new task before it can respond to any request.",
        "text_vi": "Phải được huấn luyện từ đầu cho mỗi tác vụ mới trước khi có thể phản hồi bất kỳ yêu cầu nào."
      },
      {
        "key": "B",
        "text": "It can use tools such as functions, extensions and data stores to take actions in other systems.",
        "text_vi": "Có thể dùng công cụ như function, extension và data store để thực hiện hành động trong các hệ thống khác."
      },
      {
        "key": "C",
        "text": "It cannot connect to company data or external services, which keeps it isolated for safety reasons.",
        "text_vi": "Không thể kết nối với dữ liệu công ty hoặc dịch vụ bên ngoài, giúp nó cô lập vì lý do an toàn."
      },
      {
        "key": "D",
        "text": "It works toward a goal by reasoning about the next step instead of only answering one prompt.",
        "text_vi": "Hướng tới mục tiêu bằng cách suy luận bước tiếp theo thay vì chỉ trả lời một prompt."
      },
      {
        "key": "E",
        "text": "It runs only on a user's own device and cannot be hosted on Google Cloud services such as Cloud Run.",
        "text_vi": "Chỉ chạy trên thiết bị riêng của người dùng và không thể lưu trữ trên các dịch vụ Google Cloud như Cloud Run."
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "explanation": "An agent combines a model with tools and a reasoning loop so it can act toward a goal. A tool-less LLM only generates text, and agents can be hosted on Google Cloud services.",
    "explanation_vi": "Agent kết hợp mô hình với công cụ và vòng lặp suy luận để hành động hướng tới mục tiêu. LLM không có công cụ chỉ tạo văn bản, và agent có thể được lưu trữ trên các dịch vụ Google Cloud.",
    "lessonId": "d2-t6",
    "objective": "2.5 Gen AI agents and tooling"
  },
  {
    "id": 40,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "A model confidently states a false fact, such as quoting a regulation that does not exist, in fluent and convincing language. What is this limitation called?",
    "question_vi": "Một mô hình tự tin nêu một thông tin sai, ví dụ trích dẫn một quy định không tồn tại, bằng văn phong trôi chảy và thuyết phục. Hạn chế này gọi là gì?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Knowledge cutoff, which means the model lacks information about events after its training data ended.",
        "text_vi": "Knowledge cutoff, nghĩa là mô hình thiếu thông tin về các sự kiện sau khi dữ liệu huấn luyện kết thúc."
      },
      {
        "key": "B",
        "text": "Model drift, which is a gradual loss of accuracy after deployment as real-world data changes over time.",
        "text_vi": "Model drift, là sự giảm dần độ chính xác sau triển khai khi dữ liệu thực tế thay đổi theo thời gian."
      },
      {
        "key": "C",
        "text": "Prompt chaining, which is a technique of linking several prompts together to complete a complex task.",
        "text_vi": "Prompt chaining, là kỹ thuật nối nhiều prompt với nhau để hoàn thành một tác vụ phức tạp."
      },
      {
        "key": "D",
        "text": "Hallucination, which is fluent, confident output that is false or invented because the model predicts likely text.",
        "text_vi": "Hallucination (ảo giác), là đầu ra trôi chảy, tự tin nhưng sai hoặc bịa vì mô hình dự đoán văn bản có khả năng cao."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "A hallucination is a fluent, confident output that is incorrect or invented, because models predict likely text rather than verify facts. Knowledge cutoff and drift are different limitations, and prompt chaining is a technique.",
    "explanation_vi": "Hallucination là đầu ra trôi chảy, tự tin nhưng sai hoặc bịa, vì mô hình dự đoán văn bản có khả năng cao chứ không kiểm chứng sự thật. Knowledge cutoff và drift là các hạn chế khác, còn prompt chaining là một kỹ thuật.",
    "lessonId": "d3-t1",
    "objective": "3.1 Foundation model limitations"
  },
  {
    "id": 41,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "A retailer's chatbot keeps quoting last year's return policy, even though a new policy was published last week. The model also knows nothing about the company's private inventory data. Which limitation does this describe?",
    "question_vi": "Chatbot của một nhà bán lẻ cứ trích dẫn chính sách đổi trả năm ngoái dù chính sách mới đã công bố tuần trước. Mô hình cũng không biết gì về dữ liệu tồn kho riêng của công ty. Điều này mô tả hạn chế nào?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Bias in the training data, because the model favors particular groups of customers in its answers.",
        "text_vi": "Thiên kiến trong dữ liệu huấn luyện, vì mô hình ưu ái một số nhóm khách hàng trong câu trả lời."
      },
      {
        "key": "B",
        "text": "An edge case, because the question about returns is unusual and rarely appears in common usage.",
        "text_vi": "Một trường hợp ngoại lệ (edge case), vì câu hỏi về đổi trả hiếm gặp và ít xuất hiện trong thực tế."
      },
      {
        "key": "C",
        "text": "Excessive safety filtering, because the model is blocking harmless answers about the new policy.",
        "text_vi": "Lọc an toàn quá mức, vì mô hình đang chặn các câu trả lời vô hại về chính sách mới."
      },
      {
        "key": "D",
        "text": "Knowledge cutoff and data dependency, because the model only knows what was in its training data.",
        "text_vi": "Knowledge cutoff và phụ thuộc dữ liệu, vì mô hình chỉ biết những gì có trong dữ liệu huấn luyện."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Models cannot know about recent events or private enterprise data that were not in their training data. Grounding or RAG is the usual fix.",
    "explanation_vi": "Mô hình không thể biết sự kiện gần đây hoặc dữ liệu riêng của doanh nghiệp không có trong dữ liệu huấn luyện. Cách khắc phục thường là grounding hoặc RAG.",
    "lessonId": "d3-t1",
    "objective": "3.1 Foundation model limitations"
  },
  {
    "id": 42,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "A bank uses gen AI to draft loan-decision summaries, and an error could seriously affect customers. Which practice should be added to the workflow?",
    "question_vi": "Một ngân hàng dùng gen AI để soạn tóm tắt quyết định cho vay, và một lỗi có thể ảnh hưởng nghiêm trọng đến khách hàng. Nên bổ sung thực hành nào vào quy trình?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Raising the temperature, so that the model produces more varied wording across different summaries.",
        "text_vi": "Tăng temperature, để mô hình tạo cách diễn đạt đa dạng hơn giữa các bản tóm tắt."
      },
      {
        "key": "B",
        "text": "Human in the loop (HITL) review, so that qualified staff check outputs before they are acted on.",
        "text_vi": "Rà soát có con người tham gia (HITL), để nhân viên có chuyên môn kiểm tra đầu ra trước khi thực hiện."
      },
      {
        "key": "C",
        "text": "Switching to the largest available model and letting its summaries go straight to customers.",
        "text_vi": "Chuyển sang mô hình lớn nhất hiện có và để bản tóm tắt đi thẳng đến khách hàng."
      },
      {
        "key": "D",
        "text": "Fine-tuning the model once on historical loans and then removing all review steps from the process.",
        "text_vi": "Fine-tune mô hình một lần trên các khoản vay lịch sử rồi bỏ mọi bước rà soát khỏi quy trình."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "For sensitive, regulated or high-stakes outputs, Google recommends human oversight in addition to technical measures. A larger model or a one-time fine-tune does not remove the risk of errors.",
    "explanation_vi": "Với đầu ra nhạy cảm, bị quản lý hoặc rủi ro cao, Google khuyến nghị giám sát của con người bên cạnh các biện pháp kỹ thuật. Mô hình lớn hơn hay fine-tune một lần không loại bỏ rủi ro sai sót.",
    "lessonId": "d3-t2",
    "objective": "3.1 Practices to overcome limitations"
  },
  {
    "id": 43,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "An online store's support assistant sometimes gives outdated product information and occasionally invents details. Which TWO practices follow Google Cloud's recommendations to improve its output? (Select TWO.)",
    "question_vi": "Trợ lý hỗ trợ của một cửa hàng trực tuyến đôi khi đưa thông tin sản phẩm lỗi thời và thỉnh thoảng bịa chi tiết. Hai thực hành nào theo khuyến nghị của Google Cloud để cải thiện đầu ra? (Chọn HAI.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "Raise the temperature so that the assistant produces more creative and varied product descriptions",
        "text_vi": "Tăng temperature để trợ lý tạo mô tả sản phẩm sáng tạo và đa dạng hơn"
      },
      {
        "key": "B",
        "text": "Ground answers in the current product catalog by using RAG",
        "text_vi": "Neo câu trả lời vào danh mục sản phẩm hiện tại bằng cách dùng RAG"
      },
      {
        "key": "C",
        "text": "Retrain a brand-new foundation model from scratch every week using the latest catalog data",
        "text_vi": "Huấn luyện foundation model mới từ đầu mỗi tuần bằng dữ liệu danh mục mới nhất"
      },
      {
        "key": "D",
        "text": "Improve the prompt with clear instructions, including telling the model to say when it lacks information",
        "text_vi": "Cải thiện prompt bằng chỉ dẫn rõ ràng, bao gồm yêu cầu mô hình nói rõ khi thiếu thông tin"
      },
      {
        "key": "E",
        "text": "Turn off all safety settings so that the assistant is free to answer every question without limits",
        "text_vi": "Tắt mọi cài đặt an toàn để trợ lý được tự do trả lời mọi câu hỏi mà không giới hạn"
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "explanation": "Grounding and RAG supply current, authoritative data, and clear prompts reduce guessing. Higher temperature adds randomness, and weekly retraining from scratch is impractical and unnecessary.",
    "explanation_vi": "Grounding và RAG cung cấp dữ liệu hiện hành, đáng tin cậy, còn prompt rõ ràng giảm việc đoán mò. Temperature cao thêm tính ngẫu nhiên, và huấn luyện lại từ đầu mỗi tuần là không thực tế và không cần thiết.",
    "lessonId": "d3-t2",
    "objective": "3.1 Practices to overcome limitations"
  },
  {
    "id": 44,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "Which approach best reflects Google-recommended practice for keeping a deployed gen AI assistant reliable over time?",
    "question_vi": "Cách tiếp cận nào phản ánh tốt nhất thực hành Google khuyến nghị để giữ trợ lý gen AI đã triển khai luôn đáng tin cậy theo thời gian?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Test the assistant thoroughly once before launch and then stop evaluating unless the model is replaced.",
        "text_vi": "Kiểm thử kỹ trợ lý một lần trước khi ra mắt rồi dừng đánh giá trừ khi mô hình bị thay thế."
      },
      {
        "key": "B",
        "text": "Wait for users to complain loudly before reviewing the assistant, since feedback is the only reliable signal.",
        "text_vi": "Chờ người dùng phàn nàn nhiều rồi mới rà soát trợ lý, vì phản hồi là tín hiệu duy nhất đáng tin."
      },
      {
        "key": "C",
        "text": "Skip security patches and model upgrades so the assistant's behavior never changes after deployment.",
        "text_vi": "Bỏ qua bản vá bảo mật và nâng cấp mô hình để hành vi của trợ lý không thay đổi sau triển khai."
      },
      {
        "key": "D",
        "text": "Define KPIs, track performance continuously and re-evaluate after any change to the model, prompt or data.",
        "text_vi": "Xác định KPI, theo dõi hiệu năng liên tục và đánh giá lại sau mọi thay đổi về mô hình, prompt hoặc dữ liệu."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Performance drifts over time, so evaluation is ongoing: KPIs, performance tracking, versioning and updates all apply. A one-time test or ignoring patches leaves problems undetected.",
    "explanation_vi": "Hiệu năng trôi (drift) theo thời gian nên việc đánh giá phải liên tục: KPI, theo dõi hiệu năng, quản lý phiên bản và cập nhật đều cần thiết. Kiểm thử một lần hoặc bỏ qua bản vá khiến vấn đề không bị phát hiện.",
    "lessonId": "d3-t3",
    "objective": "3.1 Monitoring and evaluation"
  },
  {
    "id": 45,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "An insurance claims team asks a model to summarize adjuster notes, but the format varies from one summary to the next. They need every summary to follow the same structure. What is the best low-cost fix?",
    "question_vi": "Một đội xử lý bồi thường bảo hiểm nhờ mô hình tóm tắt ghi chú của giám định viên, nhưng định dạng mỗi bản tóm tắt một khác. Họ cần mọi bản tóm tắt theo cùng một cấu trúc. Cách khắc phục chi phí thấp tốt nhất là gì?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Train a new foundation model from scratch on past claims so it learns the company's summary format.",
        "text_vi": "Huấn luyện foundation model mới từ đầu trên các hồ sơ bồi thường cũ để nó học định dạng của công ty."
      },
      {
        "key": "B",
        "text": "Use few-shot prompting by including a few examples of correctly formatted summaries in the prompt.",
        "text_vi": "Dùng few-shot prompting bằng cách đưa vài ví dụ về bản tóm tắt đúng định dạng vào prompt."
      },
      {
        "key": "C",
        "text": "Raise the temperature so the model explores more phrasing options until one matches the format.",
        "text_vi": "Tăng temperature để mô hình thử nhiều cách diễn đạt hơn cho đến khi có một cách khớp định dạng."
      },
      {
        "key": "D",
        "text": "Remove the instructions from the prompt and paste only the raw notes, so the model decides the layout.",
        "text_vi": "Bỏ chỉ dẫn khỏi prompt và chỉ dán ghi chú thô, để mô hình tự quyết định bố cục."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Examples in the prompt show the model the exact pattern to follow, which is few-shot prompting and a cheap first step. Higher temperature increases variation, the opposite of consistency.",
    "explanation_vi": "Ví dụ trong prompt cho mô hình thấy đúng mẫu cần theo, đó là few-shot prompting và là bước đầu rẻ. Temperature cao làm tăng biến thiên, ngược với sự nhất quán.",
    "lessonId": "d3-t4",
    "objective": "3.2 Prompting techniques"
  },
  {
    "id": 46,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "A travel company wants its assistant to answer in the voice of a friendly, expert local concierge. Which prompting technique does this describe?",
    "question_vi": "Một công ty du lịch muốn trợ lý của mình trả lời bằng giọng của một nhân viên concierge địa phương thân thiện và am hiểu. Điều này mô tả kỹ thuật prompting nào?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Prompt chaining, which splits a complex task into several linked steps handled one after another.",
        "text_vi": "Prompt chaining, chia một tác vụ phức tạp thành nhiều bước liên kết xử lý lần lượt."
      },
      {
        "key": "B",
        "text": "Fine-tuning, which further trains the model on a labeled dataset so its parameters change.",
        "text_vi": "Fine-tuning, huấn luyện thêm mô hình trên bộ dữ liệu có nhãn để tham số của nó thay đổi."
      },
      {
        "key": "C",
        "text": "Role prompting, which sets the persona, tone and expertise the model should adopt.",
        "text_vi": "Role prompting, thiết lập vai trò, giọng điệu và chuyên môn mà mô hình cần đảm nhận."
      },
      {
        "key": "D",
        "text": "Grounding with Google Search, which connects answers to up-to-date public information on the web.",
        "text_vi": "Grounding with Google Search, kết nối câu trả lời với thông tin công khai cập nhật trên web."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Asking the model to act as an expert in a given voice is role prompting, a basic prompt engineering technique that changes only the input.",
    "explanation_vi": "Yêu cầu mô hình đóng vai chuyên gia với một giọng điệu nhất định là role prompting, một kỹ thuật prompt engineering cơ bản chỉ thay đổi đầu vào.",
    "lessonId": "d3-t4",
    "objective": "3.2 Prompting techniques"
  },
  {
    "id": 47,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "An energy company's analysts ask a model multi-step questions about demand forecasts, and it often jumps to a wrong answer without showing its work. Which technique is most likely to improve accuracy?",
    "question_vi": "Các nhà phân tích của một công ty năng lượng hỏi mô hình các câu nhiều bước về dự báo nhu cầu, và mô hình thường nhảy đến câu trả lời sai mà không trình bày các bước. Kỹ thuật nào nhiều khả năng cải thiện độ chính xác nhất?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "ReAct prompting, which is chosen when the model must call tools or APIs and act on their results.",
        "text_vi": "ReAct prompting, được chọn khi mô hình phải gọi công cụ hoặc API và hành động dựa trên kết quả."
      },
      {
        "key": "B",
        "text": "Metaprompting, which uses an AI model to write or improve other prompts rather than to reason.",
        "text_vi": "Metaprompting, dùng mô hình AI để viết hoặc cải thiện các prompt khác chứ không phải để suy luận."
      },
      {
        "key": "C",
        "text": "Chain-of-thought prompting, which guides the model to reason through intermediate steps.",
        "text_vi": "Chain-of-thought prompting, hướng dẫn mô hình suy luận qua các bước trung gian."
      },
      {
        "key": "D",
        "text": "Zero-shot prompting with a higher temperature, which gives the model more freedom with no guidance.",
        "text_vi": "Zero-shot prompting với temperature cao hơn, cho mô hình nhiều tự do hơn mà không có hướng dẫn."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Complex reasoning with intermediate steps is the use case for chain-of-thought. ReAct is for tool interaction, which this question does not require.",
    "explanation_vi": "Suy luận phức tạp với các bước trung gian là trường hợp dùng của chain-of-thought. ReAct dành cho tương tác với công cụ, điều mà câu hỏi này không yêu cầu.",
    "lessonId": "d3-t5",
    "objective": "3.2 Advanced prompting"
  },
  {
    "id": 48,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "A news and media company wants its assistant to answer questions about breaking public events with up-to-the-minute information and visible source links. Which option fits best?",
    "question_vi": "Một công ty tin tức và truyền thông muốn trợ lý trả lời câu hỏi về các sự kiện công khai đang diễn ra với thông tin cập nhật từng phút và liên kết nguồn hiển thị. Lựa chọn nào phù hợp nhất?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Fine-tuning the model on last year's articles, which adds the style but not live facts about new events.",
        "text_vi": "Fine-tune mô hình trên các bài viết năm ngoái, giúp thêm văn phong nhưng không có sự kiện mới theo thời gian thực."
      },
      {
        "key": "B",
        "text": "Pre-built RAG with Agent Search over internal archives only, which would miss events from the last hours.",
        "text_vi": "RAG dựng sẵn với Agent Search chỉ trên kho lưu trữ nội bộ, sẽ bỏ lỡ các sự kiện trong vài giờ gần nhất."
      },
      {
        "key": "C",
        "text": "Grounding with Google Search, which ties answers to current public information from the web.",
        "text_vi": "Grounding with Google Search, gắn câu trả lời với thông tin công khai hiện hành từ web."
      },
      {
        "key": "D",
        "text": "Lowering the temperature to zero, which makes outputs more repeatable but does not add new knowledge.",
        "text_vi": "Hạ temperature xuống 0, giúp đầu ra lặp lại ổn định hơn nhưng không bổ sung kiến thức mới."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Grounding with Google Search uses world data to provide current, source-backed answers. Fine-tuning and temperature settings do not supply live facts, and internal archives lack breaking news.",
    "explanation_vi": "Grounding with Google Search dùng dữ liệu thế giới để đưa câu trả lời hiện hành có nguồn. Fine-tuning và cài đặt temperature không cung cấp sự kiện thời gian thực, còn kho lưu trữ nội bộ thiếu tin nóng.",
    "lessonId": "d3-t6",
    "objective": "3.3 Grounding offerings"
  },
  {
    "id": 49,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "Why would a company choose RAG instead of fine-tuning when its product documentation changes every week?",
    "question_vi": "Vì sao một công ty chọn RAG thay vì fine-tuning khi tài liệu sản phẩm của họ thay đổi mỗi tuần?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "RAG retrieves the current documents at query time, so the knowledge stays up to date without retraining the model.",
        "text_vi": "RAG truy xuất tài liệu hiện hành tại thời điểm truy vấn, nên kiến thức luôn cập nhật mà không cần huấn luyện lại mô hình."
      },
      {
        "key": "B",
        "text": "RAG permanently rewrites the model's learned parameters each time a document changes in the knowledge base.",
        "text_vi": "RAG viết lại vĩnh viễn các tham số đã học của mô hình mỗi khi một tài liệu trong kho kiến thức thay đổi."
      },
      {
        "key": "C",
        "text": "Fine-tuning gives the model live access to documents, but it can only be used once per calendar year.",
        "text_vi": "Fine-tuning cho mô hình truy cập trực tiếp vào tài liệu, nhưng chỉ dùng được một lần mỗi năm dương lịch."
      },
      {
        "key": "D",
        "text": "RAG removes the need for any access controls, because retrieved documents are public by definition.",
        "text_vi": "RAG loại bỏ nhu cầu kiểm soát truy cập, vì tài liệu được truy xuất theo định nghĩa là công khai."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "RAG keeps knowledge current by retrieving information when a question is asked, while fine-tuning adapts behavior but does not supply live facts. RAG does not change the model's parameters or remove security needs.",
    "explanation_vi": "RAG giữ kiến thức luôn mới bằng cách truy xuất thông tin khi có câu hỏi, còn fine-tuning điều chỉnh hành vi nhưng không cung cấp sự kiện mới. RAG không thay đổi tham số mô hình và không loại bỏ nhu cầu bảo mật.",
    "lessonId": "d3-t6",
    "objective": "3.3 Grounding and RAG"
  },
  {
    "id": 50,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "A company uses the same model for two jobs: a legal team needs consistent, factual summaries, and a marketing team wants varied slogan ideas. How should temperature be set?",
    "question_vi": "Một công ty dùng cùng một mô hình cho hai việc: đội pháp lý cần bản tóm tắt nhất quán, đúng sự thật, còn đội marketing muốn nhiều ý tưởng slogan đa dạng. Nên đặt temperature thế nào?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Use a higher temperature for the legal team and a lower temperature for the marketing team.",
        "text_vi": "Dùng temperature cao cho đội pháp lý và temperature thấp cho đội marketing."
      },
      {
        "key": "B",
        "text": "Use a lower temperature for the legal team and a higher temperature for the marketing team.",
        "text_vi": "Dùng temperature thấp cho đội pháp lý và temperature cao cho đội marketing."
      },
      {
        "key": "C",
        "text": "Use the highest temperature for both teams, because randomness improves accuracy and creativity alike.",
        "text_vi": "Dùng temperature cao nhất cho cả hai đội, vì tính ngẫu nhiên cải thiện cả độ chính xác lẫn sự sáng tạo."
      },
      {
        "key": "D",
        "text": "Leave temperature alone for both teams, because only the safety settings control how random outputs are.",
        "text_vi": "Giữ nguyên temperature cho cả hai đội, vì chỉ cài đặt an toàn kiểm soát mức ngẫu nhiên của đầu ra."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Temperature controls randomness: low values favor consistent, factual answers, and high values favor creative, varied output. Safety settings filter harmful content instead of controlling randomness.",
    "explanation_vi": "Temperature điều khiển mức ngẫu nhiên: giá trị thấp ưu tiên câu trả lời nhất quán, đúng sự thật, giá trị cao ưu tiên đầu ra sáng tạo, đa dạng. Cài đặt an toàn lọc nội dung có hại chứ không điều khiển độ ngẫu nhiên.",
    "lessonId": "d3-t7",
    "objective": "3.3 Sampling parameters"
  },
  {
    "id": 51,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "A children's learning company enabled strict safety settings on its homework assistant. A reviewer then finds the assistant gave a harmless but wrong historical date. What does this show?",
    "question_vi": "Một công ty học tập cho trẻ em bật cài đặt an toàn nghiêm ngặt cho trợ lý làm bài tập. Người rà soát sau đó thấy trợ lý đưa ra một mốc lịch sử sai nhưng vô hại. Điều này cho thấy gì?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "The safety settings are misconfigured, because strict settings should automatically check every answer against trusted sources.",
        "text_vi": "Cài đặt an toàn bị cấu hình sai, vì cài đặt nghiêm ngặt phải tự động đối chiếu mọi câu trả lời với nguồn đáng tin."
      },
      {
        "key": "B",
        "text": "The temperature is too high, because safety settings control randomness and the wrong date proves they were set incorrectly.",
        "text_vi": "Temperature quá cao, vì cài đặt an toàn điều khiển mức ngẫu nhiên và mốc sai chứng tỏ chúng bị đặt sai."
      },
      {
        "key": "C",
        "text": "The model is too small, because only larger models can follow safety settings and also give factually accurate answers.",
        "text_vi": "Mô hình quá nhỏ, vì chỉ mô hình lớn hơn mới tuân theo cài đặt an toàn và đồng thời trả lời đúng sự thật."
      },
      {
        "key": "D",
        "text": "Safety settings filter harmful content but do not guarantee accuracy, so grounding or human review is still needed.",
        "text_vi": "Cài đặt an toàn lọc nội dung có hại nhưng không đảm bảo độ chính xác, nên vẫn cần grounding hoặc rà soát của con người."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Safety settings block harmful content; they do not verify facts. Factual accuracy is addressed by grounding, good prompts and human review, while randomness is controlled by temperature.",
    "explanation_vi": "Cài đặt an toàn chặn nội dung có hại chứ không kiểm chứng sự thật. Độ chính xác về sự thật được xử lý bằng grounding, prompt tốt và rà soát của con người, còn độ ngẫu nhiên do temperature điều khiển.",
    "lessonId": "d3-t7",
    "objective": "3.3 Sampling parameters and settings"
  },
  {
    "id": 52,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "A leader at a retail company has been asked to pick a gen AI solution for customer engagement. What should the leader do first?",
    "question_vi": "Một lãnh đạo tại công ty bán lẻ được giao chọn giải pháp gen AI cho việc tương tác với khách hàng. Lãnh đạo nên làm gì trước tiên?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Define the business problem, requirements and constraints, then pick the simplest solution that fits.",
        "text_vi": "Xác định vấn đề kinh doanh, yêu cầu và ràng buộc, sau đó chọn giải pháp đơn giản nhất phù hợp."
      },
      {
        "key": "B",
        "text": "Select the newest and largest model on the market, then look for a business problem it could solve.",
        "text_vi": "Chọn mô hình mới nhất và lớn nhất trên thị trường, rồi tìm vấn đề kinh doanh mà nó có thể giải quyết."
      },
      {
        "key": "C",
        "text": "Hire a research team to train a custom foundation model so the company owns every layer of the stack.",
        "text_vi": "Thuê đội nghiên cứu huấn luyện foundation model riêng để công ty sở hữu mọi tầng của hệ thống."
      },
      {
        "key": "D",
        "text": "Launch a company-wide pilot immediately and decide which use cases matter after seeing user reactions.",
        "text_vi": "Triển khai ngay thí điểm toàn công ty và quyết định các trường hợp sử dụng quan trọng sau khi xem phản ứng người dùng."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Google Cloud recommends starting from business requirements and constraints rather than technology. Jumping to the biggest model or a custom build skips that analysis.",
    "explanation_vi": "Google Cloud khuyến nghị bắt đầu từ yêu cầu và ràng buộc kinh doanh thay vì công nghệ. Nhảy thẳng đến mô hình lớn nhất hay tự xây sẽ bỏ qua bước phân tích đó.",
    "lessonId": "d4-t1",
    "objective": "4.1 Choosing the right solution"
  },
  {
    "id": 53,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "A small online retailer with no ML staff needs a standard FAQ chatbot for its website within a few weeks. What is the best approach?",
    "question_vi": "Một nhà bán lẻ trực tuyến nhỏ không có nhân viên ML cần chatbot FAQ chuẩn cho website trong vài tuần. Cách tiếp cận tốt nhất là gì?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Start with a ready-made or low-code offering that meets the need, and customize only if gaps remain.",
        "text_vi": "Bắt đầu với sản phẩm dựng sẵn hoặc low-code đáp ứng nhu cầu, và chỉ tùy biến nếu còn thiếu sót."
      },
      {
        "key": "B",
        "text": "Train a custom model on the company's own infrastructure so the chatbot is completely unique.",
        "text_vi": "Huấn luyện mô hình tùy chỉnh trên hạ tầng riêng của công ty để chatbot hoàn toàn độc nhất."
      },
      {
        "key": "C",
        "text": "Build a multi-agent system with custom tools for every department before launching the first version.",
        "text_vi": "Xây hệ thống đa agent với công cụ tùy chỉnh cho mọi phòng ban trước khi ra mắt phiên bản đầu."
      },
      {
        "key": "D",
        "text": "Postpone the project until the team has collected years of labeled chat data for supervised training.",
        "text_vi": "Hoãn dự án cho đến khi đội thu thập được nhiều năm dữ liệu chat có nhãn để huấn luyện có giám sát."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "When the need is a standard capability, the simplest ready-made or no-code option is usually best. Custom training and complex builds add time and skills the retailer does not have.",
    "explanation_vi": "Khi nhu cầu là một năng lực chuẩn, lựa chọn dựng sẵn hoặc no-code đơn giản nhất thường là tốt nhất. Huấn luyện tùy chỉnh và hệ thống phức tạp tốn thêm thời gian và kỹ năng mà nhà bán lẻ không có.",
    "lessonId": "d4-t1",
    "objective": "4.1 Choosing the right solution"
  },
  {
    "id": 54,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "The CEO of a public utility wants a gen AI strategy that gains employee buy-in and finds high-value use cases. Which approach matches Google Cloud's recommendation?",
    "question_vi": "CEO của một công ty dịch vụ công ích muốn có chiến lược gen AI nhận được sự ủng hộ của nhân viên và tìm ra các trường hợp sử dụng giá trị cao. Cách tiếp cận nào phù hợp với khuyến nghị của Google Cloud?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Rely only on top-down mandates from executives, since staff ideas would distract from the vision.",
        "text_vi": "Chỉ dựa vào chỉ đạo từ cấp lãnh đạo, vì ý tưởng của nhân viên sẽ làm chệch tầm nhìn."
      },
      {
        "key": "B",
        "text": "Combine a top-down leadership vision with bottom-up ideas and feedback from employees.",
        "text_vi": "Kết hợp tầm nhìn từ lãnh đạo (top-down) với ý tưởng và phản hồi từ nhân viên (bottom-up)."
      },
      {
        "key": "C",
        "text": "Rely only on bottom-up experiments, letting each team run its own projects with no shared direction.",
        "text_vi": "Chỉ dựa vào thử nghiệm từ cơ sở, để mỗi đội tự chạy dự án mà không có định hướng chung."
      },
      {
        "key": "D",
        "text": "Wait until a model exists that makes no mistakes, then roll out gen AI across the entire company.",
        "text_vi": "Chờ đến khi có mô hình không mắc lỗi nào, rồi triển khai gen AI trên toàn công ty."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "The recommended strategy blends leadership vision with employee ideas and feedback. Either direction alone misses either alignment or practical insight.",
    "explanation_vi": "Chiến lược được khuyến nghị kết hợp tầm nhìn lãnh đạo với ý tưởng và phản hồi của nhân viên. Chỉ một hướng sẽ thiếu sự thống nhất hoặc thiếu hiểu biết thực tế.",
    "lessonId": "d4-t2",
    "objective": "4.1 Gen AI strategy"
  },
  {
    "id": 55,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "A hospitality company's guest app must respond instantly, work in hotels with weak connectivity and handle guest data privately. Which category of factors do these requirements represent?",
    "question_vi": "Ứng dụng khách của một công ty khách sạn phải phản hồi tức thì, hoạt động ở khách sạn có kết nối yếu và xử lý dữ liệu khách hàng riêng tư. Những yêu cầu này thuộc nhóm yếu tố nào?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Resources, which cover the people, money and time available for the initiative.",
        "text_vi": "Nguồn lực, bao gồm con người, tiền bạc và thời gian sẵn có cho sáng kiến."
      },
      {
        "key": "B",
        "text": "Change management, which covers training employees and supporting them as new tools are adopted.",
        "text_vi": "Quản lý thay đổi, bao gồm đào tạo nhân viên và hỗ trợ họ khi áp dụng công cụ mới."
      },
      {
        "key": "C",
        "text": "Measurement, which covers how the company defines and tracks key metrics for the initiative.",
        "text_vi": "Đo lường, bao gồm cách công ty xác định và theo dõi các chỉ số chính của sáng kiến."
      },
      {
        "key": "D",
        "text": "Business and technical needs, such as latency, connectivity and privacy.",
        "text_vi": "Các nhu cầu kinh doanh và kỹ thuật, chẳng hạn độ trễ, kết nối và quyền riêng tư."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Latency, connectivity, privacy, scale and customization are needs that shape which solution fits. Budget, expertise and time belong to resources instead.",
    "explanation_vi": "Độ trễ, kết nối, quyền riêng tư, quy mô và khả năng tùy biến là các nhu cầu quyết định giải pháp nào phù hợp. Ngân sách, chuyên môn và thời gian thuộc nhóm nguồn lực.",
    "lessonId": "d4-t2",
    "objective": "4.1 Factors that shape gen AI needs"
  },
  {
    "id": 56,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "A telecom company finished a gen AI pilot in customer support, and the board wants proof of value. What is the best way to show impact?",
    "question_vi": "Một công ty viễn thông vừa hoàn thành thí điểm gen AI trong hỗ trợ khách hàng, và hội đồng quản trị muốn có bằng chứng về giá trị. Cách tốt nhất để chứng minh tác động là gì?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Present one impressive live demo, since a single strong example proves the value across the whole company.",
        "text_vi": "Trình bày một buổi demo ấn tượng, vì một ví dụ mạnh chứng minh được giá trị trên toàn công ty."
      },
      {
        "key": "B",
        "text": "Define KPIs linked to business goals, such as time saved and customer satisfaction, then collect data and iterate.",
        "text_vi": "Xác định KPI gắn với mục tiêu kinh doanh, như thời gian tiết kiệm và mức hài lòng của khách hàng, rồi thu thập dữ liệu và cải tiến."
      },
      {
        "key": "C",
        "text": "Report how many prompts employees typed each week, because usage volume alone shows business results.",
        "text_vi": "Báo cáo số prompt nhân viên gõ mỗi tuần, vì lượng sử dụng tự nó cho thấy kết quả kinh doanh."
      },
      {
        "key": "D",
        "text": "Compare the size of the model with competitors' models, because a larger model means higher business value.",
        "text_vi": "So sánh kích thước mô hình với mô hình của đối thủ, vì mô hình lớn hơn nghĩa là giá trị kinh doanh cao hơn."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Impact is shown with metrics tied to business goals, such as ROI, time saved and CSAT, followed by iteration. A demo, raw usage counts or model size do not demonstrate business value.",
    "explanation_vi": "Tác động được chứng minh bằng chỉ số gắn với mục tiêu kinh doanh như ROI, thời gian tiết kiệm và CSAT, sau đó cải tiến. Demo, số lần sử dụng hay kích thước mô hình không chứng minh giá trị kinh doanh.",
    "lessonId": "d4-t3",
    "objective": "4.1 Integration and measuring impact"
  },
  {
    "id": 57,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "An executive asks what Google's Secure AI Framework (SAIF) is. Which answer is correct?",
    "question_vi": "Một giám đốc hỏi Secure AI Framework (SAIF) của Google là gì. Câu trả lời nào đúng?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "A foundation model that Google trains to detect bias and unfair outcomes in other companies' models.",
        "text_vi": "Một foundation model do Google huấn luyện để phát hiện thiên kiến và kết quả bất công trong mô hình của công ty khác."
      },
      {
        "key": "B",
        "text": "A network firewall product that blocks all traffic to AI endpoints until an administrator approves it.",
        "text_vi": "Một sản phẩm tường lửa mạng chặn mọi lưu lượng đến các endpoint AI cho đến khi quản trị viên phê duyệt."
      },
      {
        "key": "C",
        "text": "A framework for managing AI-specific security risks that builds on existing security foundations.",
        "text_vi": "Khung quản lý các rủi ro bảo mật đặc thù của AI, xây dựng trên nền tảng bảo mật hiện có."
      },
      {
        "key": "D",
        "text": "A dashboard that lists every cloud resource and ranks them by how much each one costs per month.",
        "text_vi": "Một bảng điều khiển liệt kê mọi tài nguyên đám mây và xếp hạng theo chi phí hằng tháng của từng tài nguyên."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "SAIF is a framework, not a model, firewall or dashboard, that helps organizations manage risks to AI systems such as prompt injection and data poisoning. Bias and explainability belong to responsible AI.",
    "explanation_vi": "SAIF là một khung chứ không phải mô hình, tường lửa hay bảng điều khiển, giúp tổ chức quản lý rủi ro với hệ thống AI như prompt injection và data poisoning. Thiên kiến và khả năng giải thích thuộc về AI có trách nhiệm.",
    "lessonId": "d4-t4",
    "objective": "4.2 Secure AI and SAIF"
  },
  {
    "id": 58,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "A healthcare company's CISO wants a single view of the security posture of its Google Cloud resources, including AI workloads, and wants to see vulnerabilities and misconfigurations. Which tool fits best?",
    "question_vi": "CISO của một công ty y tế muốn có một góc nhìn duy nhất về tình trạng bảo mật của tài nguyên Google Cloud, bao gồm khối lượng công việc AI, và muốn thấy các lỗ hổng và cấu hình sai. Công cụ nào phù hợp nhất?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Identity and Access Management (IAM), which controls who can access which resources but does not report posture.",
        "text_vi": "Identity and Access Management (IAM), kiểm soát ai được truy cập tài nguyên nào nhưng không báo cáo tình trạng bảo mật."
      },
      {
        "key": "B",
        "text": "Model Garden, which is a catalog of first-party, third-party and open models for teams to deploy.",
        "text_vi": "Model Garden, là danh mục mô hình của Google, bên thứ ba và mã nguồn mở để các đội triển khai."
      },
      {
        "key": "C",
        "text": "Security Command Center, which provides visibility into security posture.",
        "text_vi": "Security Command Center, cung cấp khả năng quan sát tình trạng bảo mật."
      },
      {
        "key": "D",
        "text": "Conversational Insights, which analyzes customer calls and chats to extract sentiment and themes.",
        "text_vi": "Conversational Insights, phân tích cuộc gọi và chat của khách hàng để rút ra cảm xúc và chủ đề."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Security Command Center gives visibility into security posture, while IAM controls who can access what. Swapping the two is a common mistake.",
    "explanation_vi": "Security Command Center cho khả năng quan sát tình trạng bảo mật, còn IAM kiểm soát ai được truy cập gì. Nhầm lẫn hai công cụ này là lỗi thường gặp.",
    "lessonId": "d4-t4",
    "objective": "4.2 Google Cloud security tools"
  },
  {
    "id": 59,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "What is the difference between anonymization and pseudonymization when protecting personal data?",
    "question_vi": "Sự khác biệt giữa ẩn danh hóa (anonymization) và giả danh hóa (pseudonymization) khi bảo vệ dữ liệu cá nhân là gì?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Anonymization can be reversed with a key, while pseudonymization permanently removes all identifiers.",
        "text_vi": "Ẩn danh hóa có thể đảo ngược bằng khóa, còn giả danh hóa loại bỏ vĩnh viễn mọi định danh."
      },
      {
        "key": "B",
        "text": "Both are identical terms, because each one simply encrypts a database so only admins can open it.",
        "text_vi": "Hai thuật ngữ giống hệt nhau, vì cả hai chỉ mã hóa cơ sở dữ liệu để chỉ quản trị viên mở được."
      },
      {
        "key": "C",
        "text": "Anonymization applies only to images and video, while pseudonymization applies only to text records.",
        "text_vi": "Ẩn danh hóa chỉ áp dụng cho ảnh và video, còn giả danh hóa chỉ áp dụng cho bản ghi văn bản."
      },
      {
        "key": "D",
        "text": "Anonymization cannot be reversed to re-identify people, while pseudonymization can be reversed with a key.",
        "text_vi": "Ẩn danh hóa không thể đảo ngược để nhận diện lại cá nhân, còn giả danh hóa có thể đảo ngược bằng khóa."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Anonymization is irreversible, while pseudonymization replaces identifiers in a way that a key can reverse. The choice depends on whether re-identification must remain possible.",
    "explanation_vi": "Ẩn danh hóa là không thể đảo ngược, còn giả danh hóa thay thế định danh theo cách có thể đảo ngược bằng khóa. Lựa chọn tùy thuộc việc có cần giữ khả năng nhận diện lại hay không.",
    "lessonId": "d4-t5",
    "objective": "4.3 Responsible AI: privacy"
  },
  {
    "id": 60,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "A bank's gen AI tool that screens job applicants is found to favor certain groups of candidates. Which response best reflects responsible AI practice?",
    "question_vi": "Công cụ gen AI sàng lọc ứng viên của một ngân hàng bị phát hiện ưu ái một số nhóm ứng viên. Phản ứng nào phản ánh tốt nhất thực hành AI có trách nhiệm?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Use diverse, representative data, audit regularly for bias, and keep human oversight and accountability.",
        "text_vi": "Dùng dữ liệu đa dạng, mang tính đại diện, kiểm toán thiên kiến định kỳ, đồng thời giữ giám sát và trách nhiệm giải trình của con người."
      },
      {
        "key": "B",
        "text": "Keep the tool running for speed and fix any problems only after applicants file formal complaints.",
        "text_vi": "Giữ công cụ chạy vì tốc độ và chỉ sửa vấn đề sau khi ứng viên nộp khiếu nại chính thức."
      },
      {
        "key": "C",
        "text": "Replace it with a black-box model whose decisions nobody can explain, so no one can be blamed for them.",
        "text_vi": "Thay bằng mô hình hộp đen mà không ai giải thích được quyết định, để không ai bị quy trách nhiệm."
      },
      {
        "key": "D",
        "text": "Remove human reviewers from the process, because automated decisions are always more consistent.",
        "text_vi": "Loại bỏ người rà soát khỏi quy trình, vì quyết định tự động nhất quán hơn."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Responsible AI uses diverse data, regular bias audits and human oversight, and it covers the whole lifecycle. Prioritizing speed, hiding decisions or removing reviewers increases harm.",
    "explanation_vi": "AI có trách nhiệm dùng dữ liệu đa dạng, kiểm toán thiên kiến định kỳ và giám sát của con người, bao quát toàn vòng đời. Ưu tiên tốc độ, che giấu quyết định hay bỏ người rà soát làm tăng tác hại.",
    "lessonId": "d4-t5",
    "objective": "4.3 Responsible AI: bias and fairness"
  }
];
