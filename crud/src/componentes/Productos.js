import React, { Component } from "react";
import { Container, Table } from "semantic-ui-react";

import { connect } from "react-redux";
import { mostrarProductos } from "../actions/productoAction";

import Producto from "./Producto";

class Productos extends Component {
  componentDidMount() {
    this.props.mostrarProductos();
  }

  render() {
    const productos = [...this.props.productos];
    const productosJSX = [];
    productos.forEach(producto => {
      productosJSX.push(<Producto key={producto.id} datos={producto} />);
    });

    return (
      <Container textAlign="center" style={{paddingTop: "2%"}}>
        <h3>Listado de Productos</h3>

        <div>
          <Table>
            <Table.Body>
              {productosJSX}
            </Table.Body>
          </Table>
        </div>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  productos: state.productos.productos
});

export default connect(
  mapStateToProps,
  { mostrarProductos }
)(Productos);
