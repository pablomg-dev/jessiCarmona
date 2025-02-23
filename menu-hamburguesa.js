document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const menu = document.getElementById("menu");

    if (menuButton && menu) {
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            menuButton.classList.toggle("open", isMenuOpen);

            if (isMenuOpen) {
                menu.classList.remove("max-h-0");
                menu.classList.add("max-h-[500px]"); // Expansión suave en vez de inmediato
            } else {
                menu.classList.remove("max-h-[500px]");
                menu.classList.add("max-h-0");
            }
        }

        menuButton.addEventListener("click", toggleMenu);
        console.log("✅ Menú hamburguesa inicializado.");
    } else {
        console.error("⚠️ Error: No se encontró el menú hamburguesa.");
    }
});
