<?php
        require_once("db.php");


        $req = $dbh->prepare("SELECT * FROM album");
        $req->execute();

        $result = $req->fetchAll( PDO::FETCH_ASSOC );
        header('Content-Type: application/json');
        $json = json_encode($result);

        echo ($json);

        $dbh = null;
?>
