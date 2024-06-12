 // Array con los ejercicios
 let ejercicios = [
    "Ejercicio 1",
    "Ejercicio 2",
    "Ejercicio 3",
    "Ejercicio 4",
    "Ejercicio 5",
    "Ejercicio 6",
    "Ejercicio 7",
    "Ejercicio 8",
    "Ejercicio 9",
    "Ejercicio 10",
    "Ejercicio 11",
    "Ejercicio 12",
    "Ejercicio 13",
    "Ejercicio 14",
    "Ejercicio 15",
    "Ejercicio 16",
    "Ejercicio 17",
    "Ejercicio 18",
    "Ejercicio 19",
    "Ejercicio 20",
    "Ejercicio 21",
    "Ejercicio 22",
    "Ejercicio 23",
    "Ejercicio 24"
  ];

  // Función para mostrar los siguientes 5 ejercicios
  function mostrarSiguientes() {
    let ejerciciosContainer = document.getElementById('ejerciciosContainer');
    let startIndex = ejerciciosContainer.children.length; // Índice de inicio para los nuevos ejercicios
    let endIndex = Math.min(startIndex + 5, ejercicios.length); // Índice de fin (máximo hasta ejercicios.length)
    
    // Añadir los nuevos ejercicios al contenedor
    let fila = document.createElement('div');
    fila.className = 'fila';
    for (let i = startIndex; i < endIndex; i++) {
      let ejercicioElement = document.createElement('div');
      ejercicioElement.className = 'ejercicio';
      ejercicioElement.textContent = ejercicios[i];
      fila.appendChild(ejercicioElement);
    }
    ejerciciosContainer.appendChild(fila);

    // Ocultar el botón si ya se han mostrado todos los ejercicios
    if (endIndex === ejercicios.length) {
      document.querySelector('button').style.display = 'none';
    }
  }

  // Mostrar los primeros 5 ejercicios al cargar la página
  mostrarSiguientes();