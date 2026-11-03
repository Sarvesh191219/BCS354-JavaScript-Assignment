# Experiment 14: Timers and Intervals

**Student Name:** SARVESH SINGH   
**Roll Number:** 2510303460  
**Course:** JavaScript Programming Lab (BCS354)  
**University:** Invertis University, Bareilly

## 1. Experiment Title
Timers and Intervals

## 2. Aim
Run code after a delay, cancel a timeout and repeat code using an interval.

## 3. Software / Tools Required
JavaScript, Node.js, Visual Studio Code and a web browser (for HTML/DOM experiments).

## 4. Theory
setTimeout schedules a callback once after a delay. clearTimeout cancels it using its timer ID. setInterval repeatedly runs a callback after a fixed delay. clearInterval stops the repetition.

## 5. Algorithm / Procedure
1. Open the `Lab 14` folder in Visual Studio Code.
2. Create or open the source files specified in the assignment and enter the task programs.
3. Save the files. Run JavaScript files using `node filename.js`; open HTML files in a browser.
4. Check the console/page output against the expected output below.
5. Capture the actual output and save the screenshot in this lab folder.

## 6. Program / Queries / Commands
The following are task-wise program examples for Assignment 14.

```javascript
// Task 1
console.log("Start");
setTimeout(()=>console.log("Timer done"),0);
console.log("End");

// Task 2
const timerId=setTimeout(()=>console.log("Not shown"),1000);
clearTimeout(timerId);
console.log("Cancelled");

// Task 3
let count=0;
const intervalId=setInterval(()=>{
 count++;
 console.log("Tick "+count);
 if(count===3) clearInterval(intervalId);
},200);
```

## 7. Input
Timeout 0 ms; cancellation timeout 1000 ms; interval 200 ms and stops at count 3.

## 8. Output
Expected output:

```text
Task 1: Start / End / Timer done
Task 2: Cancelled (Not shown is not printed)
Task 3: Tick 1 / Tick 2 / Tick 3, about 200 ms apart
```

For browser-based tasks, observe the rendered page and/or browser developer console. Save your actual output screenshots in this lab folder.

## 9. Result
The experiment was performed using JavaScript. The concepts of **Timers and Intervals** were implemented and the expected behaviour was observed.

## 10. Viva-Voce Questions
1. 1. What does setTimeout do?
2. 2. What does clearTimeout do?
3. 3. Difference between timeout and interval?
4. 4. How do you stop an interval?
