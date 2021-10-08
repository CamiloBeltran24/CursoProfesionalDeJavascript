console.log("Hello,typescript");

// function add(a: number, b: number) {
//   return a + b;
// }
// const son = add(2, 5);

// Boolean
//let muted = true;  // esto es suficiente para que typescript sepa que este tipo de datos es booleano

let muted: boolean = true;
muted = false;

// Numeros
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

//String
let nombre: string = "Prichard";
let saludo = `Hola, me llado ${nombre}`;

//Arreglos
let people: string[] = [];
people = ["Isabel", "Nicole", "Raul", "Prichard"];
// people.push(90) no es posible asignar un numero a un arreglo de strings

let peopleAndNumbers: Array<string | number> = []; //estipulados que sera un array capaz de recibir cadenas de texto y numeros.
peopleAndNumbers.push("Camilo", 24, "Ricardo", 100);

//Enum
/**
 * Enum asigna a cada uno de los elementos de un array una numero de acuerdo a su posicion dentro del
 * arreglo.
 */
enum Color {
  Rojo,
  Verde,
  Azul,
  Amarrillo,
}

let colorFavorito: Color = Color.Amarrillo; //indicamos a la variable de colorFavortico que sera de tipo Color y asinamos el valor Color.Amarillo
console.log(colorFavorito); // imprime "3" pues amarillo esta en la posicion 3 dentro del array

enum Mascota {
  Perro = "Perro",
  Gato = "Gato",
  Pez = "Pez",
}
let mascotaFavorita: Mascota = Mascota.Perro;
console.log(mascotaFavorita);

// Any
let comodin: any = "Joker";
comodin = { type: "Wildcard" };

//Object
let someObject: Object = { type: "Wildcard" };

// Funciones

function add(a: number, b: number): number {
  return a + b;
}

const sum = add(4, 6);

function createAdder(a: number): (number) => number {
  return function (b: number) {
    return b + a;
  };
}
const addFour = createAdder(4);
const fourPlus6 = addFour(6);

function fullName(firstName: String, lastName?: String): String {
  //el signo de interrogacion antes de : indica que ese valor puede ser undefined, es decir que puede no recibir ningun argumento.
  return `${firstName} ${lastName}`;
}

const richard = fullName("Richard");

function fullName2(firstName: String, lastName: String = "Smith"): String {
  //Tambien es posible definir el valor del argumento desde la declaracion de la funcion
  return `${firstName} ${lastName}`;
}
const camilo = fullName2("Camilo");
