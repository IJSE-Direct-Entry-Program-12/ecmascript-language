function myFn(x){
    console.log("myFn invoked");
    if (x > 20) return true;
    if (x > 10) return 25;
}

myFn;   // Returns Function Memory Location
myFn(); // Returns Invoked Result of the Function

console.log(myFn);
console.log(myFn(25));


console.log("===================================");


function myFunction1(x){
    console.log("myFunction1(x)");
}

function myFunction1(x, y){
    console.log("myFunction1(x,y)");
}

myFunction1(10, 20);
myFunction1(10);