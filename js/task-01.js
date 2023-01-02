const items = document.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);
for (const item of items) {
  const category = item.querySelector("h2").textContent;
  const elements = item.querySelectorAll("li");
  console.log(`Category: ${category}`);
  console.log(`Elements: ${elements.length}`);
}
