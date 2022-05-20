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
/* Helpers*/
function roundToTwo(num) {
    return Math.round( num * 100 + Number.EPSILON ) / 100;
}

/* Getters and setters of HTML*/
function getValueOfDisplay() {
    const displayBoard = document.getElementById('display');
    return displayBoard.innerText;
}

function setInDisplay(content) {
    const displayBoard = document.getElementById('display');
    displayBoard.innerText = content;
    displayBoard.dataset.result = "";
}

function setInDisplayAsResult(content) {
    setInDisplay(content);
    const displayBoard = document.getElementById('display');
    displayBoard.dataset.result = content;
}

function clearPreviousCalculations() {
    const leftOperandElement = document.getElementById('left-operand');
    const operatorElement = document.getElementById('operator');
    leftOperandElement.innerText = "";
    operatorElement.innerText = "";
}

/* Checkers */
function isDisplayAResult() {
    const displayBoard = document.getElementById('display');
    let result = displayBoard.dataset.result;
    return result !== undefined && result !== "";
}
// Warning: Why is different than clearCalculator?
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
    const operatorsButtons = document.querySelectorAll('.operator');
    operatorsButtons.forEach(button =>
        button.addEventListener('click',() => executeOperation(button.id))
         );
}

function connectEqualsToDisplay() {
    const equalsButton = document.getElementById('equals');
    equalsButton.addEventListener('click', completeOperation);
}

function connectClearToDisplay() {
    const equalsButton = document.getElementById('clear');
    equalsButton.addEventListener('click', clearCalculator);
}

function connectDotToDisplay() {
    const dotButton = document.getElementById('dot');
    dotButton.addEventListener('click', addDecimal);
}

function connectBackspaceToDisplay() {
    const backspaceButton = document.getElementById('backspace');
    backspaceButton.addEventListener('click', addBackspace);
}

function connectKeyboardToDisplay() {
    document.addEventListener('keydown', addKeyboard, false);  
}

/* * * * * * * * * * * * * * * * * * *
 *    Events triggered by buttons    *
 * * * * * * * * * * * * * * * * * * *
*/
function placeNumberInDisplay(content) {
    if (isDisplayAResult() || isCalculatorClear()) {
        setInDisplay(content);
    } else {
        setInDisplay(`${getValueOfDisplay()}${content}`);
    }

}

function executeOperation(operatorName) {
    const leftOperandElement = document.getElementById('left-operand');
    const operatorElement = document.getElementById('operator');
    if (existsAnStartedCalculation()) {
        if (isDisplayAResult()) {
            // Only changes operator
            operatorElement.innerText = operatorName;
            return;
        }
        // Should chain previous operation
        // e.g : "10 * 5 +" => 50
        completeOperation();
    }
    // Save left operand
    leftOperandElement.innerText = getValueOfDisplay();
    // Save operator
    operatorElement.innerText = operatorName;
    // Display left operand and set it to "result"
    setInDisplayAsResult(getValueOfDisplay());
}

function completeOperation() {
    const leftOperandElement = document.getElementById('left-operand');
    const operatorElement = document.getElementById('operator');
    if (!existsAnStartedCalculation()) {
        return;
    }
    // Get values
    let leftOperand = Number(leftOperandElement.innerText);
    let operator = getOperator(operatorElement.innerText);
    let rightOperand = Number(getValueOfDisplay());
    // Calculate and display
    let result = operate(operator, leftOperand, rightOperand);
    // Handle errors
    if (!isFinite(result)) {
        alert("Try not to divide by zero, okay?");
        return;
    }
    setInDisplayAsResult(roundToTwo(result));
    // Clear previous calculation
    clearPreviousCalculations();
}

function clearCalculator() {
    clearPreviousCalculations();
    setInDisplay("0");
}

function addDecimal() {
    if (!isDisplayAResult() && getValueOfDisplay().includes('.')) {
        // Adding numbers but it already has a dot
        return;
    }
    if (isDisplayAResult()) {
        setInDisplay(`${0}.`);
    } else {
        setInDisplay(`${getValueOfDisplay()}.`);
    }
}

function addBackspace() {
    if (getValueOfDisplay().length === 0) {
        return;
    }
    setInDisplay(getValueOfDisplay().slice(0, -1));
}

function addKeyboard(event) {
    const key = event.key
    if (isFinite(key)) {
        // It's a number
        placeNumberInDisplay(key);
    } else if (key === "Backspace") {
        addBackspace();
    } else if (key === ".") {
        addDecimal();
    } else if (["=","Enter"].includes(key)) {
        completeOperation();
    } else if (["+","-","*","/"].includes(key)){
        executeOperation(key);
    }
}

/* Parser */
function getOperator(operatorName) {
    switch (operatorName) {
        case '+':
            return add;
        case '-':
            return substract;
        case '*':
            return multiply;
        case '/':
            return divide;
        default:
            return null;
      }
}


/* App */
connectNumberButtonsToDisplay();
connectOperatorsToDisplay();
connectEqualsToDisplay();
connectClearToDisplay();
connectDotToDisplay();
connectBackspaceToDisplay();
connectKeyboardToDisplay();
// Accesors
// const displayBoard = document.getElementById('display');
// const numberButtons = document.querySelectorAll('[data-number]');
