const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

const questionText = document.getElementById("question-text");
const optionsContainer = document.querySelector(".options-container");
const questionNumber = document.getElementById("question-number");
const timerBox = document.getElementById("timer");
const scoreBox = document.getElementById("score-box");
const finalScore = document.getElementById("final-score");
const progressBar = document.getElementById("progress-bar");

const questions = [
  {
    question: "How many players are on the field for one football team?",
    options: ["9", "10", "11", "12"],
    answer: "11"
  },
  {
    question: "Which country won 2018 FIFA World Cup?",
    options: ["Germany", "Brazil", "France", "Argentina"],
    answer: "France"
  },
  {
    question: "Who is the GOAT of Football?",
    options: ["Ronaldo", "Maradona", "Pelé", "Messi"],
    answer: "Messi"
  },
    {
    question: "What is the duration of a standard football match?",
    options: ["60 minutes", "70 minutes", "80 minutes", "90 minutes"],
    answer: "90 minutes"
  },
  {
    question: "Which country hosted the 2022 FIFA World Cup?",
    options: ["Russia", "Qatar", "Brazil", "South Africa"],
    answer: "Qatar"
  },
  {
    question: "What is the term for when a player scores 3 goals in a match?",
    options: ["Double", "Hat-trick", "Triple kick", "Super goal"],
    answer: "Hat-trick"
  },
  {
    question: "Which player is famously known as 'CR7'?",
    options: ["Cristiano Ronaldo", "Neymar Jr", "Kylian Mbappé", "Luka Modrić"],
    answer: "Cristiano Ronaldo"
  },
  {
    question: "What is the maximum number of substitutions allowed in most modern professional football matches?",
    options: ["3", "4", "5", "6"],
    answer: "5"
  },
  {
    question: "Which country has won the most FIFA World Cups?",
    options: ["Germany", "Brazil", "Italy", "Argentina"],
    answer: "Brazil"
  },
  {
    question: "What color card means a player is sent off?",
    options: ["Green card", "Blue card", "Red card", "Yellow card"],
    answer: "Red card"
  }
];

let current = 0;
let score = 0;
let timer;
let timeLeft = 10;

/* START */
startBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  startQuiz();
});

function startQuiz() {
  current = 0;
  score = 0;
  scoreBox.innerText = "Score: 0";
  showQuestion();
}

/* SHOW QUESTION */
function showQuestion() {
  clearInterval(timer);
  optionsContainer.innerHTML = "";
  optionsContainer.classList.remove("disabled");

  const q = questions[current];

  questionText.innerText = q.question;
  questionNumber.innerText = `Question ${current + 1}/${questions.length}`;

  progressBar.style.width = `${(current / questions.length) * 100}%`;

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.classList.add("option");
    btn.innerText = opt;

    btn.onclick = () => selectAnswer(btn, opt);

    optionsContainer.appendChild(btn);
  });

  startTimer();
}

/* TIMER */
function startTimer() {
  timeLeft = 10;
  timerBox.innerText = `Time: ${timeLeft}`;

  timer = setInterval(() => {
    timeLeft--;
    timerBox.innerText = `Time: ${timeLeft}`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

/* ANSWER */
function selectAnswer(btn, selected) {
  const correct = questions[current].answer;

  clearInterval(timer);
  optionsContainer.classList.add("disabled");

  if (selected === correct) {
    btn.classList.add("correct");
    score++;
  } else {
    btn.classList.add("wrong");

    // show correct answer
    Array.from(optionsContainer.children).forEach(b => {
      if (b.innerText === correct) {
        b.classList.add("correct");
      }
    });
  }

  scoreBox.innerText = `Score: ${score}`;

  setTimeout(nextQuestion, 1200);
}

/* NEXT */
function nextQuestion() {
  current++;

  if (current < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

/* RESULT */
function showResult() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  finalScore.innerText = `Your Score: ${score}/${questions.length}`;
}

/* RESTART */
restartBtn.addEventListener("click", () => {
  clearInterval(timer);

  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
});
