import React, { Component } from "react";
import { Container } from "semantic-ui-react";

import { makeMainRoutes } from "./componentes/routes";
const routes = makeMainRoutes();

class App extends Component {
  render() {
    return <Container>{routes}</Container>;
  }
}

export default App;
