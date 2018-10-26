import React, { Component } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Productos from "./Productos";

class Aplicacion extends Component {
  state = {
    productos: []
  };

  /* Una vez que el componente esté a la vista*/
  componentDidMount() {
    const productos = [
      { nombre: "Libro", precio: 200 },
      { nombre: "Disco CD", precio: 100 },
      { nombre: "Guitarra", precio: 3400 },
      { nombre: "iPod", precio: 2900 }
    ];
    setTimeout(() => {
      this.setState({
        productos: productos        
      });
    }, 3000);
  }
  render() {
    return (
      <div>
        <Header titulo="Tienda Virtual" />
        <Productos productos={this.state.productos} />
        <Footer />
      </div>
    );
  }
}

export default Aplicacion;
