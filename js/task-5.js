const background = document.querySelector(".widget");
const btn = document.querySelector("button");
const colorSpan = document.querySelector("span.color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
btn.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  colorSpan.textContent = getRandomHexColor();
});
