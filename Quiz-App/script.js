const Questions = [
    {
        question : "Who is best cricketer currently?",
        answers : [
            {text : "Babar Azam", correct : false},
            {text : "Virat Kohli", correct : true},
            {text : "Jos Buttler", correct : false},
            {text : "David Warner", correct : false},
            ]
    },
    
    {
        question : "Smallest continent in the world",
        answers : [
            {text : "Asia", correct : false},
            {text : "Australia", correct : true},
            {text : "Arctic", correct : false},
            {text : "Africa", correct : false},
            ]
    },
    {
        question : "Best drink in the world?",
        answers : [
            {text : "Milk", correct : false},
            {text : "Red Wine", correct : true},
            {text : "Sting", correct : false},
            {text : "Tea", correct : false},
                ]
    },
    {
        question : "Pakistan nightmare in cricket worldcups?",
        answers : [
            {text : "Australia", correct : false},
            {text : "India", correct : true},
            {text : "New Zealand", correct : false},
            {text : "Afghanistan", correct : false},
                ]
    }
];

const Qs = document.querySelector(".question");
const Ans = document.querySelector(".buttons");
const btn = document.querySelector(".button");
const NextBtn = document.querySelector(".next");

let score = 0;
let questionIndex = 0;

function StartQuiz(){
    NextBtn.innerHTML = "Next";
    ShowQuestion();
}

function ShowQuestion(){
    resetState();
    let currentQuestion = Questions[questionIndex];
    let questionNo = questionIndex + 1;
    Qs.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("button");
        Ans.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    NextBtn.style.display = "none";
    while(Ans.firstChild){
        Ans.removeChild(Ans.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(Ans.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    NextBtn.style.display = "block";
}

function showScore(){
    resetState();
    Qs.innerHTML = `You scored ${score} out of ${Questions.length}`;
    NextBtn.innerHTML = "Play Again";
    NextBtn.style.display = "block";
}

function handleNextButton(){
    questionIndex++;
    if (questionIndex < Questions.length){
        ShowQuestion();
    }else{
        showScore();
    }
}

NextBtn.addEventListener("click", function(){
    if (questionIndex < Questions.length){
        handleNextButton();
    }else{
        StartQuiz();
    }
});

function StartQuiz() {
    NextBtn.innerHTML = "Next";
    score = 0;  // Reset the score to 0
    questionIndex = 0;  // Reset the questionIndex to 0
    ShowQuestion();
}

StartQuiz();