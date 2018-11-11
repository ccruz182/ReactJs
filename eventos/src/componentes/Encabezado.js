import React from 'react';
import PropTypes from 'prop-types';

const Encabezado = props => {
  return (
    <h2 className="encabezado">
      {props.titulo}
    </h2>
  );
};

Encabezado.propTypes = {
  titulo: PropTypes.string.isRequired
};

export default Encabezado;