import React from "react";
import { Link } from "react-router-dom";

import BotonAgregarProducto from "./BotonAgregarProducto";

const Encabezado = props => {
  return (
    <nav>
      <h2 id="titulo">
        <Link to="/" style={{color: "white"}}>CRUD</Link>
      </h2>
      <BotonAgregarProducto />
    </nav>
  );
};

export default Encabezado;
