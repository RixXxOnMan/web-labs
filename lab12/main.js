// task 1
// Создание объекта obj1 с помощью литерала объекта
const obj1 = {
  property1: "значение 1",
  property2: 42,
  property3: true,
  property4: [1, 2, 3],
  property5: { key: "value" },
};
// Создание объекта obj2 с помощью конструктора объекта
const obj2 = new Object();
obj2.property1 = "значение 1";
obj2.property2 = 24;
obj2.property3 = false;
obj2.property4 = [4, 5, 6];
obj2.property5 = { key: "value" };

// task 2
// Вывод имен свойств объекта obj1
console.log(Object.keys(obj1));
// Вывод значений свойств объекта obj2
for (let key in obj2) {
  console.log(obj2[key]);
}

// task 3
obj1.printInfo = function () {
  console.log("Привет! Я объект obj1.");
  console.log("Мои свойства:");
  for (let key in this) {
    if (typeof this[key] !== "function") {
      console.log(`${key}: ${this[key]}`);
    }
  }
};
obj1.printInfo();

//task 5
const person = {
  name: "Егор",
  age: 18,
  gender: "мужской",
  socialStatus: "женат",
};

console.log("Имя:", person.name);
console.log("Возраст:", person.age);
console.log("Пол:", person.gender);
console.log("Социальный статус:", person.socialStatus);

// task 6

const objFirst = {
  car: "renault",
  number: "BX-6699-6",
  year: "2023",
};

const objCopy = { ...objFirst }; // Дублирование объекта obj1

console.log(objCopy);

//task 7
const obj3 = {
  country: "Belarus",
  city: "Minsk",
  prospekt: "nezavisimosti",
  building: "62",
};

Object.defineProperty(obj3, "country", {
  configurable: false, // Запрет на изменение значения свойства
  writable: false, // Запрет на присваивание нового значения свойству
});

Object.defineProperty(obj3, "city", {
  configurable: false, // Запрет на удаление свойства
  writable: false, // Разрешено только чтение (запрет на изменение значения)
});

Object.defineProperty(obj3, "prospekt", {
  configurable: false, // Запрет на изменение свойства (configurable переводит свойство в неконфигурируемое)
  enumerable: false, // Запрет на перечисление свойства в циклах
});

obj3.country = "new value"; // Не изменит значение свойства, так как запрещено
delete obj3.city; // Не удалит свойство, так как запрещено

for (let key in obj3) {
  console.log(key, obj3[key]); // Здесь свойство prospekt не будет выведено, так как запрещено перечисление
}
