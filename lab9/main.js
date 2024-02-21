const element1 = document.getElementById("Element1");
const element2 = document.getElementById("Element2");
const element3 = document.getElementById("Element3");
const element4 = document.getElementById("Element4");
const element5 = document.getElementById("Element5");
const element6 = document.getElementById("Element6");

element1.addEventListener("mouseover", function () {
  element1.classList.add("cl2");
});

element1.addEventListener("mouseout", function () {
  element1.classList.remove("cl2");
  element1.classList.add("cl5");
});

element2.addEventListener("dblclick", function () {
  element2.classList.add("cl3");
});

element3.addEventListener("click", function () {
  element3.classList.add("cl4");
});

element4.addEventListener("mouseover", function () {
  element4.style.color = "yellow";
});

element5.addEventListener("dblclick", function () {
  element5.style.backgroundColor = "red";
});

element6.addEventListener("click", function () {
  element6.style.fontStyle = "italic";
});

// button block 10

let sum = 0;
const buttons = document.querySelectorAll("button:not(#resultBtn)");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const number = parseInt(button.textContent);
    sum += number;
  });
});

const resultBtn = document.getElementById("resultBtn");
resultBtn.addEventListener("click", function () {
  alert("Сумма цифр: " + sum);
  sum = 0;
});

// say your name 11

const userName = prompt("Введите ваше имя:");

if (userName) {
  alert(`Привет, ${userName}!`);
} else {
  alert("Приветствую, незнакомец!");
}

// learning JS 12

const textElement = document.getElementById("text");

textElement.addEventListener("mousemove", function () {
  textElement.style.fontSize = "60px";
});

textElement.addEventListener("dblclick", function () {
  textElement.style.fontSize = "40px";
});
