document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form[name="newsletter"]') as HTMLFormElement | null;
  if (!form) return;

  const createSuccessPopup = (): HTMLElement => {
    const popupContainer = document.createElement('div');
    popupContainer.className = 'fixed inset-0 flex items-center justify-center z-50 bg-black/40';
    popupContainer.style.display = 'none';
    
    popupContainer.innerHTML = `
      <div class="bg-white rounded-2xl shadow-lg p-8 max-w-xs text-center font-arimo">
        <h2 class="text-2xl font-bold text-[#613659] mb-2 font-arimo">¡Gracias por suscribirte!</h2>
        <p class="text-[#495551] mb-4 font-arimo">Tu suscripción fue recibida correctamente.</p>
        <button id="close-popup" class="bg-[#613659] text-white px-4 py-2 rounded-lg font-bold hover:bg-[#4a2944] transition-colors font-arimo cursor-pointer w-full">Cerrar</button>
      </div>
    `;
    return popupContainer;
  };

  const popup = createSuccessPopup();
  document.body.appendChild(popup);

  const handleNewsletterSubmit = async (e: Event) => {
    e.preventDefault();
    const formData = new FormData(form);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });

      if (response.ok) {
        form.reset();
        popup.style.display = 'flex';
      } else {
        throw new Error('Newsletter submission failed');
      }
    } catch (error) {
      console.error('Error en newsletter:', error);
      alert('Hubo un error al procesar tu suscripción. Por favor, intenta de nuevo.');
    }
  };

  form.addEventListener('submit', handleNewsletterSubmit);

  popup.addEventListener('click', (e) => {
    if (e.target.id === 'close-popup' || e.target === popup) {
      popup.style.display = 'none';
    }
  });
});
