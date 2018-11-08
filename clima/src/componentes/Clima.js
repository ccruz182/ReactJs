import React, {Component} from 'react';


import { Card, Divider } from 'semantic-ui-react'

class Clima extends Component {
	mostrarResultado = () => {
		const {main, name, sys} = this.props.datos; 

		if (!name) return null;

		return (
			<center>
				<Card>					
					<Card.Content>
						<Card.Header>{name}, {sys.country}</Card.Header>
						<Card.Description>
						<span>Temperatura Máxima: {main.temp_max}</span>
						<Divider />
						<span>Temperatura Mínima: {main.temp_min}</span>
						</Card.Description>
					</Card.Content>
				</Card>
			</center>
		);
	};

	render() {
		console.log(this.props.datos);
		const {main, name, sys} = this.props.datos; 
		return (		
		<div>	
			{this.mostrarResultado()}
			</div>
		);
	}
}

export default Clima;