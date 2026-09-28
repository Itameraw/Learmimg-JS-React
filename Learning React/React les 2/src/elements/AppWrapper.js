import React from "react";
const AppWrapper = ({ title, children }) => {
  return (
    <React.Fragment>
      <div className="header">
        <header>
          <h1>{title}</h1>
        </header>
      </div>
      <div>{children}</div>
    </React.Fragment>
  );
};
export default AppWrapper;
