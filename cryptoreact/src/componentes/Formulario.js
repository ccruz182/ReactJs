import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Dropdown, Form } from "semantic-ui-react";

class Formulario extends Component {
  valores = ["", ""];
  nombreMonedas = ["", ""]

  render() {
    const monedas = [
      { key: "USD", value: "USD", text: "Dólar USD" },
      { key: "MXN", value: "MXN", text: "Peso Mexicano" },
      { key: "GBP", value: "GBP", text: "Libra Esterlina" },
      { key: "EUR", value: "EUR", text: "Euro" }
    ];

    const criptoMonedas = this.cargaCriptoMonedas();

    return (
      <Form onSubmit={this.cotizarMonedas}>
        <Form.Field>
          <label>Moneda</label>
          <Dropdown
            options={monedas}
            selection
            clearable
            placeholder="Elige una moneda"
            onChange={(event, data) => this.dropdownListener(event, data, 0)}
          />
        </Form.Field>

        <Form.Field>
          <label>Moneda</label>
          <Dropdown
            options={criptoMonedas}
            selection
            clearable
            placeholder="Elige una criptomoneda"
            onChange={(event, data) => this.dropdownListener(event, data, 1)}
          />
        </Form.Field>

        <Button fluid color="red">
          Cotizar
        </Button>
      </Form>
    );
  }

  cargaCriptoMonedas = () => {
    const crMonedas = { ...this.props.criptoMonedas };
    const cripMonedas = [];

    Object.keys(crMonedas).map(moneda => {
      const objMoneda = crMonedas[moneda];
      cripMonedas.push({
        key: objMoneda.id,
        value: objMoneda.id,
        text: objMoneda.name
      });
    });

    return cripMonedas;
  };

  dropdownListener = (event, data, type) => {
    this.valores[type] = data.value;        
  };

  cotizarMonedas = (event) => {
    event.preventDefault();
    const cotizacion = {
      moneda: this.valores[0],
      crypto: this.valores[1]      
    }

    this.props.cotizar(cotizacion);
  }
}

Formulario.propTypes = {
  cotizar: PropTypes.func.isRequired  
}

export default Formulario;
