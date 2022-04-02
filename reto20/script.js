// Este desafío es un poco más complejo
// Escribir una función que tome un número (a) como argumento
// Si a es primo, devuelve a
// Si no, devuelve el siguiente número primo más alto

function isPrime(a) {
  for (let i = 2; i < a - 1; i++) {
    if (a % i === 0) {
      a++;
      i = 2;
    }
  }

  return a;
}

console.log(isPrime(182));
