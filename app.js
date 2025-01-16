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
// document.addEventListener('DOMContentLoaded', () => {
//     const elements = document.querySelectorAll('main *');
//     elements.forEach((el, index) => {
//         setTimeout(() => {
//             el.classList.add('opacity-100');
//             el.classList.remove('opacity-0');
//         }, index * 200);
//     });
// });

// Slide imagenes home
// const slider = document.getElementById('slider');
// const slides = document.querySelectorAll('.flex-shrink-0');
// const slideCount = slides.length / 2; // Solo los originales (sin duplicados)
// const slideWidth = slides[0].clientWidth;
// let index = 0;
// let interval;

// // Función para deslizar automáticamente
// function startSlider() {
//     interval = setInterval(() => {
//         index++;
//         slider.style.transition = "transform 0.5s ease-in-out";
//         slider.style.transform = `translateX(-${index * slideWidth}px)`;

//         // Si llegamos al final de los duplicados, reinicia al inicio
//         if (index >= slideCount) {
//             setTimeout(() => {
//                 slider.style.transition = "none"; // Elimina la transición para reiniciar suavemente
//                 slider.style.transform = "translateX(0)";
//                 index = 0; // Reinicia el índice
//             }, 500); // Debe coincidir con la duración de la transición
//         }
//     }, 2000); // Cambio cada 2 segundos
// }

// // Pausar el slider
// function stopSlider() {
//     clearInterval(interval);
// }

// // Iniciar slider automáticamente
// startSlider();

// // Pausar al posar el mouse sobre la imagen o el título
// slides.forEach(slide => {
//     slide.addEventListener("mouseenter", stopSlider);
//     slide.addEventListener("mouseleave", startSlider);
// });

