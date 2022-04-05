// Escribir una función que tome una matriz de cadenas como argumento
// Agrupa esas cadenas por su primera letra
// Devuelve un objeto que contiene propiedades con claves que representan las primeras letras
// Los valores deben ser matrices de cadenas que contengan solo las cadenas correspondientes
// Por ejemplo, la matriz ['Alf', 'Alice', 'Ben'] debe transformarse en
// { a: ['Alfa', 'Alicia'], b: ['Ben']}
function groupArrayOfString(array) {
  let setA = { a: [], b: '' };
  let setB = { b: '', a: '' };
  for (let value of array) {
    if (value.toLowerCase().charAt(0) === 'a') {
      setA.a += value;
    } else if (value.toLowerCase().charAt(0) === 'b') {
      setB += value;
    }
  }
  return setA;
}
console.log(groupArrayOfString(['Alf', 'Alice', 'Ben']));
//no entendi
