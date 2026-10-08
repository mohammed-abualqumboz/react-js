
function felter(email) {

    if (email.toLowerCase().includes("test")) {
        return false;
    }
    return true;
}


let countInput = prompt("Please enter the number of required users:");
let numberOfUsers = parseInt(countInput);

let usersList = [];


for (let i = 0; i < numberOfUsers; i++) {
    let name = prompt(`Enter the name of user ${i + 1}:`);
    let email = prompt(`Enter user email number${i + 1}:`);

    usersList.push({ name: name, email: email });
}


let validUsers = usersList.filter(user => felter(user.email));


console.log("All users:", usersList);
console.log("Valid users (after excluding 'test'):", validUsers);



