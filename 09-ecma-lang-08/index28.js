function Student() {
    console.log("Student()", this);
}

const myObj = {}
myObj.print = Student;

Student();
console.log(myObj.print === Student);

myObj.print();

