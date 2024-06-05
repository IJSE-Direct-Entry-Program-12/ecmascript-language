function printCustomer(id, name, address = "Pan" + "adura") {
    if (!id || !name)
        throw new Error("id and name can't be empty");

    console.log(`id=${id}, name=${name}, address=${address}`);
}

// printCustomer();
printCustomer("C001", "Kasun");

function myFn(x = 10, y, k = x + y) {
    console.log(x, y, k);
}

myFn(undefined, 20);    // x = 10, y = 20, 30

function myFn2(x = arguments[2], y = arguments[0], k = 30) {
    console.log(x, y, k);
}

myFn2(undefined, 20, 50);

function myFn2(x = arguments[3] ?? 30,
               y = x,
               k = x + y){
    console.log(x, y ? 70 : 50, k);
}

myFn2(undefined, [], undefined, null);