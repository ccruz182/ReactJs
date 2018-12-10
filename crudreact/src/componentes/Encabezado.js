import React from "react";
import PropTypes from "prop-types";
import { Header } from "semantic-ui-react";
import { Link } from "react-router-dom";


const Encabezado = props => {
  return (
    <Header as="h2" textAlign="center" style={{ color: "white", padding: "3%" }}>
      <Link to="/">{props.titulo}</Link>
    </Header>
  );
};

Encabezado.propTypes = {
  titulo: PropTypes.string.isRequired
};

export default Encabezado;
