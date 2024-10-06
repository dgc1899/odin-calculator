const divCalculator = document.querySelector(".calc-container");
const divResult = document.querySelector(".calc-result-field");

let currentOperation = [undefined, undefined, undefined];

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num1 === 0 || num2 === 0) {
        alert("Ayo");
    }
    else {
        return Math.round((num1 / num2) * 100) / 100;
    }
}

function solve() {
    let operand1 = Number(currentOperation[0]);
    let operand2 = Number(currentOperation[2]);
    if (!currentOperation.includes(undefined)) {
        switch(currentOperation[1]) {
            case "+": 
            currentOperation[0] = add(operand1, operand2);
            break;
            case "-": 
            currentOperation[0] = subtract(operand1, operand2);
            break;
            case "*": 
            currentOperation[0] = multiply(operand1, operand2);
            break;
            case "/": 
            currentOperation[0] = divide(operand1, operand2);
            break;
            default: 
            alert("Invalid operator, please enter a valid operator");
            break;
        }
        currentOperation[1] = undefined;
        currentOperation[2] = undefined;
        updateDisplay(currentOperation);
    }
}

function updateExpression(e) {
    if (e.target.tagName === "BUTTON") {
        if (e.target.classList.contains("calc-operator")) {
            if (!currentOperation.includes(undefined)) {
                solve();
                currentOperation[1] = e.target.value;
            }
            else if (currentOperation[0] != undefined) {
                currentOperation[1] = e.target.value;
            }
        }
        else if (e.target.classList.contains("calc-num")) {
            if (currentOperation[0] == undefined && currentOperation[1] == undefined) {
                currentOperation[0] = e.target.value;
            }
            else if (currentOperation[0] != undefined && currentOperation[1] == undefined) {
                currentOperation[0]+= e.target.value;
            }
            else if (currentOperation[2] == undefined) {
                currentOperation[2] = e.target.value;
            }
            else if (currentOperation != undefined) {
                currentOperation[2]+= e.target.value;
            }
        }
        else if (e.target.classList.contains("calc-equals")) {
            solve();
        }
        else if (e.target.classList.contains("calc-clear")) {
            currentOperation = [undefined, undefined, undefined];
        }

        updateDisplay(currentOperation);
    }
}

function updateDisplay(expression) {
    divResult.textContent = "";
    expression.forEach(element => {
        if (element != undefined) {
            divResult.textContent += element;
        } 
    });
}

divCalculator.addEventListener("click", updateExpression);