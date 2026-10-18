const QUIZ_DATA = [
  {
    "id": 1,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "What is the primary function of an encoder in a traditional Transformer model?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "To generate the final output text."
      },
      {
        "key": "B",
        "text": "To process the input sequence and create a contextualized representation."
      },
      {
        "key": "C",
        "text": "To convert text into images."
      },
      {
        "key": "D",
        "text": "To classify the data into predefined categories."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 2,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "Which of the following best defines 'Deep Learning'?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "A subset of ML that uses multi-layered artificial neural networks to solve complex problems."
      },
      {
        "key": "B",
        "text": "A type of database architecture."
      },
      {
        "key": "C",
        "text": "A statistical method for linear regression only."
      },
      {
        "key": "D",
        "text": "Rule-based programming with if-else statements."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": ""
  },
  {
    "id": 3,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "What role does 'self-attention' play in Transformer models?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "It limits the model's memory to the last 5 words."
      },
      {
        "key": "B",
        "text": "It allows the model to weigh the importance of different words in an input sequence regardless of their position."
      },
      {
        "key": "C",
        "text": "It prevents the model from hallucinating."
      },
      {
        "key": "D",
        "text": "It automatically translates the text to English."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 4,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "Which of the following is a characteristic of Generative Adversarial Networks (GANs)?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "They rely solely on supervised learning with perfectly labeled data."
      },
      {
        "key": "B",
        "text": "They consist of a generator creating fake data and a discriminator trying to distinguish fake from real data."
      },
      {
        "key": "C",
        "text": "They are exclusively used for text generation."
      },
      {
        "key": "D",
        "text": "They require no training data at all."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 5,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "What is the difference between supervised and unsupervised learning?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Supervised learning uses labeled data; unsupervised learning uses unlabeled data."
      },
      {
        "key": "B",
        "text": "Supervised learning is for text; unsupervised learning is for images."
      },
      {
        "key": "C",
        "text": "Supervised learning requires cloud computing; unsupervised learning runs locally."
      },
      {
        "key": "D",
        "text": "There is no difference."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": ""
  },
  {
    "id": 6,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "In the context of LLMs, what is 'zero-shot learning'?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Training a model with zero data."
      },
      {
        "key": "B",
        "text": "The model's ability to perform a task without having seen any specific examples of that task during prompt time."
      },
      {
        "key": "C",
        "text": "A technique to reduce the model's energy consumption to zero."
      },
      {
        "key": "D",
        "text": "Removing all parameters from the neural network."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 7,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "Which type of data is Generative AI particularly good at processing and generating?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Highly structured SQL tables."
      },
      {
        "key": "B",
        "text": "Unstructured data like text, images, and audio."
      },
      {
        "key": "C",
        "text": "Time-series financial data for precise stock prediction."
      },
      {
        "key": "D",
        "text": "Hardware sensor telemetry."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 8,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "What does the 'GPT' in ChatGPT or similar models stand for?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "General Purpose Technology"
      },
      {
        "key": "B",
        "text": "Generative Pre-trained Transformer"
      },
      {
        "key": "C",
        "text": "Global Processing Tool"
      },
      {
        "key": "D",
        "text": "Graphical Processing Tensor"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 9,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "How do diffusion models primarily generate images?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "By matching keywords to a static image database."
      },
      {
        "key": "B",
        "text": "By progressively adding noise to an image and then learning to reverse the process (denoise) to create a new image."
      },
      {
        "key": "C",
        "text": "By using a discriminator to reject bad images."
      },
      {
        "key": "D",
        "text": "By drawing vector lines based on mathematical formulas."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 10,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "Which of the following is a common cause of AI 'hallucinations'?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "The model has too much factual grounding."
      },
      {
        "key": "B",
        "text": "The model predicting highly probable but factually incorrect token sequences due to training data gaps or biases."
      },
      {
        "key": "C",
        "text": "The user typing the prompt too quickly."
      },
      {
        "key": "D",
        "text": "The model being disconnected from the internet."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 11,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "What is a 'foundation model'?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "A small, specialized model trained for a single specific task."
      },
      {
        "key": "B",
        "text": "A large-scale model trained on vast amounts of unlabeled data that can be fine-tuned for many downstream tasks."
      },
      {
        "key": "C",
        "text": "The hardware foundation required to run AI."
      },
      {
        "key": "D",
        "text": "A legacy AI model from the 1990s."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 12,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "Select two common applications of LLMs. (Choose two)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "Text summarization"
      },
      {
        "key": "B",
        "text": "Calculating precise physical trajectories for spacecraft"
      },
      {
        "key": "C",
        "text": "Code generation"
      },
      {
        "key": "D",
        "text": "Storing relational data"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": ""
  },
  {
    "id": 13,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "What is the primary goal of Reinforcement Learning from Human Feedback (RLHF)?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "To train the model faster."
      },
      {
        "key": "B",
        "text": "To align the model's outputs with human preferences, values, and safety guidelines."
      },
      {
        "key": "C",
        "text": "To reduce the cloud computing costs."
      },
      {
        "key": "D",
        "text": "To generate higher resolution images."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 14,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "What does 'fine-tuning' mean in the AI lifecycle?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Adjusting the screen brightness of the developer's monitor."
      },
      {
        "key": "B",
        "text": "Taking a pre-trained model and training it further on a smaller, domain-specific dataset to improve performance on a specific task."
      },
      {
        "key": "C",
        "text": "Deleting parameters to make the model smaller."
      },
      {
        "key": "D",
        "text": "Writing the initial Python code for the model."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 15,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "Which statement about parameters in neural networks is true?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "They are fixed rules written by programmers."
      },
      {
        "key": "B",
        "text": "They are the internal variables (weights and biases) that the model learns and adjusts during training."
      },
      {
        "key": "C",
        "text": "They refer to the API limits of a cloud provider."
      },
      {
        "key": "D",
        "text": "Fewer parameters always mean a smarter model."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 16,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "What is 'context window' in an LLM?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "The visual interface where the user types the prompt."
      },
      {
        "key": "B",
        "text": "The maximum amount of text (measured in tokens) the model can consider at one time when generating a response."
      },
      {
        "key": "C",
        "text": "The time frame during which the model was trained."
      },
      {
        "key": "D",
        "text": "The operating system window running the API."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 17,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "Why is unstructured data traditionally difficult to analyze?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Because it is always encrypted."
      },
      {
        "key": "B",
        "text": "Because it lacks a predefined data model or schema, making it hard to query with standard relational database tools."
      },
      {
        "key": "C",
        "text": "Because it takes up too much physical space."
      },
      {
        "key": "D",
        "text": "Because it only exists in analog formats."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 18,
    "topic": "Generative AI Fundamentals (30%)",
    "question": "Which of the following best describes 'Semantic Search'?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Searching for exact keyword matches in a database."
      },
      {
        "key": "B",
        "text": "Searching based on the meaning and intent behind the query, rather than just exact keyword overlaps."
      },
      {
        "key": "C",
        "text": "Searching for files by their creation date."
      },
      {
        "key": "D",
        "text": "Searching using only regular expressions."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 19,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "Which Google Cloud platform is the central hub for building, deploying, and managing Generative AI models?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Cloud Spanner"
      },
      {
        "key": "B",
        "text": "Vertex AI"
      },
      {
        "key": "C",
        "text": "Cloud Run"
      },
      {
        "key": "D",
        "text": "BigQuery"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 20,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "What is 'Gemini' in the Google Cloud ecosystem?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "A text-to-speech engine."
      },
      {
        "key": "B",
        "text": "Google's most capable and general multimodal AI model family, designed to understand text, images, audio, and video natively."
      },
      {
        "key": "C",
        "text": "A relational database service."
      },
      {
        "key": "D",
        "text": "A container orchestration tool."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 21,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "Which Google foundation model is specifically optimized for coding tasks (generation, completion, debugging)?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Imagen"
      },
      {
        "key": "B",
        "text": "Codey"
      },
      {
        "key": "C",
        "text": "Chirp"
      },
      {
        "key": "D",
        "text": "Med-PaLM"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 22,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "Your company wants to build a chatbot that answers customer questions strictly using information from your internal website and PDFs. Which tool is best suited?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Vertex AI Search and Conversation"
      },
      {
        "key": "B",
        "text": "Google Workspace"
      },
      {
        "key": "C",
        "text": "Cloud Functions"
      },
      {
        "key": "D",
        "text": "AutoML Vision"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": ""
  },
  {
    "id": 23,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "What is Vertex AI Model Garden?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "A physical data center location."
      },
      {
        "key": "B",
        "text": "A curated directory to discover, evaluate, and deploy Google first-party, open-source, and third-party foundation models."
      },
      {
        "key": "C",
        "text": "A tool for visualizing data in BigQuery."
      },
      {
        "key": "D",
        "text": "A training course for AI engineers."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 24,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "Which Google model is designed for generating high-quality images from text descriptions?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Gemini"
      },
      {
        "key": "B",
        "text": "Imagen"
      },
      {
        "key": "C",
        "text": "PaLM 2"
      },
      {
        "key": "D",
        "text": "Gemma"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 25,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "What is 'Gemma'?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "A closed-source model for video generation."
      },
      {
        "key": "B",
        "text": "A family of lightweight, state-of-the-art open models built from the same research and technology as Gemini models."
      },
      {
        "key": "C",
        "text": "Google's quantum computing architecture."
      },
      {
        "key": "D",
        "text": "A data migration tool."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 26,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "Which feature of Vertex AI allows developers to quickly test prompts and parameters without writing extensive code?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Vertex AI Studio"
      },
      {
        "key": "B",
        "text": "Cloud Shell"
      },
      {
        "key": "C",
        "text": "Vertex AI Feature Store"
      },
      {
        "key": "D",
        "text": "Cloud Monitoring"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": ""
  },
  {
    "id": 27,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "How does Google Cloud ensure enterprise data privacy when customers use Vertex AI foundation models?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Customer prompts are used to train Google's base models to improve them for everyone."
      },
      {
        "key": "B",
        "text": "Customer data, prompts, and fine-tuning data remain within the customer's tenant and are NOT used to train Google's foundation models."
      },
      {
        "key": "C",
        "text": "Data is shared only with selected Google partners."
      },
      {
        "key": "D",
        "text": "Data is temporarily stored on public servers."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 28,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "What is 'Med-PaLM'?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "A model tuned specifically for the medical domain to answer medical questions accurately and safely."
      },
      {
        "key": "B",
        "text": "A model for managing hospital HVAC systems."
      },
      {
        "key": "C",
        "text": "An open-source model for general coding."
      },
      {
        "key": "D",
        "text": "A database for medical records."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": ""
  },
  {
    "id": 29,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "Select two features of Vertex AI Search and Conversation. (Choose two)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "It requires deep ML expertise to build a neural network from scratch."
      },
      {
        "key": "B",
        "text": "It allows grounding the AI's answers in enterprise data (website, documents, BigQuery)."
      },
      {
        "key": "C",
        "text": "It provides out-of-the-box UI widgets for easy deployment."
      },
      {
        "key": "D",
        "text": "It can only search public internet data."
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "explanation": ""
  },
  {
    "id": 30,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "Which tool embeds Gemini capabilities into IDEs like VS Code and IntelliJ to boost developer productivity?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Cloud Source Repositories"
      },
      {
        "key": "B",
        "text": "Gemini Code Assist"
      },
      {
        "key": "C",
        "text": "Cloud Build"
      },
      {
        "key": "D",
        "text": "Cloud Deploy"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 31,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "What is a core advantage of using a natively multimodal model like Gemini compared to stitching together separate text and image models?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "It requires more API calls."
      },
      {
        "key": "B",
        "text": "It can seamlessly reason across different data types (e.g., answering questions about a video) without losing context in translation between models."
      },
      {
        "key": "C",
        "text": "It is cheaper but less accurate."
      },
      {
        "key": "D",
        "text": "It only runs on on-premise hardware."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 32,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "In Vertex AI, what is the purpose of 'Grounding'?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Disabling the model if it generates unsafe content."
      },
      {
        "key": "B",
        "text": "Connecting a foundation model to external data sources (like Google Search or enterprise databases) to reduce hallucinations and provide up-to-date information."
      },
      {
        "key": "C",
        "text": "Lowering the cloud computing costs."
      },
      {
        "key": "D",
        "text": "Formatting the output as JSON."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 33,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "Which Google Cloud service provides a managed Jupyter Notebook environment for data scientists?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Vertex AI Workbench"
      },
      {
        "key": "B",
        "text": "Dataflow"
      },
      {
        "key": "C",
        "text": "Dataproc"
      },
      {
        "key": "D",
        "text": "Cloud Composer"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": ""
  },
  {
    "id": 34,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "What role does 'BigQuery' play in a Generative AI architecture on Google Cloud?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "It serves as the deep learning training engine."
      },
      {
        "key": "B",
        "text": "It acts as a highly scalable enterprise data warehouse that can store structured data used to ground AI models or analyze AI usage logs."
      },
      {
        "key": "C",
        "text": "It generates images."
      },
      {
        "key": "D",
        "text": "It manages the Kubernetes clusters."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 35,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "How does Google approach the concept of 'AI Agents'?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "As simple single-turn chatbots."
      },
      {
        "key": "B",
        "text": "As systems that can understand goals, make plans, use tools (APIs, databases), and execute multi-step actions autonomously to achieve a user's objective."
      },
      {
        "key": "C",
        "text": "As human customer support representatives."
      },
      {
        "key": "D",
        "text": "As purely theoretical models."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 36,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "Which feature ensures that enterprise customers have indemnity against copyright infringement claims regarding Google's Gen AI generated outputs?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Google Workspace SLA"
      },
      {
        "key": "B",
        "text": "Google Cloud Generative AI Indemnification"
      },
      {
        "key": "C",
        "text": "Vertex AI Model Garden License"
      },
      {
        "key": "D",
        "text": "Open Source Apache License"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 37,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "What is 'Chirp' (or the Universal Speech Model)?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "A model for bird sound classification."
      },
      {
        "key": "B",
        "text": "Google's state-of-the-art speech model capable of transcribing and translating over 100 languages accurately."
      },
      {
        "key": "C",
        "text": "A text summarization tool."
      },
      {
        "key": "D",
        "text": "A code debugging assistant."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 38,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "Which Google Cloud tool helps automate and manage the end-to-end Machine Learning lifecycle (MLOps)?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Vertex AI Pipelines"
      },
      {
        "key": "B",
        "text": "Cloud SQL"
      },
      {
        "key": "C",
        "text": "Cloud CDN"
      },
      {
        "key": "D",
        "text": "Cloud Load Balancing"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": ""
  },
  {
    "id": 39,
    "topic": "Google Cloud Gen AI Solutions (35%)",
    "question": "When deploying an LLM in production on Google Cloud, what is used to handle traffic routing, scaling, and serving of the model?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Cloud Storage"
      },
      {
        "key": "B",
        "text": "Vertex AI Endpoints"
      },
      {
        "key": "C",
        "text": "Cloud DNS"
      },
      {
        "key": "D",
        "text": "VPC Peering"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 40,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "What is 'Prompt Engineering'?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Developing the backend API for a model."
      },
      {
        "key": "B",
        "text": "The iterative process of designing and optimizing input text (prompts) to guide a Gen AI model to produce the desired output."
      },
      {
        "key": "C",
        "text": "Writing the training loop in PyTorch."
      },
      {
        "key": "D",
        "text": "Increasing the internet speed for the API."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 41,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "What is the 'Few-Shot Prompting' technique?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Giving the model a very short prompt."
      },
      {
        "key": "B",
        "text": "Providing the model with a few examples of the desired input and output within the prompt to demonstrate the expected pattern."
      },
      {
        "key": "C",
        "text": "Forcing the model to answer in under a few seconds."
      },
      {
        "key": "D",
        "text": "Asking the model to guess the answer."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 42,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "What is the purpose of the 'Temperature' parameter in an LLM API?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "To control the physical cooling of the servers."
      },
      {
        "key": "B",
        "text": "To control the randomness and creativity of the generated text (lower = more deterministic, higher = more creative)."
      },
      {
        "key": "C",
        "text": "To set the maximum length of the output."
      },
      {
        "key": "D",
        "text": "To filter out offensive language."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 43,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "If you want an LLM to generate highly factual, precise, and consistent answers without being 'creative', how should you set the Temperature?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "High (e.g., 0.9 or 1.0)"
      },
      {
        "key": "B",
        "text": "Low (e.g., 0.0 or 0.1)"
      },
      {
        "key": "C",
        "text": "Temperature does not affect this."
      },
      {
        "key": "D",
        "text": "Set to a negative number."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 44,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "What is the 'Chain of Thought' prompting technique?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Asking the model to provide multiple different answers."
      },
      {
        "key": "B",
        "text": "Instructing the model to break down its reasoning process step-by-step before arriving at the final answer, which improves logical reasoning."
      },
      {
        "key": "C",
        "text": "Chaining multiple API calls together."
      },
      {
        "key": "D",
        "text": "Asking the model to write a fictional story."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 45,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "What does Retrieval-Augmented Generation (RAG) do?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "It retrieves data from the dark web."
      },
      {
        "key": "B",
        "text": "It intercepts a user's prompt, retrieves relevant information from an external knowledge base, and augments the prompt with this information before sending it to the LLM."
      },
      {
        "key": "C",
        "text": "It generates new foundation models from scratch."
      },
      {
        "key": "D",
        "text": "It automatically translates all outputs."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 46,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "Which metric is commonly used to limit the maximum length of the response generated by an LLM?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Top-K"
      },
      {
        "key": "B",
        "text": "Top-P"
      },
      {
        "key": "C",
        "text": "Max Output Tokens"
      },
      {
        "key": "D",
        "text": "Temperature"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": ""
  },
  {
    "id": 47,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "What does the 'Top-K' parameter do?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "It selects the top K most creative words in the English dictionary."
      },
      {
        "key": "B",
        "text": "It restricts the model's vocabulary pool for the next word selection to only the top K most probable tokens."
      },
      {
        "key": "C",
        "text": "It limits the prompt length to K words."
      },
      {
        "key": "D",
        "text": "It ranks the best models in Vertex AI."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 48,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "When should an organization choose to 'Fine-Tune' an LLM instead of using RAG?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "When they need the model to answer questions based on a massive, constantly updating daily news database."
      },
      {
        "key": "B",
        "text": "When they want to fundamentally alter the model's tone, style, or teach it a highly specialized, niche task or domain-specific language pattern."
      },
      {
        "key": "C",
        "text": "Fine-tuning is always cheaper and faster than RAG."
      },
      {
        "key": "D",
        "text": "When they want to reduce the model's size."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 49,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "What is Parameter-Efficient Fine-Tuning (PEFT), such as LoRA?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "A technique that requires updating every single parameter in a 100-billion parameter model."
      },
      {
        "key": "B",
        "text": "A technique that freezes most of the pre-trained model and only updates a small set of added parameters, drastically reducing computing costs and time."
      },
      {
        "key": "C",
        "text": "A prompt engineering technique."
      },
      {
        "key": "D",
        "text": "A hardware optimization."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 50,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "How does giving an LLM a 'persona' (e.g., 'Act as a senior cloud architect...') improve the output?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "It changes the underlying weights of the model permanently."
      },
      {
        "key": "B",
        "text": "It sets the context for the model, guiding it to use appropriate vocabulary, tone, and depth of knowledge relevant to that role."
      },
      {
        "key": "C",
        "text": "It bypasses security filters."
      },
      {
        "key": "D",
        "text": "It reduces API latency."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 51,
    "topic": "Improving Gen AI Model Output (20%)",
    "question": "Select two strategies to mitigate LLM hallucinations. (Choose two)",
    "type": "multiple",
    "options": [
      {
        "key": "A",
        "text": "Use RAG to ground the model on verified facts."
      },
      {
        "key": "B",
        "text": "Increase the Temperature to 1.0."
      },
      {
        "key": "C",
        "text": "Instruct the model in the prompt to say 'I don't know' if it cannot find the answer in the provided context."
      },
      {
        "key": "D",
        "text": "Use Zero-shot prompting exclusively."
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": ""
  },
  {
    "id": 52,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "What is the primary focus of Google's Secure AI Framework (SAIF)?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Ensuring that AI models are completely open-source."
      },
      {
        "key": "B",
        "text": "Establishing a comprehensive framework to secure AI systems, mitigating risks like prompt injection, data poisoning, and unauthorized access."
      },
      {
        "key": "C",
        "text": "Maximizing the processing speed of TPUs."
      },
      {
        "key": "D",
        "text": "Replacing traditional cybersecurity teams."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 53,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "When prioritizing Generative AI use cases, which quadrant of the value-complexity matrix is best for 'quick wins'?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Low Business Value, High Complexity"
      },
      {
        "key": "B",
        "text": "High Business Value, Low Complexity"
      },
      {
        "key": "C",
        "text": "High Business Value, High Complexity"
      },
      {
        "key": "D",
        "text": "Low Business Value, Low Complexity"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 54,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "Which of the following is a key principle of Google's Responsible AI?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "AI should be built to replace human creativity."
      },
      {
        "key": "B",
        "text": "AI should avoid creating or reinforcing unfair bias and should be accountable to people."
      },
      {
        "key": "C",
        "text": "AI should be deployed as fast as possible, regardless of safety tests."
      },
      {
        "key": "D",
        "text": "AI should exclusively use open internet data."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 55,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "What is an 'AI Center of Excellence (CoE)'?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "A centralized team or governance body responsible for establishing AI strategy, best practices, standardizing tools, and ensuring ethical AI use across the organization."
      },
      {
        "key": "B",
        "text": "A physical data center dedicated to training models."
      },
      {
        "key": "C",
        "text": "An automated AI agent that manages employees."
      },
      {
        "key": "D",
        "text": "A vendor that sells AI hardware."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": ""
  },
  {
    "id": 56,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "Why is 'Change Management' critical when deploying Generative AI in an enterprise?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Because AI changes the cloud billing model."
      },
      {
        "key": "B",
        "text": "Because Gen AI significantly alters how employees work, requiring training, process redesign, and cultural adaptation to ensure successful adoption."
      },
      {
        "key": "C",
        "text": "Because it requires changing all hardware to specialized AI chips."
      },
      {
        "key": "D",
        "text": "Because AI models change their weights daily."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 57,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "What is the risk of 'Data Poisoning' in AI?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "The AI generates toxic language."
      },
      {
        "key": "B",
        "text": "Malicious actors intentionally introduce bad or biased data into the training set to compromise the model's behavior or accuracy."
      },
      {
        "key": "C",
        "text": "The server overheating and corrupting the database."
      },
      {
        "key": "D",
        "text": "Employees accidentally deleting the AI model."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 58,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "How should a business measure the ROI of a Generative AI customer support chatbot?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Only by the number of tokens generated."
      },
      {
        "key": "B",
        "text": "By evaluating metrics like reduction in average handle time (AHT), increase in first-contact resolution, customer satisfaction (CSAT) scores, and cost savings."
      },
      {
        "key": "C",
        "text": "By measuring the CPU utilization of the chatbot server."
      },
      {
        "key": "D",
        "text": "By counting how many times the chatbot hallucinated."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 59,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "What is a 'Human-in-the-loop' (HITL) approach?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "A robot shaped like a human."
      },
      {
        "key": "B",
        "text": "Designing AI workflows where human experts review, approve, or correct the AI's output, especially in high-risk or high-value scenarios."
      },
      {
        "key": "C",
        "text": "Using human energy to power servers."
      },
      {
        "key": "D",
        "text": "Forcing users to solve a CAPTCHA before using the AI."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 60,
    "topic": "Business Strategy for Gen AI (15%)",
    "question": "Which of the following describes a strong data governance strategy for Generative AI?",
    "type": "single",
    "options": [
      {
        "key": "A",
        "text": "Allowing all employees full access to all company data to use in public AI tools."
      },
      {
        "key": "B",
        "text": "Implementing strict access controls (IAM), auditing data usage, ensuring compliance with privacy regulations (e.g., GDPR), and classifying data sensitivity before grounding AI models."
      },
      {
        "key": "C",
        "text": "Storing all data on local laptops."
      },
      {
        "key": "D",
        "text": "Deleting historical data to save cloud storage costs."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": ""
  }
];
