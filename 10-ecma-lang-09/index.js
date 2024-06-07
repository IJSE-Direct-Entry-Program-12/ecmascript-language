// const myObj = new Object();

const id = "C001";
const name = "Kasun";
const addr = "Galle";

const myObj = {
    // id: id,
    // name: name,
    id,
    name,
    // addr
    address: addr,
    print(){
        console.log(this.id, this.name);
    }
}

console.log(myObj);