//Ordena un array de números de menor a mayor sin usar métodos como sort().
function ordeN(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;

    
  }
  const numeros = [7, 3, 8, 1, 5];
  console.log(ordeN(numeros));