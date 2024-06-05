const customer1 =  {
    id: "C001",
    name: "Kasun"
}

const customer2 =  {
    id: "C002",
    name: "Nuwan"
}

function fn(){
    console.log(this.id, this.name);
}

customer1.print = fn;
customer2.print = customer1.print;

fn();
customer1.print();
customer2.print();