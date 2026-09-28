import React from "react";
import WorkButton from "./WorkButton";
import ButtonNext from "../ButtonNext";
import ButtonPrevious from "../ButtonPrevious";
const StepThree = ({
  stepSignUp,
  setStepSignUp,
  formData,
  setFormDataField,
  setFormData,
}) => (
  <div className="title-form">
    <div className="title-form-inside">
      <div className="title-top-text">
        <h5 className="text-title">Basic information about you</h5>
      </div>
      <div className="circles">
        <div className="ne-circle-step-three">
          <div className="circle-text-one-step-three">
            <img src="/icons/VectorOk.svg" />
          </div>
        </div>
        <div className="two-circle-step-three">
          <div className="circle-text-two-step-three">2</div>
        </div>
      </div>
      <div>
        <h5 className="title-work">Categories you work with</h5>
        <WorkButton
          id="Economy"
          setFormDataField={setFormDataField}
          formData={formData}
        />
        <WorkButton
          id="Business"
          setFormDataField={setFormDataField}
          formData={formData}
        />
        <WorkButton
          id="Trading"
          setFormDataField={setFormDataField}
          formData={formData}
        />
        <WorkButton
          id="Сommunications"
          setFormDataField={setFormDataField}
          formData={formData}
        />
      </div>
      <div className="name-box">
        <input
          onChange={(event) =>
            setFormDataField({ email: event.currentTarget.value })
          }
          placeholder="Email"
          className="email"
        />
        <div>
          <input
            onChange={(event) =>
              setFormDataField({ password: event.currentTarget.value })
            }
            placeholder="Password"
            className="password"
          />
          <h6
            className={
              formData.password.length <= 8
                ? "password-long-red"
                : "password-long"
            }
          >
            The password has to be at least 8 characters long and contain at
            least one upper case letter.
          </h6>
        </div>
      </div>

      <div className="button-previous-next">
        <ButtonPrevious stepSignUp={stepSignUp} setStepSignUp={setStepSignUp} />
        <ButtonNext
          stepSignUp={stepSignUp}
          setStepSignUp={setStepSignUp}
          formData={formData}
          buttonName="Submit"
          setFormData={setFormData}
        />
      </div>
    </div>
  </div>
);
export default StepThree;
