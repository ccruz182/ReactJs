import React from 'react';
import PropTypes from 'prop-types';
import {Header} from 'semantic-ui-react';


const Encabezado = props => {
  return (
    <Header as="h2" textAlign="center" style={{padding: "3%"}}>
      {props.titulo}
    </Header>
  );
};

Encabezado.propTypes = {
  titulo: PropTypes.string.isRequired
};

export default Encabezado;