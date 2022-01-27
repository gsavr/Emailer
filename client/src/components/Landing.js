import React from "react";
import emailMarketing from "../images/email-marketing.png";
import surveyEmail from "../images/survey-email.png";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import RenderCards from "./landing_page/RenderCards";
import RenderTabs from "./landing_page/RenderTabs";

const Landing = () => {
  return (
    <Container fluid>
      <Row>
        <div className="position-relative" style={{ textAlign: "center" }}>
          <img
            className="img-fluid landing-img1"
            src={emailMarketing}
            alt="Backsplash"
          ></img>
          <div className="landing-header text-center">
            <h1>Welcome to EmailMan</h1>
            <h3>Customer Surveys</h3>
            <p>Collect feedback from your users</p>
          </div>
        </div>
      </Row>
      <Container className="h-100">
        <Row className="align-items-center h-100">
          <Col>
            <div className="landing-info">
              <h2>Track and analyze survey responses all from one platform.</h2>
            </div>
          </Col>
          <Col>
            <img className="img-fluid landing-info" src={surveyEmail}></img>
          </Col>
        </Row>
      </Container>
      <Container className="h-100">
        <Row className="align-items-center h-100 cards">
          <RenderCards />
        </Row>
      </Container>
      <Container>
        <Row>
          <RenderTabs />
        </Row>
      </Container>
    </Container>
  );
};

export default Landing;
