import React from "react";
import AppItem from "./AppItem";
import AppWrapper from "../elements/AppWrapper";
import turtles from "../elements/constants";
import Image from "./Image";
import getItemDescription from "../elements/utils";
const App = () => {
  return (
    <React.Fragment>
      <AppWrapper title="React Turtles">
        {turtles.map((elem) => (
          <AppItem
            imgUrl={elem.imgUrl}
            name={elem.name}
            description={getItemDescription(elem)}
            Image={Image}
          />
        ))}
      </AppWrapper>
    </React.Fragment>
  );
};
export default App;
