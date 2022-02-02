//Shows form inputs for review
import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

const SurveyFormReview = ({
  onSurveyEdit,
  formValues,
  submitSurvey,
  history,
}) => {
  const fieldList = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h6
        className="blue-grey-text"
        style={{ textAlign: "center", paddingTop: "0.5rem" }}
      >
        Please confirm your survey entries. If you wish to revise, please click
        edit.
        <p>When ready click on Send Survey</p>
      </h6>
      <div className="row">
        <div className="col s18 m12">
          <div className="card">
            <div className="card-content ">{fieldList}</div>
          </div>
        </div>
      </div>
      <button
        onClick={onSurveyEdit}
        className="btn left yellow darken-4 waves-effect waves-light white-text"
        name="action"
      >
        Edit <i className="material-icons right">mode_edit</i>
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)} //calls action creator(prop from actions, make sure it is passed to Component) with the form values - prop name formValues. arrow function stops it from being called immediately //history comes from withRouter  - must be added to tthe reducers as well
        className="btn right blue darken-1 waves-effect waves-light white-text"
        type="submit"
        name="action"
      >
        Send Survey<i className="material-icons right">send</i>
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  //   console.log(state);
  return { formValues: state.form.surveyForm.values };
};

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
//withRouter remembers the browsing history - so when you submit the email survey, it will travel to the surveys page
