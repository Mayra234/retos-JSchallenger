// Escribe una función que tome dos arreglos como argumentos
// Combinar ambas matrices y eliminar valores duplicados
// Ordenar el resultado de la fusión en orden ascendente
// Devuelve la matriz resultante
function mergeArraysAndDeleteDuplicate(arr1, arr2) {
  let array = arr1.concat(arr2);
  let unique = [];
  for (let i = 0; i < array.length; i++) {
    if (!unique.includes(array[i])) {
      unique.push(array[i]);
    }
  }
  return unique.sort((a, b) => a - b);
}
console.log(
  mergeArraysAndDeleteDuplicate([-10, 22, 333, 42], [-11, 5, 22, 41, 42])
);
