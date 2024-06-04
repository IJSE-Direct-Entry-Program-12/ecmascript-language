// const employee = {
//     id: "E001",
//     name: "Kasun Sampath",
//     contacts: ["011-1234567", "033-1234567", "055-1234567"],
//     [Symbol.iterator]:
    function* syncGeneratorFn() {
        yield "077-1234567";
        yield "011-1234567";
        yield "023-1234567";
    }
//}

for (const contact of syncGeneratorFn()) console.log(contact);

// console.log("--------------");

// const iterator = syncGeneratorFn();
// let iterationResult = iterator.next();
// console.log(iterationResult.value);
// iterationResult = iterator.next();
// console.log(iterationResult.value);