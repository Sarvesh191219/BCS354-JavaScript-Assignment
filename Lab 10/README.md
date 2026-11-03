# Experiment 10: Objects and Destructuring

**Student Name:** SARVESH SINGH   
**Roll Number:** 2510303460  
**Course:** JavaScript Programming Lab (BCS354)  
**University:** Invertis University, Bareilly

## 1. Experiment Title
Objects and Destructuring

## 2. Aim
Create and update objects and extract values using array and object destructuring.

## 3. Software / Tools Required
JavaScript, Node.js, Visual Studio Code and a web browser (for HTML/DOM experiments).

## 4. Theory
Objects store data as key-value pairs. Properties can be accessed and changed. Destructuring extracts values from arrays or properties from objects into variables.

## 5. Algorithm / Procedure
1. Open the `Lab 10` folder in Visual Studio Code.
2. Create or open the source files specified in the assignment and enter the task programs.
3. Save the files. Run JavaScript files using `node filename.js`; open HTML files in a browser.
4. Check the console/page output against the expected output below.
5. Capture the actual output and save the screenshot in this lab folder.

## 6. Program / Queries / Commands
The following are task-wise program examples for Assignment 10.

```javascript
// Task 1
const student={name:"Rohan",roll:12,marks:78};
console.log(student.name);
student.marks=81;
console.log(student.marks);

// Task 2
const subjects=["Maths","Science","English"];
const [first,second]=subjects;
console.log(first); console.log(second);

// Task 3
const info={name:"Rohan",roll:12,marks:81};
const {name,roll}=info;
console.log(name); console.log(roll);
```

## 7. Input
Student Rohan, roll 12, marks 78 then 81; subjects Maths, Science and English.

## 8. Output
Expected output:

```text
Task 1: Rohan / 81
Task 2: Maths / Science
Task 3: Rohan / 12
```

For browser-based tasks, observe the rendered page and/or browser developer console. Save your actual output screenshots in this lab folder.

## 9. Result
The experiment was performed using JavaScript. The concepts of **Objects and Destructuring** were implemented and the expected behaviour was observed.

## 10. Viva-Voce Questions
1. 1. What is an object?
2. 2. What is a key-value pair?
3. 3. How to update a property?
4. 4. What is array destructuring?
5. 5. What is object destructuring?
