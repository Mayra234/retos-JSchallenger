// Escribir una función que tome un número como argumento
// Si el número es par, devuelve verdadero
// De lo contrario, devuelve falso

function validationNumber(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(validationNumber(-111));
