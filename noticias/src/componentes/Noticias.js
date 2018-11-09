import React, { Component } from "react";

import { Container } from "semantic-ui-react";

import Noticia from "./Noticia";

class Noticias extends Component {
  render() {
    const noticias = []
    this.props.noticias.forEach(element => {
      noticias.push(
        <Noticia 
          key={element.url}          
          informacion={element}
          className="noticia" />
      );
    });

    return (
      <Container fluid>        
        {noticias}        
      </Container>
    );
  }
}

export default Noticias;
