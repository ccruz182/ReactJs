import React, { Component } from "react";
import { Card, Container, Message } from "semantic-ui-react";
import axios from "axios";

import Cotizacion from "./componentes/Cotizacion";
import Encabezado from "./componentes/Encabezado";
import Formulario from "./componentes/Formulario";

class App extends Component {
  state = {
    cargando: false,
    criptoMonedas: [],
    datosValidos: true,
    operacion: {}
  };

  async componentDidMount() {
    this.obtenerMonedas();
  }

  cotizarMoneda = async monedas => {
    const { moneda, crypto } = monedas;

    if (moneda === "" || crypto === "") {
      this.setState({ datosValidos: false });
    } else {
      this.setState({ datosValidos: true });
      const url = `https://api.coinmarketcap.com/v2/ticker/${crypto}/?convert=${moneda}`;

      await axios
        .get(url)
        .then(respuesta => {          
          const operacion = {
            monedaBase: moneda,
            monedaCrypto: respuesta.data.data.name,
            precio: respuesta.data.data.quotes[moneda].price
          };

          this.setState({ cargando: true });

          setTimeout(() => {
            this.setState({ cargando: false, operacion });
          }, 2000);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

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

  muestraCotizacion = () => {
    const cotizacion = <Cotizacion operacion={this.state.operacion} />;
    const obj = this.state.operacion;

    if (this.state.datosValidos) {
      if (!this.state.cargando) {
        if (Object.keys(obj).length === 0 && obj.constructor === Object) {
          return null;
        } else {
          return cotizacion;
        }
      } else {
        return (
          <div className="spinner">
            <div className="rect1" />
            <div className="rect2" />
            <div className="rect3" />
            <div className="rect4" />
            <div className="rect5" />
          </div>
        );
      }
    } else {
      return (
        <Message negative>
          <Message.Header>Oops... Ocurrió un error</Message.Header>
          <p>Ambos campos son obligatorios</p>
        </Message>
      );
    }
  };

  render() {
    return (
      <Container>
        <Encabezado titulo="Cotiza criptomonedas al instante" />
        <Card
          style={{ marginLeft: "auto", marginRight: "auto", padding: "2%" }}
        >
          <Formulario
            criptoMonedas={this.state.criptoMonedas}
            cotizar={this.cotizarMoneda}
          />
          <Card.Content extra>{this.muestraCotizacion()}</Card.Content>
        </Card>
      </Container>
    );
  }
}

export default App;
