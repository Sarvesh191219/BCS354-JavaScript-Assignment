# Experiment 8: Inheritance, Methods and Composition

**Student Name:** SARVESH SINGH   
**Roll Number:** 2510303460  
**Course:** JavaScript Programming Lab (BCS354)  
**University:** Invertis University, Bareilly

## 1. Experiment Title
Inheritance, Methods and Composition

## 2. Aim
Use extends, methods and object composition.

## 3. Software / Tools Required
JavaScript, Node.js, Visual Studio Code and a web browser (for HTML/DOM experiments).

## 4. Theory
Inheritance lets a child class reuse a parent class. extends creates the child class and super() calls the parent constructor. Composition combines objects by placing one object inside another.

## 5. Algorithm / Procedure
1. Open the `Lab 8` folder in Visual Studio Code.
2. Create or open the source files specified in the assignment and enter the task programs.
3. Save the files. Run JavaScript files using `node filename.js`; open HTML files in a browser.
4. Check the console/page output against the expected output below.
5. Capture the actual output and save the screenshot in this lab folder.

## 6. Program / Queries / Commands
The following are task-wise program examples for Assignment 8.

```javascript
// Task 1
class Person {
  constructor(name){this.name=name;}
  greet(){return `Hi, I am ${this.name}`;}
}
class Teacher extends Person {
  constructor(name,subject){super(name);this.subject=subject;}
}
console.log(new Teacher("Anita","Maths").greet());

// Task 2
class Locker {
  constructor(){this.pin=1234;}
  checkPin(n){return n===this.pin;}
}
const locker=new Locker();
console.log(locker.checkPin(1111));
console.log(locker.checkPin(1234));

// Task 3
class Engine {constructor(power){this.power=power;}}
class Car {
  constructor(power){this.engine=new Engine(power);}
  start(){return `Car starts with ${this.engine.power} HP`;}
}
console.log(new Car(150).start());
```

## 7. Input
Anita teaches Maths; locker PIN 1234; car engine power 150 HP.

## 8. Output
Expected output:

```text
Task 1: Hi, I am Anita
Task 2: false / true
Task 3: Car starts with 150 HP
```

For browser-based tasks, observe the rendered page and/or browser developer console. Save your actual output screenshots in this lab folder.

## 9. Result
The experiment was performed using JavaScript. The concepts of **Inheritance, Methods and Composition** were implemented and the expected behaviour was observed.

## 10. Viva-Voce Questions
1. 1. What is inheritance?
2. 2. What does extends do?
3. 3. Why use super()?
4. 4. What is composition?
