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
    if (!userInput) {
        return null; 
    }
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        alert('Invalid input... Please enter rock, paper, or scissors');
        return null;
    }
}

function playRound(getPlayerChoice, getComputerChoice) {
    if (getPlayerChoice === getComputerChoice) {
        return "It's a tie game";
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

function game() {
    let playerWins = 0;
    let computerWins = 0;
    let ties = 0;

    for (let i = 0; i < 5; i++) {
        const playerChoice = getPlayerChoice();
        if (playerChoice === null) {
            continue; 
        }
        const computerChoice = getComputerChoice();
        const roundResult = playRound(playerChoice, computerChoice);

        console.log(`Round ${i + 1}: Player chose ${playerChoice}, Computer chose ${computerChoice}. Result: ${roundResult}`);

        if (roundResult === "Yay! You Won!!!") {
            playerWins++;
        } else if (roundResult === "You Lost...") {
            computerWins++;
        } else if (roundResult === "It's a tie game") {
            ties++;
        }
    }

    console.log(`Game over! Player wins: ${playerWins}, Computer wins: ${computerWins}, Ties: ${ties}`);
}


game();






