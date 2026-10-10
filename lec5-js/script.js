// let email = "mohammedtesstttttttttt@gmail.com";

// console.log(email.toLocaleLowerCase().includes('test'));

// vat();
// function vat(price) {
//     console.log(price);
// }


// let price = 120;
// vat(price);

// function a() {
//     function b() {
//         return 0;
//     }
//     return b();
//     function b() {
//         return 1;
//     }
// }

// console.log(a());


function vat(price, tax = 25) {
    // console.log(price, tax);
    return price + (price * tax / 100);



}
console.log(vat(100, 5));