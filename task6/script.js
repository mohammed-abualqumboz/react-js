
let users = [
    { name: "Ahmed", email: "ahmed@example.com", type: "user" },
    { name: "Mohammed", email: "mohammed@example.com", type: "admin" },
    { name: "Sara", email: "sara@example.com", type: "user" },
    { name: "Ali", email: "ali@example.com", type: "user" },
    { name: "Fatima", email: "fatima@example.com", type: "admin" },
    { name: "Khaled", email: "khaled@example.com", type: "user" },
    { name: "Noor", email: "noor@example.com", type: "user" },
    { name: "Youssef", email: "youssef@example.com", type: "admin" },
    { name: "Mariam", email: "mariam@example.com", type: "user" },
    { name: "Omar", email: "omar@example.com", type: "user" },
    { name: "Aya", email: "aya@example.com", type: "admin" },
    { name: "Ibrahim", email: "ibrahim@example.com", type: "user" },
    { name: "Laila", email: "laila@example.com", type: "user" },
    { name: "Hamza", email: "hamza@example.com", type: "admin" },
    { name: "Dima", email: "dima@example.com", type: "user" }
];


let regularUsersCount = 0;
let adminsCount = 0;


for (let i = 0; i < users.length; i++) {
    if (users[i].type === "admin") {
        adminsCount++;
    } else if (users[i].type === "user") {
        regularUsersCount++;
    }
}


console.log(`Number of users  (user): ${regularUsersCount}`);
console.log(`Number of managers  (admin): ${adminsCount}`); 8



