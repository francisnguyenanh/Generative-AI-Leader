# Bonus Reference Guide

- **Tài liệu nguồn:** `bonus-reference-guide.pdf`
- **Tổng số slide:** 15
- **Chứng chỉ:** Google Cloud Generative AI Leader
- **Ghi chú:** PDF toàn ảnh (do Gemini Notebook tạo); nội dung dưới đây đã được đối chiếu thủ công với từng slide.

---

## Slide 1: Generative AI Leader 認定試験 直前リファレンスガイド

公式試験ガイド完全準拠・重要キーワード総まとめ
試験直前の知識整理とスコアアップのためのビジュアル・プレイブック

---

## Slide 2: Exam Blueprint (出題割合) / Target Persona (求められる人物像)

### Exam Blueprint (出題割合)

| セクション | 分野 | 割合 |
|---|---|---|
| [Section 1] | 生成 AI の基礎 | 30% |
| [Section 2] | Google Cloud の生成 AI サービス | 35% |
| [Section 3] | AI モデルの出力改善テクニック | 20% |
| [Section 4] | 生成 AI ソリューションのビジネス戦略 | 15% |

### Target Persona (求められる人物像)

- **役割:** 組織内での生成 AI 活用の戦略的リーダー。
- **スキル:** Google Cloud のエンタープライズ対応サービスを用いたユースケース特定とビジネス価値の創出。
- **注意 (Caution):** 技術的な実装スキルやコーディング能力は問われない。ビジネス上の意思決定と責任ある AI (Responsible AI) の推進が最優先。

---

## Slide 3: [Section 1] 生成 AI の基礎：AI 階層構造と学習アプローチ

### Left Panel (Hierarchy)

AI ⊃ ML ⊃ Deep Learning ⊃ Gen AI (入れ子構造)

- **AI (人工知能):** 人間の知能を必要とするタスクを実行する機械。
- **ML (機械学習):** データから学習しタスクを実行する AI のサブ分野。
- **Deep Learning (深層学習):** 複雑なパターンを抽出する多層ニューラルネットワーク。
- **Gen AI (生成 AI):** 新しいコンテンツ（テキスト、画像等）を生成する ML の応用。
- **基盤モデル (Foundation Models):** 大量のラベルなしデータでトレーニングされ、多様なタスクに適応できる強力な ML モデル（例: LLM）。

### ML の学習アプローチ (ML Approaches)

- **教師あり (Supervised):** 「ラベル付きデータ」を使用して出力を予測。
- **教師なし (Unsupervised):** 「ラベルなしデータ」からパターンやグループを発見。
- **強化学習 (Reinforcement):** 報酬を最大化しペナルティを最小化する相互作用による学習。

---

## Slide 4: [Section 1] 生成 AI の基礎：データタイプと ML ライフサイクル

### データタイプ

| | 内容 |
|---|---|
| 構造化 (Structured) | 整理され検索が容易（例: リレーショナルデータベース、表データ）。 |
| 非構造化 (Unstructured) | 構造を持たないデータ（例: 画像、音声、長文テキスト）。 |
| ラベル付き (Labeled) | 名前、種類、数値などのタグが付与されたデータ。 |
| ラベルなし (Unlabeled) | 未処理でタグがないデータ（例: 整理されていない写真）。 |

### データの必須要件

**品質** (Quality - 正確性、完全性) と **アクセシビリティ** (Accessibility - 利用可能性、適切な形式)。

### ML ライフサイクル（4 ステップ）

1. **Ingestion/Prep (データの取り込みと準備):** 収集、クリーニング、変換。
2. **Training (トレーニング):** データを使用したモデルの作成。
3. **Deployment (デプロイ):** トレーニング済みモデルを利用可能な状態にする。
4. **Management (管理):** モデルの継続的な維持と管理。

---

## Slide 5: [Section 1] 生成 AI の基礎：ランドスケープと基盤モデル

### 生成 AI ランドスケープ（下から上へ 5 層）

| 層 | 説明 |
|---|---|
| App (アプリケーション) | ユーザーが AI とやり取りする UI 層。 |
| Agent (エージェント) | ツールを用いて自律的に目標を達成するソフトウェア。 |
| Platform (プラットフォーム) | API やモデル展開ツール（モデルとエージェントを橋渡し）。 |
| Model (モデル) | パターンを学習し生成を行う複雑なアルゴリズム（基盤モデル）。 |
| Infrastructure (インフラ) | 演算リソース（TPU、GPU、サーバー）。 |

