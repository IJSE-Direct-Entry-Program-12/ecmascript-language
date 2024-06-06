class ParentClass{
    a;
    b;

    constructor(a, b) {
        console.log("ParentClass");
        this.a = a;
        this.b = b;
    }
}

class ChildClass extends ParentClass{
    c;
    d = (()=> {
        console.log("D is being initialized")
    })();

    constructor(a, b, c, d) {
        // console.log("Constructor");
        super(a, b);
        console.log("ChildClass");
        this.c = c;
        this.d = d;
    }
}

new ChildClass(10,20,30,40);