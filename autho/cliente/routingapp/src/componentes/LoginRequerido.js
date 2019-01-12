import React from "react";
import { Button, Message } from "semantic-ui-react";

const LoginRequerido = props => {
  return (
    <Message warning size="huge">
      <center>
        <Message.Header>
          {props.contenido}
        </Message.Header>
        <Message.Content>
          <Button
            basic
            color="red"
            onClick={props.login}
            style={{ marginTop: "2%" }}
          >
            Iniciar Sesión
          </Button>
        </Message.Content>
      </center>
    </Message>
  );
};

export default LoginRequerido;
