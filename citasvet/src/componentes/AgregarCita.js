import React, { Component } from "react";
import { Button, Input } from "react-materialize";
import uuid from "uuid";

class AgregarCita extends Component {
  datosFormulario = {};

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

    /* Envío de datos al padre */
    this.props.crearCita(cita);

    event.currentTarget.reset();
  };

  render() {
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
      </form>
    );
  }
}

export default AgregarCita;
