// Escribe una función que recibe una string como parámetro y
// devuelve true si es un palíndromo o false en caso contrario.

function palindromo(texto){
  return texto.split('').reverse().join('') == texto;
}

console.log(palindromo('lateleletal'));
console.log(palindromo('revolver'));
console.log(palindromo('amadaladama'));
