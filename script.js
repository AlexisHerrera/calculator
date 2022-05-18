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

function getNumberOfDisplay() {
    const displayBoard = document.getElementById('display');
    return Number(displayBoard.innerText);
}

connectButtonsToDisplay();