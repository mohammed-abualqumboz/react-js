
let targetNumber = Math.floor(Math.random() * 50) + 1;

let guessedCorrectly = false;
let attempts = 0;


while (!guessedCorrectly) {
    let userInput = prompt("Guess the number! Enter a number between 1 and 50:");


    if (userInput === null) {
        alert("The game has been cancelled.");
        break;
    }

    let userGuess = Number(userInput);


    if (isNaN(userGuess) || userInput.trim() === "") {
        alert("Error: Please enter a valid and acceptable number!");
        continue;
    }

    attempts++;

    if (userGuess < targetNumber) {
        alert("Higher! The secret number is greater than your guess.📈");
    } else if (userGuess > targetNumber) {
        alert("Lower! The secret number is smaller than your guess.📉");
    } else {
        guessedCorrectly = true;

        alert(`The correct number has been guessed. ${targetNumber}  ${attempts}`)


    }
}