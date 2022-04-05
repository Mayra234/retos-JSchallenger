// Escribir una función que tome una matriz de cadenas como argumento
// Devuelve la cadena más larga

function returnLongestString(array) {
  let woldLongest = '';
  for (wold of array) {
    if (wold.length > woldLongest.length) {
      woldLongest = wold;
    }
  }
  return woldLongest;
}
console.log(returnLongestString(['help', 'me']));
