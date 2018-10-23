/* Variables 'tradicionales' Javascript */
var mi_variable = 'Hola';

/* Variables const */
const variable2 = 'algo'; // Nunca cambia

/* Variables con let */
let variable3 = 'ok';
variable3 = 20;

/* Template string */
const nombre = 'Cesar';
const trabajo = 'Desarrollador';

console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

const contenedorApp = document.querySelector('#app');
let html = `<ul>
    <li>Nombre: ${nombre}</li>
    <li>Trabajo: ${trabajo} </li>
    `;
contenedorApp.innerHTML = html;