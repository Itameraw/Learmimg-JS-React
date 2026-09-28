import Api from "./Api.js";

const findInput = document.querySelector("header");
const results = document.querySelector(".Results");

function renderMovies(films, newList) {
  films.forEach((elem) => {
    const createNewLi = document.createElement("li");
    createNewLi.innerHTML = `<p>${elem.title}</p>`;
    newList.append(createNewLi);
  });
}

findInput.addEventListener("keypress", async (evt) => {
  if (evt.key === "Enter") {
    const filmName = evt.target.value;
    const allFilm = await Api.fetchMoviesBySearchText(filmName);
    console.log(allFilm);
    if (allFilm.length !== 0) {
      results.append(allFilm.length);
      evt.target.value = "";
    } else {
      results.append(`No results for ${filmName}`);
    }

    const findUl = document.querySelector("#list");
    renderMovies(allFilm, findUl);
  }
});
