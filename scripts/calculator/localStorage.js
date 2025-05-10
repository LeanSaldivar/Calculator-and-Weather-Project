import * as math from 'https://esm.sh/mathjs';

let calculations = {
    input: '',
    output: ''
}

function saveInput(inputValue) {
    calculations.input = inputValue;
    console.log("Input saved:", calculations.input);
}

function saveOutput(outputValue) {
    calculations.output = outputValue;
    console.log("Output saved:", calculations.output);
}

function persistCalculations() {
    try {
        const currentLog = {
            input: calculations.input,
            output: calculations.output
        };

        let history = JSON.parse(localStorage.getItem("calculations")) || [];

        history.push(currentLog);

        localStorage.setItem("calculations", JSON.stringify(history));

        console.log("Updated Calculation History:", history);
    } catch (e) {
        console.error("Failed to persist calculations:", e);
    }
}

function getHistoryInput(historyInput, inputText) {
    const expression = inputText.value.trim();

    if (!expression) return;

    try {
        const result = math.evaluate(expression);

        if (
            result === undefined ||
            result === null ||
            Number.isNaN(result) ||
            result === Infinity ||
            result === -Infinity
        ) {
            return;
        }

        saveOutput(result);
        historyInput.value = `Ans = ${calculations.output}`;

    } catch (err) {
        historyInput.value = ``;
    }
}

const getLocalHistory = () => {
    const historyContainer = document.querySelector(".history-log");
    const history = localStorage.getItem("calculations");

    historyContainer.innerHTML = '';

    if (!history) return;

    const parsedHistory = JSON.parse(history);

    parsedHistory.forEach((entry, index) => {
        const logContainer = document.createElement("div");
        logContainer.classList.add("log");
        logContainer.dataset.index = index; // Store the index as data attribute

        const log = document.createElement("p");
        log.innerText = `${entry.input} = ${entry.output}`;

        const deleteLogContainer = document.createElement("div");
        deleteLogContainer.classList.add("delete-log");
        deleteLogContainer.dataset.index = index; // Also add index to delete button container
        deleteLogContainer.innerHTML =`
            <svg class="trash" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                 viewBox="0 0 24 24" data-index="${index}">
                <path fill="currentColor"
                      d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3zM7 6h10v13H7zm2 2v9h2V8zm4 0v9h2V8z"/>
            </svg>
        `;

        logContainer.append(log, deleteLogContainer);
        historyContainer.appendChild(logContainer);

        const divider = document.createElement("hr");
        historyContainer.appendChild(divider);
    });
}


function deleteLog(index) {
    try {
        const storedCalculations = JSON.parse(localStorage.getItem("calculations")) || [];

        if (index !== undefined && index >= 0 && index < storedCalculations.length) {
            storedCalculations.splice(index, 1);
            localStorage.setItem("calculations", JSON.stringify(storedCalculations));
            console.log(`Deleted calculation at index ${index}`);
        } else {
            console.error(`Invalid index: ${index}`);
        }
    } catch (e) {
        console.error("Failed to delete calculation:", e);
    }
}



export {saveInput, saveOutput, persistCalculations, getHistoryInput, getLocalHistory, deleteLog};