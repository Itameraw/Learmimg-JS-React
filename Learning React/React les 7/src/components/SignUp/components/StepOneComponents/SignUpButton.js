import React from "react";
const SignUpButton = ({ title, icon, description, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`box-top ${active ? "box-top-active" : ""}`}
    >
      <img
        className="home-image"
        src={`/icons/${active ? "active-" : ""}${icon}.png`}
      />
      <div className="text-box">
        <div className="title-text-box">{title}</div>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default SignUpButton;
