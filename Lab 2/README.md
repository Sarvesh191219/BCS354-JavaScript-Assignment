# Experiment 2: Operators, Type Conversion and a Calculator

**Student Name:** SARVESH SINGH   
**Roll Number:** 2510303460  
**Course:** JavaScript Programming Lab (BCS354)  
**University:** Invertis University, Bareilly

## 1. Experiment Title
Operators, Type Conversion and a Calculator

## 2. Aim
Use arithmetic operators, convert values between strings and numbers, and select operations using conditions.

## 3. Software / Tools Required
JavaScript, Node.js, Visual Studio Code and a web browser (for HTML/DOM experiments).

## 4. Theory
Arithmetic operators include +, -, * and /. Number() converts suitable text to a number and String() converts a value to text. if and else if select which operation should run.

## 5. Algorithm / Procedure
1. Open the `Lab 2` folder in Visual Studio Code.
2. Create or open the source files specified in the assignment and enter the task programs.
3. Save the files. Run JavaScript files using `node filename.js`; open HTML files in a browser.
4. Check the console/page output against the expected output below.
5. Capture the actual output and save the screenshot in this lab folder.

## 6. Program / Queries / Commands
The following are task-wise program examples for Assignment 2.

```javascript
// Task 1
const a = 17, b = 5;
console.log(a+b); console.log(a-b); console.log(a*b); console.log(a/b);

// Task 2
console.log(Number("12") + 5);
console.log(String(7) + "3");

// Task 3
const x = 8, y = 4;
let op = "+";
if (op === "+") console.log(x+y);
else if (op === "-") console.log(x-y);
op = "-";
if (op === "+") console.log(x+y);
else if (op === "-") console.log(x-y);
```

## 7. Input
Values 17 and 5; text 12; number 7 and text 3; calculator values 8 and 4.

## 8. Output
Expected output:

```text
Task 1: 22, 12, 85, 3.4
Task 2: 17, 73
Task 3: 12, 4
```

For browser-based tasks, observe the rendered page and/or browser developer console. Save your actual output screenshots in this lab folder.

## 9. Result
The experiment was performed using JavaScript. The concepts of **Operators, Type Conversion and a Calculator** were implemented and the expected behaviour was observed.

## 10. Viva-Voce Questions
1. 1. Name arithmetic operators.
2. 2. What is type conversion?
3. 3. What does Number() do?
4. 4. Why use if/else if?
