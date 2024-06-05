const setName = (name) => {
    this.name = name;
}

this.id = "C001";

const print = function(id, name){
    this.id = id;
    this.name = name;
}

setName("Kasun Sampath");

print(this.id, this.name);

console.log(this);
console.log(global);

