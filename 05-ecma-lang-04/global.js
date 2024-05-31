console.log(x, m);

var x = 10;
let n = 20;

console.log("x=", x, "n=", n);

{
    //console.log(n);
    var m = 30;
    let n = 40;

    console.log("x=", x, "n=", n);
    console.log("m=", m, "n=", n);
}

console.log("x=", x, "m=", m);
console.log("n=", n);
// console.log("n=", n);