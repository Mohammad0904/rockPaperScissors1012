
//This function stores the name of the first player in PVP mode.
function player1() {
    var name1 = prompt("Please enter your name: ");
    return name1;
}

//This function stores the name of the second player in PVP mode.
function player2() {
    name2 = prompt("Please enter your name: ");
}

//This function stores the name of the player in PVC mode.
function player3() {
    name3 = prompt("Please enter your name: ")
}

//This function alerts the players regarding the rules of the game.
function rules() {
    alert("Rules: \n \n Rock beats scissors but loses to paper. \n \n Scissors beat paper but lose to rock. \n \n Paper beats rock but loses to scissors. \n \n There will be three rounds. \n \n Whoever wins 2 rounds wins the game. \n \n BEST OF LUCK!!!");
    document.getElementById("begin").style.display = "inline";
    document.getElementById("wht").style.display = "inline";
}

function randomSign() {
    var options = ["r", "p", "s"];
    var random = Math.floor(Math.random() * 3);
    var ok = parse(options[random]);
    return ok;
}

function checkUncheck() {
    if (document.getElementById("check1").checked==true) {
        document.getElementById("check2").innerHTML = document.getElementById("check2").checked==false;
        document.getElementById("check3").innerHTML = document.getElementById("check3").checked==false;
    } else if (document.getElementById("check2").checked==true) {
        document.getElementById("check1").innerHTML = document.getElementById("check1").checked==false;
        document.getElementById("check3").innerHTML = document.getElementById("check3").checked==false;
    } else if (document.getElementById("check3").checked==true) {
        document.getElementById("check1").innerHTML = document.getElementById("check1").checked==false;
        document.getElementById("check2").innerHTML = document.getElementById("check2").checked==false;
    }
}

function enter() {
    var result = randomSign(num);
    if (document.getElementById("check1").checked==true && result=="r") {
        alert("It is a tie.");
    } else if (document.getElementById("check1").checked==true && result=="s") {
        alert("You WON!!!");
    } else if (document.getElementById("check1").checked==true && result=="p") {
        alert("You LOST!!! :( ");
    } else if (document.getElementById("check2").checked==true && result==r) {
        alert("You WON!!!");
    } else if (document.getElementById("check2").checked==true && result==s) {
        alert("You LOST!!! :( ");
    } else if (document.getElementById("check2").checked==true && result==p) {
        alert("It is a tie.");
    }  else if (document.getElementById("check3").checked==true && result==r) {
        alert("You LOST!!! :( ");
    } else if (document.getElementById("check3").checked==true && result==p) {
        alert("You WON!!!");
    } else if (document.getElementById("check3").checked==true && result==s) {
        alert("It is a tie.");
    }

}

