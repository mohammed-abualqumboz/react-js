
// let countInput = prompt("كم عدد المنتجات التي تريد شراءها؟");
// let numProducts = parseInt(countInput);


// if (isNaN(numProducts) || numProducts <= 0) {
//     alert("الرجاء إدخال رقم صحيح.");
// } else {
//     let subtotal = 0;
//     let itemsWithDiscountCount = 0;
//     let detailsReport = "--- تفاصيل المنتجات والفواتير ---\n";


//     for (let i = 1; i <= numProducts; i++) {
//         let name = prompt(`أدخل اسم المنتج رقم ${i}:`);
//         let price = parseFloat(prompt(`أدخل سعر المنتج (${name}):`));
//         let quantity = parseInt(prompt(`أدخل كمية المنتج (${name}):`));

//         let itemTotal = price * quantity;
//         let hasItemDiscount = false;


//         if (quantity > 10) {
//             let discount = itemTotal * 0.10;
//             itemTotal = itemTotal - discount;
//             itemsWithDiscountCount++;
//             hasItemDiscount = true;
//         }


//         subtotal += itemTotal;


//         detailsReport += `\nالمنتج ${i}: ${name} | الكمية: ${quantity} | السعر بعد الخصم (إن وجد): ${itemTotal.toFixed(2)}`;
//         if (hasItemDiscount) {
//             detailsReport += " [تم تطبيق خصم 10%]";
//         }
//     }


//     let finalTotal = subtotal;
//     let extraDiscountApplied = false;


//     if (subtotal > 500) {

//         if (itemsWithDiscountCount < 2) {
//             let extraDiscount = subtotal * 0.20; // خصم إضافي 20%
//             finalTotal = subtotal - extraDiscount;
//             extraDiscountApplied = true;
//         }
//     }


//     detailsReport += `\n\n---------------------------------`;
//     detailsReport += `\nالإجمالي بعد خصومات المنتجات: ${subtotal.toFixed(2)}`;

//     if (extraDiscountApplied) {
//         detailsReport += `\nمبروك! تم تطبيق خصم إضافي 20% لأن الإجمالي > 500 وعدد المنتجات المؤهلة للخصم هو (${itemsWithDiscountCount}).`;
//     } else if (subtotal > 500) {
//         detailsReport += `\nلم يتم تطبيق الخصم الإضافي 20% لوجود ${itemsWithDiscountCount} منتجات حصلا على خصم الكمية (الشرط: أقل من منتجين).`;
//     }

//     detailsReport += `\n=================================`;
//     detailsReport += `\nالإجمالي النهائي المطلوب دفعه: ${finalTotal.toFixed(2)}`;


//     alert(detailsReport);
// }



let countInput = prompt("How many products do you want to buy?");
let numProducts = parseInt(countInput);

if (isNaN(numProducts) || numProducts <= 0) {
    console.log("Please enter a valid number.");
} else {
    let subtotal = 0;
    let itemsWithDiscountCount = 0;

    console.log("=== Starting product entry ===");


    for (let i = 1; i <= numProducts; i++) {
        let name = prompt(`Enter product name/number${i}:`);
        let price = parseFloat(prompt(`Enter the product price(${name}):`));
        let quantity = parseInt(prompt(`Enter the product quantity(${name}):`));

        let itemTotal = price * quantity;
        let hasItemDiscount = false;


        if (quantity > 10) {
            let discount = itemTotal * 0.10;
            itemTotal = itemTotal - discount;
            itemsWithDiscountCount++;
            hasItemDiscount = true;
        }

        subtotal += itemTotal;


        console.log(`المنتج ${i}: ${name} | الكمية: ${quantity} | السعر بعد الخصم: ${itemTotal.toFixed(2)} ${hasItemDiscount ? '[تم تطبيق خصم 10%]' : ''}`);
    }

    let finalTotal = subtotal;
    let extraDiscountApplied = false;

    if (subtotal > 500) {
        if (itemsWithDiscountCount < 2) {
            let extraDiscount = subtotal * 0.20;
            finalTotal = subtotal - extraDiscount;
            extraDiscountApplied = true;
        }
    }


    console.log("---------------------------------");
    console.log(`Total after product discounts: ${subtotal.toFixed(2)}`);

    if (extraDiscountApplied) {
        console.log(`An additional 20% discount has been applied. (Total > 500 and number of products with volume discount = ${itemsWithDiscountCount}).`);
    } else if (subtotal > 500) {
        console.log(`The additional 20% discount was not applied due to the presence of...${itemsWithDiscountCount}Products eligible for a quantity discount.`);
    }

    console.log("=================================");
    console.log(`Final total amount to be paid:${finalTotal.toFixed(2)}`);
    console.log("=================================");
}