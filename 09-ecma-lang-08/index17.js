const init = () => {
    this.id = "C001";
    this.name = "Kasun Sampath";
    this.address = function (address){
        this.address = address;
    }
};
init();
console.log(this);
this.address("Galle");
console.log(this);
const myObj = {
    id: this.id,
    name: this.name,
    address: this.address,
    print(){
        console.log(this.id, this.name, this.address)
    }
}
myObj.print();