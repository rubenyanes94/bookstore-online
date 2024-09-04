const btnVerMas = document.querySelector('.btn-ver');
const libros = document.querySelectorAll('.book-item');
const librosPorPagina = 3; 

//Catalogo
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

//Menu 
const navLinks = document.querySelectorAll('nav a[href^="#"]');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); 

    const targetId = link.getAttribute('href').substring(1);

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`El elemento con ID "${targetId}" no existe.`);
    }
  });
});
