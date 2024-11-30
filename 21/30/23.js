// Añade elementos a una lista (ul) usando JavaScript.
function añadirElemento() {
    const lista = document.getElementById('Lista');
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = 'Nuevo Elemento';
    lista.appendChild(nuevoElemento);
}
