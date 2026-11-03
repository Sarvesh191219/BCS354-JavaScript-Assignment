# Experiment 11: Scope and Closures

**Student Name:** SARVESH SINGH   
**Roll Number:** 2510303460  
**Course:** JavaScript Programming Lab (BCS354)  
**University:** Invertis University, Bareilly

## 1. Experiment Title
Scope and Closures

## 2. Aim
Understand block and global scope and use a closure to retain a value.

## 3. Software / Tools Required
JavaScript, Node.js, Visual Studio Code and a web browser (for HTML/DOM experiments).

## 4. Theory
Scope determines where variables are accessible. A let variable declared inside a block is limited to that block. A global variable is declared outside functions. A closure is an inner function that remembers variables from its outer function.

## 5. Algorithm / Procedure
1. Open the `Lab 11` folder in Visual Studio Code.
2. Create or open the source files specified in the assignment and enter the task programs.
3. Save the files. Run JavaScript files using `node filename.js`; open HTML files in a browser.
4. Check the console/page output against the expected output below.
5. Capture the actual output and save the screenshot in this lab folder.

## 6. Program / Queries / Commands
The following are task-wise program examples for Assignment 11.

```javascript
// Task 1
let level="outer";
{ let level="inner"; console.log(level); }
console.log(level);

// Task 2
function makeCounter(){
 let count=0;
 return function(){count++;return count;};
}
const counter=makeCounter();
console.log(counter()); console.log(counter());

// Task 3
const school="Sample College";
function showSchool(){console.log("Welcome to "+school);}
showSchool();
```

## 7. Input
Outer and inner level strings; counter starts at zero; school Sample College.

## 8. Output
Expected output:

```text
Task 1: inner / outer
Task 2: 1 / 2
Task 3: Welcome to Sample College
```

For browser-based tasks, observe the rendered page and/or browser developer console. Save your actual output screenshots in this lab folder.

## 9. Result
The experiment was performed using JavaScript. The concepts of **Scope and Closures** were implemented and the expected behaviour was observed.

## 10. Viva-Voce Questions
1. 1. What is scope?
2. 2. What is block scope?
3. 3. What is global scope?
4. 4. What is a closure?
