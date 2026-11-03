# Experiment 13: Reduce, Some, Every and Map

**Student Name:** SARVESH SINGH   
**Roll Number:** 2510303460  
**Course:** JavaScript Programming Lab (BCS354)  
**University:** Invertis University, Bareilly

## 1. Experiment Title
Reduce, Some, Every and Map

## 2. Aim
Use reduce, some, every and map on arrays without changing the original array.

## 3. Software / Tools Required
JavaScript, Node.js, Visual Studio Code and a web browser (for HTML/DOM experiments).

## 4. Theory
reduce combines array items into one value. some checks whether at least one item passes a test. every checks whether all items pass. map creates a new array by transforming each item.

## 5. Algorithm / Procedure
1. Open the `Lab 13` folder in Visual Studio Code.
2. Create or open the source files specified in the assignment and enter the task programs.
3. Save the files. Run JavaScript files using `node filename.js`; open HTML files in a browser.
4. Check the console/page output against the expected output below.
5. Capture the actual output and save the screenshot in this lab folder.

## 6. Program / Queries / Commands
The following are task-wise program examples for Assignment 13.

```javascript
// Task 1
const prices=[120,45,300];
console.log(prices.reduce((sum,p)=>sum+p,0));

// Task 2
const marks=[72,85,30,90];
console.log(marks.some(m=>m<40));
console.log(marks.every(m=>m>=35));

// Task 3
const original=[72,85,64,90];
const increased=original.map(m=>m+5);
console.log(increased);
console.log(original);
```

## 7. Input
Prices 120, 45, 300; marks arrays shown in program.

## 8. Output
Expected output:

```text
Task 1: 465
Task 2: true / false
Task 3: [77, 90, 69, 95] then [72, 85, 64, 90]
```

For browser-based tasks, observe the rendered page and/or browser developer console. Save your actual output screenshots in this lab folder.

## 9. Result
The experiment was performed using JavaScript. The concepts of **Reduce, Some, Every and Map** were implemented and the expected behaviour was observed.

## 10. Viva-Voce Questions
1. 1. What does reduce do?
2. 2. What does some check?
3. 3. What does every check?
4. 4. Does map change the original array?
