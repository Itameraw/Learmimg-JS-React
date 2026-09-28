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
  async fetchMoviesByIds(ids) {
    const fetchPromises = ids.map(async (id) => {
      const movie = await fetch(`
    https://api.themoviedb.org/3/movie/${id}?api_key=aefabdb15eb22896ff7b29b23c9559d8`);
      return movie.json();
    });
    const allFilms = await Promise.all(fetchPromises);
    return allFilms;
  }
  async fetchPopularMovies() {
    const getListPopularMovies = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=aefabdb15eb22896ff7b29b23c9559d8&language=en-US&page=1`
    );
    const toJsonListPopularMovies = await getListPopularMovies.json();
    return toJsonListPopularMovies.results;
  }
  async fetchMovieDetails(id) {
    const movieDetails = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=aefabdb15eb22896ff7b29b23c9559d8`
    );
    return movieDetails.json();
  }
}

export default new Api();
