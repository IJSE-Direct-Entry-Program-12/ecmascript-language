console.log("ECMAScript Operators Part - II");

/* Binary Operators */

/* Exponentiation Operator */
console.log(2 * 2 * 2 * 2);
console.log(2 ** 4);
console.log("3 x 3 x 3 =", 3 ** 3);

/* Multiplicative Operators (* / %) */
console.log(2 * 3);
console.log(10 / 2);
console.log(10 % 7);

/* Additive Operators (+ -) */
console.log(5 + 2);
console.log(2 - 8);

console.log(5 + "2");

console.log(5 - "2");
console.log(5 * "2");
console.log(5 / "2");

// console.log([10, 20] + [30, 40]);
// console.log([10, 20] - [30, 40]);
// console.log({} + []);
// console.log({} + {});

/* Shift Operators */

/* Left Shift Operator (<<) */
let x = 10;
/* This does not change x's value */
console.log(x << 2);
/* x is still 10 */
console.log(x);

/* Right Shift Operator (>>) */
x = -10;
/* This does not change x's value */
console.log(x >> 2);
/* x is still 10 */
console.log(x);

/* Right Shift Operator (>>>) */
x = -10;
/* This does not change x's value */
console.log(x >>> 2);
/* x is still 10 */
console.log(x);

/* Relational Operators */

console.log(5 > 2);
console.log(3 < 10);
console.log(5 >= 3, 3 >= 3);
console.log(3 <= 10, 3 <= 3);

x = {};
console.log(typeof x);
console.log(x instanceof Object);
x = function(){};
console.log(typeof x);
console.log(x instanceof Object);
x = null;
console.log(typeof x);
console.log(x instanceof Object);

/* in operator */
let customer = {
    id: 'C001',
    name: 'Kasun',
    print(){
        console.log(this.id, this.name);
    }
};
console.log("id" in customer);
console.log("name" in customer);
console.log("print" in customer);
console.log("address" in customer);

Object.defineProperty(customer, "id", {
    enumerable: false
});
console.log("id" in customer);
delete customer.id;
console.log("id" in customer);

let myObj = {
    id: 'E001',
    name: undefined
};
console.log(myObj.name);

/* This is not a good practice */
if (myObj.name){
    console.log("Name property is available");
}else{
    console.log("Name property is not available");
}

/* This is how it should be done */
if ("name" in myObj){
    console.log("Name property is available");
}else{
    console.log("Name property is not available");
}

/* Equality Operators */
/* Loosely Equality (==, !=) */
/* Check the value */
console.log(5 == "5");
console.log(null == undefined);
console.log(0 == false);

/* Strictly Equality [Identical] (===, !==) */
/* Check the value and type */
console.log(5 === "5");
console.log(null === undefined);
console.log(0 === false);

console.log("================");

let obj1 = {};
let obj2 = {};
console.log(obj1 === obj2);
console.log({} === {});
console.log({} + "");
console.log({} == !{});

console.log([] === []);
console.log([] + "");
console.log([] == ![]);

console.log("================");

/* Binary Bitwise Operators */

x = 2;
y = 3;
console.log(x & y);
console.log(x | y);
console.log(x ^ y);

console.log("=================");

console.log((5 > 3) & (10 > 2));    // true(1)  AND true(1)     = 1
console.log((2 > 5) & (10 > 20));   // false(0) AND false(0)    = 0
console.log((5 > 3) & (10 > 20));   // true(1) AND false(0)     = 0

console.log("=================");

console.log((5 > 3) | (10 > 2));    // true(1)  OR true(1)     = 1
console.log((2 > 5) | (10 > 20));   // false(0) OR false(0)    = 0
console.log((5 > 3) | (10 > 20));   // true(1) OR false(0)     = 1

console.log("=================");

console.log((5 > 3) ^ (10 > 2));    // true(1)  XOR true(1)     = 0
console.log((2 > 5) ^ (10 > 20));   // false(0) XOR false(0)    = 0
console.log((5 > 3) ^ (10 > 20));   // true(1) XOR false(0)     = 1

console.log("=================");

/* Conditional Logical Operators */

console.log((5 > 3) && (10 > 2));    // true  AND true      = true
console.log((2 > 5) && (10 > 20));   // false               = false
console.log((5 > 3) && (10 > 20));   // true AND false      = false

console.log("=================");

console.log((5 > 3) || (10 > 2));    // true                = true
console.log((2 > 5) || (10 > 20));   // false OR false      = false
console.log((5 > 3) || (10 > 20));   // true                = true

/* Nullish Coalescing Operator (??) */

console.log("=================");

x = 5;
console.log(x + 10 ?? 10);
x = undefined;
console.log(x ?? 10);

customer = {
    id: 'C001',
    name: 'Kasun Sampath',
    // address: 'Matara'
};

console.log(customer.address ?? 'Panadura');

/* Ternary Operator */

console.log(5 > 2 ? "True Expression": "False Expression");
console.log(0 ? "True Expression": "False Expression");
console.log({} ? "True Expression": "False Expression");
console.log(NaN ? "True Expression": "False Expression");
console.log("ijse" ? "True Expression": "False Expression");

/* Assignment Operators */

x = 10;
x += 2;
console.log(x);
x = 10;
x -= 2;
console.log(x);
x = 10;
x *= 2;
console.log(x);
x = 10;
x /= 2;
console.log(x);
x = 10;
x %= 7;
console.log(x);
x = 2;
x **= 3;
console.log(x);

x = true;
x &&= 5 > 2;
console.log(x);

x = !!!!false;
y = 2;
x &&= ++y;
console.log("x=", x, "y=", y);

x = true;
y = 2;
x ||= ++y;
console.log("x=", x, "y=", y);

x = null;
x ??= ++y;
console.log("x=", x, "y=", y);

/* Comma Operator */
let a = 10, b = 20, c = 10;
console.log(a, b, c);
a = -10, b = -20, c = -30;
console.log(a, b, c);



















