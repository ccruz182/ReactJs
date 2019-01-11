import React from "react";
import {
  Button,
  Card,
  Container,
  Form,
  Header,
  Input,
} from "semantic-ui-react";

const Contacto = () => {
  return (
    <Container textAlign="center">
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

            <Button basic color="pink">Enviar!</Button>
          </Form>
        </Card>
      </center>
    </Container>
  );
};

export default Contacto;
