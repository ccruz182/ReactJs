import React, { Component } from "react";

import { Grid, Card } from 'semantic-ui-react'
import "../css/app.css";

import Formulario from './Formulario'
import Encabezado from "./Header";


class App extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={5}></Grid.Column>

        <Grid.Column width={6}>        
          <center className='card_body'>
            <Card>
              <Encabezado titulo="Cotizador de seguro de auto" />
              <Formulario />
            </Card>            
          </center>        
        </Grid.Column>

        <Grid.Column width={5}></Grid.Column>
      </Grid>
      

       
       
    );
  }
}

export default App;
