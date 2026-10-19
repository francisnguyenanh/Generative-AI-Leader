window.QUIZ_DATA_SET_6 = [
  {
    "id": 1,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "What is 'Quantization' in the context of deploying Large Language Models?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Increasing the model's parameters to make it smarter.",
        "text_vi": "Tăng các thông số của mô hình để mô hình thông minh hơn."
      },
      {
        "key": "B",
        "text": "Encrypting the model's output.",
        "text_vi": "Mã hóa đầu ra của mô hình."
      },
      {
        "key": "C",
        "text": "Reducing the numerical precision of the model's weights (e.g., from 32-bit float to 8-bit integer) to save memory and compute resources during inference.",
        "text_vi": "Giảm độ chính xác về số của trọng số của mô hình (ví dụ: từ số float 32 bit xuống số nguyên 8 bit) để tiết kiệm bộ nhớ và tính toán tài nguyên trong quá trình suy luận."
      },
      {
        "key": "D",
        "text": "Converting text into numerical tokens.",
        "text_vi": "Chuyển đổi văn bản thành mã thông báo số."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Correct: Reducing the numerical precision of the model's weights (e.g., from 32-bit float to 8-bit integer) to save memory and compute resources during inference. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "'Lượng tử hóa' là gì trong bối cảnh triển khai Mô hình ngôn ngữ lớn?",
    "explanation_vi": "Đúng: Giảm độ chính xác về số của trọng số của mô hình (ví dụ: từ số float 32 bit xuống số nguyên 8 bit) để tiết kiệm bộ nhớ và tính toán tài nguyên trong quá trình suy luận. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 2,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "What does 'Beam Search' do during text generation?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "It explores and keeps track of the top N most likely sequences of words at each step, rather than just choosing the single most likely next word, improving overall sentence quality.",
        "text_vi": "Nó khám phá và theo dõi N chuỗi từ có khả năng xảy ra cao nhất ở mỗi bước, thay vì chỉ chọn một từ có khả năng tiếp theo nhất, cải thiện chất lượng câu tổng thể."
      },
      {
        "key": "B",
        "text": "It permanently deletes low-probability words from the vocabulary.",
        "text_vi": "Nó xóa vĩnh viễn các từ có xác suất thấp khỏi từ vựng."
      },
      {
        "key": "C",
        "text": "It shoots a laser to read the hard drive faster.",
        "text_vi": "Nó bắn tia laser để đọc ổ cứng nhanh hơn."
      },
      {
        "key": "D",
        "text": "It searches the internet for answers.",
        "text_vi": "Nó tìm kiếm trên Internet để tìm câu trả lời."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Correct: It explores and keeps track of the top N most likely sequences of words at each step, rather than just choosing the single most likely next word, improving overall sentence quality. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "'Tìm kiếm chùm tia' làm gì trong quá trình tạo văn bản?",
    "explanation_vi": "Đúng: Nó khám phá và theo dõi N chuỗi từ có khả năng xảy ra cao nhất ở mỗi bước, thay vì chỉ chọn một từ có khả năng tiếp theo nhất, cải thiện chất lượng câu tổng thể. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 3,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "How does 'Greedy Decoding' work in text generation?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "It generates all possible words and lets the user choose.",
        "text_vi": "Nó tạo ra tất cả các từ có thể và cho phép người dùng lựa chọn."
      },
      {
        "key": "B",
        "text": "It simply selects the single highest probability token at each generation step, which is fast but can sometimes lead to suboptimal overall sequences.",
        "text_vi": "Nó chỉ đơn giản chọn mã thông báo có xác suất cao nhất ở mỗi bước tạo, việc này nhanh nhưng đôi khi có thể dẫn đến các chuỗi tổng thể dưới mức tối ưu."
      },
      {
        "key": "C",
        "text": "It randomly picks words.",
        "text_vi": "Nó chọn từ ngẫu nhiên."
      },
      {
        "key": "D",
        "text": "It tries to use as much memory as possible.",
        "text_vi": "Nó cố gắng sử dụng càng nhiều bộ nhớ càng tốt."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Correct: It simply selects the single highest probability token at each generation step, which is fast but can sometimes lead to suboptimal overall sequences. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "'Giải mã tham lam' hoạt động như thế nào trong việc tạo văn bản?",
    "explanation_vi": "Đúng: Nó chỉ đơn giản chọn mã thông báo có xác suất cao nhất ở mỗi bước tạo, việc này nhanh nhưng đôi khi có thể dẫn đến các chuỗi tổng thể dưới mức tối ưu. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 4,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "What is the primary purpose of 'Knowledge Distillation'?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "To summarize a large document into a single sentence.",
        "text_vi": "Để tóm tắt một tài liệu lớn thành một câu duy nhất."
      },
      {
        "key": "B",
        "text": "To translate knowledge bases into other languages.",
        "text_vi": "Để dịch các cơ sở kiến thức sang các ngôn ngữ khác."
      },
      {
        "key": "C",
        "text": "To extract water from data centers.",
        "text_vi": "Để trích xuất nước từ các trung tâm dữ liệu."
      },
      {
        "key": "D",
        "text": "To train a smaller, faster 'student' model to replicate the behavior and performance of a much larger, complex 'teacher' model.",
        "text_vi": "Để đào tạo mô hình 'học sinh' nhỏ hơn, nhanh hơn để tái tạo hành vi và hiệu suất của mô hình 'giáo viên' phức tạp, lớn hơn nhiều."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Correct: To train a smaller, faster 'student' model to replicate the behavior and performance of a much larger, complex 'teacher' model. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "Mục đích chính của 'Chưng cất kiến ​​thức' là gì?",
    "explanation_vi": "Đúng: Để đào tạo mô hình 'học sinh' nhỏ hơn, nhanh hơn để tái tạo hành vi và hiệu suất của mô hình 'giáo viên' phức tạp, lớn hơn nhiều. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 5,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "In the context of LLM 'Scaling Laws', model performance predictably improves as you increase which factors?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Model size (parameters), dataset size, and compute budget used for training.",
        "text_vi": "Kích thước mô hình (tham số), kích thước tập dữ liệu và ngân sách tính toán được sử dụng cho đào tạo."
      },
      {
        "key": "B",
        "text": "The UI color contrast and font size.",
        "text_vi": "Độ tương phản màu sắc và kích thước phông chữ của UI."
      },
      {
        "key": "C",
        "text": "The number of human operators.",
        "text_vi": "Số lượng người vận hành."
      },
      {
        "key": "D",
        "text": "Only the size of the prompt.",
        "text_vi": "Chỉ có kích thước của lời nhắc."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Correct: Model size (parameters), dataset size, and compute budget used for training. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "Trong bối cảnh 'Luật mở rộng quy mô' của LLM, hiệu suất của mô hình có thể cải thiện theo dự đoán khi bạn tăng yếu tố nào?",
    "explanation_vi": "Đúng: Kích thước mô hình (tham số), kích thước tập dữ liệu và ngân sách điện toán được sử dụng cho đào tạo. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 6,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "What is the 'Multi-Head Attention' mechanism?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "A hardware setup using multiple monitors.",
        "text_vi": "Một thiết lập phần cứng sử dụng nhiều màn hình."
      },
      {
        "key": "B",
        "text": "An AI that manages multiple chatbots at once.",
        "text_vi": "Một AI quản lý nhiều chatbot cùng một lúc."
      },
      {
        "key": "C",
        "text": "A security feature that monitors multiple users.",
        "text_vi": "Một tính năng bảo mật giám sát nhiều người dùng."
      },
      {
        "key": "D",
        "text": "An architectural component that allows the model to jointly attend to information from different representation subspaces at different positions in the input sequence.",
        "text_vi": "Một thành phần kiến trúc cho phép mô hình cùng tham gia xử lý thông tin từ các không gian con biểu diễn khác nhau ở các vị trí khác nhau trong chuỗi đầu vào."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Correct: An architectural component that allows the model to jointly attend to information from different representation subspaces at different positions in the input sequence. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "Cơ chế 'Chú ý nhiều đầu' là gì?",
    "explanation_vi": "Đúng: Một thành phần kiến trúc cho phép mô hình cùng tham gia xử lý thông tin từ các không gian con biểu diễn khác nhau ở các vị trí khác nhau trong chuỗi đầu vào. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 7,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "What is 'Model Pruning'?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Cutting the physical wires of a server to save power.",
        "text_vi": "Cắt dây vật lý của máy chủ để tiết kiệm điện."
      },
      {
        "key": "B",
        "text": "Removing redundant, zero, or non-essential weights and connections in a trained neural network to make it smaller and faster without losing significant accuracy.",
        "text_vi": "Loại bỏ các trọng số và kết nối dư thừa, bằng 0 hoặc không cần thiết trong mạng nơ-ron đã được huấn luyện để làm cho mạng nhỏ hơn và nhanh hơn mà không làm mất đi độ chính xác đáng kể."
      },
      {
        "key": "C",
        "text": "Removing bad words from the output.",
        "text_vi": "Loại bỏ các từ xấu khỏi đầu ra."
      },
      {
        "key": "D",
        "text": "Shortening the user's prompt.",
        "text_vi": "Rút ngắn lời nhắc của người dùng."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Correct: Removing redundant, zero, or non-essential weights and connections in a trained neural network to make it smaller and faster without losing significant accuracy. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "'Cắt tỉa mô hình' là gì?",
    "explanation_vi": "Đúng: Loại bỏ các trọng số và kết nối dư thừa, bằng 0 hoặc không cần thiết trong mạng nơ-ron đã được huấn luyện để làm cho mạng nhỏ hơn và nhanh hơn mà không làm mất đi độ chính xác đáng kể. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 8,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "Which loss function is typically minimized when training an autoregressive language model?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Hinge Loss",
        "text_vi": "Mất bản lề"
      },
      {
        "key": "B",
        "text": "L1 Regularization",
        "text_vi": "Chính quy hóa L1"
      },
      {
        "key": "C",
        "text": "Cross-Entropy Loss",
        "text_vi": "Mất Entropy chéo"
      },
      {
        "key": "D",
        "text": "Mean Squared Error (MSE)",
        "text_vi": "Lỗi bình phương trung bình (MSE)"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Correct: Cross-Entropy Loss Review why this choice fits the question and why alternatives do not.",
    "question_vi": "Hàm mất mát nào thường được giảm thiểu khi đào tạo mô hình ngôn ngữ tự hồi quy?",
    "explanation_vi": "Đúng: Mất mát Entropy chéo Xem xét tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế thì không."
  },
  {
    "id": 9,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "What is 'Selection Bias' in training data?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "When the training dataset is not representative of the real-world population or scenarios the model will actually encounter, leading to skewed predictions.",
        "text_vi": "Khi tập dữ liệu huấn luyện không đại diện cho dân số hoặc các kịch bản trong thế giới thực mà mô hình sẽ thực sự gặp phải, dẫn đến dự đoán sai lệch."
      },
      {
        "key": "B",
        "text": "When the AI selects a random answer.",
        "text_vi": "Khi AI chọn một câu trả lời ngẫu nhiên."
      },
      {
        "key": "C",
        "text": "When the user selects the wrong prompt.",
        "text_vi": "Khi người dùng chọn sai dấu nhắc."
      },
      {
        "key": "D",
        "text": "When the hardware selects the wrong GPU.",
        "text_vi": "Khi phần cứng chọn sai GPU."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Correct: When the training dataset is not representative of the real-world population or scenarios the model will actually encounter, leading to skewed predictions. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "'Xu hướng lựa chọn' trong dữ liệu đào tạo là gì?",
    "explanation_vi": "Đúng: Khi tập dữ liệu huấn luyện không đại diện cho dân số hoặc các tình huống trong thế giới thực mà mô hình sẽ thực sự gặp phải, dẫn đến dự đoán sai lệch. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 10,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "How do models handle Out-Of-Vocabulary (OOV) words if they are NOT using sub-word tokenization?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "They skip the word completely.",
        "text_vi": "Họ bỏ qua từ này hoàn toàn."
      },
      {
        "key": "B",
        "text": "They typically replace the unknown word with a special [UNK] (unknown) token, losing the specific meaning of that word.",
        "text_vi": "Họ thường thay thế từ chưa biết bằng mã thông báo [UNK] (không xác định) đặc biệt, làm mất đi ý nghĩa cụ thể của từ đó."
      },
      {
        "key": "C",
        "text": "They crash and stop working.",
        "text_vi": "Họ gặp sự cố và ngừng hoạt động."
      },
      {
        "key": "D",
        "text": "They search Google to find the word.",
        "text_vi": "Họ tìm kiếm trên Google để tìm từ đó."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Correct: They typically replace the unknown word with a special [UNK] (unknown) token, losing the specific meaning of that word. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "Làm cách nào để các mô hình xử lý các từ nằm ngoài từ vựng (OOV) nếu chúng KHÔNG sử dụng mã thông báo từ phụ?",
    "explanation_vi": "Đúng: Họ thường thay thế từ chưa biết bằng mã thông báo [UNK] (không xác định) đặc biệt, làm mất đi ý nghĩa cụ thể của từ đó. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 11,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "What is a 'Hyperparameter' in machine learning?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "The weights learned by the model.",
        "text_vi": "Các trọng số mà mô hình đã học được."
      },
      {
        "key": "B",
        "text": "The output text generated by the model.",
        "text_vi": "Văn bản đầu ra được tạo bởi mô hình."
      },
      {
        "key": "C",
        "text": "A parameter that moves faster than light.",
        "text_vi": "Một thông số chuyển động nhanh hơn ánh sáng."
      },
      {
        "key": "D",
        "text": "A configuration value set by the developer before the learning process begins (like learning rate or batch size), which governs the training process itself.",
        "text_vi": "Giá trị cấu hình do nhà phát triển đặt trước khi quá trình học bắt đầu (như tốc độ học hoặc kích thước lô), giá trị này chi phối chính quá trình đào tạo."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Correct: A configuration value set by the developer before the learning process begins (like learning rate or batch size), which governs the training process itself. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "'Siêu tham số' trong Học máy (Machine Learning) là gì?",
    "explanation_vi": "Đúng: Giá trị cấu hình do nhà phát triển đặt trước khi quá trình học bắt đầu (như tốc độ học hoặc kích thước lô), giá trị này chi phối chính quá trình đào tạo. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 12,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "What does a 'Mixture of Experts' (MoE) architecture allow an LLM to do?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Mix different programming languages.",
        "text_vi": "Trộn các ngôn ngữ lập trình khác nhau."
      },
      {
        "key": "B",
        "text": "Mix audio and video streams.",
        "text_vi": "Trộn các luồng âm thanh và video."
      },
      {
        "key": "C",
        "text": "Scale up the total parameter count significantly without proportionally increasing the computation cost per token, by only activating a small 'expert' subset of parameters for each specific input.",
        "text_vi": "Tăng quy mô tổng số tham số một cách đáng kể mà không làm tăng chi phí tính toán trên mỗi mã thông báo theo tỷ lệ, bằng cách chỉ kích hoạt một tập hợp con tham số 'chuyên gia' nhỏ cho từng đầu vào cụ thể."
      },
      {
        "key": "D",
        "text": "Hire human experts to answer questions.",
        "text_vi": "Thuê chuyên gia con người để trả lời các câu hỏi."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Correct: Scale up the total parameter count significantly without proportionally increasing the computation cost per token, by only activating a small 'expert' subset of parameters for each specific input. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "Kiến trúc 'Hỗn hợp các chuyên gia' (MoE) cho phép LLM làm gì?",
    "explanation_vi": "Đúng: Tăng đáng kể tổng số tham số mà không làm tăng chi phí tính toán trên mỗi mã thông báo theo tỷ lệ, bằng cách chỉ kích hoạt một tập hợp con tham số 'chuyên gia' nhỏ cho từng đầu vào cụ thể. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 13,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "Why are GPUs preferred over CPUs for training deep neural networks?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "GPUs are designed to perform thousands of simple matrix multiplications in parallel, which is the core mathematical operation of neural networks.",
        "text_vi": "GPU được thiết kế để thực hiện song song hàng nghìn phép nhân ma trận đơn giản, đây là hoạt động toán học cốt lõi của mạng lưới thần kinh."
      },
      {
        "key": "B",
        "text": "GPUs are strictly for rendering video games.",
        "text_vi": "GPU hoàn toàn dành cho việc kết xuất trò chơi điện tử."
      },
      {
        "key": "C",
        "text": "GPUs have larger screens.",
        "text_vi": "GPU có màn hình lớn hơn."
      },
      {
        "key": "D",
        "text": "GPUs do not require electricity.",
        "text_vi": "GPU không cần điện."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Correct: GPUs are designed to perform thousands of simple matrix multiplications in parallel, which is the core mathematical operation of neural networks. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "Tại sao GPU lại được ưu tiên hơn CPU trong việc đào tạo mạng lưới thần kinh sâu?",
    "explanation_vi": "Đúng: GPU được thiết kế để thực hiện song song hàng nghìn phép nhân ma trận đơn giản, đây là hoạt động toán học cốt lõi của mạng lưới thần kinh. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 14,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "What is 'Supervised Fine-Tuning' (SFT) in the context of instruction-tuned LLMs?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Tuning the physical hardware.",
        "text_vi": "Điều chỉnh phần cứng vật lý."
      },
      {
        "key": "B",
        "text": "Watching the AI train on a monitor.",
        "text_vi": "Xem AI đào tạo trên màn hình."
      },
      {
        "key": "C",
        "text": "Using unlabeled data.",
        "text_vi": "Sử dụng dữ liệu không được gắn nhãn."
      },
      {
        "key": "D",
        "text": "Taking a pre-trained model and training it further on high-quality, human-written pairs of instructions and desired responses to teach it how to act like an assistant.",
        "text_vi": "Sử dụng một mô hình được đào tạo trước và đào tạo thêm về các cặp hướng dẫn chất lượng cao do con người viết và các phản hồi mong muốn để dạy mô hình đó cách hoạt động như một trợ lý."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Correct: Taking a pre-trained model and training it further on high-quality, human-written pairs of instructions and desired responses to teach it how to act like an assistant. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "'tinh chỉnh (fine-tuning) được giám sát' (SFT) là gì trong bối cảnh LLM được điều chỉnh theo hướng dẫn?",
    "explanation_vi": "Đúng: Sử dụng một mô hình được đào tạo trước và đào tạo thêm về các cặp hướng dẫn chất lượng cao do con người viết và các phản hồi mong muốn để dạy mô hình đó cách hoạt động như một trợ lý. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 15,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "What is a primary challenge of generating Video using AI compared to generating static Images?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Videos are too loud.",
        "text_vi": "Video quá to."
      },
      {
        "key": "B",
        "text": "Videos cannot be stored in the cloud.",
        "text_vi": "Video không thể được lưu trữ trên đám mây."
      },
      {
        "key": "C",
        "text": "Maintaining temporal consistency (keeping objects, lighting, and physics consistent from one frame to the next) over time.",
        "text_vi": "Duy trì tính nhất quán về mặt thời gian (giữ cho các vật thể, ánh sáng và vật lý nhất quán từ khung hình này sang khung hình tiếp theo) theo thời gian."
      },
      {
        "key": "D",
        "text": "Images require more compute.",
        "text_vi": "Hình ảnh yêu cầu tính toán nhiều hơn."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Correct: Maintaining temporal consistency (keeping objects, lighting, and physics consistent from one frame to the next) over time. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "Thách thức chính của việc tạo Video bằng AI so với việc tạo Hình ảnh tĩnh là gì?",
    "explanation_vi": "Đúng: Duy trì tính nhất quán về thời gian (giữ cho các vật thể, ánh sáng và vật lý nhất quán từ khung hình này sang khung hình tiếp theo) theo thời gian. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 16,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "Which term describes the AI's ability to 'understand' the relationship between words based on their context in a sentence?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Binary encoding.",
        "text_vi": "Mã hóa nhị phân."
      },
      {
        "key": "B",
        "text": "Semantic representation / Semantic understanding.",
        "text_vi": "Biểu diễn ngữ nghĩa/Hiểu ngữ nghĩa."
      },
      {
        "key": "C",
        "text": "Phonetic spelling.",
        "text_vi": "Chính tả ngữ âm."
      },
      {
        "key": "D",
        "text": "Alphabetical sorting.",
        "text_vi": "Sắp xếp theo thứ tự bảng chữ cái."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Correct: Semantic representation / Semantic understanding. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "Thuật ngữ nào mô tả khả năng của AI trong việc “hiểu” mối quan hệ giữa các từ dựa trên ngữ cảnh của chúng trong câu?",
    "explanation_vi": "Đúng: Biểu diễn ngữ nghĩa/Hiểu ngữ nghĩa. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 17,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "A training dataset contains ten times more records than before. What should leadership expect about the duration of one training epoch, all else being equal?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "The data automatically becomes unlabeled.",
        "text_vi": "Dữ liệu sẽ tự động không được gắn nhãn."
      },
      {
        "key": "B",
        "text": "An epoch always completes in exactly one second.",
        "text_vi": "Một kỷ nguyên luôn hoàn thành trong đúng một giây."
      },
      {
        "key": "C",
        "text": "The number of model parameters must become ten times larger.",
        "text_vi": "Số lượng tham số mô hình phải lớn hơn gấp mười lần."
      },
      {
        "key": "D",
        "text": "An epoch generally requires processing more examples, increasing work per epoch.",
        "text_vi": "Một kỷ nguyên thường yêu cầu xử lý nhiều ví dụ hơn, tăng công việc trên mỗi kỷ nguyên."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "An epoch is a pass over the training dataset, so larger datasets generally increase computation per epoch.",
    "question_vi": "Một tập dữ liệu huấn luyện chứa số lượng bản ghi nhiều hơn gấp mười lần so với trước đây. Lãnh đạo nên mong đợi điều gì về thời lượng của một giai đoạn đào tạo, tất cả các thời điểm khác đều bằng nhau?",
    "explanation_vi": "Một kỷ nguyên là một bước vượt qua tập dữ liệu huấn luyện, vì vậy các tập dữ liệu lớn hơn thường tăng khả năng tính toán trên mỗi kỷ nguyên."
  },
  {
    "id": 18,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "What is 'Stochastic Gradient Descent' (SGD)?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "A method for falling down a hill.",
        "text_vi": "Một phương pháp rơi xuống một ngọn đồi."
      },
      {
        "key": "B",
        "text": "An optimization algorithm that updates the model's parameters using a small, random batch of data at a time to efficiently minimize the loss function.",
        "text_vi": "Một thuật toán tối ưu hóa cập nhật các tham số của mô hình bằng cách sử dụng một lô dữ liệu nhỏ, ngẫu nhiên tại một thời điểm để giảm thiểu hàm mất mát một cách hiệu quả."
      },
      {
        "key": "C",
        "text": "A type of prompt engineering.",
        "text_vi": "Một loại kỹ thuật prompt (prompt engineering)."
      },
      {
        "key": "D",
        "text": "A vector database index.",
        "text_vi": "Một chỉ mục cơ sở dữ liệu vector."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Correct: An optimization algorithm that updates the model's parameters using a small, random batch of data at a time to efficiently minimize the loss function. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "'Giảm dần độ dốc ngẫu nhiên' (SGD) là gì?",
    "explanation_vi": "Đúng: Một thuật toán tối ưu hóa cập nhật các tham số của mô hình bằng cách sử dụng một lô dữ liệu nhỏ, ngẫu nhiên tại một thời điểm để giảm thiểu hàm mất mát một cách hiệu quả. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 19,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "How does Vertex AI Search primarily provide 'Extractive Answers'?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "By generating a new story.",
        "text_vi": "Bằng cách tạo ra một câu chuyện mới."
      },
      {
        "key": "B",
        "text": "By translating the text.",
        "text_vi": "Bằng cách dịch văn bản."
      },
      {
        "key": "C",
        "text": "By pulling verbatim text snippets directly from the ingested enterprise documents to answer the query, reducing hallucination risk.",
        "text_vi": "Bằng cách lấy các đoạn văn bản nguyên văn trực tiếp từ tài liệu doanh nghiệp đã nhập để trả lời truy vấn, giảm nguy cơ ảo giác AI (hallucination)."
      },
      {
        "key": "D",
        "text": "By querying public Wikipedia.",
        "text_vi": "Bằng cách truy vấn Wikipedia công cộng."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Correct: By pulling verbatim text snippets directly from the ingested enterprise documents to answer the query, reducing hallucination risk. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "Vertex AI Search chủ yếu cung cấp 'Câu trả lời có tính trích xuất' như thế nào?",
    "explanation_vi": "Đúng: Bằng cách lấy các đoạn văn bản nguyên văn trực tiếp từ tài liệu doanh nghiệp đã nhập để trả lời truy vấn, giảm nguy cơ ảo giác AI (hallucination). Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 20,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "What is the purpose of 'Vertex AI Model Armor' (or Safety Settings)?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "To filter out harmful, toxic, or policy-violating content from both user inputs (prompts) and model outputs (responses).",
        "text_vi": "Để lọc nội dung có hại, độc hại hoặc vi phạm chính sách từ cả đầu vào của người dùng (lời nhắc) và đầu ra của mô hình (phản hồi)."
      },
      {
        "key": "B",
        "text": "To prevent DDoS attacks on the UI.",
        "text_vi": "Để ngăn chặn các cuộc tấn công DDoS vào UI."
      },
      {
        "key": "C",
        "text": "To physically protect cloud servers.",
        "text_vi": "Để bảo vệ vật lý các máy chủ đám mây."
      },
      {
        "key": "D",
        "text": "To encrypt data at rest.",
        "text_vi": "Để mã hóa dữ liệu ở phần còn lại."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Correct: To filter out harmful, toxic, or policy-violating content from both user inputs (prompts) and model outputs (responses). Review why this choice fits the question and why alternatives do not.",
    "question_vi": "Mục đích của 'Vertex AI Model Armor' (hoặc Cài đặt an toàn) là gì?",
    "explanation_vi": "Đúng: Để lọc nội dung có hại, độc hại hoặc vi phạm chính sách từ cả đầu vào của người dùng (lời nhắc) và đầu ra của mô hình (phản hồi). Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 21,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "In BigQuery ML, which function allows you to use a Vertex AI LLM directly on your tabular data using SQL?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "ML.CREATE_IMAGE",
        "text_vi": "ML.CREATE_IMAGE"
      },
      {
        "key": "B",
        "text": "ML.MATH",
        "text_vi": "ML.MATH"
      },
      {
        "key": "C",
        "text": "SELECT * FROM AI",
        "text_vi": "CHỌN * TỪ AI"
      },
      {
        "key": "D",
        "text": "ML.GENERATE_TEXT or ML.GENERATE_TEXT_EMBEDDING",
        "text_vi": "ML.GENERATE_TEXT hoặc ML.GENERATE_TEXT_EMBEDDING"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Correct: ML.GENERATE_TEXT or ML.GENERATE_TEXT_EMBEDDING Review why this choice fits the question and why alternatives do not.",
    "question_vi": "Trong BigQuery ML, chức năng nào cho phép bạn sử dụng Vertex AI LLM trực tiếp trên dữ liệu dạng bảng của mình bằng SQL?",
    "explanation_vi": "Đúng: ML.GENERATE_TEXT hoặc ML.GENERATE_TEXT_EMBEDDING Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 22,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "What is 'Provisioned Throughput' in Vertex AI?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Paying per character.",
        "text_vi": "Trả tiền cho mỗi nhân vật."
      },
      {
        "key": "B",
        "text": "A free tier for students.",
        "text_vi": "Một cấp độ miễn phí cho sinh viên."
      },
      {
        "key": "C",
        "text": "A pricing and deployment model where you reserve dedicated processing capacity for consistent, low-latency model serving, ideal for high-traffic production workloads.",
        "text_vi": "Một mô hình định giá và triển khai trong đó bạn dự trữ năng lực xử lý chuyên dụng để phục vụ mô hình nhất quán, có độ trễ thấp, lý tưởng cho khối lượng công việc sản xuất có lưu lượng truy cập cao."
      },
      {
        "key": "D",
        "text": "A metric for network speed.",
        "text_vi": "Một thước đo cho tốc độ mạng."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Correct: A pricing and deployment model where you reserve dedicated processing capacity for consistent, low-latency model serving, ideal for high-traffic production workloads. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "'Thông lượng được cung cấp' trong Vertex AI là gì?",
    "explanation_vi": "Đúng: Một mô hình định giá và triển khai trong đó bạn dự trữ khả năng xử lý chuyên dụng để phục vụ mô hình nhất quán, có độ trễ thấp, lý tưởng cho khối lượng công việc sản xuất có lưu lượng truy cập cao. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 23,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "Which Google Cloud service is typically used to ingest and process massive streaming data pipelines before they are used for AI training?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Google Docs",
        "text_vi": "Google Tài liệu"
      },
      {
        "key": "B",
        "text": "Cloud Dataflow (often integrated with Pub/Sub)",
        "text_vi": "Cloud Dataflow (thường được tích hợp với Pub/Sub)"
      },
      {
        "key": "C",
        "text": "Cloud Translation",
        "text_vi": "Dịch đám mây"
      },
      {
        "key": "D",
        "text": "Vertex AI Studio",
        "text_vi": "Studio AI của Vertex"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Correct: Cloud Dataflow (often integrated with Pub/Sub) Review why this choice fits the question and why alternatives do not.",
    "question_vi": "Dịch vụ Google Cloud nào thường được sử dụng để tiếp thu và xử lý các đường dẫn dữ liệu truyền trực tuyến khổng lồ trước khi chúng được sử dụng cho hoạt động đào tạo AI?",
    "explanation_vi": "Đúng: Cloud Dataflow (thường được tích hợp với Pub/Sub) Xem lại lý do tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 24,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "What is the primary use case for Google's 'Time Series Insights API'?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Identifying anomalies and forecasting trends in time-series data (like IoT sensor data or server metrics).",
        "text_vi": "Xác định các điểm bất thường và dự báo xu hướng trong dữ liệu chuỗi thời gian (như dữ liệu cảm biến IoT hoặc số liệu máy chủ)."
      },
      {
        "key": "B",
        "text": "Translating dates.",
        "text_vi": "Dịch ngày."
      },
      {
        "key": "C",
        "text": "Predicting the plot of movies.",
        "text_vi": "Dự đoán cốt truyện của phim."
      },
      {
        "key": "D",
        "text": "Generating historical fiction.",
        "text_vi": "Tạo ra tiểu thuyết lịch sử."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Correct: Identifying anomalies and forecasting trends in time-series data (like IoT sensor data or server metrics). Review why this choice fits the question and why alternatives do not.",
    "question_vi": "Trường hợp sử dụng chính của 'API thông tin chi tiết về chuỗi thời gian' của Google là gì?",
    "explanation_vi": "Đúng: Xác định các điểm bất thường và dự báo xu hướng trong dữ liệu chuỗi thời gian (như dữ liệu cảm biến IoT hoặc số liệu máy chủ). Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 25,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "How does Gemini 1.5 Flash differ primarily from Gemini 1.5 Pro?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Flash is only for images.",
        "text_vi": "Flash chỉ dành cho hình ảnh."
      },
      {
        "key": "B",
        "text": "There is no difference.",
        "text_vi": "Không có sự khác biệt."
      },
      {
        "key": "C",
        "text": "Flash cannot be accessed via API.",
        "text_vi": "Flash không thể được truy cập thông qua API."
      },
      {
        "key": "D",
        "text": "Flash is designed to be lighter, faster, and more cost-efficient for high-volume, lower-complexity tasks, while Pro is for complex reasoning.",
        "text_vi": "Flash được thiết kế để nhẹ hơn, nhanh hơn và tiết kiệm chi phí hơn cho các tác vụ có khối lượng lớn, độ phức tạp thấp hơn, trong khi Pro dành cho lý luận phức tạp."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Correct: Flash is designed to be lighter, faster, and more cost-efficient for high-volume, lower-complexity tasks, while Pro is for complex reasoning. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "Gemini 1.5 Flash khác biệt cơ bản với Gemini 1.5 Pro như thế nào?",
    "explanation_vi": "Đúng: Flash được thiết kế để nhẹ hơn, nhanh hơn và tiết kiệm chi phí hơn cho các tác vụ có khối lượng lớn, độ phức tạp thấp hơn, trong khi Pro dành cho lý luận phức tạp. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 26,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "What is a 'Data Store' in Vertex AI Search and Conversation?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "A prompt template.",
        "text_vi": "Một mẫu nhắc nhở."
      },
      {
        "key": "B",
        "text": "A central container that holds your ingested data (website URLs, unstructured documents, structured data) for the search engine or generative agent to retrieve information from.",
        "text_vi": "Một vùng chứa trung tâm chứa dữ liệu đã nhập của bạn (URL trang web, tài liệu phi cấu trúc, dữ liệu có cấu trúc) để công cụ tìm kiếm hoặc tác nhân tổng hợp lấy thông tin từ đó."
      },
      {
        "key": "C",
        "text": "A physical hard drive.",
        "text_vi": "Một ổ cứng vật lý."
      },
      {
        "key": "D",
        "text": "A marketplace to buy data.",
        "text_vi": "Một thị trường để mua dữ liệu."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Correct: A central container that holds your ingested data (website URLs, unstructured documents, structured data) for the search engine or generative agent to retrieve information from. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "'Kho lưu trữ dữ liệu' trong Tìm kiếm và hội thoại AI của Vertex là gì?",
    "explanation_vi": "Đúng: Vùng chứa trung tâm chứa dữ liệu đã nhập của bạn (URL trang web, tài liệu phi cấu trúc, dữ liệu có cấu trúc) để công cụ tìm kiếm hoặc tác nhân tổng hợp lấy thông tin từ đó. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 27,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "When building an agent in Vertex AI Conversation, what is a 'Playbook'?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "A natural language instruction manual that tells the generative agent how to handle specific scenarios, its goals, and which tools to use.",
        "text_vi": "Sổ tay hướng dẫn bằng ngôn ngữ tự nhiên cho tác nhân tạo ra cách xử lý các tình huống cụ thể, mục tiêu của nó và sử dụng công cụ nào."
      },
      {
        "key": "B",
        "text": "A billing configuration file.",
        "text_vi": "Một tập tin cấu hình thanh toán."
      },
      {
        "key": "C",
        "text": "A SQL script.",
        "text_vi": "Một tập lệnh SQL."
      },
      {
        "key": "D",
        "text": "A sports manual.",
        "text_vi": "Một cuốn sổ tay thể thao."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Correct: A natural language instruction manual that tells the generative agent how to handle specific scenarios, its goals, and which tools to use. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "Khi xây dựng một tác nhân trong Vertex AI Conversation, 'Playbook' là gì?",
    "explanation_vi": "Đúng: Sách hướng dẫn sử dụng ngôn ngữ tự nhiên cho tác nhân tạo ra cách xử lý các tình huống cụ thể, mục tiêu của nó và sử dụng công cụ nào. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 28,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "Which tool is used to monitor, track, and visualize ML training metrics like loss and accuracy in real-time on Google Cloud?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Cloud Billing Report",
        "text_vi": "Báo cáo thanh toán trên đám mây"
      },
      {
        "key": "B",
        "text": "Looker Studio",
        "text_vi": "Studio tìm kiếm"
      },
      {
        "key": "C",
        "text": "Vertex AI TensorBoard",
        "text_vi": "Vertex AI TensorBoard"
      },
      {
        "key": "D",
        "text": "Google Analytics",
        "text_vi": "Google phân tích"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Correct: Vertex AI TensorBoard Review why this choice fits the question and why alternatives do not.",
    "question_vi": "Công cụ nào được dùng để giám sát, theo dõi và trực quan hóa các chỉ số đào tạo ML như độ mất mát và độ chính xác trong thời gian thực trên Google Cloud?",
    "explanation_vi": "Đúng: Vertex AI TensorBoard Xem lại lý do tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế thì không."
  },
  {
    "id": 29,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "What is the benefit of using 'Spot VMs' (Preemptible VMs) for training AI models on Compute Engine?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "They provide free software licenses.",
        "text_vi": "Họ cung cấp giấy phép phần mềm miễn phí."
      },
      {
        "key": "B",
        "text": "They never shut down.",
        "text_vi": "Họ không bao giờ đóng cửa."
      },
      {
        "key": "C",
        "text": "They offer significant cost savings (up to 91%) for fault-tolerant, interruptible training workloads.",
        "text_vi": "Chúng giúp tiết kiệm chi phí đáng kể (lên tới 91%) cho khối lượng công việc đào tạo có khả năng chịu lỗi và không bị gián đoạn."
      },
      {
        "key": "D",
        "text": "They run faster than normal VMs.",
        "text_vi": "Chúng chạy nhanh hơn các máy ảo thông thường."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Correct: They offer significant cost savings (up to 91%) for fault-tolerant, interruptible training workloads. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "Lợi ích của việc sử dụng 'Spot VM' (Máy ảo ưu tiên) để đào tạo mô hình AI trên Máy tính điện toán là gì?",
    "explanation_vi": "Đúng: Chúng giúp tiết kiệm chi phí đáng kể (lên tới 91%) cho khối lượng công việc đào tạo có khả năng chịu lỗi và không bị gián đoạn. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 30,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "How does 'Colab Enterprise' differ from standard Google Colab?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "It has a different color scheme.",
        "text_vi": "Nó có một bảng màu khác."
      },
      {
        "key": "B",
        "text": "It requires a physical CD to install.",
        "text_vi": "Nó đòi hỏi một đĩa CD vật lý để cài đặt."
      },
      {
        "key": "C",
        "text": "It only supports Java.",
        "text_vi": "Nó chỉ hỗ trợ Java."
      },
      {
        "key": "D",
        "text": "It provides enterprise-grade security, compliance, and direct integration with Vertex AI services and private VPC networks.",
        "text_vi": "Nó cung cấp khả năng bảo mật, tuân thủ và tích hợp trực tiếp cấp doanh nghiệp với các dịch vụ Vertex AI và mạng VPC riêng."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Correct: It provides enterprise-grade security, compliance, and direct integration with Vertex AI services and private VPC networks. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "'Colab Enterprise' khác với Google Colab tiêu chuẩn như thế nào?",
    "explanation_vi": "Đúng: Nó cung cấp tính bảo mật, tuân thủ và tích hợp trực tiếp cấp doanh nghiệp với các dịch vụ Vertex AI và mạng VPC riêng. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 31,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "Which Google Cloud storage class is best suited for storing massive AI training datasets that are accessed frequently and rapidly during a training run?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Cloud SQL",
        "text_vi": "Đám mây SQL"
      },
      {
        "key": "B",
        "text": "Cloud Storage Standard",
        "text_vi": "Tiêu chuẩn lưu trữ đám mây"
      },
      {
        "key": "C",
        "text": "Cloud Storage Coldline",
        "text_vi": "Đường dây lạnh lưu trữ đám mây"
      },
      {
        "key": "D",
        "text": "Cloud Storage Archive",
        "text_vi": "Lưu trữ lưu trữ đám mây"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Correct: Cloud Storage Standard Review why this choice fits the question and why alternatives do not.",
    "question_vi": "Lớp lưu trữ Google Cloud nào phù hợp nhất để lưu trữ các tập dữ liệu đào tạo AI khổng lồ được truy cập thường xuyên và nhanh chóng trong quá trình đào tạo?",
    "explanation_vi": "Đúng: Tiêu chuẩn lưu trữ đám mây Xem lại lý do tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế thì không."
  },
  {
    "id": 32,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "What problem does 'Vertex AI Feature Store' help prevent during model deployment?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Training-serving skew, by ensuring the exact same feature engineering logic and data are used in both training and real-time inference.",
        "text_vi": "Độ lệch phục vụ đào tạo, bằng cách đảm bảo dữ liệu và logic kỹ thuật có tính năng giống hệt nhau được sử dụng trong cả đào tạo và suy luận thời gian thực."
      },
      {
        "key": "B",
        "text": "Prompt injection.",
        "text_vi": "Tiêm kịp thời."
      },
      {
        "key": "C",
        "text": "Hardware failure.",
        "text_vi": "Lỗi phần cứng."
      },
      {
        "key": "D",
        "text": "Cloud billing overages.",
        "text_vi": "Thanh toán quá mức trên đám mây."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Correct: Training-serving skew, by ensuring the exact same feature engineering logic and data are used in both training and real-time inference. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "'Vertex AI Feature Store' giúp ngăn ngừa vấn đề gì trong quá trình triển khai mô hình?",
    "explanation_vi": "Đúng: Sai lệch phục vụ đào tạo, bằng cách đảm bảo dữ liệu và logic kỹ thuật có tính năng giống hệt nhau được sử dụng trong cả đào tạo và suy luận thời gian thực. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 33,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "If a retail company wants to build an app that recommends products based on user-uploaded photos, which Vertex AI capability is needed?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Multimodal / Vision Embeddings",
        "text_vi": "Nhúng đa phương thức / tầm nhìn"
      },
      {
        "key": "B",
        "text": "Translation API",
        "text_vi": "API dịch"
      },
      {
        "key": "C",
        "text": "Document AI",
        "text_vi": "Tài liệu AI"
      },
      {
        "key": "D",
        "text": "Text-to-Speech",
        "text_vi": "Chuyển văn bản thành giọng nói"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Correct: Multimodal / Vision Embeddings Review why this choice fits the question and why alternatives do not.",
    "question_vi": "Nếu một công ty bán lẻ muốn xây dựng một ứng dụng đề xuất sản phẩm dựa trên ảnh do người dùng tải lên, thì Vertex AI cần có khả năng nào?",
    "explanation_vi": "Đúng: Nhúng Đa phương thức / Tầm nhìn Xem lại lý do tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế thì không."
  },
  {
    "id": 34,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "What is the 'Cloud Translation - Advanced' API primarily used for in an enterprise Gen AI context?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Providing free translations.",
        "text_vi": "Cung cấp bản dịch miễn phí."
      },
      {
        "key": "B",
        "text": "Only translating open-source code.",
        "text_vi": "Chỉ dịch mã nguồn mở."
      },
      {
        "key": "C",
        "text": "Translating images to audio.",
        "text_vi": "Dịch hình ảnh sang âm thanh."
      },
      {
        "key": "D",
        "text": "Customizing translations using glossaries and custom AutoML models for highly specific, industry-specific terminology.",
        "text_vi": "Tùy chỉnh bản dịch bằng cách sử dụng bảng thuật ngữ và mô hình AutoML tùy chỉnh cho thuật ngữ có tính đặc thù cao, dành riêng cho ngành."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Correct: Customizing translations using glossaries and custom AutoML models for highly specific, industry-specific terminology. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "API 'Dịch thuật đám mây - Nâng cao' chủ yếu được sử dụng trong bối cảnh AI thế hệ doanh nghiệp là gì?",
    "explanation_vi": "Đúng: Tùy chỉnh bản dịch bằng cách sử dụng bảng thuật ngữ và mô hình AutoML tùy chỉnh cho thuật ngữ có tính đặc thù cao, dành riêng cho ngành. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 35,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "Which Google Cloud service orchestrates complex, multi-step ML pipelines using open-source Kubeflow definitions?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Cloud Run",
        "text_vi": "Chạy trên đám mây"
      },
      {
        "key": "B",
        "text": "Vertex AI Pipelines",
        "text_vi": "Đường ống AI của Vertex"
      },
      {
        "key": "C",
        "text": "Cloud Functions",
        "text_vi": "Chức năng đám mây"
      },
      {
        "key": "D",
        "text": "Dataproc",
        "text_vi": "dữ liệu"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Correct: Vertex AI Pipelines Review why this choice fits the question and why alternatives do not.",
    "question_vi": "Dịch vụ Google Cloud nào điều phối các quy trình ML phức tạp, gồm nhiều bước bằng cách sử dụng các định nghĩa Kubeflow nguồn mở?",
    "explanation_vi": "Đúng: Đường ống AI của Vertex Xem lại lý do tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế thì không."
  },
  {
    "id": 36,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "What is the primary function of 'AutoML Text' in Vertex AI?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "To format text in bold.",
        "text_vi": "Để định dạng văn bản in đậm."
      },
      {
        "key": "B",
        "text": "To generate SQL queries.",
        "text_vi": "Để tạo các truy vấn SQL."
      },
      {
        "key": "C",
        "text": "To easily train custom models for text classification, entity extraction, and sentiment analysis without writing deep learning code.",
        "text_vi": "Để dễ dàng đào tạo các mô hình tùy chỉnh để phân loại văn bản, trích xuất thực thể và phân tích cảm tính mà không cần viết mã deep learning."
      },
      {
        "key": "D",
        "text": "To write essays automatically.",
        "text_vi": "Để viết bài luận một cách tự động."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Correct: To easily train custom models for text classification, entity extraction, and sentiment analysis without writing deep learning code. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "Chức năng chính của 'Văn bản AutoML' trong Vertex AI là gì?",
    "explanation_vi": "Đúng: Để dễ dàng đào tạo các mô hình tùy chỉnh để phân loại văn bản, trích xuất thực thể và phân tích cảm tính mà không cần viết mã Học sâu (Deep Learning). Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 37,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "How can a developer ensure their Gen AI app on Google Cloud only accesses data within their private corporate network?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "By setting the prompt temperature to 0.",
        "text_vi": "Bằng cách đặt nhiệt độ nhắc về 0."
      },
      {
        "key": "B",
        "text": "Unplug the server.",
        "text_vi": "Rút phích cắm máy chủ."
      },
      {
        "key": "C",
        "text": "By using public Wi-Fi.",
        "text_vi": "Bằng cách sử dụng Wi-Fi công cộng."
      },
      {
        "key": "D",
        "text": "By using VPC Service Controls to create a secure perimeter around Vertex AI resources.",
        "text_vi": "Bằng cách sử dụng Kiểm soát dịch vụ VPC để tạo vành đai an toàn xung quanh tài nguyên AI của Vertex."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Correct: By using VPC Service Controls to create a secure perimeter around Vertex AI resources. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "Làm cách nào nhà phát triển có thể đảm bảo ứng dụng Gen AI của họ trên Google Cloud chỉ truy cập dữ liệu trong mạng công ty riêng của họ?",
    "explanation_vi": "Đúng: Bằng cách sử dụng Kiểm soát dịch vụ VPC để tạo vành đai an toàn xung quanh tài nguyên AI của Vertex. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 38,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "What is 'Vertex AI Endpoints'?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "A fully managed service that securely hosts your trained models and provides a REST API for serving online, real-time predictions.",
        "text_vi": "Một dịch vụ được quản lý hoàn toàn lưu trữ an toàn các mô hình đã đào tạo của bạn và cung cấp API REST để cung cấp các dự đoán trực tuyến theo thời gian thực."
      },
      {
        "key": "B",
        "text": "A tool to stop the training process.",
        "text_vi": "Một công cụ để dừng quá trình đào tạo."
      },
      {
        "key": "C",
        "text": "A UI design tool.",
        "text_vi": "Một công cụ thiết kế giao diện người dùng."
      },
      {
        "key": "D",
        "text": "The physical location of the data center.",
        "text_vi": "Vị trí vật lý của trung tâm dữ liệu."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Correct: A fully managed service that securely hosts your trained models and provides a REST API for serving online, real-time predictions. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "'Điểm cuối AI của Vertex' là gì?",
    "explanation_vi": "Đúng: Một dịch vụ được quản lý hoàn toàn lưu trữ an toàn các mô hình đã đào tạo của bạn và cung cấp API REST để cung cấp các dự đoán trực tuyến theo thời gian thực. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 39,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "Which Gemini feature allows developers to cache large context (like a large codebase or book) so it doesn't need to be re-processed for every query?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "System Instructions",
        "text_vi": "Hướng dẫn hệ thống"
      },
      {
        "key": "B",
        "text": "Context Caching",
        "text_vi": "Bộ nhớ đệm ngữ cảnh"
      },
      {
        "key": "C",
        "text": "Output Formatting",
        "text_vi": "Định dạng đầu ra"
      },
      {
        "key": "D",
        "text": "Context Deletion",
        "text_vi": "Xóa bối cảnh"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Correct: Context Caching Review why this choice fits the question and why alternatives do not.",
    "question_vi": "Tính năng Gemini nào cho phép nhà phát triển lưu trữ ngữ cảnh lớn (chẳng hạn như một cơ sở mã hoặc sách lớn) để không cần phải xử lý lại cho mỗi truy vấn?",
    "explanation_vi": "Đúng: Xem lại bộ nhớ đệm bối cảnh tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 40,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "What is 'Tree of Thoughts' (ToT) prompting?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Asking the model about nature.",
        "text_vi": "Hỏi người mẫu về thiên nhiên."
      },
      {
        "key": "B",
        "text": "Providing zero context.",
        "text_vi": "Cung cấp bối cảnh bằng không."
      },
      {
        "key": "C",
        "text": "A technique that allows the LLM to explore multiple different reasoning paths simultaneously, evaluate them, and back-track if necessary, mimicking human problem-solving.",
        "text_vi": "Một kỹ thuật cho phép LLM khám phá đồng thời nhiều đường dẫn lý luận khác nhau, đánh giá chúng và theo dõi ngược lại nếu cần, bắt chước cách giải quyết vấn đề của con người."
      },
      {
        "key": "D",
        "text": "A prompt that generates a family tree.",
        "text_vi": "Lời nhắc tạo cây phả hệ."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Correct: A technique that allows the LLM to explore multiple different reasoning paths simultaneously, evaluate them, and back-track if necessary, mimicking human problem-solving. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "Lời nhắc 'Cây suy nghĩ' (ToT) là gì?",
    "explanation_vi": "Đúng: Một kỹ thuật cho phép LLM khám phá đồng thời nhiều đường dẫn lý luận khác nhau, đánh giá chúng và theo dõi ngược lại nếu cần, bắt chước cách giải quyết vấn đề của con người. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 41,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "What does 'Presence Penalty' control in an LLM API?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "It penalizes the model for repeating tokens that have already appeared in the output, encouraging it to talk about new topics and concepts.",
        "text_vi": "Nó phạt mô hình nếu lặp lại các mã thông báo đã xuất hiện trong đầu ra, khuyến khích mô hình nói về các chủ đề và khái niệm mới."
      },
      {
        "key": "B",
        "text": "It penalizes the user for not being present.",
        "text_vi": "Nó phạt người dùng vì không có mặt."
      },
      {
        "key": "C",
        "text": "It limits the API cost.",
        "text_vi": "Nó giới hạn chi phí API."
      },
      {
        "key": "D",
        "text": "It forces the model to use specific words.",
        "text_vi": "Nó buộc mô hình phải sử dụng các từ cụ thể."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Correct: It penalizes the model for repeating tokens that have already appeared in the output, encouraging it to talk about new topics and concepts. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "'Hình phạt hiện diện' kiểm soát điều gì trong API LLM?",
    "explanation_vi": "Đúng: Nó phạt mô hình nếu lặp lại các mã thông báo đã xuất hiện trong đầu ra, khuyến khích mô hình nói về các chủ đề và khái niệm mới. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 42,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "What does 'Frequency Penalty' do?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Changes the audio frequency of text-to-speech.",
        "text_vi": "Thay đổi tần số âm thanh của văn bản thành giọng nói."
      },
      {
        "key": "B",
        "text": "Penalizes the user for sending too many requests.",
        "text_vi": "Phạt người dùng vì gửi quá nhiều yêu cầu."
      },
      {
        "key": "C",
        "text": "Increases the speed of generation.",
        "text_vi": "Tăng tốc độ tạo ra."
      },
      {
        "key": "D",
        "text": "Penalizes tokens based on how many times they have *already* appeared in the text, reducing repetitive phrasing and redundancy.",
        "text_vi": "Phạt các mã thông báo dựa trên số lần chúng *đã* xuất hiện trong văn bản, giảm các cụm từ lặp đi lặp lại và sự dư thừa."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Correct: Penalizes tokens based on how many times they have *already* appeared in the text, reducing repetitive phrasing and redundancy. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "'Hình phạt thường xuyên' làm gì?",
    "explanation_vi": "Đúng: Phạt các mã thông báo dựa trên số lần chúng *đã* xuất hiện trong văn bản, giảm bớt sự lặp lại và dư thừa các cụm từ. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 43,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "What is the 'Map-Reduce' summarization strategy for handling very large documents?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Deleting half the document randomly.",
        "text_vi": "Xóa một nửa tài liệu một cách ngẫu nhiên."
      },
      {
        "key": "B",
        "text": "Mapping the document to a physical location.",
        "text_vi": "Ánh xạ tài liệu tới một vị trí thực tế."
      },
      {
        "key": "C",
        "text": "Breaking the document into chunks, summarizing each chunk individually (Map), and then summarizing the resulting summaries into a final output (Reduce).",
        "text_vi": "Chia tài liệu thành nhiều phần, tóm tắt từng phần riêng lẻ (Bản đồ), sau đó tóm tắt các phần tóm tắt kết quả thành đầu ra cuối cùng (Giảm)."
      },
      {
        "key": "D",
        "text": "Reducing the font size to fit more text.",
        "text_vi": "Giảm kích thước phông chữ để phù hợp với nhiều văn bản hơn."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Correct: Breaking the document into chunks, summarizing each chunk individually (Map), and then summarizing the resulting summaries into a final output (Reduce). Review why this choice fits the question and why alternatives do not.",
    "question_vi": "Chiến lược tóm tắt 'Giảm bản đồ' để xử lý các tài liệu rất lớn là gì?",
    "explanation_vi": "Đúng: Chia tài liệu thành nhiều phần, tóm tắt từng phần riêng lẻ (Bản đồ), sau đó tóm tắt các phần tóm tắt thu được thành kết quả cuối cùng (Giảm). Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 44,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "How does 'LLM-as-a-Judge' work in evaluating model outputs?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "It sends the output to a legal court.",
        "text_vi": "Nó sẽ gửi kết quả đầu ra đến một tòa án hợp pháp."
      },
      {
        "key": "B",
        "text": "Using a more capable LLM (like Gemini 1.5 Pro) to grade or score the outputs of another LLM based on predefined rubrics like relevance, helpfulness, and safety.",
        "text_vi": "Sử dụng LLM có khả năng cao hơn (như Gemini 1.5 Pro) để chấm điểm hoặc cho điểm kết quả đầu ra của một LLM khác dựa trên các tiêu chí đánh giá được xác định trước như mức độ liên quan, tính hữu ích và độ an toàn."
      },
      {
        "key": "C",
        "text": "It checks for spelling errors only.",
        "text_vi": "Nó chỉ kiểm tra lỗi chính tả."
      },
      {
        "key": "D",
        "text": "It uses a human judge to read outputs.",
        "text_vi": "Nó sử dụng một thẩm phán con người để đọc kết quả đầu ra."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Correct: Using a more capable LLM (like Gemini 1.5 Pro) to grade or score the outputs of another LLM based on predefined rubrics like relevance, helpfulness, and safety. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "'LLM-as-a-Judge' hoạt động như thế nào trong việc đánh giá kết quả đầu ra của mô hình?",
    "explanation_vi": "Đúng: Sử dụng LLM có khả năng cao hơn (như Gemini 1.5 Pro) để chấm điểm hoặc cho điểm kết quả đầu ra của một LLM khác dựa trên các tiêu chí đánh giá được xác định trước như mức độ liên quan, tính hữu ích và độ an toàn. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 45,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "What is 'Directional Stimulus Prompting'?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Pointing a camera at the user.",
        "text_vi": "Hướng camera vào người dùng."
      },
      {
        "key": "B",
        "text": "Forcing the model to output binary code.",
        "text_vi": "Buộc mô hình xuất mã nhị phân."
      },
      {
        "key": "C",
        "text": "Providing the LLM with specific hints, keywords, or a skeleton outline in the prompt to guide its generation toward a highly specific desired outcome.",
        "text_vi": "Cung cấp LLM với các gợi ý, từ khóa cụ thể hoặc phác thảo khung trong lời nhắc để hướng dẫn việc tạo ra nó hướng tới kết quả mong muốn rất cụ thể."
      },
      {
        "key": "D",
        "text": "Using electrical stimuli.",
        "text_vi": "Sử dụng kích thích điện."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Correct: Providing the LLM with specific hints, keywords, or a skeleton outline in the prompt to guide its generation toward a highly specific desired outcome. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "'Nhắc nhở kích thích có định hướng' là gì?",
    "explanation_vi": "Đúng: Cung cấp cho LLM các gợi ý, từ khóa cụ thể hoặc bản phác thảo khung trong lời nhắc để hướng dẫn việc tạo ra nó hướng tới một kết quả mong muốn rất cụ thể. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 46,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "Why is the 'BLEU' score generally considered insufficient for evaluating creative Generative AI outputs?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "It relies heavily on exact word (n-gram) matching against a reference, which fails to capture semantic meaning or valid, creative paraphrasing.",
        "text_vi": "Nó chủ yếu dựa vào việc so khớp từ (n-gram) chính xác với một tham chiếu, điều này không thể nắm bắt được ý nghĩa ngữ nghĩa hoặc cách diễn giải sáng tạo, hợp lệ."
      },
      {
        "key": "B",
        "text": "It requires manual human calculation.",
        "text_vi": "Nó đòi hỏi sự tính toán thủ công của con người."
      },
      {
        "key": "C",
        "text": "It only works on images.",
        "text_vi": "Nó chỉ hoạt động trên hình ảnh."
      },
      {
        "key": "D",
        "text": "It is too expensive.",
        "text_vi": "Nó quá đắt."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Correct: It relies heavily on exact word (n-gram) matching against a reference, which fails to capture semantic meaning or valid, creative paraphrasing. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "Tại sao điểm 'BLEU' thường được coi là không đủ để đánh giá kết quả đầu ra của Generative AI?",
    "explanation_vi": "Đúng: Nó chủ yếu dựa vào việc so khớp từ (n-gram) chính xác với một tham chiếu, điều này không thể nắm bắt được ý nghĩa ngữ nghĩa hoặc cách diễn giải sáng tạo, hợp lệ. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 47,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "What is 'Self-Refinement' in prompt engineering?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "The model deleting itself.",
        "text_vi": "Mô hình tự xóa chính nó."
      },
      {
        "key": "B",
        "text": "Prompting the model to generate an initial draft, then prompting it to critique its own draft, and finally prompting it to improve the draft based on the critique.",
        "text_vi": "Nhắc mô hình tạo bản dự thảo ban đầu, sau đó nhắc mô hình phê bình bản dự thảo của chính mình và cuối cùng nhắc mô hình cải thiện bản dự thảo dựa trên bài phê bình."
      },
      {
        "key": "C",
        "text": "Lowering the temperature.",
        "text_vi": "Hạ nhiệt độ."
      },
      {
        "key": "D",
        "text": "Using a smaller model.",
        "text_vi": "Sử dụng một mô hình nhỏ hơn."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Correct: Prompting the model to generate an initial draft, then prompting it to critique its own draft, and finally prompting it to improve the draft based on the critique. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "'Tự sàng lọc' trong kỹ thuật kịp thời là gì?",
    "explanation_vi": "Đúng: Nhắc mô hình tạo bản nháp ban đầu, sau đó nhắc mô hình phê bình bản nháp của chính nó và cuối cùng nhắc mô hình cải thiện bản nháp dựa trên bài phê bình. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 48,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "What is a 'Zero-Shot Chain of Thought' prompt?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "A prompt with zero tokens.",
        "text_vi": "Lời nhắc không có mã thông báo."
      },
      {
        "key": "B",
        "text": "A prompt that provides 10 examples.",
        "text_vi": "Lời nhắc cung cấp 10 ví dụ."
      },
      {
        "key": "C",
        "text": "A prompt that asks the model not to think.",
        "text_vi": "Lời nhắc yêu cầu người mẫu không suy nghĩ."
      },
      {
        "key": "D",
        "text": "Simply adding the phrase 'Let's think step by step' to the prompt without providing any specific examples of the reasoning process.",
        "text_vi": "Đơn giản chỉ cần thêm cụm từ 'Hãy suy nghĩ từng bước một' vào lời nhắc mà không cung cấp bất kỳ ví dụ cụ thể nào về quá trình suy luận."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Correct: Simply adding the phrase 'Let's think step by step' to the prompt without providing any specific examples of the reasoning process. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "Lời nhắc 'Chuỗi suy nghĩ không bắn' là gì?",
    "explanation_vi": "Đúng: Chỉ cần thêm cụm từ 'Hãy suy nghĩ từng bước một' vào lời nhắc mà không cung cấp bất kỳ ví dụ cụ thể nào về quá trình suy luận. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 49,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "How can you effectively limit the length of an LLM's response without brutally truncating it mid-sentence using the 'Max Tokens' parameter?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "There is no way to do this.",
        "text_vi": "Không có cách nào để làm điều này."
      },
      {
        "key": "B",
        "text": "Unplug the router.",
        "text_vi": "Rút phích cắm bộ định tuyến."
      },
      {
        "key": "C",
        "text": "Increase the Temperature.",
        "text_vi": "Tăng nhiệt độ."
      },
      {
        "key": "D",
        "text": "Specify the desired length explicitly in the system prompt (e.g., 'Respond in exactly three complete sentences.' or 'Keep the response under 50 words.').",
        "text_vi": "Chỉ định rõ ràng độ dài mong muốn trong lời nhắc của hệ thống (ví dụ: 'Trả lời chính xác ba câu hoàn chỉnh.' hoặc 'Giữ câu trả lời dưới 50 từ.')."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Correct: Specify the desired length explicitly in the system prompt (e.g., 'Respond in exactly three complete sentences.' or 'Keep the response under 50 words.'). Review why this choice fits the question and why alternatives do not.",
    "question_vi": "Làm cách nào bạn có thể giới hạn độ dài phản hồi của LLM một cách hiệu quả mà không cắt ngắn nó một cách thô bạo ở giữa câu bằng cách sử dụng tham số 'Mã thông báo tối đa'?",
    "explanation_vi": "Đúng: Chỉ định rõ ràng độ dài mong muốn trong lời nhắc của hệ thống (ví dụ: 'Trả lời chính xác ba câu hoàn chỉnh.' hoặc 'Giữ câu trả lời dưới 50 từ.'). Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 50,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "In the context of RAG, what is 'Re-ranking'?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Sorting the database alphabetically.",
        "text_vi": "Sắp xếp cơ sở dữ liệu theo thứ tự abc."
      },
      {
        "key": "B",
        "text": "Using a secondary model to re-score and re-order the initially retrieved documents to ensure the absolute most relevant ones are passed to the LLM.",
        "text_vi": "Sử dụng mô hình thứ cấp để chấm điểm lại và sắp xếp lại các tài liệu được truy xuất ban đầu để đảm bảo những tài liệu phù hợp nhất được chuyển đến LLM."
      },
      {
        "key": "C",
        "text": "Giving the user a new title.",
        "text_vi": "Cung cấp cho người dùng một tiêu đề mới."
      },
      {
        "key": "D",
        "text": "Upgrading the cloud server tier.",
        "text_vi": "Nâng cấp tầng máy chủ đám mây."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Correct: Using a secondary model to re-score and re-order the initially retrieved documents to ensure the absolute most relevant ones are passed to the LLM. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "Trong bối cảnh của RAG, 'Xếp hạng lại' là gì?",
    "explanation_vi": "Đúng: Sử dụng mô hình phụ để chấm điểm lại và sắp xếp lại các tài liệu được truy xuất ban đầu để đảm bảo những tài liệu phù hợp nhất được chuyển đến LLM. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 51,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "What is the primary purpose of 'Dynamic Few-Shot Prompting'?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Using a vector database to retrieve and insert only the most contextually relevant examples into the prompt based on the user's specific query, rather than static examples.",
        "text_vi": "Sử dụng cơ sở dữ liệu vectơ để truy xuất và chỉ chèn các ví dụ phù hợp nhất theo ngữ cảnh vào lời nhắc dựa trên truy vấn cụ thể của người dùng, thay vì các ví dụ tĩnh."
      },
      {
        "key": "B",
        "text": "Forcing the model to output a video.",
        "text_vi": "Buộc mô hình xuất video."
      },
      {
        "key": "C",
        "text": "Removing all examples from the prompt.",
        "text_vi": "Xóa tất cả các ví dụ khỏi lời nhắc."
      },
      {
        "key": "D",
        "text": "Making the prompt flash on screen.",
        "text_vi": "Làm cho lời nhắc nhấp nháy trên màn hình."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Correct: Using a vector database to retrieve and insert only the most contextually relevant examples into the prompt based on the user's specific query, rather than static examples. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "Mục đích chính của 'Nhắc nhở vài phát động' là gì?",
    "explanation_vi": "Đúng: Sử dụng cơ sở dữ liệu vectơ để truy xuất và chỉ chèn các ví dụ phù hợp nhất theo ngữ cảnh vào lời nhắc dựa trên truy vấn cụ thể của người dùng, thay vì các ví dụ tĩnh. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 52,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "When calculating the Total Cost of Ownership (TCO) for a self-hosted open-source Gen AI model, which cost is often underestimated compared to using a managed API?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "The cost of internet bandwidth.",
        "text_vi": "Chi phí băng thông internet."
      },
      {
        "key": "B",
        "text": "The cost of the prompt text.",
        "text_vi": "Chi phí của văn bản nhắc nhở."
      },
      {
        "key": "C",
        "text": "The ongoing costs of MLOps, infrastructure maintenance, scaling, and the specialized engineering talent required to keep it running safely.",
        "text_vi": "Chi phí liên tục của MLOps, bảo trì cơ sở hạ tầng, mở rộng quy mô và nhân lực kỹ thuật chuyên môn cần thiết để duy trì hoạt động an toàn."
      },
      {
        "key": "D",
        "text": "The cost of the open-source license.",
        "text_vi": "Chi phí của giấy phép nguồn mở."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Correct: The ongoing costs of MLOps, infrastructure maintenance, scaling, and the specialized engineering talent required to keep it running safely. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "Khi tính Tổng chi phí sở hữu (TCO) cho mô hình Gen AI nguồn mở tự lưu trữ, chi phí nào thường bị đánh giá thấp hơn so với việc sử dụng API được quản lý?",
    "explanation_vi": "Đúng: Chi phí liên tục của MLOps, bảo trì cơ sở hạ tầng, mở rộng quy mô và nhân lực kỹ thuật chuyên môn cần có để duy trì hoạt động an toàn. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 53,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "What is an 'AI Ethics Board'?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "A dashboard in Google Cloud.",
        "text_vi": "Trang tổng quan trong Google Cloud."
      },
      {
        "key": "B",
        "text": "A cross-functional corporate committee responsible for reviewing AI projects to ensure they align with human rights, fairness, safety, and corporate values.",
        "text_vi": "Một ủy ban công ty đa chức năng chịu trách nhiệm xem xét các dự án AI để đảm bảo chúng phù hợp với nhân quyền, sự công bằng, an toàn và các giá trị của công ty."
      },
      {
        "key": "C",
        "text": "A circuit board inside a GPU.",
        "text_vi": "Một bảng mạch bên trong GPU."
      },
      {
        "key": "D",
        "text": "A group of robots.",
        "text_vi": "Một nhóm robot."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Correct: A cross-functional corporate committee responsible for reviewing AI projects to ensure they align with human rights, fairness, safety, and corporate values. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "'Hội đồng đạo đức AI' là gì?",
    "explanation_vi": "Đúng: Một ủy ban công ty đa chức năng chịu trách nhiệm xem xét các dự án AI để đảm bảo chúng phù hợp với nhân quyền, sự công bằng, an toàn và các giá trị của công ty. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 54,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "How does Generative AI primarily impact the 'Time to Market' (TTM) for software development?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "It significantly accelerates TTM by assisting developers with rapid code generation, automated testing, and debugging (e.g., Gemini Code Assist).",
        "text_vi": "Nó tăng tốc đáng kể TTM bằng cách hỗ trợ các nhà phát triển tạo mã nhanh, kiểm tra tự động và gỡ lỗi (ví dụ: Hỗ trợ mã Gemini)."
      },
      {
        "key": "B",
        "text": "It replaces the need for a market.",
        "text_vi": "Nó thay thế nhu cầu về một thị trường."
      },
      {
        "key": "C",
        "text": "It has no impact on software development.",
        "text_vi": "Nó không có tác động gì đến việc phát triển phần mềm."
      },
      {
        "key": "D",
        "text": "It slows it down due to compliance checks.",
        "text_vi": "Nó làm chậm nó do kiểm tra tuân thủ."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Correct: It significantly accelerates TTM by assisting developers with rapid code generation, automated testing, and debugging (e.g., Gemini Code Assist). Review why this choice fits the question and why alternatives do not.",
    "question_vi": "AI sáng tạo chủ yếu tác động đến 'Thời gian tiếp thị' (TTM) để phát triển phần mềm như thế nào?",
    "explanation_vi": "Đúng: Nó tăng tốc đáng kể TTM bằng cách hỗ trợ các nhà phát triển tạo mã nhanh, kiểm tra tự động và gỡ lỗi (ví dụ: Hỗ trợ mã Gemini). Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 55,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "What is a key step in 'Change Management' when rolling out an AI assistant to a sales team?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Changing the company name.",
        "text_vi": "Thay đổi tên công ty."
      },
      {
        "key": "B",
        "text": "Firing employees who don't use it on day one.",
        "text_vi": "Sa thải những nhân viên không sử dụng nó ngay ngày đầu tiên."
      },
      {
        "key": "C",
        "text": "Identifying 'champions' or early adopters within the team to showcase early success, share best practices, and drive peer adoption.",
        "text_vi": "Xác định 'nhà vô địch' hoặc những người áp dụng sớm trong nhóm để thể hiện thành công ban đầu, chia sẻ các phương pháp hay nhất và thúc đẩy việc áp dụng ngang hàng."
      },
      {
        "key": "D",
        "text": "Banning all other software tools.",
        "text_vi": "Cấm tất cả các công cụ phần mềm khác."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Correct: Identifying 'champions' or early adopters within the team to showcase early success, share best practices, and drive peer adoption. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "Bước quan trọng trong 'Quản lý thay đổi' khi triển khai trợ lý AI cho nhóm bán hàng là gì?",
    "explanation_vi": "Đúng: Xác định 'nhà vô địch' hoặc những người áp dụng sớm trong nhóm để thể hiện thành công ban đầu, chia sẻ các phương pháp hay nhất và thúc đẩy việc áp dụng ngang hàng. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 56,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "Which regulatory concept mandates that automated AI decisions significantly affecting users (like loan approvals) must be explainable?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "The Right to Compute.",
        "text_vi": "Quyền tính toán."
      },
      {
        "key": "B",
        "text": "The Right to Free Speech.",
        "text_vi": "Quyền tự do ngôn luận."
      },
      {
        "key": "C",
        "text": "The Right to be Forgotten.",
        "text_vi": "Quyền được lãng quên."
      },
      {
        "key": "D",
        "text": "The 'Right to Explanation' (found in frameworks like GDPR and the EU AI Act).",
        "text_vi": "'Quyền giải thích' (có trong các khuôn khổ như GDPR và Đạo luật AI của EU)."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Correct: The 'Right to Explanation' (found in frameworks like GDPR and the EU AI Act). Review why this choice fits the question and why alternatives do not.",
    "question_vi": "Khái niệm quy định nào yêu cầu các quyết định AI tự động ảnh hưởng đáng kể đến người dùng (chẳng hạn như phê duyệt khoản vay) phải có thể giải thích được?",
    "explanation_vi": "Đúng: 'Quyền giải thích' (có trong các khuôn khổ như GDPR và Đạo luật AI của EU). Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 57,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "When classifying enterprise data for Generative AI grounding, what is 'Public Data'?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Internal employee salary data.",
        "text_vi": "Dữ liệu lương nhân viên nội bộ."
      },
      {
        "key": "B",
        "text": "Secret intellectual property.",
        "text_vi": "Sở hữu trí tuệ bí mật."
      },
      {
        "key": "C",
        "text": "Data containing customer credit card numbers.",
        "text_vi": "Dữ liệu chứa số thẻ tín dụng của khách hàng."
      },
      {
        "key": "D",
        "text": "Information that is freely accessible (like press releases or public website info) and poses no risk to the organization if ingested by an AI model.",
        "text_vi": "Thông tin có thể truy cập miễn phí (như thông cáo báo chí hoặc thông tin trang web công cộng) và không gây rủi ro cho tổ chức nếu được mô hình AI sử dụng."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Correct: Information that is freely accessible (like press releases or public website info) and poses no risk to the organization if ingested by an AI model. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "Khi phân loại dữ liệu doanh nghiệp cho nền tảng Generative AI, 'Dữ liệu công cộng' là gì?",
    "explanation_vi": "Đúng: Thông tin có thể truy cập miễn phí (như thông cáo báo chí hoặc thông tin trang web công cộng) và không gây rủi ro cho tổ chức nếu được mô hình AI tiếp thu. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 58,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "What is 'Red Teaming' in the context of AI security?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Painting the servers red.",
        "text_vi": "Sơn các máy chủ màu đỏ."
      },
      {
        "key": "B",
        "text": "Proactively testing the AI model by acting as an adversary to uncover vulnerabilities, biases, prompt injection flaws, and safety risks before deployment.",
        "text_vi": "Chủ động thử nghiệm mô hình AI bằng cách đóng vai trò là đối thủ để phát hiện các lỗ hổng, thành kiến, lỗi chèn kịp thời và rủi ro an toàn trước khi triển khai."
      },
      {
        "key": "C",
        "text": "Grouping AI agents into teams.",
        "text_vi": "Nhóm các tác nhân AI thành các nhóm."
      },
      {
        "key": "D",
        "text": "A marketing strategy.",
        "text_vi": "Một chiến lược tiếp thị."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Correct: Proactively testing the AI model by acting as an adversary to uncover vulnerabilities, biases, prompt injection flaws, and safety risks before deployment. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "'Red Teaming' là gì trong bối cảnh bảo mật AI?",
    "explanation_vi": "Đúng: Chủ động thử nghiệm mô hình AI bằng cách đóng vai trò là đối thủ để phát hiện các lỗ hổng, thành kiến, lỗi chèn kịp thời và rủi ro an toàn trước khi triển khai. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 59,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "Why should an enterprise establish an 'Acceptable Use Policy' (AUP) specifically for Generative AI?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "To increase the cloud bill.",
        "text_vi": "Để tăng hóa đơn đám mây."
      },
      {
        "key": "B",
        "text": "To ban AI completely.",
        "text_vi": "Cấm hoàn toàn AI."
      },
      {
        "key": "C",
        "text": "To clearly define to employees what tools are approved, what types of data can be shared, and what use cases are strictly prohibited to prevent data leaks.",
        "text_vi": "Để xác định rõ ràng cho nhân viên những công cụ nào được phê duyệt, loại dữ liệu nào có thể được chia sẻ và trường hợp sử dụng nào bị nghiêm cấm để ngăn chặn rò rỉ dữ liệu."
      },
      {
        "key": "D",
        "text": "To force employees to use it 24/7.",
        "text_vi": "Để buộc nhân viên phải sử dụng nó 24/7."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Correct: To clearly define to employees what tools are approved, what types of data can be shared, and what use cases are strictly prohibited to prevent data leaks. Review why this choice fits the question and why alternatives do not.",
    "question_vi": "Tại sao doanh nghiệp nên thiết lập 'Chính sách sử dụng được chấp nhận' (AUP) dành riêng cho Generative AI?",
    "explanation_vi": "Đúng: Để xác định rõ ràng cho nhân viên những công cụ nào được phê duyệt, loại dữ liệu nào có thể được chia sẻ và trường hợp sử dụng nào bị nghiêm cấm để ngăn chặn rò rỉ dữ liệu. Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  },
  {
    "id": 60,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "In a 'Hub and Spoke' organizational model for AI adoption, what is the role of the 'Hub' (Center of Excellence)?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "To provide centralized governance, standardized platforms, security guardrails, and specialized ML expertise to support the various business units (the spokes).",
        "text_vi": "Để cung cấp khả năng quản trị tập trung, nền tảng được tiêu chuẩn hóa, rào chắn bảo mật và kiến thức chuyên môn về ML chuyên biệt để hỗ trợ các đơn vị kinh doanh khác nhau (nan hoa)."
      },
      {
        "key": "B",
        "text": "To act as a bottleneck and stop all projects.",
        "text_vi": "Để hoạt động như một nút cổ chai và dừng tất cả các dự án."
      },
      {
        "key": "C",
        "text": "To manage physical office spaces.",
        "text_vi": "Để quản lý không gian văn phòng vật lý."
      },
      {
        "key": "D",
        "text": "To write marketing emails.",
        "text_vi": "Để viết email tiếp thị."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Correct: To provide centralized governance, standardized platforms, security guardrails, and specialized ML expertise to support the various business units (the spokes). Review why this choice fits the question and why alternatives do not.",
    "question_vi": "Trong mô hình tổ chức 'Hub and Spoke' để áp dụng AI, vai trò của 'Hub' (Trung tâm Xuất sắc) là gì?",
    "explanation_vi": "Đúng: Để cung cấp khả năng quản trị tập trung, nền tảng được tiêu chuẩn hóa, rào chắn bảo mật và kiến thức chuyên môn về ML chuyên biệt để hỗ trợ các đơn vị kinh doanh khác nhau (nan hoa). Xem lại tại sao lựa chọn này phù hợp với câu hỏi và tại sao các lựa chọn thay thế lại không."
  }
];
