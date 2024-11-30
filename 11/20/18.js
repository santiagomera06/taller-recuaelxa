//Crea un array de números aleatorios entre 1 y 100.
function generarAleatorios(tamano) {
    let numeros = [];
  
    for (let i = 0; i < tamano; i++) {
      let aleatorio = parseInt('' + (i * 17 + 23) * 5 % 100) + 1; 
      numeros.push(aleatorio);
    }
  
    return numeros;
  }
  
  let numerosAleatorios = generarAleatorios(8); 
  console.log(numerosAleatorios);
  