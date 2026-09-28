import React from "react";
const Image = ({ imgUrl }) => {
  return (
    <React.Fragment>
      <img src={imgUrl} />
    </React.Fragment>
  );
};
export default Image;
