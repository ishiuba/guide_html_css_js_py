// Função para carregar as traduções de um arquivo JSON
async function loadTranslations(language) {
    try {
        if (language === 'en-us') {
            language = 'en';
        }
        const response = await fetch(`json/${language}.json`);
        if (!response.ok) {
            throw new Error(`Erro ao carregar o arquivo de tradução para o idioma ${language}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Erro ao carregar as traduções:", error);
        return {};
    }
}

// Função para definir o idioma e traduzir a página
async function setLanguage(language) {
    const translations = await loadTranslations(language);
    const elementsToTranslate = document.querySelectorAll("[data-translate]");

    elementsToTranslate.forEach(element => {
        const translationKey = element.getAttribute("data-translate");
        element.innerHTML = translations[translationKey] || translationKey;
    });

    localStorage.setItem("selectedLanguage", language);
    document.documentElement.setAttribute("lang", language);

    // Atualiza a classe 'active' nos botões de idioma
    document.querySelectorAll("#language button").forEach(btn => {
        btn.classList.remove("active");
    });
    const activeButton = document.querySelector(`#language button[data-language="${language}"]`);
    if (activeButton) {
        activeButton.classList.add("active");
    }
}

// Inicializa o idioma ao carregar a página
document.addEventListener("DOMContentLoaded", async () => {
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
    await setLanguage(savedLanguage);

    // Adiciona event listeners aos botões de idioma
    document.querySelectorAll("#language button").forEach(button => {
        button.addEventListener("click", async function () {
            const language = this.dataset.language;
            await setLanguage(language);
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const themeSwitcher = document.getElementById("theme-switcher");

    // Função para inicializar o tema com base na preferência do usuário ou do sistema
    function initializeTheme() {
        const savedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        setTheme(savedTheme);
    }

    // Função para definir o tema e atualizar o ícone do botão
    function setTheme(theme) {
        if (theme === "dark") {
            document.body.classList.add("dark");
            updateThemeButtonIcon(true);
        } else {
            document.body.classList.remove("dark");
            updateThemeButtonIcon(false);
        }
        localStorage.setItem("theme", theme);
    }

    // Função para atualizar o ícone do botão do tema
    function updateThemeButtonIcon(isDark) {
        const icon = themeSwitcher.querySelector('i');
        if (isDark) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    // Event listener para o botão de alternar tema
    themeSwitcher.addEventListener("click", () => {
        const isDarkMode = document.body.classList.contains("dark");
        setTheme(isDarkMode ? "light" : "dark");
    });

    // Inicializa o tema ao carregar a página
    initializeTheme();
});

/* This JavaScript code snippet is used to add an "active" class to the navigation link that
corresponds to the current page. Here's a breakdown of what it does: */
const currentPage = window.location.pathname;
document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }
});