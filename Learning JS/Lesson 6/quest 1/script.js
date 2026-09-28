// Створити ф-ію isString, яка першим параметром отримує функцію колбек та другим значення.
// Перевіряє чи передане значення це стрічка і колбек це функція та виконує колбек із цим значенням
// або виводить помилку в консоль якщо це не стрічка або колбек не є функцією

function isString(callback, value) {
  if (typeof callback === "function") {
    if (typeof value === "string") {
      callback(value);
    } else {
      console.log("value is not string");
    }
  } else {
    console.log("callback is not function");
  }
}
const callback = (value) => {
  console.log(value);
};
const notFunct = "aswe";
isString(callback, "funct");
isString(notFunct, "funct");
isString(callback, 5);
