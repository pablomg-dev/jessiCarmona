document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const menu = document.getElementById("menu");
    const logoLink = document.querySelector("a[href='#']"); // Selecciona el logo del menú

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

        // Agregar evento a los enlaces del menú
        document.querySelectorAll("#menu a").forEach(link => {
            link.addEventListener("click", (event) => {
                const clickedUrl = new URL(link.href, window.location.origin).pathname;
                const currentUrl = window.location.pathname;

                if (clickedUrl === currentUrl) {
                    event.preventDefault(); // Evita la navegación normal
                    window.location.reload(); // Recarga la página solo si ya estás en ella
                }
            });
        });

        // Agregar funcionalidad al logo del menú
        if (logoLink) {
            logoLink.addEventListener("click", (event) => {
                event.preventDefault(); // Evita la navegación normal
                
                const homePaths = ["/", "/index.html"];
                const currentUrl = window.location.pathname;

                if (homePaths.includes(currentUrl)) {
                    window.location.reload(); // Si ya estás en inicio, recarga la página
                }
            });
        }

    } else {
        console.error("⚠️ Error: No se encontró el menú hamburguesa.");
    }
});
