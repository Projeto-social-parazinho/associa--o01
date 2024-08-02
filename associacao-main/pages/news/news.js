document.addEventListener("DOMContentLoaded", function () {
    const navbarToggle = document.querySelector(".navbar-toggler");
    const navbarNav = document.querySelector(".navbar-collapse");

    if (navbarToggle && navbarNav) {
        navbarToggle.addEventListener("click", function () {
            navbarNav.classList.toggle("show");
        });
    } else {
        console.error("Elementos do menu não encontrados.");
    }

    document.body.addEventListener("click", function (event) {
        if (!event.target.closest(".navbar-collapse")) {
            // Se o clique não estiver dentro do menu, fecha o menu
            navbarNav.classList.remove("show");
        }
    });

    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const footer = document.querySelector('footer');

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 20) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }

        if (isAtBottom()) {
            footer.classList.add('footer-show');
        } else {
            footer.classList.remove('footer-show');
        }
    });

    function isAtBottom() {
        return window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
    }

    scrollToTopBtn.addEventListener('click', function () {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    });

    const fadeElements = document.querySelectorAll('.fade-in');

    fadeElements.forEach(function (element) {
        setTimeout(function () {
            element.classList.add('active');
        }, 200);
    });

    const projectButtons = document.querySelectorAll('[data-toggle="collapse-card"]');

    projectButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const target = button.getAttribute("data-target");
            const projectInfo = document.querySelector(target);

            // Alternar a classe 'show' no elemento do projeto para exibir/ocultar as informações do projeto
            projectInfo.classList.toggle("show");
        });
    });
});
