const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');

// Estado inicial del menú (cerrado)
let isMenuOpen = false;

menuButton.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen; // Alternar el estado

    if (isMenuOpen) {
        menu.classList.add('scale-y-100');
        menu.classList.remove('scale-y-0');
    } else {
        menu.classList.add('scale-y-0');
        menu.classList.remove('scale-y-100');
    }
});