console.log("Hello ECMAScript Operators");

/* Postfix Increment */
let a = 10;
let b = a++;
console.log("a=", a);
console.log("b=", b);

/* Postfix Decrement */
a = 10;
b = a--;
console.log("a=", a);
console.log("b=", b);

/* Prefix Increment */
a = 10;
b = ++a;
console.log("a=", a);
console.log("b=", b);

/* Prefix Decrement */
a = 10;
b = --a;
console.log("a=", a);
console.log("b=", b);

/* Delete Operator */
let myObj = {};             /* Object Literal (Initializer) */
console.log(myObj);
myObj.id = 'C001';
myObj.name = 'Kasun';
myObj.address = 'Galle';
console.log(myObj);
console.log(myObj.name);
console.log(myObj.address);
myObj.address = 'Panadura';
console.log(myObj);
myObj.print = function(){
    console.log(this.id, this.name, this.address);
}
console.log(myObj.print);
myObj.print();
delete myObj.name;
delete myObj.id;
delete myObj.print;
console.log(myObj);
console.log(myObj.name);
console.log(myObj.id);
console.log(myObj.address);
// myObj.print();
Object.defineProperty(myObj, 'address', {
   configurable: false
});
// delete myObj.address;
// delete myObj.address;
// delete myObj.address;
// delete myObj.address;
console.log(myObj);

let customer = {
    id: 'C001',
    name: 'Kasun Sampath',
    address: 'Galle',
    // print: function(){
    //     console.log(this.id, this.name, this.address);
    // }
    print(){
        console.log(this.id, this.name, this.address);
    }
};

console.log(customer);
console.log(Object.keys(customer));

/* Void Operator */

console.log(void (10 + 15));
a = 10;
console.log(void (b = a++ + 5));
console.log("a=", a, "b=", b);

/* Typeof Operator */

let x = 10;
console.log(typeof x);
x = "IJSE";
console.log(typeof x);
x = 10n;
console.log(typeof x);
x = true;
console.log(typeof x);
x = Symbol();
console.log(typeof x);
x = {};
console.log(typeof x);
console.log(typeof (x++ + "ijse"));
x = undefined;
console.log(typeof x);
x = null;
// null is not an object,
// it is primitive data type in ecmascript
console.log(typeof x);
x = function(){};
console.log(typeof x);
x();

/* Unary Plus + Unary Minus */
x = 10;
x = -x;
console.log(x);
x = +"10";
x = x + 20;
console.log(x);

console.log(typeof +"10");
console.log(typeof -"10");
console.log(typeof +true, +true);
console.log(typeof +false, +false);
console.log(typeof -true, -true);
console.log(typeof -false, -false);
// console.log(typeof +10n);    // Error
console.log(typeof -10n);
console.log(+{}, -{});          // NaN
console.log(+[], -[]);          // 0, -0
console.log(+[1,2], -[1,2]);    // NaN
// console.log(+Symbol());      // Error
// console.log(-Symbol());      // Error
console.log(+function test(){}) // NaN
console.log(-function test(){}) // NaN
console.log(+null);             // 0
console.log(-null);             // -0
console.log(+undefined);        // NaN
console.log(-undefined);        // NaN
console.log(+NaN, -NaN);        // NaN
console.log(('b' + 'a' + +{} + 'a').toLowerCase());

/* Bitwise Complement Operator */
x = 10;
/* This does not change the x value */
console.log(~x);
/* x is still 10 */
console.log(x);

/* Logical Complement Operator */
x = true;
/* This also does not change the x value */
console.log(!x);
/* x is still true */
console.log(x);
console.log(!!!!!false);
console.log(!(5 > 3));

console.log("===============");

console.log(!true);
console.log(!(5 > 3));

console.log(!"abc");
console.log(!"");   // Empty String = Falsy
console.log(!"0");

console.log(!10);
console.log(!0);    // Zero = Falsy
console.log(!0.0);
console.log(!0.1);
console.log(!-5);

console.log(!10n);
console.log(!0n);

console.log(!{});   // Objects are Truthy
console.log(![]);   // Arrays are Truthy

// undefined, null and NaN are falsy
console.log(!undefined);
console.log(!null);
console.log(!NaN);

// Infinity are considered as truthy
console.log(!Infinity);
console.log(!-Infinity);

console.log(!function(){});
// Symbols are truthy
console.log(!Symbol());

customer = {
    id: 'C001',
    name: 'Kasun'
};
customer = null;
if (customer){
    console.log("Customer available");
}else{
    console.log("Customer is not available");
}

x = "ijse";
x = "";
if (x){
    console.log("String is not empty");
}else{
    console.log("String is empty");
}

let y;
if (y){
    console.log("Y is initialized");
}else{
    console.log("Y is not initialized");
}

/* Await Operator */

// let myFn = function(){
//     console.log("Hi...!");
// };

// setTimeout(myFn, 5000);

function executor(resolve, reject){
    setTimeout(function(){
        resolve("Hi...!");
    }, 5000);
}

let promiseRef = new Promise(executor);
console.log(promiseRef);
console.log("Came here");
let value = await promiseRef;
console.log("Came here????");
console.log(value);
console.log(promiseRef);




