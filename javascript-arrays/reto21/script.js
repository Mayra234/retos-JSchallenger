// Escribir una función que tome una matriz (a) y un valor (n) como argumentos
// Guardar cada n-ésimo elemento en una nueva matriz
// Devuelve la nueva matriz

function saveEveryNthElementInNewArray(a, n) {
  let array = [];
  let count = 0;
  for (let i = 0; i <= a.length; i++) {
    if (count === n) {
      array.push(a[i - 1]);
      count = 1;
    } else {
      count++;
    }
  }
  return array;
}
console.log(saveEveryNthElementInNewArray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5));

//Respuesta pagina js
/*function myFunction(a, n) {
  let rest = [...a];
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (rest.length < n) break;
    result.push(rest[n - 1]);
    rest = rest.slice(n);
  }
  return result;
}*/
