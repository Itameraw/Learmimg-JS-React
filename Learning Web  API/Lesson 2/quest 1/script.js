import Api from "./Api.js";
let fillmNames;
let pages;
const findInput = document.querySelector("header");
const results = document.querySelector(".Results");
const buttonPlace = document.querySelector("#buttonPlace");
const findUl = document.querySelector("#list");
const button = document.createElement("button");
function renderMovies(films, newList, totalPage) {
  films.forEach((elem) => {
    const createNewLi = document.createElement("li");
    createNewLi.innerHTML = `<p>${elem.title}</p>`;
    newList.append(createNewLi);
  });

  button.innerHTML = `Load More`;
  buttonPlace.append(button);

  if (totalPage === pages) {
    buttonPlace.remove(button);
  }
}

findInput.addEventListener("keypress", async (evt) => {
  if (evt.key === "Enter") {
    const firstPage = 1;
    const filmName = evt.target.value;
    const allFilm = await Api.fetchMoviesBySearchText(filmName, firstPage);
    if (allFilm.length !== 0) {
      results.append(allFilm.results.length);
    } else {
      results.append(`No results for ${filmName}`);
    }
    pages = allFilm.page;

    fillmNames = filmName;
    evt.target.value = "";

    renderMovies(allFilm.results, findUl);
  }
});
buttonPlace.addEventListener("click", async () => {
  const pagePlusOne = pages + 1;
  const loadMoreFilm = await Api.fetchMoviesBySearchText(
    fillmNames,
    pagePlusOne
  );
  pages = loadMoreFilm.page;
  renderMovies(loadMoreFilm.results, findUl, loadMoreFilm.total_pages);
});
