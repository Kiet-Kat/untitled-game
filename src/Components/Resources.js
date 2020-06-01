import React from "react";
import { Row, Col, Button } from "react-bootstrap";

export const Resources = props => {
  return (
    <div>
    <Row>
      <Col md={3}>
        Fish: <span style={{ float: "right" }}>{props.fish}</span>
      </Col>
      <Col>
        <Button
          variant="secondary"
          className="btnResource"
          onClick={() => props.setFish(props.fish + 1)}
        >
          Gather Fish
        </Button>
      </Col>
    </Row>
    <Row style={{ paddingTop: "5px" }}>
      <Col md={3}>
        Yarn: <span style={{ float: "right" }}>{props.yarn}</span>
      </Col>
      <Col>
        <Button
          variant="secondary"
          className="btnResource"
          onClick={() => props.setYarn(props.yarn + 1)}
        >
          Make Yarn
        </Button>
      </Col>
    </Row>
  </div>
  )
}

export default Resources;
