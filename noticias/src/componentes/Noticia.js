import React from "react";

import { Card, Image } from "semantic-ui-react";

const Noticia = props => {
  console.log(props.informacion);
  const { description, title, urlToImage } = props.informacion;

  return (
    <Card color="orange">
      <Image src={urlToImage} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default Noticia;