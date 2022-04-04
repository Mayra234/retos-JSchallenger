// Escribir una función que tome un número (a) como argumento
// Si a es un número entero (no tiene lugar decimal), devuelve verdadero
// De lo contrario, devuelve falso
function isInteger(a) {
  return Number.isInteger(a) ? true : false;
}
console.log(isInteger(8));
