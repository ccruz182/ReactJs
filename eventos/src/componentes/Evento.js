import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import PropTypes from 'prop-types';

const Evento = props => {
  return (
    <Card className="evento">
      <Image src={props.informacion.logoUrl} />
      <Card.Content>
        <Card.Header>{props.informacion.nombre}</Card.Header>
        <Card.Description>
          {props.informacion.descripcion.text.substr(0, 100)}
          ...
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

Evento.propTypes = {
  informacion: PropTypes.object.isRequired
};

export default Evento;