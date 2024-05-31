console.log("ECMAScript Statements");
console.log(x, y, i);

{
    let a = 20;
    var x = 10;
    console.log(x, a);
}

// console.log(a);
console.log(x);

if (true){
    var y = 20;
}

console.log(y);

for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);

function myMethod(){
    var z = 20;
    console.log("z", z);

    {
        let m = 40;
        var k = 30;
        console.log("k", 30)
        console.log("m", m);
    }

    // console.log("m", m);
    console.log("k", 30);
}

myMethod();
// console.log(z);