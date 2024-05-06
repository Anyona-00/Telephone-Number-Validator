const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultDiv = document.getElementById("results-div");

const checkUserInput = () => {
  if (userInput.value === "") {
    alert("Please provide a phone number");
  }
};

const clear = () => {
  resultDiv.textContent = "";
};

checkBtn.addEventListener("click", checkUserInput);
clearBtn.addEventListener("click", clear);
