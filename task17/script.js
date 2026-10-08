
function checkLoadCapacity(usersArray) {
    let totalPersons = usersArray.length;
    let totalWeight = 0;


    for (let i = 0; i < usersArray.length; i++) {
        totalWeight += usersArray[i].weight;
    }

    console.log(`عدد الأشخاص الحالي: ${totalPersons}`);
    console.log(`إجمالي الأوزان: ${totalWeight} كغ`);


    if (totalPersons >= 10 || totalWeight > 1000) {
        console.log("⚠️Heads up: I'm carrying an extra load now!");
        return true;
    } else {
        console.log("✅ The situation is safe; the maximum limit has not been exceeded.");
        return false;
    }
}


let elevatorUsers = [
    { name: "Mohammed", weight: 75 },
    { name: "Ahmed", weight: 80 },
    { name: "Muhammad", weight: 90 },
    { name: "Ali", weight: 85 },
    { name: "Khalid", weight: 70 },
    { name: "Omar", weight: 95 },
    { name: "Ibrahim", weight: 88 },
    { name: "Youssef", weight: 82 },
    { name: "Hassan", weight: 78 },
    { name: "Bakr", weight: 92 }
];


checkLoadCapacity(elevatorUsers);



