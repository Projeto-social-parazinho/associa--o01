document.addEventListener("DOMContentLoaded", function () {
    const navbarToggle = document.querySelector(".navbar-toggler");
    const navbarNav = document.querySelector(".navbar-collapse");

    if (navbarToggle && navbarNav) {
        // Adicionar evento de clique ao botão do menu
        navbarToggle.addEventListener("click", function () {
            // Alternar a classe 'show' no elemento navbarNav para exibir/ocultar as opções do menu
            navbarNav.classList.toggle("show");
        });
    } else {
        console.error("Elementos do menu não encontrados.");
    }

    // Adicionar evento de clique para fechar o menu ao clicar fora dele
    document.body.addEventListener("click", function (event) {
        // Verificar se o clique foi fora do botão de alternância do menu e do menu expandido
        if (!event.target.closest(".navbar-toggler") && !event.target.closest(".navbar-collapse")) {
            // Ocultar o menu
            navbarNav.classList.remove("show");
        }
    });

    // Adicionar evento de clique para fechar o menu ao clicar em um link do menu
    navbarNav.addEventListener("click", function () {
        navbarNav.classList.remove("show");
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    var footer = document.querySelector('footer');

    // Exibe ou oculta o footer ao rolar
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 20) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
        
        // Exibe o footer quando o usuário chegar ao final da página
        if (isAtBottom()) {
            footer.classList.add('footer-show');
        } else {
            footer.classList.remove('footer-show');
        }
    });


    // Função para verificar se o usuário chegou ao final da página
    function isAtBottom() {
        return window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
    }

    // Evento de clique para rolar até o topo da página
    scrollToTopBtn.addEventListener('click', function () {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os elementos com a classe 'fade-in'
    var fadeElements = document.querySelectorAll('.fade-in');
    
    // Adiciona a classe 'active' após um pequeno atraso
    fadeElements.forEach(function(element) {
        setTimeout(function() {
            element.classList.add('active');
        }, 200); // Tempo de espera em milissegundos
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;

    // Adicione a classe "dark-mode" ao corpo automaticamente
    // body.classList.add("dark-mode");

    const languageSelect = document.getElementById("language-select");

    // Função para traduzir o conteúdo da página
    function translatePage(selectedLanguage) {
        // Obtenha a chave de API que você criou no GCP
        const apiKey = "AIzaSyAZCMpC8hWY0XzUExghSb9TFiqPP_5IOm8";

        // Traduza os elementos da página
        const elementsToTranslate = document.querySelectorAll("[data-translate]");
        elementsToTranslate.forEach((element) => {
            const translationKey = element.getAttribute("data-translate");

            // Verifique se a tradução é "home" (Início) e defina manualmente
            if (selectedLanguage === "pt" && translationKey === "home") {
                element.textContent = "Início";
            } else {
                // Chame a API de tradução do Google Cloud
                fetch(`https://translation.googleapis.com/language/translate/v2?key=${AIzaSyAZCMpC8hWY0XzUExghSb9TFiqPP_5IOm8}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        q: translationKey,
                        target: selectedLanguage,
                    }),
                })
                .then(response => response.json())
                .then(data => {
                    const translationText = data.data.translations[0].translatedText;

                    // Capitalize a primeira letra da tradução
                    const capitalizedText = translationText.charAt(0).toUpperCase() + translationText.slice(1);
                    element.textContent = capitalizedText;
                })
                .catch(error => console.error('Erro ao traduzir:', error));
            }
        });
    }

    // Adicione um event listener para o menu suspenso
    languageSelect.addEventListener("change", function () {
        const selectedLanguage = languageSelect.value;
        translatePage(selectedLanguage);
    });

    // Inicialize a tradução com o idioma selecionado inicialmente
    const initialLanguage = languageSelect.value;
    translatePage(initialLanguage);

    // Função para aumentar o tamanho do texto
    document.getElementById("increase-font-size").addEventListener("click", function () {
        document.body.style.fontSize = "1.2em"; // Ajuste o valor conforme necessário
    });

    // Função para diminuir o tamanho do texto
    document.getElementById("decrease-font-size").addEventListener("click", function () {
        document.body.style.fontSize = "0.9em"; // Ajuste o valor conforme necessário
    });

    // Função para ativar/desativar o modo de alto contraste
    let highContrast = false;
    document.getElementById("high-contrast").addEventListener("click", function () {
        highContrast = !highContrast;
        if (highContrast) {
            document.body.classList.add("high-contrast");
        } else {
            document.body.classList.remove("high-contrast");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const accessibilityBtn = document.getElementById("accessibility-btn");
    const accessibilityIcons = document.getElementById("accessibility-icons");
    const body = document.body;

    // Adicionar evento de clique para abrir os ícones de acessibilidade
    accessibilityBtn.addEventListener("click", function () {
        accessibilityBtn.style.display = "none"; // Oculta o botão de acessibilidade
        accessibilityIcons.style.display = "block"; // Exibe os ícones de acessibilidade
    });

    // Adicionar evento de clique ao corpo para fechar os ícones de acessibilidade
    body.addEventListener("click", function (event) {
        // Verifica se o clique foi fora da área dos ícones de acessibilidade e do botão de acessibilidade
        if (!accessibilityIcons.contains(event.target) && !accessibilityBtn.contains(event.target)) {
            accessibilityBtn.style.display = "block"; // Exibe o botão de acessibilidade
            accessibilityIcons.style.display = "none"; // Oculta os ícones de acessibilidade
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggle-mode-btn");
    const accessibilityBtn = document.getElementById("accessibility-mode-btn");

    toggleButton.addEventListener("click", function() {
        accessibilityBtn.classList.toggle("shifted"); // Adiciona ou remove a classe 'shifted'
    });
});

// Função para ativar/desativar o modo de alto contraste
function toggleContrast() {
    var body = document.body;
    var icon = document.getElementById('contrast-mode-icon');

    // Verifica se o corpo do documento tem a classe de autocontraste
        if (body.classList.contains('contrast-mode')) {
            // Se o autocontraste estiver ativado, desativa
            body.classList.remove('contrast-mode');
            // Substitua aqui pelo ícone de autocontraste desativado
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-adjust');
        } else {
            // Se o autocontraste estiver desativado, ativa
            body.classList.add('contrast-mode');
            // Substitua aqui pelo ícone de autocontraste ativado
            icon.classList.remove('fa-adjust');
            icon.classList.add('fa-sun');
        }
    }
