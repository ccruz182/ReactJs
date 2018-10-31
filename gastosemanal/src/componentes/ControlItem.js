import React, { Component } from "react";

import { Message } from "semantic-ui-react";

class ControlItem extends Component {
  render() {
    const tipo = this.props.tipo;
    console.log(tipo);
    return (
      <div>
        <Message color={tipo}>
          <span>{this.props.titulo}: </span>
          <span>${this.props.cantidad}</span>
        </Message>
      </div>
    );
  }
}

export default ControlItem;
