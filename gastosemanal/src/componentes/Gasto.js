import React, { Component } from "react";

import { Grid, Message } from "semantic-ui-react";

class Gasto extends Component {
  render() {
    return (
      <Message>
        <div id="internalGrid">
          <Grid>
            <Grid.Column width={10}>{this.props.gasto.nombre}</Grid.Column>

            <Grid.Column width={6}>$ {this.props.gasto.cantidad}</Grid.Column>
          </Grid>
        </div>
      </Message>
    );
  }
}

export default Gasto;
