//Crea un input que muestre en tiempo real lo que el usuario escribe.// Selecciona el input y el párrafo
const inputTexto = document.getElementById('inputTexto');
const textoMostrado = document.getElementById('textoMostrado');

inputTexto.addEventListener('input', function() {
    textoMostrado.textContent = inputTexto.value;
});
