const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const elemnets = [];

for (const ingredient of ingredients) {
  const el = document.createElement("li");
  el.textContent = ingredient;
  el.className = "item";
  elemnets.push(el);
}

document.querySelector("#ingredients").append(...elemnets);
