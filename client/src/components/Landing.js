import React from "react";
import emailMarketing from "../images/email-marketing.png";

const Landing = () => {
  return (
    <div className="position-relative" style={{ textAlign: "center" }}>
      <img className="img-fluid" src={emailMarketing} alt="Backsplash"></img>
      <div className="landing-header text-center">
        <h1>Welcome to EMailMan</h1>
        <h3>Customer Surveys</h3>
        <p>Collect feedback from your users</p>
      </div>
    </div>
  );
};

export default Landing;
