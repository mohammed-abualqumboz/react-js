
let blockedKeywords = [
    "Number",
    "Communication",
    "WhatsApp",
    "Telegram",
    "Outside",
    "Your Number",
    "We stay in touch.",
    "Your phone",
    "Email",
    "Viber"
];

// 2. إدخال جملة المستخدم عبر الـ prompt
let userMessage = prompt("Enter your message or offer for the customer: ");

if (userMessage === null || userMessage.trim() === "") {
    console.log("No message was entered.");
} else {

    let text = userMessage.trim();
    let foundMatchesCount = 0;
    let matchedWordsList = [];


    for (let i = 0; i < blockedKeywords.length; i++) {
        let keyword = blockedKeywords[i];


        if (text.includes(keyword)) {
            foundMatchesCount++;
            matchedWordsList.push(keyword);
        }
    }


    console.log(`النص المدخل: "${text}"`);
    console.log(`Number of detected prohibited words: ${foundMatchesCount} (${matchedWordsList.join(", ")})`);

    if (foundMatchesCount >= 2) {
        console.log("🚫 Alert: This sentence is not allowed inside the platform as it contains attempts for external communication!");
    } else {
        console.log("✅ Your message is acceptable and safe to publish.");
    }
}