console.log("Statements Part - II");

/* Variable Declaration Statement */

var myVar = 10, myVar2 = 20;
let myLet = 10, myLet2 = 20;
const myConst = 10, myConst2 = 20;
let myLet3;
// const myConst3; /* Const should have an initializer */

/* Empty Statement */

;
;
;
;
;

/* Expression Statement */
10 + 15;
true;
false;
{
}
;
{
}
+100;

/* If Statement */

if (10) {
    console.log("Truthy");
}
if ([]) {
    console.log("Truthy");
}
if (!"") {
    console.log("Falsy");
}

/* Iteration Statements */
/* 1. While */
let i = 5;
while (i--) {
    console.log(i);
}

console.log("------------------")

/* 2. Do... While */
i = 5;
do console.log(i); while (i--);

console.log("------------------")

/* 3. For */
for (let k = 5; k; k--) console.log(k);

/* For...in... */

/*
* For...in... loop can be used to,
* 1. iterate enumerable properties of any object or,
* 2. iterate indexes of array-like objects
* */

let employee = {
    id: 'E001',
    name: 'Kasun Sampath',
    address: 'Galle',
    print(){
        console.log(this.id, this.name, this.address);
    }
};
Object.defineProperty(employee, 'print', {
    enumerable: false
});
console.log("print" in employee);
for(const property in employee){
    console.log(typeof property);
    console.log(property, employee[property]);
}

let myArray = [10,20,30,40,50];
for(const index in myArray){
    console.log(index, myArray[index]);
}

// console.log(myArray.0);
console.log(myArray[1]);
console.log(employee.id);
console.log(employee["id"]);
console.log(employee["name"]);
console.log(employee["address"]);