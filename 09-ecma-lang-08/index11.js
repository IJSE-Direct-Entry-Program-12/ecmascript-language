function init(){
    this.id = "C001";
    this.name = "Kasun";
}

function execute(id, name){
    //"use strict";
    const invoke = ()=>{
        this.id1 = id;
        this.name1 = name;
    }
    return invoke;
}

init();
const fn = execute(global.id, name);
fn();
console.log(global);
// ?