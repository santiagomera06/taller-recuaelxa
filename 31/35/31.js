//Crea una función que reciba un string y devuelva un objeto con la frecuencia de cada letra.
function contarLetras(cadena) {
  const frecuencias = {};


  for (let i = 0; i < cadena.length; i++) {
    const letra = cadena[i];
    if (frecuencias[letra]) {
      frecuencias[letra]++;
    } else {
      frecuencias[letra] = 1;
    }
  }
  return frecuencias;
}
const texto = "Hola mundo";
const resultado = contarLetras(texto);
console.log(resultado);