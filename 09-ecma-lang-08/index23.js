function Customer(id, name){
    this.id = id;
    this.name = name;
    this.print = function(){
        console.log(this.id, this.name);
    }
}

// Customer.prototype.print = function (){
//     console.log(this.id, this.name);
// }

const c1  = new Customer(1, "Kasun");
const c2 = new Customer(2, "Ruwan");

c1.print();
c2.print();