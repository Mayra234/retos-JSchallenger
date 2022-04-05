// Escribir una función que tome una matriz de objetos como argumento
// Ordenar la matriz por propiedad b en orden ascendente
// Devuelve la matriz ordenada

function sortArrayPropertyAscending(array) {
  return array.sort((obj1, obj2) => obj1.b - obj2.b);
}
console.log(
  sortArrayPropertyAscending([
    { a: 2, b: 10 },
    { a: 5, b: 4 },
  ])
);
