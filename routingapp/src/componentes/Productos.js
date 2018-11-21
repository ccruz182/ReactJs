import React, { Component } from "react";
import { Card, Container } from "semantic-ui-react";

import Producto from "./Producto";

class Productos extends Component {
  render() {
    const prods = { ...this.props.prods };
    const prodsJSX = [];
    Object.keys(prods).map(element => {
      const { nombre, precio, descripcion, imagen } = prods[element];
      prodsJSX.push(
        <Producto
          key={imagen}
          nombre={nombre}
          precio={precio}
          descripcion={descripcion}
          imagen={imagen}
        />
      );
    });
    return (
      <Container>
        <center>
          <h1>Nuestros Productos</h1>
        </center>
        <Card.Group itemsPerRow={3}>{prodsJSX}</Card.Group>
      </Container>
    );
  }
}

export default Productos;
