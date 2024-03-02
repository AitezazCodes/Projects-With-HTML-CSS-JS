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

const symbolCount = {  // how many times the symbol will repeat
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};

const symbolValues = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

const Deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter amount to deposit : ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount, try again");
    } else {
      return numberDepositAmount;
    }
  }
};

const GetLines = () => {
  while (true) {
    const lines = prompt("Enter number of lines to bet on (1-3) : ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid input, try again");
    } else {
      return numberOfLines;
    }
  }
};

const GetBet = (Balance, Lines) => {
  while (true) {
    const bet = prompt("Enter the bet per line : ");
    const numberBet = parseFloat(bet);

    if (isNaN(numberBet) || numberBet <= 0 || numberBet > Balance / Lines) {
      console.log("Invalid bet, try again");
    } else {
      return numberBet;
    }
  }
};

const Spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(symbolCount)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }
  const reels = [[], [], []];
  for (let i = 0; i < COLUMNS; i++) {
    // [[], [], []] or reels.push([]) , to obtain same result
    const reelSymbols = [...symbols];
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1);
    }
  }
  return reels;
};

const transpose = (reels) => {
  const rows = [];
  for (let i = 0; i < ROWS; i++) {
    rows.push([]);
    for (let j = 0; j < COLUMNS; j++) {
      rows[i].push(reels[j][i]);
    }
  }
  return rows;
};

const printRows = (rows) => {
  for (let row of rows) {
    let rowString = "";
    for (const [i, symbol] of row.entries()) {
      rowString += symbol;
      if (i != row.length - 1) {
        rowString += " | ";
      }
    }
    console.log(rowString);
  }
};

const getWinnings = (rows, Bet, Lines) => {
  let winnings = 0;

  for (let row = 0; row < Lines; row++) {
    const symbols = rows[row];
    let allSame = true;

    for (let symbol of symbols) {
      if (symbol != symbols[0]) {
        allSame = false;
        break;
      }
    }
    if (allSame) {
      winnings += Bet * symbolValues[symbols[0]];
    }
  }
  return winnings;
};

const game = () => {
  let Balance = Deposit();

  while (true) {
    console.log(`You have a balnce of ${Balance}`);
    const Lines = GetLines();
    const Bet = GetBet(Balance, Lines);

    Balance -= Bet * Lines;

    const reel = Spin();
    // console.log(reel);
    const rows = transpose(reel);
    console.log(rows);
    printRows(rows);
    const win = getWinnings(rows, Bet, Lines);

    Balance += win;
    console.log(`You won, $ ${win.toString()}`);

    if (Balance <= 0) {
      console.log("You ran out of money");
      break;
    }

    const playAgain = prompt("Do you want to play again (y/n ? ");
    if (playAgain != "y") break;
  }
};

game();
