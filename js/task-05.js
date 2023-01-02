document.querySelector("#name-input").addEventListener("input", function (e) {
  console.log(e.target.value);
  const insert = e.target.value.length > 0 ? e.target.value : "Anonymous";
  document.querySelector("#name-output").textContent = insert;
});
