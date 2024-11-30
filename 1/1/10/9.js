//Devuelve la suma de los números pares en un array.

let array = [1, 2, 3, 4, 5, 6, 7, 8];
let suma = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    suma += array[i];
  }
}

console.log(suma);
