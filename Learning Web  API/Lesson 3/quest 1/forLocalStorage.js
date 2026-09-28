import Api from "./Api.js";
export function ForLocalStorage() {
  async function likedFilm() {
    const likedFilms = window.localStorage.getItem("liked-films");
    const ids = likedFilms.split(",");

    const movies = await Api.fetchMoviesByIds(id);
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
