// Este desafío es un poco más complejo
// Escribir una función que tome un número (a) como argumento
// Si a es primo, devuelve a
// Si no, devuelve el siguiente número primo más alto

function isPrime(a) {
  let sqrt = Math.floor(Math.sqrt(a)) + 1;
  for (let i = 2; i < sqrt; i++) {
    if (a % i == 0) {
      return false;
    }
  }
  return a;
}

console.log(isPrime(2));
