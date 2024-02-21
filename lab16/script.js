function log(obj) {
    console.log(obj);
}

log("----------------");
log(`1. Создать веб-страницу на тему Вашего хобби. По нажатию на кнопку 
изменить стилевое оформление веб-страницы (необходимо реализовать 
переключение между двумя таблицами стилей, каждая из которых содержит 
свое цветовое оформление).`);
log("----------------");
log(`2. Добавить на страницу список. По нажатию на кнопку реализовать 
динамическое изменение прозрачности контента в элементах списка: с 
каждым нажатием прозрачность должна уменьшаться на 10%. Как только 
будет достигнуто 100%, значение свойства должно возвращаться в 0%.`);
log("----------------");
log(`3. Реализуйте визуальный анимационный эффект в соответствии с 
вариантом, таблица 15.1
Вариант 3 Создайте кнопку, которая при наведении плавно меняет свой цвет.`);
log("----------------");
log(`4.* Реализовать часы: должны присутствовать секундная, минутная и 
часовая стрелки.`);

const darkBtn = document.getElementById("dark");
const lightBtn = document.getElementById("light");
const body = document.body;
const opacityBtn = document.getElementById("opacityBtn");
const list = document.getElementById("list");
const listOfOpClasses = ["list0", "list01", "list02", "list03", "list04", "list05", "list06", "list07", "list08", "list09", "list1"];
let counter = 0;
const colorChangeableBtn = document.getElementsByClassName("colorChangeableBtn")[0];
// 4
const minuteArrow = document.getElementsByClassName("minuteArrow")[0];
const secondArrow = document.getElementsByClassName("secondArrow")[0];
const hourArrow = document.getElementsByClassName("hourArrow")[0];

// x = 62;
// obj.style.transform = 'rotate(' + x + 'deg)';

minuteArrow.style.transform = 'rotate(' + x + 'deg)';

function rotateClock() {
    setInterval(() => {
        rotateClockInner();
    }, 1000);
}

function rotateClockInner() {
    let time = new Date();

    let sec = time.getSeconds();
    let minute = time.getMinutes();
    let hour = time.getHours();

    secondArrow.style.transform = 'rotate(' + ((sec*6)+180) + 'deg)';
    minuteArrow.style.transform = 'rotate(' + ((minute*6 + (sec*6/60))+180) + 'deg)';
    hourArrow.style.transform = 'rotate(' + (hour*15+180 + (minute*6/60 + (sec*6/3600))+180) + 'deg)';
}

function changeColorBtn() {
    if (colorChangeableBtn.classList.contains("colorChangeableBtn")) {
        colorChangeableBtn.classList = [];
        colorChangeableBtn.classList.add("hover");
    } else {
        colorChangeableBtn.classList.remove("hover");
        colorChangeableBtn.classList = [];
        colorChangeableBtn.classList.add("colorChangeableBtn");
    }
}

function addOpacity() {
    if (counter == listOfOpClasses.length) {
        counter = 0;
        list.classList = [];
    }
    list.classList.add(listOfOpClasses[counter]);
    counter++;
}

function darkTheme() {
    if (!body.classList.contains("dark")) {
        body.classList.add("dark");
    }
}

function lightTheme() {
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
    }
}



