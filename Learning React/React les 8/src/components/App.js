import React from "react";
import { Route, Routes } from "react-router-dom";
import { FavoriteMovies } from "./FavoriteMovies";
import NavBar from "./NavBar";
import { TopRatedMovies } from "./TopRatedMovies";
import TVShows from "./TVShows";
import NotFound from "./NotFound";
function App() {
  const links = [
    "https://api.themoviedb.org/3/movie/popular?api_key=aefabdb15eb22896ff7b29b23c9559d8&language=en-US&page=",
    "https://api.themoviedb.org/3/movie/top_rated?api_key=aefabdb15eb22896ff7b29b23c9559d8&language=en-US&page=",
  ];

  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<FavoriteMovies link={links[0]} />} />
        <Route
          path="/TopRatedMovies"
          element={<TopRatedMovies link={links[1]} />}
        />
        <Route path="/TVShows" element={<TVShows />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
}
export default App;
