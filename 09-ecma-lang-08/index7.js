"use strict";

console.log(this);
console.log(globalThis === global);

function myFunction(){
    console.log("myFunction");
    console.log("====================")
    console.log(this === globalThis);
    console.log(this === global);
    console.log("====================")
    console.log(this === undefined);
}

myFunction();

