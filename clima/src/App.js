import React, { Component } from "react";

import { Grid, Responsive, Segment } from "semantic-ui-react";

import Clima from "./componentes/Clima"
import Encabezado from "./componentes/Encabezado";
import Error from './componentes/Error';
import Formulario from "./componentes/Formulario";

class App extends Component {
  state = {        
    error: false,
    resultado: {}
  }

  consultarAPI = (datos) => {      
    const {ciudad, pais} = datos;
    const APIkey = "564c56a94c68e2f3b69936341fe67892";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${APIkey}`    

    fetch(url).then(respuesta => {
      return respuesta.json();
    }).then(datosClima => {
      this.setState({
        resultado: datosClima
      });
    }).catch(error => {
      console.log('Error', error);
    });
  }

  datosConsulta = (datos) => { 
    console.log(datos.ciudad === '');   
    if (datos.ciudad === '' || datos.pais === '') {
      this.setState({error: true});
    } else {      
      this.setState({error: false});
      this.consultarAPI(datos);     
    }
  }


  render() {
    let resultado = null;
    let obj = {...this.state.resultado};

    if (this.state.error) {
      resultado = <Error />
    } else if (!(Object.keys(obj).length === 0 && obj.constructor === Object)) {
      resultado = <Clima datos={this.state.resultado}/>
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
