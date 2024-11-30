//Crea una galería de imágenes que cambie al hacer clic en "Siguiente" o "Anterior".
 

 let imagenes = [
    "https://png.pngtree.com/thumb_back/fh260/background/20230521/pngtree-wallpaper-of-beach-in-the-tropics-wallpapers-220px-image_2695866.jpg",
    
    "http://www.irational.org/APD/cyber/600x300.gif"
  ];
  let indice = 0;

  function cambiarImagen(direccion) {
    if (direccion === 'siguiente') {
    
      indice = (indice + 1) % imagenes.length;
    } else if (direccion === 'anterior') {

      indice = (indice - 1 + imagenes.length) % imagenes.length;
    }
    document.getElementById("imagen").src = imagenes[indice];
  }