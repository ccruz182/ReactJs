// Function declaration
function saludar() {
  console.log('Bienvenido');
}

saludar(); // No importa donde se declare las funciones.
// Primero se lee todo el documento y se ve cuántas funciones hay.

// Function expression
const cliente = function (nombreCliente = 'Alguien') {
  console.log(`Mostrando datos del cliente ${nombreCliente}`);
}

cliente();

/* Arrow functions */
const viajar = (destino) => {
	return `Viajando a ${destino}`;
}

let viaje = viajar('San Diego');
console.log(viaje);