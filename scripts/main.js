var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/raven.jpg') {
    myImage.setAttribute ('src','images/raven2.jpg');
  } else {
    myImage.setAttribute ('src','images/raven.jpg');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your username.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'The Uncrowned welcomes you, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'The Uncrowned welcomes you, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
