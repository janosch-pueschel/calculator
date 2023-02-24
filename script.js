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
const decimalBtn = document.getElementById("decimal-btn");

// display element
const currentCalc = document.getElementById("current-calc");

let operatorDisplayed = false;

function displayNumber(number) {
  if (operatorDisplayed) {
    currentCalc.textContent = "";
    currentCalc.textContent = number;
    operatorDisplayed = false;
  } else {
    currentCalc.textContent += number;
  }
}

function displayOperator(operator) {
  currentCalc.textContent = operator;
  operatorDisplayed = true;
}

function displayResult() {}

zeroBtn.addEventListener("click", () => {
  displayNumber(0);
});

oneBtn.addEventListener("click", () => {
  displayNumber(1);
});

twoBtn.addEventListener("click", () => {
  displayNumber(2);
});

threeBtn.addEventListener("click", () => {
  displayNumber(3);
});

fourBtn.addEventListener("click", () => {
  displayNumber(4);
});

fiveBtn.addEventListener("click", () => {
  displayNumber(5);
});

sixBtn.addEventListener("click", () => {
  displayNumber(6);
});

sevenBtn.addEventListener("click", () => {
  displayNumber(7);
});

eightBtn.addEventListener("click", () => {
  displayNumber(8);
});

nineBtn.addEventListener("click", () => {
  displayNumber(9);
});

decimalBtn.addEventListener("click", () => {
  displayNumber(".");
});

let operation = {};
let result;
let resultDisplayed = false;

// function to set numbers
function setNumber() {
  if (resultDisplayed) {
    resultDisplayed = false;
  } else if (!Object.hasOwn(operation, "numberOne")) {
    operation.numberOne = Number(currentCalc.textContent);
  } else if (!Object.hasOwn(operation, "numberTwo")) {
    operation.numberTwo = Number(currentCalc.textContent);
    operate();
  }
}

// function to set operator
function setOperator(operator) {
  operation.operator = operator;
  console.log(operation);
}

// function for mathematical operations
function operate() {
  if (operation.operator === "+") {
    result = operation.numberOne + operation.numberTwo;
  } else if (operation.operator === "-") {
    result = operation.numberOne - operation.numberTwo;
  } else if (operation.operator === "÷") {
    result = operation.numberOne / operation.numberTwo;
  } else if (operation.operator === "×") {
    result = operation.numberOne * operation.numberTwo;
  }
  operation.numberOne = result;
  delete operation.numberTwo;
}

// function to display result
function displayResult() {
  currentCalc.textContent = result;
  resultDisplayed = true;
}

addBtn.addEventListener("click", () => {
  setNumber();
  setOperator("+");
  displayOperator("+");
});

subtractBtn.addEventListener("click", () => {
  setNumber();
  setOperator("-");
  displayOperator("-");
});

divideBtn.addEventListener("click", () => {
  setNumber();
  setOperator("÷");
  displayOperator("÷");
});

multiplyBtn.addEventListener("click", () => {
  setNumber();
  setOperator("×");
  displayOperator("×");
});

resultBtn.addEventListener("click", () => {
  setNumber();
  displayResult();
});