import Api from "./Api.js";
const root = document.querySelector(".app");
export function forLocalStorage() {
  const layout = `<ul id = "list"></ul>`;
  root.innerHTML = layout;
  async function likedFilm() {
    const likedFilms = window.localStorage.getItem("liked-films");
    const ids = likedFilms.split(";").filter((elem) => elem !== "");

    const movies = await Api.fetchMoviesByIds(ids);
    createListLikedMovie(movies);
  }
  function createListLikedMovie(movies) {
    movies.forEach((elem) => {
      const list = document.querySelector("#list");
      const createNewLi = document.createElement("li");
      createNewLi.innerHTML = `<div class = "buttons"><p>${elem.title} <a href="#" class="heart-active" id="${elem.id}"><i class="fas fa-heart"></i></a></p></div>`;
      list.append(createNewLi);
    });
  }
  likedFilm();
}
