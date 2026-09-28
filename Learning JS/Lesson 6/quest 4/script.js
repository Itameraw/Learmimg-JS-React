// Створити клас який містить поле name.
// Зробити так щоб це поле автоматично через 5с занулювалося(ставало null) після створення об’єкта
// Також добавити функцію(метод) цього класу яка буде зупиняти(скасовувати) це занулювання
class becomeNull {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;

    this.setNull = setTimeout(() => {
      this._name = null;
      console.log(this);
    }, 5000);
  }
  dontNull() {
    clearTimeout(this.setNull);
  }
}
const name1 = new becomeNull("Vasya");

console.log(name1);
name1.dontNull();
