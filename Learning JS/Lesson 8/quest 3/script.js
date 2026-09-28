// Зробити запит до SWAPI щоб отримати список людей з прізвищем Skywalker, вивести у консоль.
// Документація по пошуку - https://swapi.py4e.com/documentation#search
// Результат: вивести у консоль список людей з прізвищем
// Skywalker у форматі: [{ name: 'Luke Skywalker', height: 172, ... },
//  { name: 'Anakin Skywalker', height: 188, ... }, ...]

async function getSkywalkers() {
  try {
    const getName = await fetch("https://swapi.py4e.com/api/people/?page=");

    if (!getName.ok) {
      return error;
    }
    const res = await getName.json();
    const allName = res.results;
    const skywalkers = allName.filter((mass) =>
      mass.name.includes("Skywalker")
    );

    console.log(skywalkers);
  } catch (error) {
    console.log(error);
  }
}

getSkywalkers();
