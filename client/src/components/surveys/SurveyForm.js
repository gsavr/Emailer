//Shows form to user to add input
import _ from "lodash";
import React from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

const SurveyForm = ({ handleSubmit, onSurveySubmit }) => {
  const renderFields = () => {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          component={SurveyField}
          type="text"
          label={label}
          name={name}
          key={name}
        />
      );
    });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(
          onSurveySubmit /* (values) => console.log(values) */
        )}
      >
        {renderFields()}
        <Link
          to="/surveys"
          className="btn left red darken-3 waves-effect waves-light white-text"
          name="action"
        >
          {" "}
          Cancel
          <i className="material-icons right">delete_forever</i>
        </Link>
        <button
          className="btn right blue darken-1 waves-effect waves-light white-text"
          type="submit"
          name="action"
        >
          {" "}
          Review
          <i className="material-icons right">done</i>
        </button>
      </form>
    </div>
  );
};

const validate = (values) => {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");

  _.each(formFields, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });

  return errors;
};

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);
