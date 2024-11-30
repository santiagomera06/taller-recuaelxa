//mbia el color de fondo de la página con un select que tenga diferentes opciones de colores. 
const colorSelector = document.getElementById('colorSelector');

colorSelector.addEventListener('change', () => {
  const selectedColor = colorSelector.value;
  document.body.style.backgroundColor = selectedColor;
});