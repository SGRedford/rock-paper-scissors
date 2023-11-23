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
console.log(x);

let randomGuess;

if (x === 1) {
    randomGuess = "Rock";
} else if (x === 2) {
    randomGuess = "Paper";
} else {
    randomGuess = "Scissors";
}
console.log(randomGuess);

