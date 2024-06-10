let regExp = /(?<code>\d{3})-(\d{7})/g;
let str = "My contact: 011-1234567, 077-1234567";
let str2 = "Hello";
// console.log(str.match(regExp));
// console.log(regExp.lastIndex);
// console.log(regExp.exec(str));
// console.log(regExp.lastIndex);
// console.log(regExp.exec(str));
// console.log(regExp.lastIndex);
// console.log(regExp.exec(str));
// console.log(regExp.lastIndex);
// console.log(regExp.exec(str));
// console.log(regExp.lastIndex);

// for (const array of str.matchAll(regExp)){
//     console.log(array);
// }

const iterable = str.matchAll(regExp);
console.log(iterable.next().value); // regExp.exec(str)
console.log(iterable.next().value); // regExp.exec(str)