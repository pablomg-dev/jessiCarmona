const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);
    const statusEl = document.getElementById('form-status');

    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
    })
        .then(() => {
            statusEl.textContent = "¡Mensaje enviado con éxito! Nos contactaremos pronto.";
            myForm.reset(); // Limpia el formulario
        })
        .catch((error) => {
            statusEl.textContent = "Ups, hubo un error. Inténtalo de nuevo.";
            statusEl.classList.replace('text-green-600', 'text-red-600');
        });
};

// Asignamos el evento al formulario
document.getElementById("contact-form").addEventListener("submit", handleSubmit);