import { Button, Card } from "semantic-ui-react";

const Evento = props => {  
  let textoDsc = "";
  
  if (props.informacion.description.text !== null) {
    textoDsc = props.informacion.description.text;
  }

  return (
    <Card className="evento">      
      <Card.Content>
        <Card.Header>{props.informacion.name.text}</Card.Header>
        <Card.Description>
          {textoDsc.substr(0, 100)}
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

export default Evento;
