import { Grid } from "semantic-ui-react";

const PrecioSpan = props => (
  <Grid.Column>{props.titulo}: {props.porcentaje} %</Grid.Column>
);

export default PrecioSpan;
