function main() {
    let setInfo = (id, name) => {
        this.id = id;
        this.name = name;
    }

    function init() {
        this.setInfo = setInfo;
    }

    init();
}

main();
// ?
global.setInfo("C001", "Kasun");
console.log("id" in global);
console.log("name" in global);
