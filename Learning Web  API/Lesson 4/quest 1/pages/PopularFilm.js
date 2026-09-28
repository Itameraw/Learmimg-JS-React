import Api from "./Api.js";
export let filmId;
const root = document.querySelector(".app");
export function PoppularFilm() {
  const layout = `<ul id = "list"></ul>`;
  root.innerHTML = layout;
  async function createListLikedMovie() {
    const getPopularMovie = await Api.fetchPopularMovies();
    getPopularMovie.forEach((elem) => {
      const list = document.querySelector("#list");
      const createNewLi = document.createElement("li");
      createNewLi.innerHTML = `<div class = "buttons" ><p id ="${elem.id}">${elem.title} <a href="#"  id="${elem.id}"><i class="fas fa-heart"></i></a></p></div>`;
      list.append(createNewLi);
    });
    filmOnClick();
  }
  createListLikedMovie();
  async function filmOnClick() {
    const film = document.querySelectorAll(".buttons");
    film.forEach((elem) => {
      elem.addEventListener("click", async (evt) => {
        (filmId = evt.path[0].id),
          window.history.pushState(null, null, evt.path[0].id);
      });
    });
  }
}
