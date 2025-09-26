console.log("strat");
const waitForSomeTime = (ms) => {
    const start = Date.now();
    while ((Date.now() - start) < ms) {
        //do nothing
    };
    console.log(start);
    
}
const syncUsingTimer = () => {
    waitForSomeTime(4000);
    console.log("wait has been completed");
    
}

const asyncUsingTimer = () => {
    setTimeout(() => {
        console.log("Inside set timeout");
        
    },4000)
}
console.log("start");
syncUsingTimer();
asyncUsingTimer();
console.log("end");