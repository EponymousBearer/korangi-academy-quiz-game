// Array of 10 questions with 5 hints + 1 answer
const questions = [
  {
    hints: [
      "۴۰۰۰ جنگجو",
      "بستی خیبر",
      "مسلمان ۱۸۰۰",
      "قلعے۱۷",
      "فتح مسلمانوں کی",
    ],
    answer: "غزوہ خیبر",
  },
  {
    hints: [
      "۱۰۰۰کافر",
      "ابو جہل سردار",
      "مسلمان ۳۱۳",
      "کافر مارے گئے ۷۰",
      "۷۰ گھوڑے ۳ اونٹ",
    ],
    answer: "غزوہ بدر",
  },
  {
    hints: [
      "عمرے کے لیے روانہ",
      "سفیر حضرت عثمان",
      "سورۃ الفتح",
      "بیعت رضوان",
      "دس سال جنگ نہیں ہو گی",
    ],
    answer: "صلح حدیبیہ",
  },
  {
    hints: [
      "مسلمان ۳۰۰۰",
      "کفار ۱۰۰۰۰",
      "مدینہ کے شمال",
      "نمازیں قضا ہوئیں",
      "سردارابو سفیان",
    ],
    answer: "غزوہ خندق",
  },
  {
    hints: [
      "مسلمان ۱۰۰۰",
      "کفار ۳۰۰۰",
      "مسلمان ۵۰ سوار",
      "کافر مارے گئے۳۰",
      "سردارابو سفیان",
    ],
    answer: "غزوہ احد",
  },
];

let currentQuestionIndex = 0;
let revealedCount = 0;

const gameBoard = document.getElementById("game-board");
const controls = document.getElementById("controls");
const resetBtn = document.getElementById("resetBtn");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion(index) {
  gameBoard.innerHTML = "";
  revealedCount = 0;
  controls.style.display = "none";

  const q = questions[index];

  // Create 5 hint boxes
  q.hints.forEach((hint, i) => {
    const box = document.createElement("div");
    box.className = "box";
    box.textContent = i + 1;
    box.setAttribute("data-text", hint);
    box.addEventListener("click", revealBox);
    gameBoard.appendChild(box);
  });

  // Create answer box
  const answerBox = document.createElement("div");
  answerBox.className = "box answer";
  answerBox.textContent = "Answer";
  answerBox.setAttribute("data-text", q.answer);
  answerBox.addEventListener("click", revealBox);
  gameBoard.appendChild(answerBox);
}

function revealBox() {
  const isAnswerBox = this.classList.contains("answer");

  if (!this.classList.contains("revealed")) {
    this.textContent = this.getAttribute("data-text");
    this.classList.add("revealed");
    revealedCount++;
  }

  // If clicked the answer box, reveal all hints instantly
  if (isAnswerBox) {
    document.querySelectorAll(".box").forEach((box) => {
      if (!box.classList.contains("revealed")) {
        box.textContent = box.getAttribute("data-text");
        box.classList.add("revealed");
        revealedCount++;
      }
    });
  }

  // Show controls if all are revealed
  if (revealedCount >= 6) {
    controls.style.display = "block";
  }
}

resetBtn.addEventListener("click", () => {
  loadQuestion(currentQuestionIndex);
});

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion(currentQuestionIndex);
  } else {
    alert("You have completed all questions!");
  }
});

function revealBox() {
  const isAnswerBox = this.classList.contains("answer");

  if (!this.classList.contains("revealed")) {
    this.textContent = this.getAttribute("data-text");
    this.classList.add("revealed");
    revealedCount++;
  }

  // If clicked the answer box, reveal all hints instantly
  if (isAnswerBox) {
    document.querySelectorAll(".box").forEach((box) => {
      if (!box.classList.contains("revealed")) {
        box.textContent = box.getAttribute("data-text");
        box.classList.add("revealed");
        revealedCount++;
      }
    });
  }

  // Show controls if all are revealed
  if (revealedCount >= 6) {
    controls.style.display = "block";
  }
}

// Load first question
loadQuestion(currentQuestionIndex);
