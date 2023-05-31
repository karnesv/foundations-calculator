let num1;
let num2;
let num3;
let operator;

function add(num1, num2){   
    return num3 = num1 + num2;
}
function subtract(num1, num2){
    return num3 = num1 - num2;
}
function multiply(num1, num2){
    return num3 = num1 * num2;
}
function divide(num1, num2){
    return num3 = num1 / num2;
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

// collect button names
const coll = buttons.querySelectorAll('button');
const collection = {};
function collect(){
    for (let c of coll){
        collection[c.textContent] = c.textContent;
    }
}
collect()

// main button event listener
buttons.addEventListener('click', btnClick)
function btnClick(e){
    console.log(e.target.className)
    if(e.target.className !== "button"){
        // e.stopPropagation();
        return;
    }
    if(displayContent.textContent === 'Calculator'){
        displayContent.textContent = '';
    }
    if(e.target.className === "num"){
        let dispNum = e.target.textContent;
        console.log(dispNum)
        num(e.target.textContent)
    }
    if(e.target.className === "opera"){
        let dispOpera = e.target.textContent;
        opera(e.target.textContent)
    }
    if(e.target.className === "equal"){
        let dispEqual = e.target.textContent;
        equal()
    }
    if(e.target.className === "clear"){
        let clearFunc = e.target.textContent;
        clear();
    }
    displayContent.textContent = e.target.textContent;
}

function num (n){
    if(num3){
        num1 = num3;
        num2 = n;
        operate(operator, num1, num2);
    }
    if(num2 === undefined && num1){
        num2 = n;
        operate(operator, num1, num2);
    }
    if(!num1){
        num1 = n;
    }
    displayContent.textContent = num1 + (operator ? operator : "") + (num2 ? num2 : "");

}

function opera (o){
    if(!operator){
        const opList = {
            "+": add,
            "&#120;": multiply,
            "&#45;": subtract,
            "÷": divide
        };
        if(o === opList[o]){
            operator = opList[o];
        };   
    }
    displayContent.textContent = num1 + (operator ? operator : "") + (num2 ? num2 : "");
}

function equal (){
    operate(operator, num1, num2)
    displayContent.textContent = num3;
}

function clear (){
    num1 = undefined;
    num2 = undefined;
    num3 = undefined;
    operator = undefined;
    displayContent.textContent = 'Calculator';
}

 
// 1. num1
// 2. op
// 3. num2

// a. op || equal
//    num3 = num1(+-*/)num2
//    num1 = num3

//     repeat

// et nummer av gangen
//     2
// +       ikke vises
//     3
// uansett hvilken operator,
// summering vil skje
//     5



// {
//     "0": "0",
//     "1": "1",
//     "2": "2",
//     "3": "3",
//     "4": "4",
//     "5": "5",
//     "6": "6",
//     "7": "7",
//     "8": "8",
//     "9": "9",
//     "AC": "AC",
//     "e": "e",
//     "÷": "÷",
//     "&#120;": "&#120;",
//     "&#45;": "&#45;",
//     "+": "+",
//     ".": ".",
//     "=": "="
// }

/* 

Add a “clear” button.

Create the functions that populate the display when you click the number buttons.
You should be storing the ‘display value’ in a variable somewhere for use in the next step.

Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator,
and also save which operation has been chosen and then operate() on them when the user presses the “=” key.
You should already have the code that can populate the display,
so once operate() has been called, update the display with the ‘solution’ to the operation.

This is the hardest part of the project.
You need to figure out how to store all the values and call the operate function with them.
Don’t feel bad if it takes you a while to figure out the logic.

Gotchas: watch out for and fix these bugs if they show up in your code:
Users should be able to string together several operations and get the right answer,
with each pair of numbers being evaluated at a time.
For example, 12 + 7 - 5 * 3 = should yield 42. An example of the behavior we’re looking for would be this student solution.

Your calculator should not evaluate more than a single pair of numbers at a time.
Example: you press a number button (12), followed by an operator button (+),
a second number button (7), and finally a second operator button (-).
Your calculator should then do the following:
first, evaluate the first pair of numbers (12 + 7), second,
display the result of that calculation (19),
and finally, use that result (19) as the first number in your new calculation,
along with the next operator (-).

You should round answers with long decimals so that they don’t overflow the screen.
Pressing = before entering all of the numbers or an operator could cause problems!
Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear”
Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!

Extra Credit
Users can get floating point numbers if they do the math required to get one,
but they can’t type them in yet.
Add a . button and let users input decimals! Make sure you don’t let them type more than one though: 12.3.56.5.
It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display)

Make it look nice! This is a great project to practice your CSS skills.
At least make the operations a different color from the keypad buttons.
Add a “backspace” button, so the user can undo if they click the wrong number.
Add keyboard support! You might run into an issue where keys such as (/) might cause you some trouble.
Read the MDN documentation for event.preventDefault to help solve this problem.

 */