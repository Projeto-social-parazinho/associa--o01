document.addEventListener("DOMContentLoaded", function () {
    const navbarToggle = document.querySelector(".navbar-toggler");
    const navbarNav = document.querySelector(".navbar-collapse");
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const footer = document.querySelector('footer');
    const accessibilityBtn = document.getElementById("accessibility-btn");
    const accessibilityIcons = document.getElementById("accessibility-icons");
    const languageSelect = document.getElementById("language-select");
    const toggleButton = document.getElementById("toggle-mode-btn");
    const fadeElements = document.querySelectorAll('.fade-in');

    // Função para alternar a exibição do menu
    function toggleMenu() {
        navbarNav.classList.toggle("show");
    }

    // Fechar o menu ao clicar fora
    function closeMenuOnClickOutside(event) {
        if (!event.target.closest(".navbar-toggler, .navbar-collapse")) {
            navbarNav.classList.remove("show");
        }
    }

    // Exibe o botão de rolar para o topo e o rodapé quando necessário
    function handleScroll() {
        const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
        scrollToTopBtn.style.display = window.pageYOffset > 20 ? 'block' : 'none';
        footer.classList.toggle('footer-show', atBottom);
    }

    // Rola a página para o topo
    function scrollToTop() {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }

    // Adiciona a classe 'active' aos elementos com fade-in
    fadeElements.forEach(element => setTimeout(() => element.classList.add('active'), 200));

    // Alterna o contraste
    function toggleContrast() {
        const icon = document.getElementById('contrast-mode-icon');
        document.body.classList.toggle('contrast-mode');
        icon.classList.toggle('fa-sun');
        icon.classList.toggle('fa-adjust');
    }

    // Exibe ou oculta os ícones de acessibilidade
    function toggleAccessibilityIcons() {
        accessibilityBtn.style.display = accessibilityIcons.style.display === 'block' ? 'block' : 'none';
        accessibilityIcons.style.display = accessibilityIcons.style.display === 'block' ? 'none' : 'block';
    }

    // Função para tradução
    function translatePage(selectedLanguage) {
        const apiKey = "AIzaSyAZCMpC8hWY0XzUExghSb9TFiqPP_5IOm8";
        const elementsToTranslate = document.querySelectorAll("[data-translate]");
        elementsToTranslate.forEach(element => {
            const translationKey = element.getAttribute("data-translate");
            if (selectedLanguage === "pt" && translationKey === "home") {
                element.textContent = "Início";
            } else {
                fetch(`https://translation.googleapis.com/language/translate/v2?key=${apiKey}`, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({q: translationKey, target: selectedLanguage}),
                })
                .then(response => response.json())
                .then(data => {
                    element.textContent = data.data.translations[0].translatedText.charAt(0).toUpperCase() + data.data.translations[0].translatedText.slice(1);
                })
                .catch(error => console.error('Erro ao traduzir:', error));
            }
        });
    }

    // Event Listeners
    if (navbarToggle && navbarNav) {
        navbarToggle.addEventListener("click", toggleMenu);
        document.body.addEventListener("click", closeMenuOnClickOutside);
        navbarNav.addEventListener("click", () => navbarNav.classList.remove("show"));
    }

    if (scrollToTopBtn) {
        window.addEventListener('scroll', handleScroll);
        scrollToTopBtn.addEventListener('click', scrollToTop);
    }

    if (accessibilityBtn && accessibilityIcons) {
        accessibilityBtn.addEventListener("click", toggleAccessibilityIcons);
        document.body.addEventListener("click", function (event) {
            if (!accessibilityIcons.contains(event.target) && !accessibilityBtn.contains(event.target)) {
                toggleAccessibilityIcons();
            }
        });
    }

    if (toggleButton) {
        toggleButton.addEventListener("click", () => {
            document.getElementById("accessibility-mode-btn").classList.toggle("shifted");
        });
    }

    if (languageSelect) {
        languageSelect.addEventListener("change", () => translatePage(languageSelect.value));
        translatePage(languageSelect.value);
    }
});
