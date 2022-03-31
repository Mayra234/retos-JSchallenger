// Escribe una función que tome dos cadenas (a y b) como argumentos
// Devuelve el numero de veces que a ocurre en b

function numberOfTimes(a, b) {
  return b.split('').filter((text) => text.match(new RegExp(a))).length;
}
console.log(
  numberOfTimes(
    'h',
    'how many times does the character occur in this sentence?'
  )
);
