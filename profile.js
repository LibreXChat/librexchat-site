// profile.js

// Firebase подключение уже есть в profile.html, здесь только логика

document.addEventListener('DOMContentLoaded', () => {
  const changeEmailBtn = document.getElementById('changeEmailBtn');
  const changePasswordBtn = document.getElementById('changePasswordBtn');
  const recoveryBtn = document.getElementById('recoveryBtn');

  // Функция показа уведомления
  function showNotification(message, color = "#00f0ff") {
    const box = document.getElementById('infoBox');
    box.textContent = message;
    box.style.backgroundColor = color;
    box.style.opacity = "1";
    setTimeout(() => {
      box.style.opacity = "0";
    }, 3000);
  }

  // Смена Email
  changeEmailBtn.addEventListener('click', async () => {
    const newEmail = prompt("Введите новый Email:");
    if (newEmail) {
      try {
        await auth.currentUser.updateEmail(newEmail);
        await auth.currentUser.sendEmailVerification();
        showNotification("Email успешно изменён! Подтвердите новый адрес.", "#00ff9d");
        document.getElementById('email').textContent = newEmail;
      } catch (error) {
        showNotification("Ошибка: " + error.message, "#e53935");
      }
    }
  });

  // Смена Пароля
  changePasswordBtn.addEventListener('click', async () => {
    const newPassword = prompt("Введите новый пароль:");
    if (newPassword) {
      try {
        await auth.currentUser.updatePassword(newPassword);
        showNotification("Пароль успешно изменён!", "#00ff9d");
      } catch (error) {
        showNotification("Ошибка: " + error.message, "#e53935");
      }
    }
  });

  // Восстановление аккаунта (отправка письма на восстановление)
  recoveryBtn.addEventListener('click', async () => {
    const email = auth.currentUser.email;
    try {
      await auth.sendPasswordResetEmail(email);
      showNotification("Письмо для восстановления отправлено!", "#00ff9d");
    } catch (error) {
      showNotification("Ошибка: " + error.message, "#e53935");
    }
  });
});
