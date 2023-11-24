/* Rock Paper Scissors Project */

/* Pseudocode:
Set up computer guess random number
direct the number to a guess string
make var for storing the guess
set up player choice
if loop to match computer and player choices
display outcome
*/
/*
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Please type: rock, paper, or scissors.');
    }
}

 const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'This game is a tie!';
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'You Lost...';
        } else {
            return 'Yay! You Won!!!';
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'You Lost...';
        } else {
            return 'Yay! You Won!!!';
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'You Lost...';
        } else {
            return 'Yay! You Won!!!';
        }
    }
}
const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log('You picked: ' + userChoice);
    console.log('The computer picked: ' + computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
}

playGame() */



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

console.log(getPlayerChoice());
console.log(getComputerChoice());

/*function playRound(playerSelection, computerSelection) {

}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection)); */