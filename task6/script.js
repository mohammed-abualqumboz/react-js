
// const products = [
//     { name: "سماعة بلوتوث", price: 45, rating: 6 },
//     { name: "ساعة ذكية", price: 120, rating: 2.8 }, // تقييم أقل من 3 (لن تظهر)
//     { name: "لابتوب جيمينغ", price: 850, rating: 4.9 },
//     { name: "حذاء رياضي", price: 60, rating: 3.2 },
//     { name: "حقيبة ظهر", price: 35, rating: 2.1 },  // تقييم أقل من 3 (لن تظهر)
//     { name: "شاحن متنقل", price: 25, rating: 3.8 }
// ];


// for (let i = 0; i < products.length; i++) {
//     let currentProduct = products[i];


//     if (currentProduct.rating > 3) {


//         let starsCount = Math.floor(currentProduct.rating);


//         let starsString = "⭐".repeat(starsCount);


//         console.log(`اسم المنتج: ${currentProduct.name} | السعر: $${currentProduct.price} | التقييم: ${currentProduct.rating} | النجوم: ${starsString}`);
//     }
// }


// الكود التاني




let savedProducts = localStorage.getItem("myProductsList");
let products = savedProducts ? JSON.parse(savedProducts) : [];

let prodName = prompt("أدخل اسم المنتج الجديد:");

if (prodName) {
    let prodPrice = Number(prompt("أدخل سعر المنتج:"));
    let prodRating = Number(prompt("أدخل تقييم المنتج (من 1 إلى 5):"));

    let newProduct = {
        name: prodName,
        price: prodPrice,
        rating: prodRating
    };

    
    products.push(newProduct);

   
    localStorage.setItem("myProductsList", JSON.stringify(products));
    console.log("💾 تم إضافة وحفظ المنتج الجديد بنجاح!");
}


console.log("\n--- قائمة جميع المنتجات الحالية ---");
for (let i = 0; i < products.length; i++) {
    let currentProduct = products[i];

    if (currentProduct.rating > 3) {
        let starsCount = Math.floor(currentProduct.rating);
        let starsString = "⭐".repeat(starsCount);

        console.log(`[المنتج ${i + 1}] الاسم: ${currentProduct.name} | السعر: $${currentProduct.price} | التقييم: ${currentProduct.rating} | النجوم: ${starsString}`);
    } else {
        console.log(`[المنتج ${i + 1}] الاسم: ${currentProduct.name} | السعر: $${currentProduct.price} | التقييم: ${currentProduct.rating} (أقل من أو يساوي 3)`);
    }
}