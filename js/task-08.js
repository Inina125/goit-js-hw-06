const form = document.querySelector(".login-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = form.elements.email;
  const password = form.elements.password;

  if (email.value.length === 0 || password.value.length === 0) {
    alert("Все поля должны быть заполнены.");
  }
  const data = {
    email: email.value,
    password: password.value,
  };
  console.log(data);
  form.reset();
});
