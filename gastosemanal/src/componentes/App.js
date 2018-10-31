import React, { Component } from "react";
import {Card, Grid } from "semantic-ui-react";

import "../css/app.css";

import Formulario from './Formulario';
import Header from "./Header";
import Listado from './Listado';

class App extends Component {

  state = {
    presupuesto: '',
    restante: '',
    gastos: {}
  }

  agregarGasto = (gasto) => {
    /* Copia del state actual */
    const gastos = {...this.state.gastos};

    /* Agregar al gasto */    
    gastos[`gastos${Date.now()}`] = gasto;    

    /* Copia del state actual */
    this.setState({gastos});
  }

  render() {
    return (
      <div className="app">
        <Grid>
          <Grid.Column width={5} />

          <Grid.Column width={6}>
            <center id='contenido'>
              <Header titulo="Gasto Semanal" />
              <Card>   
                <Formulario agregarGasto={this.agregarGasto} />             
              </Card>        

              <Card>
                <Listado gastos={this.state.gastos}/>
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
