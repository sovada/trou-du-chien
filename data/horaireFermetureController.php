<?php
    $data = json_decode(file_get_contents("php://input"));

    $db_name  = 'trou-des-chiens-angular';
    $hostname = 'localhost';
    $username = 'root';
    $password = 'root';

    $dbh = new PDO("mysql:host=$hostname;dbname=$db_name", $username, $password);
    $dbh->exec('SET NAMES utf8');

    $req = $dbh->prepare("UPDATE horaire SET fermeture=:horaire WHERE jour=:jour");
    $req->execute(array(
        "horaire"   => $data->horaire,
        "jour"        => $data->jour
        ));

    $dbh = null;
?>
