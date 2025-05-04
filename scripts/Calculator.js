import { getInput, clear, del, calculateResult } from './calculator/GetInput.js';
import {
    numButton, operatorButton, divideButton,
    clearButton, percentButton, deleteButton,
    equalsButton, inputText, button, historyInput
} from './calculator/DomElements.js';
import { saveInput, saveOutput, persistCalculations, getHistoryInput} from './calculator/localStorage.js';

percentButton.addEventListener('click', () => getInput('%', inputText));
divideButton.addEventListener('click', () => getInput('/', inputText));
clearButton.addEventListener('click', () => clear(inputText));
deleteButton.addEventListener('click', () => del(inputText));

equalsButton.addEventListener('click', () => {
    calculateResult(inputText);
    saveOutput(inputText.value);
    persistCalculations();
});


inputText.addEventListener('click', () => {
    getHistoryInput(inputText, historyInput);
})

numButton.forEach(button => {
    button.addEventListener('click', () => getInput(button.innerText, inputText));
});

operatorButton.forEach(button => {
    button.addEventListener('click', () => getInput(button.innerText, inputText));
});

button.forEach(button => {
    button.addEventListener('click', () => saveInput(inputText.value))
});
