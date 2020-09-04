'use strict'

window.onload = function user() {
    var call = (prompt('Please enter your name.'));
        if (call.toUpperCase() == null || call == ""){
            alert("You have cancelled the prompt.");
        } else {
        alert("Welcome " + call.toUpperCase()); 
        document.getElementById("userName").innerHTML = call.toUpperCase(); 
        } 
}


/* var clickhandler = document.getElementById("first").onclick = function() {questionA()}; */
function questionA() {
    var qOne = prompt('Was I born in Washington?');
        if (qOne.toUpperCase() == "YES") {
            alert("correct");
            document.getElementById("firstQuest").innerHTML = qOne.toUpperCase() + "! I was born in Washington.";
        } else {
            alert("incorrect");
            document.getElementById("firstQuest").innerHTML = "INCORRECT: I was born in WASHINGTON";
            } 
    } 

function questionB() {
    var qTwo = prompt('Is my family from the states?');
    if (qTwo.toUpperCase() == "NO") {
        alert("correct");
        document.getElementById("secQuest").innerHTML = qTwo + ", you're correct! My family originated from the PHILIPPINES";
    } else {
        alert("incorrect");
        document.getElementById("secQuest").innerHTML = "INCORRECT: My family was originally from the PHILIPPINES";
    }
}

function questionC() {
    var qThree = prompt('Am I a third generation American citizen?');
    if (qThree.toUpperCase() == "NO") {
        alert("correct");
        document.getElementById("thirdQuest").innerHTML = qThree + ": I am a first generation citizen (correct!)";
    } else {
        alert("incorrect");
        document.getElementById("thirdQuest").innerHTML = "INCORRECT: I am a FIRST generation citizen";
    }
} 

function questionD() {
    var qFour = prompt('Do I plan on living in SEATTLE in the future');
    if (qFour.toUpperCase() == "YES") {
        alert("correct");
        document.getElementById("fourthQuest").innerHTML = qFour.toUpperCase() + "! I want to move to SEATTLE in the future and pursue a career in coding"; 
    } else {
        alert("incorrect");
        document.getElementById("fourthQuest").innerHTML = "INCORRECT: I want to move to SEATTLE.";
    }
}

function questionE() { 
    var qFive = prompt('Is the name of my dog Rosey?');
    if (qFive.toUpperCase() == "YES") {
        alert("correct");
        document.getElementById("fifthQuest").innerHTML =  qFive.toUpperCase() + "! The name of my <del>baby</del> <em> dog</em> IS Rosey" + "&hearts;";
    } else {
        alert("incorrect");
        document.getElementById("fifthQuest").innerHTML = "INCORRECT: Her name is ROSEY";
    }
}

// this is the number game;
function questionF() {
    var answ1 = 3; 
    for (var i = 0; i < 4; i++) {
        var qSix = parseInt(prompt('Whats my favorite number? (Between 1-9)'));
        if (qSix === answ1) {
            alert('Woah! How did you know??');
            break;
        } else if (qSix > answ1) {
            alert('Too high!');
            document.getElementById("sixthQuest").innerHTML = "INCORRECT: Her name is ROSEY";
        } else if (qSix < answ1) {
         alert('Nope too low.');
        } if (i === 4) {
            alert('You have used up all 4 guesses!');
            alert('The answer is 3!');
            document.getElementById("sixthQuest").innerHTML = "INCORRECT: Her name is ROSEY";
        }
    }  
}
// what is my favorite icecream;
function questionG() {
    var ans = ["chocolate" , "vanilla" , "strawberry"];

    for (var flavor = 0; flavor < 6; flavor++) {
       var guess = prompt("What are my favorite flavors of ice cream?");
       console.log (guess);
       for (var ans = 0; ans < flavor.length; j++) {
           console.log(flavor);
       if (guess === 5 && flavor[ans2]) {
    }
       }
}
}
 user();
 questionA();
 questionB();
 questionC();
 questionD();
 questionE();
 questionF();
 questionG();

// question seven goes here but i don't know where to start since we can't start with a function
