import React from "react";
import BasicInformation from "./BasicInformatoin";
const StepTwo = ({ formData, setFormDataField, stepSignUp, setStepSignUp }) => (
  <BasicInformation
    stepSignUp={stepSignUp}
    setStepSignUp={setStepSignUp}
    formData={formData}
    setFormDataField={setFormDataField}
  />
);
export default StepTwo;
