import React, { Component } from "react";

import PropTypes from 'prop-types';

import {
  Button,
  Dropdown,
  Form,
  Grid,
  Icon,
  Responsive,
  Segment
} from "semantic-ui-react";

class Formulario extends Component {
  datos = ["", ""];

  lecturaCampo = (event, data, tipo) => {
    this.datos[tipo] = data.value;
  };

  buscarClima = (event) => {
    event.preventDefault();

    const busqueda = {
      ciudad: this.datos[0],
      pais:this.datos[1]
    };
    
    this.props.datosConsulta(busqueda);
  }

  render() {
    const paises = [
      { text: "Argentina", value: "AR" },
      { text: "Colombia", value: "CO" },
      { text: "España", value: "ES" },
      { text: "Estados Unidos", value: "US" },
      { text: "México", value: "MX" }
    ];

    return (
      <Segment.Group>
        <Responsive as={Segment} {...Responsive.onlyMobile}>
          <Form onSubmit={this.buscarClima}>
            <Form.Group inline>
              <Grid textAlign="center">
                <Grid.Column width={16}>
                  <Form.Input
                    placeholder="Ciudad"
                    onChange={(event, data) => {
                      this.lecturaCampo(event, data, 0);
                    }}
                  />
                </Grid.Column>

                <Grid.Column width={16}>
                  <Dropdown
                    clearable
                    placeholder="Selecciona país"
                    selection
                    options={paises}
                    onChange={(event, data) => {
                      this.lecturaCampo(event, data, 1);
                    }}
                  />
                </Grid.Column>

                <Grid.Column width={16}>
                  <Button icon labelPosition="right">
                    Buscar
                    <Icon name="search" />
                  </Button>
                </Grid.Column>
              </Grid>
            </Form.Group>
          </Form>
        </Responsive>

        <Responsive as={Segment} {...Responsive.onlyTablet}>
          <Form onSubmit={this.buscarClima}>
            <Form.Group inline>
              <Grid textAlign="center">
                <Grid.Column width={16}>
                  <Form.Input
                    placeholder="Ciudad"
                    onChange={(event, data) => {
                      this.lecturaCampo(event, data, 0);
                    }}
                  />
                </Grid.Column>

                <Grid.Column width={16}>
                  <Dropdown
                    clearable
                    placeholder="Selecciona país"
                    selection
                    options={paises}
                    onChange={(event, data) => {
                      this.lecturaCampo(event, data, 1);
                    }}
                  />
                </Grid.Column>

                <Grid.Column width={16}>
                  <Button icon labelPosition="right">
                    Buscar
                    <Icon name="search" />
                  </Button>
                </Grid.Column>
              </Grid>
            </Form.Group>
          </Form>
        </Responsive>
        <Responsive as={Segment} {...Responsive.onlyComputer}>
          <Form onSubmit={this.buscarClima}>
            <Form.Group inline>
              <Grid textAlign="center">
                <Grid.Column width={5}>
                  <Form.Input
                    placeholder="Ciudad"
                    onChange={(event, data) => {
                      this.lecturaCampo(event, data, 0);
                    }}
                  />
                </Grid.Column>

                <Grid.Column width={5}>
                  <Dropdown
                    clearable
                    placeholder="Selecciona país"
                    selection
                    options={paises}
                    onChange={(event, data) => {
                      this.lecturaCampo(event, data, 1);
                    }}
                  />
                </Grid.Column>

                <Grid.Column width={5}>
                  <Button icon labelPosition="right">
                    Buscar
                    <Icon name="search" />
                  </Button>
                </Grid.Column>
              </Grid>
            </Form.Group>
          </Form>
        </Responsive>
      </Segment.Group>
    );
  }
}

Formulario.propTypes = {
  datosConsulta: PropTypes.func.isRequired
}

export default Formulario;
