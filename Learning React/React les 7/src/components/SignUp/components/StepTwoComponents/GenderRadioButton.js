import React from "react";
const GenderRadioButton = ({
  id,
  value,
  children,
  label,
  setFormDataField,
}) => (
  <div className="gender-button">
    <input
      type="radio"
      onChange={() => setFormDataField({ gender: value })}
      id={id}
      name="gender"
      value={value}
    />
    <label for={id}>{label}</label>
    {children}
  </div>
);
export default GenderRadioButton;
