const root = document.querySelector(".app");
import Api from "./Api.js";

export function Film() {
  const layout = ` 
  <header class = "title"></header>
    <div class = "poster"></div>
    <div class = "describe"></div>
    <ul class = "genre"></ul>
    `;

  root.innerHTML = layout;
  const title = document.querySelector(".title");
  const poster = document.querySelector(".poster");
  const describe = document.querySelector(".describe");
  const genre = document.querySelector(".genre");
  const movieId = window.location.pathname;
  const id = movieId.replace("/", "");
  function addFilmToPage(movie) {
    title.append(movie.title);
    const posterFilm = document.createElement("ul");
    posterFilm.innerHTML = `
    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face${movie.backdrop_path}">`;
    poster.append(posterFilm);
    describe.append(movie.overview);

    movie.genres.forEach((elem) => {
      const createNewLi = document.createElement("li");
      createNewLi.innerHTML = `<p>${elem.name}</p>`;
      genre.append(createNewLi);
    });
  }
  async function getFilm(id) {
    const movie = await Api.fetchMovieDetails(id);
    addFilmToPage(movie);
  }
  getFilm(id);
}
