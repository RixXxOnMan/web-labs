function log(obj) {
    console.log(obj);
}

log("-----------------");
log(`1. Создать веб-документ, содержащий произвольный контент. 
Предусмотреть наличие двух пустых блоков div1 и div2. В первый блок 
вывести все дочерние узлы элемента body. Во второй блок вывести все 
элементы документа.`);

const div1 = document.getElementsByClassName("div1")[0];
const div2 = document.getElementsByClassName("div2")[0];
let paragraph1 = document.createElement("p");
let paragraph2 = document.createElement("p");
let bodyChilds = document.body.childNodes;
let documentElements = document.getElementsByTagName('*'); // любой тег

paragraph1.textContent = "Дочерние элементы body: ";

for (let i = 0; i < bodyChilds.length; i++) {
    paragraph1.innerHTML += bodyChilds[i] + '<br>';
}

div1.appendChild(paragraph1);

paragraph2.textContent = "Все элементы документа: ";

for (let i = 0; i < documentElements.length; i++) {
    paragraph2.innerHTML += documentElements[i] + '<br>';
}

div2.appendChild(paragraph2);

log("-----------------");
log(`2. Добавить на страницу кнопку, по нажатию на которую можно создать 
список (упорядоченный, неупорядоченный), кнопки для добавления 
очередного элемента списка в начало и конец, кнопку, по нажатию на которую 
будет изменен цвет контента в нечетных элементах списка.`);

// создание элемента под список
const divWithList = document.getElementsByClassName("createdList")[0];

function isArrayIsSorted(arr) {
    return arr.slice(1).every((item, i) => arr[i] <= item)
}

function createRandomList(sorted) {
    if (document.getElementsByClassName("ulJsCreated")[0] == null) {
        let ul = document.createElement("ul");
        ul.classList.add("ulJsCreated");

        let arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

        if (sorted) {
            arr.sort(function (a, b) {
                return a - b;
            });
        }

        for (let i = 0; i < arr.length; i++) {
            let li = document.createElement("li");
            li.textContent = arr[i];
            ul.appendChild(li);
        }

        divWithList.appendChild(ul);
    } else {
        document.getElementsByClassName("ulJsCreated")[0].remove();
        createRandomList(sorted); // оно удалит старый список, его уже не будет вызов ф-ции будет идти внутри первого ифа
    }
}

function addElement(start) {
    if (document.getElementsByClassName("ulJsCreated")[0]) {
        log("add");
        let childrens = document.getElementsByClassName("ulJsCreated")[0].children;
        let arr = [];
        document.getElementsByClassName("ulJsCreated")[0].remove();
        let addedNum = Math.floor(Math.random() * 100);

        for (let i = 0; i < childrens.length; i++) {
            arr[i] = childrens[i].outerHTML.split("").slice(4, -5).join("") - 0;
        }

        if (isArrayIsSorted(arr)) {
            if (start) {
                arr.unshift(addedNum);
            } else {
                arr.push(addedNum);
            }

            arr.sort(function (a, b) {
                return a - b;
            });

        } else {
            if (start) {
                arr.unshift(addedNum);
            } else {
                arr.push(addedNum);
            }
        }

        let ul = document.createElement("ul");
        ul.classList.add("ulJsCreated");

        for (let i = 0; i < arr.length; i++) {
            let li = document.createElement("li");
            li.textContent = arr[i];
            ul.appendChild(li);
        }

        divWithList.appendChild(ul);
    }
}

function changeColorOdd() {
    if (document.getElementsByClassName("ulJsCreated")[0]) {
        let liList = document.getElementsByClassName("ulJsCreated")[0].children;
        for (let i = 0; i < liList.length; i++) {
            if (i % 2 == 1) {
                if (liList[i].style.color == "red") {
                    liList[i].style.color = "black";
                } else {
                    liList[i].style.color = "red";
                }
            }
        }
    }
}

log("-----------------");
log(`3. Получить доступ к одному и тому же элементу тремя разными 
способами, в том числе с использованием методов, использующих 
иерархическую структуру DOM. Значения, которые возвращает каждый из 
использованных методов сохранить в переменные. Выполнить проверку: 
равны ли переменные (ссылаются ли они на один и тот же узел).`);

