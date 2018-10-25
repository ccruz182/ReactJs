import React, { Component } from "react";

class Producto extends Component {
  render() {    
    return (
      <div>
        <h1>{this.props.datos['nombre']}</h1>
        <h3>{this.props.datos['precio']}</h3>
      </div>
    );
  }
}

export default Producto;
