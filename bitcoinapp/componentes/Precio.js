import { Card, Grid } from "semantic-ui-react";

import PrecioSpan from "./PrecioSpan";

const Precio = props => {
  const {
    percent_change_1h,
    percent_change_24h,
    percent_change_7d,
    price
  } = props.datos;
  
  return (
    <Card color="green" fluid>
      <Card.Content>
        <Card.Header textAlign="left">Precio del bitcoin</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <Card.Description textAlign="left">
          <h3>Precio Actual: $ {price.toFixed(2)} USD</h3>
          <Grid columns="equal">
            <PrecioSpan
              titulo="Última Hora"
              porcentaje={percent_change_1h.toFixed(2)}
            />
            <PrecioSpan
              titulo="Últimas 24Hora"
              porcentaje={percent_change_24h.toFixed(2)}
            />
            <PrecioSpan
              titulo="Últimos 7 días"
              porcentaje={percent_change_7d.toFixed(2)}
            />
          </Grid>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default Precio;
