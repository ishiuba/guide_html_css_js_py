// Dicionário de traduções temporário, em breve implementarei um sistema de traduções mais eficiente.
const translations = {
  Homepage: {
    en: "Homepage",
    br: "Pagina Inicial",
    jp: "ホームページ",
  },
  About: {
    en: "About",
    br: "Sobre",
    jp: "私について",
  },
  Translations: {
    en: "Languages",
    br: "Idiomas",
    jp: "言語",
  },
  greeting: {
    en: "Hello, world!",
    br: "Olá, mundo!",
    jp: "こんにちは、世界！",
  },
  mainMsg: {
    en: "This is my first website built from scratch. I started coding in August 2024 and finished it in October 2024.",
    br: "Este é meu primeiro site construído do zero. Comecei a programá-lo em agosto de 2024 e terminei em outubro de 2024.",
    jp: "これは私がゼロから作った最初のウェブサイトです。2024年8月にコーディングを始め、2024年10月に完成させました。",
  },
  subMsg: {
    en: "For now, there are just a few things to check: some articles, an about page, and you can visit my social media in the footer of the website.",
    br: "Por enquanto, há apenas algumas coisas para conferir: alguns artigos, uma página sobre, e você pode visitar minhas redes sociais no rodapé do site.",
    jp: "今のところ、チェックするものはいくつかだけです：いくつかの記事、紹介ページ、そしてウェブサイトのフッターにある私のソーシャルメディアを訪れることができます。",
  },
  highlight: {
    en: "Highlights",
    br: "Destaques",
    jp: "ハイライト",
  },
  hDescription: {
    en: "A list of YouTube videos to watch here or on my Official Artist Channel.",
    br: "Uma lista de vídeos do YouTube para assistir aqui ou no meu Canal Oficial do Artista.",
    jp: "ここでまたは私のオフィシャルアーティストチャンネルで見るYouTube動画のリスト。",
  },
  streaming: {
    en: "Streaming",
    br: "Streaming",
    jp: "ストリーミング",
  },
  prdBy: {
    en: "Powered by IamSHIUBA",
    br: "Desenvolvido por IamSHIUBA",
    jp: "開発者：IamSHIUBA",
  },
  footer: {
    en: "All rights reserved.",
    br: "Todos os direitos reservados.",
    jp: "全著作権所有。",
  },
  aboutTitle: {
    en: "About",
    br: "Sobre",
    jp: "概要",
  },
  aboutMsg: {
    en: "I made this website for fun. I was taking a programming course and learning how to build a simple yet cool website.<br>Then, after a few weeks, I started my own web project. To be honest, I used AI for some parts since I'm still new to programming.<br>I used it for the JavaScript part and to improve some of my HTML/CSS code, but of course, I didn't make it 100% using AI.<br>Thank you for visiting my website!",
    br: "Fiz este site por diversão. Estava fazendo um curso de programação e aprendendo a criar um site simples, mas legal.<br>Depois de algumas semanas, comecei meu próprio projeto web. Para ser sincero, usei IA em algumas partes, pois ainda sou iniciante em programação.<br>Usei-a para a parte de JavaScript e para melhorar meu código HTML/CSS, mas, claro, não o fiz 100% com IA.<br>Obrigado pela visita ao meu site!",
    jp: "このウェブサイトは趣味で作りました。プログラミングコースを受講中で、シンプルながらもクールなウェブサイトの作り方を学んでいました。<br>数週間後、自分のウェブプロジェクトを始めました。正直に言うと、プログラミングはまだ初心者なので、AIをいくつかの部分で使用しました。<br>JavaScriptの部分と、HTML/CSSコードの改善に使用しましたが、もちろん100％AIで作ったわけではありません。<br>ウェブサイトへのご訪問、ありがとうございます！",
  }
};

// Inicialização eficiente do idioma
function initializeLanguage() {
  const selectedLanguage = localStorage.getItem("selectedLanguage") || "en";
  setLanguage(selectedLanguage);

  const button = document.querySelector(
    `button[data-language="${selectedLanguage}"]`
  );
  if (button) button.classList.add("active");
}

// Alteração para acessar o objeto organizado por chaves
function setLanguage(language) {
  const elementsToTranslate = document.querySelectorAll("[data-translate]");

  for (const element of elementsToTranslate) {
    const translationKey = element.getAttribute("data-translate");
    const translation =
      translations[translationKey]?.[language] || translationKey;
    element.innerHTML = translation;
  }

  localStorage.setItem("selectedLanguage", language);
  document.documentElement.setAttribute("lang", language);
}

// Eventos e Inicialização
document.addEventListener("DOMContentLoaded", () => {
  initializeLanguage();
  document.getElementById("language").addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      setLanguage(e.target.dataset.language);
      document
        .querySelectorAll("#language button")
        .forEach((btn) => btn.classList.remove("active"));
      e.target.classList.add("active");
    }
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

function loadPlaylists() {
  const playlists = [
    {
      title: "Singles (2024)",
      playlistId: "PLxUVZPvKMNEcKd2omhOo6aH6egvDd5_nB",
      url: "https://www.youtube.com/playlist?list=PLxUVZPvKMNEcKd2omhOo6aH6egvDd5_nB",
    },
    {
      title: "Singles (2023)",
      playlistId: "PLxUVZPvKMNEc923Z8otdwQQ8TXSN3VdZK",
      url: "https://www.youtube.com/playlist?list=PLxUVZPvKMNEc923Z8otdwQQ8TXSN3VdZK",
    },
    {
      title: "Remixes",
      playlistId: "PLxUVZPvKMNEeppHxrsS-7yeMGzY6fvRqK",
      url: "https://www.youtube.com/playlist?list=PLxUVZPvKMNEeppHxrsS-7yeMGzY6fvRqK",
    },
    {
      title: "Piano Tutorial",
      playlistId: "PLxUVZPvKMNEfSLaVSQH4EP6isdzPdyFIG",
      url: "https://www.youtube.com/playlist?list=PLxUVZPvKMNEfSLaVSQH4EP6isdzPdyFIG",
    },
    {
      title: "Unreleased Songs",
      playlistId: "PLxUVZPvKMNEdrWnFay_1VSI184mL94Jsx",
      url: "https://www.youtube.com/playlist?list=PLxUVZPvKMNEdrWnFay_1VSI184mL94Jsx",
    },
    {
      title: "Volumes",
      playlistId: "PLxUVZPvKMNEetfIuzffSPH3FYIDwVUWUt",
      url: "https://www.youtube.com/playlist?list=PLxUVZPvKMNEetfIuzffSPH3FYIDwVUWUt",
    },
  ];

  const playlistContainer = document.getElementById("playlistContainer");

  if (!playlistContainer) {
    console.warn("playlistContainer não encontrado.");
    return;
  }

  playlists.forEach((playlist) => {
    const colDiv = document.createElement("div");
    colDiv.className = "container p-3";

    colDiv.innerHTML = `
            <div class="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/videoseries?list=${playlist.playlistId}"
                title="${playlist.title}"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div class="playlist-links">
              <a
                type="button"
                rel="noopener"
                class="btn"
                href="${playlist.url}"
                target="_blank"
                aria-label="Check out ${playlist.title} playlist on YouTube"
              >
              <span class="lead">${playlist.title}</span>
              </a>
            </div>
          `;

    playlistContainer.appendChild(colDiv);
  });
}
loadPlaylists();


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