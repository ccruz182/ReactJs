import { Button, Card, Image } from "semantic-ui-react";

const Noticia = props => {  
  const { description, title, url, urlToImage } = props.informacion;

  return (
    <Card color="orange">
      <Image src={urlToImage} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button fluid><a href={url}>Leer</a></Button>
      </Card.Content>
    </Card>
  );
};

export default Noticia;