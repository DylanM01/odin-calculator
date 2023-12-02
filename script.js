const display = document.getElementById('display');
let currentInput = '';
let intermediateResult = 0;
let currentOperator = '';

function clearDisplay() {
    display.value = '';
    currentInput = '';
    intermediateResult = 0;
    currentOperator = '';
}

function updateDisplay() {
    display.value = intermediateResult !== 0 ? `${intermediateResult} ${currentOperator} ${currentInput}` : currentInput;
}

function calculate() {
    const currentNumber = parseFloat(currentInput);

    switch (currentOperator) {
        case '+':
            intermediateResult += currentNumber;
            break;
        case '-':
            intermediateResult -= currentNumber;
            break;
        case 'x':
            intermediateResult *= currentNumber;
            break;
        case '÷':
            intermediateResult /= currentNumber;
            break;
        default:
            intermediateResult = currentNumber;
            break;
    }

    currentInput = '';
    currentOperator = ''; // Clear the operator after calculation
    updateDisplay();
}

function setOperator(operator) {
    if (currentInput !== '') {
        calculate();
    }
    currentOperator = operator;
    updateDisplay();
}

document.getElementById('add').addEventListener('click', () => {
    setOperator('+');
});

document.getElementById('clear').addEventListener('click', () => {
    clearDisplay();
});

document.getElementById('subtract').addEventListener('click', () => {
    setOperator('-');
});

document.getElementById('multiply').addEventListener('click', () => {
    setOperator('x');
});

document.getElementById('divide').addEventListener('click', () => {
    setOperator('÷');
});

document.getElementById('zero').addEventListener('click', () => {
    currentInput += '0';
    updateDisplay();
});

document.getElementById('one').addEventListener('click', () => {
    currentInput += '1';
    updateDisplay();
});

document.getElementById('two').addEventListener('click', () => {
    currentInput += '2';
    updateDisplay();
});

document.getElementById('three').addEventListener('click', () => {
    currentInput += '3';
    updateDisplay();
});

document.getElementById('four').addEventListener('click', () => {
    currentInput += '4';
    updateDisplay();
});

document.getElementById('five').addEventListener('click', () => {
    currentInput += '5';
    updateDisplay();
});

document.getElementById('six').addEventListener('click', () => {
    currentInput += '6';
    updateDisplay();
});

document.getElementById('seven').addEventListener('click', () => {
    currentInput += '7';
    updateDisplay();
});

document.getElementById('eight').addEventListener('click', () => {
    currentInput += '8';
    updateDisplay();
});

document.getElementById('nine').addEventListener('click', () => {
    currentInput += '9';
    updateDisplay();
});

document.getElementById('equals').addEventListener('click', () => {
    calculate();
});