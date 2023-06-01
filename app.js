let num1;
let num2;
let num3;
let numStr = '';
let operator;

function add(num1, num2){   
    num3 = Number(num1) + Number(num2);
    displayContent.textContent = (Math.round(num3 * 10) / 10);
}
function subtract(num1, num2){
    num3 = Number(num1) - Number(num2);
    displayContent.textContent = (Math.round(num3 * 10) / 10);
}
function multiply(num1, num2){
    num3 = Number(num1) * Number(num2);
    displayContent.textContent = (Math.round(num3 * 10) / 10);
}
function divide(num1, num2){
    num3 = Number(num1) / Number(num2);
    displayContent.textContent = (Math.round(num3 * 10) / 10);
}

function operate(op, n1, n2){
    if(op === '' || n1 === '' || n2 === ''){
        return;
    }
    operator = op;
    num1 = n1;
    num2 = n2;
    
    switch (operator){
        case add:
            operator = undefined;
            return add(num1, num2);
        case subtract:
            operator = undefined;
            return subtract(num1, num2);
        case multiply:
            operator = undefined;
            return multiply(num1, num2);
        case divide:
            if(num2 <= 0){
                return displayContent.textContent = 'no div zero';
            }
            operator = undefined;
            return divide(num1, num2);
    }
}

const buttons = document.querySelector('#buttons');
const displayContent = document.querySelector('#display-content');

// main button event listener
buttons.addEventListener('click', btnClick)
function btnClick(e){
    
    if(!e.target.classList.contains("button")){
        e.stopPropagation();
        return;
    }
    if(displayContent.textContent === 'Calculator'){
        displayContent.textContent = '';
    }
    if(e.target.classList.contains("num")){
        let dispNum = e.target.textContent;
        return preNum(dispNum);
    }
    num(numStr)
    if(e.target.classList.contains("opera")){
        let dispOpera = e.target.textContent;
        opera(dispOpera);
    }
    if(e.target.classList.contains("equal") && num1 && num2){
        
        equal()
    }
    if(e.target.classList.contains("clear")){
        clear();
    }
    // if(!e.target.classList.contains("equal") && !e.target.classList.contains("clear")){
    //     displayContent.textContent = e.target.textContent;
    // }
}

function preNum(pN){
    numStr += pN;
    displayContent.textContent = numStr;
}

function num (n){
    
    if(num3){
        num1 = num3;
        num2 = numStr;
        operate(operator, num1, num2);
    }
    if((num2 === undefined || num2 === '') && num1){
        num2 = numStr; 
        operate(operator, num1, num2);
    }
    if(!num1){
        num1 = numStr;
    }
    
    numStr = '';
};

function opera (o){
    const opList = {
        "+": add,
        "x": multiply,
        "-": subtract,
        "÷": divide
    };
   
    if (opList[o] !== undefined) {
        operator = opList[o];
    }
}

function equal (){
    operate(operator, num1, num2)
}

function clear (){
    num1 = undefined;
    num2 = undefined;
    num3 = undefined;
    numStr = '';
    operator = undefined;
    displayContent.textContent = 'Calculator';
}

// collect button names
const coll = buttons.querySelectorAll('button');
const collection = {};
function collect(){
    for (let c of coll){
        collection[c.textContent] = c.textContent;
    }
}
collect()

// Add a “clear” button.

// Create the functions that populate the display when you click the number buttons.
// You should be storing the ‘display value’ in a variable somewhere for use in the next step.

// Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator,
// and also save which operation has been chosen and then operate() on them when the user presses the “=” key.
// You should already have the code that can populate the display,
// so once operate() has been called, update the display with the ‘solution’ to the operation.

// This is the hardest part of the project.
// You need to figure out how to store all the values and call the operate function with them.
// Don’t feel bad if it takes you a while to figure out the logic.

// Gotchas: watch out for and fix these bugs if they show up in your code:
// Users should be able to string together several operations and get the right answer,
// with each pair of numbers being evaluated at a time.
// For example, 12 + 7 - 5 * 3 = should yield 42. An example of the behavior we’re looking for would be this student solution.

// Your calculator should not evaluate more than a single pair of numbers at a time.
// Example: you press a number button (12), followed by an operator button (+),
// a second number button (7), and finally a second operator button (-).
// Your calculator should then do the following:
// first, evaluate the first pair of numbers (12 + 7), second,
// display the result of that calculation (19),
// and finally, use that result (19) as the first number in your new calculation,
// along with the next operator (-).

// You should round answers with long decimals so that they don’t overflow the screen.
// Pressing = before entering all of the numbers or an operator could cause problems!
// Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear”
// Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!

// Extra Credit
// Users can get floating point numbers if they do the math required to get one,
// but they can’t type them in yet.
// Add a . button and let users input decimals! Make sure you don’t let them type more than one though: 12.3.56.5.
// It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display)

// Make it look nice! This is a great project to practice your CSS skills.
// At least make the operations a different color from the keypad buttons.
// Add a “backspace” button, so the user can undo if they click the wrong number.
// Add keyboard support! You might run into an issue where keys such as (/) might cause you some trouble.
// Read the MDN documentation for event.preventDefault to help solve this problem.
