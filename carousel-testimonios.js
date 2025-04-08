document.addEventListener("DOMContentLoaded", function () {
    const testimonios = document.querySelectorAll(".testimonio-slide");
    let index = 0;

    function showTestimonio(n) {
        testimonios.forEach((testimonio, i) => {
            testimonio.classList.toggle("opacity-100", i === n);
            testimonio.classList.toggle("opacity-0", i !== n);
        });
    }

    // Cambio automático cada 5 segundos
    setInterval(() => {
        index = (index + 1) % testimonios.length;
        showTestimonio(index);
    }, 5000);

    showTestimonio(index); // Mostrar el primer testimonio
});
