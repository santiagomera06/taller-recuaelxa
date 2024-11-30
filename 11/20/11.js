// Escribe una función que reciba un array y un número y devuelva los números mayores que el número dado.

function mayoresQue(array, numero) {
    let resultado = [];
    
    for (let i = 0; i < array.length; i++) {
      if (array[i] > numero) {
        resultado.push(array[i]);
      }
    }
  
    return resultado;
  }
  
  let array = [5, 12, 8, 20, 3, 15];
  let numero = 10;
  console.log(mayoresQue(array, numero));
  