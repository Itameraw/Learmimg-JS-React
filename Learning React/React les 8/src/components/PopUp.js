import React from "react";
const PopUp = ({ releaseDate, closePopUp }) => (
  <div className="popUpWrapper">
    <div className="popUpContent">
      <h3>{releaseDate}</h3>
      <div className="closePopUp" onClick={closePopUp}>
        x
      </div>
    </div>
  </div>
);
export default PopUp;
