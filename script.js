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

/* Getters and setters of HTML*/
function getNumberOfDisplay() {
    const displayBoard = document.getElementById('display');
    return Number(displayBoard.innerText);
}

function setInDisplay(content) {
    const displayBoard = document.getElementById('display');
    displayBoard.innerText = content;
    // This is ugly..
    displayBoard.dataset.result = "";
}

function setInDisplayAsResult(content) {
    setInDisplay(content);
    const displayBoard = document.getElementById('display');
    displayBoard.dataset.result = content;
}

/* Checkers */
function isDisplayAResult() {
    const displayBoard = document.getElementById('display');
    let result = displayBoard.dataset.result;
    return result !== undefined && result !== "";
}

function isCalculatorClear() {
    const displayBoard = document.getElementById('display');
    return displayBoard.innerText == "0";
}

function existsAnStartedCalculation() {
    const leftOperandElement = document.getElementById('left-operand');
    const operatorElement = document.getElementById('operator');
    return leftOperandElement.innerText !== "" && operatorElement.innerText !== "";
}

/* Wire buttons to display */
function connectNumberButtonsToDisplay() {
    const numberButtons = document.querySelectorAll('[data-number]');
    numberButtons.forEach(button =>
        button.addEventListener('click', () => placeNumberInDisplay(button.dataset.number))
        )
}

function connectOperatorsToDisplay() {
    const operatorsButtons = Array.from(document.getElementById('operators').getElementsByTagName('button'));
    operatorsButtons.forEach(button =>
        button.addEventListener('click',() => executeOperation(button.id))
         );
}

function connectEqualsToDisplay() {
    const equalsButton = document.getElementById('equals');
    equalsButton.addEventListener('click', completeOperation);
}

/* Events triggered by buttons */
function placeNumberInDisplay(content) {
    if (isDisplayAResult() || isCalculatorClear()) {
        setInDisplay(content);
    } else {
        setInDisplay(`${getNumberOfDisplay()}${content}`);
    }

}

function executeOperation(operatorName) {
    // Save left operand
    const leftOperandElement = document.getElementById('left-operand');
    leftOperandElement.innerText = getNumberOfDisplay();
    // Save operator
    const operatorElement = document.getElementById('operator');
    operatorElement.innerText = operatorName;
    // Display left operand and set it to "result"
    setInDisplayAsResult(getNumberOfDisplay());
}


// redefine equals (debe limpiar left operand y operator)
// el +,*,/,- debe encadenar (lo mismo que ya hace...)

function completeOperation() {
    const leftOperandElement = document.getElementById('left-operand');
    const operatorElement = document.getElementById('operator');
    // Get values
    let leftOperand = Number(leftOperandElement.innerText);
    let operator = getOperator(operatorElement.innerText);
    let rightOperand = getNumberOfDisplay();
    // Calculate and display. Set it as result
    let result = operate(operator, leftOperand, rightOperand);
    setInDisplay(result);
}

/* Parser */
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
/* App */

connectNumberButtonsToDisplay();
connectOperatorsToDisplay();
connectEqualsToDisplay();
// Accesors
// const displayBoard = document.getElementById('display');
// const numberButtons = document.querySelectorAll('[data-number]');

