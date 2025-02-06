document.addEventListener("DOMContentLoaded", function () {
    const testimonios = document.querySelectorAll(".testimonio-slide");
    const prevBtn = document.getElementById("prevTestimonio");
    const nextBtn = document.getElementById("nextTestimonio");
    let index = 0;

    function showTestimonio(n) {
        testimonios.forEach((testimonio, i) => {
            testimonio.classList.toggle("opacity-100", i === n);
            testimonio.classList.toggle("opacity-0", i !== n);
        });
    }

    prevBtn.addEventListener("click", () => {
        index = (index - 1 + testimonios.length) % testimonios.length;
        showTestimonio(index);
    });

    nextBtn.addEventListener("click", () => {
        index = (index + 1) % testimonios.length;
        showTestimonio(index);
    });

    // Cambio automático cada 5 segundos
    setInterval(() => {
        index = (index + 1) % testimonios.length;
        showTestimonio(index);
    }, 5000);

    showTestimonio(index); // Mostrar el primer testimonio
});
