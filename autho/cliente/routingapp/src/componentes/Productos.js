import React, { Component } from "react";
import { Button, Card, Container, Message } from "semantic-ui-react";
import axios from "axios";

import Buscador from "./Buscador";
import Producto from "./Producto";

class Productos extends Component {
  state = {
    productos: null,
    filtro: false,
    nombreFiltro: ""
  };

  componentWillMount() {
    if (this.props.auth.isAuthenticated()) {
      this.queryAPI();
    }
  }

  queryAPI = () => {
    const { getAccessToken } = this.props.auth;
    const headers = { Authorization: `Bearer ${getAccessToken()}` };
    const url = "http://localhost:5000/productos";

    return axios
      .get(url, { headers })
      .then(res => {
        this.setState({ productos: res.data });
      })
      .catch(error => console.log("Error:", error));
  };

  login = () => {
    this.props.auth.login();
  };

  render() {
    /*
    const prods = { ...this.props.prods };
    const prodsJSX = [];

    Object.keys(prods).map(element => {
      const { id, nombre, precio, descripcion, imagen } = prods[element];
      prodsJSX.push(
        <Producto
          key={id}
          id={id}
          nombre={nombre}
          precio={precio}
          descripcion={descripcion}
          imagen={imagen}
        />
      );
    });
    */

    const { isAuthenticated } = this.props.auth;
    let content = null;
    if (!isAuthenticated()) {
      content = (
        <Container style={{padding: "2rem"}}>
          <Message warning size="huge">
            <center>
              <Message.Header>
                Necesitas iniciar sesión para ver los productos
              </Message.Header>
              <Message.Content>
                <Button basic color="red" onClick={this.login} style={{marginTop: "2%"}}>
                  Iniciar Sesión
                </Button>
              </Message.Content>
            </center>
          </Message>
        </Container>
      );
    } else {
      content = (
        <div>
          <center>
            <h1 style={{ color: "#07F3E3" }}>Nuestros Productos</h1>
            <Buscador buscar={this.filtrado} />
          </center>
          <Card.Group itemsPerRow={3}>{this.muestraProductos()}</Card.Group>
        </div>
      );
    }
    return <Container>{content}}</Container>;
  }

  filtrado = entrada => {
    if (entrada) {
      this.setState({ filtro: true, nombreFiltro: entrada });
    } else if (entrada === "") {
      this.setState({ filtro: false });
    }
  };

  muestraProductos = () => {
    const filtrado = this.state.filtro;
    const nomFiltro = this.state.nombreFiltro;
    const prods = { ...this.state.productos };
    const prodsJSX = [];

    if (filtrado) {
      Object.keys(prods).map(element => {
        const { id, nombre, precio, descripcion, imagen } = prods[element];
        if (nombre.includes(nomFiltro)) {
          prodsJSX.push(
            <Producto
              key={id}
              id={id}
              nombre={nombre}
              precio={precio}
              descripcion={descripcion}
              imagen={imagen}
            />
          );
        }
      });
    } else {
      console.log("OK");
      Object.keys(prods).map(element => {
        const { id, nombre, precio, descripcion, imagen } = prods[element];
        prodsJSX.push(
          <Producto
            key={id}
            id={id}
            nombre={nombre}
            precio={precio}
            descripcion={descripcion}
            imagen={imagen}
          />
        );
      });
    }

    return prodsJSX;
  };
}

export default Productos;
