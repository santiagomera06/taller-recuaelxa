//Crea un temporizador de cuenta regresiva que muestre los segundos restantes.

const temporizador = document.getElementById('temporizador');
let segundos = 10;
let segundo = setInterval;
segundo(() => {
    segundos--;
    temporizador.textContent = segundos;
}, 1000);

