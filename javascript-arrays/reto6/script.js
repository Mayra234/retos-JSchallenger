// Escribir una función que tome una matriz (a) y un valor (b) como argumento
// La función debe limpiar a de todas las apariciones de b
// Devuelve la matriz filtrada

function cleanAllOccurrences(a, b) {
  return a.filter((num) => num !== b);
}
console.log(cleanAllOccurrences([false, '2', 1], false));
