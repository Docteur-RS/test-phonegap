<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

require('mysqlConnect.php');

$sEscaped = "select id from `users` where login = '" . $_POST["login"] . "' and password = '" . $_POST["password"] . "';";
$queryRes = $oMysqli->query($sEscaped);
$idMember = $queryRes->fetch_row()[0];
echo $idMember;
if ($idMember == "")
{
    echo "invalid login !";
    die();
}
else if ($idMember == "1")
{
    header('Location: main.html');
}