### Google 基盤モデル (Foundation Models)

| モデル | 説明 |
|---|---|
| Gemini | マルチモーダル対応、高度な対話、コンテンツ生成、汎用タスク。 |
| Gemma | ローカル展開や特化型 AI 向けにカスタマイズ可能なオープンモデル。 |
| Imagen | テキストプロンプトから高品質な画像を生成 (Text-to-Image)。 |
| Veo | テキストや静止画から動画コンテンツを生成 (Text-to-Video)。 |

---

## Slide 6: [Section 2] Google Cloud の生成 AI サービス：Google の優位性

1. **AI-First & Enterprise-Ready:** AI を中核に据えた設計。セキュリティ、プライバシー、ガバナンスを備えたエンタープライズ規模の高い信頼性とスケーラビリティ。
2. **AI-Optimized Infrastructure:** 独自のカスタム設計プロセッサ（TPU）と GPU、AI ハイパーコンピュータによる、AI ワークロードに最適化された強力なインフラ基盤。
3. **Open Ecosystem:** オープンなアプローチによる柔軟性の提供。ファーストパーティ（自社）モデルだけでなく、サードパーティモデルやオープンソースモデルも活用可能。
4. **Democratization（民主化）:** ノーコード / ローコードツール、事前学習済みモデル、API を提供し、あらゆるユーザーが AI 開発を行える環境を整備。

---

## Slide 7: [Section 2] Google Cloud の生成 AI サービス：Gemini エコシステムの整理

### 生産性向上・コラボレーション (Productivity)

- **Gemini (App) / Advanced:** 一般向けチャットボット。Advanced はエンタープライズ級の保護と Gems 機能を提供。
- **Gemini for Google Workspace:** Gmail、Docs、Slides 等に組み込まれた生成 AI アシスタント。
- **Gemini Notebook (旧 NotebookLM):** ユーザーがアップロードしたドキュメント（グラウンディング）に基づいて要約・回答するリサーチアシスタント。

### クラウドインフラ・開発 (Cloud & Dev)

- **Gemini for Google Cloud:** コードの記述/デバッグ、BigQuery でのデータ分析、クラウド運用を支援する AI アシスタント。
- **Gemini Enterprise Agent Platform:** モデルの構築、調整（チューニング）、デプロイを行う統合 ML プラットフォーム（旧 Vertex AI）。

---

## Slide 8: [Section 2] Google Cloud の生成 AI サービス：プラットフォームと CX ツール

### プラットフォームの使い分け (Platform Choice)

| | ツール | 用途 | 特徴 |
|---|---|---|---|
| A | Google AI Studio | 迅速なプロトタイピング | 無償枠あり、軽量な検証に最適 |
| B | Agent Studio | 本番環境への導入・大規模展開 (Production & Scale) | 高度な管理、エンタープライズ向け要件に対応 |

### カスタマーエクスペリエンス (CX) 向上ツール

- **Customer Engagement Suite:** CCaaS（コンタクトセンター・アズ・ア・サービス）上に構築される顧客エンゲージメントツール群。
- **Customer Experience Agent Studio:** 顧客対応用の高度なチャットボット（エージェント）を構築。
- **Agent Assist:** 人間のオペレーターをリアルタイムで支援する機能。
- **Conversational / CX Insights:** 顧客とのコミュニケーションからインサイト（洞察）を抽出・分析。

---

## Slide 9: [Section 2] Google Cloud の生成 AI サービス：AI エージェントの解剖学

- **モデル (Model):** AI の「頭脳」。データからパターンを学習し、予測や生成を行う。
- **ツール (Tools):** エージェントが外部環境とやり取りするための機能（例: 拡張機能、関数、データストア、検索 API）。
- **推論ループ (Reasoning Loop):** 観察、解釈、推論、行動を反復するプロセス。プロンプトエンジニアリングによって制御される。（モデルとツールの間を循環する図）

### エージェントの種類 (Agent Types)

| 種類 | 説明 |
|---|---|
| 決定的 (Deterministic) | 事前に定義されたルールと経路（パス）に基づく従来型。 |
| 生成的 (Generative) | LLM と自然言語を使用し、柔軟で自然な会話を実現。 |
| ハイブリッド (Hybrid) | 決定的と生成的を組み合わせた、最も強力で実用的なアプローチ。 |

---

## Slide 10: [Section 3] AI モデルの出力改善テクニック：モデルの限界と対策

