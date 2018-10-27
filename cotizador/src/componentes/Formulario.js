import React, { Component } from "react";

import { Button, Dropdown, Form, Radio } from "semantic-ui-react";

class Formulario extends Component {
  marca = 0;
  anio = 0;
  tipo = 0;

  cotizarSeguro(e) {
    e.preventDefault();
    /* refs: son para leer los valores de los campos de un formulario */
    console.log(this.marca, this.anio, this.tipo);
  }

  marcaListener(event, data) {
    this.marca = data.value;
  }

  anioListener(event, data) {
    this.anio = data.value;
  }

  tipoListener(event, data) {
    this.tipo = data.value;
  }

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
      <Form onSubmit={this.cotizarSeguro.bind(this)}>
        <Form.Field>
          <label>Marca: </label>
          <Dropdown
            clearable
            options={marcas}
            selection
            placeholder="Seleccione marca"
            onChange={this.marcaListener.bind(this)}
          />
        </Form.Field>

        <Form.Field>
          <label>Año: </label>
          <Dropdown
            clearable
            options={anios}
            selection
            placeholder="Seleccione año"
            onChange={this.anioListener.bind(this)}
          />
        </Form.Field>

        <Form.Field>
          <Form.Group inline>
            <label>Plan: </label>
            <Form.Field 
              control={Radio} 
              label="Basico" 
              value="1" 
              onChange={this.tipoListener.bind(this)}
            />
            <Form.Field 
              control={Radio} 
              label="Completo" 
              value="2"
              onChange={this.tipoListener.bind(this)}
            />
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
