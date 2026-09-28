import Api from "./Api.js";
export let idFilmFromBookmark;
const root = document.querySelector(".app");
export function forLocalStorage() {
  const layout = `<div class="header">
  <div>
      <div class="logo">
          <img class = "log" src="https://i.pinimg.com/originals/a9/d5/ff/a9d5ff36fafc84be72b51f8533be4861.png">
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
<ul id = "list"></ul>`;
  root.innerHTML = layout;
  const logo = document.querySelector(".logo");
  const popularFilm = document.querySelector(".Popular");
  const bookmark = document.querySelector(".Bookmark");
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
      createNewLi.innerHTML = `<div class = "buttons" ><p id=${elem.id}>${elem.title} <a class="heart-active" id="${elem.id}"><i class="fas fa-heart"></i></a></p></div>`;
      list.append(createNewLi);
      addHeart();
      filmOnClick();
    });
    async function filmOnClick() {
      const film = document.querySelectorAll(".buttons");
      film.forEach((elem) => {
        elem.addEventListener("click", async (evt) => {
          (idFilmFromBookmark = evt.path[0].id),
            window.history.pushState(null, null, evt.path[0].id);
        });
      });
    }
  }
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
  likedFilm();
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
