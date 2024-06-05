function print(){
    console.log("myFun started");
    console.log("Statement1");
    console.log("Statement2");
    console.log("Statement3");
    console.log("myFun is about to exit");
}

const abc = print;
abc();
print();

function myFn(){
    console.log("=====================");
    console.log(arguments[0]);
    console.log(arguments[1]);
}

myFn(10, "ijse", "esoft", true);