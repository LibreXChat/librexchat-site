// login.js

// Ждём загрузку страницы
window.addEventListener('DOMContentLoaded', () => {

  const loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      
      if (userCredential.user.emailVerified) {
        alert('Успешный вход! Добро пожаловать!');
        window.location.href = 'profile.html'; // Переход в личный кабинет
      } else {
        alert('Пожалуйста, подтвердите вашу почту перед входом.');
        await auth.signOut();
      }
    } catch (error) {
      alert('Ошибка входа: ' + error.message);
    }
  });
});

// Переключение языка (если нужно)
function switchLanguage() {
  alert('Переключение языка пока в разработке');
}
