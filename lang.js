const translations = {
  ru: {
    title: "LibreXChat — честная игра для всех",
    whatIs: "Что такое LibreXChat?",
    desc: `LibreXChat — это многопользовательский онлайн-мир, в котором игроки могут общаться, флиртовать, развлекаться и выражать свои желания без ограничений.
    <br><br>Игра полностью <strong>бесплатна</strong>, без доната, без майнинга и без ограничений по фантазии.
    <br><br>На нашем сервере ты сможешь:
    <br>– встретить новых друзей,
    <br>– создать пару или семью,
    <br>– завести лёгкие отношения или страстный роман,
    <br>– устроиться на работу и получать игровую валюту,
    <br>– посетить вечеринки с реальными диджеями и танцполами,
    <br>– и просто расслабиться в свободной атмосфере.
    <br><br>🎉 Присоединяйся и стань частью открытого и свободного мира!`,
    footer: "© 2025 LibreXChat. Проект создан для всех без исключения.",
    nav_news: "Новости",
    nav_account: "Личный кабинет",
    nav_rules: "Правила",
    nav_download: "Скачать",
    join: "Присоединиться"
  },
  en: {
    title: "LibreXChat — a fair game for everyone",
    whatIs: "What is LibreXChat?",
    desc: `LibreXChat is a multiplayer online world where players can chat, flirt, have fun and express their desires without restrictions.
    <br><br>The game is completely <strong>free</strong> — no donations, no mining, and no limits on fantasy.
    <br><br>On our server, you can:
    <br>– meet new friends,
    <br>– create a couple or family,
    <br>– find casual or passionate relationships,
    <br>– get a job and earn in-game currency,
    <br>– enjoy parties with real DJs and dance floors,
    <br>– or just relax in a free atmosphere.
    <br><br>🎉 Join us and become part of an open and free world!`,
    footer: "© 2025 LibreXChat. A project created for everyone without exception.",
    nav_news: "News",
    nav_account: "Account",
    nav_rules: "Rules",
    nav_download: "Download",
    join: "Join Now"
  }
};

let currentLang = 'ru';

function switchLanguage() {
  currentLang = currentLang === 'ru' ? 'en' : 'ru';
  applyTranslations();
}

function applyTranslations() {
  const t = translations[currentLang];
  document.getElementById('title').textContent = t.title;
  document.getElementById('whatIs').textContent = t.whatIs;
  document.getElementById('desc').innerHTML = t.desc;
  document.getElementById('footerText').textContent = t.footer;

  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (t[key]) {
      el.textContent = t[key];
    }
  });
}
