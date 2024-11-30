//Crea una tabla HTML dinámicamente a partir de un array de objetos (con propiedades como nombre, edad, etc.).
const personas = [
    { nombre: 'santiago', edad: 18, ciudad: 'Popayan' },
    { nombre: 'mario', edad: 25, ciudad: 'bogota' },
    { nombre: 'arias', edad: 35, ciudad: 'cali' }
  ];
  
  function crearTabla(datos) {
    const tabla = document.createElement('table');
    const th = document.createElement('th');
    tabla.appendChild(th);
  
    const encabezado = document.createElement('tr');
    for (const propiedad in datos[0]) {
      const th = document.createElement('th');
      th.textContent = propiedad;
      encabezado.appendChild(th);
    }
    th.appendChild(encabezado);
  
    datos.forEach(persona => {
      const fila = document.createElement('tr');
      for (const propiedad in persona) {
        const celda = document.createElement('td');
        celda.textContent = persona[propiedad];
        fila.appendChild(celda);
      }
      th.appendChild(fila);
    });
  
    document.getElementById('Tabla').appendChild(tabla);
  }

  crearTabla(personas);