| 限界 (Limitations) | → | 対策 (Mitigations) |
|---|---|---|
| 知識のカットオフ (Knowledge Cutoff) / データ依存 | → | **RAG (検索拡張生成):** 外部の最新情報データベースを検索し、プロンプトに組み込む。 |
| ハルシネーション (Hallucinations): 事実と異なる、または文脈に合わない情報の生成 | → | **グラウンディング (Grounding):** 生成の根拠を特定の信頼できるデータソース（自社データや Google 検索）に限定する。 |
| バイアス (Bias) とエッジケース (Edge Cases) | → | **HITL (ヒューマン・イン・ザ・ループ):** 最終的な判断や評価に人間の専門家を介入させる。 |
| （同上） | → | **ファインチューニング (Fine-tuning):** 特定のドメインデータでモデルを再学習させ、専門性を向上させる。 |

---

## Slide 11: [Section 3] AI モデルの出力改善テクニック：プロンプトエンジニアリングとパラメータ

### プロンプト手法（階段図：下から上へ高度化）

1. **Zero-shot:** 例示なしで直接指示を出す。
2. **One-shot / Few-shot:** 1 つ、または複数の「例（入力と出力のペア）」を提示し、回答の形式やトーンを学習させる。
3. **Role prompting:** 「あなたは熟練のマーケターです」のように役割を付与する。
4. **Chain-of-thought（思考の連鎖）:** 推論の過程（ステップ・バイ・ステップ）を出力させ、複雑な論理タスクの精度を上げる。
5. **ReAct:** 推論 (Reasoning) と行動 (Acting) を組み合わせた高度な手法。

### モデル制御パラメータ (Sampling Parameters)

| パラメータ | 範囲 | 説明 |
|---|---|---|
| Temperature (温度) | 低い 〜 高い | 高い＝ランダムで創造的 / 低い＝決定的で正確。 |
| Top-p | 0 〜 1 | サンプリングする語彙の確率分布の閾値（多様性の制御）。 |
| Token count | Min 〜 Max | 入出力のテキスト量（長さ）の制限。 |

---

## Slide 12: [Section 3] AI モデルの出力改善テクニック：グラウンディングのデータソース

フロー: User Prompt → RAG / Search → LLM → Final Response

### グラウンディングのデータソース

| データソース | 説明 |
|---|---|
| 自社データ (First-party Enterprise Data) | 社内規程、顧客データ、独自マニュアル等。機密性が高く特化型。 |
| サードパーティデータ (Third-party Data) | 外部の商用データベースや業界レポート等。 |
| ワールドデータ / Google Search (World Data) | インターネット上の最新の一般情報。知識のカットオフを補う。 |

### 実装オプション

- **Agent Search を使用した事前構築済みの RAG:** インフラ構築不要で RAG を実装。
- **RAG API:** カスタムアプリケーションに RAG 機能を組み込む。
- **Google 検索によるグラウンディング:** Google の検索インデックスを直接活用し、最新情報で回答を裏付ける。

---

## Slide 13: [Section 4] 生成 AI ソリューションのビジネス戦略：導入戦略と SAIF

### Implementation Strategy Roadmap

1. **要件と制約の特定:** ビジネス要件（コスト、ROI）と技術的制約（データプライバシー、レイテンシ）を評価する。
2. **ソリューションの選択:** テキスト、画像、コード生成など、特定のニーズに最適な AI ツールを選択。
3. **影響の測定 (Measurement):** KPI を設定し、ビジネスインパクトとモデルのパフォーマンスを継続的に評価。

### SAIF (セキュア AI フレームワーク)

- **目的:** 悪意のある攻撃や不正使用から AI システムを保護するための Google のフレームワーク。
- **セキュリティツール:** セキュア・バイ・デザインなインフラ、IAM (アクセス管理)、Security Command Center 等を活用し、ML ライフサイクル全体を保護。

---

## Slide 14: [Section 4] 生成 AI ソリューションのビジネス戦略：責任ある AI

### 責任ある AI (Responsible AI) の重要性（5 本の柱）

1. **公平性 (Fairness) とバイアス排除:** 特定のグループに対する偏見を防ぎ、トレーニングデータの品質を確保する。
2. **プライバシー (Privacy):** データのリスクを管理し、匿名化 (Anonymization) や仮名化 (Pseudonymization) を通じてユーザーデータを保護する。
3. **透明性 (Transparency):** AI が使用されていることや、どのようにデータが処理されているかをユーザーに開示する。
4. **アカウンタビリティ (Accountability):** AI システムの出力や結果に対して、最終的な人間の責任の所在を明確にする。
5. **説明可能性 (Explainability):** モデルが特定の結論や出力に至った理由を理解し、説明できるようにする（特にブラックボックス化の回避）。

