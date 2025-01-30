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

// Carrousel home
const carousel = document.querySelector(".carousel-inner");
const items = document.querySelectorAll(".carousel-item");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let index = 0;

function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

next.addEventListener("click", () => {
    index = (index + 1) % items.length;
    updateCarousel();
});

prev.addEventListener("click", () => {
    index = (index - 1 + items.length) % items.length;
    updateCarousel();
});