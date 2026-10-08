
let userInput = prompt("Please enter a number to calculate the factorial.");

let number = Number(userInput);


if (userInput === null || userInput.trim() === "" || isNaN(number)) {
    console.log("Error: Please enter a valid number!");
} else if (number < 0) {
    console.log("Error: The mathematical factorial is undefined for negative numbers.");
} else {

    let factorial = 1;
    let steps = [];

    for (let i = number; i >= 1; i--) {
        factorial *= i;
        steps.push(i);
    }


    console.log(`Entered number:  ${number} `);
    console.log(`Multiplication operation:   ${steps.join(" * ")}`);
    console.log(`The final result of the mathematical product: ${factorial}`);
}