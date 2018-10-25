import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const nombre = 'Cesar';
    return (
      <div>
        <h1>Aprendiendo ReactJs</h1>
        <p>Hola {nombre}</p>
      </div>
      
    );
  }
}

export default App;
