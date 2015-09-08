/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function sendData(data, path) {
  var XHR = new XMLHttpRequest();
  var FD  = new FormData();
  
//  console.log("data = ");
//  console.log(data)

  // We push our data into our FormData object
  for(name in data) {
    FD.append(name, data[name]);
  }

  // We define what will happen if the data are successfully sent
  XHR.addEventListener('load', function(event) {
    alert('Yeah! Data sent and response loaded.');
  });

  // We define what will happen in case of error
  XHR.addEventListener('error', function(event) {
    alert('Oups! Something goes wrong.');
  });

  // We setup our request
  XHR.open('POST', path);

  // We just send our FormData object, HTTP headers are set automatically
  XHR.send(FD);
//  return (False)//cancel form action
}