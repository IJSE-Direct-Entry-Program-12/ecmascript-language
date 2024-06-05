
const wrapper = ()=>{
    console.log(this);
    function execute(){
        console.log(this);
    }

    execute();
}

wrapper();