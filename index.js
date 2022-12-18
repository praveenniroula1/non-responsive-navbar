const buttons = document.querySelectorAll(".btn-area>div");
console.log(buttons); // returns a node list of all the buttons
const display = document.querySelector(".display");
console.log(display);

const btnArr = Array.from(buttons); //convert node list to array
console.log(btnArr);

let displayValue = "";
let operators = ["+", "-", "*", "/"];
let lastOperator = "";


const displayElm = (str) => { // displayElm is a function that takes a string and displays it on the screen
    display.innerText = str || "0.00"
}

btnArr.forEach((btn) => {
    btn.addEventListener('click', function () {
        const value = btn.innerText;
        // console.log(value);
        displayValue.innerText = value;

        if (value === "AC") {
            displayValue = "";
            displayElm(displayValue);
            return;
        }