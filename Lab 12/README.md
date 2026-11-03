# Experiment 12: Callbacks and Higher-Order Functions

**Student Name:** SARVESH SINGH   
**Roll Number:** 2510303460  
**Course:** JavaScript Programming Lab (BCS354)  
**University:** Invertis University, Bareilly

## 1. Experiment Title
Callbacks and Higher-Order Functions

## 2. Aim
Pass functions as arguments and use callbacks and higher-order functions.

## 3. Software / Tools Required
JavaScript, Node.js, Visual Studio Code and a web browser (for HTML/DOM experiments).

## 4. Theory
A callback is a function passed to another function and called by it. A higher-order function accepts a function as an argument or returns a function. These concepts make code flexible and reusable.

## 5. Algorithm / Procedure
1. Open the `Lab 12` folder in Visual Studio Code.
2. Create or open the source files specified in the assignment and enter the task programs.
3. Save the files. Run JavaScript files using `node filename.js`; open HTML files in a browser.
4. Check the console/page output against the expected output below.
5. Capture the actual output and save the screenshot in this lab folder.

## 6. Program / Queries / Commands
The following are task-wise program examples for Assignment 12.

```javascript
// Task 1
function applyTwice(fn,value){return fn(fn(value));}
function addTen(n){return n+10;}
console.log(applyTwice(addTen,5));

// Task 2
function formatMarks(marks,callback){return callback(marks);}
console.log(formatMarks(76,m=>`Marks: ${m}/100`));

// Task 3
function repeatAction(times,action){
 for(let round=1;round<=times;round++) action(round);
}
repeatAction(3,round=>console.log(`Round ${round}`));
```

## 7. Input
Input number 5; marks 76; repeat action 3 times.

## 8. Output
Expected output:

```text
Task 1: 25
Task 2: Marks: 76/100
Task 3: Round 1 / Round 2 / Round 3
```

For browser-based tasks, observe the rendered page and/or browser developer console. Save your actual output screenshots in this lab folder.

## 9. Result
The experiment was performed using JavaScript. The concepts of **Callbacks and Higher-Order Functions** were implemented and the expected behaviour was observed.

## 10. Viva-Voce Questions
1. 1. What is a callback?
2. 2. What is a higher-order function?
3. 3. Can functions be arguments?
4. 4. What is an arrow function?
