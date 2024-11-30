let array = [7, 12, 8, 22, 8, 33];
let resultado = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] > 10) {
    resultado.push(array[i]);
  }
}

console.log(resultado);
