import React, { Component } from "react";
import { Col, Row } from "react-materialize";

import AgregarCita from "./AgregarCita";
import Header from "./Header";
import ListaCitas from "./ListaCitas";

import { Provider } from "react-redux";
import store from "../store";

import "../css/app.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Row>
            <Col m={2} />
            <Col m={8}>
              <center>
                <Header titulo="Administrador de Pacientes de Veterinaria" />
                <Row>
                  <Col m={1} />
                  <Col m={5}>
                    <AgregarCita crearCita={this.crearCita} />
                  </Col>
                  <Col m={5}>
                    <ListaCitas                      
                      eliminaCita={this.eliminaCita}
                    />
                  </Col>
                  <Col m={1} />
                </Row>
              </center>
            </Col>
            <Col m={2} />
          </Row>
        </div>
      </Provider>
    );
  }
}

export default App;
