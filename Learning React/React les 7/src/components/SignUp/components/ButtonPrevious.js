import React from "react";
const getPreviousStep = (stepSignUp) => {
  if (stepSignUp === "stepTwo") {
    return "stepOne";
  }
  if (stepSignUp === "stepThree") {
    return "stepTwo ";
  }
};
const ButtonPrevious = ({ stepSignUp, setStepSignUp }) => (
  <div className="box-button-previous">
    <button
      onClick={() => {
        let previousStep = getPreviousStep(stepSignUp);
        setStepSignUp(previousStep);
      }}
      className="button-previous"
    >
      <img src="/icons/VectorRight.svg" />
      <div className="button-previous-text">Previous</div>
    </button>
  </div>
);
export default ButtonPrevious;
