function Customer(id, name, address, contacts){
    this.id = id;
    this.name = name;
    this.address = address;
    this.contacts = contacts;

    this.addContact = function(contact){
        this.contacts.push(contact);
    }

    this.removeContact = function(contact){
        const index = this.contacts.indexOf(contact);
        this.contacts.splice(index, 1);
    }

    this.print = function(){
        console.log("id=", this.id);
        console.log("name=", this.name);
        console.log("address=", this.address);
        console.log("contacts=", this.contacts);
        console.log("---------------");
    }
}

let c1 = new Customer("C001",
    "Kasun Sampath",
    "Galle", ["011-1234567", "012-1234567"]);

let c2 = new Customer("C002",
    "Nuwan Ramindu",
    "Panadura", []);

let c3 = new Customer("C003", "Upul Tharanga",
    "Moratuwa", ["033-1234567"]);

c1.print();
c2.print();
c3.print();

// We usually don't invoke Constructor functions like below
// (without "new" operator)

// let c4 = Customer("C004", "Ruwan", "Galle", []);
// console.log(c4);
// console.log(global);