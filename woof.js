'use strict'


function askUserName(){
    var internalUserName = prompt('What is your name?');
    document.write('<h2>' + 'Welcome '+ internalUserName + '</h2>');
    '<h2>Welcome Roger</h2>'
    return internalUserName;
}

function confirmContinue(userName){
    confirm(userName + " Let's check to see if my web page is for you");
}

function lightSide(){
    var lightSide;
    lightSide = prompt('Are you comeone who is uncomfortable with hard work?');
    return lightSide
}

function checkLight(lightSideQuestion){
    if(lightSideQuestion === 'yes'){
        alert('I am sorry to hear.  Please never ever get a puppy!')
    } else {
        alert('GOOD to know you understand the commitment involved!');
    }
}

function adopt(lightSideQuestion){
    if(lightSideQuestion === 'no'){
        var adopt = prompt('Are you ready to start looking at puppies?');

        if(adopt === 'yes'){
            alert('Great. One of your local shelters will be with you shortly');
        } else if(adopt === 'no'){
            alert('That is ok.  Feel free to browse through our info and return any time that you are readyk side energies.');
        } else {
            alert('Is your keyboard not working?  We really need a simple "yes" or "no" to continue');
        }
    }
}

var externalUserName = askUserName(); // value of internalUserName not the variable name
confirmContinue(externalUserName);  // this is passing an argument
var lightSideQuestion = lightSide();
checkLight(lightSideQuestion);
adopt(lightSideQuestion);