// Дано: функція яка приймає масив чисел
// Результат: вивести у консоль "YES" якщо усі числа у масив парні та "NO" в іншому випадку
// Приклад:
// [1, 2, 3, 9] => “NO”
// [2, 4, 6] => “YES
function isEvenArray(initialArray) {
  const par = initialArray.every((num) => Number.isInteger(num / 2));
  if (par) {
    console.log(initialArray, "YES");
  } else {
    console.log(initialArray, "NO");
  }
}
isEvenArray([1, 2, 3, 9]);
isEvenArray([2, 4, 6]);
