const translations = {
  ru: {
    title: "LibreXChat — честная игра для всех",
    whatIs: "Что такое LibreXChat?",
    description: `LibreXChat — это многопользовательский онлайн-мир...`, // можно оставить как есть
    footer: "© 2025 LibreXChat. Проект создан для всех без исключения.",
  },
  en: {
    title: "LibreXChat — a fair game for everyone",
    whatIs: "What is LibreXChat?",
    description: `LibreXChat is a multiplayer online world...`, // аналогично
    footer: "© 2025 LibreXChat. A project created for everyone without exception.",
  }
};

let currentLang = 'ru';

function switchLanguage(lang = null) {
  if (lang) currentLang = lang;
  else currentLang = currentLang === 'ru' ? 'en' : 'ru';

  const t = translations[currentLang];
  document.title = t.title;
  document.getElementById('whatIs').textContent = t.whatIs;
  document.getElementById('desc').innerHTML = t.description;
  document.getElementById('footerText').textContent = t.footer;
}
