function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.querySelector("[data-create]").addEventListener("click", createBoxes);
document
  .querySelector("[data-destroy]")
  .addEventListener("click", destroyBoxes);

const inputField = document.querySelector("input");
const boxesField = document.querySelector("#boxes");

function createBoxes() {
  const inputValue = inputField.value;
  if (inputValue < 1 || inputValue > 100) {
    inputField.value = "";
    return;
  }
  const box = document.createDocumentFragment();
  for (let i = 0; i < inputValue; i++) {
    const boxes = document.createElement("div");
    boxes.style.width = `${30 + i * 10}px`;
    boxes.style.height = `${30 + i * 10}px`;
    boxes.style.backgroundColor = getRandomHexColor();
    box.appendChild(boxes);
  }
  boxesField.prepend(box);
  inputField.value = "";
}

function destroyBoxes() {
  boxesField.innerHTML = "";
  inputField.value = "";
}
