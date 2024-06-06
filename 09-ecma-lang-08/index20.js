let c1 = {
    id: "C001",
    name: "Kasun Sampath",
    address: "Galle",
    contacts: [],
    addContact(contact){
        this.contacts.push(contact);
    },
    deleteContact(contact){
        const index = this.contacts.indexOf(contact);
        this.contacts.splice(index, 1);
    },
    print(){
        console.log("id:", this.id);
        console.log("name:", this.name);
        console.log("address:", this.address);
        console.log("contacts:", this.contacts);
        console.log("=========================");
    }
}

c1.addContact("011-1234567");
c1.addContact("023-1234567");
c1.print();

let c2 = {
    id: "C002",
    name: "Nuwan Ramindu",
    address: "Panadura",
    contacts: [],
    addContact(contact){
        this.contacts.push(contact);
    },
    deleteContact(contact){
        const index = this.contacts.indexOf(contact);
        this.contacts.splice(index, 1);
    },
    print(){
        console.log("id:", this.id);
        console.log("name:", this.name);
        console.log("address:", this.address);
        console.log("contacts:", this.contacts);
        console.log("=========================");
    }
}

c2.print();