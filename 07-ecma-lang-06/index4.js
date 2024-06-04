const promiseRef = new Promise(executor);

function executor(resolve, reject){
    console.log("Executor started");

    setTimeout(function(){
        console.log("Callback executed");
        resolve(10);
        console.log("Callback is about to exit");
    }, 1);

    console.log("Executor is about to exit but hit with a loop");
    // for (let i = 0; i < 10; i++) {
    //     for (let j = 0; j < 100; j++) {
    //         console.log(i, j)
    //     }
    // }
    console.log("Executor is finally about to exit");
}

console.log("Waiting for the promise");
const value = await promiseRef;
console.log("Just got the value");
console.log(value);