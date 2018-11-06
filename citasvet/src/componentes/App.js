import React, { Component } from "react";
import { Col, Row } from "react-materialize";

import AgregarCita from "./AgregarCita";
import Header from "./Header";
import ListaCitas from "./ListaCitas";

import "../css/app.css";

class App extends Component {
  state = {
    citas: []
  };

  crearCita = cita => {
    const citas = [...this.state.citas, cita];
    this.setState({ citas });
  };

  eliminaCita = idCita => {
    const citas = [...this.state.citas];
    const nuevasCitas= citas.filter(cita => {
      return cita.id !== idCita;
    });

    this.setState({citas: nuevasCitas})
  };

  componentDidUpdate() {
    localStorage.setItem(
      'citas', JSON.stringify(this.state.citas)
    );
  }

  componentDidMount() {
    const citasLS = localStorage.getItem('citas');

    if (citasLS) {
      this.setState({
        citas: JSON.parse(citasLS)
      });
    }
  }

  render() {
    return (
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
                    citas={this.state.citas}
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
    );
  }
}

export default App;
