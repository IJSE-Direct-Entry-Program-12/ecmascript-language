const promiseRef1 = new Promise(executor1);

function executor1(resolve, reject){
    setTimeout(function(){
        console.log("Customer1")
        resolve({
            id: "C001",
            name: "Kasun Sampath"
        });
    }, 2000);
}

const promiseRef2 = new Promise(executor2);

function executor2(resolve, reject){
    setTimeout(function(){
        console.log("Customer2")
        resolve({
            id: "C002",
            name: "Nuwan Ramindu"
        });
    }, 4000);
}

const promiseRef3 = new Promise(executor3);

function executor3(resolve, reject){
    setTimeout(function(){
        console.log("Customer3")
        resolve({
            id: "C003",
            name: "Upul Shantha"
        });
    }, 6000);
}

async function* asyncGeneratorFn(){
    console.log("Iterator");
    yield await promiseRef1;
    yield await promiseRef2;
    yield await promiseRef3;
}

const promiseRef = new Promise(executor);

function executor(resolve, reject){
    setTimeout(function(){
        resolve(asyncGeneratorFn);
    }, 5000);
}

for await (const value of (await promiseRef)()){
    console.log(value);
}

