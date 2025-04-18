<?php
$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

if ($email && $password) {
    echo "Вход выполнен (эмуляция). Добро пожаловать, $email!";
} else {
    echo "Ошибка входа: неверный email или пароль.";
}
?>
