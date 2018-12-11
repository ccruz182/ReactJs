import React, { Component } from "react";
import {
  Button,
  Container,
  Form,
  Header,
  Input,
  TextArea
} from "semantic-ui-react";

class NuevoPost extends Component {
  datos = [" ", " "];

  render() {    
    return (
      <Container className="nuevoForm" textAlign="center">
        <Header as="h2">
          Nuevo Post
          <Header.Subheader>
            Llena los campos para crear un nuevo post
          </Header.Subheader>
        </Header>

        <Form onSubmit={this.envioDatos}>
          <Form.Field>
            <label>Titulo del post</label>
            <Input
              placeholder="Titulo del post"
              onChange={(event, data) => {
                this.cambioDatos(event, data, 0);
              }}
            />
          </Form.Field>

          <Form.Field>
            <label>Contenido del post</label>
            <TextArea
              placeholder="Contenido del post"
              onChange={(event, data) => {
                this.cambioDatos(event, data, 1);
              }}
            />
          </Form.Field>

          <Button basic color="orange">
            Crear
          </Button>
        </Form>
      </Container>
    ); 
  }

  cambioDatos = (event, data, tipo) => {    
    this.datos[tipo] = data.value;
  };

  envioDatos = (event) => {
    event.preventDefault();
    const post = {
      body: this.datos[1],
      title: this.datos[0],
      userId: 1
    };

    this.props.crear(post);
  }
}

export default NuevoPost;
