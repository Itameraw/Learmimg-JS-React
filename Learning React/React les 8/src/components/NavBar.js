import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div className="nav-bar">
    <Link className="link" to="/">
      FavoriteMovies
    </Link>
    <Link className="link" to="/TopRatedMovies">
      TopRatedMovies
    </Link>
    <Link className="link" to="asfsaf">
      TVShows
    </Link>
  </div>
);
export default NavBar;
