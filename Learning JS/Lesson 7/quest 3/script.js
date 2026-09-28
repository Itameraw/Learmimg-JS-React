// Завдання. Створити нового користувача - зробити POST запит на ендпоінт
// 'https://jsonplaceholder.typicode.com/users'.
// Використати fetch.
// Для нового користувача вказати поля name, username, email.
// Оскільки дане API працює з JSON то body запиту повинне бути у JSON форматі.
// Вказати для запиту заголовок 'Content-type' з значенням 'application/json'
// Після отримання відповіді від API, перевірити чи запит виконався успішно
// Вивести у консоль результат
const newUser = {
  name: "Serg",
  username: "V3000",
  email: "V3000@gmail.com",
};

fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  body: JSON.stringify(newUser),
  Headers: { "Content-type": "aplication/json" },
})
  .then((res) => res.json())
  .then((data) => console.log(data));
