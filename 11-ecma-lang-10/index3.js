let regexp1 = new RegExp("^\\d{9}[Vv]$");
console.log(regexp1.test("123"));
console.log(regexp1.test("123456789V"));
console.log(regexp1.test("123456789v"));
console.log(regexp1.test("123456789K"));

console.log("------------------------");

let regexp2 = /(?<num>\d{9})[Vv]/;
console.log(regexp2.test("123"));
console.log(regexp2.test("123456789V"));
console.log(regexp2.test("123456789v"));
console.log(regexp2.test("123456789K"));

console.log("This is my nic: 123456789V. Hi!".match(regexp2));

console.log("----------------");

let contactRegExp = /(?<code>\d{3})-\d{7}/g;
console.log("My contact: 011-1234567, her contact is: 077-1234567"
    .match(contactRegExp));

console.log("----------------");
console.log(contactRegExp.exec("My contact: 011-1234567, her contact is: 077-1234567"));
console.log(contactRegExp.exec("My contact: 011-1234567, her contact is: 077-1234567"));