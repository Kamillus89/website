"use strict"

var userNameInput = document.getElementById("userName");
var userMailInput = document.getElementById("mail");

window.onload = function () {
  document.getElementById("userName").addEventListener("change", checkName);
  document.getElementById("mail").addEventListener("change", checkMail);
}

function checkName() {
  var regex = /^[A-Za-z]{2,20}$/;

  // let condValue = String(userNameInput).match(regex); // alternative way to check regex
  let regexCheck = regex.test(userNameInput.value);
  console.log(userNameInput.value);
  
  var p = document.createElement("P");
  p.textContent = "";
  p.setAttribute('id','comment');
  field.appendChild(p);

  if (!regexCheck) {
    document.getElementById("comment").innerHTML = "Invalid name, try again!";
    return false;

  } else if (regexCheck) {
    document.getElementById("comment").innerHTML = "Name: verified \u2713";
    return true;
  }
}

function checkMail() {
  var mailRegex = new RegExp('^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$', 'i');

  let checkmailRegex = mailRegex.test(userMailInput.value);
  console.log.apply(userMailInput.value);

  var p = document.createElement("P");
  p.textContent = "";
  p.setAttribute('id','mail-note');
  field.appendChild(p);

  if (!checkmailRegex){
    document.getElementById("mail-note").innerHTML = "Invalid email adress, try again!";
    return false;
  } else if (checkmailRegex){
    document.getElementById("mail-note").innerHTML = "Email: verified \u2713";
    return true;
  }

}
