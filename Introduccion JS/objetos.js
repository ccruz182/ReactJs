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

Tarea.prototype.mostrarInformacion = function() {
	return `La tarea ${this.nombre} tiene la prioridad ${this.urgencia}`;
	// body...
};

// Creación de objeto
const tarea1 = new Tarea('Aprender Js', 'Urgente');
console.log('Tarea1: ', tarea1.mostrarInformacion());


/* Destructuring */
const aprendiendoJS = {
	version: {
		nueva: 'ES6',
		anterior: 'ES5'
	},
	frameworks: ['React', 'VueJs', 'AngularJs']
};

let {version} = aprendiendoJS;
console.log('Versiones: ', version);
let {nueva} = aprendiendoJS.version;
console.log('Versión nueva: ', nueva);

/* Literal Enhacement */
const banda = 'blink-182';
const genero = 'Pop-Rock';
const canciones = ['The Rock Show', 'After Midnight', 'First Date'];

const blink = {banda, genero, canciones};
console.log('blink -> ', blink);

/* Funciones en objetos */
const person = {
	name: 'Cesar',
	age: 21,
	sayHello () {
		console.log('Hello!');
	}
};

person.sayHello();

