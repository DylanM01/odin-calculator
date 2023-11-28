

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let result;
function operate(num1, operator, num2) {
    if (operator == "+") {
        result = add(num1, num2)
        console.log(result)
    } else if (operator == "-") {
        result = subtract(num1, num2)
        console.log(result)
    } else if (operator == "*") {
        result = multiply(num1, num2)
        console.log(result)
    } else {
        result = divide(num1, num2)
        console.log(result)
    }
}

operate(5, "+", 3)
operate(3, "-", 9)