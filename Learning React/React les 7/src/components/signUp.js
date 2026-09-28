import React, { useState } from "react";
import StepOne from "./SignUp/components/StepOneComponents/StepOne";
import StepTwo from "./SignUp/components/StepTwoComponents/StepTwo";
import StepThree from "./SignUp/components/StepThreeComponents/StepThree";
import { DEFAULT_FORM_DATA } from "./constants";
export function SignUp() {
  const [stepSignUp, setStepSignUp] = useState("stepOne");

  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);
  const setFormDataField = (newFieldValue) => {
    setFormData({ ...formData, ...newFieldValue });
  };
  return (
    <form>
      {stepSignUp === "stepOne" && (
        <StepOne
          formData={formData}
          setFormDataField={setFormDataField}
          stepSignUp={stepSignUp}
          setStepSignUp={setStepSignUp}
        />
      )}
      {stepSignUp === "stepTwo" && (
        <StepTwo
          stepSignUp={stepSignUp}
          setStepSignUp={setStepSignUp}
          formData={formData}
          setFormDataField={setFormDataField}
        />
      )}
      {stepSignUp === "stepThree" && (
        <StepThree
          stepSignUp={stepSignUp}
          setStepSignUp={setStepSignUp}
          formData={formData}
          setFormDataField={setFormDataField}
          setFormData={setFormData}
        />
      )}
    </form>
  );
}
