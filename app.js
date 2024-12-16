// Menu hamburguesa
const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');

let isMenuOpen = false;

function toggleMenu() {
    isMenuOpen = !isMenuOpen;

    menuButton.classList.toggle('open', isMenuOpen); // Alternar clase 'open'
    menu.classList.toggle('scale-y-100', isMenuOpen);
    menu.classList.toggle('scale-y-0', !isMenuOpen);
}

menuButton.addEventListener('click', toggleMenu);

// Animacion texto home
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('main > .absolute > *');
    elements.forEach(el => el.classList.remove('opacity-0'));
});