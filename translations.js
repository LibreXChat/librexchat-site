export function loadTranslations(lang) {
  const translations = {
    ru: {
      title: "LibreXChat — честная игра для всех",
      join: "Присоединиться",
      whatIs: "Что такое LibreXChat?",
      description: \`LibreXChat — это многопользовательский онлайн-мир...\`,
      footer: "© 2025 LibreXChat. Проект создан для всех без исключения.",
      rules: "Правила",
      back: "Назад на главную",
      nav: ["Новости", "Личный кабинет", "Правила", "Скачать"],
      ruleItems: [
        "Нельзя изменять файлы игры...",
        "Запрещена тематика войны...",
        "Запрещены оскорбления...",
        "Оскорбление администрации...",
        "Требования модераторов обязательны..."
      ]
    }
  };
  return translations[lang];
}