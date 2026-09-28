const root = document.querySelector(".app");
import Api from "./Api.js";
export function Feed() {
  const layout = ` <header>
<input placeholder="search"></input>
<div class="buttonHolder">
<div>
    <button class="Bookmark">
        Bookmark
    </button>
</div>
<button class="Popular">
   Popular film
</button>
</div>
</div>
</header>
<div class="Results">Results:</div>
<ul id="list"></ul>
<div id="buttonPlace"></div>`;

  root.innerHTML = layout;
  let fillmNames;
  let pages;
  const popularFilm = document.querySelector(".Popular");
  const bookmark = document.querySelector(".Bookmark");
  const findInput = document.querySelector("header");
  const results = document.querySelector(".Results");
  const buttonPlace = document.querySelector("#buttonPlace");
  const findUl = document.querySelector("#list");
  const button = document.createElement("button");

  function renderMovies(films, newList, totalPage) {
    films.forEach((elem) => {
      const createNewLi = document.createElement("li");
      createNewLi.innerHTML = `<div class = "buttons"><p>${elem.title} <a id="${elem.id}"><i class="fas fa-heart"></i></a></p></div>`;
      newList.append(createNewLi);
    });

    button.innerHTML = `Load More`;
    buttonPlace.append(button);

    if (totalPage === pages) {
      buttonPlace.remove(button);
    }
    addHeart();
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
      buttonElement.addEventListener("click", () => {
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
}
