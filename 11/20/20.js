//Crea un objeto a partir de dos arrays: uno de claves y otro de valores.

function crearObjeto(claves, valores) {
    let objeto = {};
  
    for (let i = 0; i < claves.length; i++) {
      objeto[claves[i]] = valores[i];
    }
  
    return objeto;
  }
  
  let claves = ['nombre', 'edad', 'ciudad'];
  let valores = ['santiago', 18, 'Popayan'];
  console.log(crearObjeto(claves, valores));
  