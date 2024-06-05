function myFn(a, b, c, ...x) {
    console.log("a:", a);
    console.log("b:", b);
    console.log("c:", c);
    console.log("x:", x);
    console.log("===============");
}

myFn();
myFn(b = 10, a = 20, 30, 40, 50);
console.log(b, a);

myFn(...[10,20,30,40,50,60]);

// myFn(10, 20);
// myFn(10, 20, 30, 40, 50, 60);
