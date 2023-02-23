// number buttons
const zeroBtn = document.getElementById("zero-btn");
const oneBtn = document.getElementById("one-btn");
const twoBtn = document.getElementById("two-btn");
const threeBtn = document.getElementById("three-btn");
const fourBtn = document.getElementById("four-btn");
const fiveBtn = document.getElementById("five-btn");
const sixBtn = document.getElementById("six-btn");
const sevenBtn = document.getElementById("seven-btn");
const eightBtn = document.getElementById("eight-btn");
const nineBtn = document.getElementById("nine-btn");

// mathematical operator buttons
const addBtn = document.getElementById("add-btn");
const subtractBtn = document.getElementById("subtract-btn");
const divideBtn = document.getElementById("divide-btn");
const multiplyBtn = document.getElementById("multiply-btn");
const resultBtn = document.getElementById("result-btn");

// display element
const currentCalc = document.getElementById("current-calc")

function addToDisplay(character) {
  currentCalc.textContent += character;
  console.log("button clicked")
}

zeroBtn.addEventListener("click", () => {
    addToDisplay(0)
});

oneBtn.addEventListener("click", () => {
  addToDisplay(1);
});

twoBtn.addEventListener("click", () => {
  addToDisplay(2);
});

threeBtn.addEventListener("click", () => {
  addToDisplay(3);
});

fourBtn.addEventListener("click", () => {
  addToDisplay(4);
});

fiveBtn.addEventListener("click", () => {
  addToDisplay(5);
});

sixBtn.addEventListener("click", () => {
  addToDisplay(6);
});

sevenBtn.addEventListener("click", () => {
  addToDisplay(7);
});

eightBtn.addEventListener("click", () => {
  addToDisplay(8);
});

nineBtn.addEventListener("click", () => {
  addToDisplay(9);
});

addBtn.addEventListener("click", () => {
  addToDisplay("+");
});

subtractBtn.addEventListener("click", () => {
  addToDisplay("-");
});

divideBtn.addEventListener("click", () => {
  addToDisplay("÷");
});

multiplyBtn.addEventListener("click", () => {
  addToDisplay("×");
});