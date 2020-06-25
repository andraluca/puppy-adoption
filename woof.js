'use strict'


function askUserName(){
    var internalUserName = prompt('what is your name?');
    document.write('<h2>' + 'welcome '+ internalUserName + '</h2>');
    '<h2>welcome Andra</h2>'
    return internalUserName;
}

function confirmContinue(userName){
    confirm(userName + '-' + "let's check to see if my web page is for you");
}

function hardWork(){
    var hardWork;
    hardWork = prompt('Are you someone who despises hard work?');
    return hardWork
}

function checkAnswer(HardWorkQuestion){
    if(HardWorkQuestion === 'yes'){
        alert('I am sorry to hear.  Please never ever get a puppy!')
    } else {
        alert('Happy to know you understand the commitment involved!');
    }
}

function adopt(lightSideQuestion){
    if(lightSideQuestion === 'no'){
        var adopt = prompt('Are you ready to start looking at puppies?');

        if(adopt === 'yes'){
            alert('Great. A local shelters rep will be with you shortly');
        } else if(adopt === 'no'){
            alert('That is ok.  Feel free to browse through our info and return any time.');
        } else {
            alert('Is your keyboard not working?  We really need a simple "yes" or "no" to continue');
        }
    }
}

var externalUserName = askUserName();
confirmContinue(externalUserName);
var lightSideQuestion = lightSide();
checkAnswer(HardWorkQuestion);
adopt(HardWorkQuestion);