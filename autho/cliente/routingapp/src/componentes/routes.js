import React from "react";
import { Route, Router } from "react-router-dom";
import Callback from "./Callback/Callback";
import Auth from "../Auth/Auth";
import history from "../history";

/* Componentes propios */
import Contacto from "./Contacto";
import DetalleProducto from "./DetalleProducto";
import Encabezado from "./Encabezado";
import Error from "./Error";
import Navegacion from "./BarraNavegacion";
import Nosotros from "./Nosotros";
import Productos from "./Productos";

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
      <div>
        <Encabezado titulo="Mi tienda" />
        <Navegacion auth={auth} />
        <Route
          exact
          path="/"
          render={props => {
            return <Productos auth={auth} {...props} />;
          }}
        />
        <Route exact path="/nosotros" component={Nosotros} />
        <Route
          exact
          path="/contacto"
          render={props => <Contacto auth={auth} {...props} />}
        />
        <Route
          exact
          path="/productos"
          render={props => <Productos auth={auth} {...props} />}
        />
        <Route
          exact
          path="/producto/:productoID"
          render={props => {
            const prodId = props.location.pathname.split("/")[2];
            return (
              <DetalleProducto
                informacion={this.state.productos[prodId]}
                auth={auth}
                {...props}
              />
            );
          }}
        />
        {
          //<Route component={Error} />
        }
        <Route
          path="/callback"
          render={props => {
            handleAuthentication(props);
            return <Callback {...props} />;
          }}
        />
      </div>
    </Router>
  );
};
