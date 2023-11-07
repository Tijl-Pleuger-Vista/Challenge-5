<?php

    require_once("dbConnection.inc.php");

    $sql = "SELECT * FROM tb_pokemon";

    $result =  getdata( $sql);

    foreach($result as $key=>$row) {
        print $row['name'];
        print $row['type'];
        print "<br />";
    }