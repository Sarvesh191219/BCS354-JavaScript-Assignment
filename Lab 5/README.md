# Experiment 5: Arrays, Array Methods and Nested Arrays

**Student Name:** SARVESH SINGH   
**Roll Number:** 2510303460  
**Course:** JavaScript Programming Lab (BCS354)  
**University:** Invertis University, Bareilly

## 1. Experiment Title
Arrays, Array Methods and Nested Arrays

## 2. Aim
Create arrays, use length, forEach and filter, and access nested arrays.

## 3. Software / Tools Required
JavaScript, Node.js, Visual Studio Code and a web browser (for HTML/DOM experiments).

## 4. Theory
Arrays store multiple values. Indexes start at zero and length gives the item count. forEach visits each item; filter creates a new array containing items that pass a test. Nested arrays contain arrays as elements.

## 5. Algorithm / Procedure
1. Open the `Lab 5` folder in Visual Studio Code.
2. Create or open the source files specified in the assignment and enter the task programs.
3. Save the files. Run JavaScript files using `node filename.js`; open HTML files in a browser.
4. Check the console/page output against the expected output below.
5. Capture the actual output and save the screenshot in this lab folder.

## 6. Program / Queries / Commands
The following are task-wise program examples for Assignment 5.

```javascript
// Task 1
const marks=[72,85,64,90];
console.log(marks.length);
console.log(marks[0]);

// Task 2
["Maths","Science","English"].forEach(s=>console.log(s));

// Task 3
const passed=[72,85,45,90].filter(m=>m>=60);
console.log(passed);

// Task 4
const grid=[[1,2,3],[4,5,6]];
console.log(grid[1][2]);
```

## 7. Input
Marks arrays and subjects specified in the programs; nested grid [[1,2,3],[4,5,6]].

## 8. Output
Expected output:

```text
Task 1: 4, 72
Task 2: Maths / Science / English
Task 3: [72, 85, 90]
Task 4: 6
```

For browser-based tasks, observe the rendered page and/or browser developer console. Save your actual output screenshots in this lab folder.

## 9. Result
The experiment was performed using JavaScript. The concepts of **Arrays, Array Methods and Nested Arrays** were implemented and the expected behaviour was observed.

## 10. Viva-Voce Questions
1. 1. What is an array?
2. 2. What is its first index?
3. 3. What does forEach do?
4. 4. What does filter return?
5. 5. What is a nested array?
