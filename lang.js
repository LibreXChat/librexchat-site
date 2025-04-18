const translations = {
  ru: {
    join: "Присоединиться",
    rules: "Правила",
    account: "Личный кабинет",
    download: "Скачать",
    welcome: "Добро пожаловать в LibreXChat",
    description: `LibreXChat — это многопользовательский онлайн-мир, в котором игроки могут общаться, флиртовать, развлекаться и выражать свои желания без ограничений.
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
  },
  en: {
    join: "Join Now",
    rules: "Rules",
    account: "Account",
    download: "Download",
    welcome: "Welcome to LibreXChat",
    description: `LibreXChat is a multiplayer online world where players can chat, flirt, have fun and express their desires without restrictions.
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
  }
};

let currentLang = "ru";

function switchLanguage() {
  currentLang = currentLang === "ru" ? "en" : "ru";
  const t = translations[currentLang];
  document.querySelector("h1").textContent = t.welcome;
  document.getElementById("joinBtn").textContent = t.join;
  document.getElementById("whatIs").textContent = t.welcome;
  document.getElementById("desc").innerHTML = t.description;
  document.getElementById("footerText").textContent = t.footer;

  const navItems = document.querySelectorAll(".nav-item");
  if (navItems.length >= 4) {
    navItems[0].textContent = currentLang === "ru" ? "Новости" : "News";
    navItems[1].textContent = t.account;
    navItems[2].textContent = t.rules;
    navItems[3].textContent = t.download;
  }
}
