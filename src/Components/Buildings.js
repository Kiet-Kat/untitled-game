import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import update from "immutability-helper";

export const Buildings = (props) => {
  const { fish, yarn, cardboard, fishingPort, barracks, scratchingPost } = props.resources;
  const { setResources } = props.setResources;

  return (
    <div>
      <Row>
        <Col md={5}>
          Scratching Post{" "}
          <span style={{ float: "right" }}>{scratchingPost.total}</span>
        </Col>
        <Col>
          <span style={{ float: "left" }}>Bought</span>
          <Button
            variant="secondary"
            className="btnBuildings"
            onClick={() => {
              console.log("Button Pressed");
              if (cardboard.total >= scratchingPost.priceCardboard) {
                setResources(currentCardboard=>{
                  currentCardboard.cardboard.total = currentCardboard.cardboard.total - currentCardboard.scratchingPost.priceCardboard;
                  currentCardboard.scratchingPost.priceCardboard += 5;
                  return currentCardboard;
                })
                props.prtLog("You have bought a scratching pole");
              } else {
                props.prtLog("You can't afford a scratching pole");
              }
            }}
          >
            Build
          </Button>
        </Col>
      </Row>
      <Row>
        <Col md={5}>
          Fishing Port{" "}
          <span style={{ float: "right" }}>{fishingPort.price}</span>
        </Col>
        <Col>
          <span style={{ float: "left" }}>Cardboard</span>
          {!fishingPort.bought && (
            <Button
              variant="secondary"
              className="btnBuildings"
              onClick={() => {
                console.log("Button Pressed");
                console.log(fishingPort.bought);
                if (cardboard.total >= fishingPort.priceCardboard) {
                  setResources(currentCardboard=>{
                    currentCardboard.cardboard.total = currentCardboard.cardboard.total - currentCardboard.fishingPort.priceCardboard;
                    currentCardboard.fishingPort.bought = true;
                    return currentCardboard;
                  })
                  props.prtLog("You have bought the fishing post");
                } else {
                  props.prtLog("You can't afford the fishing port");
                }
              }}
            >
              Build
            </Button>
          )}
          {fishingPort.bought && <h2 style={{ float: "right" }}> Bought </h2>}
        </Col>
      </Row>
      <Row>
        <Col md={5}>
          Barracks{" "}
          <span style={{ float: "right" }}>{barracks.price}</span>
        </Col>
        <Col>
          <span style={{ float: "left" }}>Cardboard</span>
          {!barracks.bought && (
            <Button
              variant="secondary"
              className="btnBuildings"
              onClick={() => {
                console.log("Button Pressed");
                console.log(barracks.bought);
                if (cardboard.total >= barracks.priceCardboard) {
                  setResources(currentCardboard=>{
                    currentCardboard.cardboard.total = currentCardboard.cardboard.total - currentCardboard.barracks.priceCardboard;
                    currentCardboard.barracks.bought = true;
                    return currentCardboard;
                  })
                  props.prtLog("You have bought the barracks");
                } else {
                  props.prtLog("You can't afford the barracks");
                }
              }}
            >
              Build
            </Button>
          )}
          {barracks.bought && <h2 style={{ float: "right" }}> Bought </h2>}
        </Col>
      </Row>
    </div>
  );
};

export default Buildings;
