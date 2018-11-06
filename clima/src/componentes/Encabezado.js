import React from "react";
import { Header } from "semantic-ui-react";

const encabezado = props => {
  return (
    <center>
      <Header size="huge">{props.titulo}</Header>
    </center>
  );
};

export default encabezado;
