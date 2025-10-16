const waitFun = (time, message) => {
return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, time)
  })
}
const orderCoffee = async () => {
    await waitFun(4000, "Make some Coffee");
    await waitFun(2000, "Brewing Coffee");
    await waitFun(3000, "Serving Coffee");
    await waitFun(1000, "Thanku for visting");
}
// const orderCoffee = () => {
//     waitFun(4000, "Make some Coffee")
//         .then(() => waitFun(2000, "Brewing Coffee"))
//         .then(() => waitFun(3000, "Serving Coffee"))
//         .then(() => waitFun(1000, "Thanku for visting"));
// };
