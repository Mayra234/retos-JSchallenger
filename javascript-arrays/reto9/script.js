// Escribir una función que tome una matriz de números como argumento
// Debería devolver una matriz con los números ordenados en orden descendente

function sortedInDescending(array) {
  return array.sort((a, b) => b - a);
}
console.log(sortedInDescending([1, 3, 2]));
