import React, { Component } from "react";
import update from "immutability-helper";

import Navbar from "./Components/Navbar";
import Resources from "./Components/Resources";
import Cat from "./Components/Cat";
import Buildings from "./Components/Buildings";
import Training from "./Components/Training";
import { IncrementLogic } from "./Components/IncrementLogic";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = localStorage.getItem("resources")
      ? JSON.parse(localStorage.getItem("resources"))
      : {
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
          catnip:{
            total: 0,
          },
          scratchingPost: {
            total: 0,
            priceFish: 0,
            priceYarn: 0,
            priceCardboard: 5,
            priceCatnip: 0
          },
          fishingPort: {
            bought: false,
            priceFish: 0,
            priceYarn: 0,
            priceCardboard: 15,
            priceCatnip: 0
          },
          barracks: {
            bought: false,
            priceFish: 0,
            priceYarn: 0,
            priceCardboard: 50,
            priceCatnip: 0
          },
          basicCat: {
            total: 0,
            priceFish: 50,
            priceYarn: 0,
            priceCardboard: 0,
            priceCatnip: 0
          },
          fisherCat: {
            total: 0,
            increment: 1,
            priceFish: 0,
            priceYarn: 10,
            priceCardboard: 0,
            priceCatnip: 5
          },
          txtLog: [],
        };
  }

  //function to update state
  updateState = (resources) => {
    if (resources.txtLog.length > 5) resources.txtLog.shift(); //remove first element in textlog array
    this.setState(resources);
  };

  //function returns array with new prgLog message
  prtLog = (message) => {
    var d = new Date();
    var msg =
      "[" +
      formatTime(d.getHours()) +
      ":" +
      formatTime(d.getMinutes()) +
      ":" +
      formatTime(d.getSeconds()) +
      "]: " +
      message;
    const addMsg = update(this.state, { txtLog: { $push: [msg] } });
    return addMsg;
  };

  //return editable copy of current state
  currentResources = () => {
    return update(this.state, {
      fish: { total: { $set: this.state.fish.total } },
    });
  };

  //get if button disabled status
  getDisabled = (fishCost, yarnCost, cardboardCost, catnipCost) => {
    return this.state.fish.total >= fishCost &&
      this.state.yarn.total >= yarnCost &&
      this.state.cardboard.total >= cardboardCost &&
      this.state.catnip.total >= catnipCost
      ? false
      : true;
  };

  componentDidMount() {
    this.setState(this.prtLog("Game has loaded"));
    this.interval = setInterval(() => {
      IncrementLogic(this.currentResources(), this.updateState);
      localStorage.setItem("resources", JSON.stringify(this.state));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div id="mainComponent">
          <div id="HdrLogs">
            <h3 onClick={() => this.updateState(this.prtLog("test"))}>Logs:</h3>
          </div>
          <div className="gridElement" id="textLog">
            {[...this.state.txtLog].reverse().map((item, index) => (
              <p className={"msgLog"} id={"msgLog" + index} key={index}>
                {item}
              </p>
            ))}
          </div>

          <div className="gridElement" id="HdrResources">
            <h3>Resources:</h3>
          </div>
          <div className="gridElement" id="secResources">
            <Resources
              resources={this.state}
              updateState={this.updateState}
              currentResources={this.currentResources}
            />
          </div>

          <div className="gridElement" id="HdrCats">
            <h3>Cats:</h3>
          </div>
          <div className="gridElement" id="secCats">
            <Cat
              resources={this.state}
              updateState={this.updateState}
              currentResources={this.currentResources}
              getDisabled={this.getDisabled}
            />
          </div>

          <div className="gridElement" id="HdrBuildings">
            <h3>Buildings:</h3>
          </div>
          <div className="gridElement" id="secBuildings">
            <Buildings
              resources={this.state}
              updateState={this.updateState}
              prtLog={this.prtLog}
              getDisabled={this.getDisabled}
            />
          </div>

          <div className="gridElement" id="HdrTraining">
            <h3>Training:</h3>
          </div>
          <div className="gridElement" id="secTraining">
            <Training resources={this.state} updateState={this.updateState} currentResources={this.currentResources}/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const formatTime = (time) => {
  var newTime = ("0" + time.toString()).slice(-2);
  return newTime;
};
