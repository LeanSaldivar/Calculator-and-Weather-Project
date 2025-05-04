import * as math from 'https://esm.sh/mathjs';

const getInput = (num, inputText) => inputText.value += num;

const clear = (inputText) => inputText.value = "";

const del = (inputText) => inputText.value = inputText.value.slice(0, -1);

const calculateResult = (inputText) => {
    try {
        inputText.value = math.evaluate(inputText.value);
    } catch (e) {
        inputText.value = "Syntax error";
    }
};


export { getInput, clear, del, calculateResult};