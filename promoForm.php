<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$oMysqli = new mysqli("localhost", "root", "", "tingle");
if (($link = $oMysqli->connect_errno)) {
    echo "Echec lors de la connexion à MySQL : (" . $oMysqli->connect_errno . ") " . $oMysqli->connect_error;
}

$count = 0;
$description = "";
foreach ($_POST as $current)
{
	if ($count == 0)
		$description = $current;
	$count = $count + 1;
}

$sEscaped = "INSERT INTO `tingles`(`id`, `iduser`, `longitude`, `latitude`, `type`, `force`, `time`, `description`) VALUES (0,0,0,0,504,0,NOW(),'" . $description . "');";
$oMysqli->query($sEscaped);
echo $sEscaped;
