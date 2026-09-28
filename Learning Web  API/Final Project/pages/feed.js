const root = document.querySelector(".app");
import Api from "./Api.js";
export let idFilmFromFeed;
export function Feed() {
  const layout = ` <header>

<div class="header">
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

<div class="search">
<input placeholder="search"></input>
<div class="Results">Results:</div>
</div>
<ul id="list"></ul>
<div id="buttonPlace"></div>`;

  root.innerHTML = layout;
  let fillmNames;

  let pages;
  const logo = document.querySelector(".logo");
  const popularFilm = document.querySelector(".Popular");
  const bookmark = document.querySelector(".Bookmark");
  const findInput = document.querySelector(".search");
  const results = document.querySelector(".Results");
  const buttonPlace = document.querySelector("#buttonPlace");
  const findUl = document.querySelector("#list");
  const button = document.createElement("button");
  const local = window.localStorage.getItem("liked-films");
  function renderMovies(films, newList, totalPage) {
    films.forEach((elem) => {
      const createNewLi = document.createElement("li");
      if (local !== null) {
        if (local.search(elem.id) !== -1) {
          createNewLi.innerHTML = `<div class = "buttons"><p id="${elem.id}">${elem.title} <a href = # class="heart-active" id="${elem.id}"><i class="fas fa-heart"></i></a></p></div>`;
        } else {
          createNewLi.innerHTML = `<div class = "buttons"><p id="${elem.id}">${elem.title} <a id="${elem.id}"><i class="fas fa-heart"></i></a></p></div>`;
        }
      } else {
        createNewLi.innerHTML = `<div class = "buttons"><p id="${elem.id}">${elem.title} <a id="${elem.id}"><i class="fas fa-heart"></i></a></p></div>`;
      }

      newList.append(createNewLi);
    });

    button.innerHTML = `Load More`;
    buttonPlace.append(button);

    if (totalPage === pages) {
      buttonPlace.remove(button);
    }
    addHeart();
    filmOnClick();
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

  async function filmOnClick() {
    const film = document.querySelectorAll(".buttons");
    film.forEach((elem) => {
      elem.addEventListener("click", async (evt) => {
        (idFilmFromFeed = evt.path[0].id),
          window.history.pushState(null, null, evt.path[0].id);
      });
    });
  }
}
