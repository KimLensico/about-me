'use strict'

var correct = 0; 

// window.onload = function user() {
//     var call = (prompt('Please enter your name.'));
//         if (call.toUpperCase() == null || call == ""){
//             alert("You have cancelled the prompt.");
//         } else {
//         alert("Welcome " + call.toUpperCase()); 
//         document.getElementById("userName").innerHTML = call.toUpperCase(); 
//         } 
// }

function user() {
        var call = (prompt('Please enter your name.'));
            if (call == null || call == ""){
                document.getElementById("userName").innerHTML = "GUEST";
            } else {
            document.getElementById("userName").innerHTML = call.toUpperCase(); 
            } 
    }

/* var clickhandler = document.getElementById("first").onclick = function() {questionA()}; */
function questionA() {
    var qOne = prompt('Was I born in Washington?');
        if (qOne.toUpperCase() == "YES") { 
            alert("correct");
            correct++;
        } else {
            alert("incorrect");
            } 
    } 

function questionB() {
    var qTwo = prompt('Is my family from the states?');
    if (qTwo.toUpperCase() == "NO") {
        alert("correct");
        correct++;
    } else {
        alert("incorrect");
    }
}

function questionC() {
    var qThree = prompt('Am I a third generation American citizen?');
    if (qThree.toUpperCase() == "NO") {
        alert("correct");
        correct++;
    } else {
        alert("incorrect");
    }
} 

function questionD() {
    var qFour = prompt('Do I plan on living in SEATTLE in the future');
    if (qFour.toUpperCase() == "YES") {
        alert("correct");
        correct++;
    } else {
        alert("incorrect");
    }
}

function questionE() { 
    var qFive = prompt('Is the name of my dog Rosey?');
    if (qFive.toUpperCase() == "YES") {
        alert("correct");
        correct++;
    } else {
        alert("incorrect");
    }
}

// this is the number game;
function questionF() {

    var answ1 = 3; 
    for (var i = 0; i < 4; i++) {
        var qSix = parseInt(prompt('Whats my favorite number? (Between 1-9)'));
        if (qSix === answ1) {
            alert('Woah! How did you know??');
            correct++;
            break;
        } else if (qSix > answ1) {
            alert('Too high!');
        } else if (qSix < answ1) {
         alert('Nope too low.');
        } else {
            alert('Please enter a number!!')
        }
        if (i === 3) {
            alert('You have used up all 4 guesses!');

            alert('The answer is 3!');
        }
    }  
}
// what is my favorite icecream;
function questionG() {
    var ans = ['chocolate' , 'matcha' , 'strawberry'];

    for (var flavor = 0; flavor < 6; flavor++) {
       var iceCream = prompt("What are my favorite flavors of ice cream?");
       console.log (iceCream); 
       var success = 0;

       for (var i = 0; i < ans.length; i++) {
           if (iceCream.toLowerCase() === ans[i]) {
               correct++;
               success++;
               alert ('You earned a dollar menu sunday! 🍦');
               break;
           } 
       } 
        
       if (success === 0) {
           if (flavor === 5) {
               alert("ANSWER: The BEST ice cream flavors are: CHOCOLATE, MATCHA, & STRAWBERRY~! 🍦");
           } else {
               alert ('DUN DUN DUN NO SUNDAY FOR YOU!');
           } 
           } else {
               break;
           }
        }
    }

// template code: ashley moore || shes gr8 go ask her for help bc she's cool

// function born(){
//     var answers = ["new york" , "california" , "nevada"]; 
 
//     for (var guess = 0; guess < 6; guess++) {
//         var locate = prompt("Can you guess at least one state that I have lived in?");
//         console.log(locate);
//         var success = 0;

//         for (var i = 0; i < answers.length; i++) {
//             if (locate.toLowerCase() === answers[i]){
//                 correctAnswer++;
//                 success++;
//                 alert ("YES! You got it!");
//                 break;
//             } 
//         }
        
//         if (success === 0){
//             if (guess === 5){
//                 alert ("The correct answers are: new york, california, nevada!");
//             } else {
//                 alert ("Sorry, keep guessing!");
//             }
//         } else {
//             break;
//         }
//     }
// }

function master() {
    user();
    questionA();
    questionB();
    questionC();
    questionD();
    questionE();
    questionF();
    questionG(); 
    document.getElementById("myQuiz").innerHTML = ': ' + ' YOU SCORED A ' + Math.round((correct / 6) * 100) + '% ON THE QUIZ!';
}
