import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import update from 'immutability-helper';


export const Training = props => {
  const {resources} = props
  const { fish, yarn, cardboard, scratchingPost, fishingPort, barracks, basicCat, fisherCat } = props.resources;  

  return (
    <React.Fragment>
    {resources.fishingPort.bought && (
    <Row>
      <Col md={5}>
        Train Fisher Cat{" "}
        <span style={{ float: "right" }}>{resources.fisherCat.priceYarn}</span>
      </Col>
      <Col>
        <span style={{ float: "left" }}>Yarn</span>
        <Button
          variant="secondary"
          className="btnBuildings"
          onClick={() => {
            if (resources.basicCat.total >= 1 && resources.yarn.total >= resources.fisherCat.priceYarn) {
              const newFisherCat = update(resources, {fisherCat: {total: {$set: resources.fisherCat.total + 1}},
                basicCat: {total: {$set: resources.basicCat.total - 1}},
                yarn: {total: {$set: resources.yarn.total - resources.fisherCat.priceYarn}},
                fish: {increment: {$set: resources.fish.increment + resources.fisherCat.increment}}
              });
            props.updateState(newFisherCat);
            } else {
            //props.prtLog("You can't train a fisher cat")
            }
          }} 
        >
          Train
        </Button>
      </Col>
    </Row>
    )}
    <Row>       
    </Row>
    </React.Fragment>
  )
}


export default Training;