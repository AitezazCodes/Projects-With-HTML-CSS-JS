let Quiz = [
  {
    question: "Who is CEO of Blue Origin?",
    answer: [
      { text: "Elon MUsk", correct: false },
      { text: "Jeff Bezos", correct: true },
      { text: "Tate", correct: false },
      { text: "Jack Ma", correct: false },
    ],
  },
  {
    question: "Who is CEO of SpaceX?",
    answer: [
      { text: "Jeff Bezos", correct: false },
      { text: "Tate the Talisman", correct: false },
      { text: "Jack Ma", correct: false },
      { text: "Elon MUsk", correct: true },
    ],
  },
  {
    question: "Universe is how many years old?",
    answer: [
      { text: "13.1 biilion", correct: false },
      { text: "7 billion", correct: false },
      { text: "13.8 billion", correct: true },
      { text: "None of these", correct: false },
    ],
  },
  {
    question: "Javascript was invented in?",
    answer: [
      { text: "1995", correct: true },
      { text: "1996", correct: false },
      { text: "1997", correct: false },
      { text: "2001", correct: false },
    ],
  },
  {
    question: "The year we are in is?",
    answer: [
      { text: "2019", correct: false },
      { text: "2021", correct: false },
      { text: "2024", correct: true },
      { text: "2075", correct: false },
    ],
  },
];

const QuizApp = document.getElementById("quiz-app");
let Question = document.querySelector("#question");
const SubmitBtn = document.querySelector("#btn");
let answersList = document.querySelector(".answers-list");

let currentQuestionIndex = 0;
let score = 0;
let RadioBtns;

// Start Quiz Function
function startQuiz() {
  if (currentQuestionIndex < Quiz.length) {
    loadQuestion();
  } else {
    scoreDisplay();
  }
}

// Loading Question Function
function loadQuestion() {
  Question.innerHTML = Quiz[currentQuestionIndex].question;

  answersList.innerHTML = "";
  let id = 1;

  Quiz[currentQuestionIndex].answer.forEach((ans) => {
    let li = document.createElement("li");
    li.innerHTML = `<input type="radio" name="answer" class="answer" id="${id}">
                    <label for="${id}">${ans.text}</label>`;
    answersList.appendChild(li);

    id++;
  });
  RadioBtns = document.querySelectorAll('input[type="radio"]');
}

// Checking if answer is clicked
function checked() {
  return Array.from(RadioBtns).some((radio) => radio.checked);
}

// Function to display the final score
function scoreDisplay() {
  QuizApp.style.display = "none";
  let para = document.createElement("h1");
  para.innerHTML = `Score is ${score}/5 <button id="reloadBtn" onclick="location.reload()">Reload</button>`;
  document.body.appendChild(para);
}

// Next button
SubmitBtn.addEventListener("click", function () {
  if (checked()) {
    if (
      Quiz[currentQuestionIndex].answer.find((ans) => ans.correct).text ===
      document.querySelector('input[name="answer"]:checked').nextElementSibling
        .textContent
    ) {
      score++;
    }
    currentQuestionIndex++;
    startQuiz();
  } 
  else {
    alert("Plz select an answer before moving to next question");
  }
});

startQuiz();
