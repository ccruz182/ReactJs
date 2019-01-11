import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Contacto from "./Contacto";
import DetalleProducto from "./DetalleProducto";
import Encabezado from "./Encabezado";
import Error from "./Error";
import Navegacion from "./BarraNavegacion";
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
        <div>
          <Encabezado titulo="Mi tienda" />
          <Navegacion />

          <div className="contenido">
            <Switch>
              <Route
                exact
                path="/"
                component={() => {
                  return <Productos prods={this.state.productos} />;
                }}
              />

              <Route exact path="/nosotros" component={Nosotros} />

              <Route exact path="/contacto" component={Contacto} />

              <Route
                exact
                path="/productos"
                render={() => <Productos prods={this.state.productos} />}
              />

              <Route
                exact
                path="/producto/:productoID"
                render={props => {
                  const prodId = props.location.pathname.split("/")[2];
                  return (
                    <DetalleProducto
                      informacion={this.state.productos[prodId]}
                    />
                  );
                }}
              />

              <Route component={Error} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
