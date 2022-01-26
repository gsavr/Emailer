import React from "react";
import emailMarketing from "../images/email-marketing.png";
import surveyEmail from "../images/survey-email.png";
import { Container, Row, Col, Card, Tabs, Tab } from "react-bootstrap";

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
        <Row className="align-items-center h-100">
          <Col>
            <Card border="light" style={{ width: "25rem" }}>
              <Card.Body>
                <Card.Title>Gather Feedback Quicker</Card.Title>
                <Card.Text>
                  Deliver Surveys Through Customers’ Preferred Channels
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="light" style={{ width: "25rem" }}>
              <Card.Body>
                <Card.Title>Understand Survey Responses</Card.Title>
                <Card.Text>Understand Key Themes with our Analytics</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="light" style={{ width: "25rem" }}>
              <Card.Body>
                <Card.Title>Create a Custom Survey Experience</Card.Title>
                <Card.Text>
                  Create Unique Survey Paths Based on Responses
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-6"
          >
            <Tab eventKey="home" title="Home">
              <Card.Body>
                <Card.Text>
                  Create Unique Survey Paths Based on Responses
                </Card.Text>
              </Card.Body>
            </Tab>
            <Tab eventKey="profile" title="Profile">
              {/*  <Sonnet /> */}
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
              {/* <Sonnet /> */}
            </Tab>
          </Tabs>
        </Row>
      </Container>
    </Container>
  );
};

export default Landing;
