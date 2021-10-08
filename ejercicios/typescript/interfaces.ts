//Interfaces
/*
 *Nos permiten declarar la forma exacta de un objeto
 *definiendo los tipos de sus propiedades y si son opcionales o no.
 */
enum Color {
  Rojo = "Rojo",
  Azul = "Azul",
  Verde = "Verde",
}
interface Rectangulo {
  ancho: number;
  alto: number;
  color: Color;
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  color: Color.Azul,
};

function area(r: Rectangulo): number {
  return r.alto * r.ancho;
}

const areaRectangulo = area(rect);
console.log(areaRectangulo);

console.log(rect.toString());

/*
No podemos acceder a propiedades que no se hallan definido dentro de la 
interface el atributo Color
*/
rect.toString = function () {
  return this.color ? `un rectangulo de color ${this.color}` : `Un rectangulo`;
};
console.log(rect.toString());

console.log("Final de la Clase");
