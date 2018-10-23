// Function declaration
function saludar() {
  console.log('Bienvenido');
}

saludar(); // No importa donde se declare las funciones.
// Primero se lee todo el documento y se ve cuántas funciones hay.

// Function expression
const cliente = function (nombreCliente) {
  console.log('Mostrando datos del cliente');
}

cliente();