const myObj = {
    id: 'C001',
    name: 'Kasun',
    address: 'Galle',
    contacts: ["011-1234567", "022-1234567"],
    nic: undefined
};

const {id: customerId, name: customerName} = myObj;
console.log(customerId, customerName);

const {contacts = [], email = 'dep@ijse.lk'} = myObj;
console.log(contacts, email);

const {nic: myNic = 'No NIC'} = myObj;
console.log(myNic);