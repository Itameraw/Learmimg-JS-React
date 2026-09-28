// Написати функцію fetchSWAPI яка буде приймати кінцевий ресурс,
//  робити запит до SWAPI і повертати відповідь у вигляді об'єкту.
// Функція fetchSWAPI буде приймати 2 параметри:
// resource - стрічка - кінцевий ресурс (наприклад 'planets/')
// або повна url на SWAPI (наприклад https://swapi.py4e.com/api/planets/1/),
// в функції перевіряти і будувати кінцевий url
// throwError - булеве значення - чи потрібно викидати помилку у
// разі невдалого ревесту. По замовчуванню - false.
// Функція fetchSWAPI повинна перевіряти чи запит відбувся успішно.
// У разі помилки її потрібно обробляти - вивести у консоль resource та помилку.
//  Також якщо throwError - true то викидати помилку далі.
// Функція повинна повертати розпаршений об'єкт відповіді від API.
// Функція містить в собі root url на SWAPI, додає кінцевий ресурс resource і робить запит.
// Після реалізації функції потрібно її протестувати викликавши декілька раз
// з параметрами як вказано нижче і вивести результат виконання запитів - testFetchSWAPI.
async function fetchSWAPI(resource, throwError = false) {
  let url;
  try {
    if (throwError) {
      throw new Error("error =" + throwError);
    }
    const rootUrl = "https://swapi.py4e.com/api/";
    if (!resource.includes(rootUrl)) {
      url = rootUrl + resource;
    } else {
      url = resource;
    }

    console.log(url);
    const res = await fetch(url);
    const parsRes = await res.json();
    return parsRes;
  } catch (error) {
    console.log(" resource ", resource);
    console.log(" error ", error);
  }
}

async function testFetchSWAPI() {
  try {
    const person = await fetchSWAPI("people/1/");
    console.log("person ", person);

    const film = await fetchSWAPI("https://swapi.py4e.com/api/films/1/");
    console.log("film ", film);

    const film1001Id = await fetchSWAPI("films/1001/");
    console.log("film1001Id ", film1001Id);

    // should throw error
    await fetchSWAPI("films/1101/", true);
  } catch (error) {
    console.log("testFetchSWAPI error ", error);
  }
}

testFetchSWAPI();
