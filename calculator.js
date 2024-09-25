const colorchanger = document.getElementById('colorChanger');
const container = document.getElementById('container');
const calcInput = document.getElementById('calc-input');
const allbtn = document.querySelectorAll('.btn');
const tgb = document.getElementById('tg-m');

let isDarkMode = false;

colorchanger.addEventListener('click', function() {
    isDarkMode = !isDarkMode;
    
    if (isDarkMode) {
        allbtn.forEach(button => {
            button.style.backgroundColor = 'rgba(20, 21, 24, 1)';
            button.style.color = 'white';
            button.style.boxShadow = '0px 2px 2px 2px #2f2e2e';
            button.style.borderRadius = '13px';

            if (button.textContent === 'X' || button.textContent === '/' || button.textContent === '-' || button.textContent === '+') {
                button.style.border = '2px solid rgba(21, 101, 192, 1)'; 
            }
            if(button.textContent === '='){
                button.style.backgroundColor = 'rgba(21, 101, 192, 1)';
                button.style.color = 'white';
                button.style.border = 'none'
                button.style.borderRadius = 'none'
                button.style.boxShadow = 'none'

                
                
            }
        });

        calcInput.style.backgroundColor = 'rgba(20, 21, 24, 1)';
        calcInput.style.color = 'white';
        colorchanger.style.backgroundColor = 'rgba(20, 21, 24, 1)';
        colorchanger.style.color = 'white';
        container.style.backgroundColor = 'rgba(20, 21, 24, 1)';
        
        tgb.style.backgroundColor = 'rgba(21, 101, 192, 1)';
        tgb.style.color = 'white'; 

       
    } else {
        allbtn.forEach(button => {
            button.style.backgroundColor = 'white';
            button.style.color = 'rgba(20, 21, 24, 1)';
            button.style.borderRadius = '17px';
            button.style.boxShadow = '-1px -3px 5px 5px rgba(0, 0, 0, 0.09)';
            button.style.border = 'none'; 

            if (button.textContent === 'X' || button.textContent === '/' || button.textContent === '-' || button.textContent === '+') {
                button.style.border = 'none'; 
                button.style.color = 'rgba(21, 101, 192, 1)'
            }
            if(button.textContent === '='){
                button.style.backgroundColor = 'rgba(21, 101, 192, 1)';
                button.style.color = 'white';
                
            }
        });

        calcInput.style.backgroundColor = 'white';
        calcInput.style.color = 'rgba(20, 21, 24, 1)';
        colorchanger.style.backgroundColor = 'white';
        colorchanger.style.color = 'rgba(20, 21, 24, 1)';
        container.style.backgroundColor = 'white';

        tgb.style.backgroundColor = 'rgba(21, 101, 192, 1)'; 
        tgb.style.color = 'white'; 
    }
});

let currentInput = '';
let operator = '';
let firstValue = null;

function updateInput(value) {
    currentInput += value;
    calcInput.value = currentInput;
}

function clearCalculator() {
    currentInput = '';
    operator = '';
    firstValue = null;
    calcInput.value = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    calcInput.value = currentInput;
}

function calculate() {
    if (firstValue === null)
         return;
    let secondValue = +currentInput;
    let result;

    switch (operator) {
        case '+':
            result = firstValue + secondValue;
            break;
        case '-':
            result = firstValue - secondValue;
            break;
        case 'X':
            result = firstValue * secondValue;
            break;
        case '/':
            result = firstValue / secondValue;
            break;
        default:
            return;
    }
    
    currentInput = result.toString();
    calcInput.value = currentInput;
    operator = '';
    firstValue = null;
 
}

allbtn.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'AC') {
            clearCalculator();
        } else if (value === 'DEL') {
            deleteLast();
        } else if (value === '=') {
            calculate();

            allbtn.forEach(btn => {
                if (['+', '-', 'X', '/'].includes(btn.textContent)) {
                    btn.style.backgroundColor = '';
                    btn.style.borderRadius = ''; 
                }
            });
        } else if (['+', '-', 'X', '/'].includes(value)) {
            if (value === '+' &&currentInput !== "") {
                button.style.backgroundColor = 'rgb(67, 105, 147)';
                button.style.borderRadius = '13px';
            }
            else if (value === '/' &&currentInput !== "") {
                button.style.backgroundColor = 'rgb(67, 105, 147)';
                button.style.borderRadius = '13px';
            }
            else if (value === '-' &&currentInput !== "") {
                button.style.backgroundColor = 'rgb(67, 105, 147)';
                button.style.borderRadius = '13px';
            }
            else if (value === 'X' &&currentInput !== "") {
                button.style.backgroundColor = 'rgb(67, 105, 147)';
                button.style.borderRadius = '13px';
            }
            if (currentInput === '') return;
            if (firstValue === null) {
                firstValue = parseFloat(currentInput);
            }
            operator = value;
            currentInput = '';
        } else {
            updateInput(value);
        }
    });
});

