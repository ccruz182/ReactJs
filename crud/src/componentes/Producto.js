import React, { Component } from "react";
import { Button, Label, Table } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { eliminarProducto } from "../actions/productoAction";

class Producto extends Component {
  eliminar = () => {
    this.props.eliminarProducto(this.props.datos.id);
  };

  render() {
    const { id, nombre, precio } = this.props.datos;
    return (
      <Table.Row>
        <Table.Cell>{nombre}</Table.Cell>
        <Table.Cell collapsing>
          <Label color="yellow">
            <b>$ {precio}</b>
          </Label>
        </Table.Cell>

        <Table.Cell collapsing>
          <Link to={`/productos/editar/${id}`}>
            <Button basic color="teal">
              Editar
            </Button>
          </Link>
        </Table.Cell>

        <Table.Cell collapsing>
          <Button basic color="red" onClick={this.eliminar}>
            Eliminar
          </Button>
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default connect(
  null,
  { eliminarProducto }
)(Producto);
