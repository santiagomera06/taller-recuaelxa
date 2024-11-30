//Crea un sistema de tareas pendientes: permite agregar, eliminar y marcar tareas como completadas.

const tareas = [];

function agregarTarea() {
  const tarea = document.getElementById('tarea');
  const nuevaTarea = tarea.value;

  if (nuevaTarea !== '') {
    tareas.push({
      texto: nuevaTarea,
      completada: false
    });
    renderizarTareas();
    tarea.value = '';
  } else {
    alert('Por favor, ingresa una tarea.');
  }
}

function marcarCompletada(index) {
  tareas[index].completada = !tareas[index].completada;
  renderizarTareas();
}

function eliminarTarea(index) {
  tareas.splice(index, 1);
  renderizarTareas();
}

function renderizarTareas() {
  const ListadeTareas = document.getElementById('ListadeTareas');
  ListadeTareas.innerHTML = '';

  tareas.forEach((tarea, index) => {
    const li = document.createElement('li');
    li.textContent = tarea.texto;
    if (tarea.completada) {
      li.classList.add('completada');
    }
    const eliminarBtn = document.createElement('button');
    eliminarBtn.textContent = 'Eliminar';
    eliminarBtn.addEventListener('click', () => eliminarTarea(index));
    li.appendChild(eliminarBtn);
    ListadeTareas.appendChild(li);
  });
}

const agregarBtn = document.getElementById('agregarBtn');
agregarBtn.addEventListener('click', agregarTarea);