function log(obj) {
    console.log(obj);
}

log("-----------------------")
log(`1. Создать веб-документ, содержащий форму. На форме должны 
присутствовать текстовое поле для ввода, зависимый и независимые 
переключатели, выпадающий список, кнопки <button>, <input type=’submit’>, 
<input type=’reset’> и многострочное текстовое поле.`);

log("-----------------------")
log(`2. Напишите сценарий, который при первом нажатии на кнопку 
<button>, добавит в текстовое поле текст «текстовое поле». При последующих 
нажатиях на указанную кнопку реализуйте переключение цвета текста между 
двумя произвольными цветами (второй клик установит цвет, а последующие 
– будут переключать).`);

const btn = document.getElementById("justBtn");
const input = document.getElementById("input");
log(input);

let counter = 1; // переключение кнопки
const colors = ["red", "green"];

function interactWithInput() {
    if (counter == 1) {
        input.value = "текстовое поле";
    }
    if (counter == 2) {
        input.style.color = colors[0];
    } else if (counter > 2) {
        if (input.style.color == colors[0]) {
            input.style.color = colors[1];
        } else {
            input.style.color = colors[0];
        }
    }
    log(counter);
    counter++;
}

log("-----------------------")
log(`3. Напишите сценарий, который, при нажатии на кнопку <input type=’reset’> будет получать текст из многострочного текстового поля, запрашивать у 
пользователя искомую строку, сравнивать содержимое поля со значением, 
введенным пользователем и выдавать соответствующий результат.`);

let promptForResetBtn = prompt("Введите искомую строку: ");
const resetBtn = document.getElementById("resetBtn");
const field = document.getElementById("bigTextField");

function compareStrings() {
    log(promptForResetBtn.trim() === field.value.trim());
}

log("-----------------------")
log(`4. Напишите сценарий, который по двойному клику на кнопке <input
type=’submit’> выведет на веб-страницу контент вида: переключатель: 
выбранный элемент radio, флажки: список отмеченных флажков, выпадающий 
список: выбранный элемет/элементы списка. При этом, если хоть один из 
элементов не выбран (radio, checkbox, select), необходимо вывести сообщение, 
содержащее элементы, которые необходимо заполнить. Выполнить 
стилистическое оформление выводимого результата.`);

const form = document.getElementById('form');
const paragraphOfInputs = document.createElement('p');
paragraphOfInputs.setAttribute('style', 'white-space: pre;'); // чтобы можно было textContent с новой строки вызывать

let isAnyRadioPressed;
let isAnyCheckboxPressed;
let isAnyOptionSelected;

function showInputs() {
    for (const child of form.children) {

        if (child.tagName == "INPUT" && child.type == "radio") {
            if (child.checked) {
                paragraphOfInputs.textContent += `input radio ${child.id} is checked\r\n`;
                isAnyRadioPressed = true;
            } else {
                paragraphOfInputs.textContent += `input radio ${child.id} is not checked\r\n`;
            }
        }
    
        if (child.tagName == "INPUT" && child.type == "checkbox") {
            if (child.checked) {
                paragraphOfInputs.textContent += `input checkbox ${child.id} is checked\r\n`;
                isAnyCheckboxPressed = true;
            } else {
                paragraphOfInputs.textContent += `input checkbox ${child.id} is not checked\r\n`;
            }
        }
    
        if (child.tagName == "SELECT") {
           for (let j = 0; j < child.children.length; j++) {
                if (child.children[j].selected) {
                    paragraphOfInputs.textContent += `input option ${child.children[j].value} is selected\r\n`;
                    isAnyOptionSelected = true;
                } else {
                    paragraphOfInputs.textContent += `input option ${child.children[j].value} is not selected\r\n`;
                }
           }
        }
    }
    paragraphOfInputs.textContent += `-------------\r\n`;
    if (!isAnyRadioPressed) {
        paragraphOfInputs.textContent += `you should type any radio\r\n`;
    }
    if (!isAnyCheckboxPressed) {
        paragraphOfInputs.textContent += `you should type any checkbox\r\n`;
    }
    if (!isAnyOptionSelected) {
        paragraphOfInputs.textContent += `you should select any option\r\n`;
    }
    document.body.appendChild(paragraphOfInputs);
}
// можно 4-ю было через квериСелектор написать, но мне лень переписывать

log("-----------------------")
log(`5. Напишите сценарий, который по нажатию на кнопку <button> будет
создавать и вызывать событие для элемента <input type=’submit’> ‘click’.`);

const button = document.getElementById('eventBtn');
const inputSubmit = document.querySelector('input[type="submit"]');

button.addEventListener('click', function() {
    let event = new Event('click');
    inputSubmit.dispatchEvent(event);
});

