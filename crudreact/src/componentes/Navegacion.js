import React from "react";
import { NavLink } from "react-router-dom";

const Navegacion = () => {
  return (
    <nav className="navegacion" style={{ textAlign: "center" }}>
      <NavLink to="/posts" activeClassName="activo">
        Todos los posts
      </NavLink>
      <NavLink to="/nuevo-post" activeClassName="activo">
        Nuevo post
      </NavLink>      
    </nav>
  );
};

export default Navegacion;
