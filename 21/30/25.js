//Oculta y muestra un elemento al hacer clic en un botón.

const miElemento = document.getElementById('miElemento');

function toggleVisibility() {
    if (miElemento.style.display === 'none') {
        miElemento.style.display = 'block';
    } else {
        miElemento.style.display = 'none';
    }
}