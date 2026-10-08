
let choices = ["حجر", "ورقة", "مقص"];


let computerChoice = choices[Math.floor(Math.random() * choices.length)];


let userInput = prompt("اختر واحدة مما يلي: (حجر، ورقة، مقص)");


if (userInput === null) {
    alert("تم إلغاء اللعبة.");
} else {
  
    let userChoice = userInput.trim();


    if (!choices.includes(userChoice)) {
        alert("خطأ: المدخل غير صحيح! يجب أن تختار إما (حجر، ورقة، أو مقص) فقط.");
    } else {

        let resultMessage = `اختيارك: ${userChoice}\nاختيار الجهاز: ${computerChoice}\n\n`;

    
        if (userChoice === computerChoice) {
            alert(resultMessage + "إها تعادل! نفس الاختيار 🤝");
        } else if (
            (userChoice === "حجر" && computerChoice === "مقص") ||
            (userChoice === "ورقة" && computerChoice === "حجر") ||
            (userChoice === "مقص" && computerChoice === "ورقة")
        ) {
            alert(resultMessage + "مبروك لقد فزت في اللعبة  🎉 (الورقة تغلف الحجر، الحجر يكسر المقص، المقص يقطع الورقة).");
        } else {
            alert(resultMessage + "هذه المرة خسرت! الجهاز فاز عليك 🤖 حاول مرة أخرى.");
        }
    }
}