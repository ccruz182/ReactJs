import React, { Component } from "react";
import PropTypes from "prop-types";

import { Container } from "semantic-ui-react";

class Cotizacion extends Component {
  render() {
    const { monedaBase, monedaCrypto, precio } = this.props.operacion;
    
    return (
      <Container fluid textAlign="center" className="resumen">
        <h2>Resumen</h2>
        <p>
          {`El precio de ${monedaCrypto} en ${monedaBase} es de: $ `}
          <b>{`${precio.toFixed(2)}`}</b>
        </p>
      </Container>
    );
  }
}

Cotizacion.propTypes = {
  operacion: PropTypes.object.isRequired
}

export default Cotizacion;
