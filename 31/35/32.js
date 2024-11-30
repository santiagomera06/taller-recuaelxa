//Imita el comportamiento de map(). Escribe una función que recorra un array y aplique otra función a cada elemento.
function Nmap(array, funcion) {
    const Numero = [];
  
    for (let i = 0; i < array.length; i++) {
      const resultado = funcion(array[i], i, array);
      Numero.push(resultado);
    }
      return Numero;
  }
  

const numeros = [1, 2, 3, 4, 5];
const resultado = Nmap(numeros, (numero) => numero * 2);
console.log(resultado); 