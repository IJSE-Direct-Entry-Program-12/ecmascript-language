class Customer{
    id;
    name;
    address = (()=> {
        console.log("Instance variable is being initialized");
        return "Panadura";
    })();

    static{
        console.log("Static Initializer");
    }

    constructor(id, name) {
        //super();
        console.log("Constructor()");
        this.id = id;
        this.name = name;
    }
}

const c1 = new Customer(1, "Kasun");
console.log(c1);