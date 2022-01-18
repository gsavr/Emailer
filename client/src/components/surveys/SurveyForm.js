//Shows form to add input
import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";

const FIELDS = [
  {
    label: "Survey Title",
    name: "title",
    noValueError: "You must provide a survey title",
  },
  {
    label: "Subject Line",
    name: "subject",
    noValueError: "You must provide a subject",
  },
  {
    label: "Email Body",
    name: "body",
    noValueError: "You must enter a message",
  },
  {
    label: "Recipients List (must be comma separated)",
    name: "emails",
    noValueError: "You must enter at least one valid email",
  },
];

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
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
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit((values) => console.log(values))}
        >
          {this.renderFields()}
          <Link
            to="/surveys"
            className="btn left red darken-3 waves-effect waves-light"
            name="action"
          >
            {" "}
            Cancel
            <i className="material-icons right">delete_forever</i>
          </Link>
          <button
            className="btn right blue darken-1 waves-effect waves-light"
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
  }
}

function validate(values) {
  const errors = {};

  errors.emails = validateEmails(values.emails || "");

  _.each(FIELDS, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
})(SurveyForm);
