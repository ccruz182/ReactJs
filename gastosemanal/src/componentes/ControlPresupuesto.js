import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ControlItem from './ControlItem';

class ControlPresupuesto extends Component {
  render () {    
    return (
      <div id='controlPresupuesto'>
        <ControlItem tipo='blue' titulo='Presupuesto' cantidad={this.props.presupuesto}/>
        <ControlItem tipo={this.props.tipo} titulo='Restante' cantidad={this.props.restante}/>
      </div>
    );
  }
}

ControlPresupuesto.propTypes = {
  tipo: PropTypes.string.isRequired,
  presupuesto: PropTypes.string.isRequired,
  restante: PropTypes.string.isRequired
}

export default ControlPresupuesto;