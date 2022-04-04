// Escribir una función que tome una cadena (a) como argumento
// Eliminar los últimos 3 caracteres de a
// Devuelve el resultado

function deleteLastThreeStringCharacters(a) {
  return String(a).slice(0, a.length - 3);
}
console.log(deleteLastThreeStringCharacters('1234'));
