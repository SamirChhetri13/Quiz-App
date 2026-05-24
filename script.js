// screen elements

const startscreen = document.getElementById("start-screen");
const quizscreen = document.getElementById("quiz-screen");
const resultscreen = document.getElementById("result-screen");

//buttons

const startBtn = document.getElementById("start-btn");
const nexttBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

//quiz elements

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const questionNumber = document.getElementById("question-number");
const scoreBox = document.getElementById("score-box");
const finalScore = document.getElementById("final-score");
const timerBox = document.getElementById("timer");

const questions = [
  {
    question:
      "How many players are on the field for one football (soccer) team?",
    options: ["9 players", "10 players", "11 players", "12 players"],
    answer: "11 players",
  },
  {
    question: "Which country won the 2018 FIFA World Cup?",
    options: ["Germany", "Brazil", "France", "Argentina"],
    answer: "France",
  },
  {
    question: "Who is known as 'The King of Football'?",
    options: ["Cristiano Ronaldo", "Diego Maradona", "Pelé", "Lionel Messi"],
    answer: "Pelé",
  },
  {
    question: "What is the duration of a standard football match?",
    options: ["60 minutes", "70 minutes", "80 minutes", "90 minutes"],
    answer: "90 minutes",
  },
  {
    question: "Which country hosted the 2022 FIFA World Cup?",
    options: ["Russia", "Qatar", "Brazil", "South Africa"],
    answer: "Qatar",
  },
  {
    question: "What is the term for when a player scores 3 goals in a match?",
    options: ["Double", "Hat-trick", "Triple kick", "Super goal"],
    answer: "Hat-trick",
  },
  {
    question: "Which player is famously known as 'CR7'?",
    options: ["Cristiano Ronaldo", "Neymar Jr", "Kylian Mbappé", "Luka Modrić"],
    answer: "Cristiano Ronaldo",
  },
  {
    question:
      "What is the maximum number of substitutions allowed in most modern professional football matches?",
    options: ["3", "4", "5", "6"],
    answer: "5",
  },
  {
    question: "Which country has won the most FIFA World Cups?",
    options: ["Germany", "Brazil", "Italy", "Argentina"],
    answer: "Brazil",
  },
  {
    question: "What color card means a player is sent off?",
    options: ["Green card", "Blue card", "Red card", "Yellow card"],
    answer: "Red card",
  },
];

let currentQuestionIndex = 0;
let score = 0;

startBtn.addEventListener("click", () => {
  (startScreen, classList.add("hidden"));
  (quizScreen, classList.remove("hidden"));

  showQuestions();
});

function showQuestion() {
  resetOptions();

  let currentQuestion = questions(currentQuestionIndex);

  questionText.innerText = currentQuestion.question;

  questionNumber.innerText = `Question ${currentQuestionIndex + 1}/${questions.length}`;

  currentQuestion.options.forEach(option => {
    const button = document.getElementById("div");
    button.innerText = option;
    button.classList.add("option");

    button.addEventListener("click",() => selectAnswer(button, option));

    optionsContainer.appendChild(button);
    
  });
}

// reset options function 

function resetOptions(){
    optionsContainer.innerHTML = "";
}
