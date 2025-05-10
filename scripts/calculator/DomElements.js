let numButton = document.querySelectorAll('.number-button');
let operatorButton = document.querySelectorAll('.operation-button');
let inputText = document.querySelector('#input-text');
let divideButton = document.querySelector('#divide-button');
let clearButton = document.querySelector('#clear-button');
let percentButton = document.querySelector('#percent-button');
let deleteButton = document.querySelector('#delete-button');
let equalsButton = document.querySelector('#equals-button');
let button = document.querySelectorAll('.btn');
let historyInput = document.querySelector('#history-text');
let openModal = document.querySelector('#history');
let dialog = document.querySelector('#history-dialog');
const moon = document.querySelector("#moon");
let darkMode = localStorage.getItem("darkmode");
const sun = document.querySelector("#sun");
const history = document.querySelector("#history");
const icon = document.querySelectorAll(".icon");
let trash = document.querySelectorAll('.trash');

export {numButton, operatorButton, inputText,
    divideButton, clearButton, percentButton,
    deleteButton, equalsButton, button,
    historyInput, openModal, dialog, trash, moon, darkMode, sun, history, icon};