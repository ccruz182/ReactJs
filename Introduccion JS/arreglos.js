/* Spread Operator */
const lenguajes = ['JavaScript', 'PHP', 'Python'];
const frameworks = ['ReactJS', 'Laravel', 'DJango'];

const combinacion = [...lenguajes, ...frameworks];
console.log('Combinacion: ', combinacion);

/* Métodos para arreglos */
const personas = [
  {nombre: 'Juan', edad: 23, aprendiendo: 'JavaScript'},
  {nombre: 'Pablo', edad: 18, aprendiendo: 'PHP'},
  {nombre: 'Alejandra', edad: 21, aprendiendo: 'Adobe'},
  {nombre: 'Karen', edad: 30, aprendiendo: 'Python'},  
];

/* Filtros */
const mayores = personas.filter(persona => {
  return persona.edad > 28;
});
console.log('Mayores: ', mayores);

const alejandra = personas.find(persona => {
  return persona.nombre == 'Alejandra';
});
console.log('Alejandra', alejandra);