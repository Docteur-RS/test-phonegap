<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

require('mysqlConnect.php');

$count = 0;
$description = "";
$force = 0;
foreach ($_POST as $current)
{
	if ($count == 0)
		$force = $current;
	else if ($count == 1)
		$description = $current;
	$count = $count + 1;
}

$sEscaped = "INSERT INTO `tingles`(`id`, `iduser`, `longitude`, `latitude`, `type`, `force`, `time`, `description`) VALUES (0,0,0,0,503," . $force . ",NOW(),'" . $description . "');";
$oMysqli->query($sEscaped);
echo $sEscaped;
