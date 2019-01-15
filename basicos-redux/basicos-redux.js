const redux = require('redux');

const createStore = redux.createStore;

/* State inicial */
const stateInicial = {
  usuarios: []
};

/* Reducer */
const reducerPrincipal = (state, action) => {
  if (action.type === "AGREGAR_USUARIO") {
    return {
      ...state, 
      usuarios: action.nombre
    }
  }
  return state;
}

/* Create store y store
  Parametros: reducer [como cambia el state], state-inicial, applyMiddleWare
*/
const store = createStore(reducerPrincipal); // Almacena el state

/* Suscribe
    Se ejecuta cada vez que existe un dispatch    
*/
store.subscribe(() => {
  console.log('Algo cambio...', store.getState());
});

/* Dispatch: forma de cambiar el state */
store.dispatch({type: "AGREGAR_USUARIO", nombre: "Cesar"});


// console.log("->", store.getState());
