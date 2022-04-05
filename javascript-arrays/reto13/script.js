// Escribir una función que tome una matriz como argumento
// Debería devolver verdadero si todos los elementos de la matriz son iguales
// Debería devolver falso de lo contrario

function getElementsEqualArray(array) {
  return array.forEach((x) => (x === x.length - 1 ? true : false));
}
console.log(getElementsEqualArray([1, 1, 1, 2]));
//no entendi
