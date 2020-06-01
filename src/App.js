import React, {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import useLocalStorage from "./Components/LocalStorageHook"

import Header from "./Components/Header";
import Resources from "./Components/Resources";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export const App = () => {
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
        <h3>Resources:</h3>
      </Row>

      <Row>
        <Col md={5} className="secResources">
          <Resources resources={resources} setResources={setResources} />
        </Col>
        <Col md={7}>PLACEHOLDER</Col>
      </Row>
    </Container>
  );
}

export default App;