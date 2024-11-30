// Crea un botón que cambie el texto de un párrafo al hacer click.

function cambiarTexto() {
    const parrafo = document.getElementById('parrafo');
    parrafo.textContent = 'Nuevo texto';
}

const boton = document.getElementById('boton');
boton.addEventListener('click', cambiarTexto);
