function log(obj) {
    console.log(obj);
}

log("--------------------------");
log(`1. 1. Создайте объект-конструктор (класс), который содержит 
информацию, в соответствии с вариантом, таблица 19.1
Информация о товаре (код товара, наименование, товарная группа, 
количество)`);

class Product {
    #code
    #name
    #group
    #count

    constructor(code, name, group, count) {
        this.#code = code || 0;
        this.#name = name || 'name';
        this.#group = group || 'group';
        this.#count = count || 0;
    }

    get code() {
        return this.#code;
    }

    set code(code) {
        if (code === '') {
            throw new Error('Идентификатор товара не может быть пустым')
        }
        this.#code = code;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        if (name === '') {
            throw new Error('Имя товара не может быть пустым')
        }
        this.#name = name;
    }

    get group() {
        return this.#group;
    }

    set group(group) {
        if (group === '') {
            throw new Error('Группа товара не может быть пустым')
        }
        this.#group = group
    }

    get count() {
        return this.#count;
    }

    set count(count) {
        if (count === '' || count < 0) {
            throw new Error('Количество товара должно быть указано или не должно быть отрицательным')
        }
        this.#group = group
    }

    // возвращает объект, состоящий из экземпляров класса
    toJSON() {
        return {
            code: this.#code,
            name: this.#name,
            group: this.#group,
            count: this.#count
          }
    }
}

log("--------------------------");
log(`2. Создайте экземпляр объекта, выполнив ввод данные с помощью 
диалогового окна prompt`);

let code = Number.parseInt(prompt('Введите код товара'), 10);
let nameProd = prompt('Введите имя товара');
let group = prompt('Введите группу товара');
let count = Number.parseInt(prompt('Введите количество товара'), 10);

let prod = new Product(code, nameProd, group, count);

log( prod.code );
log( prod.name );
log( prod.group );
log( prod.count );

log("--------------------------");
log(`3. По нажатия на кнопку, преобразуйте созданный объект JavaScript в 
JSON-строку`);

log("--------------------------");
log(`4. Выведите полученное строковое значение, выполнив встраивание 
текстового содержимого в HTML-элемент.`);

console.log( JSON.stringify(prod) );

function JSONStringify() {
    const paragraph = document.createElement('p');
    paragraph.innerHTML += JSON.stringify(prod);
    log( JSON.stringify(prod) );
    document.body.appendChild(paragraph);
}

log("--------------------------");
log(`5. Преобразуйте созданную JSON-строку назад в объект JavaScript таким 
образом, чтобы полученный объект содержал только те свойства, для которых 
значение свойств имеет тип string.`);

let str = JSON.stringify(prod);

let prodFromJSONObj = JSON.parse(str, function(key, value) {
    if (key === "code" || key === "count") {
        
    } else {
        return value;
    }
});

log( prodFromJSONObj );

log("--------------------------");
log(`6. Создайте строковую переменную, которая содержит данные в виде 
JSON-строки`);

let JSON_Obj = `{"code":0,"name":"name","group":"group","count":0}`;