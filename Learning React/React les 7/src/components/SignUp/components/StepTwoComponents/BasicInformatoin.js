import React from "react";
import ButtonNext from "../ButtonNext";
import ButtonPrevious from "../ButtonPrevious";
import GenderRadioButton from "./GenderRadioButton";

const numberPhone = [1, 2, 3, 4, 5];
const BasicInformation = ({
  formData,
  setFormDataField,
  setStepSignUp,
  stepSignUp,
}) => (
  <div className="title-form">
    <div className="title-form-inside">
      <div className="title-top-text">
        <h5 className="text-title">Basic information about you</h5>
      </div>
      <div className="circles">
        <div className="one-circle">
          <div className="circle-text-one">1</div>
        </div>
        <div className="two-circle">
          <div className="circle-text-two">2</div>
        </div>
      </div>
      <div className="name-box">
        <input
          onChange={(event) =>
            setFormDataField({ firstName: event.currentTarget.value })
          }
          className="first-name"
          placeholder="First name"
        />
        <input
          onChange={(event) =>
            setFormDataField({ lastName: event.currentTarget.value })
          }
          className="last-name"
          placeholder="Last name"
        />
      </div>
      <div className="gender-box">
        <h5>Gender</h5>
        <GenderRadioButton
          id="gender1"
          value="Male"
          setFormDataField={setFormDataField}
          label="Male"
        />
        <GenderRadioButton
          id="gender2"
          value="Female"
          setFormDataField={setFormDataField}
          label="Female"
        />
        <GenderRadioButton
          id="gender3"
          value="I prefer not say"
          setFormDataField={setFormDataField}
          label="I prefer not say"
        />

        <GenderRadioButton
          id="gender4"
          value={null}
          setFormDataField={setFormDataField}
          label="Other"
        >
          <input
            disabled={formData.gender !== null}
            className="gender-other-input"
          />
        </GenderRadioButton>
      </div>
      <div>
        <select
          onChange={(event) =>
            setFormDataField({ phonePrefix: event.currentTarget.value })
          }
          className="select-number"
        >
          {numberPhone.map((number) => (
            <option key={number} value={number}>
              +{number}
            </option>
          ))}
        </select>
        <input
          onChange={(event) =>
            setFormDataField({ phone: event.currentTarget.value })
          }
          className="phone-input"
          placeholder="Business phone number"
        />
      </div>
      <div className="button-previous-next">
        <ButtonPrevious stepSignUp={stepSignUp} setStepSignUp={setStepSignUp} />
        <ButtonNext
          buttonName="Continue"
          stepSignUp={stepSignUp}
          setStepSignUp={setStepSignUp}
        />
      </div>
    </div>
  </div>
);

export default BasicInformation;
