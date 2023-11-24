/* Rock Paper Scissors Project */


function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function getPlayerChoice() {
    let userInput = prompt('Enter Rock, Paper, or Scissors');
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        alert('Invalid input... Please enter rock, paper, or scissors');
        return null;
    }
}


function playRound(getPlayerChoice, getComputerChoice) {
    if (getPlayerChoice === getComputerChoice){
    return 'It\'s a tie game';
    } 

    if (getPlayerChoice === 'rock') {
        if (getComputerChoice === 'paper') {
            return 'You Lost...';
        } else {
            return 'Yay! You Won!!!';
        }
    }

    if (getPlayerChoice === 'paper') {
        if (getComputerChoice === 'scissors') {
            return 'You Lost...';
        } else {
            return 'Yay! You Won!!!';
        }
    }

    if (getPlayerChoice === 'scissors') {
        if (getComputerChoice === 'rock') {
            return 'You Lost...';
        } else {
            return 'Yay! You Won!!!';
        }
    }
}


const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

console.log('You Picked:' + playerSelection);
console.log('Computer Picked:' + computerSelection);
console.log(playRound(playerSelection, computerSelection));