// Este desafío es un poco más complejo
// Escribir una función que tome un número (a) como argumento
// Si a es primo, devuelve a
// Si no, devuelve el siguiente número primo más alto

function isPrime(a) {
  let arrayPrimes = [];
  if (a === 0 || a === 1 || a === 4) {
    return false;
  }
  for (let i = 2; i < 300 / 2; i++) {
    if (a % i === 0) {
      return false;
    }
  }
  arrayPrimes.push(a);
  return a;
}

console.log(isPrime(7));
