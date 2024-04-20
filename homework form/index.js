// Task 1
// const myForm = document.getElementById("myForm");
// const boxTemplate = document.getElementById("boxTemplate");
// const spn = document.getElementById("spn");
// const paragraf = document.getElementById("paragraf");
// const boxInput = document.getElementById("boxInput");
// const input = document.getElementById("input");
// const textArea = document.getElementById("textArea");
// const btn = document.getElementById("btn");

// let obj = {};
// let arr = [];

// myForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const data = new FormData(myForm);
//   const formValues = {};
//   for (let [key, value] of data.entries()) {
//     formValues[key] = value;
//   }
//   console.log("Form Value", formValues);
//   arr.push(formValues);
//   console.log("Array", arr);
//   console.log(data);
// });

// btn.addEventListener("click", () => {
//   let inputText = input.value;
//   let textAreaText = textArea.value;
//   const currentDate= new Date()
//   const formattedDateTime = currentDate.toLocaleString()
//   console.log(formattedDateTime);

//   const newOutput = document.createElement("div");
//   const newSpan = document.createElement("span");
//   const newParagraf = document.createElement("p");
//   const secondParagraf = document.createElement("p");
//   const line= document.createElement("hr")
//   newOutput.classList.add("newDiv")
//   newSpan.classList.add("newStyleSpan")
//   newParagraf.classList.add("newStyleP")
//   secondParagraf.classList.add("secondP")
//   newOutput.appendChild(newSpan)
//   newOutput.appendChild(line)
//   newOutput.appendChild(newParagraf)
//   newOutput.appendChild(secondParagraf)
//   boxTemplate.appendChild(newOutput)
//   secondParagraf.innerHTML=formattedDateTime
//   newSpan.innerHTML=inputText;
//   newParagraf.innerHTML=textAreaText
//   textArea.value = "";
//   input.value = "";
// });

// Task 2 :
const form2 = document.getElementById("myForm2");
const textArea2 = document.getElementById("txtArea");
const btn2 = document.getElementById("btnForm2");
const inputBold = document.getElementById("bold");
const inputUnderline = document.getElementById("underline");
const inputItalics = document.getElementById("italics");
const inputLeft = document.getElementById("left");
const inputRight = document.getElementById("right");
const inputJustify = document.getElementById("justify");

const inputs = document.querySelectorAll(".inputs");

form2.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(textArea2.value);
});

inputs.forEach((input) => {
  input.addEventListener("change", () => {
    updateTextStyle();
  });
});

function updateTextStyle() {
  textArea2.style.fontWeight = inputBold.checked ? "bold" : "normal";
  textArea2.style.textDecoration = inputUnderline.checked
    ? "underline"
    : "normal";
  textArea2.style.fontStyle = inputItalics.checked ? "italic" : "normal";

  if (inputLeft.checked) {
    textArea2.style.textAlign = "left";
  } else if (inputRight.checked) {
    textArea2.style.textAlign = "right";
  } else if (inputJustify.checked) {
    textArea2.style.textAlign = "justify";
  } else {
    textArea2.style.textAlign = "initial";
  }
}

// Task 3

const form3 = document.getElementById("myForm3");
const next = document.getElementById("btnNext");
const finish = document.getElementById("btnFinish");
const answer = document.getElementById("answer");
const result = document.getElementById("result");
const quiz1 = document.getElementById("quiz1");
const quiz2 = document.getElementById("quiz2");

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");

form3.addEventListener("submit", (e) => {
  e.preventDefault();
  checkAnswers();
});

quiz2.style.display = "none";
next.addEventListener("click", () => {
  quiz1.style.display = "none";
  quiz2.style.display = "flex";
});

finish.addEventListener("click", () => {
  quiz1.style.display = "none";
  quiz2.style.display = "none";
});

let correctAnswers = 0;

function checkAnswers() {
  console.log("Input 1 checked:", input1.checked);
  console.log("Input 4 checked:", input4.checked);
  if (input1.checked) {
    correctAnswers++;
  } else if (input4.checked) {
    correctAnswers++;
  }
  displayResult();
}

function displayResult() {
  console.log(123);
  answer.innerHTML = `${correctAnswers} correct answer to 2 question`;
}

// Task 4
const myForm4 = document.getElementById("myForm4");
const select = document.getElementById("select");
const inputDate = document.getElementById("date");
const btnSearch = document.getElementById("btnSearch");
const inputSeats = document.querySelectorAll(".seats");
const btnBook = document.getElementById("btnBook");
const spnBook = document.getElementById("spnBook");
const table = document.getElementById("table");
const labelForm4 = document.querySelectorAll(".labelForm4");

myForm4.addEventListener("submit", (e) => {
  e.preventDefault();
  addTable();
});

function addTable() {
  const newTr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");

  table.appendChild(newTr);
  newTr.appendChild(td1);
  newTr.appendChild(td2);
  newTr.appendChild(td3);

  td1.classList.add("newth");
  td2.classList.add("newth");
  td3.classList.add("newth");

  td1.innerHTML = select.value;
  td2.innerHTML = inputDate.value;

  inputSeats.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.checked) {
        td3.innerHTML = item.value;
      }
    });
  });
}
