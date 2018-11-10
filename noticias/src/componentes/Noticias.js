import React, { Component } from "react";
import PropTypes from 'prop-types';

import { Container, Grid } from "semantic-ui-react";

import Noticia from "./Noticia";

class Noticias extends Component {
  render() {
    const noticias = [];
    this.props.noticias.forEach(element => {
      noticias.push(
        <Noticia key={element.url} informacion={element} className="noticia" />
      );
    });

    return (
      <Container fluid>
        <Grid>{noticias}</Grid>
      </Container>
    );
  }
}

Noticias.propTypes = {
  noticias: PropTypes.array.isRequired
};

export default Noticias;
