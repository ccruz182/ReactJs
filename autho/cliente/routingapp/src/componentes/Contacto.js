import React from "react";
import {
  Button,
  Card,
  Container,
  Form,
  Header,
  Input
} from "semantic-ui-react";

import LoginRequerido from "./LoginRequerido";

const Contacto = props => {
  if (!props.auth.isAuthenticated()) {
    return <LoginRequerido login={props.auth.login} contenido="Se necesita iniciar sesión para enviar comentarios"/>
  } else {
    return (
      <Container textAlign="center" style={{marginTop: "2%"}}>
        <center>
          <Card>
            <Form className="form-contacto">
              <Header size="large">Contáctanos</Header>

              <Form.Field inline>
                <label>Nombre</label>
                <Input placeholder="Ingresa tu nombre" />
              </Form.Field>

              <Form.Field inline>
                <label>Correo</label>
                <Input placeholder="Ingresa tu correo" />
              </Form.Field>

              <Form.Field inline>
                <label>Mensaje</label>
                <Form.TextArea placeholder="Mensaje" rows={2} />
              </Form.Field>

              <Button basic color="pink">
                Enviar!
              </Button>
            </Form>
          </Card>
        </center>
      </Container>
    );
  }
};

export default Contacto;
