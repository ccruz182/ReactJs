import React, { Component } from "react";
import { Button, Input } from "react-materialize";

class AgregarCita extends Component {
  render() {
    return (
      <div>
        <h5>Ingresa los datos aquí</h5>
        <Input type="text" label="Nombre de Mascota" s={12} />
        <Input type="text" label="Nombre del dueño" s={12} />
        <Input type="date" label="Fecha de cita" s={12} />   
        <Input type="time" label="Fecha de cita" s={12} /> 
        <Input type='textarea'label="Síntomas" s={12} />
        <Button waves='orange'>Añadir</Button>
     
      </div>
    );
  }
}

export default AgregarCita;
