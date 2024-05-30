console.log("Hello ECMAScript!");
/*
  Multi line comments
*/

// Single line comment

/* Data Types */

/* Boolean */
console.log(true);
console.log(false);

console.log("==============");

/* Number */
console.log(0b1010);    // Binary
// console.log(010);    // <- Legacy
console.log(0o10);      // Octal
console.log(125);       // Decimal
console.log(0xFF);      // Hexadecimal
console.log(10.25);
console.log(10.25e2);   // 10.25 x 10^2
// console.log(0xFp2);

console.log("==============");

/* String */
console.log('This is a string ${10+15}');
console.log("This is a string ${10+15}");
console.log('This "is" a string');
console.log("This 'is' a string");
console.log(`This is template string ${10 + 15}`);

console.log("==============");

/* Null and Undefined */
console.log(undefined); // This is how JS engine says 'empty'
console.log(null);      // This is how we say 'empty'
console.log(undefined == null);
console.log(undefined === null);
console.log("10" == 10);
console.log("10" === 10);

console.log("==============");

/* Symbol */
console.log(Symbol("symbol1"));
console.log(Symbol("symbol2"));

console.log("==============");

/* BigInt */
console.log(100n);
console.log(25n);
console.log(25n + 25n);
// console.log(25n + 25); // <- This can't be done

/* IEEE-754 */
console.log(0.3 - 0.2);

/* Variables */
var myVar = 10;
myVar = true;
myVar = null;
myVar = Symbol();
myVar = [10, 20, 30];

var myVar2 = 20;
// var myVar2;
console.log(myVar2);

/* Constant */
// Object.defineProperty(global, "PI", {
//     value: 3.14,
//     enumerable: false,
//     configurable: false,
//     writable: false
// });
// PI = 2500;
// console.log(PI);

var PI = 3.14;
// PI = 400;
console.log(PI);

/* Let and Const (Lexical Declarations) */
let something = "IJSE";
something = 125.25;

const DAYS_OF_WEEK = 7;
// DAYS_OF_WEEK = 10;
console.log(DAYS_OF_WEEK);

/* ==================================== */

console.log(abc);
var abc;
console.log(abc);
abc = 100;
console.log(abc);

console.log("==========================");

// console.log(edf);    // TDZ
let edf;
console.log(edf);
edf = 100;
console.log(edf);

console.log("==========================");

let x = 10;
console.log(x);     //  10
{
    let x = 20;
    console.log(x); // 20
}
console.log(x); // 10

// {
//     let y = 10;
// }
// console.log(y);








