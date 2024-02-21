function log(obj) {
    console.log(obj);
}

log("--------------------");
log(`1. Создайте переменную, которая хранит данные о содержании 
элементов списка в формате JSON.`);

let JSON_Obj = `{
    "ul": [
      {
        "tag": "li",
        "content": "Элемент списка 1"
      },
      {
        "tag": "li",
        "content": "Элемент списка 2"
      },
      {
        "tag": "li",
        "content": "Элемент списка 3"
      }
    ]
  }`;

log("--------------------");
log(`2. Выполните преобразование данных, хранящихся в созданной 
переменной в объект JavaScript.`);

let obj = JSON.parse(JSON_Obj);
log( obj["ul"] );

log("--------------------");
log(`3. Используя DOM, выполните добавление списка на страницу. В 
элементы списка внесите информацию из свойств объекта.`);

let arrayOfListNodes = obj["ul"];
const ul = document.createElement("ul");

for (let i = 0; i < arrayOfListNodes.length; i++) {
    let li = document.createElement("" + arrayOfListNodes[i].tag);
    li.textContent += arrayOfListNodes[i].content;
    ul.appendChild(li);
}

document.body.appendChild(ul);

log("--------------------");
log(`4. C использованием библиотеки JQuery выведите в консоль все 
элементы, являющиеся дочерними по отношению к <body>.`);

let childs = $("body").children();
for (let i = 0; i < childs.length; i++) {
  log(childs[i]);
}

log("--------------------");
log(`5. Используя методы библиотеки JQuery, добавьте на страницу таблицу, 
как показано на рисунке 20.1.`);

log("--------------------");
log(`6. Стилевое оформление таблицы необходимо выполнить добавлением 
(с помощью библиотеки JQuery) элементам таблиц атрибута class`);

log("--------------------");
log(`7. Используя библиотеку JQuery добавить события к заголовкам 
таблицы: при наведении на заголовок должна выводиться информацоя с 
описанием времени, указанного в заголовке.`);


let table = $('<table>');

const tableMatrix = [
  ["", "PRESENT", "PAST", "FUTURE"],
  ["+", "I dance", "I danced", "I will dance"],
  ["-", "I don\'t dance", "I didn\'t dance", "I\'ll not dance"],
  ["?", "Do I dance?", "Did I dance?", "Will I dance?"]
];

for (let i = 0; i < 4; i++) {
  let row = $('<tr>');
  for (let j = 0; j < 4; j++) {
    let cell = $('<th>').text(tableMatrix[i][j]);
    cell.css({
      "font-family": "sans-serif",
      "font-weight": "normal"
    });
    if (j == 0 || i == 0) {
      cell.css({
        "background-color": "#74c8ae"
      });
      if (i == 0 && j == 1) {
        cell.mouseenter(function() {
          log("present");
        });
      }
      if (i == 0 && j == 2) {
        cell.mouseenter(function() {
          log("past");
        });
      }
      if (i == 0 && j == 3) {
        cell.mouseenter(function() {
          log("future");
        });
      }
    } else {
      cell.css({
        "background-color": "#60b8ce"
      });
    }
    cell.css({
      "border": "3px solid white",
      "padding": "10px",
      "color": "white"
    });
    row.append(cell);
  }
  table.append(row);
}
table.css({"border-collapse": "collapse"});
$('#here_table').append(table);

log("--------------------");
log(`8. Создайте HTML-форму и организуйте проверку заполненности всех 
полей по нажатию на кнопку. Если останутся незаполненные поля, 
необходимо вывести предупреждение.`);

const inputs = [$('#fname')[0], $('#lname')[0]];

function send() {
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
      alert("!Не заполнено поле " + inputs[i].name);
    }
  }
}

log("--------------------");
log(`9. Создайте для кнопки эффект «переключателя», как показано на 
рисунке 20.2 с использованием библиотеки JQuery.`);

$(document).ready(function () {
  $('.Switch').click(function () {
    if ($(this).hasClass('On')) {
      $(this).removeClass('On').addClass('Off');
    } else {
      $(this).removeClass('Off').addClass('On');
    }
  });
});
