console.log("Function Hoisting in Depth");

// abc(); // TDZ

let abc = function (x, y) {
    console.log("myFn", x, y);
}

abc(10, 20);
// myFn();

// let print = function (id, name) {
//     console.log(id, name);
// }

let print = (id, name) =>  console.log(id, name);

print('C001', 'Kasun Sampath');

/* This is called "Function Literal" */
function doSomething(){
    console.log("doSomething()");
}



