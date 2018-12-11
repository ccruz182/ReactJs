import React, { Component } from "react";
import {
  Button,
  Container,
  Form,
  Header,
  Input,
  TextArea
} from "semantic-ui-react";

class Editar extends Component {
  state = {
    titulo: "",
    contenido: ""
  };

  componentWillMount() {    
    if (this.props.info) {
      console.log(this.props.info);
      this.setState({
        titulo: this.props.info.title,
        contenido: this.props.info.body
      });
    }
  }

  render() {    
    if (this.props.info) {
      const titulo = this.state.titulo;
      const contenido = this.state.contenido;

      return (
        <Container className="nuevoForm" textAlign="center">
          <Header as="h2">
            Edición Post
            <Header.Subheader>Modifica el contenido del post</Header.Subheader>
          </Header>

          <Form onSubmit={this.envioDatos}>
            <Form.Field>
              <label>Titulo del post</label>
              <Input
                placeholder="Titulo del post"
                value={titulo}
                onChange={(event, data) => {
                  this.cambioDatos(event, data, 0);
                }}
              />
            </Form.Field>

            <Form.Field>
              <label>Contenido del post</label>
              <TextArea
                placeholder="Contenido del post"
                value={contenido}
                onChange={(event, data) => {
                  this.cambioDatos(event, data, 1);
                }}
              />
            </Form.Field>

            <Button basic color="purple">
              Modificar
            </Button>
          </Form>
        </Container>
      );
    } else {
      return null;
    }
  }

  cambioDatos = (event, data, tipo) => {
    event.preventDefault();
    if (tipo === 0) {
      this.setState({ titulo: data.value });
    } else {
      this.setState({contenido: data.value});
    }
  };

  envioDatos = event => {
    event.preventDefault();
    const post = {
      id: this.props.id,
      body: this.state.contenido,
      title: this.state.titulo,
      userId: 1
    };
    
    this.props.editar(post);
  };
}

export default Editar;
