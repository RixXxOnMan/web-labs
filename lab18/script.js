function log(obj) {
    console.log(obj);
}

log("---------------------");
log(`1. Создать веб-документ, содержащий текстовое поле для ввода. При
вводе очередного символа в тестовое поле реализуйте его вывод на веб-страницу. Вывод должен осуществляться без перезагрузки страницы.`);

const input = document.getElementById("input");
const p = document.getElementById("values");

input.addEventListener("input", updateValue);

function updateValue(e) {
  p.textContent = e.target.value;
}

log("---------------------");
log(`2. Добавьте на веб-страницу ссылку. Реализуйте для нее отмену 
перехода по ссылке по клику. Добавьте для ссылки 5 обработчиков для разных 
событий таким образом, чтобы при наступлении соответствующего события 
выводилось сообщение с типом события.`);

const a = document.getElementsByClassName("link-to-events")[0];

a.addEventListener("click", (event) => {
    event.preventDefault();
    log("Событие: " + event.type);
});

const events1 = ["mouseover", "mouseout", "mousemove", "mousedown", "mouseup"];

events1.forEach((evt) => {
    a.addEventListener(evt, () => {
         log("Произошло событие: " + evt);
    });
});

log("---------------------");
log(`3. Добавьте 5 произвольных HTML-элементов на веб-страницу. Для 
каждого элемента назначьте не менее двух обработчиков (можно как на один,
так и на разные типы событий). При назначении обработчиков событий 
использовать возможность их выполнения на различных стадиях (всплытия и 
перехват). 
С помощью диалогового окна реализуйте ввод пользователем события, 
которое необходимо сгенерировать, и элемент, для которого это событие 
должно быть вызвано.`);


const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const fourth = document.getElementById("fourth");
const fifth = document.getElementById("fifth");

const elements = [first, second, third, fourth, fifth];

const events2 = [
    ["click", "contextmenu"],
    ["click", "mouseover"],
    ["click", "mouseup"],
    ["click", "mousemove"],
    ["click", "mousedown"]
];

for (let i = 0; i < elements.length; i++) {
    for (let j = 0; j < events2[i].length; j++) {
        elements[i].addEventListener(events2[i][j], () => {
            log("Произошло событие: " + events2[i][j]);
        })
    }
}

const inputForEvents = document.getElementById("input-for-events");

function sendElem() {
    // 1 - элемент для события
    // 2 - тип события
    let data = (inputForEvents.value).split(", ");
    document.getElementById(data[0]).addEventListener(data[1], () => {
        log("Добавлено событие для элемента с id \"" + data[0] + "\" :" + data[1]);
    });
    return false;
}

