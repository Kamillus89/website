"use strict"

var userInput = document.getElementById("userName");

window.onload = function () {
  document.getElementById("userName").addEventListener("change", checkName);
}

function checkName() {
  var regex = /^[A-Za-z]{2,20}$/;

  // let condValue = String(userInput).match(regex); // alternative way to check regex
  let regexCheck = regex.test(userInput.value);
  console.log(userInput.value);
  debugger;

  if (!regexCheck) {
    debugger;
    var comment = document.createElement("P");
    var commentText = document.createTextNode("Invalid name, try again!");
    comment.appendChild(commentText);
    document.body.appendChild(comment);

    alert("Wrong name!")
    return false;
  }
}
