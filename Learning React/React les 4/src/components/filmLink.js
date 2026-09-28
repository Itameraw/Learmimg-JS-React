import React from "react";

export const FilmLink = ({ title, poster, overview }) => (
  <div>
    <p>{title}</p>
    <img src={poster} />
    <p>{overview}</p>
    <br />
  </div>
);
