/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$.support.cors = true;
$.mobile.allowCrossDomainPages = true;

//URL_SERVER = 'http://localhost:8000/';
URL_SERVER = 'http://rs.alpha14.com/tingle/';
LAST_RESPONSE = "";

$(document).on("pagecreate", "#pageMain", function () {
    $(".swipeRight").on("swiperight", function () {
        $("#myPanel").panel("open");
    });
});

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
    preFormDataFilter = [];
    location.replace("#pageMapError");
});

var nPhoto = document.getElementById("photoIcone");
nPhoto.addEventListener("click", function () {
    alert("Sorry, this option is not availble on your device.");
});

var nClosed = document.getElementById("closedIcone");
nClosed.addEventListener("click", function () {
    alert("lol");
});

var nReturn = document.getElementsByClassName("goHome");
for (i = 0; i < nReturn.length; i++) {
    nReturn[i].addEventListener("click", function () {
        location.replace("#pageMain");
    });
}

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
    preFormData.push(personPos[0]);
    preFormData.push(personPos[1]);
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
    preFormData.push(personPos[0]);
    preFormData.push(personPos[1]);
    console.log("preFormData = " + preFormData);
    sendData(preFormData, URL_SERVER + "promoForm.php");
});

/*Tout le basard pas propre pour le filter*/
var filter0 = document.getElementById("filterError0");
var filter1 = document.getElementById("filterError1");
var filter2 = document.getElementById("filterError2");
var filter3 = document.getElementById("filterError3");
var filter4 = document.getElementById("filterError4");

filter0.addEventListener("click", function () {
    var sTextValue = filter0.innerHTML;
    var preFormDataFilter = [];
    preFormDataFilter.push(sTextValue);
    preFormDataFilter.push(personPos[0]);
    preFormDataFilter.push(personPos[1]);
    console.log("preFormDataFilter = " + preFormDataFilter);
    sendData(preFormDataFilter, URL_SERVER + "errorForm.php");
});
filter1.addEventListener("click", function () {
    var sTextValue = filter1.innerHTML;
    var preFormDataFilter = [];
    preFormDataFilter.push(sTextValue);
    preFormDataFilter.push(personPos[0]);
    preFormDataFilter.push(personPos[1]);
    console.log("preFormDataFilter = " + preFormDataFilter);
    sendData(preFormDataFilter, URL_SERVER + "errorForm.php");
});
filter2.addEventListener("click", function () {
    var sTextValue = filter2.innerHTML;
    var preFormDataFilter = [];
    preFormDataFilter.push(sTextValue);
    preFormDataFilter.push(personPos[0]);
    preFormDataFilter.push(personPos[1]);
    console.log("preFormDataFilter = " + preFormDataFilter);
    sendData(preFormDataFilter, URL_SERVER + "errorForm.php");
});
filter3.addEventListener("click", function () {
    var sTextValue = filter3.innerHTML;
    var preFormDataFilter = [];
    preFormDataFilter.push(sTextValue);
    preFormDataFilter.push(personPos[0]);
    preFormDataFilter.push(personPos[1]);
    console.log("preFormDataFilter = " + preFormDataFilter);
    sendData(preFormDataFilter, URL_SERVER + "errorForm.php");
});
filter4.addEventListener("click", function () {
    var sTextValue = filter4.innerHTML;
    var preFormDataFilter = [];
    preFormDataFilter.push(sTextValue);
    preFormDataFilter.push(personPos[0]);
    preFormDataFilter.push(personPos[1]);
    console.log("preFormDataFilter = " + preFormDataFilter);
    sendData(preFormDataFilter, URL_SERVER + "errorForm.php");
});

var nFpn = document.getElementById("FormPageNoter");
nFpn.addEventListener("click", function () {
    var lol = document.getElementById("inputTextNoter");
    var sTextValue = lol.value;
    var preFormData = [];
    preFormData.push(sTextValue);
    preFormData.push(personPos[0]);
    preFormData.push(personPos[1]);
    console.log("preFormData = " + preFormData);
    sendData(preFormData, URL_SERVER + "noteForm.php");
});


function sendData(data, path) {
    var XHR = new XMLHttpRequest();
    var FD = new FormData();

    function ajaxSuccess() {
        if (this.responseText !== "")
            LAST_RESPONSE = JSON.parse(this.responseText);
        console.log(LAST_RESPONSE);
    }

    XHR.onload = ajaxSuccess;

    // We push our data into our FormData object
    for (name in data) {
        FD.append(name, data[name]);
    }

    // We define what will happen if the data are successfully sent
    XHR.addEventListener('load', function (event) {
//        alert('Yeah! Data sent and response loaded.');
    });

    // We define what will happen in case of error
    XHR.addEventListener('error', function (event) {
        alert('Oups! Something goes wrong.');
    });

    // We setup our request
    XHR.open('POST', path);


    // We just send our FormData object, HTTP headers are set automatically
    XHR.send(FD);
}



