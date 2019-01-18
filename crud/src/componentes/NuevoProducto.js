import React, { Component } from "react";
import { Button, Card, Container, Form, Message } from "semantic-ui-react";
import {connect} from "react-redux";

import {agregarProducto, mostrarProducto} from "../actions/productoAction";

class NuevoProducto extends Component {
  datos = ["", ""]

  state = {
    error: false
  }

  cambioDatos = (event, data, index) => {
    this.datos[index] = data.value;    
  }

  agregar = () => {
    if (this.datos[0] === "" || this.datos[1] === "") {
      this.setState({error: true});
      return;
    }
    const nuevoProducto = {
      nombre: this.datos[0],
      precio: this.datos[1]
    }

    this.props.agregarProducto(nuevoProducto);
    this.setState({error: false});
    this.props.history.push("/");
  }

  render() {
    let error = (
      <Message negative>Todos los cambios son obligatorios!</Message>
    );

    if (!this.state.error) {
      error = null;
    }

    return (
      <Container textAlign="center">
        <Card centered style={{padding: "1rem", marginTop: "1.5rem"}}>
          <h3>Agregar nuevo producto</h3>
          <Form onSubmit={this.agregar}>
            <Form.Input label="Titulo" placeholder="Título" onChange={(ev, dt) => {
              this.cambioDatos(ev, dt, 0);
            }}/>
            <Form.Input
              label="Precio del producto"
              placeholder="Precio"
              type="numeric"
              onChange={(ev, dt) => {
                this.cambioDatos(ev, dt, 1);
              }}              
            />
            <Button fluid basic color="purple">Agregar</Button>
            {error}
          </Form>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  producto: state.productos.productos
});

export default connect(mapStateToProps, {agregarProducto, mostrarProducto})(NuevoProducto);
