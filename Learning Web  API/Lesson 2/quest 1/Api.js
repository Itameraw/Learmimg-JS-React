class Api {
  async fetchMoviesBySearchText(query, page) {
    try {
      const getListMovie = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=aefabdb15eb22896ff7b29b23c9559d8&page=${page}&query=${query}`,
        {
          method: "GET",
          headers: {
            Cookie: "galaxy-sticky=faBwZHABTjyc6dDCK-rm4dz",
          },
          redirect: "follow",
        }
      );
      const toJsonMovie = await getListMovie.json();

      return toJsonMovie;
    } catch (err) {
      console.log(err);
    }
  }
}
const asd = new Api();
asd.fetchMoviesBySearchText("Home Alone");

export default new Api();
