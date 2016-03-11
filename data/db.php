<?php
$db_name  = 'trou-des-chiens-angular';
$hostname = 'localhost';
$username = 'root';
$password = 'root';

$dbh = new PDO("mysql:host=$hostname;dbname=$db_name", $username, $password);
$dbh->exec('SET NAMES utf8');
 ?>
