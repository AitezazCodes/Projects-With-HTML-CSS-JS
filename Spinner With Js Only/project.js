// 1. Deposit some money
// 2. Determine the number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5.Check if the user won
// 6. Give user their winning money
// 7. Play again


const prompt = require("prompt-sync")();

const ROWS = 3;
const COLUMNS = 3;

const symbolCount = {
    "A" : 2,
    "B" : 4,
    "C" : 6,
    "D" : 8
}

const symbolValues = {
    "A" : 5,
    "B" : 4,
    "C" : 3,
    "D" : 2
}

const Deposit = () => {
    while(true){
    const depositAmount = prompt("Enter amount to deposit : ");
    const numberDepositAmount = parseFloat(depositAmount);

    if(isNaN(numberDepositAmount) || numberDepositAmount <= 0){
        console.log("Invalid deposit amount, try again");
    }
    else{
        return numberDepositAmount;
    }
}
};

const GetLines = () => {
    while(true){
    const lines = prompt("Enter number of lines to bet on (1-3) : ");
    const numberOfLines = parseFloat(lines);

    if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
        console.log("Invalid input, try again");
    }
    else{
        return numberOfLines;
    }
}
};

const GetBet = (Balance, TotalLines) => {
    while(true){
    const bet = prompt("Enter the bet per line : ");
    const numberBet = parseFloat(bet);

    if(isNaN(numberBet) || numberBet <= 0 || numberBet > (Balance / TotalLines)){
        console.log("Invalid bet, try again");
    }
    else{
        return numberBet;
    }
}
};

const Spin = () => {
    const symbols = [];
    for(const[symbol, count] of Object.entries(symbolCount)){
        for(let i = 0; i < count; i++){
            symbols.push(symbol);
        }
    }
    const reels = [[], [], []];
    for(let i = 0; i < COLUMNS; i++){
        // [[], [], []] or reels.push([]) , to obtain same result
        const reelSymbols = [... symbols];
        for(let j = 0; j < ROWS; j++){
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }
    return reels;
}

const transpose = (reels) => {
    const rows = [];
    for(let i = 0; i < ROWS; i++){
        rows.push([]);
        for(let j = 0; j < COLUMNS; j++){
            rows[i].push(reels[j][i]);
        }
    }
    return rows;
}

let Balance = Deposit();
const TotalLines = GetLines();
const TotalBet = GetBet(Balance, TotalLines);
const reel = Spin();
console.log(reel);
const row = transpose(reel);
console.log(row);