---

## Slide 15: Final Review Checklist (直前5分の最終確認)：混同しやすいキーワードの最終整理

- [ツール] AI Studio は【プロトタイプ・無償枠】。Agent Studio は【本番環境・エンタープライズ】。
- [エージェント] 決定的エージェントは【ルールベース】。生成的エージェントは【LLM と自然言語】。
- [学習手法] 教師ありは【ラベル付きデータ】。教師なしは【ラベルなしデータ】。
- [データ] 構造化データは【表・DB】。非構造化データは【テキスト・画像】。
- [モデル] Gemini は【汎用マルチモーダル】。Gemma は【オープン・カスタマイズ】。
- [モデル] Imagen は【画像生成】。Veo は【動画生成】。
- [出力改善] ハルシネーション対策は【グラウンディング】。知識のカットオフ対策は【RAG】。複雑な推論は【Chain-of-thought】。
- [評価] 生成 AI リーダーの役割は【戦略とビジネス価値】であり、【コーディングによる技術的実装ではない】。

---

## Bổ sung kiến thức ôn thi (Claude)

> Phần này do Claude bổ sung, KHÔNG nằm trong PDF. Tên sản phẩm Google thay đổi thường xuyên (PDF dùng "Gemini Enterprise Agent Platform (旧 Vertex AI)" và "Gemini Notebook (旧 NotebookLM)"). Đề thi có thể dùng tên cũ hoặc mới; hãy kiểm tra lại exam guide chính thức. Mục đánh dấu (?) là chưa chắc chắn.

### 0. Lưu ý về nội dung PDF

- Slide 8 và 15 đặt "Agent Studio" đối lập với "AI Studio". Trong tài liệu chính thức, đối chiếu thường gặp là Google AI Studio (thử nghiệm nhanh, miễn phí/gần miễn phí) vs Vertex AI (nay là nền tảng Agent/Enterprise của PDF) cho production. Nếu đề hỏi "production, enterprise, MLOps" thì chọn nền tảng enterprise (Vertex AI / Agent Platform), không phải AI Studio. (?) tên "Agent Studio" nên kiểm tra lại.
- Slide 10: PDF xếp HITL và Fine-tuning cho "Bias/Edge cases"; thực tế Fine-tuning cũng dùng để chuyên môn hóa theo domain, còn bias cần cả dữ liệu huấn luyện đa dạng + đánh giá + HITL.

### 1. Domain 1 — Fundamentals of gen AI (30%)

| Khái niệm | Điểm cần nhớ |
|---|---|
| AI ⊃ ML ⊃ Deep Learning ⊃ Gen AI | Gen AI là *tạo nội dung mới*; ML dự đoán/phân loại truyền thống (discriminative) là *không* sinh nội dung. |
| LLM | Foundation model thiên về ngôn ngữ; Gemini là multimodal (text, image, audio, video, code). |
| Token | Đơn vị văn bản model xử lý; giới hạn context window (số token vào + ra). |
| Foundation model | Huấn luyện trước trên dữ liệu rộng, thích ứng nhiều tác vụ (prompting, tuning). |
| Supervised / Unsupervised / Reinforcement | Có nhãn / không nhãn (cụm, pattern) / thưởng-phạt. Ví dụ: phân loại spam = supervised; phân cụm khách hàng = unsupervised. |
| Dữ liệu | Structured (bảng, DB) vs Unstructured (ảnh, audio, văn bản dài); Labeled vs Unlabeled. Chất lượng + khả năng truy cập quyết định kết quả ("garbage in, garbage out"). |
| ML lifecycle | Ingestion/Prep → Training → Deployment → Management (giám sát drift, cập nhật). |
| Google Cloud 5 lớp | Infrastructure → Model → Platform → Agent → App. Đề hay hỏi "lớp nào" cho một dịch vụ. |

Hạn chế của gen AI cần thuộc: hallucination, knowledge cutoff, bias, edge cases, phụ thuộc dữ liệu, output không xác định (non-deterministic).

### 2. Domain 2 — Google Cloud's gen AI offerings (35%)

Phân loại theo "ai dùng, để làm gì":

