import { getInput, clear, del, calculateResult } from './calculator/GetInput.js';
import {
    numButton, operatorButton, divideButton,
    clearButton, percentButton, deleteButton,
    equalsButton, inputText
} from './calculator/DomElements.js';

percentButton.addEventListener('click', () => getInput('%', inputText));
divideButton.addEventListener('click', () => getInput('/', inputText));
clearButton.addEventListener('click', () => clear(inputText));
deleteButton.addEventListener('click', () => del(inputText));
equalsButton.addEventListener('click', () => calculateResult(inputText));


numButton.forEach(button => {
    button.addEventListener('click', () => getInput(button.innerText, inputText));
});

operatorButton.forEach(button => {
    button.addEventListener('click', () => getInput(button.innerText, inputText));
});
