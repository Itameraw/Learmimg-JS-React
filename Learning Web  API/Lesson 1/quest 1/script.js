const toList = document.querySelector("ul");
class Api {
  async fetchPopularMovies() {
    try {
      const loadingTextStart = document.createElement("h1");
      loadingTextStart.textContent = "Loading popular movies";

      toList.prepend(loadingTextStart);

      const giveMovie = await fetch(
        "https://api.themoviedb.org/3/movie/550?api_key=aefabdb15eb22896ff7b29b23c9559d8",
        {
          method: "GET",
          headers: {
            Cookie: "galaxy-sticky=faBwZHABTjyc6dDCK-rm4dz",
          },
          redirect: "follow",
        }
      );

      const res = await giveMovie.json();

      return res;
    } catch (error) {
      console.log(error);
    } finally {
      const loadingTextEnd = document.querySelector("h1");
      loadingTextEnd.remove();
    }
  }
  async renderPopularMovies() {
    const res = await this.fetchPopularMovies();
    console.log(res);

    const film = document.createElement("ul");

    film.innerHTML = `
    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face${res.backdrop_path}">
    <p>${res.title}</p>
    <p>${res.release_date}</p> `;
    console.log(film);
    toList.prepend(film);
  }
}

const claw = new Api();
claw.renderPopularMovies();
