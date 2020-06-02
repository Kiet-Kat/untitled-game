import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import update from "immutability-helper";

export const Buildings = (props) => {
  const { fish, yarn, cardboard } = props.resources;
  const { resources } = props;
  const { fishingPort, barracks, scratchingPost } = props.buildings;
  const { buildings } = props;

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
              if (cardboard.total >= scratchingPost.price) {
                const newCardboard = update(resources, {
                  cardboard: {
                    total: {
                      $set: resources.cardboard.total - scratchingPost.price,
                    },
                  },
                });
                props.setResources(newCardboard);
                const newScratchingPost = update(buildings, {
                  scratchingPost: { total: { $set: scratchingPost.total + 1 } },
                });
                newScratchingPost.scratchingPost.price += 5;
                props.setBuildings(newScratchingPost);
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
                if (cardboard.total >= fishingPort.price) {
                  const newCardboard = update(resources, {
                    cardboard: {
                      total: {
                        $set: resources.cardboard.total - fishingPort.price,
                      },
                    },
                  });
                  props.setResources(newCardboard);
                  const newFishingPort = update(buildings, {
                    fishingPort: { bought: { $set: true } },
                  });
                  props.setBuildings(newFishingPort);
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
                if (cardboard.total >= barracks.price) {
                  const newCardboard = update(resources, {
                    cardboard: {
                      total: {
                        $set: resources.cardboard.total - barracks.price,
                      },
                    },
                  });
                  props.setResources(newCardboard);
                  const newBarracks = update(buildings, {
                    barracks: { bought: { $set: true } },
                  });
                  props.setBuildings(newBarracks);
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
