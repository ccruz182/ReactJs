import React, { Component } from "react";
import { Button, Table } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

class Post extends Component {
  render() {
    return (
      <Table.Row textAlign="center">
        <Table.Cell>{this.props.info.id}</Table.Cell>
        <Table.Cell>{this.props.info.title}</Table.Cell>
        <Table.Cell>
          <Link to={`/post/${this.props.info.id}`}>
            <Button basic color="blue">
              Ver
            </Button>
          </Link>

          <Link to={`/editar/${this.props.info.id}`}>
            <Button basic color="yellow">
              Editar
            </Button>
          </Link>

          <Button basic color="red" onClick={this.confirmarEliminacion}>
            Eliminar
          </Button>
        </Table.Cell>
      </Table.Row>
    );
  }

  confirmarEliminacion = () => {
    Swal({
      title: "¿Está seguro de eliminar el post?",
      text: "Se eliminará de forma permanente",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, elimínalo!",
      cancelButtonText: "Cancelar"
    }).then(result => {
      if (result.value) {
        Swal("Eliminado!", "El post se eliminó satisfactoriamente.", "Ok");
        this.props.borrar(this.props.info.id);
      }
    });
  };
}

export default Post;
