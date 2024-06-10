const customer = {
    id: "C001",
    name: {
        firstName: "Kasun",
        lastName: "Sampath"
    },
    contacts: ["011-123", "022-123", "055-123"],
    address: "Galle"
}

const {id} = customer;
console.log(id);

let name;
({name: {firstName: first, lastName: last}} = customer);
console.log(first, last);

const {address: customerAddress = "Panadura"} = customer;
console.log(customerAddress);

const {address, ...rest} = customer;
console.log(rest);

const {contacts} = customer;
const [x,, y, k = 10] = contacts;
console.log(x,y, k);

const c1 = {
    ...customer
}

console.log(c1);

const nums = [10,20,30,40,50];
const nums2 = [...nums];
console.log(nums2);

const x1 = [10,20,30];
const y1 = [40,50,60];

// const k1 = x1.concat(y1);
const k1 = [...x1,...y1];
console.log(k1);