const display = document.querySelector("#display");

//function to add to the display
function appendToDisplay(input) {
  display.value += input;
}

//function to clear to the display
function clearDisplay() {
  display.value = "";
}

//function to operations to the display
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
