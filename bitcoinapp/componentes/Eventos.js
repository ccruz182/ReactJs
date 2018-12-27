import { Card } from "semantic-ui-react";

import Evento from "./Evento";

const Eventos = props => {
  const eventos = props.eventos;
  let i = 0;
  const eventosJSX = [];

  for (i = 0; i < 20; i++) {
    eventosJSX.push(
      <Evento key={eventos[i].url} informacion={eventos[i]} />
    );
  }

  return <Card.Group itemsPerRow={1}>{eventosJSX}</Card.Group>;
};

export default Eventos;
