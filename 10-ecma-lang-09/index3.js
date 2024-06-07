const customer = {
    id: "C001",
    name: "Kasun Sampath",
    address: "Galle"
};

const {name, address} = customer;
console.log(name, address);

const nums = [10, 20, 30, 40, 50];
const [x, y] = nums;

console.log(x, y);

console.log("-------------------------------");

const employee = {
    id: "E001",
    name: "Kasun",
    address: "Galle",
    contacts: ["011", "022"]
};

// let {eid, ename, eaddress} = employee;

let eid, ename, eaddress;
({eid, ename, eaddress} = employee);

let a, b;
[a, b] = nums;
console.log(a, b);

// let {contacts} = employee;
// [a, b] = contacts;
// console.log(a, b);

let contacts;
({contacts} = employee);
[a, b] = contacts;
console.log(a, b);




