const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const menuOverlay = document.getElementById('menu-overlay');

// Estado inicial del menú (cerrado)
let isMenuOpen = false;

menuButton.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen; // Alternar el estado

    if (isMenuOpen) {
        menu.classList.add('scale-y-100');
        menu.classList.remove('scale-y-0');
        menuOverlay.classList.add('active'); // Mostrar overlay
    } else {
        menu.classList.add('scale-y-0');
        menu.classList.remove('scale-y-100');
        menuOverlay.classList.remove('active'); // Ocultar overlay
    }
});

// Cerrar el menú al hacer clic en el overlay
menuOverlay.addEventListener('click', () => {
    isMenuOpen = false; // Asegurarse de cerrar el menú
    menu.classList.add('scale-y-0');
    menu.classList.remove('scale-y-100');
    menuOverlay.classList.remove('active'); // Ocultar overlay
});