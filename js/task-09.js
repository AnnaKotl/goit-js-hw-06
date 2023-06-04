const colorText = document.querySelector('.color');
const changeBtn = document.querySelector('.change-color');
const bodyStyle = document.body;

changeBtn.addEventListener('click', onBtnChangeColor);

function onBtnChangeColor() {
  bodyStyle.style.backgroundColor = getRandomHexColor();
  colorText.textContent = bodyStyle.style.backgroundColor;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};