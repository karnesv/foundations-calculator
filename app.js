let num1;
let num2;
let operator;

function add(num1, num2){   
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}

function operate(op, n1, n2){
    operator = op;
    num1 = n1;
    num2 = n2;
    // console.log(operator)
    switch (operator){
        case add:
            return add(num1, num2);
        case subtract:
            return subtract(num1, num2);
        case multiply:
            return multiply(num1, num2);
        case divide:
            return divide(num1, num2);
    }
}

const buttons = document.querySelector('#buttons');
const displayContent = document.querySelector('#display-content');

buttons.addEventListener('click', btnClick)

function btnClick(e){
    if(e.target.className === "button"){
        console.log(e.target.textContent);
        if(displayContent.textContent === 'Calculator'){
            displayContent.textContent = '';
        }
        displayContent.textContent += e.target.textContent;
    }
    e.stopPropagation();
    console.log(displayContent);
    // return displayContent;
}