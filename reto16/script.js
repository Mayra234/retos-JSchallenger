// Escribe una función que tome dos cadenas (a y b) como argumentos
// Si a contiene b, agrega b al principio de a
// Si no, añádelo al final
// Devuelve la concatenación

function containsString(a, b) {
  return a.includes(b) ? b + a : a + b;
}
console.log(containsString('lips', 's'));
