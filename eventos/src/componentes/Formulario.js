import React, { Component } from "react";
import { Button, Dropdown, Form } from "semantic-ui-react";

class Formulario extends Component {
  valoresFormulario = ["", ""];

  lecturaFormulario = (event, data, num) => {
    this.valoresFormulario[num] = data.value;
  };

  envioSolicitud = event => {
    event.preventDefault();
    
    const datosBusqueda = {
      nombre: this.valoresFormulario[0],
      categoria: this.valoresFormulario[1]
    };

    this.props.obtenerEventos(datosBusqueda);
  };

  render() {
    return (
      <Form className="formulario" onSubmit={this.envioSolicitud}>
        <Form.Group widths="equal">
          <Form.Input
            placeholder="Nombre de Evento o ciudad"
            onChange={(event, data) => {
              this.lecturaFormulario(event, data, 0);
            }}
          />
          <Dropdown
            fluid
            placeholder="Seleccciona categorias"
            clearable
            options={this.props.optCategoria}
            selection
            onChange={(event, data) => {
              this.lecturaFormulario(event, data, 1);
            }}
          />
          <div className="relleno" />
          <Button color="blue" fluid>
            Buscar
          </Button>
        </Form.Group>
      </Form>
    );
  }
}

export default Formulario;
