import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import useLocalStorage from "./Components/LocalStorageHook"

import Header from "./Components/Header";
import Resources from "./Components/Resources";
import Buildings from "./Components/Buildings";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export const App = () => {
  var time = new Date().getHours() + ':' + new Date().getMinutes();
  //const [fish, setFish] = useLocalStorage("fish", 0);
  //const [yarn, setYarn] = useLocalStorage("yarn", 0);
  const [resources, setResources] = useLocalStorage("resources",
    {
      fish: {
        increment: 0,
        total: 0
      },
      yarn: {
        increment: 0,
        total: 0
      },
      cardboard: {
        increment: 0,
        total: 0
      }
  });
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
  
  return (
    <Container>
      <Row>
        <Col>
          <Header />
        </Col>
        
      </Row>
      <Row>
        <Col >
          <h3>Logs:</h3>
        </Col>
      </Row>
      <Row md={4} className="secLogs" >
          <Col>
              [{time}]:
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
          <Resources resources={resources} setResources={setResources} />
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
          <Buildings resources={resources} setResources={setResources} buildings={buildings} setBuildings={setBuildings}/>
        </Col>

        <Col md={2}></Col>

        <Col md={5} className="secTraining">
          PLACEHOLDER
        </Col>
      </Row>

    </Container>
  );
}

export default App;
