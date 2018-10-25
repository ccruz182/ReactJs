import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Aplicacion from './componentes/Aplicacion';

/*
// React sin JSX
const titulo = React.createElement(
  'h1', {id: 'titulo', className: 'encabezado'},
  'Hola Mundo'
);
*/
ReactDOM.render(<Aplicacion />, document.getElementById('root'));
serviceWorker.unregister();
