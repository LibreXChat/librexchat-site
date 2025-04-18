<?php
require_once 'firebase_config.php';

$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

if (!$email || !$password) {
    die("Заполните все поля.");
}

// Firebase эмуляция регистрации (в проде — через Firebase SDK/REST API)
echo "Письмо с подтверждением отправлено на ваш email (эмуляция).<br>";
echo "<a href='account.html'>Вернуться в личный кабинет</a>";
?>
