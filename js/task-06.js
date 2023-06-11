const inputText = document.querySelector('#validation-input');

inputText.addEventListener('blur', onInputBlur);

function onInputBlur() {
    
    if (inputText.value.trim().length == inputText.dataset.length) {

        inputText.classList.add('valid');
        inputText.classList.remove('invalid');

    } else {

        inputText.classList.remove('valid');
        inputText.classList.add('invalid');

    }
}