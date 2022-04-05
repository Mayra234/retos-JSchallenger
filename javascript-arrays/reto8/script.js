// Escribir una función que tome una matriz de números como argumento
// Devuelve el número de valores negativos en la matriz

function returnNumberNegativeInArray(a) {
  let count = 0;
  a.forEach((num) => {
    if (num < 0) {
      count += 1;
    }
  });
  return count;
}
console.log(returnNumberNegativeInArray([0, 9, 1]));
