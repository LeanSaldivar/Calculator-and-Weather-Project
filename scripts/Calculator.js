import { getInput, clear, del, calculateResult} from './calculator/GetInput.js';
import {
    numButton, operatorButton, divideButton,
    clearButton, percentButton, deleteButton,
    equalsButton, inputText, button, historyInput,
    openModal, dialog,
} from './calculator/DomElements.js';
import { saveInput, saveOutput, persistCalculations, getHistoryInput, getLocalHistory} from './calculator/localStorage.js';


getLocalHistory();


openModal.addEventListener('click', () => dialog.showModal());

dialog.addEventListener('click', (event) => {
    const rect = dialog.getBoundingClientRect();
    const isInDialog =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

    if (!isInDialog) {
        dialog.close();
    }
})


percentButton.addEventListener('click', () => getInput('%', inputText));
divideButton.addEventListener('click', () => getInput('/', inputText));
clearButton.addEventListener('click', () => clear(inputText));
deleteButton.addEventListener('click', () => del(inputText));

equalsButton.addEventListener('click', () => {
    calculateResult(inputText);
    saveOutput(inputText.value);
    persistCalculations();
    getLocalHistory();

});

inputText.addEventListener('input', () => {
    getHistoryInput(historyInput, inputText);
})


numButton.forEach(button => {
    button.addEventListener('click', () => {
        getInput(button.innerText, inputText)
        getHistoryInput(historyInput, inputText);
    });
});

operatorButton.forEach(button => {
    button.addEventListener('click', () => {
        getInput(button.innerText, inputText)
        getHistoryInput(historyInput, inputText);
    });
});

button.forEach(button => {
    button.addEventListener('click', () => {
        saveInput(inputText.value)
        getHistoryInput(historyInput, inputText);
    })
});