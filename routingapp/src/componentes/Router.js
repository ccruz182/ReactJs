import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Error from "./Error";
import Inicio from "./Inicio";
import Nosotros from "./Nosotros";
import Productos from "./Productos";

import infoProductos from "../datos/datos.json";

class Router extends Component {
  state = {
    productos: []
  };

  componentWillMount() {
    this.setState({
      productos: infoProductos
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={() => {
              return <Productos prods={this.state.productos} />;
            }}
          />
          <Route exact path="/nosotros" component={Nosotros} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
