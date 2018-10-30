import React, { Component } from "react";

import { Button, Form, Icon } from "semantic-ui-react";

class Formulario extends Component {

  nombre = React.createRef();
  cantidad = React.createRef();

  nombreListener = (event, data) => {
    this.nombre = data.value;
  };

  cantidadListener = (event, data) => {
    this.cantidad = data.value;
  };

  crearGasto = (event) => {
    event.preventDefault();
    
    /* Se crea objeto a enviar vía props */
    const gasto = {
      nombre: this.nombre,
      cantidad: this.cantidad
    };

    /* Se envía vía props */

    /* Se resetea el formulario */
    event.currentTarget.reset();
  };

  render() {
    return (
      <Form onSubmit={this.crearGasto}>
        <h2>Ingresa tus gastos aquí</h2>
        <Form.Input label="Gasto" placeholder="Ej. Transporte" onChange={this.nombreListener}/>
        <Form.Input label="Costo" placeholder="Ej. 300" onChange={this.cantidadListener}/>
        <Button animated='fade'>
          <Button.Content visible>Agregar</Button.Content>
          <Button.Content hidden>
            <Icon name="plus square" />
          </Button.Content>
        </Button>        
      </Form>
    );
  }
}

export default Formulario;
