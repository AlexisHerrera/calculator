/* Operators and operations*/
function add(x, y) {
    return x + y;
}

function substract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(operator, x, y) {
    return operator(x, y);
}

/* Wire buttons to display */
function placeNumberInDisplay(content) {
    const displayBoard = document.getElementById('display');
    displayBoard.innerText += content;
}

function connectButtonsToDisplay() {
    const numberButtons = document.querySelectorAll('[data-number]');
    numberButtons.forEach(button =>
        button.addEventListener('click', () => placeNumberInDisplay(button.dataset.number))
        )
}

function getOperator(operatorName) {
    switch (operatorName) {
        case 'add':
            return add;
        case 'substract':
            return substract;
        case 'multiply':
            return multiply;
        case 'divide':
            return divide;
        default:
            return null;
      }
}

function existsAnStartedCalculation() {
    const leftOperandElement = document.getElementById('left-operand');
    const operatorElement = document.getElementById('operator');
    return leftOperandElement.innerText !== "" && operatorElement.innerText !== "";
}

function executeOperation(operatorName) {
    if (existsAnStartedCalculation()) {
        completeOperation();
    }

    // Save base operand
    const leftOperandElement = document.getElementById('left-operand');
    leftOperandElement.innerText = getNumberOfDisplay();
    // Save operator
    const operatorElement = document.getElementById('operator');
    operatorElement.innerText = operatorName;
    // Clear -- FOR NOW --
    const displayBoard = document.getElementById('display');
    displayBoard.innerText = "";
}

function connectOperatorsToDisplay() {
    const operatorsButtons = Array.from(document.getElementById('operators').getElementsByTagName('button'));
    operatorsButtons.forEach(button =>
        button.addEventListener('click',() => executeOperation(button.id))
         );
}


function getNumberOfDisplay() {
    const displayBoard = document.getElementById('display');
    return Number(displayBoard.innerText);
}

function completeOperation() {
    const displayBoard = document.getElementById('display');
    const leftOperandElement = document.getElementById('left-operand');
    const operatorElement = document.getElementById('operator');
    // Get values
    let leftOperand = Number(leftOperandElement.innerText);
    let operator = getOperator(operatorElement.innerText);
    let rightOperand = getNumberOfDisplay();
    // Calculate and display
    let result = operate(operator, leftOperand, rightOperand);
    displayBoard.innerText = result;
}

function connectEqualsToDisplay() {
    const equalsButton = document.getElementById('equals');
    equalsButton.addEventListener('click', completeOperation);
}

connectButtonsToDisplay();
connectOperatorsToDisplay();
connectEqualsToDisplay();

// Accesors
// const displayBoard = document.getElementById('display');
// const numberButtons = document.querySelectorAll('[data-number]');

