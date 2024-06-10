let x = "10";
console.log(+x + 20);
console.log(parseInt(x) + 20);

let y = "10.25";
console.log(+y + 20);
console.log(parseInt(y) + 20);
console.log(parseFloat(y) + 20);

let k1 = Number(x);
let k2 = new Number(x);
console.log(typeof k1);
console.log(typeof k2);

console.log(Number(x) + 20);
console.log(Number(y) + 20);

// bigint > number
let x1 = 10n;
console.log(x1 + 20n);
console.log(Number(x1) + 20);
// console.log(+x1 + 20);
console.log(parseInt(x1) + 20);

console.log(BigInt(k1) + x1);

// number = fixed-bit-size = 64 bits (double)
// bigint = variable-bit-size = ?

console.log(BigInt(x));

// string -> bigint, number
// number, bigint -> string
// number <-> bigint

let a = 3210.1645468;
console.log(10, a.toString());
console.log(typeof a, typeof a.toString());

let b = new Number(10);
console.log(b, typeof b);

console.log(b + 10);
console.log(b.valueOf() + 10);

// Formatting
console.log(a.toFixed(2));
console.log(a.toPrecision(5));
console.log(a.toExponential(4));

let str = "ijse";
str.x = 10;
console.log(str.x);

let str2 = new String("IJSE");
str2.x = 10;
console.log(str2);

console.log(str.length);