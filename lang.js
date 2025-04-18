const translations = {
  ru: {
    news: "Новости",
    account: "Личный кабинет",
    rules: "Правила",
    download: "Скачать",
    whatIs: "Что такое LibreXChat?",
    description: `LibreXChat — это многопользовательский онлайн-мир, где игроки могут общаться, флиртовать, развлекаться и выражать желания без ограничений...`,
  },
  en: {
    news: "News",
    account: "Account",
    rules: "Rules",
    download: "Download",
    whatIs: "What is LibreXChat?",
    description: `LibreXChat is a multiplayer world where people can chat, flirt, have fun, and express their desires freely...`,
  }
};

let currentLang = 'ru';

function switchLanguage() {
  currentLang = currentLang === 'ru' ? 'en' : 'ru';
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[currentLang][key]) {
      el.innerHTML = translations[currentLang][key];
    }
  });
}
