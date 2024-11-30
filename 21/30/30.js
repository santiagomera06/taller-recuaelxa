// Haz que un elemento siga el cursor al moverse por la página.

let seguimiento = document.getElementById("seguir");

document.addEventListener("mousemove", function(evento) {
  seguimiento.style.left = (evento.pageX - 15) + "px"; 
  seguimiento.style.top = (evento.pageY - 15) + "px";
});