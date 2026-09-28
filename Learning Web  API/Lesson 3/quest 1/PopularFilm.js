import Api from "./Api.js";
async function createListLikedMovie() {
  const getPopularMovie = await Api.fetchPopularMovies();
  getPopularMovie.forEach((elem) => {
    const list = document.querySelector("#list");
    const createNewLi = document.createElement("li");
    createNewLi.innerHTML = `<div class = "buttons"><p>${elem.title} <a href="#"  id="${elem.id}"><i class="fas fa-heart"></i></a></p></div>`;
    list.append(createNewLi);
  });
}
createListLikedMovie();
