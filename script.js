// declaring all variables

const userInput = document.getElementById("userInput");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;

function convert() {
    // convert user input to a number for operations
    temp = Number(userInput.value);

    // checks if the radio button is checked, then performs action accordingly
    if (toFahrenheit.checked) {
        temp = temp * 9 / 5 + 32; // formula 
        temp = temp.toFixed(1); // turns temp to 1 decimal place
        result.textContent = `${temp} in Fahrenheit`; // display output for user
    } else if (toCelcius.checked) {
        temp = (temp - 32) * (5/9); // formula
        temp = temp.toFixed(1); // turns temp to 1 decimal place
        result.textContent = `${temp} in Celcius`; // display output for user
    } else { // will execute if radio is not checked
        result.textContent = "Choose an operation"; 
    }
}