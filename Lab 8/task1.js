/*
Name: SARVESH SINGH
Roll No: 2510303460
Assignment No: 8
Task No: 1
*/

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return "Hi, I am " + this.name;
    }
}

class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
}

let teacher1 = new Teacher("SARVESH SINGH", "Maths");

console.log(teacher1.greet());