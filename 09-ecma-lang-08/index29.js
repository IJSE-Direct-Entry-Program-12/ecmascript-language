class Customer {
    // 1. Instance Fields
    id;
    name;
    // 2. Static Fields
    static field1;
    static field2;
    // 3. Static Initializers
    static {
        console.log("Static Initializer");
    }
    // 4. Constructor
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    // 5. Instance Methods
    print(){
        console.log("Instance Method");
    }
    // 6. Static Methods
    static myStaticMethod(){
        console.log("My Static Method");
    }

    // function doSomething(){
    //
    // }
    //
    // console.log("Hello");
    //
    // 10 + 15;
}