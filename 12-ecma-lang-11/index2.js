const myPromise = new Promise(executor);

function executor(resolve, reject) {
    setTimeout(() => resolve("Hello"), 5000);
}

console.log("Let's wait");

// try{
//     const value = await myPromise;
//     console.log("Resolved: ", value);
// }catch (e){
//     console.log("Rejected: ", e);
// }finally{
//      console.log("Nawa giluntha ban chooon");
// }

// myPromise.then(function(value){
//     console.log("Resolved: ", value);
// });
// myPromise.catch(function(error){
//    console.log("Rejected: ", error);
// });
// myPromise.finally(function(){
//     console.log("Nawa gilunath ban choon");
// });

myPromise.then(function(value){
    console.log("Resolved: ", value);
}).catch(function(error){
    console.log("Rejected: ", error);
}).finally(function(){
    console.log("Nawa gilunath ban choon");
});

console.log("I have been blocked");