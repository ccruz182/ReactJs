import React, { Component } from "react";
import { Card, Container } from "semantic-ui-react";
import axios from "axios";

import Encabezado from "./componentes/Encabezado";
import Formulario from "./componentes/Formulario";

class App extends Component {
  state = {
    criptoMonedas: []
  }

  async componentDidMount() {
    this.obtenerMonedas();
  }

  obtenerMonedas = async () => {
    const url = "https://api.coinmarketcap.com/v2/ticker/";
    await axios
      .get(url)
      .then(respuesta => {        
        this.setState({
          criptoMonedas: respuesta.data.data
        });
      })
      .catch(error => {});
  };

  render() {
    return (
      <Container>
        <Encabezado titulo="Cotiza criptomonedas al instante" />
        <Card
          style={{ marginLeft: "auto", marginRight: "auto", padding: "2%" }}
        >
          <Formulario criptoMonedas={this.state.criptoMonedas}/>
        </Card>
      </Container>
    );
  }
}

export default App;
