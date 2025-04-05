document.addEventListener("DOMContentLoaded", function () {
    // 🔹 Carrusel Home
    const carousel = document.querySelector(".carousel-inner");
    const items = document.querySelectorAll(".carousel-item");
    const prev = document.querySelector("#prev");
    const next = document.querySelector("#next");
    let index = 0;
    let autoSlideInterval;

    if (carousel && items.length > 0 && prev && next) {
        function updateCarousel() {
            carousel.style.transform = `translateX(-${index * 100}%)`;
        }

        function goToNextSlide() {
            index = (index + 1) % items.length;
            updateCarousel();
        }

        function goToPrevSlide() {
            index = (index - 1 + items.length) % items.length;
            updateCarousel();
        }

        next.addEventListener("click", () => {
            goToNextSlide();
            resetAutoSlide(); // reinicia el temporizador si el usuario interactúa
        });

        prev.addEventListener("click", () => {
            goToPrevSlide();
            resetAutoSlide(); // reinicia el temporizador si el usuario interactúa
        });

        function startAutoSlide() {
            autoSlideInterval = setInterval(goToNextSlide, 5000); // cada 5 segundos
        }

        function resetAutoSlide() {
            clearInterval(autoSlideInterval);
            startAutoSlide();
        }

        // Inicializa el carrusel
        updateCarousel();
        startAutoSlide();

        console.log("✅ Carrusel del Home inicializado con auto-slide.");
    } else {
        console.log("ℹ️ No hay carrusel en esta página.");
    }
});
