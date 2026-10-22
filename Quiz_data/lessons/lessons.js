window.GENAI_LESSONS = [
  {
    "domain": 1,
    "title": "Fundamentals of gen AI",
    "title_vi": "Nền tảng về gen AI",
    "weight": 30,
    "overview": "This domain (about 30% of the exam) builds the vocabulary and mental models the rest of the exam relies on. Start with the big picture: AI contains ML, ML contains deep learning, and gen AI is an ML application that creates new content using foundation models such as LLMs, multimodal models and diffusion models. Then learn how machines learn (supervised, unsupervised, reinforcement) and how models move through the ML lifecycle with Google Cloud tools. Next comes practical decision-making: how to choose a foundation model for a business use case, and why data type, quality and accessibility determine results. Finally, zoom out to the five layers of the gen AI landscape (infrastructure, models, platforms, agents, applications) and zoom in on Google's models: Gemini, Gemma, Imagen and Veo. Exam questions here reward precise definitions and quick matching of a scenario to the right concept, tool or model.",
    "overview_vi": "Domain này (khoảng 30% bài thi) xây dựng từ vựng và mô hình tư duy mà phần còn lại của bài thi dựa vào. Bắt đầu từ bức tranh lớn: AI chứa ML, ML chứa deep learning, và gen AI là ứng dụng ML tạo nội dung mới bằng foundation model như LLM, mô hình đa phương thức và diffusion. Sau đó học cách máy học (supervised, unsupervised, reinforcement) và cách mô hình đi qua vòng đời ML với công cụ Google Cloud. Tiếp theo là ra quyết định thực tế: chọn foundation model cho use case kinh doanh, và vì sao loại dữ liệu, chất lượng và khả năng tiếp cận quyết định kết quả. Cuối cùng, nhìn rộng ra năm tầng của hệ sinh thái gen AI (infrastructure, models, platforms, agents, applications) và nhìn sâu vào các mô hình của Google: Gemini, Gemma, Imagen và Veo. Câu hỏi ở đây thưởng cho định nghĩa chính xác và khả năng ghép nhanh kịch bản với đúng khái niệm, công cụ hoặc mô hình.",
    "topics": [
      {
        "id": "d1-t1",
        "objective": "1.1 Describe core generative AI (gen AI) concepts and use cases: defining core gen AI concepts (AI, NLP, ML, generative AI, foundation models, multimodal foundation models, diffusion models, prompt tuning, prompt engineering, large language models).",
        "title": "Core gen AI concepts and terminology",
        "title_vi": "Khái niệm và thuật ngữ cốt lõi của gen AI",
        "sources": [
          "exam-guide-official-checklist.md",
          "module1-v2.md",
          "module2-v2.md",
          "bonus-reference-guide.md",
          "official/study.txt"
        ],
        "sections": [
          {
            "heading": "From AI to generative AI: nested concepts",
            "heading_vi": "Từ AI đến generative AI: các khái niệm lồng nhau",
            "body": "Artificial intelligence (AI) is the broad field of building machines that perform tasks that normally need human intelligence, such as learning, problem-solving and decision-making. Machine learning (ML) is a subfield of AI in which machines learn from data to perform specific tasks instead of following hand-written rules. Deep learning is a subset of ML that uses artificial neural networks with many layers to extract complex patterns from data. Natural language processing (NLP) is the AI area concerned with understanding and generating human language. Generative AI is an application of ML that focuses on creating new content.\n\nA simple way to remember the hierarchy: AI is the broadest circle, ML sits inside AI, deep learning sits inside ML, and gen AI is a use of these techniques that produces new text, images, code, audio or video rather than only classifying or predicting.",
            "body_vi": "Trí tuệ nhân tạo (AI) là lĩnh vực rộng về xây dựng máy móc thực hiện các tác vụ thường đòi hỏi trí tuệ con người như học, giải quyết vấn đề và ra quyết định. Machine learning (ML) là một nhánh của AI trong đó máy học từ dữ liệu để thực hiện các tác vụ cụ thể thay vì làm theo quy tắc viết tay. Deep learning là tập con của ML dùng mạng neural nhân tạo nhiều lớp để trích xuất các mẫu phức tạp từ dữ liệu. Natural language processing (NLP) là mảng AI liên quan đến hiểu và tạo ngôn ngữ con người. Generative AI là một ứng dụng của ML tập trung vào tạo ra nội dung mới.\n\nCách nhớ thứ bậc: AI là vòng tròn rộng nhất, ML nằm trong AI, deep learning nằm trong ML, còn gen AI là một cách dùng các kỹ thuật này để tạo ra văn bản, hình ảnh, code, âm thanh hoặc video mới thay vì chỉ phân loại hay dự đoán.",
            "bullets": [
              {
                "en": "AI > ML > deep learning; gen AI is an application of ML that creates new content.",
                "vi": "AI > ML > deep learning; gen AI là một ứng dụng của ML để tạo nội dung mới."
              },
              {
                "en": "NLP: AI that works with human language (understanding and generating it).",
                "vi": "NLP: AI làm việc với ngôn ngữ con người (hiểu và tạo ra nó)."
              }
            ]
          },
          {
            "heading": "Foundation models, LLMs, multimodal and diffusion models",
            "heading_vi": "Foundation model, LLM, mô hình đa phương thức và diffusion",
            "body": "Foundation models are large AI models trained on massive amounts of (mostly unlabeled) diverse data, which gives them a broad understanding of the world. They are flexible across many use cases and can be adapted to specialized domains through additional, targeted training. They are the basis of gen AI. A large language model (LLM) is a type of foundation model designed to understand and generate human language. A multimodal foundation model can process and generate several data types, such as text, images, audio, video and code, in the same application. Diffusion models are generative models best known for image (and video) generation: they learn to create content by progressively refining noise into a coherent output guided by the prompt. Imagen is Google's text-to-image diffusion model.\n\nThe key exam contrast: a traditional ML model is trained for one specific task, while a foundation model is trained once on broad data and then reused for many tasks.",
            "body_vi": "Foundation model là các mô hình AI lớn được huấn luyện trên lượng dữ liệu khổng lồ, đa dạng (phần lớn là dữ liệu chưa gán nhãn), nhờ đó hiểu biết rộng về thế giới. Chúng linh hoạt cho nhiều use case và có thể được điều chỉnh cho các lĩnh vực chuyên biệt bằng huấn luyện bổ sung có mục tiêu. Chúng là nền tảng của gen AI. Large language model (LLM) là một loại foundation model được thiết kế để hiểu và tạo ngôn ngữ con người. Multimodal foundation model có thể xử lý và tạo nhiều loại dữ liệu như văn bản, hình ảnh, âm thanh, video và code trong cùng một ứng dụng. Diffusion model là các mô hình sinh nổi tiếng với việc tạo ảnh (và video): chúng học tạo nội dung bằng cách tinh chỉnh dần nhiễu thành đầu ra mạch lạc theo hướng dẫn của prompt. Imagen là diffusion model text-to-image của Google.\n\nĐiểm đối chiếu hay thi: mô hình ML truyền thống được huấn luyện cho một tác vụ cụ thể, còn foundation model được huấn luyện một lần trên dữ liệu rộng rồi tái sử dụng cho nhiều tác vụ."
          },
          {
            "heading": "Prompting, prompt engineering and prompt tuning",
            "heading_vi": "Prompting, prompt engineering và prompt tuning",
            "body": "Prompting is the method of interacting with and guiding a foundation model by giving it instructions or input to generate the desired output. Prompt engineering is the art and science of crafting effective prompts to maximize the value of the model and tailor responses to specific needs; it does NOT change the model. Prompt tuning, in contrast, adapts model behavior by learning a small set of soft prompt (embedding) parameters while the base model weights stay frozen, so it is lighter than full fine-tuning. Fine-tuning updates the model itself with additional task-specific training data.\n\nOrder from lightest to heaviest customization: prompt engineering (words only) -> prompt tuning (small learned parameters) -> fine-tuning (model is further trained).",
            "body_vi": "Prompting là phương pháp tương tác và hướng dẫn foundation model bằng cách đưa chỉ dẫn hoặc đầu vào để tạo đầu ra mong muốn. Prompt engineering là nghệ thuật và khoa học tạo ra các prompt hiệu quả để tối đa hóa giá trị của mô hình và điều chỉnh phản hồi theo nhu cầu cụ thể; nó KHÔNG thay đổi mô hình. Prompt tuning thì điều chỉnh hành vi mô hình bằng cách học một tập nhỏ tham số soft prompt (embedding) trong khi trọng số mô hình gốc được giữ nguyên, nên nhẹ hơn fine-tuning đầy đủ. Fine-tuning cập nhật chính mô hình bằng dữ liệu huấn luyện bổ sung theo tác vụ.\n\nThứ tự tùy biến từ nhẹ đến nặng: prompt engineering (chỉ chữ) -> prompt tuning (tham số nhỏ được học) -> fine-tuning (mô hình được huấn luyện thêm)."
          },
          {
            "heading": "What gen AI can do: create, summarize, discover, automate",
            "heading_vi": "Gen AI làm được gì: tạo, tóm tắt, khám phá, tự động hóa",
            "body": "The official guide groups gen AI value into four verbs. Create: generate new content such as text, images, code or video. Summarize: condense long information into concise summaries. Discover: find the right information at the right time (for example enterprise search over internal documents). Automate: take over tasks that were previously manual, such as drafting replies or processing documents.\n\nBusiness implication: gen AI is especially strong with unstructured data (text, images, audio, video), so many enterprise use cases that were previously hard to automate become feasible.",
            "body_vi": "Exam guide chính thức gom giá trị của gen AI thành bốn động từ. Create (tạo): sinh nội dung mới như văn bản, hình ảnh, code hay video. Summarize (tóm tắt): cô đọng thông tin dài thành bản tóm tắt ngắn gọn. Discover (khám phá): tìm đúng thông tin vào đúng thời điểm (ví dụ tìm kiếm doanh nghiệp trên tài liệu nội bộ). Automate (tự động hóa): đảm nhận các tác vụ trước đây làm thủ công, như soạn thư trả lời hay xử lý tài liệu.\n\nÝ nghĩa kinh doanh: gen AI đặc biệt mạnh với dữ liệu phi cấu trúc (văn bản, hình ảnh, âm thanh, video), nên nhiều use case doanh nghiệp trước đây khó tự động hóa nay trở nên khả thi."
          }
        ],
        "table": {
          "caption": "Customization techniques compared",
          "caption_vi": "So sánh các kỹ thuật tùy biến",
          "headers": [
            "Technique",
            "Changes the model?",
            "Effort",
            "Typical use"
          ],
          "headers_vi": [
            "Kỹ thuật",
            "Thay đổi mô hình?",
            "Công sức",
            "Dùng khi"
          ],
          "rows": [
            [
              "Prompt engineering",
              "No",
              "Lowest",
              "Better instructions, examples, format"
            ],
            [
              "Prompt tuning",
              "Learns small soft-prompt parameters; base weights frozen",
              "Low-medium",
              "Adapt behavior cheaply for a task"
            ],
            [
              "Fine-tuning",
              "Yes, further training on task/domain data",
              "Highest",
              "Specialized task or domain performance"
            ]
          ]
        },
        "keyPoints": [
          {
            "en": "AI is the broad field; ML is a subfield; deep learning uses multi-layer neural networks; gen AI is an ML application that creates new content.",
            "vi": "AI là lĩnh vực rộng; ML là nhánh con; deep learning dùng mạng neural nhiều lớp; gen AI là ứng dụng ML tạo nội dung mới."
          },
          {
            "en": "Foundation models are trained on massive, diverse (mostly unlabeled) data and adapted to many tasks; LLMs are foundation models for language.",
            "vi": "Foundation model được huấn luyện trên dữ liệu khổng lồ, đa dạng (phần lớn chưa gán nhãn) và thích ứng cho nhiều tác vụ; LLM là foundation model cho ngôn ngữ."
          },
          {
            "en": "Multimodal models handle several data types (text, image, audio, video, code); diffusion models are known for image/video generation.",
            "vi": "Mô hình đa phương thức xử lý nhiều loại dữ liệu (văn bản, ảnh, âm thanh, video, code); diffusion model nổi tiếng với tạo ảnh/video."
          },
          {
            "en": "Prompt engineering changes only the input; prompt tuning learns small soft-prompt parameters; fine-tuning further trains the model.",
            "vi": "Prompt engineering chỉ đổi đầu vào; prompt tuning học tham số soft-prompt nhỏ; fine-tuning huấn luyện thêm chính mô hình."
          },
          {
            "en": "Gen AI value = create, summarize, discover, automate.",
            "vi": "Giá trị gen AI = create, summarize, discover, automate."
          }
        ],
        "examTips": [
          {
            "en": "Prompt engineering vs prompt tuning is a classic trap: if the model's behavior is changed by learned parameters it is not prompt engineering.",
            "vi": "Prompt engineering và prompt tuning là bẫy kinh điển: nếu hành vi mô hình đổi nhờ tham số được học thì đó không phải prompt engineering."
          },
          {
            "en": "'Trained on massive unlabeled data and reusable across many tasks' points to a foundation model, not a task-specific ML model.",
            "vi": "'Huấn luyện trên dữ liệu khổng lồ chưa gán nhãn, tái dùng cho nhiều tác vụ' trỏ tới foundation model, không phải mô hình ML riêng cho một tác vụ."
          },
          {
            "en": "Do not confuse the hierarchy: gen AI is not a synonym for AI; it is one application of ML.",
            "vi": "Đừng nhầm thứ bậc: gen AI không đồng nghĩa AI; nó chỉ là một ứng dụng của ML."
          }
        ],
        "terms": [
          {
            "term": "Foundation model",
            "en": "Large model trained on massive diverse data and adaptable to many tasks.",
            "vi": "Mô hình lớn huấn luyện trên dữ liệu khổng lồ, đa dạng và thích ứng được nhiều tác vụ."
          },
          {
            "term": "LLM",
            "en": "A foundation model designed to understand and generate human language.",
            "vi": "Foundation model được thiết kế để hiểu và tạo ngôn ngữ con người."
          },
          {
            "term": "Multimodal model",
            "en": "A model that processes and/or generates multiple data types.",
            "vi": "Mô hình xử lý và/hoặc tạo nhiều loại dữ liệu."
          },
          {
            "term": "Diffusion model",
            "en": "Generative model that refines noise into content, widely used for images and video.",
            "vi": "Mô hình sinh tinh chỉnh nhiễu thành nội dung, dùng nhiều cho ảnh và video."
          },
          {
            "term": "Prompt engineering",
            "en": "Crafting effective prompts without changing the model.",
            "vi": "Soạn prompt hiệu quả mà không đổi mô hình."
          },
          {
            "term": "Prompt tuning",
            "en": "Learning small soft-prompt parameters with frozen model weights.",
            "vi": "Học tham số soft-prompt nhỏ với trọng số mô hình đóng băng."
          },
          {
            "term": "Deep learning",
            "en": "ML using multi-layer neural networks.",
            "vi": "ML dùng mạng neural nhiều lớp."
          },
          {
            "term": "NLP",
            "en": "AI that understands and generates human language.",
            "vi": "AI hiểu và tạo ngôn ngữ con người."
          }
        ],
        "keywords": [
          "artificial intelligence",
          "machine learning",
          "deep learning",
          "natural language processing",
          "generative ai",
          "foundation model",
          "multimodal",
          "diffusion model",
          "large language model",
          "llm",
          "prompt engineering",
          "prompt tuning",
          "prompt",
          "summarize",
          "create new content"
        ]
      },
      {
        "id": "d1-t2",
        "objective": "1.1 Describe the machine learning approaches (supervised, unsupervised, reinforcement) and identify the stages of the machine learning lifecycle (data ingestion, data preparation, model training, model deployment, model management) and the Google Cloud tools for each stage.",
        "title": "Machine learning approaches and the ML lifecycle",
        "title_vi": "Các phương pháp machine learning và vòng đời ML",
        "sources": [
          "exam-guide-official-checklist.md",
          "module2-v2.md",
          "official/study.txt"
        ],
        "sections": [
          {
            "heading": "Three ways machines learn",
            "heading_vi": "Ba cách máy học",
            "body": "Supervised learning trains a model on labeled data so that it can predict outputs for new inputs (for example classifying emails as spam or not spam, or predicting a price). Unsupervised learning uses unlabeled data to find natural groupings and patterns on its own (for example customer segmentation). Reinforcement learning learns through interaction with an environment and feedback: the agent takes actions to maximize rewards and minimize penalties (for example game playing or robotics).\n\nThe deciding question is the data: labeled data and a known target -> supervised; unlabeled data and no target -> unsupervised; sequential decisions with reward feedback -> reinforcement.",
            "body_vi": "Supervised learning huấn luyện mô hình trên dữ liệu có nhãn để dự đoán đầu ra cho đầu vào mới (ví dụ phân loại email spam hay không, dự đoán giá). Unsupervised learning dùng dữ liệu chưa gán nhãn để tự tìm các nhóm và mẫu tự nhiên (ví dụ phân khúc khách hàng). Reinforcement learning học qua tương tác với môi trường và phản hồi: tác tử thực hiện hành động để tối đa hóa phần thưởng và giảm thiểu hình phạt (ví dụ chơi game, robot).\n\nCâu hỏi quyết định là dữ liệu: có nhãn và có mục tiêu rõ -> supervised; không nhãn, không mục tiêu -> unsupervised; chuỗi quyết định có phản hồi phần thưởng -> reinforcement."
          },
          {
            "heading": "The five stages of the ML lifecycle",
            "heading_vi": "Năm giai đoạn của vòng đời ML",
            "body": "The official guide describes: (1) Data ingestion and preparation, the process of collecting, cleaning and transforming raw data into a usable format for analysis or training (the course deck separates this into ingestion and preparation); (2) Model training, creating the ML model using data; (3) Model deployment, making the trained model available for use; (4) Model management, managing and maintaining models over time.\n\nSecurity and responsible AI apply across the whole lifecycle, not only at deployment.",
            "body_vi": "Exam guide mô tả: (1) Data ingestion and preparation (thu thập và chuẩn bị dữ liệu), quá trình thu thập, làm sạch và biến đổi dữ liệu thô thành định dạng dùng được cho phân tích hoặc huấn luyện (deck khóa học tách thành ingestion và preparation); (2) Model training, tạo mô hình ML bằng dữ liệu; (3) Model deployment, làm cho mô hình đã huấn luyện sẵn sàng sử dụng; (4) Model management, quản lý và duy trì mô hình theo thời gian.\n\nBảo mật và responsible AI áp dụng xuyên suốt vòng đời, không chỉ khi triển khai."
          },
          {
            "heading": "Google Cloud tools per stage",
            "heading_vi": "Công cụ Google Cloud theo từng giai đoạn",
            "body": "Ingestion: Pub/Sub for real-time streaming data, Cloud Storage for images, audio and other unstructured data, Cloud SQL and Spanner for relational structured data. Preparation: BigQuery for advanced analytics and fixing inconsistencies, Dataplex Universal Catalog (shown in the deck as universal catalog) and Data Catalog for governance and discovery of internal datasets. Training: Agent Platform (formerly Vertex AI) as the managed training environment, with pre-built containers and accelerators (TPU/GPU). Deployment: Agent Platform endpoints with autoscaling and low-latency real-time and batch prediction. Management: Model Registry (versioning), Model Monitoring (drift), Feature Store (feature/data management), Model Garden (store and organize models), Pipelines (automate ML tasks).\n\nBusiness implication: managed services let teams without deep ML infrastructure skills train, deploy and govern models, and drift monitoring protects accuracy after launch.",
            "body_vi": "Ingestion: Pub/Sub cho dữ liệu streaming thời gian thực, Cloud Storage cho ảnh, âm thanh và dữ liệu phi cấu trúc khác, Cloud SQL và Spanner cho dữ liệu quan hệ có cấu trúc. Preparation: BigQuery cho phân tích nâng cao và sửa dữ liệu không nhất quán, Dataplex Universal Catalog (deck ghi là universal catalog) và Data Catalog để quản trị và khám phá dataset nội bộ. Training: Agent Platform (trước đây là Vertex AI) là môi trường huấn luyện được quản lý, có pre-built container và bộ tăng tốc (TPU/GPU). Deployment: endpoint của Agent Platform với autoscaling và dự đoán độ trễ thấp theo thời gian thực và batch. Management: Model Registry (versioning), Model Monitoring (drift), Feature Store (quản lý feature/dữ liệu), Model Garden (lưu trữ, tổ chức model), Pipelines (tự động hóa tác vụ ML).\n\nÝ nghĩa kinh doanh: dịch vụ được quản lý giúp đội ngũ không có kỹ năng hạ tầng ML sâu vẫn huấn luyện, triển khai và quản trị được mô hình; theo dõi drift bảo vệ độ chính xác sau khi ra mắt."
          }
        ],
        "table": {
          "caption": "ML lifecycle stages and Google Cloud tools",
          "caption_vi": "Các giai đoạn vòng đời ML và công cụ Google Cloud",
          "headers": [
            "Stage",
            "What happens",
            "Google Cloud tools"
          ],
          "headers_vi": [
            "Giai đoạn",
            "Diễn ra gì",
            "Công cụ Google Cloud"
          ],
          "rows": [
            [
              "Data ingestion",
              "Collect raw data from sources",
              "Pub/Sub, Cloud Storage, Cloud SQL, Spanner"
            ],
            [
              "Data preparation",
              "Clean, transform, label, govern",
              "BigQuery, Dataplex Universal Catalog, Data Catalog"
            ],
            [
              "Model training",
              "Build/train the model",
              "Agent Platform (formerly Vertex AI), pre-built containers, TPU/GPU"
            ],
            [
              "Model deployment",
              "Make the model available for predictions",
              "Agent Platform endpoints, autoscaling, real-time and batch prediction"
            ],
            [
              "Model management",
              "Version, monitor, automate",
              "Model Registry, Model Monitoring, Feature Store, Model Garden, Pipelines"
            ]
          ]
        },
        "keyPoints": [
          {
            "en": "Supervised = labeled data; unsupervised = unlabeled data, finds patterns; reinforcement = learns from rewards and penalties.",
            "vi": "Supervised = dữ liệu có nhãn; unsupervised = không nhãn, tìm mẫu; reinforcement = học từ thưởng và phạt."
          },
          {
            "en": "Lifecycle: data ingestion and preparation -> training -> deployment -> management.",
            "vi": "Vòng đời: ingestion và preparation -> training -> deployment -> management."
          },
          {
            "en": "Agent Platform (formerly Vertex AI) is the managed ML platform for training and deployment.",
            "vi": "Agent Platform (trước đây Vertex AI) là nền tảng ML được quản lý cho huấn luyện và triển khai."
          },
          {
            "en": "Model Registry = versioning; Model Monitoring = drift; Feature Store = features; Model Garden = model catalog; Pipelines = automation.",
            "vi": "Model Registry = versioning; Model Monitoring = drift; Feature Store = feature; Model Garden = danh mục model; Pipelines = tự động hóa."
          },
          {
            "en": "Drift means model accuracy changes over time as real-world data changes.",
            "vi": "Drift nghĩa là độ chính xác mô hình thay đổi theo thời gian khi dữ liệu thực tế đổi."
          }
        ],
        "examTips": [
          {
            "en": "Match the tool to the stage: 'detect accuracy degrading over time' -> Model Monitoring; 'track model versions' -> Model Registry; 'automate ML workflows' -> Pipelines.",
            "vi": "Ghép công cụ với giai đoạn: 'phát hiện độ chính xác giảm dần' -> Model Monitoring; 'theo dõi phiên bản' -> Model Registry; 'tự động hóa quy trình ML' -> Pipelines."
          },
          {
            "en": "Segmenting customers with no predefined categories is unsupervised, not supervised.",
            "vi": "Phân khúc khách hàng không có danh mục định trước là unsupervised, không phải supervised."
          },
          {
            "en": "Older questions may say Vertex AI; the current name is Agent Platform. Treat them as the same platform.",
            "vi": "Đề cũ có thể ghi Vertex AI; tên hiện tại là Agent Platform. Coi là cùng một nền tảng."
          }
        ],
        "terms": [
          {
            "term": "Supervised learning",
            "en": "Learning from labeled data to predict outputs.",
            "vi": "Học từ dữ liệu có nhãn để dự đoán đầu ra."
          },
          {
            "term": "Unsupervised learning",
            "en": "Finding patterns in unlabeled data.",
            "vi": "Tìm mẫu trong dữ liệu chưa gán nhãn."
          },
          {
            "term": "Reinforcement learning",
            "en": "Learning by interaction to maximize reward.",
            "vi": "Học qua tương tác để tối đa hóa phần thưởng."
          },
          {
            "term": "Model drift",
            "en": "Change in model accuracy over time.",
            "vi": "Sự thay đổi độ chính xác của mô hình theo thời gian."
          },
          {
            "term": "Model Registry",
            "en": "Tracks and versions models.",
            "vi": "Theo dõi và quản lý phiên bản mô hình."
          },
          {
            "term": "Feature Store",
            "en": "Manages data features used by models.",
            "vi": "Quản lý các feature dữ liệu mà mô hình dùng."
          },
          {
            "term": "Pipelines",
            "en": "Automate ML tasks and workflows.",
            "vi": "Tự động hóa tác vụ và quy trình ML."
          },
          {
            "term": "Pub/Sub",
            "en": "Real-time streaming ingestion service.",
            "vi": "Dịch vụ thu nạp dữ liệu streaming thời gian thực."
          }
        ],
        "keywords": [
          "supervised learning",
          "unsupervised learning",
          "reinforcement learning",
          "ml lifecycle",
          "data ingestion",
          "data preparation",
          "model training",
          "model deployment",
          "model management",
          "model registry",
          "model monitoring",
          "drift",
          "feature store",
          "pipelines",
          "bigquery"
        ]
      },
      {
        "id": "d1-t3",
        "objective": "1.1 Identify how to choose the appropriate foundation model for a business use case (modality, context window, security, availability and reliability, cost, performance, fine-tuning, customization) and identify business use cases where gen AI can create, summarize, discover and automate.",
        "title": "Choosing a foundation model and business use cases",
        "title_vi": "Chọn foundation model và các use case kinh doanh",
        "sources": [
          "exam-guide-official-checklist.md",
          "module2-v2.md",
          "module3-v2.md",
          "bonus-reference-guide.md",
          "official/study.txt"
        ],
        "sections": [
          {
            "heading": "Factors for choosing a model",
            "heading_vi": "Các yếu tố khi chọn mô hình",
            "body": "There is no single best model; the right one depends on the business use case. The official guide lists the factors: Modality (input and output data types must match the need: text, image, audio, video); Context window (the amount of text the model can consider; larger windows help coherent, relevant answers over long inputs but increase computational cost); Security (data protection, privacy and governance requirements); Availability and reliability (consistent uptime and reliable behavior under load, including redundancy and disaster recovery); Cost; Performance (accuracy, speed and efficiency, balanced against cost); Fine-tuning and customization (whether the model can be adapted to your task or domain).\n\nThe recurring theme is trade-offs: bigger or more capable models usually cost more and may respond more slowly, so pick the simplest model that meets the requirement.",
            "body_vi": "Không có mô hình tốt nhất cho mọi trường hợp; mô hình phù hợp phụ thuộc use case kinh doanh. Exam guide liệt kê các yếu tố: Modality (kiểu dữ liệu đầu vào và đầu ra phải khớp nhu cầu: văn bản, hình ảnh, âm thanh, video); Context window (lượng văn bản mô hình có thể xem xét; cửa sổ lớn hơn giúp trả lời mạch lạc, liên quan trên đầu vào dài nhưng tăng chi phí tính toán); Security (yêu cầu bảo vệ dữ liệu, quyền riêng tư và quản trị); Availability và reliability (uptime ổn định và hoạt động đáng tin cậy dưới tải, gồm dự phòng và khôi phục thảm họa); Cost (chi phí); Performance (độ chính xác, tốc độ, hiệu quả, cân bằng với chi phí); Fine-tuning và customization (mô hình có thể được điều chỉnh cho tác vụ hoặc lĩnh vực của bạn hay không).\n\nChủ đề lặp lại là đánh đổi: mô hình lớn/mạnh hơn thường tốn kém hơn và có thể chậm hơn, nên chọn mô hình đơn giản nhất đáp ứng yêu cầu.",
            "bullets": [
              {
                "en": "Modality: match input/output types to the use case.",
                "vi": "Modality: khớp kiểu dữ liệu vào/ra với use case."
              },
              {
                "en": "Context window: larger = more context but higher compute cost.",
                "vi": "Context window: lớn hơn = nhiều ngữ cảnh hơn nhưng chi phí tính toán cao hơn."
              },
              {
                "en": "Performance vs cost is always a trade-off.",
                "vi": "Performance và cost luôn là một đánh đổi."
              }
            ]
          },
          {
            "heading": "Customization options and where to find models",
            "heading_vi": "Các tùy chọn tùy biến và nơi tìm mô hình",
            "body": "If a general model is not good enough, you can customize it. Fine-tuning improves a pre-trained or foundation model for specific tasks or domains. Lighter options include better prompting, prompt tuning, and grounding the model with your own data (RAG), which is covered in later domains. On Google Cloud, Model Garden on Agent Platform is the place to browse, test and deploy Google, third-party and open models, so you can compare candidates against your factors.\n\nBusiness implication: customization costs time, data and money, so use the lightest technique that closes the gap and measure the result.",
            "body_vi": "Nếu mô hình tổng quát chưa đủ tốt, bạn có thể tùy biến. Fine-tuning cải thiện mô hình pre-trained hoặc foundation model cho tác vụ hay lĩnh vực cụ thể. Các lựa chọn nhẹ hơn gồm prompt tốt hơn, prompt tuning và grounding mô hình bằng dữ liệu của bạn (RAG), được đề cập ở các domain sau. Trên Google Cloud, Model Garden trên Agent Platform là nơi duyệt, thử và triển khai các mô hình của Google, bên thứ ba và mã nguồn mở, để bạn so sánh ứng viên theo các yếu tố trên.\n\nÝ nghĩa kinh doanh: tùy biến tốn thời gian, dữ liệu và tiền, nên dùng kỹ thuật nhẹ nhất đủ lấp khoảng trống và đo kết quả."
          },
          {
            "heading": "Business use cases: create, summarize, discover, automate",
            "heading_vi": "Use case kinh doanh: tạo, tóm tắt, khám phá, tự động hóa",
            "body": "Typical use cases named in the guide: text generation (marketing copy, emails, reports), image generation (campaign visuals, design drafts), code generation (writing, explaining and debugging code), video generation (short marketing or training videos), data analysis (asking questions of data and summarizing insights), and personalized user experience (tailored recommendations, content and assistants). Map each to the four verbs: create (text, image, code, video), summarize (long documents, meetings, calls), discover (enterprise search, finding the right information), automate (manual drafting, triage, routine responses).\n\nWhen a question describes a business need, first identify the modality and the verb, then check constraints such as data sensitivity, cost and latency.",
            "body_vi": "Các use case điển hình trong guide: text generation (nội dung marketing, email, báo cáo), image generation (hình ảnh chiến dịch, bản nháp thiết kế), code generation (viết, giải thích, gỡ lỗi code), video generation (video marketing hoặc đào tạo ngắn), data analysis (đặt câu hỏi cho dữ liệu và tóm tắt insight), và personalized user experience (gợi ý, nội dung, trợ lý cá nhân hóa). Ánh xạ mỗi use case vào bốn động từ: create (văn bản, ảnh, code, video), summarize (tài liệu dài, cuộc họp, cuộc gọi), discover (tìm kiếm doanh nghiệp, tìm đúng thông tin), automate (soạn thảo thủ công, phân loại, phản hồi thường quy).\n\nKhi đề mô tả một nhu cầu kinh doanh, trước hết xác định modality và động từ, rồi kiểm tra các ràng buộc như độ nhạy dữ liệu, chi phí và độ trễ."
          }
        ],
        "table": {
          "caption": "Model selection factors at a glance",
          "caption_vi": "Tóm tắt các yếu tố chọn mô hình",
          "headers": [
            "Factor",
            "Question to ask"
          ],
          "headers_vi": [
            "Yếu tố",
            "Câu hỏi cần đặt"
          ],
          "rows": [
            [
              "Modality",
              "Does the model take and produce the data types I need?"
            ],
            [
              "Context window",
              "How much input must it consider at once, and what does that cost?"
            ],
            [
              "Security",
              "Are privacy, governance and data protection requirements met?"
            ],
            [
              "Availability and reliability",
              "Is it consistently available and reliable under load?"
            ],
            [
              "Cost",
              "Does the price fit the budget at expected volume?"
            ],
            [
              "Performance",
              "Is accuracy and speed sufficient for the use case?"
            ],
            [
              "Fine-tuning / customization",
              "Can it be adapted to my task or domain?"
            ]
          ]
        },
        "keyPoints": [
          {
            "en": "Choose a model by modality, context window, security, availability/reliability, cost, performance, and fine-tuning/customization.",
            "vi": "Chọn mô hình theo modality, context window, security, availability/reliability, cost, performance và fine-tuning/customization."
          },
          {
            "en": "Larger context windows give more context but increase computational cost.",
            "vi": "Context window lớn cho nhiều ngữ cảnh hơn nhưng tăng chi phí tính toán."
          },
          {
            "en": "Fine-tuning enhances a pre-trained model for a specific task or domain.",
            "vi": "Fine-tuning nâng cao mô hình pre-trained cho tác vụ hoặc lĩnh vực cụ thể."
          },
          {
            "en": "Model Garden on Agent Platform lets you explore and deploy Google, third-party and open models.",
            "vi": "Model Garden trên Agent Platform cho phép khám phá và triển khai mô hình của Google, bên thứ ba và mã nguồn mở."
          },
          {
            "en": "Use cases: text, image, code and video generation, data analysis, personalized experiences.",
            "vi": "Use case: tạo văn bản, ảnh, code, video, phân tích dữ liệu, trải nghiệm cá nhân hóa."
          }
        ],
        "examTips": [
          {
            "en": "Start from the requirement: if the need is video, a text-only model is eliminated by modality before cost is compared.",
            "vi": "Bắt đầu từ yêu cầu: nếu cần video thì mô hình chỉ văn bản bị loại do modality trước khi so sánh chi phí."
          },
          {
            "en": "'Best' is relative: the correct answer is usually the model that fits the stated constraints, not the largest one.",
            "vi": "'Tốt nhất' là tương đối: đáp án đúng thường là mô hình phù hợp ràng buộc nêu ra, không phải mô hình lớn nhất."
          },
          {
            "en": "Sensitive or regulated data in the scenario points to security and governance as the deciding factor.",
            "vi": "Dữ liệu nhạy cảm hoặc được quản lý trong kịch bản chỉ ra security và governance là yếu tố quyết định."
          }
        ],
        "terms": [
          {
            "term": "Modality",
            "en": "The type of data a model takes in or produces (text, image, audio, video).",
            "vi": "Kiểu dữ liệu mô hình nhận vào hoặc tạo ra (văn bản, ảnh, âm thanh, video)."
          },
          {
            "term": "Context window",
            "en": "Amount of text a model can consider at once.",
            "vi": "Lượng văn bản mô hình có thể xem xét cùng lúc."
          },
          {
            "term": "Fine-tuning",
            "en": "Further training of a pre-trained model for a task or domain.",
            "vi": "Huấn luyện thêm mô hình pre-trained cho tác vụ hoặc lĩnh vực."
          },
          {
            "term": "Model Garden",
            "en": "Catalog to discover, test and deploy models on Agent Platform.",
            "vi": "Danh mục để khám phá, thử và triển khai mô hình trên Agent Platform."
          },
          {
            "term": "Availability",
            "en": "Model is consistently accessible when needed.",
            "vi": "Mô hình luôn truy cập được khi cần."
          },
          {
            "term": "Reliability",
            "en": "Model performs dependably under load.",
            "vi": "Mô hình hoạt động đáng tin cậy dưới tải."
          },
          {
            "term": "Personalization",
            "en": "Tailoring content or experience to each user.",
            "vi": "Cá nhân hóa nội dung hoặc trải nghiệm cho từng người dùng."
          }
        ],
        "keywords": [
          "choose a model",
          "foundation model selection",
          "modality",
          "context window",
          "security",
          "availability",
          "reliability",
          "cost",
          "performance",
          "fine-tuning",
          "customization",
          "model garden",
          "text generation",
          "image generation",
          "code generation"
        ]
      },
      {
        "id": "d1-t4",
        "objective": "1.2 Describe how various data types are used in gen AI and the business implications: characteristics and importance of data quality and accessibility; structured vs unstructured data; labeled vs unlabeled data.",
        "title": "Data types, quality and accessibility",
        "title_vi": "Loại dữ liệu, chất lượng và khả năng tiếp cận",
        "sources": [
          "exam-guide-official-checklist.md",
          "module2-v2.md",
          "bonus-reference-guide.md",
          "official/study.txt"
        ],
        "sections": [
          {
            "heading": "Structured vs unstructured data",
            "heading_vi": "Dữ liệu có cấu trúc và phi cấu trúc",
            "body": "Data is information in many forms: numbers, dates, text descriptions, images and sounds. Structured data is organized with a predefined format and is easy to search, typically stored in relational databases or tables (sales records, customer tables, inventory, transactions, SQL and BigQuery tables). Unstructured data lacks a predefined structure and needs more sophisticated analysis (images, video, audio, emails, free text documents, social media posts). Semi-structured data such as JSON, XML or logs sits in between.\n\nBusiness implication: most enterprise data is unstructured, and gen AI is particularly good at working with it (summarizing, searching, extracting meaning), which unlocks value that traditional analytics left untouched.",
            "body_vi": "Dữ liệu là thông tin ở nhiều dạng: số, ngày tháng, mô tả văn bản, hình ảnh và âm thanh. Dữ liệu có cấu trúc (structured) được tổ chức theo định dạng định sẵn và dễ tìm kiếm, thường lưu trong cơ sở dữ liệu quan hệ hoặc bảng (bản ghi bán hàng, bảng khách hàng, tồn kho, giao dịch, bảng SQL và BigQuery). Dữ liệu phi cấu trúc (unstructured) không có cấu trúc định sẵn và cần kỹ thuật phân tích phức tạp hơn (ảnh, video, âm thanh, email, tài liệu văn bản tự do, bài đăng mạng xã hội). Dữ liệu bán cấu trúc như JSON, XML hay log nằm ở giữa.\n\nÝ nghĩa kinh doanh: phần lớn dữ liệu doanh nghiệp là phi cấu trúc, và gen AI đặc biệt giỏi xử lý loại này (tóm tắt, tìm kiếm, trích xuất ý nghĩa), mở ra giá trị mà phân tích truyền thống chưa khai thác."
          },
          {
            "heading": "Labeled vs unlabeled data",
            "heading_vi": "Dữ liệu có nhãn và chưa gán nhãn",
            "body": "Labeled data has associated tags such as a name, type or number (photos tagged 'cat' or 'dog'; transactions marked fraud or not fraud). It is used for supervised learning and is costly because people must annotate it. Unlabeled data is raw, unprocessed information that has not been tagged and lacks meaning by itself, such as unorganized photos or streams of audio recordings. It is used for unsupervised learning and for pre-training foundation models, which learn from massive amounts of unlabeled data.\n\nDo not mix up labeled/unlabeled (are there tags?) with structured/unstructured (is there a predefined format?). They are independent dimensions.",
            "body_vi": "Dữ liệu có nhãn (labeled) có các thẻ đi kèm như tên, loại hoặc số (ảnh được gắn 'mèo' hay 'chó'; giao dịch được đánh dấu gian lận hay không). Nó dùng cho supervised learning và tốn kém vì cần con người chú thích. Dữ liệu chưa gán nhãn (unlabeled) là thông tin thô chưa xử lý, chưa được gắn thẻ và tự nó thiếu ý nghĩa, như ảnh chưa sắp xếp hay luồng ghi âm. Nó dùng cho unsupervised learning và để pre-train foundation model, vốn học từ lượng khổng lồ dữ liệu chưa gán nhãn.\n\nĐừng nhầm labeled/unlabeled (có thẻ hay không) với structured/unstructured (có định dạng định sẵn hay không). Hai chiều này độc lập nhau."
          },
          {
            "heading": "Data quality and data accessibility",
            "heading_vi": "Chất lượng dữ liệu và khả năng tiếp cận dữ liệu",
            "body": "Quality data is accurate, complete, consistent and relevant. Completeness: no missing values or gaps that bias learning. Consistency: uniform formats and labels; inconsistent formats or labeling can confuse the model and impair learning. Relevance: the data fits the task. Poor quality leads to unreliable or biased outputs ('garbage in, garbage out').\n\nAccessible data for model training must be readily available, usable and in the proper format. The guide's accessibility considerations are availability (can you get to it when needed), cost (of storing, moving and preparing it) and format (is it in a usable form). Business implication: investing in data strategy, governance and preparation is often a bigger determinant of gen AI success than the choice of model.",
            "body_vi": "Dữ liệu chất lượng là dữ liệu chính xác, đầy đủ, nhất quán và liên quan. Completeness (đầy đủ): không thiếu giá trị hay khoảng trống gây lệch khi học. Consistency (nhất quán): định dạng và nhãn đồng nhất; định dạng hoặc gán nhãn không nhất quán có thể làm mô hình bối rối và cản trở việc học. Relevance (liên quan): dữ liệu phù hợp với tác vụ. Chất lượng kém dẫn đến đầu ra thiếu tin cậy hoặc thiên lệch ('garbage in, garbage out').\n\nDữ liệu có thể tiếp cận (accessible) cho huấn luyện phải sẵn sàng, dùng được và đúng định dạng. Các cân nhắc về accessibility trong guide là availability (có truy cập được khi cần không), cost (chi phí lưu trữ, di chuyển, chuẩn bị) và format (có ở dạng dùng được không). Ý nghĩa kinh doanh: đầu tư vào chiến lược dữ liệu, governance và chuẩn bị dữ liệu thường quyết định thành công gen AI nhiều hơn việc chọn mô hình."
          }
        ],
        "table": {
          "caption": "Data characteristics compared",
          "caption_vi": "So sánh đặc điểm dữ liệu",
          "headers": [
            "Dimension",
            "Type",
            "Meaning",
            "Examples"
          ],
          "headers_vi": [
            "Chiều",
            "Loại",
            "Ý nghĩa",
            "Ví dụ"
          ],
          "rows": [
            [
              "Format",
              "Structured",
              "Predefined format, easy to search",
              "Relational tables, SQL, BigQuery, transactions"
            ],
            [
              "Format",
              "Unstructured",
              "No predefined structure, needs sophisticated analysis",
              "Images, video, audio, emails, free text"
            ],
            [
              "Tags",
              "Labeled",
              "Has tags (name, type, number)",
              "Photos tagged cat/dog, fraud flags"
            ],
            [
              "Tags",
              "Unlabeled",
              "Raw, untagged",
              "Unorganized photos, audio streams"
            ]
          ]
        },
        "keyPoints": [
          {
            "en": "Structured data fits a predefined format (tables); unstructured does not (images, video, audio, emails, free text).",
            "vi": "Structured có định dạng định sẵn (bảng); unstructured thì không (ảnh, video, âm thanh, email, văn bản tự do)."
          },
          {
            "en": "Labeled data has tags and supports supervised learning; unlabeled data is raw and supports unsupervised learning and foundation model pre-training.",
            "vi": "Dữ liệu có nhãn có thẻ và hỗ trợ supervised; chưa gán nhãn là thô, hỗ trợ unsupervised và pre-train foundation model."
          },
          {
            "en": "Quality data is accurate, complete, consistent and relevant.",
            "vi": "Dữ liệu chất lượng là chính xác, đầy đủ, nhất quán và liên quan."
          },
          {
            "en": "Accessibility covers availability, cost and format.",
            "vi": "Accessibility gồm availability, cost và format."
          },
          {
            "en": "Most enterprise data is unstructured, which gen AI handles well.",
            "vi": "Phần lớn dữ liệu doanh nghiệp là phi cấu trúc, và gen AI xử lý tốt loại này."
          }
        ],
        "examTips": [
          {
            "en": "Inconsistent formats or labeling is the textbook example of a consistency problem that confuses the model.",
            "vi": "Định dạng hoặc nhãn không nhất quán là ví dụ điển hình về vấn đề consistency làm mô hình bối rối."
          },
          {
            "en": "Beware swapped definitions: SQL tables are structured; emails, images and video are unstructured.",
            "vi": "Coi chừng đảo định nghĩa: bảng SQL là structured; email, ảnh, video là unstructured."
          },
          {
            "en": "When a scenario says the model gives poor results despite a strong model, suspect data quality or accessibility first.",
            "vi": "Khi kịch bản nói kết quả kém dù mô hình mạnh, hãy nghi ngờ chất lượng hoặc khả năng tiếp cận dữ liệu trước."
          }
        ],
        "terms": [
          {
            "term": "Structured data",
            "en": "Organized in a predefined format, easy to search.",
            "vi": "Được tổ chức theo định dạng định sẵn, dễ tìm kiếm."
          },
          {
            "term": "Unstructured data",
            "en": "No predefined structure; needs sophisticated analysis.",
            "vi": "Không có cấu trúc định sẵn; cần phân tích phức tạp."
          },
          {
            "term": "Labeled data",
            "en": "Data with associated tags.",
            "vi": "Dữ liệu có thẻ đi kèm."
          },
          {
            "term": "Unlabeled data",
            "en": "Raw, untagged data.",
            "vi": "Dữ liệu thô, chưa gắn thẻ."
          },
          {
            "term": "Data quality",
            "en": "Accurate, complete, consistent, relevant data.",
            "vi": "Dữ liệu chính xác, đầy đủ, nhất quán, liên quan."
          },
          {
            "term": "Data accessibility",
            "en": "Data is available, usable and in proper format.",
            "vi": "Dữ liệu sẵn sàng, dùng được và đúng định dạng."
          }
        ],
        "keywords": [
          "structured data",
          "unstructured data",
          "labeled data",
          "unlabeled data",
          "data quality",
          "data accessibility",
          "completeness",
          "consistency",
          "relevance",
          "availability",
          "format",
          "semi-structured",
          "training data",
          "bias",
          "data types"
        ]
      },
      {
        "id": "d1-t5",
        "objective": "1.3 Identify the core layers of the gen AI landscape and the business implications: Infrastructure, Models, Platforms, Agents, Applications.",
        "title": "The five layers of the gen AI landscape",
        "title_vi": "Năm tầng của hệ sinh thái gen AI",
        "sources": [
          "exam-guide-official-checklist.md",
          "module3-v2.md",
          "bonus-reference-guide.md",
          "official/study.txt"
        ],
        "sections": [
          {
            "heading": "The stack from bottom to top",
            "heading_vi": "Ngăn xếp từ dưới lên trên",
            "body": "The gen AI landscape is described as five layers. Infrastructure provides the core computing resources: physical hardware such as servers, GPUs and TPUs, plus the software needed to store and run AI models and training data. Models are complex algorithms trained on vast amounts of data; they learn patterns and relationships, which lets them generate new content, translate languages, answer questions and more. Platforms offer APIs, data management and model deployment tools; they bridge the gap between models and agents and simplify the complexity of managing infrastructure. Agents are software that learns how to best achieve a goal based on the inputs and tools available to it. Applications are the user-facing gen-AI-powered layer through which people interact with and benefit from AI.\n\nEach layer builds on the one below: applications use agents, agents use models through platforms, and models run on infrastructure.",
            "body_vi": "Hệ sinh thái gen AI được mô tả bằng năm tầng. Infrastructure cung cấp tài nguyên tính toán lõi: phần cứng vật lý như server, GPU và TPU, cùng phần mềm cần thiết để lưu trữ và chạy mô hình AI và dữ liệu huấn luyện. Models là các thuật toán phức tạp được huấn luyện trên lượng dữ liệu khổng lồ; chúng học các mẫu và mối quan hệ, nhờ đó tạo nội dung mới, dịch ngôn ngữ, trả lời câu hỏi và nhiều hơn nữa. Platforms cung cấp API, quản lý dữ liệu và công cụ triển khai mô hình; chúng nối khoảng cách giữa model và agent và đơn giản hóa độ phức tạp của việc quản lý hạ tầng. Agents là phần mềm học cách đạt mục tiêu tốt nhất dựa trên đầu vào và công cụ có sẵn. Applications là tầng hướng người dùng chạy bằng gen AI, nơi con người tương tác và hưởng lợi từ AI.\n\nMỗi tầng xây trên tầng dưới: application dùng agent, agent dùng model qua platform, và model chạy trên infrastructure."
          },
          {
            "heading": "Who works with each layer and on Google Cloud",
            "heading_vi": "Ai làm việc với từng tầng và trên Google Cloud",
            "body": "Infrastructure: infrastructure and ML engineers, platform teams; on Google Cloud this is the AI-optimized infrastructure (TPUs, GPUs, AI Hypercomputer for training, tuning and serving). Models: AI practitioners, researchers and data scientists; examples are Gemini, Gemma, Imagen and Veo, available through Model Garden alongside third-party and open models. Platforms: developers and ML engineers; on Google Cloud this is Agent Platform (formerly Vertex AI) with Model Garden, tuning, deployment and Agent Studio. Agents: developers and business teams building goal-driven assistants, for example with Agent Studio or Gemini Enterprise. Applications: end users and business teams; examples are the Gemini app, Gemini for Google Workspace and Gemini Enterprise.\n\nBusiness implication: the higher you work in the stack, the faster and easier adoption is but the less control you have; the lower you go, the more control and customization but also more skill, time and cost required. Choose the highest layer that meets the need.",
            "body_vi": "Infrastructure: kỹ sư hạ tầng và ML, đội nền tảng; trên Google Cloud là hạ tầng tối ưu cho AI (TPU, GPU, AI Hypercomputer để huấn luyện, tinh chỉnh và phục vụ). Models: AI practitioner, nhà nghiên cứu và data scientist; ví dụ Gemini, Gemma, Imagen, Veo, có trong Model Garden cùng mô hình bên thứ ba và mã nguồn mở. Platforms: developer và kỹ sư ML; trên Google Cloud là Agent Platform (trước đây Vertex AI) với Model Garden, tuning, triển khai và Agent Studio. Agents: developer và đội kinh doanh xây trợ lý hướng mục tiêu, ví dụ bằng Agent Studio hoặc Gemini Enterprise. Applications: người dùng cuối và đội kinh doanh; ví dụ ứng dụng Gemini, Gemini for Google Workspace và Gemini Enterprise.\n\nÝ nghĩa kinh doanh: làm việc ở tầng càng cao thì áp dụng càng nhanh, dễ nhưng ít kiểm soát; xuống tầng thấp hơn thì kiểm soát và tùy biến nhiều hơn nhưng cần thêm kỹ năng, thời gian và chi phí. Chọn tầng cao nhất đáp ứng được nhu cầu."
          }
        ],
        "table": {
          "caption": "Five layers of the gen AI landscape",
          "caption_vi": "Năm tầng của hệ sinh thái gen AI",
          "headers": [
            "Layer",
            "What it provides",
            "Typical audience",
            "Google example"
          ],
          "headers_vi": [
            "Tầng",
            "Cung cấp gì",
            "Đối tượng điển hình",
            "Ví dụ Google"
          ],
          "rows": [
            [
              "Applications",
              "User-facing gen AI experiences",
              "End users, business teams",
              "Gemini app, Gemini for Google Workspace, Gemini Enterprise"
            ],
            [
              "Agents",
              "Goal-driven software using models and tools",
              "Developers, business teams",
              "Agent Studio, Gemini Enterprise agents"
            ],
            [
              "Platforms",
              "APIs, data management, model deployment tools",
              "Developers, ML engineers",
              "Agent Platform (formerly Vertex AI), Model Garden"
            ],
            [
              "Models",
              "Trained algorithms that generate content",
              "AI practitioners, data scientists",
              "Gemini, Gemma, Imagen, Veo"
            ],
            [
              "Infrastructure",
              "Compute hardware and software to store and run models",
              "Infrastructure/ML engineers",
              "TPUs, GPUs, AI Hypercomputer"
            ]
          ]
        },
        "keyPoints": [
          {
            "en": "Five layers: Infrastructure, Models, Platforms, Agents, Applications.",
            "vi": "Năm tầng: Infrastructure, Models, Platforms, Agents, Applications."
          },
          {
            "en": "Infrastructure = servers, GPUs, TPUs and software to store and run models and data.",
            "vi": "Infrastructure = server, GPU, TPU và phần mềm để lưu trữ, chạy mô hình và dữ liệu."
          },
          {
            "en": "Platforms bridge models and agents and simplify infrastructure management with APIs, data management and deployment tools.",
            "vi": "Platform nối model với agent và đơn giản hóa quản lý hạ tầng bằng API, quản lý dữ liệu và công cụ triển khai."
          },
          {
            "en": "Agents pursue a goal using inputs and available tools; applications are what users see.",
            "vi": "Agent theo đuổi mục tiêu bằng đầu vào và công cụ sẵn có; application là thứ người dùng nhìn thấy."
          },
          {
            "en": "Higher layers = faster adoption and less control; lower layers = more control and more effort.",
            "vi": "Tầng cao = áp dụng nhanh, ít kiểm soát; tầng thấp = nhiều kiểm soát, nhiều công sức hơn."
          }
        ],
        "examTips": [
          {
            "en": "Identify the layer by the verb: 'user interacts' = application; 'achieves a goal with tools' = agent; 'APIs and deployment tools' = platform; 'trained algorithm' = model; 'GPUs/TPUs' = infrastructure.",
            "vi": "Nhận diện tầng bằng động từ: 'người dùng tương tác' = application; 'đạt mục tiêu bằng công cụ' = agent; 'API và công cụ triển khai' = platform; 'thuật toán đã huấn luyện' = model; 'GPU/TPU' = infrastructure."
          },
          {
            "en": "Platform is the bridge between models and agents, not between infrastructure and users.",
            "vi": "Platform là cầu nối giữa model và agent, không phải giữa infrastructure và người dùng."
          },
          {
            "en": "A business that wants quick value with minimal ML skills should favor higher layers (applications) over building on infrastructure.",
            "vi": "Doanh nghiệp muốn giá trị nhanh với ít kỹ năng ML nên ưu tiên tầng cao (application) hơn là xây trên infrastructure."
          }
        ],
        "terms": [
          {
            "term": "Infrastructure layer",
            "en": "Compute hardware and software to run AI.",
            "vi": "Phần cứng và phần mềm tính toán để chạy AI."
          },
          {
            "term": "Model layer",
            "en": "Trained algorithms that generate content.",
            "vi": "Các thuật toán đã huấn luyện tạo nội dung."
          },
          {
            "term": "Platform layer",
            "en": "APIs, data management and model deployment tools.",
            "vi": "API, quản lý dữ liệu và công cụ triển khai mô hình."
          },
          {
            "term": "Agent",
            "en": "Software that pursues a goal using inputs and tools.",
            "vi": "Phần mềm theo đuổi mục tiêu bằng đầu vào và công cụ."
          },
          {
            "term": "Application layer",
            "en": "User-facing gen-AI-powered products.",
            "vi": "Sản phẩm hướng người dùng chạy bằng gen AI."
          },
          {
            "term": "TPU",
            "en": "Google's accelerator hardware for AI workloads.",
            "vi": "Phần cứng tăng tốc của Google cho workload AI."
          }
        ],
        "keywords": [
          "infrastructure",
          "models",
          "platforms",
          "agents",
          "applications",
          "gen ai landscape",
          "layers",
          "tpu",
          "gpu",
          "ai hypercomputer",
          "agent platform",
          "user-facing",
          "apis",
          "model deployment",
          "vertex ai"
        ]
      },
      {
        "id": "d1-t6",
        "objective": "1.4 Identify the use cases and strengths of Google's foundation models: Gemini, Gemma, Imagen, Veo.",
        "title": "Google's foundation models: Gemini, Gemma, Imagen, Veo",
        "title_vi": "Các foundation model của Google: Gemini, Gemma, Imagen, Veo",
        "sources": [
          "exam-guide-official-checklist.md",
          "module2-v2.md",
          "module3-v2.md",
          "bonus-reference-guide.md",
          "official/study.txt"
        ],
        "sections": [
          {
            "heading": "The four models and their strengths",
            "heading_vi": "Bốn mô hình và thế mạnh",
            "body": "Gemini is Google's multimodal model family: it supports multimodal understanding (text, images, audio, video, code), advanced conversational AI, content creation and question answering. It is the general-purpose choice. Gemma offers developers a user-friendly, customizable, lightweight open model for local deployment and specialized AI applications. Imagen is a text-to-image diffusion model that generates high-quality images from textual descriptions. Veo generates video content from text descriptions or still images.\n\nIn short: Gemini = general multimodal; Gemma = open and customizable, run it yourself; Imagen = images; Veo = video.",
            "body_vi": "Gemini là họ mô hình đa phương thức của Google: hỗ trợ hiểu đa phương thức (văn bản, ảnh, âm thanh, video, code), AI hội thoại nâng cao, tạo nội dung và hỏi đáp. Đây là lựa chọn đa dụng. Gemma cung cấp cho developer mô hình mở, nhẹ, dễ dùng và tùy biến được, phù hợp triển khai cục bộ và ứng dụng AI chuyên biệt. Imagen là diffusion model text-to-image tạo ảnh chất lượng cao từ mô tả văn bản. Veo tạo nội dung video từ mô tả văn bản hoặc ảnh tĩnh.\n\nTóm lại: Gemini = đa phương thức tổng quát; Gemma = mở và tùy biến, tự chạy; Imagen = ảnh; Veo = video."
          },
          {
            "heading": "Use cases and how to pick",
            "heading_vi": "Use case và cách chọn",
            "body": "Pick Gemini when the task is general: chat assistants, summarization, question answering, content drafting, or understanding mixed inputs such as an image plus a question. Pick Gemma when you need an open, lightweight model you can customize and deploy locally or on your own infrastructure, for example for specialized applications, constrained environments or tighter control over where the model runs. Pick Imagen for marketing visuals, product mock-ups and design drafts generated from text. Pick Veo for short marketing, training or social videos created from a prompt or a still image.\n\nAll four are available to explore through Model Garden on Agent Platform (formerly Vertex AI), where you can also compare third-party and other open models.",
            "body_vi": "Chọn Gemini khi tác vụ tổng quát: trợ lý chat, tóm tắt, hỏi đáp, soạn nội dung, hoặc hiểu đầu vào hỗn hợp như ảnh kèm câu hỏi. Chọn Gemma khi cần mô hình mở, nhẹ, tùy biến được và triển khai cục bộ hoặc trên hạ tầng của bạn, ví dụ cho ứng dụng chuyên biệt, môi trường hạn chế hoặc kiểm soát chặt hơn nơi mô hình chạy. Chọn Imagen cho hình ảnh marketing, mock-up sản phẩm và bản nháp thiết kế tạo từ văn bản. Chọn Veo cho video marketing, đào tạo hoặc mạng xã hội ngắn tạo từ prompt hoặc ảnh tĩnh.\n\nCả bốn đều có thể khám phá qua Model Garden trên Agent Platform (trước đây Vertex AI), nơi bạn cũng có thể so sánh mô hình bên thứ ba và mô hình mở khác."
          },
          {
            "heading": "Business implications and pitfalls",
            "heading_vi": "Ý nghĩa kinh doanh và bẫy thường gặp",
            "body": "Matching the model to the modality is the first filter: text and mixed inputs point to Gemini, images to Imagen, video to Veo. A requirement for local deployment or deep customization points to Gemma. Using the right specialized model avoids paying for capability you do not need, while Gemini's multimodality reduces the need to stitch several models together for mixed-media tasks.\n\nCommon confusions: Gemma (open, customizable, local) versus Gemini (general-purpose multimodal); Imagen (image) versus Veo (video). Imagen is a diffusion model, linking back to the core concepts.",
            "body_vi": "Khớp mô hình với modality là bộ lọc đầu tiên: văn bản và đầu vào hỗn hợp -> Gemini, ảnh -> Imagen, video -> Veo. Yêu cầu triển khai cục bộ hoặc tùy biến sâu -> Gemma. Dùng đúng mô hình chuyên biệt tránh trả tiền cho năng lực không cần, còn tính đa phương thức của Gemini giảm nhu cầu ghép nhiều mô hình cho tác vụ đa phương tiện.\n\nCác nhầm lẫn thường gặp: Gemma (mở, tùy biến, cục bộ) với Gemini (đa dụng, đa phương thức); Imagen (ảnh) với Veo (video). Imagen là diffusion model, liên hệ lại với khái niệm cốt lõi."
          }
        ],
        "table": {
          "caption": "Google foundation models compared",
          "caption_vi": "So sánh foundation model của Google",
          "headers": [
            "Model",
            "Strength",
            "Typical use case"
          ],
          "headers_vi": [
            "Mô hình",
            "Thế mạnh",
            "Use case điển hình"
          ],
          "rows": [
            [
              "Gemini",
              "Multimodal understanding, conversation, content creation, Q&A",
              "General assistants, summarization, mixed text/image/audio/video tasks"
            ],
            [
              "Gemma",
              "Lightweight, open, customizable",
              "Local deployment, specialized applications, own-infrastructure hosting"
            ],
            [
              "Imagen",
              "Text-to-image diffusion model, high-quality images",
              "Marketing visuals, product mock-ups, design drafts"
            ],
            [
              "Veo",
              "Video from text or still images",
              "Short marketing, training or social videos"
            ]
          ]
        },
        "keyPoints": [
          {
            "en": "Gemini: multimodal understanding, advanced conversational AI, content creation and question answering.",
            "vi": "Gemini: hiểu đa phương thức, AI hội thoại nâng cao, tạo nội dung và hỏi đáp."
          },
          {
            "en": "Gemma: lightweight, customizable open model for local deployment and specialized applications.",
            "vi": "Gemma: mô hình mở nhẹ, tùy biến cho triển khai cục bộ và ứng dụng chuyên biệt."
          },
          {
            "en": "Imagen: text-to-image diffusion model.",
            "vi": "Imagen: diffusion model text-to-image."
          },
          {
            "en": "Veo: generates video from text descriptions or still images.",
            "vi": "Veo: tạo video từ mô tả văn bản hoặc ảnh tĩnh."
          },
          {
            "en": "All are accessible through Model Garden on Agent Platform.",
            "vi": "Tất cả truy cập được qua Model Garden trên Agent Platform."
          }
        ],
        "examTips": [
          {
            "en": "'Generate video from a text prompt or a still image' -> Veo; 'generate an image from text' -> Imagen. Do not swap them.",
            "vi": "'Tạo video từ prompt hoặc ảnh tĩnh' -> Veo; 'tạo ảnh từ văn bản' -> Imagen. Đừng đảo."
          },
          {
            "en": "'Open, lightweight, customizable, run locally' -> Gemma, not Gemini.",
            "vi": "'Mở, nhẹ, tùy biến, chạy cục bộ' -> Gemma, không phải Gemini."
          },
          {
            "en": "'Multimodal, conversational, general-purpose' -> Gemini.",
            "vi": "'Đa phương thức, hội thoại, đa dụng' -> Gemini."
          },
          {
            "en": "Modality is usually the quickest way to eliminate wrong options.",
            "vi": "Modality thường là cách nhanh nhất để loại các đáp án sai."
          }
        ],
        "terms": [
          {
            "term": "Gemini",
            "en": "Google's multimodal model family for general-purpose tasks.",
            "vi": "Họ mô hình đa phương thức của Google cho tác vụ đa dụng."
          },
          {
            "term": "Gemma",
            "en": "Lightweight, customizable open model for local and specialized use.",
            "vi": "Mô hình mở nhẹ, tùy biến cho dùng cục bộ và chuyên biệt."
          },
          {
            "term": "Imagen",
            "en": "Text-to-image diffusion model.",
            "vi": "Diffusion model text-to-image."
          },
          {
            "term": "Veo",
            "en": "Text/image-to-video generation model.",
            "vi": "Mô hình tạo video từ văn bản/ảnh."
          },
          {
            "term": "Open model",
            "en": "A model whose weights can be downloaded and self-hosted/customized.",
            "vi": "Mô hình có trọng số tải về, tự host và tùy biến được."
          },
          {
            "term": "Model Garden",
            "en": "Catalog to explore Google, third-party and open models.",
            "vi": "Danh mục khám phá mô hình Google, bên thứ ba và mã nguồn mở."
          }
        ],
        "keywords": [
          "gemini",
          "gemma",
          "imagen",
          "veo",
          "text-to-image",
          "text-to-video",
          "open model",
          "lightweight",
          "local deployment",
          "multimodal",
          "video generation",
          "image generation",
          "model garden",
          "conversational"
        ]
      }
    ]
  },
  {
    "domain": 2,
    "title": "Google Cloud's gen AI offerings",
    "title_vi": "Các offering gen AI của Google Cloud",
    "weight": 35,
    "overview": "This domain tests whether you can recognize Google Cloud's gen AI portfolio and match the right offering to a business need. Go from the big picture to detail: why Google Cloud (AI-first, enterprise-ready, open, democratized), the AI-optimized infrastructure beneath it (TPUs, AI Hypercomputer, edge AI), the prebuilt offerings that enable AI-powered work (Gemini app, Gems, Gemini Enterprise, Gemini Notebook, Gemini for Workspace), the offerings that improve customer experience (Agent Search, Customer Engagement Suite), the developer platform (Agent Platform, Model Garden, AutoML, RAG, Google AI Studio vs Agent Studio), and finally agents and their tooling (tool types and pre-built AI APIs).",
    "overview_vi": "Domain này kiểm tra liệu bạn nhận ra được danh mục gen AI của Google Cloud và ghép đúng offering với nhu cầu kinh doanh hay không. Hãy đi từ bức tranh lớn đến chi tiết: vì sao chọn Google Cloud (AI-first, enterprise-ready, mở, dân chủ hóa), hạ tầng tối ưu AI bên dưới (TPU, AI Hypercomputer, edge AI), các offering dựng sẵn cho công việc có AI (Gemini app, Gems, Gemini Enterprise, Gemini Notebook, Gemini for Workspace), các offering cải thiện trải nghiệm khách hàng (Agent Search, Customer Engagement Suite), nền tảng cho developer (Agent Platform, Model Garden, AutoML, RAG, Google AI Studio so với Agent Studio), và cuối cùng là agent và tooling (các loại tool và AI API dựng sẵn).",
    "topics": [
      {
        "id": "d2-t1",
        "objective": "Describe Google Cloud's strengths in the field of gen AI (AI-first approach, enterprise-ready platform, comprehensive ecosystem, open approach, data control, democratization of AI).",
        "title": "Google Cloud's strengths in gen AI",
        "title_vi": "Thế mạnh của Google Cloud trong gen AI",
        "sources": [
          "guide.txt",
          "exam-guide-official-checklist.md",
          "bonus-reference-guide.md",
          "module3-v2.md",
          "module1-v2.md"
        ],
        "sections": [
          {
            "heading": "The big picture: why choose Google Cloud for gen AI",
            "heading_vi": "Bức tranh tổng thể: vì sao chọn Google Cloud cho gen AI",
            "body": "Google Cloud's pitch rests on a few connected strengths. First, an AI-first approach: Google has invested in AI research and products for years and keeps committing to future innovation, which shows up as cutting-edge models (Gemini, Gemma, Imagen, Veo) and tools. Second, an enterprise-ready AI platform: responsible, secure, private, reliable and scalable. Third, a comprehensive AI ecosystem in which gen AI is integrated across Google products and services. Fourth, an open approach. Fifth, AI-optimized infrastructure (covered in the next topic). Finally, democratization: making AI development reachable for people without deep ML expertise.\n\nOn the exam, these strengths are usually tested as 'which statement best describes why an organization would choose Google Cloud' or 'which strength does this scenario illustrate'. Learn the keyword for each strength.",
            "body_vi": "Lập luận của Google Cloud dựa trên một số thế mạnh liên kết với nhau. Thứ nhất, cách tiếp cận AI-first: Google đã đầu tư vào nghiên cứu và sản phẩm AI nhiều năm và tiếp tục cam kết đổi mới trong tương lai, thể hiện qua các model tiên tiến (Gemini, Gemma, Imagen, Veo) và công cụ. Thứ hai, nền tảng AI sẵn sàng cho doanh nghiệp (enterprise-ready): có trách nhiệm, bảo mật, riêng tư, đáng tin cậy và mở rộng được. Thứ ba, hệ sinh thái AI toàn diện, trong đó gen AI được tích hợp khắp các sản phẩm và dịch vụ của Google. Thứ tư, cách tiếp cận mở. Thứ năm, hạ tầng tối ưu cho AI (xem topic kế tiếp). Cuối cùng là dân chủ hóa: giúp cả người không có chuyên môn ML sâu cũng tiếp cận được việc phát triển AI.\n\nTrong đề thi, các thế mạnh này thường được hỏi dạng 'phát biểu nào mô tả đúng nhất lý do tổ chức chọn Google Cloud' hoặc 'tình huống này minh họa thế mạnh nào'. Hãy nhớ từ khóa của từng thế mạnh.",
            "bullets": [
              {
                "en": "AI-first and future innovation: cutting-edge solutions and continued investment",
                "vi": "AI-first và đổi mới tương lai: giải pháp tiên tiến và đầu tư liên tục"
              },
              {
                "en": "Enterprise-ready: responsible, secure, private, reliable, scalable",
                "vi": "Enterprise-ready: có trách nhiệm, bảo mật, riêng tư, đáng tin cậy, mở rộng được"
              },
              {
                "en": "Ecosystem: gen AI integrated across Google products and services (e.g., Workspace, Google Cloud)",
                "vi": "Hệ sinh thái: gen AI tích hợp khắp sản phẩm và dịch vụ Google (vd Workspace, Google Cloud)"
              },
              {
                "en": "Open approach: first-party, third-party and open-source models",
                "vi": "Cách tiếp cận mở: model first-party, third-party và open-source"
              }
            ]
          },
          {
            "heading": "Open approach, data control and democratization",
            "heading_vi": "Cách tiếp cận mở, kiểm soát dữ liệu và dân chủ hóa",
            "body": "The open approach means customers are not locked into a single model: besides Google's own first-party models they can use third-party and open-source models (for example through Model Garden), and open-weights models such as Gemma. Flexibility lets teams pick the best model for each task and avoid vendor lock-in.\n\nData control: Google Cloud's AI platform gives users control over their data through security, privacy and governance capabilities, together with open and leading first-party models, pre-built and customizable solutions, and agents. The business message: you can ground and customize AI with your own data while keeping it protected and governed.\n\nDemocratization: Google Cloud lowers the barrier to AI development with low-code and no-code tools, pre-trained models and APIs. A business analyst can use no-code tools, a developer can call a pre-trained API, and an ML engineer can build custom models, all on the same platform.",
            "body_vi": "Cách tiếp cận mở nghĩa là khách hàng không bị khóa vào một model duy nhất: ngoài model first-party của Google, họ có thể dùng model third-party và open-source (ví dụ qua Model Garden) và model open-weights như Gemma. Sự linh hoạt giúp đội chọn model tốt nhất cho từng tác vụ và tránh vendor lock-in.\n\nKiểm soát dữ liệu: nền tảng AI của Google Cloud cho người dùng quyền kiểm soát dữ liệu thông qua các năng lực security, privacy và governance, cùng với các model first-party mở và hàng đầu, giải pháp dựng sẵn và tùy biến được, và agent. Thông điệp kinh doanh: bạn có thể grounding và tùy biến AI bằng dữ liệu của mình mà vẫn giữ dữ liệu được bảo vệ và quản trị.\n\nDân chủ hóa: Google Cloud hạ rào cản phát triển AI bằng công cụ low-code và no-code, pre-trained model và API. Một business analyst dùng được công cụ no-code, một developer gọi pre-trained API, một ML engineer xây model tùy biến, tất cả trên cùng một nền tảng."
          },
          {
            "heading": "Exam pitfalls",
            "heading_vi": "Bẫy thường gặp",
            "body": "Do not confuse 'open' with 'insecure' or 'free': open approach is about model choice and flexibility, while security, privacy and governance are separate enterprise-ready strengths. Likewise, 'democratization' is about accessibility (low-code/no-code, pre-trained models, APIs), not about making models public.",
            "body_vi": "Đừng nhầm 'mở' với 'không an toàn' hay 'miễn phí': cách tiếp cận mở là về lựa chọn model và tính linh hoạt, còn security, privacy, governance là thế mạnh enterprise-ready riêng. Tương tự, 'dân chủ hóa' là về khả năng tiếp cận (low-code/no-code, pre-trained model, API), không phải công khai model."
          }
        ],
        "table": {
          "caption": "Strength to keyword map",
          "caption_vi": "Bản đồ thế mạnh - từ khóa",
          "headers": [
            "Strength",
            "What it means",
            "Typical cue in a question"
          ],
          "headers_vi": [
            "Thế mạnh",
            "Ý nghĩa",
            "Dấu hiệu trong đề"
          ],
          "rows": [
            [
              "AI-first",
              "Years of AI research and continued innovation",
              "cutting-edge, future innovation"
            ],
            [
              "Enterprise-ready",
              "Responsible, secure, private, reliable, scalable",
              "governance, compliance, scale"
            ],
            [
              "Ecosystem",
              "Gen AI built into many Google products",
              "integration across products"
            ],
            [
              "Open approach",
              "First-party, third-party, open-source models",
              "avoid lock-in, model choice"
            ],
            [
              "Democratization",
              "Low-code/no-code, pre-trained models, APIs",
              "non-experts, citizen developers"
            ]
          ]
        },
        "keyPoints": [
          {
            "en": "Google's strengths: AI-first, enterprise-ready, comprehensive ecosystem, open approach, AI-optimized infrastructure, democratization.",
            "vi": "Thế mạnh của Google: AI-first, enterprise-ready, hệ sinh thái toàn diện, cách tiếp cận mở, hạ tầng tối ưu AI, dân chủ hóa."
          },
          {
            "en": "Enterprise-ready means responsible, secure, private, reliable and scalable.",
            "vi": "Enterprise-ready nghĩa là có trách nhiệm, bảo mật, riêng tư, đáng tin cậy và mở rộng được."
          },
          {
            "en": "Open approach = first-party plus third-party and open-source models; reduces lock-in.",
            "vi": "Cách tiếp cận mở = model first-party cùng third-party và open-source; giảm lock-in."
          },
          {
            "en": "Data control comes from security, privacy and governance plus customizable solutions and agents.",
            "vi": "Kiểm soát dữ liệu đến từ security, privacy, governance cùng giải pháp tùy biến và agent."
          },
          {
            "en": "Democratization = low-code/no-code tools, pre-trained models and APIs.",
            "vi": "Dân chủ hóa = công cụ low-code/no-code, pre-trained model và API."
          }
        ],
        "examTips": [
          {
            "en": "If the scenario stresses access to many model providers or avoiding lock-in, the answer is the open approach.",
            "vi": "Nếu tình huống nhấn mạnh truy cập nhiều nhà cung cấp model hoặc tránh lock-in, đáp án là cách tiếp cận mở."
          },
          {
            "en": "If non-technical staff build AI solutions, think democratization (low-code/no-code, pre-trained models, APIs).",
            "vi": "Nếu nhân sự không chuyên kỹ thuật tự xây giải pháp AI, hãy nghĩ tới dân chủ hóa (low-code/no-code, pre-trained model, API)."
          },
          {
            "en": "Gen AI appearing inside Gmail, Docs, Meet etc. illustrates the integrated ecosystem.",
            "vi": "Gen AI xuất hiện trong Gmail, Docs, Meet... minh họa hệ sinh thái tích hợp."
          }
        ],
        "terms": [
          {
            "term": "Enterprise-ready",
            "en": "AI platform that is responsible, secure, private, reliable and scalable.",
            "vi": "Nền tảng AI có trách nhiệm, bảo mật, riêng tư, đáng tin cậy, mở rộng được."
          },
          {
            "term": "Open approach",
            "en": "Support for first-party, third-party and open-source models.",
            "vi": "Hỗ trợ model first-party, third-party và open-source."
          },
          {
            "term": "Democratization of AI",
            "en": "Making AI development accessible via low-code/no-code, pre-trained models, APIs.",
            "vi": "Giúp phát triển AI dễ tiếp cận qua low-code/no-code, pre-trained model, API."
          },
          {
            "term": "Pre-trained model",
            "en": "A model already trained that can be used directly or adapted.",
            "vi": "Model đã được huấn luyện sẵn, dùng trực tiếp hoặc điều chỉnh."
          },
          {
            "term": "Gemma",
            "en": "Google's open-weights model family.",
            "vi": "Họ model open-weights của Google."
          },
          {
            "term": "Vendor lock-in",
            "en": "Dependence on one provider that makes switching hard.",
            "vi": "Phụ thuộc một nhà cung cấp khiến khó chuyển đổi."
          }
        ],
        "keywords": [
          "ai-first",
          "enterprise-ready",
          "open approach",
          "ecosystem",
          "democratize",
          "low-code",
          "no-code",
          "pre-trained models",
          "apis",
          "data control",
          "governance",
          "privacy",
          "security",
          "scalable",
          "vendor lock-in"
        ]
      },
      {
        "id": "d2-t2",
        "objective": "Identify the essential components of Google Cloud's AI-optimized infrastructure and its benefits (e.g., hypercomputer, TPUs, GPUs, data centers, cloud computing).",
        "title": "AI-optimized infrastructure and edge AI",
        "title_vi": "Hạ tầng tối ưu cho AI và AI tại edge",
        "sources": [
          "guide.txt",
          "exam-guide-official-checklist.md",
          "module3-v2.md",
          "bonus-reference-guide.md"
        ],
        "sections": [
          {
            "heading": "Infrastructure: the base layer",
            "heading_vi": "Hạ tầng: tầng nền tảng",
            "body": "Gen AI is often described as five layers: infrastructure, models, platform, agents and applications. Infrastructure is the foundation. Training and serving large models requires enormous compute, so Google Cloud provides AI-optimized infrastructure built from custom-designed processors, GPUs, Google's data centers and cloud computing.\n\nTPUs (Tensor Processing Units) are Google's custom-designed chips for AI workloads. GPUs from partners are also available. AI Hypercomputer is the integrated infrastructure used to train, tune and serve AI workloads; it brings together hardware (TPUs, GPUs), networking and software as one system. The exam mentions TPUs more often than the hypercomputer, but know that the hypercomputer is the umbrella.",
            "body_vi": "Gen AI thường được mô tả theo năm tầng: hạ tầng, model, nền tảng, agent và ứng dụng. Hạ tầng là nền móng. Huấn luyện và phục vụ model lớn cần năng lực tính toán khổng lồ, nên Google Cloud cung cấp hạ tầng tối ưu cho AI gồm bộ xử lý thiết kế riêng, GPU, data center của Google và cloud computing.\n\nTPU (Tensor Processing Unit) là chip do Google thiết kế riêng cho workload AI. GPU cũng có sẵn. AI Hypercomputer là hạ tầng tích hợp dùng để train, tune và serve workload AI; nó kết hợp phần cứng (TPU, GPU), mạng và phần mềm thành một hệ thống. Đề thi nhắc TPU nhiều hơn hypercomputer, nhưng hãy biết hypercomputer là khái niệm bao trùm.",
            "bullets": [
              {
                "en": "TPU: custom-designed by Google for AI",
                "vi": "TPU: do Google thiết kế riêng cho AI"
              },
              {
                "en": "GPU: general accelerators for parallel compute",
                "vi": "GPU: bộ tăng tốc cho tính toán song song"
              },
              {
                "en": "AI Hypercomputer: integrated system to train, tune and serve AI workloads",
                "vi": "AI Hypercomputer: hệ thống tích hợp để train, tune và serve workload AI"
              },
              {
                "en": "Data centers and cloud computing: global, scalable foundation",
                "vi": "Data center và cloud computing: nền tảng toàn cầu, mở rộng được"
              }
            ]
          },
          {
            "heading": "Benefits for the business",
            "heading_vi": "Lợi ích cho doanh nghiệp",
            "body": "AI-optimized infrastructure delivers performance (faster training and inference), scalability (grow or shrink with demand without buying hardware), efficiency (purpose-built chips for AI) and reliability. Leaders benefit because they can adopt gen AI without building and managing their own compute, paying for what they use, and they can handle large-scale workloads efficiently.",
            "body_vi": "Hạ tầng tối ưu cho AI mang lại hiệu năng (train và inference nhanh hơn), khả năng mở rộng (tăng giảm theo nhu cầu mà không phải mua phần cứng), hiệu quả (chip chuyên dụng cho AI) và độ tin cậy. Lãnh đạo hưởng lợi vì có thể áp dụng gen AI mà không cần tự xây và vận hành hạ tầng tính toán, trả tiền theo mức dùng, và xử lý workload quy mô lớn hiệu quả."
          },
          {
            "heading": "AI on the edge: LiteRT and Gemini Nano",
            "heading_vi": "AI tại edge: LiteRT và Gemini Nano",
            "body": "Edge computing runs AI on devices or servers close to where the data is generated or needed (smartphones, IoT gateways, local servers) rather than in a large cloud. Benefits: real-time responsiveness, stronger data privacy, and less dependence on an internet connection.\n\nLiteRT (Lite Runtime) lets you run ML models efficiently on edge devices and phones; models can be converted to LiteRT, packaged with dependencies in containers and deployed to edge hardware, then managed and monitored using Agent Platform tools. Gemini Nano is Google's smallest model, designed to run on-device: data stays on the device (privacy), responses are fast with no round trip to the cloud (speed), and it works offline. Examples: Google Pixel features such as call notes and recorder summaries; Android developers can access it through the AI Edge SDK.",
            "body_vi": "Edge computing chạy AI trên thiết bị hoặc máy chủ gần nơi dữ liệu phát sinh hoặc cần dùng (smartphone, IoT gateway, máy chủ cục bộ) thay vì trên cloud lớn. Lợi ích: phản hồi thời gian thực, quyền riêng tư dữ liệu mạnh hơn, và ít phụ thuộc kết nối internet.\n\nLiteRT (Lite Runtime) giúp chạy model ML hiệu quả trên thiết bị edge và điện thoại; model có thể được chuyển sang LiteRT, đóng gói cùng dependency trong container và triển khai lên phần cứng edge, sau đó quản lý và giám sát bằng công cụ Agent Platform. Gemini Nano là model nhỏ gọn nhất của Google, thiết kế để chạy trên thiết bị: dữ liệu ở lại thiết bị (riêng tư), phản hồi nhanh vì không phải gửi lên cloud (tốc độ), và dùng được offline. Ví dụ: tính năng của Google Pixel như ghi chú cuộc gọi, tóm tắt bản ghi âm; developer Android truy cập qua AI Edge SDK."
          }
        ],
        "table": {
          "caption": "Infrastructure components at a glance",
          "caption_vi": "Tổng quan các thành phần hạ tầng",
          "headers": [
            "Component",
            "What it is",
            "Benefit"
          ],
          "headers_vi": [
            "Thành phần",
            "Là gì",
            "Lợi ích"
          ],
          "rows": [
            [
              "TPU",
              "Google custom-designed AI chip",
              "Efficient large-scale AI training and serving"
            ],
            [
              "GPU",
              "Accelerator for parallel compute",
              "Flexible high-performance AI workloads"
            ],
            [
              "AI Hypercomputer",
              "Integrated hardware, networking, software to train/tune/serve",
              "One optimized system for AI workloads"
            ],
            [
              "LiteRT",
              "Runtime for ML models on edge devices",
              "On-device efficiency"
            ],
            [
              "Gemini Nano",
              "Smallest Gemini model for on-device use",
              "Privacy, speed, offline access"
            ]
          ]
        },
        "keyPoints": [
          {
            "en": "Infrastructure is the foundation layer of the five-layer gen AI stack.",
            "vi": "Hạ tầng là tầng nền của chồng năm tầng gen AI."
          },
          {
            "en": "TPUs are Google's custom-designed AI chips; GPUs are also supported.",
            "vi": "TPU là chip AI do Google thiết kế riêng; GPU cũng được hỗ trợ."
          },
          {
            "en": "AI Hypercomputer integrates hardware, networking and software to train, tune and serve AI.",
            "vi": "AI Hypercomputer tích hợp phần cứng, mạng và phần mềm để train, tune và serve AI."
          },
          {
            "en": "Edge AI runs near the data: real time, privacy, less reliance on connectivity.",
            "vi": "Edge AI chạy gần dữ liệu: thời gian thực, riêng tư, ít phụ thuộc kết nối."
          },
          {
            "en": "LiteRT deploys models to edge devices; Gemini Nano is Google's on-device model.",
            "vi": "LiteRT triển khai model lên thiết bị edge; Gemini Nano là model on-device của Google."
          }
        ],
        "examTips": [
          {
            "en": "Offline use, on-device privacy and low latency point to Gemini Nano / edge AI.",
            "vi": "Dùng offline, riêng tư trên thiết bị và độ trễ thấp là dấu hiệu Gemini Nano / edge AI."
          },
          {
            "en": "'Custom-designed chips for AI' means TPUs, not GPUs.",
            "vi": "'Chip thiết kế riêng cho AI' là TPU, không phải GPU."
          },
          {
            "en": "Do not confuse LiteRT (runtime to deploy models on devices) with Gemini Nano (an actual model).",
            "vi": "Đừng nhầm LiteRT (runtime để triển khai model lên thiết bị) với Gemini Nano (một model thực sự)."
          }
        ],
        "terms": [
          {
            "term": "TPU",
            "en": "Tensor Processing Unit, Google's custom AI accelerator.",
            "vi": "Tensor Processing Unit, bộ tăng tốc AI do Google thiết kế."
          },
          {
            "term": "AI Hypercomputer",
            "en": "Integrated infrastructure for training, tuning and serving AI workloads.",
            "vi": "Hạ tầng tích hợp để huấn luyện, tinh chỉnh và phục vụ workload AI."
          },
          {
            "term": "GPU",
            "en": "Graphics Processing Unit used to accelerate AI workloads.",
            "vi": "Bộ xử lý đồ họa dùng để tăng tốc workload AI."
          },
          {
            "term": "Edge computing",
            "en": "Running AI near the data source on devices or local servers.",
            "vi": "Chạy AI gần nguồn dữ liệu trên thiết bị hoặc máy chủ cục bộ."
          },
          {
            "term": "LiteRT",
            "en": "Lite Runtime for running ML models efficiently on edge devices.",
            "vi": "Lite Runtime để chạy model ML hiệu quả trên thiết bị edge."
          },
          {
            "term": "Gemini Nano",
            "en": "Google's lightest model, designed to run on-device.",
            "vi": "Model gọn nhẹ nhất của Google, thiết kế chạy trên thiết bị."
          }
        ],
        "keywords": [
          "tpu",
          "gpu",
          "hypercomputer",
          "ai hypercomputer",
          "infrastructure",
          "data centers",
          "edge",
          "on-device",
          "gemini nano",
          "litert",
          "offline",
          "latency",
          "scalable",
          "train",
          "serve"
        ]
      },
      {
        "id": "d2-t3",
        "objective": "Describe how Google Cloud's prebuilt gen AI offerings enable AI-powered work (Gemini app and Gemini Advanced, Gemini Enterprise, Gemini for Google Workspace).",
        "title": "Prebuilt offerings for AI-powered work",
        "title_vi": "Các offering dựng sẵn cho công việc có AI",
        "sources": [
          "guide.txt",
          "exam-guide-official-checklist.md",
          "module4-v2.md",
          "bonus-reference-guide.md",
          "module3-v2.md"
        ],
        "sections": [
          {
            "heading": "Definition: ready-to-use AI applications",
            "heading_vi": "Định nghĩa: ứng dụng AI dùng ngay",
            "body": "Prebuilt offerings sit at the application layer: employees use them directly with little or no code. They improve productivity by drafting, summarizing, searching, analyzing and automating tasks. The key exam skill is matching the offering to the need.\n\nThe Gemini app is Google's gen AI chatbot for writing, summarizing, translating and generating images. Gemini Advanced adds more capable features and enterprise-grade protection. Gems are personalized AI assistants within Gemini, acting like reusable prompt templates and guided workflows for repeated tasks.",
            "body_vi": "Các offering dựng sẵn nằm ở tầng ứng dụng: nhân viên dùng trực tiếp với ít hoặc không cần code. Chúng nâng năng suất bằng cách soạn thảo, tóm tắt, tìm kiếm, phân tích và tự động hóa tác vụ. Kỹ năng thi quan trọng là ghép offering với nhu cầu.\n\nGemini app là chatbot gen AI của Google để viết, tóm tắt, dịch và tạo ảnh. Gemini Advanced bổ sung tính năng mạnh hơn và bảo vệ cấp doanh nghiệp. Gems là trợ lý AI cá nhân hóa trong Gemini, hoạt động như template prompt tái sử dụng và quy trình có hướng dẫn cho tác vụ lặp lại."
          },
          {
            "heading": "Gemini Enterprise, Gemini Notebook and Workspace",
            "heading_vi": "Gemini Enterprise, Gemini Notebook và Workspace",
            "body": "Gemini Enterprise provides custom search and conversational agents that access internal company data. The exam guide cites the Gemini Notebook API, multimodal search and custom agent capabilities as examples. Business value: employees find and use company knowledge in one place, and teams build agents for their own workflows.\n\nGemini Notebook (formerly NotebookLM) is a research assistant that works from sources the user uploads: it summarizes, answers questions, generates ideas and can create quizzes, and every answer is grounded in the uploaded sources. It does not browse the whole internet, and grounding is not exclusive to it.\n\nGemini for Google Workspace embeds AI in the apps people already use: drafting email in Gmail, generating images in Slides, summarizing meetings in Meet, and so on. Gemini for Google Cloud assists developers and operators: writing and debugging code, optimizing cloud applications, analyzing data in BigQuery and strengthening security.",
            "body_vi": "Gemini Enterprise cung cấp tìm kiếm tùy biến và agent hội thoại truy cập dữ liệu nội bộ của công ty. Exam guide nêu Gemini Notebook API, multimodal search và custom agent làm ví dụ. Giá trị kinh doanh: nhân viên tìm và dùng tri thức công ty ở một nơi, và các đội xây agent cho quy trình của riêng mình.\n\nGemini Notebook (trước đây là NotebookLM) là trợ lý nghiên cứu làm việc dựa trên nguồn do người dùng upload: tóm tắt, trả lời câu hỏi, tạo ý tưởng và có thể tạo quiz, và mọi câu trả lời đều bám vào nguồn đã upload. Nó không duyệt toàn bộ internet, và grounding không phải tính năng chỉ riêng nó có.\n\nGemini for Google Workspace nhúng AI vào các ứng dụng người dùng đã dùng sẵn: soạn email trong Gmail, tạo ảnh trong Slides, tóm tắt cuộc họp trong Meet, v.v. Gemini for Google Cloud hỗ trợ developer và vận hành: viết và debug code, tối ưu ứng dụng cloud, phân tích dữ liệu trong BigQuery và tăng cường bảo mật."
          },
          {
            "heading": "Business implication and pitfalls",
            "heading_vi": "Hệ quả kinh doanh và bẫy",
            "body": "Choose by need: general-purpose assistance (Gemini app), repeated personalized tasks (Gems), enterprise data search and agents (Gemini Enterprise), source-bound research (Gemini Notebook), AI inside daily productivity apps (Gemini for Workspace), and AI help for building and running on Google Cloud (Gemini for Google Cloud). A common trap is picking a build-your-own platform when a prebuilt offering already meets the need.",
            "body_vi": "Chọn theo nhu cầu: trợ giúp đa dụng (Gemini app), tác vụ lặp lại cá nhân hóa (Gems), tìm kiếm dữ liệu doanh nghiệp và agent (Gemini Enterprise), nghiên cứu bám nguồn (Gemini Notebook), AI trong ứng dụng năng suất hằng ngày (Gemini for Workspace), và AI hỗ trợ xây dựng, vận hành trên Google Cloud (Gemini for Google Cloud). Bẫy phổ biến là chọn nền tảng tự xây trong khi offering dựng sẵn đã đáp ứng nhu cầu."
          }
        ],
        "table": {
          "caption": "Which offering for which need",
          "caption_vi": "Offering nào cho nhu cầu nào",
          "headers": [
            "Need",
            "Offering"
          ],
          "headers_vi": [
            "Nhu cầu",
            "Offering"
          ],
          "rows": [
            [
              "General chatbot: write, summarize, translate, create images",
              "Gemini app (Gemini Advanced for more features and enterprise protection)"
            ],
            [
              "Reusable personalized assistant for a repeated task",
              "Gems"
            ],
            [
              "Search and agents over internal company data, multimodal search, custom agents",
              "Gemini Enterprise"
            ],
            [
              "Summarize and Q&A strictly from uploaded documents, quizzes",
              "Gemini Notebook"
            ],
            [
              "AI inside Gmail, Docs, Slides, Meet",
              "Gemini for Google Workspace"
            ],
            [
              "Help developers/operators write code, optimize cloud apps, analyze BigQuery data",
              "Gemini for Google Cloud"
            ]
          ]
        },
        "keyPoints": [
          {
            "en": "Prebuilt offerings are used directly by employees with little or no code.",
            "vi": "Offering dựng sẵn được nhân viên dùng trực tiếp với ít hoặc không cần code."
          },
          {
            "en": "Gems are personalized assistants that work like reusable prompt templates.",
            "vi": "Gems là trợ lý cá nhân hóa hoạt động như template prompt tái sử dụng."
          },
          {
            "en": "Gemini Enterprise: custom search and agents over internal data (Gemini Notebook API, multimodal search, custom agents).",
            "vi": "Gemini Enterprise: tìm kiếm tùy biến và agent trên dữ liệu nội bộ (Gemini Notebook API, multimodal search, custom agent)."
          },
          {
            "en": "Gemini Notebook answers are grounded only in user-uploaded sources.",
            "vi": "Câu trả lời của Gemini Notebook chỉ bám vào nguồn người dùng upload."
          },
          {
            "en": "Gemini for Workspace embeds AI in Gmail, Docs, Slides, Meet; Gemini for Google Cloud helps developers and operators.",
            "vi": "Gemini for Workspace nhúng AI vào Gmail, Docs, Slides, Meet; Gemini for Google Cloud hỗ trợ developer và vận hành."
          }
        ],
        "examTips": [
          {
            "en": "'Only the documents I uploaded' points to Gemini Notebook, not a web-searching chatbot.",
            "vi": "'Chỉ dựa trên tài liệu tôi upload' là Gemini Notebook, không phải chatbot tìm web."
          },
          {
            "en": "The statement 'grounding is only available in Gemini Notebook' is false.",
            "vi": "Phát biểu 'grounding chỉ có ở Gemini Notebook' là sai."
          },
          {
            "en": "Employees need AI in the tools they already use: choose Gemini for Google Workspace, not a custom build.",
            "vi": "Nhân viên cần AI trong công cụ đang dùng: chọn Gemini for Google Workspace, không phải tự xây."
          },
          {
            "en": "Gemini for Google Cloud is for developers/IT; Gemini for Workspace is for general productivity.",
            "vi": "Gemini for Google Cloud dành cho developer/IT; Gemini for Workspace cho năng suất chung."
          }
        ],
        "terms": [
          {
            "term": "Gemini app",
            "en": "Google's gen AI chatbot for writing, summarizing, translating and image creation.",
            "vi": "Chatbot gen AI của Google để viết, tóm tắt, dịch, tạo ảnh."
          },
          {
            "term": "Gems",
            "en": "Personalized AI assistants in Gemini, like reusable prompt templates.",
            "vi": "Trợ lý AI cá nhân hóa trong Gemini, như template prompt tái sử dụng."
          },
          {
            "term": "Gemini Enterprise",
            "en": "Custom search and conversational agents over internal data.",
            "vi": "Tìm kiếm tùy biến và agent hội thoại trên dữ liệu nội bộ."
          },
          {
            "term": "Gemini Notebook",
            "en": "Research assistant grounded in user-uploaded sources (formerly NotebookLM).",
            "vi": "Trợ lý nghiên cứu bám nguồn người dùng upload (trước đây NotebookLM)."
          },
          {
            "term": "Gemini for Google Workspace",
            "en": "Gen AI built into Gmail, Docs, Slides, Meet and other Workspace apps.",
            "vi": "Gen AI tích hợp trong Gmail, Docs, Slides, Meet và các app Workspace."
          },
          {
            "term": "Gemini for Google Cloud",
            "en": "AI assistance for developers and operators on Google Cloud.",
            "vi": "Trợ lý AI cho developer và vận hành trên Google Cloud."
          },
          {
            "term": "Multimodal search",
            "en": "Searching across different data types such as text, images, audio, video.",
            "vi": "Tìm kiếm trên nhiều loại dữ liệu như văn bản, ảnh, âm thanh, video."
          }
        ],
        "keywords": [
          "gemini app",
          "gemini advanced",
          "gems",
          "gemini enterprise",
          "gemini notebook",
          "notebooklm",
          "workspace",
          "gmail",
          "google workspace",
          "multimodal search",
          "custom agents",
          "summarize",
          "uploaded",
          "gemini for google cloud",
          "bigquery"
        ]
      },
      {
        "id": "d2-t4",
        "objective": "Describe how Google Cloud's gen AI offerings improve the customer experience (external search offerings; Customer Engagement Suite).",
        "title": "Offerings that improve customer experience",
        "title_vi": "Các offering cải thiện trải nghiệm khách hàng",
        "sources": [
          "guide.txt",
          "exam-guide-official-checklist.md",
          "bonus-reference-guide.md",
          "module4-v2.md",
          "module5-v2.md"
        ],
        "sections": [
          {
            "heading": "External search offerings",
            "heading_vi": "Các offering tìm kiếm bên ngoài",
            "body": "Customers expect fast, relevant answers. Google Cloud offers external search so that an organization's customers (or the public) can find information. Agent Search on Gemini Enterprise Agent Platform is an enterprise search and recommendation solution with pre-built RAG: it lets you build search over your own data without assembling the infrastructure yourself, and results can be grounded in that data. Google Search can be used to bring up-to-date information from the web, for example to ground answers and compensate for a model's knowledge cutoff.\n\nBusiness value: better findability, more relevant recommendations, fewer hallucinations through grounding, and quicker time to market than building search from scratch.",
            "body_vi": "Khách hàng mong đợi câu trả lời nhanh và liên quan. Google Cloud cung cấp tìm kiếm bên ngoài để khách hàng (hoặc công chúng) của tổ chức tìm được thông tin. Agent Search trên Gemini Enterprise Agent Platform là giải pháp tìm kiếm và gợi ý cho doanh nghiệp với RAG dựng sẵn: cho phép xây tìm kiếm trên dữ liệu của bạn mà không phải tự dựng hạ tầng, và kết quả có thể được grounding vào dữ liệu đó. Google Search có thể dùng để lấy thông tin cập nhật từ web, ví dụ để grounding câu trả lời và bù knowledge cutoff của model.\n\nGiá trị kinh doanh: dễ tìm hơn, gợi ý liên quan hơn, ít hallucination nhờ grounding, và đưa ra thị trường nhanh hơn so với tự xây tìm kiếm từ đầu."
          },
          {
            "heading": "Customer Engagement Suite",
            "heading_vi": "Customer Engagement Suite",
            "body": "The Customer Engagement Suite (called Gemini Enterprise for Customer Experience in current naming) groups tools for customer service. Conversational Agents (CX Agent Studio) builds chatbots and agents that serve customers by voice or text. Agent Assist supports human contact-center agents in real time while they are talking to a customer, for example suggesting answers. Conversational Insights (Customer Experience Insights) analyzes all customer communications to extract insights such as topics and sentiment. Google Cloud Contact Center as a Service (CCaaS) is the cloud-native, enterprise-grade contact center solution on which these tools are built.",
            "body_vi": "Customer Engagement Suite (trong cách gọi hiện tại là Gemini Enterprise for Customer Experience) gom các công cụ cho dịch vụ khách hàng. Conversational Agents (CX Agent Studio) xây chatbot và agent phục vụ khách hàng bằng giọng nói hoặc văn bản. Agent Assist hỗ trợ nhân viên contact center đang trực tiếp nói chuyện với khách theo thời gian thực, ví dụ gợi ý câu trả lời. Conversational Insights (Customer Experience Insights) phân tích toàn bộ giao tiếp với khách hàng để rút ra insight như chủ đề và cảm xúc. Google Cloud Contact Center as a Service (CCaaS) là giải pháp contact center cloud-native cấp doanh nghiệp mà các công cụ trên được xây dựng trên đó."
          },
          {
            "heading": "Business implication and pitfalls",
            "heading_vi": "Hệ quả kinh doanh và bẫy",
            "body": "Benefits: 24/7 self-service, shorter handling time, consistent answers, better agent productivity and data-driven improvement of service. The most common trap is mixing Conversational Agents (talks to the customer instead of a human) with Agent Assist (helps the human agent) and Conversational Insights (analyzes conversations afterwards, not live).",
            "body_vi": "Lợi ích: tự phục vụ 24/7, rút ngắn thời gian xử lý, câu trả lời nhất quán, nhân viên năng suất hơn và cải thiện dịch vụ dựa trên dữ liệu. Bẫy phổ biến nhất là lẫn Conversational Agents (nói chuyện với khách thay người) với Agent Assist (giúp nhân viên) và Conversational Insights (phân tích hội thoại, không phải trực tiếp)."
          }
        ],
        "table": {
          "caption": "Customer experience products",
          "caption_vi": "Sản phẩm cho trải nghiệm khách hàng",
          "headers": [
            "Product",
            "Who it serves",
            "What it does"
          ],
          "headers_vi": [
            "Sản phẩm",
            "Phục vụ ai",
            "Làm gì"
          ],
          "rows": [
            [
              "Agent Search (Agent Platform)",
              "Customers / employees searching",
              "Enterprise search and recommendations with pre-built RAG"
            ],
            [
              "Google Search",
              "Apps needing fresh web info",
              "Grounds answers in current web information"
            ],
            [
              "Conversational Agents / CX Agent Studio",
              "Customers",
              "Chatbots and agents for customer interactions"
            ],
            [
              "Agent Assist",
              "Human contact-center agents",
              "Real-time help during live conversations"
            ],
            [
              "Conversational Insights",
              "Managers / analysts",
              "Analyzes all customer communications for insights"
            ],
            [
              "CCaaS",
              "Contact center operations",
              "Cloud-native enterprise contact center platform"
            ]
          ]
        },
        "keyPoints": [
          {
            "en": "Agent Search provides enterprise search and recommendations with pre-built RAG.",
            "vi": "Agent Search cung cấp tìm kiếm và gợi ý doanh nghiệp với RAG dựng sẵn."
          },
          {
            "en": "Conversational Agents (CX Agent Studio) build customer-facing chatbots and agents.",
            "vi": "Conversational Agents (CX Agent Studio) xây chatbot và agent đối diện khách hàng."
          },
          {
            "en": "Agent Assist helps human agents during live conversations.",
            "vi": "Agent Assist giúp nhân viên trong lúc hội thoại trực tiếp."
          },
          {
            "en": "Conversational Insights analyzes customer communications to extract insights.",
            "vi": "Conversational Insights phân tích giao tiếp khách hàng để rút insight."
          },
          {
            "en": "CCaaS is the cloud-native contact center foundation for these tools.",
            "vi": "CCaaS là nền tảng contact center cloud-native cho các công cụ này."
          }
        ],
        "examTips": [
          {
            "en": "'Assisting a live human agent' = Agent Assist; 'automating the conversation' = Conversational Agents.",
            "vi": "'Hỗ trợ nhân viên đang trực tiếp' = Agent Assist; 'tự động hóa hội thoại' = Conversational Agents."
          },
          {
            "en": "'Analyze all calls/chats for sentiment and trends' = Conversational Insights.",
            "vi": "'Phân tích mọi cuộc gọi/chat để lấy cảm xúc và xu hướng' = Conversational Insights."
          },
          {
            "en": "Search over company data with no infrastructure to build = Agent Search.",
            "vi": "Tìm kiếm trên dữ liệu công ty mà không cần dựng hạ tầng = Agent Search."
          }
        ],
        "terms": [
          {
            "term": "Agent Search",
            "en": "Search and recommendation solution on Agent Platform with pre-built RAG.",
            "vi": "Giải pháp tìm kiếm và gợi ý trên Agent Platform với RAG dựng sẵn."
          },
          {
            "term": "Conversational Agents",
            "en": "Customer-facing chatbots/agents built with CX Agent Studio.",
            "vi": "Chatbot/agent đối diện khách hàng xây bằng CX Agent Studio."
          },
          {
            "term": "Agent Assist",
            "en": "Real-time assistance for human contact-center agents.",
            "vi": "Hỗ trợ thời gian thực cho nhân viên contact center."
          },
          {
            "term": "Conversational Insights",
            "en": "Analysis of customer communications to extract insights.",
            "vi": "Phân tích giao tiếp khách hàng để rút insight."
          },
          {
            "term": "CCaaS",
            "en": "Contact Center as a Service, cloud-native contact center solution.",
            "vi": "Contact Center as a Service, giải pháp contact center cloud-native."
          },
          {
            "term": "Customer Engagement Suite",
            "en": "Group of Google Cloud tools for customer service and contact centers.",
            "vi": "Nhóm công cụ Google Cloud cho dịch vụ khách hàng và contact center."
          }
        ],
        "keywords": [
          "agent search",
          "customer engagement suite",
          "conversational agents",
          "agent assist",
          "conversational insights",
          "ccaas",
          "contact center",
          "customer service",
          "chatbot",
          "google search",
          "customer experience",
          "sentiment",
          "recommendations",
          "self-service",
          "live agent"
        ]
      },
      {
        "id": "d2-t5",
        "objective": "Describe how Google Cloud empowers developers to build with AI (Agent Platform: Model Garden, Agent Search, AutoML; RAG offerings; building custom agents).",
        "title": "Building with AI on Agent Platform",
        "title_vi": "Xây dựng với AI trên Agent Platform",
        "sources": [
          "guide.txt",
          "exam-guide-official-checklist.md",
          "module3-v2.md",
          "module5-v2.md",
          "bonus-reference-guide.md"
        ],
        "sections": [
          {
            "heading": "Agent Platform: the development platform",
            "heading_vi": "Agent Platform: nền tảng phát triển",
            "body": "Gemini Enterprise Agent Platform (Agent Platform, formerly Vertex AI) is Google Cloud's unified platform for building, tuning, deploying and managing models and agents. It covers model selection, evaluation, deployment and monitoring in one place.\n\nModel Garden is the catalog where you discover and choose models: Google's first-party models, third-party models and open-source models. Model Builder is for training or using your own models: custom training with ML frameworks (PyTorch, TensorFlow and others) gives full control over algorithms and hyperparameters, while AutoML builds models with little ML expertise by automating model creation. MLOps tools on Agent Platform (for example Feature Store, Pipelines, Model Registry, Model Monitoring) help teams collaborate, monitor and continuously improve models.",
            "body_vi": "Gemini Enterprise Agent Platform (Agent Platform, trước đây là Vertex AI) là nền tảng hợp nhất của Google Cloud để xây dựng, tinh chỉnh, triển khai và quản lý model và agent. Nó bao gồm chọn model, đánh giá, triển khai và giám sát ở một nơi.\n\nModel Garden là danh mục để khám phá và chọn model: model first-party của Google, third-party và open-source. Model Builder dùng để train hoặc dùng model của riêng bạn: custom training với ML framework (PyTorch, TensorFlow...) cho toàn quyền kiểm soát thuật toán và hyperparameter, còn AutoML xây model với ít chuyên môn ML bằng cách tự động hóa việc tạo model. Công cụ MLOps trên Agent Platform (ví dụ Feature Store, Pipelines, Model Registry, Model Monitoring) giúp đội cộng tác, giám sát và cải thiện model liên tục.",
            "bullets": [
              {
                "en": "Model Garden: discover and choose models",
                "vi": "Model Garden: khám phá và chọn model"
              },
              {
                "en": "Model Builder: custom training (full control) or AutoML (little ML expertise)",
                "vi": "Model Builder: custom training (toàn quyền) hoặc AutoML (ít chuyên môn ML)"
              },
              {
                "en": "MLOps tools: collaborate, monitor, improve models",
                "vi": "Công cụ MLOps: cộng tác, giám sát, cải thiện model"
              }
            ]
          },
          {
            "heading": "Google AI Studio vs Agent Studio, and accessing Gemini API",
            "heading_vi": "Google AI Studio so với Agent Studio, và truy cập Gemini API",
            "body": "Google AI Studio is a free, web-based environment for rapid prototyping with the Gemini API; you can get an API key quickly and test prompts and parameters (for example temperature). Its audience is developers, students and researchers. Agent Studio, on Google Cloud, is for building and deploying production-grade, large-scale AI applications with security and organizational control (IAM) and advanced tuning. Best practice: prototype in Google AI Studio, then move to Agent Studio when you need production, strict governance or model customization.\n\nTo access the Gemini API, developers can use Google Cloud developer tools such as Cloud Run functions and Cloud Run, or low-code/no-code tools such as Apps Script and AppSheet.",
            "body_vi": "Google AI Studio là môi trường web miễn phí để prototype nhanh với Gemini API; bạn lấy API key nhanh và thử prompt cùng tham số (ví dụ temperature). Đối tượng là developer, sinh viên và nhà nghiên cứu. Agent Studio, trên Google Cloud, dùng để xây và triển khai ứng dụng AI cấp production, quy mô lớn với bảo mật và kiểm soát tổ chức (IAM) cùng tinh chỉnh nâng cao. Thực hành tốt: prototype ở Google AI Studio, rồi chuyển sang Agent Studio khi cần production, governance chặt hoặc tùy biến model.\n\nĐể truy cập Gemini API, developer có thể dùng công cụ phát triển Google Cloud như Cloud Run functions và Cloud Run, hoặc công cụ low-code/no-code như Apps Script và AppSheet."
          },
          {
            "heading": "RAG offerings and custom agents",
            "heading_vi": "Các offering RAG và custom agent",
            "body": "RAG (retrieval-augmented generation) grounds model answers in your own up-to-date data without retraining. Data can be first-party enterprise data, third-party data or world data from Google Search. Google Cloud offers: pre-built RAG with Agent Search (no infrastructure to build), RAG APIs (embed RAG capabilities into custom applications), and grounding with Google Search (use Google's index for current information).\n\nAgent Platform is also where you build custom agents: choose a model from Model Garden, give it tools and data, and deploy and monitor it with managed services. Choose pre-built RAG for speed, RAG APIs for flexibility in custom apps.",
            "body_vi": "RAG (retrieval-augmented generation) grounding câu trả lời của model vào dữ liệu cập nhật của bạn mà không cần huấn luyện lại. Dữ liệu có thể là dữ liệu doanh nghiệp first-party, dữ liệu third-party hoặc dữ liệu thế giới từ Google Search. Google Cloud cung cấp: RAG dựng sẵn với Agent Search (không cần dựng hạ tầng), RAG APIs (nhúng khả năng RAG vào ứng dụng tùy biến), và grounding với Google Search (dùng chỉ mục của Google cho thông tin hiện tại).\n\nAgent Platform cũng là nơi xây custom agent: chọn model từ Model Garden, cấp tool và dữ liệu, rồi triển khai và giám sát bằng dịch vụ được quản lý. Chọn RAG dựng sẵn để nhanh, RAG APIs để linh hoạt trong ứng dụng tùy biến."
          }
        ],
        "table": {
          "caption": "Which tool for which developer need",
          "caption_vi": "Công cụ nào cho nhu cầu developer nào",
          "headers": [
            "Need",
            "Choose"
          ],
          "headers_vi": [
            "Nhu cầu",
            "Chọn"
          ],
          "rows": [
            [
              "Browse and select first-party, third-party, open-source models",
              "Model Garden"
            ],
            [
              "Build a model with little ML expertise",
              "Agent Platform AutoML (Model Builder)"
            ],
            [
              "Full control over algorithms, frameworks, hyperparameters",
              "Custom training (Model Builder)"
            ],
            [
              "Quick free prototype with Gemini API and API key",
              "Google AI Studio"
            ],
            [
              "Production-grade, governed, scaled AI apps",
              "Agent Studio"
            ],
            [
              "RAG with no infrastructure",
              "Pre-built RAG with Agent Search"
            ],
            [
              "RAG inside a custom application",
              "RAG APIs"
            ],
            [
              "Call Gemini API without writing much code",
              "Apps Script or AppSheet (code: Cloud Run functions, Cloud Run)"
            ]
          ]
        },
        "keyPoints": [
          {
            "en": "Agent Platform (formerly Vertex AI) is the unified platform to build, tune, deploy and monitor models and agents.",
            "vi": "Agent Platform (trước đây Vertex AI) là nền tảng hợp nhất để xây, tinh chỉnh, triển khai và giám sát model và agent."
          },
          {
            "en": "Model Garden = choose models; Model Builder = train your own (custom or AutoML).",
            "vi": "Model Garden = chọn model; Model Builder = train model của bạn (custom hoặc AutoML)."
          },
          {
            "en": "Google AI Studio is for quick prototyping; Agent Studio is for production with governance.",
            "vi": "Google AI Studio để prototype nhanh; Agent Studio cho production có governance."
          },
          {
            "en": "Gemini API is reachable via Cloud Run functions, Cloud Run, Apps Script and AppSheet.",
            "vi": "Gemini API truy cập được qua Cloud Run functions, Cloud Run, Apps Script và AppSheet."
          },
          {
            "en": "RAG options: pre-built RAG with Agent Search, RAG APIs, grounding with Google Search.",
            "vi": "Lựa chọn RAG: RAG dựng sẵn với Agent Search, RAG APIs, grounding với Google Search."
          }
        ],
        "examTips": [
          {
            "en": "Limited ML expertise plus own data points to AutoML; need for full control points to custom training.",
            "vi": "Ít chuyên môn ML cùng dữ liệu riêng là AutoML; cần toàn quyền kiểm soát là custom training."
          },
          {
            "en": "Prototype quickly and cheaply = Google AI Studio; enterprise IAM and production = Agent Studio.",
            "vi": "Prototype nhanh và rẻ = Google AI Studio; IAM doanh nghiệp và production = Agent Studio."
          },
          {
            "en": "Up-to-date internal answers without retraining = RAG/grounding, not fine-tuning.",
            "vi": "Trả lời cập nhật từ dữ liệu nội bộ mà không retrain = RAG/grounding, không phải fine-tuning."
          },
          {
            "en": "Model Garden is where you find models; it is not the platform that deploys or trains them.",
            "vi": "Model Garden là nơi tìm model; không phải nền tảng triển khai hay train."
          }
        ],
        "terms": [
          {
            "term": "Agent Platform",
            "en": "Google Cloud's unified platform for building, tuning, deploying models and agents (formerly Vertex AI).",
            "vi": "Nền tảng hợp nhất của Google Cloud để xây, tinh chỉnh, triển khai model và agent (trước đây Vertex AI)."
          },
          {
            "term": "Model Garden",
            "en": "Catalog of first-party, third-party and open-source models.",
            "vi": "Danh mục model first-party, third-party và open-source."
          },
          {
            "term": "Model Builder",
            "en": "Tools to train or use your own models, via custom training or AutoML.",
            "vi": "Công cụ để train hoặc dùng model riêng, qua custom training hoặc AutoML."
          },
          {
            "term": "AutoML",
            "en": "Automated model creation requiring little ML expertise.",
            "vi": "Tạo model tự động, ít cần chuyên môn ML."
          },
          {
            "term": "Google AI Studio",
            "en": "Free web tool for rapid Gemini prototyping.",
            "vi": "Công cụ web miễn phí để prototype Gemini nhanh."
          },
          {
            "term": "Agent Studio",
            "en": "Environment for production-grade AI apps with governance.",
            "vi": "Môi trường cho ứng dụng AI cấp production có governance."
          },
          {
            "term": "RAG APIs",
            "en": "APIs to embed retrieval-augmented generation into custom apps.",
            "vi": "API để nhúng retrieval-augmented generation vào ứng dụng tùy biến."
          },
          {
            "term": "MLOps",
            "en": "Practices and tools to monitor and improve models over time.",
            "vi": "Thực hành và công cụ để giám sát và cải thiện model theo thời gian."
          }
        ],
        "keywords": [
          "model garden",
          "agent platform",
          "vertex ai",
          "automl",
          "custom training",
          "model builder",
          "mlops",
          "google ai studio",
          "agent studio",
          "gemini api",
          "cloud run",
          "apps script",
          "appsheet",
          "rag",
          "rag apis"
        ]
      },
      {
        "id": "d2-t6",
        "objective": "Define the purpose and types of tooling for gen AI agents (extensions, functions, data stores, plugins; Google Cloud services and pre-built AI APIs; Agent Studio vs Google AI Studio).",
        "title": "Gen AI agents and tooling",
        "title_vi": "Gen AI agent và công cụ (tooling)",
        "sources": [
          "guide.txt",
          "exam-guide-official-checklist.md",
          "module5-v2.md",
          "bonus-reference-guide.md"
        ],
        "sections": [
          {
            "heading": "What an agent is and how it works",
            "heading_vi": "Agent là gì và hoạt động ra sao",
            "body": "A gen AI agent is software that learns the best way to reach a goal based on its input and the tools available to it, with a focus on autonomous action. An agent has three core components: a model (the reasoning engine), tools (to interact with the external environment) and a reasoning loop (plan, act, observe, repeat until the goal is met).\n\nTypes: deterministic agents follow predefined paths (predictable, good for compliance-bound steps); generative agents are defined in natural language and driven by an LLM (flexible but with hallucination risk); hybrid agents combine both and are often the most practical.",
            "body_vi": "Gen AI agent là phần mềm học cách tốt nhất để đạt mục tiêu dựa trên đầu vào và các tool sẵn có, tập trung vào hành động tự chủ. Agent có ba thành phần cốt lõi: model (động cơ suy luận), tool (để tương tác với môi trường bên ngoài) và reasoning loop (lập kế hoạch, hành động, quan sát, lặp lại đến khi đạt mục tiêu).\n\nCác loại: agent deterministic đi theo đường định sẵn (dự đoán được, hợp với bước bắt buộc tuân thủ); agent generative được định nghĩa bằng ngôn ngữ tự nhiên và chạy bởi LLM (linh hoạt nhưng có rủi ro hallucination); agent hybrid kết hợp cả hai và thường thực dụng nhất."
          },
          {
            "heading": "Tool types",
            "heading_vi": "Các loại tool",
            "body": "Agents use tools to act on the outside world. Four types appear on the exam: Extensions connect to external services through APIs; Functions are specific actions or tasks the agent can call (executed on the client side); Data stores give access to information, such as enterprise documents used for RAG; Plugins add skills or integrations. Tools are what turn a model that only produces text into an agent that completes tasks.",
            "body_vi": "Agent dùng tool để tác động lên thế giới bên ngoài. Có bốn loại xuất hiện trong đề: Extensions kết nối dịch vụ bên ngoài qua API; Functions là hành động hoặc tác vụ cụ thể agent có thể gọi (thực thi phía client); Data stores cấp quyền truy cập thông tin, ví dụ tài liệu doanh nghiệp dùng cho RAG; Plugins bổ sung kỹ năng hoặc tích hợp. Tool biến một model chỉ sinh văn bản thành agent hoàn thành được tác vụ.",
            "bullets": [
              {
                "en": "Extensions: connect to external services via APIs",
                "vi": "Extensions: kết nối dịch vụ ngoài qua API"
              },
              {
                "en": "Functions: specific actions/tasks",
                "vi": "Functions: hành động/tác vụ cụ thể"
              },
              {
                "en": "Data stores: access to information (RAG)",
                "vi": "Data stores: truy cập thông tin (RAG)"
              },
              {
                "en": "Plugins: add skills or integrations",
                "vi": "Plugins: thêm kỹ năng hoặc tích hợp"
              }
            ]
          },
          {
            "heading": "Google Cloud services and pre-built AI APIs",
            "heading_vi": "Dịch vụ Google Cloud và AI API dựng sẵn",
            "body": "Agents can be built on Google Cloud services: Cloud Storage and databases (data), Cloud Functions and Cloud Run (run code and expose actions), Agent Platform (models and agent building), and the Google Cloud API Library (browse and enable APIs). Pre-built AI APIs give ready-made capabilities without training models, and are often tested as 'choose the right API' (see table).\n\nAlso know when to use Google AI Studio (free, fast prototyping with the Gemini API) versus Agent Studio (production-grade, governed, enterprise).",
            "body_vi": "Agent có thể được xây trên các dịch vụ Google Cloud: Cloud Storage và database (dữ liệu), Cloud Functions và Cloud Run (chạy code và cung cấp hành động), Agent Platform (model và xây agent), và Google Cloud API Library (duyệt và bật API). AI API dựng sẵn cung cấp năng lực có sẵn mà không phải train model, và thường được hỏi dạng 'chọn API phù hợp' (xem bảng).\n\nCũng cần biết khi nào dùng Google AI Studio (miễn phí, prototype nhanh với Gemini API) so với Agent Studio (cấp production, có governance, doanh nghiệp)."
          }
        ],
        "table": {
          "caption": "Pre-built AI APIs: which one for which need",
          "caption_vi": "AI API dựng sẵn: chọn API nào",
          "headers": [
            "API",
            "Use it to",
            "Cue"
          ],
          "headers_vi": [
            "API",
            "Dùng để",
            "Dấu hiệu"
          ],
          "rows": [
            [
              "Speech-to-Text",
              "Convert speech to text; transcribe audio/video",
              "transcribe"
            ],
            [
              "Text-to-Speech",
              "Convert text to natural-sounding speech; voice interfaces",
              "voice UI"
            ],
            [
              "Translation API",
              "Translate text, documents, websites, audio/video",
              "translate"
            ],
            [
              "Document Translation",
              "Translate formatted documents while keeping layout",
              "keep layout"
            ],
            [
              "Document AI",
              "Extract data from many document formats, automate document processing, summarize",
              "invoices, forms"
            ],
            [
              "Cloud Vision",
              "Analyze images: tag objects/text, detect faces/landmarks, moderate content, visual search",
              "images"
            ],
            [
              "Cloud Video Intelligence",
              "Analyze video and extract information; content discovery, media analysis",
              "video"
            ],
            [
              "Natural Language",
              "Insights from unstructured text: sentiment, classification, entities",
              "sentiment, entity"
            ]
          ]
        },
        "keyPoints": [
          {
            "en": "An agent = model + tools + reasoning loop, acting autonomously toward a goal.",
            "vi": "Agent = model + tool + reasoning loop, hành động tự chủ hướng tới mục tiêu."
          },
          {
            "en": "Agent types: deterministic (predefined), generative (LLM-driven), hybrid (both).",
            "vi": "Các loại agent: deterministic (định sẵn), generative (LLM), hybrid (cả hai)."
          },
          {
            "en": "Tool types: extensions, functions, data stores, plugins.",
            "vi": "Các loại tool: extensions, functions, data stores, plugins."
          },
          {
            "en": "Pre-built AI APIs provide ready capabilities (speech, translation, documents, vision, video, language) without training.",
            "vi": "AI API dựng sẵn cung cấp năng lực có sẵn (giọng nói, dịch, tài liệu, thị giác, video, ngôn ngữ) mà không cần train."
          },
          {
            "en": "Cloud Run, Cloud Functions, Cloud Storage, databases and API Library support agent tooling.",
            "vi": "Cloud Run, Cloud Functions, Cloud Storage, database và API Library hỗ trợ tooling cho agent."
          }
        ],
        "examTips": [
          {
            "en": "Transcribe calls = Speech-to-Text; keep layout when translating = Document Translation; sentiment in reviews = Natural Language.",
            "vi": "Phiên âm cuộc gọi = Speech-to-Text; dịch giữ layout = Document Translation; cảm xúc trong review = Natural Language."
          },
          {
            "en": "Invoices and forms extraction = Document AI, not Vision.",
            "vi": "Trích xuất hóa đơn, form = Document AI, không phải Vision."
          },
          {
            "en": "A tool-less LLM only generates text; tools are what let it take actions in the environment.",
            "vi": "LLM không có tool chỉ sinh văn bản; tool mới cho phép thực hiện hành động trong môi trường."
          },
          {
            "en": "Strictly ordered compliance steps favor deterministic or hybrid agents.",
            "vi": "Các bước tuân thủ theo thứ tự nghiêm ngặt phù hợp agent deterministic hoặc hybrid."
          }
        ],
        "terms": [
          {
            "term": "Agent",
            "en": "Software that pursues a goal using a model, tools and a reasoning loop.",
            "vi": "Phần mềm theo đuổi mục tiêu bằng model, tool và reasoning loop."
          },
          {
            "term": "Reasoning loop",
            "en": "Cycle of planning, acting and observing until the task is done.",
            "vi": "Chu trình lập kế hoạch, hành động và quan sát đến khi xong tác vụ."
          },
          {
            "term": "Extensions",
            "en": "Tools that connect agents to external services through APIs.",
            "vi": "Tool kết nối agent với dịch vụ bên ngoài qua API."
          },
          {
            "term": "Functions",
            "en": "Specific actions or tasks an agent can call.",
            "vi": "Hành động hoặc tác vụ cụ thể agent có thể gọi."
          },
          {
            "term": "Data stores",
            "en": "Tools giving agents access to information.",
            "vi": "Tool cho agent truy cập thông tin."
          },
          {
            "term": "Plugins",
            "en": "Tools that add skills or integrations.",
            "vi": "Tool bổ sung kỹ năng hoặc tích hợp."
          },
          {
            "term": "Document AI",
            "en": "API that extracts data from documents and automates processing.",
            "vi": "API trích xuất dữ liệu từ tài liệu và tự động hóa xử lý."
          },
          {
            "term": "Google Cloud API Library",
            "en": "Catalog to find and enable Google Cloud APIs.",
            "vi": "Danh mục để tìm và bật API Google Cloud."
          }
        ],
        "keywords": [
          "agent",
          "tools",
          "extensions",
          "functions",
          "data stores",
          "plugins",
          "deterministic",
          "generative",
          "hybrid",
          "reasoning loop",
          "speech-to-text",
          "text-to-speech",
          "translation api",
          "document translation",
          "document ai"
        ]
      }
    ]
  },
  {
    "domain": 3,
    "title": "Techniques to improve gen AI model output",
    "title_vi": "Kỹ thuật cải thiện đầu ra của mô hình gen AI",
    "weight": 20,
    "overview": "Foundation models are powerful but imperfect: they hallucinate, have a knowledge cutoff, inherit bias and struggle with edge cases. This domain moves from the big picture to the detail. First you learn the limitations, then the Google-recommended practices that overcome them (grounding, RAG, prompt engineering, fine-tuning, human in the loop) and how to monitor and manage models over time. Then you go deeper into prompt engineering techniques (zero-shot to few-shot, role, chaining, chain-of-thought, ReAct, metaprompting), grounding and RAG with Google Cloud offerings, and the sampling parameters (temperature, top-p, tokens, safety settings) that tune model behaviour. About 20% of the exam.",
    "overview_vi": "Foundation model mạnh nhưng không hoàn hảo: chúng hallucinate, có knowledge cutoff, kế thừa bias và gặp khó với edge case. Domain này đi từ bức tranh lớn đến chi tiết. Trước hết bạn học các giới hạn, rồi các thực hành Google khuyến nghị để khắc phục (grounding, RAG, prompt engineering, fine-tuning, human in the loop) và cách giám sát, quản lý model theo thời gian. Sau đó đi sâu vào kỹ thuật prompt engineering (zero-shot đến few-shot, role, chaining, chain-of-thought, ReAct, metaprompting), grounding và RAG với các offering của Google Cloud, và các tham số sampling (temperature, top-p, token, safety settings) điều chỉnh hành vi model. Chiếm khoảng 20% đề thi.",
    "topics": [
      {
        "id": "d3-t1",
        "objective": "3.1 Describe how to proactively overcome foundation model limitations: identify common limitations of foundation models (data dependency, knowledge cutoff, bias, fairness, hallucinations, edge cases).",
        "title": "Limitations of foundation models",
        "title_vi": "Các giới hạn của foundation model",
        "sources": [
          "exam-guide-official-checklist.md",
          "module2-v2.md",
          "module4-v2.md",
          "official/guide.txt",
          "official/study.txt"
        ],
        "sections": [
          {
            "heading": "Why foundation models fall short",
            "heading_vi": "Vì sao foundation model có giới hạn",
            "body": "A foundation model is a large model pre-trained on huge, broad datasets and then adapted to many tasks. It does not 'know' facts the way a database does: it predicts likely next tokens from patterns learned in training. That is powerful for language and creativity, but it creates predictable weaknesses that a gen AI leader must recognise before choosing a remedy.\n\nThe exam lists six: data dependency, knowledge cutoff, bias, fairness, hallucinations and edge cases. Learn each one as a cause-and-symptom pair, because later questions ask which technique fixes which limitation.",
            "body_vi": "Foundation model là mô hình lớn được tiền huấn luyện trên tập dữ liệu rất rộng rồi thích ứng cho nhiều tác vụ. Nó không 'biết' sự thật như một cơ sở dữ liệu: nó dự đoán token tiếp theo có khả năng cao dựa trên các mẫu học được. Điều này mạnh cho ngôn ngữ và sáng tạo nhưng tạo ra những điểm yếu có thể đoán trước, mà người lãnh đạo gen AI phải nhận ra trước khi chọn cách khắc phục.\n\nĐề thi liệt kê sáu giới hạn: data dependency, knowledge cutoff, bias, fairness, hallucination và edge case. Hãy học mỗi giới hạn như một cặp nguyên nhân - triệu chứng, vì các câu sau sẽ hỏi kỹ thuật nào khắc phục giới hạn nào."
          },
          {
            "heading": "The six limitations in detail",
            "heading_vi": "Sáu giới hạn chi tiết",
            "body": "Data dependency: output quality depends on the quality, quantity and coverage of the training data. Poor, narrow or unrepresentative data gives poor results. Knowledge cutoff: the model only knows what was in its training data up to a date, so it cannot answer about recent events or your private, newly changed company data.\n\nBias: training data reflects human and historical prejudices, and the model can reproduce or amplify them. Fairness: the related concern that outputs should not systematically disadvantage groups of people. Hallucination: the model produces fluent, confident text that is false, nonsensical or not supported by any source. Edge cases: unusual, rare or ambiguous inputs outside the typical training distribution where the model behaves unpredictably.",
            "body_vi": "Data dependency: chất lượng đầu ra phụ thuộc vào chất lượng, số lượng và độ phủ của dữ liệu huấn luyện. Dữ liệu kém, hẹp hoặc không đại diện sẽ cho kết quả kém. Knowledge cutoff: model chỉ biết những gì có trong dữ liệu huấn luyện đến một mốc thời gian, nên không trả lời được về sự kiện gần đây hoặc dữ liệu nội bộ mới thay đổi của công ty bạn.\n\nBias: dữ liệu huấn luyện phản ánh định kiến của con người và lịch sử, model có thể tái tạo hoặc khuếch đại chúng. Fairness: mối quan tâm liên quan, rằng đầu ra không được bất lợi một cách có hệ thống cho một nhóm người. Hallucination: model sinh văn bản trôi chảy, tự tin nhưng sai, vô nghĩa hoặc không có nguồn hỗ trợ. Edge case: đầu vào hiếm, bất thường hoặc mơ hồ nằm ngoài phân phối huấn luyện thông thường, nơi model hành xử khó đoán.",
            "bullets": [
              {
                "en": "Data dependency: garbage in, garbage out; gaps in training data become gaps in answers.",
                "vi": "Data dependency: dữ liệu vào kém thì kết quả kém; lỗ hổng dữ liệu thành lỗ hổng câu trả lời."
              },
              {
                "en": "Knowledge cutoff: stale or missing knowledge of recent events and private data.",
                "vi": "Knowledge cutoff: kiến thức lỗi thời hoặc thiếu về sự kiện gần đây và dữ liệu riêng."
              },
              {
                "en": "Bias and fairness: skewed or discriminatory outputs inherited from data.",
                "vi": "Bias và fairness: đầu ra lệch hoặc phân biệt đối xử kế thừa từ dữ liệu."
              },
              {
                "en": "Hallucination: plausible but false or unsupported content.",
                "vi": "Hallucination: nội dung hợp lý nhưng sai hoặc không có căn cứ."
              },
              {
                "en": "Edge cases: unusual inputs cause unpredictable behaviour.",
                "vi": "Edge case: đầu vào bất thường gây hành vi khó đoán."
              }
            ]
          },
          {
            "heading": "Business implication",
            "heading_vi": "Ý nghĩa với doanh nghiệp",
            "body": "Limitations are risks, not reasons to avoid gen AI. A fabricated policy answer to a customer, a biased screening recommendation or an outdated price all carry reputational, legal and financial cost. The correct leadership response is to identify the limitation that matters for the use case and then apply a proactive mitigation (next topic), rather than to expect a bigger model to remove all of them.\n\nBecause outputs are probabilistic, the same prompt can yield different answers, so quality must be tested and monitored continuously, not assumed after launch.",
            "body_vi": "Giới hạn là rủi ro, không phải lý do tránh gen AI. Một câu trả lời chính sách bịa đặt cho khách hàng, một khuyến nghị sàng lọc thiên lệch hay một mức giá lỗi thời đều gây thiệt hại về danh tiếng, pháp lý và tài chính. Phản ứng đúng của lãnh đạo là xác định giới hạn quan trọng với use case rồi áp dụng biện pháp giảm thiểu chủ động (topic tiếp theo), thay vì mong một model lớn hơn loại bỏ mọi giới hạn.\n\nVì đầu ra mang tính xác suất, cùng một prompt có thể cho câu trả lời khác nhau, nên chất lượng phải được kiểm thử và giám sát liên tục, không được mặc định là ổn sau khi ra mắt."
          }
        ],
        "table": {
          "caption": "Limitation, cause and typical symptom",
          "caption_vi": "Giới hạn, nguyên nhân và triệu chứng điển hình",
          "headers": [
            "Limitation",
            "Cause",
            "Symptom"
          ],
          "headers_vi": [
            "Giới hạn",
            "Nguyên nhân",
            "Triệu chứng"
          ],
          "rows": [
            [
              "Data dependency",
              "Training data quality/coverage",
              "Weak results in niche domains"
            ],
            [
              "Knowledge cutoff",
              "Training stops at a date",
              "Outdated or missing facts"
            ],
            [
              "Bias / fairness",
              "Skewed or prejudiced data",
              "Unequal or stereotyped outputs"
            ],
            [
              "Hallucination",
              "Next-token prediction without fact checking",
              "Confident but false statements"
            ],
            [
              "Edge cases",
              "Rare inputs outside training distribution",
              "Erratic or wrong answers"
            ]
          ]
        },
        "keyPoints": [
          {
            "en": "Foundation models predict likely text; they do not verify facts.",
            "vi": "Foundation model dự đoán văn bản có khả năng cao; chúng không kiểm chứng sự thật."
          },
          {
            "en": "The six limitations: data dependency, knowledge cutoff, bias, fairness, hallucinations, edge cases.",
            "vi": "Sáu giới hạn: data dependency, knowledge cutoff, bias, fairness, hallucination, edge case."
          },
          {
            "en": "Knowledge cutoff means no knowledge of recent events or private enterprise data.",
            "vi": "Knowledge cutoff nghĩa là không biết sự kiện gần đây hay dữ liệu riêng doanh nghiệp."
          },
          {
            "en": "Hallucinations are fluent and confident, which makes them hard to spot without checks.",
            "vi": "Hallucination trôi chảy và tự tin nên khó phát hiện nếu không kiểm tra."
          },
          {
            "en": "Bias in data can be reproduced or amplified in output, raising fairness concerns.",
            "vi": "Bias trong dữ liệu có thể được tái tạo hoặc khuếch đại trong đầu ra, gây vấn đề fairness."
          }
        ],
        "examTips": [
          {
            "en": "If the scenario says the model gives outdated answers or does not know company data, the limitation is knowledge cutoff / data dependency, not bias.",
            "vi": "Nếu tình huống nói model trả lời lỗi thời hoặc không biết dữ liệu công ty, giới hạn là knowledge cutoff / data dependency, không phải bias."
          },
          {
            "en": "'Confident but incorrect or invented answer' is the definition of a hallucination.",
            "vi": "'Câu trả lời tự tin nhưng sai hoặc bịa' là định nghĩa của hallucination."
          },
          {
            "en": "Do not pick 'use a larger model' as the fix for limitations; the exam favours grounding, RAG, prompt design and human oversight.",
            "vi": "Đừng chọn 'dùng model lớn hơn' để khắc phục giới hạn; đề thi ưu tiên grounding, RAG, thiết kế prompt và giám sát của con người."
          }
        ],
        "terms": [
          {
            "term": "Foundation model",
            "en": "A large model pre-trained on broad data and adaptable to many tasks.",
            "vi": "Model lớn tiền huấn luyện trên dữ liệu rộng, thích ứng cho nhiều tác vụ."
          },
          {
            "term": "Knowledge cutoff",
            "en": "The date after which the model has no training knowledge.",
            "vi": "Mốc thời gian sau đó model không có kiến thức huấn luyện."
          },
          {
            "term": "Hallucination",
            "en": "Fluent output that is false, nonsensical or unsupported.",
            "vi": "Đầu ra trôi chảy nhưng sai, vô nghĩa hoặc không có căn cứ."
          },
          {
            "term": "Bias",
            "en": "Systematic skew in outputs inherited from training data.",
            "vi": "Độ lệch có hệ thống trong đầu ra kế thừa từ dữ liệu huấn luyện."
          },
          {
            "term": "Fairness",
            "en": "Goal that outputs do not unjustly disadvantage groups.",
            "vi": "Mục tiêu đầu ra không bất lợi một cách bất công cho các nhóm."
          },
          {
            "term": "Edge case",
            "en": "Rare or unusual input where model behaviour is unreliable.",
            "vi": "Đầu vào hiếm hoặc bất thường khiến hành vi model không đáng tin."
          }
        ],
        "keywords": [
          "limitation",
          "hallucination",
          "knowledge cutoff",
          "bias",
          "fairness",
          "data dependency",
          "edge case",
          "outdated",
          "training data",
          "inaccurate",
          "fabricate",
          "foundation model",
          "confident",
          "stereotype"
        ]
      },
      {
        "id": "d3-t2",
        "objective": "3.1 Describe the Google Cloud-recommended practices to address limitations (e.g., grounding, retrieval-augmented generation [RAG], prompt engineering, fine-tuning, human in the loop [HITL]).",
        "title": "Overcoming limitations: Google-recommended practices",
        "title_vi": "Khắc phục giới hạn: các thực hành Google khuyến nghị",
        "sources": [
          "exam-guide-official-checklist.md",
          "module4-v2.md",
          "module5-v2.md",
          "official/guide.txt",
          "official/study.txt"
        ],
        "sections": [
          {
            "heading": "Five practices, one toolbox",
            "heading_vi": "Năm thực hành, một bộ công cụ",
            "body": "Google Cloud recommends combining five practices rather than relying on one: grounding, retrieval-augmented generation (RAG), prompt engineering, fine-tuning and human in the loop (HITL). They act at different points: before the model (prompt, data), inside the model (fine-tuning) and after generation (review).\n\nGrounding connects the model to verifiable sources so answers are tied to facts. RAG is the most common way to ground: retrieve relevant documents and add them to the prompt. Prompt engineering shapes the instructions and context. Fine-tuning further trains a model on task- or domain-specific data. HITL keeps people in the loop to review and decide.",
            "body_vi": "Google Cloud khuyến nghị kết hợp năm thực hành thay vì chỉ dựa vào một: grounding, retrieval-augmented generation (RAG), prompt engineering, fine-tuning và human in the loop (HITL). Chúng tác động ở các điểm khác nhau: trước model (prompt, dữ liệu), bên trong model (fine-tuning) và sau khi sinh (review).\n\nGrounding nối model với nguồn có thể kiểm chứng để câu trả lời gắn với sự thật. RAG là cách grounding phổ biến nhất: truy xuất tài liệu liên quan và thêm vào prompt. Prompt engineering định hình chỉ dẫn và ngữ cảnh. Fine-tuning huấn luyện thêm model trên dữ liệu theo tác vụ hay lĩnh vực. HITL giữ con người trong vòng lặp để review và quyết định.",
            "bullets": [
              {
                "en": "Grounding / RAG: reduces hallucination and overcomes knowledge cutoff with current, authoritative data.",
                "vi": "Grounding / RAG: giảm hallucination và vượt knowledge cutoff bằng dữ liệu hiện hành, đáng tin."
              },
              {
                "en": "Prompt engineering: clearer instructions, context and format for better output; cheapest first step.",
                "vi": "Prompt engineering: chỉ dẫn, ngữ cảnh, định dạng rõ hơn cho đầu ra tốt hơn; bước rẻ nhất để bắt đầu."
              },
              {
                "en": "Fine-tuning: improves performance on a specific task or domain, style or terminology.",
                "vi": "Fine-tuning: cải thiện hiệu năng cho tác vụ hay lĩnh vực cụ thể, văn phong, thuật ngữ."
              },
              {
                "en": "HITL: human oversight for sensitive or high-risk output.",
                "vi": "HITL: con người giám sát đầu ra nhạy cảm hoặc rủi ro cao."
              }
            ]
          },
          {
            "heading": "Human in the loop (HITL)",
            "heading_vi": "Human in the loop (HITL)",
            "body": "HITL means people review, validate or correct model output and make the final call. Typical uses: content moderation, sensitive applications (healthcare, finance), high-stakes decisions, and any case where an error is costly. It also helps surface bias and edge cases that automated checks miss.\n\nGoogle describes two review points. Pre-generation review: experts review and approve data, prompts, configuration and the system before deployment. Post-generation review: ongoing review of outputs after deployment, with feedback used to improve the system. Mature programmes use both.",
            "body_vi": "HITL nghĩa là con người xem xét, xác thực hoặc sửa đầu ra của model và đưa ra quyết định cuối cùng. Dùng điển hình: kiểm duyệt nội dung, ứng dụng nhạy cảm (y tế, tài chính), quyết định rủi ro cao và mọi trường hợp lỗi gây tốn kém. HITL cũng giúp phát hiện bias và edge case mà kiểm tra tự động bỏ sót.\n\nGoogle mô tả hai điểm review. Pre-generation review: chuyên gia duyệt dữ liệu, prompt, cấu hình và hệ thống trước khi triển khai. Post-generation review: review liên tục đầu ra sau khi triển khai, dùng phản hồi để cải thiện hệ thống. Chương trình trưởng thành dùng cả hai."
          },
          {
            "heading": "Choosing the right technique",
            "heading_vi": "Chọn đúng kỹ thuật",
            "body": "Start with the cheapest, fastest lever and escalate only if needed: prompt engineering first, then grounding/RAG when the model lacks current or private facts, then fine-tuning when you need consistent domain behaviour or style that prompting cannot deliver. Add HITL wherever the consequence of an error is high, regardless of which technique you pick.\n\nNote that fine-tuning teaches patterns and style but does not give the model fresh, citable facts; for frequently changing enterprise data, grounding with RAG is the better and cheaper answer.",
            "body_vi": "Bắt đầu với đòn bẩy rẻ và nhanh nhất rồi nâng cấp nếu cần: prompt engineering trước, sau đó grounding/RAG khi model thiếu dữ kiện hiện hành hoặc riêng tư, rồi fine-tuning khi cần hành vi lĩnh vực nhất quán hay văn phong mà prompt không đạt được. Thêm HITL ở bất cứ nơi nào hậu quả lỗi cao, bất kể chọn kỹ thuật nào.\n\nLưu ý fine-tuning dạy các mẫu và văn phong nhưng không cung cấp dữ kiện mới có thể trích dẫn; với dữ liệu doanh nghiệp thay đổi thường xuyên, grounding bằng RAG là đáp án tốt và rẻ hơn."
          }
        ],
        "table": {
          "caption": "Which technique addresses which limitation",
          "caption_vi": "Kỹ thuật nào xử lý giới hạn nào",
          "headers": [
            "Limitation",
            "Best-fit technique(s)"
          ],
          "headers_vi": [
            "Giới hạn",
            "Kỹ thuật phù hợp nhất"
          ],
          "rows": [
            [
              "Hallucinations",
              "Grounding / RAG, clear prompts, HITL review"
            ],
            [
              "Knowledge cutoff",
              "Grounding / RAG (incl. Grounding with Google Search)"
            ],
            [
              "Data dependency / missing domain knowledge",
              "RAG with enterprise data; fine-tuning for domain adaptation"
            ],
            [
              "Inconsistent format, tone or task behaviour",
              "Prompt engineering; fine-tuning for persistent style"
            ],
            [
              "Bias / fairness",
              "Diverse data, prompt guidance, safety settings, HITL review"
            ],
            [
              "Edge cases / high-risk decisions",
              "HITL (pre- and post-generation), testing and monitoring"
            ]
          ]
        },
        "keyPoints": [
          {
            "en": "Google recommends layering grounding, RAG, prompt engineering, fine-tuning and HITL.",
            "vi": "Google khuyến nghị xếp lớp grounding, RAG, prompt engineering, fine-tuning và HITL."
          },
          {
            "en": "Grounding and RAG fix hallucination and knowledge cutoff by supplying current, authoritative data.",
            "vi": "Grounding và RAG xử lý hallucination và knowledge cutoff bằng dữ liệu hiện hành, đáng tin."
          },
          {
            "en": "Fine-tuning adapts a model to a task or domain; it does not supply live facts.",
            "vi": "Fine-tuning thích ứng model cho tác vụ hay lĩnh vực; không cung cấp dữ kiện cập nhật."
          },
          {
            "en": "HITL: pre-generation review before deployment, post-generation review after deployment.",
            "vi": "HITL: pre-generation review trước triển khai, post-generation review sau triển khai."
          },
          {
            "en": "Use HITL for sensitive, regulated or high-stakes outputs.",
            "vi": "Dùng HITL cho đầu ra nhạy cảm, bị quản lý hoặc rủi ro cao."
          }
        ],
        "examTips": [
          {
            "en": "'Reduce hallucinations using the company's current documents without retraining' = grounding / RAG.",
            "vi": "'Giảm hallucination bằng tài liệu hiện hành của công ty mà không huấn luyện lại' = grounding / RAG."
          },
          {
            "en": "When a question stresses healthcare, finance or high-risk decisions, add human review (HITL) to the best answer.",
            "vi": "Khi câu hỏi nhấn mạnh y tế, tài chính hay quyết định rủi ro cao, hãy chọn đáp án có human review (HITL)."
          },
          {
            "en": "Prompt engineering is usually the lowest-cost first step; fine-tuning is heavier and a later escalation.",
            "vi": "Prompt engineering thường là bước đầu chi phí thấp nhất; fine-tuning nặng hơn và là bước nâng cấp sau."
          }
        ],
        "terms": [
          {
            "term": "Grounding",
            "en": "Tying model output to verifiable sources of information.",
            "vi": "Gắn đầu ra của model với nguồn thông tin có thể kiểm chứng."
          },
          {
            "term": "RAG",
            "en": "Retrieving relevant data and adding it to the prompt before generation.",
            "vi": "Truy xuất dữ liệu liên quan và thêm vào prompt trước khi sinh."
          },
          {
            "term": "Prompt engineering",
            "en": "Designing inputs to guide the model to better output.",
            "vi": "Thiết kế đầu vào để dẫn model tới đầu ra tốt hơn."
          },
          {
            "term": "Fine-tuning",
            "en": "Further training a model on task- or domain-specific data.",
            "vi": "Huấn luyện thêm model trên dữ liệu theo tác vụ hay lĩnh vực."
          },
          {
            "term": "HITL",
            "en": "Human in the loop: people review or approve model output.",
            "vi": "Con người trong vòng lặp: người review hoặc phê duyệt đầu ra."
          },
          {
            "term": "Pre-generation review",
            "en": "Expert review of data, prompts and system before deployment.",
            "vi": "Chuyên gia duyệt dữ liệu, prompt, hệ thống trước triển khai."
          },
          {
            "term": "Post-generation review",
            "en": "Ongoing review of outputs after deployment.",
            "vi": "Review liên tục đầu ra sau triển khai."
          }
        ],
        "keywords": [
          "human in the loop",
          "hitl",
          "grounding",
          "rag",
          "retrieval-augmented generation",
          "prompt engineering",
          "fine-tuning",
          "reduce hallucinations",
          "pre-generation review",
          "post-generation review",
          "content moderation",
          "sensitive",
          "high-risk",
          "domain-specific",
          "without retraining"
        ]
      },
      {
        "id": "d3-t3",
        "objective": "3.1 Recognize Google-recommended practices for continuous monitoring and evaluation of gen AI models (e.g., automatic model upgrades, key performance indicators, security patches and updates, versioning, performance tracking, drift monitoring, Agent Platform Feature Store).",
        "title": "Monitoring, evaluation and model management",
        "title_vi": "Giám sát, đánh giá và quản lý model",
        "sources": [
          "exam-guide-official-checklist.md",
          "module3-v2.md",
          "official/guide.txt",
          "official/study.txt"
        ],
        "sections": [
          {
            "heading": "Why gen AI needs continuous monitoring",
            "heading_vi": "Vì sao gen AI cần giám sát liên tục",
            "body": "A deployed model is not finished. Data, users and the world change, so accuracy and safety can degrade over time. This gradual loss is called drift. Google-recommended practice is continuous monitoring and evaluation: define key performance indicators (KPIs), track performance against them, detect drift, and keep models current and secure.\n\nGood KPIs link model quality to business outcomes, for example accuracy or groundedness of answers, latency, cost, user satisfaction, and safety incident rates.",
            "body_vi": "Model đã triển khai chưa phải là xong. Dữ liệu, người dùng và thế giới thay đổi nên độ chính xác và an toàn có thể suy giảm theo thời gian. Sự suy giảm dần này gọi là drift. Thực hành Google khuyến nghị là giám sát và đánh giá liên tục: xác định chỉ số hiệu năng chính (KPI), theo dõi hiệu năng so với KPI, phát hiện drift, và giữ model luôn cập nhật, an toàn.\n\nKPI tốt gắn chất lượng model với kết quả kinh doanh, ví dụ độ chính xác hoặc mức bám nguồn của câu trả lời, độ trễ, chi phí, mức hài lòng người dùng và tỷ lệ sự cố an toàn."
          },
          {
            "heading": "The practices",
            "heading_vi": "Các thực hành",
            "body": "Keep models up to date: use automatic model upgrades where appropriate so you benefit from improved versions, and apply security patches and updates promptly. Use versioning so you can track which model version produced which results and roll back if a new version underperforms. Track performance continuously with metrics and evaluation, and monitor for drift so you retrain, re-ground or adjust before users are harmed.\n\nOn the Google Cloud Agent Platform (formerly Vertex AI) the matching tools are: Model Registry for versioning, Model Monitoring for drift and performance monitoring, Feature Store for managing and serving ML features consistently, Pipelines for automating and repeating ML workflows, and Model Garden for discovering and organising Google, third-party and open models in one place.",
            "body_vi": "Giữ model luôn mới: dùng automatic model upgrade khi phù hợp để hưởng các phiên bản cải tiến, và áp dụng security patch và bản cập nhật kịp thời. Dùng versioning để biết phiên bản model nào tạo kết quả nào và rollback nếu phiên bản mới kém hơn. Theo dõi hiệu năng liên tục bằng metric và đánh giá, và giám sát drift để huấn luyện lại, grounding lại hoặc điều chỉnh trước khi người dùng bị ảnh hưởng.\n\nTrên Google Cloud Agent Platform (trước đây là Vertex AI) các công cụ tương ứng là: Model Registry cho versioning, Model Monitoring cho giám sát drift và hiệu năng, Feature Store để quản lý và phục vụ feature ML nhất quán, Pipelines để tự động hóa và lặp lại workflow ML, và Model Garden để khám phá và tổ chức model của Google, bên thứ ba và open-source ở một nơi.",
            "bullets": [
              {
                "en": "Automatic model upgrades and security patches keep models current and secure.",
                "vi": "Automatic model upgrade và security patch giữ model mới và an toàn."
              },
              {
                "en": "Versioning enables traceability and rollback.",
                "vi": "Versioning cho phép truy vết và rollback."
              },
              {
                "en": "Drift monitoring detects declining accuracy over time.",
                "vi": "Drift monitoring phát hiện độ chính xác giảm dần theo thời gian."
              }
            ]
          },
          {
            "heading": "Pitfalls",
            "heading_vi": "Bẫy thường gặp",
            "body": "Monitoring is a lifecycle practice, not a one-time test before launch. Evaluation should be repeated whenever the model, prompt, data or grounding source changes. Combine automated metrics with human review, since automated scores can miss subtle quality, bias or safety issues.\n\nDo not confuse the tools: Model Registry stores and versions models; Model Monitoring watches deployed models for drift; Feature Store manages features; Model Garden is a catalogue for choosing models, not a monitoring tool.",
            "body_vi": "Giám sát là thực hành xuyên vòng đời, không phải kiểm thử một lần trước khi ra mắt. Đánh giá nên lặp lại mỗi khi model, prompt, dữ liệu hoặc nguồn grounding thay đổi. Kết hợp metric tự động với review của con người, vì điểm tự động có thể bỏ sót vấn đề tinh tế về chất lượng, bias hay an toàn.\n\nĐừng nhầm công cụ: Model Registry lưu và quản lý phiên bản model; Model Monitoring theo dõi model đã triển khai về drift; Feature Store quản lý feature; Model Garden là danh mục để chọn model, không phải công cụ giám sát."
          }
        ],
        "table": {
          "caption": "Lifecycle task and Google Cloud tool",
          "caption_vi": "Tác vụ vòng đời và công cụ Google Cloud",
          "headers": [
            "Task",
            "Tool / practice"
          ],
          "headers_vi": [
            "Tác vụ",
            "Công cụ / thực hành"
          ],
          "rows": [
            [
              "Versioning models",
              "Model Registry"
            ],
            [
              "Drift and performance monitoring",
              "Model Monitoring"
            ],
            [
              "Managing and serving features",
              "Feature Store"
            ],
            [
              "Automating ML workflows",
              "Pipelines"
            ],
            [
              "Finding and organising models",
              "Model Garden"
            ],
            [
              "Staying current and secure",
              "Automatic model upgrades, security patches and updates"
            ]
          ]
        },
        "keyPoints": [
          {
            "en": "Continuous monitoring and evaluation is required because performance drifts over time.",
            "vi": "Cần giám sát và đánh giá liên tục vì hiệu năng drift theo thời gian."
          },
          {
            "en": "Define KPIs and track performance against them.",
            "vi": "Xác định KPI và theo dõi hiệu năng theo KPI."
          },
          {
            "en": "Apply automatic model upgrades and security patches and updates.",
            "vi": "Áp dụng automatic model upgrade và security patch, bản cập nhật."
          },
          {
            "en": "Model Registry = versioning; Model Monitoring = drift; Feature Store = features; Pipelines = automation; Model Garden = model catalogue.",
            "vi": "Model Registry = versioning; Model Monitoring = drift; Feature Store = feature; Pipelines = tự động hóa; Model Garden = danh mục model."
          },
          {
            "en": "Re-evaluate after any change to model, prompt or data.",
            "vi": "Đánh giá lại sau mọi thay đổi model, prompt hoặc dữ liệu."
          }
        ],
        "examTips": [
          {
            "en": "'Accuracy declining over time as data changes' = drift; the tool is Model Monitoring.",
            "vi": "'Độ chính xác giảm dần khi dữ liệu thay đổi' = drift; công cụ là Model Monitoring."
          },
          {
            "en": "'Track which model version is deployed and roll back' = versioning with Model Registry.",
            "vi": "'Theo dõi phiên bản model đang triển khai và rollback' = versioning với Model Registry."
          },
          {
            "en": "Evaluation is ongoing, not a one-time pre-launch test.",
            "vi": "Đánh giá là liên tục, không phải kiểm thử một lần trước khi ra mắt."
          }
        ],
        "terms": [
          {
            "term": "Drift",
            "en": "Gradual decline in model accuracy as real-world data changes.",
            "vi": "Sự suy giảm dần độ chính xác khi dữ liệu thực tế thay đổi."
          },
          {
            "term": "KPI",
            "en": "Key performance indicator used to measure model and business success.",
            "vi": "Chỉ số hiệu năng chính đo thành công của model và kinh doanh."
          },
          {
            "term": "Model Registry",
            "en": "Agent Platform service for storing and versioning models.",
            "vi": "Dịch vụ của Agent Platform để lưu và quản lý phiên bản model."
          },
          {
            "term": "Model Monitoring",
            "en": "Agent Platform capability to monitor deployed models for drift and performance.",
            "vi": "Khả năng của Agent Platform giám sát model đã triển khai về drift và hiệu năng."
          },
          {
            "term": "Feature Store",
            "en": "Agent Platform service to manage and serve ML features.",
            "vi": "Dịch vụ của Agent Platform để quản lý và phục vụ feature ML."
          },
          {
            "term": "Pipelines",
            "en": "Agent Platform tooling to automate ML workflows.",
            "vi": "Công cụ Agent Platform để tự động hóa workflow ML."
          },
          {
            "term": "Model Garden",
            "en": "Catalogue of Google, third-party and open models on Agent Platform.",
            "vi": "Danh mục model Google, bên thứ ba và open-source trên Agent Platform."
          }
        ],
        "keywords": [
          "drift",
          "model monitoring",
          "model registry",
          "versioning",
          "feature store",
          "pipelines",
          "model garden",
          "kpi",
          "performance tracking",
          "security patches",
          "automatic model upgrades",
          "continuous monitoring",
          "evaluation",
          "rollback",
          "agent platform"
        ]
      },
      {
        "id": "d3-t4",
        "objective": "3.2 Describe prompt engineering techniques and how they drive better results: define prompt engineering and its significance; identify prompting techniques and use cases (zero-shot, one-shot, few-shot, role prompting, prompt chaining).",
        "title": "Prompt engineering fundamentals and basic techniques",
        "title_vi": "Nền tảng prompt engineering và các kỹ thuật cơ bản",
        "sources": [
          "exam-guide-official-checklist.md",
          "module4-v2.md",
          "module5-v2.md",
          "bonus-reference-guide.md",
          "official/guide.txt",
          "official/study.txt"
        ],
        "sections": [
          {
            "heading": "What prompt engineering is and why it matters",
            "heading_vi": "Prompt engineering là gì và vì sao quan trọng",
            "body": "A prompt is the input you give an LLM: instructions, context, examples and the question. Prompt engineering is the practice of designing and refining prompts to guide the model toward accurate, relevant, well-formatted output. Because the model's behaviour depends heavily on its input, better prompts often deliver large quality gains without any retraining, which makes it the fastest and cheapest way to improve results.\n\nA strong prompt usually states the task clearly, gives relevant context, specifies the output format and length, and sets constraints or tone. Iteration is normal: test, inspect the output and refine.",
            "body_vi": "Prompt là đầu vào bạn đưa cho LLM: chỉ dẫn, ngữ cảnh, ví dụ và câu hỏi. Prompt engineering là thực hành thiết kế và tinh chỉnh prompt để dẫn model tới đầu ra chính xác, liên quan, đúng định dạng. Vì hành vi model phụ thuộc nhiều vào đầu vào, prompt tốt hơn thường mang lại cải thiện chất lượng lớn mà không cần huấn luyện lại, nên đây là cách nhanh và rẻ nhất để cải thiện kết quả.\n\nMột prompt tốt thường nêu rõ tác vụ, cung cấp ngữ cảnh liên quan, chỉ định định dạng và độ dài đầu ra, và đặt ràng buộc hoặc giọng điệu. Lặp lại là bình thường: thử, xem đầu ra rồi tinh chỉnh."
          },
          {
            "heading": "Basic techniques with example prompts",
            "heading_vi": "Kỹ thuật cơ bản kèm prompt mẫu",
            "body": "Zero-shot: only the instruction, no examples. Example: 'Classify the sentiment of this review as positive, negative or neutral: \"The delivery was late but the product is great.\"' One-shot: one example shows the pattern. Few-shot: several examples show the pattern and format; best when the task or output format is unusual. Example: 'Review: \"Loved it\" -> positive. Review: \"Broke in a day\" -> negative. Review: \"Arrived on time\" -> ?'.\n\nRole prompting assigns a persona to set expertise and tone. Example: 'You are a senior financial advisor. Explain index funds to a first-time investor in under 100 words.' Prompt chaining breaks a complex task into steps where each output feeds the next prompt, or, in a conversation, builds on earlier turns to keep context. Example: step 1 'Summarise this contract in 5 bullets'; step 2 'From those bullets, list the risks'; step 3 'Draft an email to the client about the top risk'.",
            "body_vi": "Zero-shot: chỉ có chỉ dẫn, không ví dụ. Ví dụ: 'Phân loại cảm xúc của đánh giá sau là tích cực, tiêu cực hay trung lập: \"Giao hàng trễ nhưng sản phẩm rất tốt.\"' One-shot: một ví dụ cho thấy mẫu. Few-shot: vài ví dụ cho thấy mẫu và định dạng; phù hợp nhất khi tác vụ hoặc định dạng đầu ra khác thường. Ví dụ: 'Đánh giá: \"Rất thích\" -> tích cực. Đánh giá: \"Hỏng sau một ngày\" -> tiêu cực. Đánh giá: \"Đến đúng giờ\" -> ?'.\n\nRole prompting gán một persona để đặt chuyên môn và giọng điệu. Ví dụ: 'Bạn là cố vấn tài chính cấp cao. Giải thích quỹ chỉ số cho nhà đầu tư lần đầu trong dưới 100 từ.' Prompt chaining chia tác vụ phức tạp thành các bước mà đầu ra của bước này làm đầu vào của prompt kế tiếp, hoặc trong hội thoại thì dựa trên các lượt trước để giữ ngữ cảnh. Ví dụ: bước 1 'Tóm tắt hợp đồng này thành 5 gạch đầu dòng'; bước 2 'Từ các gạch đó, liệt kê rủi ro'; bước 3 'Soạn email gửi khách về rủi ro lớn nhất'.",
            "bullets": [
              {
                "en": "Zero-shot: instruction only; good for simple, common tasks.",
                "vi": "Zero-shot: chỉ chỉ dẫn; tốt cho tác vụ đơn giản, phổ biến."
              },
              {
                "en": "One-shot / few-shot: examples set pattern and format.",
                "vi": "One-shot / few-shot: ví dụ định ra mẫu và định dạng."
              },
              {
                "en": "Role prompting: persona sets expertise, tone and perspective.",
                "vi": "Role prompting: persona đặt chuyên môn, giọng điệu, góc nhìn."
              },
              {
                "en": "Prompt chaining: sequence of linked prompts for complex tasks.",
                "vi": "Prompt chaining: chuỗi prompt liên kết cho tác vụ phức tạp."
              }
            ]
          },
          {
            "heading": "Reusing prompts, Gems and pitfalls",
            "heading_vi": "Tái sử dụng prompt, Gems và bẫy",
            "body": "To optimise your prompting workflow, reuse proven prompts as templates with placeholders, chain prompts, and save context. In the Gemini app, Gems are customised AI assistants you set up once with instructions and reuse, effectively a saved prompt template for a recurring task (for example a 'meeting-notes formatter' or 'brand-voice editor').\n\nPitfalls: vague prompts give vague answers; too many conflicting instructions confuse the model; examples that are unrepresentative bias the output. Prompting reduces but does not eliminate hallucination, so it does not replace grounding or human review for factual or high-risk work.",
            "body_vi": "Để tối ưu quy trình prompt, hãy tái dùng prompt đã chứng minh hiệu quả như template có placeholder, nối chuỗi prompt và lưu ngữ cảnh. Trong ứng dụng Gemini, Gems là trợ lý AI tùy biến bạn thiết lập một lần với chỉ dẫn rồi dùng lại, về bản chất là template prompt đã lưu cho một tác vụ lặp lại (ví dụ 'trình định dạng biên bản họp' hay 'biên tập giọng thương hiệu').\n\nBẫy: prompt mơ hồ cho câu trả lời mơ hồ; quá nhiều chỉ dẫn mâu thuẫn làm model rối; ví dụ không đại diện làm lệch đầu ra. Prompt giảm nhưng không loại bỏ hallucination, nên không thay thế grounding hay review của con người cho công việc cần sự thật hoặc rủi ro cao."
          }
        ],
        "table": {
          "caption": "Basic prompting techniques at a glance",
          "caption_vi": "Tổng quan kỹ thuật prompt cơ bản",
          "headers": [
            "Technique",
            "What you provide",
            "Best for"
          ],
          "headers_vi": [
            "Kỹ thuật",
            "Bạn cung cấp",
            "Phù hợp nhất"
          ],
          "rows": [
            [
              "Zero-shot",
              "Instruction only",
              "Simple, common tasks"
            ],
            [
              "One-shot",
              "Instruction + 1 example",
              "Show a format quickly"
            ],
            [
              "Few-shot",
              "Instruction + several examples",
              "Unusual tasks or strict output formats"
            ],
            [
              "Role prompting",
              "A persona/role",
              "Tone, expertise, perspective"
            ],
            [
              "Prompt chaining",
              "Linked multi-step prompts",
              "Complex tasks, keeping context"
            ]
          ]
        },
        "keyPoints": [
          {
            "en": "Prompt engineering designs and refines inputs to improve output without retraining.",
            "vi": "Prompt engineering thiết kế và tinh chỉnh đầu vào để cải thiện đầu ra mà không huấn luyện lại."
          },
          {
            "en": "Zero-shot has no examples, one-shot one, few-shot several.",
            "vi": "Zero-shot không ví dụ, one-shot một ví dụ, few-shot vài ví dụ."
          },
          {
            "en": "Role prompting sets persona, tone and expertise.",
            "vi": "Role prompting đặt persona, giọng điệu và chuyên môn."
          },
          {
            "en": "Prompt chaining splits a complex task into linked steps or builds on prior conversation turns.",
            "vi": "Prompt chaining chia tác vụ phức tạp thành các bước liên kết hoặc dựa trên các lượt hội thoại trước."
          },
          {
            "en": "Reuse prompts as templates; Gems in the Gemini app are reusable customised assistants.",
            "vi": "Tái dùng prompt như template; Gems trong ứng dụng Gemini là trợ lý tùy biến dùng lại được."
          }
        ],
        "examTips": [
          {
            "en": "Need the model to follow a specific output pattern? Pick few-shot (examples) over zero-shot.",
            "vi": "Cần model theo một mẫu đầu ra cụ thể? Chọn few-shot (có ví dụ) thay vì zero-shot."
          },
          {
            "en": "'Act as an expert...' is role prompting, not few-shot.",
            "vi": "'Hãy đóng vai chuyên gia...' là role prompting, không phải few-shot."
          },
          {
            "en": "Prompt engineering alone is not the answer when the model lacks current or private facts; that needs grounding.",
            "vi": "Chỉ prompt engineering chưa đủ khi model thiếu dữ kiện hiện hành hoặc riêng tư; cần grounding."
          }
        ],
        "terms": [
          {
            "term": "Prompt",
            "en": "The input (instructions, context, examples) given to an LLM.",
            "vi": "Đầu vào (chỉ dẫn, ngữ cảnh, ví dụ) đưa cho LLM."
          },
          {
            "term": "Zero-shot prompting",
            "en": "Asking with no examples.",
            "vi": "Hỏi mà không có ví dụ."
          },
          {
            "term": "One-shot prompting",
            "en": "Providing a single example.",
            "vi": "Cung cấp một ví dụ."
          },
          {
            "term": "Few-shot prompting",
            "en": "Providing several examples.",
            "vi": "Cung cấp vài ví dụ."
          },
          {
            "term": "Role prompting",
            "en": "Assigning the model a persona or role.",
            "vi": "Gán cho model một persona hay vai trò."
          },
          {
            "term": "Prompt chaining",
            "en": "Linking prompts so each builds on the previous output.",
            "vi": "Nối prompt để mỗi prompt dựa trên đầu ra trước."
          },
          {
            "term": "Gems",
            "en": "Customised, reusable AI assistants in the Gemini app.",
            "vi": "Trợ lý AI tùy biến, dùng lại được trong ứng dụng Gemini."
          }
        ],
        "keywords": [
          "prompt engineering",
          "prompt",
          "zero-shot",
          "one-shot",
          "few-shot",
          "role prompting",
          "persona",
          "prompt chaining",
          "examples",
          "template",
          "gems",
          "instructions",
          "context",
          "refine"
        ]
      },
      {
        "id": "d3-t5",
        "objective": "3.2 Identify advanced prompting techniques and when to use them (e.g., chain-of-thought prompting, ReAct prompting).",
        "title": "Advanced prompting: CoT, ReAct and metaprompting",
        "title_vi": "Prompt nâng cao: CoT, ReAct và metaprompting",
        "sources": [
          "exam-guide-official-checklist.md",
          "module5-v2.md",
          "official/guide.txt",
          "official/study.txt"
        ],
        "sections": [
          {
            "heading": "Chain-of-thought (CoT)",
            "heading_vi": "Chain-of-thought (CoT)",
            "body": "Chain-of-thought prompting guides the model to work through a problem step by step by showing examples that include the intermediate reasoning steps, or by instructing it to reason before answering. Making the reasoning explicit improves accuracy on multi-step problems such as arithmetic, logic and planning, and lets a reviewer inspect how the answer was reached.\n\nExample prompt: 'A store sells pens at 3 for $4. How much do 12 pens cost? Think step by step before giving the final answer.' A few-shot CoT version includes a worked example with its reasoning before the new question.",
            "body_vi": "Chain-of-thought prompting dẫn model giải quyết vấn đề từng bước bằng cách đưa ví dụ có các bước suy luận trung gian, hoặc chỉ dẫn model suy luận trước khi trả lời. Làm rõ suy luận giúp tăng độ chính xác ở bài toán nhiều bước như số học, logic, lập kế hoạch, và cho người review xem câu trả lời đến từ đâu.\n\nPrompt mẫu: 'Cửa hàng bán bút 3 cái giá 4 đô. 12 cái bút giá bao nhiêu? Hãy suy nghĩ từng bước trước khi đưa đáp án cuối.' Phiên bản few-shot CoT kèm một ví dụ có lời giải và suy luận trước câu hỏi mới."
          },
          {
            "heading": "ReAct and the reasoning loop",
            "heading_vi": "ReAct và vòng lặp suy luận",
            "body": "ReAct (Reason + Act) is a prompting framework that lets the model both reason about the user's query and take actions, such as calling a search tool or an API, then observe the result and continue. It runs a loop: Thought (what do I need?), Action (use a tool), Observation (read the result), repeating until it can answer. This is the basis of the reasoning loop inside AI agents, which weigh the goal, available tools and information gathered at each iteration.\n\nBecause the answer is based on information the model actually retrieved, ReAct grounds responses in the outside world and reduces hallucination. Example: 'Is it cheaper to fly or take the train from Hanoi to Da Nang next Friday?' Thought: need current prices; Action: query flight and rail price tools; Observation: results; Thought: compare; Answer.",
            "body_vi": "ReAct (Reason + Act) là framework prompt cho phép model vừa suy luận về truy vấn của người dùng vừa hành động, như gọi công cụ tìm kiếm hay API, rồi quan sát kết quả và tiếp tục. Nó chạy vòng lặp: Thought (cần gì?), Action (dùng công cụ), Observation (đọc kết quả), lặp lại đến khi trả lời được. Đây là nền tảng của reasoning loop trong AI agent, vốn cân nhắc mục tiêu, công cụ sẵn có và thông tin đã thu thập ở mỗi vòng.\n\nVì câu trả lời dựa trên thông tin model thực sự truy xuất, ReAct neo phản hồi vào thế giới bên ngoài và giảm hallucination. Ví dụ: 'Bay hay đi tàu từ Hà Nội đến Đà Nẵng thứ Sáu tới rẻ hơn?' Thought: cần giá hiện tại; Action: gọi công cụ giá vé máy bay và tàu; Observation: kết quả; Thought: so sánh; Answer."
          },
          {
            "heading": "Metaprompting and when to use which",
            "heading_vi": "Metaprompting và khi nào dùng kỹ thuật nào",
            "body": "Metaprompting uses a prompt to guide the AI to create, refine or interpret other prompts. Example: 'You are a prompt engineer. Rewrite this prompt so it specifies audience, tone and output format: \"Write about our new product.\"' It helps non-experts produce well-structured prompts and speeds up prompt iteration.\n\nChoose by need: CoT when the problem needs multi-step internal reasoning; ReAct when the model must fetch external information or act with tools; combine them for deeper reasoning plus dynamic action; metaprompting to generate or improve prompts themselves. Simple tasks do not need these techniques.",
            "body_vi": "Metaprompting dùng một prompt để hướng dẫn AI tạo, tinh chỉnh hoặc diễn giải các prompt khác. Ví dụ: 'Bạn là prompt engineer. Viết lại prompt này để nêu rõ đối tượng, giọng điệu và định dạng đầu ra: \"Viết về sản phẩm mới của chúng tôi.\"' Nó giúp người không chuyên tạo prompt có cấu trúc tốt và tăng tốc lặp prompt.\n\nChọn theo nhu cầu: CoT khi bài toán cần suy luận nhiều bước nội bộ; ReAct khi model phải lấy thông tin bên ngoài hoặc hành động bằng công cụ; kết hợp cả hai để có suy luận sâu hơn cộng hành động linh hoạt; metaprompting để tạo hoặc cải thiện chính các prompt. Tác vụ đơn giản không cần các kỹ thuật này."
          }
        ],
        "table": {
          "caption": "Advanced techniques compared",
          "caption_vi": "So sánh kỹ thuật nâng cao",
          "headers": [
            "Technique",
            "Core idea",
            "Use when"
          ],
          "headers_vi": [
            "Kỹ thuật",
            "Ý chính",
            "Dùng khi"
          ],
          "rows": [
            [
              "Chain-of-thought",
              "Show intermediate reasoning steps",
              "Multi-step math, logic, planning"
            ],
            [
              "ReAct",
              "Reason, act with tools, observe, repeat",
              "Need live data or tool use; agents"
            ],
            [
              "Metaprompting",
              "Prompt that creates or improves prompts",
              "Generating/refining prompts"
            ]
          ]
        },
        "keyPoints": [
          {
            "en": "CoT guides step-by-step reasoning using examples with intermediate steps.",
            "vi": "CoT dẫn suy luận từng bước bằng ví dụ có các bước trung gian."
          },
          {
            "en": "ReAct = reason + act: the model reasons and uses tools to act on the query.",
            "vi": "ReAct = reason + act: model suy luận và dùng công cụ để hành động theo truy vấn."
          },
          {
            "en": "ReAct loop: Thought, Action, Observation, repeat.",
            "vi": "Vòng ReAct: Thought, Action, Observation, lặp lại."
          },
          {
            "en": "CoT focuses on internal reasoning; ReAct adds interaction with the outside world.",
            "vi": "CoT tập trung suy luận nội bộ; ReAct thêm tương tác với thế giới bên ngoài."
          },
          {
            "en": "Metaprompting uses AI to write or improve prompts.",
            "vi": "Metaprompting dùng AI để viết hoặc cải thiện prompt."
          }
        ],
        "examTips": [
          {
            "en": "Complex reasoning or math question with intermediate steps = chain-of-thought.",
            "vi": "Câu hỏi suy luận phức tạp hoặc toán có bước trung gian = chain-of-thought."
          },
          {
            "en": "Model must call a search tool or API and act on results = ReAct.",
            "vi": "Model phải gọi công cụ tìm kiếm hay API và hành động theo kết quả = ReAct."
          },
          {
            "en": "'Use a prompt to generate or improve other prompts' = metaprompting.",
            "vi": "'Dùng một prompt để tạo hoặc cải thiện prompt khác' = metaprompting."
          }
        ],
        "terms": [
          {
            "term": "Chain-of-thought (CoT)",
            "en": "Prompting that elicits intermediate reasoning steps.",
            "vi": "Prompt khơi gợi các bước suy luận trung gian."
          },
          {
            "term": "ReAct",
            "en": "Prompting framework combining reasoning with actions on external tools.",
            "vi": "Framework prompt kết hợp suy luận với hành động trên công cụ bên ngoài."
          },
          {
            "term": "Reasoning loop",
            "en": "Iterative think-act-observe cycle used by agents.",
            "vi": "Chu trình lặp nghĩ - hành động - quan sát mà agent dùng."
          },
          {
            "term": "Metaprompting",
            "en": "Using prompts to create, refine or interpret other prompts.",
            "vi": "Dùng prompt để tạo, tinh chỉnh hoặc diễn giải prompt khác."
          }
        ],
        "keywords": [
          "chain-of-thought",
          "cot",
          "react",
          "reason and act",
          "reasoning loop",
          "metaprompting",
          "step by step",
          "intermediate reasoning",
          "agent",
          "tools",
          "multi-step",
          "observation",
          "complex reasoning"
        ]
      },
      {
        "id": "d3-t6",
        "objective": "3.3 Identify grounding techniques and their use cases: grounding with first-party, third-party and world data; how RAG affects generated output; Google Cloud grounding offerings (pre-built RAG with Agent Search, RAG APIs, Grounding with Google Search).",
        "title": "Grounding and RAG",
        "title_vi": "Grounding và RAG",
        "sources": [
          "exam-guide-official-checklist.md",
          "module4-v2.md",
          "module5-v2.md",
          "bonus-reference-guide.md",
          "official/guide.txt",
          "official/study.txt"
        ],
        "sections": [
          {
            "heading": "What grounding is and the three data types",
            "heading_vi": "Grounding là gì và ba loại dữ liệu",
            "body": "Grounding connects a model's output to verifiable sources of information so that responses are based on facts rather than only on the model's training. It reduces hallucination, overcomes the knowledge cutoff and lets answers cite their sources.\n\nThe guide distinguishes three kinds of grounding data: first-party enterprise data (your own documents, databases and systems), third-party data (data from external providers or partners) and world data (broad, up-to-date public information, for example through Google Search). Pick by the question: company policies need first-party data; current events need world data.",
            "body_vi": "Grounding nối đầu ra của model với các nguồn thông tin có thể kiểm chứng để phản hồi dựa trên sự thật chứ không chỉ dựa trên huấn luyện. Nó giảm hallucination, vượt knowledge cutoff và cho phép câu trả lời trích dẫn nguồn.\n\nGuide phân biệt ba loại dữ liệu grounding: first-party enterprise data (tài liệu, cơ sở dữ liệu, hệ thống của chính bạn), third-party data (dữ liệu từ nhà cung cấp hoặc đối tác bên ngoài) và world data (thông tin công khai rộng, cập nhật, ví dụ qua Google Search). Chọn theo câu hỏi: chính sách công ty cần first-party data; sự kiện hiện tại cần world data."
          },
          {
            "heading": "How RAG works and affects output",
            "heading_vi": "RAG hoạt động và ảnh hưởng đầu ra thế nào",
            "body": "Retrieval-augmented generation (RAG) is the most common grounding technique. Four steps: (1) Retrieval: search a knowledge source and fetch the passages most relevant to the user's query. (2) Augmentation: add those passages to the prompt as context. (3) Generation: the LLM writes the answer using that context. (4) Iteration (optional): refine the query or retrieve again to improve the result.\n\nEffect on output: answers are more accurate, current and specific to your data, hallucinations drop, and sources can be cited, all without retraining the model. Output quality still depends on retrieval quality: poor or outdated source documents give poor answers. Example: an employee asks 'How many vacation days do I have?'; RAG retrieves the HR policy, adds it to the prompt and the model answers from it.",
            "body_vi": "Retrieval-augmented generation (RAG) là kỹ thuật grounding phổ biến nhất. Bốn bước: (1) Retrieval: tìm trong nguồn tri thức và lấy các đoạn liên quan nhất tới truy vấn. (2) Augmentation: thêm các đoạn đó vào prompt làm ngữ cảnh. (3) Generation: LLM viết câu trả lời dựa trên ngữ cảnh đó. (4) Iteration (tùy chọn): tinh chỉnh truy vấn hoặc truy xuất lại để cải thiện kết quả.\n\nẢnh hưởng đến đầu ra: câu trả lời chính xác hơn, cập nhật hơn, cụ thể cho dữ liệu của bạn, hallucination giảm, có thể trích dẫn nguồn, tất cả mà không cần huấn luyện lại model. Chất lượng đầu ra vẫn phụ thuộc chất lượng truy xuất: tài liệu nguồn kém hoặc lỗi thời cho câu trả lời kém. Ví dụ: nhân viên hỏi 'Tôi có bao nhiêu ngày phép?'; RAG truy xuất chính sách nhân sự, thêm vào prompt và model trả lời dựa vào đó.",
            "bullets": [
              {
                "en": "Retrieval: find relevant content.",
                "vi": "Retrieval: tìm nội dung liên quan."
              },
              {
                "en": "Augmentation: add it to the prompt.",
                "vi": "Augmentation: thêm vào prompt."
              },
              {
                "en": "Generation: answer using that context.",
                "vi": "Generation: trả lời dựa trên ngữ cảnh đó."
              },
              {
                "en": "Iteration (optional): refine and repeat.",
                "vi": "Iteration (tùy chọn): tinh chỉnh và lặp lại."
              }
            ]
          },
          {
            "heading": "Google Cloud offerings and RAG vs fine-tuning",
            "heading_vi": "Các offering Google Cloud và RAG so với fine-tuning",
            "body": "Google Cloud offers three grounding routes. Pre-built RAG with Agent Search: a managed, ready-made search and RAG solution over your enterprise data stores, fastest to deploy with little code. RAG APIs: building blocks for developers who want to assemble a custom RAG pipeline (for example custom retrieval and ranking). Grounding with Google Search: grounds Gemini responses in current public web information (world data) and provides sources.\n\nRAG versus fine-tuning: RAG injects fresh, external knowledge at query time, is cheaper to update (change the documents) and supports citations; fine-tuning changes the model itself to improve performance on a specific task, style or domain but needs training data and compute and does not keep facts current. They can be combined.",
            "body_vi": "Google Cloud cung cấp ba hướng grounding. Pre-built RAG với Agent Search: giải pháp tìm kiếm và RAG dựng sẵn, được quản lý, trên kho dữ liệu doanh nghiệp, triển khai nhanh nhất với ít code. RAG APIs: các khối xây dựng cho developer muốn tự lắp pipeline RAG tùy biến (ví dụ truy xuất và xếp hạng tùy chỉnh). Grounding with Google Search: neo phản hồi Gemini vào thông tin web công khai hiện hành (world data) và cung cấp nguồn.\n\nRAG so với fine-tuning: RAG đưa tri thức bên ngoài mới vào lúc truy vấn, cập nhật rẻ hơn (đổi tài liệu) và hỗ trợ trích dẫn; fine-tuning thay đổi chính model để cải thiện hiệu năng cho tác vụ, văn phong hay lĩnh vực cụ thể nhưng cần dữ liệu huấn luyện, tính toán và không giữ dữ kiện cập nhật. Có thể kết hợp cả hai."
          }
        ],
        "table": {
          "caption": "Google Cloud grounding offerings and RAG vs fine-tuning",
          "caption_vi": "Offering grounding của Google Cloud và RAG so với fine-tuning",
          "headers": [
            "Option",
            "What it is",
            "Choose when"
          ],
          "headers_vi": [
            "Lựa chọn",
            "Là gì",
            "Chọn khi"
          ],
          "rows": [
            [
              "Pre-built RAG with Agent Search",
              "Managed search/RAG over enterprise data",
              "Fast, low-code grounding on first-party data"
            ],
            [
              "RAG APIs",
              "Developer building blocks for custom RAG",
              "You need a customised RAG pipeline"
            ],
            [
              "Grounding with Google Search",
              "Grounds Gemini in current web data with sources",
              "Need up-to-date world knowledge"
            ],
            [
              "RAG (vs)",
              "Adds external knowledge at query time",
              "Facts change often; need citations; no retraining"
            ],
            [
              "Fine-tuning (vs)",
              "Retrains model for a task/domain/style",
              "Need specialised behaviour, not fresh facts"
            ]
          ]
        },
        "keyPoints": [
          {
            "en": "Grounding ties answers to verifiable sources, cutting hallucination and knowledge-cutoff issues.",
            "vi": "Grounding gắn câu trả lời với nguồn kiểm chứng được, giảm hallucination và vấn đề knowledge cutoff."
          },
          {
            "en": "Three data types: first-party enterprise, third-party and world data.",
            "vi": "Ba loại dữ liệu: first-party enterprise, third-party và world data."
          },
          {
            "en": "RAG steps: retrieval, augmentation, generation, iteration (optional).",
            "vi": "Các bước RAG: retrieval, augmentation, generation, iteration (tùy chọn)."
          },
          {
            "en": "Google Cloud: pre-built RAG with Agent Search, RAG APIs, Grounding with Google Search.",
            "vi": "Google Cloud: pre-built RAG với Agent Search, RAG APIs, Grounding with Google Search."
          },
          {
            "en": "RAG keeps knowledge current without retraining; fine-tuning does not supply live facts.",
            "vi": "RAG giữ tri thức cập nhật mà không huấn luyện lại; fine-tuning không cung cấp dữ kiện sống."
          }
        ],
        "examTips": [
          {
            "en": "Answers must reflect the company's latest internal documents with minimal effort: Agent Search (pre-built RAG).",
            "vi": "Câu trả lời phải phản ánh tài liệu nội bộ mới nhất với ít công sức: Agent Search (pre-built RAG)."
          },
          {
            "en": "Need up-to-the-minute public information with sources: Grounding with Google Search.",
            "vi": "Cần thông tin công khai mới nhất kèm nguồn: Grounding with Google Search."
          },
          {
            "en": "Frequently changing data favours RAG over fine-tuning; do not choose retraining just to add new facts.",
            "vi": "Dữ liệu thay đổi thường xuyên thiên về RAG hơn fine-tuning; đừng chọn huấn luyện lại chỉ để thêm dữ kiện mới."
          },
          {
            "en": "Know the order: retrieval, then augmentation, then generation.",
            "vi": "Nhớ thứ tự: retrieval, rồi augmentation, rồi generation."
          }
        ],
        "terms": [
          {
            "term": "Grounding",
            "en": "Connecting model output to verifiable information sources.",
            "vi": "Nối đầu ra model với nguồn thông tin có thể kiểm chứng."
          },
          {
            "term": "First-party data",
            "en": "Your own enterprise data.",
            "vi": "Dữ liệu doanh nghiệp của chính bạn."
          },
          {
            "term": "Third-party data",
            "en": "Data supplied by external providers or partners.",
            "vi": "Dữ liệu do nhà cung cấp hoặc đối tác bên ngoài cung cấp."
          },
          {
            "term": "World data",
            "en": "Broad public information, e.g. via Google Search.",
            "vi": "Thông tin công khai rộng, ví dụ qua Google Search."
          },
          {
            "term": "RAG",
            "en": "Retrieval-augmented generation: retrieve, augment the prompt, generate.",
            "vi": "Retrieval-augmented generation: truy xuất, bổ sung prompt, sinh."
          },
          {
            "term": "Agent Search",
            "en": "Agent Platform capability providing pre-built search and RAG over enterprise data.",
            "vi": "Khả năng của Agent Platform cung cấp tìm kiếm và RAG dựng sẵn trên dữ liệu doanh nghiệp."
          },
          {
            "term": "RAG APIs",
            "en": "Developer APIs for building custom RAG pipelines.",
            "vi": "API cho developer để xây pipeline RAG tùy biến."
          },
          {
            "term": "Grounding with Google Search",
            "en": "Feature grounding Gemini answers in Google Search results.",
            "vi": "Tính năng neo câu trả lời Gemini vào kết quả Google Search."
          }
        ],
        "keywords": [
          "grounding",
          "rag",
          "retrieval-augmented generation",
          "retrieval",
          "augmentation",
          "first-party data",
          "third-party data",
          "world data",
          "agent search",
          "rag apis",
          "grounding with google search",
          "enterprise data",
          "knowledge base",
          "citations",
          "fine-tuning",
          "vector"
        ]
      },
      {
        "id": "d3-t7",
        "objective": "3.3 Identify how sampling parameters and settings are used to control the behavior of gen AI models (e.g., token count, temperature, top-p [nucleus sampling], safety settings, and output length).",
        "title": "Sampling parameters and settings",
        "title_vi": "Tham số sampling và cài đặt",
        "sources": [
          "exam-guide-official-checklist.md",
          "module5-v2.md",
          "bonus-reference-guide.md",
          "official/guide.txt",
          "official/study.txt"
        ],
        "sections": [
          {
            "heading": "Tokens, context window and output length",
            "heading_vi": "Token, context window và độ dài đầu ra",
            "body": "A token is a chunk of text (a word, part of a word or punctuation) that the model processes. Token count matters because models limit how much they can handle and many services price by tokens. The context window is the amount of text (input plus output) the model can consider at once; a larger window lets you supply longer documents or conversations but costs more compute. Output length (max output tokens) caps how long the response can be; set it to control verbosity, cost and latency, though too low a limit can truncate an answer.",
            "body_vi": "Token là một mảnh văn bản (từ, một phần từ hoặc dấu câu) mà model xử lý. Token count quan trọng vì model giới hạn lượng xử lý được và nhiều dịch vụ tính giá theo token. Context window là lượng văn bản (đầu vào cộng đầu ra) model có thể xét cùng lúc; cửa sổ lớn hơn cho phép đưa tài liệu hoặc hội thoại dài hơn nhưng tốn tính toán hơn. Output length (max output tokens) giới hạn độ dài phản hồi; dùng để kiểm soát độ dài, chi phí và độ trễ, nhưng giới hạn quá thấp có thể cắt cụt câu trả lời."
          },
          {
            "heading": "Temperature and top-p",
            "heading_vi": "Temperature và top-p",
            "body": "The model assigns a probability to each possible next token. Temperature controls randomness when choosing: low temperature makes output more deterministic and repeatable (best for factual Q&A, extraction, code), high temperature makes it more diverse and creative (brainstorming, marketing copy). Top-p (nucleus sampling) restricts choice to the smallest set of tokens whose cumulative probability reaches p: a low top-p keeps only the most likely tokens (focused, consistent), a high top-p admits more candidates (more varied).\n\nIndicative ranges from the course material: factual tasks, temperature about 0.0 to 0.2 with top-p about 0.1 to 0.5; balanced, temperature about 0.2 to 0.5 with top-p 0.7 to 0.8; creative, temperature about 0.7 to 1.0 with top-p about 0.9 to 0.95. The rule of thumb: when in doubt for accuracy and consistency, lower the temperature. Hallucinations are not eliminated by temperature 0; grounding is still needed.",
            "body_vi": "Model gán xác suất cho mỗi token tiếp theo có thể. Temperature điều khiển độ ngẫu nhiên khi chọn: temperature thấp làm đầu ra xác định và lặp lại được (tốt cho hỏi đáp sự thật, trích xuất, code), temperature cao làm đầu ra đa dạng và sáng tạo (brainstorm, nội dung marketing). Top-p (nucleus sampling) giới hạn lựa chọn trong tập token nhỏ nhất có xác suất tích lũy đạt p: top-p thấp chỉ giữ token khả dĩ nhất (tập trung, nhất quán), top-p cao cho nhiều ứng viên hơn (đa dạng hơn).\n\nKhoảng tham khảo từ tài liệu khóa học: tác vụ sự thật, temperature khoảng 0.0 đến 0.2 với top-p khoảng 0.1 đến 0.5; cân bằng, temperature khoảng 0.2 đến 0.5 với top-p 0.7 đến 0.8; sáng tạo, temperature khoảng 0.7 đến 1.0 với top-p khoảng 0.9 đến 0.95. Quy tắc: khi phân vân giữa chính xác và nhất quán, hạ temperature. Temperature 0 không loại bỏ hallucination; vẫn cần grounding."
          },
          {
            "heading": "Safety settings",
            "heading_vi": "Cài đặt an toàn",
            "body": "Safety settings configure filters that block or flag harmful content categories (for example harassment, hate speech, sexually explicit or dangerous content) in prompts and responses, with adjustable thresholds. Tighten them for public-facing or regulated applications; relax only with justification and review. They manage content risk, not factual accuracy, and complement, not replace, responsible AI governance and human review.",
            "body_vi": "Safety settings cấu hình bộ lọc chặn hoặc gắn cờ các nhóm nội dung có hại (ví dụ quấy rối, ngôn từ thù ghét, nội dung khiêu dâm hay nguy hiểm) trong prompt và phản hồi, với ngưỡng điều chỉnh được. Siết chặt cho ứng dụng hướng công chúng hoặc bị quản lý; chỉ nới lỏng khi có lý do và có review. Chúng quản lý rủi ro nội dung, không phải độ chính xác sự thật, và bổ sung chứ không thay thế quản trị AI có trách nhiệm và review của con người."
          }
        ],
        "table": {
          "caption": "Parameter effects and typical use",
          "caption_vi": "Tác động tham số và cách dùng điển hình",
          "headers": [
            "Setting",
            "Effect",
            "Typical use"
          ],
          "headers_vi": [
            "Cài đặt",
            "Tác động",
            "Cách dùng điển hình"
          ],
          "rows": [
            [
              "Temperature low",
              "More deterministic, repeatable",
              "Factual Q&A, extraction, code"
            ],
            [
              "Temperature high",
              "More random, creative",
              "Brainstorming, creative writing"
            ],
            [
              "Top-p low / high",
              "Narrow / wide candidate pool",
              "Focused vs varied output"
            ],
            [
              "Output length",
              "Caps response size",
              "Control cost, latency, verbosity"
            ],
            [
              "Context window",
              "Amount of text considered at once",
              "Long documents or chats"
            ],
            [
              "Safety settings",
              "Filter harmful content",
              "Public-facing, regulated apps"
            ]
          ]
        },
        "keyPoints": [
          {
            "en": "Temperature controls randomness: low for facts, high for creativity.",
            "vi": "Temperature điều khiển độ ngẫu nhiên: thấp cho sự thật, cao cho sáng tạo."
          },
          {
            "en": "Top-p (nucleus) limits sampling to tokens within a cumulative probability threshold.",
            "vi": "Top-p (nucleus) giới hạn sampling trong các token trong ngưỡng xác suất tích lũy."
          },
          {
            "en": "Token count and output length affect cost, latency and truncation.",
            "vi": "Token count và output length ảnh hưởng chi phí, độ trễ và việc cắt cụt."
          },
          {
            "en": "A larger context window handles more text but needs more compute.",
            "vi": "Context window lớn xử lý nhiều văn bản hơn nhưng cần nhiều tính toán hơn."
          },
          {
            "en": "Safety settings filter harmful content; they do not guarantee factual accuracy.",
            "vi": "Safety settings lọc nội dung có hại; không đảm bảo độ chính xác sự thật."
          }
        ],
        "examTips": [
          {
            "en": "Consistent, factual, repeatable answers: lower temperature. Varied, creative ideas: raise temperature.",
            "vi": "Câu trả lời nhất quán, đúng sự thật, lặp lại được: hạ temperature. Ý tưởng đa dạng, sáng tạo: tăng temperature."
          },
          {
            "en": "Do not confuse top-p (probability threshold) with top-k or with temperature; both are randomness controls but work differently.",
            "vi": "Đừng nhầm top-p (ngưỡng xác suất) với top-k hay temperature; đều điều khiển độ ngẫu nhiên nhưng cơ chế khác."
          },
          {
            "en": "Setting temperature to 0 is not a fix for hallucination; grounding is.",
            "vi": "Đặt temperature 0 không phải cách sửa hallucination; grounding mới là cách."
          }
        ],
        "terms": [
          {
            "term": "Token",
            "en": "A chunk of text processed by the model.",
            "vi": "Một mảnh văn bản model xử lý."
          },
          {
            "term": "Temperature",
            "en": "Setting controlling randomness of token selection.",
            "vi": "Cài đặt điều khiển độ ngẫu nhiên khi chọn token."
          },
          {
            "term": "Top-p (nucleus sampling)",
            "en": "Sampling from the smallest token set whose cumulative probability reaches p.",
            "vi": "Lấy mẫu từ tập token nhỏ nhất có xác suất tích lũy đạt p."
          },
          {
            "term": "Output length",
            "en": "Maximum length of the generated response.",
            "vi": "Độ dài tối đa của phản hồi sinh ra."
          },
          {
            "term": "Context window",
            "en": "Amount of text the model can consider at once.",
            "vi": "Lượng văn bản model xét được cùng lúc."
          },
          {
            "term": "Safety settings",
            "en": "Configurable filters for harmful content.",
            "vi": "Bộ lọc cấu hình được cho nội dung có hại."
          }
        ],
        "keywords": [
          "temperature",
          "top-p",
          "nucleus sampling",
          "token",
          "token count",
          "output length",
          "max output tokens",
          "context window",
          "safety settings",
          "randomness",
          "deterministic",
          "creative",
          "sampling",
          "parameters",
          "consistent"
        ]
      }
    ]
  },
  {
    "domain": 4,
    "title": "Business Strategies for a Successful Gen AI Solution",
    "title_vi": "Chiến lược kinh doanh cho một giải pháp Gen AI thành công",
    "weight": 15,
    "overview": "This domain tests whether you can guide an organization from choosing the right kind of gen AI solution to running it securely and responsibly. Think in order: recognize the solution types (text, image, code, personalized experiences) and match one to the business need; weigh needs (scale, customization, user interaction, privacy, latency, connectivity) and resources (people, money, time) under a top-down plus bottom-up strategy; integrate it step by step (vision, prioritize, invest, change, measure, champion responsible AI) and measure impact with KPIs; then protect it with secure AI (SAIF, IAM, Security Command Center, workload monitoring) and govern it with responsible AI (transparency, privacy, fairness, accountability, explainability).",
    "overview_vi": "Domain này kiểm tra liệu bạn có dẫn dắt được một tổ chức từ việc chọn đúng loại giải pháp gen AI đến vận hành nó một cách an toàn và có trách nhiệm hay không. Hãy tư duy theo thứ tự: nhận diện các loại giải pháp (text, ảnh, code, trải nghiệm cá nhân hóa) và khớp với nhu cầu kinh doanh; cân nhắc needs (scale, customization, user interaction, privacy, latency, connectivity) và resources (người, tiền, thời gian) dưới chiến lược top-down kết hợp bottom-up; tích hợp từng bước (vision, ưu tiên, đầu tư, thay đổi, đo lường, thúc đẩy responsible AI) và đo tác động bằng KPI; sau đó bảo vệ bằng secure AI (SAIF, IAM, Security Command Center, workload monitoring) và quản trị bằng responsible AI (minh bạch, quyền riêng tư, công bằng, trách nhiệm giải trình, khả năng giải thích).",
    "topics": [
      {
        "id": "d4-t1",
        "objective": "Describe the Google Cloud-recommended steps to successfully implement a transformational gen AI solution: recognizing the different types of gen AI solutions (e.g., text generation, image generation, code generation, personalized user needs) and describing how to choose the right gen AI solution for a specific business need.",
        "title": "Types of gen AI solutions and choosing the right one",
        "title_vi": "Các loại giải pháp gen AI và cách chọn giải pháp phù hợp",
        "sources": [
          "exam-guide-official-checklist.md",
          "module1-v2.md",
          "module4-v2.md",
          "module5-v2.md",
          "bonus-reference-guide.md",
          "study.txt"
        ],
        "sections": [
          {
            "heading": "What counts as a gen AI solution",
            "heading_vi": "Giải pháp gen AI gồm những gì",
            "body": "A gen AI solution applies a generative model to create new content for a business purpose. The exam guide names four families: text generation (drafting, summarizing, chat, translation), image generation (marketing visuals, product mock-ups), code generation (writing, explaining and fixing code) and solutions that address personalized user needs (recommendations, tailored answers and feedback for each user). Multimodal models can combine text, image, audio and video in one solution.\n\nThe type of solution follows the type of output the business needs. The model's modality (the data types it accepts and produces) is therefore the first filter when choosing a model.",
            "body_vi": "Giải pháp gen AI là việc áp dụng một mô hình sinh (generative model) để tạo nội dung mới phục vụ mục tiêu kinh doanh. Exam guide nêu bốn nhóm: text generation (soạn thảo, tóm tắt, chat, dịch), image generation (hình ảnh marketing, mock-up sản phẩm), code generation (viết, giải thích và sửa code) và các giải pháp đáp ứng nhu cầu cá nhân hóa của người dùng (gợi ý, câu trả lời và phản hồi riêng cho từng người). Mô hình multimodal có thể kết hợp text, hình ảnh, audio và video trong cùng một giải pháp.\n\nLoại giải pháp đi theo loại đầu ra mà doanh nghiệp cần. Vì vậy modality của mô hình (kiểu dữ liệu nhận vào và tạo ra) là bộ lọc đầu tiên khi chọn mô hình.",
            "bullets": [
              {
                "en": "Text generation: drafting, summarizing, Q&A, chat.",
                "vi": "Text generation: soạn thảo, tóm tắt, hỏi đáp, chat."
              },
              {
                "en": "Image generation: marketing and design visuals.",
                "vi": "Image generation: hình ảnh marketing, thiết kế."
              },
              {
                "en": "Code generation: write, explain, debug code.",
                "vi": "Code generation: viết, giải thích, gỡ lỗi code."
              },
              {
                "en": "Personalized experiences: recommendations and tailored responses.",
                "vi": "Trải nghiệm cá nhân hóa: gợi ý và phản hồi riêng cho từng người dùng."
              }
            ]
          },
          {
            "heading": "Matching the solution to the business need",
            "heading_vi": "Khớp giải pháp với nhu cầu kinh doanh",
            "body": "Start from the business problem, not the technology. Google Cloud's recommended roadmap is: identify requirements and constraints (business requirements such as cost and ROI, technical constraints such as data privacy and latency), select the gen AI tool that best fits the specific need (text, image, code), then measure impact with KPIs.\n\nThe workbook lists factors for choosing a model: modality, context window (larger windows give more coherent answers but cost more compute), performance (accuracy, speed, efficiency versus cost) and availability and reliability (uptime, redundancy, disaster recovery). The largest model is not automatically the best; balance quality against cost and latency.",
            "body_vi": "Hãy bắt đầu từ bài toán kinh doanh, không phải từ công nghệ. Lộ trình Google Cloud khuyến nghị là: xác định yêu cầu và ràng buộc (yêu cầu kinh doanh như chi phí, ROI; ràng buộc kỹ thuật như quyền riêng tư dữ liệu, độ trễ), chọn công cụ gen AI phù hợp nhất với nhu cầu cụ thể (text, ảnh, code), rồi đo tác động bằng KPI.\n\nWorkbook liệt kê các yếu tố khi chọn mô hình: modality, context window (cửa sổ lớn cho câu trả lời mạch lạc hơn nhưng tốn tính toán hơn), performance (độ chính xác, tốc độ, hiệu quả so với chi phí) và availability/reliability (uptime, dự phòng, khôi phục sau thảm họa). Mô hình lớn nhất chưa chắc là tốt nhất; hãy cân bằng chất lượng với chi phí và độ trễ."
          },
          {
            "heading": "Build, buy or customize on Google Cloud",
            "heading_vi": "Build, buy hay customize trên Google Cloud",
            "body": "The decks present a spectrum. Use ready-made products (Gemini app, Gemini for Google Workspace, Gemini Enterprise) when they already meet the need; customize with Google Cloud platforms (Agent Studio and no-code agent building, grounding and RAG with Agent Search or RAG APIs, pre-built APIs such as Speech-to-Text or Document Translation) when you need company data or specific behavior; and build or tune on Agent Platform (formerly Vertex AI, with Model Garden and fine-tuning) when you need deep control.\n\nChoose the simplest option that meets the need. More customization means more people, money and time, which is why the next topic ties choices to needs and resources.",
            "body_vi": "Các deck trình bày một phổ lựa chọn. Dùng sản phẩm có sẵn (Gemini app, Gemini for Google Workspace, Gemini Enterprise) khi chúng đã đáp ứng nhu cầu; tùy biến (customize) bằng các nền tảng Google Cloud (Agent Studio và xây dựng agent no-code, grounding và RAG với Agent Search hoặc RAG APIs, các API dựng sẵn như Speech-to-Text hay Document Translation) khi cần dữ liệu công ty hoặc hành vi riêng; và xây dựng/tinh chỉnh trên Agent Platform (trước đây là Vertex AI, có Model Garden và fine-tuning) khi cần kiểm soát sâu.\n\nHãy chọn phương án đơn giản nhất đáp ứng được nhu cầu. Tùy biến càng nhiều thì càng tốn người, tiền và thời gian, nên topic tiếp theo gắn lựa chọn với nhu cầu và nguồn lực."
          }
        ],
        "table": {
          "caption": "Build vs buy vs customize spectrum",
          "caption_vi": "Phổ build - buy - customize",
          "headers": [
            "Approach",
            "Examples on Google Cloud",
            "Best when"
          ],
          "headers_vi": [
            "Cách tiếp cận",
            "Ví dụ trên Google Cloud",
            "Phù hợp khi"
          ],
          "rows": [
            [
              "Buy / use ready-made",
              "Gemini app, Gemini for Google Workspace, Gemini Enterprise",
              "A standard need and fast time-to-value; limited AI expertise"
            ],
            [
              "Customize",
              "Agent Studio, grounding/RAG (Agent Search, RAG APIs), pre-built APIs",
              "You need company data or specific workflows without training a model"
            ],
            [
              "Build / tune",
              "Agent Platform, Model Garden, fine-tuning",
              "Highly specialized needs and you have the people, budget and time"
            ]
          ]
        },
        "keyPoints": [
          {
            "en": "Four solution families in the guide: text, image, code generation and personalized user experiences.",
            "vi": "Bốn nhóm giải pháp trong guide: tạo text, ảnh, code và trải nghiệm cá nhân hóa."
          },
          {
            "en": "Always start from the business problem and constraints, not from the model.",
            "vi": "Luôn bắt đầu từ bài toán và ràng buộc kinh doanh, không phải từ mô hình."
          },
          {
            "en": "Model selection factors: modality, context window, performance, availability and reliability.",
            "vi": "Yếu tố chọn mô hình: modality, context window, performance, availability và reliability."
          },
          {
            "en": "Spectrum: ready-made product, then customize (grounding, RAG, agents), then build or tune.",
            "vi": "Phổ lựa chọn: sản phẩm có sẵn, rồi tùy biến (grounding, RAG, agent), rồi build/tune."
          },
          {
            "en": "Pick the simplest option that meets the need; the biggest model is not always best.",
            "vi": "Chọn phương án đơn giản nhất đáp ứng nhu cầu; mô hình lớn nhất không phải lúc nào cũng tốt nhất."
          }
        ],
        "examTips": [
          {
            "en": "If the scenario needs only a standard capability, the best answer is usually the ready-made or no-code option, not training a custom model.",
            "vi": "Nếu tình huống chỉ cần năng lực chuẩn, đáp án tốt nhất thường là sản phẩm có sẵn hoặc no-code, không phải huấn luyện mô hình riêng."
          },
          {
            "en": "Match the output type to the solution: image output means an image-capable model, not a text-only one.",
            "vi": "Khớp loại đầu ra với giải pháp: đầu ra ảnh cần mô hình tạo được ảnh, không phải mô hình chỉ có text."
          },
          {
            "en": "Answers that skip requirements and constraints and jump to technology are typically wrong.",
            "vi": "Đáp án bỏ qua yêu cầu và ràng buộc để nhảy vào công nghệ thường là sai."
          }
        ],
        "terms": [
          {
            "term": "Modality",
            "en": "The type of data a model accepts or produces (text, image, audio, video).",
            "vi": "Kiểu dữ liệu mô hình nhận hoặc tạo ra (text, ảnh, audio, video)."
          },
          {
            "term": "Context window",
            "en": "How much input the model can consider at once; larger windows cost more compute.",
            "vi": "Lượng đầu vào mô hình xem xét cùng lúc; cửa sổ lớn tốn nhiều tính toán hơn."
          },
          {
            "term": "Code generation",
            "en": "Using gen AI to write, explain or fix source code.",
            "vi": "Dùng gen AI để viết, giải thích hoặc sửa mã nguồn."
          },
          {
            "term": "Personalization",
            "en": "Tailoring content or recommendations to an individual user.",
            "vi": "Điều chỉnh nội dung hoặc gợi ý cho từng người dùng."
          },
          {
            "term": "Grounding / RAG",
            "en": "Connecting model answers to trusted, current data without retraining.",
            "vi": "Gắn câu trả lời của mô hình với dữ liệu tin cậy, cập nhật mà không cần huấn luyện lại."
          },
          {
            "term": "Agent Platform",
            "en": "Google Cloud's unified platform to build, tune and deploy gen AI (formerly Vertex AI).",
            "vi": "Nền tảng hợp nhất của Google Cloud để xây dựng, tinh chỉnh, triển khai gen AI (trước đây là Vertex AI)."
          }
        ],
        "keywords": [
          "text generation",
          "image generation",
          "code generation",
          "personalization",
          "personalized",
          "multimodal",
          "modality",
          "context window",
          "business requirements",
          "technical constraints",
          "choose the right",
          "ready-made",
          "customize",
          "fine-tuning",
          "agent studio"
        ]
      },
      {
        "id": "d4-t2",
        "objective": "Identify the key factors that influence gen AI needs (e.g., business requirements, technical constraints) and describe the overall gen AI strategy Google Cloud recommends.",
        "title": "Factors that shape gen AI needs and overall strategy",
        "title_vi": "Các yếu tố định hình nhu cầu gen AI và chiến lược tổng thể",
        "sources": [
          "exam-guide-official-checklist.md",
          "study.txt",
          "module5-v2.md",
          "bonus-reference-guide.md"
        ],
        "sections": [
          {
            "heading": "Questions to ask before starting",
            "heading_vi": "Những câu hỏi cần đặt ra trước khi bắt đầu",
            "body": "The workbook says to consider needs and resources before starting a gen AI project. Needs: scale (how many users?), customization (how specialized is the AI?), user interaction (how will users engage?), privacy (how sensitive is the data?), latency (what response time is acceptable?) and connectivity (what is the network situation?). Resources: people (is AI expertise available?), money (what is the budget?) and time (what are the timelines?).\n\nThese map to business requirements (cost, ROI, timeline) and technical constraints (privacy, latency, connectivity). A real-time on-device use case with poor connectivity, for example, pushes toward a different solution than a batch back-office summarizer.",
            "body_vi": "Workbook nói cần cân nhắc nhu cầu (needs) và nguồn lực (resources) trước khi bắt đầu dự án gen AI. Needs: scale (bao nhiêu người dùng?), customization (AI chuyên biệt đến đâu?), user interaction (người dùng tương tác thế nào?), privacy (dữ liệu nhạy cảm đến đâu?), latency (thời gian phản hồi chấp nhận được?) và connectivity (kết nối mạng ra sao?). Resources: people (có chuyên gia AI không?), money (ngân sách?) và time (tiến độ?).\n\nChúng tương ứng với yêu cầu kinh doanh (chi phí, ROI, tiến độ) và ràng buộc kỹ thuật (quyền riêng tư, độ trễ, kết nối). Ví dụ, ca dùng thời gian thực trên thiết bị với kết nối kém sẽ dẫn tới giải pháp khác với ca tóm tắt hàng loạt ở back-office.",
            "bullets": [
              {
                "en": "Needs: Scale, Customization, User interaction, Privacy, Latency, Connectivity.",
                "vi": "Needs: Scale, Customization, User interaction, Privacy, Latency, Connectivity."
              },
              {
                "en": "Resources: People, Money, Time.",
                "vi": "Resources: People, Money, Time."
              }
            ]
          },
          {
            "heading": "Top-down plus bottom-up",
            "heading_vi": "Top-down kết hợp bottom-up",
            "body": "Google Cloud recommends combining a top-down approach (leadership sets the vision and strategy) with a bottom-up approach (employees identify practical applications and give feedback). Top-down alone risks solutions detached from daily work; bottom-up alone risks scattered pilots with no funding or alignment.",
            "body_vi": "Google Cloud khuyến nghị kết hợp cách tiếp cận top-down (lãnh đạo đặt tầm nhìn và chiến lược) với bottom-up (nhân viên tìm ứng dụng thực tế và phản hồi). Chỉ top-down dễ tạo giải pháp xa rời công việc hằng ngày; chỉ bottom-up dễ dẫn tới các pilot rời rạc, thiếu ngân sách và thiếu đồng bộ."
          },
          {
            "heading": "Six strategy pillars",
            "heading_vi": "Sáu trụ cột chiến lược",
            "body": "The workbook lists six pillars: strategic focus (focused implementations with clear business value), exploration (encourage experimentation and collaboration), responsible AI (ethical guidelines, secure and responsible development), resourcing (invest in data strategy, leverage existing resources, develop AI talent), impact (measure impact on business goals and show tangible benefits) and continuous improvement (refine solutions from feedback and data).\n\nBusiness implication: strategy is a cycle. Focus and explore, resource it, deliver impact, learn, and refine, all under responsible AI.",
            "body_vi": "Workbook liệt kê sáu trụ cột: strategic focus (triển khai tập trung, giá trị kinh doanh rõ), exploration (khuyến khích thử nghiệm và hợp tác), responsible AI (nguyên tắc đạo đức, phát triển an toàn và có trách nhiệm), resourcing (đầu tư chiến lược dữ liệu, tận dụng nguồn lực sẵn có, phát triển nhân tài AI), impact (đo tác động lên mục tiêu kinh doanh và chứng minh lợi ích cụ thể) và continuous improvement (liên tục cải tiến giải pháp từ phản hồi và dữ liệu).\n\nÝ nghĩa kinh doanh: chiến lược là một vòng lặp. Tập trung và khám phá, cấp nguồn lực, tạo tác động, học hỏi và tinh chỉnh, tất cả dưới responsible AI."
          }
        ],
        "table": {
          "caption": "Six gen AI strategy pillars",
          "caption_vi": "Sáu trụ cột chiến lược gen AI",
          "headers": [
            "Pillar",
            "Meaning"
          ],
          "headers_vi": [
            "Trụ cột",
            "Ý nghĩa"
          ],
          "rows": [
            [
              "Strategic focus",
              "Prioritize focused implementations with clear business value"
            ],
            [
              "Exploration",
              "Encourage experimentation and collaboration"
            ],
            [
              "Responsible AI",
              "Ethical guidelines; secure and responsible development"
            ],
            [
              "Resourcing",
              "Data strategy, existing resources, AI talent"
            ],
            [
              "Impact",
              "Measure impact on business goals; show tangible benefits"
            ],
            [
              "Continuous improvement",
              "Refine based on feedback and data"
            ]
          ]
        },
        "keyPoints": [
          {
            "en": "Needs: scale, customization, user interaction, privacy, latency, connectivity.",
            "vi": "Needs: scale, customization, user interaction, privacy, latency, connectivity."
          },
          {
            "en": "Resources: people, money, time.",
            "vi": "Resources: people, money, time."
          },
          {
            "en": "Best strategy combines top-down (leadership vision) and bottom-up (employee ideas and feedback).",
            "vi": "Chiến lược tốt kết hợp top-down (tầm nhìn lãnh đạo) và bottom-up (ý tưởng và phản hồi của nhân viên)."
          },
          {
            "en": "Six pillars: strategic focus, exploration, responsible AI, resourcing, impact, continuous improvement.",
            "vi": "Sáu trụ cột: strategic focus, exploration, responsible AI, resourcing, impact, continuous improvement."
          },
          {
            "en": "Business requirements and technical constraints both influence which solution fits.",
            "vi": "Yêu cầu kinh doanh và ràng buộc kỹ thuật cùng quyết định giải pháp phù hợp."
          }
        ],
        "examTips": [
          {
            "en": "A question about 'latency' or 'connectivity' is testing the Needs list, while 'budget' or 'expertise' is testing Resources.",
            "vi": "Câu hỏi về 'latency' hay 'connectivity' đang kiểm tra danh sách Needs, còn 'budget' hay 'expertise' kiểm tra Resources."
          },
          {
            "en": "If options are only top-down or only bottom-up, the answer that combines both is the Google Cloud recommendation.",
            "vi": "Nếu các lựa chọn chỉ top-down hoặc chỉ bottom-up, đáp án kết hợp cả hai là khuyến nghị của Google Cloud."
          },
          {
            "en": "Do not confuse the strategy pillars with the integration steps (vision, prioritize, invest, change, measure, champion).",
            "vi": "Đừng nhầm các trụ cột chiến lược với các bước tích hợp (vision, prioritize, invest, change, measure, champion)."
          }
        ],
        "terms": [
          {
            "term": "Top-down",
            "en": "Leadership sets vision and strategy.",
            "vi": "Lãnh đạo đặt tầm nhìn và chiến lược."
          },
          {
            "term": "Bottom-up",
            "en": "Employees find practical uses and give feedback.",
            "vi": "Nhân viên tìm ứng dụng thực tế và phản hồi."
          },
          {
            "term": "Latency",
            "en": "Time between a request and the model's response.",
            "vi": "Thời gian từ lúc gửi yêu cầu đến khi mô hình phản hồi."
          },
          {
            "term": "Connectivity",
            "en": "Network access available to users or devices running the solution.",
            "vi": "Khả năng kết nối mạng của người dùng/thiết bị chạy giải pháp."
          },
          {
            "term": "Resourcing",
            "en": "Investing in data strategy, existing assets and AI talent.",
            "vi": "Đầu tư vào chiến lược dữ liệu, tài sản sẵn có và nhân tài AI."
          },
          {
            "term": "Continuous improvement",
            "en": "Refining solutions using feedback and data over time.",
            "vi": "Liên tục tinh chỉnh giải pháp bằng phản hồi và dữ liệu."
          }
        ],
        "keywords": [
          "scale",
          "customization",
          "user interaction",
          "privacy",
          "latency",
          "connectivity",
          "people",
          "money",
          "time",
          "top-down",
          "bottom-up",
          "strategic focus",
          "exploration",
          "resourcing",
          "continuous improvement"
        ]
      },
      {
        "id": "d4-t3",
        "objective": "Identify the steps to integrate gen AI into an organization and identify techniques to measure the impact of gen AI initiatives.",
        "title": "Integrating gen AI into the organization and measuring impact",
        "title_vi": "Tích hợp gen AI vào tổ chức và đo lường tác động",
        "sources": [
          "exam-guide-official-checklist.md",
          "study.txt",
          "module5-v2.md",
          "bonus-reference-guide.md"
        ],
        "sections": [
          {
            "heading": "Six steps to integrate gen AI",
            "heading_vi": "Sáu bước tích hợp gen AI",
            "body": "Google Cloud's plan: establish a clear vision, prioritize use cases, invest in capabilities, manage change, measure value, and champion responsible AI.\n\nVision means aligning with business strategy, securing leadership buy-in and naming champions. Prioritizing is based on feasibility and transformative value: technical feasibility, data readiness and alignment with business goals. Investing in capabilities means training and hiring plus a culture of learning and proofs of concept. Managing change means adapting workflows and sharing knowledge. Measuring value means tracking with quantitative KPIs to show ROI. Championing responsible AI means governance across the company for fairness, transparency, privacy and security.",
            "body_vi": "Kế hoạch của Google Cloud: thiết lập vision rõ ràng, ưu tiên use case, đầu tư năng lực, quản lý thay đổi, đo giá trị và thúc đẩy responsible AI.\n\nVision nghĩa là gắn với chiến lược doanh nghiệp, có sự ủng hộ của lãnh đạo và chỉ định người dẫn dắt (champion). Ưu tiên dựa trên tính khả thi và giá trị chuyển đổi: khả thi kỹ thuật, mức sẵn sàng của dữ liệu và độ phù hợp với mục tiêu kinh doanh. Đầu tư năng lực là đào tạo, tuyển dụng và văn hóa học hỏi, thử nghiệm PoC. Quản lý thay đổi là điều chỉnh quy trình và chia sẻ kiến thức. Đo giá trị là theo dõi bằng KPI định lượng để chứng minh ROI. Thúc đẩy responsible AI là quản trị toàn công ty về công bằng, minh bạch, quyền riêng tư và bảo mật.",
            "bullets": [
              {
                "en": "1 Vision, 2 Prioritize use cases, 3 Invest in capabilities, 4 Manage change, 5 Measure value, 6 Champion responsible AI.",
                "vi": "1 Vision, 2 Ưu tiên use case, 3 Đầu tư năng lực, 4 Quản lý thay đổi, 5 Đo giá trị, 6 Thúc đẩy responsible AI."
              }
            ]
          },
          {
            "heading": "Planning for impact: measuring it",
            "heading_vi": "Lập kế hoạch cho tác động: cách đo",
            "body": "The decks give three techniques: define key metrics (those most relevant to your goals and business objectives), collect and analyze data (set up tracking mechanisms, run surveys and analyze existing data), and improve continuously through iteration, using the insights to refine strategy and optimize performance.\n\nTypical KPIs used in the study material include ROI, time saved, customer satisfaction (CSAT) and error rate. Choose metrics tied to the original business goal, not just technical model scores.",
            "body_vi": "Các deck nêu ba kỹ thuật: xác định chỉ số chính (liên quan nhất tới mục tiêu và mục tiêu kinh doanh), thu thập và phân tích dữ liệu (thiết lập cơ chế theo dõi, khảo sát và phân tích dữ liệu sẵn có), và cải tiến liên tục qua lặp, dùng insight để tinh chỉnh chiến lược và tối ưu hiệu suất.\n\nCác KPI điển hình trong tài liệu ôn gồm ROI, thời gian tiết kiệm, mức hài lòng khách hàng (CSAT) và tỉ lệ lỗi. Hãy chọn chỉ số gắn với mục tiêu kinh doanh ban đầu, không chỉ điểm số kỹ thuật của mô hình."
          },
          {
            "heading": "Planning for change",
            "heading_vi": "Lập kế hoạch cho thay đổi",
            "body": "Gen AI evolves quickly. The deck recommends reviewing and improving strategy regularly, staying informed, engaging with the gen AI community, investing in training and capability building, and attracting and retaining talent. Treat adoption as ongoing, not a one-time rollout.",
            "body_vi": "Gen AI phát triển rất nhanh. Deck khuyến nghị thường xuyên rà soát và cải thiện chiến lược, cập nhật thông tin, tham gia cộng đồng gen AI, đầu tư đào tạo và phát triển năng lực, thu hút và giữ chân nhân tài. Hãy coi việc áp dụng là liên tục, không phải triển khai một lần."
          }
        ],
        "keyPoints": [
          {
            "en": "Integration steps: vision, prioritize use cases, invest in capabilities, manage change, measure value, champion responsible AI.",
            "vi": "Các bước tích hợp: vision, ưu tiên use case, đầu tư năng lực, quản lý thay đổi, đo giá trị, thúc đẩy responsible AI."
          },
          {
            "en": "Prioritize by feasibility, data readiness and alignment with business goals.",
            "vi": "Ưu tiên theo tính khả thi, mức sẵn sàng dữ liệu và độ phù hợp mục tiêu kinh doanh."
          },
          {
            "en": "Measure impact: define key metrics, collect and analyze data, iterate to improve.",
            "vi": "Đo tác động: xác định chỉ số chính, thu thập và phân tích dữ liệu, lặp để cải thiện."
          },
          {
            "en": "KPIs should link to business goals (ROI, time saved, CSAT, error rate).",
            "vi": "KPI phải gắn với mục tiêu kinh doanh (ROI, thời gian tiết kiệm, CSAT, tỉ lệ lỗi)."
          },
          {
            "en": "Leadership buy-in and champions are part of establishing the vision.",
            "vi": "Sự ủng hộ của lãnh đạo và champion là một phần của việc thiết lập vision."
          }
        ],
        "examTips": [
          {
            "en": "The first step is a clear vision with leadership support; answers that start with deploying a big model are wrong.",
            "vi": "Bước đầu là vision rõ ràng cùng sự ủng hộ của lãnh đạo; đáp án bắt đầu bằng triển khai mô hình lớn là sai."
          },
          {
            "en": "Responsible AI is championed as part of integration, not added at the end as an afterthought.",
            "vi": "Responsible AI được thúc đẩy ngay trong quá trình tích hợp, không phải thêm vào sau cùng."
          },
          {
            "en": "To show value, choose business KPIs and iterate; a one-off demo is not measurement.",
            "vi": "Để chứng minh giá trị, chọn KPI kinh doanh và lặp lại; một demo đơn lẻ không phải là đo lường."
          }
        ],
        "terms": [
          {
            "term": "Use case prioritization",
            "en": "Ranking use cases by feasibility, data readiness and business alignment.",
            "vi": "Xếp hạng use case theo tính khả thi, dữ liệu sẵn sàng và độ phù hợp kinh doanh."
          },
          {
            "term": "Change management",
            "en": "Helping people and workflows adapt to new AI-enabled ways of working.",
            "vi": "Giúp con người và quy trình thích nghi với cách làm việc có AI."
          },
          {
            "term": "KPI",
            "en": "Quantitative key performance indicator tied to a business goal.",
            "vi": "Chỉ số hiệu suất chính định lượng gắn với mục tiêu kinh doanh."
          },
          {
            "term": "ROI",
            "en": "Return on investment; value gained relative to cost.",
            "vi": "Lợi tức đầu tư; giá trị thu được so với chi phí."
          },
          {
            "term": "Proof of concept (PoC)",
            "en": "A small experiment to test feasibility and value.",
            "vi": "Thử nghiệm nhỏ để kiểm chứng tính khả thi và giá trị."
          },
          {
            "term": "Champion",
            "en": "A designated advocate who drives adoption in the organization.",
            "vi": "Người được chỉ định dẫn dắt việc áp dụng trong tổ chức."
          }
        ],
        "keywords": [
          "integrate gen ai",
          "vision",
          "prioritize use cases",
          "invest in capabilities",
          "change management",
          "measure value",
          "champion responsible ai",
          "kpi",
          "roi",
          "measure impact",
          "leadership buy-in",
          "proof of concept",
          "adoption",
          "key metrics",
          "iterate"
        ]
      },
      {
        "id": "d4-t4",
        "objective": "Define secure AI and its importance in protecting AI systems from malicious attacks and misuse: security throughout the ML lifecycle, Google's Secure AI Framework (SAIF), and Google Cloud security tools (secure-by-design infrastructure, IAM, Security Command Center, workload monitoring).",
        "title": "Secure AI: SAIF and Google Cloud security tools",
        "title_vi": "Secure AI: SAIF và các công cụ bảo mật của Google Cloud",
        "sources": [
          "exam-guide-official-checklist.md",
          "study.txt",
          "module2-v2.md",
          "bonus-reference-guide.md"
        ],
        "sections": [
          {
            "heading": "What secure AI means and why it matters",
            "heading_vi": "Secure AI là gì và vì sao quan trọng",
            "body": "Secure AI means protecting your AI applications from harm: malicious attacks and misuse. AI brings large benefits but also security risks. AI-specific threats named in the study material include prompt injection, data poisoning and model extraction or theft, on top of ordinary security threats.\n\nSecurity must cover the whole ML lifecycle: data collection, data preparation, model training, deployment and prediction, and model management. Two principles applied across it are to protect against adversarial attacks and to monitor AI output to prevent leaks and harmful content.",
            "body_vi": "Secure AI nghĩa là bảo vệ các ứng dụng AI khỏi bị tổn hại: tấn công độc hại và lạm dụng. AI mang lại lợi ích lớn nhưng cũng kèm rủi ro bảo mật. Các mối đe dọa đặc thù AI nêu trong tài liệu ôn gồm prompt injection, data poisoning và model extraction/theft, bên cạnh các mối đe dọa bảo mật thông thường.\n\nBảo mật phải bao phủ toàn bộ vòng đời ML: thu thập dữ liệu, chuẩn bị dữ liệu, huấn luyện mô hình, triển khai và dự đoán, và quản lý mô hình. Hai nguyên tắc áp dụng xuyên suốt là bảo vệ trước adversarial attack và giám sát đầu ra của AI để ngăn rò rỉ và nội dung có hại."
          },
          {
            "heading": "Google's Secure AI Framework (SAIF)",
            "heading_vi": "Secure AI Framework (SAIF) của Google",
            "body": "SAIF is Google's framework that helps organizations manage AI/ML model risks and ensure security. In the course it is described by three core principles: build responsibly (embed security and ethics from the start of development), deploy securely (a safe path to production and protection of operations from vulnerabilities and threats) and establish security standards (consistent evaluation and operating rules that strengthen governance and compliance).\n\nThe supplementary deck stresses that SAIF is not an isolated AI-only mechanism; it extends existing security foundations (for example zero-trust controls) across the AI stack, adds AI-specific threat modeling and relies on continuous monitoring and incident response across the lifecycle. SAIF is a framework, not a product to buy.",
            "body_vi": "SAIF là framework của Google giúp tổ chức quản lý rủi ro mô hình AI/ML và đảm bảo bảo mật. Trong khóa học, nó được mô tả bằng ba nguyên tắc cốt lõi: build responsibly (đưa bảo mật và đạo đức vào ngay từ đầu quá trình phát triển), deploy securely (đường đi an toàn lên production và bảo vệ vận hành khỏi lỗ hổng, mối đe dọa) và establish security standards (quy tắc đánh giá, vận hành nhất quán giúp tăng cường governance và tuân thủ).\n\nDeck bổ sung nhấn mạnh SAIF không phải cơ chế riêng chỉ cho AI; nó mở rộng nền tảng bảo mật sẵn có (ví dụ kiểm soát zero-trust) sang toàn bộ AI stack, bổ sung threat modeling đặc thù AI và dựa vào giám sát liên tục cùng ứng phó sự cố xuyên suốt vòng đời. SAIF là một framework, không phải sản phẩm để mua."
          },
          {
            "heading": "Google Cloud security tools",
            "heading_vi": "Các công cụ bảo mật của Google Cloud",
            "body": "Google Cloud's secure-by-design infrastructure supports security across the AI/ML lifecycle, and tools protect data, models and applications. Identity and Access Management (IAM) controls who can access which resources (fine-grained, least privilege). Security Command Center gives visibility into security posture and centralizes vulnerability findings and threat detection. Workload monitoring tools help build and maintain secure AI systems through anomaly detection and audit logging. Encryption protects data at rest and in transit.\n\nThe course also mentions Google Threat Intelligence Group and Mandiant for threat intelligence and incident response, moving security operations toward an AI-driven model.",
            "body_vi": "Hạ tầng secure-by-design của Google Cloud hỗ trợ bảo mật xuyên suốt vòng đời AI/ML, và các công cụ bảo vệ dữ liệu, mô hình, ứng dụng. Identity and Access Management (IAM) kiểm soát ai được truy cập tài nguyên nào (chi tiết, đặc quyền tối thiểu). Security Command Center cho thấy tư thế bảo mật (security posture) và tập trung các phát hiện lỗ hổng, phát hiện mối đe dọa. Công cụ workload monitoring giúp xây dựng và duy trì hệ thống AI an toàn nhờ phát hiện bất thường và audit log. Mã hóa bảo vệ dữ liệu khi lưu trữ và khi truyền.\n\nKhóa học cũng nhắc Google Threat Intelligence Group và Mandiant cho threat intelligence và ứng phó sự cố, đưa vận hành bảo mật theo hướng do AI dẫn dắt."
          }
        ],
        "table": {
          "caption": "Which tool for which purpose",
          "caption_vi": "Công cụ nào cho mục đích nào",
          "headers": [
            "Tool / concept",
            "Purpose"
          ],
          "headers_vi": [
            "Công cụ / khái niệm",
            "Mục đích"
          ],
          "rows": [
            [
              "Secure-by-design infrastructure",
              "Foundation that supports security across the AI/ML lifecycle"
            ],
            [
              "IAM",
              "Control who can access which resources"
            ],
            [
              "Security Command Center",
              "Visibility into security posture; vulnerability and threat findings"
            ],
            [
              "Workload monitoring tools",
              "Build and maintain secure AI systems; detect anomalies"
            ],
            [
              "SAIF",
              "Framework to manage AI/ML model risks and ensure security"
            ]
          ]
        },
        "keyPoints": [
          {
            "en": "Secure AI protects AI systems from malicious attacks and misuse.",
            "vi": "Secure AI bảo vệ hệ thống AI khỏi tấn công độc hại và lạm dụng."
          },
          {
            "en": "Security applies at every ML lifecycle stage, from data collection to model management.",
            "vi": "Bảo mật áp dụng ở mọi giai đoạn vòng đời ML, từ thu thập dữ liệu đến quản lý mô hình."
          },
          {
            "en": "SAIF is Google's framework to manage AI/ML risks; it builds on existing security foundations.",
            "vi": "SAIF là framework của Google để quản lý rủi ro AI/ML; nó xây trên nền tảng bảo mật sẵn có."
          },
          {
            "en": "IAM controls access; Security Command Center shows security posture; workload monitoring maintains secure systems.",
            "vi": "IAM kiểm soát truy cập; Security Command Center cho thấy security posture; workload monitoring duy trì hệ thống an toàn."
          },
          {
            "en": "AI-specific threats: prompt injection, data poisoning, model extraction.",
            "vi": "Mối đe dọa đặc thù AI: prompt injection, data poisoning, model extraction."
          }
        ],
        "examTips": [
          {
            "en": "IAM = who can access; Security Command Center = posture visibility. Swapping them is a common distractor.",
            "vi": "IAM = ai được truy cập; Security Command Center = nhìn thấy posture. Đảo hai khái niệm này là bẫy thường gặp."
          },
          {
            "en": "SAIF is a framework for managing AI risk, not a model, a firewall product or a fairness tool.",
            "vi": "SAIF là framework quản lý rủi ro AI, không phải mô hình, sản phẩm tường lửa hay công cụ công bằng."
          },
          {
            "en": "Secure AI is about attacks and misuse; bias and explainability belong to responsible AI.",
            "vi": "Secure AI nói về tấn công và lạm dụng; bias và explainability thuộc responsible AI."
          }
        ],
        "terms": [
          {
            "term": "SAIF",
            "en": "Google's Secure AI Framework for managing AI/ML model risks.",
            "vi": "Secure AI Framework của Google để quản lý rủi ro mô hình AI/ML."
          },
          {
            "term": "IAM",
            "en": "Identity and Access Management; controls access to resources.",
            "vi": "Identity and Access Management; kiểm soát truy cập tài nguyên."
          },
          {
            "term": "Security Command Center",
            "en": "Google Cloud service for security posture visibility and threat findings.",
            "vi": "Dịch vụ Google Cloud cho khả năng quan sát security posture và phát hiện mối đe dọa."
          },
          {
            "term": "Secure-by-design",
            "en": "Infrastructure designed with security built in from the start.",
            "vi": "Hạ tầng được thiết kế với bảo mật tích hợp ngay từ đầu."
          },
          {
            "term": "Prompt injection",
            "en": "Malicious input crafted to manipulate model behavior.",
            "vi": "Đầu vào độc hại nhằm thao túng hành vi mô hình."
          },
          {
            "term": "Data poisoning",
            "en": "Corrupting training data to harm the model.",
            "vi": "Làm hỏng dữ liệu huấn luyện để gây hại cho mô hình."
          },
          {
            "term": "Adversarial attack",
            "en": "Inputs crafted to make a model fail or leak information.",
            "vi": "Đầu vào được tạo ra để khiến mô hình sai hoặc rò rỉ thông tin."
          }
        ],
        "keywords": [
          "secure ai",
          "saif",
          "secure ai framework",
          "iam",
          "identity and access management",
          "security command center",
          "workload monitoring",
          "secure-by-design",
          "prompt injection",
          "data poisoning",
          "adversarial",
          "malicious attacks",
          "misuse",
          "ml lifecycle",
          "encryption"
        ]
      },
      {
        "id": "d4-t5",
        "objective": "Describe the importance of responsible AI in business: responsible AI and transparency, privacy considerations (privacy risks, data anonymization and pseudonymization), the implications of data quality, bias and fairness, and the importance of accountability and explainability in AI systems.",
        "title": "Responsible AI: transparency, privacy, fairness, accountability",
        "title_vi": "Responsible AI: minh bạch, quyền riêng tư, công bằng, trách nhiệm giải trình",
        "sources": [
          "exam-guide-official-checklist.md",
          "study.txt",
          "module2-v2.md",
          "bonus-reference-guide.md"
        ],
        "sections": [
          {
            "heading": "Why responsible AI matters",
            "heading_vi": "Vì sao responsible AI quan trọng",
            "body": "Responsible AI means ensuring your AI applications do not cause harm and are used in an ethical manner. It must be considered throughout the entire AI lifecycle: data preparation, model training, deployment and ongoing monitoring. Google's AI Principles guide this work (as summarized in the reference material: socially beneficial, avoiding unfair bias, built and tested for safety, accountable to people, incorporating privacy design and upholding high standards of scientific excellence).\n\nFor business, responsible AI protects trust, supports legal compliance (data privacy, equality, intellectual property and product liability are key legal areas) and reduces risk of harmful outputs.",
            "body_vi": "Responsible AI nghĩa là đảm bảo ứng dụng AI không gây hại và được dùng theo cách có đạo đức. Nó phải được cân nhắc xuyên suốt toàn bộ vòng đời AI: chuẩn bị dữ liệu, huấn luyện mô hình, triển khai và giám sát liên tục. AI Principles của Google định hướng công việc này (theo tài liệu tham khảo: hữu ích cho xã hội, tránh bias bất công, xây dựng và kiểm thử an toàn, có trách nhiệm giải trình với con người, tích hợp thiết kế bảo vệ quyền riêng tư và giữ chuẩn khoa học cao).\n\nVới doanh nghiệp, responsible AI bảo vệ niềm tin, hỗ trợ tuân thủ pháp lý (quyền riêng tư dữ liệu, bình đẳng, sở hữu trí tuệ và trách nhiệm sản phẩm là các mảng pháp lý chính) và giảm rủi ro đầu ra có hại."
          },
          {
            "heading": "Transparency and privacy",
            "heading_vi": "Minh bạch và quyền riêng tư",
            "body": "Transparency means making visible how data is used and how the AI system works, including telling users that AI is being used. Privacy risks include leaking sensitive data in training data or outputs and misusing personal data.\n\nTwo key protection techniques are tested. Anonymization removes or transforms data so individuals can no longer be identified: it is irreversible. Pseudonymization replaces identifiers with codes or aliases; with the additional information (a mapping key) people can still be re-identified, so pseudonymized data remains personal data that needs protection.",
            "body_vi": "Minh bạch (transparency) là làm cho việc dữ liệu được dùng ra sao và hệ thống AI hoạt động thế nào trở nên rõ ràng, gồm cả việc cho người dùng biết đang dùng AI. Rủi ro quyền riêng tư gồm rò rỉ dữ liệu nhạy cảm trong dữ liệu huấn luyện hoặc đầu ra, và lạm dụng dữ liệu cá nhân.\n\nHai kỹ thuật bảo vệ thường được thi. Anonymization (ẩn danh hóa) loại bỏ hoặc biến đổi dữ liệu để không còn xác định được cá nhân: không thể đảo ngược. Pseudonymization (giả danh hóa) thay định danh bằng mã hoặc biệt danh; nếu có thông tin bổ sung (khóa ánh xạ) vẫn truy ngược được cá nhân, nên dữ liệu giả danh hóa vẫn là dữ liệu cá nhân cần được bảo vệ."
          },
          {
            "heading": "Data quality, bias, fairness, accountability, explainability",
            "heading_vi": "Chất lượng dữ liệu, bias, công bằng, trách nhiệm giải trình, khả năng giải thích",
            "body": "Models learn from data, so poor-quality or unrepresentative data produces biased, unfair outcomes that harm groups of people and the business. Mitigation: use diverse, representative datasets, audit model performance regularly to find and reduce bias over time, and keep human oversight.\n\nAccountability means clear human responsibility for AI outputs and outcomes. Explainability means being able to understand and explain why the model reached a conclusion, avoiding opaque black boxes where decisions affect people (for example loan approval). A very accurate but unexplainable model is not an acceptable answer when fairness and transparency matter.",
            "body_vi": "Mô hình học từ dữ liệu, nên dữ liệu kém chất lượng hoặc không đại diện sẽ tạo kết quả thiên lệch, bất công, gây hại cho các nhóm người và cho doanh nghiệp. Cách giảm thiểu: dùng bộ dữ liệu đa dạng, đại diện; kiểm toán hiệu suất mô hình định kỳ để phát hiện và giảm bias theo thời gian; giữ sự giám sát của con người.\n\nAccountability (trách nhiệm giải trình) là trách nhiệm rõ ràng của con người đối với đầu ra và kết quả của AI. Explainability (khả năng giải thích) là hiểu và giải thích được vì sao mô hình đưa ra kết luận, tránh các hộp đen khó hiểu khi quyết định ảnh hưởng đến con người (ví dụ duyệt khoản vay). Mô hình rất chính xác nhưng không giải thích được không phải đáp án chấp nhận được khi công bằng và minh bạch quan trọng."
          }
        ],
        "table": {
          "caption": "Anonymization vs pseudonymization",
          "caption_vi": "Anonymization và pseudonymization",
          "headers": [
            "",
            "Anonymization",
            "Pseudonymization"
          ],
          "headers_vi": [
            "",
            "Anonymization",
            "Pseudonymization"
          ],
          "rows": [
            [
              "How",
              "Removes or transforms data so individuals cannot be identified",
              "Replaces identifiers with codes or aliases"
            ],
            [
              "Reversible?",
              "No",
              "Yes, if a mapping key or extra information exists"
            ],
            [
              "Still personal data?",
              "No longer identifiable",
              "Yes, still needs protection"
            ]
          ]
        },
        "keyPoints": [
          {
            "en": "Responsible AI = AI that does not cause harm and is used ethically, across the whole lifecycle.",
            "vi": "Responsible AI = AI không gây hại và dùng có đạo đức, xuyên suốt vòng đời."
          },
          {
            "en": "Pillars: transparency, privacy, fairness (data quality and bias), accountability, explainability.",
            "vi": "Các trụ cột: transparency, privacy, fairness (chất lượng dữ liệu và bias), accountability, explainability."
          },
          {
            "en": "Anonymization is irreversible; pseudonymization can be reversed with a key.",
            "vi": "Anonymization không thể đảo ngược; pseudonymization có thể đảo ngược nếu có khóa."
          },
          {
            "en": "Mitigate bias with diverse datasets, regular audits and human oversight.",
            "vi": "Giảm bias bằng dữ liệu đa dạng, kiểm toán định kỳ và giám sát của con người."
          },
          {
            "en": "Accountability assigns human responsibility; explainability lets you justify outputs.",
            "vi": "Accountability gán trách nhiệm cho con người; explainability cho phép biện minh đầu ra."
          }
        ],
        "examTips": [
          {
            "en": "Ethically sound choices: diverse training data and regular bias audits; wrong choices prioritize speed over fairness, use unexplainable black boxes or skip human oversight.",
            "vi": "Lựa chọn đúng: dữ liệu huấn luyện đa dạng và kiểm toán bias định kỳ; lựa chọn sai: ưu tiên tốc độ hơn công bằng, dùng hộp đen khó giải thích hoặc bỏ qua giám sát con người."
          },
          {
            "en": "If the question stresses that data can be traced back with a key, the answer is pseudonymization; if it cannot be re-identified, anonymization.",
            "vi": "Nếu câu hỏi nhấn mạnh dữ liệu có thể truy ngược bằng khóa, đáp án là pseudonymization; nếu không thể tái định danh, là anonymization."
          },
          {
            "en": "Responsible AI covers the whole lifecycle (data prep, training, deployment, monitoring), not just deployment.",
            "vi": "Responsible AI bao phủ toàn vòng đời (chuẩn bị dữ liệu, huấn luyện, triển khai, giám sát), không chỉ khâu triển khai."
          }
        ],
        "terms": [
          {
            "term": "Transparency",
            "en": "Making clear that AI is used and how data and the system work.",
            "vi": "Làm rõ việc dùng AI và cách dữ liệu và hệ thống vận hành."
          },
          {
            "term": "Anonymization",
            "en": "Irreversibly removing identifiability from data.",
            "vi": "Loại bỏ khả năng nhận dạng khỏi dữ liệu một cách không thể đảo ngược."
          },
          {
            "term": "Pseudonymization",
            "en": "Replacing identifiers with aliases; reversible with a key.",
            "vi": "Thay định danh bằng biệt danh; đảo ngược được nếu có khóa."
          },
          {
            "term": "Bias",
            "en": "Systematic unfairness in model outputs, often from unrepresentative data.",
            "vi": "Sự thiên lệch hệ thống trong đầu ra mô hình, thường do dữ liệu không đại diện."
          },
          {
            "term": "Fairness",
            "en": "Equitable treatment of different groups by an AI system.",
            "vi": "Đối xử công bằng với các nhóm khác nhau của hệ thống AI."
          },
          {
            "term": "Accountability",
            "en": "Clear human responsibility for AI outcomes.",
            "vi": "Trách nhiệm rõ ràng của con người đối với kết quả của AI."
          },
          {
            "term": "Explainability",
            "en": "Ability to understand and explain why a model produced an output.",
            "vi": "Khả năng hiểu và giải thích vì sao mô hình tạo ra một đầu ra."
          },
          {
            "term": "Human oversight",
            "en": "Humans review and can override AI decisions (human-in-the-loop).",
            "vi": "Con người xem xét và có thể bác bỏ quyết định của AI (human-in-the-loop)."
          }
        ],
        "keywords": [
          "responsible ai",
          "transparency",
          "privacy",
          "anonymization",
          "pseudonymization",
          "bias",
          "fairness",
          "data quality",
          "accountability",
          "explainability",
          "black box",
          "human oversight",
          "ai principles",
          "ethical",
          "diverse dataset"
        ]
      }
    ]
  }
];
