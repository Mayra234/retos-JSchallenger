// Escribir una función que tome una matriz de números como argumento
// Debería devolver el promedio de los números

function returnAverageNumbers(array) {
  let sum = 0;
  array.forEach((num) => {
    sum += num;
  });
  return sum / array.length;
}
console.log(returnAverageNumbers([10, 100, 40]));
