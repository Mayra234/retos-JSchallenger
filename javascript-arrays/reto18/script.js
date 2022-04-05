// Escribe una función que tome dos números (mínimo y máximo) como argumentos
// Devuelve una matriz de números en el rango min a max

function returnRangeMinToMax(min, max) {
  let array = [];
  for (let i = min; i <= max; i++) {
    array.push(i);
  }
  return array;
}
console.log(returnRangeMinToMax(2, 10));
