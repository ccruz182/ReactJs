import React, { Component } from "react";
import { Button, Card } from "react-materialize";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { borrarCita } from "../actions/citasActions";

class DetalleCita extends Component {
  render() {
    return (
      <Card
        className="detalleCita"
        title={this.props.informacion.mascota}
        reveal={
          <div>
            <li>
              <b>Dueño: </b>
              {this.props.informacion.dueno}
            </li>
            <li>
              <b>Fecha: </b>
              {this.props.informacion.fecha}
            </li>
            <li>
              <b>Hora: </b>
              {this.props.informacion.hora}
            </li>
            <li>
              <b>Síntomas: </b>
              {this.props.informacion.sintomas}
            </li>

            <Button
              className="eliminaCita"
              waves="red"
              onClick={() => {
                this.props.borrarCita(this.props.informacion.id);
              }}
            >
              Eliminar
            </Button>
          </div>
        }
      />
    );
  }
}

DetalleCita.propTypes = {
  informacion: PropTypes.object.isRequired,  
};

export default connect(
  null,
  { borrarCita }
)(DetalleCita);
