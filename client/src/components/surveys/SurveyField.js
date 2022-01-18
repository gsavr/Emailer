//constains logic to render a single labe and text input
import React from "react";

const SurveyField = ({ input, label, meta: { error, touched } }) => {
  //console.log(/* input */ meta);
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: "0px" }} />
      <div className="red-text" style={{ marginBottom: "10px" }}>
        {touched && error}
      </div>
    </div>
  );
};

export default SurveyField;