| Nhu cầu | Dịch vụ |
|---|---|
| Nhân viên văn phòng cần trợ lý trong Gmail/Docs/Sheets/Slides/Meet | Gemini for Google Workspace |
| Chatbot cá nhân/tổng quát | Gemini app (Gems = chatbot tùy biến cho tác vụ lặp lại) |
| Hỏi đáp/tóm tắt trên tài liệu của chính mình (có trích nguồn) | NotebookLM = "Gemini Notebook" (PDF) |
| Dev/ops: viết code, debug, phân tích BigQuery, vận hành cloud | Gemini for Google Cloud (Gemini Code Assist, Cloud Assist...) |
| Xây/tinh chỉnh/triển khai model & agent ở quy mô enterprise | Vertex AI (nay "Gemini Enterprise Agent Platform" theo PDF) |
| Duyệt model (Model Garden), 1st-party + 3rd-party + open source | Vertex AI Model Garden |
| Prototype nhanh, thử prompt, có free tier | Google AI Studio |
| Agent/search cho nhân viên trên dữ liệu doanh nghiệp | Gemini Enterprise (?) / Vertex AI Search / Agent Builder |
| Contact center, hỗ trợ khách hàng | Customer Engagement Suite (Conversational Agents, Agent Assist, Conversational Insights) |
| Hạ tầng tăng tốc | TPU, GPU, AI Hypercomputer |

Model: Gemini (đa phương thức, nhiều kích cỡ), Gemma (open weights, chạy local/tùy biến), Imagen (text→image), Veo (text/image→video), Chirp (speech, ?), Codey/Gemini code (code). Đề thường hỏi: "cần model mở để tự host/tùy biến" → Gemma; "cần tạo video" → Veo.

Điểm khác biệt của Google (slide 6) hay ra đề: enterprise-ready (bảo mật, quyền riêng tư, governance), hạ tầng tối ưu AI, hệ sinh thái mở, dân chủ hóa.

**Agent:** thành phần = Model + Tools + Reasoning loop (+ orchestration/memory). Deterministic (rule-based, dự đoán được, phù hợp quy trình bắt buộc/tuân thủ), Generative (LLM, linh hoạt, rủi ro hallucination), Hybrid (kết hợp, thực dụng nhất). Tools: Extensions (gọi API), Functions (client-side thực thi), Data stores (RAG).

### 3. Domain 3 — Techniques to improve output (20%)

So sánh kỹ thuật:

| Kỹ thuật | Giải quyết | Chi phí/độ khó | Ghi chú |
|---|---|---|---|
| Prompt engineering | Format, giọng, độ rõ | Thấp nhất | Luôn thử trước tiên |
| RAG | Cutoff, dữ liệu riêng/mới | Thấp-Trung | Không cần train lại model; dữ liệu cập nhật liên tục |
| Grounding | Hallucination; dẫn nguồn | Thấp-Trung | Gắn câu trả lời vào nguồn tin cậy (dữ liệu doanh nghiệp, Google Search) |
| Fine-tuning | Phong cách/domain chuyên sâu, nhiệm vụ lặp lại | Cao (dữ liệu có nhãn, tính toán) | Không phải cách tốt để "cập nhật tin tức" |
| HITL | Rủi ro cuối cùng, bias | Vận hành | Bắt buộc với quyết định rủi ro cao |

Quy tắc chọn nhanh: *cần kiến thức mới/riêng → RAG/Grounding; cần đổi hành vi/phong cách → prompt rồi tuning; giảm bịa → grounding + temperature thấp.*

Prompt: zero-shot → one/few-shot → role → CoT → ReAct. Prompt tốt có: vai trò, nhiệm vụ rõ, ngữ cảnh, ràng buộc/format đầu ra, ví dụ. Prompt hiệu quả được lặp lại qua thử-đánh giá (iteration).

Tham số: Temperature thấp (0) → xác định, thực tế; cao → sáng tạo, đa dạng. Top-p/Top-k giới hạn tập token ứng viên. Max output tokens cắt độ dài. (Không phải "càng cao càng chính xác".)

Mức độ phù hợp của fine-tuning: supervised fine-tuning (cần cặp input-output), có thể dùng parameter-efficient tuning (?) để rẻ hơn. Đánh giá model: so với tiêu chí kinh doanh, metric tự động + đánh giá người.

### 4. Domain 4 — Business strategies (15%)

