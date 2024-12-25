// script.js
const contentDiv = document.getElementById('content');
const navLinks = document.querySelectorAll('nav a');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function loadPage(page) {
    fetch(`${page}.html`)
        .then(response => response.text())
        .then(data => {
            contentDiv.innerHTML = data;
        });
}

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const page = this.getAttribute('data-page');
        loadPage(page);
    });
});

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});

// Carrega a página inicial por padrão
// Você pode escolher qual página carregar primeiro aqui
loadPage('pagina1');