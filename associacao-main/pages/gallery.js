// Função para abrir uma aba
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Adiciona evento de clique ao link "Galeria"
document.getElementById('gallery-link').addEventListener('click', function(event) {
    // Evita o comportamento padrão do link
    event.preventDefault();

    // Remove a classe de negrito de todas as opções
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.classList.remove('font-weight-bold');
    });

    // Adiciona a classe de negrito à opção "Galeria"
    this.classList.add('font-weight-bold');

    // Redireciona para a página da galeria após 500ms
    setTimeout(function() {
        window.location.href = event.currentTarget.getAttribute('href');
    }, 500);
});

// Script para controlar a exibição do footer após o final da página
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var footer = document.querySelector('footer');
        var scrollPosition = window.innerHeight + window.pageYOffset;
        if (scrollPosition >= document.body.offsetHeight) {
            footer.style.display = 'block';
        } else {
            footer.style.display = 'none';
        }
    });
});

// Script para controlar a exibição do footer após o final da página
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var footer = document.querySelector('footer');
        var scrollPosition = window.innerHeight + window.pageYOffset;
        
        // Verifica se o scroll está no final da página
        if (scrollPosition >= document.body.offsetHeight) {
            footer.style.display = 'block';
        } else {
            footer.style.display = 'none';
        }
    });
});

// Função para rolar suavemente para o topo da página
document.addEventListener('DOMContentLoaded', function() {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Mostrar o botão quando o usuário rolar 300px para baixo da parte superior da página
    window.addEventListener('scroll', function() {
        if (window.scrollY >= 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // Rolamento suave ao clicar no botão
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});