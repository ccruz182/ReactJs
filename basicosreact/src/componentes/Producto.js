import React, { Component } from "react";

class Producto extends Component {
  render() {     
    const {nombre, precio} = this.props.datos;
    return (
      <div>
        <h1>{nombre}</h1>
        <h3>Precio: ${precio}</h3>
      </div>
    );
  }
}

export default Producto;
