import React, { Component } from "react";
import { Button, Chip, Input } from "react-materialize";
import uuid from "uuid";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { agregarCita } from "../actions/citasActions";
import { validarFormulario } from "../actions/errorActions";

class AgregarCita extends Component {
  datosFormulario = {};

  componentWillMount() {    
    this.props.validarFormulario(false);
  }

  obtenerDatosInput = (event, data, num) => {
    this.datosFormulario[num] = data;
  };

  cargaDatos = event => {
    event.preventDefault();

    const cita = {
      id: uuid(),
      mascota: this.datosFormulario[1],
      dueno: this.datosFormulario[2],
      fecha: this.datosFormulario[3],
      hora: this.datosFormulario[4],
      sintomas: this.datosFormulario[5]
    };

    let k = "";
    let error = false;

    for (k in cita) {
      if (cita[k] === undefined || cita[k] === "") {
        this.props.validarFormulario(true);
        error = true;
        break;
      }
    }

    if (!error) {
      /* Envío de datos al padre */
      this.props.agregarCita(cita);

      /* No existió problema. Error a falso */
      this.props.validarFormulario(false);

      // window.location.reload();
    }
  };

  render() {
    let mensajeError = (
      <Chip>Campos vacíos. Favor de llenar todos los campos</Chip>
    );

    console.log("->", this.props);

    if (!this.props.error) {
      mensajeError = null;
    }

    return (
      <form onSubmit={this.cargaDatos}>
        <h5>Ingresa los datos aquí</h5>
        <Input
          type="text"
          label="Nombre de Mascota"
          s={12}
          onChange={(event, data) => this.obtenerDatosInput(event, data, 1)}
        />

        <Input
          type="text"
          label="Nombre del dueño"
          s={12}
          onChange={(event, data) => this.obtenerDatosInput(event, data, 2)}
        />

        <Input
          type="date"
          label="Fecha de cita"
          s={12}
          onChange={(event, data) => this.obtenerDatosInput(event, data, 3)}
        />

        <Input
          type="time"
          label="Hora de cita"
          s={12}
          onChange={(event, data) => this.obtenerDatosInput(event, data, 4)}
        />

        <Input
          type="textarea"
          label="Síntomas"
          s={12}
          onChange={(event, data) => this.obtenerDatosInput(event, data, 5)}
        />

        <Button waves="yellow">Añadir</Button>
        {mensajeError}
      </form>
    );
  }
}

AgregarCita.propTypes = {
  agregarCita: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  citas: state.citas.citas,
  error: state.error.error
});

export default connect(
  mapStateToProps,
  { agregarCita, validarFormulario }
)(AgregarCita);
