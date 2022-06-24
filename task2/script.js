let num1 = Number(prompt('Enter first number'));
let operator = prompt('Enter operator (+, -, *, /)');
let num2 = Number(prompt('Enter second number'));
let result; 

function arithmetic() { 
    if (operator == '+') {
        result = num1 + num2;
    } else if (operator == '-'){
        result = num1 - num2;
    } else if (operator == '*') {
        result = num1 * num2;
    } else if (operator == '/') {
        result = num1 / num2;
    }
    alert(`The result of your simple arithmetic calculation is ${result}`)
}
arithmetic();