function User(id, fullname){
    console.log("User()");
    this.id = id;
    this.fullname = fullname;
}

User.prototype.print = function(){
    console.log(this.id, this.fullname);
}

function Employee(id, fullName, address, contact){
    User.call(this, id, fullName);
    console.log("Employee()");
    this.address = address;
    this.contact = contact;
}

Employee.prototype.__proto__ = User.prototype;

Employee.prototype.print = function(){
    User.prototype.print.call(this);
    console.log(this.address, this.contact);
}

function System(id, fullName, email){
    User.call(this, id, fullName);
    console.log("System()");
    this.email = email;
}

System.prototype.__proto__ = User.prototype;

function Manager(id, fullName, address, contact, qualifications){
    Employee.call(this, id, fullName, address, contact);
    this.qualifications = qualifications;
}

Manager.prototype.__proto__ = Employee.prototype;

const employee = new Employee(1, "Kasun", "Galle", "011-1234567");
console.log(employee);
console.log(employee instanceof Employee);
console.log(employee instanceof User);
employee.print();
// const user = new User(1, "Kasun");
// user.print();