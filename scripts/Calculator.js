import { getInput, clear, del, calculateResult} from './calculator/GetInput.js';
import {
    numButton, operatorButton, divideButton,
    clearButton, percentButton, deleteButton,
    equalsButton, inputText, button, historyInput,
    openModal, dialog, trash, moon, darkMode, sun, history
} from './calculator/DomElements.js';
import { saveInput, saveOutput, persistCalculations, getHistoryInput, getLocalHistory, deleteLog} from './calculator/localStorage.js';
import { enableDarkMode, disableDarkMode, toggleHistoryIcon, checkTheme } from './Theme/DarkMode.js';

moon.addEventListener("click", () => {
    enableDarkMode();
});

sun.addEventListener("click", () => {
    disableDarkMode();
});

history.addEventListener("click", () => {
    dialog.showModal();

    toggleHistoryIcon(true);
});

dialog.addEventListener('close', () => {
    toggleHistoryIcon(false);
});

checkTheme();


moon.addEventListener("click", () => {
    enableDarkMode();
});

sun.addEventListener("click", () => {
    disableDarkMode();
})

if (darkMode === "active") {
    enableDarkMode();
} else {
    disableDarkMode();
}

// getLocalHistory();

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
});

percentButton.addEventListener('click', () => getInput('%', inputText));
divideButton.addEventListener('click', () => getInput('/', inputText));
clearButton.addEventListener('click', () => clear(inputText));
deleteButton.addEventListener('click', () => del(inputText));

const historyContainer = document.querySelector(".history-log");

historyContainer.addEventListener('click', (event) => {
    const trashElement = event.target.closest('.trash');
    if (trashElement) {
        const index = parseInt(trashElement.getAttribute('data-index'));
        console.log(`Deleting calculation at index ${index}`);

        deleteLog(index);

        getLocalHistory();
    }
});



equalsButton.addEventListener('click', (e) => {
    calculateResult(inputText);
    saveOutput(inputText.value);
    persistCalculations();
    getLocalHistory();
});

inputText.addEventListener('input', () => {
    saveInput(inputText.value);
    getHistoryInput(historyInput, inputText);
});

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