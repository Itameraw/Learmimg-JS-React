// Крім ресурсу /users API надає ще інші ресурси, наприклад
// /albums щоб отримати дані фотоальбомів
// І ці ресурси можуть залежати один від одного, наприклад ми можемо отримати альбоми
//  які належать певному користувачу за допомогою ендпоінту /users/1/albums - отримаємо альбоми
//  користувача у якого поле id = 1
// Завдання. Отримати список усіх альбомів які належать користувачу з id - 10.
// Використати fetch.
// Після отримання відповіді від API, перевірити чи запит виконався успішно
// (чи знаходиться код відповіді в діапазоні 200-299)
// Вивести у консоль результат

// fetch(`${baseUrl}/...`);

// Очікуваний результат - масив альбомів користувача 10

// Result:
// [
//  {
//    userId: 1
//    id: 1
//    title: "quidem molestiae enim"
//  },
//  {
//    userId: 1
//    id: 2
//    title: "sunt qui excepturi placeat culpa"
//  },
//  ...
// ]
fetch("https://jsonplaceholder.typicode.com/users/10/albums")
  .then((responce) => {
    if (responce.status === 200) {
      console.log("responce successful");
    }

    return responce.json();
  })
  .then((responce) => {
    console.log(responce);
  });
