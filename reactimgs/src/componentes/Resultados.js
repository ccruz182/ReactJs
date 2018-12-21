import React, { Component } from "react";
import { Card } from "semantic-ui-react";

import Paginacion from "./Paginacion";
import Resultado from "./Resultado";

class Resultados extends Component {
  render() {
    const resultados = this.props.datos;
    const jsxResultados = [];

    resultados.forEach(res => {
      jsxResultados.push(
        <Resultado
          key={res.previewURL}
          likes={res.likes}
          views={res.views}
          url={res.previewURL}
          fullimg={res.largeImageURL}
        />
      );
    });

    return (
      <Card.Group className="resultados" stackable itemsPerRow={5}>
        {jsxResultados}
        <Paginacion
          currPag={this.props.currPag}
          antPag={this.props.antPag}
          sigPag={this.props.sigPag}
          totalPags={this.props.totalPags}
        />
      </Card.Group>
    );
  }
}

export default Resultados;
