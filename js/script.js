// El código JavaScript para futuras funcionalidades se añadirá aquí.

document.addEventListener('DOMContentLoaded', function() {
    console.log('El sitio web de Enfoque 360° se ha cargado correctamente.');
    // Ejemplo: Animación suave al hacer clic en los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});