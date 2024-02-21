// task 1
function calcPower() {
  let number = prompt("Введите число:");
  let power = prompt("Введите степень (по умолчанию 1):") || 1; // Если степень не введена, заменяем на значение 1

  let result = Math.pow(Number(number), Number(power));
  return result;
}

console.log(calcPower());

// task 2
function setMonth() {
  let month = prompt("Введите число от 1 до 12:");

  // Проверяем, чтобы введенное значение было от 1 до 12
  if (month >= 1 && month <= 12) {
    // Создаем глобальную переменную и присваиваем ей значение введенного числа
    window.monthNumber = Number(month);
  } else {
    console.log("Введено некорректное значение.");
  }
}

function printMonthName() {
  // Проверяем, есть ли глобальная переменная monthNumber
  if (window.monthNumber) {
    let monthNames = [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ];
    let monthName = monthNames[window.monthNumber - 1]; // Индексация массива начинается с 0

    console.log(`Название календарного месяца: ${monthName}`);
  } else {
    console.log("Глобальная переменная monthNumber не определена.");
  }
}

setMonth(); // Вызываем первую функцию для установки значения monthNumber
printMonthName(); // Вызываем вторую функцию для вывода названия календарного месяца

// task 3
function findMaxElement(array) {
  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;
}

function printResult(max) {
  if (max < 10) {
    console.log("Максимальный элемент находится в диапазоне от 0 до 9");
  } else if (max <= 100) {
    console.log("Максимальный элемент находится в диапазоне от 10 до 100");
  } else {
    console.log("Максимальный элемент находится в диапазоне свыше 100");
  }
}

let array = [5, 15, 80, 120, 3];
let maxElement = findMaxElement(array);
printResult(maxElement);

//task 4
function repeat(str = "", n = 2) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += str;
  }
  return result;
}

console.log(repeat("Hello", 3));
console.log(repeat("JavaScript"));

// task 5
const multiplyAndDivide = (a, b, c) => (a * b) / c;
console.log("результат умножения и деления: " + multiplyAndDivide(10, 2, 5));

//task 6
function addN(n) {
  return function (x) {
    return n + x;
  };
}
// Пример использования:
const addFive = addN(5);
console.log(addFive(10));
console.log(addFive(2));
