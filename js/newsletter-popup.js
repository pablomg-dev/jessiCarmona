document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form[name="newsletter"]');
  if (!form) return;
  // Crear popup oculto
  const popup = document.createElement('div');
  popup.innerHTML = `<div class="fixed inset-0 flex items-center justify-center z-50 bg-black/40">
      <div class="bg-white rounded-2xl shadow-lg p-8 max-w-xs text-center font-arimo">
        <h2 class="text-2xl font-bold text-white mb-2 font-arimo">¡Gracias por suscribirte!</h2>
        <p class="text-[#495551] mb-4 font-arimo">Tu suscripción fue recibida correctamente.</p>
        <button id="close-popup" class="bg-[#613659] text-white px-4 py-2 rounded-lg font-bold hover:bg-[#1992b3] font-arimo">Cerrar</button>
      </div>
    </div>`;
  popup.innerHTML = `<div class="fixed inset-0 flex items-center justify-center z-50 bg-black/40">
      <div class="bg-white rounded-2xl shadow-lg p-8 max-w-xs text-center font-['Arimo',_sans-serif]">
        <h2 class="text-2xl font-bold text-white mb-2 font-['Arimo',_sans-serif]">¡Gracias por suscribirte!</h2>
        <p class="text-[#495551] mb-4 font-['Arimo',_sans-serif]">Tu suscripción fue recibida correctamente.</p>
        <button id="close-popup" class="bg-[#613659] text-white px-4 py-2 rounded-lg font-bold hover:bg-[#1992b3] font-['Arimo',_sans-serif] cursor-pointer">Cerrar</button>
      </div>
    </div>`;
  popup.style.display = 'none';
  document.body.appendChild(popup);

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(form);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString()
    })
      .then(() => {
        form.reset();
        popup.style.display = 'block';
      })
      .catch(() => {
        alert('Hubo un error. Intenta de nuevo.');
      });
  });
  document.body.addEventListener('click', function (e) {
    if (e.target.id === 'close-popup') {
      popup.style.display = 'none';
    }
  });
});
