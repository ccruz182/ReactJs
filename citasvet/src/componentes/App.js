import React, { Component } from 'react';
import {Col, Row} from 'react-materialize';

import AgregarCita from './AgregarCita';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col m={2}></Col>
          <Col m={8}>
            <center>
              <Header titulo='Administrador de Pacientes de Veterinaria' />
              <Row>
                <Col m={1}></Col>
                <Col m={5}>
                  <AgregarCita />
                </Col>                
                <Col m={5}>
                  Admon
                </Col>
                <Col m={1}></Col>
              </Row>
            </center>
          </Col>
          <Col m={2}></Col>
        </Row>        
      </div>
    );
  }
}

export default App;