/* Objetos */

// Object literal
const persona = {
	nombre: 'Juan',
	profesion: 'Desarrollador Web'
};

console.log('Persona', persona);

/* Object Constructor */
function Tarea (nombre, urgencia) {
	this.nombre = nombre;
	this.urgencia = urgencia;
}

// Creación de objeto
const tarea1 = new Tarea('Aprender Js', 'Urgente');
console.log('Tarea1: ', tarea1);