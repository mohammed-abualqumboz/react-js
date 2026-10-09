


// let UserName = prompt("Enter your name");
// let UserAge = Number(prompt("Enter your age"));

// let person = {
//     name: UserName,
//     age: UserAge,
//     hasAccess: UserAge > 20 ? true : false
// };

// console.log(person);


let name = prompt("Enter your name");
let age = Number(prompt("Enter your age"));

let user = {
    name,
    age,
    hasAccess: age > 20,
};

console.log(user);