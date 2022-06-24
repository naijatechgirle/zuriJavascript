// prompt('Welcome to my simple arithmetic calculator, what operations do you perform?');
// prompt(`first number = ${num1}`)

function arithmetic() {
    let num1 = Number(prompt('Enter first number'));
    let operator = prompt('Enter operator (+, -, *, /)');
    let num2 = Number(prompt('Enter second number'));
    let result;
    if (operator == '+') {
        result = num1 + num2;
    } else if (operator == '-'){
        result = num1 - num2;
    } else if (operator == '*') {
        result = num1 * num2;
    } else if (operator == '/') {
        result = num1 / num2;
    }
    alert(`'The result of your simple arithmetic calculation is ' ${result}`)
}
arithmetic();





// using a function to represent the code above
// function addNum(num1, operator, num2) {
    // if(operator == '+') {
    //     result = num1 + num2;
    //     console.log(typeof(num1));
    // } 
    // else {
    //     result = num1 - num2;
    // }
    // else if(operator == '*') {
    //     result = num1 * num2;
    // } else(operator == '/'); {
    //     result = num1 / num2;
    // }
    // console.log(result);
// }
// addNum(2, '-', 1);
// alert(fullAdd);