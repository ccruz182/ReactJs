import React, { Component } from "react";
import { Card, Container } from "semantic-ui-react";

import Buscador from "./Buscador";
import Producto from "./Producto";

class Productos extends Component {
  state = {
    filtro: false,
    nombreFiltro: ""
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

    return (
      <Container>
        <center>
          <h1 style={{ color: "#07F3E3" }}>Nuestros Productos</h1>
          <Buscador buscar={this.filtrado} />
        </center>
        <Card.Group itemsPerRow={3}>{this.muestraProductos()}</Card.Group>
      </Container>
    );
  }

  filtrado = entrada => {
    if (entrada) {
      this.setState({ filtro: true, nombreFiltro: entrada });
    } else if (entrada == "") {      
      this.setState({filtro: false});
    }
  };

  muestraProductos = () => {
    const filtrado = this.state.filtro;
    const nomFiltro = this.state.nombreFiltro;
    const prods = { ...this.props.prods };
    const prodsJSX = [];
    console.log("FILTRADO", filtrado, typeof filtrado);

    if (filtrado) {
      console.log("B")
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
      console.log("OK")
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
