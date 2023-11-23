/* Rock Paper Scissors Project */

/* Pseudocode:
Set up computer guess random number
direct the number to a guess string
make var for storing the guess
set up player choice
if loop to match computer and player choices
display outcome
*/

let x = Math.floor(Math.random() * 3) + 1; /* This gives me three possible choices 1, 2, or 3 */

let randomGuess;

if (x === 1) {
    randomGuess = "Rock";
} else if (x === 2) {
    randomGuess = "Paper";
} else {
    randomGuess = "Scissors";
}
console.log("Computer Chooses", randomGuess);

let playerInput = prompt("Please enter Rock, Paper, or Scissors:");

let playerChoice = playerInput.toLowerCase();

if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
    console.log("You Choose:", playerChoice);
} else {
    alert("Maybe you can't spell?");
}


if (playerChoice === randomGuess) {
    console.log("It's a Tie Game!!!");
} else if (playerChoice === "rock" && randomGuess === "paper") {
    console.log("Computer Wins");
} else if (playerChoice === "rock" && randomGuess === "scissors") {
    console.log("You Win!");
} else if (playerChoice === "paper" && randomGuess === "rock") {
    console.log("You Win!");
} else if (playerChoice === "paper" && randomGuess ==="scissors") {
    console.log("Computer Wins");
} else if (playerChoice === "scissors" && randomGuess === "paper") {
    console.log("You Win!");
} else if (playerChoice === "scissors" && randomGuess === "rock") {
    console.log("Computer Wins");
}
    


