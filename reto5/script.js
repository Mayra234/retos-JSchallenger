// Escribir una función que tome una cadena (a) como argumento
// Eliminar los primeros 3 caracteres de a
// Devuelve el resultado

function string(a) {
  const array = a.split('');

  for (let i = 0; i < 3; i++) {
    array.shift();
  }
  return array.join('');
}

console.log(string('abcdefg'));
