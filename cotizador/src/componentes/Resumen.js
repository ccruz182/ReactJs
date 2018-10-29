import React, { Component } from "react";
import {TransitionGroup, CSSTransition} from 'react-transition-group'

import { Card, Divider, Header } from "semantic-ui-react";

class Resumen extends Component {
  mostrarResumen = () => {
    if (this.props.datos == null) {
      return null;
    } else {
      const { marca, anio, tipo } = this.props.datos;
      let marcaStr = "";
      let tipoStr = ''

      switch (marca) {
        case 1:
          marcaStr = 'Americano';
          break;
        case 2:
          marcaStr = 'Asiático';
          break;
        default:
          marcaStr = 'Europeo';          
      }

      switch (tipo) {
        case 1:
          tipoStr = 'Básico';
          break;
        default:
          tipoStr = 'Completo';
      }

      return (
        <Card>
          <Header as="h2">Resumen de Cotización</Header>
          <p>Marca: {marcaStr}</p>
          <p>Año: {anio}</p>
          <p>Tipo de Cobertura: {tipoStr}</p>
          <Divider />
          <Header as="h3">Costo: ${this.props.costo}</Header>
        </Card>
      );
    }
  };

  render() {
    return <div id="resumen">{this.mostrarResumen()}</div>;
  }
}

export default Resumen;
