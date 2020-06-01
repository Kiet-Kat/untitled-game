import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import useLocalStorage from "./Components/LocalStorageHook";

import Navbar from "./Components/Navbar";
import Resources from "./Components/Resources";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export const App = () => {
  var getTime = () => new Date().getHours() + ":" + new Date().getMinutes();
  //const [fish, setFish] = useLocalStorage("fish", 0);
  //const [yarn, setYarn] = useLocalStorage("yarn", 0);
  const [resources, setResources] = useLocalStorage("resources", {
    fish: {
      increment: 0,
      total: 0,
    },
    yarn: {
      increment: 0,
      total: 0,
    },
  });

  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <Row>
          <Col>
            <h3>Logs:</h3>
          </Col>
        </Row>
        <Row md={4} className="textLog">
          <Col>[{getTime}]:</Col>
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
      </Container>
    </React.Fragment>
  );
};

export default App;
