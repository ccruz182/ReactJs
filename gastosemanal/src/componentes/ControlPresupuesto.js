import React, {Component} from 'react';

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

export default ControlPresupuesto;