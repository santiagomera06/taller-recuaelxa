// Crea una función que reciba dos arrays y devuelva los elementos comunes.
function Comunes(N1, N2) {
    let comunes = [];
  
    for (let i = 0; i < N1.length; i++) {
      for (let j = 0; j < N2.length; j++) {
        if (N1[i] === N2[j]) {
          comunes.push(N1[i]);
        }
      }
    }
  
    return comunes;
  }
  
  let N1 = [1, 2, 3, 4, 5];
  let N2 = [3, 4, 5, 6, 7];
  console.log(Comunes(N1, N2));
  