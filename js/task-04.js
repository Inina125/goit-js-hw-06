let counterValue = 0;
document.querySelectorAll("button").forEach((elem) => {
  elem.addEventListener("click", function (e) {
    console.log(e.target.dataset.action);
    if (e.target.dataset.action === "decrement") {
      counterValue = counterValue - 1;
    } else {
      counterValue = counterValue + 1;
    }
    document.querySelector("#value").textContent = counterValue;
  });
});
