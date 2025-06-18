// تحديد العناصر
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");

let currentInput = ""; 

buttons.forEach((button) => {
  const value = button.dataset.value;

  if (value !== undefined) {
    button.addEventListener("click", () => {
      currentInput += value;
      display.textContent = currentInput;
    });
  }
});

equal.addEventListener("click", () => {
  try {
    const result = eval(currentInput); 
    if(typeof result === "float"){display.textContent = (result).toFixed(5);}
    else{display.textContent = result;}
    currentInput = result.toString(); 
  } catch (error) {
    display.textContent = "Error";
    currentInput = "";
  }
});

clear.addEventListener("click", () => {
  currentInput = "";
  display.textContent = "0";
});
