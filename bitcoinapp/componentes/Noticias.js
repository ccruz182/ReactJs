import { Container, Card, Grid } from "semantic-ui-react";

import Noticia from "./Noticia";

const Noticias = props => {
  const noticias = props.articulos;
  const noticiasJSX = [];

  noticias.forEach(noticia => {
    noticiasJSX.push(
      <Noticia key={noticia.url} informacion={noticia}/>
    );
  });

  return (
    <Container>
      <h2>Noticias sobre Bitcoin</h2>
      <Card.Group itemsPerRow={2} centered>
        {noticiasJSX}
      </Card.Group>
    </Container>
  );
};

export default Noticias;
