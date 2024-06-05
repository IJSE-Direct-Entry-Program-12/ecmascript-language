function execute(id, name) {
    console.log("Executed");
    console.log(this === globalThis, id, name);
    console.log(this);
    this.id = id;
    this.name = name;
}
// execute(1, "Kasun");
//
// execute.call(undefined, 1, "Kasun");
// execute.apply(undefined, [1, "Kasun"]);
const myObj = {
    id: "C001",
    name: "Ruwan"
};
const newFn = execute.bind(myObj);
newFn.call({}, 2, "Kasun");
console.log(myObj);