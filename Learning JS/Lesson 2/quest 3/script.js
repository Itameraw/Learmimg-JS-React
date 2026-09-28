// Дано: функція яка приймає масив елементів будь-яких типів
// Результат: вивести у консоль масив який містить лише стрічки початкового масиву
// Приклад:
// [2, “string”, 3, , , ”test”] => [“string”, “test”]
function filterArray(initialArray) {
  const str = initialArray.filter((num) => typeof num === "string");
  console.log(str);
}
filterArray([2, "string", 3, 2, null, "test"]);
