//Crea un contador que aumente al hacer clic en un botón.

const boton = document.getElementById('boton');
let contador = 0;

boton.addEventListener('click', function() {
    contador++;
    boton.textContent = 'Contador: ' + contador;
});