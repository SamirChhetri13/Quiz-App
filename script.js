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
    question: "Which country won the 2018 FIFA World Cup?",
    options: ["Germany", "Brazil", "France", "Argentina"],
    answer: "France"
  },
  {
    question: "Who is widely known as the GOAT of football?",
    options: ["Ronaldo", "Maradona", "Pelé", "Messi"],
    answer: "Messi"
  },
  {
    question: "What is the duration of a standard football match?",
    options: ["60 minutes", "75 minutes", "90 minutes", "120 minutes"],
    answer: "90 minutes"
  },
  {
    question: "Which country hosted the 2022 FIFA World Cup?",
    options: ["Qatar", "Russia", "Brazil", "South Africa"],
    answer: "Qatar"
  },
  {
    question: "What is it called when a player scores 3 goals in one match?",
    options: ["Hat-trick", "Triple goal", "Mega goal", "Power shot"],
    answer: "Hat-trick"
  },
  {
    question: "Which player is known as CR7?",
    options: ["Messi", "Cristiano Ronaldo", "Neymar", "Mbappé"],
    answer: "Cristiano Ronaldo"
  },
  {
    question: "How many substitutions are allowed in modern football?",
    options: ["3", "4", "5", "6"],
    answer: "5"
  },
  {
    question: "Which country has won the most FIFA World Cups?",
    options: ["Brazil", "Germany", "Italy", "Argentina"],
    answer: "Brazil"
  },
  {
    question: "What color card means a player is sent off?",
    options: ["Yellow", "Blue", "Red", "Green"],
    answer: "Red"
  },
  {
    question: "Which country won the 2022 FIFA World Cup?",
    options: ["France", "Brazil", "Argentina", "Portugal"],
    answer: "Argentina"
  },
  {
    question: "Which position is responsible for stopping goals?",
    options: ["Striker", "Midfielder", "Goalkeeper", "Winger"],
    answer: "Goalkeeper"
  },
  {
    question: "How many points for a win in football leagues?",
    options: ["1", "2", "3", "4"],
    answer: "3"
  },
  {
    question: "Which club did Messi spend most of his career at?",
    options: ["PSG", "Barcelona", "Inter Miami", "Chelsea"],
    answer: "Barcelona"
  },
  {
    question: "Which country won the first FIFA World Cup?",
    options: ["Brazil", "Germany", "Uruguay", "Italy"],
    answer: "Uruguay"
  },
  {
    question: "What is the top football league in England called?",
    options: ["La Liga", "Serie A", "Premier League", "Bundesliga"],
    answer: "Premier League"
  },
  {
    question: "Who scored the 'Hand of God' goal?",
    options: ["Pelé", "Maradona", "Messi", "Ronaldo"],
    answer: "Maradona"
  },
  {
    question: "Which country has won 5 World Cups?",
    options: ["Germany", "Argentina", "Brazil", "Italy"],
    answer: "Brazil"
  },
  {
    question: "Which jersey number is associated with playmakers like Messi?",
    options: ["7", "9", "10", "11"],
    answer: "10"
  },
  {
    question: "What trophy is given to the World Cup winner?",
    options: ["Golden Boot", "World Cup Trophy", "Champions Cup", "Silver Cup"],
    answer: "World Cup Trophy"
  },
  {
    question: "Cristiano Ronaldo is from which country?",
    options: ["Spain", "Portugal", "Brazil", "Argentina"],
    answer: "Portugal"
  },
  {
    question: "Which club is known as Real Madrid's rival?",
    options: ["Liverpool", "Barcelona", "Manchester City", "Juventus"],
    answer: "Barcelona"
  },
  {
    question: "What is a football pitch called in professional terms?",
    options: ["Court", "Field", "Pitch", "Arena"],
    answer: "Pitch"
  },
  {
    question: "Which country won Euro 2016?",
    options: ["Germany", "France", "Portugal", "Spain"],
    answer: "Portugal"
  },
  {
    question: "What happens when a match is tied in knockout stage?",
    options: ["Extra time", "Replay", "Draw", "Cancel"],
    answer: "Extra time"
  },
  {
    question: "Which football club is based in Manchester?",
    options: ["Liverpool", "Chelsea", "Manchester United", "Arsenal"],
    answer: "Manchester United"
  },
  {
    question: "What is the term for defending players?",
    options: ["Attackers", "Defenders", "Strikers", "Wingers"],
    answer: "Defenders"
  },
  {
    question: "Which country is Neymar from?",
    options: ["Argentina", "Brazil", "Portugal", "Spain"],
    answer: "Brazil"
  },
  {
    question: "What is offside in football?",
    options: ["Foul", "Illegal position", "Goal", "Penalty"],
    answer: "Illegal position"
  },
  {
    question: "Which competition is for European national teams?",
    options: ["Copa America", "World Cup", "Euro Cup", "Asian Cup"],
    answer: "Euro Cup"
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
