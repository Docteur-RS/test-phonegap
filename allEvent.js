/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

URL_SERVER = 'http://localhost:8000/';

var nQueue = document.getElementById("QueueIcone");
nQueue.addEventListener("click", function () {
    location.replace("#pageQueue");
});

var nFlash = document.getElementById("promoIcone");
nFlash.addEventListener("click", function () {
    location.replace("#pagePromo");
});

var nNoter = document.getElementById("NoterIcone");
nNoter.addEventListener("click", function () {
    location.replace("#pageNoter");
});

var nParam = document.getElementById("paramIcone");
nParam.addEventListener("click", function () {
    location.replace("#pageParameter");
});

var nMapError = document.getElementById("mapErrorIcone");
nMapError.addEventListener("click", function () {
    location.replace("#pageMapError");
});

var nPhoto = document.getElementById("photoIcone");
nPhoto.addEventListener("click", function () {
    alert("lol");
//    sendData(preFormData, 'http://localhost:8000/deleteEntries.php');
});

var nClosed = document.getElementById("closedIcone");
nClosed.addEventListener("click", function () {
    alert("lol");
//    sendData(preFormData, 'http://localhost:8000/deleteEntries.php');
});


/*Recupere la valeur des inputs et les ajoutes au tampons pour les envoyer pour finir au serveur*/
var nPqf = document.getElementById("pageQueueForm");
nPqf.addEventListener("click", function () {
    var lol = document.getElementsByClassName("inputPageQueue");
    for (i = 0; i < lol.length; i++) {
        if (i === 0)
            var iSliderValue = lol[i].value;
        else if (i === 1)
            var sTextValue = lol[i].value;
    }
    if (i !== 2)
    {
        console.log("error = " + i);
    }
    var preFormData = [];
    preFormData.push(iSliderValue);
    preFormData.push(sTextValue);
    console.log("preFormData = " + preFormData);
    sendData(preFormData, URL_SERVER + "queueForm.php");
});

/*Récupere l'input text de la page promo*/
var nPpf = document.getElementById("pagePromoForm");
nPpf.addEventListener("click", function () {
    var lol = document.getElementById("inputPagePromo");
    var sTextValue = lol.value;
    var preFormData = [];
    preFormData.push(sTextValue);
    console.log("preFormData = " + preFormData);
    sendData(preFormData, URL_SERVER + "queueForm.php");//changer fichier php
});






