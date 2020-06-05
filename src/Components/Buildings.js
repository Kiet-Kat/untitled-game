import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import update from 'immutability-helper';

export const Buildings = props => {
  const {resources} = props
  const { fish, yarn, cardboard, scratchingPost, fishingPort, barracks } = props.resources;  

  return (
    <React.Fragment>
    <Row>
      <Col md={5}>
          Scratching Post{" "}
          <span style={{ float: "right" }}>{resources.scratchingPost.priceCardboard}</span>
        </Col>
        <Col md={3}>
          <span style={{ float: "left" }}>Cardboard{" "}</span>
        </Col>
        <Col md = {3}>
          <span style={{ float: "left" }}>{resources.scratchingPost.total} Built</span>
        </Col>
        <Col>
        <Button
          variant="secondary"
          className="btnBuildings"
          onClick={() => {
          if (resources.cardboard.total >= resources.scratchingPost.priceCardboard) {
            const newScratchingPost = props.prtLog("You have bought a scratching post");
            newScratchingPost.cardboard.total -= newScratchingPost.scratchingPost.priceCardboard;
            newScratchingPost.scratchingPost.total++;
            newScratchingPost.scratchingPost.priceCardboard += 5;
            props.updateState(newScratchingPost);
          } else {
            props.updateState(props.prtLog("You can't afford a scratching post"));
          }
        }}
        >
          Build
        </Button>
      </Col>
    </Row>

    {!resources.fishingPort.bought && (
    <Row>
      <Col md={5}>
        Fishing Port{" "}
        <span style={{ float: "right" }}>{resources.fishingPort.priceCardboard}</span>
      </Col>
      <Col>
        <span style={{ float: "left" }}>Cardboard</span>
          <Button
            variant="secondary"
            className="btnBuildings"
            onClick={() => {
              console.log("Button Pressed");
              console.log(fishingPort.bought);
              if (resources.cardboard.total >= resources.fishingPort.priceCardboard) {
                const newFishingPort = props.prtLog("You have bought the fishing post");;
                newFishingPort.fishingPort.bought = true;
                newFishingPort.cardboard.total -= newFishingPort.fishingPort.priceCardboard;
                props.updateState(newFishingPort);
              } else {
                props.updateState(props.prtLog("You can't afford the fishing port"));
              }
            }}
          >
            Build
          </Button>
        
      </Col>
    </Row>
    )}

    {!resources.barracks.bought && (
    <Row>
      <Col md={5}>
        Barracks{" "}
        <span style={{ float: "right" }}>{barracks.priceCardboard}</span>
      </Col>
      <Col>
        <span style={{ float: "left" }}>Cardboard</span>
          <Button
            variant="secondary"
            className="btnBuildings"
            onClick={() => {
              console.log("Button Pressed");
              console.log(barracks.bought);
              if (cardboard.total >= barracks.priceCardboard) {
                const newBarracks = props.prtLog("You have bought the barracks");
                newBarracks.barracks.bought = true;
                newBarracks.cardboard.total -= newBarracks.barracks.priceCardboard;
                props.updateState(newBarracks);
              } else {
                props.updateState(props.prtLog("You can't afford the barracks"));
              }
            }}
          >
            Build
          </Button>
      </Col>
    </Row>
    )}
    </React.Fragment>
  );
}

export default Buildings;
