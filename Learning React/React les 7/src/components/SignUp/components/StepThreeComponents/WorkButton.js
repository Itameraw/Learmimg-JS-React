import React from "react";

const WorkButton = ({ id, setFormDataField, formData }) => (
  <div className="work-button">
    <input
      type="checkbox"
      onChange={() => {
        const alreadyHasCategory = formData.categories.find(
          (category) => category === id
        );
        if (alreadyHasCategory) {
          const newCategories = formData.categories.filter(
            (category) => category !== id
          );
          setFormDataField({ categories: newCategories });
        } else {
          setFormDataField({ categories: [...formData.categories, id] });
        }
      }}
      id={id}
    />
    <label className="text-work" for={id}>
      {id}
    </label>
  </div>
);
export default WorkButton;
