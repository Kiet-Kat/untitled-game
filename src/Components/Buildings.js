import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import update from 'immutability-helper';

export const Buildings = props => {
    const { fish, yarn, cardboard } = props.resources;
    const {resources} = props;
    const { fishingPort } = props.buildings;
    const {buildings} = props;

    return (
        <div>
            <Row>
                <Col md={6}>
                    Fishing Port <span style={{ float: "right" }}>{fishingPort.price} Cardboard</span>
                </Col>
                <Col>
                    {!fishingPort.bought && (
                    <Button
                        variant="secondary"
                        className="btnBuildings"
                        onClick={() => {
                            console.log("Button Pressed");
                            console.log(fishingPort.bought);
                            if( cardboard.total > fishingPort.price){
                                const newCardboard = update(resources, {cardboard: {total: {$set: resources.cardboard.total - fishingPort.price}}});
                                props.setResources(newCardboard);
                                const newFishingPort = update(buildings, {fishingPort: {bought: {$set: true}}})
                                props.setBuildings(newFishingPort);
                            }else{
                                console.log("You can't afford this");
                            }
                        }}
                    >
                        Build
                    </Button>
                    )}
                    {fishingPort.bought && (
                        <h2 style={{ float: "right"}}> Bought </h2>
                    )}
                </Col>
            </Row>
        </div>
    )
}

export default Buildings;