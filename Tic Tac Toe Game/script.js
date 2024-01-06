let X_CLASS = "x";
let CIRCLE_CLASS = "o";

const WINNING_COMBINATIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let cellElements = document.querySelectorAll("[data-cell");
let winMsg = document.querySelector("[data-winning-msg");
let winningElement = document.querySelector(".winning");
let button = document.getElementById("btn");

let circleTurn;

button.addEventListener("click", StartGame);

StartGame();

cellElements.forEach(cell => {
    cell.addEventListener("click", HandleClick, {once : true});
});

function HandleClick(e){
    const cell = e.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;

    placeMark(cell, currentClass);

    if(checkWin(currentClass)){
        endGame(false);
    }
    else if(isDraw()){
        endGame(true);
    }
    else{
        swapTurns();
    }

}

function placeMark(cell, currentClass){
    cell.classList.add(currentClass);
}

function swapTurns(){
    circleTurn = !circleTurn;
}

function StartGame(){
    circleTurn = false;
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS);
        cell.classList.remove(CIRCLE_CLASS);
        cell.removeEventListener("click", HandleClick);
        cell.addEventListener("click", HandleClick, {once : true});
    });
    winningElement.classList.remove("show");
}

function checkWin(currentClass){
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}

function endGame(draw){
    if(draw){
        winMsg.innerText = `Draw`;
    }else{
        winMsg.innerText = `${circleTurn ? "O " : "X " } wins!`; 
    }
    winningElement.classList.add("show");
}

function isDraw(){
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    })
}