- Chọn use case: bắt đầu từ vấn đề kinh doanh, ưu tiên giá trị cao/khả thi/rủi ro thấp; đo KPI (ROI, tiết kiệm thời gian, CSAT, tỉ lệ lỗi).
- Build vs buy vs customize: dùng sản phẩm có sẵn (Workspace/Gemini app) → tùy biến (Agent Builder/RAG) → tự xây/tuning (Vertex AI). Chọn mức đơn giản nhất đáp ứng nhu cầu.
- Yếu tố triển khai: dữ liệu (chất lượng, quyền truy cập), bảo mật & quyền riêng tư, chi phí, độ trễ, quản trị (governance), thay đổi tổ chức và đào tạo (change management), sponsor lãnh đạo.
- **SAIF** (Secure AI Framework): bảo vệ toàn vòng đời AI (mở rộng nền tảng bảo mật, phát hiện/phản ứng, tự động hóa phòng thủ, ...). Công cụ liên quan: IAM, Security Command Center.
- **Responsible AI** (Google AI Principles): fairness, privacy, transparency, accountability, explainability (+ safety, security). Hành động: dữ liệu đại diện, kiểm thử bias, ẩn danh/giả danh hóa, ghi rõ nội dung do AI tạo, giữ con người chịu trách nhiệm, giám sát liên tục.
- Rủi ro thường gặp: hallucination, rò rỉ dữ liệu, bias, vi phạm bản quyền, deepfake, phụ thuộc nhà cung cấp.

### 5. Bẫy thường gặp

1. Chọn Fine-tuning cho vấn đề "dữ liệu mới hàng ngày" → sai; dùng RAG/Grounding.
2. Nhầm RAG (kết hợp truy xuất vào prompt) với Fine-tuning (đổi trọng số model).
3. Nhầm AI Studio (prototype) với nền tảng production (Vertex AI / Agent Platform).
4. Nhầm Gemma (open) với Gemini (closed, đa năng); Imagen (ảnh) với Veo (video).
5. Cho rằng cần kỹ năng code để làm Gen AI Leader → sai (xem Slide 2).
6. Bỏ qua con người: với quyết định rủi ro cao luôn có HITL.
7. Nghĩ temperature cao = chính xác hơn (ngược lại).
8. "Giải pháp công nghệ trước, vấn đề kinh doanh sau" → sai thứ tự.

### 6. Câu hỏi luyện tập (kiểu đề thi)

**Q1.** Chatbot nội bộ trả lời sai chính sách công ty vì model không biết tài liệu nội bộ. Giải pháp phù hợp nhất, ít tốn kém nhất?
A. Huấn luyện model từ đầu  B. Fine-tuning  C. RAG/grounding trên tài liệu nội bộ  D. Tăng temperature
**Đáp án: C.**

**Q2.** Nhóm marketing muốn thử prompt nhanh với Gemini, không cần hạ tầng, có free tier. Công cụ nào?
**Đáp án: Google AI Studio** (production/enterprise → Vertex AI / Agent Platform).

**Q3.** Tổ chức cần quy trình hoàn tiền tuân thủ chặt chẽ nhưng vẫn muốn hội thoại tự nhiên. Loại agent?
**Đáp án: Hybrid** (luồng quy tắc cố định + LLM hội thoại).

**Q4.** Cần tạo đoạn video quảng cáo ngắn từ mô tả văn bản. Model?
**Đáp án: Veo.**

**Q5.** Nhân viên cần tóm tắt thư và soạn nháp ngay trong Gmail. Dịch vụ?
**Đáp án: Gemini for Google Workspace.**

**Q6.** Mô hình cho kết quả thiên lệch với một nhóm người dùng. Hành động hợp lý?
**Đáp án:** kiểm tra/cải thiện chất lượng và độ đại diện của dữ liệu, kiểm thử bias, thêm HITL (nguyên tắc Fairness).

**Q7.** Muốn câu trả lời ổn định, ít sáng tạo cho tác vụ trích xuất dữ liệu. Chỉnh gì?
**Đáp án: hạ Temperature** (và có thể thu hẹp Top-p).

### Bổ sung theo Exam Guide chính thức

> Bảng đối chiếu đầy đủ từng mục tiêu thi, bảng API dựng sẵn, thông tin kỳ thi và 10 câu tự kiểm tra nằm trong `exam-guide-official-checklist.md`. Tên sản phẩm trong guide chính thức khớp với tên dùng trong guide này (Gemini Enterprise Agent Platform, Agent Studio, Agent Search, Gemini Notebook).
- **Các điểm hay bị bỏ sót:** prompt tuning, metaprompting, Model Builder, Document Translation, Conversational Insights, RAG APIs, AI Hypercomputer, phân biệt anonymization và pseudonymization.