// 1 - id
let h1_id = document.getElementById("h1");
// 2 - class
let h1_class = document.getElementsByClassName("h1")[0];
// 3 - tag
let h1_tag = document.getElementsByTagName("h1")[0];
// проверка
log(h1_id === h1_class && h1_id === h1_tag);

log("-----------------");
log(`4. Добавить на веб-страницу элемент <figure>, содержащий название 
картинки. В папку pictures сохранить 5 различных изображений. Реализовать 
смену изображений (по очереди из имеющихся пяти) и соответствующих 
названий по клику на картинку.`);

const changePicBtn = document.getElementById("changePic");
const figure = document.getElementsByTagName("figure")[0];
let i = 1;

function slideCats() {
    if (document.getElementsByClassName("catImg")[0] && document.getElementsByClassName("catFigcaption")[0]) {
        document.getElementsByClassName("catImg")[0].remove();
        document.getElementsByClassName("catFigcaption")[0].remove();
    }

    if (i == 6) {
        i = 1;
    }

    let img = document.createElement("img");
    img.classList.add("catImg");
    img.src = "pictures/" + i + ".jpg"
    img.alt = "котик " + i;
    let figcaption = document.createElement("figcaption");
    figcaption.classList.add("catFigcaption");
    figcaption.textContent = "Котик " + i;
    figure.appendChild(img);
    figure.appendChild(figcaption);
    i++;
}

log("-----------------");
log(`5. Создайте слайдер минимум из 5 изображений. Реализуйте плавную 
смену изображений.`);

let slider = document.getElementById("slides");
let slideIndex = 0;
let slideWidth = 300;

function nextSlide() {
    slideIndex++;
    if (slideIndex >= slider.children.length) {
        slideIndex = 0;
    }
    slider.style.transform = 'translateX(' + (-slideWidth * slideIndex) + 'px)';
    slider.style.transition = "all .5s";
}

log("-----------------");
log(`6. Добавьте на страницу ссылку и 3 кнопки с названием веб-адресов 
(например, hostname). Каждая из кнопок должна иметь свой адрес, который 
необходимо будет установить в качестве значения атрибута src указанной 
ссылки по нажатию на соответствующую кнопку. Обращение к объекту, 
указывающему на ссылку для каждой из кнопок реализовать с использованием 
различных методов.`);

const youtubeBtn = document.getElementById("youtubeBtn");
const googleBtn = document.getElementById("googleBtn");
const sibirBtn = document.getElementById("sibirBtn");

function changeLinkYoutube(link) {
    let a = document.getElementById("siteLink");
    a.setAttribute("href", link);
    return false; // чтобы страница не уходила в перезагрузку
}

function changeLinkGoogle(link) {
    let a = document.getElementsByClassName("siteLink")[0];
    a.setAttribute("href", link);
    return false; // чтобы страница не уходила в перезагрузку
}

function changeLinkSibir(link) {
    let a = document.getElementsByTagName("a")[1];
    a.setAttribute("href", link);
    return false; // чтобы страница не уходила в перезагрузку
}

log("-----------------");
log(`7. Средствами JavaScript добавьте на веб-страницу таблицу в 
соответствии с вариантом, таблица 16.1. Вариант 2`);

let tableContentMatrix = [ // для автозаполнения данными
    ["Name", "Surname", "Telephone"],
    ["Jack", "Sales", "555-5555"],
    ["James", "Admin", "555-5555"],
    ["John", "Sales", "555-5555"],
    ["Total", "Total", "Total"] 
];

let table = document.createElement('table');
for (let i = 0; i < tableContentMatrix.length; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < tableContentMatrix[i].length; j++) {
        let td = document.createElement('td');
        td.textContent = `${tableContentMatrix[i][j]}`;
        td.style.border = '2px solid black'; 
        // td.style.padding = '5px';
        td.style.width = '100px';
        if (i == 0) { // изменение шапки таблицы
            td.style.fontWeight = 'bold';
            td.style.color = 'olive';
            td.style.textAlign = 'center';
        } else if (i == tableContentMatrix.length - 1) {
            td.style.color = 'red';
        } else {
            td.style.color = 'blue';
        }
        tr.appendChild(td);
    }
    table.style.border = '2px solid black';
    table.appendChild(tr);
}
document.body.appendChild(table);


