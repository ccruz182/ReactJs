import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";

class Producto extends Component {
  render() {
    return (
      <Card color="pink">
        <Image src={`imagenes/${this.props.imagen}.png`} />
        <Card.Content>
          <Card.Header>{this.props.nombre}</Card.Header>
          <Card.Meta>${this.props.precio}</Card.Meta>
        </Card.Content>
      </Card>
    );
  }
}

export default Producto;
