<?php

        $db_name  = 'trou-des-chiens-angular';
        $hostname = 'localhost';
        $username = 'root';
        $password = 'root';

        $dbh = new PDO("mysql:host=$hostname;dbname=$db_name", $username, $password);
        $dbh->exec('SET NAMES utf8');


        $req = $dbh->prepare("SELECT * FROM horaire");
        $req->execute();

        $result = $req->fetchAll( PDO::FETCH_ASSOC );
        header('Content-Type: application/json');
        $json = json_encode($result);

        echo ($json);

        $dbh = null;
?>
