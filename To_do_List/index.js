let data;
const input = document.getElementsByTagName("input")
const btn1= document.getElementById("add")
const tasks=document.getElementById("tasks")
btn1.addEventListener("click",getdata)


function getdata(){
           data=input[0].value
           input[0].value=""

           let task = document.createElement("div");
           task.classList.add("task");
    
           let p = document.createElement("p");

           let del = document.createElement("button");
           del.addEventListener("click",()=>{
                 task.remove()
           })
           p.textContent=data
           del.textContent="delete"

          task.appendChild(p)
          task.appendChild(del)
          tasks.appendChild(task)

}




// 1. Why do we use appendChild()?

// Suppose you write:

// let p = document.createElement("p");
// p.textContent = "Learn JavaScript";

// What have you done?

// You have created a paragraph.

// But where is it?

// It is not on the webpage.

// It exists only in JavaScript memory.

// Think of it like this:

// JavaScript Memory

// p
// ↓

// <p>Learn JavaScript</p>

// The browser doesn't know where to display it.

// Now you write:

// tasks.appendChild(p);

// This means:

// Put this paragraph inside the tasks div.

// Before:

// <div id="tasks">

// </div>

// After:

// <div id="tasks">

//     <p>Learn JavaScript</p>

// </div>

// Now it becomes visible.

// 2. Why do we write
// task.appendChild(p);
// task.appendChild(del);

// instead of

// tasks.appendChild(p);
// tasks.appendChild(del);

// Because we want one task to contain its own paragraph and button.

// Think of it like a folder.

// Task Folder
// │
// ├── Paragraph
// └── Delete Button

// Then we place that folder into the task list.

// Task List
// │
// ├── Task 1
// │      ├── Paragraph
// │      └── Delete
// │
// ├── Task 2
// │      ├── Paragraph
// │      └── Delete

// If you don't create the task <div>, then everything is mixed together.

// 3. Why is the Delete button's event listener inside getdata()?

// You wrote:

// let del = document.createElement("button");

// This button does not exist until the user clicks Add.

// Timeline:

// Page Opens

// ↓

// No Delete Button

// ↓

// User clicks Add

// ↓

// JavaScript creates Delete Button

// So when the button is created, we immediately tell it:

// del.addEventListener("click", ...);

// which means:

// "Whenever this button is clicked, run this code."

// 4. Does the event listener run automatically?

// No.

// This line:

// del.addEventListener("click", () => {
//     task.remove();
// });

// does not remove anything immediately.

// It only tells the button:

// If someone clicks you later,

// ↓

// run this function.

// Think of it like attaching instructions to the button.

// 5. Why does each Delete button remove only its own task?

// Suppose you add two tasks.

// First click:

// Learn JavaScript

// JavaScript creates:

// task1

// ↓

// Delete button 1

// and attaches:

// () => {
//     task.remove();
// }

// Here, task means task1.

// Second click:

// Learn CSS

// JavaScript creates:

// task2

// ↓

// Delete button 2

// and attaches:

// () => {
//     task.remove();
// }

// Now task means task2.

// So:

// Delete Button 1
//       │
//       ▼
// Removes Task 1

// Delete Button 2
//       │
//       ▼
// Removes Task 2

// Each button gets its own event listener when it is created.

// One sentence to remember
// createElement() → Creates an HTML element in JavaScript memory.
// appendChild() → Places that element into the webpage (inside another element).
// addEventListener() → Attaches a future action to that specific element. It does not execute immediately; it waits until the specified event (like a click) happens.