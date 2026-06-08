// Get input boxes
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");

// Get output spans
const sign = document.getElementById("sign");
const answer = document.getElementById("answer");

// Get buttons
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const clear = document.getElementById("clear");

// Check if both input boxes have numbers
function validateInputs() {
  if (box1.value.trim() === "" || box2.value.trim() === "") {
    alert("Please enter numbers");
    return false;
  }

  return true;
}

// Add
add.addEventListener("click", function () {
  if (validateInputs() === false) return;

  sign.textContent = "+";
  answer.textContent = parseFloat(box1.value) + parseFloat(box2.value);
});

// Subtract
subtract.addEventListener("click", function () {
  if (validateInputs() === false) return;

  sign.textContent = "-";
  answer.textContent = parseFloat(box1.value) - parseFloat(box2.value);
});

// Multiply
multiply.addEventListener("click", function () {
  if (validateInputs() === false) return;

  sign.textContent = "x";
  answer.textContent = parseFloat(box1.value) * parseFloat(box2.value);
});

// Divide
divide.addEventListener("click", function () {
  if (validateInputs() === false) return;

  if (parseFloat(box2.value) === 0) {
    alert("cannot divide by zero");
    return;
  }

  sign.textContent = "÷";
  answer.textContent = parseFloat(box1.value) / parseFloat(box2.value);
});

// Clear everything
clear.addEventListener("click", function () {
  box1.value = "";
  box2.value = "";
  sign.textContent = "";
  answer.textContent = "";
});