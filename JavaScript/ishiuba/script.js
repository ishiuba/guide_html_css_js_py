/**
 * The `initializeLanguage` function sets the selected language based on the value stored in
 * localStorage and checks the corresponding radio button.
 */
function initializeLanguage() {
  const selectedLanguage = localStorage.getItem("selectedLanguage") || "en";
  setLanguage(selectedLanguage);

  const radioButton = document.querySelector(
    `input[name="btnradio"][value="${selectedLanguage}"]`
  );
  if (radioButton) {
    radioButton.checked = true;
  }
}

/**
 * The function `setLanguage` allows for dynamic translation of elements on a webpage based on the
 * selected language and stores the selected language in local storage.
 * @param language - The `language` parameter is a string that represents the selected language for
 * translation.
 */
function setLanguage(language) {
  const elementsToTranslate = document.querySelectorAll("[data-translate]");
  elementsToTranslate.forEach((element) => {
    const translationKey = element.getAttribute("data-translate");
    const translation =
      translations[language][translationKey] || translationKey;
    element.innerHTML = translation;
  });

  localStorage.setItem("selectedLanguage", language);

  document.documentElement.setAttribute("lang", language);
}

/* The code `document.querySelectorAll('input[name="btnradio"]').forEach((radio) => {
      radio.addEventListener("change", function () {
        setLanguage(this.value);
      });
    });` is selecting all input elements with the attribute `name="btnradio"` on the webpage. It then
    iterates over each of these input elements using the `forEach` method. */
document.querySelectorAll('input[name="btnradio"]').forEach((radio) => {
  radio.addEventListener("change", function () {
    setLanguage(this.value);
  });
});

/**
 * The above JavaScript functions initialize and toggle a dark theme for a webpage based on user
 * preference and store the theme choice in local storage.
 */
function initializeTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    document.getElementById("theme-switcher").checked = true; // Set checkbox to reflect the theme
  } else {
    document.body.classList.remove("dark");
    document.getElementById("theme-switcher").checked = false; // Set checkbox to reflect the theme
  }
}

/**
 * The function `toggleTheme` toggles between dark and light themes on a webpage based on the user's
 * preference stored in local storage.
 */
function toggleTheme() {
  const isDarkMode = localStorage.getItem("theme") === "dark";
  document.body.classList.toggle("dark", !isDarkMode);
  localStorage.setItem("theme", isDarkMode ? "light" : "dark");
}
document
  .getElementById("theme-switcher")
  .addEventListener("change", toggleTheme);

/**
 * The function `loadVideos` loads a list of videos onto a webpage, creating iframes for each video and
 * providing links to watch them.
 * @returns The `loadVideos` function loads a list of videos onto the webpage by creating iframe
 * elements for each video and appending them to the `videoContainer` element. The videos are sourced
 * from an array of video objects containing titles, video IDs, and URLs. The function also checks for
 * the existence of the `videoContainer` element and logs a warning if it is not found.
 */
function loadVideos() {
  const videos = [
    {
      title: "OVER-THINKING",
      videoId: "Ct5kE8KGnQM",
      url: "https://www.youtube.com/watch?v=Ct5kE8KGnQM",
    },
    {
      title: "Childhood Nostalgia",
      videoId: "2jfeauEQx7w",
      url: "https://www.youtube.com/watch?v=2jfeauEQx7w",
    },
    {
      title: "This Perfect World",
      videoId: "kFSdn2X1Ttw",
      url: "https://www.youtube.com/watch?v=kFSdn2X1Ttw",
    },
    {
      title: "Tragic Ending",
      videoId: "uf6PZ9WisZQ",
      url: "https://www.youtube.com/watch?v=uf6PZ9WisZQ",
    },
  ];

  const videoContainer = document.getElementById("videoContainer");

  if (!videoContainer) {
    console.warn("videoContainer não encontrado.");
    return;
  }

  videos.forEach((video) => {
    const colDiv = document.createElement("div");
    colDiv.className = "col";

    colDiv.innerHTML = `
            <iframe
              src="https://www.youtube.com/embed/${video.videoId}?si=dca-S4qIp2txXlSA"
              title="${video.title}"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <div class="video-links">
              <a
                rel="noopener"
                class="link"
                href="${video.url}"
                target="_blank"
              >
                <strong>${video.title}</strong>
              </a>
            </div>
          `;

    videoContainer.appendChild(colDiv);
  });
}

/**
 * The function `showMenu` toggles the responsive class on an element with the id "myTopnav" to show or
 * hide a menu.
 */
function showMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Call loadVideos after the page is fully rendered
window.onload = function () {
  initializeLanguage();
  initializeTheme();
  loadVideos();
};

/* This code defines a JavaScript object named `translations` that contains translations for
different languages (English, Portuguese, Japanese). Each language has key-value pairs for various
phrases and messages commonly found on a website such as greetings, main messages, section titles,
descriptions, and more. These translations can be used to display content in different languages on
a website based on the user's language preference. */
const translations = {
  en: {
    videos: "Videos",
    about: "About",
    greeting: "Hello, world!",
    mainMessage:
      "This is my first website built from scratch. I started coding in August 2024 and finished it in October 2024.<br>For now, there are only a few things to check out: some videos, an about page, a news page, and you can visit my social networks in the website's footer.",
    highlight: "Highlights",
    hDescription:
      "A list of YouTube videos to watch here or on my Official Artist Channel.",
    footer: "All rights reserved.",
    videosTitle: "Videos",
    videosDescription:
      "This is the video section; here are some videos to watch:",
    aboutTitle: "About",
    aboutMessage:
      "I made this website for fun. I was taking a programming course and learning how to build a simple yet cool website.<br>Then, after a few weeks, I started my own web project. To be honest, I used AI for some parts since I'm still new to programming.<br>I used it for the JavaScript part and to improve some of my HTML/CSS code, but of course, I didn't make it 100% using AI.<br>Thank you for visiting my website!",
    Homepage: "Homepage",
    Videos: "Videos",
    About: "About",
    News: "News",
    newsTitle: "News",
  },
  br: {
    videos: "Vídeos",
    about: "Sobre",
    greeting: "Olá, mundo!",
    mainMessage:
      "Este é meu primeiro site construído do zero. Comecei a programá-lo em agosto de 2024 e terminei em outubro de 2024.<br>Por enquanto, há apenas algumas coisas para conferir: alguns vídeos, uma página sobre, uma página de notícias, e você pode visitar minhas redes sociais no rodapé do site.",
    highlight: "Destaques",
    hDescription:
      "Uma lista de vídeos do YouTube para assistir aqui ou no meu canal oficial de artista.",
    footer: "Todos os direitos reservados.",
    videosTitle: "Vídeos",
    videosDescription:
      "Esta é a seção de vídeos; aqui estão alguns vídeos para assistir:",
    aboutTitle: "Sobre",
    aboutMessage:
      "Fiz este site por diversão. Estava fazendo um curso de programação e aprendendo a criar um site simples, mas legal.<br>Depois de algumas semanas, comecei meu próprio projeto web. Para ser sincero, usei IA em algumas partes, pois ainda sou iniciante em programação.<br>Usei-a para a parte de JavaScript e para melhorar meu código HTML/CSS, mas, claro, não o fiz 100% com IA.<br>Obrigado pela visita ao meu site!",
    Homepage: "Página Inicial",
    Videos: "Vídeos",
    About: "Sobre",
    News: "Notícias",
    newsTitle: "Notícias",
  },
  jp: {
    videos: "ビデオ",
    about: "概要",
    greeting: "こんにちは、世界！",
    mainMessage:
      "これは私がゼロから作った最初のウェブサイトです。2024年8月にコーディングを始め、2024年10月に完成させました。<br>現時点では、いくつかのビデオ、概要ページ、ニュースページをご覧いただけます。また、ウェブサイトのフッターにある私のSNSもご覧ください。",
    highlight: "ハイライト",
    hDescription:
      "ここで、または私の公式アーティストチャンネルで視聴できるYouTubeビデオのリストです。",
    footer: "全著作権所有。",
    videosTitle: "ビデオ",
    videosDescription:
      "こちらがビデオセクションです。いくつか視聴できるビデオがあります:",
    aboutTitle: "概要",
    aboutMessage:
      "このウェブサイトは趣味で作りました。プログラミングコースを受講中で、シンプルながらもクールなウェブサイトの作り方を学んでいました。<br>数週間後、自分のウェブプロジェクトを始めました。正直に言うと、プログラミングはまだ初心者なので、AIをいくつかの部分で使用しました。<br>JavaScriptの部分と、HTML/CSSコードの改善に使用しましたが、もちろん100％AIで作ったわけではありません。<br>ウェブサイトへのご訪問、ありがとうございます！",
    Homepage: "ホームページ",
    Videos: "ビデオ",
    About: "概要",
    News: "ニュース",
    newsTitle: "最新ニュース",
  },
};
