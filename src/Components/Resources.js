import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import update from 'immutability-helper';

export const Resources = props => {
  const { fish, yarn, cardboard } = props.resources;
  const {resources} = props;
  console.log(props.resources);

  return (
    <div>
    <Row>
      <Col md={4}>
        Fish: <span style={{ float: "right" }}>{fish.total}</span>
      </Col>
      <Col>
        <Button
          variant="secondary"
          className="btnResource"
          onClick={() => {
            const newFish = update(resources, {fish: {total: {$set: resources.fish.total + 1}}});
            props.setResources(newFish);
          }}
        >
          Gather Fish
        </Button>
      </Col>
    </Row>
    <Row style={{ paddingTop: "5px" }}>
      <Col md={4}>
        Yarn: <span style={{ float: "right" }}>{yarn.total}</span>
      </Col>
      <Col>
        <Button
          variant="secondary"
          className="btnResource"
          onClick={() => {
            const newYarn = update(resources, {yarn: {total: {$set: resources.yarn.total + 1}}});
            props.setResources(newYarn);
          }}
        >
          Make Yarn
        </Button>
      </Col>
    </Row>
    <Row style={{ paddingTop: "5px" }}>
      <Col md={4}>
        Cardboard: <span style={{ float: "right" }}>{cardboard.total}</span>
      </Col>
      <Col>
        <Button
          variant="secondary"
          className="btnResource"
          onClick={() => {
            const newCardboard = update(resources, {cardboard: {total: {$set: resources.cardboard.total + 1}}});
            props.setResources(newCardboard);
          }}
        >
          Collect Cardboard
        </Button>
      </Col>
    </Row>
  </div>
  )
}

export default Resources;
