//Crea un formulario que valide un email y muestre un mensaje de error si es inválido.

function validarEmail() {
    let email = document.getElementById("email").value;
    let mensajeError = document.getElementById("mensajeError");

    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
      mensajeError.style.display = "inline";  
      return false;  
    } else {
      
      return true; 
    }
  }