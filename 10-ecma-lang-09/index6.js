const arr1 = [10, 20, 30, 40, 50];
console.log(arr1);

const [, , x, y] = arr1;
console.log(x, y);

const [k, m, ...arr2] = arr1;
console.log(k, m);
console.log(arr2);

const nums1 = [10,20,30];
const nums2 = [40,50,60];

const nums3 = [...nums1, ...nums2];
console.log(nums3);

const myObj = {
    id: "C001",
    name: "Kasun",
    print(){}
}

const clone = {...myObj};
console.log(clone);

const [x2, y2, ...rest] = [...nums3];
console.log(x2, y2, rest);

let a = 10;
let b = 20;

// let temp = a;
// a = b;
// b = temp;

[b, a]=[a, b];
console.log(a, b);

