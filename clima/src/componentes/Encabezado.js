import React from "react";
import PropTypes from 'prop-types';
import { Header } from "semantic-ui-react";

const encabezado = props => {
  return (
    <center>
      <Header size="huge">{props.titulo}</Header>
    </center>
  );
};

encabezado.propTypes = {
  titulo: PropTypes.string.isRequired
}

export default encabezado;
