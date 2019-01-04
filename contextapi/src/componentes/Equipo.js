import React, { Component } from "react";

import { LaLigaContext } from "./LaLiga";

class Equipo extends Component {
  render() {
    return (
      <LaLigaContext.Consumer>
        {value => {
          return Object.keys(value.state).map(idEquipo => {
            return (
              <div key={idEquipo}>
                <span>
                  Equipo: {value.state[idEquipo].nombre}&nbsp;&nbsp;&nbsp;
                </span>
                <span>
                  <b>Títulos: {value.state[idEquipo].titulos}</b>
                </span>

                <button
                  onClick={() => {
                    value.esCampeon(idEquipo);
                  }}
                >
                  Campeón!
                </button>
              </div>
            );
          });
        }}
      </LaLigaContext.Consumer>
    );
  }
}

export default Equipo;
