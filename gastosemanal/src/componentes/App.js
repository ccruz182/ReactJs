import React, { Component } from "react";
import { Card, Grid } from "semantic-ui-react";

import "../css/app.css";

import ControlPresupuesto from "./ControlPresupuesto";
import Formulario from "./Formulario";
import Header from "./Header";
import Listado from "./Listado";

import { validarPresupuesto } from "../helpers/presupuestoHelper";

class App extends Component {
  state = {
    presupuesto: 0,
    restante: 0,
    gastos: {}
  };

  tipo = 'green';

  componentDidMount() {
    this.obtenerPresupuesto();
  }

  agregarGasto = gasto => {
    /* Copia del state actual */
    const gastos = { ...this.state.gastos };

    /* Agregar al gasto */

    gastos[`gastos${Date.now()}`] = gasto;

    /* Copia del state actual */
    this.setState({ gastos });

    /* Actualización de restante */
    this.actualizaRestante(gasto);
  };

  obtenerPresupuesto = () => {
    let presupuesto = prompt("Presupuesto");
    let resultado = validarPresupuesto(presupuesto);

    if (resultado) {
      this.setState({
        presupuesto: presupuesto,
        restante: presupuesto
      });
    } else {
      this.obtenerPresupuesto();
    }
  };

  actualizaRestante = gasto => {
    const cantidad = parseInt(gasto.cantidad);
    const presupuesto = this.state.presupuesto;
    const stateRestante = this.state.restante;
    console.log(stateRestante);
    const restante = parseInt(stateRestante, 10) - cantidad;
    const porcentaje = restante / presupuesto;

    if (porcentaje < 0.75) {
      this.tipo = 'yellow'
    }
    if (porcentaje < 0.5) {
      this.tipo = 'orange';
    }
    if (porcentaje < 0.25) {
      this.tipo = 'red';
    }

    this.setState({ restante: restante });
  };

  render() {
    return (
      <div className="app">
        <Grid>
          <Grid.Column width={5} />

          <Grid.Column width={6}>
            <center id="contenido">
              <Header titulo="Gasto Semanal" />
              <Card>
                <Formulario agregarGasto={this.agregarGasto} />
              </Card>

              <Card>
                <Listado gastos={this.state.gastos} />
                <ControlPresupuesto
                  presupuesto={this.state.presupuesto}
                  restante={this.state.restante}
                  tipo={this.tipo}
                />
              </Card>
            </center>
          </Grid.Column>

          <Grid.Column width={5} />
        </Grid>
      </div>
    );
  }
}

export default App;
