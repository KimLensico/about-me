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
