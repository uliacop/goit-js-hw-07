function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxDiv = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  const amount = input.value;
  if (amount < 1 || amount > 100) {
    input.value = '';
    return;
  }
  removeAllBoxes();
  createBoxes(amount);
  input.value = '';
});

destroyBtn.addEventListener('click', () => {
  removeAllBoxes();
});

function removeAllBoxes() {
  while (boxDiv.firstChild) {
    boxDiv.removeChild(boxDiv.firstChild);
  }
}

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    size += 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    boxDiv.appendChild(box);
  }
}
