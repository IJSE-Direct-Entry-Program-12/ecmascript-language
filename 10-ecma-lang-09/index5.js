const myObj = {
    id: 'C001',
    name: 'Kasun',
    address: 'Galle'
};

const {id, ...myObj2} = myObj;
console.log(id);
console.log(myObj2);

const customer = {
    id: 'C001',
    name: {
        first: 'Kasun',
        middle: 'Sampath',
        last: 'Perera'
    },
    address: {
        no: '50B',
        street: 'Grace Peries',
        city: 'Panadura'
    }
};

// const {id: customerId, name: cName} = customer;
// const {first, middle} = cName;
// console.log(id, first, middle);

const {id: customerId, name: {first, middle}}
    = customer;
console.log(id, first, middle);

const {address: {street, city}} = customer;
console.log(street, city);