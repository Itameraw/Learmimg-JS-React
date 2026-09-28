import React from "react";
import { DEFAULT_FORM_DATA } from "../../constants";

const getNextStep = (stepSignUp, setFormData, formData) => {
  if (stepSignUp === "stepOne") {
    return "stepTwo";
  }
  if (stepSignUp === "stepTwo") {
    return "stepThree";
  }
  if (stepSignUp === "stepThree") {
    setFormData(DEFAULT_FORM_DATA);
    return "stepOne";
  }
};
const ButtonNext = ({
  stepSignUp,
  setStepSignUp,
  buttonName,
  formData,
  setFormData,
}) => (
  <div className="button-next-holder">
    <button
      onClick={() => {
        let nextStep = getNextStep(stepSignUp, setFormData, formData);
        setStepSignUp(nextStep);
        {
          stepSignUp === "stepThree"
            ? console.log(formData)
            : console.log(stepSignUp);
        }
      }}
      disabled={stepSignUp === "stepThree" && formData.password.length <= 8}
      className="button-next"
    >
      <div className="button-text">{buttonName}</div>

      {stepSignUp === "stepOne" ? <img src="/icons/Vector.svg" /> : ""}
    </button>
  </div>
);

export default ButtonNext;
