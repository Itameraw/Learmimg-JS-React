// Дано: Функція для генерації ID
// 1) Створити клас TodoItem із полями(властивостями): id(генерується у конструкторі за допомогою функції), name, checked(за замовчуванням false).
//  Для поля checked написати гетер та сетер (добавити валідацію: поле може приймати лише булеве значення true або false)
// 2) Створити клас TodoList із полями:  items(за замовчуванням пустий масив).
// Добавити наступні методи:
// addItem - метод який добавляє елементи до масиву (потрібно зробити валідацію на тип TodoItem)
// removeItemById - метод який видаляє елемент з масиву по id
// getItemById - метод який повертає елемент TodoItem з масиву по id
// 3) Створити екземпляр класу TodoList;
// 4) Створити 4 екземпляри класу TodoItem, добавити їх у TodoList та вивести у консоль екземпляр класу TodoList.
// 5) Поміняти значення checked у одного екземпляру TodoItem та вивести TodoList у консоль( у масиві items це поле має бути оновлене)
// 6) Видалити 2 екземпляри TodoItem із TodoList та вивести у консоль TodoList(у масиві items має залишитись лише 2 екземпляри TodoItem)

function generateId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}
class TodoItem {
  static defaultChecked = false;
  constructor(id, name, checked) {
    this.id = id;
    this.name = name;
    this.checked = checked;
  }

  get checked() {
    return this._checked;
  }
  set checked(value) {
    if (typeof value === "boolean") {
      this._checked = value;
    } else {
      this._checked = TodoItem.defaultChecked;
    }
  }
}
class TodoList {
  addItem(item) {
    this.items.push(item);
  }
  removeItemById(id) {
    this.items = this.items.filter((item) => item.id !== id);
  }
  getItemById(id) {
    return this.items.find((item) => item.id === id);
  }

  constructor() {
    this.items = [];
  }
}
const users = new TodoList();
const user1 = new TodoItem(generateId(), "Stepan", true);
const user2 = new TodoItem(generateId(), "Vasil", "sasd");
const user3 = new TodoItem(generateId(), "Vany");
const user4 = new TodoItem(generateId(), "Sirko");
users.addItem(user1);
users.addItem(user2);
users.addItem(user3);
users.addItem(user4);
users.removeItemById(user1.id);
users.removeItemById(user2.id);
console.log(users);
