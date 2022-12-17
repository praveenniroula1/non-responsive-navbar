const buttons = document.querySelectorAll(".btn-area>div");
console.log(buttons); // returns a node list of all the buttons
const display = document.querySelector(".display");
console.log(display);

const btnArr = Array.from(buttons); //convert node list to array
console.log(btnArr);

let displayValue = "";
let operators = ["+", "-", "*", "/"];
let lastOperator = "";
