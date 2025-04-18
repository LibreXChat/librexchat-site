// account.js

// Перевод текста
function switchLanguage() {
  currentLang = currentLang === "ru" ? "en" : "ru";
  localStorage.setItem("lang", currentLang);
  applyTranslations();
}

function applyTranslations() {
  const translations = {
    ru: {
      nav_news: "Новости",
      nav_account: "Личный кабинет",
      nav_rules: "Правила",
      nav_download: "Скачать",
      account_title: "Личный кабинет",
      email_label: "Email",
      password_label: "Пароль",
      accept_terms: "Я подтверждаю, что ознакомлен(а) и принимаю условия Пользовательского соглашения и Политики конфиденциальности.",
      register_btn: "Зарегистрироваться",
      login_btn: "Войти",
      back_top: "← Назад на главную",
      back_bottom: "Назад на главную",
      footer: "© 2025 LibreXChat. Проект создан для всех без исключения."
    },
    en: {
      nav_news: "News",
      nav_account: "Account",
      nav_rules: "Rules",
      nav_download: "Download",
      account_title: "Account",
      email_label: "Email",
      password_label: "Password",
      accept_terms: "I confirm that I have read and accept the Terms of Service and Privacy Policy.",
      register_btn: "Register",
      login_btn: "Login",
      back_top: "← Back to main",
      back_bottom: "Back to main",
      footer: "© 2025 LibreXChat. A project created for everyone without exception."
    }
  };

  const currentLang = localStorage.getItem("lang") || "ru";
  const t = translations[currentLang];

  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (t[key]) el.textContent = t[key];
  });
  const footer = document.getElementById("footerText");
  if (footer) footer.textContent = t.footer;
}

// Обработка регистрации
window.addEventListener('DOMContentLoaded', () => {
  applyTranslations();

  const registerForm = document.getElementById('registerForm');
  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      await userCredential.user.sendEmailVerification();
      alert('Письмо с подтверждением отправлено на ваш Email.');
      registerForm.reset();
    } catch (error) {
      alert('Ошибка: ' + error.message);
    }
  });

  document.getElementById("acceptRules").addEventListener("change", function () {
    document.getElementById("registerBtn").disabled = !this.checked;
  });
});
