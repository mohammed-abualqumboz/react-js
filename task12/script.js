let userInput = prompt("Please enter a number to calculate the factorial.");

let number = Number(userInput);


function calculateFactorialRecursive(n, stepsArray = []) {
    // شرط التوقف (Base Case): إذا وصل الرقم إلى 1 أو 0
    if (n === 0 || n === 1) {
        stepsArray.push(1);
        return { result: 1, steps: stepsArray };
    }


    stepsArray.push(n);

    let recursiveResult = calculateFactorialRecursive(n - 1, stepsArray);


    return {
        result: n * recursiveResult.result,
        steps: recursiveResult.steps
    };
}

if (userInput === null || userInput.trim() === "" || isNaN(number)) {
    console.log("Error: Please enter a valid number!");
} else if (number < 0) {
    console.log("Error: The mathematical factorial is undefined for negative numbers.");
} else {

    let calculation = calculateFactorialRecursive(number);


    console.log(`Entered number: ${number}`);
    console.log(`Multiplication operation: ${calculation.steps.join(" * ")}`);
    console.log(`The final result of the mathematical product: ${calculation.result}`);
}