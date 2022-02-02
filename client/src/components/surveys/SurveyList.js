import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

const SurveyList = ({ fetchSurveys, surveys }) => {
  useEffect(() => fetchSurveys());

  const renderSurveys = () => {
    return surveys.reverse().map((survey) => {
      //console.log(survey);
      return (
        <div key={survey._id} className="card blue-grey lighten-5">
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent on: {new Date(survey.dateSent).toLocaleDateString()}
              <span> </span>
              {new Date(survey.dateSent).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
          <div className="card-action white">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
            <a className="right">
              Last Customer Reponse:{" "}
              {!survey.lastResponded
                ? "No Clicks Yet"
                : new Date(survey.lastResponded).toLocaleDateString()}
            </a>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <p style={{ margin: "40px" }}> </p>
      <h5 className="center text blue-grey-text">List of Surveys Sent:</h5>
      <p style={{ margin: "40px" }}> </p>
      <div>{renderSurveys()}</div>
    </div>
  );
};

const mapStateToProps = ({ surveys }) => {
  return { surveys };
};

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
