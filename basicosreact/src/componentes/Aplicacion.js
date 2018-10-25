import React, { Component } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Productos from "./Productos";

class Aplicacion extends Component {
  render() {
    const productos = [
      { nombre: "Libro", precio: 200 },
      { nombre: "Disco CD", precio: 100 },
      { nombre: "Guitarra", precio: 3400 },
      { nombre: "iPod", precio: 2900 }
    ];

    return (
      <div>
        <Header titulo="Tienda Virtual" />
        <Productos productos={productos}/>
        <Footer />
      </div>
    );
  }
}

export default Aplicacion;
