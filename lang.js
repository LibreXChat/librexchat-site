const translations = {
  ru: {
    join: "Присоединиться",
    whatIs: "Что такое LibreXChat?",
    description: `LibreXChat — это многопользовательский онлайн-мир, где игроки могут общаться, флиртовать, развлекаться и выражать свои желания.
      <br><br>Полностью <strong>бесплатна</strong>, без доната и майнинга. В нашем мире ты можешь:
      <br>– найти друзей и любовь,
      <br>– работать и зарабатывать,
      <br>– отдыхать под музыку диджеев,
      <br>– быть собой.`,
    footer: "© 2025 LibreXChat. Проект создан для всех без исключения.",
    nav: ["Новости", "Личный кабинет", "Правила", "Скачать"]
  },
  en: {
    join: "Join Now",
    whatIs: "What is LibreXChat?",
    description: `LibreXChat is a multiplayer online world where players can chat, flirt, and have fun freely.
      <br><br>Completely <strong>free</strong>, no donations or mining. In our world you can:
      <br>– find friends and love,
      <br>– work and earn currency,
      <br>– party with DJs,
      <br>– be yourself.`,
    footer: "© 2025 LibreXChat. A project created for everyone without exception.",
    nav: ["News", "Account", "Rules", "Download"]
  }
};

let currentLang = 'ru';
function switchLanguage() {
  currentLang = currentLang === 'ru' ? 'en' : 'ru';
  const t = translations[currentLang];
  document.getElementById('joinBtn').textContent = t.join;
  document.getElementById('whatIs').textContent = t.whatIs;
  document.getElementById('desc').innerHTML = t.description;
  document.getElementById('footerText').innerHTML = t.footer;

  const nav = document.querySelectorAll('.nav-item');
  nav.forEach((el, i) => el.textContent = t.nav[i]);
}
