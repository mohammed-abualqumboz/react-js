
let meals = [
    { name: "Chicken Shawarma", price: 15 },
    { name: "Kalyzoni", price: 25 },
    { name: "Beef Burger", price: 20 },
    { name: "Marina Pizza", price: 35 },
    { name: "Zinger Meal", price: 30 },
    { name: "Crispy Fries", price: 8 },
    { name: "Green Salad", price: 10 },
    { name: "Pepsi", price: 5 }
];


function getCheaperMeals(maxPrice) {
    let suggestions = [];

   
    for (let i = 0; i < meals.length; i++) {
        if (meals[i].price < maxPrice) {
            suggestions.push(meals[i]);
        }
    }

    return suggestions;
}


let userInput = prompt("Enter your budget or the price you're looking for (to suggest meals below that price):");
let targetPrice = Number(userInput);

if (userInput === null || userInput.trim() === "" || isNaN(targetPrice)) {
    console.log("Error: Please enter a valid price!");
} else {
    // استدعاء الدالة
    let affordableMeals = getCheaperMeals(targetPrice);

    console.log(`--- Meals with a price lower than ${targetPrice} ---`);
    if (affordableMeals.length > 0) {
        for (let j = 0; j < affordableMeals.length; j++) {
            console.log(`- ${affordableMeals[j].name} (Price: ${affordableMeals[j].price} L.E.)`);
        }
    } else {
        console.log("Sorry, there are no meals below that price.");
    }
}