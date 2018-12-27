import { Container, Grid } from "semantic-ui-react";
import fetch from "isomorphic-unfetch";

import Eventos from "../componentes/Eventos";
import Master from "../componentes/Master";
import Noticias from "../componentes/Noticias";
import Precio from "../componentes/Precio";

const Index = props => (
  <Master>    
    <Container fluid>
      <Grid columns={2} textAlign="center">
        <Grid.Row>
          <Grid.Column width={16}>
            <center>
              <div style={{ padding: "2% 30%" }}>
                <Precio datos={props.precioBitcoin} />
              </div>
            </center>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={10}>
            <div style={{ marginLeft: "4em" }}>
              <Noticias articulos={props.noticiasBitcoin} />
            </div>
          </Grid.Column>
          <Grid.Column width={6}>
            <div>
              <Eventos eventos={props.eventosBitcoin} />
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Master>
);

Index.getInitialProps = async () => {
  const precio = await fetch("https://api.coinmarketcap.com/v2/ticker/1/");
  const noticias = await fetch(
    "https://newsapi.org/v2/everything?q=bitcoin&from=2018-11-27&sortBy=publishedAt&apiKey=655c8c15cf9b411186af69f42b69b8a5&language=es"
  );
  const eventos = await fetch(
    "https://www.eventbriteapi.com/v3/events/search/?q=bitcoin&categories=102&token=SNMAMWZXDSSXUXSHQP54&locale=es_ES"
  );

  const resPrecio = await precio.json();
  const resNoticias = await noticias.json();
  const resEventos = await eventos.json();

  return {
    precioBitcoin: resPrecio.data.quotes.USD,
    noticiasBitcoin: resNoticias.articles,
    eventosBitcoin: resEventos.events
  };
};

export default Index;
