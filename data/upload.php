<?php
// Dans les versions de PHP antiéreures à 4.1.0, la variable $HTTP_POST_FILES
// doit être utilisée à la place de la variable $_FILES.

$uploaddir = '../img/';
$uploadfile = $uploaddir . basename($_FILES['userfile']['name']);
if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {

           $db_name  = 'trou-des-chiens-angular';
           $hostname = 'localhost';
           $username = 'root';
           $password = 'root';

           $dbh = new PDO("mysql:host=$hostname;dbname=$db_name", $username, $password);
           $dbh->exec('SET NAMES utf8');

           $req = $dbh->prepare("INSERT INTO photo (titre, chemin, FK_album) VALUES (:name, :chemin, :FK_album)");
           $req->execute(array(
               "name"     => $_FILES['userfile']['name'],
               "chemin"   => $_FILES['userfile']['name'],
               "FK_album" => $_POST["FK_album"]
               ));

           $dbh = null;
} else {

}

header('Location: ../views/galerie.html');

?>
