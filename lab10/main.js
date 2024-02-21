// task 1
let array1 = [1, 2, 3];
let array2 = new Array('a', 'b', 'c', 'd');
let array3 = Array.of(true, false, true, false, true);
let combinedArray = [...array1, ...array2, ...array3];

// task 2

let output = '';

combinedArray.forEach((element, index) => {
    output += `${index} - ${element} <br>`;

});

document.getElementById('output').innerHTML = output ;

// task 3

combinedArray.splice(2, 1); // Удаление одного элемента по индексу 2
combinedArray.unshift(0); // Добавление элемента в начало массива
combinedArray.push(6); // Добавление элемента в конец массива
combinedArray.shift(); // Удаление первого элемента
combinedArray.pop(); // Удаление последнего элемента

//task 4

delete combinedArray[3];
delete combinedArray[7];
delete combinedArray[9];

// task 5

console.log(`Длина массива: ${combinedArray.length}`); // Длина массива
console.log(`Количество элементов в массиве: ${combinedArray.filter(Boolean).length}`); // Количество инициализированных элементов
combinedArray.forEach((element, index) => { // Вывод элементов с указанием индекса
if (element) {
console.log(`${index} - ${element}`);
}
});

// task 6

combinedArray = [];
combinedArray.length = 0;