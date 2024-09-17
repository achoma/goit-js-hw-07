const itemCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemCategories.length}`);

itemCategories.forEach((category) => {
  const header = category.querySelector("h2");
  const elements = category.querySelectorAll("li");

  console.log(`Category: ${header.textContent}`);
  console.log(`Elements: ${elements.length}`);
});
