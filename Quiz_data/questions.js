window.QUIZ_DATA_QUESTIONS = [
  {
    "id": 1,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "A vendor says its product is built on a foundation model. Which statement best describes a foundation model?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "A small model built from scratch to do one narrow job, such as scoring loan applications",
        "text_vi": "Một mô hình nhỏ xây dựng từ đầu chỉ để làm một việc hẹp, chẳng hạn chấm điểm hồ sơ vay"
      },
      {
        "key": "B",
        "text": "A large model trained on broad, diverse data that can be adapted to many different tasks",
        "text_vi": "Một mô hình lớn được huấn luyện trên dữ liệu rộng và đa dạng, có thể điều chỉnh cho nhiều tác vụ khác nhau"
      },
      {
        "key": "C",
        "text": "A managed database that stores company documents so that they can be searched later",
        "text_vi": "Một cơ sở dữ liệu được quản lý, lưu tài liệu công ty để tìm kiếm về sau"
      },
      {
        "key": "D",
        "text": "A security framework that sets the rules for deploying AI systems in a company",
        "text_vi": "Một khung bảo mật đặt ra quy tắc triển khai hệ thống AI trong công ty"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "A foundation model is trained on massive, diverse data and can be reused for many tasks, which is why one model can summarize, translate and write code. A model built for a single narrow job is a task-specific ML model, not a foundation model.",
    "question_vi": "Một nhà cung cấp nói sản phẩm của họ được xây dựng trên một foundation model. Phát biểu nào mô tả đúng nhất foundation model?",
    "explanation_vi": "Foundation model được huấn luyện trên dữ liệu khổng lồ, đa dạng và có thể tái sử dụng cho nhiều tác vụ, nên một mô hình có thể vừa tóm tắt, dịch, vừa viết code. Mô hình chỉ làm một việc hẹp là mô hình ML riêng cho tác vụ, không phải foundation model.",
    "lessonId": "d1-t1",
    "objective": "1.1 Core gen AI concepts and use cases"
  },
  {
    "id": 2,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "How does a generative AI tool that writes personalized marketing emails differ from a machine learning model that predicts which customers will churn?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "It creates new content such as text, while the churn model predicts from existing data",
        "text_vi": "Nó tạo ra nội dung mới như văn bản, còn mô hình dự đoán rời bỏ chỉ đưa ra dự đoán từ dữ liệu có sẵn"
      },
      {
        "key": "B",
        "text": "It is not machine learning at all, because writing text requires rule-based software only",
        "text_vi": "Nó hoàn toàn không phải machine learning, vì viết văn bản chỉ cần phần mềm dựa trên quy tắc"
      },
      {
        "key": "C",
        "text": "It can only sort customers into groups, which is the main purpose of generative AI",
        "text_vi": "Nó chỉ có thể xếp khách hàng vào các nhóm, đó là mục đích chính của gen AI"
      },
      {
        "key": "D",
        "text": "It works only with numbers in tables, while the churn model is built to handle free text",
        "text_vi": "Nó chỉ làm việc với số trong bảng, còn mô hình dự đoán rời bỏ được thiết kế để xử lý văn bản tự do"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Gen AI is an application of machine learning that creates new content, while a predictive model classifies or forecasts from existing data. Both are machine learning, so the claim that gen AI is not ML is wrong.",
    "question_vi": "Công cụ gen AI viết email marketing cá nhân hóa khác gì so với mô hình machine learning dự đoán khách hàng nào sẽ rời bỏ?",
    "explanation_vi": "Gen AI là một ứng dụng của machine learning nhằm tạo nội dung mới, còn mô hình dự đoán thì phân loại hoặc dự báo từ dữ liệu có sẵn. Cả hai đều là machine learning nên nhận định gen AI không phải ML là sai.",
    "lessonId": "d1-t1",
    "objective": "1.1 Core gen AI concepts and use cases"
  },
  {
    "id": 3,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "A media company wants one model that can watch a short video clip, read a typed question about it and reply with a written summary. The team wants to avoid chaining several separate tools together. Which type of model fits best?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "A text-only large language model that reads typed prompts and nothing else",
        "text_vi": "Một mô hình ngôn ngữ lớn chỉ xử lý văn bản, chỉ đọc lời nhắc được gõ vào"
      },
      {
        "key": "B",
        "text": "A diffusion model that creates images by gradually removing noise from random pixels",
        "text_vi": "Một mô hình diffusion tạo ảnh bằng cách dần loại nhiễu khỏi các điểm ảnh ngẫu nhiên"
      },
      {
        "key": "C",
        "text": "A multimodal foundation model that handles video and text together",
        "text_vi": "Một multimodal foundation model xử lý đồng thời video và văn bản"
      },
      {
        "key": "D",
        "text": "A supervised classifier trained on labeled clips to tag each video with one category",
        "text_vi": "Một bộ phân loại có giám sát, huấn luyện trên các clip có nhãn để gán mỗi video vào một danh mục"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Understanding video and text together and answering in text is the job of a multimodal model. A text-only LLM cannot take in the video, and a diffusion model is built to generate images or video rather than summarize them.",
    "question_vi": "Một công ty truyền thông muốn một mô hình duy nhất có thể xem một đoạn video ngắn, đọc câu hỏi được gõ về video đó và trả lời bằng bản tóm tắt. Nhóm không muốn ghép nhiều công cụ rời rạc. Loại mô hình nào phù hợp nhất?",
    "explanation_vi": "Hiểu cả video lẫn văn bản rồi trả lời bằng văn bản là việc của mô hình đa phương thức. LLM chỉ văn bản không nhận được video, còn mô hình diffusion được tạo ra để sinh ảnh hoặc video chứ không phải để tóm tắt.",
    "lessonId": "d1-t1",
    "objective": "1.1 Core gen AI concepts and use cases"
  },
  {
    "id": 4,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "A bank wants to discover natural customer segments in its transaction data. Nobody has defined the segments in advance and no customer has been labeled. Which machine learning approach fits best?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Supervised learning, which needs every customer to be tagged with a segment label first",
        "text_vi": "Supervised learning, đòi hỏi mọi khách hàng phải được gán nhãn nhóm từ trước"
      },
      {
        "key": "B",
        "text": "Unsupervised learning, which finds patterns and groupings in unlabeled data",
        "text_vi": "Unsupervised learning, tìm ra các mẫu và nhóm trong dữ liệu chưa gán nhãn"
      },
      {
        "key": "C",
        "text": "Reinforcement learning, which improves through rewards after each decision it makes",
        "text_vi": "Reinforcement learning, cải thiện nhờ phần thưởng sau mỗi quyết định nó đưa ra"
      },
      {
        "key": "D",
        "text": "Prompt tuning, which learns a small set of extra parameters to steer a language model",
        "text_vi": "Prompt tuning, học một tập tham số nhỏ bổ sung để điều hướng một mô hình ngôn ngữ"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Finding groupings without predefined categories or labels is the classic use of unsupervised learning. Supervised learning would only work if the segments were already labeled.",
    "question_vi": "Một ngân hàng muốn tìm ra các nhóm khách hàng tự nhiên trong dữ liệu giao dịch. Chưa ai định nghĩa trước các nhóm và chưa khách hàng nào được gán nhãn. Cách tiếp cận machine learning nào phù hợp nhất?",
    "explanation_vi": "Tìm các nhóm khi không có danh mục định sẵn hay nhãn là ứng dụng điển hình của unsupervised learning. Supervised learning chỉ dùng được khi các nhóm đã có nhãn.",
    "lessonId": "d1-t2",
    "objective": "1.1 ML approaches and the ML lifecycle"
  },
  {
    "id": 5,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "A manufacturer deployed a defect-prediction model last year. Over recent months its accuracy has slowly dropped because production conditions have changed. Which capability on Agent Platform (formerly Vertex AI) is designed to detect this kind of drift?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Model Registry, which stores and versions trained models so they can be rolled back",
        "text_vi": "Model Registry, lưu và quản lý phiên bản các mô hình đã huấn luyện để có thể quay lại phiên bản cũ"
      },
      {
        "key": "B",
        "text": "Feature Store, which manages and serves reusable input features to models",
        "text_vi": "Feature Store, quản lý và cung cấp các đặc trưng đầu vào có thể tái sử dụng cho mô hình"
      },
      {
        "key": "C",
        "text": "Model Monitoring, which tracks model performance and drift after deployment",
        "text_vi": "Model Monitoring, theo dõi hiệu năng mô hình và drift sau khi triển khai"
      },
      {
        "key": "D",
        "text": "Model Garden, which lists models from Google and partners that teams can choose from",
        "text_vi": "Model Garden, liệt kê các mô hình của Google và đối tác để các nhóm lựa chọn"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Model Monitoring watches a deployed model for drift, meaning accuracy changing as real-world data changes. Model Registry is tempting, but it handles versions rather than detecting degraded performance.",
    "question_vi": "Một nhà sản xuất triển khai mô hình dự đoán lỗi từ năm ngoái. Vài tháng gần đây độ chính xác giảm dần vì điều kiện sản xuất thay đổi. Chức năng nào trên Agent Platform (trước đây là Vertex AI) được thiết kế để phát hiện kiểu drift này?",
    "explanation_vi": "Model Monitoring theo dõi mô hình đã triển khai để phát hiện drift, tức độ chính xác thay đổi khi dữ liệu thực tế thay đổi. Model Registry dễ gây nhầm nhưng nó quản lý phiên bản chứ không phát hiện hiệu năng suy giảm.",
    "lessonId": "d1-t2",
    "objective": "1.1 ML approaches and the ML lifecycle"
  },
  {
    "id": 6,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "Which statement best describes reinforcement learning?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "A system learns from examples in which each input already comes with the correct answer attached",
        "text_vi": "Hệ thống học từ các ví dụ mà mỗi đầu vào đã đi kèm đáp án đúng"
      },
      {
        "key": "B",
        "text": "A system learns by trying actions and getting rewards or penalties, such as a routing engine",
        "text_vi": "Hệ thống học bằng cách thử hành động và nhận phần thưởng hoặc hình phạt, ví dụ như công cụ định tuyến"
      },
      {
        "key": "C",
        "text": "A system groups similar items together without any feedback signal or predefined categories",
        "text_vi": "Hệ thống gom các mục giống nhau lại với nhau mà không có phản hồi hay danh mục định sẵn"
      },
      {
        "key": "D",
        "text": "A system is given better instructions by staff who rewrite the prompts it receives",
        "text_vi": "Hệ thống được nhân viên viết lại lời nhắc để nhận hướng dẫn tốt hơn"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Reinforcement learning learns through interaction and feedback, maximizing rewards and minimizing penalties. Learning from labeled answers is supervised learning, and grouping without feedback is unsupervised learning.",
    "question_vi": "Phát biểu nào mô tả đúng nhất reinforcement learning?",
    "explanation_vi": "Reinforcement learning học qua tương tác và phản hồi, tối đa hóa phần thưởng và giảm hình phạt. Học từ đáp án có nhãn là supervised learning, còn gom nhóm không có phản hồi là unsupervised learning.",
    "lessonId": "d1-t2",
    "objective": "1.1 ML approaches and the ML lifecycle"
  },
  {
    "id": 7,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "A film studio wants a model that turns a short text brief into a promotional video clip. The team has a small budget and a tight deadline. What should it confirm FIRST when choosing a foundation model?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "That the model is the largest one the vendor offers, so quality is guaranteed",
        "text_vi": "Mô hình có phải là mô hình lớn nhất nhà cung cấp đưa ra hay không, để đảm bảo chất lượng"
      },
      {
        "key": "B",
        "text": "That the model is the cheapest text generator, so captions can be added to still images",
        "text_vi": "Mô hình có phải là công cụ sinh văn bản rẻ nhất hay không, để thêm chú thích vào ảnh tĩnh"
      },
      {
        "key": "C",
        "text": "That the model supports video output, since the modality must match the need",
        "text_vi": "Mô hình có hỗ trợ đầu ra là video hay không, vì modality phải khớp với nhu cầu"
      },
      {
        "key": "D",
        "text": "That the model has the longest context window, so the brief can be extremely long",
        "text_vi": "Mô hình có cửa sổ ngữ cảnh dài nhất hay không, để bản mô tả có thể cực kỳ dài"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "The requirement is video, so modality eliminates text-only models before cost or size is compared. The best model is the one that fits the stated constraints, not the largest one.",
    "question_vi": "Một hãng phim muốn có mô hình biến bản mô tả ngắn thành đoạn video quảng bá. Ngân sách nhỏ và thời hạn gấp. Nhóm cần xác nhận điều gì ĐẦU TIÊN khi chọn foundation model?",
    "explanation_vi": "Yêu cầu là video nên modality loại bỏ các mô hình chỉ văn bản trước khi so sánh chi phí hay kích thước. Mô hình tốt nhất là mô hình phù hợp ràng buộc đã nêu, không phải mô hình lớn nhất.",
    "lessonId": "d1-t3",
    "objective": "1.1 Choosing a foundation model and use cases"
  },
  {
    "id": 8,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "An insurer wants to summarize policy documents that run to hundreds of pages, ideally in a single request, so that adjusters do not have to split files by hand. Which model characteristic matters most for this requirement?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "The ability to generate video from still photos for marketing campaigns",
        "text_vi": "Khả năng tạo video từ ảnh tĩnh cho các chiến dịch tiếp thị"
      },
      {
        "key": "B",
        "text": "A context window large enough to hold the full document in one request",
        "text_vi": "Cửa sổ ngữ cảnh đủ lớn để chứa toàn bộ tài liệu trong một yêu cầu"
      },
      {
        "key": "C",
        "text": "A lightweight size that lets the model run offline on an adjuster's phone",
        "text_vi": "Kích thước nhẹ để mô hình chạy ngoại tuyến trên điện thoại của chuyên viên"
      },
      {
        "key": "D",
        "text": "Support for speaking replies aloud in many different voices and accents",
        "text_vi": "Hỗ trợ đọc to câu trả lời bằng nhiều giọng và vùng miền khác nhau"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "The context window sets how much text a model can consider at once, so long documents need a large one. A larger window gives more context but also increases compute cost, so it should match the need.",
    "question_vi": "Một công ty bảo hiểm muốn tóm tắt các tài liệu hợp đồng dài hàng trăm trang, tốt nhất trong một lần yêu cầu, để chuyên viên không phải tự chia nhỏ tệp. Đặc điểm nào của mô hình quan trọng nhất cho yêu cầu này?",
    "explanation_vi": "Cửa sổ ngữ cảnh quyết định lượng văn bản mô hình xử lý cùng lúc, nên tài liệu dài cần cửa sổ lớn. Cửa sổ lớn hơn cho nhiều ngữ cảnh hơn nhưng cũng tốn tính toán hơn, nên cần chọn vừa đủ nhu cầu.",
    "lessonId": "d1-t3",
    "objective": "1.1 Choosing a foundation model and use cases"
  },
  {
    "id": 9,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "An assistant helps employees find the right answer buried in thousands of internal documents at the moment they need it. Which gen AI value does this describe?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Create: generating brand-new content from scratch for a campaign",
        "text_vi": "Create: tạo nội dung hoàn toàn mới từ đầu cho một chiến dịch"
      },
      {
        "key": "B",
        "text": "Automate: taking over a repetitive manual task from start to finish",
        "text_vi": "Automate: đảm nhận một tác vụ thủ công lặp lại từ đầu đến cuối"
      },
      {
        "key": "C",
        "text": "Summarize: condensing long material into a short readable brief",
        "text_vi": "Summarize: cô đọng tài liệu dài thành bản tóm tắt ngắn dễ đọc"
      },
      {
        "key": "D",
        "text": "Discover: finding relevant information when it is needed",
        "text_vi": "Discover: tìm thông tin liên quan vào đúng lúc cần"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "The value is surfacing the right information at the right time, which the exam guide calls discover. Summarize would apply only if the goal were to condense a document rather than locate it.",
    "question_vi": "Một trợ lý giúp nhân viên tìm đúng câu trả lời nằm trong hàng nghìn tài liệu nội bộ vào đúng lúc họ cần. Đây là giá trị nào của gen AI?",
    "explanation_vi": "Giá trị ở đây là đưa đúng thông tin ra đúng lúc, được hướng dẫn thi gọi là discover. Summarize chỉ đúng nếu mục tiêu là cô đọng một tài liệu chứ không phải tìm ra nó.",
    "lessonId": "d1-t3",
    "objective": "1.1 Choosing a foundation model and use cases"
  },
  {
    "id": 10,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "A retailer's shopping assistant gives conflicting answers about the same product. Investigation shows each regional system stores it with different units, names and formats. Which data quality characteristic is the main problem?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Completeness: every record has all of the fields that are needed",
        "text_vi": "Completeness (tính đầy đủ): mọi bản ghi đều có đủ các trường cần thiết"
      },
      {
        "key": "B",
        "text": "Relevance: the data relates to the question that is being asked",
        "text_vi": "Relevance (tính liên quan): dữ liệu liên quan đến câu hỏi đang được đặt ra"
      },
      {
        "key": "C",
        "text": "Availability: the data can be reached by the system whenever needed",
        "text_vi": "Availability (tính sẵn sàng): hệ thống có thể truy cập dữ liệu bất cứ khi nào cần"
      },
      {
        "key": "D",
        "text": "Consistency: data should follow the same format and meaning everywhere",
        "text_vi": "Consistency (tính nhất quán): dữ liệu nên theo cùng định dạng và ý nghĩa ở mọi nơi"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "The same item stored differently across systems is the textbook example of inconsistent data, which confuses the model. Completeness would be the issue only if fields were missing.",
    "question_vi": "Trợ lý mua sắm của một nhà bán lẻ đưa ra câu trả lời mâu thuẫn về cùng một sản phẩm. Điều tra cho thấy mỗi hệ thống khu vực lưu sản phẩm đó với đơn vị, tên và định dạng khác nhau. Đặc điểm chất lượng dữ liệu nào là vấn đề chính?",
    "explanation_vi": "Cùng một mặt hàng nhưng được lưu khác nhau giữa các hệ thống là ví dụ điển hình của dữ liệu không nhất quán, làm mô hình bị nhầm. Completeness chỉ là vấn đề nếu thiếu trường dữ liệu.",
    "lessonId": "d1-t4",
    "objective": "1.2 Data types, quality and accessibility"
  },
  {
    "id": 11,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "A hospital group wants to train a supervised model to flag abnormal scans. Its large archive of images has no diagnosis tags, and radiologists have limited time. What is the main data obstacle?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Medical images are unstructured data, so no machine learning model can learn from them",
        "text_vi": "Ảnh y tế là dữ liệu phi cấu trúc, nên không mô hình machine learning nào học được từ chúng"
      },
      {
        "key": "B",
        "text": "The images are unlabeled, so they must be labeled before supervised training",
        "text_vi": "Ảnh chưa được gán nhãn, nên phải gán nhãn trước khi huấn luyện có giám sát"
      },
      {
        "key": "C",
        "text": "The archive is too old, because models only learn from data collected in the last year",
        "text_vi": "Kho ảnh quá cũ, vì mô hình chỉ học được từ dữ liệu thu thập trong vòng một năm gần nhất"
      },
      {
        "key": "D",
        "text": "Supervised learning requires free-text reports instead of images as its only input type",
        "text_vi": "Supervised learning chỉ nhận báo cáo văn bản tự do thay vì ảnh làm loại đầu vào duy nhất"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Supervised learning needs labeled data, and raw images without tags are unlabeled. Unstructured data such as images is perfectly usable once it is labeled.",
    "question_vi": "Một nhóm bệnh viện muốn huấn luyện mô hình có giám sát để đánh dấu ảnh chụp bất thường. Kho ảnh lớn của họ không có nhãn chẩn đoán và các bác sĩ chẩn đoán hình ảnh có ít thời gian. Trở ngại dữ liệu chính là gì?",
    "explanation_vi": "Supervised learning cần dữ liệu có nhãn, còn ảnh thô không có tag là dữ liệu chưa gán nhãn. Dữ liệu phi cấu trúc như ảnh hoàn toàn dùng được sau khi được gán nhãn.",
    "lessonId": "d1-t4",
    "objective": "1.2 Data types, quality and accessibility"
  },
  {
    "id": 12,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "An insurance company stores many kinds of data. Which TWO of the following are examples of unstructured data? (Select TWO.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "A relational table listing policy numbers and premiums",
        "text_vi": "Một bảng quan hệ liệt kê số hợp đồng và phí bảo hiểm"
      },
      {
        "key": "B",
        "text": "Photos of vehicle damage submitted with claims",
        "text_vi": "Ảnh hư hại xe được gửi kèm hồ sơ bồi thường"
      },
      {
        "key": "C",
        "text": "A spreadsheet column holding each claim amount",
        "text_vi": "Một cột trong bảng tính chứa số tiền của từng hồ sơ bồi thường"
      },
      {
        "key": "D",
        "text": "Recorded audio of customer service calls",
        "text_vi": "Bản ghi âm các cuộc gọi chăm sóc khách hàng"
      },
      {
        "key": "E",
        "text": "A database field storing each customer's date of birth",
        "text_vi": "Một trường trong cơ sở dữ liệu lưu ngày sinh của từng khách hàng"
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "explanation": "Images and audio do not fit a predefined tabular format, so they are unstructured. Tables, spreadsheet columns and database fields are structured data.",
    "question_vi": "Một công ty bảo hiểm lưu nhiều loại dữ liệu. Hai mục nào sau đây là ví dụ về dữ liệu phi cấu trúc? (Chọn HAI.)",
    "explanation_vi": "Ảnh và âm thanh không theo định dạng bảng định sẵn nên là dữ liệu phi cấu trúc. Bảng, cột bảng tính và trường cơ sở dữ liệu là dữ liệu có cấu trúc.",
    "lessonId": "d1-t4",
    "objective": "1.2 Data types, quality and accessibility"
  },
  {
    "id": 13,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "A small SaaS startup has no machine learning specialists and wants to add an AI feature this quarter. It would rather not manage servers or train models. At which layers of the gen AI landscape should it mainly work for the fastest time-to-value?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "The infrastructure layer, by provisioning its own accelerators and servers",
        "text_vi": "Tầng hạ tầng, bằng cách tự cấp phát bộ tăng tốc và máy chủ"
      },
      {
        "key": "B",
        "text": "The models layer, by training a new foundation model from scratch",
        "text_vi": "Tầng mô hình, bằng cách huấn luyện một foundation model mới từ đầu"
      },
      {
        "key": "C",
        "text": "The platform layer, by building its own deployment tooling before anything else",
        "text_vi": "Tầng nền tảng, bằng cách tự xây công cụ triển khai trước tiên"
      },
      {
        "key": "D",
        "text": "The upper layers, using ready-made applications and agents",
        "text_vi": "Các tầng trên, dùng các ứng dụng và agent làm sẵn"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Higher layers mean faster adoption with less effort, though less control. Working at the infrastructure or model layer demands expertise and time that this startup lacks.",
    "question_vi": "Một startup SaaS nhỏ không có chuyên gia machine learning và muốn thêm tính năng AI trong quý này. Họ không muốn quản lý máy chủ hay huấn luyện mô hình. Để có giá trị nhanh nhất, startup nên chủ yếu làm việc ở các tầng nào của bức tranh gen AI?",
    "explanation_vi": "Tầng càng cao thì triển khai càng nhanh và ít công sức, đổi lại ít quyền kiểm soát hơn. Làm ở tầng hạ tầng hoặc mô hình đòi hỏi chuyên môn và thời gian mà startup này không có.",
    "lessonId": "d1-t5",
    "objective": "1.3 Layers of the gen AI landscape"
  },
  {
    "id": 14,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "A travel company builds a system that takes a goal such as \"rebook this disrupted traveler\". It then uses a model plus booking and email tools to carry out the steps on its own. Which layer of the gen AI landscape does this describe?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Infrastructure, where servers and chips store and run models",
        "text_vi": "Infrastructure, nơi máy chủ và chip lưu trữ và chạy các mô hình"
      },
      {
        "key": "B",
        "text": "Platforms, where APIs and deployment tools connect models to agents",
        "text_vi": "Platforms, nơi API và công cụ triển khai kết nối mô hình với agent"
      },
      {
        "key": "C",
        "text": "Agents, where a model uses tools to pursue a goal",
        "text_vi": "Agents, nơi mô hình dùng công cụ để theo đuổi một mục tiêu"
      },
      {
        "key": "D",
        "text": "Applications, where end users interact with the finished product",
        "text_vi": "Applications, nơi người dùng cuối tương tác với sản phẩm hoàn chỉnh"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "An agent pursues a goal using inputs and the tools available to it. Applications are what users see, which makes that option tempting, but the goal-directed use of tools is the agent layer.",
    "question_vi": "Một công ty du lịch xây dựng hệ thống nhận mục tiêu như \"đặt lại chuyến cho hành khách bị gián đoạn\", rồi dùng mô hình cùng các công cụ đặt vé và email để tự thực hiện từng bước. Đây là tầng nào của bức tranh gen AI?",
    "explanation_vi": "Agent theo đuổi mục tiêu bằng đầu vào và các công cụ sẵn có. Applications là phần người dùng nhìn thấy nên dễ gây nhầm, nhưng việc dùng công cụ hướng tới mục tiêu thuộc tầng agent.",
    "lessonId": "d1-t5",
    "objective": "1.3 Layers of the gen AI landscape"
  },
  {
    "id": 15,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "An energy utility's IT lead says the company needs a platform layer rather than managing its own servers. Which statement best describes the platform layer of the gen AI landscape?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "It consists of the physical servers, GPUs and TPUs that store data and run models",
        "text_vi": "Nó gồm các máy chủ, GPU và TPU dùng để lưu trữ và chạy mô hình"
      },
      {
        "key": "B",
        "text": "It is the user-facing interface where employees chat with an assistant every day",
        "text_vi": "Nó là giao diện hướng tới người dùng, nơi nhân viên trò chuyện với trợ lý"
      },
      {
        "key": "C",
        "text": "It offers APIs, data management and deployment tools that connect models to agents",
        "text_vi": "Nó cung cấp API, quản lý dữ liệu và công cụ triển khai, kết nối mô hình với agent"
      },
      {
        "key": "D",
        "text": "It is the trained algorithm that generates text, images or code for the business",
        "text_vi": "Nó là thuật toán đã huấn luyện để sinh văn bản, hình ảnh hoặc code"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Platforms bridge models and agents and simplify infrastructure management through APIs, data management and deployment tools. Servers and chips are infrastructure, and the trained algorithm is the model layer.",
    "question_vi": "Trưởng bộ phận CNTT của một công ty điện lực nói công ty cần tầng nền tảng thay vì tự quản lý máy chủ. Phát biểu nào mô tả đúng nhất tầng platform trong bức tranh gen AI?",
    "explanation_vi": "Platform là cầu nối giữa mô hình và agent, đơn giản hóa việc quản lý hạ tầng bằng API, quản lý dữ liệu và công cụ triển khai. Máy chủ và chip là hạ tầng, còn thuật toán đã huấn luyện là tầng mô hình.",
    "lessonId": "d1-t5",
    "objective": "1.3 Layers of the gen AI landscape"
  },
  {
    "id": 16,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "A travel brand has thousands of still destination photos. Its social team wants to turn them into short video clips quickly, without hiring a production crew. Which Google model is built for this task?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Imagen, which generates images from text descriptions",
        "text_vi": "Imagen, tạo hình ảnh từ mô tả văn bản"
      },
      {
        "key": "B",
        "text": "Gemma, a lightweight open model for local deployment",
        "text_vi": "Gemma, một mô hình mở, nhẹ để triển khai cục bộ"
      },
      {
        "key": "C",
        "text": "Chirp, a speech model for transcribing audio recordings",
        "text_vi": "Chirp, một mô hình giọng nói để chuyển âm thanh thành văn bản"
      },
      {
        "key": "D",
        "text": "Veo, which generates video from text or still images",
        "text_vi": "Veo, tạo video từ văn bản hoặc ảnh tĩnh"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Veo generates video from text or still images. Imagen is the tempting alternative, but it produces still images rather than video.",
    "question_vi": "Một thương hiệu du lịch có hàng nghìn ảnh tĩnh về các điểm đến. Nhóm mạng xã hội muốn nhanh chóng biến chúng thành các clip video ngắn mà không cần thuê đội sản xuất. Mô hình nào của Google được xây dựng cho việc này?",
    "explanation_vi": "Veo tạo video từ văn bản hoặc ảnh tĩnh. Imagen là lựa chọn dễ gây nhầm, nhưng nó chỉ tạo ảnh tĩnh chứ không tạo video.",
    "lessonId": "d1-t6",
    "objective": "1.4 Google foundation models"
  },
  {
    "id": 17,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "A public agency must keep citizen data on its own hardware for compliance. It wants a lightweight, customizable model that its engineers can run locally. Which Google model family fits best?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Veo, a model that generates video clips from text descriptions",
        "text_vi": "Veo, mô hình tạo các clip video từ mô tả văn bản"
      },
      {
        "key": "B",
        "text": "Imagen, a diffusion model that generates images from text prompts",
        "text_vi": "Imagen, một mô hình diffusion tạo hình ảnh từ lời nhắc văn bản"
      },
      {
        "key": "C",
        "text": "Gemini, Google's multimodal conversational model for general-purpose use",
        "text_vi": "Gemini, mô hình hội thoại đa phương thức của Google cho mục đích chung"
      },
      {
        "key": "D",
        "text": "Gemma, an open, lightweight model suited to local deployment",
        "text_vi": "Gemma, một mô hình mở, nhẹ, phù hợp triển khai cục bộ"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Gemma is Google's open, lightweight and customizable model made for local deployment and specialized applications. Gemini is a general-purpose multimodal model rather than the open model to run on your own hardware.",
    "question_vi": "Một cơ quan nhà nước phải giữ dữ liệu công dân trên phần cứng của mình để tuân thủ quy định. Họ muốn một mô hình nhẹ, tùy chỉnh được để kỹ sư chạy cục bộ. Dòng mô hình nào của Google phù hợp nhất?",
    "explanation_vi": "Gemma là mô hình mở, nhẹ, tùy chỉnh được của Google, dành cho triển khai cục bộ và ứng dụng chuyên biệt. Gemini là mô hình đa phương thức đa dụng chứ không phải mô hình mở để chạy trên phần cứng riêng.",
    "lessonId": "d1-t6",
    "objective": "1.4 Google foundation models"
  },
  {
    "id": 18,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "A hotel chain wants a single guest assistant that can understand text messages, photos of room issues and voice notes, and then chat back. It prefers one model over several stitched together. Which Google model family fits best?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Imagen, which generates still images from text prompts only",
        "text_vi": "Imagen, chỉ tạo hình ảnh tĩnh từ lời nhắc văn bản"
      },
      {
        "key": "B",
        "text": "Veo, which creates video clips from written descriptions",
        "text_vi": "Veo, tạo các clip video từ mô tả bằng văn bản"
      },
      {
        "key": "C",
        "text": "Gemma, a lightweight open model aimed at local deployment",
        "text_vi": "Gemma, mô hình mở nhẹ hướng tới triển khai cục bộ"
      },
      {
        "key": "D",
        "text": "Gemini, a multimodal model for conversation and content",
        "text_vi": "Gemini, mô hình đa phương thức cho hội thoại và nội dung"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Gemini is Google's multimodal model for conversational AI, understanding several data types and answering questions. Imagen and Veo are generation models for images and video, not conversational assistants.",
    "question_vi": "Một chuỗi khách sạn muốn một trợ lý khách hàng duy nhất hiểu được tin nhắn văn bản, ảnh về sự cố phòng và ghi chú giọng nói, rồi trò chuyện lại. Họ muốn dùng một mô hình thay vì ghép nhiều mô hình. Dòng mô hình nào của Google phù hợp nhất?",
    "explanation_vi": "Gemini là mô hình đa phương thức của Google cho AI hội thoại, hiểu nhiều loại dữ liệu và trả lời câu hỏi. Imagen và Veo là mô hình tạo ảnh và video, không phải trợ lý hội thoại.",
    "lessonId": "d1-t6",
    "objective": "1.4 Google foundation models"
  },
  {
    "id": 19,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A bank's risk team asks what \"enterprise-ready\" means for Google Cloud's AI platform. Which answer is best?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "It runs only on hardware that each customer owns and manages inside its own data center",
        "text_vi": "Nó chỉ chạy trên phần cứng mà mỗi khách hàng sở hữu và tự quản lý trong trung tâm dữ liệu của mình"
      },
      {
        "key": "B",
        "text": "It requires every customer to train its own foundation model before using any feature",
        "text_vi": "Nó yêu cầu mọi khách hàng tự huấn luyện foundation model trước khi dùng bất kỳ tính năng nào"
      },
      {
        "key": "C",
        "text": "It limits customers to Google's own models and blocks third-party and open models",
        "text_vi": "Nó giới hạn khách hàng ở mô hình của Google và chặn các mô hình bên thứ ba và mã nguồn mở"
      },
      {
        "key": "D",
        "text": "It is built to be responsible, secure, private, reliable and scalable for business use",
        "text_vi": "Nó được xây dựng để có trách nhiệm, bảo mật, riêng tư, đáng tin cậy và mở rộng được cho doanh nghiệp"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Enterprise-ready means responsible, secure, private, reliable and scalable, giving customers control over their data. Blocking third-party models would contradict Google Cloud's open approach.",
    "question_vi": "Nhóm quản trị rủi ro của một ngân hàng hỏi \"enterprise-ready\" nghĩa là gì đối với nền tảng AI của Google Cloud. Câu trả lời nào đúng nhất?",
    "explanation_vi": "Enterprise-ready nghĩa là có trách nhiệm, bảo mật, riêng tư, đáng tin cậy và mở rộng được, giúp khách hàng kiểm soát dữ liệu. Chặn mô hình bên thứ ba sẽ trái với cách tiếp cận mở của Google Cloud.",
    "lessonId": "d2-t1",
    "objective": "2.1 Google Cloud strengths in gen AI"
  },
  {
    "id": 20,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A software company wants to compare Google's models with third-party and open-source models. Its leaders also want to avoid being locked into a single AI provider. Which Google Cloud strength supports this goal?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Its AI-optimized infrastructure, which speeds up large training jobs",
        "text_vi": "Hạ tầng tối ưu cho AI, giúp tăng tốc các tác vụ huấn luyện lớn"
      },
      {
        "key": "B",
        "text": "Its integrated ecosystem, which embeds gen AI in Gmail, Docs and Meet",
        "text_vi": "Hệ sinh thái tích hợp, đưa gen AI vào Gmail, Docs và Meet"
      },
      {
        "key": "C",
        "text": "Its open approach, which offers first-party, third-party and open models",
        "text_vi": "Cách tiếp cận mở, cung cấp cả mô hình của Google, bên thứ ba và mã nguồn mở"
      },
      {
        "key": "D",
        "text": "Its low-code tools, which let non-developers build simple applications",
        "text_vi": "Các công cụ low-code, giúp người không phải lập trình viên xây ứng dụng đơn giản"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "The open approach combines Google's own models with third-party and open-source ones, which reduces lock-in. Infrastructure and low-code tools are strengths too, but they do not address provider choice.",
    "question_vi": "Một công ty phần mềm muốn so sánh mô hình của Google với mô hình bên thứ ba và mã nguồn mở. Lãnh đạo cũng muốn tránh bị phụ thuộc vào một nhà cung cấp AI duy nhất. Thế mạnh nào của Google Cloud hỗ trợ mục tiêu này?",
    "explanation_vi": "Cách tiếp cận mở kết hợp mô hình của Google với mô hình bên thứ ba và mã nguồn mở, giúp giảm phụ thuộc nhà cung cấp. Hạ tầng và công cụ low-code cũng là thế mạnh nhưng không giải quyết vấn đề lựa chọn nhà cung cấp.",
    "lessonId": "d2-t1",
    "objective": "2.1 Google Cloud strengths in gen AI"
  },
  {
    "id": 21,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A school district's administrators want to build simple AI helpers for staff, but the district has no developers and a small budget. Which Google Cloud strength best addresses this situation?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Custom-designed chips that speed up the training of very large AI models for engineers",
        "text_vi": "Các chip thiết kế riêng giúp tăng tốc việc huấn luyện những mô hình rất lớn"
      },
      {
        "key": "B",
        "text": "Democratization of AI via low-code and no-code tools, pre-trained models and APIs",
        "text_vi": "Dân chủ hóa AI thông qua công cụ low-code và no-code, mô hình huấn luyện sẵn và API"
      },
      {
        "key": "C",
        "text": "A catalog of third-party models that engineers can compare and deploy",
        "text_vi": "Một danh mục mô hình bên thứ ba để kỹ sư so sánh và triển khai"
      },
      {
        "key": "D",
        "text": "Secure-by-design infrastructure that protects data stored in the cloud",
        "text_vi": "Hạ tầng bảo mật từ thiết kế, bảo vệ dữ liệu lưu trên đám mây"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Democratization means people without deep technical skills can build with AI using low-code and no-code tools, pre-trained models and APIs. Chips and model catalogs help engineers, not non-technical staff.",
    "question_vi": "Ban quản trị một sở giáo dục muốn xây các trợ lý AI đơn giản cho nhân viên, nhưng sở không có lập trình viên và ngân sách nhỏ. Thế mạnh nào của Google Cloud đáp ứng tốt nhất tình huống này?",
    "explanation_vi": "Dân chủ hóa AI nghĩa là người không có kỹ năng chuyên sâu vẫn xây được giải pháp AI nhờ công cụ low-code, no-code, mô hình huấn luyện sẵn và API. Chip và danh mục mô hình phục vụ kỹ sư, không phải nhân viên phi kỹ thuật.",
    "lessonId": "d2-t1",
    "objective": "2.1 Google Cloud strengths in gen AI"
  },
  {
    "id": 22,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "What does Google Cloud's AI Hypercomputer provide?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "A catalog of ready-made models that business users can browse, compare and deploy",
        "text_vi": "Một danh mục mô hình làm sẵn mà người dùng doanh nghiệp có thể duyệt và triển khai"
      },
      {
        "key": "B",
        "text": "A no-code application that lets employees chat with the documents they upload themselves",
        "text_vi": "Một ứng dụng no-code cho phép nhân viên trò chuyện với tài liệu họ tải lên"
      },
      {
        "key": "C",
        "text": "An integrated system of hardware, networking and software for AI workloads",
        "text_vi": "Một hệ thống tích hợp gồm phần cứng, mạng và phần mềm dành cho các tải công việc AI"
      },
      {
        "key": "D",
        "text": "A security service that scans cloud projects and reports misconfigurations",
        "text_vi": "Một dịch vụ bảo mật quét các dự án đám mây và báo cáo cấu hình sai"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "AI Hypercomputer integrates hardware, networking and software to train, tune and serve AI at scale. The model catalog describes Model Garden, and the scanning service describes Security Command Center.",
    "question_vi": "Google Cloud AI Hypercomputer cung cấp điều gì?",
    "explanation_vi": "AI Hypercomputer tích hợp phần cứng, mạng và phần mềm để huấn luyện, tinh chỉnh và phục vụ AI ở quy mô lớn. Danh mục mô hình là Model Garden, còn dịch vụ quét cấu hình là Security Command Center.",
    "lessonId": "d2-t2",
    "objective": "2.1 AI-optimized infrastructure"
  },
  {
    "id": 23,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A CIO asks what TPUs are and why Google Cloud highlights them. Which answer is correct?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "They are general-purpose processors sold by third-party hardware vendors",
        "text_vi": "Chúng là bộ xử lý đa dụng do các nhà cung cấp phần cứng bên thứ ba bán"
      },
      {
        "key": "B",
        "text": "They are a managed database service for storing large training datasets",
        "text_vi": "Chúng là dịch vụ cơ sở dữ liệu được quản lý để lưu trữ các tập dữ liệu huấn luyện lớn"
      },
      {
        "key": "C",
        "text": "They are custom-designed Google chips built to accelerate AI workloads",
        "text_vi": "Chúng là các chip do Google thiết kế riêng để tăng tốc các tải công việc AI"
      },
      {
        "key": "D",
        "text": "They are a family of open models that can be run on local hardware",
        "text_vi": "Chúng là một họ mô hình mở có thể chạy trên phần cứng cục bộ"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "TPUs are Google's custom-designed AI chips, part of its AI-optimized infrastructure alongside support for GPUs. They are hardware, not a database or a model family.",
    "question_vi": "Một CIO hỏi TPU là gì và vì sao Google Cloud nhấn mạnh chúng. Câu trả lời nào đúng?",
    "explanation_vi": "TPU là chip AI do Google thiết kế riêng, một phần của hạ tầng tối ưu cho AI bên cạnh việc hỗ trợ GPU. Chúng là phần cứng, không phải cơ sở dữ liệu hay họ mô hình.",
    "lessonId": "d2-t2",
    "objective": "2.1 AI-optimized infrastructure"
  },
  {
    "id": 24,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A utility's field inspectors work at remote sites with unreliable connectivity and strict privacy rules. They need AI help directly on their handheld devices. Which approach fits best?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "A cloud-only deployment that sends every inspection photo to a remote model",
        "text_vi": "Triển khai chỉ trên đám mây, gửi mọi ảnh kiểm tra tới một mô hình từ xa"
      },
      {
        "key": "B",
        "text": "A larger cluster of cloud accelerators that retrains the model more often",
        "text_vi": "Một cụm bộ tăng tốc đám mây lớn hơn để huấn luyện lại mô hình thường xuyên hơn"
      },
      {
        "key": "C",
        "text": "Gemini Notebook with every report uploaded through the office network",
        "text_vi": "Gemini Notebook với mọi báo cáo được tải lên qua mạng văn phòng"
      },
      {
        "key": "D",
        "text": "Edge AI with an on-device model such as Gemini Nano",
        "text_vi": "Edge AI với mô hình chạy trên thiết bị như Gemini Nano"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Edge AI runs near the data, which gives real-time response, privacy and less dependence on connectivity. Gemini Nano is Google's on-device model, whereas cloud-only options need a reliable connection.",
    "question_vi": "Các kiểm tra viên hiện trường của một công ty điện lực làm việc ở nơi xa với kết nối không ổn định và quy định riêng tư nghiêm ngặt. Họ cần hỗ trợ AI ngay trên thiết bị cầm tay. Cách tiếp cận nào phù hợp nhất?",
    "explanation_vi": "Edge AI chạy gần nơi có dữ liệu, cho phản hồi thời gian thực, riêng tư và ít phụ thuộc kết nối. Gemini Nano là mô hình chạy trên thiết bị của Google, còn các lựa chọn chỉ trên đám mây cần kết nối ổn định.",
    "lessonId": "d2-t2",
    "objective": "2.1 AI-optimized infrastructure"
  },
  {
    "id": 25,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A city government wants staff to draft emails, summarize meetings and write documents with AI inside the apps they already use every day. It does not want to build anything custom. Which offering fits best?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Gemini for Google Cloud, which assists developers and cloud operators",
        "text_vi": "Gemini for Google Cloud, hỗ trợ lập trình viên và người vận hành hệ thống đám mây"
      },
      {
        "key": "B",
        "text": "Gemini for Google Workspace, which embeds AI in Gmail, Docs, Slides and Meet",
        "text_vi": "Gemini for Google Workspace, tích hợp AI vào Gmail, Docs, Slides và Meet"
      },
      {
        "key": "C",
        "text": "Agent Platform, where a technical team builds and tunes its own AI applications",
        "text_vi": "Agent Platform, nơi một đội kỹ thuật tự xây dựng và tinh chỉnh ứng dụng AI của mình"
      },
      {
        "key": "D",
        "text": "Conversational Insights, which analyzes recorded customer conversations",
        "text_vi": "Conversational Insights, phân tích các cuộc hội thoại khách hàng đã được ghi lại"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Gemini for Google Workspace brings AI into the productivity tools employees already use, with no custom build. Gemini for Google Cloud is aimed at developers and IT operators instead.",
    "question_vi": "Một chính quyền thành phố muốn nhân viên soạn email, tóm tắt cuộc họp và viết tài liệu bằng AI ngay trong các ứng dụng họ đã dùng hằng ngày, không muốn xây dựng gì tùy chỉnh. Giải pháp nào phù hợp nhất?",
    "explanation_vi": "Gemini for Google Workspace đưa AI vào các công cụ năng suất nhân viên đã dùng, không cần xây dựng tùy chỉnh. Gemini for Google Cloud nhắm tới lập trình viên và người vận hành CNTT.",
    "lessonId": "d2-t3",
    "objective": "2.2 Prebuilt gen AI offerings"
  },
  {
    "id": 26,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "Compliance analysts at a bank need an assistant that answers only from a set of policy PDFs they upload, and that shows which source each answer came from. Which offering is the best fit?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "The Gemini app with Gems, which are reusable personalized assistants built from prompts",
        "text_vi": "Ứng dụng Gemini với Gems, các trợ lý cá nhân hóa dùng lại được, được tạo từ lời nhắc"
      },
      {
        "key": "B",
        "text": "Gemini Notebook (formerly NotebookLM), which grounds answers in the sources a user uploads",
        "text_vi": "Gemini Notebook (trước đây là NotebookLM), neo câu trả lời vào các nguồn người dùng tải lên"
      },
      {
        "key": "C",
        "text": "Grounding with Google Search, which draws on public web results for its answers",
        "text_vi": "Grounding with Google Search, dựa trên kết quả web công khai để trả lời"
      },
      {
        "key": "D",
        "text": "Model Garden, which lists models that developers can explore and deploy",
        "text_vi": "Model Garden, liệt kê các mô hình để lập trình viên khám phá và triển khai"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Gemini Notebook answers are grounded only in the sources the user provides, which fits a closed set of policy documents. Grounding with Google Search would bring in public web content instead.",
    "question_vi": "Các chuyên viên tuân thủ của một ngân hàng cần một trợ lý chỉ trả lời dựa trên bộ tệp PDF chính sách họ tải lên và cho biết mỗi câu trả lời đến từ nguồn nào. Giải pháp nào phù hợp nhất?",
    "explanation_vi": "Câu trả lời của Gemini Notebook chỉ dựa trên nguồn người dùng cung cấp, phù hợp với bộ tài liệu chính sách đóng. Grounding with Google Search sẽ đưa nội dung web công khai vào.",
    "lessonId": "d2-t3",
    "objective": "2.2 Prebuilt gen AI offerings"
  },
  {
    "id": 27,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A retail head office wants employees to search across internal systems with multimodal search and to build custom agents with little code. Which offering is the best fit?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Gemini Enterprise (formerly Agentspace), which provides search and agents over company data",
        "text_vi": "Gemini Enterprise (trước đây là Agentspace), cung cấp tìm kiếm và agent trên dữ liệu công ty"
      },
      {
        "key": "B",
        "text": "Gemini for Google Workspace, which adds AI features to Gmail and Docs for everyday writing",
        "text_vi": "Gemini for Google Workspace, thêm tính năng AI vào Gmail và Docs cho việc viết hằng ngày"
      },
      {
        "key": "C",
        "text": "Gemini Notebook used alone, which is limited to sources that individual users upload",
        "text_vi": "Gemini Notebook dùng riêng lẻ, chỉ giới hạn ở các nguồn từng người dùng tải lên"
      },
      {
        "key": "D",
        "text": "Imagen, which generates product images from written descriptions",
        "text_vi": "Imagen, tạo hình ảnh sản phẩm từ mô tả bằng văn bản"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Gemini Enterprise offers custom search and custom agents over internal data, including multimodal search. Gemini for Workspace helps with writing and meetings but is not a search-and-agent layer over company systems.",
    "question_vi": "Trụ sở chính của một nhà bán lẻ muốn nhân viên tìm kiếm đa phương thức trên các hệ thống nội bộ và xây agent tùy chỉnh với ít code. Giải pháp nào phù hợp nhất?",
    "explanation_vi": "Gemini Enterprise cung cấp tìm kiếm và agent tùy chỉnh trên dữ liệu nội bộ, gồm cả tìm kiếm đa phương thức. Gemini for Workspace hỗ trợ viết và họp nhưng không phải lớp tìm kiếm và agent trên hệ thống công ty.",
    "lessonId": "d2-t3",
    "objective": "2.2 Prebuilt gen AI offerings"
  },
  {
    "id": 28,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "Which feature of the Gemini app lets a user save reusable instructions as a personalized assistant, so they do not retype long prompts each time?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Fine-tuning a custom model on Agent Platform whenever the instructions change",
        "text_vi": "Fine-tuning một mô hình tùy chỉnh trên Agent Platform mỗi khi hướng dẫn thay đổi"
      },
      {
        "key": "B",
        "text": "Gems, which work like reusable prompt templates",
        "text_vi": "Gems, hoạt động như các mẫu lời nhắc dùng lại được"
      },
      {
        "key": "C",
        "text": "Grounding with Google Search, which pulls public web results into answers",
        "text_vi": "Grounding with Google Search, đưa kết quả web công khai vào câu trả lời"
      },
      {
        "key": "D",
        "text": "Conversational Agents, which automate chats with a company's customers",
        "text_vi": "Conversational Agents, tự động hóa các cuộc trò chuyện với khách hàng của công ty"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Gems are personalized assistants that act like reusable prompt templates in the Gemini app. Fine-tuning would be far heavier than needed for saving instructions.",
    "question_vi": "Tính năng nào của ứng dụng Gemini cho phép người dùng lưu hướng dẫn dùng lại thành một trợ lý cá nhân hóa, để không phải gõ lại lời nhắc dài mỗi lần?",
    "explanation_vi": "Gems là các trợ lý cá nhân hóa hoạt động như mẫu lời nhắc dùng lại được trong ứng dụng Gemini. Fine-tuning nặng nề hơn nhiều so với nhu cầu chỉ để lưu hướng dẫn.",
    "lessonId": "d2-t3",
    "objective": "2.2 Prebuilt gen AI offerings"
  },
  {
    "id": 29,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A telecom provider wants to automate common customer chats and also give its human agents real-time suggestions during live calls. Which TWO Customer Engagement Suite offerings should it use? (Select TWO.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "Conversational Agents, to automate customer-facing conversations",
        "text_vi": "Conversational Agents, để tự động hóa các cuộc hội thoại với khách hàng"
      },
      {
        "key": "B",
        "text": "Conversational Insights, which analyzes conversations after they happen",
        "text_vi": "Conversational Insights, phân tích các cuộc hội thoại sau khi chúng diễn ra"
      },
      {
        "key": "C",
        "text": "Agent Assist, to support human agents during live conversations",
        "text_vi": "Agent Assist, để hỗ trợ nhân viên trong các cuộc hội thoại trực tiếp"
      },
      {
        "key": "D",
        "text": "Gemini for Google Workspace, which adds AI features to Gmail and Docs",
        "text_vi": "Gemini for Google Workspace, thêm tính năng AI vào Gmail và Docs"
      },
      {
        "key": "E",
        "text": "Model Garden, which catalogs models for developers to explore",
        "text_vi": "Model Garden, danh mục mô hình để lập trình viên khám phá"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "Conversational Agents handle customer conversations automatically, and Agent Assist coaches human agents live. Conversational Insights analyzes conversations afterward, so it does not meet either real-time need.",
    "question_vi": "Một nhà mạng viễn thông muốn tự động hóa các cuộc trò chuyện phổ biến với khách hàng và đồng thời gợi ý theo thời gian thực cho nhân viên trong các cuộc gọi trực tiếp. Họ nên dùng HAI giải pháp nào của Customer Engagement Suite? (Chọn HAI.)",
    "explanation_vi": "Conversational Agents tự xử lý các cuộc hội thoại với khách hàng, còn Agent Assist hỗ trợ nhân viên ngay trong cuộc gọi. Conversational Insights phân tích sau khi hội thoại kết thúc nên không đáp ứng nhu cầu thời gian thực nào.",
    "lessonId": "d2-t4",
    "objective": "2.3 Offerings that improve customer experience"
  },
  {
    "id": 30,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "Leaders of a bank's contact center want to analyze thousands of recorded calls and chats to see customer sentiment, common topics and trends. They do not need live assistance. Which Google offering is built for this?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Agent Assist, which helps human agents while a conversation is in progress",
        "text_vi": "Agent Assist, giúp nhân viên trong lúc cuộc hội thoại đang diễn ra"
      },
      {
        "key": "B",
        "text": "Conversational Agents, which automate chats between customers and virtual agents",
        "text_vi": "Conversational Agents, tự động hóa các cuộc trò chuyện giữa khách hàng và agent ảo"
      },
      {
        "key": "C",
        "text": "Agent Search, which provides enterprise search over a company's own documents",
        "text_vi": "Agent Search, cung cấp tìm kiếm doanh nghiệp trên tài liệu riêng của công ty"
      },
      {
        "key": "D",
        "text": "Conversational Insights, which extracts insights from customer communications",
        "text_vi": "Conversational Insights, rút ra thông tin chi tiết từ các cuộc giao tiếp với khách hàng"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Conversational Insights analyzes customer communications at scale to find sentiment, topics and trends. Agent Assist works during live conversations, which is not what the bank is asking for.",
    "question_vi": "Lãnh đạo trung tâm liên hệ của một ngân hàng muốn phân tích hàng nghìn cuộc gọi và chat đã ghi lại để xem cảm xúc khách hàng, chủ đề phổ biến và xu hướng. Họ không cần hỗ trợ trực tiếp. Giải pháp nào của Google được xây dựng cho việc này?",
    "explanation_vi": "Conversational Insights phân tích giao tiếp với khách hàng ở quy mô lớn để tìm cảm xúc, chủ đề và xu hướng. Agent Assist hoạt động trong các cuộc hội thoại trực tiếp, không phải điều ngân hàng cần.",
    "lessonId": "d2-t4",
    "objective": "2.3 Offerings that improve customer experience"
  },
  {
    "id": 31,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "An e-commerce company wants its site search to understand shopper questions across the product catalog and help center. The engineering team is small and wants minimal custom work. Which option is the best fit?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Agent Search, which offers enterprise search with pre-built RAG",
        "text_vi": "Agent Search, cung cấp tìm kiếm doanh nghiệp với RAG dựng sẵn"
      },
      {
        "key": "B",
        "text": "Training a new language model from scratch on the company's catalog data",
        "text_vi": "Huấn luyện một mô hình ngôn ngữ mới từ đầu trên dữ liệu danh mục của công ty"
      },
      {
        "key": "C",
        "text": "Conversational Insights, which analyzes past support chats for trends",
        "text_vi": "Conversational Insights, phân tích các cuộc chat hỗ trợ trước đây để tìm xu hướng"
      },
      {
        "key": "D",
        "text": "Gemini Notebook, which answers from documents that an individual user uploads",
        "text_vi": "Gemini Notebook, trả lời từ tài liệu do từng người dùng tự tải lên"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Agent Search gives search and recommendations over company data with pre-built RAG, so the team builds almost nothing. Training a model from scratch would be slow, costly and unnecessary.",
    "question_vi": "Một công ty thương mại điện tử muốn tìm kiếm trên website hiểu được câu hỏi của người mua trên danh mục sản phẩm và trung tâm trợ giúp. Đội kỹ thuật nhỏ và muốn ít công việc tùy chỉnh nhất. Lựa chọn nào phù hợp nhất?",
    "explanation_vi": "Agent Search cung cấp tìm kiếm và đề xuất trên dữ liệu công ty với RAG dựng sẵn, nên đội gần như không phải xây gì. Huấn luyện mô hình từ đầu sẽ chậm, tốn kém và không cần thiết.",
    "lessonId": "d2-t4",
    "objective": "2.3 Offerings that improve customer experience"
  },
  {
    "id": 32,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "An energy company wants a cloud-native contact center foundation on which AI tools for virtual agents, agent assist and conversation insights can run together. What should it adopt?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Agent Search, which provides search over the company's documents and websites",
        "text_vi": "Agent Search, cung cấp tìm kiếm trên tài liệu và website của công ty"
      },
      {
        "key": "B",
        "text": "Model Garden, which lets developers browse and deploy a range of models",
        "text_vi": "Model Garden, cho phép lập trình viên duyệt và triển khai nhiều loại mô hình"
      },
      {
        "key": "C",
        "text": "Google Cloud Contact Center as a Service (CCaaS)",
        "text_vi": "Google Cloud Contact Center as a Service (CCaaS)"
      },
      {
        "key": "D",
        "text": "Gemini for Google Workspace, which adds AI features to everyday office apps",
        "text_vi": "Gemini for Google Workspace, thêm tính năng AI vào các ứng dụng văn phòng hằng ngày"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "CCaaS is the cloud-native contact center foundation on which Conversational Agents, Agent Assist and Conversational Insights operate. The other options are not contact center platforms.",
    "question_vi": "Một công ty năng lượng muốn có nền tảng trung tâm liên hệ gốc đám mây để các công cụ AI như agent ảo, agent assist và phân tích hội thoại chạy cùng nhau. Họ nên áp dụng giải pháp nào?",
    "explanation_vi": "CCaaS là nền tảng trung tâm liên hệ gốc đám mây mà Conversational Agents, Agent Assist và Conversational Insights vận hành trên đó. Các lựa chọn còn lại không phải nền tảng trung tâm liên hệ.",
    "lessonId": "d2-t4",
    "objective": "2.3 Offerings that improve customer experience"
  },
  {
    "id": 33,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A life sciences team with little machine learning expertise has labeled lab data and wants a custom model for one specific prediction. Which Agent Platform option fits best?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Custom training from scratch, which suits teams that need full control and deep expertise",
        "text_vi": "Huấn luyện tùy chỉnh từ đầu, phù hợp với nhóm cần toàn quyền kiểm soát và có chuyên môn sâu"
      },
      {
        "key": "B",
        "text": "AutoML, which builds a custom model from their data with minimal ML expertise",
        "text_vi": "AutoML, xây mô hình tùy chỉnh từ dữ liệu của họ mà cần rất ít chuyên môn ML"
      },
      {
        "key": "C",
        "text": "A pre-trained model from Model Garden used as-is, with no company data involved",
        "text_vi": "Một mô hình huấn luyện sẵn từ Model Garden dùng nguyên trạng, không dùng dữ liệu của công ty"
      },
      {
        "key": "D",
        "text": "Google AI Studio, which is meant for quickly prototyping prompts with models",
        "text_vi": "Google AI Studio, dùng để nhanh chóng thử nghiệm lời nhắc với các mô hình"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "AutoML trains a custom model on your own labeled data without requiring deep ML skills. Custom training offers more control but demands expertise this team does not have.",
    "question_vi": "Một nhóm khoa học đời sống có ít chuyên môn machine learning, đã có dữ liệu phòng thí nghiệm được gán nhãn và muốn một mô hình tùy chỉnh cho một dự đoán cụ thể. Tùy chọn nào trên Agent Platform phù hợp nhất?",
    "explanation_vi": "AutoML huấn luyện mô hình tùy chỉnh trên dữ liệu có nhãn của bạn mà không đòi hỏi kỹ năng ML sâu. Huấn luyện tùy chỉnh cho nhiều kiểm soát hơn nhưng cần chuyên môn mà nhóm này không có.",
    "lessonId": "d2-t5",
    "objective": "2.4 Building with AI on Agent Platform"
  },
  {
    "id": 34,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "Which Agent Platform feature lets teams explore and compare Google, third-party and open models in one place before choosing one?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Model Garden",
        "text_vi": "Model Garden"
      },
      {
        "key": "B",
        "text": "AutoML, which trains a custom model from a team's own labeled data",
        "text_vi": "AutoML, huấn luyện mô hình tùy chỉnh từ dữ liệu có nhãn của chính nhóm"
      },
      {
        "key": "C",
        "text": "Agent Search, which provides enterprise search with pre-built RAG",
        "text_vi": "Agent Search, cung cấp tìm kiếm doanh nghiệp với RAG dựng sẵn"
      },
      {
        "key": "D",
        "text": "Model Monitoring, which tracks performance drift after deployment",
        "text_vi": "Model Monitoring, theo dõi drift hiệu năng sau khi triển khai"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Model Garden is the catalog where teams find and deploy models from Google, third parties and the open-source community. It is where you choose models, not where you train them.",
    "question_vi": "Tính năng nào của Agent Platform cho phép các nhóm khám phá và so sánh mô hình của Google, bên thứ ba và mã nguồn mở ở một nơi trước khi chọn?",
    "explanation_vi": "Model Garden là danh mục để các nhóm tìm và triển khai mô hình của Google, bên thứ ba và cộng đồng mã nguồn mở. Đây là nơi chọn mô hình chứ không phải nơi huấn luyện.",
    "lessonId": "d2-t5",
    "objective": "2.4 Building with AI on Agent Platform"
  },
  {
    "id": 35,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A startup asks when to use Google AI Studio and when to use Agent Studio. Which guidance is correct?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Use Google AI Studio for quick, low-cost prototyping and Agent Studio for production apps",
        "text_vi": "Dùng Google AI Studio để thử nghiệm nhanh, chi phí thấp và Agent Studio cho ứng dụng production"
      },
      {
        "key": "B",
        "text": "Use Agent Studio for quick experiments and Google AI Studio for production apps at scale",
        "text_vi": "Dùng Agent Studio cho thử nghiệm nhanh và Google AI Studio cho ứng dụng production quy mô lớn"
      },
      {
        "key": "C",
        "text": "Use Google AI Studio only to train custom models and Agent Studio only to store company data",
        "text_vi": "Chỉ dùng Google AI Studio để huấn luyện mô hình tùy chỉnh và Agent Studio chỉ để lưu dữ liệu công ty"
      },
      {
        "key": "D",
        "text": "They are the same tool under two names, so the choice makes no difference to the team",
        "text_vi": "Chúng là cùng một công cụ với hai tên gọi, nên lựa chọn không ảnh hưởng gì tới nhóm"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Google AI Studio is free and meant for quick AI prototyping, while Agent Studio is for building and deploying production-ready AI applications at scale. The reversed option swaps the two roles.",
    "question_vi": "Một startup hỏi khi nào dùng Google AI Studio và khi nào dùng Agent Studio. Hướng dẫn nào đúng?",
    "explanation_vi": "Google AI Studio miễn phí và dành cho thử nghiệm AI nhanh, còn Agent Studio dùng để xây dựng và triển khai ứng dụng AI sẵn sàng cho production ở quy mô lớn. Lựa chọn đảo ngược đã hoán đổi vai trò của hai công cụ.",
    "lessonId": "d2-t5",
    "objective": "2.4 Building with AI on Agent Platform"
  },
  {
    "id": 36,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A software company's engineers want to control exactly how documents are retrieved and ranked inside their own app, beyond what a prebuilt search product offers. Which option fits best?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Gems in the Gemini app, which are reusable personalized assistants",
        "text_vi": "Gems trong ứng dụng Gemini, các trợ lý cá nhân hóa dùng lại được"
      },
      {
        "key": "B",
        "text": "Conversational Insights, which analyzes recorded customer conversations",
        "text_vi": "Conversational Insights, phân tích các cuộc hội thoại khách hàng đã ghi lại"
      },
      {
        "key": "C",
        "text": "RAG APIs on Agent Platform, to build a customized RAG pipeline",
        "text_vi": "RAG APIs trên Agent Platform, để xây một pipeline RAG được tùy chỉnh"
      },
      {
        "key": "D",
        "text": "Gemini for Google Workspace, which adds AI features to Gmail and Docs",
        "text_vi": "Gemini for Google Workspace, thêm tính năng AI vào Gmail và Docs"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "RAG APIs let developers assemble their own retrieval pipeline when they need more control than pre-built RAG with Agent Search gives. The other options are not tools for building retrieval into an application.",
    "question_vi": "Các kỹ sư của một công ty phần mềm muốn kiểm soát chính xác cách tài liệu được truy xuất và xếp hạng trong ứng dụng của họ, vượt quá những gì một sản phẩm tìm kiếm dựng sẵn cung cấp. Lựa chọn nào phù hợp nhất?",
    "explanation_vi": "RAG APIs cho phép lập trình viên tự lắp ráp pipeline truy xuất khi cần nhiều kiểm soát hơn RAG dựng sẵn của Agent Search. Các lựa chọn còn lại không phải công cụ để xây phần truy xuất vào ứng dụng.",
    "lessonId": "d2-t5",
    "objective": "2.4 Building with AI on Agent Platform"
  },
  {
    "id": 37,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "What allows an LLM-based agent to take actions, such as checking an order system or sending an email, instead of only generating text?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "A larger context window that lets it read more order data at once",
        "text_vi": "Cửa sổ ngữ cảnh lớn hơn giúp nó đọc nhiều dữ liệu đơn hàng hơn cùng lúc"
      },
      {
        "key": "B",
        "text": "A higher temperature setting that makes its answers more varied",
        "text_vi": "Thiết lập temperature cao hơn khiến câu trả lời của nó đa dạng hơn"
      },
      {
        "key": "C",
        "text": "Tools such as extensions and functions that connect it to external systems",
        "text_vi": "Các công cụ như extension và function kết nối nó với các hệ thống bên ngoài"
      },
      {
        "key": "D",
        "text": "More pre-training data about shipping so that it memorizes order statuses",
        "text_vi": "Thêm dữ liệu huấn luyện trước về vận chuyển để nó ghi nhớ trạng thái đơn hàng"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Tools such as extensions, functions, data stores and plugins let an agent interact with its environment and complete tasks. An LLM without tools can only generate text.",
    "question_vi": "Điều gì cho phép một agent dựa trên LLM thực hiện hành động, như kiểm tra hệ thống đơn hàng hoặc gửi email, thay vì chỉ sinh văn bản?",
    "explanation_vi": "Các công cụ như extension, function, data store và plugin cho phép agent tương tác với môi trường và hoàn thành tác vụ. Một LLM không có công cụ chỉ có thể sinh văn bản.",
    "lessonId": "d2-t6",
    "objective": "2.5 Agents and tooling"
  },
  {
    "id": 38,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "A bank's operations team receives thousands of scanned invoices and forms each week. They want to pull out fields such as totals, dates and vendor names automatically. Which pre-built API fits best?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Cloud Vision API, which labels objects and detects text in general images",
        "text_vi": "Cloud Vision API, gán nhãn đối tượng và nhận diện chữ trong ảnh nói chung"
      },
      {
        "key": "B",
        "text": "Document AI API, which extracts structured data from documents and forms",
        "text_vi": "Document AI API, trích xuất dữ liệu có cấu trúc từ tài liệu và biểu mẫu"
      },
      {
        "key": "C",
        "text": "Speech-to-Text API, which converts spoken audio into written text",
        "text_vi": "Speech-to-Text API, chuyển âm thanh lời nói thành văn bản"
      },
      {
        "key": "D",
        "text": "Translation API, which converts text from one language into another",
        "text_vi": "Translation API, chuyển văn bản từ ngôn ngữ này sang ngôn ngữ khác"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Document AI is built to extract structured fields from invoices and forms. Cloud Vision is tempting, but it analyzes general images rather than understanding document layouts and fields.",
    "question_vi": "Bộ phận vận hành của một ngân hàng nhận hàng nghìn hóa đơn và biểu mẫu quét mỗi tuần. Họ muốn tự động trích xuất các trường như tổng tiền, ngày tháng và tên nhà cung cấp. API dựng sẵn nào phù hợp nhất?",
    "explanation_vi": "Document AI được xây dựng để trích xuất các trường có cấu trúc từ hóa đơn và biểu mẫu. Cloud Vision dễ gây nhầm nhưng nó phân tích ảnh nói chung chứ không hiểu bố cục và trường dữ liệu của tài liệu.",
    "lessonId": "d2-t6",
    "objective": "2.5 Agents and tooling"
  },
  {
    "id": 39,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "An insurer's claims-intake agent must follow strictly ordered compliance steps, yet it must also understand customers' free-form messages. Which type of agent is the best fit?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "A purely generative agent that decides each step on its own",
        "text_vi": "Một agent thuần generative tự quyết định từng bước"
      },
      {
        "key": "B",
        "text": "A purely deterministic agent that follows only scripted rules and responses",
        "text_vi": "Một agent thuần deterministic chỉ làm theo quy tắc và câu trả lời viết sẵn"
      },
      {
        "key": "C",
        "text": "A plain LLM with no tools, workflow or predefined steps at all",
        "text_vi": "Một LLM thuần không có công cụ, quy trình hay bước định sẵn nào"
      },
      {
        "key": "D",
        "text": "A hybrid agent that combines predefined steps with LLM-driven flexibility",
        "text_vi": "Một hybrid agent kết hợp các bước định sẵn với sự linh hoạt do LLM điều khiển"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Hybrid agents mix deterministic steps, which enforce the compliance order, with generative reasoning, which handles free-form language. A purely generative agent could skip required steps.",
    "question_vi": "Agent tiếp nhận hồ sơ bồi thường của một công ty bảo hiểm phải tuân theo các bước tuân thủ theo thứ tự nghiêm ngặt, nhưng cũng phải hiểu tin nhắn tự do của khách hàng. Loại agent nào phù hợp nhất?",
    "explanation_vi": "Hybrid agent kết hợp các bước deterministic để đảm bảo thứ tự tuân thủ với suy luận generative để xử lý ngôn ngữ tự do. Agent thuần generative có thể bỏ qua các bước bắt buộc.",
    "lessonId": "d2-t6",
    "objective": "2.5 Agents and tooling"
  },
  {
    "id": 40,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "A model confidently gives a fluent answer that contains a false fact. What is this limitation called?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Hallucination: a confident but incorrect or invented answer",
        "text_vi": "Hallucination: câu trả lời tự tin nhưng sai hoặc bịa đặt"
      },
      {
        "key": "B",
        "text": "Knowledge cutoff: the model has no information after its training date",
        "text_vi": "Knowledge cutoff: mô hình không có thông tin sau thời điểm huấn luyện"
      },
      {
        "key": "C",
        "text": "Drift: the model's accuracy changes as real-world data changes over time",
        "text_vi": "Drift: độ chính xác của mô hình thay đổi khi dữ liệu thực tế thay đổi theo thời gian"
      },
      {
        "key": "D",
        "text": "Bias: skewed outputs inherited from unbalanced or unrepresentative data",
        "text_vi": "Bias: kết quả lệch do thừa hưởng từ dữ liệu mất cân bằng hoặc không đại diện"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "A hallucination is a fluent, confident answer that is wrong or invented, which makes it hard to spot without checks. Knowledge cutoff concerns missing recent information rather than invented facts.",
    "question_vi": "Một mô hình tự tin đưa ra câu trả lời trôi chảy nhưng chứa thông tin sai. Hạn chế này được gọi là gì?",
    "explanation_vi": "Hallucination là câu trả lời trôi chảy, tự tin nhưng sai hoặc bịa, khó phát hiện nếu không kiểm tra. Knowledge cutoff liên quan đến việc thiếu thông tin mới chứ không phải bịa ra sự việc.",
    "lessonId": "d3-t1",
    "objective": "3.1 Foundation model limitations"
  },
  {
    "id": 41,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "A city's resident-help assistant keeps quoting a permit policy that was changed last month. The city did not retrain the model after the update. Which model limitation best explains this?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Bias: the model favors some groups because of unbalanced training data",
        "text_vi": "Bias: mô hình thiên vị một số nhóm vì dữ liệu huấn luyện mất cân bằng"
      },
      {
        "key": "B",
        "text": "Strict safety settings: the model is filtering out the newest policy text",
        "text_vi": "Safety settings quá chặt: mô hình đang lọc bỏ văn bản chính sách mới nhất"
      },
      {
        "key": "C",
        "text": "Edge case: the question is an unusual input that the model has never seen",
        "text_vi": "Edge case: câu hỏi là một đầu vào bất thường mà mô hình chưa từng gặp"
      },
      {
        "key": "D",
        "text": "Knowledge cutoff: the model does not know about recent changes or private data",
        "text_vi": "Knowledge cutoff: mô hình không biết các thay đổi gần đây hoặc dữ liệu riêng"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "A model only knows what it saw in training, so it cannot know about policy changes made afterward. Grounding or RAG on current documents fixes this without retraining.",
    "question_vi": "Trợ lý hỗ trợ người dân của một thành phố liên tục trích dẫn chính sách giấy phép đã được thay đổi tháng trước. Thành phố không huấn luyện lại mô hình sau khi cập nhật. Hạn chế nào của mô hình giải thích rõ nhất hiện tượng này?",
    "explanation_vi": "Mô hình chỉ biết những gì nó thấy khi huấn luyện nên không thể biết các thay đổi chính sách sau đó. Grounding hoặc RAG trên tài liệu hiện hành giải quyết việc này mà không cần huấn luyện lại.",
    "lessonId": "d3-t1",
    "objective": "3.1 Foundation model limitations"
  },
  {
    "id": 42,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "A healthcare provider is launching a patient-facing assistant that answers benefits questions. Wrong answers could harm patients, so leaders want to reduce that risk. Which TWO practices should they apply? (Select TWO.)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "Raise the temperature so that answers sound more natural and varied",
        "text_vi": "Tăng temperature để câu trả lời nghe tự nhiên và đa dạng hơn"
      },
      {
        "key": "B",
        "text": "Ground answers in approved benefits documents using RAG",
        "text_vi": "Neo câu trả lời vào các tài liệu quyền lợi đã được duyệt bằng RAG"
      },
      {
        "key": "C",
        "text": "Fine-tune the model once and then remove human review to save costs",
        "text_vi": "Fine-tune mô hình một lần rồi bỏ khâu con người xem xét để tiết kiệm chi phí"
      },
      {
        "key": "D",
        "text": "Switch to a larger model and trust it to stay accurate on its own",
        "text_vi": "Chuyển sang mô hình lớn hơn và tin rằng nó tự giữ được độ chính xác"
      },
      {
        "key": "E",
        "text": "Have trained staff review sensitive outputs before patients see them",
        "text_vi": "Để nhân viên được đào tạo xem xét các kết quả nhạy cảm trước khi bệnh nhân nhìn thấy"
      }
    ],
    "answer": [
      "B",
      "E"
    ],
    "explanation": "Grounding or RAG supplies authoritative data, and human-in-the-loop review adds oversight for high-stakes outputs. A larger model or higher temperature does not make answers more accurate.",
    "question_vi": "Một nhà cung cấp dịch vụ y tế sắp ra mắt trợ lý trả lời câu hỏi về quyền lợi cho bệnh nhân. Câu trả lời sai có thể gây hại cho bệnh nhân nên lãnh đạo muốn giảm rủi ro đó. Họ nên áp dụng HAI thực hành nào? (Chọn HAI.)",
    "explanation_vi": "Grounding hoặc RAG cung cấp dữ liệu có thẩm quyền, còn human-in-the-loop bổ sung sự giám sát cho các kết quả có rủi ro cao. Mô hình lớn hơn hay temperature cao hơn không làm câu trả lời chính xác hơn.",
    "lessonId": "d3-t2",
    "objective": "3.1 Overcoming limitations"
  },
  {
    "id": 43,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "Why would a company choose RAG over fine-tuning when its product information changes every week?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "RAG retrieves current documents at question time, so no retraining is needed per update",
        "text_vi": "RAG truy xuất tài liệu hiện hành vào lúc đặt câu hỏi, nên không cần huấn luyện lại sau mỗi lần cập nhật"
      },
      {
        "key": "B",
        "text": "RAG permanently rewrites the model every week, so the model learns the new facts itself",
        "text_vi": "RAG viết lại mô hình vĩnh viễn mỗi tuần, nên mô hình tự học các dữ kiện mới"
      },
      {
        "key": "C",
        "text": "Fine-tuning cannot be applied to a company's own data, only to public information",
        "text_vi": "Fine-tuning không thể áp dụng cho dữ liệu riêng của công ty, chỉ dùng cho thông tin công khai"
      },
      {
        "key": "D",
        "text": "Fine-tuned models automatically refresh whenever the source documents are edited",
        "text_vi": "Mô hình đã fine-tune tự động làm mới mỗi khi tài liệu nguồn được chỉnh sửa"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "RAG pulls up-to-date information at the time of the request, so frequent changes require no retraining. Fine-tuning adapts behavior or domain but does not supply live facts.",
    "question_vi": "Vì sao một công ty nên chọn RAG thay vì fine-tuning khi thông tin sản phẩm thay đổi hằng tuần?",
    "explanation_vi": "RAG lấy thông tin mới nhất ngay lúc có yêu cầu, nên thay đổi thường xuyên không cần huấn luyện lại. Fine-tuning điều chỉnh hành vi hoặc lĩnh vực chuyên môn nhưng không cung cấp dữ kiện thời gian thực.",
    "lessonId": "d3-t2",
    "objective": "3.1 Overcoming limitations"
  },
  {
    "id": 44,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "A bank's gen AI assistant passed every test before launch. Six months later, customer questions and products have changed. Why should the team keep monitoring and evaluating the model?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Once a model passes pre-launch testing, its quality is permanently fixed and cannot change",
        "text_vi": "Một khi mô hình qua kiểm tra trước ra mắt, chất lượng của nó cố định vĩnh viễn và không thể thay đổi"
      },
      {
        "key": "B",
        "text": "Performance can drift over time, so KPIs should be tracked and the model re-evaluated",
        "text_vi": "Hiệu năng có thể drift theo thời gian, nên cần theo dõi KPI và đánh giá lại mô hình"
      },
      {
        "key": "C",
        "text": "Monitoring is only needed after customers file formal complaints about wrong answers",
        "text_vi": "Chỉ cần giám sát sau khi khách hàng nộp khiếu nại chính thức về câu trả lời sai"
      },
      {
        "key": "D",
        "text": "Security patches and model upgrades are unnecessary if the model was evaluated once",
        "text_vi": "Bản vá bảo mật và nâng cấp mô hình là không cần thiết nếu mô hình đã được đánh giá một lần"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Evaluation is ongoing, not a one-time pre-launch test, because performance drifts as data and usage change. Google recommends tracking KPIs, versioning, and applying upgrades and security patches.",
    "question_vi": "Trợ lý gen AI của một ngân hàng đã vượt qua mọi bài kiểm tra trước khi ra mắt. Sáu tháng sau, câu hỏi của khách hàng và sản phẩm đã thay đổi. Vì sao nhóm vẫn nên tiếp tục giám sát và đánh giá mô hình?",
    "explanation_vi": "Đánh giá là liên tục chứ không phải kiểm tra một lần trước ra mắt, vì hiệu năng drift khi dữ liệu và cách dùng thay đổi. Google khuyến nghị theo dõi KPI, quản lý phiên bản và áp dụng nâng cấp, bản vá bảo mật.",
    "lessonId": "d3-t3",
    "objective": "3.1 Monitoring and evaluation"
  },
  {
    "id": 45,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "A SaaS support team asks a model to summarize tickets, but the format changes from run to run. They want every summary in the same fixed template. What is the best first step?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Add a few examples of the desired format (few-shot prompting)",
        "text_vi": "Thêm vài ví dụ về định dạng mong muốn (few-shot prompting)"
      },
      {
        "key": "B",
        "text": "Raise the temperature so that the model explores more output formats",
        "text_vi": "Tăng temperature để mô hình thử nhiều định dạng đầu ra hơn"
      },
      {
        "key": "C",
        "text": "Remove all instructions and rely on zero-shot prompting for simplicity",
        "text_vi": "Bỏ mọi hướng dẫn và chỉ dùng zero-shot prompting cho đơn giản"
      },
      {
        "key": "D",
        "text": "Fine-tune a new model before trying any change to the prompt itself",
        "text_vi": "Fine-tune một mô hình mới trước khi thử bất kỳ thay đổi nào với chính lời nhắc"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Few-shot examples show the model the exact output pattern to follow. Prompt engineering is the cheapest first step, while fine-tuning is a heavier escalation.",
    "question_vi": "Một nhóm hỗ trợ của công ty SaaS yêu cầu mô hình tóm tắt phiếu hỗ trợ, nhưng định dạng thay đổi mỗi lần chạy. Họ muốn mọi bản tóm tắt theo cùng một mẫu cố định. Bước đầu tiên tốt nhất là gì?",
    "explanation_vi": "Các ví dụ few-shot cho mô hình thấy đúng mẫu đầu ra cần theo. Prompt engineering là bước đầu rẻ nhất, còn fine-tuning là phương án nặng hơn để leo thang sau.",
    "lessonId": "d3-t4",
    "objective": "3.2 Prompt engineering techniques"
  },
  {
    "id": 46,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "Which prompting technique asks the model to answer as a persona, such as \"act as a senior luxury-travel editor\"?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Few-shot prompting, which gives several examples of the desired output",
        "text_vi": "Few-shot prompting, đưa ra vài ví dụ về đầu ra mong muốn"
      },
      {
        "key": "B",
        "text": "Prompt chaining, which splits a complex task into linked steps",
        "text_vi": "Prompt chaining, chia một tác vụ phức tạp thành các bước liên kết"
      },
      {
        "key": "C",
        "text": "Role prompting, which sets persona, tone and expertise",
        "text_vi": "Role prompting, thiết lập vai, giọng điệu và chuyên môn"
      },
      {
        "key": "D",
        "text": "Metaprompting, which uses AI to write or improve other prompts",
        "text_vi": "Metaprompting, dùng AI để viết hoặc cải thiện các lời nhắc khác"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Role prompting assigns a persona that shapes tone and expertise. It is not few-shot, because no examples of the desired output are provided.",
    "question_vi": "Kỹ thuật prompting nào yêu cầu mô hình trả lời theo một vai, ví dụ \"hãy đóng vai biên tập viên du lịch cao cấp\"?",
    "explanation_vi": "Role prompting gán một vai để định hình giọng điệu và chuyên môn. Đây không phải few-shot vì không có ví dụ nào về đầu ra mong muốn.",
    "lessonId": "d3-t4",
    "objective": "3.2 Prompt engineering techniques"
  },
  {
    "id": 47,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "A university's student assistant must reason about a request, call a course-search tool, read the results and then decide its next step. Which prompting technique fits this workflow?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Chain-of-thought alone, which reasons step by step but does not act on outside tools",
        "text_vi": "Chain-of-thought đơn thuần, suy luận từng bước nhưng không thao tác với công cụ bên ngoài"
      },
      {
        "key": "B",
        "text": "ReAct, which alternates reasoning with tool actions and observations",
        "text_vi": "ReAct, xen kẽ suy luận với hành động dùng công cụ và quan sát kết quả"
      },
      {
        "key": "C",
        "text": "Zero-shot prompting, which gives the model no examples and no reasoning loop",
        "text_vi": "Zero-shot prompting, không đưa ví dụ nào và không có vòng lặp suy luận"
      },
      {
        "key": "D",
        "text": "Role prompting, which sets a persona but does not connect to any tools",
        "text_vi": "Role prompting, thiết lập một vai nhưng không kết nối với công cụ nào"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ReAct combines reasoning with actions, looping through thought, action and observation. Chain-of-thought focuses on internal reasoning and does not call outside tools.",
    "question_vi": "Trợ lý sinh viên của một trường đại học phải suy luận về yêu cầu, gọi công cụ tìm môn học, đọc kết quả rồi quyết định bước tiếp theo. Kỹ thuật prompting nào phù hợp với quy trình này?",
    "explanation_vi": "ReAct kết hợp suy luận với hành động, lặp qua thought, action và observation. Chain-of-thought tập trung vào suy luận nội bộ và không gọi công cụ bên ngoài.",
    "lessonId": "d3-t5",
    "objective": "3.2 Advanced prompting"
  },
  {
    "id": 48,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "A retailer's assistant must answer questions about current public events, local weather and competitor news near its stores, and it should cite sources. Which technique fits best?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Grounding with Google Search, which supplies current public information with sources",
        "text_vi": "Grounding with Google Search, cung cấp thông tin công khai mới nhất kèm nguồn"
      },
      {
        "key": "B",
        "text": "Fine-tuning the model each quarter on a summary of the latest news",
        "text_vi": "Fine-tuning mô hình mỗi quý trên bản tóm tắt tin tức mới nhất"
      },
      {
        "key": "C",
        "text": "Agent Search over internal documents only, with no access to public web data",
        "text_vi": "Agent Search chỉ trên tài liệu nội bộ, không truy cập dữ liệu web công khai"
      },
      {
        "key": "D",
        "text": "Raising the temperature so that the model produces fresher-sounding answers",
        "text_vi": "Tăng temperature để mô hình đưa ra câu trả lời nghe mới mẻ hơn"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Grounding with Google Search ties answers to current public information and shows sources. Internal-only search cannot see public events, and fine-tuning does not supply live facts.",
    "question_vi": "Trợ lý của một nhà bán lẻ phải trả lời các câu hỏi về sự kiện công khai hiện tại, thời tiết địa phương và tin tức đối thủ gần các cửa hàng, và cần trích dẫn nguồn. Kỹ thuật nào phù hợp nhất?",
    "explanation_vi": "Grounding with Google Search gắn câu trả lời với thông tin công khai hiện hành và hiển thị nguồn. Tìm kiếm chỉ nội bộ không thấy được sự kiện công khai, còn fine-tuning không cung cấp dữ kiện thời gian thực.",
    "lessonId": "d3-t6",
    "objective": "3.3 Grounding and RAG"
  },
  {
    "id": 49,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "Which statement best describes grounding in gen AI?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Training the model for a longer period so that it memorizes more facts",
        "text_vi": "Huấn luyện mô hình trong thời gian dài hơn để nó ghi nhớ nhiều dữ kiện hơn"
      },
      {
        "key": "B",
        "text": "Tying model responses to verifiable sources so that answers rely on trusted data",
        "text_vi": "Gắn câu trả lời của mô hình với các nguồn có thể kiểm chứng để câu trả lời dựa trên dữ liệu đáng tin cậy"
      },
      {
        "key": "C",
        "text": "Filtering harmful content out of responses before users are able to see them",
        "text_vi": "Lọc nội dung có hại khỏi câu trả lời trước khi người dùng nhìn thấy"
      },
      {
        "key": "D",
        "text": "Shrinking the model so that it can run on local devices with limited resources",
        "text_vi": "Thu nhỏ mô hình để chạy được trên thiết bị cục bộ có tài nguyên hạn chế"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Grounding connects answers to verifiable sources, which reduces hallucination and knowledge-cutoff problems. Filtering harmful content is the role of safety settings, not grounding.",
    "question_vi": "Phát biểu nào mô tả đúng nhất grounding trong gen AI?",
    "explanation_vi": "Grounding kết nối câu trả lời với nguồn có thể kiểm chứng, giúp giảm hallucination và vấn đề knowledge cutoff. Lọc nội dung có hại là vai trò của safety settings, không phải grounding.",
    "lessonId": "d3-t6",
    "objective": "3.3 Grounding and RAG"
  },
  {
    "id": 50,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "Which setting change helps a model give more consistent, factual and repeatable answers?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Raising the temperature to encourage more creative and varied wording",
        "text_vi": "Tăng temperature để khuyến khích cách diễn đạt sáng tạo và đa dạng hơn"
      },
      {
        "key": "B",
        "text": "Raising the output length to its maximum so that the model adds more detail",
        "text_vi": "Tăng độ dài đầu ra lên mức tối đa để mô hình thêm nhiều chi tiết hơn"
      },
      {
        "key": "C",
        "text": "Lowering the temperature to reduce randomness",
        "text_vi": "Hạ temperature để giảm tính ngẫu nhiên"
      },
      {
        "key": "D",
        "text": "Turning off safety settings so that the model can discuss any topic freely",
        "text_vi": "Tắt safety settings để mô hình có thể bàn luận mọi chủ đề một cách tự do"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Low temperature reduces randomness, which suits factual and repeatable tasks, while high temperature suits creative ones. Temperature does not fix hallucination, since grounding does that.",
    "question_vi": "Thay đổi thiết lập nào giúp mô hình đưa ra câu trả lời nhất quán, thực tế và lặp lại được hơn?",
    "explanation_vi": "Temperature thấp giảm tính ngẫu nhiên, phù hợp với tác vụ thực tế và lặp lại, còn temperature cao phù hợp tác vụ sáng tạo. Temperature không khắc phục hallucination, việc đó là của grounding.",
    "lessonId": "d3-t7",
    "objective": "3.3 Sampling parameters and settings"
  },
  {
    "id": 51,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "An insurer turned on its model's safety settings and now assumes the assistant can no longer give inaccurate coverage answers. Is that assumption correct?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "No. Safety settings filter harmful content but do not guarantee factual accuracy",
        "text_vi": "Không. Safety settings lọc nội dung có hại nhưng không đảm bảo tính chính xác"
      },
      {
        "key": "B",
        "text": "Yes. Safety settings check each statement against the insurer's policy database",
        "text_vi": "Có. Safety settings kiểm tra từng câu với cơ sở dữ liệu hợp đồng của công ty bảo hiểm"
      },
      {
        "key": "C",
        "text": "Yes. Safety settings force the model to cite a source for every sentence it writes",
        "text_vi": "Có. Safety settings buộc mô hình trích dẫn nguồn cho mọi câu nó viết"
      },
      {
        "key": "D",
        "text": "No. Safety settings only control how long the model's responses are allowed to be",
        "text_vi": "Không. Safety settings chỉ kiểm soát độ dài cho phép của câu trả lời của mô hình"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Safety settings filter harmful content and do not verify facts. Accuracy needs grounding or RAG on authoritative documents, plus human review where stakes are high.",
    "question_vi": "Một công ty bảo hiểm bật safety settings của mô hình và cho rằng trợ lý giờ sẽ không còn đưa ra câu trả lời sai về quyền lợi bảo hiểm. Giả định này có đúng không?",
    "explanation_vi": "Safety settings lọc nội dung có hại và không kiểm chứng sự thật. Độ chính xác cần grounding hoặc RAG trên tài liệu có thẩm quyền, cộng với con người xem xét khi rủi ro cao.",
    "lessonId": "d3-t7",
    "objective": "3.3 Sampling parameters and settings"
  },
  {
    "id": 52,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "A retail executive wants to launch a gen AI initiative and several vendors are pitching impressive models. The team is eager to start immediately. What should the leader do first when choosing a solution?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Select the largest available model first and then look for problems it can solve",
        "text_vi": "Chọn mô hình lớn nhất hiện có trước rồi mới tìm vấn đề để nó giải quyết"
      },
      {
        "key": "B",
        "text": "Build a custom model from scratch so that the retailer owns something unique",
        "text_vi": "Xây một mô hình tùy chỉnh từ đầu để nhà bán lẻ sở hữu thứ độc nhất"
      },
      {
        "key": "C",
        "text": "Copy the gen AI tool that a competitor announced most recently in the press",
        "text_vi": "Sao chép công cụ gen AI mà một đối thủ vừa công bố gần đây trên báo chí"
      },
      {
        "key": "D",
        "text": "Define the business problem, requirements and constraints before choosing technology",
        "text_vi": "Xác định vấn đề kinh doanh, yêu cầu và ràng buộc trước khi chọn công nghệ"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Google Cloud's guidance is to start from the business problem and its constraints, not from the model. Answers that jump straight to technology skip requirements and are typically wrong.",
    "question_vi": "Một lãnh đạo ngành bán lẻ muốn khởi động sáng kiến gen AI và nhiều nhà cung cấp đang giới thiệu các mô hình ấn tượng. Nhóm muốn bắt đầu ngay. Lãnh đạo nên làm gì đầu tiên khi chọn giải pháp?",
    "explanation_vi": "Hướng dẫn của Google Cloud là bắt đầu từ vấn đề kinh doanh và các ràng buộc, không phải từ mô hình. Các đáp án nhảy thẳng vào công nghệ bỏ qua yêu cầu và thường là sai.",
    "lessonId": "d4-t1",
    "objective": "4.1 Choosing the right gen AI solution"
  },
  {
    "id": 53,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "A software company wants a standard capability, summarizing meeting notes, but it has no ML staff and wants results within weeks. What is the best approach?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Train a custom model from scratch to maximize control over every detail",
        "text_vi": "Huấn luyện một mô hình tùy chỉnh từ đầu để kiểm soát tối đa mọi chi tiết"
      },
      {
        "key": "B",
        "text": "Wait until the company hires several data scientists to build a model in-house",
        "text_vi": "Chờ đến khi công ty thuê vài nhà khoa học dữ liệu để tự xây mô hình nội bộ"
      },
      {
        "key": "C",
        "text": "Build directly on raw GPU infrastructure to avoid depending on any vendor product",
        "text_vi": "Xây trực tiếp trên hạ tầng GPU thô để tránh phụ thuộc vào bất kỳ sản phẩm nào của nhà cung cấp"
      },
      {
        "key": "D",
        "text": "Start with a ready-made, no-code product and customize only if it falls short",
        "text_vi": "Bắt đầu với sản phẩm làm sẵn, không cần code và chỉ tùy chỉnh nếu chưa đáp ứng được"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "The simplest option that meets the need is best: a standard capability points to a ready-made or no-code product. Moving down to custom building adds effort, cost and delay with no benefit here.",
    "question_vi": "Một công ty phần mềm cần một khả năng chuẩn, tóm tắt ghi chú cuộc họp, nhưng không có nhân sự ML và muốn có kết quả trong vài tuần. Cách tiếp cận tốt nhất là gì?",
    "explanation_vi": "Lựa chọn đơn giản nhất đáp ứng nhu cầu là tốt nhất: khả năng chuẩn nên dùng sản phẩm làm sẵn hoặc no-code. Đi xuống xây dựng tùy chỉnh chỉ thêm công sức, chi phí và chậm trễ mà không có lợi ích gì ở đây.",
    "lessonId": "d4-t1",
    "objective": "4.1 Choosing the right gen AI solution"
  },
  {
    "id": 54,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "A manufacturer's CEO has announced an AI vision, while shop-floor staff keep suggesting their own ideas for using gen AI. Which strategy does Google Cloud recommend?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Combine top-down leadership vision with bottom-up employee ideas and feedback",
        "text_vi": "Kết hợp tầm nhìn từ lãnh đạo (top-down) với ý tưởng và phản hồi từ nhân viên (bottom-up)"
      },
      {
        "key": "B",
        "text": "Rely only on executive-chosen projects so that all work stays aligned with the vision",
        "text_vi": "Chỉ dựa vào các dự án do lãnh đạo chọn để mọi việc đều bám sát tầm nhìn"
      },
      {
        "key": "C",
        "text": "Rely only on ideas from staff because the people closest to the work know best",
        "text_vi": "Chỉ dựa vào ý tưởng của nhân viên vì người gần công việc nhất hiểu rõ nhất"
      },
      {
        "key": "D",
        "text": "Delay all projects until every department has written its own separate AI policy",
        "text_vi": "Hoãn mọi dự án cho đến khi mỗi phòng ban tự viết chính sách AI riêng"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "The recommended strategy blends leadership vision with employee ideas. Options that use only top-down or only bottom-up miss half of that combination.",
    "question_vi": "Giám đốc điều hành của một nhà sản xuất đã công bố tầm nhìn AI, trong khi nhân viên xưởng liên tục đề xuất ý tưởng riêng về việc dùng gen AI. Google Cloud khuyến nghị chiến lược nào?",
    "explanation_vi": "Chiến lược khuyến nghị là kết hợp tầm nhìn của lãnh đạo với ý tưởng của nhân viên. Các lựa chọn chỉ top-down hoặc chỉ bottom-up bỏ lỡ một nửa sự kết hợp đó.",
    "lessonId": "d4-t2",
    "objective": "4.1 Factors that shape gen AI strategy"
  },
  {
    "id": 55,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "An energy utility has a limited budget, a small team without AI expertise and a six-month deadline. Which group of factors do these three constraints describe?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Resources: people, money and time",
        "text_vi": "Resources (nguồn lực): con người, tiền bạc và thời gian"
      },
      {
        "key": "B",
        "text": "Needs: scale, latency, privacy and connectivity requirements",
        "text_vi": "Needs (nhu cầu): các yêu cầu về quy mô, độ trễ, quyền riêng tư và kết nối"
      },
      {
        "key": "C",
        "text": "Model attributes: modality, context window and cost per request",
        "text_vi": "Model attributes (thuộc tính mô hình): modality, cửa sổ ngữ cảnh và chi phí cho mỗi yêu cầu"
      },
      {
        "key": "D",
        "text": "Responsible AI principles: fairness, transparency and accountability",
        "text_vi": "Nguyên tắc responsible AI: công bằng, minh bạch và trách nhiệm giải trình"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Budget, staff expertise and deadline are resources, meaning money, people and time. Needs cover things like scale, latency, privacy and connectivity.",
    "question_vi": "Một công ty điện lực có ngân sách hạn chế, đội ngũ nhỏ không có chuyên môn AI và hạn chót sáu tháng. Ba ràng buộc này thuộc nhóm yếu tố nào?",
    "explanation_vi": "Ngân sách, chuyên môn nhân sự và hạn chót là nguồn lực, tức tiền bạc, con người và thời gian. Needs bao gồm những thứ như quy mô, độ trễ, quyền riêng tư và kết nối.",
    "lessonId": "d4-t2",
    "objective": "4.1 Factors that shape gen AI strategy"
  },
  {
    "id": 56,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "A government agency has secured funding for gen AI and wants to roll it out across departments. The CIO asks what to do first when integrating gen AI into the organization.",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Establish a clear vision with leadership support and business goals",
        "text_vi": "Thiết lập tầm nhìn rõ ràng với sự ủng hộ của lãnh đạo và các mục tiêu kinh doanh"
      },
      {
        "key": "B",
        "text": "Deploy the largest available model to every department at the same time",
        "text_vi": "Triển khai mô hình lớn nhất hiện có cho mọi phòng ban cùng một lúc"
      },
      {
        "key": "C",
        "text": "Postpone defining success metrics until the tools are already live",
        "text_vi": "Hoãn việc xác định chỉ số thành công cho đến khi công cụ đã hoạt động"
      },
      {
        "key": "D",
        "text": "Skip prioritization and let each team choose whichever tools it prefers",
        "text_vi": "Bỏ qua việc xếp thứ tự ưu tiên và để mỗi nhóm tự chọn công cụ mình thích"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Integration starts with a clear vision backed by leadership, followed by prioritizing use cases, investing, managing change, measuring value and championing responsible AI. Starting with a big deployment skips the foundation.",
    "question_vi": "Một cơ quan chính phủ đã có kinh phí cho gen AI và muốn triển khai trên các phòng ban. CIO hỏi nên làm gì đầu tiên khi tích hợp gen AI vào tổ chức.",
    "explanation_vi": "Tích hợp bắt đầu bằng tầm nhìn rõ ràng được lãnh đạo ủng hộ, sau đó là ưu tiên use case, đầu tư, quản lý thay đổi, đo lường giá trị và thúc đẩy responsible AI. Bắt đầu bằng triển khai lớn là bỏ qua nền tảng.",
    "lessonId": "d4-t3",
    "objective": "4.1 Integrating gen AI and measuring impact"
  },
  {
    "id": 57,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "What is Google's Secure AI Framework (SAIF)?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "A Google foundation model trained to detect intrusions on corporate networks",
        "text_vi": "Một foundation model của Google dùng để phát hiện xâm nhập trên mạng doanh nghiệp"
      },
      {
        "key": "B",
        "text": "A firewall product that blocks unwanted traffic going to AI applications",
        "text_vi": "Một sản phẩm tường lửa chặn toàn bộ lưu lượng đến các ứng dụng AI"
      },
      {
        "key": "C",
        "text": "A toolkit that measures fairness in a model's outputs across user groups",
        "text_vi": "Một bộ công cụ đo mức độ công bằng trong kết quả của mô hình giữa các nhóm người dùng"
      },
      {
        "key": "D",
        "text": "A framework for managing AI and ML security risks, built on existing security",
        "text_vi": "Một khung quản lý rủi ro bảo mật AI và ML, xây dựng trên nền tảng bảo mật sẵn có"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "SAIF is a framework for managing AI and ML security risks that builds on existing security foundations. It is not a model, a firewall or a fairness tool, since fairness belongs to responsible AI.",
    "question_vi": "Secure AI Framework (SAIF) của Google là gì?",
    "explanation_vi": "SAIF là khung quản lý rủi ro bảo mật AI và ML, xây dựng trên nền tảng bảo mật sẵn có. Nó không phải mô hình, tường lửa hay công cụ đo công bằng, vì công bằng thuộc về responsible AI.",
    "lessonId": "d4-t4",
    "objective": "4.2 Secure AI and SAIF"
  },
  {
    "id": 58,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "A bank has built a Gemini-based application on Google Cloud. Security leaders want to control exactly which employees can access it and its data. Which tool is built for this purpose?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Security Command Center, which gives visibility into overall security posture",
        "text_vi": "Security Command Center, cung cấp khả năng quan sát tình trạng bảo mật tổng thể"
      },
      {
        "key": "B",
        "text": "Model Garden, which lists models that teams can explore and deploy",
        "text_vi": "Model Garden, liệt kê các mô hình để các nhóm khám phá và triển khai"
      },
      {
        "key": "C",
        "text": "Identity and Access Management (IAM), which controls who can access resources",
        "text_vi": "Identity and Access Management (IAM), kiểm soát ai có thể truy cập tài nguyên"
      },
      {
        "key": "D",
        "text": "Conversational Insights, which analyzes customer conversations for trends",
        "text_vi": "Conversational Insights, phân tích hội thoại khách hàng để tìm xu hướng"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "IAM controls who can access what, which is exactly the need. Security Command Center shows security posture rather than granting or restricting access.",
    "question_vi": "Một ngân hàng đã xây dựng ứng dụng dựa trên Gemini trên Google Cloud. Lãnh đạo bảo mật muốn kiểm soát chính xác nhân viên nào được truy cập ứng dụng và dữ liệu của nó. Công cụ nào được xây dựng cho mục đích này?",
    "explanation_vi": "IAM kiểm soát ai được truy cập cái gì, đúng với nhu cầu này. Security Command Center cho thấy tình trạng bảo mật chứ không cấp hay hạn chế quyền truy cập.",
    "lessonId": "d4-t4",
    "objective": "4.2 Secure AI and SAIF"
  },
  {
    "id": 59,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "A lender's gen AI tool that summarizes loan applications appears to treat some applicant groups less favorably. Business pressure is high to keep the launch date. Which response best reflects responsible AI?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Use more diverse data, run regular bias audits and keep human oversight",
        "text_vi": "Dùng dữ liệu đa dạng hơn, kiểm toán thiên lệch định kỳ và duy trì sự giám sát của con người"
      },
      {
        "key": "B",
        "text": "Launch on schedule and plan to correct the bias in a later release",
        "text_vi": "Ra mắt đúng hạn và lên kế hoạch sửa thiên lệch ở một bản phát hành sau"
      },
      {
        "key": "C",
        "text": "Switch to a model that scores faster even though nobody can explain its decisions",
        "text_vi": "Chuyển sang mô hình chấm nhanh hơn dù không ai giải thích được các quyết định của nó"
      },
      {
        "key": "D",
        "text": "Remove human review so that every application is treated by exactly the same process",
        "text_vi": "Bỏ khâu con người xem xét để mọi hồ sơ được xử lý theo đúng cùng một quy trình"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Responsible AI addresses bias with diverse data, regular audits and human oversight across the lifecycle. Shipping first, using black boxes or removing humans all trade fairness for speed.",
    "question_vi": "Công cụ gen AI của một tổ chức cho vay dùng để tóm tắt hồ sơ vay dường như đối xử kém thuận lợi hơn với một số nhóm người nộp đơn. Áp lực kinh doanh về việc giữ ngày ra mắt rất cao. Phản hồi nào thể hiện tốt nhất responsible AI?",
    "explanation_vi": "Responsible AI xử lý thiên lệch bằng dữ liệu đa dạng, kiểm toán định kỳ và giám sát của con người trong suốt vòng đời. Ra mắt trước, dùng hộp đen hoặc bỏ con người đều đánh đổi công bằng lấy tốc độ.",
    "lessonId": "d4-t5",
    "objective": "4.3 Responsible AI"
  },
  {
    "id": 60,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "Which privacy technique replaces direct identifiers in records but allows them to be re-linked to individuals later with a secure key?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Pseudonymization, which can be reversed with the key",
        "text_vi": "Pseudonymization (giả danh hóa), có thể đảo ngược bằng khóa"
      },
      {
        "key": "B",
        "text": "Anonymization, which removes identity in a way that cannot be reversed",
        "text_vi": "Anonymization (ẩn danh hóa), loại bỏ danh tính theo cách không thể đảo ngược"
      },
      {
        "key": "C",
        "text": "Grounding, which ties model answers to verifiable data sources",
        "text_vi": "Grounding, gắn câu trả lời của mô hình với các nguồn dữ liệu có thể kiểm chứng"
      },
      {
        "key": "D",
        "text": "Prompt tuning, which learns a small set of parameters to steer a model",
        "text_vi": "Prompt tuning, học một tập tham số nhỏ để điều hướng mô hình"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Pseudonymization swaps identifiers for placeholders and can be reversed with a key, whereas anonymization cannot be undone. Grounding and prompt tuning are not privacy techniques.",
    "question_vi": "Kỹ thuật bảo vệ quyền riêng tư nào thay thế các định danh trực tiếp trong hồ sơ nhưng vẫn cho phép liên kết lại với từng cá nhân sau này bằng một khóa bảo mật?",
    "explanation_vi": "Pseudonymization thay định danh bằng giá trị thay thế và có thể đảo ngược bằng khóa, còn anonymization không thể hoàn tác. Grounding và prompt tuning không phải kỹ thuật bảo vệ quyền riêng tư.",
    "lessonId": "d4-t5",
    "objective": "4.3 Responsible AI"
  }
];
