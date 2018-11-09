import React, { Component } from "react";

import { Card, Divider, Message } from "semantic-ui-react";

class Clima extends Component {
  mostrarResultado = () => {
    const { main, name, sys, weather } = this.props.datos;
		
		const kelvin = 273.15;

		const urlIcono = `http://openweathermap.org/img/w/${weather[0].icon}.png`		

    if (!name) {
      return (
        <center>
          <Message negative>
            <Message.Header>
              Ciudad no encontrada!
            </Message.Header>
            <p>Prueba con otra ciudad o país</p>
          </Message>
        </center>
      );
    }

    return (
      <center>
        <Card>
          <Card.Content>
            <Card.Header>
              {name}, {sys.country}
            </Card.Header>
            <Card.Description>
							<span><h5>Actual: {(main.temp - kelvin).toFixed(2)} °C</h5></span>
							<img src={urlIcono} alt="clima" />
							<Divider />
              <span>Temperatura Máxima: {(main.temp_max - kelvin).toFixed(2)} °C</span>
              <Divider />
              <span>Temperatura Mínima: {(main.temp_min - kelvin).toFixed(2)} °C</span>
            </Card.Description>
          </Card.Content>
        </Card>
      </center>
    );
  };

  render() {
    console.log(this.props.datos);
    const { main, name, sys } = this.props.datos;
    return <div>{this.mostrarResultado()}</div>;
  }
}

export default Clima;
