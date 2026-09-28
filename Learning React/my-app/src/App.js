import React from "react";
import { formatUserName } from "./helpers";
const text = {
  t1: "This test text for homework page",
  t2: "Hello, New Stranger!",
  t3: "Here we have the list:",
  t4: "Just text here",
  t5: "Here we have text and link!",
  t6: "It is link to our docs",
  t7: "And the picture!!!",
};
const link = {
  link1: "https://uk.reactjs.org/docs",
  img: "https://www.rspb.org.uk/globalassets/images/birds-and-wildlife/non-bird-species-illustrations/fox_1200x675.jpg",
};
export const App = () => {
  return (
    <React.Fragment>
      <h1 style={{ backgroundColor: "red" }}>{text.t1}</h1>
      <br />
      <h2>{formatUserName("Igor", "Igor")}</h2>
      <br />
      <h3>{formatUserName("John", "Doe")}</h3>
      <p>{text.t3}</p>
      <ul>
        <li tab-index="_1">{text.t4}</li>
        <li>
          <span>{text.t5}</span>
          <a href={link.link1} target="_blank">
            {text.t6}
          </a>
        </li>
        <li>
          <span>{text.t7}</span>
          <img src={link.img} alt="Fox" width="300" />
        </li>
      </ul>
    </React.Fragment>
  );
};
