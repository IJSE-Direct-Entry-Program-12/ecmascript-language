function execute(id, name){
    console.log(this === globalThis);
    console.log(this);
    console.log(id, name);
}

// execute(1, "Kasun");

const myObj = {
    id: "C001",
    name: "Kasun"
};

// execute.call(myObj, 1, "Kasun");
execute.apply(myObj, [1, "Kasun"]);

const myFn = ()=>{
    console.log(this);
}

myFn.call(myObj);