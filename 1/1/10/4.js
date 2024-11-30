function invertir(palabra) {
    let resultado = '';
    for (let i = palabra.length - 1; i >= 0; i--) {
      resultado += palabra[i];
    }
    return resultado;
  }
  
  const cadena = "hola";
  const Invertida = invertir(cadena);
  console.log(Invertida); 