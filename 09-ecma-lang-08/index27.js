class Customer {
    id;
    name;

    static {
        console.log("Static Initializer1");
    }

    static field1 = "Hello";
    static field2 = "Static";

    static myStaticMethod(){
        console.log(this.field1, this.field2);
    }

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    static {
        console.log("Static Initializer2");
    }

    print() {
        console.log(this.id, this.name);
    }
}

const c1 = new Customer(1, "Kasun");
console.log(Customer.field1);
console.log(Customer.field2);
//
// Customer.prototype.print();
// c1.print();