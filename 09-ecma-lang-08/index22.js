function Customer(id, name){
    this.id = id;
    this.name = name;
}

const c1 = new Customer("C001", "Kasun Sampath");
console.log(Customer.prototype === c1.__proto__);
console.log(c1.__proto__.constructor === Customer);
console.log("c1", typeof c1);
console.log("c1.__proto__:", typeof c1.__proto__);
console.log("Customer:", typeof Customer);
console.log("Is c1 an object?", c1 instanceof Object);
console.log("Is c1.__proto__ an object?",
                c1.__proto__ instanceof Object);
console.log("Is Customer an object?", Customer instanceof Object);
console.log("Is c1 an instance of the customer? ",
        c1 instanceof Customer);
// c1.__proto__ = null;
// console.log("Is c1 an instance of the customer? ",
//     c1 instanceof Customer);

const myObj = new Object();
const myObj2 = {};  // Object Initializer, Object Literal
console.log(myObj, myObj2);

myObj.id = "C001";
myObj.name = "Kasun";
console.log(myObj);

myObj2.id = "C002";
myObj2.name = "Ruwan";
console.log(myObj2);

console.log(Customer.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.constructor === Object);
console.log(Object.prototype.__proto__);
console.log(Customer.__proto__ === Function.prototype);
console.log(Object.__proto__ === Function.prototype);
console.log(Customer.__proto__ === Object.__proto__);
console.log(Customer.__proto__.constructor === Function);
console.log(Object.__proto__.constructor === Function);
console.log(Function.__proto__ === Function.prototype);
console.log(typeof Customer);
console.log(typeof Object);
console.log(typeof Function);
console.log(Customer instanceof Function);
console.log(Object instanceof Function);
console.log(Customer instanceof Object);