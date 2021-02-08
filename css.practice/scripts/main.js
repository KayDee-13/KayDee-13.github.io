let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/aussie.png') {
      myImage.setAttribute('src','images/aussie2.png');
    } else {
      myImage.setAttribute('src','images/aussie.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Australian Sheperd Breed Info, Welcome ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Australian Sheperd Breed Info, Welcome ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  } 
  