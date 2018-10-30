import React, { Component } from "react";

import { Button, Form, Icon } from "semantic-ui-react";

class Formulario extends Component {
  render() {
    return (
      <Form>
        <h2>Ingresa tus gastos aquí</h2>
        <Form.Input label="Gasto" placeholder="Ej. Transporte" />
        <Form.Input label="Costo" placeholder="Ej. 300" />
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
