const customer = {
    id: "C001",
    name: "Kasun Sampath",
    address: "Galle",
    print() {
        console.log(this.id, this.name, this.address);
    }
}

console.log(customer.id);
console.log(customer.name);
console.log(customer.address);
customer.print();

with (customer) {
    console.log(id);
    console.log(name);
    console.log(address);
    print();
}

try {
    try {
        console.log("Let's try some code here");
        throw new Error("ijse");
        console.log("End of the try block");
    } finally {
        console.log("Finally block");
    }
}catch(e){
    console.log("I caught you", e);
}

console.log("Came here");

console.log("Before the loop");
for (let i = 0; i < 5; i++) {
    debugger;
    console.log("Hello", i);
}

console.log("After the loop");

/* Optional Chaining Operator (Safe Navigation Operator) */

let myObj = {
    print(){
        console.log("Hello I'm Print Method");
    }
};

myObj = null;
console.log(myObj?.print());
console.log("Came here");










