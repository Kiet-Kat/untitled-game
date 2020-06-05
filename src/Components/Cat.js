import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import update from 'immutability-helper';

export const Cat = props => {
  const {resources} = props
  const { fish, yarn, cardboard, scratchingPost, fishingPort, barracks, basicCat, fisherCat } = props.resources;  

  return (
    <React.Fragment>
      <Row>
        <Col md={5}>
          Basic Cat{" "}
          <span style={{ float: "right" }}>{resources.basicCat.priceFish}</span>
        </Col>
        <Col md={2}>
          <span style={{ float: "left" }}>Fish{" "}</span>
        </Col>
        <Col md = {3}>
          <span style={{ float: "left" }}>{resources.basicCat.total} Owned</span>
        </Col>
        <Col>
        <Button
          variant="secondary"
          className="btnBuildings"
          onClick={() => {
          if (resources.fish.total >= resources.basicCat.priceFish) {
            const newBasicCat = update(resources, {fish: {total: {$set: resources.fish.total - resources.basicCat.priceFish}},
              basicCat: {total: {$set: resources.basicCat.total + 1}}, 
            });
            props.updateState(newBasicCat);
          } else {
          }
        }}
        >
          Lure
        </Button>
      </Col>
      </Row>
      <Row>
        <Col md={5}>
          Fisher Cat{" "}
          <span style={{ float: "right" }}>{resources.fisherCat.total}</span>
        </Col>
        <Col>
        <span style={{ float: "left" }}>Owned</span>
      </Col>
      </Row>
    </React.Fragment>
  )
}

export default Cat;
