import React, { Component } from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import DetalleCita from "./DetalleCita";
import {getCitas} from "../actions/citasActions";

import store from "../store";
store.subscribe(() => {
  localStorage.setItem('citas', JSON.stringify(store.getState()));
});

class ListaCitas extends Component {
  componentDidMount() {
    this.props.getCitas();
  }

  render() {
    const detallesCitas = [];
    this.props.citas.forEach(element => {      
      detallesCitas.push(
      <DetalleCita  
        key={element.id}       
        informacion={element} />
      );
    })

    return (
      <center>
        <h5>Administra las citas aquí</h5>
        {detallesCitas}
      </center>
    );
  }
}

const mapStateToProps = state => ({
  citas: state.citas.citas
});

ListaCitas.propTypes = {
  citas: PropTypes.array.isRequired,  
}

export default connect(mapStateToProps, {getCitas}) (ListaCitas);
