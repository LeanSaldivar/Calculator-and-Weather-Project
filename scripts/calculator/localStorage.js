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

    const parsedHistory = JSON.parse(history);

    parsedHistory.forEach((entry) => {
        const logContainer = document.createElement("div");
        logContainer.classList.add("log");

        const log = document.createElement("p");
        log.innerText = `${entry.input} = ${entry.output}`;

        const deleteLogContainer = document.createElement("div");
        deleteLogContainer.classList.add("delete-log");
        deleteLogContainer.innerHTML =`
            <svg class="trash" id="trash" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                 viewBox="0 0 24 24">
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

function deleteLog(event) {
    event.target.parentElement.remove();
    persistCalculations();
    getLocalHistory();
    console.log("Log deleted");
}


export {saveInput, saveOutput, persistCalculations, getHistoryInput, getLocalHistory, deleteLog};