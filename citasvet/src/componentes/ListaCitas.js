import React, { Component } from "react";

import DetalleCita from "./DetalleCita";

class ListaCitas extends Component {
  render() {
    const detallesCitas = [];
    this.props.citas.forEach(element => {      
      detallesCitas.push(
      <DetalleCita  
        key={element.id}       
        informacion={element}
        eliminaCita={this.props.eliminaCita}/>
      );
    })

    return (
      <center>
        <h5>Administra las citas aquí</h5>
        {detallesCitas}
      </center>
    );
  }
}

export default ListaCitas;
