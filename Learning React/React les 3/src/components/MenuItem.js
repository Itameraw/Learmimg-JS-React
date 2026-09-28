import React from "react";
const MenuItem = ({ title, link }) =>
  link ? (
    <a href={link} onClick={() => console.log(title)}>
      {title}
    </a>
  ) : (
    <div onClick={(event) => alert("This page is under construction yet")}>
      {title}
    </div>
  );

export default MenuItem;
