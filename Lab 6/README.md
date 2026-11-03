# Experiment 6: JSON Text

**Student Name:** SARVESH SINGH   
**Roll Number:** 2510303460  
**Course:** JavaScript Programming Lab (BCS354)  
**University:** Invertis University, Bareilly

## 1. Experiment Title
JSON Text

## 2. Aim
Convert objects to JSON text, parse JSON and catch invalid JSON.

## 3. Software / Tools Required
JavaScript, Node.js, Visual Studio Code and a web browser (for HTML/DOM experiments).

## 4. Theory
JSON (JavaScript Object Notation) is a text format for data exchange. JSON.stringify converts an object to JSON text. JSON.parse converts valid JSON text to a JavaScript value. try/catch handles parsing errors.

## 5. Algorithm / Procedure
1. Open the `Lab 6` folder in Visual Studio Code.
2. Create or open the source files specified in the assignment and enter the task programs.
3. Save the files. Run JavaScript files using `node filename.js`; open HTML files in a browser.
4. Check the console/page output against the expected output below.
5. Capture the actual output and save the screenshot in this lab folder.

## 6. Program / Queries / Commands
The following are task-wise program examples for Assignment 6.

```javascript
// Task 1
const student={name:"Rohan",marks:[70,80]};
console.log(JSON.stringify(student));

// Task 2
const text='{"city":"Pune","pin":411001}';
console.log(JSON.parse(text).city);

// Task 3
try { JSON.parse('{name: Rohan}'); }
catch (error) { console.log("Invalid JSON"); }
```

## 7. Input
Object Rohan with marks 70 and 80; valid Pune JSON and invalid JSON text.

## 8. Output
Expected output:

```text
Task 1: {"name":"Rohan","marks":[70,80]}
Task 2: Pune
Task 3: Invalid JSON
```

For browser-based tasks, observe the rendered page and/or browser developer console. Save your actual output screenshots in this lab folder.

## 9. Result
The experiment was performed using JavaScript. The concepts of **JSON Text** were implemented and the expected behaviour was observed.

## 10. Viva-Voce Questions
1. 1. Full form of JSON?
2. 2. What does stringify do?
3. 3. What does parse do?
4. 4. Why use try/catch?
