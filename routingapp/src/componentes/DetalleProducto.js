import React, { Component } from "react";
import { Container, Grid, Image } from "semantic-ui-react";

class DetalleProducto extends Component {
  render() {
    const { descripcion, id, imagen, nombre, precio } = this.props.informacion;
    console.log(imagen);
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={5}>
            <Image src={`../imagenes/${imagen}.png`} />
          </Grid.Column>
          <Grid.Column width={8}>
            <h1 style={{"color": "white"}}>{nombre}</h1>
            <h2 style={{"color": "#ffcb00"}}>${precio}</h2>
            <p style={{"color": "white"}}>{descripcion}</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default DetalleProducto;
