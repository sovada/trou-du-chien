<?php
    $data = json_decode(file_get_contents("php://input"));

    $db_name  = 'trou-des-chiens-angular';
    $hostname = 'localhost';
    $username = 'root';
    $password = 'root';

    $dbh = new PDO("mysql:host=$hostname;dbname=$db_name", $username, $password);
    $dbh->exec('SET NAMES utf8');

    $req = $dbh->prepare("UPDATE event SET content=:content WHERE id=:id");
    $req->execute(array(
        "content" => $data->content,
        "id" => $data->id
        ));

    $dbh = null;
?>
