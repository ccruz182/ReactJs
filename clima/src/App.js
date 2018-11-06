import React, { Component } from "react";

import Encabezado from "./componentes/Encabezado";

class App extends Component {
  render() {
    return (
      <div className>
        <Encabezado titulo="Clima" />
      </div>
    );
  }
}

export default App;
