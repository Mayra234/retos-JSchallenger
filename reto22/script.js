// Escribe una función que tome dos cadenas (a y b) como argumentos
// Comenzando al final de 'a', inserte 'b' después de cada tercer carácter de 'a'
// Devuelve la cadena resultante

function myFunction(a, b) {
  let text = '';
  let counter = 1;

  for (let i = a.length - 1; i >= 0; i--) {
    //4     o
    //1
    //     text --> o

    //3    r
    //2
    //     text --> or

    //2     d
    //3     X    --> ordx

    //1     e
    //1         ---> ordxe

    //0     p
    //2         ---> ordxep
    if (counter === 3) {
      text += `${a[i]}${b}`;
      counter = 0;
    } else {
      text += `${a[i]}`;
    }
    counter++;
  }

  return text.split('').reverse().join('');
}

console.log(myFunction('pedro', 'x')); // pexdro
console.log(myFunction('julianita', 'x')); // xjulxianxita
console.log(myFunction('Mayra', 'x')); // Maxyra
console.log(myFunction('Angélica', 'x')); // Anxgélxica
