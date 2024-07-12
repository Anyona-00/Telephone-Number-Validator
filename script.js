const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultDiv = document.getElementById("results-div");

const checkUserInput = () => {
  const input = userInput.value.trim();

  if (input === "") {
    alert("Please provide a phone number");
    return;
  }

  let regexes = [
    /^1 \d{3}-\d{3}-\d{4}$/,
    /^1 \(\d{3}\) \d{3}-\d{4}$/,
    /^\d{10}$/,
    /^\d{3}-\d{3}-\d{4}$/,
    /^\(\d{3}\)\d{3}-\d{4}$/,
    /^1\(\d{3}\)\d{3}-\d{4}$/,
    /^1 \d{3} \d{3} \d{4}$/,
  ];

  let isValid = false;

  for (let i = 0; i < regexes.length; i++) {
    if (regexes[i].test(input)) {
      isValid = true;
      break;
    }
  }

  if (isValid) {
    resultDiv.textContent = `Valid US number: ${input}`;
  } else {
    resultDiv.textContent = `Invalid US number: ${input}`;
  }
};



const clear = () => {
  resultDiv.textContent = "";
  userInput.value = "";
};

checkBtn.addEventListener("click", checkUserInput);
clearBtn.addEventListener("click", clear);
