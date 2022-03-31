// Escribir una función que tome una cadena (a) y un número (n) como argumento
// Devuelve el carácter enésimo de 'a'

function nthCharacter(a, n) {
  a.split('');
  return a[n - 1];
}
console.log(nthCharacter('zyxbwpl', 5));
