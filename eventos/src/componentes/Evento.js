import React from "react";
import { Button, Card } from "semantic-ui-react";

const Evento = props => {
  return (
    <Card className="evento">
      <Card.Content>
        <Card.Header>{props.informacion.nombre}</Card.Header>
        <Card.Description>
          {props.informacion.descripcion.text.substr(0, 100)}...
        </Card.Description>
      </Card.Content>

      <Card.Content extra>
        <Button fluid>
          <a href={props.informacion.url}>Ver más</a>
        </Button>
      </Card.Content>
    </Card>
  );
};

export default Evento;
