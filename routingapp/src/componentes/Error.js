import React, { Component } from "react";
import { Message } from "semantic-ui-react";

class Error extends Component {
  render() {
    return <Message style={{margin: "2%"}} negative size="massive"><center>Página no encontrada</center></Message>;
  }
}

export default Error;
