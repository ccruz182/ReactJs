import React, { Component } from "react";
import { Button, Card, Form } from "semantic-ui-react";

class Formulario extends Component {
  dato = "";

  render() {
    const width = document.documentElement.clientWidth;
    let btnStyle = null;    
    
    if (width < 600) {      
      btnStyle = { marginTop: "4%"};      
    }

    return (
      <Card color="orange" fluid centered>
        <Card.Content textAlign="center">
          <Card.Header>Buscador de Imágenes</Card.Header>

          <Form onSubmit={this.envioDatos}>
            <Form.Group >
              <Form.Input
                width={16}
                placeholder="Busca imágenes. Ej: perros"
                onChange={this.cambioDato}
              />
              <Button style={btnStyle} basic color="purple">
                Buscar!
              </Button>
            </Form.Group>
          </Form>
        </Card.Content>
      </Card>
    );
  }

  cambioDato = (event, data) => {
    this.dato = data.value;
  };
  envioDatos = () => {
    this.props.lecturaDatos(this.dato);
  };
}

export default Formulario;
