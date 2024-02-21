console.log('Задание 1. Напишите сценарий, который бы в зависимости от поры года выводил сообщение о месяцах, которые относятся к данной поре. Пора года должна определяться относительно текущей даты.')

let currentDate = new Date();
let currentMonth = currentDate.getMonth();

function getSeason(month) {
    if (month >= 2 && month <= 4) {
        return 'весна';
    } else if (month >= 5 && month <= 7) {
        return 'лето';
    } else if (month >= 8 && month <= 10) {
        return 'осень';
    } else {
        return 'зима';
    }
}

let currentSeason = getSeason(currentMonth);
console.log('Сейчас ' + currentSeason + '. В эту пору года обычно наступают следующие месяцы:');

switch (currentSeason) {
    case 'весна':
        console.log('Март, Апрель, Май');
        break;
    case 'лето':
        console.log('Июнь, Июль, Август');
        break;
    case 'осень':
        console.log('Сентябрь, Октябрь, Ноябрь');
        break;
    case 'зима':
        console.log('Декабрь, Январь, Февраль');
        break;
    default:
        console.log('Что-то пошло не так при определении поры года.');
}


console.log('Задание 2. Напишите сценарий, который по введенной дате рождения определяет возраст человека.')

function calculateAge(birthDate) {
    let currentDate = new Date();
    let birthDateObj = new Date(birthDate);
    console.log(currentDate);
    console.log(birthDateObj);
    let age = currentDate.getFullYear() - birthDateObj.getFullYear();

    if (
        currentDate.getMonth() < birthDateObj.getMonth() ||
        (currentDate.getMonth() === birthDateObj.getMonth() && currentDate.getDate() < birthDateObj.getDate())
    ) {
        age--;
    }

    return age;
}

let userInput = prompt('Введите дату рождения в числовом формате:');

if (userInput) {
    let age = calculateAge(userInput);
    console.log('Ваш возраст: ' + age + ' лет');
} else {
    console.log('Вы не ввели дату рождения.');
}


console.log('Задание 3. Добавьте на страницу 2 кнопки: start и end. Напишите сценарий, который выводит информацию о промежутке времени, который прошел между нажатиями кнопок.')

let startTime, endTime;
let startBtn = document.getElementById('startBtn');
let endBtn = document.getElementById('endBtn');
let resultElement = document.getElementById('result');

startBtn.addEventListener('click', function() {
    startTime = new Date();
    resultElement.textContent = 'Нажата кнопка "Start".';
});

endBtn.addEventListener('click', function() {
    if (startTime) {
        endTime = new Date();
        let timeDifference = endTime - startTime;
        resultElement.textContent = 'Прошло времени: ' + timeDifference + ' миллисекунд.';
    } else {
        resultElement.textContent = 'Сначала нажмите кнопку "Start".';
    }
});

console.log('Задание 4.1. Напишите сценарий, который находит расстояние между двумя введенными пользователем координатами.')

let x1 = Number.parseInt(prompt("Введите первую координату x"));
let y1 = Number.parseInt(prompt("Введите первую координату y"));
let x2 = Number.parseInt(prompt("Введите вторую координату x"));
let y2 = Number.parseInt(prompt("Введите вторую координату y"));

console.log("Расстояние по координате x равно " + Math.abs(x1-x2));
console.log("Расстояние по координате y равно " + Math.abs(y1-y2));

console.log('Задание 4.2. Напишите сценарий, который конвертирует все символы переданной строки в верхний регистр и возвращает как исходную строку, так и измененную.')

let string = prompt("Введите строку: ");
console.log("исходная строка: " + string);
console.log("измененная строка: " + string.toUpperCase());

console.log('Задание 5. Через прототип расширьте встроенный объект Number методом isOdd(), который возвращает true, если число нечетное.')

Number.prototype.isOdd = function() {
    return this % 2 !== 0;
};
let number = 5;
console.log('число 5 является нечетным', number.isOdd());


console.log('Задание 6. Напишите функцию, которая получает в качестве параметра переменную содержащую строку и с помощью регулярного выражения проверяет, начинается ли содержимое этой переменной с цифры или нет.')

function startsWithDigit(inputString) {
    let digitRegex = /^\d/;
    let isStartsWithDigit = digitRegex.test(inputString);
    return isStartsWithDigit;
}
let inputString1 = "123abc";
let inputString2 = "abc123";

console.log('строка: 123abc: ', startsWithDigit(inputString1)); 
console.log('строка: abc123: ', startsWithDigit(inputString2)); 


console.log('Задание 7. Напишите функцию, которая получает в качестве параметра переменную содержащую строку и с помощью регулярного выражения проверяет, начинается ли содержимое этой переменной с указанного пользователем символа.')

function startsWithSymbol(inputString, symbol) {
    let escapedSymbol = symbol.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    let symbolRegex = new RegExp('^' + escapedSymbol);
    let isStartsWithSymbol = symbolRegex.test(inputString);

    return isStartsWithSymbol;
}

let inputString = "apple";
let userSymbol = "a";
console.log('apple начинается с a', startsWithSymbol(inputString, userSymbol)); 


console.log('Задание 8. Дана строка; нужно написать функцию, которая позволяет вернуть значение true, если строка абсолютно одинаково читается как в привычном направлении, так и в обратном, и false – если нет. При этом нужно учитывать пробелы и знаки препинания.')

function isPalindrome(str) {
    let cleanedStr = str.replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').toLowerCase();
    let reversedStr = cleanedStr.split('').reverse().join('');

    return cleanedStr === reversedStr;
}

let inputPolindrom1 = "A man, a plan, a canal, Panama";
let inputPolindrom2 = "Hello, World!";
console.log('Строка "A man, a plan, a canal, Panama" является полиндромом', isPalindrome(inputPolindrom1)); 
console.log('Строка "Hello, World!" является полиндромом', isPalindrome(inputPolindrom2)); 

