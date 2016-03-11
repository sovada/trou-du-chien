<?php
    $data = json_decode(file_get_contents("php://input"));

    $db_name  = 'trou-des-chiens-angular';
    $hostname = 'localhost';
    $username = 'root';
    $password = 'root';

    $dbh = new PDO("mysql:host=$hostname;dbname=$db_name", $username, $password);
    $dbh->exec('SET NAMES utf8');

    $req = $dbh->prepare("UPDATE section SET contenu=:contenu WHERE id=1");
    $req->execute(array(
        "contenu" => $data->contenu,
        ));

    $dbh = null;
?>
