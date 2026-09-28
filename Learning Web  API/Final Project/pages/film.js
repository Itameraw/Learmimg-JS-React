const root = document.querySelector(".app");
import Api from "./Api.js";

export function Film() {
  const layout = ` 
  <div class="header">
    <div>
        <div class="logo">
            <img  class = "log" src="https://i.pinimg.com/originals/a9/d5/ff/a9d5ff36fafc84be72b51f8533be4861.png">
        </div>
    </div>
    <div class="buttonHolder">
        <button class="Bookmark">Bookmark</button>
        <button class="Popular">
            Popular film
        </button>
    </div>
</div>
</div>
</header>
  <header class = "title"></header><div class ="titleAndHeart"></div>
    <div class = "poster"></div>
    <div class = "describe"></div>
    <ul class = "genre"></ul>
    `;

  root.innerHTML = layout;
  const logo = document.querySelector(".logo");
  const popularFilm = document.querySelector(".Popular");
  const bookmark = document.querySelector(".Bookmark");
  const title = document.querySelector(".title");
  const local = window.localStorage.getItem("liked-films");
  const poster = document.querySelector(".poster");
  const describe = document.querySelector(".describe");
  const genre = document.querySelector(".genre");
  const movieId = window.location.pathname;
  const id = movieId.replace("/", "");
  function addFilmToPage(movie) {
    const titleAndHeart = document.querySelector(".titleAndHeart");
    title.append(movie.title);

    if (local !== null) {
      if (local.search(movie.id) !== -1) {
        titleAndHeart.innerHTML = `<a href=# class="heart-active" id="${movie.id}"><i class="fas fa-heart"></i></a>`;
      } else {
        titleAndHeart.innerHTML = `<a id="${movie.id}"><i class="fas fa-heart"></i></a>`;
      }
    } else {
      titleAndHeart.innerHTML = ` <a id="${movie.id}"><i class="fas fa-heart"></i></a>`;
    }
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
    addHeart();
  }
  async function getFilm(id) {
    const movie = await Api.fetchMovieDetails(id);
    addFilmToPage(movie);
  }
  getFilm(id);

  function addHeart() {
    const findLikeButton = document.querySelectorAll("a");

    findLikeButton.forEach((buttonElement) => {
      buttonElement.addEventListener("click", (evt) => {
        const addLiked = buttonElement.classList.toggle("heart-active");

        if (addLiked) {
          setItemToLocalStorage(Number(buttonElement.id));
        } else {
          const storage = window.localStorage.getItem("liked-films");
          window.localStorage.removeItem("liked-films");
          const deletedOneElementInStorage = storage.replace(
            `${buttonElement.id};`,
            ""
          );
          window.localStorage.setItem(
            "liked-films",
            deletedOneElementInStorage
          );
        }
        evt.stopPropagation();
      });
    });
  }
  function setItemToLocalStorage(id) {
    if (window.localStorage.getItem("liked-films") === null) {
      window.localStorage.setItem("liked-films", `${id};`);
    } else {
      const oldStorage = window.localStorage.getItem("liked-films");
      const newStorage = oldStorage.concat(`${id};`);
      window.localStorage.setItem("liked-films", newStorage);
    }
  }
  bookmark.addEventListener("click", () => {
    window.history.pushState(null, null, "/Bookmark");
  });
  popularFilm.addEventListener("click", () => {
    window.history.pushState(null, null, "/PopularFilm");
  });
  logo.addEventListener("click", () => {
    window.history.pushState(null, null, "/");
  });
}
