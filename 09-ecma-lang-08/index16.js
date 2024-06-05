const customer1 = {
    id: "C001",
    name: "Kasun",
    print(){
        console.log(this.id, this. name);
    }
}

const customer2 = {
    id: "C002",
    name: "Ruwan",
    print(){
        console.log("print()");
        console.log(this.id, this.name);
    }
}

customer1.print.call(customer2);
customer2.print.call(customer1);