//SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from "react";
import { reduxForm } from "redux-form";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

class SurveyNew extends Component {
  state = { showReview: false };

  renderContent() {
    if (this.state.showReview) {
      return (
        <SurveyFormReview
          onSurveyEdit={() => this.setState({ showReview: false })}
        />
      );
    }
    return (
      <SurveyForm onSurveySubmit={() => this.setState({ showReview: true })} />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: "surveyForm", //if we put surveyForm here it will destroy the form when unmounted
})(SurveyNew);
