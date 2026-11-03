 # Experiment 9: DOM, Validation, Storage and Quiz

**Student Name:** SARVESH SINGH   
**Roll Number:** 2510303460  
**Course:** JavaScript Programming Lab (BCS354)  
**University:** Invertis University, Bareilly

## 1. Experiment Title
DOM, Validation, Storage and Quiz

## 2. Aim
Manipulate the DOM, validate input, store text and build a small quiz.

## 3. Software / Tools Required
JavaScript, Node.js, Visual Studio Code and a web browser (for HTML/DOM experiments).

## 4. Theory
The DOM represents an HTML page as objects. JavaScript can select elements, change content and respond to events. Validation checks user input. localStorage stores text key-value pairs in the browser. Radio buttons let users choose one option.

## 5. Algorithm / Procedure
1. Open the `Lab 9` folder in Visual Studio Code.
2. Create or open the source files specified in the assignment and enter the task programs.
3. Save the files. Run JavaScript files using `node filename.js`; open HTML files in a browser.
4. Check the console/page output against the expected output below.
5. Capture the actual output and save the screenshot in this lab folder.

## 6. Program / Queries / Commands
The following are task-wise program examples for Assignment 9.

```javascript
<!-- Task 1 -->
<h2 id="heading">Welcome</h2><button id="change">Change text</button>
<script>
document.getElementById("change").addEventListener("click",()=>{
 document.getElementById("heading").textContent="Button clicked";
});
</script>

// Task 2 (JavaScript)
function validateForm(name){
 const errors=[];
 if(name.trim()==="") errors.push("Name is required");
 return errors;
}
console.log(validateForm("Asha"));
console.log(validateForm(""));

// Task 3 (HTML + JavaScript)
<input id="note"><button id="save">Save</button>
<script>
const box=document.getElementById("note");
box.value=localStorage.getItem("note")||"";
document.getElementById("save").onclick=()=>localStorage.setItem("note",box.value);
</script>

// Task 4: use a question, radio inputs named answer with values 4, 5, 6,
// and a Check answer button. On click, show Correct only when value 5 is selected.
```

## 7. Input
Heading Welcome; valid name Asha; quiz answer is 5; note field accepts user text.

## 8. Output
Expected output:

```text
Task 1: Welcome changes to Button clicked after click.
Task 2: [] for Asha; [Name is required] for empty input.
Task 3: Saved text remains in the box after reopening the page.
Task 4: Correct for choice 5; Try again otherwise.
```

For browser-based tasks, observe the rendered page and/or browser developer console. Save your actual output screenshots in this lab folder.

## 9. Result
The experiment was performed using JavaScript. The concepts of **DOM, Validation, Storage and Quiz** were implemented and the expected behaviour was observed.

## 10. Viva-Voce Questions
1. 1. What is DOM?
2. 2. What is an event listener?
3. 3. What is validation?
4. 4. What is localStorage?
5. 5. What are radio buttons?
