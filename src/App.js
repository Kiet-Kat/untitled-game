import React, {useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import update from "immutability-helper";
import useLocalStorage from "./Components/LocalStorageHook";

import Navbar from "./Components/Navbar";
import Resources from "./Components/Resources";
import Buildings from "./Components/Buildings";
import {IncrementLogic} from "./Components/IncrementLogic";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export const App = () => {
  const localStorage = window.localStorage.getItem("resources");
  var localResource = localStorage ? JSON.parse(localStorage) : {
    fish: {
      increment: 1,
      total: 0,
    },
    yarn: {
      increment: 0,
      total: 0,
    },
      cardboard: {
        increment: 0,
        total: 0
      },
      txtLog: [],
  };
  
  const [resources, setResources] = useLocalStorage("resources", localResource);
  
  const [buildings, setBuildings] = useLocalStorage("buildings",
    {
      scratchingPost:{
        price: 5,
        total: 0
      },
      fishingPort:{
        price: 15,
        bought: false
      },
      barracks:{
        price: 50,
        bought: false
      }
  });

  //function to print message to log
  var prtLog = (message) => {
    var d = new Date();
    var msg = "[" + formatTime(d.getHours()) + ":" + formatTime(d.getMinutes()) + ":" + formatTime(d.getSeconds()) + "]: " + message;
    localResource.txtLog.push(msg);
    if (localResource.txtLog.length > 5) localResource.txtLog.shift(); //remove first element in array
    setResources(localResource);
  };

  useEffect(() =>{
    //update local storage every second
    const interval = setInterval(()=>{
      IncrementLogic();
      // setResources(localResource);
    }, 1000);

    //stop increment on component unload
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <Row>
          <Col>
            <h3 onClick={() => prtLog("test")}>Logs:</h3>
          </Col>
        </Row>
        <Row className="textLog">
          <Col>
            {[...localResource.txtLog].reverse().map((item, index) => (
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
            <Resources localResource={localResource} setResources={setResources} />
          </Col>

          <Col md={2}></Col>
        <Col md={5} className="secCats">
          PLACEHOLDER
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
          <Buildings resources={resources} setResources={setResources} buildings={buildings} setBuildings={setBuildings} prtLog={prtLog}/>
        </Col>

        <Col md={2}></Col>

        <Col md={5} className="secTraining">
          PLACEHOLDER
        </Col>
      </Row>

    </Container>
    </React.Fragment>
  );
};

const formatTime = time => {
  var newTime = ("0"+time.toString()).slice(-2);
  return newTime;
};

export default App;
