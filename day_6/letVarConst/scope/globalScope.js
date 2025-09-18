var a = 20;
let b = 30;
const pi = 3.14;
console.log("Global Scope");
console.log("value of a in global scope is: " , a);
console.log("value of b in global scope is: " , b);
console.log("value of pi in global scope is: " , pi);
function callValues(a, b, pi) {
    console.log("Inside Function");
    console.log("value of a in global scope is: ", a);
    console.log("value of b in global scope is: ", b);
    console.log("value of pi in global scope is: ", pi);

}
callValues(40, 50, 3.14159);

