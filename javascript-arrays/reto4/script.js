// Escribir una función que tome una matriz (a) como argumento
// Extrae los primeros 3 elementos de a
// Devuelve la matriz resultante

function extractFirstThreeElements(a) {
  return a.slice(0, 3);
}
console.log(extractFirstThreeElements([5, 4, 3, 2, 1, 0]));
