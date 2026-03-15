const sendContactForm = async (form: HTMLFormElement): Promise<void> => {
  const formData = new FormData(form);
  const response = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  });

  if (!response.ok) {
    throw new Error('Contact form submission failed');
  }
};

const handleSubmit = async (event: Event): Promise<void> => {
  event.preventDefault();

  const myForm = event.target as HTMLFormElement;
  const statusEl = document.getElementById('form-status');
  const submitBtn = myForm.querySelector('button[type="submit"]') as HTMLButtonElement | null;

  try {
    if (submitBtn) submitBtn.disabled = true;
    if (statusEl) {
      statusEl.textContent = "Enviando mensaje...";
      statusEl.className = "text-xs text-center text-[#613659] mt-2";
    }

    await sendContactForm(myForm);

    if (statusEl) {
      statusEl.textContent = "¡Mensaje enviado con éxito! Nos contactaremos pronto.";
      statusEl.classList.add('text-green-600');
    }
    myForm.reset();
  } catch (error) {
    console.error('Error en formulario de contacto:', error);
    if (statusEl) {
      statusEl.textContent = "Ups, hubo un error. Inténtalo de nuevo.";
      statusEl.classList.add('text-red-600');
    }
  } finally {
    if (submitBtn) submitBtn.disabled = false;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form") as HTMLFormElement | null;
  if (contactForm) {
    contactForm.addEventListener("submit", handleSubmit);
  }
});
