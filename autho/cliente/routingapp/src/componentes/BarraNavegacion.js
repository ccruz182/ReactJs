import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navegacion extends Component {
  logout = () => {
    this.props.auth.logout();
  };

  login = () => {
    this.props.auth.login();
  }
  
  render() {
    const { isAuthenticated } = this.props.auth;
    let textoSesion = "Iniciar sesión";
    let funcionSesion = this.login;

    if (isAuthenticated()) {
      /* Se debe de cerrar la sesión */
      textoSesion = "Cerrar sesión";
      funcionSesion = this.logout;
    }

    const manejoSesion = <NavLink to="/" onClick={funcionSesion}>{textoSesion}</NavLink>;
    return (
      <nav style={{ textAlign: "center" }}>
        <NavLink to="/nosotros" activeClassName="activo">
          Nosotros
        </NavLink>
        <NavLink to="/productos" activeClassName="activo">
          Productos
        </NavLink>
        <NavLink to="/contacto" activeClassName="activo">
          Contacto
        </NavLink>
        {manejoSesion}
      </nav>
    );
  }
}

export default Navegacion;
