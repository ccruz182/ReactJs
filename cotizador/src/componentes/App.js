import React, { Component } from "react";

import { Grid, Card } from "semantic-ui-react";
import "../css/app.css";

import Formulario from "./Formulario";
import Encabezado from "./Header";
import Resumen from './Resumen'

import {
  diferencia_anios,
  descuento_vejez,
  ajuste_origen,
  ajuste_cobertura
} from "../helpers/seguroHelper.js";

class App extends Component {
  state = {
    costo: "",
    datos: null
  };

  cotizarSeguro = datos => {
    const { marca, anio, tipo } = datos;

    let costo = 2000;
    const dif_anios = diferencia_anios(2018, anio);
    costo = descuento_vejez(costo, dif_anios);
    costo = ajuste_origen(costo, marca);
    costo = ajuste_cobertura(costo, tipo);
    costo = Math.round(costo);

    this.setState({
      costo: costo,
      datos: {... datos}
    });
  };

  render() {
    return (
      <Grid>
        <Grid.Column width={5} />

        <Grid.Column width={6}>
          <center className="card_body">
            <Card>
              <Encabezado titulo="Cotizador de seguro de auto" />
              <Formulario cotizarSeguro={this.cotizarSeguro} />
              <Resumen 
                datos={this.state.datos}
                costo={this.state.costo} />
            </Card>
          </center>
        </Grid.Column>

        <Grid.Column width={5} />
      </Grid>
    );
  }
}

export default App;
