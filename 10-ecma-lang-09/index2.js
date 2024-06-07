// Dynamic Array
// Mixed Type Array

// const myObj = new Object();
// const myObj = {}

const myArray1 = new Array(/* 5 */);
const myArray2 = [];            // Array Initializer

console.log(myArray1);
console.log(myArray2);

function myFn() {
    console.log(Array.isArray(arguments));
    console.log(Array.isArray([]));

    const newArray = Array.from(arguments);
    console.log(newArray, Array.isArray(newArray));
}

myFn(10, 20, 30, 40);

const arr1 = [1, 2, 3, true, "abc", {}, []];
console.log(arr1.length);

const arr2 = [];
arr2.push(10);
arr2.push(20, 30, 40);
arr2.push(50);                  // append
console.log(arr2);
arr2.unshift(-5);         // prepend
console.log(arr2);

console.log("-------------------");

const arr3 = [10, 20, 30, 40, 50];
console.log(arr3);
arr3.pop();
arr3.pop();
console.log(arr3);
arr3.shift();
console.log(arr3);

console.log("-------------------");

const arr4 = [10, 20, 30, 40, 50];
// add, remove, replace
arr4.splice(2, 1);
console.log(arr4);
arr4.splice(2, 0, 25, 30, 35);
console.log(arr4);
arr4.splice(1, 2, 12, 15, 17, 22);
console.log(arr4);

console.log("-------------------");

const arr5 = [10, 20, 30, 40, 50];
const arr6 = arr5.toSpliced(2, 1, 25, 35);
console.log(arr5);
console.log(arr6);

console.log("-------------------");

const arr7 = ['Kasun', 'Nuwan', 'Supun', 'Ruwan'];
console.log(arr7.includes('Nuwan'));
console.log(arr7.includes('Sampath'));

const arr8 = [
    {id: 'C001', name: 'Kasun'},
    {id: 'C002', name: 'Nuwan'},
    {id: 'C003', name: 'Ruwan'},
    {id: 'C004', name: 'Upul'},
];
console.log(arr8.includes({id: 'C002', name: 'Nuwan'}));

// function predicateFn(customer){
//     return customer.id === 'C002' && customer.name === 'Nuwan';
// }

console.log(!!arr8.find((customer) => {
    return customer.id === 'C002' && customer.name === 'Nuwan';
}));

const arry9 = [
    {id: 'E001', name: 'Kasun', contacts: ['011-123', '022-123']},
    {id: 'E002', name: 'Nuwan', contacts: ['033-123', '044-123']},
    {id: 'E003', name: 'Upul', contacts: ['055-123', '066-123']},
];

console.log(!!arry9.find((emp) => emp.id === 'E002'));
console.log(arry9.find((emp) => emp.contacts.includes('066-123')));
console.log(arry9.findIndex((emp) => emp.contacts.includes('066-123')));

const arr10 = ['Kasun', 'Nuwan', 'Ruwan', 'Supun', 'Upul'];
console.log(!!arr10.find(name => name === 'Ruwan'));
console.log(arr10.includes('Ruwan'));

console.log(arr10.findIndex(name => name === 'Ruwan'));
console.log(arr10.indexOf('Ruwan'));

console.log("==================");

const arr11 = [10, 20, 30, 40, 50];
const arr12 = arr11.map(value => value + "K");
console.log(arr12);

const arr13 = [
    {id: 1, name: 'Kasun'},
    {id: 2, name: 'Nuwan'},
    {id: 3, name: 'Supun'},
    {id: 4, name: 'Upul'},
];

const arr14 = arr13.map(customer => {
    customer.id = "C00" + customer.id;
    return customer;
})

console.log(arr14);

console.log("==================");

const arr15 = [-25, 15, -5, 3, 7, -8, -25, -5];
const negativeNums = arr15.filter(value => value < 0);
const positiveNums = arr15.filter(value => value > 0);
console.log(negativeNums);
console.log(positiveNums);

const arr16 = [
    {id: 'E001', name: 'Kasun', contacts: ['011', '022']},
    {id: 'E002', name: 'Nuwan', contacts: []},
    {id: 'E003', name: 'Ruwan', contacts: ['033']},
    {id: 'E004', name: 'Upul', contacts: ['022']},
    {id: 'E005', name: 'Shantha', contacts: []},
    {id: 'E006', name: 'Supun', contacts: ['044', '055', '066']},
];

