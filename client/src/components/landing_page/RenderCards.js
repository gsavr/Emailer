import React from "react";
import _ from "lodash";
import { Col, Card } from "react-bootstrap";
import cards from "./cards";

const RenderCards = () => {
  return _.map(cards, ({ title, text }) => {
    return (
      <Col key={title}>
        <Card border="light" style={{ width: "100%" }}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  });
};

export default RenderCards;
