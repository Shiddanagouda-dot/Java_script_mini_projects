const h=document.getElementById("h")
const di=document.getElementById("div")
const l1 = document.getElementById("l1");
const l2 = document.getElementById("l2");
const l3 = document.getElementById("l3");
const l4 = document.getElementById("l4");
const btn = document.getElementById("btn")
const radios = document.querySelectorAll('input[name="option"]');

const op1 = document.getElementById("op1");
const op2 = document.getElementById("op2");
const op3 = document.getElementById("op3");
const op4 = document.getElementById("op4");
let currentQuestion=0
let score=0
const quiz = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Chennai", "Hyderabad"],
    answer: "Delhi"
  },
  {
    question: "Which language runs in the browser?",
    options: ["Python", "Java", "C++", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Markup Language",
      "Home Text Markup Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which CSS property changes text color?",
    options: ["background-color", "font-size", "color", "border"],
    answer: "color"
  },
  {
    question: "Which company developed Java?",
    options: ["Microsoft", "Sun Microsystems", "Google", "Apple"],
    answer: "Sun Microsystems"
  },
  {
    question: "Which data structure works on LIFO?",
    options: ["Queue", "Stack", "Linked List", "Tree"],
    answer: "Stack"
  },
  {
    question: "Which algorithm is used to find the shortest path in a weighted graph?",
    options: ["DFS", "BFS", "Dijkstra", "Kruskal"],
    answer: "Dijkstra"
  },
  {
    question: "Which keyword is used to declare a constant in JavaScript?",
    options: ["var", "let", "const", "static"],
    answer: "const"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["<!-- -->", "//", "#", "/*# */"],
    answer: "//"
  },
  {
    question: "Which method converts a JSON string into a JavaScript object?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "parseJSON()",
      "toObject()"
    ],
    answer: "JSON.parse()"
  }
];

displayQusetion();

btn.addEventListener("click",nextquestion)


function displayQusetion(){
  
  if (currentQuestion<quiz.length){
  h.textContent=quiz[currentQuestion].question;
  l1.textContent = quiz[currentQuestion].options[0];
  l2.textContent = quiz[currentQuestion].options[1];
  l3.textContent = quiz[currentQuestion].options[2];
  l4.textContent = quiz[currentQuestion].options[3];
  op1.value = quiz[currentQuestion].options[0];
  op2.value = quiz[currentQuestion].options[1];
  op3.value = quiz[currentQuestion].options[2];
  op4.value = quiz[currentQuestion].options[3];
  }
  else
{
  di.style.display = "none";
  h.textContent=`text completed your score is ${score}/ ${quiz.length}`;  
}

}

function nextquestion(e){
  if (currentQuestion >= quiz.length) {
    return;
}
  let selectedAnswer = "";
    for (const radio of radios) {
        if (radio.checked) {
            selectedAnswer = radio.value;
         }
      
      }
      for (const radio of radios) {
      radio.checked = false;
  }
        if (selectedAnswer === quiz[currentQuestion].answer) {
        score++;
    }
  currentQuestion++
  console.log(score)
  displayQusetion()

}



// Step 1: What is a radio button?

// Initially your HTML is:

// <input type="radio" id="op1" name="option">

// This radio button has:

// id = "op1"
// name = "option"

// But it doesn't have a value.

// So if you do:

// console.log(op1.value);

// The browser prints:

// on

// Why?

// Because every radio button has a default value of "on" if you don't set one.

// Step 2: We change its value

// Suppose the first question is

// Capital of India?

// 1. Mumbai
// 2. Delhi
// 3. Chennai
// 4. Hyderabad

// We write

// op1.value = "Mumbai";
// op2.value = "Delhi";
// op3.value = "Chennai";
// op4.value = "Hyderabad";

// Now the HTML is conceptually like this:

// <input type="radio" value="Mumbai">
// <input type="radio" value="Delhi">
// <input type="radio" value="Chennai">
// <input type="radio" value="Hyderabad">

// Notice that we didn't write these values in the HTML file. We assigned them using JavaScript.

// Step 3: User clicks

// Suppose the user clicks

// ( ) Mumbai
// (●) Delhi
// ( ) Chennai
// ( ) Hyderabad

// Now when your loop runs

// for (const radio of radios) {
//     if (radio.checked) {
//         selectedAnswer = radio.value;
//     }
// }

// it checks every radio button.

// First radio
// radio.checked

// is

// false

// Ignore it.

// Second radio
// radio.checked

// is

// true

// Now JavaScript does
// selectedAnswer = radio.value;
// Since
// radio.value
// is
// Delhi
// we get
// selectedAnswer = "Delhi";
// Step 4: Compare
// Now compare
// selectedAnswer
// with
// quiz[currentQuestion].answer
// Suppose
// quiz[currentQuestion].answer
// is
// Delhi
// Now JavaScript checks
// if ("Delhi" === "Delhi")
// which is
// true
// Therefore
// score++;
// runs.




