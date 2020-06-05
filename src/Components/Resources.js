import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import update from 'immutability-helper';

export const Resources = props => {
  const {resources} = props
  const { fish, yarn, cardboard } = props.resources;  
  //console.log(props.resources);

  return (
    <React.Fragment>
    <Row>
      <Col md={4}>
        Fish: <span style={{ float: "right" }}>{fish.total}</span>
      </Col>
      <Col>
        <Button
          variant="secondary"
          className="btnResource"
          onClick={() => {
             //const newFish = update(resources, {fish: {total: {$set: resources.fish.total + 1}}});
             const newFish = props.currentResources();
             newFish.fish.total++;
             props.updateState(newFish);
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
            //const newYarn = update(resources, {yarn: {total: {$set: resources.yarn.total + 1}}});
            const newYarn = props.currentResources();
            newYarn.yarn.total++;
            props.updateState(newYarn);
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
              //const newCardboard = update(resources, {cardboard: {total: {$set: resources.cardboard.total + 1}}});
              const newCardboard = props.currentResources();
              newCardboard.cardboard.total++;
              props.updateState(newCardboard);
          }}
        >
          Collect Cardboard
        </Button>
      </Col>
    </Row>
  </React.Fragment>
  )
}

export default Resources;
