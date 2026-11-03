# Experiment 4: Writing Functions

**Student Name:** SARVESH SINGH   
**Roll Number:** 2510303460  
**Course:** JavaScript Programming Lab (BCS354)  
**University:** Invertis University, Bareilly

## 1. Experiment Title
Writing Functions

## 2. Aim
Write a return-value function, arrow function and function with a default parameter.

## 3. Software / Tools Required
JavaScript, Node.js, Visual Studio Code and a web browser (for HTML/DOM experiments).

## 4. Theory
Functions are reusable blocks of code. Parameters receive values, return sends a result back, arrow functions provide shorter syntax, and default parameters provide a value when an argument is omitted.

## 5. Algorithm / Procedure
1. Open the `Lab 4` folder in Visual Studio Code.
2. Create or open the source files specified in the assignment and enter the task programs.
3. Save the files. Run JavaScript files using `node filename.js`; open HTML files in a browser.
4. Check the console/page output against the expected output below.
5. Capture the actual output and save the screenshot in this lab folder.

## 6. Program / Queries / Commands
The following are task-wise program examples for Assignment 4.

```javascript
// Task 1
function greet(name) { return "Hello, " + name; }
console.log(greet("Asha"));

// Task 2
const square = n => n*n;
console.log(square(6));

// Task 3
function billWithTax(amount, taxRate=0.18) {
  return amount + amount*taxRate;
}
console.log(billWithTax(100));
```

## 7. Input
Name Asha; square argument 6; bill amount 100 and default tax rate 0.18.

## 8. Output
Expected output:

```text
Task 1: Hello, Asha
Task 2: 36
Task 3: 118
```

For browser-based tasks, observe the rendered page and/or browser developer console. Save your actual output screenshots in this lab folder.

## 9. Result
The experiment was performed using JavaScript. The concepts of **Writing Functions** were implemented and the expected behaviour was observed.

## 10. Viva-Voce Questions
1. 1. What is a function?
2. 2. What is a parameter?
3. 3. Purpose of return?
4. 4. What is an arrow function?
5. 5. What is a default parameter?
