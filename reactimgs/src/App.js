import React, { Component } from "react";
import { Container, Message } from "semantic-ui-react";
import axios from "axios";

import Formulario from "./componentes/Formulario";
import Resultados from "./componentes/Resultados";

class App extends Component {
  state = {
    termino: "",
    imagenes: null,
    cargando: false
  };

  render() {
    const cargando = this.state.cargando;
    let areaResultados = null;
    if (cargando) {
      areaResultados = (
        <div className="spinner">
          <div className="double-bounce1" />
          <div className="double-bounce2" />
        </div>
      );
    } else {
      const imgs = this.state.imagenes;

      if (imgs != null) {
        if (imgs.length > 0) {
          areaResultados = (
            <Resultados
              datos={imgs}
              antPag={this.anteriorPagina}
              sigPag={this.siguientePagina}
              currPag={this.state.pagina}
              totalPags={this.state.totalPags}
            />
          );
        } else {
          areaResultados = (
            <Message negative>
              <Message.Header>No se encontraron imágenes</Message.Header>
              <p>Vuelve a intentar con otro término</p>
            </Message>
          );
        }
      }
    }

    return (
      <Container>
        <Formulario lecturaDatos={this.lecturaDatos} />
        {areaResultados}
      </Container>
    );
  }

  lecturaDatos = termino => {
    this.setState({ pagina: 1, termino: termino }, () => {
      this.consultaAPI();
    });
  };

  consultaAPI = async () => {
    const url = `https://pixabay.com/api/?key=11030120-1d1dda6a4abe6e1df79ec3bee&q=${
      this.state.termino
    }&per_page=30&page=${this.state.pagina}`;

    await axios
      .get(url)
      .then(response => {
        const totalHits = response.data.totalHits;
        const pags = Math.ceil(totalHits / 30);
        console.log("pags", pags);

        this.setState({ cargando: true, imagenes: response.data.hits, totalPags: pags });

        setTimeout(() => {
          this.setState({ cargando: false });
        }, 1000);
      })
      .catch();
  };

  siguientePagina = () => {
    if (this.state.pagina >= this.state.totalPags) {
      return null;
    }

    const nuevaPagina = this.state.pagina + 1;
    this.setState({ pagina: nuevaPagina }, () => {
      this.consultaAPI();
    });
  };

  anteriorPagina = () => {
    const nuevaPagina = this.state.pagina - 1;
    this.setState({ pagina: nuevaPagina }, () => {
      this.consultaAPI();
    });
  };
}

export default App;
