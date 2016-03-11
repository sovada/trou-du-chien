<?php
    $cookies_name = "admin";
    $cookies_values = "true";
    setcookie ($cookies_name, $cookies_values, time()+2678400, '/');

    header('Location: ../index.html');
 ?>
