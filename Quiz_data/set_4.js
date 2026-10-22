window.QUIZ_DATA_SET_4 = [
  {
    "id": 1,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "A retail company already uses a model that predicts which customers are likely to cancel their subscription. Marketing now wants a tool that writes a personalized retention email for every customer. Which statement best describes how the new tool differs from the existing model?",
    "question_vi": "Một công ty bán lẻ đã dùng một mô hình dự đoán khách hàng nào có khả năng hủy gói đăng ký. Giờ bộ phận marketing muốn một công cụ viết email giữ chân được cá nhân hóa cho từng khách hàng. Phát biểu nào mô tả đúng nhất sự khác biệt giữa công cụ mới và mô hình hiện có?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "The new tool only sorts customers into groups, while the existing model writes the email content for each one, and the new tool cannot create any original content.",
        "text_vi": "Công cụ mới chỉ phân nhóm khách hàng, còn mô hình hiện có viết nội dung email cho từng người, và công cụ mới không thể tạo bất kỳ nội dung gốc nào."
      },
      {
        "key": "B",
        "text": "The new tool needs no data of any kind, while the existing model learns from historical customer records.",
        "text_vi": "Công cụ mới không cần bất kỳ dữ liệu nào, còn mô hình hiện có học từ hồ sơ khách hàng trong quá khứ."
      },
      {
        "key": "C",
        "text": "The new tool uses gen AI to create original text, while the existing model analyzes past data to predict an outcome.",
        "text_vi": "Công cụ mới dùng gen AI để tạo văn bản mới, còn mô hình hiện có phân tích dữ liệu quá khứ để dự đoán một kết quả."
      },
      {
        "key": "D",
        "text": "Both tools do the same job, but the new one simply runs faster on larger servers than the old one.",
        "text_vi": "Hai công cụ làm cùng một việc, chỉ khác là công cụ mới chạy nhanh hơn trên máy chủ lớn hơn."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Predictive ML analyzes existing data to classify or forecast, such as who might churn. Generative AI produces new content, here a tailored email. The tempting distractors confuse grouping or speed with the real difference, which is creating versus predicting.",
    "explanation_vi": "ML dự đoán phân tích dữ liệu có sẵn để phân loại hoặc dự báo, ví dụ ai có thể rời bỏ. Generative AI tạo ra nội dung mới, ở đây là email được cá nhân hóa. Các phương án nhiễu nhầm lẫn giữa phân nhóm hay tốc độ với điểm khác biệt thực sự là tạo nội dung so với dự đoán.",
    "lessonId": "d1-t1",
    "objective": "1.1 Core gen AI concepts and use cases"
  },
  {
    "id": 2,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "A CTO assumes the company must train a separate model from scratch for every task: summarizing contracts, drafting emails and translating documents. Which statement about foundation models best corrects this assumption?",
    "question_vi": "Một CTO cho rằng công ty phải huấn luyện từ đầu một mô hình riêng cho từng tác vụ: tóm tắt hợp đồng, soạn email và dịch tài liệu. Phát biểu nào về foundation model sửa đúng giả định này nhất?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "A foundation model can only do the one task it was first trained on, so a separate model is always needed.",
        "text_vi": "Foundation model chỉ làm được đúng một tác vụ mà nó được huấn luyện ban đầu, nên luôn cần một mô hình riêng."
      },
      {
        "key": "B",
        "text": "A foundation model is trained once on broad data, then prompted or adapted for many tasks like these.",
        "text_vi": "Foundation model được huấn luyện một lần trên dữ liệu rộng, rồi được dùng prompt hoặc điều chỉnh cho nhiều tác vụ như vậy."
      },
      {
        "key": "C",
        "text": "A foundation model must be built in-house by each company, since vendors cannot offer one as a ready service.",
        "text_vi": "Mỗi công ty phải tự xây foundation model, vì nhà cung cấp không thể cung cấp sẵn dưới dạng dịch vụ."
      },
      {
        "key": "D",
        "text": "A foundation model works only on structured spreadsheet data and cannot handle text-based business tasks.",
        "text_vi": "Foundation model chỉ hoạt động với dữ liệu bảng có cấu trúc và không xử lý được các tác vụ kinh doanh dạng văn bản."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Foundation models are trained once on massive, diverse data and then reused or adapted for many tasks, so one model can summarize, draft and translate. Building a new model per task, or per company, is the traditional ML pattern that foundation models were designed to avoid.",
    "explanation_vi": "Foundation model được huấn luyện một lần trên dữ liệu khổng lồ, đa dạng rồi tái sử dụng hoặc điều chỉnh cho nhiều tác vụ, nên một mô hình có thể tóm tắt, soạn thảo và dịch. Xây mô hình mới cho từng tác vụ hay từng công ty là cách làm ML truyền thống mà foundation model sinh ra để tránh.",
    "lessonId": "d1-t1",
    "objective": "1.1 Core gen AI concepts and use cases"
  },
  {
    "id": 3,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "Telecom support agents spend several minutes before each call reading long customer case histories. Which gen AI capability most directly reduces this effort?",
    "question_vi": "Nhân viên hỗ trợ của một công ty viễn thông mất vài phút trước mỗi cuộc gọi để đọc lịch sử xử lý dài của khách hàng. Khả năng gen AI nào giảm trực tiếp nhất công sức này?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Generating promotional images that show the newest data plans to customers on the call.",
        "text_vi": "Tạo hình ảnh quảng cáo giới thiệu các gói dữ liệu mới nhất cho khách hàng trong cuộc gọi."
      },
      {
        "key": "B",
        "text": "Training a brand-new model from scratch on labeled network outage records from last year.",
        "text_vi": "Huấn luyện một mô hình hoàn toàn mới từ đầu trên các bản ghi sự cố mạng đã gán nhãn của năm ngoái."
      },
      {
        "key": "C",
        "text": "Summarizing the long history into a short briefing the agent can read in seconds.",
        "text_vi": "Tóm tắt lịch sử dài thành bản tóm lược ngắn mà nhân viên đọc được trong vài giây."
      },
      {
        "key": "D",
        "text": "Replacing the customer records database with faster storage hardware in the data center.",
        "text_vi": "Thay cơ sở dữ liệu hồ sơ khách hàng bằng phần cứng lưu trữ nhanh hơn trong trung tâm dữ liệu."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Gen AI can summarize, condensing long information into concise briefs, which is exactly what saves the agent's reading time. Creating images, retraining models or faster storage do not address the reading bottleneck.",
    "explanation_vi": "Gen AI có thể tóm tắt, cô đọng thông tin dài thành bản ngắn gọn, đúng với việc giúp nhân viên đỡ mất thời gian đọc. Tạo hình ảnh, huấn luyện lại mô hình hay lưu trữ nhanh hơn không giải quyết nút thắt là việc đọc.",
    "lessonId": "d1-t1",
    "objective": "1.1 Core gen AI concepts and use cases"
  },
  {
    "id": 4,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "A bank has years of past transactions, each marked by investigators as 'fraud' or 'legitimate'. It wants a model that flags new suspicious transactions. Which machine learning approach fits best?",
    "question_vi": "Một ngân hàng có nhiều năm giao dịch trong quá khứ, mỗi giao dịch được điều tra viên đánh dấu là 'gian lận' hoặc 'hợp lệ'. Ngân hàng muốn một mô hình gắn cờ các giao dịch đáng ngờ mới. Phương pháp machine learning nào phù hợp nhất?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Unsupervised learning, because the model should discover hidden groups without any known answers.",
        "text_vi": "Unsupervised learning, vì mô hình nên tự khám phá các nhóm ẩn mà không có đáp án biết trước."
      },
      {
        "key": "B",
        "text": "Reinforcement learning, because the model should earn rewards by taking actions in a live system.",
        "text_vi": "Reinforcement learning, vì mô hình nên nhận phần thưởng khi hành động trong một hệ thống thực."
      },
      {
        "key": "C",
        "text": "Supervised learning, because the labeled history shows the model the correct answer for each example.",
        "text_vi": "Supervised learning, vì lịch sử đã gán nhãn cho mô hình thấy đáp án đúng của từng ví dụ."
      },
      {
        "key": "D",
        "text": "Zero-shot prompting, because no historical examples are needed for any kind of business task.",
        "text_vi": "Zero-shot prompting, vì không cần ví dụ lịch sử nào cho bất kỳ loại tác vụ kinh doanh nào."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Supervised learning trains on labeled data to predict outputs for new inputs, which matches transactions already tagged fraud or legitimate. Unsupervised learning is the tempting choice but is meant for finding patterns when no labels exist.",
    "explanation_vi": "Supervised learning huấn luyện trên dữ liệu có nhãn để dự đoán đầu ra cho đầu vào mới, khớp với các giao dịch đã gắn nhãn gian lận hoặc hợp lệ. Unsupervised learning dễ gây nhầm nhưng dùng để tìm mẫu khi không có nhãn.",
    "lessonId": "d1-t2",
    "objective": "1.1 ML approaches and the ML lifecycle"
  },
  {
    "id": 5,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "A logistics company is testing warehouse robots that improve their routes over time. A route that saves time earns a reward, and a collision counts as a penalty. Which learning approach is this?",
    "question_vi": "Một công ty logistics đang thử nghiệm robot kho hàng cải thiện lộ trình theo thời gian. Lộ trình tiết kiệm thời gian được thưởng, còn va chạm bị phạt. Đây là phương pháp học nào?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Supervised learning, where every route is first labeled by a human with the one correct answer.",
        "text_vi": "Supervised learning, trong đó mỗi lộ trình được con người gán nhãn đáp án đúng duy nhất từ trước."
      },
      {
        "key": "B",
        "text": "Unsupervised learning, where the system groups similar routes without receiving any feedback signal.",
        "text_vi": "Unsupervised learning, trong đó hệ thống nhóm các lộ trình giống nhau mà không nhận tín hiệu phản hồi nào."
      },
      {
        "key": "C",
        "text": "Transfer learning, where a finished model is copied directly into a second warehouse unchanged.",
        "text_vi": "Transfer learning, trong đó một mô hình hoàn chỉnh được sao chép nguyên vẹn sang kho hàng thứ hai."
      },
      {
        "key": "D",
        "text": "Reinforcement learning, where a system learns through feedback to maximize rewards and minimize penalties.",
        "text_vi": "Reinforcement learning, trong đó hệ thống học qua phản hồi để tối đa hóa phần thưởng và giảm thiểu hình phạt."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Learning from rewards and penalties through interaction is the defining trait of reinforcement learning. Supervised learning needs labeled correct answers, and unsupervised learning has no feedback signal.",
    "explanation_vi": "Học từ phần thưởng và hình phạt thông qua tương tác là đặc trưng của reinforcement learning. Supervised learning cần đáp án đúng đã gán nhãn, còn unsupervised learning không có tín hiệu phản hồi.",
    "lessonId": "d1-t2",
    "objective": "1.1 ML approaches and the ML lifecycle"
  },
  {
    "id": 6,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "In the machine learning lifecycle, which stage makes a trained model available so that applications and users can start using it?",
    "question_vi": "Trong vòng đời machine learning, giai đoạn nào đưa mô hình đã huấn luyện vào trạng thái sẵn sàng để ứng dụng và người dùng bắt đầu sử dụng?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Data preparation, which cleans and transforms raw data into a usable format.",
        "text_vi": "Data preparation, giai đoạn làm sạch và biến đổi dữ liệu thô thành định dạng dùng được."
      },
      {
        "key": "B",
        "text": "Model deployment, which makes the trained model available for use.",
        "text_vi": "Model deployment, giai đoạn đưa mô hình đã huấn luyện vào sử dụng."
      },
      {
        "key": "C",
        "text": "Model training, which creates the model by learning patterns from the data.",
        "text_vi": "Model training, giai đoạn tạo mô hình bằng cách học các mẫu từ dữ liệu."
      },
      {
        "key": "D",
        "text": "Model management, which maintains the model over time after it is released.",
        "text_vi": "Model management, giai đoạn duy trì mô hình theo thời gian sau khi phát hành."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "The lifecycle runs ingestion, preparation, training, deployment and management. Deployment is the step that puts the trained model into service; management comes afterward to keep it healthy.",
    "explanation_vi": "Vòng đời gồm thu thập, chuẩn bị dữ liệu, huấn luyện, triển khai và quản lý. Triển khai là bước đưa mô hình vào hoạt động; quản lý diễn ra sau đó để duy trì mô hình.",
    "lessonId": "d1-t2",
    "objective": "1.1 ML approaches and the ML lifecycle"
  },
  {
    "id": 7,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "A travel company wants one model to analyze recorded customer calls and photos that guests upload with their reviews. Which factor should it check first when comparing foundation models?",
    "question_vi": "Một công ty du lịch muốn dùng một mô hình để phân tích các cuộc gọi của khách hàng đã ghi âm và ảnh khách đăng kèm đánh giá. Khi so sánh các foundation model, công ty nên kiểm tra yếu tố nào trước tiên?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Whether the model vendor has the most recognizable brand name in the technology market.",
        "text_vi": "Nhà cung cấp mô hình có thương hiệu dễ nhận biết nhất trên thị trường công nghệ hay không."
      },
      {
        "key": "B",
        "text": "Whether the model supports the audio and image inputs that the use case requires.",
        "text_vi": "Mô hình có hỗ trợ đầu vào âm thanh và hình ảnh mà use case yêu cầu hay không."
      },
      {
        "key": "C",
        "text": "Whether the model can be trained on spreadsheets in the shortest possible amount of time.",
        "text_vi": "Mô hình có thể được huấn luyện trên bảng tính trong thời gian ngắn nhất có thể hay không."
      },
      {
        "key": "D",
        "text": "Whether the model has the highest number of publicly announced users across all industries.",
        "text_vi": "Mô hình có số người dùng được công bố công khai cao nhất trong mọi ngành hay không."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Modality is a core selection factor: the model's input and output types must match the data in the use case, here audio and images. Brand recognition and user counts do not show the model can handle the data.",
    "explanation_vi": "Modality là yếu tố chọn mô hình cốt lõi: loại đầu vào và đầu ra phải khớp với dữ liệu của use case, ở đây là âm thanh và hình ảnh. Độ nổi tiếng hay số người dùng không cho thấy mô hình xử lý được dữ liệu đó.",
    "lessonId": "d1-t3",
    "objective": "1.1 Choosing a foundation model"
  },
  {
    "id": 8,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "What does a larger context window let a business do with a gen AI model?",
    "question_vi": "Context window lớn hơn cho phép doanh nghiệp làm gì với một mô hình gen AI?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Make the model's answers more creative and varied from one request to the next.",
        "text_vi": "Làm câu trả lời của mô hình sáng tạo và đa dạng hơn giữa các yêu cầu."
      },
      {
        "key": "B",
        "text": "Filter out harmful or inappropriate content before it is shown to the end user.",
        "text_vi": "Lọc nội dung có hại hoặc không phù hợp trước khi hiển thị cho người dùng cuối."
      },
      {
        "key": "C",
        "text": "Guarantee that the model will have knowledge of events that happened last week.",
        "text_vi": "Đảm bảo mô hình biết các sự kiện xảy ra từ tuần trước."
      },
      {
        "key": "D",
        "text": "Give the model more text, such as a long contract, to consider within a single request.",
        "text_vi": "Đưa cho mô hình nhiều văn bản hơn, chẳng hạn một hợp đồng dài, để xem xét trong một yêu cầu."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "The context window is the amount of text the model can consider at once, so a larger one suits long documents. It does not change creativity, safety filtering or the model's knowledge cutoff, and bigger windows can raise cost.",
    "explanation_vi": "Context window là lượng văn bản mô hình có thể xem xét cùng lúc, nên cửa sổ lớn phù hợp với tài liệu dài. Nó không thay đổi mức sáng tạo, bộ lọc an toàn hay knowledge cutoff, và cửa sổ lớn hơn có thể làm tăng chi phí.",
    "lessonId": "d1-t3",
    "objective": "1.1 Choosing a foundation model"
  },
  {
    "id": 9,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "A SaaS startup is adding a feature that summarizes short support tickets. The most capable model costs more and responds more slowly than smaller options. What is the BEST approach?",
    "question_vi": "Một startup SaaS đang thêm tính năng tóm tắt các ticket hỗ trợ ngắn. Mô hình mạnh nhất tốn kém hơn và phản hồi chậm hơn các lựa chọn nhỏ hơn. Cách tiếp cận TỐT NHẤT là gì?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Choose the largest model available, because output quality is the only factor in model selection.",
        "text_vi": "Chọn mô hình lớn nhất hiện có, vì chất lượng đầu ra là yếu tố duy nhất khi chọn mô hình."
      },
      {
        "key": "B",
        "text": "Test a smaller, faster model on real tickets and adopt it if quality meets the need at lower cost.",
        "text_vi": "Thử một mô hình nhỏ, nhanh hơn trên ticket thực tế và chọn nó nếu chất lượng đáp ứng nhu cầu với chi phí thấp hơn."
      },
      {
        "key": "C",
        "text": "Wait until the team can build and train its own model from scratch before launching the feature.",
        "text_vi": "Chờ đến khi nhóm tự xây dựng và huấn luyện mô hình riêng từ đầu rồi mới ra mắt tính năng."
      },
      {
        "key": "D",
        "text": "Pick the cheapest model without testing it, since summarizing tickets is always a trivial task.",
        "text_vi": "Chọn mô hình rẻ nhất mà không thử nghiệm, vì tóm tắt ticket lúc nào cũng là việc đơn giản."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Model choice means balancing performance against cost, speed and fit. Testing a smaller model on real data shows whether it is good enough, avoiding both overspending and unverified assumptions.",
    "explanation_vi": "Chọn mô hình là cân bằng giữa hiệu năng với chi phí, tốc độ và mức độ phù hợp. Thử mô hình nhỏ trên dữ liệu thực cho biết nó có đủ tốt không, tránh vừa chi quá tay vừa dựa trên giả định chưa kiểm chứng.",
    "lessonId": "d1-t3",
    "objective": "1.1 Choosing a foundation model"
  },
  {
    "id": 10,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "A retailer's product data is incomplete in some regions, uses inconsistent formats across systems, and sits in files that its AI tools cannot read. Which TWO actions would most improve the quality and accessibility of this data for gen AI? (Select TWO.)",
    "question_vi": "Dữ liệu sản phẩm của một nhà bán lẻ thiếu thông tin ở một số khu vực, dùng định dạng không nhất quán giữa các hệ thống và nằm trong các tệp mà công cụ AI không đọc được. Hai hành động nào cải thiện nhiều nhất chất lượng và khả năng tiếp cận của dữ liệu này cho gen AI? (Chọn HAI.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "Increase the model's temperature so it can compensate for the missing values.",
        "text_vi": "Tăng temperature của mô hình để nó bù đắp cho các giá trị bị thiếu."
      },
      {
        "key": "B",
        "text": "Fill the gaps and standardize the records so they are complete and consistent.",
        "text_vi": "Điền các chỗ thiếu và chuẩn hóa bản ghi để dữ liệu đầy đủ và nhất quán."
      },
      {
        "key": "C",
        "text": "Add large volumes of unrelated public data, whether or not it is relevant.",
        "text_vi": "Thêm lượng lớn dữ liệu công khai không liên quan, bất kể có phù hợp hay không."
      },
      {
        "key": "D",
        "text": "Make the data available in a standard format that the AI tools can read.",
        "text_vi": "Đưa dữ liệu về một định dạng chuẩn để các công cụ AI đọc được."
      },
      {
        "key": "E",
        "text": "Write longer prompts so the model learns to ignore the inconsistent records.",
        "text_vi": "Viết prompt dài hơn để mô hình học cách bỏ qua các bản ghi không nhất quán."
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "explanation": "Completeness and consistency are core data-quality traits, and data must also be accessible in a usable format. Temperature, extra irrelevant data and longer prompts cannot repair poor source data.",
    "explanation_vi": "Tính đầy đủ và nhất quán là đặc điểm cốt lõi của chất lượng dữ liệu, và dữ liệu cũng phải truy cập được ở định dạng dùng được. Temperature, dữ liệu thừa không liên quan hay prompt dài hơn không sửa được dữ liệu nguồn kém.",
    "lessonId": "d1-t4",
    "objective": "1.2 Data types, data quality and accessibility"
  },
  {
    "id": 11,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "Which of the following is an example of structured data?",
    "question_vi": "Mục nào sau đây là ví dụ về dữ liệu có cấu trúc (structured data)?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Scanned claim forms saved as image files in a shared folder.",
        "text_vi": "Các biểu mẫu yêu cầu bồi thường được quét và lưu thành tệp ảnh trong thư mục chung."
      },
      {
        "key": "B",
        "text": "Recorded customer service calls stored as audio files in cloud storage.",
        "text_vi": "Các cuộc gọi chăm sóc khách hàng được ghi âm và lưu thành tệp âm thanh trên cloud storage."
      },
      {
        "key": "C",
        "text": "Free-form emails exchanged between adjusters and policyholders over several months.",
        "text_vi": "Các email tự do trao đổi giữa nhân viên giám định và khách hàng trong nhiều tháng."
      },
      {
        "key": "D",
        "text": "Customer orders stored in the rows and columns of a relational database.",
        "text_vi": "Đơn hàng của khách được lưu trong các hàng và cột của một cơ sở dữ liệu quan hệ."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Structured data is organized and easy to search, typically in relational tables. Images, audio and free-form emails are unstructured and need more sophisticated analysis, which gen AI can help with.",
    "explanation_vi": "Dữ liệu có cấu trúc được tổ chức và dễ tìm kiếm, thường nằm trong bảng quan hệ. Hình ảnh, âm thanh và email tự do là dữ liệu phi cấu trúc, cần kỹ thuật phân tích phức tạp hơn, và gen AI có thể hỗ trợ việc này.",
    "lessonId": "d1-t4",
    "objective": "1.2 Data types, data quality and accessibility"
  },
  {
    "id": 12,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "What is the difference between labeled data and unlabeled data?",
    "question_vi": "Dữ liệu có nhãn (labeled data) khác dữ liệu chưa gán nhãn (unlabeled data) ở điểm nào?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Labeled data carries tags, such as a category or name, that show the correct answer; unlabeled data does not.",
        "text_vi": "Dữ liệu có nhãn đi kèm các thẻ, như danh mục hoặc tên, cho biết đáp án đúng; dữ liệu chưa gán nhãn thì không."
      },
      {
        "key": "B",
        "text": "Labeled data is always stored in databases, while unlabeled data is always stored in documents, so the two kinds of data must be kept in separate systems.",
        "text_vi": "Dữ liệu có nhãn luôn nằm trong cơ sở dữ liệu, còn dữ liệu chưa gán nhãn luôn nằm trong tài liệu nên hai loại dữ liệu phải được giữ trong các hệ thống riêng."
      },
      {
        "key": "C",
        "text": "Labeled data has been encrypted for security, while unlabeled data has been left unprotected.",
        "text_vi": "Dữ liệu có nhãn đã được mã hóa để bảo mật, còn dữ liệu chưa gán nhãn bị để không được bảo vệ."
      },
      {
        "key": "D",
        "text": "Labeled data comes only from customers, while unlabeled data comes only from public websites.",
        "text_vi": "Dữ liệu có nhãn chỉ đến từ khách hàng, còn dữ liệu chưa gán nhãn chỉ đến từ website công khai."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Tags such as a name, type or category make data labeled, and supervised learning uses them as known answers. Unlabeled data is raw and untagged, which is what foundation models are mostly trained on.",
    "explanation_vi": "Các thẻ như tên, loại hay danh mục làm dữ liệu trở thành có nhãn, và supervised learning dùng chúng làm đáp án biết trước. Dữ liệu chưa gán nhãn là dữ liệu thô chưa gắn thẻ, loại dữ liệu mà foundation model chủ yếu được huấn luyện trên đó.",
    "lessonId": "d1-t4",
    "objective": "1.2 Data types, data quality and accessibility"
  },
  {
    "id": 13,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "Which layer of the gen AI landscape includes the GPUs, TPUs and servers used to train and run models?",
    "question_vi": "Tầng nào của hệ sinh thái gen AI bao gồm GPU, TPU và máy chủ dùng để huấn luyện và chạy mô hình?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Platform, which provides APIs, data management and model deployment tools.",
        "text_vi": "Platform, tầng cung cấp API, quản lý dữ liệu và công cụ triển khai mô hình."
      },
      {
        "key": "B",
        "text": "Agents, which pursue goals by using the tools that are available to them.",
        "text_vi": "Agents, tầng theo đuổi mục tiêu bằng cách dùng các công cụ sẵn có."
      },
      {
        "key": "C",
        "text": "Applications, which are the user-facing part where people interact with AI.",
        "text_vi": "Applications, tầng hướng tới người dùng nơi mọi người tương tác với AI."
      },
      {
        "key": "D",
        "text": "Infrastructure, which provides the core computing resources for gen AI.",
        "text_vi": "Infrastructure, tầng cung cấp tài nguyên tính toán cốt lõi cho gen AI."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Infrastructure is the layer of physical hardware such as servers, GPUs and TPUs plus the software needed to store and run models. Platforms sit above it and add APIs and deployment tools.",
    "explanation_vi": "Infrastructure là tầng phần cứng vật lý như máy chủ, GPU, TPU cùng phần mềm cần thiết để lưu trữ và chạy mô hình. Platform nằm phía trên và bổ sung API cùng công cụ triển khai.",
    "lessonId": "d1-t5",
    "objective": "1.3 Layers of the gen AI landscape"
  },
  {
    "id": 14,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "A manufacturer wants a managed environment with APIs, data management and tools to deploy models, so its developers do not have to manage servers. Which layer of the gen AI landscape does this describe?",
    "question_vi": "Một nhà sản xuất muốn có một môi trường được quản lý với API, quản lý dữ liệu và công cụ triển khai mô hình để lập trình viên không phải tự quản lý máy chủ. Mô tả này ứng với tầng nào của hệ sinh thái gen AI?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "The model layer, which is the trained algorithm that generates content from learned patterns.",
        "text_vi": "Tầng model, là thuật toán đã huấn luyện tạo nội dung từ các mẫu đã học."
      },
      {
        "key": "B",
        "text": "The application layer, which is the screen and interface that end users see and use daily.",
        "text_vi": "Tầng application, là màn hình và giao diện mà người dùng cuối nhìn thấy và dùng hằng ngày."
      },
      {
        "key": "C",
        "text": "The infrastructure layer, which is the physical hardware that sits inside the data center.",
        "text_vi": "Tầng infrastructure, là phần cứng vật lý đặt bên trong trung tâm dữ liệu."
      },
      {
        "key": "D",
        "text": "The platform layer, which bridges models and agents while simplifying infrastructure management.",
        "text_vi": "Tầng platform, kết nối mô hình với agent đồng thời đơn giản hóa việc quản lý hạ tầng."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "The platform layer offers APIs, data management and deployment tools and hides infrastructure complexity, such as Agent Platform on Google Cloud. Infrastructure is the raw hardware beneath it.",
    "explanation_vi": "Tầng platform cung cấp API, quản lý dữ liệu và công cụ triển khai, đồng thời che giấu độ phức tạp của hạ tầng, ví dụ Agent Platform trên Google Cloud. Infrastructure là phần cứng thô nằm bên dưới.",
    "lessonId": "d1-t5",
    "objective": "1.3 Layers of the gen AI landscape"
  },
  {
    "id": 15,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "A university builds a student assistant that, given the goal 'help me enroll', decides which tools to call, such as the course catalog and the advising calendar, and then acts on the results. Which layer does this software represent?",
    "question_vi": "Một trường đại học xây dựng trợ lý cho sinh viên, với mục tiêu 'giúp tôi đăng ký học', trợ lý tự quyết định gọi những công cụ nào, như danh mục khóa học và lịch cố vấn, rồi hành động dựa trên kết quả. Phần mềm này thuộc tầng nào?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Models, the trained algorithms that learn patterns from large amounts of data.",
        "text_vi": "Models, các thuật toán đã huấn luyện học các mẫu từ lượng lớn dữ liệu."
      },
      {
        "key": "B",
        "text": "Infrastructure, the servers and chips that provide the raw computing power.",
        "text_vi": "Infrastructure, máy chủ và chip cung cấp sức mạnh tính toán thô."
      },
      {
        "key": "C",
        "text": "Agents, software that works toward a goal using the tools available to it.",
        "text_vi": "Agents, phần mềm hướng tới một mục tiêu bằng cách dùng các công cụ sẵn có."
      },
      {
        "key": "D",
        "text": "Platforms, the managed tools that offer APIs and model deployment capabilities.",
        "text_vi": "Platforms, các công cụ được quản lý cung cấp API và khả năng triển khai mô hình."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "An agent observes, reasons and acts toward a goal using tools. The model is its brain, and the platform and infrastructure only support it.",
    "explanation_vi": "Agent quan sát, suy luận và hành động hướng tới mục tiêu bằng công cụ. Mô hình chỉ là bộ não của nó, còn platform và infrastructure chỉ đóng vai trò hỗ trợ.",
    "lessonId": "d1-t5",
    "objective": "1.3 Layers of the gen AI landscape"
  },
  {
    "id": 16,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "A media studio wants to turn written scene descriptions and still concept art into short draft video clips for client pitches. Which Google model fits best?",
    "question_vi": "Một hãng phim muốn biến mô tả cảnh viết tay và ảnh concept tĩnh thành các đoạn video nháp ngắn để thuyết trình với khách hàng. Mô hình nào của Google phù hợp nhất?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Imagen, which generates high-quality still images from textual descriptions.",
        "text_vi": "Imagen, mô hình tạo ảnh tĩnh chất lượng cao từ mô tả văn bản."
      },
      {
        "key": "B",
        "text": "Veo, which generates video from text descriptions or still images.",
        "text_vi": "Veo, mô hình tạo video từ mô tả văn bản hoặc ảnh tĩnh."
      },
      {
        "key": "C",
        "text": "Gemma, which offers open, customizable solutions for local deployments.",
        "text_vi": "Gemma, mô hình mở có thể tùy chỉnh cho các triển khai cục bộ."
      },
      {
        "key": "D",
        "text": "Gemini Nano, which is a compact model designed to run on devices.",
        "text_vi": "Gemini Nano, mô hình nhỏ gọn được thiết kế để chạy trên thiết bị."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Veo creates video content from text or still images. Imagen is the tempting distractor, but it produces still images rather than video.",
    "explanation_vi": "Veo tạo nội dung video từ văn bản hoặc ảnh tĩnh. Imagen là phương án dễ nhầm, nhưng nó chỉ tạo ảnh tĩnh chứ không tạo video.",
    "lessonId": "d1-t6",
    "objective": "1.4 Google's foundation models"
  },
  {
    "id": 17,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "A healthcare startup wants an open model its developers can run in their own environment and customize for a specialized application, keeping patient data local. Which Google model family fits?",
    "question_vi": "Một startup y tế muốn một mô hình mở mà lập trình viên có thể chạy trong môi trường của chính họ và tùy chỉnh cho một ứng dụng chuyên biệt, giữ dữ liệu bệnh nhân ở nội bộ. Họ nên chọn dòng mô hình nào của Google?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Gemma, which offers customizable solutions for local deployments and specialized applications.",
        "text_vi": "Gemma, dòng mô hình có thể tùy chỉnh cho triển khai cục bộ và ứng dụng chuyên biệt."
      },
      {
        "key": "B",
        "text": "Veo, which is built to generate video content from text descriptions or still images.",
        "text_vi": "Veo, được xây dựng để tạo nội dung video từ mô tả văn bản hoặc ảnh tĩnh."
      },
      {
        "key": "C",
        "text": "Imagen, which is a text-to-image diffusion model for creating high-quality pictures, and it cannot be customized for specialized applications.",
        "text_vi": "Imagen, mô hình diffusion text-to-image để tạo hình ảnh chất lượng cao, và không thể tùy chỉnh cho các ứng dụng chuyên biệt."
      },
      {
        "key": "D",
        "text": "The Gemini app, which is Google's chatbot rather than a model teams run themselves.",
        "text_vi": "Ứng dụng Gemini, là chatbot của Google chứ không phải mô hình để các nhóm tự chạy."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Gemma is Google's open model family for developers who want customizable, local or specialized deployments. Veo and Imagen are media-generation models, and the Gemini app is a hosted chatbot.",
    "explanation_vi": "Gemma là dòng mô hình mở của Google cho lập trình viên cần triển khai cục bộ, tùy chỉnh hoặc chuyên biệt. Veo và Imagen là mô hình tạo nội dung đa phương tiện, còn ứng dụng Gemini là chatbot được lưu trữ sẵn.",
    "lessonId": "d1-t6",
    "objective": "1.4 Google's foundation models"
  },
  {
    "id": 18,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "Which pairing of Google model and main capability is correct?",
    "question_vi": "Cặp ghép mô hình của Google với khả năng chính nào dưới đây là đúng?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Imagen generates high-quality images from text descriptions.",
        "text_vi": "Imagen tạo hình ảnh chất lượng cao từ mô tả văn bản."
      },
      {
        "key": "B",
        "text": "Veo answers customer questions in a text-only chat window.",
        "text_vi": "Veo trả lời câu hỏi của khách hàng trong cửa sổ chat chỉ có văn bản."
      },
      {
        "key": "C",
        "text": "Gemma is available only as a feature inside Google Workspace apps.",
        "text_vi": "Gemma chỉ có sẵn dưới dạng một tính năng bên trong các ứng dụng Google Workspace."
      },
      {
        "key": "D",
        "text": "Gemini is limited to text and cannot process images or audio input.",
        "text_vi": "Gemini chỉ giới hạn ở văn bản và không xử lý được đầu vào hình ảnh hay âm thanh."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Imagen is a text-to-image diffusion model. Veo generates video, Gemma is an open model family for developers, and Gemini is natively multimodal across text, images, audio and more.",
    "explanation_vi": "Imagen là mô hình diffusion text-to-image. Veo tạo video, Gemma là dòng mô hình mở cho lập trình viên, còn Gemini vốn đa phương thức, xử lý văn bản, hình ảnh, âm thanh và hơn thế nữa.",
    "lessonId": "d1-t6",
    "objective": "1.4 Google's foundation models"
  },
  {
    "id": 19,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A bank's CIO is concerned about data privacy before adopting Google Cloud's gen AI services. Which statement best reflects Google Cloud's enterprise-ready approach?",
    "question_vi": "Giám đốc CNTT của một ngân hàng lo ngại về quyền riêng tư dữ liệu trước khi dùng các dịch vụ gen AI của Google Cloud. Phát biểu nào phản ánh đúng nhất cách tiếp cận sẵn sàng cho doanh nghiệp của Google Cloud?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Customer data is automatically shared with other customers to help improve their models, and customers have no way of opting out of that sharing.",
        "text_vi": "Dữ liệu khách hàng được tự động chia sẻ với các khách hàng khác để giúp cải thiện mô hình của họ, và khách hàng không có cách nào từ chối việc chia sẻ đó."
      },
      {
        "key": "B",
        "text": "Governance features are available only to customers who operate their own data centers.",
        "text_vi": "Các tính năng quản trị chỉ dành cho khách hàng tự vận hành trung tâm dữ liệu."
      },
      {
        "key": "C",
        "text": "Privacy is handled entirely by the customer, because the platform has no built-in controls.",
        "text_vi": "Quyền riêng tư hoàn toàn do khách hàng tự lo, vì nền tảng không có kiểm soát tích hợp."
      },
      {
        "key": "D",
        "text": "Customers keep control of their data through security, privacy and governance capabilities built into the platform.",
        "text_vi": "Khách hàng giữ quyền kiểm soát dữ liệu của mình nhờ các tính năng bảo mật, quyền riêng tư và quản trị tích hợp sẵn trong nền tảng."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Google Cloud positions its AI platform as enterprise-ready: responsible, secure, private, reliable and scalable, with customers keeping control of their data. The distractors describe the opposite of that promise.",
    "explanation_vi": "Google Cloud định vị nền tảng AI của mình là sẵn sàng cho doanh nghiệp: có trách nhiệm, bảo mật, riêng tư, đáng tin cậy và mở rộng được, trong đó khách hàng giữ quyền kiểm soát dữ liệu. Các phương án nhiễu mô tả điều ngược lại.",
    "lessonId": "d2-t1",
    "objective": "2.1 Google Cloud's strengths in gen AI"
  },
  {
    "id": 20,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "What is the main benefit of Google Cloud's open approach to gen AI?",
    "question_vi": "Lợi ích chính của cách tiếp cận mở của Google Cloud đối với gen AI là gì?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Customers are limited to a single Google-built model that cannot be changed or replaced, even when its pricing or technical limits no longer fit the business.",
        "text_vi": "Khách hàng bị giới hạn ở một mô hình duy nhất do Google xây dựng và không thể thay đổi hay thay thế, ngay cả khi giá hoặc giới hạn kỹ thuật không còn phù hợp với doanh nghiệp."
      },
      {
        "key": "B",
        "text": "Every organization must build its own foundation model before using any Google service.",
        "text_vi": "Mọi tổ chức phải tự xây foundation model của riêng mình trước khi dùng bất kỳ dịch vụ nào của Google."
      },
      {
        "key": "C",
        "text": "Gen AI features are offered only for consumer apps, with no options for enterprises.",
        "text_vi": "Các tính năng gen AI chỉ được cung cấp cho ứng dụng người tiêu dùng, không có tùy chọn cho doanh nghiệp."
      },
      {
        "key": "D",
        "text": "Flexibility and choice, because customers can use Google's models alongside third-party and open-source models.",
        "text_vi": "Sự linh hoạt và quyền lựa chọn, vì khách hàng có thể dùng mô hình của Google cùng với mô hình bên thứ ba và mã nguồn mở."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Google Cloud's open approach, visible in Model Garden, gives choice across first-party, third-party and open models. Lock-in to one model would be the opposite of open.",
    "explanation_vi": "Cách tiếp cận mở của Google Cloud, thể hiện qua Model Garden, mang lại quyền chọn giữa mô hình first-party, bên thứ ba và mã nguồn mở. Bị khóa vào một mô hình duy nhất là điều ngược với tính mở.",
    "lessonId": "d2-t1",
    "objective": "2.1 Google Cloud's strengths in gen AI"
  },
  {
    "id": 21,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "Which statement best describes the advantage of Google's comprehensive AI ecosystem?",
    "question_vi": "Phát biểu nào mô tả đúng nhất lợi thế của hệ sinh thái AI toàn diện của Google?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Each Google product needs a separate AI model that the customer must train before using it, before any employee is allowed to use it in daily work.",
        "text_vi": "Mỗi sản phẩm của Google cần một mô hình AI riêng mà khách hàng phải tự huấn luyện trước khi dùng, trước khi bất kỳ nhân viên nào được dùng nó trong công việc hằng ngày."
      },
      {
        "key": "B",
        "text": "Gen AI is built into products people already use, such as Workspace and Google Cloud services, which speeds adoption.",
        "text_vi": "Gen AI được tích hợp vào các sản phẩm mọi người đã dùng, như Workspace và dịch vụ Google Cloud, giúp việc áp dụng nhanh hơn."
      },
      {
        "key": "C",
        "text": "Gen AI features are limited to one standalone chatbot application that works on its own.",
        "text_vi": "Các tính năng gen AI chỉ giới hạn ở một ứng dụng chatbot độc lập hoạt động riêng lẻ."
      },
      {
        "key": "D",
        "text": "Employees must leave their everyday tools and work inside a dedicated separate AI lab.",
        "text_vi": "Nhân viên phải rời các công cụ hằng ngày và làm việc trong một phòng thí nghiệm AI riêng biệt."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Google integrates gen AI across its products and services, so teams get AI where they already work. That reduces friction compared with separate tools or models that must be trained first.",
    "explanation_vi": "Google tích hợp gen AI vào các sản phẩm và dịch vụ của mình, nên các nhóm có AI ngay trong công cụ họ đang dùng. Điều đó giảm ma sát so với các công cụ riêng hay mô hình phải huấn luyện trước.",
    "lessonId": "d2-t1",
    "objective": "2.1 Google Cloud's strengths in gen AI"
  },
  {
    "id": 22,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A media company trains and serves large models and wants hardware that Google designed specifically for AI workloads. Which should it consider?",
    "question_vi": "Một công ty truyền thông huấn luyện và vận hành các mô hình lớn, và muốn phần cứng do Google thiết kế riêng cho khối lượng công việc AI. Họ nên cân nhắc lựa chọn nào?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Cloud Storage buckets, which store files but do not provide AI computing power.",
        "text_vi": "Cloud Storage bucket, nơi lưu tệp nhưng không cung cấp sức mạnh tính toán AI."
      },
      {
        "key": "B",
        "text": "Standard office laptops, which employees already use for everyday productivity tasks.",
        "text_vi": "Laptop văn phòng thông thường mà nhân viên đã dùng cho các công việc hằng ngày."
      },
      {
        "key": "C",
        "text": "Cloud Functions, which run small pieces of event-driven code without managing servers.",
        "text_vi": "Cloud Functions, chạy các đoạn mã nhỏ theo sự kiện mà không cần quản lý máy chủ."
      },
      {
        "key": "D",
        "text": "Tensor Processing Units (TPUs), Google's custom-designed chips for AI workloads.",
        "text_vi": "Tensor Processing Units (TPU), chip do Google thiết kế riêng cho khối lượng công việc AI."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "TPUs are Google's custom-designed AI chips, part of its AI-optimized infrastructure alongside GPUs. Storage and serverless code services do not supply AI accelerator hardware.",
    "explanation_vi": "TPU là chip AI do Google thiết kế riêng, thuộc hạ tầng tối ưu cho AI của Google cùng với GPU. Các dịch vụ lưu trữ và mã serverless không cung cấp phần cứng tăng tốc AI.",
    "lessonId": "d2-t2",
    "objective": "2.1 AI-optimized infrastructure and edge AI"
  },
  {
    "id": 23,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A manufacturer wants AI to run on devices on the factory floor, where connectivity is weak and responses must be instant. What is the BEST approach?",
    "question_vi": "Một nhà sản xuất muốn AI chạy trên các thiết bị ở sàn nhà máy, nơi kết nối yếu và phản hồi phải tức thì. Cách tiếp cận TỐT NHẤT là gì?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Send every sensor reading to a large cloud-hosted model and wait for the reply each time, even though the connection may be slow or interrupted.",
        "text_vi": "Gửi mọi số đọc cảm biến lên một mô hình lớn trên cloud và chờ phản hồi mỗi lần, dù kết nối có thể chậm hoặc bị gián đoạn."
      },
      {
        "key": "B",
        "text": "Postpone all AI use until a permanent high-speed link is installed at every single device.",
        "text_vi": "Hoãn mọi việc dùng AI cho đến khi lắp được đường truyền tốc độ cao cố định tại từng thiết bị."
      },
      {
        "key": "C",
        "text": "Run a compact model on the device at the edge, for example Gemini Nano deployed with LiteRT, so it does not depend on the cloud.",
        "text_vi": "Chạy một mô hình nhỏ gọn ngay trên thiết bị ở edge, ví dụ Gemini Nano triển khai bằng LiteRT, để không phụ thuộc vào cloud."
      },
      {
        "key": "D",
        "text": "Save the readings locally and analyze them in a spreadsheet at the end of each month.",
        "text_vi": "Lưu số đọc tại chỗ và phân tích bằng bảng tính vào cuối mỗi tháng."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Edge AI runs models close to where data is created, which gives low latency and works with limited connectivity. Gemini Nano is Google's compact on-device model, and LiteRT helps deploy models to edge devices.",
    "explanation_vi": "Edge AI chạy mô hình gần nơi dữ liệu phát sinh, cho độ trễ thấp và hoạt động được khi kết nối hạn chế. Gemini Nano là mô hình gọn chạy trên thiết bị của Google, và LiteRT giúp triển khai mô hình lên thiết bị edge.",
    "lessonId": "d2-t2",
    "objective": "2.1 AI-optimized infrastructure and edge AI"
  },
  {
    "id": 24,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "What is the business benefit of Google Cloud's AI Hypercomputer?",
    "question_vi": "Lợi ích kinh doanh của AI Hypercomputer của Google Cloud là gì?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "It is a prebuilt chatbot that employees use to draft replies to everyday business emails.",
        "text_vi": "Nó là một chatbot dựng sẵn để nhân viên soạn thư trả lời email công việc hằng ngày."
      },
      {
        "key": "B",
        "text": "It combines hardware, networking and software into one integrated system to train, tune and serve AI workloads.",
        "text_vi": "Nó kết hợp phần cứng, mạng và phần mềm thành một hệ thống tích hợp để huấn luyện, tinh chỉnh và vận hành các khối lượng công việc AI."
      },
      {
        "key": "C",
        "text": "It is a security service that scans cloud projects and reports misconfigured resources.",
        "text_vi": "Nó là dịch vụ bảo mật quét các dự án cloud và báo cáo tài nguyên cấu hình sai."
      },
      {
        "key": "D",
        "text": "It is a no-code builder that creates virtual agents for customer contact centers across all the offices and branches of a large company.",
        "text_vi": "Nó là công cụ no-code tạo agent ảo cho trung tâm liên hệ khách hàng cho mọi văn phòng và chi nhánh của một công ty lớn."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "AI Hypercomputer is Google's integrated infrastructure, bringing together TPUs and GPUs, networking and software so AI workloads can be trained, tuned and served efficiently. The distractors are other product types entirely.",
    "explanation_vi": "AI Hypercomputer là hạ tầng tích hợp của Google, kết hợp TPU và GPU, mạng và phần mềm để huấn luyện, tinh chỉnh và vận hành khối lượng công việc AI hiệu quả. Các phương án nhiễu là những loại sản phẩm hoàn toàn khác.",
    "lessonId": "d2-t2",
    "objective": "2.1 AI-optimized infrastructure and edge AI"
  },
  {
    "id": 25,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "Cloud engineers at a software company want an AI assistant inside Google Cloud that helps write and debug code, optimize cloud applications and analyze data in BigQuery. Which offering fits best?",
    "question_vi": "Các kỹ sư cloud tại một công ty phần mềm muốn một trợ lý AI ngay trong Google Cloud giúp viết và gỡ lỗi code, tối ưu ứng dụng cloud và phân tích dữ liệu trong BigQuery. Sản phẩm nào phù hợp nhất?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Gemini for Google Cloud, an AI assistant for working in Google Cloud.",
        "text_vi": "Gemini for Google Cloud, trợ lý AI để làm việc trong Google Cloud."
      },
      {
        "key": "B",
        "text": "Gemini for Google Workspace, which drafts emails and summarizes meeting notes in Workspace apps.",
        "text_vi": "Gemini for Google Workspace, soạn email và tóm tắt ghi chú cuộc họp trong các ứng dụng Workspace."
      },
      {
        "key": "C",
        "text": "Gemini Notebook, which answers questions grounded in files that a user uploads.",
        "text_vi": "Gemini Notebook, trả lời câu hỏi dựa trên các tệp người dùng tải lên."
      },
      {
        "key": "D",
        "text": "Agent Assist, which gives live suggestions to human agents during customer conversations.",
        "text_vi": "Agent Assist, đưa ra gợi ý trực tiếp cho nhân viên trong các cuộc trò chuyện với khách hàng."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Gemini for Google Cloud helps write and debug code, manage and optimize cloud applications, analyze BigQuery data and strengthen security posture. The other Gemini offerings target Workspace users or document research.",
    "explanation_vi": "Gemini for Google Cloud giúp viết và gỡ lỗi code, quản lý và tối ưu ứng dụng cloud, phân tích dữ liệu BigQuery và tăng cường tình trạng bảo mật. Các sản phẩm Gemini khác nhắm tới người dùng Workspace hoặc nghiên cứu tài liệu.",
    "lessonId": "d2-t3",
    "objective": "2.2 Prebuilt gen AI offerings"
  },
  {
    "id": 26,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A consulting team has 20 client reports and wants a research assistant that summarizes them and answers questions using only those uploaded sources. Which should they use?",
    "question_vi": "Một nhóm tư vấn có 20 báo cáo khách hàng và muốn một trợ lý nghiên cứu tóm tắt chúng và trả lời câu hỏi chỉ dựa trên các nguồn đã tải lên. Họ nên dùng gì?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Gemini Notebook, which stays grounded in the source material the user uploads.",
        "text_vi": "Gemini Notebook, luôn bám sát nguồn tài liệu mà người dùng tải lên."
      },
      {
        "key": "B",
        "text": "Gemini for Google Cloud, which helps developers write and debug code in the console.",
        "text_vi": "Gemini for Google Cloud, giúp lập trình viên viết và gỡ lỗi code trong console."
      },
      {
        "key": "C",
        "text": "Gemini in Gmail, which drafts email replies from short prompts typed by the user.",
        "text_vi": "Gemini trong Gmail, soạn thư trả lời từ các prompt ngắn do người dùng nhập."
      },
      {
        "key": "D",
        "text": "Imagen, which generates high-quality images from textual descriptions of a scene.",
        "text_vi": "Imagen, tạo hình ảnh chất lượng cao từ mô tả bằng văn bản về một cảnh."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Gemini Notebook acts as a research assistant over uploaded files, summarizing, answering questions and generating ideas while staying grounded in those sources. The other options serve different jobs.",
    "explanation_vi": "Gemini Notebook đóng vai trò trợ lý nghiên cứu trên các tệp đã tải lên, tóm tắt, trả lời câu hỏi và gợi ý ý tưởng trong khi bám sát các nguồn đó. Các lựa chọn khác phục vụ những công việc khác.",
    "lessonId": "d2-t3",
    "objective": "2.2 Prebuilt gen AI offerings"
  },
  {
    "id": 27,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "Employees at a large energy company cannot find information scattered across internal wikis, drives and business apps. Leadership wants secure search and custom agents over that company data. Which offering fits?",
    "question_vi": "Nhân viên của một công ty năng lượng lớn không tìm được thông tin nằm rải rác trong wiki nội bộ, ổ đĩa và các ứng dụng nghiệp vụ. Ban lãnh đạo muốn có tìm kiếm an toàn và agent tùy chỉnh trên dữ liệu công ty. Sản phẩm nào phù hợp?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "The Gemini app used individually by each employee for general writing and brainstorming help.",
        "text_vi": "Ứng dụng Gemini do từng nhân viên dùng riêng lẻ để hỗ trợ viết lách và động não chung."
      },
      {
        "key": "B",
        "text": "Cloud Vision API, which tags images by the objects and text detected inside them.",
        "text_vi": "Cloud Vision API, gắn thẻ hình ảnh theo các đối tượng và văn bản phát hiện được bên trong."
      },
      {
        "key": "C",
        "text": "Gemini Notebook, which answers questions only from files that one user uploads to a notebook.",
        "text_vi": "Gemini Notebook, chỉ trả lời câu hỏi từ các tệp một người dùng tải vào một notebook."
      },
      {
        "key": "D",
        "text": "Gemini Enterprise, which offers customized search and agents that access internal data sources.",
        "text_vi": "Gemini Enterprise, cung cấp tìm kiếm tùy chỉnh và agent truy cập các nguồn dữ liệu nội bộ."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Gemini Enterprise connects search and conversational agents to internal data from many sources inside the organization. Gemini Notebook is limited to the files a user adds, and the plain Gemini app is not tied to company data.",
    "explanation_vi": "Gemini Enterprise kết nối tìm kiếm và agent hội thoại với dữ liệu nội bộ từ nhiều nguồn trong tổ chức. Gemini Notebook chỉ giới hạn ở các tệp người dùng thêm vào, còn ứng dụng Gemini thông thường không gắn với dữ liệu công ty.",
    "lessonId": "d2-t3",
    "objective": "2.2 Prebuilt gen AI offerings"
  },
  {
    "id": 28,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A marketing manager retypes the same long brand-voice instructions every time she asks Gemini to edit copy. Which Gemini app feature would save her time?",
    "question_vi": "Một quản lý marketing phải gõ lại cùng những hướng dẫn dài về giọng điệu thương hiệu mỗi lần nhờ Gemini chỉnh sửa nội dung. Tính năng nào của ứng dụng Gemini giúp cô tiết kiệm thời gian?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Turning on Grounding with Google Search so every chat automatically uses public web pages.",
        "text_vi": "Bật Grounding with Google Search để mọi cuộc trò chuyện tự động dùng các trang web công khai."
      },
      {
        "key": "B",
        "text": "Switching to the Speech-to-Text API so that she can dictate each prompt out loud.",
        "text_vi": "Chuyển sang Speech-to-Text API để cô đọc to từng prompt."
      },
      {
        "key": "C",
        "text": "Creating a Gem, a personalized assistant with saved instructions that she can reuse.",
        "text_vi": "Tạo một Gem, trợ lý được cá nhân hóa với các hướng dẫn đã lưu mà cô có thể dùng lại."
      },
      {
        "key": "D",
        "text": "Training a custom model with AutoML on her past edits before every writing session.",
        "text_vi": "Huấn luyện một mô hình tùy chỉnh bằng AutoML trên các bản chỉnh sửa trước đây của cô trước mỗi buổi viết."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Gems are personalized assistants in the Gemini app that work like reusable prompt templates with guided instructions. Training a custom model or switching APIs is far heavier than the problem requires.",
    "explanation_vi": "Gem là trợ lý được cá nhân hóa trong ứng dụng Gemini, hoạt động như mẫu prompt dùng lại được với hướng dẫn có sẵn. Huấn luyện mô hình tùy chỉnh hay đổi API nặng nề hơn nhiều so với nhu cầu.",
    "lessonId": "d2-t3",
    "objective": "2.2 Prebuilt gen AI offerings"
  },
  {
    "id": 29,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A telecom's live contact center agents struggle to find answers while customers wait on the line. Which offering gives them real-time suggested answers during the conversation?",
    "question_vi": "Nhân viên tổng đài trực tiếp của một công ty viễn thông khó tìm câu trả lời trong khi khách hàng chờ máy. Sản phẩm nào đưa ra câu trả lời gợi ý theo thời gian thực ngay trong cuộc trò chuyện?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Agent Assist, which supports live human agents during customer conversations.",
        "text_vi": "Agent Assist, hỗ trợ nhân viên thật trong các cuộc trò chuyện với khách hàng."
      },
      {
        "key": "B",
        "text": "Conversational Agents, which handle customer chats with virtual agents instead of people.",
        "text_vi": "Conversational Agents, xử lý các cuộc chat với khách hàng bằng agent ảo thay vì con người."
      },
      {
        "key": "C",
        "text": "Conversational Insights, which analyzes communications to find topics and sentiment.",
        "text_vi": "Conversational Insights, phân tích các cuộc giao tiếp để tìm chủ đề và cảm xúc."
      },
      {
        "key": "D",
        "text": "Document AI API, which extracts data from forms and other varied document formats.",
        "text_vi": "Document AI API, trích xuất dữ liệu từ biểu mẫu và các định dạng tài liệu khác nhau."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Agent Assist supports human contact center agents in real time, for example by suggesting answers. Conversational Agents replace the human on the line, and Conversational Insights works on conversations after the fact.",
    "explanation_vi": "Agent Assist hỗ trợ nhân viên tổng đài theo thời gian thực, ví dụ gợi ý câu trả lời. Conversational Agents thay thế con người trong cuộc gọi, còn Conversational Insights phân tích các cuộc hội thoại sau sự việc.",
    "lessonId": "d2-t4",
    "objective": "2.3 Gen AI for customer experience"
  },
  {
    "id": 30,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A travel company wants a virtual agent on its website that holds natural conversations to answer questions and handle bookings at any hour, without waiting for staff. Which offering fits best?",
    "question_vi": "Một công ty du lịch muốn một agent ảo trên website, trò chuyện tự nhiên để trả lời câu hỏi và xử lý đặt chỗ vào mọi giờ mà không phải chờ nhân viên. Sản phẩm nào phù hợp nhất?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Agent Assist, which supports human agents who are already handling live customer calls.",
        "text_vi": "Agent Assist, hỗ trợ nhân viên đang xử lý các cuộc gọi trực tiếp của khách hàng."
      },
      {
        "key": "B",
        "text": "Gemini Notebook, which is a research assistant grounded in files that a user uploads.",
        "text_vi": "Gemini Notebook, trợ lý nghiên cứu dựa trên các tệp người dùng tải lên."
      },
      {
        "key": "C",
        "text": "Cloud Video Intelligence API, which extracts information and metadata from video content.",
        "text_vi": "Cloud Video Intelligence API, trích xuất thông tin và siêu dữ liệu từ nội dung video."
      },
      {
        "key": "D",
        "text": "Conversational Agents in the Customer Engagement Suite, which act as chatbots for customers.",
        "text_vi": "Conversational Agents trong Customer Engagement Suite, đóng vai trò chatbot phục vụ khách hàng."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Conversational Agents are the Customer Engagement Suite component that works as a customer-facing chatbot or virtual agent. Agent Assist helps humans, so it does not remove the need for staff.",
    "explanation_vi": "Conversational Agents là thành phần của Customer Engagement Suite hoạt động như chatbot hoặc agent ảo đối mặt khách hàng. Agent Assist hỗ trợ con người nên không loại bỏ nhu cầu về nhân viên.",
    "lessonId": "d2-t4",
    "objective": "2.3 Gen AI for customer experience"
  },
  {
    "id": 31,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "An energy utility wants to learn why customers contact it, which topics cause frustration and how sentiment trends across all of its calls and chats. Which tool provides these insights?",
    "question_vi": "Một công ty điện lực muốn biết vì sao khách hàng liên hệ, chủ đề nào gây bực bội và xu hướng cảm xúc thay đổi ra sao trên tất cả cuộc gọi và chat. Công cụ nào cung cấp các thông tin này?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Agent Assist, which suggests answers to human agents while they are talking to customers.",
        "text_vi": "Agent Assist, gợi ý câu trả lời cho nhân viên khi họ đang nói chuyện với khách hàng."
      },
      {
        "key": "B",
        "text": "Conversational Insights, which analyzes all customer communications for topics and sentiment.",
        "text_vi": "Conversational Insights, phân tích mọi giao tiếp với khách hàng để tìm chủ đề và cảm xúc."
      },
      {
        "key": "C",
        "text": "Conversational Agents, which serve customers directly as chatbots and virtual agents.",
        "text_vi": "Conversational Agents, phục vụ trực tiếp khách hàng như chatbot và agent ảo."
      },
      {
        "key": "D",
        "text": "Translation API, which converts text from one language to another across documents.",
        "text_vi": "Translation API, chuyển văn bản từ ngôn ngữ này sang ngôn ngữ khác trong tài liệu."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Conversational Insights (Customer Experience Insights) mines all customer communications for topics, sentiment and trends. Agent Assist and Conversational Agents handle live interactions rather than analyzing them in bulk.",
    "explanation_vi": "Conversational Insights (Customer Experience Insights) khai thác mọi giao tiếp với khách hàng để tìm chủ đề, cảm xúc và xu hướng. Agent Assist và Conversational Agents xử lý tương tác trực tiếp chứ không phân tích hàng loạt.",
    "lessonId": "d2-t4",
    "objective": "2.3 Gen AI for customer experience"
  },
  {
    "id": 32,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "An online retailer wants Google-quality search and product recommendations on its e-commerce site without building search technology from scratch. Which offering fits best?",
    "question_vi": "Một nhà bán lẻ trực tuyến muốn có tìm kiếm và gợi ý sản phẩm chất lượng Google trên trang thương mại điện tử mà không phải tự xây công nghệ tìm kiếm. Sản phẩm nào phù hợp nhất?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Model Garden, which is a catalog for discovering and choosing among foundation models.",
        "text_vi": "Model Garden, danh mục để khám phá và chọn giữa các foundation model."
      },
      {
        "key": "B",
        "text": "Agent Assist, which helps live contact center agents answer customers in real time.",
        "text_vi": "Agent Assist, giúp nhân viên tổng đài trả lời khách hàng theo thời gian thực."
      },
      {
        "key": "C",
        "text": "Gemini for Google Workspace, which adds gen AI to email, documents and meetings.",
        "text_vi": "Gemini for Google Workspace, thêm gen AI vào email, tài liệu và cuộc họp."
      },
      {
        "key": "D",
        "text": "Agent Search, which provides search and recommendation solutions for businesses.",
        "text_vi": "Agent Search, cung cấp giải pháp tìm kiếm và gợi ý cho doanh nghiệp."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Agent Search delivers search and recommendation solutions for your business, ready to use instead of custom-built. Model Garden is for choosing models, not for powering site search.",
    "explanation_vi": "Agent Search cung cấp giải pháp tìm kiếm và gợi ý cho doanh nghiệp, dùng ngay thay vì tự xây. Model Garden dùng để chọn mô hình chứ không phải để vận hành tìm kiếm trên website.",
    "lessonId": "d2-t4",
    "objective": "2.3 Gen AI for customer experience"
  },
  {
    "id": 33,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A startup with no ML team wants to try several foundation models, including Google's, third-party and open-source ones, before choosing one for its app. Where should it start?",
    "question_vi": "Một startup không có đội ML muốn thử nhiều foundation model, gồm mô hình của Google, bên thứ ba và mã nguồn mở, trước khi chọn một mô hình cho ứng dụng. Họ nên bắt đầu từ đâu?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Model Garden in Agent Platform, to discover, test and deploy models from one place.",
        "text_vi": "Model Garden trong Agent Platform, để khám phá, thử nghiệm và triển khai mô hình từ một nơi."
      },
      {
        "key": "B",
        "text": "AutoML in Agent Platform, which builds a custom model from the company's own tabular data.",
        "text_vi": "AutoML trong Agent Platform, xây dựng mô hình tùy chỉnh từ dữ liệu dạng bảng của chính công ty."
      },
      {
        "key": "C",
        "text": "Security Command Center, which gives security teams visibility into their security posture.",
        "text_vi": "Security Command Center, giúp đội bảo mật nhìn thấy tình trạng bảo mật của mình."
      },
      {
        "key": "D",
        "text": "Conversational Insights, which analyzes customer calls and chats for topics and sentiment.",
        "text_vi": "Conversational Insights, phân tích cuộc gọi và chat của khách hàng để tìm chủ đề và cảm xúc."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Model Garden lets teams pick from existing Google, third-party and open-source models and try them before committing. AutoML is for building your own model from data, which is not what this startup needs yet.",
    "explanation_vi": "Model Garden cho phép chọn từ các mô hình Google, bên thứ ba và mã nguồn mở có sẵn và thử trước khi cam kết. AutoML dùng để tự xây mô hình từ dữ liệu, điều startup này chưa cần.",
    "lessonId": "d2-t5",
    "objective": "2.4 Building with AI on Agent Platform"
  },
  {
    "id": 34,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A retailer wants a custom model that predicts product demand from its own sales tables, but it has no data scientists. Which approach is the best fit?",
    "question_vi": "Một nhà bán lẻ muốn một mô hình tùy chỉnh dự đoán nhu cầu sản phẩm từ các bảng doanh số của riêng mình, nhưng không có chuyên gia dữ liệu. Cách nào phù hợp nhất?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Full custom training with an ML framework, which needs deep ML expertise to set up and tune, so a retailer would need to hire specialists first.",
        "text_vi": "Huấn luyện tùy chỉnh hoàn toàn bằng framework ML, cần chuyên môn ML sâu để thiết lập và tinh chỉnh, nên nhà bán lẻ sẽ phải thuê chuyên gia trước."
      },
      {
        "key": "B",
        "text": "AutoML in Agent Platform, which builds and trains models with minimal technical knowledge and effort.",
        "text_vi": "AutoML trong Agent Platform, xây dựng và huấn luyện mô hình với kiến thức kỹ thuật và công sức tối thiểu."
      },
      {
        "key": "C",
        "text": "Veo from Model Garden, which generates video clips from text descriptions or still images.",
        "text_vi": "Veo từ Model Garden, tạo các đoạn video từ mô tả văn bản hoặc ảnh tĩnh."
      },
      {
        "key": "D",
        "text": "Grounding with Google Search, which adds current public web information to model answers.",
        "text_vi": "Grounding with Google Search, bổ sung thông tin web công khai mới nhất vào câu trả lời của mô hình."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "AutoML in Agent Platform automates model creation for teams with little ML expertise, which fits tabular business data. Full custom training offers more control but demands skills this retailer does not have.",
    "explanation_vi": "AutoML trong Agent Platform tự động hóa việc tạo mô hình cho các nhóm ít chuyên môn ML, phù hợp với dữ liệu kinh doanh dạng bảng. Huấn luyện tùy chỉnh hoàn toàn cho nhiều quyền kiểm soát hơn nhưng đòi hỏi kỹ năng mà nhà bán lẻ này không có.",
    "lessonId": "d2-t5",
    "objective": "2.4 Building with AI on Agent Platform"
  },
  {
    "id": 35,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A software startup's developers want to quickly prototype prompts with Gemini models at no cost before deciding whether to build a production app. Which tool fits this stage?",
    "question_vi": "Các lập trình viên của một startup phần mềm muốn nhanh chóng thử prompt với các mô hình Gemini miễn phí trước khi quyết định có xây ứng dụng production hay không. Công cụ nào phù hợp giai đoạn này?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Google AI Studio, which is free of charge and meant for quick AI prototyping.",
        "text_vi": "Google AI Studio, miễn phí và dùng để tạo nguyên mẫu AI nhanh chóng."
      },
      {
        "key": "B",
        "text": "Agent Studio, which is intended for building production-ready AI applications at enterprise scale.",
        "text_vi": "Agent Studio, dành cho việc xây dựng ứng dụng AI sẵn sàng production ở quy mô doanh nghiệp."
      },
      {
        "key": "C",
        "text": "Contact Center as a Service, which is a cloud-native solution for running a contact center.",
        "text_vi": "Contact Center as a Service, giải pháp cloud-native để vận hành một trung tâm liên hệ."
      },
      {
        "key": "D",
        "text": "Security Command Center, which monitors and reports on the security posture of cloud resources.",
        "text_vi": "Security Command Center, giám sát và báo cáo tình trạng bảo mật của các tài nguyên cloud."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Google AI Studio is free and meant for quick prototyping, while Agent Studio is for production-ready applications at scale. At the prototyping stage, the free tool is the better match.",
    "explanation_vi": "Google AI Studio miễn phí và dùng để tạo nguyên mẫu nhanh, còn Agent Studio dành cho ứng dụng sẵn sàng production ở quy mô lớn. Ở giai đoạn thử nghiệm, công cụ miễn phí phù hợp hơn.",
    "lessonId": "d2-t5",
    "objective": "2.4 Building with AI on Agent Platform"
  },
  {
    "id": 36,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "Why is building a custom model from scratch usually a poorer starting point than using a pre-trained model from Model Garden for a common business task?",
    "question_vi": "Vì sao xây một mô hình tùy chỉnh từ đầu thường là điểm khởi đầu kém hơn so với dùng mô hình đã huấn luyện sẵn từ Model Garden cho một tác vụ kinh doanh phổ biến?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "A custom model cannot be deployed on Google Cloud once the training has been completed, regardless of the Google Cloud region where it was trained.",
        "text_vi": "Mô hình tùy chỉnh không thể triển khai trên Google Cloud sau khi đã huấn luyện xong, bất kể khu vực Google Cloud nơi nó được huấn luyện."
      },
      {
        "key": "B",
        "text": "Google Cloud policy prohibits custom models for any task that a pre-trained model can do.",
        "text_vi": "Chính sách của Google Cloud cấm mô hình tùy chỉnh cho bất kỳ tác vụ nào mô hình huấn luyện sẵn làm được."
      },
      {
        "key": "C",
        "text": "It typically needs far more data, computing resources, expertise and time before it delivers value.",
        "text_vi": "Nó thường cần nhiều dữ liệu, tài nguyên tính toán, chuyên môn và thời gian hơn nhiều trước khi mang lại giá trị."
      },
      {
        "key": "D",
        "text": "A pre-trained model will always be more accurate than any model trained on company data.",
        "text_vi": "Mô hình huấn luyện sẵn luôn chính xác hơn bất kỳ mô hình nào được huấn luyện trên dữ liệu công ty."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Pre-trained models are ready to use or adapt, so teams skip the heavy cost in data, compute, skills and time that full custom training demands. Custom training is still possible and sometimes justified, but not as a default.",
    "explanation_vi": "Mô hình huấn luyện sẵn có thể dùng hoặc điều chỉnh ngay, nên các nhóm bỏ qua chi phí lớn về dữ liệu, tính toán, kỹ năng và thời gian của việc huấn luyện tùy chỉnh toàn bộ. Huấn luyện tùy chỉnh vẫn khả thi và đôi khi hợp lý, nhưng không nên là mặc định.",
    "lessonId": "d2-t5",
    "objective": "2.4 Building with AI on Agent Platform"
  },
  {
    "id": 37,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A travel company's agent must check live seat availability in an airline's booking system before answering. Which agent tool type lets it call that external service through its API?",
    "question_vi": "Agent của một công ty du lịch phải kiểm tra số ghế còn trống theo thời gian thực trong hệ thống đặt vé của hãng bay trước khi trả lời. Loại công cụ nào của agent cho phép gọi dịch vụ bên ngoài đó qua API?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Extensions, which connect an agent to external services through APIs.",
        "text_vi": "Extensions, kết nối agent với các dịch vụ bên ngoài thông qua API."
      },
      {
        "key": "B",
        "text": "Data stores, which give an agent access to stored information such as documents.",
        "text_vi": "Data stores, cho agent truy cập thông tin đã lưu như tài liệu."
      },
      {
        "key": "C",
        "text": "Prompt chaining, which links several prompts together across a back-and-forth conversation.",
        "text_vi": "Prompt chaining, nối nhiều prompt với nhau trong một cuộc trao đổi qua lại."
      },
      {
        "key": "D",
        "text": "Safety settings, which filter potentially harmful content out of the model's responses.",
        "text_vi": "Safety settings, lọc nội dung có thể gây hại khỏi câu trả lời của mô hình."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Agents use tools to interact with the outside world, and extensions are the type that connect to external services via APIs. Data stores supply information but do not call live systems.",
    "explanation_vi": "Agent dùng công cụ để tương tác với thế giới bên ngoài, và extensions là loại kết nối với dịch vụ bên ngoài qua API. Data stores cung cấp thông tin nhưng không gọi hệ thống trực tiếp.",
    "lessonId": "d2-t6",
    "objective": "2.5 Tooling for gen AI agents"
  },
  {
    "id": 38,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A bank processes thousands of scanned loan forms and invoices every week and wants to extract the key fields automatically. Which Google Cloud API fits best?",
    "question_vi": "Một ngân hàng xử lý hàng nghìn biểu mẫu vay và hóa đơn quét mỗi tuần và muốn tự động trích xuất các trường quan trọng. API nào của Google Cloud phù hợp nhất?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Text-to-Speech API, which converts written text into natural-sounding spoken audio.",
        "text_vi": "Text-to-Speech API, chuyển văn bản viết thành âm thanh giọng nói tự nhiên."
      },
      {
        "key": "B",
        "text": "Document AI API, which extracts data from varied document formats and automates capture.",
        "text_vi": "Document AI API, trích xuất dữ liệu từ nhiều định dạng tài liệu và tự động hóa việc thu thập."
      },
      {
        "key": "C",
        "text": "Cloud Video Intelligence API, which analyzes video content to extract meaningful information.",
        "text_vi": "Cloud Video Intelligence API, phân tích nội dung video để trích xuất thông tin có ý nghĩa."
      },
      {
        "key": "D",
        "text": "Natural Language API, which derives sentiment and entities from unstructured text.",
        "text_vi": "Natural Language API, rút ra cảm xúc và thực thể từ văn bản phi cấu trúc."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Document AI API is built to pull data out of forms and other document formats and automate document processing. Natural Language API analyzes text meaning, such as sentiment, rather than capturing form fields.",
    "explanation_vi": "Document AI API được xây dựng để lấy dữ liệu từ biểu mẫu và các định dạng tài liệu khác, tự động hóa xử lý tài liệu. Natural Language API phân tích ý nghĩa văn bản, như cảm xúc, chứ không thu thập các trường biểu mẫu.",
    "lessonId": "d2-t6",
    "objective": "2.5 Tooling for gen AI agents"
  },
  {
    "id": 39,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A bank wants its customer agent to follow strict predefined steps for identity verification but use natural, flexible conversation for general questions. Which type of agent combines both?",
    "question_vi": "Một ngân hàng muốn agent chăm sóc khách hàng tuân theo các bước định sẵn nghiêm ngặt khi xác minh danh tính nhưng trò chuyện tự nhiên, linh hoạt với các câu hỏi chung. Loại agent nào kết hợp cả hai?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "A deterministic agent, which follows predefined paths and actions only.",
        "text_vi": "Agent deterministic, chỉ đi theo các luồng và hành động định sẵn."
      },
      {
        "key": "B",
        "text": "A hybrid agent, which combines deterministic and generative capabilities.",
        "text_vi": "Agent hybrid, kết hợp khả năng deterministic và generative."
      },
      {
        "key": "C",
        "text": "A generative agent, which is defined in natural language and driven only by an LLM.",
        "text_vi": "Agent generative, được định nghĩa bằng ngôn ngữ tự nhiên và chỉ được điều khiển bởi LLM."
      },
      {
        "key": "D",
        "text": "A batch agent, which processes accumulated records overnight without any live conversation.",
        "text_vi": "Agent batch, xử lý các bản ghi tích lũy qua đêm mà không có hội thoại trực tiếp."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Hybrid agents mix deterministic, rule-based steps with generative conversation, which fits strict verification plus open Q&A. A purely deterministic or purely generative agent covers only one half.",
    "explanation_vi": "Agent hybrid kết hợp các bước theo quy tắc deterministic với hội thoại generative, phù hợp với xác minh nghiêm ngặt cộng hỏi đáp mở. Agent thuần deterministic hay thuần generative chỉ đáp ứng một nửa.",
    "lessonId": "d2-t6",
    "objective": "2.5 Tooling for gen AI agents"
  },
  {
    "id": 40,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "A model confidently states a false fact as if it were true. What is this limitation called?",
    "question_vi": "Một mô hình tự tin nêu một sự việc sai như thể nó đúng. Hạn chế này được gọi là gì?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Knowledge cutoff, where the model lacks information about events after its training date.",
        "text_vi": "Knowledge cutoff, khi mô hình thiếu thông tin về các sự kiện sau ngày huấn luyện."
      },
      {
        "key": "B",
        "text": "Edge case, where a rare and atypical scenario exposes a weakness in the model.",
        "text_vi": "Edge case, khi một tình huống hiếm và bất thường làm lộ điểm yếu của mô hình."
      },
      {
        "key": "C",
        "text": "Hallucination, where output is inaccurate or not based on real information.",
        "text_vi": "Hallucination, khi đầu ra không chính xác hoặc không dựa trên thông tin thực."
      },
      {
        "key": "D",
        "text": "Data dependency, where output quality depends heavily on the data the model learned from.",
        "text_vi": "Data dependency, khi chất lượng đầu ra phụ thuộc nhiều vào dữ liệu mà mô hình đã học."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "A hallucination is a confident output that is not accurate or grounded in real information. The other terms are real limitations, but they describe stale knowledge, unusual situations or reliance on data rather than made-up facts.",
    "explanation_vi": "Hallucination là đầu ra nghe tự tin nhưng không chính xác hoặc không dựa trên thông tin thực. Các thuật ngữ còn lại cũng là hạn chế thật, nhưng mô tả kiến thức lỗi thời, tình huống bất thường hoặc sự phụ thuộc vào dữ liệu chứ không phải thông tin bịa đặt.",
    "lessonId": "d3-t1",
    "objective": "3.1 Limitations of foundation models"
  },
  {
    "id": 41,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "Why might a gen AI model be unaware of events that happened after it was trained?",
    "question_vi": "Vì sao một mô hình gen AI có thể không biết về các sự kiện xảy ra sau khi nó được huấn luyện?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Because of hallucination, which makes it refuse to answer anything about recent topics.",
        "text_vi": "Vì hallucination, khiến nó từ chối trả lời mọi thứ về các chủ đề gần đây."
      },
      {
        "key": "B",
        "text": "Because of a small output length setting, which cuts off its answers about new events.",
        "text_vi": "Vì cài đặt output length nhỏ, khiến câu trả lời về sự kiện mới bị cắt cụt."
      },
      {
        "key": "C",
        "text": "Because of its safety settings, which hide all information that was published recently.",
        "text_vi": "Vì safety settings của nó, vốn ẩn mọi thông tin mới được công bố gần đây."
      },
      {
        "key": "D",
        "text": "Because of its knowledge cutoff, the date up to which its training data runs.",
        "text_vi": "Vì knowledge cutoff của nó, tức là mốc ngày mà dữ liệu huấn luyện kéo dài tới."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Models are trained up to a specific cutoff date and may lack later information. Grounding or retrieval can supply newer facts at question time.",
    "explanation_vi": "Mô hình được huấn luyện đến một ngày cụ thể và có thể thiếu thông tin về sau. Grounding hoặc truy xuất có thể cung cấp dữ kiện mới hơn tại thời điểm hỏi.",
    "lessonId": "d3-t1",
    "objective": "3.1 Limitations of foundation models"
  },
  {
    "id": 42,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "An insurer's customer chatbot sometimes invents policy terms that do not exist. Which TWO practices would best reduce this risk? (Select TWO.)",
    "question_vi": "Chatbot chăm sóc khách hàng của một công ty bảo hiểm đôi khi bịa ra các điều khoản không tồn tại. Hai biện pháp nào giảm rủi ro này tốt nhất? (Chọn HAI.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "Ground answers in the insurer's approved policy documents by using retrieval (RAG).",
        "text_vi": "Gắn câu trả lời với tài liệu chính sách đã được duyệt của công ty bảo hiểm bằng truy xuất (RAG)."
      },
      {
        "key": "B",
        "text": "Raise the temperature so that the answers become more varied between conversations.",
        "text_vi": "Tăng temperature để câu trả lời đa dạng hơn giữa các cuộc trò chuyện."
      },
      {
        "key": "C",
        "text": "Add human review for high-risk or sensitive answers before they reach customers.",
        "text_vi": "Thêm bước con người xem xét các câu trả lời rủi ro cao hoặc nhạy cảm trước khi đến tay khách hàng."
      },
      {
        "key": "D",
        "text": "Turn off safety settings so the model can respond more freely to every question.",
        "text_vi": "Tắt safety settings để mô hình trả lời tự do hơn cho mọi câu hỏi."
      },
      {
        "key": "E",
        "text": "Shorten every prompt so the model has less context that it could misread.",
        "text_vi": "Rút ngắn mọi prompt để mô hình có ít ngữ cảnh hơn mà hiểu sai."
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "Grounding with RAG ties answers to verifiable approved sources, and human-in-the-loop review catches errors in sensitive cases. Higher temperature increases variability, and removing safety settings only adds risk.",
    "explanation_vi": "Grounding bằng RAG gắn câu trả lời với các nguồn đã kiểm chứng, và con người xem xét (human-in-the-loop) bắt lỗi trong các trường hợp nhạy cảm. Temperature cao làm tăng độ biến thiên, còn tắt safety settings chỉ thêm rủi ro.",
    "lessonId": "d3-t2",
    "objective": "3.1 Overcoming foundation model limitations"
  },
  {
    "id": 43,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "Why would a company choose RAG instead of fine-tuning when its reference information changes frequently?",
    "question_vi": "Vì sao một công ty chọn RAG thay vì fine-tuning khi thông tin tham chiếu của họ thay đổi thường xuyên?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "RAG retrieves current documents when a question is asked, so content updates do not require retraining the model.",
        "text_vi": "RAG truy xuất tài liệu hiện hành khi có câu hỏi, nên việc cập nhật nội dung không cần huấn luyện lại mô hình."
      },
      {
        "key": "B",
        "text": "Fine-tuning can be used only with images and audio and cannot be applied to text data.",
        "text_vi": "Fine-tuning chỉ dùng được với hình ảnh và âm thanh và không áp dụng được cho dữ liệu văn bản."
      },
      {
        "key": "C",
        "text": "RAG permanently stores every document inside the model so that it never needs a data source.",
        "text_vi": "RAG lưu vĩnh viễn mọi tài liệu bên trong mô hình nên không bao giờ cần nguồn dữ liệu."
      },
      {
        "key": "D",
        "text": "RAG removes the need to maintain, organize or secure the company's reference documents, because the model automatically reads every file on the network.",
        "text_vi": "RAG loại bỏ nhu cầu duy trì, tổ chức hay bảo mật các tài liệu tham chiếu của công ty, vì mô hình tự động đọc mọi tệp trên mạng."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "RAG fetches relevant information from external sources at query time and adds it to the prompt, so keeping answers current means updating the sources, not the model. Fine-tuning would need to be repeated whenever the facts change.",
    "explanation_vi": "RAG lấy thông tin liên quan từ nguồn bên ngoài tại thời điểm truy vấn và đưa vào prompt, nên giữ câu trả lời cập nhật chỉ cần cập nhật nguồn chứ không phải mô hình. Fine-tuning phải lặp lại mỗi khi dữ kiện thay đổi.",
    "lessonId": "d3-t2",
    "objective": "3.1 Overcoming foundation model limitations"
  },
  {
    "id": 44,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "After launch, a retailer's recommendation assistant gradually gives poorer answers as customer behavior changes. Which practice best addresses this?",
    "question_vi": "Sau khi ra mắt, trợ lý gợi ý của một nhà bán lẻ dần đưa ra câu trả lời kém hơn khi hành vi khách hàng thay đổi. Biện pháp nào xử lý tốt nhất?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Wait for customer complaints to pile up before looking at any performance data at all.",
        "text_vi": "Chờ khiếu nại của khách hàng chồng chất rồi mới xem bất kỳ dữ liệu hiệu năng nào."
      },
      {
        "key": "B",
        "text": "Freeze the current model version permanently so that its results can never change again, and avoid the cost of any further maintenance.",
        "text_vi": "Đóng băng vĩnh viễn phiên bản mô hình hiện tại để kết quả không bao giờ thay đổi nữa, và tránh chi phí bảo trì thêm."
      },
      {
        "key": "C",
        "text": "Continuously monitor performance and drift against agreed KPIs, and update the model when quality declines.",
        "text_vi": "Liên tục theo dõi hiệu năng và drift theo các KPI đã thống nhất, và cập nhật mô hình khi chất lượng giảm."
      },
      {
        "key": "D",
        "text": "Raise the output length so each recommendation includes more detail than it did before.",
        "text_vi": "Tăng output length để mỗi gợi ý có nhiều chi tiết hơn trước."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Google recommends continuous monitoring and evaluation, including KPIs, performance tracking, drift monitoring and versioning. Detecting drift early lets the team update the model before users are affected.",
    "explanation_vi": "Google khuyến nghị giám sát và đánh giá liên tục, gồm KPI, theo dõi hiệu năng, drift monitoring và versioning. Phát hiện drift sớm giúp nhóm cập nhật mô hình trước khi người dùng bị ảnh hưởng.",
    "lessonId": "d3-t3",
    "objective": "3.1 Monitoring and evaluation"
  },
  {
    "id": 45,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "A SaaS company wants its model to label support tickets in a strict format. The team adds three example tickets with the correct labels to the prompt. Which technique is this?",
    "question_vi": "Một công ty SaaS muốn mô hình gắn nhãn ticket hỗ trợ theo định dạng nghiêm ngặt. Nhóm thêm ba ticket mẫu kèm nhãn đúng vào prompt. Đây là kỹ thuật nào?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Zero-shot prompting, which asks the model to do the task with no prior examples.",
        "text_vi": "Zero-shot prompting, yêu cầu mô hình làm tác vụ mà không có ví dụ trước."
      },
      {
        "key": "B",
        "text": "Role prompting, which assigns the model a persona to shape its style and tone.",
        "text_vi": "Role prompting, gán cho mô hình một persona để định hình phong cách và giọng điệu."
      },
      {
        "key": "C",
        "text": "Few-shot prompting, which gives the model multiple examples to learn from.",
        "text_vi": "Few-shot prompting, đưa cho mô hình nhiều ví dụ để học theo."
      },
      {
        "key": "D",
        "text": "Prompt tuning, which learns a small set of parameters while the base model is frozen.",
        "text_vi": "Prompt tuning, học một tập tham số nhỏ trong khi mô hình gốc được giữ nguyên."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Providing several examples in the prompt is few-shot prompting; with one example it would be one-shot, and with none it is zero-shot. It changes the prompt only, not the model.",
    "explanation_vi": "Đưa nhiều ví dụ vào prompt là few-shot prompting; một ví dụ là one-shot, không ví dụ là zero-shot. Kỹ thuật này chỉ thay đổi prompt chứ không thay đổi mô hình.",
    "lessonId": "d3-t4",
    "objective": "3.2 Prompt engineering techniques"
  },
  {
    "id": 46,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "Staff at a city agency get generic answers when they ask a model to 'write something about the new policy'. What is the BEST first step to improve results?",
    "question_vi": "Nhân viên một cơ quan thành phố nhận được câu trả lời chung chung khi nhờ mô hình 'viết gì đó về chính sách mới'. Bước đầu tiên TỐT NHẤT để cải thiện kết quả là gì?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Rewrite the prompt to state the audience, tone, format, context and constraints clearly.",
        "text_vi": "Viết lại prompt, nêu rõ đối tượng, giọng điệu, định dạng, ngữ cảnh và các ràng buộc."
      },
      {
        "key": "B",
        "text": "Fine-tune a new model on the agency's past documents before trying the request again.",
        "text_vi": "Fine-tune một mô hình mới trên các tài liệu trước đây của cơ quan rồi mới thử lại yêu cầu."
      },
      {
        "key": "C",
        "text": "Shorten the prompt so the model has fewer instructions that it could be confused by.",
        "text_vi": "Rút ngắn prompt để mô hình có ít chỉ dẫn hơn để bị rối."
      },
      {
        "key": "D",
        "text": "Switch to a larger model without changing anything about the wording of the request.",
        "text_vi": "Chuyển sang mô hình lớn hơn mà không thay đổi gì trong cách diễn đạt yêu cầu."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Vague prompts produce vague answers, so prompt engineering is the cheapest, fastest fix: give context, audience, format and constraints. Fine-tuning or a bigger model is heavier and does not fix an unclear request.",
    "explanation_vi": "Prompt mơ hồ cho câu trả lời mơ hồ, nên prompt engineering là cách sửa rẻ và nhanh nhất: cung cấp ngữ cảnh, đối tượng, định dạng và ràng buộc. Fine-tuning hay mô hình lớn hơn nặng nề hơn và không sửa được yêu cầu thiếu rõ ràng.",
    "lessonId": "d3-t4",
    "objective": "3.2 Prompt engineering techniques"
  },
  {
    "id": 47,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "Which prompting technique asks a model to work through intermediate reasoning steps before giving a final answer to a complex, multi-step problem?",
    "question_vi": "Kỹ thuật prompt nào yêu cầu mô hình đi qua các bước suy luận trung gian trước khi đưa ra câu trả lời cuối cho một vấn đề phức tạp nhiều bước?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Chain-of-thought prompting, which guides the model through a step-by-step reasoning process.",
        "text_vi": "Chain-of-thought prompting, hướng dẫn mô hình đi qua quá trình suy luận từng bước."
      },
      {
        "key": "B",
        "text": "Zero-shot prompting, which asks for the result directly with no examples provided.",
        "text_vi": "Zero-shot prompting, yêu cầu kết quả trực tiếp mà không cung cấp ví dụ."
      },
      {
        "key": "C",
        "text": "ReAct prompting, which combines reasoning with actions that use external tools.",
        "text_vi": "ReAct prompting, kết hợp suy luận với các hành động dùng công cụ bên ngoài."
      },
      {
        "key": "D",
        "text": "Metaprompting, which uses prompts to generate, modify or interpret other prompts.",
        "text_vi": "Metaprompting, dùng prompt để tạo, sửa hoặc diễn giải các prompt khác."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Chain-of-thought prompting provides or elicits intermediate reasoning steps, which helps on complex problems. ReAct is the tempting alternative, but it is about reasoning and acting with tools.",
    "explanation_vi": "Chain-of-thought prompting cung cấp hoặc gợi ra các bước suy luận trung gian, giúp ích với bài toán phức tạp. ReAct là phương án dễ nhầm, nhưng nó nói về suy luận và hành động với công cụ.",
    "lessonId": "d3-t5",
    "objective": "3.2 Advanced prompting techniques"
  },
  {
    "id": 48,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "A manager says, 'Grounding just means retraining the model on our company files.' Which response best corrects this misconception?",
    "question_vi": "Một quản lý nói: 'Grounding chỉ có nghĩa là huấn luyện lại mô hình trên các tệp của công ty.' Câu trả lời nào sửa đúng nhất quan niệm sai này?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "That is correct, because grounding permanently updates the model's internal parameters using the company's files.",
        "text_vi": "Điều đó đúng, vì grounding cập nhật vĩnh viễn các tham số bên trong của mô hình bằng các tệp của công ty."
      },
      {
        "key": "B",
        "text": "Grounding is a safety filter that blocks harmful or inappropriate content before it is shown to users.",
        "text_vi": "Grounding là bộ lọc an toàn chặn nội dung có hại hoặc không phù hợp trước khi hiển thị cho người dùng."
      },
      {
        "key": "C",
        "text": "Grounding caps how many words the model may produce in a response, which keeps answers short and affordable.",
        "text_vi": "Grounding giới hạn số từ mô hình được tạo trong mỗi phản hồi, giúp câu trả lời ngắn gọn và rẻ."
      },
      {
        "key": "D",
        "text": "Grounding ties answers to verifiable sources, such as enterprise data, at question time without retraining.",
        "text_vi": "Grounding gắn câu trả lời với các nguồn có thể kiểm chứng, như dữ liệu doanh nghiệp, tại thời điểm hỏi mà không cần huấn luyện lại."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Grounding connects a model's responses to verifiable sources such as first-party enterprise data, third-party data or world data, which reduces hallucinations. It happens when the question is asked and does not change the model's parameters; retraining, safety filters and length limits are different controls.",
    "explanation_vi": "Grounding liên kết phản hồi của mô hình với các nguồn có thể kiểm chứng như dữ liệu doanh nghiệp (first-party), dữ liệu bên thứ ba hoặc dữ liệu thế giới, giúp giảm hallucination. Nó diễn ra khi câu hỏi được đặt ra và không thay đổi tham số của mô hình; huấn luyện lại, bộ lọc an toàn và giới hạn độ dài là các cơ chế khác.",
    "lessonId": "d3-t6",
    "objective": "3.3 Grounding and RAG"
  },
  {
    "id": 49,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "Technicians at a manufacturer ask an assistant about repair steps found only in internal maintenance manuals, and answers must be traceable to those manuals. Which approach fits best?",
    "question_vi": "Kỹ thuật viên của một nhà sản xuất hỏi trợ lý về các bước sửa chữa chỉ có trong sổ tay bảo trì nội bộ, và câu trả lời phải truy được về các sổ tay đó. Cách tiếp cận nào phù hợp nhất?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Grounding with Google Search, which draws on public web content rather than private manuals.",
        "text_vi": "Grounding with Google Search, dựa vào nội dung web công khai chứ không phải sổ tay riêng."
      },
      {
        "key": "B",
        "text": "RAG over the company's own documents, for example the prebuilt RAG in Agent Search.",
        "text_vi": "RAG trên tài liệu của chính công ty, ví dụ RAG dựng sẵn trong Agent Search."
      },
      {
        "key": "C",
        "text": "Relying on the model's built-in knowledge alone, with no connection to company documents.",
        "text_vi": "Chỉ dựa vào kiến thức sẵn có của mô hình, không kết nối với tài liệu công ty."
      },
      {
        "key": "D",
        "text": "Raising the temperature so the model recalls more details from its original training.",
        "text_vi": "Tăng temperature để mô hình nhớ thêm nhiều chi tiết từ quá trình huấn luyện ban đầu."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Private, internal content calls for grounding in first-party enterprise data with RAG, such as prebuilt RAG with Agent Search or RAG APIs. Grounding with Google Search uses world data and cannot see internal manuals.",
    "explanation_vi": "Nội dung riêng, nội bộ cần grounding bằng dữ liệu doanh nghiệp (first-party) với RAG, như RAG dựng sẵn trong Agent Search hoặc RAG APIs. Grounding with Google Search dùng dữ liệu thế giới và không thấy được sổ tay nội bộ.",
    "lessonId": "d3-t6",
    "objective": "3.3 Grounding and RAG"
  },
  {
    "id": 50,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "Which statement about the temperature setting is correct for a business user?",
    "question_vi": "Phát biểu nào về cài đặt temperature là đúng đối với người dùng doanh nghiệp?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Higher values make the model more accurate and remove the risk of hallucinations, so no human review of its results is needed.",
        "text_vi": "Giá trị cao làm mô hình chính xác hơn và loại bỏ rủi ro hallucination, nên không cần con người xem xét kết quả của nó."
      },
      {
        "key": "B",
        "text": "Higher values give more varied, creative output, while lower values give more consistent, predictable output.",
        "text_vi": "Giá trị cao cho đầu ra đa dạng, sáng tạo hơn, còn giá trị thấp cho đầu ra nhất quán, dễ dự đoán hơn."
      },
      {
        "key": "C",
        "text": "Temperature controls only the maximum number of words in each response.",
        "text_vi": "Temperature chỉ điều khiển số từ tối đa trong mỗi phản hồi."
      },
      {
        "key": "D",
        "text": "Lower values give the model access to more recent information from the internet.",
        "text_vi": "Giá trị thấp giúp mô hình truy cập thông tin mới hơn từ internet."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Temperature controls the randomness, or creativity, of word choices: raise it for brainstorming and lower it for predictable output such as compliance summaries. It does not affect length or knowledge.",
    "explanation_vi": "Temperature điều khiển độ ngẫu nhiên, hay mức sáng tạo, khi chọn từ: tăng cho động não và giảm cho đầu ra dễ dự đoán như bản tóm tắt tuân thủ. Nó không ảnh hưởng độ dài hay kiến thức.",
    "lessonId": "d3-t7",
    "objective": "3.3 Sampling parameters and settings"
  },
  {
    "id": 51,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "Which model setting is designed to filter out potentially harmful or inappropriate content in a customer-facing chatbot?",
    "question_vi": "Cài đặt nào của mô hình được thiết kế để lọc nội dung có thể gây hại hoặc không phù hợp trong chatbot đối mặt khách hàng?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Output length, which sets the maximum length of the generated text.",
        "text_vi": "Output length, đặt độ dài tối đa của văn bản được tạo."
      },
      {
        "key": "B",
        "text": "Top-p, which sets the cumulative probability of tokens considered when generating text.",
        "text_vi": "Top-p, đặt xác suất tích lũy của các token được xem xét khi tạo văn bản."
      },
      {
        "key": "C",
        "text": "Safety settings, which filter harmful content out of the model's output.",
        "text_vi": "Safety settings, lọc nội dung có hại khỏi đầu ra của mô hình."
      },
      {
        "key": "D",
        "text": "Token count, which measures the size of text in meaningful chunks of words and punctuation.",
        "text_vi": "Token count, đo kích thước văn bản theo các khối có nghĩa gồm từ và dấu câu."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Safety settings let you filter potentially harmful or inappropriate content. Output length, top-p and token count influence size and randomness rather than content safety.",
    "explanation_vi": "Safety settings cho phép lọc nội dung có thể gây hại hoặc không phù hợp. Output length, top-p và token count ảnh hưởng đến kích thước và độ ngẫu nhiên chứ không phải an toàn nội dung.",
    "lessonId": "d3-t7",
    "objective": "3.3 Sampling parameters and settings"
  },
  {
    "id": 52,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "A manufacturing company's leadership is excited about gen AI and asks where to begin. What should the leader do first?",
    "question_vi": "Ban lãnh đạo của một công ty sản xuất rất hào hứng với gen AI và hỏi nên bắt đầu từ đâu. Người lãnh đạo nên làm gì trước tiên?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Reserve the largest available computing cluster so that the team is ready for any future model, then give each team a separate budget to try different tools.",
        "text_vi": "Đặt trước cụm tính toán lớn nhất hiện có để nhóm sẵn sàng cho bất kỳ mô hình nào trong tương lai, rồi cấp cho mỗi nhóm một ngân sách riêng để thử các công cụ khác nhau."
      },
      {
        "key": "B",
        "text": "Fine-tune a model on all company data before deciding which business use case to pursue.",
        "text_vi": "Fine-tune một mô hình trên toàn bộ dữ liệu công ty trước khi quyết định theo đuổi use case nào."
      },
      {
        "key": "C",
        "text": "Identify a specific business problem and how success will be measured, then choose the type of solution.",
        "text_vi": "Xác định một vấn đề kinh doanh cụ thể và cách đo lường thành công, rồi mới chọn loại giải pháp."
      },
      {
        "key": "D",
        "text": "Let each department adopt different tools on its own, without any shared goals or priorities.",
        "text_vi": "Để mỗi phòng ban tự dùng các công cụ khác nhau, không có mục tiêu hay ưu tiên chung."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Google Cloud's recommended path starts from business requirements: pick focused use cases with clear value and success measures, then choose the right solution. Buying capacity or tuning first puts technology ahead of the problem.",
    "explanation_vi": "Lộ trình Google Cloud khuyến nghị bắt đầu từ yêu cầu kinh doanh: chọn các use case tập trung có giá trị rõ ràng và tiêu chí thành công, rồi mới chọn giải pháp phù hợp. Mua năng lực tính toán hay tuning trước là đặt công nghệ lên trước vấn đề.",
    "lessonId": "d4-t1",
    "objective": "4.1 Implementing a gen AI solution"
  },
  {
    "id": 53,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "A software company's engineering manager wants to cut the time developers spend on boilerplate code and unit tests. Which type of gen AI solution fits best?",
    "question_vi": "Quản lý kỹ thuật của một công ty phần mềm muốn giảm thời gian lập trình viên dành cho code lặp lại và unit test. Loại giải pháp gen AI nào phù hợp nhất?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Code generation, such as an AI coding assistant that suggests and writes code.",
        "text_vi": "Code generation, như trợ lý lập trình AI gợi ý và viết code."
      },
      {
        "key": "B",
        "text": "Video generation, which produces short clips from written descriptions of a scene.",
        "text_vi": "Video generation, tạo các đoạn clip ngắn từ mô tả bằng văn bản về một cảnh."
      },
      {
        "key": "C",
        "text": "Image generation, which creates pictures from text prompts for marketing material.",
        "text_vi": "Image generation, tạo hình ảnh từ prompt văn bản cho tài liệu marketing."
      },
      {
        "key": "D",
        "text": "Personalized recommendations, which tailor product suggestions to each online shopper.",
        "text_vi": "Personalized recommendations, điều chỉnh gợi ý sản phẩm theo từng khách mua sắm trực tuyến."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Code generation is the solution type that speeds up writing and testing code, for example with an AI coding assistant. The other types serve media creation or personalization, not developer productivity.",
    "explanation_vi": "Code generation là loại giải pháp giúp tăng tốc việc viết và kiểm thử code, ví dụ với trợ lý lập trình AI. Các loại còn lại phục vụ tạo nội dung đa phương tiện hoặc cá nhân hóa, không phải năng suất lập trình viên.",
    "lessonId": "d4-t1",
    "objective": "4.1 Implementing a gen AI solution"
  },
  {
    "id": 54,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "A health agency plans a gen AI assistant that will handle highly sensitive citizen records. What is the BEST approach when choosing a solution?",
    "question_vi": "Một cơ quan y tế lên kế hoạch cho trợ lý gen AI sẽ xử lý hồ sơ công dân rất nhạy cảm. Cách tiếp cận TỐT NHẤT khi chọn giải pháp là gì?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Choose the lowest-cost solution first and decide how to handle privacy after launch, and replace it later if privacy concerns become serious.",
        "text_vi": "Chọn giải pháp rẻ nhất trước và quyết định cách xử lý quyền riêng tư sau khi ra mắt, và thay thế sau nếu mối lo về quyền riêng tư trở nên nghiêm trọng."
      },
      {
        "key": "B",
        "text": "Choose the solution with the most features, regardless of where the data is sent.",
        "text_vi": "Chọn giải pháp có nhiều tính năng nhất, bất kể dữ liệu được gửi đi đâu."
      },
      {
        "key": "C",
        "text": "Paste sample records into a public chatbot to compare the quality of the answers.",
        "text_vi": "Dán các hồ sơ mẫu vào một chatbot công khai để so sánh chất lượng câu trả lời."
      },
      {
        "key": "D",
        "text": "Choose a solution with strong privacy and governance controls, and review how data is stored and used.",
        "text_vi": "Chọn giải pháp có kiểm soát quyền riêng tư và quản trị mạnh, và xem xét cách dữ liệu được lưu trữ và sử dụng."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Privacy is a key factor when choosing a gen AI solution: the more sensitive the data, the more important controls and governance become. Cost, features or quick tests cannot override that requirement.",
    "explanation_vi": "Quyền riêng tư là yếu tố then chốt khi chọn giải pháp gen AI: dữ liệu càng nhạy cảm thì kiểm soát và quản trị càng quan trọng. Chi phí, tính năng hay thử nhanh không thể thay thế yêu cầu đó.",
    "lessonId": "d4-t2",
    "objective": "4.1 Factors that shape gen AI needs"
  },
  {
    "id": 55,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "A startup has no in-house AI experts, a tight deadline and a limited budget for a customer-facing gen AI feature. What is the BEST approach?",
    "question_vi": "Một startup không có chuyên gia AI nội bộ, thời hạn gấp và ngân sách hạn chế cho tính năng gen AI hướng tới khách hàng. Cách tiếp cận TỐT NHẤT là gì?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Hire a large research team and train a foundation model from scratch before the first release.",
        "text_vi": "Thuê một đội nghiên cứu lớn và huấn luyện foundation model từ đầu trước khi phát hành lần đầu."
      },
      {
        "key": "B",
        "text": "Delay the project for a year until the company can afford a custom fully trained solution.",
        "text_vi": "Hoãn dự án một năm cho đến khi công ty đủ tiền mua một giải pháp tùy chỉnh được huấn luyện hoàn toàn."
      },
      {
        "key": "C",
        "text": "Ignore budget and timeline, and pick whichever approach has the most advanced technology.",
        "text_vi": "Bỏ qua ngân sách và thời gian, chọn cách tiếp cận có công nghệ tiên tiến nhất."
      },
      {
        "key": "D",
        "text": "Start with managed, pre-trained models and prebuilt offerings instead of building a custom model.",
        "text_vi": "Bắt đầu với các mô hình huấn luyện sẵn được quản lý và sản phẩm dựng sẵn thay vì xây mô hình tùy chỉnh."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "People, money and time are key planning factors. With little expertise, budget and time, pre-trained models and prebuilt or low-code offerings deliver value fastest.",
    "explanation_vi": "Con người, tiền bạc và thời gian là các yếu tố lập kế hoạch then chốt. Khi ít chuyên môn, ngân sách và thời gian, mô hình huấn luyện sẵn và sản phẩm dựng sẵn hoặc low-code mang lại giá trị nhanh nhất.",
    "lessonId": "d4-t2",
    "objective": "4.1 Factors that shape gen AI needs"
  },
  {
    "id": 56,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "Which approach best measures the impact of a gen AI initiative after launch?",
    "question_vi": "Cách nào đo lường tốt nhất tác động của một sáng kiến gen AI sau khi ra mắt?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Track KPIs tied to the business goal, such as handling time or customer satisfaction, against a baseline.",
        "text_vi": "Theo dõi các KPI gắn với mục tiêu kinh doanh, như thời gian xử lý hoặc mức hài lòng của khách hàng, so với mức nền."
      },
      {
        "key": "B",
        "text": "Count how many prompts employees typed, regardless of whether any work improved, then publish the total as proof that the project is delivering value.",
        "text_vi": "Đếm số prompt nhân viên đã gõ, bất kể công việc có được cải thiện hay không, rồi công bố tổng số đó làm bằng chứng dự án đang mang lại giá trị."
      },
      {
        "key": "C",
        "text": "Compare the size of the model with the size of models used by other companies.",
        "text_vi": "So sánh kích thước mô hình với kích thước mô hình mà các công ty khác dùng."
      },
      {
        "key": "D",
        "text": "Ask leaders whether the project feels successful, without collecting any measurements.",
        "text_vi": "Hỏi các lãnh đạo xem dự án có cảm giác thành công không, mà không thu thập số đo nào."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Impact should be measured against business goals using KPIs and a before-and-after comparison, such as average handling time or satisfaction scores. Usage counts and model size say nothing about business value.",
    "explanation_vi": "Tác động cần được đo theo mục tiêu kinh doanh bằng KPI và so sánh trước sau, như thời gian xử lý trung bình hoặc điểm hài lòng. Số lượt dùng và kích thước mô hình không nói lên giá trị kinh doanh.",
    "lessonId": "d4-t3",
    "objective": "4.1 Integrating gen AI and measuring impact"
  },
  {
    "id": 57,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "A bank's security team wants to control which employees and applications can call its gen AI resources on Google Cloud. Which tool is designed for this?",
    "question_vi": "Đội bảo mật của một ngân hàng muốn kiểm soát nhân viên và ứng dụng nào được gọi các tài nguyên gen AI trên Google Cloud. Công cụ nào được thiết kế cho việc này?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Security Command Center, which gives visibility into the organization's security posture.",
        "text_vi": "Security Command Center, cung cấp khả năng quan sát tình trạng bảo mật của tổ chức."
      },
      {
        "key": "B",
        "text": "Model Garden, which lets teams browse and choose between available foundation models.",
        "text_vi": "Model Garden, cho phép các nhóm duyệt và chọn giữa các foundation model có sẵn."
      },
      {
        "key": "C",
        "text": "Identity and Access Management (IAM), which controls access to resources.",
        "text_vi": "Identity and Access Management (IAM), kiểm soát quyền truy cập tài nguyên."
      },
      {
        "key": "D",
        "text": "Gemini Notebook, which answers questions based on files that a user has uploaded.",
        "text_vi": "Gemini Notebook, trả lời câu hỏi dựa trên các tệp người dùng đã tải lên."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "IAM is the Google Cloud tool for controlling who can access which resources. Security Command Center is the tempting distractor, but it provides visibility into security posture rather than granting or limiting access.",
    "explanation_vi": "IAM là công cụ của Google Cloud để kiểm soát ai được truy cập tài nguyên nào. Security Command Center là phương án dễ nhầm, nhưng nó cung cấp khả năng quan sát tình trạng bảo mật chứ không cấp hay giới hạn quyền truy cập.",
    "lessonId": "d4-t4",
    "objective": "4.2 Secure AI and SAIF"
  },
  {
    "id": 58,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "What is Google's Secure AI Framework (SAIF) designed to help organizations do?",
    "question_vi": "Secure AI Framework (SAIF) của Google được thiết kế để giúp các tổ chức làm gì?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Choose the lowest-priced foundation model for each business task.",
        "text_vi": "Chọn foundation model giá thấp nhất cho từng tác vụ kinh doanh."
      },
      {
        "key": "B",
        "text": "Manage the security risks of AI and ML systems across their lifecycle.",
        "text_vi": "Quản lý các rủi ro bảo mật của hệ thống AI và ML trong suốt vòng đời của chúng."
      },
      {
        "key": "C",
        "text": "Measure customer satisfaction in AI-powered contact centers.",
        "text_vi": "Đo mức hài lòng của khách hàng trong các trung tâm liên hệ dùng AI."
      },
      {
        "key": "D",
        "text": "Translate formatted documents while keeping their original layout.",
        "text_vi": "Dịch các tài liệu có định dạng mà vẫn giữ nguyên bố cục gốc."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "SAIF helps organizations manage AI and ML security risks and keep systems secure throughout the lifecycle. The distractors describe unrelated cost, contact center and translation topics.",
    "explanation_vi": "SAIF giúp các tổ chức quản lý rủi ro bảo mật của AI và ML và giữ hệ thống an toàn trong suốt vòng đời. Các phương án nhiễu mô tả những chủ đề không liên quan như chi phí, trung tâm liên hệ và dịch thuật.",
    "lessonId": "d4-t4",
    "objective": "4.2 Secure AI and SAIF"
  },
  {
    "id": 59,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "A bank's AI loan-screening assistant produces noticeably different recommendations for applicants from different demographic groups. Which TWO actions best support responsible AI? (Select TWO.)",
    "question_vi": "Trợ lý AI sàng lọc khoản vay của một ngân hàng cho ra các khuyến nghị khác biệt rõ rệt giữa những nhóm nhân khẩu học khác nhau. Hai hành động nào hỗ trợ tốt nhất cho AI có trách nhiệm? (Chọn HAI.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "Keep the model's behavior undocumented so that competitors cannot copy how it works.",
        "text_vi": "Giữ hành vi của mô hình không được tài liệu hóa để đối thủ không sao chép được cách nó hoạt động."
      },
      {
        "key": "B",
        "text": "Review the training data for representation gaps and test the outputs across groups.",
        "text_vi": "Rà soát dữ liệu huấn luyện để tìm khoảng trống về mức độ đại diện và kiểm thử đầu ra giữa các nhóm."
      },
      {
        "key": "C",
        "text": "Increase the temperature so that decisions vary more from one applicant to the next.",
        "text_vi": "Tăng temperature để quyết định thay đổi nhiều hơn giữa các ứng viên."
      },
      {
        "key": "D",
        "text": "Remove performance monitoring after launch in order to simplify day-to-day operations.",
        "text_vi": "Bỏ giám sát hiệu năng sau khi ra mắt để đơn giản hóa vận hành hằng ngày."
      },
      {
        "key": "E",
        "text": "Add human review and ongoing monitoring of the assistant's recommendations.",
        "text_vi": "Thêm bước con người xem xét và giám sát liên tục các khuyến nghị của trợ lý."
      }
    ],
    "answer": [
      "B",
      "E"
    ],
    "explanation": "Bias often comes from unrepresentative data, so reviewing data and testing across groups addresses the root cause. Human oversight and monitoring add accountability for high-stakes decisions. Hiding behavior or removing monitoring does the opposite.",
    "explanation_vi": "Thiên lệch thường đến từ dữ liệu thiếu tính đại diện, nên rà soát dữ liệu và kiểm thử giữa các nhóm xử lý đúng nguyên nhân gốc. Sự giám sát của con người và theo dõi liên tục tăng tính trách nhiệm cho các quyết định hệ trọng. Che giấu hành vi hay bỏ giám sát làm điều ngược lại.",
    "lessonId": "d4-t5",
    "objective": "4.3 Responsible AI"
  },
  {
    "id": 60,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "A hospital group wants to test a gen AI assistant on patient notes. Which practice best protects patient privacy during testing?",
    "question_vi": "Một nhóm bệnh viện muốn thử nghiệm trợ lý gen AI trên ghi chú của bệnh nhân. Biện pháp nào bảo vệ tốt nhất quyền riêng tư của bệnh nhân trong lúc thử nghiệm?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Remove only the patient's last name and keep other identifiers such as birth date and address.",
        "text_vi": "Chỉ bỏ họ của bệnh nhân và giữ các thông tin nhận dạng khác như ngày sinh và địa chỉ."
      },
      {
        "key": "B",
        "text": "Use the complete records unchanged, because internal tests are exempt from privacy concerns.",
        "text_vi": "Dùng nguyên bản hồ sơ đầy đủ, vì thử nghiệm nội bộ không phải quan tâm đến quyền riêng tư."
      },
      {
        "key": "C",
        "text": "Anonymize or pseudonymize identifiers before using the notes, and limit who can access the data.",
        "text_vi": "Ẩn danh hoặc giả danh hóa các thông tin nhận dạng trước khi dùng ghi chú, và giới hạn người được truy cập dữ liệu."
      },
      {
        "key": "D",
        "text": "Share the notes with any outside vendor that asks, to get more opinions on the results.",
        "text_vi": "Chia sẻ ghi chú với bất kỳ nhà cung cấp bên ngoài nào yêu cầu để lấy thêm ý kiến về kết quả."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Responsible AI includes privacy protection, such as anonymization or pseudonymization of identifiers plus access limits. Leaving other identifiers in place can still identify patients, and internal tests are not exempt.",
    "explanation_vi": "AI có trách nhiệm bao gồm bảo vệ quyền riêng tư, như ẩn danh hoặc giả danh hóa thông tin nhận dạng cùng giới hạn truy cập. Để lại các thông tin nhận dạng khác vẫn có thể xác định được bệnh nhân, và thử nghiệm nội bộ không được miễn trừ.",
    "lessonId": "d4-t5",
    "objective": "4.3 Responsible AI"
  }
];
