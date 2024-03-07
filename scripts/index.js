function agregarActividad() {
    // Obtener los valores de los input
    const actividad1 = document.getElementById('actividad1').value;
    const actividad2 = document.getElementById('actividad2').value;
    const actividad3 = document.getElementById('actividad3').value;

    // Crear un nuevo contenedor de actividad
    const nuevoContenedor = document.createElement('div');
    nuevoContenedor.classList.add('actividad-contenedor');

    // Agregar el fondo con la URL de la imagen
    nuevoContenedor.style.backgroundImage = `url(${actividad3})`;

    // Agregar contenido al nuevo contenedor
    nuevoContenedor.innerHTML = `
        <p>${actividad1}</p>
        <p>${actividad2}</p>
    `;

    // Agregar el nuevo contenedor a la sección de contenedores de actividades
    document.getElementById('contenedoresActividades').appendChild(nuevoContenedor);

    // Limpiar los campos de input y textarea
    document.getElementById('actividad1').value = '';
    document.getElementById('actividad2').value = '';
    document.getElementById('actividad3').value = '';
}