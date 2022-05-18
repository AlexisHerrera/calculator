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
    return operator(x,y);
}

/* Create board */
function addNumbersButtons(calculator) {
    for (let i = 0; i < 10; i++) {
        let numberButton = document.createElement("button");
        numberButton.innerText = `${i}`;
        calculator.append(numberButton);
    }
}

function addOperatorsButtons(operators_container) {
    const operators = [add, substract, multiply, divide];
    operators.forEach(function(operator) {
        let operatorButton = document.createElement("button");
        operatorButton.innerText = operator.name;
        operators_container.append(operatorButton);
    });
}

/* ToDo/evaluate:
1. Class name to data-number?
2. Use only html to buttons, display, etc.?
3. If not doing 2), move to another js file to make the grid? */
const numbers = document.querySelector('.numbers');
const operators = document.querySelector('.operators');

addNumbersButtons(numbers);
addOperatorsButtons(operators);
