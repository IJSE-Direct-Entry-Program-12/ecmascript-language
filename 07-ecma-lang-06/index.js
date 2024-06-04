/* Arrays, Maps are built-in iterables */
let numbers = [10,20,30,40,50];
for(const value of numbers) console.log(value);
console.log("=================");

let employee = {
    id: "E001",
    name: "Kasun Sampath",
    address: "Panadura",
    contacts: ["011-1234567", "055-1234567", "033-1234567"],
    [Symbol.iterator]: function(){
        let i = 0;
        return {
            next(){
                return {
                    value: employee.contacts[i],
                    done: employee.contacts.length === i++
                }
            }
        }
    }
};

for(const property in employee) console.log(property);
// for(const value of employee) console.log(value);

const iterator = employee[Symbol.iterator]();
while (true){
    const iterationResult = iterator.next();
    if (iterationResult.done) break;
    console.log(iterationResult.value);
}

// const empId = "E001";
// const empName = "Kasun Sampath";
// const prop1 = "id";

// const symbolRef = Symbol();
//
// const myObj = {
//     [prop1]: empId,
//     name: empName,
//     123: "Number Property",
//     "$%^()": "Crazy Symbol Property",
//     [(10 + 20)/2]: "Computed Property",
//     [symbolRef]: "How to access this?"
// };
//
// console.log(Object.keys(myObj));
// console.log(myObj.id);
// console.log(myObj.name);
// console.log(myObj["1" + 23]);
// console.log(myObj["$%^()"]);
// console.log(myObj[symbolRef]);
