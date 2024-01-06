function getComputerChoice(choices){

  let select = Math.floor(Math.random() * choices.length)
  return choices[select];
};
let choices = ['rock','paper', 'scissor'];
let fCall = getComputerChoice(choices);


function playRound(playerChoice, computerChoice){

    if(playerChoice == 'rock' && computerChoice == 'rock' ){
        return 'match tied';
    }
    else if(playerChoice == 'paper' && computerChoice == 'paper'){
        return 'match tied';
    }
    else if(playerChoice =='scissor' && computerChoice == 'scissor'){
        return 'match tied';
    }
    else if(playerChoice == 'rock' && computerChoice == 'paper' ){
        return 'computer won';
    }
    else if(playerChoice == 'rock' && computerChoice == 'scissor'){
        return 'player won';
    }
    else if(playerChoice =='paper' && computerChoice == 'rock'){
        return 'player won';
    }   
    else if(playerChoice =='paper' && computerChoice == 'scissor'){
       return 'computer won';
    }   
    else if(playerChoice =='scissor' && computerChoice == 'rock'){
        return 'computer won';
    }   
    else if(playerChoice =='scissor' && computerChoice == 'paper'){
        return 'player won';
    }
    else {
        return 'Invalid input or result';
    }   
}

function game() {
    let i;
    let playerScore = 0;
    let computerScore = 0;
  
    for (i = 0; i < 5; i++) {
      let playerChoice = prompt('Enter rock, paper, or scissors: ');
      let computerChoice = getComputerChoice(choices);
  
      console.log(`Player Choice: ${playerChoice}`);
      console.log(`Computer Choice: ${computerChoice}`);
  
      let result = playRound(playerChoice, computerChoice);
      console.log(result);
  
      if (result === 'player won') {
        playerScore++;
      } else if (result === 'computer won') {
        computerScore++;
      }
    }
  
    if (playerScore > computerScore) {
      console.log('The player wins the game!');
    } else if (computerScore > playerScore) {
      console.log('The computer wins the game!');
    } else {
      console.log('The game is tied!');
    }
  }
  
  game();
