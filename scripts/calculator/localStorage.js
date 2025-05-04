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

function getHistoryInput(textInput, historyInput){
    historyInput.value = textInput.value;
}

export { saveInput, saveOutput, persistCalculations, getHistoryInput};