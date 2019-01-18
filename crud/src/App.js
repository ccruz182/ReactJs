import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./css/app.css";

import store from "./store";
import Encabezado from "./componentes/Encabezado";
import Productos from "./componentes/Productos";
import NuevoProducto from "./componentes/NuevoProducto";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Encabezado />
            <Switch>
              <Route exact path="/" component={Productos} />
              <Route
                exact
                path="/productos/nuevo"
                component={NuevoProducto}
              />
              
            </Switch>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
