const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

function checkInput(input) {
  const regex = /(^1?\s?\(?\d{3}\)?\s?-?\d{3}\s?-?\d{4}$)/g;

  const noBrackets = input.indexOf("(") === -1 && input.indexOf(")") === -1;
  const twoBrackets = input.indexOf("(") !== -1 && input.indexOf(")") !== -1;

  if (regex.test(input) && (noBrackets || twoBrackets)) {
    resultsDiv.innerText = `Valid US number: ${input}`;
  } else {
    resultsDiv.innerText = `Invalid US number: ${input}`;
  }
}

function processInput() {
  if (userInput.value == "") {
    alert("Please provide a phone number");
  } else {
    checkInput(userInput.value);
  }
}
function clearInput() {
  resultsDiv.innerText = "";
  userInput.value = "";
}

checkBtn.addEventListener("click", processInput);
clearBtn.addEventListener("click", clearInput);
