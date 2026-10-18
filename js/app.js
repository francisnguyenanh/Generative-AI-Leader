/**
 * Generative AI Leader Exam Portal - Core Application Logic
 */

(function () {
  "use strict";

  // Application State
  const state = {
    sets: [],
    currentSet: null,
    questions: [],
    currentIndex: 0,
    userAnswers: {},       // { [questionId]: ["A"] or ["A", "C"] }
    flaggedQuestions: new Set(),
    timeRemaining: 90 * 60, // 90 minutes in seconds
    timerInterval: null,
    isSubmitted: false,
    examStartTime: null,
    reviewFilter: "all"
  };

  // DOM Elements Cache
  const els = {
    themeToggleBtn: document.getElementById("themeToggleBtn"),
    brandLogo: document.getElementById("brandLogo"),
    timerWidget: document.getElementById("timerWidget"),
    timerDisplay: document.getElementById("timerDisplay"),
    
    // Views
    setSelectionView: document.getElementById("setSelectionView"),
    examView: document.getElementById("examView"),
    resultView: document.getElementById("resultView"),
    
    // Set Selection
    setsGrid: document.getElementById("setsGrid"),
    
    // Exam Interface
    examSetName: document.getElementById("examSetName"),
    qTopicBadge: document.getElementById("qTopicBadge"),
    qTypeBadge: document.getElementById("qTypeBadge"),
    qFlagBtn: document.getElementById("qFlagBtn"),
    questionTitle: document.getElementById("questionTitle"),
    optionsList: document.getElementById("optionsList"),
    prevBtn: document.getElementById("prevBtn"),
    nextBtn: document.getElementById("nextBtn"),
    paletteGrid: document.getElementById("paletteGrid"),
    paletteSidebar: document.getElementById("paletteSidebar"),
    paletteBackdrop: document.getElementById("paletteBackdrop"),
    mobilePaletteToggle: document.getElementById("mobilePaletteToggle"),
    closeMobilePaletteBtn: document.getElementById("closeMobilePaletteBtn"),
    submitExamBtn: document.getElementById("submitExamBtn"),
    answeredCountLabel: document.getElementById("answeredCountLabel"),
    
    // Modal
    submitModal: document.getElementById("submitModal"),
    modalWarningText: document.getElementById("modalWarningText"),
    modalCancelBtn: document.getElementById("modalCancelBtn"),
    modalConfirmBtn: document.getElementById("modalConfirmBtn"),
    
    // Results
    resultStatusBadge: document.getElementById("resultStatusBadge"),
    scorePercent: document.getElementById("scorePercent"),
    scoreFraction: document.getElementById("scoreFraction"),
    timeSpentText: document.getElementById("timeSpentText"),
    correctCountText: document.getElementById("correctCountText"),
    incorrectCountText: document.getElementById("incorrectCountText"),
    domainBarsContainer: document.getElementById("domainBarsContainer"),
    reviewList: document.getElementById("reviewList"),
    reviewFilterBtns: document.querySelectorAll(".filter-btn"),
    retryBtn: document.getElementById("retryBtn"),
    backToSetsBtn: document.getElementById("backToSetsBtn")
  };

  // ==========================================================================
  // 1. THEME SWITCHER
  // ==========================================================================
  function initTheme() {
    const savedTheme = localStorage.getItem("genai_exam_theme");
    if (savedTheme) {
      applyTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      applyTheme(prefersDark ? "dark" : "light");
    }

    els.themeToggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(newTheme);
      localStorage.setItem("genai_exam_theme", newTheme);
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    els.themeToggleBtn.innerHTML = theme === "dark" ? "☀️" : "🌙";
    els.themeToggleBtn.setAttribute("aria-label", `Chuyển sang giao diện ${theme === "dark" ? "sáng" : "tối"}`);
  }

  // ==========================================================================
  // 2. INITIALIZATION & DATA LOADING
  // ==========================================================================
  async function initApp() {
    initTheme();
    setupEventListeners();
    await loadManifest();
  }

  async function loadManifest() {
    try {
      // 1. Fallback nếu chạy offline file:// có nhúng script manifest.js
      if (window.QUIZ_MANIFEST && Array.isArray(window.QUIZ_MANIFEST)) {
        state.sets = window.QUIZ_MANIFEST;
      } else {
        const response = await fetch("Quiz_data/manifest.json");
        state.sets = await response.json();
      }
    } catch (err) {
      console.warn("Could not fetch manifest.json, generating default fallback sets:", err);
      // Fallback 10 bộ đề
      state.sets = Array.from({ length: 10 }, (_, i) => ({
        id: `set_${i + 1}`,
        setNumber: i + 1,
        title: `Bộ đề thi số ${i + 1}`,
        description: i === 0 ? "Bộ đề thực hành Generative AI Leader 60 câu." : "Đang chuẩn bị câu hỏi. Thêm file input/" + (i + 1) + ".xlsx để kích hoạt.",
        questionCount: i === 0 ? 60 : 0,
        durationMinutes: 90,
        isAvailable: i === 0,
        dataFile: `set_${i + 1}.json`,
        jsVar: `QUIZ_DATA_SET_${i + 1}`
      }));
    }
    renderSetsGrid();
  }

  function renderSetsGrid() {
    els.setsGrid.innerHTML = "";
    state.sets.forEach((set) => {
      const card = document.createElement("div");
      card.className = `set-card ${set.isAvailable ? "available" : "unavailable"}`;

      card.innerHTML = `
        <div>
          <div class="card-header">
            <span class="set-badge ${set.isAvailable ? "ready" : "coming-soon"}">
              ${set.isAvailable ? "Sẵn sàng" : "Sắp ra mắt"}
            </span>
            <span class="meta-pill">⏱️ ${set.durationMinutes} phút</span>
          </div>
          <h3>${escapeHtml(set.title)}</h3>
          <p>${escapeHtml(set.description)}</p>
        </div>
        <div>
          <div class="set-specs">
            <span>📝 ${set.isAvailable ? `${set.questionCount} câu hỏi` : "Đang cập nhật"}</span>
            <span>🎯 Đạt: ≥ 70%</span>
          </div>
          <button class="btn btn-primary start-set-btn" ${!set.isAvailable ? "disabled" : ""} data-set-id="${set.id}">
            ${set.isAvailable ? "Bắt đầu làm bài" : "Chưa có đề thi"}
          </button>
        </div>
      `;

      if (set.isAvailable) {
        card.querySelector(".start-set-btn").addEventListener("click", () => startExam(set));
      }
      els.setsGrid.appendChild(card);
    });
  }

  function loadScriptAsync(src) {
    return new Promise((resolve, reject) => {
      const existing = document.querySelector(`script[src="${src}"]`);
      if (existing) return resolve();
      const s = document.createElement("script");
      s.src = src;
      s.onload = () => resolve();
      s.onerror = (e) => reject(e);
      document.head.appendChild(s);
    });
  }

  // ==========================================================================
  // 3. EXAM SESSION CONTROL
  // ==========================================================================
  async function startExam(set) {
    state.currentSet = set;
    
    // Tải dữ liệu câu hỏi (hỗ trợ cả HTTP/GitHub Pages và mở trực tiếp file://)
    try {
      if (window[set.jsVar] && Array.isArray(window[set.jsVar])) {
        state.questions = window[set.jsVar];
      } else {
        try {
          const res = await fetch(`Quiz_data/${set.dataFile}`);
          if (res.ok) {
            state.questions = await res.json();
          } else {
            throw new Error("HTTP fetch error");
          }
        } catch (fetchErr) {
          // Fallback load script JS dynamically cho chế độ offline/file://
          await loadScriptAsync(`Quiz_data/${set.jsFile}`);
          state.questions = window[set.jsVar];
        }
      }
    } catch (e) {
      console.error("Error loading quiz questions:", e);
      alert("Không thể tải dữ liệu câu hỏi cho " + set.title);
      return;
    }

    if (!state.questions || state.questions.length === 0) {
      alert("Bộ đề này chưa có câu hỏi nào!");
      return;
    }

    // Reset State
    state.currentIndex = 0;
    state.userAnswers = {};
    state.flaggedQuestions.clear();
    state.isSubmitted = false;
    state.timeRemaining = (set.durationMinutes || 90) * 60;
    state.examStartTime = Date.now();

    // Setup Header & UI
    els.examSetName.textContent = set.title;
    switchView("exam");
    startTimer();
    renderQuestionPalette();
    loadQuestion(0);
  }

  function startTimer() {
    clearInterval(state.timerInterval);
    els.timerWidget.style.display = "inline-flex";
    updateTimerDisplay();

    state.timerInterval = setInterval(() => {
      state.timeRemaining--;
      updateTimerDisplay();

      if (state.timeRemaining <= 0) {
        clearInterval(state.timerInterval);
        alert("⏰ Hết thời gian làm bài (90 phút)! Hệ thống sẽ tự động nộp bài.");
        finishExam();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const mins = Math.floor(state.timeRemaining / 60);
    const secs = state.timeRemaining % 60;
    els.timerDisplay.textContent = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

    // Cảnh báo thời gian
    if (state.timeRemaining <= 180) { // < 3 mins
      els.timerWidget.className = "timer-widget danger";
    } else if (state.timeRemaining <= 600) { // < 10 mins
      els.timerWidget.className = "timer-widget warning";
    } else {
      els.timerWidget.className = "timer-widget";
    }
  }

  // ==========================================================================
  // 4. QUESTION RENDERING & INTERACTIONS
  // ==========================================================================
  function loadQuestion(index) {
    if (index < 0 || index >= state.questions.length) return;
    state.currentIndex = index;
    const q = state.questions[index];

    // Cập nhật badges & flag
    els.qTopicBadge.textContent = q.topic || "Generative AI Leader";
    const isMulti = q.type === "multiple" || (q.answer && q.answer.length > 1);
    els.qTypeBadge.innerHTML = isMulti ? "☑️ Chọn nhiều đáp án" : "🔘 Chọn một đáp án";
    
    updateFlagButton();

    // Tiêu đề câu hỏi
    els.questionTitle.innerHTML = `<span style="color:var(--accent-primary); font-weight:700;">Câu ${index + 1}/${state.questions.length}:</span> ${escapeHtml(q.question)}`;

    // Danh sách các lựa chọn
    els.optionsList.innerHTML = "";
    const currentAns = state.userAnswers[q.id] || [];

    q.options.forEach((opt) => {
      const isSelected = currentAns.includes(opt.key);
      const optItem = document.createElement("div");
      optItem.className = `option-item ${isSelected ? "selected" : ""}`;
      optItem.setAttribute("role", isMulti ? "checkbox" : "radio");
      optItem.setAttribute("aria-checked", isSelected ? "true" : "false");
      optItem.tabIndex = 0;

      optItem.innerHTML = `
        <input 
          type="${isMulti ? "checkbox" : "radio"}" 
          name="option_q_${q.id}" 
          class="option-input" 
          value="${opt.key}" 
          ${isSelected ? "checked" : ""}
          tabindex="-1"
        >
        <span class="option-key">${opt.key})</span>
        <span class="option-text">${escapeHtml(opt.text)}</span>
      `;

      const toggleOption = () => {
        handleOptionSelect(q.id, opt.key, isMulti);
      };

      optItem.addEventListener("click", toggleOption);
      optItem.addEventListener("keydown", (e) => {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          toggleOption();
        }
      });

      els.optionsList.appendChild(optItem);
    });

    // Cập nhật trạng thái nút chuyển câu
    els.prevBtn.disabled = index === 0;
    if (index === state.questions.length - 1) {
      els.nextBtn.innerHTML = "Xem lại & Nộp bài 🏁";
    } else {
      els.nextBtn.innerHTML = "Câu tiếp theo ❯";
    }

    updateQuestionPaletteCurrent();
  }

  function handleOptionSelect(questionId, key, isMulti) {
    let current = state.userAnswers[questionId] ? [...state.userAnswers[questionId]] : [];

    if (isMulti) {
      if (current.includes(key)) {
        current = current.filter((k) => k !== key);
      } else {
        current.push(key);
      }
    } else {
      current = [key];
    }

    if (current.length === 0) {
      delete state.userAnswers[questionId];
    } else {
      state.userAnswers[questionId] = current;
    }

    // Render lại UI câu hiện tại và matrix
    loadQuestion(state.currentIndex);
    updateQuestionPaletteItem(state.currentIndex);
    updateAnsweredSummary();
  }

  function toggleFlagCurrentQuestion() {
    const q = state.questions[state.currentIndex];
    if (state.flaggedQuestions.has(q.id)) {
      state.flaggedQuestions.delete(q.id);
    } else {
      state.flaggedQuestions.add(q.id);
    }
    updateFlagButton();
    updateQuestionPaletteItem(state.currentIndex);
  }

  function updateFlagButton() {
    const q = state.questions[state.currentIndex];
    const isFlagged = state.flaggedQuestions.has(q.id);
    if (isFlagged) {
      els.qFlagBtn.classList.add("flagged");
      els.qFlagBtn.innerHTML = "🚩 Đã gắn cờ xem lại";
    } else {
      els.qFlagBtn.classList.remove("flagged");
      els.qFlagBtn.innerHTML = "🏳️ Đặt cờ xem lại";
    }
  }

  // ==========================================================================
  // 5. QUESTION MATRIX PALETTE
  // ==========================================================================
  function renderQuestionPalette() {
    els.paletteGrid.innerHTML = "";
    state.questions.forEach((q, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "matrix-btn";
      btn.textContent = idx + 1;
      btn.id = `matrix-btn-${idx}`;
      btn.addEventListener("click", () => {
        loadQuestion(idx);
        closeMobilePalette();
      });
      els.paletteGrid.appendChild(btn);
    });
    updateAllPaletteItems();
    updateAnsweredSummary();
  }

  function updateAllPaletteItems() {
    state.questions.forEach((_, idx) => updateQuestionPaletteItem(idx));
    updateQuestionPaletteCurrent();
  }

  function updateQuestionPaletteItem(index) {
    const btn = document.getElementById(`matrix-btn-${index}`);
    if (!btn) return;
    const q = state.questions[index];
    const isAnswered = state.userAnswers[q.id] && state.userAnswers[q.id].length > 0;
    const isFlagged = state.flaggedQuestions.has(q.id);

    btn.className = "matrix-btn";
    if (isAnswered) btn.classList.add("answered");
    if (isFlagged) btn.classList.add("flagged");
    if (index === state.currentIndex) btn.classList.add("current");
  }

  function updateQuestionPaletteCurrent() {
    const allBtns = els.paletteGrid.querySelectorAll(".matrix-btn");
    allBtns.forEach((b, idx) => {
      if (idx === state.currentIndex) {
        b.classList.add("current");
      } else {
        b.classList.remove("current");
      }
    });
  }

  function updateAnsweredSummary() {
    const answeredCount = Object.keys(state.userAnswers).length;
    els.answeredCountLabel.textContent = `${answeredCount}/${state.questions.length}`;
  }

  // Mobile Palette Drawer Toggle
  function openMobilePalette() {
    els.paletteSidebar.classList.add("mobile-open");
    els.paletteBackdrop.classList.add("active");
  }

  function closeMobilePalette() {
    els.paletteSidebar.classList.remove("mobile-open");
    els.paletteBackdrop.classList.remove("active");
  }

  // ==========================================================================
  // 6. EXAM SUBMISSION & SCORING
  // ==========================================================================
  function promptSubmitModal() {
    const total = state.questions.length;
    const answered = Object.keys(state.userAnswers).length;
    const unanswered = total - answered;

    if (unanswered > 0) {
      els.modalWarningText.textContent = `Bạn còn ${unanswered} câu chưa trả lời. Bạn có chắc chắn muốn kết thúc bài thi không?`;
    } else {
      els.modalWarningText.textContent = `Bạn đã hoàn thành tất cả ${total} câu hỏi. Hãy nộp bài để xem ngay kết quả và đáp án chi tiết!`;
    }

    els.submitModal.classList.add("active");
  }

  function closeSubmitModal() {
    els.submitModal.classList.remove("active");
  }

  function finishExam() {
    clearInterval(state.timerInterval);
    closeSubmitModal();
    closeMobilePalette();
    state.isSubmitted = true;
    els.timerWidget.style.display = "none";

    calculateAndShowResults();
  }

  function calculateAndShowResults() {
    let totalQuestions = state.questions.length;
    let correctCount = 0;
    
    // Thống kê theo chủ đề (Domain breakdown)
    const domainStats = {};

    state.questions.forEach((q) => {
      const userAns = (state.userAnswers[q.id] || []).sort();
      const correctAns = (q.answer || []).sort();

      const isCorrect = userAns.length === correctAns.length &&
        userAns.every((val, index) => val === correctAns[index]);

      if (isCorrect) correctCount++;

      const topic = q.topic || "General";
      if (!domainStats[topic]) {
        domainStats[topic] = { total: 0, correct: 0 };
      }
      domainStats[topic].total++;
      if (isCorrect) domainStats[topic].correct++;
    });

    const percent = Math.round((correctCount / totalQuestions) * 100);
    const isPassed = percent >= 70; // 70% threshold

    // Hiển thị Score Banner
    els.resultStatusBadge.className = `result-status-badge ${isPassed ? "pass" : "fail"}`;
    els.resultStatusBadge.textContent = isPassed ? "🎉 CHÚC MỪNG: BẠN ĐÃ ĐẠT (PASSED)" : "⚠️ CHƯA ĐẠT (FAILED)";

    els.scorePercent.textContent = `${percent}%`;
    els.scoreFraction.textContent = `(${correctCount}/${totalQuestions} câu đúng)`;
    els.correctCountText.textContent = correctCount;
    els.incorrectCountText.textContent = totalQuestions - correctCount;

    // Thời gian làm bài
    const elapsedSeconds = Math.max(0, (state.currentSet.durationMinutes * 60) - state.timeRemaining);
    const elapsedMins = Math.floor(elapsedSeconds / 60);
    const elapsedSecs = elapsedSeconds % 60;
    els.timeSpentText.textContent = `${elapsedMins}m ${elapsedSecs}s`;

    // Render domain bars
    renderDomainBreakdown(domainStats);

    // Render danh sách câu hỏi xem lại
    renderReviewQuestions();

    switchView("result");
  }

  function renderDomainBreakdown(domainStats) {
    els.domainBarsContainer.innerHTML = "";
    Object.keys(domainStats).forEach((topic) => {
      const stat = domainStats[topic];
      const topicPct = Math.round((stat.correct / stat.total) * 100);

      const item = document.createElement("div");
      item.className = "domain-item";
      item.innerHTML = `
        <div class="domain-info">
          <span>${escapeHtml(topic)}</span>
          <span>${stat.correct}/${stat.total} (${topicPct}%)</span>
        </div>
        <div class="domain-bar-bg">
          <div class="domain-bar-fill" style="width: ${topicPct}%; background: ${topicPct >= 70 ? "var(--success)" : "var(--accent-primary)"};"></div>
        </div>
      `;
      els.domainBarsContainer.appendChild(item);
    });
  }

  // ==========================================================================
  // 7. FULL REVIEW QUESTIONS
  // ==========================================================================
  function renderReviewQuestions() {
    els.reviewList.innerHTML = "";

    state.questions.forEach((q, idx) => {
      const userAns = (state.userAnswers[q.id] || []).sort();
      const correctAns = (q.answer || []).sort();

      const isCorrect = userAns.length === correctAns.length &&
        userAns.every((val, i) => val === correctAns[i]);

      const isFlagged = state.flaggedQuestions.has(q.id);

      // Lọc
      if (state.reviewFilter === "correct" && !isCorrect) return;
      if (state.reviewFilter === "incorrect" && isCorrect) return;
      if (state.reviewFilter === "flagged" && !isFlagged) return;

      const card = document.createElement("div");
      card.className = `review-card ${isCorrect ? "correct" : "incorrect"}`;

      let optionsHtml = "";
      q.options.forEach((opt) => {
        const isOptCorrect = correctAns.includes(opt.key);
        const isOptUserChoice = userAns.includes(opt.key);

        let optClass = "review-opt";
        let icon = "⚪";

        if (isOptCorrect) {
          optClass += " is-correct-answer";
          icon = "✅";
        } else if (isOptUserChoice && !isOptCorrect) {
          optClass += " is-user-wrong";
          icon = "❌";
        }

        optionsHtml += `
          <div class="${optClass}">
            <span>${icon}</span>
            <span style="font-weight:700;">${opt.key})</span>
            <span>${escapeHtml(opt.text)}</span>
            ${isOptUserChoice ? '<span style="margin-left:auto; font-size:0.8rem; font-weight:700;">(Bạn đã chọn)</span>' : ""}
          </div>
        `;
      });

      card.innerHTML = `
        <div class="review-q-meta">
          <span class="q-topic-badge">${escapeHtml(q.topic || "General")}</span>
          <span class="review-status-tag ${isCorrect ? "correct" : "incorrect"}">
            ${isCorrect ? "✓ Trả lời Đúng" : "✗ Trả lời Sai"}
          </span>
        </div>
        <div class="question-title">
          <strong>Câu ${idx + 1}:</strong> ${escapeHtml(q.question)}
        </div>
        <div class="review-options">
          ${optionsHtml}
        </div>
        <div class="review-verdict">
          <strong>Đáp án chính xác:</strong> ${correctAns.join(", ")} | 
          <strong>Lựa chọn của bạn:</strong> ${userAns.length > 0 ? userAns.join(", ") : "<em>Chưa trả lời</em>"}
          ${q.explanation ? `<div style="margin-top:0.4rem; color:var(--text-secondary); font-size:0.85rem;">💡 <em>${escapeHtml(q.explanation)}</em></div>` : ""}
        </div>
      `;

      els.reviewList.appendChild(card);
    });

    if (els.reviewList.children.length === 0) {
      els.reviewList.innerHTML = `<div style="text-align:center; padding:2rem; color:var(--text-muted);">Không có câu hỏi nào khớp với bộ lọc này.</div>`;
    }
  }

  // ==========================================================================
  // 8. EVENT LISTENERS & NAVIGATION
  // ==========================================================================
  function setupEventListeners() {
    // Brand click to go Home
    els.brandLogo.addEventListener("click", () => {
      if (state.currentSet && !state.isSubmitted) {
        if (!confirm("Bạn đang làm bài thi. Trở về trang chủ sẽ hủy phiên thi này. Bạn có chắc không?")) {
          return;
        }
        clearInterval(state.timerInterval);
        els.timerWidget.style.display = "none";
      }
      switchView("sets");
    });

    // Next / Prev buttons
    els.prevBtn.addEventListener("click", () => {
      if (state.currentIndex > 0) loadQuestion(state.currentIndex - 1);
    });

    els.nextBtn.addEventListener("click", () => {
      if (state.currentIndex < state.questions.length - 1) {
        loadQuestion(state.currentIndex + 1);
      } else {
        promptSubmitModal();
      }
    });

    // Flag button
    els.qFlagBtn.addEventListener("click", toggleFlagCurrentQuestion);

    // Mobile Palette Drawer
    els.mobilePaletteToggle.addEventListener("click", openMobilePalette);
    els.closeMobilePaletteBtn.addEventListener("click", closeMobilePalette);
    els.paletteBackdrop.addEventListener("click", closeMobilePalette);

    // Submit Action
    els.submitExamBtn.addEventListener("click", promptSubmitModal);
    els.modalCancelBtn.addEventListener("click", closeSubmitModal);
    els.modalConfirmBtn.addEventListener("click", finishExam);

    // Review Filters
    els.reviewFilterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        els.reviewFilterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.reviewFilter = btn.dataset.filter;
        renderReviewQuestions();
      });
    });

    // Results screen actions
    els.retryBtn.addEventListener("click", () => {
      if (state.currentSet) startExam(state.currentSet);
    });

    els.backToSetsBtn.addEventListener("click", () => {
      switchView("sets");
    });

    // Keyboard Shortcuts for smooth exam navigation
    window.addEventListener("keydown", (e) => {
      if (els.examView.classList.contains("active") && !els.submitModal.classList.contains("active")) {
        if (e.key === "ArrowLeft" && state.currentIndex > 0) {
          loadQuestion(state.currentIndex - 1);
        } else if (e.key === "ArrowRight" && state.currentIndex < state.questions.length - 1) {
          loadQuestion(state.currentIndex + 1);
        }
      }
    });
  }

  function switchView(viewName) {
    els.setSelectionView.classList.remove("active");
    els.examView.classList.remove("active");
    els.resultView.classList.remove("active");

    if (viewName === "sets") {
      els.setSelectionView.classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (viewName === "exam") {
      els.examView.classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (viewName === "result") {
      els.resultView.classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Khởi động ứng dụng khi DOM sẵn sàng
  document.addEventListener("DOMContentLoaded", initApp);
})();
