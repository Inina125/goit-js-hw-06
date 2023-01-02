document
  .querySelector("#font-size-control")
  .addEventListener("input", function (e) {
    console.log(e.target.value);
    document.querySelector("#text").style.fontSize = e.target.value + "px";
  });
