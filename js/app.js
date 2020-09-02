'use strict'

/* var clickhandler = document.getElementById("first").onclick = function() {questionA()}; */
function questionA() {
    var qOne = prompt('Where was I born?', 'Enter a location');
        if (qOne.toUpperCase() == "WASHINGTON") {
            alert("correct");
            document.getElementById("firstQuest").innerHTML = "Yes! I was born in " + qOne.toUpperCase();
        } else {
            alert("incorrect");
            document.getElementById("firstQuest").innerHTML = "I was born in WASHINGTON";
            } 
    } 

function questionB() {
    var qTwo = prompt('Where is my family originally from?', 'Enter a place');
    if (qTwo.toUpperCase() == "PHILIPPINES") {
        alert("correct");
        document.getElementById("secQuest").innerHTML = "Yes! I was born in " + qTwo;
    } else {
        alert("incorrect");
        document.getElementById("secQuest").innerHTML = "My family was originally from the PHILIPPINES";
    }
}

function questionC() {
    var qThree = prompt('I am a third generation American citizen.');
    if (qThree.toUpperCase() == "FALSE") {
        alert("correct");
        document.getElementById("thirdQuest").innerHTML = qThree + ": I am a first generation citizen";
    } else {
        alert("incorrect");
        document.getElementById("thirdQuest").innerHTML = "I am a FIRST generation citizen";
    }
} 

function questionD() {
    var qFour = prompt('Where do I plan on living in the future?');
    if (qFour.toUpperCase() == "SEATTLE") {
        alert("correct");
        document.getElementById("fourthQuest").innerHTML = "Right! I want to move to " + qFour.toUpperCase() + " one day and pursue a career in coding"; 
    } else {
        alert("incorrect");
        document.getElementById("fourthQuest").innerHTML = "I want to move to SEATTLE.";
    }
}

function questionE() { 
    var qFive = prompt('What is the name of my dog?');
    if (qFive.toUpperCase() == "ROSEY") {
        alert("correct");
        document.getElementById("fifthQuest").innerHTML = "Yes! The name of my <del>baby</del> <em> dog</em> name is " + qFive.toUpperCase() + "&hearts;";
    } else {
        alert("incorrect");
        document.getElementById("fifthQuest").innerHTML = "Her name is ROSEY";
    }
}

var call = (prompt('Please enter your name'));
alert("Welcome " + call.toUpperCase);