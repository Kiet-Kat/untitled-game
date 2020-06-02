import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import update from 'immutability-helper';

export const Buildings = props => {
    const { fish, yarn, cardboard } = props.resources;
    const {resources} = props;
    const { fishingPort, barracks, scratchingPost } = props.buildings;
    const {buildings} = props;

    return (
        <div>
            <Row>
                <Col md={6}>
                    Scratching Post <span style={{ float: "right" }}>{scratchingPost.total} Bought</span>
                </Col>
                <Col>
                    <Button
                        variant="secondary"
                        className="btnBuildings"
                        onClick={() => {
                            console.log("Button Pressed");
                            if( cardboard.total >= scratchingPost.price){
                                const newCardboard = update(resources, {cardboard: {total: {$set: resources.cardboard.total - scratchingPost.price}}});
                                props.setResources(newCardboard);
                                const newScratchingPost = update(buildings, {scratchingPost: {total: {$set: scratchingPost.total + 1}}});
                                newScratchingPost.scratchingPost.price += 5;
                                props.setBuildings(newScratchingPost);                       
                            }else{
                                console.log("You can't afford this");
                            }
                        }}
                    >
                        Build
                    </Button>
                </Col>
            </Row>
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
                            if( cardboard.total >= fishingPort.price){
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
            <Row>
                <Col md={6}>
                    Barracks <span style={{ float: "right" }}>{barracks.price} Cardboard</span>
                </Col>
                <Col>
                    {!barracks.bought && (
                    <Button
                        variant="secondary"
                        className="btnBuildings"
                        onClick={() => {
                            console.log("Button Pressed");
                            console.log(barracks.bought);
                            if( cardboard.total >= barracks.price){
                                const newCardboard = update(resources, {cardboard: {total: {$set: resources.cardboard.total - barracks.price}}});
                                props.setResources(newCardboard);
                                const newBarracks = update(buildings, {barracks: {bought: {$set: true}}})
                                props.setBuildings(newBarracks);
                            }else{
                                console.log("You can't afford this");
                            }
                        }}
                    >
                        Build
                    </Button>
                    )}
                    {barracks.bought && (
                        <h2 style={{ float: "right"}}> Bought </h2>
                    )}
                </Col>
            </Row>
        </div>
    )
}

export default Buildings;