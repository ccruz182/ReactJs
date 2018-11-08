import React, { Component } from "react";

import { Grid, Responsive, Segment } from "semantic-ui-react";

import Encabezado from "./componentes/Encabezado";
import Error from './componentes/Error';
import Formulario from "./componentes/Formulario";

class App extends Component {
  state = {    
    consulta: {},
    error: false
  }

  datosConsulta = (datos) => {    
    if (datos.ciudad === '' || datos.pais === '') {
      this.setState({error: true});
    } else {
      this.setState({error: false});
    }
  }


  render() {
    let resultado = null;

    if (this.state.error) {
      resultado = <Error />
    }
    return (
      <Segment.Group>
        <Responsive as={Segment} {...Responsive.onlyMobile}>
          <Encabezado titulo="Clima" />
          <Grid>            
            <Grid.Column width={16}>
              <Formulario datosConsulta={this.datosConsulta}/>
              {resultado}
            </Grid.Column>            
          </Grid>
        </Responsive>
        <Responsive as={Segment} {...Responsive.onlyTablet}>
          <Encabezado titulo="Clima" />
          <Grid>
            <Grid.Column width={2} />

            <Grid.Column width={12}>
              <Formulario datosConsulta={this.datosConsulta}/>
              {resultado}
            </Grid.Column>

            <Grid.Column width={2} />
          </Grid>
        </Responsive>
        <Responsive as={Segment} {...Responsive.onlyComputer}>
          <Encabezado titulo="Clima" />
          <Grid>
            <Grid.Column width={4} />

            <Grid.Column width={8}>
              <Formulario datosConsulta={this.datosConsulta}/>
              {resultado}
            </Grid.Column>

            <Grid.Column width={4} />
          </Grid>
        </Responsive>
      </Segment.Group>
    );
  }
}

export default App;
