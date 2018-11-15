import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

import Encabezado from "./componentes/Encabezado";
import Eventos from "./componentes/Eventos";
import Formulario from "./componentes/Formulario";

class App extends Component {
  state = {
    categorias: [],
    eventos: []
  };

  opciones = [];

  componentDidMount() {
    this.obtenerCategorias();
  }

  obtenerCategorias = async () => {
    const url =
      "https://www.eventbriteapi.com/v3/categories/?token=SNMAMWZXDSSXUXSHQP54&locale=es_ES";

    await fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(categorias => {
        this.setState({
          categorias: categorias.categories
        });
        this.procesarOpcionesFormulario(categorias.categories);
      });
  };

  procesarOpcionesFormulario = categorias => {
    let i = 1;    
    categorias.forEach(element => {
      this.opciones.push({
        key: i,
        text: element.name_localized,
        value: element.id
      });
      i += 1;
    });
  };

  obtenerEventos = async infoEventos => {
    const url =
      `https://www.eventbriteapi.com/v3/events/search/?q=${infoEventos.nombre}` + 
      `&categories=${infoEventos.categoria}&token=SNMAMWZXDSSXUXSHQP54&locale=es_ES`;
    
    await fetch(url).then(respuesta => {
      return respuesta.json();
    }).then(evento => {
      this.setState({
        eventos: evento.events
      });
    });
  };

  render() {
    return (
      <div>
        <Encabezado titulo="Eventos" />
        <Formulario
          optCategoria={this.opciones}
          obtenerEventos={this.obtenerEventos}
        />
        <Grid>
          <Eventos eventos={this.state.eventos}/>
        </Grid>
      </div>
    );
  }
}

export default App;
