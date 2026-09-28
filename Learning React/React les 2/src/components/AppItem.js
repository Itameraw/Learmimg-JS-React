import React from "react";
const AppItem = ({ name, description, Image, imgUrl }) => {
  return (
    <React.Fragment>
      <div>
        <h2>{name}</h2>
        <Image imgUrl={imgUrl} />
        <p>{description}</p>
      </div>
    </React.Fragment>
  );
};
export default AppItem;
