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
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  get getNombre() {
    return this.nombre;
  }

  set setNombre(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    return `${this.nombre} dice hola`;
  }

  //static no instancia lo hace directamente desde class
  static probarSaludo(nombre) {
    return `${nombre} probando saludo`;
  }
}

//extends añade propiedades a la primera clase
// podemos sobreescribir a la class madre, tanto propiedades como métodos. "Polimorfismo"
class Estudiante extends Persona {
  //# para que no choque el código. No es seguro salvo en el back-end
  #notas = [];

  // constructor(nombre, edad, notas = []) {
  //   super(nombre, edad);
  //   this.notas = notas;

  set setNotas(nota) {
    this.#notas.push(nota);
  }

  get getNotas() {
    return this.#notas;
  }

  saludar() {
    return `${this.nombre} desde estudiante`;
  }
}

const juanito = new Estudiante("juanito", 25);

//Los getter y los setter van sin paréntesis
juanito.setNotas = 7;
juanito.setNotas = 6;
juanito.setNotas = 1;

console.log(juanito.getNotas);

// console.log(Persona.probarSaludo("Nacho"));

// const juanito = new Persona("juanito");
// // juanito.nombre = "pedrito";
// juanito.setNombre = "Pedrito";
// console.log(juanito.getNombre);
// console.log(juanito.saludar());
