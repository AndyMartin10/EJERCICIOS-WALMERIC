// Escribe una función que recibe un array de números enteros como
// parámetro y devuelve todos los múltiplos de 7.

const numbers = [1, 8, 7, 49, 23, 21, 12, 19, 5, 73, 63, 9, 14];

function multiplo(valor, multiple)
  {
    resto = valor % multiple;
    if(resto == 0)
      return true;
    else
      return false;
  }

let multiples_7 = [];

for(let i=1;i<=73;i++)
        {
            if(multiplo(i,7))
                multiples_7.push(i);
        }
        console.log("Los multiplos de 7 son: ",multiples_7);
