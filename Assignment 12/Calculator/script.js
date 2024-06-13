// Select the display element and all buttons
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

// Define special characters and initialize the output
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

// Define the calculate function to handle button clicks
function calculate(btnValue) {
  display.focus(); // Focus the display element

  switch (btnValue) {
    case "=":
      if (output) {
        // Replace '%' with '/100' and evaluate the expression
        output = eval(output.replace("%", "/100"));
      }
      break;
    case "AC":
      // Clear the output
      output = "";
      break;
    case "DEL":
      // Delete the last character from the output
      output = output.slice(0, -1);
      break;
    default:
      // Prevent starting with a special character
      if (!(output === "" && specialChars.includes(btnValue))) {
        // Add the button value to the output
        output += btnValue;
      }
  }

  // Update the display with the current output
  display.value = output;
}

// Add event listeners to all buttons
buttons.forEach(button => {
  button.addEventListener("click", e => calculate(e.target.dataset.value));
});
