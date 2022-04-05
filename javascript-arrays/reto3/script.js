// Escribir una función que tome una matriz (a) como argumento
// Extraer los últimos 3 elementos de a
// Devuelve la matriz resultante

function extractLastThreeElements(a) {
  return a.slice(-3);
}
console.log(extractLastThreeElements([5, 4, 3, 2, 1, 0]));
