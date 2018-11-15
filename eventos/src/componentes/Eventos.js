import React, { Component } from "react";
import { Card } from "semantic-ui-react";

import Evento from "./Evento";

class Eventos extends Component {
  render() {
    const eventos = [...this.props.eventos];
    const evtsJSX = [];

    eventos.forEach(element => {
      console.log("El", element);
      const info = {
        nombre: element.name.text,
        descripcion: element.description,
        url: element.url
      };

      evtsJSX.push(<Evento key={info.url} informacion={info} />);
    });
    return <Card.Group className="eventos" itemsPerRow={3}>{evtsJSX}</Card.Group>;
  }
}

export default Eventos;
