//Elimina elementos duplicados de un array.

function eliminarDuplicados(array) {
    let resultado = [];
  
    for (let i = 0; i < array.length; i++) {
      let duplicado = false;
      
      for (let j = 0; j < resultado.length; j++) {
        if (array[i] === resultado[j]) {
          duplicado = true;
          break;
        }
      }
  
      if (!duplicado) {
        resultado.push(array[i]);
      }
    }
  
    return resultado;
  }
  
  let array = [1, 2, 2, 3, 4, 4, 5];
  console.log(eliminarDuplicados(array));
  