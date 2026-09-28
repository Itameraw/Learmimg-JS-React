import React, { useState, useEffect } from "react";
import { FilmLink } from "./filmLink";
import PopUp from "./PopUp";
import useFetchMovies from "./useFetchMovies";

function Movies({ link }) {
  const filmsData = useFetchMovies();
  const { data, total, currentPage } = filmsData;
  const [show, setShow] = useState(true);
  const [page, setPage] = useState(1);
  const [theme, setTheme] = useState(true);
  const [selectedFilm, setSelectedFilm] = useState(null);
  useEffect(async () =>
    fetch(`${link}${page}`)
      .then((response) => response.json())
      .then((filmList) => {
        filmsData.setDate(filmList.results);
        filmsData.setTotal(filmList.total_pages);
        filmsData.setCurrentPage(filmList.page);
      }, page)
  );
  theme
    ? (document.body.style.backgroundColor = "white")
    : (document.body.style.backgroundColor = "black");
  theme
    ? (document.body.style.color = "black")
    : (document.body.style.color = "white");
  return (
    <React.Fragment>
      <div className="iconAndLogo">
        <h1>Favorite Movies</h1>
        <img
          className="sunMoonIc"
          onClick={() => setTheme(!theme)}
          src={
            theme
              ? "https://cdn-icons.flaticon.com/png/512/3073/premium/3073665.png?token=exp=1633792625~hmac=8ababe5eb5880e592f5b22d42dc6a524"
              : "https://cdn-icons-png.flaticon.com/512/702/702471.png"
          }
        />
      </div>
      {data.map((film) => (
        <React.Fragment>
          <button onClick={() => setShow(!show)}>
            {show ? "showRate" : "hideRate"}
          </button>

          {show || <h2>{film.popularity}</h2>}
          <FilmLink
            key={film.id}
            title={film.title}
            poster={`https://www.themoviedb.org/t/p/w220_and_h330_face${film.backdrop_path}`}
            overview={film.overview}
            openLink={setSelectedFilm}
            data={film}
          />
        </React.Fragment>
      ))}
      {selectedFilm && (
        <PopUp
          releaseDate={selectedFilm.release_date}
          closePopUp={() => setSelectedFilm(null)}
        />
      )}
      <div className="buttonHolder">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          previous page
        </button>
        <button disabled={page === total} onClick={() => setPage(page + 1)}>
          next page
        </button>
      </div>
    </React.Fragment>
  );
}
export default Movies;
