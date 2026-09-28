import React from "react";

export const FilmLink = ({ title, poster, overview, data, openLink }) => (
  <div>
    <p>{title}</p>
    <img onClick={() => openLink(data)} src={poster} />
    <p>{overview}</p>
    <br />
  </div>
);
