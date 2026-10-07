// let total = Number(prompt("Enter the total price"));
// let error = false;

// if (isNaN(total)) {
//     alert("pleas enter valid number");
//     error = true;
// }
// if (!error) {

//     let discountpercentage = 0;

//     if (total >= 200) {
//         discountpercentage = 0.15;

//         if (total * discountpercentage > 100) {
//             discountpercentage = 0.8;
//         } 

//     }


//     let discountAmount = total * discountpercentage;
//     let totalAmount = total - discountAmount;

//     console.log("your total  amount" + total);
//     console.log("Your discount amount" + discountAmount);
//     console.log("Your final price" + totalAmount);

// }


// let family = ["Mohammed", " wael", "Ahmed", "Omar"]

// // console.log(family [0]);
// let item = prompt(family + "Enter the number to show the singel user")

// if (item < family.length){
//     alert(family[item -1])
// }



// let errors = []
// let pass = prompt("Enter password to check the stiness")

// if (pass.length < 8) {
//     errors.push("password must at lease 8 characters")

// }
// const hasCapital = /[A-Z]/.test(pass);
// if (hasCapital) {
//     errors.push("password must have Capital letter characters")
// }



// const hasNumber = /[0-9]/.test(pass);

// if (hasCapital) {
//     errors.push("password must have Capital letter characters")
// }

// const regex = /[!@#$%^(),.;?" {}<>]/.test(pass)

// if (hasCapital) {
//     errors.push("password must have spatial characters ")
// }

// console.log(errors);
// 



let question = [
    {
        question: " Number of days in a week ?",
        answers: [5, 7, 8, 6],
        correct: 2
    },

    {
        question: " Best player in the wolde ?",
        answers: ["Messi", "Ronaldo", "Pelaeh", "Maradona"],
        correct: 2
    },

    {
        question: "what is the  Color of the sky ?",
        answers: ["Blue", "Red", "Green", "white"],
        correct: 1
    },
];

let score = 0;


question.forEach(function (item) {
    // let question = item.question + "\n";
    // question += "1. " + item.answers[0] + "\n";
    // question += "2. " + item.answers[1] + "\n";
    // question += "3. " + item.answers[2] + "\n";
    // question += "4. " + item.answers[3] + "\n";
    // question += "Enter answer number";


    let question = `${item.question}
    1. ${item.answers[0]}
    2. ${item.answers[1]}
    3. ${item.answers[2]}
    4. ${item.answers[3]}
    
    Enter your answer
    
    `;


    let answer = Number(prompt(question))

    if (answer == item.correct) {
        score++;
    }
});

alert("your score is " + score + "/" + question.length);

