<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$oMysqli = new mysqli("rs.alpha14.com", "root", "pvdnklbB", "tingle");
//$oMysqli = new mysqli("localhost", "root", "", "tingle");
if (($link = $oMysqli->connect_errno)) {
    echo "Echec lors de la connexion à MySQL : (" . $oMysqli->connect_errno . ") " . $oMysqli->connect_error;
}