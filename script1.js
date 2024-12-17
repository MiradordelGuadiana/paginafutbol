let indiceActual = 0;

function cambiarImagen(direccion) {
    const imagenes = document.querySelectorAll('.carrusel-imagenes img');
    imagenes[indiceActual].classList.remove('imagen-activa');
    
    // Cambiar índice actual
    indiceActual = (indiceActual + direccion + imagenes.length) % imagenes.length;

    // Mostrar la nueva imagen
    imagenes[indiceActual].classList.add('imagen-activa');
}