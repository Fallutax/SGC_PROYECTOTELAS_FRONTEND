// Agregar interactividad: cambiar clase 'active' al hacer clic
const buttons = document.querySelectorAll('.menu-btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remover 'active' de todos los botones
        buttons.forEach(btn => btn.classList.remove('active'));
        // Agregar 'active' al botón clicado
        button.classList.add('active');
        // Aquí podrías agregar lógica adicional, como navegar a secciones
        console.log(`Botón ${button.id} seleccionado`);
    });
});