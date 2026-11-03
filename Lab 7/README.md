# Experiment 7: Constructor Functions and Classes

**Student Name:** SARVESH SINGH   
**Roll Number:** 2510303460  
**Course:** JavaScript Programming Lab (BCS354)  
**University:** Invertis University, Bareilly

## 1. Experiment Title
Constructor Functions and Classes

## 2. Aim
Create objects with a constructor function and class, and add a prototype method.

## 3. Software / Tools Required
JavaScript, Node.js, Visual Studio Code and a web browser (for HTML/DOM experiments).

## 4. Theory
Constructor functions create similar objects using new and this. ES6 classes provide syntax for constructors and methods. Prototype methods can be shared by instances created from a constructor.

## 5. Algorithm / Procedure
1. Open the `Lab 7` folder in Visual Studio Code.
2. Create or open the source files specified in the assignment and enter the task programs.
3. Save the files. Run JavaScript files using `node filename.js`; open HTML files in a browser.
4. Check the console/page output against the expected output below.
5. Capture the actual output and save the screenshot in this lab folder.

## 6. Program / Queries / Commands
The following are task-wise program examples for Assignment 7.

```javascript
// Task 1
function Student(name,marks){this.name=name;this.marks=marks;}
const s=new Student("Asha",88);
console.log(s.name); console.log(s.marks);

// Task 2
class Book {
  constructor(title,pages){this.title=title;this.pages=pages;}
  summary(){return `${this.title} has ${this.pages} pages`;}
}
console.log(new Book("Algorithms",320).summary());

// Task 3
function Student2(name,marks){this.name=name;this.marks=marks;}
Student2.prototype.result=function(){return this.marks>=40?"Pass":"Fail";};
console.log(new Student2("Asha",88).result());
```

## 7. Input
Student Asha with 88 marks; Algorithms book with 320 pages.

## 8. Output
Expected output:

```text
Task 1: Asha / 88
Task 2: Algorithms has 320 pages
Task 3: Pass
```

For browser-based tasks, observe the rendered page and/or browser developer console. Save your actual output screenshots in this lab folder.

## 9. Result
The experiment was performed using JavaScript. The concepts of **Constructor Functions and Classes** were implemented and the expected behaviour was observed.

## 10. Viva-Voce Questions
1. 1. What is a constructor?
2. 2. What does new do?
3. 3. What is a class?
4. 4. What is a prototype?
