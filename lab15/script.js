window.onload = function() {
    log("-----------------------------");
    log(`1. Создайте веб-документ, содержащий не менее 5 элементов (заголовки, 
    абзацы, элементы форм и т.д.). Выведите всех потомков тега body. Для первых 
    двух элементов выведите тип узла`);

    log("-----------------------------");
    log(`2. Добавьте на веб-страницу нумерованный список, содержащий 
    названия месяцев. Реализуйте сценарий, который после списка добавит 
    таблицу, состоящую из двух столбцов: №, название месяца. Заполните таблицу 
    данными из списка.`)

    const h1 = document.getElementById("h1");
    const p = document.getElementById("p");
    const input = document.getElementById("input");
    const a = document.getElementById("a");
    const img = document.getElementById("img");

    let bodyChilds = document.body.children; // дети
    
    for (let i = 0; i < bodyChilds.length - 1; i++) {
        log(bodyChilds[i]);
        if (i < 2) {
            log(bodyChilds[i].nodeType);
        }
    }

    // пример таблицы

    {/* <table>
    <tr><th>текст заголовка</th><th>текст заголовка</th></tr> <!--ряд с ячейками заголовков-->
    <tr><td>данные</td><td>данные</td></tr> <!--ряд с ячейками тела таблицы-->
    </table> */}

    const list = document.getElementById("list").children; // лишки у списка (каждый месяц)
    const table = document.createElement("table"); // создает тег <table>
    const tableHeaderRow = document.createElement("tr"); // строка <tr> table row
    const tableHeaderCellNumber = document.createElement("th"); // ячейка <th>
    tableHeaderCellNumber.textContent = "№"; // добавление названия ячейки
    tableHeaderCellNumber.style.border = "3px solid black"; // стили, не влияют на саму таблицу структурно
    tableHeaderRow.appendChild(tableHeaderCellNumber); 
    const tableHeaderCellMonths = document.createElement("th");
    tableHeaderCellMonths.style.border = "3px solid black"; // стили, не влияют на саму таблицу структурно
    tableHeaderCellMonths.textContent = "Название месяца";
    tableHeaderRow.appendChild(tableHeaderCellMonths);
    table.appendChild(tableHeaderRow);
    // цикл создания таблицы
    for (let i = 0; i < list.length + 1; i++) {
        let tableRow = document.createElement("tr");
        let tableCell = document.createElement("th");
        tableCell.textContent = i + 1;
        tableCell.style.border = "2px solid black"; // стили, не влияют на саму таблицу структурно
        tableRow.appendChild(tableCell);
        tableCell = document.createElement("th");
        if (i == 12) {
            // 3-е задание
            tableCell.textContent = "13-го месяца не бывает";
        } else {
            tableCell.textContent = list[i].outerHTML.split("").slice(4, -5).join("");
        }
        tableCell.style.border = "2px solid black"; // стили, не влияют на саму таблицу структурно
        tableRow.appendChild(tableCell);
        table.appendChild(tableRow);
    }
    document.body.appendChild(table);

    log("-----------------------------");
    log(`3. Напишите сценарий, который добавит в указанный список 13-ый 
    пункт со следующим содержанием «13-го месяца не бывает».`);

    log("-----------------------------");
    log(`4. С помощью JavaScript добавьте в 13-й пункт списка маркированный 
    список, содержащий дни недели.`);
    
    const listDays = document.createElement("ul");
    const days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

    for (let i = 0; i < days.length; i++) {
        let listDaysElement = document.createElement("li");
        listDaysElement.textContent = days[i];
        listDays.appendChild(listDaysElement);
    }

    const listOl = document.getElementsByTagName("ol")[0];
    const listOlLastElement = document.createElement("li");
    listOlLastElement.appendChild(listDays);
    listOl.appendChild(listOlLastElement);

    log("-----------------------------");
    log(`5. Напишите сценарий, который по нажатию на кнопку выводит 
    содержимое всех заголовков в пределах элемента main.`);


    log("-----------------------------");
    log(`6. Добавьте на страницу зависимый переключатель (radio), содержащий 
    варианты ответа да/нет. Реализуйте переключатель, в активном состоянии 
    текст которого отображается красным, в неактивном – синем`);

    log("-----------------------------");
    log(`7. Добавьте на веб-страницу блок, содержащий тест, в соответствии с 
    вариантом. Тест должен иметь заголовок. Необходимо предусмотреть 
    различные варианты ответов: единственный верный из предложенных, 
    несколько верных из предложенных, ответ, введенный пользователем. После 
    ответа на все вопросы, по нажатию кнопки «Результат», необходимо вывести 
    результат теста с указанием вопросов, на которые даны неверные ответы.
    Вариант 3. Растения`);

    log("-----------------------------");
    log(`8.* Реализуйте таймер, который в результат будет выводить и время, 
    затраченное на выполнение теста.`);
}

function checkAnswers() {
    const resBtn = document.getElementById("resBtn");
    const startBtn = document.getElementById("startBtn");
    let result = `Ваш результат\n`;
    let uncorrectAnswers = 0; 

    const q1a2 = document.getElementById("q1a2");

    const q2a1 = document.getElementById("q2a1");
    const q2a2 = document.getElementById("q2a2");

    const q3 = document.getElementById("q3");

    // 1 вопрос

    if (!q1a2.checked) {
        result += `Первый вопрос неправильный
        Надо было 2-й ответить`;
        uncorrectAnswers++;
    }

    if (!q2a1.checked || !q2a2.checked) {
        result += `
        Первый вопрос неправильный
        Надо было 1 и 2 ответить`;
        uncorrectAnswers++;
    }

    if (q3.value != "Да") {
        result += `
        Бро надо тренироваться 
                и вводить "Да"`;
        uncorrectAnswers++;
    }

    result += `
    Количество правильных ответов: ` + (3 - uncorrectAnswers) + ` из 3-х`;
    log(result)
}

function yesFunc() {
    const yesElem = document.getElementById("yes");
    const noElem = document.getElementById("no");
    const labelOFYesElem = document.getElementById("yes_label");
    const labelOfNoElem = document.getElementById("no_label");

    yesElem.checked = true;
    noElem.checked = false;

    labelOFYesElem.style.color = "red";
    labelOfNoElem.style.color = "blue";

    log("worked yes");
}

function noFunc() {
    const yesElem = document.getElementById("yes");
    const noElem = document.getElementById("no");
    const labelOFYesElem = document.getElementById("yes_label");
    const labelOfNoElem = document.getElementById("no_label");

    yesElem.checked = false;
    noElem.checked = true;

    labelOFYesElem.style.color = "blue";
    labelOfNoElem.style.color = "red";

    log("worked no");
}

function showContent() {
    // создам тег div с классом main как основной блок и добавлю его в body
    if (document.getElementsByClassName("main")[0] == null) {
        let divMainElem = document.createElement("div");
        divMainElem.className = "main";
        const h1Elements = document.getElementsByTagName("h1");

        for (let i = 0; i < h1Elements.length; i++) {
            let paragraphElement = document.createElement("p");
            paragraphElement.innerText = h1Elements[i].innerText;
            paragraphElement.style.color = "red";
            paragraphElement.style.fontSize = "100px";
            divMainElem.appendChild(paragraphElement);
        }

        document.body.appendChild(divMainElem);
    } else {
        let div = document.getElementsByClassName("main")[0];
        div.remove();
    }
}























function log(obj1) {
    console.log(obj1);
}