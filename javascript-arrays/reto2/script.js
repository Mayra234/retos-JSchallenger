// Escribir una función que tome una matriz (a) como argumento
// Elimina los primeros 3 elementos de 'a'
// Devuelve el resultado

function deleteFirstThreeElements(a) {
  return a.slice(3);
}
console.log(deleteFirstThreeElements([1, 2, 3, 4]));
