import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import update from 'immutability-helper';

export const Resources = props => {
  const { fish, yarn, cardboard } = props.localResource;
  const {localResource, setResources} = props;
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
            fish.total++;
            setResources(localResource);
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
            yarn.total++;
            setResources(localResource);
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
            cardboard.total++;
            setResources(localResource);
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
