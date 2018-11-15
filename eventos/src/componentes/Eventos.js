import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import PropTypes from 'prop-types';

import Evento from "./Evento";

class Eventos extends Component {
  render() {
    const eventos = [...this.props.eventos];
    const evtsJSX = [];

    eventos.forEach(element => {      
      const info = {
        nombre: element.name.text,
        descripcion: element.description,
        url: element.url        
      };

      if (element.logo !== null) {
        info['logoUrl'] = element.logo.url;
      }

      evtsJSX.push(<Evento key={info.url} informacion={info} />);
    });
    return <Card.Group className="eventos" itemsPerRow={3}>{evtsJSX}</Card.Group>;
  }
}

Eventos.propTypes = {
  eventos: PropTypes.array.isRequired
}
export default Eventos;
