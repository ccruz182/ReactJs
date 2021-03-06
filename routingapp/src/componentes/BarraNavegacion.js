import React from 'react';
import { NavLink } from "react-router-dom";

const Navegacion = () => {
  return (
    <nav 
      style={{"textAlign": "center"}}
    >
      <NavLink to="/nosotros" activeClassName="activo">Nosotros</NavLink>
      <NavLink to="/productos" activeClassName="activo">Productos</NavLink>
      <NavLink to="/contacto" activeClassName="activo">Contacto</NavLink>
    </nav>
  );
}

export default Navegacion;
