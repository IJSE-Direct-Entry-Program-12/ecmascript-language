// function Customer(id, name){
//     "use strict"
//     this.id = id;
//     this.name = name;
// }
// Customer.prototype.print = function(){
//     "use strict"
//     console.log(this.id, this.name);
// }

// new Employee();
// function Employee(){}
// new Employee();

//==================================

// new Customer(1, "Kasun");

class Customer{
    id;
    name;

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    print(){
        console.log(this.id, this.name);
    }
}

console.log(typeof Customer);
console.log(Customer.prototype.constructor == Customer);

const c1 = new Customer(1, "Kasun");
console.log(c1.__proto__ === Customer.prototype);
c1.print();
console.log(Customer instanceof Function);