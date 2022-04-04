// Escribe una función que tome 6 valores (a,b,c,d,e,f) como argumentos
// Suma a y b
// Luego restamos por c
// Luego multiplica por d y divide por e
// Finalmente elevamos a la potencia de f y devolvemos el resultado
// Consejo: cuidado con el orden

function operationMath(a, b, c, d, e, f) {
  let result = a + b;
  result = result - c;
  result = (result * d) / e;
  return Math.pow(result, f);
}
console.log(operationMath(6, 5, 4, 3, 2, 1));
