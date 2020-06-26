'use strict'
// in the process of changing function names i was getting to one place or another that broke the code.
//i decided to leave it as is, just adapted the prompt messages - until i can get to a place where i understand the code.

var ableToAdopt = false;

function askUserName(){
    var internalUserName = prompt('what is your name?');
    document.write('<h2>' + 'welcome '+ internalUserName + '</h2>');
    '<h2>Welcome andra</h2>'
    return internalUserName;
}

function confirmContinue(userName){
    confirm(userName + " we will jump right in and see if a puppy is the right choice for you");
}

function lightSide(){
    var lightSide;
    lightSide = prompt('are you a human who is pretty lazy by nature? (yes or no)');
    while(lightSide.toLowerCase() != 'yes' && lightSide != 'no'){
        lightSide = prompt('are you a human who is pretty lazy by nature? (yes or no)');
    }
    return lightSide
}

function checkLight(lightSideQuestion){
    if(lightSideQuestion === 'yes'){
        alert('please do not think for a second that you are the right fit for any of our dogs, dogs are a lot of work!')
        ableToAdopt = false;
    } else {
        alert('good to hear, puppies are a lot of work which we are sure you will find rewarding!');
        ableToAdopt = true;
    }
}

function forceTest(){
    var answer = 3;
    for(var i = 0; i < 10; i = i + 1){
        var userAnswer = prompt("please guess how many times a puppy may go potty inside your home in one day");
        if(parseInt(userAnswer) ===  answer){
            alert('excellent guess!')
            ableToAdopt = true;
            break;
        } else{
            alert("wrong answer.  try again")
        }
    }
    if(i > 9){
        ableToAdopt = false;
    }
}


function adopt(lightSideQuestion){
    if(ableToAdopt === true){
        var adopt = prompt('are you ready to adopt one of our puppies who need a forever home?');

        if(adopt === 'yes'){
            alert('yay. an adoption specialist will be with you faster than you can say woof');
        } else if(adopt === 'no'){
            alert('it is great that you are honest, better ready than rushed. come back when you are ready.');
        } else {
            alert('a simple "yes" or "no" is not that hard');
        }
    }
}



confirmContinue(askUserName());
var lightSideQuestion = lightSide();
checkLight(lightSideQuestion);
forceTest();
adopt(lightSideQuestion);