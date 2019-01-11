import React, { Component } from "react";
import { Form, Input } from "semantic-ui-react";

class Buscador extends Component {
  render() {
    return (
      <Form className="buscador">
        <Form.Field inline>
          <Input placeholder="Búsqueda" fluid onChange={this.cambioBusqueda}/>
        </Form.Field>
      </Form>
    );
  }

  cambioBusqueda = (event, data) => {
    event.preventDefault();

    this.props.buscar(data.value);
  }
}

export default Buscador;
