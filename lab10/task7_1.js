let array1 = [1, 2, 3];
let array2 = new Array("a", "b", "c", "d");
let array3 = Array.of(true, false, true, false, true);
let combinedArray = [...array1, ...array2, ...array3];

console.log("Введите число Х:");

// Ввод числа Х с клавиатуры
let X = prompt("Введите число Х:");

// Проверка введенного числа Х на корректность
if (!isNaN(X) && Number.isInteger(Number(X)) && Number(X) > 0) {
  // Преобразование Х к типу Number
  X = Number(X);

  // Проверка, если Х больше длины массива, то возвращаем весь массив
  if (X >= combinedArray.length) {
    let fragment = combinedArray;
    console.log(fragment);
  } else {
    // Получение фрагмента массива, содержащего последние Х элементов
    let fragment = combinedArray.slice(-X);
    console.log(fragment);
  }
} else {
  console.log("Ошибка ввода числа Х!");
}
