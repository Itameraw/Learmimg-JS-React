// Завдання Зробити запит до
// https://swapi.py4e.com/api/ і отримати список планет, вивести у консоль.
// Результат: вивести у консоль список планет у форматі:
//  [{ name: 'Tatooine', rotation_period: '23', ... },
//   { name: 'Alderaan', rotation_period: '24', ... }, ... ]
async function getPlanets() {
  try {
    let page = 1;
    for (let i = 1; i <= page; i++) {
      page += 1;
      const getPlanet = await fetch(
        `https://swapi.py4e.com/api/planets/?page=${i}`
      );
      if (getPlanet.status === 404) {
        break;
      }
      const res = await getPlanet.json();
      console.log(res);
    }
  } catch (error) {
    console.log(error);
  }
}
getPlanets();
