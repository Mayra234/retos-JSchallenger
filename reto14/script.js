// Escribir una función que tome un número (a) como argumento
// Si a es un número entero (no tiene lugar decimal), devuelve verdadero
// De lo contrario, devuelve falso
function wholeNumber(a) {
  if (Number.isInteger(a)) {
    return true;
  } else {
    return false;
  }
}
console.log(wholeNumber(8));
