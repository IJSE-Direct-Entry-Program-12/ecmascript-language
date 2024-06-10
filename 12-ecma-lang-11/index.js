console.log("Script started");
setTimeout(function(){
    console.log("Timeout Fn 1");
}, 5000);
setTimeout(function(){
    for (let i = 0; i < 100; i++) {
        console.log("Timeout Fn 2");
    }
}, 0);
setTimeout(function(){
    console.log("Timeout Fn 3");
}, 0);
function execute(){
    for (let i = 0; i < 100; i++) {
        console.log("Execute Fn");
    }
}
execute();
console.log("Script is about to end");

