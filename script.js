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
// Accesors
// const displayBoard = document.getElementById('display');
// const numberButtons = document.querySelectorAll('[data-number]');

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
// // First get operator
// let operator = getOperator(operatorName);
// if (!operator) return null;

function startOperation(operatorName) {
    // Save base operand
    const displayBoard = document.getElementById('display');
    displayBoard.dataset.leftOperand = getNumberOfDisplay();
    // Save operator
    displayBoard.dataset.operator = operatorName;
    // Clear -- FOR NOW -- 
    displayBoard.innerText = "";
}

function connectOperatorsToDisplay() {
    const operatorsButtons = Array.from(document.getElementById('operators').getElementsByTagName('button'));
    operatorsButtons.forEach(button =>
        button.addEventListener('click',() => startOperation(button.id))
         );
}


function getNumberOfDisplay() {
    const displayBoard = document.getElementById('display');
    return Number(displayBoard.innerText);
}

function completeOperation() {
    const displayBoard = document.getElementById('display');
    // Get values
    let leftOperand = Number(displayBoard.dataset.leftOperand);
    let operator = getOperator(displayBoard.dataset.operator);
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