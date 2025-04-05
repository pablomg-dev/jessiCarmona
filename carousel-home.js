document.addEventListener("DOMContentLoaded", function () {
    // 🔹 Carrusel Home
    const carousel = document.querySelector(".carousel-inner");
    const items = document.querySelectorAll(".carousel-item");
    const prev = document.querySelector("#prev");
    const next = document.querySelector("#next");
    let index = 0;

    if (carousel && items.length > 0 && prev && next) {
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

        console.log("✅ Carrusel del Home inicializado.");
    } else {
        console.log("ℹ️ No hay carrusel en esta página.");
    }
});