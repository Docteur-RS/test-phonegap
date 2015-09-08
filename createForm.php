<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

require('mysqlConnect.php');

$count = 0;
$firstname = "";
$lastname = "";
$nameseparator = " ";
$birthday = "";
$login = "";
$password1 = "";
$password2 = "";
$force = 0;
foreach ($_POST as $current)
{
	if ($count == 0)
		$firstname = $current;
	else if ($count == 1)
		$lastname = $current;
	else if ($count == 2)
		$birthday = $current;
	else if ($count == 3)
		$login = $current;
	else if ($count == 4)
		$password1 = $current;
	else if ($count == 5)
		$password2 = $current;
	$count = $count + 1;
}

$sEscaped = "INSERT INTO `users`(`id`, `login`, `password`, `islock`, `reason`, `name`, `birthday`, `inscriptiontime`) VALUES (0,'" . $login . "','" . $password1 . "',false,NULL,'" . $firstname . $nameseparator . $lastname . "','" . $birthday . "',NOW());";
$oMysqli->query($sEscaped);
echo $sEscaped;