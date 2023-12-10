/* Rock Paper Scissors Project */

let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    if (playerChoice === computerChoice) {
        displayResult("It's a tie!");
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        displayResult("You win! " + playerChoice + " beats " + computerChoice);
    } else {
        computerScore++;
        displayResult("You lose! " + computerChoice + " beats " + playerChoice);
    }

    updateScore();
    checkForWinner();
}


function updateScore() {
    document.querySelector('.playerScore').textContent = playerScore;
    document.querySelector('.computerScore').textContent = computerScore;
}

function displayResult(result) {
    document.querySelector('#result').textContent = result;
}

function checkForWinner() {
    if (playerScore === 5 || computerScore === 5) {
        const winner = playerScore === 5 ? 'Player' : 'Computer';
        displayResult(winner + ' wins the game!');
        playerScore = 0;
        computerScore = 0;
        updateScore();
    }
}


