import React, { Component } from "react";

import { Button, Dropdown, Form, Icon } from "semantic-ui-react";

class Formulario extends Component {
  render() {
    const paises = [
      { text: "Argentina", value: "AR" },
      { text: "Colombia", value: "CO" },
      { text: "España", value: "ES" },
      { text: "Estados Unidos", value: "US" },
      { text: "México", value: "MX" }
    ];

    return (
      <Form>
        <Form.Group inline>
          <Form.Input placeholder="Ciudad" width={3} />
          
          <Dropdown
            clearable
            placeholder="Selecciona país"
            selection
            options={paises}
            width={4}
          />
          
          <Button icon labelPosition="right">
            Buscar
            <Icon name="search" />
          </Button>
        </Form.Group>
      </Form>
    );
  }
}

export default Formulario;
