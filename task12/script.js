
let myText = "To my dear brother and friend, the esteemed Engineer Abu Zain: I write these words from the heart to salute your tremendous strides and your tireless ambition. As you have always been a pillar of support and a wonderful companion on the arduous journey of knowledge, I wish you every success in every step you take toward a flourishing, bright future worthy of your high standing."
function truncateText(text) {

    if (text.length > 200) {
    
        let first20 = text.slice(0, 20);

       
        let last20 = text.slice(-20);

        
        let middleLength = text.length - 40; 
        let dots = ".".repeat(middleLength); 

        // دمج الأجزاء معاً
        return first20 + dots + last20;
    }

    return text;
}


let result = truncateText(myText);
console.log("طول النص الأصلي:", myText.length);
console.log("النتيجة:", result);