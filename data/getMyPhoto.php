<?php
        $data = json_decode(file_get_contents("php://input"));

        require_once("db.php");

        $dbh->exec('SET NAMES utf8');


        $req = $dbh->prepare("SELECT * FROM photo WHERE FK_album = :id");
        $req->execute(array (
            'id' => $data->id
        ));

        $result = $req->fetchAll( PDO::FETCH_ASSOC );
        header('Content-Type: application/json');
        $json = json_encode($result);

        echo ($json);

        $dbh = null;
?>
