/* IIFE (Immediately Invoke Function Expressions) */

(function (id, name){
    console.log("Initialized", id, name);
})(1, "Kasun");

(()=>{
    console.log("Arrow Function Initialized");
})();

(function (){
    console.log("Executed");
})();