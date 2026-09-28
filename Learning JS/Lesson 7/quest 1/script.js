// На лекції ми використовували API jsonplaceholder - 'https://jsonplaceholder.typicode.com/'
// Можна перейти за посиланням і ще раз ознайомитись з даним API
// Можна створити константу baseUrl = https://jsonplaceholder.typicode.com
// const baseUrl = "https://jsonplaceholder.typicode.com";
// Будемо використовувати ресурс /users щоб отримати дані користувачів
// Завдання: Отримати список користувачів з віддаленого ресурсу /users.
// Використати fetch.
// Очікуваний результат - масив користувачів

// Result: [
//  {
//    id: 1
//    name: "Leanne Graham"
//    username: "Bret"
//    email: "Sincere@april.biz"
//    address: Object
//    phone: "1-770-736-8031 x56442"
//    website: "hildegard.org"
//    company: Object
//  },
//  {
//    id: 2
//    ...
//  },
//  ...
// ]
fetch("https://jsonplaceholder.typicode.com/users")
  .then((responce) => responce.json())
  .then((json) => console.log(json));
