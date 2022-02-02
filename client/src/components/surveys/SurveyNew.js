//SurveyNew shows SurveyForm and SurveyFormReview
import React, { useState } from "react";
import { reduxForm } from "redux-form";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

const SurveyNew = () => {
  const [showReview, setShowReview] = useState(false);

  const renderContent = () => {
    if (showReview) {
      return <SurveyFormReview onSurveyEdit={() => setShowReview(false)} />;
    }
    return <SurveyForm onSurveySubmit={() => setShowReview(true)} />;
  };

  return <div>{renderContent()}</div>;
};

export default reduxForm({
  form: "surveyForm", //if we put surveyForm here it will destroy the form when unmounted
})(SurveyNew);
