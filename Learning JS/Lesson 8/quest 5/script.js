// Написати функцію яка буде використовувати попередньо написану функцію fetchSWAPI, ця
// функція повинна робити запити щоб отримати дані людини з вказаним ім'ям, після цього
// на основі отриманої відповіді паралельно отримати деталі фільмів у яких людина з'явилась.
// Функція повинна повертати об'єкт з ім'ям людини та списком з деталями фільмів
// у форматі: {name: ‘’, films: [{title: ‘’, episode_id: ‘’, ...}, ...]}
async function fetchSWAPI(resource) {
  let url;

  try {
    const rootUrl = "https://swapi.py4e.com/api/";
    if (!resource.includes(rootUrl)) {
      url = rootUrl + resource;
    } else {
      url = resource;
    }

    const res = await fetch(url);
    const parsRes = await res.json();
    return parsRes;
  } catch (error) {
    console.log(" resource ", resource);
    console.log(" error ", error);
  }
}
async function getPersonFilms(name) {
  try {
    const allGetName = await fetchSWAPI("people/");
    const getName = allGetName.results;
    const names = getName.filter((mass) => mass.name.includes(name));

    const film = names[0].films;
    console.log(film);
    const films = await film.reduce(async (acc, value) => {
      const findFilm = await fetchSWAPI(value);
      const resolvedAcc = await acc;

      return [...resolvedAcc, findFilm];
    }, []);
    const Name = names[0].name;
    return { Name, films };
  } catch (error) {
    console.log(error);
  }
}

async function testGetPersonFilms() {
  const lukeFilms = await getPersonFilms("Luke");
  console.log("lukeFilms ", lukeFilms);

  const kenobiFilms = await getPersonFilms("Kenobi");
  console.log("kenobiFilms ", kenobiFilms);
}

testGetPersonFilms();
