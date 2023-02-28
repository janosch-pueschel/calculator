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
const moduloBtn = document.getElementById("modulo-btn");
const resultBtn = document.getElementById("result-btn");
const decimalBtn = document.getElementById("decimal-btn");

const currentCalc = document.getElementById("current-calc");

let operatorDisplayed = false;

// function to display numbers  display Element
function displayNumber(number) {
  if (currentCalc.textContent.length > 8) {
    return;
  } else if (
    currentCalc.textContent === "Error: Invalid Input" ||
    resultDisplayed
  ) {
    clearAll();
    currentCalc.textContent = number;
  } else if (operatorDisplayed) {
    currentCalc.textContent = "";
    currentCalc.textContent = number;
    operatorDisplayed = false;
  } else {
    currentCalc.textContent += number;
  }
}

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

// function to display operators on display Element
function displayOperator(operator) {
  currentCalc.textContent = operator;
  operatorDisplayed = true;
}

// function to set numbers
function setNumber() {
  if (resultDisplayed) {
    resultDisplayed = false;
  } else if (operatorDeleted) {
    operatorDeleted = false;
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
}

// function to check if result is valid or invalid
let resultInvalid = false;

function checkResult() {
  if (!isFinite(result)) {
    resultInvalid = true;
    clearAll();
    currentCalc.textContent = "Error: Invalid Input";
  }
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
  } else if (operation.operator === "%") {
    result = operation.numberOne % operation.numberTwo;
  }
  operation.numberOne = result;
  delete operation.numberTwo;
  checkResult();
}

// function to display result
function displayResult() {
  if (resultInvalid) {
    resultInvalid = false;
  } else {
    currentCalc.textContent = result;
    resultDisplayed = true;
  }
}

// functions to store and display last operation
const storedCalc = document.getElementById("stored-calc");
let lastOperation = [];
let operationDisplayed = false;

function storeLastOperation(operator) {
  if (operator === "=") {
    lastOperation.push(currentCalc.textContent);
    lastOperation.push(operator);
    storedCalc.textContent = lastOperation.join(" ");
    lastOperation = [];
  } else {
    lastOperation.push(currentCalc.textContent);
    lastOperation.push(operator);
  }
}

addBtn.addEventListener("click", () => {
  storeLastOperation("+");
  setNumber();
  setOperator("+");
  displayOperator("+");
});

subtractBtn.addEventListener("click", () => {
  storeLastOperation("-");
  setNumber();
  setOperator("-");
  displayOperator("-");
});

divideBtn.addEventListener("click", () => {
  storeLastOperation("÷");
  setNumber();
  setOperator("÷");
  displayOperator("÷");
});

multiplyBtn.addEventListener("click", () => {
  storeLastOperation("×");
  setNumber();
  setOperator("×");
  displayOperator("×");
});

moduloBtn.addEventListener("click", () => {
  storeLastOperation("%");
  setNumber();
  setOperator("%");
  displayOperator("%");
});

resultBtn.addEventListener("click", () => {
  storeLastOperation("=");
  setNumber();
  displayResult();
});

const clearAllBtn = document.getElementById("clear-btn");

function clearAll() {
  operation = {};
  currentCalc.textContent = "";
  storedCalc.textContent = "";
  resultDisplayed = false;
  lastOperation = [];
}

clearAllBtn.addEventListener("click", clearAll);

// funtion to delete last user input
const deleteBtn = document.getElementById("delete-btn");
let operatorDeleted = false;

function deleteLastInput() {
  if (resultDisplayed || currentCalc.textContent === "Error: Invalid Input") {
    return;
  } else if (
    currentCalc.textContent === "+" ||
    currentCalc.textContent === "-" ||
    currentCalc.textContent === "÷" ||
    currentCalc.textContent === "×"
  ) {
    operatorDeleted = true;
    lastOperation.pop();
    operation.operator = "";
    let currentInput = currentCalc.textContent;
    let currentInputArray = currentInput.split("");
    currentInputArray.pop();
    let currentInputModified = currentInputArray.join("");
    currentCalc.textContent = currentInputModified;
  } else {
    let currentInput = currentCalc.textContent;
    let currentInputArray = currentInput.split("");
    currentInputArray.pop();
    let currentInputModified = currentInputArray.join("");
    currentCalc.textContent = currentInputModified;
  }
}

deleteBtn.addEventListener("click", deleteLastInput);