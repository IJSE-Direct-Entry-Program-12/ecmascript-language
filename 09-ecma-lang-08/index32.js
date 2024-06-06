class Customer{
    #id;
    #name;

    constructor(id, name) {
        this.#id = id;
        this.#name = name;
    }

    print(){
        this.#privateMethod();
    }

    #privateMethod(){
        console.log(this.#id, this.#name);
    }
}

const c1 = new Customer(1, "Kasun");
console.log(c1);
c1.print();