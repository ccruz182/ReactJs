import React, { Component } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Producto extends Component {
  render() {
    return (
      <Card color="pink">
        <Image src={`imagenes/${this.props.imagen}.png`} />
        <Card.Content>
          <Card.Header>{this.props.nombre}</Card.Header>
          <Card.Meta>${this.props.precio}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Button size="mini"><Link to={`/producto/${this.props.id}`}>Más información</Link></Button>
        </Card.Content>
      </Card>
    );
  }
}

export default Producto;
