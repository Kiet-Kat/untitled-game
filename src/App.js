import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import update from "immutability-helper";
import useLocalStorage from "./Components/LocalStorageHook";

import Navbar from "./Components/Navbar";
import Resources from "./Components/Resources";
import Cat from "./Components/Cat";
import Buildings from "./Components/Buildings";
import Training from "./Components/Training";
import {IncrementLogic} from './Components/IncrementLogic';

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state = localStorage.getItem("resources") ? JSON.parse(localStorage.getItem("resources")) : {
      fish: {
        increment: 0,
        total: 0,
      },
      yarn: {
        increment: 0,
        total: 0,
      },
      cardboard: {
        increment: 0,
        total: 0,
      },
      scratchingPost:{
        priceCardboard: 5,
        total: 0,
      },
      fishingPort:{
        priceCardboard: 15,
        bought: false,
      },
      barracks:{
        priceCardboard: 50,
        bought: false,
      },
      basicCat:{
        priceFish: 10,
        total: 0,
      },
      fisherCat:{
        total: 0,
        priceYarn: 10,
        increment: 1,
      },
      txtLog: [],
    };
  }

  //function to update state
  updateState = resources =>{
    this.setState(resources);
  }

  //function to print message to log
  prtLog = message => {
    var d = new Date();
    var msg = "[" + formatTime(d.getHours()) + ":" + formatTime(d.getMinutes()) + ":" + formatTime(d.getSeconds()) + "]: " + message;
    const addMsg = update(this.state, { txtLog: { $push: [msg] } });
    if (addMsg.txtLog.length > 5) addMsg.txtLog.shift(); //remove first element in array
    this.setState(addMsg);
  }

  componentDidMount(){
    this.prtLog("Game has loaded");
    this.interval = setInterval(()=>{
      IncrementLogic(this.state, this.updateState);
      localStorage.setItem("resources", JSON.stringify(this.state));
    },1000);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  };

  render() {
    return (
      <React.Fragment>
      <Navbar />
      <Container>
        <Row>
          <Col>
            <h3 onClick={() => this.prtLog("test")}>Logs:</h3>
          </Col>
        </Row>
        <Row className="textLog">
          <Col>
            {[...this.state.txtLog].reverse().map((item, index) => (
              <p className={"msgLog"} id={"msgLog"+index} key={index}>{item}</p>
            ))}
          </Col>
        </Row>

        <Row>
          <Col md={7}>
            <h3>Resources:</h3>
          </Col>
          <Col>
            <h3>Cats:</h3>
          </Col>
        </Row>

        <Row>
          <Col md={5} className="secResources">
            <Resources resources={this.state} updateState={this.updateState} />
          </Col>

          <Col md={2}></Col>
          <Col md={5} className="secCats">
            <Cat resources={this.state} updateState={this.updateState} />
          </Col>
        </Row>

        <Row>
          <Col md={7}>
            <h3>Buildings:</h3>
          </Col>
          <Col>
            <h3>Training:</h3>
          </Col>
        </Row>

        <Row>
          <Col md={5} className="secBuildings">
            <Buildings resources={this.state} updateState={this.updateState} /*prtLog={this.prtLog}*//>
          </Col>

          <Col md={2}></Col>

          <Col md={5} className="secTraining">
            <Training resources={this.state} updateState={this.updateState} /> 
          </Col>
        </Row>
      </Container>
    </React.Fragment>
    )
  }
}

const formatTime = time => {
  var newTime = ("0"+time.toString()).slice(-2);
  return newTime;
};