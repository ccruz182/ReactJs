import React, { Component } from "react";

import { Button, Dropdown, Form } from "semantic-ui-react";

class Formulario extends Component {
  render() {
    const marcas = [
      { key: 1, text: "Americano", value: 1 },
      { key: 2, text: "Asiático", value: 2 },
      { key: 3, text: "Europeo", value: 3 }
    ];

    const anios = [];
    let j = 1;
    for (let i = 2008; i < 2019; i++) {
      let anio = {
        key: j,
        text: i,
        value: i
      };
      anios.push(anio);
      j++;
    }

    return (
      <Form>
        <Form.Field>
          <label>Marca: </label>
          <Dropdown
            clearable
            options={marcas}
            selection
            placeholder="Seleccione marca"
          />
        </Form.Field>

        <Form.Field>
          <label>Año: </label>
          <Dropdown
            clearable
            options={anios}
            selection
            placeholder="Seleccione año"
          />
        </Form.Field>

        <Form.Field>
          <Form.Group inline>
            <label>Plan: </label>
            <Form.Radio label="Basico" value="1" />
            <Form.Radio label="Completo" value="2" />
          </Form.Group>
        </Form.Field>

        <Button fluid color="teal">
          Cotizar
        </Button>
      </Form>
    );
  }
}

export default Formulario;
