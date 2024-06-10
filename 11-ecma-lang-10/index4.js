;let regExp1 = /\d{3}-\d{7}/;
let str1 = "My contact: 011-1234567. Her contact: 077-1234567";
let str2 = "Hello! How are you?";

console.log(regExp1.exec(str1));
console.log(str1.match(regExp1));

console.log(regExp1.exec(str2));
console.log(str2.match(regExp1));

const matchArray = regExp1.exec(str1);
console.log(matchArray.length);

let regExp2 = /(?<code>\d{3})-(?<number>\d{7})/;
let str3 = "My contact: 011-1234567";
console.log(str3.match(regExp2));

let regExp3 = /(?<year>\d{4})-(\d{2})-(\d{2})/;
let str4 = "My dob: 2004-10-03";
console.log(regExp3.exec(str4));