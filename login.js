// login.js

document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    const user = userCredential.user;

    if (user.emailVerified) {
      alert('Добро пожаловать в LibreXChat!');
      window.location.href = 'profile.html'; // Перенаправление в профиль
    } else {
      alert('Пожалуйста, подтвердите свою почту перед входом.');
      await auth.signOut(); // Выход из аккаунта
    }
  } catch (error) {
    alert('Ошибка входа: ' + error.message);
  }
});
