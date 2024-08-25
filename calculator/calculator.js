const readline = require("readline-sync");
function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return num1 / num2
}

const num1 = parseFloat(readline.question('Please enter your first number: '));
const num2 = parseFloat(readline.question('Please enter your second number: '));
const operation = readline.question('Please enter the operation to perform (add, sub, mul, div): ').toLowerCase();

let result;

switch (operation) {
  case 'add':
    result = add(num1, num2);
    break;
  case 'sub':
    result = subtract(num1, num2);
    break;
  case 'mul':
    result = multiply(num1, num2);
    break;
  case 'div':
    result = divide(num1, num2);
    break;
  default:
    result = 'Error: Invalid operation.';
}

console.log(`The result is: ${result}`);