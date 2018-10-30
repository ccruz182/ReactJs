import React, { Component } from "react";
import {Card, Grid } from "semantic-ui-react";

import "../css/app.css";

import Formulario from './Formulario';
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Grid>
          <Grid.Column width={5} />

          <Grid.Column width={6}>
            <center id='contenido'>
              <Header titulo="Gasto Semanal" />
              <Card>   
                <Formulario />             
              </Card>        

              <Card>

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