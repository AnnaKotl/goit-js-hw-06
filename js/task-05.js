const inputValue = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputValue.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (inputValue.value.trim() !== "") {
    outputName.textContent = event.currentTarget.value;
    } else {
    outputName.textContent = "Anonymous";
    }
}

