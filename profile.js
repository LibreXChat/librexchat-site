// Импортируем настройки Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBhmuX9aWec4NjxiSZ1FmqBr7LvioyK1rk",
  authDomain: "librexchat-dba06.firebaseapp.com",
  projectId: "librexchat-dba06",
  storageBucket: "librexchat-dba06.appspot.com",
  messagingSenderId: "48021503169",
  appId: "1:48021503169:web:fb694c3b1e3416461ae840"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Проверка авторизации пользователя
onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById("user-email").textContent = user.email;
    document.getElementById("registration-date").textContent = new Date(user.metadata.creationTime).toLocaleDateString();
    // Можем дописать загрузку счёта, персонажей и т.п. позже
  } else {
    // Если не авторизован — перекидываем обратно на вход
    window.location.href = "account.html";
  }
});
