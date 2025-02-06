document.addEventListener("DOMContentLoaded", function () {
    // 🔹 Menú hamburguesa
    const menuButton = document.getElementById("menu-button");
    const menu = document.getElementById("menu");

    if (menuButton && menu) {
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            menuButton.classList.toggle("open", isMenuOpen);
            
            if (isMenuOpen) {
                menu.classList.remove("scale-y-0", "hidden");
                menu.classList.add("scale-y-100", "block");
            } else {
                menu.classList.remove("scale-y-100", "block");
                menu.classList.add("scale-y-0", "hidden");
            }
        }

        menuButton.addEventListener("click", toggleMenu);
        console.log("✅ Menú hamburguesa inicializado.");
    } else {
        console.error("⚠️ Error: No se encontró el menú hamburguesa.");
    }
});
