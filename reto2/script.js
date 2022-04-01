// Escribe una función que tome dos valores, digamos a y b, como argumentos
// Devuelve verdadero si los dos valores son iguales y del mismo tipo

function isBoolean(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

console.log(isBoolean(7, '7'));
