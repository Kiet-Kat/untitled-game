import React from "react";
import { Row, Col, Button } from "react-bootstrap";

export default function Resources() {
  return (
    <div>
      <Row>
        <Col md={3}>
          Fish: <span style={{ float: "right" }}>{this.props.fish}</span>
        </Col>
        <Col>
          <Button
            variant="secondary"
            className="btnResource"
            onClick={() => this.props.setFish(this.props.fish + 1)}
          >
            Gather Fish
          </Button>
        </Col>
      </Row>
      <Row style={{ paddingTop: "5px" }}>
        <Col md={3}>
          Yarn: <span style={{ float: "right" }}>{this.props.yarn}</span>
        </Col>
        <Col>
          <Button
            variant="secondary"
            className="btnResource"
            onClick={() => this.props.setYarn(this.props.yarn + 1)}
          >
            Make Yarn
          </Button>
        </Col>
      </Row>
    </div>
  );
}
