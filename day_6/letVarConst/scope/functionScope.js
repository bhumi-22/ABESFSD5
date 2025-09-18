function fun(){
  var a = 20;
  let b = 30;
  const pi = 3.14;
  console.log("block Scope");
  console.log("value of a in block scope is: ", a);
  console.log("value of b in block scope is: ", b);
  console.log("value of pi in block scope is: ", pi);
}
fun();
console.log("Outside the block");
console.log("value of a in outside the function  is: ", a);
console.log("value of b in outside the function is: ", b);
console.log("value of pi in outside the function is: ", pi);
