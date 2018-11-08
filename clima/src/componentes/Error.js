import React from "react";

import { Message } from "semantic-ui-react";

const Error = () => {
  return (
    <Message negative>
      <Message.Header>Oops... Hubo un error</Message.Header>
      <p>Todos los campos son obligatorios</p>
    </Message>
  );
};

export default Error;
