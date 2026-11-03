# Experiment 15: Promises and async/await with Local Data

**Student Name:** SARVESH SINGH   
**Roll Number:** 2510303460  
**Course:** JavaScript Programming Lab (BCS354)  
**University:** Invertis University, Bareilly

## 1. Experiment Title
Promises and async/await with Local Data

## 2. Aim
Create resolving/rejecting Promises, use async/await and load local data asynchronously.

## 3. Software / Tools Required
JavaScript, Node.js, Visual Studio Code and a web browser (for HTML/DOM experiments).

## 4. Theory
A Promise represents a future result and can be pending, fulfilled or rejected. resolve fulfills it and reject rejects it. async functions return Promises; await waits for a Promise inside an async function. try/catch handles errors.

## 5. Algorithm / Procedure
1. Open the `Lab 15` folder in Visual Studio Code.
2. Create or open the source files specified in the assignment and enter the task programs.
3. Save the files. Run JavaScript files using `node filename.js`; open HTML files in a browser.
4. Check the console/page output against the expected output below.
5. Capture the actual output and save the screenshot in this lab folder.

## 6. Program / Queries / Commands
The following are task-wise program examples for Assignment 15.

```javascript
// Task 1
function checkMarks(marks){
 return new Promise((resolve,reject)=>{
  if(marks>=0&&marks<=100) resolve(marks);
  else reject(new Error("Marks out of range"));
 });
}
checkMarks(80).then(value=>console.log(value));

// Task 2
checkMarks(120).catch(error=>console.log(error.message));

// Task 3
async function run(){
 try{
  console.log(await checkMarks(65));
  await checkMarks(-5);
 }catch(error){console.log("Caught: "+error.message);}
}
run();

// Task 4
function getUsers(){
 return new Promise(resolve=>setTimeout(()=>resolve([
  {id:1,name:"Asha"},{id:2,name:"Rohan"},{id:3,name:"Meera"}
 ]),100));
}
async function showUsers(){
 const users=await getUsers();
 users.forEach(user=>console.log(user.name));
}
showUsers();
```

## 7. Input
Marks 80, 120, 65 and -5; local user data Asha, Rohan and Meera.

## 8. Output
Expected output:

```text
Task 1: 80
Task 2: Marks out of range
Task 3: 65 / Caught: Marks out of range
Task 4: Asha / Rohan / Meera
```

For browser-based tasks, observe the rendered page and/or browser developer console. Save your actual output screenshots in this lab folder.

## 9. Result
The experiment was performed using JavaScript. The concepts of **Promises and async/await with Local Data** were implemented and the expected behaviour was observed.

## 10. Viva-Voce Questions
1. 1. What is a Promise?
2. 2. What are its three states?
3. 3. What do resolve and reject do?
4. 4. What do async and await do?
5. 5. How does try/catch handle errors?
