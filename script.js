const convertBtn = document.getElementById("convert-btn");
const numberInput = document.getElementById("number");
const output = document.getElementById("output");

const romanNumerals = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};
let numeralString = "";
function convertToRoman(input) {
  for (let numeral in romanNumerals) {
    while (input - romanNumerals[numeral] >= 0) {
      input -= romanNumerals[numeral];
      numeralString += numeral;
    }
  }
  output.innerText = numeralString;
}

function processInput() {
   numeralString = "";
  if (numberInput.value == "") {
    output.innerText = "Please enter a valid number";
  } else if (numberInput.value < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (numberInput.value > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
  } else {
    convertToRoman(numberInput.value);
  }
}

convertBtn.addEventListener("click", processInput);
