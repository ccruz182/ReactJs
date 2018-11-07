import React, { Component } from "react";

import Encabezado from "./componentes/Encabezado";
import Formulario from './componentes/Formulario'

class App extends Component {
  render() {
    return (
      <div className>        
        <Encabezado titulo="Clima" />
        <Formulario />
      </div>
    );
  }
}

export default App;
