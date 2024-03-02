// Player 1 throws rock, Player 2 throws rock: Tie
// Player 1 throws rock, Player 2 throws paper: Player 2 wins
// Player 1 throws rock, Player 2 throws scissors: Player 1 wins
// Player 1 throws paper, Player 2 throws rock: Player 1 wins
// Player 1 throws paper, Player 2 throws paper: Tie
// Player 1 throws paper, Player 2 throws scissors: Player 2 wins
// Player 1 throws scissors, Player 2 throws rock: Player 2 wins
// Player 1 throws scissors, Player 2 throws paper: Player 1 wins
// Player 1 throws scissors, Player 2 throws scissors: Tie


const Rock = document.getElementById("rock");
const Paper = document.getElementById("paper");
const Scissor = document.getElementById("scissor");
const uScore = document.getElementById("user-score");
const CompScore = document.getElementById("comp-score");
const tied= document.getElementById("tied");
const userSelect = document.getElementById("user-choice");
const computerSelect = document.getElementById("comp-choice");

let userChoice;
let computerChoice;
let userScore = 0;
let computerScore = 0;
let gamesTied = 0;

Rock.addEventListener("click", function(){

    userChoice = Rock.id;
    userSelect.textContent = userChoice;

    computerChoice = computerGenerator();
    computerSelect.textContent = computerChoice;

    playRound(userChoice, computerChoice);

    ScoreBoard()
});

Paper.addEventListener("click", function(){

    userChoice = Paper.id;
    userSelect.textContent = userChoice;

    computerChoice = computerGenerator();
    computerSelect.textContent = computerChoice;

    playRound(userChoice, computerChoice);

    ScoreBoard();
});

Scissor.addEventListener("click", function(){

    userChoice = Scissor.id;
    userSelect.textContent = userChoice;

    computerChoice = computerGenerator();
    computerSelect.textContent = computerChoice;

    playRound(userChoice, computerChoice);

    ScoreBoard();
});

// Function Computer Choice
function computerGenerator(){
    let choices = ["rock", "paper", "scissor"];
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

// Function To Play Round
function playRound(uc, cc){
    if((uc == "rock" && cc == "rock") || (uc == "paper" && cc == "paper") || (uc == "scissor" && cc == "scissor")){
        gamesTied++;
        alert("Game Tied")
        // return "Game Tied";
    }

    else if((uc == "rock" && cc == "paper") || (uc == "paper" && cc == "scissor") || (uc == "scissor" && cc == "rock")){
        computerScore++;
        alert("Computer win the game")
        // return "Computer wins";
    }

    else{
        userScore++;
        alert("User win the game")
        // return "User Wins";
    }
}

// Function for Score
function ScoreBoard(){
    uScore.textContent = userScore;
    CompScore.textContent = computerScore;
    tied.textContent = gamesTied;
}