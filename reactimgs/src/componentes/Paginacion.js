import React from "react";
import { Button, Container } from "semantic-ui-react";

const Paginacion = props => {
  let disAnt = false;
  let disSig = false;
  
  if (props.currPag === 1) {    
    disAnt = true;
  }

  if (props.currPag >= props.totalPags) {
    disSig = true;
  }

  return (
    <Container className="paginacion" textAlign="center">
      <Button disabled={disAnt} basic color="green" onClick={props.antPag}>
        Anterior <br /> &larr;
      </Button>
      <Button disabled={disSig} basic color="green" onClick={props.sigPag}>
        Siguiente <br /> &rarr;
      </Button>
    </Container>
  );
};

export default Paginacion;
