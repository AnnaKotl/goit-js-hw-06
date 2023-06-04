const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', (event) => {
    const textFontSize = event.target.value;
    text.style.fontSize = `${textFontSize}px`;
});