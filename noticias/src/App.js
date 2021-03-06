import React, { Component } from "react";

import Encabezado from "./componentes/Encabezado";
import Formulario from "./componentes/Formulario";
import Noticias from "./componentes/Noticias";

class App extends Component {
  state = {
    noticias: []
  };

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = () => {
    const url =
      "https://newsapi.org/v2/top-headlines?country=mx&category=general&" +
      "apiKey=655c8c15cf9b411186af69f42b69b8a5";

    fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(noticias => {
        this.setState({ noticias: noticias.articles });
      });
  };

  categoriaHandler = categoria => {
    if (categoria !== "") {
      const url =
        `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&` +
        "apiKey=655c8c15cf9b411186af69f42b69b8a5";

      fetch(url)
        .then(respuesta => {
          return respuesta.json();
        })
        .then(noticias => {
          this.setState({ noticias: noticias.articles });
        });
    }
  };

  render() {
    return (
      <div className="app">
        <Encabezado titulo="Noticias" />
        <Formulario categoriaHandler={this.categoriaHandler} />
        <Noticias noticias={this.state.noticias} />
      </div>
    );
  }
}

export default App;
