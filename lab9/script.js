let userName = prompt("Кто там?", "");

if (userName === "Админ") {
  let userPassword = prompt("Пароль?");

  if (userPassword === "Я Главный") {
    alert("Здравствуйте!");
  } else if (userPassword === "") {
    alert("Отменена");
  } else if (userPassword === "Другое") {
    alert("Неверный пароль");
  }

} else if (userName === "") {
  alert("Отменена");
} else if (userName === "Другое") {
  alert("I don't know you");
}
