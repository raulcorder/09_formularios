// // Función constructora = plantilla = Class
// function Persona(nombre) {
//   this.nombre = nombre;
//   this.saludar = function () {
//     return `${this.nombre} dice hola`; // revisar interpolación
//   };
//   // this.saludarIngles = function () {
//   //   return `${this.nombre} says hi!`;
//   // };
// }

// Persona.prototype.saludarIngles = function () {
//   return `${this.nombre} says hi!`;
// };

// const juanito = new Persona("juanito");
// const pedrito = new Persona("pedrito");

// console.log(juanito);
// // console.log(juanito.saludar());
// // console.log(pedrito.saludar());
// console.log(pedrito.saludarIngles());
// console.log(pedrito);

//mayuscula para funcion constructora
class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }
  saludar() {
    return `${this.nombre} dice hola`;
  }
}

const juanito = new Persona("juanito");
const pedrito = new Persona("pedrito");

console.log(juanito);
console.log(juanito.saludar());
