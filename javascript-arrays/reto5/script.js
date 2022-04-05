// Escribe una función que tome una matriz (a) y un número (n) como argumentos
// Debería devolver los últimos n elementos de a

function returnLastElements(a, n) {
  return a.slice(-n);
}
console.log(returnLastElements([1, 2, 3, 4, 5], 2));
