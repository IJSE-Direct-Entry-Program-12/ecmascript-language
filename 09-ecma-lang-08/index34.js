class User{
    username;
    password;

    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

class Employee extends User{

    /* Default Constructor */
    // constructor() {
    //     super();
    // }
}

const e1 = new Employee();
console.log(e1);

