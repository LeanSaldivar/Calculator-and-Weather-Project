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
        historyInput.value = calculations.output;

    } catch (err) {
        return;
    }
}


export { saveInput, saveOutput, persistCalculations, getHistoryInput};