import React from "react";
import SignUpButton from "./SignUpButton";
import ButtonNext from "../ButtonNext";
const StepOne = ({ stepSignUp, setStepSignUp, setFormDataField, formData }) => (
  <div className="title-form">
    <div className="title-form-inside">
      <div className="title-top-text">
        <h5 className="text-title">Which describes you best?</h5>
      </div>
      <div>
        <SignUpButton
          title="Homeowner"
          icon="home-work"
          description="I am a homeowner or interesed in home design."
          active={formData.role == "homeowner"}
          onClick={() => setFormDataField({ role: "homeowner" })}
        />
        <SignUpButton
          title="Professional"
          icon="business-center"
          description=" I offer home improvement services or sell home products."
          active={formData.role == "professional"}
          onClick={() => setFormDataField({ role: "professional" })}
        />
      </div>
      <ButtonNext
        stepSignUp={stepSignUp}
        setStepSignUp={setStepSignUp}
        buttonName={"Next"}
      />
    </div>
  </div>
);
export default StepOne;
