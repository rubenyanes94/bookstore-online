const btnVerMas = document.querySelector('.btn-ver');
const libros = document.querySelectorAll('.book-item');
const librosPorPagina = 3; 


for (let i = librosPorPagina; i < libros.length; i++) {
    libros[i].classList.add('oculto');
}


btnVerMas.addEventListener('click', () => {
    const librosOcultos = document.querySelectorAll('.book-item.oculto');
    if (librosOcultos.length > 0) {
        librosOcultos[3].classList.remove('oculto');
    } else {
        btnVerMas.style.display = 'none';
    }
});
