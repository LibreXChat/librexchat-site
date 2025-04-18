// Инициализация Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBhmuX9aWec4NjxiSZ1FmqBr7LvioyK1rk",
  authDomain: "librexchat-dba06.firebaseapp.com",
  projectId: "librexchat-dba06",
  storageBucket: "librexchat-dba06.appspot.com",
  messagingSenderId: "48021503169",
  appId: "1:48021503169:web:fb694c3b1e3416461ae840",
  measurementId: "G-9K5QGCT108"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Показ уведомлений
function showMessage(message, loading = false) {
  const infoDiv = document.getElementById('infoBox');
  if (!infoDiv) return alert(message);

  infoDiv.innerHTML = loading ? `
    <div class="flex items-center space-x-2">
      <svg class="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
      </svg>
      <span>${message}</span>
    </div>
  ` : `<span>${message}</span>`;

  infoDiv.style.opacity = 1;

  if (!loading) {
    setTimeout(() => {
      infoDiv.style.opacity = 0;
    }, 4000);
  }
}

// Смена Email
async function changeEmail() {
  const newEmail = prompt("Введите новый Email:");
  if (!newEmail) {
    showMessage("Отмена смены email.");
    return;
  }

  try {
    const user = auth.currentUser;
    if (!user) {
      showMessage("Пользователь не авторизован.");
      return;
    }

    showMessage("Отправляем письмо подтверждения...", true);

    await auth.sendSignInLinkToEmail(newEmail, {
      url: window.location.href,
      handleCodeInApp: true
    });

    window.localStorage.setItem('newEmailForUpdate', newEmail);
    showMessage(`Письмо отправлено на ${newEmail}. Проверьте почту!`);
  } catch (error) {
    console.error(error);
    showMessage("Ошибка при отправке письма: " + error.message);
  }
}

// Проверка подтверждения Email
async function checkEmailLink() {
  if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
    let newEmail = window.localStorage.getItem('newEmailForUpdate') || prompt('Введите новый Email для подтверждения:');

    try {
      showMessage("Подтверждение нового Email...", true);

      const userCredential = await auth.signInWithEmailLink(newEmail, window.location.href);
      const user = userCredential.user;
      await user.updateEmail(newEmail);

      window.localStorage.removeItem('newEmailForUpdate');
      showMessage("Email успешно изменён!");
    } catch (error) {
      console.error(error);
      showMessage("Ошибка подтверждения email: " + error.message);
    }
  }
}

// Смена пароля
async function changePassword() {
  const newPassword = prompt("Введите новый пароль:");
  if (!newPassword) {
    showMessage("Отмена смены пароля.");
    return;
  }

  try {
    const user = auth.currentUser;
    if (!user) {
      showMessage("Пользователь не авторизован.");
      return;
    }

    showMessage("Изменение пароля...", true);
    await user.updatePassword(newPassword);

    showMessage("Пароль успешно изменён!");
  } catch (error) {
    console.error(error);
    showMessage("Ошибка смены пароля: " + error.message);
  }
}

// Восстановление пароля
async function recoverPassword() {
  const email = prompt("Введите ваш Email для восстановления:");
  if (!email) {
    showMessage("Отмена восстановления.");
    return;
  }

  try {
    showMessage("Отправляем письмо для восстановления...", true);
    await auth.sendPasswordResetEmail(email);

    showMessage(`Письмо отправлено на ${email}. Проверьте почту!`);
  } catch (error) {
    console.error(error);
    showMessage("Ошибка восстановления пароля: " + error.message);
  }
}

// Выход
function logout() {
  auth.signOut().then(() => {
    window.location.href = "index.html";
  }).catch((error) => {
    console.error(error);
    showMessage("Ошибка выхода: " + error.message);
  });
}

// Загрузка профиля
auth.onAuthStateChanged((user) => {
  if (user) {
    document.getElementById('profileEmail').innerText = user.email || "Не указано";
    document.getElementById('profileRegDate').innerText = new Date(user.metadata.creationTime).toLocaleDateString();
  } else {
    document.getElementById('profileEmail').innerText = "Пользователь не авторизован.";
  }
});

// Проверка ссылки на странице
window.onload = () => {
  checkEmailLink();
};
