// Escribe una función que tome una matriz con elementos arbitrarios y un número como argumentos
// Devuelve una nueva matriz, el primer elemento debe ser el mismo número dado
// o cero si el número es menor que 6
// Los otros elementos deben ser los elementos de la matriz original
// Intenta no mutar la matriz original

function returnNewArray(array, number) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(array[i]);
  }
  if (number < 6) {
    arr.unshift(0);
  } else {
    arr.unshift(number);
  }
  return arr;
}
console.log(returnNewArray(['a', 'b'], 2));

//respuesta pagina
/**function myFunction(arr, num) {
 return [...(num > 5 ? [num] : [0]), ...arr];
} */
