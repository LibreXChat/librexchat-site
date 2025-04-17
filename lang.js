const translations = {
  ru: {
    join: "Присоединиться",
    news: "Новости",
    account: "Личный кабинет",
    rules: "Правила",
    download: "Скачать",
    title: "LibreXChat — честная игра для всех",
    description: `LibreXChat — это многопользовательский онлайн-мир, где игроки могут общаться, флиртовать, развлекаться и выражать свои желания без ограничений.`,
    footer: "© 2025 LibreXChat. Проект создан для всех без исключения.",
    register: "Регистрация",
    login: "Вход",
    acceptRules: "Я принимаю правила"
  },
  en: {
    join: "Join Now",
    news: "News",
    account: "Account",
    rules: "Rules",
    download: "Download",
    title: "LibreXChat — a fair game for everyone",
    description: `LibreXChat is a multiplayer online world where players can chat, flirt, have fun, and express their desires without restrictions.`,
    footer: "© 2025 LibreXChat. A project created for everyone without exception.",
    register: "Register",
    login: "Login",
    acceptRules: "I accept the rules"
  }
};

let currentLang = "ru";

function switchLanguage() {
  currentLang = currentLang === "ru" ? "en" : "ru";
  const t = translations[currentLang];

  document.title = t.title;
  const elements = {
    "nav-join": t.join,
    "nav-news": t.news,
    "nav-account": t.account,
    "nav-rules": t.rules,
    "nav-download": t.download,
    "main-desc": t.description,
    "footer-text": t.footer,
    "register-button": t.register,
    "login-button": t.login,
    "accept-label": t.acceptRules
  };

  for (const id in elements) {
    const el = document.getElementById(id);
    if (el) {
      if (el.tagName === "INPUT" && el.type === "submit") {
        el.value = elements[id];
      } else {
        el.innerHTML = elements[id];
      }
    }
  }
}
