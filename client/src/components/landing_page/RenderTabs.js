import React from "react";
import _ from "lodash";
import { Card, Tabs, Tab } from "react-bootstrap";
import tabs from "./tabs";

const RenderTabs = () => {
  const tab = _.map(tabs, ({ title, text }) => {
    return (
      <Tab eventKey={title} title={title} key={title}>
        <Card.Body className="tab-body">
          <Card.Text className="fs-3">{text}</Card.Text>
        </Card.Body>
      </Tab>
    );
  });

  return (
    <Tabs
      defaultActiveKey="Survey Builder"
      id="uncontrolled-tab-example"
      className="mb-6"
    >
      {tab}
    </Tabs>
  );
};

export default RenderTabs;
