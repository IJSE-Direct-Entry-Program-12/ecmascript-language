console.log("index7 is being executed");

// Regular Exports / Declaration Exports
export const myConst = "Hello";
let x = 10;

function myFun(){
    console.log("index7: myFun");
}

// Default Export
export default class MyClass{

    constructor() {
        console.log("index7: MyClass")
    }
}

// Aggregated Exports
// Named exports
export {x as y, myFun};

// Re-exports
export {myConst2 as ABC, myConst5} from './index8.js';
export * from './index9.js';