const eLst1 = arr16.filter(emp => emp.contacts.length === 0)
    .map(emp => `${emp.id}, ${emp.name}`);
const eLst2 = arr16.filter(emp => emp.contacts.length === 1)
    .map(emp => `${emp.id}, ${emp.name}`);
const eLst3 = arr16.filter(emp => emp.contacts.length > 1)
    .map(emp => `${emp.id}, ${emp.name}`);
console.log(eLst1);
console.log(eLst2);
console.log(eLst3);

console.log("==========================");

const arr17 = [10, 20, 30, 40, 50];
arr17.reverse();
console.log(arr17);

const arr18 = [1, 2, 3, 4, 5, 6];
const arr19 = arr18.toReversed();
console.log("R", arr19);
console.log("O", arr18);

console.log("==========================");

const arr20 = [2, 5, -3, 4, 0, 2, 8, -20];
arr20.sort();
console.log(arr20);
const arr21 = [-5, 2, 1, -20, 5, 7, 100, 0];
const arr22 = arr21.toSorted();
console.log(arr21);
console.log(arr22);
const arr23 = [
    {id: 10, name: 'Kasun'},
    {id: 5, name: 'Nuwan'},
    {id: 20, name: 'Ruwan'},
    {id: 3, name: 'Supun'},
];

function sortFn(customer1, customer2) {
    // + [customer2, customer1]
    // - [customer1, customer2]
    // 0 [customer1, customer2]
    if (customer1.id < customer2.id) return 1;
    else if (customer1.id > customer2.id) return -1;
    else return 0;
}

arr23.sort(sortFn);
console.log(arr23);

const students = [
    {id: 'S001', name: 'Kasun', marks: [25, 35, 55]},
    {id: 'S002', name: 'Nuwan', marks: [88, 95, 96]},
    {id: 'S003', name: 'Ruwan', marks: [75, 35, 55]},
    {id: 'S004', name: 'Supun', marks: [15, 35, 20]},
];

const students2 = students.map(student => {
    return {
        id: student.id,
        name: student.name,
        total: student.marks[0] + student.marks[1] + student.marks[2]
    }
});

function studentSortFn(student1, student2) {
    if (student1.total > student2.total) return -1;
    else return 1;
}

students2.sort(studentSortFn);
console.log(students2);

console.log("===========================");

const nums = [10, 20, 30, 40, 50, 60, 70];
const newNums1 = nums.slice();
const newNums2 = nums.slice(2, 5);
console.log(newNums1);
console.log(newNums2);

console.log("===========================");

const nums2 = [-5, 2, 0, true, "abc", {}];
const nums3 = [5, 2, 3, 4, -20, 5];
const nums4 = [-5, -8, -25, -55];

console.log(nums2.every(value => typeof value === "number"));
console.log(nums3.every(value => typeof value === "number"));
console.log(nums4.every(value => typeof value === "number"));
console.log('--------');
console.log(nums3.every(value => value < 0));
console.log(nums4.every(value => value < 0));
console.log('--------');
console.log(nums3.some(value => value < 0));
console.log(nums4.some(value => value > 0));
console.log(nums2.some(value => value === 0));

console.log("===========================");

const arr24 = Array(10);
arr24.fill(0, 5, 8);
console.log(arr24);
console.log(arr24.length);

console.log("===========================");

const arr25 = [2, 3, 5, 5, 2, 6, 1];
console.log(arr25.indexOf(2));
console.log(arr25.lastIndexOf(2));
// console.log(arr25.find(value => value === 5));
// console.log(arr25.findLast(value => value === 5));
console.log(arr25.findIndex(value => value === 5));
console.log(arr25.findLastIndex(value => value === 5));

console.log("===========================");

const arr26 = [10, 20, [1, 2], [5, 2, [2, 2]]];
const arr27 = arr26.flat().flat();
console.log(arr26);
console.log(arr27);

console.log("===========================");

const arr28 = ['Kasun', 'Nuwan', 'Supun', 'Ruwan'];
arr28.forEach(value => print(value));
arr28.forEach(print);

function print(value) {
    console.log(value);
}

console.log("===========================");

const arr29 = [1, 2, 3, 4, 5];
console.log(arr29.join(".."));