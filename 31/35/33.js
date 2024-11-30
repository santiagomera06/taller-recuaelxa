//Crea un juego simple de adivinar un número entre 1 y 100.

let numeroAdivinar = Math.random() * 100 + 1; 
let intentos = 7;

function adivinaNumero() {
    const input = document.getElementById("numero");
    const resultado = document.getElementById("resultado");
    const Intentos = document.getElementById("intentos");
    const NumeroI = parseInt(input.value);

    
    if (isNaN(NumeroI) || NumeroI < 1 || NumeroI > 100) {
        resultado.textContent = "Por favor, ingresa un número válido entre 1 y 100.";
        return;
    }

    if (NumeroI === numeroAdivinar) {
        resultado.textContent = "¡Felicidades! Has adivinado el número.";
        Intentos.textContent = "";
       
        return;
    } else if (NumeroI < numeroAdivinar) {
        resultado.textContent = "El número a adivinar es mayor.";
    } else {
        resultado.textContent = "El número a adivinar es menor.";
    }

    intentos--;
    Intentos.textContent = `Te quedan ${intentos} intentos.`;

    if (intentos === 0) {
        resultado.textContent = `¡Se acabaron los intentos! El número era: ${numeroAdivinar}.`;
         
    }

    input.value = ''; 
}   