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

// Animacion main home
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('main *');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('opacity-100');
            el.classList.remove('opacity-0');
        }, index * 200); // Incrementa el retraso en 200ms por cada elemento
    });
});
